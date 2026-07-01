/* Micheal Ezeoda — site interactions (vanilla, no deps) */
(function () {
  "use strict";

  // Scroll-reveal for home sections + per-chunk reveal for long post bodies.
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveal = document.querySelectorAll("[data-reveal]");
  var body = document.querySelector(".post__body");
  var chunks = body ? body.querySelectorAll(
    ":scope > p, :scope > h2, :scope > h3, :scope > ul, :scope > ol, :scope > blockquote, :scope > pre, :scope > figure, :scope > hr"
  ) : [];

  if ("IntersectionObserver" in window && !reduce) {
    // Hide chunks ONLY when we can animate them — so content is never left stuck hidden.
    chunks.forEach(function (el) { el.classList.add("chunk"); });
    // threshold 0 => elements taller than the viewport still trigger as they enter.
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });
    reveal.forEach(function (el) { io.observe(el); });
    chunks.forEach(function (el) { io.observe(el); });
  } else {
    // No IO / reduced motion: everything visible, no reveal.
    reveal.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Shrink/tint nav on scroll
  var onScroll = function () {
    document.body.classList.toggle("scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () { nav.classList.toggle("is-open"); });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("is-open"); });
    });
  }

  // Year
  var y = document.querySelector("[data-year]");
  if (y) { y.textContent = new Date().getFullYear(); }
})();
