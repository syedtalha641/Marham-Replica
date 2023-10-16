import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __commonJS
} from "./chunk-2GTGKKMZ.js";

// node_modules/react-social-login-buttons/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-social-login-buttons/dist/index.js"(exports, module) {
    module.exports = function(e) {
      var t = {};
      function n(r) {
        if (t[r])
          return t[r].exports;
        var o = t[r] = { i: r, l: false, exports: {} };
        return e[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
      }
      return n.m = e, n.c = t, n.d = function(e2, t2, r) {
        n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
      }, n.r = function(e2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, n.t = function(e2, t2) {
        if (1 & t2 && (e2 = n(e2)), 8 & t2)
          return e2;
        if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
          return e2;
        var r = /* @__PURE__ */ Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
          for (var o in e2)
            n.d(r, o, (function(t3) {
              return e2[t3];
            }).bind(null, o));
        return r;
      }, n.n = function(e2) {
        var t2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return n.d(t2, "a", t2), t2;
      }, n.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, n.p = "", n(n.s = 4);
    }([function(e, t, n) {
      e.exports = n(2)();
    }, function(e, t) {
      e.exports = require_react();
    }, function(e, t, n) {
      "use strict";
      var r = n(3);
      function o() {
      }
      function a() {
      }
      a.resetWarningCache = o, e.exports = function() {
        function e2(e3, t3, n3, o2, a2, i) {
          if (i !== r) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c;
          }
        }
        function t2() {
          return e2;
        }
        e2.isRequired = e2;
        var n2 = { array: e2, bool: e2, func: e2, number: e2, object: e2, string: e2, symbol: e2, any: e2, arrayOf: t2, element: e2, elementType: e2, instanceOf: t2, node: e2, objectOf: t2, oneOf: t2, oneOfType: t2, shape: t2, exact: t2, checkPropTypes: a, resetWarningCache: o };
        return n2.PropTypes = n2, n2;
      };
    }, function(e, t, n) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function(e, t, n) {
      "use strict";
      n.r(t), n.d(t, "FacebookLoginButton", function() {
        return F;
      }), n.d(t, "GoogleLoginButton", function() {
        return V;
      }), n.d(t, "GithubLoginButton", function() {
        return R;
      }), n.d(t, "TwitterLoginButton", function() {
        return Y;
      }), n.d(t, "AmazonLoginButton", function() {
        return J;
      }), n.d(t, "InstagramLoginButton", function() {
        return Z;
      }), n.d(t, "LinkedInLoginButton", function() {
        return Q;
      }), n.d(t, "MicrosoftLoginButton", function() {
        return ee;
      }), n.d(t, "BufferLoginButton", function() {
        return re;
      }), n.d(t, "TelegramLoginButton", function() {
        return ie;
      }), n.d(t, "AppleLoginButton", function() {
        return ue;
      }), n.d(t, "DiscordLoginButton", function() {
        return pe;
      }), n.d(t, "OktaLoginButton", function() {
        return ge;
      }), n.d(t, "SlackLoginButton", function() {
        return ye;
      }), n.d(t, "YahooLoginButton", function() {
        return Ee;
      }), n.d(t, "createButton", function() {
        return M;
      }), n.d(t, "createSvgIcon", function() {
        return S;
      }), n.d(t, "ZaloLoginButton", function() {
        return ke;
      }), n.d(t, "TikTokLoginButton", function() {
        return Te;
      }), n.d(t, "MetamaskLoginButton", function() {
        return Se;
      });
      var r = {};
      n.r(r), n.d(r, "FacebookLoginButton", function() {
        return F;
      }), n.d(r, "GoogleLoginButton", function() {
        return V;
      }), n.d(r, "GithubLoginButton", function() {
        return R;
      }), n.d(r, "TwitterLoginButton", function() {
        return Y;
      }), n.d(r, "AmazonLoginButton", function() {
        return J;
      }), n.d(r, "InstagramLoginButton", function() {
        return Z;
      }), n.d(r, "LinkedInLoginButton", function() {
        return Q;
      }), n.d(r, "MicrosoftLoginButton", function() {
        return ee;
      }), n.d(r, "BufferLoginButton", function() {
        return re;
      }), n.d(r, "TelegramLoginButton", function() {
        return ie;
      }), n.d(r, "AppleLoginButton", function() {
        return ue;
      }), n.d(r, "DiscordLoginButton", function() {
        return pe;
      }), n.d(r, "OktaLoginButton", function() {
        return ge;
      }), n.d(r, "SlackLoginButton", function() {
        return ye;
      }), n.d(r, "YahooLoginButton", function() {
        return Ee;
      }), n.d(r, "createButton", function() {
        return M;
      }), n.d(r, "createSvgIcon", function() {
        return S;
      }), n.d(r, "ZaloLoginButton", function() {
        return ke;
      }), n.d(r, "TikTokLoginButton", function() {
        return Te;
      }), n.d(r, "MetamaskLoginButton", function() {
        return Se;
      });
      var o = n(1), a = n.n(o), i = n(0), c = n.n(i), l = function(e2) {
        var t2 = e2.name, n2 = e2.size, r2 = e2.format;
        return a.a.createElement("i", { className: r2(t2), style: { fontSize: n2 } });
      };
      l.propTypes = { format: c.a.func, name: c.a.string.isRequired, size: c.a.oneOfType([c.a.string, c.a.number]).isRequired }, l.defaultProps = { format: function(e2) {
        return "demo-icon icon-".concat(e2);
      }, size: 26 };
      var u = l, s = function(e2) {
        var t2 = e2.type, n2 = e2.size, r2 = e2.format, o2 = e2.color, i2 = void 0 === o2 ? "#FFFFFF" : o2;
        return "string" == typeof t2 ? a.a.createElement(u, { format: r2, name: t2, size: n2 }) : a.a.createElement(t2, { size: n2, color: i2 });
      };
      s.propTypes = { format: c.a.func, size: c.a.oneOfType([c.a.number, c.a.string]), type: c.a.oneOfType([c.a.string, c.a.node, c.a.func]), color: c.a.string };
      var f = s;
      function p(e2, t2) {
        var n2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(e2);
          t2 && (r2 = r2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), n2.push.apply(n2, r2);
        }
        return n2;
      }
      function h(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? p(Object(n2), true).forEach(function(t3) {
            d(e2, t3, n2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : p(Object(n2)).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
        }
        return e2;
      }
      function d(e2, t2, n2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
      }
      function g(e2) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      function m() {
        return (m = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2)
              Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      function v(e2, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var r2 = t2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
        }
      }
      function y(e2, t2) {
        return (y = Object.setPrototypeOf || function(e3, t3) {
          return e3.__proto__ = t3, e3;
        })(e2, t2);
      }
      function b(e2) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), true;
          } catch (e3) {
            return false;
          }
        }();
        return function() {
          var n2, r2 = E(e2);
          if (t2) {
            var o2 = E(this).constructor;
            n2 = Reflect.construct(r2, arguments, o2);
          } else
            n2 = r2.apply(this, arguments);
          return w(this, n2);
        };
      }
      function w(e2, t2) {
        return !t2 || "object" !== g(t2) && "function" != typeof t2 ? function(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }(e2) : t2;
      }
      function E(e2) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
          return e3.__proto__ || Object.getPrototypeOf(e3);
        })(e2);
      }
      var O = function(e2) {
        !function(e3, t3) {
          if ("function" != typeof t3 && null !== t3)
            throw new TypeError("Super expression must either be null or a function");
          e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), t3 && y(e3, t3);
        }(i2, e2);
        var t2, n2, r2, o2 = b(i2);
        function i2(e3) {
          var t3;
          return function(e4, t4) {
            if (!(e4 instanceof t4))
              throw new TypeError("Cannot call a class as a function");
          }(this, i2), (t3 = o2.call(this, e3)).state = { focused: false, hovered: false }, t3.handleMouseEnter = function() {
            t3.setState({ hovered: true }), "function" == typeof t3.props.onMouseEnter && t3.props.onMouseEnter();
          }, t3.handleMouseLeave = function() {
            t3.setState({ hovered: false }), "function" == typeof t3.props.onMouseLeave && t3.props.onMouseLeave();
          }, t3.handleFocus = function() {
            t3.setState({ focused: true });
          }, t3.handleBlur = function() {
            t3.setState({ focused: false });
          }, t3.handleClick = function(e4) {
            "function" == typeof t3.props.onClick && t3.props.onClick(e4);
          }, t3;
        }
        return t2 = i2, (n2 = [{ key: "render", value: function() {
          var e3 = this.props, t3 = e3.activeStyle, n3 = e3.align, r3 = e3.text, o3 = e3.children, i3 = void 0 === o3 ? r3 : o3, c2 = e3.className, l2 = e3.icon, u2 = e3.iconFormat, s2 = e3.iconSize, p2 = e3.iconColor, h2 = void 0 === p2 ? "#FFFFFF" : p2, d2 = e3.preventActiveStyles, g2 = e3.size, v2 = e3.style, y2 = e3.disabled, b2 = this.state, w2 = b2.focused, E2 = b2.hovered, O2 = k(z.button, { activeStyle: d2 ? v2 : t3, customStyle: v2, active: E2 || w2, size: g2 });
          return a.a.createElement("button", m({ type: "button", style: O2, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocus: this.handleFocus, onBlur: this.handleBlur }, { className: c2 }, { disabled: y2 }), a.a.createElement("div", { style: z.flex }, !x(s2) && a.a.createElement("div", { style: { display: "flex", justifyContent: "center", minWidth: s2 } }, a.a.createElement(f, { type: l2, size: s2, format: u2, color: h2 })), !x(s2) && a.a.createElement("div", { style: z.divider }), a.a.createElement("div", { style: { textAlign: n3, width: "100%" } }, i3)));
        } }]) && v(t2.prototype, n2), r2 && v(t2, r2), i2;
      }(o.Component), x = function(e2) {
        return "0" === e2 || "0px" === e2 || 0 === e2;
      }, k = function(e2, t2) {
        var n2 = t2.size, r2 = t2.customStyle, o2 = t2.active, a2 = t2.activeStyle;
        return h(h(h({}, e2), {}, { height: n2 }, r2), o2 && a2);
      };
      O.propTypes = { activeStyle: c.a.object, align: c.a.oneOf(["left", "right", "center"]), children: c.a.node, className: c.a.string, icon: c.a.oneOfType([c.a.string, c.a.node, c.a.func]), iconFormat: c.a.func, iconSize: c.a.string, iconColor: c.a.string, onClick: c.a.func, onMouseEnter: c.a.func, onMouseLeave: c.a.func, preventActiveStyles: c.a.bool, size: c.a.string, style: c.a.object, text: c.a.string, disabled: c.a.bool }, O.defaultProps = { align: "left", iconSize: "26px", preventActiveStyles: false, size: "50px" };
      var z = { button: { display: "block", border: 0, borderRadius: 3, boxShadow: "rgba(0, 0, 0, 0.5) 0 1px 2px", color: "#ffffff", cursor: "pointer", fontSize: "19px", margin: "5px", width: "calc(100% - 10px)", overflow: "hidden", padding: "0 10px", userSelect: "none" }, divider: { width: "10px" }, flex: { alignItems: "center", display: "flex", height: "100%" } };
      function L(e2, t2) {
        var n2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(e2);
          t2 && (r2 = r2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), n2.push.apply(n2, r2);
        }
        return n2;
      }
      function T(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? L(Object(n2), true).forEach(function(t3) {
            C(e2, t3, n2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : L(Object(n2)).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
        }
        return e2;
      }
      function C(e2, t2, n2) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
      }
      var M = function(e2) {
        return function(t2) {
          var n2 = T(T(T({ activeStyle: T(T({}, e2.activeStyle), t2.activeStyle) }, e2), t2), {}, { style: T(T({}, e2.style), t2.style) });
          return a.a.createElement(O, n2);
        };
      };
      function j() {
        return (j = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2)
              Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      var S = function e2(t2) {
        return function(n2) {
          var r2 = n2.size, o2 = n2.color;
          if ("string" == typeof t2) {
            return e2(function(e3) {
              return a.a.createElement("img", j({ src: t2 }, e3));
            });
          }
          return a.a.createElement(t2, { width: r2, height: r2, color: o2 });
        };
      }, B = { activeStyle: { background: "#293e69" }, icon: S(H), style: { background: "#3b5998" }, text: "Log in with Facebook" }, F = M(B);
      function H(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n2, viewBox: "0 0 90 90" }, a.a.createElement("g", null, a.a.createElement("path", { d: "M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z", fill: r2 })));
      }
      H.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var P = { activeStyle: { background: "#EFF0EE" }, icon: S(_), style: { background: "white", color: "black" }, text: "Log in with Google" }, V = M(P);
      function _(e2) {
        var t2 = e2.width, n2 = e2.height;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", width: t2, height: n2 }, a.a.createElement("linearGradient", { id: "95yY7w43Oj6n2vH63j6HJb", x1: "29.401", x2: "29.401", y1: "4.064", y2: "106.734", gradientTransform: "matrix(1 0 0 -1 0 66)", gradientUnits: "userSpaceOnUse" }, a.a.createElement("stop", { offset: "0", stopColor: "#ff5840" }), a.a.createElement("stop", { offset: ".007", stopColor: "#ff5840" }), a.a.createElement("stop", { offset: ".989", stopColor: "#fa528c" }), a.a.createElement("stop", { offset: "1", stopColor: "#fa528c" })), a.a.createElement("path", { fill: "url(#95yY7w43Oj6n2vH63j6HJb)", d: "M47.46,15.5l-1.37,1.48c-1.34,1.44-3.5,1.67-5.15,0.6c-2.71-1.75-6.43-3.13-11-2.37	c-4.94,0.83-9.17,3.85-11.64, 7.97l-8.03-6.08C14.99,9.82,23.2,5,32.5,5c5,0,9.94,1.56,14.27,4.46	C48.81,10.83,49.13,13.71,47.46,15.5z" }), a.a.createElement("linearGradient", { id: "95yY7w43Oj6n2vH63j6HJc", x1: "12.148", x2: "12.148", y1: ".872", y2: "47.812", gradientTransform: "matrix(1 0 0 -1 0 66)", gradientUnits: "userSpaceOnUse" }, a.a.createElement("stop", { offset: "0", stopColor: "#feaa53" }), a.a.createElement("stop", { offset: ".612", stopColor: "#ffcd49" }), a.a.createElement("stop", { offset: "1", stopColor: "#ffde44" })), a.a.createElement("path", { fill: "url(#95yY7w43Oj6n2vH63j6HJc)", d: "M16.01,30.91c-0.09,2.47,0.37,4.83,1.27,6.96l-8.21,6.05c-1.35-2.51-2.3-5.28-2.75-8.22	c-1.06-6.88,0.54-13.38, 3.95-18.6l8.03,6.08C16.93,25.47,16.1,28.11,16.01,30.91z" }), a.a.createElement("linearGradient", { id: "95yY7w43Oj6n2vH63j6HJd", x1: "29.76", x2: "29.76", y1: "32.149", y2: "-6.939", gradientTransform: "matrix(1 0 0 -1 0 66)", gradientUnits: "userSpaceOnUse" }, a.a.createElement("stop", { offset: "0", stopColor: "#42d778" }), a.a.createElement("stop", { offset: ".428", stopColor: "#3dca76" }), a.a.createElement("stop", { offset: "1", stopColor: "#34b171" })), a.a.createElement("path", { fill: "url(#95yY7w43Oj6n2vH63j6HJd)", d: "M50.45,51.28c-4.55,4.07-10.61,6.57-17.36,6.71C22.91,58.2,13.66,52.53,9.07,43.92l8.21-6.05	C19.78,43.81, 25.67,48,32.5,48c3.94,0,7.52-1.28,10.33-3.44L50.45,51.28z" }), a.a.createElement("linearGradient", { id: "95yY7w43Oj6n2vH63j6HJe", x1: "46", x2: "46", y1: "3.638", y2: "35.593", gradientTransform: "matrix(1 0 0 -1 0 66)", gradientUnits: "userSpaceOnUse" }, a.a.createElement("stop", { offset: "0", stopColor: "#155cde" }), a.a.createElement("stop", { offset: ".278", stopColor: "#1f7fe5" }), a.a.createElement("stop", { offset: ".569", stopColor: "#279ceb" }), a.a.createElement("stop", { offset: ".82", stopColor: "#2cafef" }), a.a.createElement("stop", { offset: "1", stopColor: "#2eb5f0" })), a.a.createElement("path", { fill: "url(#95yY7w43Oj6n2vH63j6HJe)", d: "M59,31.97c0.01,7.73-3.26,14.58-8.55,19.31l-7.62-6.72c2.1-1.61,3.77-3.71,4.84-6.15 c0.29-0.66-0.2-1.41-0.92-1.41H37c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4h17C56.75,27,59,29.22,59,31.97z" }));
      }
      _.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var D = { activeStyle: { background: "#555555" }, icon: S(A), style: { background: "#333333" }, text: "Log in with GitHub" }, R = M(D);
      function A(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { fill: r2, role: "img", viewBox: "0 0 24 24", width: t2, height: n2, xmlns: "http://www.w3.org/2000/svg" }, a.a.createElement("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }));
      }
      A.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var I = { activeStyle: { background: "#3b82da" }, icon: S(G), style: { background: "#5aa4eb" }, text: "Log in with Twitter" }, Y = M(I);
      function G(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n2, viewBox: "0 0 24 24" }, a.a.createElement("path", { fill: r2, d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" }));
      }
      G.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var U = { activeStyle: { background: "#ff9f23" }, icon: S(N), style: { background: "#f9ae32" }, text: "Log in with Amazon" }, J = M(U);
      function N(e2) {
        var t2 = e2.width, n2 = void 0 === t2 ? 24 : t2, r2 = e2.height, o2 = void 0 === r2 ? 24 : r2, i2 = e2.color;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: i2, width: n2, height: o2, viewBox: "0 0 24 24" }, a.a.createElement("path", { d: "M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66.704-3.716 4.06-4.838 7.066-4.838 1.537 0 3.547.41 4.758 1.574 1.538 1.436 1.392 3.352 1.392 5.438v4.923c0 1.481.616 2.13 1.192 2.929.204.287.247.63-.01.839-.647.541-1.794 1.537-2.423 2.099l-.008-.007zm3.559 1.988c-2.748 1.472-5.735 2.181-8.453 2.181-4.027 0-7.927-1.393-11.081-3.706-.277-.202-.481.154-.251.416 2.925 3.326 6.786 5.326 11.076 5.326 3.061 0 6.614-1.214 9.066-3.494.406-.377.058-.945-.357-.723zm.67 2.216c-.091.227.104.32.31.147 1.339-1.12 1.685-3.466 1.411-3.804-.272-.336-2.612-.626-4.04.377-.22.154-.182.367.062.337.805-.096 2.595-.312 2.913.098.319.41-.355 2.094-.656 2.845z", fillRule: "evenodd", clipRule: "evenodd" }));
      }
      N.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var W = { activeStyle: { background: "linear-gradient(to right, rgb(214, 146, 60) 0%, rgb(160, 11, 143) 50%, rgb(56, 10, 115) 100%)" }, icon: S(q), style: { background: "linear-gradient(to right, rgb(236, 146, 35) 0%, rgb(177, 42, 160) 50%, rgb(105, 14, 224) 100%)" }, text: "Log in with Instagram" }, Z = M(W);
      function q(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n2, viewBox: "0 0 169.063 169.063" }, a.a.createElement("g", { fill: r2 }, a.a.createElement("path", { d: "M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z" }), a.a.createElement("path", { d: "M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" }), a.a.createElement("path", { d: "M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z" })));
      }
      q.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var K = { activeStyle: { background: "rgb(7, 112, 169)" }, icon: S(X), style: { background: "rgb(26, 129, 185)" }, text: "Log in with LinkedIn" }, Q = M(K);
      function X(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n2, viewBox: "0 0 430.117 430.117" }, a.a.createElement("g", null, a.a.createElement("path", { d: "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z", fill: r2 })));
      }
      X.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var $ = { activeStyle: { background: "#555555" }, icon: S(te), style: { background: "#333333" }, text: "Log in with Microsoft" }, ee = M($);
      function te(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n2, fill: r2, x: "0px", y: "0px", viewBox: "0 0 48 48" }, a.a.createElement("path", { fill: "#ff5722", d: "M6 6H22V22H6z", transform: "rotate(-180 14 14)" }), a.a.createElement("path", { fill: "#4caf50", d: "M26 6H42V22H26z", transform: "rotate(-180 34 14)" }), a.a.createElement("path", { fill: "#ffc107", d: "M26 26H42V42H26z", transform: "rotate(-180 34 34)" }), a.a.createElement("path", { fill: "#03a9f4", d: "M6 26H22V42H6z", transform: "rotate(-180 14 34)" }));
      }
      te.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var ne = { activeStyle: { background: "#1171BB" }, icon: S(oe), style: { background: "#168EEA" }, text: "Log in with Buffer" }, re = M(ne);
      function oe(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { "aria-labelledby": "simpleicons-buffer-icon", role: "img", viewBox: "0 0 24 24", width: t2, height: n2, xmlns: "http://www.w3.org/2000/svg" }, a.a.createElement("path", { d: "M23.784 18.24c.287.142.287.267 0 .374l-11.357 5.223c-.287.145-.57.145-.854 0L.213 18.614c-.284-.107-.284-.232 0-.375l2.722-1.23c.284-.14.57-.14.852 0l7.787 3.573c.285.14.57.14.854 0l7.787-3.574c.283-.14.568-.14.852 0l2.717 1.23zm0-6.454c.287.143.287.285 0 .426L12.427 17.44c-.287.104-.57.104-.854 0L.213 12.21c-.284-.143-.284-.284 0-.426l2.722-1.227c.284-.144.57-.144.852 0l7.787 3.57c.285.144.57.144.854 0l7.787-3.57c.283-.144.568-.144.852 0l2.717 1.226zM.214 5.76c-.285-.143-.285-.267 0-.375L11.574.16c.283-.14.57-.14.852 0l11.358 5.23c.287.107.287.232 0 .375l-11.357 5.223c-.287.143-.57.143-.854 0L.213 5.76z", fill: r2 }));
      }
      oe.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var ae = { activeStyle: { background: "#0088cc" }, icon: S(ce), style: { background: "#54a9eb" }, text: "Log in with Telegram" }, ie = M(ae);
      function ce(e2) {
        var t2 = e2.width, n2 = e2.height;
        e2.color;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 240 240", width: t2, height: n2, style: { transform: "scale(1.5)" } }, a.a.createElement("defs", null, a.a.createElement("linearGradient", { id: "b", x1: ".66", x2: ".851", y1: ".437", y2: ".802" }, a.a.createElement("stop", { offset: "0", stopColor: "#eff7fc" }), a.a.createElement("stop", { offset: "1", stopColor: "#fff" }))), a.a.createElement("circle", { cx: "120", cy: "120", r: "120", fill: "url(#a)" }), a.a.createElement("path", { fill: "#c8daea", d: "M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80" }), a.a.createElement("path", { fill: "#a9c9dd", d: "M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035" }), a.a.createElement("path", { fill: "url(#b)", d: "M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258" }));
      }
      ce.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var le = { activeStyle: { background: "#3333331c" }, icon: S(se), style: { background: "#FFFFFF", color: "#000000" }, text: "Log in with Apple" }, ue = M(le);
      function se(e2) {
        var t2 = e2.width, n2 = e2.height;
        e2.color;
        return a.a.createElement("svg", { width: t2, height: n2, viewBox: "0 0 56 56", style: { transform: "scale(2.5)" }, version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, a.a.createElement("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }, a.a.createElement("path", { d: "M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z", fill: "#000000", fillRule: "nonzero" })));
      }
      se.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var fe = { activeStyle: { background: "#697ec4" }, icon: S(he), style: { background: "#7289DA" }, text: "Log in with Discord" }, pe = M(fe);
      function he(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: r2, width: t2, height: n2 }, a.a.createElement("title", null, "Discord icon"), a.a.createElement("path", { d: "M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" }));
      }
      he.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var de = { activeStyle: { background: "#f5f5f5" }, icon: S(me), style: { background: "white", color: "black" }, text: "Log in with Okta" }, ge = M(de);
      function me(e2) {
        var t2 = e2.width, n2 = void 0 === t2 ? 24 : t2, r2 = e2.height, o2 = void 0 === r2 ? 24 : r2;
        return a.a.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 400 134.7", width: n2, height: o2 }, a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", { fill: "#007DC1", d: "M50.3,33.8C22.5,33.8,0,56.3,0,84.1s22.5,50.3,50.3,50.3s50.3-22.5,50.3-50.3S78.1,33.8,50.3,33.8z M50.3,109.3c-13.9,0-25.2-11.3-25.2-25.2s11.3-25.2,25.2-25.2s25.2,11.3,25.2,25.2S64.2,109.3,50.3,109.3z" })), a.a.createElement("path", { fill: "#007DC1", d: "M138.7,101c0-4,4.8-5.9,7.6-3.1c12.6,12.8,33.4,34.8,33.5,34.9c0.3,0.3,0.6,0.8,1.8,1.2 c0.5,0.2,1.3,0.2,2.2,0.2l22.7,0c4.1,0,5.3-4.7,3.4-7.1l-37.6-38.5l-2-2c-4.3-5.1-3.8-7.1,1.1-12.3L201.2,41c1.9-2.4,0.7-7-3.5-7 h-20.6c-0.8,0-1.4,0-2,0.2c-1.2,0.4-1.7,0.8-2,1.2c-0.1,0.1-16.6,17.9-26.8,28.8c-2.8,3-7.8,1-7.8-3.1l0-57.1c0-2.9-2.4-4-4.3-4 h-16.8c-2.9,0-4.3,1.9-4.3,3.6v126.6c0,2.9,2.4,3.7,4.4,3.7h16.8c2.6,0,4.3-1.9,4.3-3.8v-1.3V101z" }), a.a.createElement("path", { fill: "#007DC1", d: "M275.9,129.6l-1.8-16.8c-0.2-2.3-2.4-3.9-4.7-3.5c-1.3,0.2-2.6,0.3-3.9,0.3c-13.4,0-24.3-10.5-25.1-23.8 c0-0.4,0-0.9,0-1.4V63.8c0-2.7,2-4.9,4.7-4.9l22.5,0c1.6,0,4-1.4,4-4.3V38.7c0-3.1-2-4.7-3.8-4.7h-22.7c-2.6,0-4.7-1.9-4.8-4.5 l0-25.5c0-1.6-1.2-4-4.3-4h-16.7c-2.1,0-4.1,1.3-4.1,3.9c0,0,0,81.5,0,81.9c0.7,27.2,23,48.9,50.3,48.9c2.3,0,4.5-0.2,6.7-0.5 C274.6,133.9,276.2,131.9,275.9,129.6z" })), a.a.createElement("g", null, a.a.createElement("path", { fill: "#007DC1", d: "M397.1,108.5c-14.2,0-16.4-5.1-16.4-24.2c0-0.1,0-0.1,0-0.2l0-45.9c0-1.6-1.2-4.3-4.4-4.3h-16.8 c-2.1,0-4.4,1.7-4.4,4.3l0,2.1c-7.3-4.2-15.8-6.6-24.8-6.6c-27.8,0-50.3,22.5-50.3,50.3c0,27.8,22.5,50.3,50.3,50.3 c12.5,0,23.9-4.6,32.7-12.1c4.7,7.2,12.3,12,24.2,12.1c2,0,12.8,0.4,12.8-4.7v-17.9C400,110.2,398.8,108.5,397.1,108.5z M330.4,109.3c-13.9,0-25.2-11.3-25.2-25.2c0-13.9,11.3-25.2,25.2-25.2c13.9,0,25.2,11.3,25.2,25.2 C355.5,98,344.2,109.3,330.4,109.3z" })));
      }
      me.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var ve = { activeStyle: { background: "#f5f5f5" }, icon: S(be), style: { background: "white", color: "black" }, text: "Log in with Slack" }, ye = M(ve);
      function be(e2) {
        var t2 = e2.width, n2 = void 0 === t2 ? 24 : t2, r2 = e2.height, o2 = void 0 === r2 ? 24 : r2, i2 = e2.color;
        return a.a.createElement("svg", { enableBackground: "new 0 0 2447.6 2452.5", viewBox: "0 0 2447.6 2452.5", fill: i2, width: n2, height: o2, xmlns: "http://www.w3.org/2000/svg" }, a.a.createElement("g", { clipRule: "evenodd", fillRule: "evenodd" }, a.a.createElement("path", { d: "m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z", fill: "#36c5f0" }), a.a.createElement("path", { d: "m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z", fill: "#2eb67d" }), a.a.createElement("path", { d: "m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z", fill: "#ecb22e" }), a.a.createElement("path", { d: "m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0", fill: "#e01e5a" })));
      }
      be.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]), color: c.a.string };
      var we = { activeStyle: { background: "#ac3ade" }, icon: S(Oe), style: { background: "#720E9E" }, text: "Log in with Yahoo" }, Ee = M(we);
      function Oe(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 291.319 291.319", xstyle: "enable-background:new 0 0 291.319 291.319;", xmlSpace: "preserve", fill: r2, width: t2, height: n2 }, a.a.createElement("g", null, a.a.createElement("path", { fill: "transparent", d: "M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659 S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z" }), a.a.createElement("path", { fill: "#FFFFFF", d: "M212.353,114.98l0.155-0.027l4.825-5.371l-0.237-0.018l0.51-0.801h-67.595l2.604,9.249h18.444 l-31.044,28.722c-6.336-9.24-21.184-30.479-31.544-46.411h19.254v-6.555l0.264-1.884l-0.264-0.036v-0.765H54.631v9.24H77.49 c8.876,7.328,47.358,54.049,48.76,58.51c0.564,4.179,1.366,28.841-0.291,30.698c-1.994,2.868-22.814,1.32-26.483,1.593 l-0.137,9.058c6.7,0.2,26.801-0.009,33.584-0.009c13.364,0,36.77-0.346,40.065-0.082l0.41-8.576l-26.901-0.401 c-0.564-3.887-1.183-28.422-0.619-31.098c2.54-7.765,43.816-39.902,48.059-41.112l3.997-0.901h12.472 C210.405,118.002,212.353,114.98,212.353,114.98z M202.266,179.079l11.689,0.892l13.628-49.979 c-2.276-0.082-22.95-1.93-25.636-2.431L202.266,179.079z M200.245,187.091l0.064,12.208l5.917,0.492l6.391,0.446l1.875-11.944 l-6.737-0.31C207.756,187.983,200.245,187.091,200.245,187.091z" })));
      }
      Oe.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var xe = { activeStyle: { background: "#008FF3" }, icon: S(ze), style: { background: "#0573ff" }, text: "Log in with Zalo" }, ke = M(xe);
      function ze(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n2, viewBox: "0 0 24 24" }, a.a.createElement("path", { fill: r2, d: "M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" }));
      }
      ze.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var Le = { activeStyle: { background: "#333333" }, icon: S(Ce), style: { background: "#000000", color: "#FFFFFF" }, text: "Log in with TikTok" }, Te = M(Le);
      function Ce(e2) {
        var t2 = e2.width, n2 = e2.height, r2 = e2.color;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n2, fill: r2, viewBox: "0 0 512 512" }, a.a.createElement("path", { d: "M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z" }));
      }
      function Me() {
        return (Me = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2)
              Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      Ce.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      var je = { activeStyle: { background: "#eeeeee" }, icon: S(Be), style: { background: "#ffffff", color: "#333333" }, text: "Log in with Metamask" }, Se = M(je);
      function Be(e2) {
        e2.width, e2.height, e2.color;
        return a.a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0", y: "0", version: "1.1", viewBox: "0 0 318.6 318.6", xmlSpace: "preserve" }, a.a.createElement("path", { fill: "#e2761b", stroke: "#e2761b", strokeLinecap: "round", strokeLinejoin: "round", d: "M274.1 35.5l-99.5 73.9L193 65.8z" }), a.a.createElement("path", Me({ d: "M44.4 35.5l98.7 74.6-17.5-44.3zm193.9 171.3l-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z" }, Fe)), a.a.createElement("path", Me({ d: "M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zm111.3 0l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5l33.9 16.5-4.7-39.3z" }, Fe)), a.a.createElement("path", { fill: "#d7c1b3", stroke: "#d7c1b3", strokeLinecap: "round", strokeLinejoin: "round", d: "M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zm-105 0l31.5 14.9-.2-9.3 2.5-22.1z" }), a.a.createElement("path", { fill: "#233447", stroke: "#233447", strokeLinecap: "round", strokeLinejoin: "round", d: "M138.8 193.5l-28.2-8.3 19.9-9.1zm40.9 0l8.3-17.4 20 9.1z" }), a.a.createElement("path", { fill: "#cd6116", stroke: "#cd6116", strokeLinecap: "round", strokeLinejoin: "round", d: "M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z" }), a.a.createElement("path", { fill: "#e4751f", stroke: "#e4751f", strokeLinecap: "round", strokeLinejoin: "round", d: "M87.8 162.1l23.6 46-.8-22.9zm120.3 23.1l-1 22.9 23.7-46zm-64-20.6l-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0l-2.7 18 1.2 45 6.7-34.1z" }), a.a.createElement("path", Me({ d: "M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z" }, He)), a.a.createElement("path", { fill: "#c0ad9e", stroke: "#c0ad9e", strokeLinecap: "round", strokeLinejoin: "round", d: "M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z" }), a.a.createElement("path", { fill: "#161616", stroke: "#161616", strokeLinecap: "round", strokeLinejoin: "round", d: "M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z" }), a.a.createElement("path", { fill: "#763d16", stroke: "#763d16", strokeLinecap: "round", strokeLinejoin: "round", d: "M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z" }), a.a.createElement("path", Me({ d: "M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z" }, He)));
      }
      var Fe = { fill: "#e4761b", stroke: "#e4761b", strokeLinecap: "round", strokeLinejoin: "round" }, He = { fill: "#f6851b", stroke: "#f6851b", strokeLinecap: "round", strokeLinejoin: "round" };
      Be.propTypes = { width: c.a.oneOfType([c.a.number, c.a.string]), height: c.a.oneOfType([c.a.number, c.a.string]) };
      t.default = r;
    }]);
  }
});
export default require_dist();
//# sourceMappingURL=react-social-login-buttons.js.map
