# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated（用户授权）：纯静态 HTML/CSS/JS + GSAP（CDN），无构建步骤，部署于 GitHub Pages（jinhuang712/personal-page）。域名 huangjin.online（火山引擎注册，云解析 DNS）。

## Users

- **Recruiter / HR（关键受众）**：平均停留 8 秒，需要快速获取——身份定位、技能面、作品证据、联系方式、简历入口。
- **Random 开发者**：被开源项目引来的同行，关心项目质量、技术栈、代码链接。
- **朋友（含非开发者）**：确认"这是你的地方"，找到联系方式。
- **现在/未来的同事**：了解工作之外的开源面，顺手联系。

## Product Purpose

黄锦的专业个人主页：单页滚动，recruiter 8 秒内可扫读完定位/作品/联系；朋友和非开发者也能轻松阅读。成功标准：recruiter 愿意点进 GitHub 并发邮件；开发者愿意 star 项目。

## Positioning

专业工程身份站。机制：以真实开源作品（不是隐喻包装）证明"构建 AI 工具链与 Agent 基础设施"的定位。视觉签名克制：朱砂色与锦字印章作为唯一身份延续元素。

## Operating Context

- 部署链路已跑通：git push → GitHub Pages → huangjin.online（HTTPS 证书自动签发中）。
- 内容更新频率低；无 CMS，直接改代码。
- **用户明确要求：去掉戏台彩蛋等一切"花里胡哨"装饰；移动端与桌面端渲染质量都必须合格。**

## Capabilities and Constraints

- 纯静态；联系走 mailto 与 GitHub。
- 单页滚动 + 锚点导航；移动端 360px 起必须无横向溢出、无布局抖动。
- 动效走 GSAP（hover 物理 + 图片滚动缩放淡出），`prefers-reduced-motion` 全量降级。
- 真实性红线：经历/教育/评价等未确认信息一律以明确标注的占位呈现，绝不编造。

## Brand Commitments

- 名称：黄锦 / Huang Jin（页面公开）。
- 域名 huangjin.online 是身份的一部分。
- 朱砂色 + 「锦」印章 favicon 是跨版本的唯一视觉延续。

## Evidence on Hand

- 姓名：黄锦（Huang Jin）、邮箱 huangjin712@qq.com、GitHub @jinhuang712 —— 已验证。
- 真实开源项目（描述取自其仓库 README）：gotato（Go Agent 运行时）、jsonita（macOS JSON 工具箱）、pi-view（Pi 视觉扩展）、ant-agent（子代理蜂群）、smart-cutout（Swift 抠图）。
- 技术栈（从仓库统计）：Go、TypeScript、Swift、Python、Shell、macOS。
- **未知/待确认（不得编造）**：职业定位一句话的正式表述、公司经历、教育经历、简历 PDF、真实评价引言、双语需求。

## Product Principles

1. 扫读优先：recruiter 8 秒测试是第一验收标准。
2. 真实优先：占位标注优于编造；作品描述直白专业。
3. 两端合格：360px~4K 真机级验证，不是"缩放了事"。
4. 克制用色：暖纸底 + 墨字 + 单一朱砂强调；无装饰彩蛋。
