(function () {
  var S = window.SITE, LANGS = ['ar', 'fr', 'en'], lang = 'ar', filter = 'all';
  try {
    var q = new URLSearchParams(location.search).get('lang');
    lang = LANGS.indexOf(q) > -1 ? q : (localStorage.getItem('lang') || 'ar');
  } catch (e) {}
  if (LANGS.indexOf(lang) < 0) lang = 'ar';

  var t = function (o) { return !o ? '' : typeof o === 'string' ? o : (o[lang] || o.ar || o.fr || o.en || ''); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var $ = function (id) { return document.getElementById(id); };
  var wa = function (msg) { return 'https://wa.me/' + S.contact.whatsapp + '?text=' + encodeURIComponent(msg); };
  var safeUrl = function (u) { return /^(https?:|mailto:|tel:|#)/i.test(u) ? u : '#'; };
  var ext = function (u) { return u.charAt(0) === '#' ? '' : ' target="_blank" rel="noopener"'; };

  var ICONS = {
    whatsapp: ['#25d366', '💬'], messenger: ['#0084ff', '✉️'], youtube: ['#ff0000', '▶'], tiktok: ['#111', '♪'],
    facebook: ['#1877f2', 'f'], facebookpage: ['#1877f2', 'f'], instagram: ['#e1306c', '◎'], x: ['#111', 'X'], email: ['#ea4335', '@']
  };
  var CUBE = ['#ff5d73', '#ffb703', '#12c2a9', '#3b82f6', '#fff', '#ff8a3d', '#12c2a9', '#ff5d73', '#3b82f6'];

  function thumb(it) {
    return '<div class="thumb">' + (it.img ? '<img loading="lazy" alt="' + esc(t(it.title)) + '" src="' + esc(it.img) + '">' : esc(it.icon || '✨')) + '</div>';
  }
  function sec(id, title, body, extra) {
    return '<section id="' + id + '"><div class="wrap"><h2>' + esc(title) + '</h2>' + (extra || '') + body + '</div></section>';
  }
  function empty(U) { return '<p class="empty">' + esc(t(U.empty)) + '</p>'; }

  function render() {
    var P = S.person, U = S.ui, Z = S.zed, B = S.books;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $('brandName').textContent = t(P.name);
    document.title = (lang === 'ar' ? 'محمد لمو | Mohamed Lemmou — ' : 'Mohamed Lemmou | محمد لمو — ') + t(P.title).split(':')[0];
    var md = document.querySelector('meta[name="description"]');
    if (md) md.content = t(P.name) + ' (Lemmou Mohamed) — ' + t(P.title);

    document.querySelectorAll('#langs button').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === lang); });
    $('nav').innerHTML = ['about', 'services', 'zed', 'books', 'works', 'courses', 'shop', 'contact'].map(function (k) {
      return '<a href="#' + k + '">' + esc(t(U.nav[k])) + '</a>';
    }).join('');

    var name = t(P.name), parts = name.split(' ');
    var heroName = parts.length > 1 ? esc(parts[0]) + ' <em>' + esc(parts.slice(1).join(' ')) + '</em>' : esc(name);
    var h = '';

    /* hero */
    h += '<section class="hero" id="hero"><div class="wrap hero-in"><div>' +
      '<h1>' + heroName + '</h1><p class="title">' + esc(t(P.title)) + '</p><p class="tag">' + esc(t(P.tagline)) + '</p>' +
      '<div class="btns"><a class="btn pri" href="' + esc(wa(t(U.waHello))) + '" target="_blank" rel="noopener">' + esc(t(U.cta)) + '</a>' +
      '<a class="btn sec" href="#works">' + esc(t(U.seeWorks)) + '</a></div></div>' +
      '<div class="photo">' + (P.photo ? '<img alt="' + esc(name) + '" src="' + esc(P.photo) + '">' :
        '<div class="cube">' + CUBE.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('') + '</div>') + '</div></div></section>';

    /* about */
    h += '<section class="about" id="about"><div class="wrap"><h2>' + esc(t(U.nav.about)) + '</h2><p>' + esc(t(P.about)) + '</p>' +
      '<p class="meta">📍 ' + esc(t(P.location)) + '</p></div></section>';

    /* services */
    h += sec('services', t(U.servicesH), '<div class="grid cols3">' + S.services.map(function (s) {
      return '<div class="card"><div class="ic">' + (s.icon.includes('.') ? '<img src="' + esc(s.icon) + '" style="width:100%; height:100%; object-fit:contain;" alt="icon">' : esc(s.icon)) + '</div><h3>' + esc(t(s.title)) + '</h3><p>' + esc(t(s.text)) + '</p></div>';
    }).join('') + '</div>');

    /* ZED Soroban */
    h += sec('zed', t(Z.name),
      '<div class="apps">' + Z.apps.map(function (a) {
        var href = a.file ? a.file : safeUrl(a.url);
        return '<div class="card app"><div class="shot ' + esc(a.shape || '') + '"><img loading="lazy" src="' + esc(a.img) + '" alt="' + esc(t(a.title)) + '"></div>' +
          '<h3>' + esc(a.icon) + ' ' + esc(t(a.title)) + '</h3><p>' + esc(t(a.text)) + '</p>' +
          '<a class="btn pri dl" href="' + esc(href) + '"' + (a.file ? ' download' : ' target="_blank" rel="noopener"') + '>⬇ ' + esc(t(a.btn)) + '</a>' +
          (a.hint ? '<span class="meta">' + esc(t(a.hint)) + '</span>' : '') + '</div>';
      }).join('') + '</div>' +
      '<div class="btns"><a class="btn pri" href="' + esc(safeUrl(Z.url)) + '" target="_blank" rel="noopener">' + esc(t(U.visitZed)) + ' ↗</a></div>' +
      '<p class="meta light">© ' + esc(Z.since) + '–' + new Date().getFullYear() + ' ZED Soroban</p>',
      '<p class="slogan">' + esc(t(Z.slogan)) + '</p><p class="lead">' + esc(t(Z.text)) + '</p>');

    /* books */
    h += sec('books', t(U.booksH),
      '<div class="book"><div class="covers">' + B.covers.map(function (c) {
        return '<a href="' + esc(c.img) + '" target="_blank" rel="noopener"><img loading="lazy" src="' + esc(c.img) + '" alt="' + esc(t(c.alt)) + '"></a>';
      }).join('') + '</div><div class="book-info"><h3>' + esc(t(B.series)) + '</h3><p>' + esc(t(B.text)) + '</p>' +
      '<h4>' + esc(t(U.volumesH)) + '</h4><ol class="vols">' + B.volumes.map(function (v) {
        return '<li><b>' + esc(t(v.part)) + '</b> — ' + esc(t(v.title)) + '</li>';
      }).join('') + '</ol><ul class="credits">' + B.credits.map(function (c) {
        return '<li><span>' + esc(t(c.label)) + ':</span> ' + esc(t(c.value)) + '</li>';
      }).join('') + '</ul><p class="meta light">' + esc(t(U.isbn)) + ': <bdi dir="ltr">' + esc(B.isbn) + '</bdi></p>' +
      '<a class="btn pri" target="_blank" rel="noopener" href="' + esc(wa(t(U.waOrder) + t(B.shortName))) + '">' + esc(t(U.orderBook)) + '</a></div></div>');

    /* works */
    var cats = []; S.works.forEach(function (w) { if (cats.indexOf(w.cat) < 0) cats.push(w.cat); });
    var list = S.works.filter(function (w) { return filter === 'all' || w.cat === filter; });
    h += sec('works', t(U.worksH),
      '<div class="grid">' + (list.length ? list.map(function (w) {
        var btn = w.url ? '<a class="btn sm" href="' + esc(safeUrl(w.url)) + '"' + ext(w.url) + '>' + esc(t(w.url.charAt(0) === '#' ? U.details : U.open)) + (w.url.charAt(0) === '#' ? '' : ' ↗') + '</a>' : '';
        return '<div class="card">' + thumb(w) + '<span class="meta">' + esc(t(U.cats[w.cat] || U.cats.other)) + '</span><h3>' + esc(t(w.title)) + '</h3><p>' + esc(t(w.text)) + '</p>' + btn + '</div>';
      }).join('') : empty(U)) + '</div>',
      '<div class="chips" id="chips">' + ['all'].concat(cats).map(function (c) {
        return '<button class="chip' + (c === filter ? ' on' : '') + '" data-filter="' + c + '">' + esc(c === 'all' ? t(U.all) : t(U.cats[c] || U.cats.other)) + '</button>';
      }).join('') + '</div>');
        /* showcase — Houtane Sweets */
    if (S.showcase) {
      var SC = S.showcase;
      h += sec('showcase', t(SC.title),
        '<div class="showcase-grid">' + SC.images.map(function (im) {
          return '<a class="shot" href="' + esc(im.src) + '" target="_blank" rel="noopener">' +
            '<img loading="lazy" src="' + esc(im.src) + '" alt="' + esc(t(im.alt)) + '">' +
            '</a>';
        }).join('') + '</div>' +
        '<div class="btns"><a class="btn pri" target="_blank" rel="noopener" href="' +
          esc(wa(t(SC.cta))) + '">' + esc(t(SC.cta)) + '</a></div>',
        '<p class="lead">' + esc(t(SC.intro)) + '</p>');
    }

    /* courses */
    h += sec('courses', t(U.coursesH), '<div class="grid">' + (S.courses.length ? S.courses.map(function (c) {
      var btn = c.status === 'closed' ? '' : '<a class="btn sm" target="_blank" rel="noopener" href="' + esc(wa(t(U.waCourse) + t(c.title))) + '">' + esc(t(c.status === 'open' ? U.register : U.soonBtn)) + '</a>';
      return '<div class="card"><div class="ic">' + esc(c.icon) + '</div><span class="badge ' + esc(c.status) + '">' + esc(t(U.status[c.status])) + '</span><h3>' + esc(t(c.title)) + '</h3><p>' + esc(t(c.text)) + '</p>' +
        '<span class="meta">📅 ' + esc(t(c.date)) + (c.price ? ' · <b class="price">' + esc(c.price) + '</b>' : '') + '</span>' + btn + '</div>';
    }).join('') : empty(U)) + '</div>');

    /* shop */
    h += sec('shop', t(U.shopH), '<div class="grid">' + (S.shop.length ? S.shop.map(function (p) {
      return '<div class="card">' + thumb(p) + '<h3>' + esc(t(p.title)) + '</h3><p>' + esc(t(p.text)) + '</p>' +
        '<div class="price">' + esc(p.price || t(U.askPrice)) + '</div>' +
        '<a class="btn sm" target="_blank" rel="noopener" href="' + esc(wa(t(U.waOrder) + t(p.title))) + '">' + esc(t(U.order)) + '</a></div>';
    }).join('') : empty(U)) + '</div>');

    /* contact */
    var soc = S.contact.social.filter(function (s) { return s.url; });
    if (S.contact.email) soc.push({ key: 'email', label: S.contact.email, url: 'mailto:' + S.contact.email });
    h += sec('contact', t(U.contactH), '<div class="socials">' + soc.map(function (s) {
      var i = ICONS[s.key] || ['#555', '🔗'];
      return '<a class="soc" target="_blank" rel="noopener me" href="' + esc(safeUrl(s.url)) + '"><b style="background:' + i[0] + '">' + i[1] + '</b><span>' + esc(s.label) + '</span></a>';
    }).join('') + '</div>', '<p class="lead">' + esc(t(U.contactP)) + '</p>');

    $('app').innerHTML = h;
    $('footer').textContent = '© ' + new Date().getFullYear() + ' ' + t(P.name) + ' — ' + t(U.rights);
  }

  document.addEventListener('click', function (e) {
    var l = e.target.closest('[data-lang]');
    if (l) {
      lang = l.dataset.lang;
      try { localStorage.setItem('lang', lang); } catch (x) {}
      render(); return;
    }
    var f = e.target.closest('[data-filter]');
    if (f) {
      filter = f.dataset.filter; render();
      var w = document.getElementById('works'); if (w) w.scrollIntoView({ block: 'start' });
    }
  });

  render();
})();
