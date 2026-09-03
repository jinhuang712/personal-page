# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated（用户授权）：纯静态 HTML/CSS/JavaScript，无构建步骤，部署于 GitHub Pages（jinhuang712/personal-page）。域名 huangjin.online（火山引擎注册，云解析 DNS）。

## Users

- **Recruiter / HR**：在数秒内确认身份、项目证据与联系入口。
- **开发者同行**：查看项目说明、技术栈与 GitHub 源码。
- **朋友、同事**：快速找到本人、项目和联系方式。

## Product Purpose

黄锦的双语专业个人主页。它是一个清晰的身份页，而不是作品秀场：姓名和普通自我介绍在首屏，真实开源项目以列表呈现，GitHub、LinkedIn 与邮箱提供明确联系入口。

## Positioning

专业工程身份站。以真实、可点击的开源项目证明 AI 工具与 Agent 相关的工程实践；不使用隐喻包装、随机图片或虚构的履历/评价。

## Operating Context

- `git push` → GitHub Pages → huangjin.online。
- 页面支持 **中文 / English**：首次根据浏览器语言选择，手动选择后以 localStorage 记住。
- 内容更新频率低；无需 CMS，直接改静态文件。

## Capabilities and Constraints

- 纯静态；联系走 mailto、GitHub、LinkedIn。
- 有独立站点的项目在清单中附「网站」链接，指向 `project.huangjin.online/<项目名>/`（由 jinhuang712/projects 仓库聚合各项目的 Pages 内容统一部署）。
- 单页锚点导航：Hero → 技术关键词带 → 项目清单 → 联系。
- 项目清单展示 13 个精选公开项目；Fork 与明确不对外展示的仓库不列出，项目按仓库体量与最近代码推送时间综合排序。
- 移动端 360px 起必须无横向溢出；桌面端和移动端均经过截图及 DOM 几何验证。
- 未确认的经历、教育、简历、推荐语一律不显示，绝不以占位或虚构内容上线。

## Brand Commitments

- 名称：黄锦 / Huang Jin。
- 域名：huangjin.online。
- 朱砂色作为唯一强调色；「锦」印章仅保留为 favicon。

## Evidence on Hand

- 姓名：黄锦（Huang Jin）、邮箱 huangjin712@qq.com、GitHub @jinhuang712、LinkedIn linkedin.com/in/jinhuang712 —— 已验证。
- 仓库清单：展示 13 个精选公开项目；涵盖 Jsonita、Pi 扩展、DeepSeek Harness、Claude Code、Codex 与 Pivi 相关工具。
- 技术关键词：Go、TypeScript、Swift、Python、Shell、macOS、AI Agents、Agent Runtime、Developer Tools、CLI、Extensions、Automation、Open Source、Developer Experience、Code Intelligence、Tooling。

## Product Principles

1. 真实优先：没有真实内容就不展示。
2. 扫读优先：项目是清单，不是营销卡片。
3. 双语明确：只维护 CN / EN 两种语言，切换可见且持久。
4. 两端合格：信息顺序和可点击性在桌面、移动端都一致。
