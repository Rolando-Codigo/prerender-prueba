const e = require('express'),
  a = e(),
  p = require('body-parser'),
  x = require('express-http-proxy'),
  h = require('helmet'),
  f = require('frameguard');
a.disable('x-powered-by'),
  a.use(
    h.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'", 'fonts.googleawpis.com', 'fonts.gstatic.com'],
        objectSrc: ["'self'"],
        mediaSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com']
      }
    })
  ),
  a.use(f()),
  a.use(p.json({ limit: '50mb' })),
  a.use(p.urlencoded({ limit: '50mb', extended: !0 })),
  (module.exports.Start = function (t, r, s) {
    if (s)
      for (var o = 0; o < s.length; ++o) {
        let e = s[o].name,
          t = s[o].target;
        e && t && e.length > 0 && t.length && a.use(`/${e}`, x(t));
      }
    a.use('/', e.static(r));
    var i = a.listen(t, () => {
      console.log(`Running on port ${t}`);
    });
    i.setTimeout(3e5);
  });
