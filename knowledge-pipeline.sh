#!/bin/bash
# 知识生产编排脚本 - 从认知输入到多平台发布
# 用法: knowledge-pipeline <主题> <方向>
# 方向: blog(官网博客) | zhihu(知乎) | both(两者)

TOPIC="${1:-}"
DIRECTION="${2:-both}"
KB_DIR="$HOME/桌面/knowledge"
BLOG_SRC="$HOME/桌面/Projects/wuji-tech-website/src/content/blog"
BLOG_IMG="$HOME/桌面/Projects/wuji-tech-website/public/images/blog"

if [ -z "$TOPIC" ]; then
    echo "用法: knowledge-pipeline <主题> [方向]"
    echo ""
    echo "方向: blog(官网博客) | zhihu(知乎) | both(两者)"
    echo ""
    echo "示例:"
    echo "  knowledge-pipeline \"血糖与认知衰退\" blog"
    echo "  knowledge-pipeline \"胰岛素抵抗与中医肾精\" both"
    exit 0
fi

echo "============================================"
echo "知识生产流水线 v1.0"
echo "主题: $TOPIC"
echo "方向: $DIRECTION"
echo "时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo "============================================"
echo ""

# Step 1: 知识库检索
echo "=== Step 1: 知识库检索 ==="
echo "从理论库中检索与'$TOPIC'相关的内容..."
for f in "$KB_DIR"/*核心理论*.md; do
    if [ -f "$f" ]; then
        NAME=$(basename "$f")
        MATCHES=$(grep -c "$TOPIC" "$f" 2>/dev/null)
        MATCHES=${MATCHES:-0}
        if [ "$MATCHES" -gt 0 ] 2>/dev/null; then
            echo "  ✅ $NAME - $MATCHES 处匹配"
        fi
    fi
done
echo ""

# Step 2: 生成文章草稿
echo "=== Step 2: 生成文章 ==="
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
SLUG=$(echo "$TOPIC" | tr ' ' '-' | sed 's/[[:punct:]]//g' | tr '[:upper:]' '[:lower:]' | head -c 60)

OPENCODE_DELEGATE="$HOME/桌面/脚本/opencode-delegate.sh"
DRAFT_DIR="$HOME/桌面/知识生产草稿"
mkdir -p "$DRAFT_DIR"
DRAFT_FILE="$DRAFT_DIR/${TIMESTAMP}_${SLUG}.md"

if [ "$DIRECTION" = "blog" ] || [ "$DIRECTION" = "both" ]; then
    echo "  目标: $BLOG_SRC/article-${SLUG}.mdx"
fi

if [ "$DIRECTION" = "zhihu" ] || [ "$DIRECTION" = "both" ]; then
    echo "  目标: ~/桌面/知乎文章/"
fi

echo ""
echo "  --- 语义检索增强 (2026-08-13): 从记忆/知识库/图谱拉取主题素材 ---"
SEMANTIC_FILE="$DRAFT_DIR/${TIMESTAMP}_${SLUG}_素材.md"
if [ -x "$HOME/桌面/脚本/agent-recall.sh" ]; then
    if bash "$HOME/桌面/脚本/agent-recall.sh" "$TOPIC" --top 6 --json > "$SEMANTIC_FILE" 2>/dev/null; then
        :
    else
        bash "$HOME/桌面/脚本/agent-recall.sh" "$TOPIC" --top 6 > "$SEMANTIC_FILE" 2>/dev/null || true
    fi
    if [ -s "$SEMANTIC_FILE" ]; then
        N_HITS=$(wc -l < "$SEMANTIC_FILE")
        echo "  ✅ 语义检索: 已拉取 $N_HITS 行理论锚点素材 → $SEMANTIC_FILE"
    else
        echo "  ⚠️ 语义检索无结果, 用 grep 检索作素材"
    fi
else
    echo "  ⚠️ 缺少 agent-recall.sh, 跳过语义检索"
fi
echo ""

if [ -x "$OPENCODE_DELEGATE" ]; then
    echo "  生成入口: $OPENCODE_DELEGATE"
    echo "  草稿输出: $DRAFT_FILE"
    # 语义素材作为理论锚点注入 prompt
    KB_CONTEXT=""
    if [ -s "$SEMANTIC_FILE" ]; then
        KB_CONTEXT="
以下是从记忆/知识库/图谱检索到的主题素材（含理论锚点·对比表·文献引用），写作时请基于这些素材展开，不要凭空编造:
$(grep -E 'content|title' "$SEMANTIC_FILE" 2>/dev/null | head -30)"
    fi
    PROMPT="请围绕主题『$TOPIC』写一篇中文科普/技术文章草稿（Markdown）。要求：1) 结构清晰 2) 基于给定素材展开理论要点 3) 至少引用1本理论书核心观点 4) 含行动清单 5) 结尾给行动建议。输出仅文章正文。${KB_CONTEXT}"
    if bash "$OPENCODE_DELEGATE" --title "kb-${SLUG}" --timeout 600 "$PROMPT" > "$DRAFT_FILE" 2>"$DRAFT_DIR/${TIMESTAMP}_${SLUG}.log"; then
        echo "  状态: ✅ OpenCode CLI 已生成草稿"
    else
        echo "  状态: ⚠️ OpenCode 生成失败，见 $DRAFT_DIR/${TIMESTAMP}_${SLUG}.log"
    fi
else
    echo "  状态: ⚠️ 缺少 opencode-delegate.sh，无法自动生成"
fi
echo ""

# Step 3: 部署
if [ "$DIRECTION" = "blog" ] || [ "$DIRECTION" = "both" ]; then
    echo "=== Step 3: 部署到官网 ==="
    # 2026-08-13: 调用 deploy-wuji.sh 一键部署 (构建+git+wrangler+验证)
    echo "  调用 deploy-wuji.sh 执行构建+推送+Cloudflare部署..."
    if bash "$HOME/桌面/脚本/deploy-wuji.sh" "知识流水线发布：$TOPIC" 2>&1 | tail -6; then
        echo "  ✅ 部署完成 → https://wjkj-prys.com"
    else
        echo "  ⚠️ 部署失败，请查看上方日志"
    fi
fi

echo ""
echo "============================================"
echo "流水线完成。下一步需要AI agent生成内容。"
echo "============================================"
