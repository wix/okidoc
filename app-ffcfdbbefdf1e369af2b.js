webpackJsonp([0xd2a57dc1d883], {
  66: function(e, n, t) {
    'use strict';
    function o(e, n, t) {
      var o = a.map(function(t) {
        if (t.plugin[e]) {
          var o = t.plugin[e](n, t.options);
          return o;
        }
      });
      return (
        (o = o.filter(function(e) {
          return 'undefined' != typeof e;
        })),
        o.length > 0 ? o : t ? [t] : []
      );
    }
    function r(e, n, t) {
      return a.reduce(function(t, o) {
        return o.plugin[e]
          ? t.then(function() {
              return o.plugin[e](n, o.options);
            })
          : t;
      }, Promise.resolve());
    }
    (n.__esModule = !0), (n.apiRunner = o), (n.apiRunnerAsync = r);
    var a = [
      { plugin: t(335), options: { plugins: [] } },
      { plugin: t(334), options: { plugins: [] } },
      { plugin: t(340), options: { plugins: [] } },
    ];
  },
  202: function(e, n, t) {
    'use strict';
    var o;
    (n.components = {
      'component---src-templates-md-js': t(316),
      'component---src-pages-404-js': t(314),
      'component---src-pages-index-js': t(315),
    }),
      (n.json = ((o = {
        'layout-index.json': t(4),
        'docs-adapters.json': t(320),
      }),
      (o['layout-index.json'] = t(4)),
      (o['docs-events.json'] = t(323)),
      (o['layout-index.json'] = t(4)),
      (o['docs-api.json'] = t(321)),
      (o['layout-index.json'] = t(4)),
      (o['docs-modules.json'] = t(328)),
      (o['layout-index.json'] = t(4)),
      (o['docs.json'] = t(319)),
      (o['layout-index.json'] = t(4)),
      (o['docs-player-config.json'] = t(329)),
      (o['layout-index.json'] = t(4)),
      (o['docs-player-public-methods.json'] = t(330)),
      (o['layout-index.json'] = t(4)),
      (o['docs-video-source.json'] = t(331)),
      (o['layout-index.json'] = t(4)),
      (o['docs-events-playback-states.json'] = t(325)),
      (o['layout-index.json'] = t(4)),
      (o['docs-events-errors.json'] = t(324)),
      (o['layout-index.json'] = t(4)),
      (o['docs-events-ui-events.json'] = t(326)),
      (o['layout-index.json'] = t(4)),
      (o['docs-events-video-events.json'] = t(327)),
      (o['layout-index.json'] = t(4)),
      (o['docs-bla-test.json'] = t(322)),
      (o['layout-index.json'] = t(4)),
      (o['404.json'] = t(317)),
      (o['layout-index.json'] = t(4)),
      (o['index.json'] = t(332)),
      (o['layout-index.json'] = t(4)),
      (o['404-html.json'] = t(318)),
      o)),
      (n.layouts = { 'layout---index': t(313) });
  },
  203: function(e, n, t) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function r(e, n) {
      if (!(e instanceof n))
        throw new TypeError('Cannot call a class as a function');
    }
    function a(e, n) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return !n || ('object' != typeof n && 'function' != typeof n) ? e : n;
    }
    function u(e, n) {
      if ('function' != typeof n && null !== n)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof n,
        );
      (e.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        n &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, n)
            : (e.__proto__ = n));
    }
    n.__esModule = !0;
    var s =
        Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
          return e;
        },
      i = t(1),
      c = o(i),
      l = t(2),
      f = o(l),
      d = t(132),
      p = o(d),
      m = t(44),
      h = o(m),
      g = t(66),
      y = function(e) {
        var n = e.children;
        return c.default.createElement('div', null, n());
      },
      v = (function(e) {
        function n(t) {
          r(this, n);
          var o = a(this, e.call(this)),
            u = t.location;
          return (
            p.default.getPage(u.pathname) ||
              (u = s({}, u, { pathname: '/404.html' })),
            (o.state = {
              location: u,
              pageResources: p.default.getResourcesForPathname(u.pathname),
            }),
            o
          );
        }
        return (
          u(n, e),
          (n.prototype.componentWillReceiveProps = function(e) {
            var n = this;
            if (this.state.location.pathname !== e.location.pathname) {
              var t = p.default.getResourcesForPathname(e.location.pathname);
              if (t) this.setState({ location: e.location, pageResources: t });
              else {
                var o = e.location;
                p.default.getPage(o.pathname) ||
                  (o = s({}, o, { pathname: '/404.html' })),
                  p.default.getResourcesForPathname(o.pathname, function(e) {
                    n.setState({ location: o, pageResources: e });
                  });
              }
            }
          }),
          (n.prototype.componentDidMount = function() {
            var e = this;
            h.default.on('onPostLoadPageResources', function(n) {
              p.default.getPage(e.state.location.pathname) &&
                n.page.path ===
                  p.default.getPage(e.state.location.pathname).path &&
                e.setState({ pageResources: n.pageResources });
            });
          }),
          (n.prototype.shouldComponentUpdate = function(e, n) {
            return (
              !n.pageResources ||
              (!(this.state.pageResources || !n.pageResources) ||
                (this.state.pageResources.component !==
                  n.pageResources.component ||
                  (this.state.pageResources.json !== n.pageResources.json ||
                    !(
                      this.state.location.key === n.location.key ||
                      !n.pageResources.page ||
                      (!n.pageResources.page.matchPath &&
                        !n.pageResources.page.path)
                    ))))
            );
          }),
          (n.prototype.render = function() {
            var e = (0, g.apiRunner)('replaceComponentRenderer', {
                props: s({}, this.props, {
                  pageResources: this.state.pageResources,
                }),
                loader: d.publicLoader,
              }),
              n = e[0];
            return this.props.page
              ? this.state.pageResources
                ? n ||
                  (0, i.createElement)(
                    this.state.pageResources.component,
                    s(
                      { key: this.props.location.pathname },
                      this.props,
                      this.state.pageResources.json,
                    ),
                  )
                : null
              : this.props.layout
                ? n ||
                  (0, i.createElement)(
                    this.state.pageResources && this.state.pageResources.layout
                      ? this.state.pageResources.layout
                      : y,
                    s(
                      {
                        key:
                          this.state.pageResources &&
                          this.state.pageResources.layout
                            ? this.state.pageResources.layout
                            : 'DefaultLayout',
                      },
                      this.props,
                    ),
                  )
                : null;
          }),
          n
        );
      })(c.default.Component);
    (v.propTypes = {
      page: f.default.bool,
      layout: f.default.bool,
      location: f.default.object,
    }),
      (n.default = v),
      (e.exports = n.default);
  },
  44: function(e, n, t) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = t(369),
      a = o(r),
      u = (0, a.default)();
    e.exports = u;
  },
  204: function(e, n, t) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = t(61),
      a = t(133),
      u = o(a),
      s = {};
    e.exports = function(e) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
      return function(t) {
        var o = decodeURIComponent(t),
          a = (0, u.default)(o, n);
        if (
          (a.split('#').length > 1 &&
            (a = a
              .split('#')
              .slice(0, -1)
              .join('')),
          a.split('?').length > 1 &&
            (a = a
              .split('?')
              .slice(0, -1)
              .join('')),
          s[a])
        )
          return s[a];
        var i = void 0;
        return (
          e.some(function(e) {
            if (e.matchPath) {
              if (
                (0, r.matchPath)(a, { path: e.path }) ||
                (0, r.matchPath)(a, { path: e.matchPath })
              )
                return (i = e), (s[a] = e), !0;
            } else {
              if ((0, r.matchPath)(a, { path: e.path, exact: !0 }))
                return (i = e), (s[a] = e), !0;
              if ((0, r.matchPath)(a, { path: e.path + 'index.html' }))
                return (i = e), (s[a] = e), !0;
            }
            return !1;
          }),
          i
        );
      };
    };
  },
  205: function(e, n, t) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = t(111),
      a = o(r),
      u = t(66),
      s = (0, u.apiRunner)('replaceHistory'),
      i = s[0],
      c = i || (0, a.default)();
    e.exports = c;
  },
  318: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0xa2868bfb69fc, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(351);
              });
        });
      });
  },
  317: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0xe70826b53c04, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(352);
              });
        });
      });
  },
  320: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(9907198433856, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(353);
              });
        });
      });
  },
  321: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(61690332833015, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(354);
              });
        });
      });
  },
  322: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0xb90944b375c2, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(355);
              });
        });
      });
  },
  324: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0x93119af61899, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(356);
              });
        });
      });
  },
  325: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0xffe62953cd02, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(357);
              });
        });
      });
  },
  326: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0xc7ef8bc3ca96, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(358);
              });
        });
      });
  },
  327: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0xd634b4434219, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(359);
              });
        });
      });
  },
  323: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0x7b7b9189fcda, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(360);
              });
        });
      });
  },
  328: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0x6a77958bc385, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(361);
              });
        });
      });
  },
  329: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(62146069567272, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(362);
              });
        });
      });
  },
  330: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0xd2d094d2f7f2, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(363);
              });
        });
      });
  },
  331: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0xb4b2420128c8, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(364);
              });
        });
      });
  },
  319: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0x7733ec7aff49, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(365);
              });
        });
      });
  },
  332: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0x81b8806e4260, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(366);
              });
        });
      });
  },
  4: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(60335399758886, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(114);
              });
        });
      });
  },
  313: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0x67ef26645b2a, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(206);
              });
        });
      });
  },
  132: function(e, n, t) {
    (function(e) {
      'use strict';
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (n.__esModule = !0), (n.publicLoader = void 0);
      var r = t(1),
        a = (o(r), t(204)),
        u = o(a),
        s = t(44),
        i = o(s),
        c = t(133),
        l = o(c),
        f = void 0,
        d = {},
        p = {},
        m = {},
        h = {},
        g = {},
        y = [],
        v = [],
        j = {},
        x = '',
        R = [],
        b = {},
        w = function(e) {
          return (e && e.default) || e;
        },
        N = void 0,
        C = !0,
        P = [],
        _ = {},
        k = {},
        E = 5;
      (N = t(207)({
        getNextQueuedResources: function() {
          return R.slice(-1)[0];
        },
        createResourceDownload: function(e) {
          L(e, function() {
            (R = R.filter(function(n) {
              return n !== e;
            })),
              N.onResourcedFinished(e);
          });
        },
      })),
        i.default.on('onPreLoadPageResources', function(e) {
          N.onPreLoadPageResources(e);
        }),
        i.default.on('onPostLoadPageResources', function(e) {
          N.onPostLoadPageResources(e);
        });
      var O = function(e, n) {
          return b[e] > b[n] ? 1 : b[e] < b[n] ? -1 : 0;
        },
        T = function(e, n) {
          return j[e] > j[n] ? 1 : j[e] < j[n] ? -1 : 0;
        },
        L = function(n) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function() {};
          if (h[n])
            e.nextTick(function() {
              t(null, h[n]);
            });
          else {
            var o = void 0;
            (o =
              'component---' === n.slice(0, 12)
                ? p.components[n]
                : 'layout---' === n.slice(0, 9) ? p.layouts[n] : p.json[n]),
              o(function(e, o) {
                (h[n] = o),
                  P.push({ resource: n, succeeded: !e }),
                  k[n] || (k[n] = e),
                  (P = P.slice(-E)),
                  t(e, o);
              });
          }
        },
        S = function(n, t) {
          g[n]
            ? e.nextTick(function() {
                t(null, g[n]);
              })
            : k[n]
              ? e.nextTick(function() {
                  t(k[n]);
                })
              : L(n, function(e, o) {
                  if (e) t(e);
                  else {
                    var r = w(o());
                    (g[n] = r), t(e, r);
                  }
                });
        },
        A = function() {
          var e = navigator.onLine;
          if ('boolean' == typeof e) return e;
          var n = P.find(function(e) {
            return e.succeeded;
          });
          return !!n;
        },
        D = function(e, n) {
          console.log(n),
            _[e] || (_[e] = n),
            A() &&
              window.location.pathname.replace(/\/$/g, '') !==
                e.replace(/\/$/g, '') &&
              (window.location.pathname = e);
        },
        U = 1,
        M = {
          empty: function() {
            (v = []), (j = {}), (b = {}), (R = []), (y = []), (x = '');
          },
          addPagesArray: function(e) {
            (y = e), (x = '/video-player.js'), (f = (0, u.default)(e, x));
          },
          addDevRequires: function(e) {
            d = e;
          },
          addProdRequires: function(e) {
            p = e;
          },
          dequeue: function() {
            return v.pop();
          },
          enqueue: function(e) {
            var n = (0, l.default)(e, x);
            if (
              !y.some(function(e) {
                return e.path === n;
              })
            )
              return !1;
            var t = 1 / U;
            (U += 1),
              j[n] ? (j[n] += 1) : (j[n] = 1),
              M.has(n) || v.unshift(n),
              v.sort(T);
            var o = f(n);
            return (
              o.jsonName &&
                (b[o.jsonName]
                  ? (b[o.jsonName] += 1 + t)
                  : (b[o.jsonName] = 1 + t),
                R.indexOf(o.jsonName) !== -1 ||
                  h[o.jsonName] ||
                  R.unshift(o.jsonName)),
              o.componentChunkName &&
                (b[o.componentChunkName]
                  ? (b[o.componentChunkName] += 1 + t)
                  : (b[o.componentChunkName] = 1 + t),
                R.indexOf(o.componentChunkName) !== -1 ||
                  h[o.jsonName] ||
                  R.unshift(o.componentChunkName)),
              R.sort(O),
              N.onNewResourcesAdded(),
              !0
            );
          },
          getResources: function() {
            return { resourcesArray: R, resourcesCount: b };
          },
          getPages: function() {
            return { pathArray: v, pathCount: j };
          },
          getPage: function(e) {
            return f(e);
          },
          has: function(e) {
            return v.some(function(n) {
              return n === e;
            });
          },
          getResourcesForPathname: function(n) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function() {};
            C &&
              navigator &&
              navigator.serviceWorker &&
              navigator.serviceWorker.controller &&
              'activated' === navigator.serviceWorker.controller.state &&
              (f(n) ||
                navigator.serviceWorker.getRegistrations().then(function(e) {
                  if (e.length) {
                    for (
                      var n = e,
                        t = Array.isArray(n),
                        o = 0,
                        n = t ? n : n[Symbol.iterator]();
                      ;

                    ) {
                      var r;
                      if (t) {
                        if (o >= n.length) break;
                        r = n[o++];
                      } else {
                        if (((o = n.next()), o.done)) break;
                        r = o.value;
                      }
                      var a = r;
                      a.unregister();
                    }
                    window.location.reload();
                  }
                })),
              (C = !1);
            if (_[n])
              return (
                D(n, 'Previously detected load failure for "' + n + '"'), t()
              );
            var o = f(n);
            if (!o) return D(n, 'A page wasn\'t found for "' + n + '"'), t();
            if (((n = o.path), m[n]))
              return (
                e.nextTick(function() {
                  t(m[n]),
                    i.default.emit('onPostLoadPageResources', {
                      page: o,
                      pageResources: m[n],
                    });
                }),
                m[n]
              );
            i.default.emit('onPreLoadPageResources', { path: n });
            var r = void 0,
              a = void 0,
              u = void 0,
              s = function() {
                if (r && a && (!o.layoutComponentChunkName || u)) {
                  m[n] = { component: r, json: a, layout: u, page: o };
                  var e = { component: r, json: a, layout: u, page: o };
                  t(e),
                    i.default.emit('onPostLoadPageResources', {
                      page: o,
                      pageResources: e,
                    });
                }
              };
            return (
              S(o.componentChunkName, function(e, n) {
                e &&
                  D(o.path, 'Loading the component for ' + o.path + ' failed'),
                  (r = n),
                  s();
              }),
              S(o.jsonName, function(e, n) {
                e && D(o.path, 'Loading the JSON for ' + o.path + ' failed'),
                  (a = n),
                  s();
              }),
              void (
                o.layoutComponentChunkName &&
                S(o.layout, function(e, n) {
                  e &&
                    D(o.path, 'Loading the Layout for ' + o.path + ' failed'),
                    (u = n),
                    s();
                })
              )
            );
          },
          peek: function(e) {
            return v.slice(-1)[0];
          },
          length: function() {
            return v.length;
          },
          indexOf: function(e) {
            return v.length - v.indexOf(e) - 1;
          },
        };
      n.publicLoader = { getResourcesForPathname: M.getResourcesForPathname };
      n.default = M;
    }.call(n, t(62)));
  },
  367: function(e, n) {
    e.exports = [
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-adapters.json',
        path: '/docs/adapters/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-events.json',
        path: '/docs/events/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-api.json',
        path: '/docs/api/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-modules.json',
        path: '/docs/modules/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs.json',
        path: '/docs/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-player-config.json',
        path: '/docs/player-config/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-player-public-methods.json',
        path: '/docs/player-public-methods/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-video-source.json',
        path: '/docs/video-source/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-events-playback-states.json',
        path: '/docs/events/playback-states/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-events-errors.json',
        path: '/docs/events/errors/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-events-ui-events.json',
        path: '/docs/events/ui-events/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-events-video-events.json',
        path: '/docs/events/video-events/',
      },
      {
        componentChunkName: 'component---src-templates-md-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'docs-bla-test.json',
        path: '/docs/bla/test/',
      },
      {
        componentChunkName: 'component---src-pages-404-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: '404.json',
        path: '/404/',
      },
      {
        componentChunkName: 'component---src-pages-index-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: 'index.json',
        path: '/',
      },
      {
        componentChunkName: 'component---src-pages-404-js',
        layout: 'layout---index',
        layoutComponentChunkName: 'component---src-layouts-index-js',
        jsonName: '404-html.json',
        path: '/404.html',
      },
    ];
  },
  207: function(e, n) {
    'use strict';
    e.exports = function(e) {
      var n = e.getNextQueuedResources,
        t = e.createResourceDownload,
        o = [],
        r = [],
        a = function() {
          var e = n();
          e && (r.push(e), t(e));
        },
        u = function(e) {
          switch (e.type) {
            case 'RESOURCE_FINISHED':
              r = r.filter(function(n) {
                return n !== e.payload;
              });
              break;
            case 'ON_PRE_LOAD_PAGE_RESOURCES':
              o.push(e.payload.path);
              break;
            case 'ON_POST_LOAD_PAGE_RESOURCES':
              o = o.filter(function(n) {
                return n !== e.payload.page.path;
              });
              break;
            case 'ON_NEW_RESOURCES_ADDED':
          }
          setTimeout(function() {
            0 === r.length && 0 === o.length && a();
          }, 0);
        };
      return {
        onResourcedFinished: function(e) {
          u({ type: 'RESOURCE_FINISHED', payload: e });
        },
        onPreLoadPageResources: function(e) {
          u({ type: 'ON_PRE_LOAD_PAGE_RESOURCES', payload: e });
        },
        onPostLoadPageResources: function(e) {
          u({ type: 'ON_POST_LOAD_PAGE_RESOURCES', payload: e });
        },
        onNewResourcesAdded: function() {
          u({ type: 'ON_NEW_RESOURCES_ADDED' });
        },
        getState: function() {
          return { pagesLoading: o, resourcesDownloading: r };
        },
        empty: function() {
          (o = []), (r = []);
        },
      };
    };
  },
  0: function(e, n, t) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r =
        Object.assign ||
        function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
          return e;
        },
      a = t(66),
      u = t(1),
      s = o(u),
      i = t(60),
      c = o(i),
      l = t(61),
      f = t(339),
      d = t(302),
      p = o(d),
      m = t(205),
      h = o(m),
      g = t(44),
      y = o(g),
      v = t(367),
      j = o(v),
      x = t(368),
      R = o(x),
      b = t(203),
      w = o(b),
      N = t(202),
      C = o(N),
      P = t(132),
      _ = o(P);
    t(286),
      (window.___history = h.default),
      (window.___emitter = y.default),
      _.default.addPagesArray(j.default),
      _.default.addProdRequires(C.default),
      (window.asyncRequires = C.default),
      (window.___loader = _.default),
      (window.matchPath = l.matchPath);
    var k = R.default.reduce(function(e, n) {
        return (e[n.fromPath] = n), e;
      }, {}),
      E = function(e) {
        var n = k[e];
        return null != n && (h.default.replace(n.toPath), !0);
      };
    E(window.location.pathname),
      (0, a.apiRunnerAsync)('onClientEntry').then(function() {
        function e(e) {
          (window.___history && i !== !1) ||
            ((window.___history = e),
            (i = !0),
            e.listen(function(e, n) {
              E(e.pathname) ||
                (0, a.apiRunner)('onRouteUpdate', { location: e, action: n });
            }));
        }
        function n(e, n) {
          var t = n.location.pathname,
            o = (0, a.apiRunner)('shouldUpdateScroll', {
              prevRouterProps: e,
              pathname: t,
            });
          if (o.length > 0) return o[0];
          if (e) {
            var r = e.location.pathname;
            if (r === t) return !1;
          }
          return !0;
        }
        (0, a.apiRunner)('registerServiceWorker').length > 0 && t(208);
        var o = function(e) {
          function n(t) {
            t.page.path === _.default.getPage(e).path &&
              (y.default.off('onPostLoadPageResources', n),
              clearTimeout(o),
              window.___history.push(e));
          }
          var t = k[e];
          if ((t && (e = t.toPath), window.location.pathname !== e)) {
            var o = setTimeout(function() {
              y.default.off('onPostLoadPageResources', n),
                y.default.emit('onDelayedLoadPageResources', { pathname: e }),
                window.___history.push(e);
            }, 1e3);
            _.default.getResourcesForPathname(e)
              ? (clearTimeout(o), window.___history.push(e))
              : y.default.on('onPostLoadPageResources', n);
          }
        };
        (window.___navigateTo = o),
          (0, a.apiRunner)('onRouteUpdate', {
            location: h.default.location,
            action: h.default.action,
          });
        var i = !1,
          d = (0, a.apiRunner)('replaceRouterComponent', {
            history: h.default,
          })[0],
          m = function(e) {
            var n = e.children;
            return s.default.createElement(l.Router, { history: h.default }, n);
          },
          g = (0, l.withRouter)(w.default);
        _.default.getResourcesForPathname(window.location.pathname, function() {
          var t = function() {
              return (0, u.createElement)(
                d ? d : m,
                null,
                (0, u.createElement)(
                  f.ScrollContext,
                  { shouldUpdateScroll: n },
                  (0, u.createElement)(g, {
                    layout: !0,
                    children: function(n) {
                      return (0, u.createElement)(l.Route, {
                        render: function(t) {
                          e(t.history);
                          var o = n ? n : t;
                          return _.default.getPage(o.location.pathname)
                            ? (0, u.createElement)(
                                w.default,
                                r({ page: !0 }, o),
                              )
                            : (0, u.createElement)(w.default, {
                                page: !0,
                                location: { pathname: '/404.html' },
                              });
                        },
                      });
                    },
                  }),
                ),
              );
            },
            o = (0, a.apiRunner)('wrapRootComponent', { Root: t }, t)[0];
          (0, p.default)(function() {
            return c.default.render(
              s.default.createElement(o, null),
              'undefined' != typeof window
                ? document.getElementById('___gatsby')
                : void 0,
              function() {
                (0, a.apiRunner)('onInitialClientRender');
              },
            );
          });
        });
      });
  },
  368: function(e, n) {
    e.exports = [];
  },
  208: function(e, n, t) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = t(44),
      a = o(r),
      u = '/';
    (u = '/video-player.js/'),
      'serviceWorker' in navigator &&
        navigator.serviceWorker
          .register(u + 'sw.js')
          .then(function(e) {
            e.addEventListener('updatefound', function() {
              var n = e.installing;
              console.log('installingWorker', n),
                n.addEventListener('statechange', function() {
                  switch (n.state) {
                    case 'installed':
                      navigator.serviceWorker.controller
                        ? window.location.reload()
                        : (console.log('Content is now available offline!'),
                          a.default.emit('sw:installed'));
                      break;
                    case 'redundant':
                      console.error(
                        'The installing service worker became redundant.',
                      );
                  }
                });
            });
          })
          .catch(function(e) {
            console.error('Error during service worker registration:', e);
          });
  },
  133: function(e, n) {
    'use strict';
    (n.__esModule = !0),
      (n.default = function(e) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
        return e.substr(0, n.length) === n ? e.slice(n.length) : e;
      }),
      (e.exports = n.default);
  },
  302: function(e, n, t) {
    !(function(n, t) {
      e.exports = t();
    })('domready', function() {
      var e,
        n = [],
        t = document,
        o = t.documentElement.doScroll,
        r = 'DOMContentLoaded',
        a = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(t.readyState);
      return (
        a ||
          t.addEventListener(
            r,
            (e = function() {
              for (t.removeEventListener(r, e), a = 1; (e = n.shift()); ) e();
            }),
          ),
        function(e) {
          a ? setTimeout(e, 0) : n.push(e);
        }
      );
    });
  },
  3: function(e, n, t) {
    'use strict';
    function o() {
      function e(e) {
        var n = o.lastChild;
        return 'SCRIPT' !== n.tagName
          ? void (
              'undefined' != typeof console &&
              console.warn &&
              console.warn('Script is not a script', n)
            )
          : void (n.onload = n.onerror = function() {
              (n.onload = n.onerror = null), setTimeout(e, 0);
            });
      }
      var n,
        o = document.querySelector('head'),
        r = t.e,
        a = t.s;
      t.e = function(o, u) {
        var s = !1,
          i = !0,
          c = function(e) {
            u && (u(t, e), (u = null));
          };
        return !a && n && n[o]
          ? void c(!0)
          : (r(o, function() {
              s ||
                ((s = !0),
                i
                  ? setTimeout(function() {
                      c();
                    })
                  : c());
            }),
            void (
              s ||
              ((i = !1),
              e(function() {
                s ||
                  ((s = !0),
                  a ? (a[o] = void 0) : (n || (n = {}), (n[o] = !0)),
                  c(!0));
              }))
            ));
      };
    }
    o();
  },
  333: function(e, n) {
    'use strict';
    e.exports = function(e, n) {
      e.addEventListener('click', function(e) {
        if (
          0 !== e.button ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.defaultPrevented
        )
          return !0;
        for (var t = null, o = e.target; o.parentNode; o = o.parentNode)
          if ('A' === o.nodeName) {
            t = o;
            break;
          }
        if (!t) return !0;
        if (t.target && '_self' !== t.target.toLowerCase()) return !0;
        if (t.pathname === window.location.pathname && '' !== t.hash) return !0;
        if ('' === t.pathname) return !0;
        if (t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i) !== -1)
          return !0;
        var r = document.createElement('a');
        r.href = t.href;
        var a = document.createElement('a');
        return (
          (a.href = window.location.href),
          r.host !== a.host ||
            (e.preventDefault(), n(t.getAttribute('href')), !1)
        );
      });
    };
  },
  334: function(e, n, t) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = t(57),
      a = t(333),
      u = o(a);
    (0, u.default)(window, function(e) {
      (0, r.navigateTo)(e);
    });
  },
  335: function(e, n, t) {
    'use strict';
    t(224), t(225);
  },
  340: function(e, n, t) {
    'use strict';
    var o = function(e) {
      setTimeout(function() {
        var n = window.decodeURI(window.location.hash.replace('#', ''));
        if ('' !== n) {
          var t = document.getElementById(n);
          if (t) {
            var o = t.offsetTop;
            window.scrollTo(0, o - e);
          }
        }
      }, 10);
    };
    (n.onClientEntry = function(e, n) {
      var t = 0;
      n.offsetY && (t = n.offsetY);
    }),
      (n.onRouteUpdate = function(e, n) {
        var t = 0;
        n.offsetY && (t = n.offsetY), o(t);
      });
  },
  113: function(e, n) {
    'use strict';
    var t = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      o = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      r = Object.defineProperty,
      a = Object.getOwnPropertyNames,
      u = Object.getOwnPropertySymbols,
      s = Object.getOwnPropertyDescriptor,
      i = Object.getPrototypeOf,
      c = i && i(Object);
    e.exports = function e(n, l, f) {
      if ('string' != typeof l) {
        if (c) {
          var d = i(l);
          d && d !== c && e(n, d, f);
        }
        var p = a(l);
        u && (p = p.concat(u(l)));
        for (var m = 0; m < p.length; ++m) {
          var h = p[m];
          if (!(t[h] || o[h] || (f && f[h]))) {
            var g = s(l, h);
            try {
              r(n, h, g);
            } catch (e) {}
          }
        }
        return n;
      }
      return n;
    };
  },
  369: function(e, n) {
    function t(e) {
      return (
        (e = e || Object.create(null)),
        {
          on: function(n, t) {
            (e[n] || (e[n] = [])).push(t);
          },
          off: function(n, t) {
            e[n] && e[n].splice(e[n].indexOf(t) >>> 0, 1);
          },
          emit: function(n, t) {
            (e[n] || []).slice().map(function(e) {
              e(t);
            }),
              (e['*'] || []).slice().map(function(e) {
                e(n, t);
              });
          },
        }
      );
    }
    e.exports = t;
  },
  62: function(e, n) {
    function t() {
      throw new Error('setTimeout has not been defined');
    }
    function o() {
      throw new Error('clearTimeout has not been defined');
    }
    function r(e) {
      if (l === setTimeout) return setTimeout(e, 0);
      if ((l === t || !l) && setTimeout)
        return (l = setTimeout), setTimeout(e, 0);
      try {
        return l(e, 0);
      } catch (n) {
        try {
          return l.call(null, e, 0);
        } catch (n) {
          return l.call(this, e, 0);
        }
      }
    }
    function a(e) {
      if (f === clearTimeout) return clearTimeout(e);
      if ((f === o || !f) && clearTimeout)
        return (f = clearTimeout), clearTimeout(e);
      try {
        return f(e);
      } catch (n) {
        try {
          return f.call(null, e);
        } catch (n) {
          return f.call(this, e);
        }
      }
    }
    function u() {
      h &&
        p &&
        ((h = !1), p.length ? (m = p.concat(m)) : (g = -1), m.length && s());
    }
    function s() {
      if (!h) {
        var e = r(u);
        h = !0;
        for (var n = m.length; n; ) {
          for (p = m, m = []; ++g < n; ) p && p[g].run();
          (g = -1), (n = m.length);
        }
        (p = null), (h = !1), a(e);
      }
    }
    function i(e, n) {
      (this.fun = e), (this.array = n);
    }
    function c() {}
    var l,
      f,
      d = (e.exports = {});
    !(function() {
      try {
        l = 'function' == typeof setTimeout ? setTimeout : t;
      } catch (e) {
        l = t;
      }
      try {
        f = 'function' == typeof clearTimeout ? clearTimeout : o;
      } catch (e) {
        f = o;
      }
    })();
    var p,
      m = [],
      h = !1,
      g = -1;
    (d.nextTick = function(e) {
      var n = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
      m.push(new i(e, n)), 1 !== m.length || h || r(s);
    }),
      (i.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (d.title = 'browser'),
      (d.browser = !0),
      (d.env = {}),
      (d.argv = []),
      (d.version = ''),
      (d.versions = {}),
      (d.on = c),
      (d.addListener = c),
      (d.once = c),
      (d.off = c),
      (d.removeListener = c),
      (d.removeAllListeners = c),
      (d.emit = c),
      (d.prependListener = c),
      (d.prependOnceListener = c),
      (d.listeners = function(e) {
        return [];
      }),
      (d.binding = function(e) {
        throw new Error('process.binding is not supported');
      }),
      (d.cwd = function() {
        return '/';
      }),
      (d.chdir = function(e) {
        throw new Error('process.chdir is not supported');
      }),
      (d.umask = function() {
        return 0;
      });
  },
  314: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0x9427c64ab85d, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(213);
              });
        });
      });
  },
  315: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(35783957827783, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(214);
              });
        });
      });
  },
  316: function(e, n, t) {
    t(3),
      (e.exports = function(e) {
        return t.e(0xce3156526740, function(n, o) {
          o
            ? (console.log('bundle loading error', o), e(!0))
            : e(null, function() {
                return t(78);
              });
        });
      });
  },
});
//# sourceMappingURL=app-ffcfdbbefdf1e369af2b.js.map
