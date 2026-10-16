/* خلفية متحركة: خرزات سوروبان، مكعبات روبيك، أرقام وحلقات تطفو ببطء + هالات ضوئية */
(function () {
  var c = document.getElementById('bg');
  if (!c || !c.getContext) return;
  var ctx = c.getContext('2d'), W = 0, H = 0, items = [], T = 0;
  var COL = ['#ff5d73', '#ffb703', '#12c2a9', '#3b82f6', '#ff8a3d', '#ffffff'];
  var TYPES = ['bead', 'cube', 'digit', 'ring', 'bead', 'cube'];
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var orbs = [
    { x: .2, y: .25, r: .38, c: '59,130,246', ph: 0 },
    { x: .8, y: .6, r: .42, c: '18,194,169', ph: 2 },
    { x: .5, y: .95, r: .36, c: '255,93,115', ph: 4 }
  ];

  function make(init) {
    var s = 14 + Math.random() * 34;
    return {
      t: TYPES[(Math.random() * TYPES.length) | 0], s: s,
      x: Math.random() * W, y: init ? Math.random() * H : H + s * 2,
      vy: .18 + Math.random() * .5, vx: (Math.random() - .5) * .25,
      r: Math.random() * 6.28, vr: (Math.random() - .5) * .012,
      c: COL[(Math.random() * COL.length) | 0], d: String((Math.random() * 10) | 0),
      a: .14 + Math.random() * .26, ph: Math.random() * 6.28
    };
  }
  function size() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    c.width = W * dpr; c.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(58, Math.max(20, (W * H) / 26000)));
    while (items.length < n) items.push(make(true));
    items.length = n;
  }
  function rr(x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function draw(o) {
    ctx.save(); ctx.translate(o.x, o.y); ctx.rotate(o.r); ctx.globalAlpha = o.a;
    if (o.t === 'bead') {
      var g = ctx.createRadialGradient(-o.s * .2, -o.s * .15, o.s * .05, 0, 0, o.s * .6);
      g.addColorStop(0, '#fff'); g.addColorStop(.3, o.c); g.addColorStop(1, 'rgba(0,0,0,.45)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(0, 0, o.s * .6, o.s * .38, 0, 0, 6.2832); ctx.fill();
    } else if (o.t === 'cube') {
      ctx.fillStyle = o.c; rr(-o.s / 2, -o.s / 2, o.s, o.s, o.s * .22); ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,.4)'; ctx.lineWidth = 2; ctx.stroke();
    } else if (o.t === 'digit') {
      ctx.fillStyle = '#fff'; ctx.font = '800 ' + (o.s * 1.7) + 'px Cairo, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(o.d, 0, 0);
    } else {
      ctx.strokeStyle = o.c; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(0, 0, o.s * .55, 0, 6.2832); ctx.stroke();
    }
    ctx.restore();
  }
  function frame(now) {
    T = now || 0;
    ctx.clearRect(0, 0, W, H);
    orbs.forEach(function (b) {
      var x = (b.x + Math.sin(T / 9000 + b.ph) * .08) * W, y = (b.y + Math.cos(T / 11000 + b.ph) * .08) * H, r = b.r * Math.max(W, H);
      var g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(' + b.c + ',.20)'); g.addColorStop(1, 'rgba(' + b.c + ',0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    });
    items.forEach(function (o, i) {
      if (!reduce) {
        o.y -= o.vy; o.x += o.vx + Math.sin(T / 1600 + o.ph) * .18; o.r += o.vr;
        if (o.y < -o.s * 2 || o.x < -o.s * 3 || o.x > W + o.s * 3) items[i] = make(false);
      }
      draw(o);
    });
    if (!reduce) window.requestAnimationFrame(frame);
  }
  window.addEventListener('resize', size);
  size();
  window.requestAnimationFrame(frame);
})();
