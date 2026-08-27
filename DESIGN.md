---
name: 皮影戏台 · huangjin.online
description: 黄锦的个人主页——一座夜堂里被灯点亮的皮影戏台
colors:
  room: "#171008"
  room-2: "#251a0c"
  wood: "#3a2a18"
  wood-hi: "#54391d"
  silk: "#f0e4c8"
  silk-hi: "#fbf3dd"
  silk-lo: "#ddc9a0"
  ink: "#241a10"
  ink-2: "#45351f"
  ink-soft: "#6b5335"
  seal: "#bf3524"
  seal-hi: "#d94a30"
  amber: "#e8a33d"
  bamboo: "#7a5c35"
  cream: "#e9dcb8"
  cream-dim: "#b9a87f"
typography:
  display:
    fontFamily: "'Noto Serif SC', 'Songti SC', 'STSong', serif"
    fontWeight: 900
    fontSize: "clamp(56px, 11vh, 104px)"
    letterSpacing: "0.18em"
    lineHeight: 1
  headline:
    fontFamily: "'Noto Serif SC', 'Songti SC', serif"
    fontWeight: 900
    fontSize: "clamp(24px, 4.6vh, 38px)"
    letterSpacing: "0.06em"
  lead:
    fontFamily: "'Noto Serif SC', serif"
    fontWeight: 600
    fontSize: "clamp(22px, 4.4vh, 40px)"
    lineHeight: 1.4
  body:
    fontFamily: "'Noto Serif SC', serif"
    fontWeight: 500
    fontSize: "clamp(14px, 2.1vh, 17px)"
    lineHeight: 1.9
  stage-direction:
    fontFamily: "'Kaiti SC', 'STKaiti', 'KaiTi', 'Noto Serif SC', serif"
    fontWeight: 500
    fontSize: "clamp(13px, 2vh, 16px)"
    letterSpacing: "0.08em"
rounded:
  sm: "3px"
  md: "4px"
  screen: "10px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "22px"
  lg: "clamp(24px, 6%, 84px)"
components:
  button-seal:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.silk-hi}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
  act-tag-active:
    backgroundColor: "{colors.silk-hi}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  act-tag-idle:
    backgroundColor: "#45311790"
    textColor: "{colors.cream-dim}"
    rounded: "{rounded.sm}"
---

# Design System: 皮影戏台 · huangjin.online

## Overview

**Creative North Star: "一堂被灯点亮的皮影戏"**

整个系统是一座戏台：页面地面是深夜的堂屋，中央一方被灯光从背后打亮的米色绢幕承载全部内容，墨色皮影人偶以竹签操纵、随访客光标起舞。朱砂红是唯一的强调色，只在印、绦带、主按钮、活动幕牌上出现——它的稀有就是它的分量。所有文案使用戏团体例：标题是幕名，说明是舞台指示（圆括号楷体）。

**Key Characteristics:**
- 内容永远住在发光的绢幕上，夜堂只做包裹与留白
- 皮影是可动资产（SVG 关节 + CSS 变量驱动），不是插图
- 中文竖排在桌面端承担展示层；移动端全部转为横排文档流

## Colors

色板来自夜堂的物质世界：木、绢、墨、朱砂、灯。

### Primary
- **朱砂 Seal** (#bf3524)：印、绦带、主按钮、活动指示。hover 提亮为 #d94a30。全场 ≤10% 面积。
- **绢 Silk** (#f0e4c8)：内容面板基色；中心高光 #fbf3dd、边缘暗部 #ddc9a0 由径向渐变产生"灯从背后打亮"。

### Neutral
- **夜堂 Room** (#171008 / #251a0c)：页面地面，径向渐变给出台口微光。
- **木 Wood** (#3a2a18 / #54391d)：台框、横梁、木牌基色。
- **墨 Ink** (#241a10 / #45351f)：绢上的正文与皮影本体；次级文字 #6b5335（暖棕，禁用冷灰）。
- **堂内浅字 Cream** (#e9dcb8 / #b9a87f)：夜堂里的落款文字。

### Named Rules
**The 朱砂十成一 Rule.** 朱砂只给"印记级"元素（印、绦带、主 CTA、当前幕）。它是戳记，不是涂装。

## Typography

**Display/Body Font:** Noto Serif SC（CDN，font-display: swap；回退 Songti SC / STSong）
**Stage Direction Font:** Kaiti SC / STKaiti / KaiTi（系统字，不加载）

**Character:** 宋体系的骨架承担"戏单排印"的传统；楷体只用于舞台指示，制造"念白"的声部差。

### Hierarchy
- **Display** (900, clamp(56px, 11vh, 104px), 0.18em tracking, vertical-rl)：仅用于"黄锦"题字。
- **Headline** (900, clamp(24px, 4.6vh, 38px))：幕名，下缘缀 3.2em 朱砂短线。
- **Lead** (600, clamp(22px, 4.4vh, 40px), 1.4)：开场句。
- **Body** (500, clamp(14px, 2.1vh, 17px), 1.9)：正文，≤34em 行长。
- **Stage Direction** (楷体, 括号体例)：占位说明、氛围句。凡"待补"内容一律用此声部。

### Named Rules
**The 括号即旁白 Rule.** 圆括号 + 楷体 = 舞台指示声部，专用于占位与氛围句，绝不用于操作性文案。

## Layout

桌面端是"一屏一台"：`.room` 100dvh 纵向 flex（顶梁 → 戏台 → 落款），`.stage` 内只有绢幕参与 flex，其余（侧框、底梁、木牌）一律绝对定位。绢幕宽 min(100%, 1400px)，内容左侧留 lg（clamp(24px, 6%, 84px)）起排，右侧 34vw 让位给皮影。≤860px 切换为文档流：木牌横排置顶、题字横排、皮影缩小浮于右上、幕文顺排，`body` 允许滚动。

## Elevation & Depth

深度来自"光"而非"层"：绢幕的外发光（0 0 clamp(30px,6vw,90px) rgba(232,163,61,.16)）宣告它是唯一光源面；木构件用方向性阴影（0 6px 14px rgba(0,0,0,.5)）表达体量；皮影以 drop-shadow(-12px 14px 14px rgba(70,46,16,.32)) 把影子落在绢上。零偏移彩色光晕只允许出现在绢幕辉光一处。

## Shapes

圆角克制：屏 10px、构件 4px、小签 3px。木构件以 repeating-linear-gradient 的细密线纹做木纹与绢纹（1px 线，3–5px 周期，4.5% 以下透明度）——纹理只从题材世界来。皮影的轮廓语言：圆润的头部弧线、宽袍、水袖的贝塞尔飘带；镂空以绢色圆点与透染淡彩表达。

## Components

### Buttons
- **Shape:** 4px 圆角，衬线 600，0.14em tracking
- **Primary（印章钮）:** 朱砂底 + 内嵌 3px 绢色描边（inset box-shadow），padding 12px 22px；hover 提亮 + 上浮 2px
- **Ghost:** 透明底、1px 墨线框；移动端强制绢色实底保证可读
- **Focus:** 2px amber outline, offset 3px

### 幕名木牌（Navigation）
竖排木牌挂于顶梁（top:-14px），活动态换绢底墨字 + 朱砂穗；键盘 ←/→ 翻幕。移动端转横排胶囊，活动态朱砂底。

### 戏单行（Playbill Row）
上/下 1px 分隔线的节目单行（非卡片）：剧名（衬线 600，min-width 8.5em）→ 剧种小签（1px 框 11px）→ 楷体戏文 → SVG 外链箭头。hover：淡金底 + translateX(8px)。

### 皮影人偶（Signature Component）
420×680 viewBox 的关节化 SVG：脖、躯、双肩双肘六个关节各持 CSS 变量角度，JS 以 lerp 插值 + 每幕姿势库 + 光标跟踪驱动；两根竹签以底端为轴反推角度。`prefers-reduced-motion` 下静止。水袖、镂空孔、朱砂绒球是轮廓的一部分，删改前先读 `js/main.js` 的 POSES。

## Do's and Don'ts

### Do:
- **Do** 让新内容住进"幕"结构：一个区块 = 一幕，配一条姿势库记录（`POSES`）。
- **Do** 占位与未定内容一律用楷体括号声部标注「待补」。
- **Do** 新增强调元素时先问：它配得上朱砂吗？不配就用墨或木。

### Don't:
- **Don't** 引入冷灰色（次级文字用 #6b5335 系暖棕）。
- **Don't** 给皮影或文字加发光/霓虹效果——光只属于绢幕后的那盏灯。
- **Don't** 用 emoji/字符当图标；外链箭头用 `#arrow-ne` symbol。
- **Don't** 在夜堂区域放内容卡片；夜堂只有梁、框、落款。
