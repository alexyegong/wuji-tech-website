#!/bin/bash
# 无疾科技官网部署脚本 v2 — wrangler 直连 Cloudflare (2026-08-13 重写)
# 之前版本依赖 git push → Cloudflare GitHub Integration 自动构建,
# 但 Integration 未配置导致 push 后永远 404。改为 wrangler 直连部署。
#
# 用法:
#   bash deploy-wuji.sh "提交描述"     # 构建+推送+部署+验证 (全流程)
#   bash deploy-wuji.sh --deploy-only  # 仅部署当前 out/ (跳过构建/git)
#   bash deploy-wuji.sh --build-only   # 仅构建 out/
#
# 凭据: ~/.config/.wrangler/config/env.toml (api_token + account_id)

set -euo pipefail

PROJECT_DIR="$HOME/桌面/Projects/wuji-tech-website"
DOMAIN="wjkj-prys.com"
BLOG_URL="https://$DOMAIN/blog"
CF_TOKEN_FILE="$HOME/.config/.wrangler/config/env.toml"
MAX_RETRIES=6
RETRY_INTERVAL=20

cd "$PROJECT_DIR"

GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; CYAN='\033[0;36m'; NC='\033[0m'
log()  { echo -e "${GREEN}[$(date '+%H:%M:%S')]${NC} $*"; }
warn() { echo -e "${YELLOW}[$(date '+%H:%M:%S')] WARN:${NC} $*"; }
err()  { echo -e "${RED}[$(date '+%H:%M:%S')] ERROR:${NC} $*"; }

# 读取 Cloudflare token (从 env.toml)
get_cf_token() {
  if [ -f "$CF_TOKEN_FILE" ]; then
    grep '^api_token' "$CF_TOKEN_FILE" | sed 's/.*= *"\(.*\)"/\1/'
  else
    echo ""
  fi
}

MODE="full"; MSG=""
case "${1:-}" in
  --deploy-only|--build-only) MODE="$1" ;;
  "") ;;
  *) MSG="$1" ;;   # 只给描述时仍走全流程，描述作为 commit message
esac

CF_TOKEN=$(get_cf_token)
if [ -z "$CF_TOKEN" ]; then
  err "未找到 Cloudflare API token: $CF_TOKEN_FILE"
  err "请确认文件含: api_token = \"...\""
  exit 1
fi

# ── 构建 (除非 --deploy-only) ──
build() {
  log "=== 构建 out/ ==="
  if ! timeout 180 npm run build 2>&1 | tail -5; then
    err "构建失败"
    exit 1
  fi
  if ! ls out/blog/article-1*.html >/dev/null 2>&1; then
    warn "out/blog 中未检测到文章, 构建可能不完整"
  fi
  log "✅ 构建完成"
}

# ── 部署 (wrangler 直连) ──
deploy() {
  log "=== wrangler 部署到 Cloudflare Pages ==="
  DEPLOY_OUT=$(CLOUDFLARE_API_TOKEN="$CF_TOKEN" timeout 300 npx wrangler pages deploy out --project-name=wuji-tech-website 2>&1)
  echo "$DEPLOY_OUT" | grep -E 'Success|Deploying|complete|https://|ERROR|error' | head -8
  PREVIEW_URL=$(echo "$DEPLOY_OUT" | grep -oE 'https://[a-z0-9]+\.wuji-tech-website\.pages\.dev' | head -1 || true)
  echo "$PREVIEW_URL" > /tmp/last-deploy-url.txt
  if [ -z "$PREVIEW_URL" ]; then
    err "部署未返回 preview URL, 部署可能失败"
    return 1
  fi
  log "✅ 部署完成: $PREVIEW_URL"
}

# ── git 推送 (除非 --deploy-only) ──
git_push() {
  log "=== git 提交+推送 ==="
  git add -A
  if git diff --cached --quiet; then
    log "无代码更改，跳过提交"
  else
    MSG="${1:-$(date +%Y-%m-%d) 自动部署}"
    git commit -m "$MSG"
    if ! git push origin main 2>&1; then
      warn "推送失败(不影响 wrangler 部署)"
    else
      log "✅ 已推送 GitHub"
    fi
  fi
}

# ── 验证 (多轮) ──
verify() {
  log "=== 验证线上文章 ==="
  for i in $(seq 1 $MAX_RETRIES); do
    sleep $RETRY_INTERVAL
    HTTP=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 --max-time 30 "$BLOG_URL" 2>/dev/null || echo "000")
    if [ "$HTTP" = "200" ]; then
      CNT=$(curl -s "$BLOG_URL" 2>/dev/null | grep -c "article-" || echo "0")
      log "验证第 $i/$MAX_RETRIES: HTTP 200, 检测到 $CNT 篇文章 ✅"
      return 0
    fi
    warn "验证第 $i/$MAX_RETRIES: HTTP $HTTP"
  done
  err "验证失败: $BLOG_URL 未返回 200"
  return 1
}

case "$MODE" in
  --deploy-only)
    build
    deploy || { err "部署失败，终止"; exit 1; }
    verify || exit 1
    ;;
  --build-only)
    build
    ;;
  full|*)
    build
    git_push "$MSG"
    deploy || { err "部署失败，终止"; exit 1; }
    verify || exit 1
    ;;
esac

echo ""
echo "============================================"
echo " 部署流程完成 → $DOMAIN"
echo "============================================"