/* ============================================================
   Ali Tailor — Coverflow review slider
   Real Google Play Store reviews, exact text and English names.
   ============================================================ */
(function () {
    'use strict';

    var reviews = [
        {
            name: "Yasir Amin",
            rating: 5,
            date: "20 Sep 2026",
            text: "Hello developer, I used your app and I liked it very much. It looks very simple and is very easy to use. I had tested many apps before this one. But the quality that I needed is all there in this app and I am quite satisfied using this app.And I will tell others to try this app once. I hope everyone likes it and thank you very much, developer. You did a great job."
        },
        {
            name: "Kharam Khan",
            rating: 5,
            date: "27 Sep 2026",
            text: "The developer has made a very nice app, I like it very much. I was looking for an app that was easy to understand and suited my needs.Thank you very much for bringing us such a good thing.I would recommend everyone to give this app a try and I hope everyone will like it. Many thanks to the developer."
        },
        {
            name: "Ali'sME",
            rating: 5,
            date: "20 Oct 2026",
            text: "Hi, my perspective has changed after using this app.I like this app very much. I will recommend others to try this app. I hope everyone will like it. Thanks to the creator of this app."
        },
        {
            name: "Malik SUB",
            rating: 5,
            date: "26 Sep 2026",
            text: "⭐⭐⭐⭐⭐ Ali Tailor is an excellent tailoring service. The app is easy to use, fast, and works smoothly. The service is professional, and the quality of work is very good. Highly recommended for anyone looking for reliable tailoring services!"
        },
        {
            name: "Mian Waris",
            rating: 5,
            date: "26 Sep 2026",
            text: "Very good👍 Boat is a good app and is also easy 5 stars"
        },
        {
            name: "Fazal Hussain",
            rating: 4,
            date: "20 Sep 2026",
            text: "Good working. so easy ."
        },
        {
            name: "Imran Khan",
            rating: 5,
            date: "21 Sep 2026",
            text: "good 👍"
        }
    ];

    var stage = document.getElementById('reviewStage');
    var track = document.getElementById('reviewTrack');
    var dotsBox = document.getElementById('reviewDots');
    if (!stage || !track || !dotsBox) return;

    var prevBtn = document.getElementById('reviewPrev');
    var nextBtn = document.getElementById('reviewNext');
    var colors = ['var(--orange)', 'var(--green)', 'var(--blue)', 'var(--purple)',
                  'var(--coral)', 'var(--yellow)', 'var(--mint)', 'var(--pink)'];
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var current = 0;
    var timer = null;

    /* build cards and dots from the review data */
    reviews.forEach(function (review, index) {
        var card = document.createElement('article');
        card.className = 'review-card';
        card.style.setProperty('--card-color', colors[index % colors.length]);

        var stars = document.createElement('div');
        stars.className = 'review-stars';
        stars.setAttribute('aria-label', review.rating + ' out of 5 stars');
        stars.textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        var quote = document.createElement('p');
        quote.className = 'review-text';
        quote.textContent = review.text;

        var meta = document.createElement('div');
        meta.className = 'review-meta';
        var name = document.createElement('strong');
        name.textContent = review.name;
        var date = document.createElement('span');
        date.textContent = review.date;
        meta.appendChild(name);
        meta.appendChild(date);

        card.appendChild(stars);
        card.appendChild(quote);
        card.appendChild(meta);

        /* click a side card to bring it to the centre */
        card.addEventListener('click', function () {
            if (index !== current) {
                current = index;
                render();
                restart();
            }
        });

        track.appendChild(card);

        var dot = document.createElement('button');
        dot.className = 'review-dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', 'Show review ' + (index + 1) + ': ' + review.name);
        dot.addEventListener('click', function () {
            current = index;
            render();
            restart();
        });
        dotsBox.appendChild(dot);
    });

    var cards = Array.prototype.slice.call(track.children);
    var dots = Array.prototype.slice.call(dotsBox.children);

    function render() {
        var half = reviews.length / 2;
        cards.forEach(function (card, index) {
            var diff = index - current;
            if (diff > half) diff -= reviews.length;
            if (diff < -half) diff += reviews.length;

            var state;
            if (diff === 0) state = 'is-center';
            else if (diff === 1) state = 'is-right';
            else if (diff === -1) state = 'is-left';
            else if (diff === 2) state = 'is-far-right';
            else if (diff === -2) state = 'is-far-left';
            else state = 'is-bg';

            card.className = 'review-card ' + state;
            card.setAttribute('aria-hidden', state === 'is-center' ? 'false' : 'true');
        });

        dots.forEach(function (dot, index) {
            var active = index === current;
            dot.classList.toggle('is-active', active);
            dot.setAttribute('aria-current', active ? 'true' : 'false');
        });
    }

    function next() {
        current = (current + 1) % reviews.length;
        render();
    }

    function prev() {
        current = (current - 1 + reviews.length) % reviews.length;
        render();
    }

    function restart() {
        if (timer) clearInterval(timer);
        if (!reduceMotion) timer = setInterval(next, 5000);
    }

    if (nextBtn) nextBtn.addEventListener('click', function () { next(); restart(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restart(); });

    /* pause on hover or keyboard focus */
    stage.addEventListener('mouseenter', function () { if (timer) clearInterval(timer); });
    stage.addEventListener('mouseleave', restart);
    stage.addEventListener('focusin', function () { if (timer) clearInterval(timer); });
    stage.addEventListener('focusout', restart);

    stage.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') { event.preventDefault(); next(); restart(); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); prev(); restart(); }
    });

    /* touch swipe */
    var startX = null;
    stage.addEventListener('touchstart', function (event) {
        startX = event.touches[0].clientX;
    }, { passive: true });
    stage.addEventListener('touchend', function (event) {
        if (startX === null) return;
        var delta = event.changedTouches[0].clientX - startX;
        if (Math.abs(delta) > 45) {
            if (delta < 0) next(); else prev();
            restart();
        }
        startX = null;
    }, { passive: true });

    render();
    restart();
})();

/* ============================================================
   Site-wide: year, hamburger navigation, active page, back-to-top
   ============================================================ */
(function () {
    'use strict';

    /* footer year on every page */
    Array.prototype.forEach.call(document.querySelectorAll('.year'), function (el) {
        el.textContent = new Date().getFullYear();
    });

    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('siteNav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        });

        nav.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('click', function (event) {
            if (!event.target.closest('.nav-wrap')) {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });

        /* highlight the page the visitor is on */
        var currentFile = decodeURIComponent(window.location.pathname.split('/').pop()) || 'index.html';
        Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
            var href = decodeURIComponent(link.getAttribute('href') || '');
            var target = href.replace(/^https?:\/\/[^/]+\//, '').split('#')[0] || 'index.html';
            if (target === currentFile) link.classList.add('is-active');
        });
    }

    var backToTop = document.getElementById('backToTop');
    if (backToTop) {
        function onScroll() {
            if (window.scrollY > 320) backToTop.classList.add('is-visible');
            else backToTop.classList.remove('is-visible');
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();

/* ============================================================
   Scroll Reveal — repeat: show while in view, hide when it leaves
   ============================================================ */
(function () {
    'use strict';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var selector = [
        '.hero h1', '.hero p', '.hero-points', '.play-badge',
        '.features h2', '.cards > .card',
        '.header-banner', '.page-wrap > .card', '.section',
        '.note-box', '.contact-box', '.info-row', '.faq-item',
        '.button-group', '.contact-card',
        '.testimonials h2', '.section-sub', '.review-stage', '.review-dots',
        '.site-footer'
    ].join(',');

    var els = Array.prototype.slice.call(document.querySelectorAll(selector));
    if (!els.length) return;

    document.documentElement.classList.add('has-reveal');
    els.forEach(function (el, i) {
        el.classList.add('reveal');
        el.style.transitionDelay = (Math.min(i % 5, 4) * 60) + 'ms';
    });

    if (!('IntersectionObserver' in window)) {
        els.forEach(function (el) { el.classList.add('is-visible'); });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(function (el) { observer.observe(el); });
})();
