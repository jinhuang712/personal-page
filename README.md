# huangjin.online

黄锦的双语个人主页。纯静态 HTML / CSS / JavaScript，无构建步骤，部署在 GitHub Pages。

## 本地预览

```bash
cd ~/dev/projects/personal-page
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 页面结构

```text
Hero（姓名、普通自我介绍、GitHub / LinkedIn / 邮箱）
  → 技术关键词滚带
  → 开源项目清单
  → 联系区
```

页面只维护中文和英文两种语言：首次根据浏览器语言选择；点击导航中的「中 / EN」后会记住选择。

## 更新内容

所有双语文案、技术关键词和项目说明都集中在：

```text
js/main.js → const copy = { zh: ..., en: ... }
```

- 修改自我介绍：`hero.intro`
- 修改技术关键词：`marquee.terms`
- 修改项目说明：`projects.<项目名>.meta` 和 `projects.<项目名>.desc`
- 修改联系区文案：`contact`

新增项目时，需要同时：

1. 在 `index.html` 的 `.project-list` 新增一条 `.project-row`；
2. 在 `js/main.js` 的 `zh.projects` 与 `en.projects` 均补上对应的 `meta` / `desc`；
3. 按 GitHub 的仓库体量和 `pushed_at` 更新 `projectOrder`。Fork 不展示。

未确认的经历、教育、推荐语和简历不要以占位内容发布；有真实内容后再加区块。

## 发布

GitHub Pages 从 `main` 分支发布：

```bash
git checkout main
git merge design-v2
git push origin main
```

当前改版在 `design-v2` 分支，确认后再合并。 

## 域名与 DNS（火山引擎）

| 类型 | 主机记录 | 记录值 |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `jinhuang712.github.io` |

HTTPS 由 GitHub Pages 自动签发；证书就绪后，在仓库 **Settings → Pages** 开启 **Enforce HTTPS**。
