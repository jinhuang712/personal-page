(function () {
  'use strict';

  var copy = {
    zh: {
      lang: 'zh-CN',
      title: '黄锦 Huang Jin — 软件工程师',
      description: '黄锦的个人主页：构建面向 AI Agent 与开发者的开源工具。',
      nav: { aria: '页面导航', language: '语言切换', projects: '项目', contact: '联系', skip: '跳到项目' },
      hero: {
        intro: '你好，我是黄锦，一名软件工程师，主要做 AI 工具和 Agent 相关的开源项目。',
        contactLabel: '合作、招聘与联系：'
      },
      marquee: {
        aria: '技术关键词',
        rows: [
          ['Go', 'TypeScript', 'Swift', 'Python', 'Shell', 'macOS', 'CLI', 'Tooling'],
          ['AI 智能体', 'Agent Runtime', '开发者工具', '插件', '自动化', '开源', '开发者体验', 'Code Intelligence']
        ]
      },
      projects: {
        aria: '开源项目',
        title: '开源项目',
        lead: '精选的公开项目，按类别分组；带「网站」的项目有在线站点，多数托管在 project.huangjin.online。',
        groupsAria: '项目分组',
        site: '网站',
        groups: { apps: '应用与扩展', claude: 'Claude Code', pi: 'Pi / PID', dsh: 'DeepSeek Harness 插件' },
        jsonita: { meta: 'TypeScript · macOS / Windows', desc: 'macOS 与 Windows 菜单栏 JSON 工具箱：格式化、树状预览、转换与 AI 辅助修复。' },
        'open-tomato': { meta: 'TypeScript · macOS', desc: 'macOS 桌面小说写作工具：分层大纲、卡片库、多路审稿，改动经 diff 审批后才落盘。' },
        'page-snap': { meta: 'JavaScript · Chrome Extension', desc: 'Chrome 扩展：将网页保存为保真、可供 AI 阅读的 MHTML、单页 HTML 或 ZIP 归档。' },
        pivi: { meta: 'TypeScript · Tauri / React / Rust', desc: '面向电竞开黑场景的桌面语音应用，基于 Tauri、React 与 Rust，采用本地优先架构。' },
        'claude-code-super-statusline': { meta: 'TypeScript · Claude Code Plugin', desc: '在浏览器里设计的 Claude Code 状态栏：选一个预设，拖拽组件，对着真实会话实时重绘。' },
        'claude-code-broom': { meta: 'Python · Claude Code Plugin', desc: 'Claude Code 的自动代码卫生：补齐格式化、Lint、类型检查与语言服务器，并在合适的时机清扫改动。' },
        'claude-code-queue': { meta: 'Claude Code Plugin', desc: 'Claude Code 提示队列：/queue 将消息延后至当前轮次结束后按会话 FIFO 处理。' },
        'claude-code-worktree': { meta: 'Python · Claude Code Plugin', desc: '会话原生的 git worktree：/wt:worktree 只带走本会话的改动，/wt:land 变基、解冲突并合回原分支。' },
        'claude-code-clip': { meta: 'Shell · macOS', desc: '将文件写入 macOS 剪贴板的工具，提供终端 clip 命令和 Claude Code 的 /clip。' },
        pid: { meta: 'TypeScript · Desktop', desc: 'Pi 的桌面图形前端：直接托管 Pi 自身运行时，共用会话与配置，补上层级、导航、搜索与跨会话引用。' },
        'pid-footer': { meta: 'TypeScript · Pi Extension', desc: '可配置的 Pi 多行 Footer，提供本地指标、语义化展示、交互设置及可选的服务商用量监控。' },
        'pid-view': { meta: 'TypeScript · Pi Extension', desc: '为纯文本模型提供显式 view 工具，并把图像路由给视觉模型的 Pi 扩展。' },
        'pid-mcp': { meta: 'TypeScript · Pi Extension', desc: 'Pi 的 MCP 能力加载器：每个 MCP 工具都是原生 Pi 工具，经 mcp_search 按需激活。' },
        'pid-lite-web': { meta: 'TypeScript · Pi Extension', desc: '轻量、免密钥的 Pi 网页搜索与抓取扩展，严格限制单次调用占用的上下文。' },
        'pid-worktree': { meta: 'TypeScript · Pi Extension', desc: 'Pi 的 git worktree 流程扩展：/worktree 隔离到关联工作树，/land 以线性历史合回。' },
        'dsh-survey': { meta: 'JavaScript · DSH Plugin', desc: 'DeepSeek Harness 批量问卷插件，支持多种问题类型与提交后的回顾。' },
        'dsh-session-link': { meta: 'JavaScript · DSH Plugin', desc: 'DeepSeek Harness 插件：链接并读取 DSH 会话，将会话内容转为可读文本。' }
      },
      contact: { title: '保持联系', lead: '无论是合作、机会，还是只是打个招呼。', email: '发邮件' }
    },
    en: {
      lang: 'en',
      title: 'Huang Jin — Software Engineer',
      description: 'Huang Jin builds open-source tools for AI agents and developers.',
      nav: { aria: 'Primary navigation', language: 'Language selector', projects: 'Projects', contact: 'Contact', skip: 'Skip to projects' },
      hero: {
        intro: "Hi, I'm Huang Jin, a software engineer building open-source tools for AI agents and developers.",
        contactLabel: 'For collaboration or opportunities:'
      },
      marquee: {
        aria: 'Technical keywords',
        rows: [
          ['Go', 'TypeScript', 'Swift', 'Python', 'Shell', 'macOS', 'CLI', 'Tooling'],
          ['AI Agents', 'Agent Runtime', 'Developer Tools', 'Extensions', 'Automation', 'Open Source', 'Developer Experience', 'Code Intelligence']
        ]
      },
      projects: {
        aria: 'Open-source projects',
        title: 'Open-source projects',
        lead: 'Selected public projects, grouped by ecosystem. Projects marked “Site” have a live site, most of them at project.huangjin.online.',
        groupsAria: 'Project groups',
        site: 'Site',
        groups: { apps: 'Apps & Extensions', claude: 'Claude Code', pi: 'Pi / PID', dsh: 'DeepSeek Harness Plugins' },
        jsonita: { meta: 'TypeScript · macOS / Windows', desc: 'A menu-bar JSON toolkit for macOS and Windows: formatting, tree inspection, conversion, and AI-assisted fixing.' },
        'open-tomato': { meta: 'TypeScript · macOS', desc: 'A macOS desktop novel-writing tool: layered outlines, a card library, multi-reviewer passes, and diff approval before anything is written.' },
        'page-snap': { meta: 'JavaScript · Chrome Extension', desc: 'A Chrome extension that saves pages as faithful, AI-readable MHTML, single HTML, or ZIP archives.' },
        pivi: { meta: 'TypeScript · Tauri / React / Rust', desc: 'A local-first desktop voice application for gaming groups, built with Tauri, React, and Rust.' },
        'claude-code-super-statusline': { meta: 'TypeScript · Claude Code Plugin', desc: 'A Claude Code statusline you design in the browser: pick a preset, drag widgets into place, and watch it redraw live against your real session.' },
        'claude-code-broom': { meta: 'Python · Claude Code Plugin', desc: 'Autonomous code hygiene for Claude Code: sets up formatters, linters, type checkers and language servers, then sweeps Claude\'s changes when it should.' },
        'claude-code-queue': { meta: 'Claude Code Plugin', desc: 'A prompt queue for Claude Code: /queue defers a message until the current turn ends, in per-session FIFO order.' },
        'claude-code-worktree': { meta: 'Python · Claude Code Plugin', desc: 'Session-native git worktrees for Claude Code: /wt:worktree forks only your session\'s changes, /wt:land rebases, resolves conflicts and lands them back.' },
        'claude-code-clip': { meta: 'Shell · macOS', desc: 'Put files, rather than text, on the macOS clipboard with a terminal clip command and /clip for Claude Code.' },
        pid: { meta: 'TypeScript · Desktop', desc: 'A desktop graphical frontend for Pi: hosts Pi\'s own runtime and sessions, and adds hierarchy, navigation, search, and cross-session reference.' },
        'pid-footer': { meta: 'TypeScript · Pi Extension', desc: 'A configurable multi-row Pi footer with local metrics, semantic presentation, interactive settings, and optional provider-usage monitoring.' },
        'pid-view': { meta: 'TypeScript · Pi Extension', desc: 'A Pi extension that gives text-only models an explicit view tool and routes images to a vision model.' },
        'pid-mcp': { meta: 'TypeScript · Pi Extension', desc: 'An MCP capability loader for Pi: every MCP tool is a native Pi tool, activated on demand through mcp_search.' },
        'pid-lite-web': { meta: 'TypeScript · Pi Extension', desc: 'Light, keyless web search and fetch for Pi, with a hard budget on how much context one call may use.' },
        'pid-worktree': { meta: 'TypeScript · Pi Extension', desc: 'A git worktree flow for Pi: /worktree isolates work into a linked worktree, /land merges it back with linear history.' },
        'dsh-survey': { meta: 'JavaScript · DSH Plugin', desc: 'A DeepSeek Harness questionnaire plugin for batch questions, multiple input types, and post-submit recap.' },
        'dsh-session-link': { meta: 'JavaScript · DSH Plugin', desc: 'A DeepSeek Harness plugin for linking to and reading DSH sessions as readable text.' }
      },
      contact: { title: "Let's connect", lead: 'For collaboration, opportunities, or a quick hello.', email: 'Email me' }
    }
  };

  var nav = document.getElementById('nav');
  var description = document.getElementById('meta-description');
  var marqueeTracks = Array.prototype.slice.call(document.querySelectorAll('.marquee-track'));
  var projectLists = Array.prototype.slice.call(document.querySelectorAll('.project-list'));
  var projectOrder = [
    'jsonita', 'open-tomato', 'page-snap', 'pivi',
    'claude-code-super-statusline', 'claude-code-broom', 'claude-code-queue', 'claude-code-worktree', 'claude-code-clip',
    'pid', 'pid-footer', 'pid-view', 'pid-mcp', 'pid-lite-web', 'pid-worktree',
    'dsh-survey', 'dsh-session-link'
  ];
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-locale]'));

  function sortProjects() {
    projectLists.forEach(function (list) {
      projectOrder.forEach(function (id) {
        var row = list.querySelector('[data-project="' + id + '"]');
        if (row) list.appendChild(row);
      });
    });
  }

  function getPath(object, path) {
    return path.split('.').reduce(function (value, key) { return value && value[key]; }, object);
  }

  function countProjects() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-count-for]'), function (badge) {
      var group = document.getElementById('group-' + badge.getAttribute('data-count-for'));
      if (group) badge.textContent = String(group.querySelectorAll('.project-row').length);
    });
  }

  // Each sequence repeats its row twice so one copy stays wider than the viewport.
  function buildMarqueeRow(track, terms) {
    track.textContent = '';
    var repeated = terms.concat(terms);
    for (var copyIndex = 0; copyIndex < 2; copyIndex += 1) {
      var sequence = document.createElement('span');
      sequence.className = 'marquee-sequence';
      repeated.forEach(function (term) {
        var word = document.createElement('span');
        word.className = 'marquee-item';
        word.textContent = term;
        sequence.appendChild(word);
        var dot = document.createElement('span');
        dot.className = 'marquee-dot';
        dot.setAttribute('aria-hidden', 'true');
        sequence.appendChild(dot);
      });
      track.appendChild(sequence);
    }
  }

  function setLocale(locale) {
    var current = copy[locale] || copy.zh;
    document.documentElement.lang = current.lang;
    document.title = current.title;
    description.setAttribute('content', current.description);

    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (element) {
      var value = getPath(current, element.getAttribute('data-i18n'));
      if (value) element.textContent = value;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-aria]'), function (element) {
      var value = getPath(current, element.getAttribute('data-i18n-aria'));
      if (value) element.setAttribute('aria-label', value);
    });

    Array.prototype.forEach.call(document.querySelectorAll('[data-project]'), function (row) {
      var project = current.projects[row.getAttribute('data-project')];
      if (!project) return;
      row.querySelector('.project-meta').textContent = project.meta;
      row.querySelector('.project-desc').textContent = project.desc;
    });

    marqueeTracks.forEach(function (track, index) { buildMarqueeRow(track, current.marquee.rows[index] || []); });
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-locale') === locale));
    });
    try { localStorage.setItem('hj-locale', locale); } catch (error) {}
  }

  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () { setLocale(button.getAttribute('data-locale')); });
  });
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
  sortProjects();
  countProjects();

  var stored;
  try { stored = localStorage.getItem('hj-locale'); } catch (error) {}
  var browserLocale = navigator.language && navigator.language.toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  setLocale(stored === 'zh' || stored === 'en' ? stored : browserLocale);
})();
