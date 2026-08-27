/* 黄锦 · design-v2 交互脚本
   GSAP：入场编排 + 图片滚动缩放淡出（Image Scale & Fade）。
   原则：无 JS / reduced-motion 时全部内容默认可见。 */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 导航滚动态 */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (reduced || !window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  /* Hero 入场：文字上浮 + 面板淡入 */
  var tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });
  tl.from('.hero-cn', { y: 34, opacity: 0 })
    .from('.hero-latin', { y: 24, opacity: 0 }, '-=0.7')
    .from('.hero-lead', { y: 20, opacity: 0 }, '-=0.7')
    .from('.hero-cta', { y: 16, opacity: 0 }, '-=0.7')
    .from('.hero-mail', { opacity: 0 }, '-=0.5');

  /* 区块入场（一次性淡入上浮） */
  gsap.utils.toArray([
    '.about-title', '.about-body', '.now',
    '.section-title', '.section-lead', '.timeline', '.cv-note',
    '.card', '.contact-panel'
  ]).forEach(function (el) {
    gsap.from(el, {
      y: 26,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  /* Image Scale & Fade：进入视口由小放大，离开时暗化淡出 */
  gsap.utils.toArray('.card-media img').forEach(function (img) {
    gsap.fromTo(img,
      { scale: 0.82, opacity: 0.55 },
      {
        scale: 1,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.card-media'),
          start: 'top 96%',
          end: 'center 55%',
          scrub: 0.6
        }
      }
    );
    gsap.to(img, {
      opacity: 0.22,
      filter: 'brightness(0.75)',
      ease: 'none',
      scrollTrigger: {
        trigger: img.closest('.card-media'),
        start: 'bottom 42%',
        end: 'bottom 8%',
        scrub: 0.6
      }
    });
  });
})();
