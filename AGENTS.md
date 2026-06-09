<!-- agents-md-autosync:BEGIN (auto-managed) -->
<!-- agents-md-autosync: schema=v1; last_synced_commit=15628f6502531bc7605b319bc80eec3b7892070e; last_synced_at=2026-05-04; -->
# Project Snapshot

- 这是一个基于 Vue 3 + Vite 的个人博客仓库，源码主要位于 `blog/`，仓库根目录保存构建产物。
- 主要技术栈：Vue 3、Vue Router、Pinia、Tailwind CSS v4、DaisyUI、Vite。
- Node 版本要求来自 `blog/package.json`：`^20.19.0 || >=22.12.0`。
- 关键目录：
  - `blog/src`：前端源码。
  - `blog/src/views/blogs`：博客页面组件，按 `yyyyMM/blogName` 组织。
  - `blog/src/components/blogs`：单篇文章可复用组件，按 `yyyyMM/blogName` 组织。
  - `blog/src/assets/blogs`：文章素材资源，按 `yyyyMM/blogName` 组织。
  - `blog/public`：Vite 静态资源。
  - `blog/server`：独立 Node 子目录，目前只有最小 `package.json` 占位。
  - `assets/` 与仓库根 `index.html`：构建输出，不是主开发入口。

# Quick Commands

- 安装依赖：`cd blog; npm install`
- 本地开发：`cd blog; npm run dev`
- 生产构建：`cd blog; npm run build`
- 本地预览：`cd blog; npm run preview`
- 测试：当前仓库未配置可用的根测试命令；`blog/server/package.json` 中的 `npm test` 是占位失败脚本。
- lint / format / typecheck：当前未发现已配置的顶层脚本，变更后至少跑一次 `cd blog; npm run build` 做最小验证。

# Repo Structure

- 前端入口是 `blog/src/main.js`，路由定义在 `blog/src/router/index.js`。
- `blog/vite.config.js` 设置了 `base: '/Blog/'`，构建输出到仓库根目录，并在构建开始时清理根 `assets/`。
- 不要把仓库根 `index.html` 或 `assets/*` 当作源码直接修改；常规改动应落在 `blog/src/**`。

# Blog Authoring Rules

- `blog/.agent/rules/blog.md` 是 always-on 文章生成规则，新增或修改博客时必须一并遵循。
- 本项目是 Vue 3 项目；样式使用 Tailwind CSS，UI 优先使用 DaisyUI。
- 生成前端页面时，优先考虑 DaisyUI 组件；尽量把直接操作封装进组件。
- 文章素材放在 `blog/src/assets/blogs/${yyyyMM}/${blogName}`。
- 文章主页面放在 `blog/src/views/blogs/${yyyyMM}/${blogName}`。
- 单篇文章内部复用组件放在 `blog/src/components/blogs/${yyyyMM}/${blogName}`。

# Coding & Change Rules

- 修改前先用 `rg`、读取配置和相关源码确认真实入口，不要凭目录名猜测。
- 新增依赖前先征得用户确认；优先复用 Vue、Pinia、Tailwind、DaisyUI 现有能力。
- 使用 PowerShell，不要切换到 `cmd`。
- 默认编码为 UTF-8。
- 前端页面优先复用 DaisyUI 组件，并尽量把直接操作封装进组件。
- 涉及构建输出或发布结果的修改后，至少执行 `cd blog; npm run build`；如果只改路由或页面，也至少确认对应入口和资源路径未破坏 `/Blog/` 基路径。
- 不要在文档、日志或提交内容里写入 `.env`、令牌、密钥等敏感信息。

# Where to Look

- `blog/package.json`：前端依赖、Node 版本要求、脚本入口。
- `blog/vite.config.js`：构建输出位置、别名、静态资源清理逻辑。
- `blog/src/router/index.js`：站点路由和文章页面注册位置。
- `blog/.agent/rules/blog.md`：文章目录约定和页面生成偏好。
- `blog/src/views`、`blog/src/components`、`blog/src/assets`：页面、组件、素材的核心位置。

# Self-maintenance

- 若检测到自上次同步以来发生重要更新（工具链、命令、目录结构、CI、依赖），优先运行 `agents-md-autosync` 更新本文件，再继续执行具体任务。
<!-- agents-md-autosync:END (auto-managed) -->

<!-- MANUAL:BEGIN -->
<!-- 在这里补充长期有效、且不希望被自动同步覆盖的项目约定。 -->
<!-- MANUAL:END -->
