(function () {
  'use strict';

  var copy = {
    zh: {
      lang: 'zh-CN',
      title: '黄锦 Huang Jin — 软件工程师',
      description: '黄锦的个人主页：构建面向 AI Agent 与开发者的开源工具。',
      nav: { aria: '页面导航', language: '语言切换', projects: '项目', contact: '联系' },
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
        lead: '下面是一些我维护的开源项目，完整源码都在 GitHub。',
        gotato: { meta: 'Go · Agent Runtime', desc: 'Go 原生的 Agent-as-a-Service 运行时，提供紧凑内核与规范 Agent 循环。' },
        jsonita: { meta: 'TypeScript · macOS', desc: 'macOS 菜单栏 JSON 工具箱：格式化、树状预览、转换与 AI 辅助修复。' },
        'pi-view': { meta: 'TypeScript · Extension', desc: '为纯文本模型提供显式 view 工具，并把图像路由给视觉模型的 Pi 扩展。' },
        'ant-agent': { meta: 'Shell · Agents', desc: '一次性子代理集合，把临时调查任务隔离在主上下文之外。' },
        'smart-cutout': { meta: 'Swift · Tooling', desc: '交互式前景抠图工具，输出透明 PNG 素材。' }
      },
      contact: { title: '保持联系', lead: '无论是合作、机会，还是只是打个招呼。', email: '发邮件' }
    },
    en: {
      lang: 'en',
      title: 'Huang Jin — Software Engineer',
      description: 'Huang Jin builds open-source tools for AI agents and developers.',
      nav: { aria: 'Primary navigation', language: 'Language selector', projects: 'Projects', contact: 'Contact' },
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
        lead: 'A selection of open-source projects I maintain. Full source code is available on GitHub.',
        gotato: { meta: 'Go · Agent Runtime', desc: 'A Go-native Agent-as-a-Service runtime with a compact kernel and a canonical agent loop.' },
        jsonita: { meta: 'TypeScript · macOS', desc: 'A macOS menu-bar JSON toolkit for formatting, tree inspection, conversion, and AI-assisted fixing.' },
        'pi-view': { meta: 'TypeScript · Extension', desc: 'A Pi extension that gives text-only models an explicit view tool and routes images to a vision model.' },
        'ant-agent': { meta: 'Shell · Agents', desc: 'A disposable subagent collection that keeps one-off investigations out of the main context.' },
        'smart-cutout': { meta: 'Swift · Tooling', desc: 'An interactive foreground-cutout tool that produces transparent PNG assets.' }
      },
      contact: { title: "Let's connect", lead: 'For collaboration, opportunities, or a quick hello.', email: 'Email me' }
    }
  };

  var nav = document.getElementById('nav');
  var description = document.getElementById('meta-description');
  var marqueeTrack = document.getElementById('marquee-track');
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-locale]'));

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

  var stored;
  try { stored = localStorage.getItem('hj-locale'); } catch (error) {}
  var browserLocale = navigator.language && navigator.language.toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  setLocale(stored === 'zh' || stored === 'en' ? stored : browserLocale);
})();
