import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/reactjs-social-login/dist/reactjs-social-login.modern.js
var import_react = __toESM(require_react());
function c() {
  return (c = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var o2 = arguments[t2];
      for (var n2 in o2)
        Object.prototype.hasOwnProperty.call(o2, n2) && (e2[n2] = o2[n2]);
    }
    return e2;
  }).apply(this, arguments);
}
function a(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var o2 = 0, n2 = new Array(t2); o2 < t2; o2++)
    n2[o2] = e2[o2];
  return n2;
}
var s = window;
var d = (0, import_react.memo)(function(t2) {
  var a2 = t2.state, d2 = void 0 === a2 ? "" : a2, l2 = t2.client_id, u2 = t2.className, p2 = t2.redirect_uri, h2 = t2.scope, m2 = void 0 === h2 ? "profile" : h2, v2 = t2.isOnlyGetToken, f2 = void 0 !== v2 && v2, g2 = t2.scope_data, w2 = void 0 === g2 ? { profile: { essential: true } } : g2, _2 = t2.response_type, y2 = void 0 === _2 ? "token" : _2, k2 = t2.children, b2 = t2.onReject, S2 = t2.onResolve, P = t2.onLoginStart, L = (0, import_react.useRef)(null), j = (0, import_react.useState)(false), E = j[0], I = j[1];
  (0, import_react.useEffect)(function() {
    !E && G();
  }, [E]), (0, import_react.useEffect)(function() {
    return function() {
      L.current && L.current.remove();
    };
  }, []);
  var T = (0, import_react.useCallback)(function() {
    return !!document.getElementById("amazon-login");
  }, []), R = (0, import_react.useCallback)(function(e2, t3, o2, n2, r2) {
    void 0 === t3 && (t3 = "script");
    var i2 = e2.createElement(t3);
    i2.id = o2, i2.src = n2, i2.async = true, i2.defer = true;
    var c2 = document.getElementsByTagName("script")[0];
    L.current = i2, c2 && c2.parentNode && c2.parentNode.insertBefore(i2, c2), i2.onload = r2;
  }, []), N = (0, import_react.useCallback)(function(e2) {
    try {
      return fetch("https://api.amazon.com/user/profile", { headers: { Authorization: "Bearer " + e2.access_token } }).then(function(e3) {
        return e3.json();
      }).then(function(t3) {
        S2({ provider: "amazon", data: c({}, t3, e2) });
      }).catch(function(e3) {
        b2(e3);
      }).finally(function() {
      }), Promise.resolve();
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [b2, S2]), z = (0, import_react.useCallback)(function(e2) {
    f2 ? S2({ provider: "amazon", data: c({}, e2) }) : N(e2);
  }, [N, S2, f2]), C = (0, import_react.useCallback)(function(e2) {
    b2(e2);
  }, [b2]), G = (0, import_react.useCallback)(function() {
    T() ? I(true) : R(document, "script", "amazon-login", "https://assets.loginwithamazon.com/sdk/na/login1.js", function() {
      s.amazon.Login.setClientId(l2), I(true);
    });
  }, [T, l2, R]), O = (0, import_react.useCallback)(function() {
    E && (s.amazon ? (P && P(), s.amazon.Login.authorize({ scope: m2, scope_data: w2, response_type: y2, redirect_uri: p2, state: d2 }, function(e2) {
      e2.error ? C(e2.error) : z(e2);
    })) : (G(), b2("Google SDK isn't loaded!")));
  }, [G, m2, d2, b2, w2, E, C, P, p2, y2, z]);
  return import_react.default.createElement("div", { className: u2, onClick: O }, k2);
});
var l = window;
var u = (0, import_react.memo)(function(t2) {
  var a2 = t2.appId, s2 = t2.scope, d2 = void 0 === s2 ? "email,public_profile" : s2, u2 = t2.state, p2 = void 0 === u2 || u2, h2 = t2.xfbml, m2 = void 0 === h2 || h2, v2 = t2.cookie, f2 = void 0 === v2 || v2, g2 = t2.version, w2 = void 0 === g2 ? "v2.7" : g2, _2 = t2.language, y2 = void 0 === _2 ? "en_EN" : _2, k2 = t2.auth_type, b2 = void 0 === k2 ? "" : k2, S2 = t2.className, P = t2.onLoginStart, L = t2.onReject, j = t2.onResolve, E = t2.redirect_uri, I = t2.fieldsProfile, T = void 0 === I ? "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender" : I, R = t2.response_type, N = void 0 === R ? "code" : R, z = t2.return_scopes, C = void 0 === z || z, G = t2.isOnlyGetToken, O = void 0 !== G && G, x = t2.children, B = (0, import_react.useRef)(null), A = (0, import_react.useState)(false), U = A[0], F = A[1], D = (0, import_react.useState)(false), H = D[0], q = D[1];
  (0, import_react.useEffect)(function() {
    !U && V();
  }, [U]), (0, import_react.useEffect)(function() {
    return function() {
      B.current && B.current.remove();
    };
  }, []);
  var K = (0, import_react.useCallback)(function(e2, t3) {
    var o2 = e2.createElement("script");
    o2.id = "facebook-jssdk", o2.src = "https://connect.facebook.net/en_EN/sdk.js";
    var n2 = e2.getElementsByTagName("script")[0];
    n2 && n2.parentNode && n2.parentNode.insertBefore(o2, n2), t3();
  }, []), M = (0, import_react.useCallback)(function() {
    return !!document.getElementById("facebook-jssdk");
  }, []), J = (0, import_react.useCallback)(function(e2, t3) {
    var o2 = window;
    o2.fbAsyncInit = function() {
      o2.FB && o2.FB.init(c({}, e2)), F(true);
      var n2 = t3.getElementById("fb-root");
      n2 || ((n2 = t3.createElement("div")).id = "fb-root", t3.body.appendChild(n2)), B.current = n2;
    };
  }, []), $ = (0, import_react.useCallback)(function(e2) {
    l.FB.api("/me", { locale: y2, fields: T }, function(t3) {
      j({ provider: "facebook", data: c({}, e2, t3) });
    });
  }, [T, y2, j]), Q = (0, import_react.useCallback)(function(e2) {
    console.log("🚀 ~ file: index.tsx:127 ~ response:", e2), e2.authResponse ? O ? j({ provider: "facebook", data: c({}, e2.authResponse) }) : $(e2.authResponse) : L(e2), q(false);
  }, [$, O, L, j]), V = (0, import_react.useCallback)(function() {
    M() ? F(true) : K(document, function() {
      J({ appId: a2, xfbml: m2, version: w2, state: p2, cookie: f2, redirect_uri: E, response_type: N }, document);
    });
  }, [p2, a2, m2, f2, w2, J, E, N, K, M]), W = (0, import_react.useCallback)(function() {
    U && !H && (l.FB ? (q(true), P && P(), l.FB.login(Q, { scope: d2, return_scopes: C, auth_type: b2 })) : (V(), L("Fb isn't loaded!"), q(false)));
  }, [V, d2, L, b2, U, P, H, C, Q]);
  return import_react.default.createElement("div", { className: S2, onClick: W }, x);
});
var p = "875c0462-6309-4ddf-9889-5227b1acc82c";
var h = window;
var m = (0, import_react.memo)(function(t2) {
  var a2 = t2.client_id, s2 = t2.scope, d2 = void 0 === s2 ? "https://www.googleapis.com/auth/userinfo.profile" : s2, l2 = t2.prompt, u2 = void 0 === l2 ? "select_account" : l2, m2 = t2.typeResponse, v2 = void 0 === m2 ? "accessToken" : m2, f2 = t2.ux_mode, g2 = t2.className, w2 = void 0 === g2 ? "" : g2, _2 = t2.login_hint, y2 = void 0 === _2 ? "" : _2, k2 = t2.access_type, b2 = void 0 === k2 ? "online" : k2, S2 = t2.onLoginStart, P = t2.onReject, L = t2.onResolve, j = t2.redirect_uri, E = void 0 === j ? "/" : j, I = t2.auto_select, T = void 0 !== I && I, R = t2.isOnlyGetToken, N = void 0 !== R && R, z = t2.cookie_policy, C = void 0 === z ? "single_host_origin" : z, G = t2.hosted_domain, O = void 0 === G ? "" : G, x = t2.discoveryDocs, B = void 0 === x ? "" : x, A = t2.children, U = t2.fetch_basic_profile, F = void 0 === U || U, D = (0, import_react.useRef)(null), H = (0, import_react.useState)(false), q = H[0], K = H[1], M = (0, import_react.useState)(null), J = M[0], $ = M[1];
  (0, import_react.useEffect)(function() {
    !q && Z();
  }, [q]), (0, import_react.useEffect)(function() {
    return function() {
      D.current && D.current.remove();
    };
  }, []);
  var Q = (0, import_react.useCallback)(function() {
    return !!document.getElementById("google-login");
  }, []), V = (0, import_react.useCallback)(function(e2, t3, o2, n2, r2) {
    void 0 === t3 && (t3 = "script");
    var i2 = e2.createElement(t3);
    i2.id = o2, i2.src = n2, i2.async = true, i2.defer = true;
    var c2 = document.getElementsByTagName("script")[0];
    D.current = i2, c2 && c2.parentNode && c2.parentNode.insertBefore(i2, c2), i2.onload = r2;
  }, []), W = (0, import_react.useCallback)(function(e2) {
    if ("accessToken" === v2) {
      var t3 = new Headers({ "Content-Type": "application/x-www-form-urlencoded", "x-cors-grida-api-key": p, Authorization: "Bearer " + e2.access_token });
      fetch("https://cors.bridged.cc/https://www.googleapis.com/oauth2/v3/userinfo?alt=json", { method: "GET", headers: t3 }).then(function(e3) {
        return e3.json();
      }).then(function(t4) {
        var o2 = c({}, e2, t4);
        L({ provider: "google", data: o2 });
      }).catch(function(e3) {
        P(e3);
      });
    } else
      fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + e2.credential, { method: "GET" }).then(function(e3) {
        return e3.json();
      }).then(function(t4) {
        var o2 = c({}, e2, t4);
        L({ provider: "google", data: o2 });
      }).catch(function(e3) {
        P(e3);
      });
  }, [v2, P, L]), X = (0, import_react.useCallback)(function(e2) {
    e2 && "offline" === b2 || N ? L({ provider: "google", data: e2 }) : W(e2);
  }, [b2, N, W, L]), Y = (0, import_react.useCallback)(function(e2) {
    P({ provider: "google", data: e2 });
  }, [P]), Z = (0, import_react.useCallback)(function() {
    Q() ? K(true) : V(document, "script", "google-login", "https://accounts.google.com/gsi/client", function() {
      var e2 = { client_id: a2, ux_mode: f2 }, t3 = null;
      if ("idToken" === v2)
        h.google.accounts.id.initialize(c({}, e2, { auto_select: T, prompt: "select_account", login_uri: E, callback: X, native_callback: X, error_callback: Y }));
      else {
        var o2 = c({}, e2, { scope: d2, prompt: u2, login_hint: y2, access_type: b2, hosted_domain: O, redirect_uri: E, cookie_policy: C, discoveryDocs: B, immediate: true, fetch_basic_profile: F, callback: X, error_callback: Y });
        t3 = "offline" === b2 ? h.google.accounts.oauth2.initCodeClient(o2) : h.google.accounts.oauth2.initTokenClient(o2);
      }
      t3 && $(t3), K(true);
    });
  }, [d2, u2, f2, a2, y2, T, b2, E, v2, B, C, O, X, Y, F, V, Q]), ee = (0, import_react.useCallback)(function() {
    q && (h.google ? (S2 && S2(), J ? "offline" === b2 ? J.requestCode() : J.requestAccessToken() : h.google.accounts.id.prompt()) : (Z(), P("Google SDK isn't loaded!")));
  }, [b2, J, q, Z, S2, P]);
  return import_react.default.createElement("div", { className: w2, onClick: ee }, A);
});
var v = (0, import_react.memo)(function(t2) {
  var o2 = t2.state, n2 = void 0 === o2 ? "" : o2, s2 = t2.scope, d2 = void 0 === s2 ? "repo,gist" : s2, l2 = t2.client_id, u2 = t2.client_secret, h2 = t2.className, m2 = void 0 === h2 ? "" : h2, v2 = t2.redirect_uri, f2 = t2.allow_signup, g2 = void 0 !== f2 && f2, w2 = t2.isOnlyGetToken, _2 = void 0 !== w2 && w2, y2 = t2.isOnlyGetCode, k2 = void 0 !== y2 && y2, b2 = t2.children, S2 = t2.onReject, P = t2.onResolve, L = t2.onLoginStart;
  (0, import_react.useEffect)(function() {
    var e2 = new URL(window.location.href), t3 = e2.searchParams.get("code"), o3 = e2.searchParams.get("state");
    null != o3 && o3.includes("_github") && t3 && (localStorage.setItem("github", t3), window.close());
  }, []);
  var j = (0, import_react.useCallback)(function(e2) {
    fetch("https://cors.bridged.cc/https://api.github.com//user", { method: "GET", headers: { Authorization: "token " + e2.access_token, "x-cors-grida-api-key": p } }).then(function(e3) {
      return e3.json();
    }).then(function(t3) {
      P({ provider: "github", data: c({}, t3, e2) });
    }).catch(function(e3) {
      S2(e3);
    });
  }, [S2, P]), E = (0, import_react.useCallback)(function(e2) {
    if (k2)
      P({ provider: "github", data: { code: e2 } });
    else {
      var t3 = { code: e2, state: n2, redirect_uri: v2, client_id: l2, client_secret: u2 }, o3 = new Headers({ "Content-Type": "application/x-www-form-urlencoded", "x-cors-grida-api-key": p });
      fetch("https://cors.bridged.cc/https://github.com/login/oauth/access_token", { method: "POST", headers: o3, body: new URLSearchParams(t3) }).then(function(e3) {
        return e3.text();
      }).then(function(e3) {
        for (var t4, o4 = {}, n3 = function(e4, t5) {
          var o5;
          if ("undefined" == typeof Symbol || null == e4[Symbol.iterator]) {
            if (Array.isArray(e4) || (o5 = function(e5, t6) {
              if (e5) {
                if ("string" == typeof e5)
                  return a(e5, void 0);
                var o6 = Object.prototype.toString.call(e5).slice(8, -1);
                return "Object" === o6 && e5.constructor && (o6 = e5.constructor.name), "Map" === o6 || "Set" === o6 ? Array.from(e5) : "Arguments" === o6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o6) ? a(e5, void 0) : void 0;
              }
            }(e4))) {
              o5 && (e4 = o5);
              var n4 = 0;
              return function() {
                return n4 >= e4.length ? { done: true } : { done: false, value: e4[n4++] };
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          return (o5 = e4[Symbol.iterator]()).next.bind(o5);
        }(new URLSearchParams(e3)); !(t4 = n3()).done; ) {
          var r2 = t4.value;
          o4[r2[0]] = r2[1];
        }
        o4.access_token ? _2 ? P({ provider: "github", data: o4 }) : j(o4) : S2("no data");
      }).catch(function(e3) {
        S2(e3);
      });
    }
  }, [n2, S2, j, P, l2, v2, u2, k2, _2]), I = (0, import_react.useCallback)(function(e2) {
    var t3 = e2.type, o3 = e2.code, n3 = e2.provider;
    try {
      return Promise.resolve("code" === t3 && "github" === n3 && o3 && E(o3));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [E]), T = (0, import_react.useCallback)(function() {
    window.removeEventListener("storage", T, false);
    var e2 = localStorage.getItem("github");
    e2 && (I({ provider: "github", type: "code", code: e2 }), localStorage.removeItem("github"));
  }, [I]), R = (0, import_react.useCallback)(function() {
    L && L(), window.addEventListener("storage", T, false);
    var e2 = window.screen.width / 2 - 225, t3 = window.screen.height / 2 - 365;
    window.open("https://github.com/login/oauth/authorize?client_id=" + l2 + "&scope=" + d2 + "&state=" + n2 + "_github&redirect_uri=" + v2 + "&allow_signup=" + g2, "Github", "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top=" + t3 + ", left=" + e2);
  }, [d2, n2, l2, v2, g2, L, T]);
  return import_react.default.createElement("div", { className: m2, onClick: R }, b2);
});
var f = (0, import_react.memo)(function(t2) {
  var o2 = t2.state, n2 = void 0 === o2 ? "" : o2, a2 = t2.client_id, s2 = t2.client_secret, d2 = t2.className, l2 = t2.redirect_uri, u2 = t2.fields, h2 = void 0 === u2 ? "id,username,account_type,media_count" : u2, m2 = t2.scope, v2 = void 0 === m2 ? "user_profile,user_media" : m2, f2 = t2.response_type, g2 = void 0 === f2 ? "code" : f2, w2 = t2.isOnlyGetCode, _2 = void 0 !== w2 && w2, y2 = t2.isOnlyGetToken, k2 = void 0 !== y2 && y2, b2 = t2.children, S2 = t2.onReject, P = t2.onResolve, L = t2.onLoginStart;
  (0, import_react.useEffect)(function() {
    var e2 = new URL(window.location.href), t3 = e2.searchParams.get("code"), o3 = e2.searchParams.get("state");
    null != o3 && o3.includes("_instagram") && t3 && (localStorage.setItem("instagram", t3), window.close());
  }, []);
  var j = (0, import_react.useCallback)(function(e2) {
    fetch("https://cors.bridged.cc/https://graph.instagram.com//me?fields=" + h2 + "&access_token=" + e2.access_token, { method: "GET", headers: { "x-cors-grida-api-key": p } }).then(function(e3) {
      return e3.json();
    }).then(function(t3) {
      P({ provider: "instagram", data: c({}, t3, e2) });
    }).catch(function(e3) {
      S2(e3);
    });
  }, [h2, S2, P]), E = (0, import_react.useCallback)(function(e2) {
    if (_2)
      P({ provider: "instagram", data: { code: e2 } });
    else {
      var t3 = { grant_type: "authorization_code", code: e2, redirect_uri: l2, client_id: a2, client_secret: s2 }, o3 = new Headers({ "Content-Type": "application/x-www-form-urlencoded", "x-cors-grida-api-key": p });
      fetch("https://cors.bridged.cc/https://api.instagram.com/oauth/access_token", { method: "POST", headers: o3, body: new URLSearchParams(t3) }).then(function(e3) {
        return e3.json();
      }).then(function(e3) {
        e3.access_token ? k2 ? P({ provider: "instagram", data: e3 }) : j(e3) : S2("no data");
      }).catch(function(e3) {
        S2(e3);
      }).finally(function() {
      });
    }
  }, [S2, P, j, a2, l2, s2, _2, k2]), I = (0, import_react.useCallback)(function(e2) {
    var t3 = e2.type, o3 = e2.code, n3 = e2.provider;
    try {
      return Promise.resolve("code" === t3 && "instagram" === n3 && o3 && E(o3));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [E]), T = (0, import_react.useCallback)(function() {
    window.removeEventListener("storage", T, false);
    var e2 = localStorage.getItem("instagram");
    e2 && (I({ provider: "instagram", type: "code", code: e2 }), localStorage.removeItem("instagram"));
  }, [I]), R = (0, import_react.useCallback)(function() {
    L && L(), window.addEventListener("storage", T, false);
    var e2 = window.screen.width / 2 - 225, t3 = window.screen.height / 2 - 365;
    window.open("https://api.instagram.com/oauth/authorize?response_type=" + g2 + "&client_id=" + a2 + "&scope=" + v2 + "&state=" + n2 + "_instagram&redirect_uri=" + l2, "Instagram", "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top=" + t3 + ", left=" + e2);
  }, [v2, n2, a2, l2, L, g2, T]);
  return import_react.default.createElement("div", { className: d2, onClick: R }, b2);
});
var g = (0, import_react.memo)(function(t2) {
  var o2 = t2.tenant, n2 = void 0 === o2 ? "common" : o2, a2 = t2.state, s2 = void 0 === a2 ? "" : a2, d2 = t2.client_id, l2 = t2.className, u2 = t2.redirect_uri, p2 = t2.scope, h2 = void 0 === p2 ? "profile openid email" : p2, m2 = t2.response_type, v2 = void 0 === m2 ? "code" : m2, f2 = t2.response_mode, g2 = void 0 === f2 ? "query" : f2, w2 = t2.children, _2 = t2.code_challenge, y2 = void 0 === _2 ? "19cfc47c216dacba8ca23eeee817603e2ba34fe0976378662ba31688ed302fa9" : _2, k2 = t2.code_challenge_method, b2 = void 0 === k2 ? "plain" : k2, S2 = t2.prompt, P = void 0 === S2 ? "select_account" : S2, L = t2.isOnlyGetCode, j = void 0 !== L && L, E = t2.isOnlyGetToken, I = void 0 !== E && E, T = t2.onLoginStart, R = t2.onReject, N = t2.onResolve;
  (0, import_react.useEffect)(function() {
    var e2 = new URL(window.location.href), t3 = e2.searchParams.get("code"), o3 = e2.searchParams.get("state");
    null != o3 && o3.includes("_microsoft") && t3 && (localStorage.setItem("microsoft", t3), window.close());
  }, []);
  var z = (0, import_react.useCallback)(function(e2) {
    fetch("https://graph.microsoft.com/v1.0/me", { method: "GET", headers: { Authorization: "Bearer " + e2.access_token } }).then(function(e3) {
      return e3.json();
    }).then(function(t3) {
      N({ provider: "microsoft", data: c({}, t3, e2) });
    }).catch(function(e3) {
      R(e3);
    });
  }, [R, N]), C = (0, import_react.useCallback)(function(e2) {
    if (j)
      N({ provider: "microsoft", data: { code: e2 } });
    else {
      var t3 = { code: e2, scope: h2, client_id: d2, redirect_uri: u2, code_verifier: y2, grant_type: "authorization_code" }, o3 = new Headers({ "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" });
      fetch("https://login.microsoftonline.com/" + n2 + "/oauth2/v2.0/token", { method: "POST", headers: o3, body: new URLSearchParams(t3) }).then(function(e3) {
        return e3.json();
      }).then(function(e3) {
        e3.access_token ? I ? N({ provider: "microsoft", data: e3 }) : z(e3) : R("no data");
      }).catch(function(e3) {
        R(e3);
      });
    }
  }, [h2, n2, R, z, d2, N, u2, y2, j, I]), G = (0, import_react.useCallback)(function(e2) {
    var t3 = e2.type, o3 = e2.code, n3 = e2.provider;
    try {
      return Promise.resolve("code" === t3 && "microsoft" === n3 && o3 && C(o3));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [C]), O = (0, import_react.useCallback)(function() {
    window.removeEventListener("storage", O, false);
    var e2 = localStorage.getItem("microsoft");
    e2 && (G({ provider: "microsoft", type: "code", code: e2 }), localStorage.removeItem("microsoft"));
  }, [G]), x = (0, import_react.useCallback)(function() {
    T && T(), window.addEventListener("storage", O, false);
    var e2 = window.screen.width / 2 - 225, t3 = window.screen.height / 2 - 365;
    window.open("https://login.microsoftonline.com/" + n2 + "/oauth2/v2.0/authorize?client_id=" + d2 + "\n        &response_type=" + v2 + "\n        &redirect_uri=" + u2 + "\n        &response_mode=" + g2 + "\n        &scope=" + h2 + "\n        &state=" + s2 + "_microsoft\n        &prompt=" + P + "\n        &code_challenge=" + y2 + "\n        &code_challenge_method=" + b2, "Microsoft", "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top=" + t3 + ", left=" + e2);
  }, [h2, s2, P, n2, d2, T, u2, g2, v2, y2, O, b2]);
  return import_react.default.createElement("div", { className: l2, onClick: x }, w2);
});
var w = (0, import_react.memo)(function(t2) {
  var o2 = t2.state, n2 = void 0 === o2 ? "" : o2, a2 = t2.scope, s2 = void 0 === a2 ? "r_liteprofile" : a2, d2 = t2.client_id, l2 = t2.client_secret, u2 = t2.className, h2 = void 0 === u2 ? "" : u2, m2 = t2.redirect_uri, v2 = t2.response_type, f2 = void 0 === v2 ? "code" : v2, g2 = t2.isOnlyGetCode, w2 = void 0 !== g2 && g2, _2 = t2.isOnlyGetToken, y2 = void 0 !== _2 && _2, k2 = t2.children, b2 = t2.onLoginStart, S2 = t2.onReject, P = t2.onResolve;
  (0, import_react.useEffect)(function() {
    var e2 = new URL(window.location.href), t3 = e2.searchParams.get("code"), o3 = e2.searchParams.get("state");
    null != o3 && o3.includes("_linkedin") && t3 && (localStorage.setItem("linkedin", t3), window.close());
  }, []);
  var L = (0, import_react.useCallback)(function(e2) {
    fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://api.linkedin.com/v2/me?oauth2_access_token=" + e2.access_token + "&projection=(id,profilePicture(displayImage~digitalmediaAsset:playableStreams),localizedLastName, firstName,lastName,localizedFirstName)"), { method: "GET" }).then(function(e3) {
      return e3.json();
    }).then(function(t3) {
      var o3 = c({}, e2);
      if (t3.contents) {
        var n3 = JSON.parse(t3.contents);
        "object" == typeof e2 && Object.entries(n3).map(function(e3) {
          o3[e3[0]] = e3[1];
        });
      }
      P({ provider: "linkedin", data: o3 });
    }).catch(function(e3) {
      S2(e3);
    });
  }, [S2, P]), j = (0, import_react.useCallback)(function(e2) {
    if (w2)
      P({ provider: "linkedin", data: { code: e2 } });
    else {
      var t3 = { code: e2, grant_type: "authorization_code", redirect_uri: m2, client_id: d2, client_secret: l2 }, o3 = new Headers({ "Content-Type": "application/x-www-form-urlencoded", "x-cors-grida-api-key": p });
      fetch("https://cors.bridged.cc/https://www.linkedin.com/oauth/v2/accessToken", { method: "POST", headers: o3, body: new URLSearchParams(t3) }).then(function(e3) {
        return e3.json();
      }).then(function(e3) {
        y2 ? P({ provider: "linkedin", data: e3 }) : L(e3);
      }).catch(function(e3) {
        S2(e3);
      });
    }
  }, [S2, P, d2, L, m2, l2, w2, y2]), E = (0, import_react.useCallback)(function(e2) {
    var t3 = e2.type, o3 = e2.code, n3 = e2.provider;
    try {
      return Promise.resolve("code" === t3 && "linkedin" === n3 && o3 && j(o3));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [j]), I = (0, import_react.useCallback)(function() {
    window.removeEventListener("storage", I, false);
    var e2 = localStorage.getItem("linkedin");
    e2 && (E({ provider: "linkedin", type: "code", code: e2 }), localStorage.removeItem("linkedin"));
  }, [E]), T = (0, import_react.useCallback)(function() {
    b2 && b2(), window.addEventListener("storage", I, false);
    var e2 = window.screen.width / 2 - 225, t3 = window.screen.height / 2 - 365;
    window.open("https://www.linkedin.com/oauth/v2/authorization?response_type=" + f2 + "&client_id=" + d2 + "&scope=" + s2 + "&state=" + n2 + "_linkedin&redirect_uri=" + m2, "Linkedin", "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top=" + t3 + ", left=" + e2);
  }, [b2, I, f2, d2, s2, n2, m2]);
  return import_react.default.createElement("div", { className: h2, onClick: T }, k2);
});
var _ = (0, import_react.memo)(function(t2) {
  var o2 = t2.state, n2 = void 0 === o2 ? "" : o2, a2 = t2.scope, s2 = void 0 === a2 ? "boards:read,pins:read,user_accounts:read" : a2, d2 = t2.client_id, l2 = t2.client_secret, u2 = t2.className, h2 = void 0 === u2 ? "" : u2, m2 = t2.redirect_uri, v2 = t2.isOnlyGetCode, f2 = void 0 !== v2 && v2, g2 = t2.isOnlyGetToken, w2 = void 0 !== g2 && g2, _2 = t2.children, y2 = t2.onLoginStart, k2 = t2.onReject, b2 = t2.onResolve;
  (0, import_react.useEffect)(function() {
    var e2 = new URL(window.location.href), t3 = e2.searchParams.get("code"), o3 = e2.searchParams.get("state");
    null != o3 && o3.includes("_pinterest") && t3 && (localStorage.setItem("pinterest", t3), window.close());
  }, []);
  var S2 = (0, import_react.useCallback)(function(e2) {
    fetch("https://cors.bridged.cc/https://api.pinterest.com/v5/user_account", { method: "GET", headers: { Authorization: "Bearer " + e2.access_token, "x-cors-grida-api-key": p } }).then(function(e3) {
      return e3.json();
    }).then(function(t3) {
      b2({ provider: "pinterest", data: c({}, e2, t3) });
    }).catch(function(e3) {
      return k2(e3);
    });
  }, [k2, b2]), P = (0, import_react.useCallback)(function(e2) {
    try {
      var t3 = function() {
        if (!f2) {
          var t4 = { code: e2, redirect_uri: m2, grant_type: "authorization_code" }, o3 = [];
          for (var n3 in t4) {
            var r2 = encodeURIComponent(n3), i2 = encodeURIComponent(t4[n3]);
            o3.push(r2 + "=" + i2);
          }
          return o3 = o3.join("&"), Promise.resolve(fetch("https://cors.bridged.cc/https://api.pinterest.com/v5/oauth/token", { method: "POST", headers: { Authorization: "Basic " + btoa(d2 + ":" + l2), "Content-Type": "application/x-www-form-urlencoded", "x-cors-grida-api-key": p }, body: o3 }).then(function(e3) {
            return e3.json();
          }).catch(function(e3) {
            return k2(e3);
          })).then(function(e3) {
            e3.access_token && (w2 ? b2({ provider: "pinterest", data: e3 }) : S2(e3));
          });
        }
        b2({ provider: "pinterest", data: { code: e2 } });
      }();
      return Promise.resolve(t3 && t3.then ? t3.then(function() {
      }) : void 0);
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [k2, d2, S2, b2, m2, l2, f2, w2]), L = (0, import_react.useCallback)(function(e2) {
    var t3 = e2.type, o3 = e2.code, n3 = e2.provider;
    try {
      return Promise.resolve("code" === t3 && "pinterest" === n3 && o3 && P(o3));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [P]), j = (0, import_react.useCallback)(function() {
    window.removeEventListener("storage", j, false);
    var e2 = localStorage.getItem("pinterest");
    e2 && (L({ provider: "pinterest", type: "code", code: e2 }), localStorage.removeItem("pinterest"));
  }, [L]), E = (0, import_react.useCallback)(function() {
    y2 && y2(), window.addEventListener("storage", j, false);
    var e2 = window.screen.width / 2 - 225, t3 = window.screen.height / 2 - 365;
    window.open("https://www.pinterest.com/oauth/?client_id=" + d2 + "&scope=" + s2 + "&state=" + n2 + "_pinterest&redirect_uri=" + m2 + "&response_type=code", "Pinterest", "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top=" + t3 + ", left=" + e2);
  }, [s2, n2, d2, m2, y2, j]);
  return import_react.default.createElement("div", { className: h2, onClick: E }, _2);
});
var y = (0, import_react.memo)(function(t2) {
  var o2 = t2.client_id, n2 = t2.className, a2 = void 0 === n2 ? "" : n2, s2 = t2.redirect_uri, d2 = t2.children, l2 = t2.fields, u2 = void 0 === l2 ? "created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld" : l2, h2 = t2.state, m2 = void 0 === h2 ? "state" : h2, v2 = t2.scope, f2 = void 0 === v2 ? "users.read%20tweet.read" : v2, g2 = t2.isOnlyGetCode, w2 = void 0 !== g2 && g2, _2 = t2.isOnlyGetToken, y2 = void 0 !== _2 && _2, k2 = t2.onLoginStart, b2 = t2.onReject, S2 = t2.onResolve;
  (0, import_react.useEffect)(function() {
    var e2 = new URL(window.location.href), t3 = e2.searchParams.get("code");
    e2.searchParams.get("state") && t3 && (localStorage.setItem("twitter", "" + t3), window.close());
  }, []);
  var P = (0, import_react.useCallback)(function(e2) {
    fetch("https://cors.bridged.cc/https://api.twitter.com/2/users/me?user.fields=" + u2, { method: "GET", headers: { Authorization: "Bearer " + e2.access_token, "x-cors-grida-api-key": p } }).then(function(e3) {
      return e3.json();
    }).then(function(t3) {
      S2({ provider: "twitter", data: c({}, e2, t3.data) });
    }).catch(function(e3) {
      return b2(e3);
    });
  }, [u2, b2, S2]), L = (0, import_react.useCallback)(function(e2) {
    try {
      var t3 = function() {
        if (!w2) {
          var t4 = new URLSearchParams({ code: e2, redirect_uri: s2, client_id: o2, grant_type: "authorization_code", code_verifier: "challenge" });
          return Promise.resolve(fetch("https://cors.bridged.cc/https://api.twitter.com/2/oauth2/token", { method: "POST", body: t4, headers: { "Content-Type": "application/x-www-form-urlencoded", "x-cors-grida-api-key": p } }).then(function(e3) {
            return e3.json();
          }).catch(function(e3) {
            return b2(e3);
          })).then(function(e3) {
            e3.access_token && (y2 ? S2({ provider: "twitter", data: e3 }) : P(e3));
          });
        }
        S2({ provider: "twitter", data: { code: e2 } });
      }();
      return Promise.resolve(t3 && t3.then ? t3.then(function() {
      }) : void 0);
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [b2, P, S2, o2, s2, w2, y2]), j = (0, import_react.useCallback)(function(e2) {
    var t3 = e2.type, o3 = e2.code, n3 = e2.provider;
    try {
      return Promise.resolve("code" === t3 && "twitter" === n3 && o3 && L(o3));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [L]), E = (0, import_react.useCallback)(function() {
    window.removeEventListener("storage", E, false);
    var e2 = localStorage.getItem("twitter");
    e2 && (j({ provider: "twitter", type: "code", code: e2 }), localStorage.removeItem("twitter"));
  }, [j]), I = (0, import_react.useCallback)(function() {
    try {
      k2 && k2(), window.addEventListener("storage", E, false);
      var e2 = window.screen.width / 2 - 225, t3 = window.screen.height / 2 - 365;
      return window.open("https://twitter.com/i/oauth2/authorize?response_type=code&client_id=" + o2 + "&redirect_uri=" + s2 + "&scope=" + f2 + "&state=" + m2 + "&code_challenge=challenge&code_challenge_method=plain", "twitter", "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top=" + t3 + ", left=" + e2), Promise.resolve();
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [f2, m2, o2, k2, s2, E]);
  return import_react.default.createElement("div", { className: a2, onClick: I }, d2);
});
"undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var k = window;
var b = (0, import_react.memo)(function(t2) {
  var c2 = t2.client_id, a2 = t2.scope, s2 = void 0 === a2 ? "name email" : a2, d2 = t2.className, l2 = void 0 === d2 ? "" : d2, u2 = t2.onLoginStart, p2 = t2.onReject, h2 = t2.onResolve, m2 = t2.redirect_uri, v2 = void 0 === m2 ? "/" : m2, f2 = t2.children, g2 = (0, import_react.useRef)(null), w2 = (0, import_react.useState)(false), _2 = w2[0], y2 = w2[1];
  (0, import_react.useEffect)(function() {
    !_2 && L();
  }, [_2]), (0, import_react.useEffect)(function() {
    return function() {
      g2.current && g2.current.remove();
    };
  }, []);
  var b2 = (0, import_react.useCallback)(function() {
    return !!document.getElementById("apple-login");
  }, []), S2 = (0, import_react.useCallback)(function(e2, t3, o2, n2, r2) {
    void 0 === t3 && (t3 = "script");
    var i2 = e2.createElement(t3);
    i2.id = o2, i2.src = n2, i2.async = true, i2.defer = true;
    var c3 = document.getElementsByTagName("script")[0];
    g2.current = i2, c3 && c3.parentNode && c3.parentNode.insertBefore(i2, c3), i2.onload = r2;
  }, []), P = (0, import_react.useCallback)(function(e2) {
    h2({ provider: "apple", data: e2 });
  }, [h2]), L = (0, import_react.useCallback)(function() {
    b2() ? y2(true) : S2(document, "script", "apple-login", "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js", function() {
      k.AppleID.auth.init({ clientId: c2, scope: s2, redirectURI: v2, state: "origin:web", usePopup: true }), y2(true);
    });
  }, [s2, c2, v2, S2, b2]), j = (0, import_react.useCallback)(function() {
    try {
      if (!_2)
        return Promise.resolve();
      var e2 = function() {
        if (k.AppleID) {
          u2 && u2();
          var e3 = function(e4, t3) {
            try {
              var o2 = Promise.resolve(k.AppleID.auth.signIn()).then(function(e5) {
                P(e5);
              });
            } catch (e5) {
              return t3(e5);
            }
            return o2 && o2.then ? o2.then(void 0, t3) : o2;
          }(0, function(e4) {
            p2({ err: e4 });
          });
          if (e3 && e3.then)
            return e3.then(function() {
            });
        } else
          L(), p2("Apple SDK isn't loaded!");
      }();
      return Promise.resolve(e2 && e2.then ? e2.then(function() {
      }) : void 0);
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [P, _2, L, u2, p2]);
  return import_react.default.createElement("div", { className: l2, onClick: j }, f2);
});
var S = (0, import_react.memo)(function(t2) {
  var o2 = t2.state, n2 = void 0 === o2 ? "" : o2, c2 = t2.scope, a2 = void 0 === c2 ? "user.info.basic" : c2, s2 = t2.client_key, d2 = t2.className, l2 = void 0 === d2 ? "" : d2, u2 = t2.redirect_uri, p2 = t2.children, h2 = t2.onResolve, m2 = t2.onLoginStart;
  (0, import_react.useEffect)(function() {
    var e2 = new URL(window.location.href), t3 = e2.searchParams.get("code"), o3 = e2.searchParams.get("state");
    null != o3 && o3.includes("_tiktok") && t3 && (localStorage.setItem("tiktok", t3), window.close());
  }, []);
  var v2 = (0, import_react.useCallback)(function(e2) {
    var t3 = e2.type, o3 = e2.code, n3 = e2.provider;
    try {
      return Promise.resolve("code" === t3 && "tiktok" === n3 && o3 && h2({ provider: "tiktok", data: { code: o3 } }));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, [h2]), f2 = (0, import_react.useCallback)(function() {
    window.removeEventListener("storage", f2, false);
    var e2 = localStorage.getItem("tiktok");
    e2 && (v2({ provider: "tiktok", type: "code", code: e2 }), localStorage.removeItem("instagram"));
  }, [v2]), g2 = (0, import_react.useCallback)(function() {
    m2 && m2(), window.addEventListener("storage", f2, false);
    var e2 = window.screen.width / 2 - 225, t3 = window.screen.height / 2 - 365;
    window.open("https://www.tiktok.com/auth/authorize?client_key=" + s2 + "&scope=" + a2 + "&state=" + n2 + "_tiktok&redirect_uri=" + u2 + "&response_type=code", "Github", "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=450, height=730, top=" + t3 + ", left=" + e2);
  }, [a2, n2, s2, u2, m2, f2]);
  return import_react.default.createElement("div", { className: l2, onClick: g2 }, p2);
});
export {
  d as LoginSocialAmazon,
  b as LoginSocialApple,
  u as LoginSocialFacebook,
  v as LoginSocialGithub,
  m as LoginSocialGoogle,
  f as LoginSocialInstagram,
  w as LoginSocialLinkedin,
  g as LoginSocialMicrosoft,
  _ as LoginSocialPinterest,
  S as LoginSocialTiktok,
  y as LoginSocialTwitter
};
//# sourceMappingURL=reactjs-social-login.js.map
