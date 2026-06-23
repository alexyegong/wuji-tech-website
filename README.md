# 无疾科技官网 — wuji-tech-website

广州无疾科技有限公司官方网站。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **样式**: Tailwind CSS v4
- **内容**: Markdown (gray-matter + react-markdown)
- **部署**: Cloudflare Pages (静态导出)

## 本地开发

```bash
npm run dev     # 启动开发服务器 (localhost:3000)
npm run build   # 构建静态导出到 out/
npm run start   # 本地预览构建结果
```

## 部署到 Cloudflare Pages

### 方式一：连接 Git 仓库（推荐）

1. 推送此仓库到 GitHub
2. Cloudflare Dashboard → Pages → 连接 Git
3. 构建设置:
   - 构建命令: `npm run build`
   - 输出目录: `out`
4. 部署完成

### 方式二：Wrangler CLI

```bash
npx wrangler pages deploy out --project-name wuji-tech-website
```

## 域名绑定

在 Cloudflare Pages 项目设置中绑定自定义域名并开启 HTTPS。

## 项目结构

```
src/
├── app/            # 页面 (App Router)
│   ├── page.tsx    # 首页
│   ├── about/      # 关于我们
│   ├── products/   # 产品中心
│   ├── blog/       # 博客
│   └── contact/    # 联系我们
├── components/     # 通用组件
├── content/blog/   # MDX 博文
└── lib/            # 工具函数
```
