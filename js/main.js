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
        terms: ['Go', 'TypeScript', 'Swift', 'Python', 'Shell', 'macOS', 'AI 智能体', 'Agent Runtime', '开发者工具', 'CLI', '插件', '自动化', '开源', '开发者体验', 'Code Intelligence', 'Tooling']
      },
      projects: {
        aria: '开源项目',
        title: '开源项目',
        lead: '以下项目按代码体量与最近推送综合排序；带「网站」的项目托管在 project.huangjin.online。',
        site: '网站',
        groups: { apps: '应用与扩展', claude: 'Claude Code 与 Codex', pi: 'Pi 扩展', dsh: 'DeepSeek Harness 插件' },
        jsonita: { meta: 'TypeScript · macOS / Windows', desc: 'macOS 与 Windows 菜单栏 JSON 工具箱：格式化、树状预览、转换与 AI 辅助修复。' },
        'pi-view': { meta: 'TypeScript · Pi Extension', desc: '为纯文本模型提供显式 view 工具，并把图像路由给视觉模型的 Pi 扩展。' },
        'ant-agent': { meta: 'Shell · Agents', desc: '一次性子代理集合，把临时调查任务隔离在主上下文之外。' },
        'smart-cutout': { meta: 'Swift · Codex Skill', desc: '面向 Codex 的公开 Skill，用于交互式前景抠图和透明 PNG 素材。' },
        'claude-code-clip': { meta: 'Shell · macOS', desc: '将文件写入 macOS 剪贴板的工具，提供终端 clip 命令和 Claude Code 的 /clip。' },
        'claude-code-qna': { meta: 'Python · Claude Code Plugin', desc: '将 Claude Code 对话中尚未决定的内容转换成可点击问题的插件。' },
        'claude-code-queue': { meta: 'Claude Code Plugin', desc: 'Claude Code 提示队列：/queue 将消息延后至当前轮次结束后按会话 FIFO 处理。' },
        'dsh-session-link': { meta: 'JavaScript · DSH Plugin', desc: 'DeepSeek Harness 插件：链接并读取 DSH 会话，将会话内容转为可读文本。' },
        'dsh-survey': { meta: 'JavaScript · DSH Plugin', desc: 'DeepSeek Harness 批量问卷插件，支持多种问题类型与提交后的回顾。' },
        'page-snap': { meta: 'JavaScript · Chrome Extension', desc: 'Chrome 扩展：将网页保存为保真、可供 AI 阅读的 MHTML、单页 HTML 或 ZIP 归档。' },
        'pi-briefly': { meta: 'TypeScript · Pi Extension', desc: '以原生方式紧凑、折叠展示工具调用的 Pi 扩展。' },
        'pi-x-footer': { meta: 'TypeScript · Pi Extension', desc: '可配置的 Pi 多行 Footer，提供本地指标、语义化展示、交互设置及可选的服务商用量监控。' },
        pivi: { meta: 'TypeScript · Tauri / React / Rust', desc: '面向电竞开黑场景的桌面语音应用，基于 Tauri、React 与 Rust，采用本地优先架构。' }
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
        terms: ['Go', 'TypeScript', 'Swift', 'Python', 'Shell', 'macOS', 'AI Agents', 'Agent Runtime', 'Developer Tools', 'CLI', 'Extensions', 'Automation', 'Open Source', 'Developer Experience', 'Code Intelligence', 'Tooling']
      },
      projects: {
        aria: 'Open-source projects',
        title: 'Open-source projects',
        lead: 'Ranked by codebase size and recent pushes. Projects marked “Site” are hosted at project.huangjin.online.',
        site: 'Site',
        groups: { apps: 'Apps & Extensions', claude: 'Claude Code & Codex', pi: 'Pi Extensions', dsh: 'DeepSeek Harness Plugins' },
        jsonita: { meta: 'TypeScript · macOS / Windows', desc: 'A menu-bar JSON toolkit for macOS and Windows: formatting, tree inspection, conversion, and AI-assisted fixing.' },
        'pi-view': { meta: 'TypeScript · Pi Extension', desc: 'A Pi extension that gives text-only models an explicit view tool and routes images to a vision model.' },
        'ant-agent': { meta: 'Shell · Agents', desc: 'A disposable subagent collection that keeps one-off investigations out of the main context.' },
        'smart-cutout': { meta: 'Swift · Codex Skill', desc: 'A public Codex skill for interactive foreground cutouts and transparent PNG assets.' },
        'claude-code-clip': { meta: 'Shell · macOS', desc: 'Put files, rather than text, on the macOS clipboard with a terminal clip command and /clip for Claude Code.' },
        'claude-code-qna': { meta: 'Python · Claude Code Plugin', desc: 'A Claude Code plugin that turns everything still undecided in a conversation into clickable questions.' },
        'claude-code-queue': { meta: 'Claude Code Plugin', desc: 'A prompt queue for Claude Code: /queue defers a message until the current turn ends, in per-session FIFO order.' },
        'dsh-session-link': { meta: 'JavaScript · DSH Plugin', desc: 'A DeepSeek Harness plugin for linking to and reading DSH sessions as readable text.' },
        'dsh-survey': { meta: 'JavaScript · DSH Plugin', desc: 'A DeepSeek Harness questionnaire plugin for batch questions, multiple input types, and post-submit recap.' },
        'page-snap': { meta: 'JavaScript · Chrome Extension', desc: 'A Chrome extension that saves pages as faithful, AI-readable MHTML, single HTML, or ZIP archives.' },
        'pi-briefly': { meta: 'TypeScript · Pi Extension', desc: 'A native-first Pi extension for compact, collapsed tool presentation.' },
        'pi-x-footer': { meta: 'TypeScript · Pi Extension', desc: 'A configurable multi-row Pi footer with local metrics, semantic presentation, interactive settings, and optional provider-usage monitoring.' },
        pivi: { meta: 'TypeScript · Tauri / React / Rust', desc: 'A local-first desktop voice application for gaming groups, built with Tauri, React, and Rust.' }
      },
      contact: { title: "Let's connect", lead: 'For collaboration, opportunities, or a quick hello.', email: 'Email me' }
    }
  };

  var nav = document.getElementById('nav');
  var description = document.getElementById('meta-description');
  var marqueeTrack = document.getElementById('marquee-track');
  var projectLists = Array.prototype.slice.call(document.querySelectorAll('.project-list'));
  var projectOrder = [
    'pi-x-footer', 'pi-view', 'dsh-survey', 'dsh-session-link', 'ant-agent',
    'pi-briefly', 'jsonita', 'page-snap', 'pivi', 'claude-code-qna',
    'smart-cutout', 'claude-code-queue', 'claude-code-clip'
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

  function buildMarquee(terms) {
    marqueeTrack.textContent = '';
    for (var copyIndex = 0; copyIndex < 2; copyIndex += 1) {
      var sequence = document.createElement('span');
      sequence.className = 'marquee-sequence';
      terms.forEach(function (term) {
        var word = document.createElement('span');
        word.className = 'marquee-item';
        word.textContent = term;
        sequence.appendChild(word);
        var dot = document.createElement('span');
        dot.className = 'marquee-dot';
        dot.setAttribute('aria-hidden', 'true');
        sequence.appendChild(dot);
      });
      marqueeTrack.appendChild(sequence);
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

    buildMarquee(current.marquee.terms);
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

  var stored;
  try { stored = localStorage.getItem('hj-locale'); } catch (error) {}
  var browserLocale = navigator.language && navigator.language.toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  setLocale(stored === 'zh' || stored === 'en' ? stored : browserLocale);
})();
