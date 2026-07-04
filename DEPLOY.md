# 无疾科技官网部署指南

## 项目信息

- **项目**: 无疾科技官网 (wuji-tech-website)
- **技术栈**: Next.js 16 (静态导出) + Tailwind CSS v4
- **目标平台**: Cloudflare Pages
- **域名**: wjkj-prys.com
- **构建产物**: `out/` 目录 (1.7MB)

---

## 方案 A：Cloudflare Pages Direct Upload（推荐，最快）

无需 GitHub，直接从本地上传 `out/` 文件夹。

### 步骤 1：登录 Cloudflare

1. 打开 https://dash.cloudflare.com 并登录你的 Cloudflare 账号
2. 在左侧导航栏选择 **Workers & Pages** → **Overview** → **Create application**

### 步骤 2：创建 Pages 项目

1. 选择 **Pages** → **Direct Upload** → **Create Pages**
2. 填写项目名称：`wuji-tech-website`
3. 设置团队（Team）：选择你的 Cloudflare 团队
4. 点击 **Deploy**

### 步骤 3：上传构建产物

1. 在上传界面，将 `~/桌面/Projects/wuji-tech-website/out/` 整个文件夹拖入上传区域
2. 等待上传完成（约 1.7MB，通常几秒内完成）
3. 点击 **Save and Deploy**

### 步骤 4：验证部署

1. 部署完成后，你会获得一个临时 URL，形如：
   ```
   https://wuji-tech-website.pages.dev
   ```
2. 打开浏览器访问该 URL，确认网站正常运行
3. 检查所有页面：首页、关于、产品、博客（含文章）、联系

---

## 方案 B：通过 GitHub 仓库自动部署

如果你希望通过 GitHub 仓库实现自动化 CI/CD 部署。

### 步骤 1：在 GitHub 创建仓库

1. 打开 https://github.com/new
2. 仓库名称：`wuji-tech-website`
3. 所有者：`alexyegong`
4. 设置为 **Public**
5. **不要**勾选 Initialize this repository with a README
6. 点击 **Create repository**

### 步骤 2：配置 Git 远程并推送

在你的本地项目目录执行：

```bash
cd ~/桌面/Projects/wuji-tech-website

# 添加远程仓库（替换为你的 GitHub 用户名）
git remote add origin git@github.com:alexyegong/wuji-tech-website.git

# 确保在正确的分支
git branch -M main

# 推送到 GitHub
git push -u origin main
```

> 如果遇到 SSH 连接问题，可以使用 HTTPS 方式：
> ```bash
> git remote add origin https://github.com/alexyegong/wuji-tech-website.git
> git branch -M main
> git push -u origin main
> ```
> 此时会提示输入 GitHub 用户名和个人访问令牌（PAT）。

### 步骤 3：连接 Cloudflare Pages

1. 登录 Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Connect to Git**
2. 选择 **GitHub**，授权 Cloudflare 访问你的 GitHub 账号
3. 选择仓库 `alexyegong/wuji-tech-website`
4. 点击 **Begin setup**

### 步骤 4：配置构建设置

在设置页面中配置：

| 配置项 | 值 |
|--------|-----|
| Project name | `wuji-tech-website` |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Framework preset | **Next.js**（选择后 Cloudflare 会自动识别其余配置） |

其余保持默认，点击 **Save and Deploy**。

### 步骤 5：验证自动部署

1. 部署完成后，访问临时 URL 验证网站
2. 之后每次推送到 `main` 分支，Cloudflare 会自动重新构建和部署

---

## 步骤 5：绑定自定义域名（两种方案通用）

### 在 Cloudflare 中添加域名

1. 登录 https://dash.cloudflare.com
2. 点击 **Add a Site**（如果域名尚未添加到 Cloudflare）
3. 输入域名 `wjkj-prys.com`，选择 **Free** 计划（或其他合适计划）
4. 点击 **Continue**
5. Cloudflare 会显示需要更改的 Nameservers
6. 到你的域名注册商处（如阿里云/腾讯云/Godaddy）将 Nameservers 改为 Cloudflare 提供的两个地址

### 绑定域名到 Pages 项目

1. 进入 Cloudflare Dashboard → **Workers & Pages** → 选择你的 Pages 项目 `wuji-tech-website`
2. 点击 **Custom domains** 标签
3. 点击 **Set up a custom domain**
4. 输入 `wjkj-prys.com`
5. 点击 **Continue**，Cloudflare 会自动检测并配置 DNS 记录
6. 点击 **Activate domain**

### 验证域名解析

1. 等待 DNS 传播（通常几分钟内生效）
2. 访问 https://wjkj-prys.com 确认网站正常加载
3. 也可在终端运行 `curl -I https://wjkj-prys.com` 检查响应

---

## 部署清单

- [ ] 完成部署（Direct Upload 或 GitHub 自动部署）
- [ ] 验证首页 https://wuji-tech-website.pages.dev 可访问
- [ ] 验证所有子页面：/about, /products, /blog, /blog/hello-digital-tcm, /blog/tcm-philosophy, /contact
- [ ] 添加域名 wjkj-prys.com 到 Cloudflare
- [ ] 修改域名注册商的 Nameservers 为 Cloudflare 提供
- [ ] 在 Pages 项目中绑定自定义域名 wjkj-prys.com
- [ ] 验证 https://wjkj-prys.com 可正常访问
- [ ] 配置 SSL（Cloudflare 通常自动启用，确认显示为 Full/Full(strict)）

---

## 常见问题

### Q: 上传后页面 404？
A: 确认上传的是 `out/` 文件夹内的内容，而不是 `out/` 文件夹本身。

### Q: 样式丢失？
A: 确认 Framework preset 选择了 Next.js，且 Build output directory 正确设置为 `out`。

### Q: 博客文章打不开？
A: Next.js 静态导出会生成对应的 HTML 文件和目录，确认 `out/blog/` 目录下有对应的 `.html` 文件。

### Q: DNS 传播很慢？
A: 通常 5-30 分钟生效，最长可能需要 24 小时。可用 `dig wjkj-prys.com` 检查当前解析状态。

### Q: 如何回滚版本？
A: 
- Direct Upload：在 Pages 项目的 Deployments 列表中点击之前的部署 → **Retry Deployment**
- GitHub 方式：`git revert <commit>` 然后 `git push`
