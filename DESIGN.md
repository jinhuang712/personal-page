---
name: 黄锦 Huang Jin · 个人主页 v2
description: 极简双语专业身份页——暖纸、墨字、朱砂、项目清单
colors:
  bg: "#F7F6F3"
  surface: "#FFFFFF"
  ink: "#17181C"
  ink-2: "#5C5F66"
  ink-3: "#8A8D94"
  hairline: "#E6E4DE"
  accent: "#C8402F"
  accent-deep: "#A33323"
  panel: "#191B20"
  paper-on-dark: "#F2F1EC"
typography:
  display:
    fontFamily: "Geist, Noto Sans SC, PingFang SC, sans-serif"
    fontWeight: 700
    fontSize: "clamp(3.25rem, 6vw, 5.25rem)"
    letterSpacing: "0.04em"
    lineHeight: 1.02
  body:
    fontFamily: "Geist, Noto Sans SC, PingFang SC, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: 1.7
  mono:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, monospace"
    fontWeight: 400
    fontSize: "12px-14px"
rounded:
  button: "12px"
  contact: "20px"
spacing:
  section: "clamp(76px, 10vw, 128px)"
  container: "clamp(20px, 5vw, 48px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "13px 24px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "13px 24px"
  button-invert:
    backgroundColor: "{colors.paper-on-dark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "13px 24px"
---

# Design System: 黄锦 Huang Jin · 个人主页 v2

## Overview

**Creative North Star: "The Minimal Professional Index"（极简专业索引）**

这是身份页，不是营销页。页面只回答四个问题：你是谁、做什么、做过什么、如何联系。技术关键词带提供密度，项目清单提供证据；任何不能回答这四个问题的图片、卡片、占位或动效都不出现。

**Key Characteristics:**
- 暖纸底、墨字、1px 发丝线、单一朱砂链接色
- 文字优先 Hero，只有 GitHub、LinkedIn 和邮箱三种主联系入口
- 无图片、无 Bento、无项目卡片、无空履历
- CN / EN 切换，浏览器语言默认、手动选择持久化

## Colors

### Primary
- **朱砂 Accent** (#C8402F)：链接、项目 GitHub 入口、关键词圆点。仅此一色强调。
- **墨 Ink** (#17181C)：姓名、标题、深色主按钮。

### Neutral
- **纸底** (#F7F6F3)：全页地面。
- **白面** (#FFFFFF)：仅 Ghost 按钮使用，不做卡片。
- **次级正文** (#5C5F66)：所有说明文字。
- **弱级文字** (#8A8D94)：项目 meta、技术带。
- **发丝线** (#E6E4DE)：导航、关键词带、项目行分隔。
- **深墨面板** (#191B20) / **纸色前景** (#F2F1EC)：联系区色彩反转。

### Named Rules
**The One Accent Rule.** 朱砂只承担链接与分隔点；没有第二强调色，也没有渐变文字。

## Typography

**Display / Body:** Geist + Noto Sans SC；**Measurement:** Geist Mono。

- **Display** (700, clamp(3.25rem, 6vw, 5.25rem))：仅姓名。
- **Body** (400, 16px, 1.7)：简介和项目描述。
- **Mono** (12-14px)：项目技术 meta、邮箱、语言切换。

**The Mono Is Metadata Rule.** 等宽字只呈现技术分类或联系数据，不制造虚假的技术氛围。

## Layout

容器宽度 72rem，横向内距 clamp(20px, 5vw, 48px)。首屏内容最大 54rem，信息按姓名 → 简介 → 按钮 → 邮箱排列。技术关键词带之后直接进入项目清单。

项目按生态分为五组（应用与扩展 / Claude Code / Pi 扩展 / DeepSeek Harness 插件 / 其他），每组一个 Mono 小标题和一个多列网格：桌面 3 列、平板 2 列、手机 1 列；每格纵向排列项目身份 / 描述 / 链接，仅以顶部与底部发丝线分隔，无卡片边框。精选公开项目按仓库体量和最近代码推送综合排序；有真实产品标识时，以名称左侧 25px 小图标标示生态归属。每行由 1px 发丝线分开，不使用卡片容器。移动端起点 360px，页面禁止横向溢出。

## Elevation & Depth

页面默认无阴影。深度只来自联系区的墨色反转、按钮描边和固定导航的毛玻璃背景；项目行没有浮起、缩放或阴影状态。

## Shapes

按钮圆角 12px，联系面板圆角 20px；所有其他内容保持直线与发丝边。关键词圆点为唯一圆形装饰。

## Components

### Navigation and Language Switch
固定顶栏：品牌、项目、联系、CN / EN、GitHub。语言按钮最小高度 44px；选择状态只改变文字颜色。首次按浏览器语言选择，手动选择写入 `hj-locale` localStorage。

### Project Index
项目条目（网格单元）：项目名（链接到 GitHub）与 Mono meta 在上、说明居中、链接组在底部对齐。有独立站点的项目显示朱砂「网站」链接 + 次级色 GitHub 链接；没有站点的只显示朱砂 GitHub 链接。移动端链接组横排在描述下方。hover 只改颜色与下划线，不位移、不缩放。

### Keyword Marquee
16 个真实技术关键词，两份等长序列保证无缝循环。48 秒线性滚动；`prefers-reduced-motion` 时静止。

### Buttons
Hero：深墨 GitHub 主按钮 + 白底 LinkedIn 次按钮。联系区：纸底邮件按钮。所有按钮最小高度 44px，焦点状态为 2px Accent outline。

## Do's and Don'ts

### Do:
- **Do** 只展示真实、可验证的项目和联系信息。
- **Do** 为每一条可翻译的可见文案同时维护 CN 与 EN。
- **Do** 用项目清单而不是卡片展示工程工作。

### Don't:
- **Don't** 添加随机图片、作品大图、Bento、轮播或项目卡片。
- **Don't** 展示空履历、待补教育或虚构推荐语。
- **Don't** 用 slogan 替代普通自我介绍。
- **Don't** 引入第二强调色、渐变字或无信息的装饰框。
