---
name: 黄锦 Huang Jin · 个人主页 v2
description: 冷静工程编辑风——暖纸底、墨字、单一朱砂、发丝线分章
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
  headline:
    fontFamily: "Geist, Noto Sans SC, sans-serif"
    fontWeight: 700
    fontSize: "clamp(1.7rem, 3vw, 2.4rem)"
  lead:
    fontFamily: "Geist, Noto Sans SC, sans-serif"
    fontWeight: 400
    fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)"
    lineHeight: 1.7
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
  btn: "12px"
  card: "14px"
  panel: "20px"
  contact: "24px"
spacing:
  section: "clamp(88px, 12vw, 152px)"
  container: "clamp(20px, 5vw, 48px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.btn}"
    padding: "13px 24px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "13px 24px"
  button-invert:
    backgroundColor: "{colors.paper-on-dark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "13px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper-on-dark}"
    rounded: "{rounded.btn}"
    padding: "13px 24px"
---

# Design System: 黄锦 Huang Jin · 个人主页 v2

## Overview

**Creative North Star: "The Calm Engineering Editorial"（冷静工程编辑）**

面向 recruiter、开发者同行与朋友的单页专业主页：recruiter 8 秒内扫完定位、作品与联系。纸感底色上以发丝线分章，Bento 矩阵承载作品证据，深墨面板收束行动。朱砂是唯一强调色，从「锦」字印章延续而来的身份锚点。

**Key Characteristics:**
- 暖纸底（#F7F6F3）+ 白卡面 + 发丝线分区，编辑风的留白与密度
- 单一朱砂强调：链接、主交互、关键点；稀有即分量
- Geist（拉丁）+ Noto Sans SC（中文）+ Geist Mono（年份/标签/度量）
- 动效克制：GSAP 入场淡入 + 作品图滚动缩放淡出；reduced-motion 全降级

## Colors

纸与墨的世界，朱砂只做戳记。

### Primary
- **朱砂 Accent** (#C8402F)：链接、card-link、now-key、hover 边框。hover 深一档 #A33323。任何屏幕占比 ≤10%。
- **墨 Ink** (#17181C)：正文与主按钮底；近黑但有蓝灰底色，不纯黑。

### Neutral
- **纸底 BG** (#F7F6F3) / **卡面 Surface** (#FFFFFF)：双色阶地面。
- **次级 Ink-2** (#5C5F66)：正文次级，对比 5.9:1。**禁用冷灰系**，一律此暖灰。
- **弱级 Ink-3** (#8A8D94)：仅限大号装饰字（marquee 26px）与占位骨架。
- **发丝线 Hairline** (#E6E4DE)：全部分区线与卡片描边。
- **深墨面板 Panel** (#191B20) + **纸色前景** (#F2F1EC)：联系面板的色彩反转章节。

### Named Rules
**The 朱砂唯一 Rule.** 一屏内朱砂只出现在链接与一个主交互上；出现第二处强调色即为设计错误。

## Typography

**Display:** Geist + Noto Sans SC 700；**Body:** 同族 400；**Mono:** Geist Mono（度量专用，不做装饰）

### Hierarchy
- **Display** (700, clamp(3.25rem, 6vw, 5.25rem))：仅 hero 姓名「黄锦」。
- **Headline** (700, clamp(1.7rem, 3vw, 2.4rem))：分区标题。
- **Lead** (400, clamp(1.05rem, 1.6vw, 1.25rem), 1.7)：hero 定位句，≤30em。
- **Body** (400, 16px, 1.7)：正文，≤42em 行长。
- **Mono** (400-500, 11.5-14px)：标签、年份、域名、邮箱——只承载真实度量。

### Named Rules
**The Mono 即度量 Rule.** Geist Mono 只用于真实数据（年份、域名、邮箱、技术标签）；用等宽字扮演"技术感"是禁手。

## Layout

72rem 容器，分区纵向节奏 clamp(88px, 12vw, 152px)。Hero 为 7/5 分栏（Editorial Split），≤1024px 折单列且文字先行。作品区为 6 列 `grid-auto-flow: dense` Bento：主推卡 4列×2行，次卡 2列，三卡行 3+3——数学上零空洞；≤1024px 两列、≤640px 单列。所有触摸目标 ≥44px。

## Elevation & Depth

浅色区以 hairline 描边 + 极淡投影（0 2px 6px 5%）分层，hover 升起至 0 14px 34px 10%；深墨联系面板用径向朱砂辉光（22% 透明度）做氛围，是全页唯一允许的"光晕"。

### Shadow Vocabulary
- **card** (`0 2px 6px rgba(23,24,28,.05)`)：卡片静置。
- **lift** (`0 14px 34px rgba(23,24,28,.10)`)：卡片/按钮 hover。
- **panel-glow** (radial rgba(200,64,47,.22))：联系面板专属。

## Shapes

圆角阶梯：按钮 12 / 卡片 14 / 视觉面板 20 / 联系面板 24。标签为 999px 胶囊。分隔一律 1px 发丝线，不用阴影线或粗边框。

## Components

### Buttons
墨底白字（primary）、白底墨字（ghost）、纸底墨字（invert，深面板内）、透明纸边（outline，深面板内）。统一 12px 圆角、13px×24px 内距、44px 最小高度、右上箭头 SVG。

### 卡片（Bento Card）
白卡面 + 发丝边 + 静置淡投影；hover：上浮 5px、投影加深、边框染朱砂 35%、图片 scale(1.05)、箭头位移动画。媒体带 aspect 21/10，图带灰度滤镜（grayscale .5）保持编辑感。标签行：Mono 胶囊。

### 导航
固定顶栏，滚动 24px 后加毛玻璃纸底 + 发丝下边线。左品牌（朱砂方点 + 姓名），右锚点链接 + GitHub 图标；链接触摸区 ≥44px。

### 时间线 / 现在区
行式结构：Mono 年份列（88px）+ 内容卡；占位条目用虚线边框 + 弱色文字，明确"待补"而不伪装完成。

### 无限滚带（Marquee）
发丝线上下夹住的大号技术词滚带（26px, Ink-3），朱砂圆点分隔；30s 线性循环，reduced-motion 静止。

## Do's and Don'ts

### Do:
- **Do** 新区块沿用 72rem 容器 + clamp 纵向节奏 + 发丝线分区。
- **Do** 占位内容用虚线骨架 + 「待补」明示，保持诚实。
- **Do** 真实数据（项目、年份、链接）放 Mono 胶囊或 now 行。

### Don't:
- **Don't** 引入第二强调色或渐变文字；朱砂之外只有墨阶。
- **Don't** 用 emoji/字符图标；箭头一律 `#arrow` 形状的描边 SVG。
- **Don't** 在浅色区使用冷灰（#888/#999 系），次级文字只用 #5C5F66。
- **Don't** 添加装饰彩蛋、隐喻包装（旧皮影世界已退役）。
- **Don't** 编造经历、评价或数据；未确认信息一律占位标注。
