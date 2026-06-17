/* ============================================================
   Peak 11 Media — Motion Layer JS (v3 standard)
   Vanilla. No libraries. ~1KB. Progressive enhancement.
   - Marks <html> with `.js-anim` so reveal CSS only engages with JS.
   - Auto-discovers reveal targets (no per-element tagging required):
       sections + common cards/cells.
   - IntersectionObserver reveals each once on entry, lightly staggered
     within its group. Elements keep their final box → zero layout shift.
   - If reduced-motion is requested, or IO is unsupported, everything is
     simply shown — never left hidden.
   ============================================================ */
(function () {
  var doc = document;
  var root = doc.documentElement;

  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Selectors that get the scroll-reveal treatment.
  var TARGETS = [
    'main > section',
    'main > div.trust', 'main > div.mats',
    '.svc-card', '.rev-card', '.review-card', '.work-card',
    '.step', '.trust-cell', '.mat'
  ].join(',');

  function tag() {
    var picked = doc.querySelectorAll(TARGETS);
    var els = [];
    for (var i = 0; i < picked.length; i++) {
      var el = picked[i];
      // Never reveal the hero — it must read solid above the fold.
      if (el.closest && el.closest('.hero')) continue;
      if (el.classList && el.classList.contains('hero')) continue;
      if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '');
      els.push(el);
    }
    return els;
  }

  function run() {
    // No motion path: just reveal everything immediately, keep hover CSS.
    if (reduce || !('IntersectionObserver' in window)) {
      root.classList.add('js-anim');
      var all = tag();
      for (var i = 0; i < all.length; i++) all[i].classList.add('is-in');
      return;
    }

    root.classList.add('js-anim');
    var els = tag();

    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (!e.isIntersecting) continue;
        var el = e.target;
        // Stagger grouped items (cards inside the same grid) gently.
        var sibs = el.parentNode ? el.parentNode.children : null;
        var idx = 0;
        if (sibs && el.classList && /-card|trust-cell|mat|step/.test(el.className)) {
          for (var s = 0; s < sibs.length && sibs[s] !== el; s++) {
            if (sibs[s].hasAttribute && sibs[s].hasAttribute('data-reveal')) idx++;
          }
        }
        var delay = Math.min(idx, 5) * 60; // cap stagger so nothing waits long
        el.style.setProperty('--reveal-delay', delay + 'ms');
        el.classList.add('is-in');
        io.unobserve(el);
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    for (var j = 0; j < els.length; j++) io.observe(els[j]);

    // Safety net: anything still hidden after 3s gets shown (e.g. tab was
    // backgrounded and IO never fired). Never leave content invisible.
    setTimeout(function () {
      var hidden = doc.querySelectorAll('.js-anim [data-reveal]:not(.is-in)');
      for (var k = 0; k < hidden.length; k++) hidden[k].classList.add('is-in');
    }, 3000);
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
