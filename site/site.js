/* Marketing site interactions: scroll reveals, stat counters,
   curriculum + FAQ accordions, nav scroll state. No dependencies. */

(function () {
  "use strict";

  // nav shadow on scroll
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // scroll reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // stat counters
  const counterIo = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      counterIo.unobserve(e.target);
      const el = e.target;
      const target = +el.dataset.count;
      const t0 = performance.now();
      const dur = 900;
      (function tick(t) {
        const p = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(el => counterIo.observe(el));

  // curriculum accordions (first one open by default)
  const modules = document.querySelectorAll("[data-module]");
  modules.forEach((m, i) => {
    if (i === 0) m.classList.add("open");
    const head = m.querySelector(".module-head");
    const sync = () => modules.forEach(x =>
      x.querySelector(".module-head").setAttribute("aria-expanded", x.classList.contains("open")));
    head.addEventListener("click", () => {
      const wasOpen = m.classList.contains("open");
      modules.forEach(x => x.classList.remove("open"));
      if (!wasOpen) m.classList.add("open");
      sync();
    });
    sync();
  });

  // FAQ accordions
  document.querySelectorAll("[data-faq]").forEach(item => {
    const q = item.querySelector(".faq-q");
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", () => {
      item.classList.toggle("open");
      q.setAttribute("aria-expanded", item.classList.contains("open"));
    });
  });

  // footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
