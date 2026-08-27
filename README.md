# 皮影戏台 · huangjin.online

黄锦的个人主页。纯静态 HTML/CSS/JS，无构建步骤，托管于 GitHub Pages。

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 更新内容

所有"待补"占位都在 `index.html` 里，搜索 `待补` 或 `bio-todo` 即可找到：

- [ ] 第一幕：一句自我介绍（搜 `bio-todo`）
- [ ] 第二幕：班主其人的两三段戏文
- [ ] 终幕：微信 / 知乎等其他联系方式

改完 `git push` 即自动上线（GitHub Pages）。

## 域名与 DNS（火山引擎）

域名 `huangjin.online` 注册于火山引擎，解析托管在火山云解析 DNS。指向 GitHub Pages 的记录：

| 类型 | 主机记录 | 记录值 |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `jinhuang712.github.io` |

DNS 生效后，在仓库 **Settings → Pages** 勾选 **Enforce HTTPS**。

## 未来：加后端

当需要在国内部署带后端的应用时：买一台火山 ECS → 备案 → 把云解析里的 A 记录改指 ECS IP 即可，本站文件原样搬到服务器。
