var ApocCalendar = (function () {
'use strict';

var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
var e = "object" == typeof t && t && t.Object === Object && t;
var r = {
    default: e,
    __moduleExports: e
};
var o = "object" == typeof self && self && self.Object === Object && self;
var n = r && e || r || o || Function("return this")();
var u = {
    default: n,
    __moduleExports: n
};
var a = u && n || u;
var l = a.Symbol;
var _ = {
    default: l,
    __moduleExports: l
};
var i = _ && l || _;
var f = Object.prototype;
var s = f.hasOwnProperty;
var d = f.toString;
var c = i ? i.toStringTag : void 0;
var p = function (t) {
    var e = s.call(t, c), r = t[c];
    try {
        t[c] = void 0;
        var o = !0;
    } catch (t) {}
    var n = d.call(t);
    return o && (e ? (t[c] = r) : delete t[c]), n;
};
var v = {
    default: p,
    __moduleExports: p
};
var h = Object.prototype.toString;
var y = function (t) {
    return h.call(t);
};
var m = {
    default: y,
    __moduleExports: y
};
var x = v && p || v;
var E = m && y || m;
var b = "[object Null]";
var g = "[object Undefined]";
var j = i ? i.toStringTag : void 0;
var O = function (t) {
    return null == t ? void 0 === t ? g : b : j && j in Object(t) ? x(t) : E(t);
};
var w = {
    default: O,
    __moduleExports: O
};
var z = function (t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
};
var P = {
    default: z,
    __moduleExports: z
};
var S = w && O || w;
var $ = P && z || P;
var A = "[object AsyncFunction]";
var F = "[object Function]";
var k = "[object GeneratorFunction]";
var C = "[object Proxy]";
var T;
var R = function (t) {
    if (!$(t)) 
        { return !1; }
    var e = S(t);
    return e == F || e == k || e == A || e == C;
};
var G = {
    default: R,
    __moduleExports: R
};
var I = a["__core-js_shared__"];
var M = {
    default: I,
    __moduleExports: I
};
var N = M && I || M;
var U = (T = /[^.]+$/.exec(N && N.keys && N.keys.IE_PROTO || "")) ? "Symbol(src)_1." + T : "";
var q = function (t) {
    return !(!U) && U in t;
};
var B = {
    default: q,
    __moduleExports: q
};
var D = Function.prototype.toString;
var H = function (t) {
    if (null != t) {
        try {
            return D.call(t);
        } catch (t) {}
        try {
            return t + "";
        } catch (t) {}
    }
    return "";
};
var J = {
    default: H,
    __moduleExports: H
};
var K = G && R || G;
var L = B && q || B;
var Q = J && H || J;
var V = /^\[object .+?Constructor\]$/;
var W = Function.prototype;
var X = Object.prototype;
var Y = RegExp("^" + W.toString.call(X.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var Z = function (t) {
    return !(!$(t) || L(t)) && (K(t) ? Y : V).test(Q(t));
};
var tt = {
    default: Z,
    __moduleExports: Z
};
var et = function (t, e) {
    return null == t ? void 0 : t[e];
};
var rt = {
    default: et,
    __moduleExports: et
};
var ot = tt && Z || tt;
var nt = rt && et || rt;
var ut = function (t, e) {
    var r = nt(t, e);
    return ot(r) ? r : void 0;
};
var at = {
    default: ut,
    __moduleExports: ut
};
var lt = at && ut || at;
var _t = (function () {
    try {
        var t = lt(Object, "defineProperty");
        return t({}, "", {}), t;
    } catch (t) {}
})();
var it = {
    default: _t,
    __moduleExports: _t
};
var ft = it && _t || it;
var st = function (t, e, r) {
    "__proto__" == e && ft ? ft(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : (t[e] = r);
};
var dt = {
    default: st,
    __moduleExports: st
};
var ct = function (t, e) {
    return t === e || t != t && e != e;
};
var pt = {
    default: ct,
    __moduleExports: ct
};
var vt = dt && st || dt;
var ht = pt && ct || pt;
var yt = Object.prototype.hasOwnProperty;
var mt = function (t, e, r) {
    var o = t[e];
    yt.call(t, e) && ht(o, r) && (void 0 !== r || e in t) || vt(t, e, r);
};
var xt = {
    default: mt,
    __moduleExports: mt
};
var Et = Array.isArray;
var bt = {
    default: Et,
    __moduleExports: Et
};
var gt = function (t) {
    return null != t && "object" == typeof t;
};
var jt = {
    default: gt,
    __moduleExports: gt
};
var Ot = jt && gt || jt;
var wt = "[object Symbol]";
var zt = function (t) {
    return "symbol" == typeof t || Ot(t) && S(t) == wt;
};
var Pt = {
    default: zt,
    __moduleExports: zt
};
var St = bt && Et || bt;
var $t = Pt && zt || Pt;
var At = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var Ft = /^\w*$/;
var kt = function (t, e) {
    if (St(t)) 
        { return !1; }
    var r = typeof t;
    return !("number" != r && "symbol" != r && "boolean" != r && null != t && !$t(t)) || Ft.test(t) || !At.test(t) || null != e && t in Object(e);
};
var Ct = {
    default: kt,
    __moduleExports: kt
};
var Tt = lt(Object, "create");
var Rt = {
    default: Tt,
    __moduleExports: Tt
};
var Gt = Rt && Tt || Rt;
var It = function () {
    this.__data__ = Gt ? Gt(null) : {}, this.size = 0;
};
var Mt = {
    default: It,
    __moduleExports: It
};
var Nt = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
};
var Ut = {
    default: Nt,
    __moduleExports: Nt
};
var qt = "__lodash_hash_undefined__";
var Bt = Object.prototype.hasOwnProperty;
var Dt = function (t) {
    var e = this.__data__;
    if (Gt) {
        var r = e[t];
        return r === qt ? void 0 : r;
    }
    return Bt.call(e, t) ? e[t] : void 0;
};
var Ht = {
    default: Dt,
    __moduleExports: Dt
};
var Jt = Object.prototype.hasOwnProperty;
var Kt = function (t) {
    var e = this.__data__;
    return Gt ? void 0 !== e[t] : Jt.call(e, t);
};
var Lt = {
    default: Kt,
    __moduleExports: Kt
};
var Qt = "__lodash_hash_undefined__";
var Vt = function (t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = Gt && void 0 === e ? Qt : e, this;
};
var Wt = {
    default: Vt,
    __moduleExports: Vt
};
var Xt = Ut && Nt || Ut;
var Yt = Ht && Dt || Ht;
var Zt = Lt && Kt || Lt;
var te = Wt && Vt || Wt;
function ee(t) {
    var this$1 = this;

    var e = -1, r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
        var o = t[e];
        this$1.set(o[0], o[1]);
    }
}

ee.prototype.clear = Mt && It || Mt, ee.prototype.delete = Xt, ee.prototype.get = Yt, ee.prototype.has = Zt, ee.prototype.set = te;
var re = ee;
var oe = {
    default: re,
    __moduleExports: re
};
var ne = function () {
    this.__data__ = [], this.size = 0;
};
var ue = {
    default: ne,
    __moduleExports: ne
};
var ae = function (t, e) {
    for (var r = t.length;r--; ) 
        { if (ht(t[r][0], e)) 
        { return r; } }
    return -1;
};
var le = {
    default: ae,
    __moduleExports: ae
};
var _e = le && ae || le;
var ie = Array.prototype.splice;
var fe = function (t) {
    var e = this.__data__, r = _e(e, t);
    return !(r < 0 || (r == e.length - 1 ? e.pop() : ie.call(e, r, 1), --this.size, 0));
};
var se = {
    default: fe,
    __moduleExports: fe
};
var de = function (t) {
    var e = this.__data__, r = _e(e, t);
    return r < 0 ? void 0 : e[r][1];
};
var ce = {
    default: de,
    __moduleExports: de
};
var pe = function (t) {
    return _e(this.__data__, t) > -1;
};
var ve = {
    default: pe,
    __moduleExports: pe
};
var he = function (t, e) {
    var r = this.__data__, o = _e(r, t);
    return o < 0 ? (++this.size, r.push([t,e])) : (r[o][1] = e), this;
};
var ye = {
    default: he,
    __moduleExports: he
};
var me = se && fe || se;
var xe = ce && de || ce;
var Ee = ve && pe || ve;
var be = ye && he || ye;
function ge(t) {
    var this$1 = this;

    var e = -1, r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
        var o = t[e];
        this$1.set(o[0], o[1]);
    }
}

ge.prototype.clear = ue && ne || ue, ge.prototype.delete = me, ge.prototype.get = xe, ge.prototype.has = Ee, ge.prototype.set = be;
var je = ge;
var Oe = {
    default: je,
    __moduleExports: je
};
var we = lt(a, "Map");
var ze = {
    default: we,
    __moduleExports: we
};
var Pe = oe && re || oe;
var Se = Oe && je || Oe;
var $e = ze && we || ze;
var Ae = function () {
    this.size = 0, this.__data__ = {
        hash: new Pe(),
        map: new ($e || Se)(),
        string: new Pe()
    };
};
var Fe = {
    default: Ae,
    __moduleExports: Ae
};
var ke = function (t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
};
var Ce = {
    default: ke,
    __moduleExports: ke
};
var Te = Ce && ke || Ce;
var Re = function (t, e) {
    var r = t.__data__;
    return Te(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
};
var Ge = {
    default: Re,
    __moduleExports: Re
};
var Ie = Ge && Re || Ge;
var Me = function (t) {
    var e = Ie(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
};
var Ne = {
    default: Me,
    __moduleExports: Me
};
var Ue = function (t) {
    return Ie(this, t).get(t);
};
var qe = {
    default: Ue,
    __moduleExports: Ue
};
var Be = function (t) {
    return Ie(this, t).has(t);
};
var De = {
    default: Be,
    __moduleExports: Be
};
var He = function (t, e) {
    var r = Ie(this, t), o = r.size;
    return r.set(t, e), this.size += r.size == o ? 0 : 1, this;
};
var Je = {
    default: He,
    __moduleExports: He
};
var Ke = Ne && Me || Ne;
var Le = qe && Ue || qe;
var Qe = De && Be || De;
var Ve = Je && He || Je;
function We(t) {
    var this$1 = this;

    var e = -1, r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
        var o = t[e];
        this$1.set(o[0], o[1]);
    }
}

We.prototype.clear = Fe && Ae || Fe, We.prototype.delete = Ke, We.prototype.get = Le, We.prototype.has = Qe, We.prototype.set = Ve;
var Xe = {
    default: We,
    __moduleExports: We
};
var Ye = Xe && We || Xe;
var Ze = "Expected a function";
function tr(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) 
        { throw new TypeError(Ze); }
    var r = function () {
        var o = arguments, n = e ? e.apply(this, o) : o[0], u = r.cache;
        if (u.has(n)) 
            { return u.get(n); }
        var a = t.apply(this, o);
        return r.cache = u.set(n, a) || u, a;
    };
    return r.cache = new (tr.Cache || Ye)(), r;
}

tr.Cache = Ye;
var er = {
    default: tr,
    __moduleExports: tr
};
var rr = er && tr || er;
var or = 500;
var nr = function (t) {
    var e = rr(t, function (t) {
        return r.size === or && r.clear(), t;
    }), r = e.cache;
    return e;
};
var ur = {
    default: nr,
    __moduleExports: nr
};
var ar = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var lr = /\\(\\)?/g;
var _r = (ur && nr || ur)(function (t) {
    var e = [];
    return 46 === t.charCodeAt(0) && e.push(""), t.replace(ar, function (t, r, o, n) {
        e.push(o ? n.replace(lr, "$1") : r || t);
    }), e;
});
var ir = {
    default: _r,
    __moduleExports: _r
};
var fr = function (t, e) {
    for (var r = -1, o = null == t ? 0 : t.length, n = Array(o);++r < o; ) 
        { n[r] = e(t[r], r, t); }
    return n;
};
var sr = {
    default: fr,
    __moduleExports: fr
};
var dr = sr && fr || sr;
var cr = 1 / 0;
var pr = i ? i.prototype : void 0;
var vr = pr ? pr.toString : void 0;
var hr = function t(e) {
    if ("string" == typeof e) 
        { return e; }
    if (St(e)) 
        { return dr(e, t) + ""; }
    if ($t(e)) 
        { return vr ? vr.call(e) : ""; }
    var r = e + "";
    return "0" == r && 1 / e == -cr ? "-0" : r;
};
var yr = {
    default: hr,
    __moduleExports: hr
};
var mr = yr && hr || yr;
var xr = function (t) {
    return null == t ? "" : mr(t);
};
var Er = {
    default: xr,
    __moduleExports: xr
};
var br = Ct && kt || Ct;
var gr = ir && _r || ir;
var jr = Er && xr || Er;
var Or = function (t, e) {
    return St(t) ? t : br(t, e) ? [t] : gr(jr(t));
};
var wr = {
    default: Or,
    __moduleExports: Or
};
var zr = 9007199254740991;
var Pr = /^(?:0|[1-9]\d*)$/;
var Sr = function (t, e) {
    var r = typeof t;
    return !(!(e = null == e ? zr : e)) && ("number" == r || "symbol" != r && Pr.test(t)) && t > -1 && t % 1 == 0 && t < e;
};
var $r = {
    default: Sr,
    __moduleExports: Sr
};
var Ar = 1 / 0;
var Fr = function (t) {
    if ("string" == typeof t || $t(t)) 
        { return t; }
    var e = t + "";
    return "0" == e && 1 / t == -Ar ? "-0" : e;
};
var kr = {
    default: Fr,
    __moduleExports: Fr
};
var Cr = xt && mt || xt;
var Tr = wr && Or || wr;
var Rr = $r && Sr || $r;
var Gr = kr && Fr || kr;
var Ir = function (t, e, r, o) {
    if (!$(t)) 
        { return t; }
    for (var n = -1, u = (e = Tr(e, t)).length, a = u - 1, l = t;null != l && ++n < u; ) {
        var _ = Gr(e[n]), i = r;
        if (n != a) {
            var f = l[_];
            void 0 === (i = o ? o(f, _, l) : void 0) && (i = $(f) ? f : Rr(e[n + 1]) ? [] : {});
        }
        Cr(l, _, i), l = l[_];
    }
    return t;
};
var Mr = {
    default: Ir,
    __moduleExports: Ir
};
var Nr = Mr && Ir || Mr;
var Ur = function (t, e, r) {
    return null == t ? t : Nr(t, e, r);
};
var Dr = function (t) {
    return (function (t) {
        return Object.keys(t).reduce(function (e, r) {
            return Ur(e, r, t[r]);
        }, {});
    })(t);
};

function noop() {}

function assign(target) {
    var arguments$1 = arguments;

    var k, source, i = 1, len = arguments.length;
    for (; i < len; i++) {
        source = arguments$1[i];
        for (k in source) 
            { target[k] = source[k]; }
    }
    return target;
}

function appendNode(node, target) {
    target.appendChild(node);
}

function insertNode(node, target, anchor) {
    target.insertBefore(node, anchor);
}

function detachNode(node) {
    node.parentNode.removeChild(node);
}

function destroyEach(iterations) {
    for (var i = 0;i < iterations.length; i += 1) {
        if (iterations[i]) 
            { iterations[i].d(); }
    }
}

function createElement(name) {
    return document.createElement(name);
}

function createText(data) {
    return document.createTextNode(data);
}

function createComment() {
    return document.createComment('');
}

function addListener(node, event, handler) {
    node.addEventListener(event, handler, false);
}

function removeListener(node, event, handler) {
    node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
    node.setAttribute(attribute, value);
}

function setStyle(node, key, value) {
    node.style.setProperty(key, value);
}

function blankObject() {
    return Object.create(null);
}

function destroy(detach) {
    this.destroy = noop;
    this.fire('destroy');
    this.set = (this.get = noop);
    if (detach !== false) 
        { this._fragment.u(); }
    this._fragment.d();
    this._fragment = (this._state = null);
}

function differs(a, b) {
    return a !== b || (a && typeof a === 'object' || typeof a === 'function');
}

function dispatchObservers(component, group, changed, newState, oldState) {
    for (var key in group) {
        if (!changed[key]) 
            { continue; }
        var newValue = newState[key];
        var oldValue = oldState[key];
        var callbacks = group[key];
        if (!callbacks) 
            { continue; }
        for (var i = 0;i < callbacks.length; i += 1) {
            var callback = callbacks[i];
            if (callback.__calling) 
                { continue; }
            callback.__calling = true;
            callback.call(component, newValue, oldValue);
            callback.__calling = false;
        }
    }
}

function fire(eventName, data) {
    var this$1 = this;

    var handlers = eventName in this._handlers && this._handlers[eventName].slice();
    if (!handlers) 
        { return; }
    for (var i = 0;i < handlers.length; i += 1) {
        handlers[i].call(this$1, data);
    }
}

function get(key) {
    return key ? this._state[key] : this._state;
}

function init(component, options) {
    component._observers = {
        pre: blankObject(),
        post: blankObject()
    };
    component._handlers = blankObject();
    component._bind = options._bind;
    component.options = options;
    component.root = options.root || component;
    component.store = component.root.store || options.store;
}

function observe(key, callback, options) {
    var group = options && options.defer ? this._observers.post : this._observers.pre;
    (group[key] || (group[key] = [])).push(callback);
    if (!options || options.init !== false) {
        callback.__calling = true;
        callback.call(this, this._state[key]);
        callback.__calling = false;
    }
    return {
        cancel: function () {
            var index = group[key].indexOf(callback);
            if (~index) 
                { group[key].splice(index, 1); }
        }
    };
}

function on(eventName, handler) {
    if (eventName === 'teardown') 
        { return this.on('destroy', handler); }
    var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
    handlers.push(handler);
    return {
        cancel: function () {
            var index = handlers.indexOf(handler);
            if (~index) 
                { handlers.splice(index, 1); }
        }
    };
}

function set(newState) {
    this._set(assign({}, newState));
    if (this.root._lock) 
        { return; }
    this.root._lock = true;
    callAll(this.root._beforecreate);
    callAll(this.root._oncreate);
    callAll(this.root._aftercreate);
    this.root._lock = false;
}

function _set(newState) {
    var oldState = this._state, changed = {}, dirty = false;
    for (var key in newState) {
        if (differs(newState[key], oldState[key])) 
            { changed[key] = (dirty = true); }
    }
    if (!dirty) 
        { return; }
    this._state = assign({}, oldState, newState);
    this._recompute(changed, this._state);
    if (this._bind) 
        { this._bind(changed, this._state); }
    if (this._fragment) {
        dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
        this._fragment.p(changed, this._state);
        dispatchObservers(this, this._observers.post, changed, this._state, oldState);
    }
}

function callAll(fns) {
    while (fns && fns.length) 
        { fns.shift()(); }
}

function _mount(target, anchor) {
    this._fragment.m(target, anchor);
}

function _unmount() {
    if (this._fragment) 
        { this._fragment.u(); }
}

function removeFromStore() {
    this.store._remove(this);
}

var proto = {
    destroy: destroy,
    get: get,
    fire: fire,
    observe: observe,
    on: on,
    set: set,
    teardown: destroy,
    _recompute: noop,
    _set: _set,
    _mount: _mount,
    _unmount: _unmount
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var pupa = createCommonjsModule(function (module) {
    module.exports = (function (tpl, data) {
        if (typeof tpl !== 'string') {
            throw new TypeError(("Expected a string in the first argument, got " + (typeof tpl)));
        }
        if (typeof data !== 'object') {
            throw new TypeError(("Expected an Object/Array in the second argument, got " + (typeof data)));
        }
        var re = /{(.*?)}/g;
        return tpl.replace(re, function (_, key) {
            var ret = data;
            for (var i = 0, list = key.split('.'); i < list.length; i += 1) {
                var prop = list[i];

                ret = ret ? ret[prop] : '';
            }
            return ret || '';
        });
    });
});

function Store(state) {
    this._observers = {
        pre: blankObject(),
        post: blankObject()
    };
    this._changeHandlers = [];
    this._dependents = [];
    this._computed = blankObject();
    this._sortedComputedProperties = [];
    this._state = assign({}, state);
}

assign(Store.prototype, {
    _add: function (component, props) {
        this._dependents.push({
            component: component,
            props: props
        });
    },
    _init: function (props) {
        var this$1 = this;

        var state = {};
        for (var i = 0;i < props.length; i += 1) {
            var prop = props[i];
            state['$' + prop] = this$1._state[prop];
        }
        return state;
    },
    _remove: function (component) {
        var this$1 = this;

        var i = this._dependents.length;
        while (i--) {
            if (this$1._dependents[i].component === component) {
                this$1._dependents.splice(i, 1);
                return;
            }
        }
    },
    _sortComputedProperties: function () {
        var this$1 = this;

        var computed = this._computed;
        var sorted = this._sortedComputedProperties = [];
        var cycles;
        var visited = blankObject();
        function visit(key) {
            if (cycles[key]) {
                throw new Error('Cyclical dependency detected');
            }
            if (visited[key]) 
                { return; }
            visited[key] = true;
            var c = computed[key];
            if (c) {
                cycles[key] = true;
                c.deps.forEach(visit);
                sorted.push(c);
            }
        }
        
        for (var key in this$1._computed) {
            cycles = blankObject();
            visit(key);
        }
    },
    compute: function (key, deps, fn) {
        var value;
        var c = {
            deps: deps,
            update: function (state, changed, dirty) {
                var values = deps.map(function (dep) {
                    if (dep in changed) 
                        { dirty = true; }
                    return state[dep];
                });
                if (dirty) {
                    var newValue = fn.apply(null, values);
                    if (differs(newValue, value)) {
                        value = newValue;
                        changed[key] = true;
                        state[key] = value;
                    }
                }
            }
        };
        c.update(this._state, {}, true);
        this._computed[key] = c;
        this._sortComputedProperties();
    },
    get: get,
    observe: observe,
    onchange: function (callback) {
        this._changeHandlers.push(callback);
        return {
            cancel: function () {
                var index = this._changeHandlers.indexOf(callback);
                if (~index) 
                    { this._changeHandlers.splice(index, 1); }
            }
        };
    },
    set: function (newState) {
        var this$1 = this;

        var oldState = this._state, changed = this._changed = {}, dirty = false;
        for (var key in newState) {
            if (this$1._computed[key]) 
                { throw new Error("'" + key + "' is a read-only property"); }
            if (differs(newState[key], oldState[key])) 
                { changed[key] = (dirty = true); }
        }
        if (!dirty) 
            { return; }
        this._state = assign({}, oldState, newState);
        for (var i = 0;i < this._sortedComputedProperties.length; i += 1) {
            this$1._sortedComputedProperties[i].update(this$1._state, changed);
        }
        for (var i = 0;i < this._changeHandlers.length; i += 1) {
            this$1._changeHandlers[i](this$1._state, changed);
        }
        dispatchObservers(this, this._observers.pre, changed, this._state, oldState);
        var dependents = this._dependents.slice();
        for (var i = 0;i < dependents.length; i += 1) {
            var dependent = dependents[i];
            var componentState = {};
            dirty = false;
            for (var j = 0;j < dependent.props.length; j += 1) {
                var prop = dependent.props[j];
                if (prop in changed) {
                    componentState['$' + prop] = this$1._state[prop];
                    dirty = true;
                }
            }
            if (dirty) 
                { dependent.component.set(componentState); }
        }
        dispatchObservers(this, this._observers.post, changed, this._state, oldState);
    }
});

var FUNC_ERROR_TEXT = 'Expected a function';
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var INFINITY = 1 / 0;
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var symbolTag = '[object Symbol]';
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reEscapeChar = /\\(\\)?/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function('return this')();
function getValue(object, key) {
    return object == null ? undefined : object[key];
}

function isHostObject(value) {
    var result = false;
    if (value != null && typeof value.toString != 'function') {
        try {
            result = !(!(value + ''));
        } catch (e) {}
    }
    return result;
}

var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var coreJsData = root['__core-js_shared__'];
var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
})();
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
var Symbol$1 = root.Symbol;
var splice = arrayProto.splice;
var Map = getNative(root, 'Map');
var nativeCreate = getNative(Object, 'create');
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;
function Hash(entries) {
    var this$1 = this;

    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this$1.set(entry[0], entry[1]);
    }
}

function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
}

function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}

Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
    var this$1 = this;

    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this$1.set(entry[0], entry[1]);
    }
}

function listCacheClear() {
    this.__data__ = [];
}

function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
        data.pop();
    } else {
        splice.call(data, index, 1);
    }
    return true;
}

function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}

function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}

function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        data.push([key,value]);
    } else {
        data[index][1] = value;
    }
    return this;
}

ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
    var this$1 = this;

    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this$1.set(entry[0], entry[1]);
    }
}

function mapCacheClear() {
    this.__data__ = {
        'hash': new Hash(),
        'map': new (Map || ListCache)(),
        'string': new Hash()
    };
}

function mapCacheDelete(key) {
    return getMapData(this, key)['delete'](key);
}

function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}

function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}

function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
}

MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
        if (eq(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}

function baseGet(object, path) {
    path = isKey(path, object) ? [path] : castPath(path);
    var index = 0, length = path.length;
    while (object != null && index < length) {
        object = object[toKey(path[index++])];
    }
    return index && index == length ? object : undefined;
}

function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
        return false;
    }
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}

function baseToString(value) {
    if (typeof value == 'string') {
        return value;
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

function castPath(value) {
    return isArray(value) ? value : stringToPath(value);
}

function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}

function isKey(value, object) {
    if (isArray(value)) {
        return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
        return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

function isMasked(func) {
    return !(!maskSrcKey) && maskSrcKey in func;
}

var stringToPath = memoize(function (string) {
    string = toString$1(string);
    var result = [];
    if (reLeadingDot.test(string)) {
        result.push('');
    }
    string.replace(rePropName, function (match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
});
function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
        return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}

function memoize(func, resolver) {
    if (typeof func != 'function' || resolver && typeof resolver != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function () {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
}

memoize.Cache = MapCache;
function eq(value, other) {
    return value === other || value !== value && other !== other;
}

var isArray = Array.isArray;
function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
}

function isObject(value) {
    var type = typeof value;
    return !(!value) && (type == 'object' || type == 'function');
}

function isObjectLike(value) {
    return !(!value) && typeof value == 'object';
}

function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

function toString$1(value) {
    return value == null ? '' : baseToString(value);
}

function get$1(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}

var lodash_get = get$1;

var FUNC_ERROR_TEXT$1 = 'Expected a function';
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
var INFINITY$1 = 1 / 0;
var MAX_SAFE_INTEGER = 9007199254740991;
var funcTag$1 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var symbolTag$1 = '[object Symbol]';
var reIsDeepProp$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp$1 = /^\w*$/;
var reLeadingDot$1 = /^\./;
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;
var reEscapeChar$1 = /\\(\\)?/g;
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();
function getValue$1(object, key) {
    return object == null ? undefined : object[key];
}

function isHostObject$1(value) {
    var result = false;
    if (value != null && typeof value.toString != 'function') {
        try {
            result = !(!(value + ''));
        } catch (e) {}
    }
    return result;
}

var arrayProto$1 = Array.prototype;
var funcProto$1 = Function.prototype;
var objectProto$1 = Object.prototype;
var coreJsData$1 = root$1['__core-js_shared__'];
var maskSrcKey$1 = (function () {
    var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
})();
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
var objectToString$1 = objectProto$1.toString;
var reIsNative$1 = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar$1, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
var Symbol$2 = root$1.Symbol;
var splice$1 = arrayProto$1.splice;
var Map$1 = getNative$1(root$1, 'Map');
var nativeCreate$1 = getNative$1(Object, 'create');
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined;
var symbolToString$1 = symbolProto$1 ? symbolProto$1.toString : undefined;
function Hash$1(entries) {
    var this$1 = this;

    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this$1.set(entry[0], entry[1]);
    }
}

function hashClear$1() {
    this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
}

function hashDelete$1(key) {
    return this.has(key) && delete this.__data__[key];
}

function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$1) {
        var result = data[key];
        return result === HASH_UNDEFINED$1 ? undefined : result;
    }
    return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
}

function hashSet$1(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate$1 && value === undefined ? HASH_UNDEFINED$1 : value;
    return this;
}

Hash$1.prototype.clear = hashClear$1;
Hash$1.prototype['delete'] = hashDelete$1;
Hash$1.prototype.get = hashGet$1;
Hash$1.prototype.has = hashHas$1;
Hash$1.prototype.set = hashSet$1;
function ListCache$1(entries) {
    var this$1 = this;

    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this$1.set(entry[0], entry[1]);
    }
}

function listCacheClear$1() {
    this.__data__ = [];
}

function listCacheDelete$1(key) {
    var data = this.__data__, index = assocIndexOf$1(data, key);
    if (index < 0) {
        return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
        data.pop();
    } else {
        splice$1.call(data, index, 1);
    }
    return true;
}

function listCacheGet$1(key) {
    var data = this.__data__, index = assocIndexOf$1(data, key);
    return index < 0 ? undefined : data[index][1];
}

function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
}

function listCacheSet$1(key, value) {
    var data = this.__data__, index = assocIndexOf$1(data, key);
    if (index < 0) {
        data.push([key,value]);
    } else {
        data[index][1] = value;
    }
    return this;
}

ListCache$1.prototype.clear = listCacheClear$1;
ListCache$1.prototype['delete'] = listCacheDelete$1;
ListCache$1.prototype.get = listCacheGet$1;
ListCache$1.prototype.has = listCacheHas$1;
ListCache$1.prototype.set = listCacheSet$1;
function MapCache$1(entries) {
    var this$1 = this;

    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this$1.set(entry[0], entry[1]);
    }
}

function mapCacheClear$1() {
    this.__data__ = {
        'hash': new Hash$1(),
        'map': new (Map$1 || ListCache$1)(),
        'string': new Hash$1()
    };
}

function mapCacheDelete$1(key) {
    return getMapData$1(this, key)['delete'](key);
}

function mapCacheGet$1(key) {
    return getMapData$1(this, key).get(key);
}

function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
}

function mapCacheSet$1(key, value) {
    getMapData$1(this, key).set(key, value);
    return this;
}

MapCache$1.prototype.clear = mapCacheClear$1;
MapCache$1.prototype['delete'] = mapCacheDelete$1;
MapCache$1.prototype.get = mapCacheGet$1;
MapCache$1.prototype.has = mapCacheHas$1;
MapCache$1.prototype.set = mapCacheSet$1;
function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$1.call(object, key) && eq$1(objValue, value)) || value === undefined && !(key in object)) {
        object[key] = value;
    }
}

function assocIndexOf$1(array, key) {
    var length = array.length;
    while (length--) {
        if (eq$1(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}

function baseIsNative$1(value) {
    if (!isObject$1(value) || isMasked$1(value)) {
        return false;
    }
    var pattern = isFunction$1(value) || isHostObject$1(value) ? reIsNative$1 : reIsHostCtor$1;
    return pattern.test(toSource$1(value));
}

function baseSet(object, path, value, customizer) {
    if (!isObject$1(object)) {
        return object;
    }
    path = isKey$1(path, object) ? [path] : castPath$1(path);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while (nested != null && ++index < length) {
        var key = toKey$1(path[index]), newValue = value;
        if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) {
                newValue = isObject$1(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}

function baseToString$1(value) {
    if (typeof value == 'string') {
        return value;
    }
    if (isSymbol$1(value)) {
        return symbolToString$1 ? symbolToString$1.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

function castPath$1(value) {
    return isArray$1(value) ? value : stringToPath$1(value);
}

function getMapData$1(map, key) {
    var data = map.__data__;
    return isKeyable$1(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

function getNative$1(object, key) {
    var value = getValue$1(object, key);
    return baseIsNative$1(value) ? value : undefined;
}

function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !(!length) && (typeof value == 'number' || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}

function isKey$1(value, object) {
    if (isArray$1(value)) {
        return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol$1(value)) {
        return true;
    }
    return reIsPlainProp$1.test(value) || !reIsDeepProp$1.test(value) || object != null && value in Object(object);
}

function isKeyable$1(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

function isMasked$1(func) {
    return !(!maskSrcKey$1) && maskSrcKey$1 in func;
}

var stringToPath$1 = memoize$1(function (string) {
    string = toString$2(string);
    var result = [];
    if (reLeadingDot$1.test(string)) {
        result.push('');
    }
    string.replace(rePropName$1, function (match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar$1, '$1') : number || match);
    });
    return result;
});
function toKey$1(value) {
    if (typeof value == 'string' || isSymbol$1(value)) {
        return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

function toSource$1(func) {
    if (func != null) {
        try {
            return funcToString$1.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}

function memoize$1(func, resolver) {
    if (typeof func != 'function' || resolver && typeof resolver != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    var memoized = function () {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache$1)();
    return memoized;
}

memoize$1.Cache = MapCache$1;
function eq$1(value, other) {
    return value === other || value !== value && other !== other;
}

var isArray$1 = Array.isArray;
function isFunction$1(value) {
    var tag = isObject$1(value) ? objectToString$1.call(value) : '';
    return tag == funcTag$1 || tag == genTag$1;
}

function isObject$1(value) {
    var type = typeof value;
    return !(!value) && (type == 'object' || type == 'function');
}

function isObjectLike$1(value) {
    return !(!value) && typeof value == 'object';
}

function isSymbol$1(value) {
    return typeof value == 'symbol' || isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1;
}

function toString$2(value) {
    return value == null ? '' : baseToString$1(value);
}

function set$1(object, path, value) {
    return object == null ? object : baseSet(object, path, value);
}

var lodash_set = set$1;

var range = function (from, to) {
    var result = [];
    for (var i = from;i <= to; i++) {
        result.push(i);
    }
    return result;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var CELL_LENGTH = 42;
var CalendarStore = (function (Store$$1) {
    function CalendarStore () {
        Store$$1.apply(this, arguments);
    }

    if ( Store$$1 ) CalendarStore.__proto__ = Store$$1;
    CalendarStore.prototype = Object.create( Store$$1 && Store$$1.prototype );
    CalendarStore.prototype.constructor = CalendarStore;

    var prototypeAccessors = { data: { configurable: true },currentDates: { configurable: true },pad: { configurable: true },key: { configurable: true },prevKey: { configurable: true },nextKey: { configurable: true } };

    CalendarStore.prototype.getYear = function getYear () {
        return this.get('year');
    };
    CalendarStore.prototype.getMonth = function getMonth () {
        return this.get('month');
    };
    prototypeAccessors.data.get = function () {
        return this.get('data');
    };
    prototypeAccessors.currentDates.get = function () {
        return this.get('currentDates');
    };
    prototypeAccessors.pad.set = function (pad) {
        this.set({
            pad: pad
        });
    };
    CalendarStore.prototype.setData = function setData (newestData) {
        var this$1 = this;

        setTimeout(function () {
            var ref = this$1.get();
            var year = ref.year;
            var month = ref.month;
            var currentDates = ref.currentDates;
            var target = lodash_get(newestData, this$1.prevKey, []).concat( lodash_get(newestData, (year + "." + month), []),
                lodash_get(newestData, this$1.nextKey, []));
            currentDates.forEach(function (currentDate) {
                target.forEach(function (targetDate) {
                    if (this$1.dateEqual(currentDate, targetDate)) {
                        currentDate.selected = targetDate.selected;
                        if (year === currentDate.year && month === currentDate.month) {
                            currentDate.prev = false;
                            currentDate.next = false;
                        } else if (year <= currentDate.year && month < currentDate.month) {
                            currentDate.next = true;
                        } else if (year >= currentDate.year && month > currentDate.month) {
                            currentDate.next = true;
                        }
                    }
                });
            });
            this$1.set({
                currentDates: currentDates
            });
        }, 0);
        var ref = this.get();
        var data = ref.data;
        Object.keys(newestData).forEach(function (year) {
            newestData[year].forEach(function (month, monthIndex) {
                month.forEach(function (date, dateIndex) {
                    var path = year + "[" + monthIndex + "][" + dateIndex + "]";
                    var got = lodash_get(data, path, false);
                    if (!got) {
                        return;
                    }
                    lodash_set(data, (path + ".selected"), got.selected);
                });
            });
        });
        this.set({
            data: newestData
        });
    };
    CalendarStore.prototype.reset = function reset (step) {
        this.set({
            data: {},
            currentDates: []
        });
        var todayDate = new Date();
        var year = todayDate.getFullYear();
        var month = todayDate.getMonth();
        this.setDates(year, month, step, true);
    };
    CalendarStore.prototype.dateEqual = function dateEqual (a, b) {
        if ( b === void 0 ) b = null;

        if (b === null) {
            return false;
        }
        return a.year === b.year && a.month === b.month && a.date === b.date;
    };
    CalendarStore.prototype.exportData = function exportData () {
        var data = this.get('data');
        var cloned = _extends({}, data);
        var result = [];
        Object.keys(cloned).forEach(function (year) {
            var dates = cloned[year];
            dates.forEach(function (monthDates) {
                monthDates.filter(function (date) { return date.selected; }).forEach(function (date) {
                    result.push(((date.year) + "-" + (date.month + 1) + "-" + (date.date)));
                });
            });
        });
        return result;
    };
    CalendarStore.prototype.includesMinDate = function includesMinDate () {
        var currentDates = this.get('currentDates');
        if (typeof currentDates === 'undefined') {
            return false;
        }
        var found = currentDates.find(function (date) { return date.disabled; });
        if (typeof found === 'undefined') {
            return false;
        } else if (new Date(found.year, found.month, found.date) > new Date(this.maxDate.year, this.maxDate.month, this.maxDate.date)) {
            return false;
        }
        return true;
    };
    CalendarStore.prototype.includesMaxDate = function includesMaxDate () {
        var currentDates = this.get('currentDates');
        if (typeof currentDates === 'undefined') {
            return false;
        }
        var found = [].concat( currentDates ).reverse().find(function (date) { return date.disabled; });
        if (typeof found === 'undefined') {
            return false;
        } else if (new Date(found.year, found.month, found.date) < new Date(this.minDate.year, this.minDate.month, this.minDate.date)) {
            return false;
        }
        return true;
    };
    CalendarStore.prototype.isActiveDay = function isActiveDay (day) {
        var currentDates = this.get('currentDates');
        var targetDayDate = currentDates.filter(function (date) { return date.day === day; });
        return targetDayDate.every(function (date) { return date.selected; });
    };
    CalendarStore.prototype.getSelected = function getSelected () {
        return this.get('selected');
    };
    CalendarStore.prototype.selectDay = function selectDay (day) {
        var this$1 = this;

        var ref = this.get();
        var year = ref.year;
        var month = ref.month;
        var data = ref.data;
        var currentDates = ref.currentDates;
        var pad = ref.pad;
        var isActiveDay = this.isActiveDay(day);
        var dates = currentDates.filter(function (date) { return date.day === day; }).map(function (date) {
            if (pad) {
                date.selected = !isActiveDay;
            } else if (!date.next && !date.prev) {
                date.selected = !isActiveDay;
            }
            return date;
        });
        var targetDates = lodash_get(data, this.prevKey, []).concat( lodash_get(data, (year + "." + month), []),
            lodash_get(data, this.nextKey, []));
        targetDates.forEach(function (targetDate) {
            dates.forEach(function (date) {
                if (this$1.dateEqual(date, targetDate)) {
                    targetDate.selected = date.selected;
                }
            });
        });
        this.set({
            currentDates: [].concat( currentDates ),
            data: data
        });
    };
    CalendarStore.prototype.selectDate = function selectDate (targetDate) {
        var this$1 = this;

        var ref = this.get();
        var year = ref.year;
        var month = ref.month;
        var data = ref.data;
        var currentDates = ref.currentDates;
        var target = currentDates.find(function (date) { return !date.disabled && this$1.dateEqual(date, targetDate); });
        if (typeof target === 'undefined') {
            return;
        }
        var targetDates = lodash_get(data, this.prevKey, []).concat( lodash_get(data, (year + "." + month), []),
            lodash_get(data, this.nextKey, []));
        targetDates.forEach(function (targetDate) {
            if (this$1.dateEqual(targetDate, target)) {
                targetDate.selected = !target.selected;
            }
        });
        this.set({
            currentDates: [].concat( currentDates ),
            data: data
        });
    };
    CalendarStore.prototype.selectRangeDate = function selectRangeDate (from, to) {
        var this$1 = this;
        if ( to === void 0 ) to = null;

        var uncertainDates = this.get('uncertainDates');
        if (typeof uncertainDates === 'undefined' && (this.dateEqual(from, to) || to === null)) {
            return;
        }
        var ref = this.get();
        var year = ref.year;
        var month = ref.month;
        var data = ref.data;
        var currentDates = ref.currentDates;
        if (typeof uncertainDates !== 'undefined') {
            uncertainDates.forEach(function (date) {
                date.selected = !date.selected;
            });
        }
        var result = currentDates.reduce(function (obj, date) {
            if (date.disabled) {
                return obj;
            }
            if (this$1.dateEqual(date, from) || this$1.dateEqual(date, to)) {
                if (obj.start) {
                    date.selected = obj.active;
                    obj.acc.push(date);
                    obj.end = true;
                } else {
                    obj.start = true;
                    if (new Date(from.year, from.month, from.date) > new Date(to.year, from.month, from.date)) {
                        obj.active = !to.selected;
                    } else {
                        obj.active = !from.selected;
                    }
                }
            }
            if (obj.start && !obj.end) {
                date.selected = obj.active;
                obj.acc.push(date);
            }
            if (from === to) {
                obj.end = true;
                return obj;
            }
            return obj;
        }, {
            acc: [],
            active: false,
            start: false,
            end: false
        });
        var targetDates = lodash_get(data, this.prevKey, []).concat( lodash_get(data, (year + "." + month), []),
            lodash_get(data, this.nextKey, []));
        targetDates.forEach(function (targetDate) {
            result.acc.forEach(function (date) {
                if (this$1.dateEqual(date, targetDate)) {
                    targetDate.selected = date.selected;
                }
            });
        });
        this.set({
            currentDates: currentDates,
            data: data,
            uncertainDates: result.acc
        });
    };
    CalendarStore.prototype.endSelectRangeDate = function endSelectRangeDate () {
        this.set({
            uncertainDates: undefined
        });
    };
    prototypeAccessors.key.get = function () {
        var ref = this.get();
        var year = ref.year;
        var month = ref.month;
        return (year + "." + month);
    };
    prototypeAccessors.prevKey.get = function () {
        var ref = this.get();
        var year = ref.year;
        var month = ref.month;
        var prevDate = new Date(year, month - 1);
        return ((prevDate.getFullYear()) + "." + (prevDate.getMonth()));
    };
    prototypeAccessors.nextKey.get = function () {
        var ref = this.get();
        var year = ref.year;
        var month = ref.month;
        var nextDate = new Date(year, month + 1);
        return ((nextDate.getFullYear()) + "." + (nextDate.getMonth()));
    };
    CalendarStore.prototype.setOptions = function setOptions (options) {
        this.minDate = options.minDate;
        this.maxDate = options.maxDate;
    };
    CalendarStore.prototype.cachePastDates = function cachePastDates (year, month, step) {
        var this$1 = this;

        var currentStep = step;
        while (currentStep > 0) {
            this$1.setDates(year, month - currentStep, step);
            currentStep--;
        }
    };
    CalendarStore.prototype.cacheFutureDates = function cacheFutureDates (year, month, step) {
        var this$1 = this;

        var currentStep = step;
        while (currentStep > 0) {
            this$1.setDates(year, month + currentStep, step);
            currentStep--;
        }
    };
    CalendarStore.prototype.setDates = function setDates (year, month, step, cache) {
        if ( cache === void 0 ) cache = false;

        var thisDate = new Date(year, month);
        var thisYear = thisDate.getFullYear();
        var thisMonth = thisDate.getMonth();
        if (cache) {
            this.cachePastDates(year, month, step);
            this.cacheFutureDates(year, month, step);
        }
        this.set({
            year: thisYear,
            month: thisMonth
        });
        var data = this.get('data') || {};
        if (typeof lodash_get(data, this.key) !== 'undefined') {
            var currentDates = lodash_get(data, this.key);
            currentDates.forEach(function (date) {
                date.prev = false;
                date.next = false;
            });
            this.set({
                currentDates: currentDates
            });
            if (cache) {
                this.padHeadDate();
                this.padTailDate();
            }
            this.set({
                data: data
            });
            return;
        }
        var dates = range(new Date(thisYear, thisMonth, 1).getDate(), new Date(thisYear, thisMonth + 1, 0).getDate());
        var minDateDate = new Date(this.minDate.year, this.minDate.month, this.minDate.date);
        var maxDateDate = new Date(this.maxDate.year, this.maxDate.month, this.maxDate.date);
        var dateObjects = dates.map(function (date) {
            var thatDate = new Date(thisYear, thisMonth, date);
            return {
                prev: false,
                next: false,
                selected: false,
                disabled: minDateDate > thatDate || thatDate > maxDateDate,
                year: thatDate.getFullYear(),
                month: thatDate.getMonth(),
                date: thatDate.getDate(),
                day: thatDate.getDay()
            };
        });
        lodash_set(data, this.key, dateObjects);
        this.set({
            data: data,
            currentDates: dateObjects
        });
        if (cache) {
            this.padHeadDate();
            this.padTailDate();
        }
    };
    CalendarStore.prototype.prev = function prev (step) {
        var ref = this.get();
        var year = ref.year;
        var month = ref.month;
        this.setDates(year, month - step, step, true);
    };
    CalendarStore.prototype.next = function next (step) {
        var ref = this.get();
        var year = ref.year;
        var month = ref.month;
        this.setDates(year, month + step, step, true);
    };
    CalendarStore.prototype.padHeadDate = function padHeadDate () {
        var data = this.get('data');
        var dates = [].concat( this.get('currentDates') );
        var prevDates = lodash_get(data, this.prevKey);
        var firstDay = dates[0].day;
        if (firstDay > 0) {
            dates.unshift.apply(dates, range(0, firstDay - 1).map(function (num) {
                var target = prevDates[prevDates.length - 1 - num];
                target.prev = true;
                target.next = false;
                return target;
            }).reverse());
        }
        this.set({
            currentDates: dates
        });
    };
    CalendarStore.prototype.padTailDate = function padTailDate () {
        var data = this.get('data');
        var dates = [].concat( this.get('currentDates') );
        var nextDates = lodash_get(data, this.nextKey);
        var fillLength = CELL_LENGTH - dates.length - 1;
        dates.push.apply(dates, range(0, fillLength).map(function (num) {
            var target = nextDates[num];
            target.prev = false;
            target.next = true;
            return target;
        }));
        this.set({
            currentDates: dates
        });
    };

    Object.defineProperties( CalendarStore.prototype, prototypeAccessors );

    return CalendarStore;
}(Store));

var freeGlobal$2 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf$2 = typeof self == 'object' && self && self.Object === Object && self;
var root$2 = freeGlobal$2 || freeSelf$2 || Function('return this')();

function create_main_fragment(state, component) {
    var div, text;
    return {
        c: function create() {
            div = createElement("div");
            text = createText(state.day);
        },
        m: function mount(target, anchor) {
            insertNode(div, target, anchor);
            appendNode(text, div);
        },
        p: function update(changed, state) {
            if (changed.day) {
                text.data = state.day;
            }
        },
        u: function unmount() {
            detachNode(div);
        },
        d: noop
    };
}

function Day_cell(options) {
    init(this, options);
    this._state = assign({}, options.data);
    this._fragment = create_main_fragment(this._state, this);
    if (options.target) {
        this._fragment.c();
        this._fragment.m(options.target, options.anchor || null);
    }
}

assign(Day_cell.prototype, proto);

function encapsulateStyles(node) {
    setAttribute(node, "svelte-3754584703", "");
}

function add_css() {
    var style = createElement("style");
    style.id = 'svelte-3754584703-style';
    style.textContent = "[svelte-3754584703].apocCalendar-Is_Hidden,[svelte-3754584703] .apocCalendar-Is_Hidden{visibility:hidden}";
    appendNode(style, document.head);
}

function create_main_fragment$1(state, component) {
    var div, text_value = state.date.date, text;
    return {
        c: function create() {
            div = createElement("div");
            text = createText(text_value);
            this.h();
        },
        h: function hydrate() {
            encapsulateStyles(div);
        },
        m: function mount(target, anchor) {
            insertNode(div, target, anchor);
            appendNode(text, div);
        },
        p: function update(changed, state) {
            if (changed.date && text_value !== (text_value = state.date.date)) {
                text.data = text_value;
            }
        },
        u: function unmount() {
            detachNode(div);
        },
        d: noop
    };
}

function Date_cell(options) {
    init(this, options);
    this._state = assign({}, options.data);
    if (!document.getElementById("svelte-3754584703-style")) 
        { add_css(); }
    this._fragment = create_main_fragment$1(this._state, this);
    if (options.target) {
        this._fragment.c();
        this._fragment.m(options.target, options.anchor || null);
    }
}

assign(Date_cell.prototype, proto);

function isDate(argument) {
    return argument instanceof Date;
}

var is_date = isDate;

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var parseTokenDateTimeDelimeter = /[T ]/;
var parseTokenPlainTime = /:/;
var parseTokenYY = /^(\d{2})$/;
var parseTokensYYY = [/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/];
var parseTokenYYYY = /^(\d{4})/;
var parseTokensYYYYY = [/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/];
var parseTokenMM = /^-(\d{2})$/;
var parseTokenDDD = /^-?(\d{3})$/;
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/;
var parseTokenWww = /^-?W(\d{2})$/;
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/;
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/;
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/;
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/;
var parseTokenTimezone = /([Z+-].*)$/;
var parseTokenTimezoneZ = /^(Z)$/;
var parseTokenTimezoneHH = /^([+-])(\d{2})$/;
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/;
function parse(argument, dirtyOptions) {
    if (is_date(argument)) {
        return new Date(argument.getTime());
    } else if (typeof argument !== 'string') {
        return new Date(argument);
    }
    var options = dirtyOptions || {};
    var additionalDigits = options.additionalDigits;
    if (additionalDigits == null) {
        additionalDigits = DEFAULT_ADDITIONAL_DIGITS;
    } else {
        additionalDigits = Number(additionalDigits);
    }
    var dateStrings = splitDateString(argument);
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    var year = parseYearResult.year;
    var restDateString = parseYearResult.restDateString;
    var date = parseDate(restDateString, year);
    if (date) {
        var timestamp = date.getTime();
        var time = 0;
        var offset;
        if (dateStrings.time) {
            time = parseTime(dateStrings.time);
        }
        if (dateStrings.timezone) {
            offset = parseTimezone(dateStrings.timezone);
        } else {
            offset = new Date(timestamp + time).getTimezoneOffset();
            offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset();
        }
        return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE);
    } else {
        return new Date(argument);
    }
}

function splitDateString(dateString) {
    var dateStrings = {};
    var array = dateString.split(parseTokenDateTimeDelimeter);
    var timeString;
    if (parseTokenPlainTime.test(array[0])) {
        dateStrings.date = null;
        timeString = array[0];
    } else {
        dateStrings.date = array[0];
        timeString = array[1];
    }
    if (timeString) {
        var token = parseTokenTimezone.exec(timeString);
        if (token) {
            dateStrings.time = timeString.replace(token[1], '');
            dateStrings.timezone = token[1];
        } else {
            dateStrings.time = timeString;
        }
    }
    return dateStrings;
}

function parseYear(dateString, additionalDigits) {
    var parseTokenYYY = parseTokensYYY[additionalDigits];
    var parseTokenYYYYY = parseTokensYYYYY[additionalDigits];
    var token;
    token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString);
    if (token) {
        var yearString = token[1];
        return {
            year: parseInt(yearString, 10),
            restDateString: dateString.slice(yearString.length)
        };
    }
    token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString);
    if (token) {
        var centuryString = token[1];
        return {
            year: parseInt(centuryString, 10) * 100,
            restDateString: dateString.slice(centuryString.length)
        };
    }
    return {
        year: null
    };
}

function parseDate(dateString, year) {
    if (year === null) {
        return null;
    }
    var token;
    var date;
    var month;
    var week;
    if (dateString.length === 0) {
        date = new Date(0);
        date.setUTCFullYear(year);
        return date;
    }
    token = parseTokenMM.exec(dateString);
    if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        date.setUTCFullYear(year, month);
        return date;
    }
    token = parseTokenDDD.exec(dateString);
    if (token) {
        date = new Date(0);
        var dayOfYear = parseInt(token[1], 10);
        date.setUTCFullYear(year, 0, dayOfYear);
        return date;
    }
    token = parseTokenMMDD.exec(dateString);
    if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        var day = parseInt(token[2], 10);
        date.setUTCFullYear(year, month, day);
        return date;
    }
    token = parseTokenWww.exec(dateString);
    if (token) {
        week = parseInt(token[1], 10) - 1;
        return dayOfISOYear(year, week);
    }
    token = parseTokenWwwD.exec(dateString);
    if (token) {
        week = parseInt(token[1], 10) - 1;
        var dayOfWeek = parseInt(token[2], 10) - 1;
        return dayOfISOYear(year, week, dayOfWeek);
    }
    return null;
}

function parseTime(timeString) {
    var token;
    var hours;
    var minutes;
    token = parseTokenHH.exec(timeString);
    if (token) {
        hours = parseFloat(token[1].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR;
    }
    token = parseTokenHHMM.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseFloat(token[2].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    }
    token = parseTokenHHMMSS.exec(timeString);
    if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseInt(token[2], 10);
        var seconds = parseFloat(token[3].replace(',', '.'));
        return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
    }
    return null;
}

function parseTimezone(timezoneString) {
    var token;
    var absoluteOffset;
    token = parseTokenTimezoneZ.exec(timezoneString);
    if (token) {
        return 0;
    }
    token = parseTokenTimezoneHH.exec(timezoneString);
    if (token) {
        absoluteOffset = parseInt(token[2], 10) * 60;
        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
    }
    token = parseTokenTimezoneHHMM.exec(timezoneString);
    if (token) {
        absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
        return token[1] === '+' ? -absoluteOffset : absoluteOffset;
    }
    return 0;
}

function dayOfISOYear(isoYear, week, day) {
    week = week || 0;
    day = day || 0;
    var date = new Date(0);
    date.setUTCFullYear(isoYear, 0, 4);
    var fourthOfJanuaryDay = date.getUTCDay() || 7;
    var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}

var parse_1 = parse;

function getDate(dirtyDate) {
    var date = parse_1(dirtyDate);
    var dayOfMonth = date.getDate();
    return dayOfMonth;
}

var get_date = getDate;

function getDay(dirtyDate) {
    var date = parse_1(dirtyDate);
    var day = date.getDay();
    return day;
}

var get_day = getDay;

function startOfYear(dirtyDate) {
    var cleanDate = parse_1(dirtyDate);
    var date = new Date(0);
    date.setFullYear(cleanDate.getFullYear(), 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}

var start_of_year = startOfYear;

function startOfDay(dirtyDate) {
    var date = parse_1(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
}

var start_of_day = startOfDay;

var MILLISECONDS_IN_MINUTE$1 = 60000;
var MILLISECONDS_IN_DAY = 86400000;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    var startOfDayLeft = start_of_day(dirtyDateLeft);
    var startOfDayRight = start_of_day(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() - startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$1;
    var timestampRight = startOfDayRight.getTime() - startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$1;
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

var difference_in_calendar_days = differenceInCalendarDays;

function getDayOfYear(dirtyDate) {
    var date = parse_1(dirtyDate);
    var diff = difference_in_calendar_days(date, start_of_year(date));
    var dayOfYear = diff + 1;
    return dayOfYear;
}

var get_day_of_year = getDayOfYear;

function startOfWeek(dirtyDate, dirtyOptions) {
    var weekStartsOn = dirtyOptions ? Number(dirtyOptions.weekStartsOn) || 0 : 0;
    var date = parse_1(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
}

var start_of_week = startOfWeek;

function startOfISOWeek(dirtyDate) {
    return start_of_week(dirtyDate, {
        weekStartsOn: 1
    });
}

var start_of_iso_week = startOfISOWeek;

function getISOYear(dirtyDate) {
    var date = parse_1(dirtyDate);
    var year = date.getFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = start_of_iso_week(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = start_of_iso_week(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}

var get_iso_year = getISOYear;

function startOfISOYear(dirtyDate) {
    var year = get_iso_year(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = start_of_iso_week(fourthOfJanuary);
    return date;
}

var start_of_iso_year = startOfISOYear;

var MILLISECONDS_IN_WEEK = 604800000;
function getISOWeek(dirtyDate) {
    var date = parse_1(dirtyDate);
    var diff = start_of_iso_week(date).getTime() - start_of_iso_year(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

var get_iso_week = getISOWeek;

function isValid(dirtyDate) {
    if (is_date(dirtyDate)) {
        return !isNaN(dirtyDate);
    } else {
        throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date');
    }
}

var is_valid = isValid;

function buildDistanceInWordsLocale() {
    var distanceInWordsLocale = {
        lessThanXSeconds: {
            one: 'less than a second',
            other: 'less than {{count}} seconds'
        },
        xSeconds: {
            one: '1 second',
            other: '{{count}} seconds'
        },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
            one: 'less than a minute',
            other: 'less than {{count}} minutes'
        },
        xMinutes: {
            one: '1 minute',
            other: '{{count}} minutes'
        },
        aboutXHours: {
            one: 'about 1 hour',
            other: 'about {{count}} hours'
        },
        xHours: {
            one: '1 hour',
            other: '{{count}} hours'
        },
        xDays: {
            one: '1 day',
            other: '{{count}} days'
        },
        aboutXMonths: {
            one: 'about 1 month',
            other: 'about {{count}} months'
        },
        xMonths: {
            one: '1 month',
            other: '{{count}} months'
        },
        aboutXYears: {
            one: 'about 1 year',
            other: 'about {{count}} years'
        },
        xYears: {
            one: '1 year',
            other: '{{count}} years'
        },
        overXYears: {
            one: 'over 1 year',
            other: 'over {{count}} years'
        },
        almostXYears: {
            one: 'almost 1 year',
            other: 'almost {{count}} years'
        }
    };
    function localize(token, count, options) {
        options = options || {};
        var result;
        if (typeof distanceInWordsLocale[token] === 'string') {
            result = distanceInWordsLocale[token];
        } else if (count === 1) {
            result = distanceInWordsLocale[token].one;
        } else {
            result = distanceInWordsLocale[token].other.replace('{{count}}', count);
        }
        if (options.addSuffix) {
            if (options.comparison > 0) {
                return 'in ' + result;
            } else {
                return result + ' ago';
            }
        }
        return result;
    }
    
    return {
        localize: localize
    };
}

var build_distance_in_words_locale = buildDistanceInWordsLocale;

var commonFormatterKeys = ['M','MM','Q','D','DD','DDD','DDDD','d','E','W','WW','YY',
    'YYYY','GG','GGGG','H','HH','h','hh','m','mm','s','ss','S','SS','SSS','Z','ZZ',
    'X','x'];
function buildFormattingTokensRegExp(formatters) {
    var formatterKeys = [];
    for (var key in formatters) {
        if (formatters.hasOwnProperty(key)) {
            formatterKeys.push(key);
        }
    }
    var formattingTokens = commonFormatterKeys.concat(formatterKeys).sort().reverse();
    var formattingTokensRegExp = new RegExp('(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g');
    return formattingTokensRegExp;
}

var build_formatting_tokens_reg_exp = buildFormattingTokensRegExp;

function buildFormatLocale() {
    var months3char = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct',
        'Nov','Dec'];
    var monthsFull = ['January','February','March','April','May','June','July','August',
        'September','October','November','December'];
    var weekdays2char = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    var weekdays3char = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var weekdaysFull = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',
        'Saturday'];
    var meridiemUppercase = ['AM','PM'];
    var meridiemLowercase = ['am','pm'];
    var meridiemFull = ['a.m.','p.m.'];
    var formatters = {
        'MMM': function (date) {
            return months3char[date.getMonth()];
        },
        'MMMM': function (date) {
            return monthsFull[date.getMonth()];
        },
        'dd': function (date) {
            return weekdays2char[date.getDay()];
        },
        'ddd': function (date) {
            return weekdays3char[date.getDay()];
        },
        'dddd': function (date) {
            return weekdaysFull[date.getDay()];
        },
        'A': function (date) {
            return date.getHours() / 12 >= 1 ? meridiemUppercase[1] : meridiemUppercase[0];
        },
        'a': function (date) {
            return date.getHours() / 12 >= 1 ? meridiemLowercase[1] : meridiemLowercase[0];
        },
        'aa': function (date) {
            return date.getHours() / 12 >= 1 ? meridiemFull[1] : meridiemFull[0];
        }
    };
    var ordinalFormatters = ['M','D','DDD','d','Q','W'];
    ordinalFormatters.forEach(function (formatterToken) {
        formatters[formatterToken + 'o'] = function (date, formatters) {
            return ordinal(formatters[formatterToken](date));
        };
    });
    return {
        formatters: formatters,
        formattingTokensRegExp: build_formatting_tokens_reg_exp(formatters)
    };
}

function ordinal(number) {
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
            case 1:
                return number + 'st';
            case 2:
                return number + 'nd';
            case 3:
                return number + 'rd';
        }
    }
    return number + 'th';
}

var build_format_locale = buildFormatLocale;

var en = {
    distanceInWords: build_distance_in_words_locale(),
    format: build_format_locale()
};

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ';
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFormatters = en.format.formatters;
    var formattingTokensRegExp = en.format.formattingTokensRegExp;
    if (locale && locale.format && locale.format.formatters) {
        localeFormatters = locale.format.formatters;
        if (locale.format.formattingTokensRegExp) {
            formattingTokensRegExp = locale.format.formattingTokensRegExp;
        }
    }
    var date = parse_1(dirtyDate);
    if (!is_valid(date)) {
        return 'Invalid Date';
    }
    var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp);
    return formatFn(date);
}

var formatters = {
    'M': function (date) {
        return date.getMonth() + 1;
    },
    'MM': function (date) {
        return addLeadingZeros(date.getMonth() + 1, 2);
    },
    'Q': function (date) {
        return Math.ceil((date.getMonth() + 1) / 3);
    },
    'D': function (date) {
        return date.getDate();
    },
    'DD': function (date) {
        return addLeadingZeros(date.getDate(), 2);
    },
    'DDD': function (date) {
        return get_day_of_year(date);
    },
    'DDDD': function (date) {
        return addLeadingZeros(get_day_of_year(date), 3);
    },
    'd': function (date) {
        return date.getDay();
    },
    'E': function (date) {
        return date.getDay() || 7;
    },
    'W': function (date) {
        return get_iso_week(date);
    },
    'WW': function (date) {
        return addLeadingZeros(get_iso_week(date), 2);
    },
    'YY': function (date) {
        return addLeadingZeros(date.getFullYear(), 4).substr(2);
    },
    'YYYY': function (date) {
        return addLeadingZeros(date.getFullYear(), 4);
    },
    'GG': function (date) {
        return String(get_iso_year(date)).substr(2);
    },
    'GGGG': function (date) {
        return get_iso_year(date);
    },
    'H': function (date) {
        return date.getHours();
    },
    'HH': function (date) {
        return addLeadingZeros(date.getHours(), 2);
    },
    'h': function (date) {
        var hours = date.getHours();
        if (hours === 0) {
            return 12;
        } else if (hours > 12) {
            return hours % 12;
        } else {
            return hours;
        }
    },
    'hh': function (date) {
        return addLeadingZeros(formatters['h'](date), 2);
    },
    'm': function (date) {
        return date.getMinutes();
    },
    'mm': function (date) {
        return addLeadingZeros(date.getMinutes(), 2);
    },
    's': function (date) {
        return date.getSeconds();
    },
    'ss': function (date) {
        return addLeadingZeros(date.getSeconds(), 2);
    },
    'S': function (date) {
        return Math.floor(date.getMilliseconds() / 100);
    },
    'SS': function (date) {
        return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2);
    },
    'SSS': function (date) {
        return addLeadingZeros(date.getMilliseconds(), 3);
    },
    'Z': function (date) {
        return formatTimezone(date.getTimezoneOffset(), ':');
    },
    'ZZ': function (date) {
        return formatTimezone(date.getTimezoneOffset());
    },
    'X': function (date) {
        return Math.floor(date.getTime() / 1000);
    },
    'x': function (date) {
        return date.getTime();
    }
};
function buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp) {
    var array = formatStr.match(formattingTokensRegExp);
    var length = array.length;
    var i;
    var formatter;
    for (i = 0; i < length; i++) {
        formatter = localeFormatters[array[i]] || formatters[array[i]];
        if (formatter) {
            array[i] = formatter;
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }
    return function (date) {
        var output = '';
        for (var i = 0;i < length; i++) {
            if (array[i] instanceof Function) {
                output += array[i](date, formatters);
            } else {
                output += array[i];
            }
        }
        return output;
    };
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function formatTimezone(offset, delimeter) {
    delimeter = delimeter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2);
}

function addLeadingZeros(number, targetLength) {
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

var format_1 = format;

function isEqual(dirtyLeftDate, dirtyRightDate) {
    var dateLeft = parse_1(dirtyLeftDate);
    var dateRight = parse_1(dirtyRightDate);
    return dateLeft.getTime() === dateRight.getTime();
}

var is_equal = isEqual;

var CalendarDate = function CalendarDate(date) {
    this._dateDate = date;
    this._date = get_date(date);
    this._day = get_day(date);
    this._selection = false;
};

var prototypeAccessors = { date: { configurable: true },day: { configurable: true } };
prototypeAccessors.date.get = function () {
    return this._date;
};
prototypeAccessors.day.get = function () {
    return this._day;
};
CalendarDate.prototype.isSelected = function isSelected () {
    return this._selection;
};

CalendarDate.prototype.select = function select () {
    this._selection = true;
};
CalendarDate.prototype.deselect = function deselect () {
    this._selection = false;
};
CalendarDate.prototype.toString = function toString () {
    return format_1(this._dateDate, 'YYYY-MM-DD');
};
CalendarDate.prototype.isEqual = function isEqual$1 (calendarDate) {
    return is_equal(this._date, calendarDate.date);
};

Object.defineProperties( CalendarDate.prototype, prototypeAccessors );

var DatePad = (function (CalendarDate$$1) {
    function DatePad(date) {
        CalendarDate$$1.call(this, date);
        this._date = '';
        this._day = '';
        this._pad = true;
    }

    if ( CalendarDate$$1 ) DatePad.__proto__ = CalendarDate$$1;
    DatePad.prototype = Object.create( CalendarDate$$1 && CalendarDate$$1.prototype );
    DatePad.prototype.constructor = DatePad;

    return DatePad;
}(CalendarDate));

function data() {
    return {
        key: ''
    };
}


function getDayCellClass() {
    var classnames = ['apocCalendar-Component_DayCell'];
    return classnames.join(' ');
}


function getDateCellClass(date, selection) {
    var classnames = ['apocCalendar-Component_DateCell'];
    if (date instanceof DatePad) {
        classnames.shift();
    }
    if (date.isSelected()) {
        classnames.push('apocCalendar-Is_Selected');
    }
    return classnames.join(' ');
}


var methods = {
    selectDay: function selectDay(day) {},
    selectDate: function selectDate(date) {
        date.select();
        this.store.udpateDates();
    }
};
function oncreate() {
    console.log(this);
}


function encapsulateStyles$1(node) {
    setAttribute(node, "svelte-2758442359", "");
}

function add_css$1() {
    var style = createElement("style");
    style.id = 'svelte-2758442359-style';
    style.textContent = "[svelte-2758442359].apocCalendar-Component_DateTable,[svelte-2758442359] .apocCalendar-Component_DateTable{display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:1px;list-style:none;padding:0;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;z-index:2}[svelte-2758442359].apocCalendar-Component_DayCell,[svelte-2758442359] .apocCalendar-Component_DayCell,[svelte-2758442359].apocCalendar-Component_DateCell,[svelte-2758442359] .apocCalendar-Component_DateCell{transition:.1s;font-size:.8em;width:3em;cursor:pointer;background:#fff;margin:0}[svelte-2758442359].apocCalendar-Component_DayCell.apocCalendar-Is_Selected:not(.apocCalendar-Is_Disabled):not(.apocCalendar-Is_Hidden),[svelte-2758442359] .apocCalendar-Component_DayCell.apocCalendar-Is_Selected:not(.apocCalendar-Is_Disabled):not(.apocCalendar-Is_Hidden),[svelte-2758442359].apocCalendar-Component_DateCell.apocCalendar-Is_Selected:not(.apocCalendar-Is_Disabled):not(.apocCalendar-Is_Hidden),[svelte-2758442359] .apocCalendar-Component_DateCell.apocCalendar-Is_Selected:not(.apocCalendar-Is_Disabled):not(.apocCalendar-Is_Hidden){background:#cb1b45}[svelte-2758442359].apocCalendar-Component_DayCell:not(.apocCalendar-Is_Prev):not(.apocCalendar-Is_Next):not(.apocCalendar-Is_Disabled):not(.apocCalendar-Is_Selected):hover,[svelte-2758442359] .apocCalendar-Component_DayCell:not(.apocCalendar-Is_Prev):not(.apocCalendar-Is_Next):not(.apocCalendar-Is_Disabled):not(.apocCalendar-Is_Selected):hover,[svelte-2758442359].apocCalendar-Component_DateCell:not(.apocCalendar-Is_Prev):not(.apocCalendar-Is_Next):not(.apocCalendar-Is_Disabled):not(.apocCalendar-Is_Selected):hover,[svelte-2758442359] .apocCalendar-Component_DateCell:not(.apocCalendar-Is_Prev):not(.apocCalendar-Is_Next):not(.apocCalendar-Is_Disabled):not(.apocCalendar-Is_Selected):hover{background:#ccc}[svelte-2758442359].apocCalendar-Is_Disabled,[svelte-2758442359] .apocCalendar-Is_Disabled{opacity:.3}";
    appendNode(style, document.head);
}

function create_main_fragment$2(state, component) {
    var span, text, text_1, ul, each_anchor;
    var $days = state.$days;
    var each_blocks = [];
    for (var i = 0;i < $days.length; i += 1) {
        each_blocks[i] = create_each_block(state, $days, $days[i], i, component);
    }
    var $dates = state.$dates;
    var each_1_blocks = [];
    for (var i = 0;i < $dates.length; i += 1) {
        each_1_blocks[i] = create_each_block_1(state, $dates, $dates[i], i, component);
    }
    return {
        c: function create() {
            span = createElement("span");
            text = createText(state.key);
            text_1 = createText("\n");
            ul = createElement("ul");
            for (var i = 0;i < each_blocks.length; i += 1) {
                each_blocks[i].c();
            }
            each_anchor = createComment();
            for (var i = 0;i < each_1_blocks.length; i += 1) {
                each_1_blocks[i].c();
            }
            this.h();
        },
        h: function hydrate() {
            encapsulateStyles$1(span);
            setStyle(span, "display", "none");
            encapsulateStyles$1(ul);
            ul.className = "apocCalendar-Component_DateTable";
        },
        m: function mount(target, anchor) {
            insertNode(span, target, anchor);
            appendNode(text, span);
            insertNode(text_1, target, anchor);
            insertNode(ul, target, anchor);
            for (var i = 0;i < each_blocks.length; i += 1) {
                each_blocks[i].m(ul, null);
            }
            appendNode(each_anchor, ul);
            for (var i = 0;i < each_1_blocks.length; i += 1) {
                each_1_blocks[i].m(ul, null);
            }
        },
        p: function update(changed, state) {
            if (changed.key) {
                text.data = state.key;
            }
            var $days = state.$days;
            if (changed.$days || changed.$__key_dates__) {
                for (var i = 0;i < $days.length; i += 1) {
                    if (each_blocks[i]) {
                        each_blocks[i].p(changed, state, $days, $days[i], i);
                    } else {
                        each_blocks[i] = create_each_block(state, $days, $days[i], i, component);
                        each_blocks[i].c();
                        each_blocks[i].m(ul, each_anchor);
                    }
                }
                for (; i < each_blocks.length; i += 1) {
                    each_blocks[i].u();
                    each_blocks[i].d();
                }
                each_blocks.length = $days.length;
            }
            var $dates = state.$dates;
            if (changed.$dates || changed.$__key_dates__) {
                for (var i = 0;i < $dates.length; i += 1) {
                    if (each_1_blocks[i]) {
                        each_1_blocks[i].p(changed, state, $dates, $dates[i], i);
                    } else {
                        each_1_blocks[i] = create_each_block_1(state, $dates, $dates[i], i, component);
                        each_1_blocks[i].c();
                        each_1_blocks[i].m(ul, null);
                    }
                }
                for (; i < each_1_blocks.length; i += 1) {
                    each_1_blocks[i].u();
                    each_1_blocks[i].d();
                }
                each_1_blocks.length = $dates.length;
            }
        },
        u: function unmount() {
            detachNode(span);
            detachNode(text_1);
            detachNode(ul);
            for (var i = 0;i < each_blocks.length; i += 1) {
                each_blocks[i].u();
            }
            for (var i = 0;i < each_1_blocks.length; i += 1) {
                each_1_blocks[i].u();
            }
        },
        d: function destroy$$1() {
            destroyEach(each_blocks);
            destroyEach(each_1_blocks);
        }
    };
}

function create_each_block(state, $days, day, day_index, component) {
    var li, li_class_value;
    var daycell = new Day_cell({
        root: component.root,
        data: {
            day: day
        }
    });
    return {
        c: function create() {
            li = createElement("li");
            daycell._fragment.c();
            this.h();
        },
        h: function hydrate() {
            li.className = (li_class_value = getDayCellClass(day, state.$__key_dates__));
            addListener(li, "click", click_handler);
            li._svelte = {
                component: component,
                $days: $days,
                day_index: day_index
            };
        },
        m: function mount(target, anchor) {
            insertNode(li, target, anchor);
            daycell._mount(li, null);
        },
        p: function update(changed, state, $days, day, day_index) {
            var daycell_changes = {};
            if (changed.$days) 
                { daycell_changes.day = day; }
            daycell._set(daycell_changes);
            if ((changed.$days || changed.$__key_dates__) && li_class_value !== (li_class_value = getDayCellClass(day, state.$__key_dates__))) {
                li.className = li_class_value;
            }
            li._svelte.$days = $days;
            li._svelte.day_index = day_index;
        },
        u: function unmount() {
            detachNode(li);
        },
        d: function destroy$$1() {
            daycell.destroy(false);
            removeListener(li, "click", click_handler);
        }
    };
}

function create_each_block_1(state, $dates, date, date_index, component) {
    var li, li_class_value;
    var datecell = new Date_cell({
        root: component.root,
        data: {
            date: date
        }
    });
    return {
        c: function create() {
            li = createElement("li");
            datecell._fragment.c();
            this.h();
        },
        h: function hydrate() {
            li.className = (li_class_value = getDateCellClass(date, state.$__key_dates__));
            addListener(li, "click", click_handler_1);
            li._svelte = {
                component: component,
                $dates: $dates,
                date_index: date_index
            };
        },
        m: function mount(target, anchor) {
            insertNode(li, target, anchor);
            datecell._mount(li, null);
        },
        p: function update(changed, state, $dates, date, date_index) {
            var datecell_changes = {};
            if (changed.$dates) 
                { datecell_changes.date = date; }
            datecell._set(datecell_changes);
            if ((changed.$dates || changed.$__key_dates__) && li_class_value !== (li_class_value = getDateCellClass(date, state.$__key_dates__))) {
                li.className = li_class_value;
            }
            li._svelte.$dates = $dates;
            li._svelte.date_index = date_index;
        },
        u: function unmount() {
            detachNode(li);
        },
        d: function destroy$$1() {
            datecell.destroy(false);
            removeListener(li, "click", click_handler_1);
        }
    };
}

function click_handler(event) {
    var component = this._svelte.component;
    var $days = this._svelte.$days, day_index = this._svelte.day_index, day = $days[day_index];
    component.selectDay(day);
}

function click_handler_1(event) {
    var component = this._svelte.component;
    var $dates = this._svelte.$dates, date_index = this._svelte.date_index, date = $dates[date_index];
    component.selectDate(date);
}

function Month2(options) {
    init(this, options);
    this._state = assign(this.store._init(["days","__key_dates__","dates"]), data(), options.data);
    this.store._add(this, ["days","__key_dates__","dates"]);
    this._handlers.destroy = [removeFromStore];
    if (!document.getElementById("svelte-2758442359-style")) 
        { add_css$1(); }
    var _oncreate = oncreate.bind(this);
    if (!options.root) {
        this._oncreate = [];
        this._beforecreate = [];
        this._aftercreate = [];
    }
    this._fragment = create_main_fragment$2(this._state, this);
    this.root._oncreate.push(_oncreate);
    if (options.target) {
        this._fragment.c();
        this._fragment.m(options.target, options.anchor || null);
        this._lock = true;
        callAll(this._beforecreate);
        callAll(this._oncreate);
        callAll(this._aftercreate);
        this._lock = false;
    }
}

assign(Month2.prototype, methods, proto);

function data$1() {
    return {
        type: 'left'
    };
}


function getClass$2(type) {
    var classnames = ['apocCalendar-Component_Pager'];
    if (type === 'right') {
        classnames.push('apocCalendar-Is_Right');
    } else {
        classnames.push('apocCalendar-Is_Left');
    }
    return classnames.join(' ');
}


function includesMinDate(store) {
    return store.includesMinDate();
}


function includesMaxDate(store) {
    return store.includesMaxDate();
}


var methods$1 = {
    move: function move(type) {
        if (type === 'right') {
            this.options.data.store.next();
        } else {
            this.options.data.store.prev();
        }
    }
};
function oncreate$1() {
    var this$1 = this;

    console.log(this.root);
    var store = this.get('store');
    store.observe('currentDates', function (currentDates) {
        this$1.set({
            currentDates: currentDates
        });
    });
}


function encapsulateStyles$2(node) {
    setAttribute(node, "svelte-1384732644", "");
}

function add_css$2() {
    var style = createElement("style");
    style.id = 'svelte-1384732644-style';
    style.textContent = "[svelte-1384732644].apocCalendar-Component_Pager,[svelte-1384732644] .apocCalendar-Component_Pager{position:absolute;bottom:50%;transform:translateY(50%);cursor:pointer;border-radius:50%;background:#444;width:5em;height:5em;z-index:1}[svelte-1384732644].apocCalendar-Component_Pager svg,[svelte-1384732644] .apocCalendar-Component_Pager svg{position:absolute;bottom:50%;transform:translate(50%, 50%);width:2em;height:2em;fill:#fff}[svelte-1384732644].apocCalendar-Is_Left,[svelte-1384732644] .apocCalendar-Is_Left{left:-2.5em}[svelte-1384732644].apocCalendar-Is_Left svg,[svelte-1384732644] .apocCalendar-Is_Left svg{right:calc(50% + 1em)}[svelte-1384732644].apocCalendar-Is_Right,[svelte-1384732644] .apocCalendar-Is_Right{right:-2.5em}[svelte-1384732644].apocCalendar-Is_Right svg,[svelte-1384732644] .apocCalendar-Is_Right svg{right:calc(50% - 1em)}";
    appendNode(style, document.head);
}

function create_main_fragment$3(state, component) {
    var text, if_block_1_anchor;
    var if_block = state.type === 'left' && !includesMinDate(state.store) && create_if_block(state, component);
    var if_block_1 = state.type === 'right' && !includesMaxDate(state.store) && create_if_block_1(state, component);
    return {
        c: function create() {
            if (if_block) 
                { if_block.c(); }
            text = createText("\n\n");
            if (if_block_1) 
                { if_block_1.c(); }
            if_block_1_anchor = createComment();
        },
        m: function mount(target, anchor) {
            if (if_block) 
                { if_block.m(target, anchor); }
            insertNode(text, target, anchor);
            if (if_block_1) 
                { if_block_1.m(target, anchor); }
            insertNode(if_block_1_anchor, target, anchor);
        },
        p: function update(changed, state) {
            if (state.type === 'left' && !includesMinDate(state.store)) {
                if (if_block) {
                    if_block.p(changed, state);
                } else {
                    if_block = create_if_block(state, component);
                    if_block.c();
                    if_block.m(text.parentNode, text);
                }
            } else if (if_block) {
                if_block.u();
                if_block.d();
                if_block = null;
            }
            if (state.type === 'right' && !includesMaxDate(state.store)) {
                if (if_block_1) {
                    if_block_1.p(changed, state);
                } else {
                    if_block_1 = create_if_block_1(state, component);
                    if_block_1.c();
                    if_block_1.m(if_block_1_anchor.parentNode, if_block_1_anchor);
                }
            } else if (if_block_1) {
                if_block_1.u();
                if_block_1.d();
                if_block_1 = null;
            }
        },
        u: function unmount() {
            if (if_block) 
                { if_block.u(); }
            detachNode(text);
            if (if_block_1) 
                { if_block_1.u(); }
            detachNode(if_block_1_anchor);
        },
        d: function destroy$$1() {
            if (if_block) 
                { if_block.d(); }
            if (if_block_1) 
                { if_block_1.d(); }
        }
    };
}

function create_if_block(state, component) {
    var div, div_class_value;
    function click_handler(event) {
        var state = component.get();
        component.root.onClickPagerPrev(state.step);
    }
    
    return {
        c: function create() {
            div = createElement("div");
            div.innerHTML = "<svg version=\"1.1\" width=\"8\" height=\"16\" viewBox=\"0 0 8 16\" class=\"octicon octicon-chevron-left\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5z\"></path></svg>";
            this.h();
        },
        h: function hydrate() {
            encapsulateStyles$2(div);
            div.className = (div_class_value = getClass$2(state.type));
            addListener(div, "click", click_handler);
        },
        m: function mount(target, anchor) {
            insertNode(div, target, anchor);
        },
        p: function update(changed, state) {
            if (changed.type && div_class_value !== (div_class_value = getClass$2(state.type))) {
                div.className = div_class_value;
            }
        },
        u: function unmount() {
            detachNode(div);
        },
        d: function destroy$$1() {
            removeListener(div, "click", click_handler);
        }
    };
}

function create_if_block_1(state, component) {
    var div, div_class_value;
    function click_handler(event) {
        var state = component.get();
        component.root.onClickPagerNext(state.step);
    }
    
    return {
        c: function create() {
            div = createElement("div");
            div.innerHTML = "<svg version=\"1.1\" width=\"8\" height=\"16\" viewBox=\"0 0 8 16\" class=\"octicon octicon-chevron-right\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3z\"></path></svg>";
            this.h();
        },
        h: function hydrate() {
            encapsulateStyles$2(div);
            div.className = (div_class_value = getClass$2(state.type));
            addListener(div, "click", click_handler);
        },
        m: function mount(target, anchor) {
            insertNode(div, target, anchor);
        },
        p: function update(changed, state) {
            if (changed.type && div_class_value !== (div_class_value = getClass$2(state.type))) {
                div.className = div_class_value;
            }
        },
        u: function unmount() {
            detachNode(div);
        },
        d: function destroy$$1() {
            removeListener(div, "click", click_handler);
        }
    };
}

function Pager(options) {
    init(this, options);
    this._state = assign(data$1(), options.data);
    if (!document.getElementById("svelte-1384732644-style")) 
        { add_css$2(); }
    var _oncreate = oncreate$1.bind(this);
    if (!options.root) {
        this._oncreate = [];
    }
    this._fragment = create_main_fragment$3(this._state, this);
    this.root._oncreate.push(_oncreate);
    if (options.target) {
        this._fragment.c();
        this._fragment.m(options.target, options.anchor || null);
        callAll(this._oncreate);
    }
}

assign(Pager.prototype, methods$1, proto);

function data$2() {
    return {};
}


function head(year, month) {
    return (year + "." + month);
}

var methods$2 = {};
function oncreate$2() {
    console.log(this.store);
    console.log(this.store.get('year'));
}


function encapsulateStyles$3(node) {
    setAttribute(node, "svelte-2812626217", "");
}

function add_css$3() {
    var style = createElement("style");
    style.id = 'svelte-2812626217-style';
    style.textContent = "[svelte-2812626217].apocCalendar-Component_Box,[svelte-2812626217] .apocCalendar-Component_Box{position:relative;font-size:1em;box-sizing:border-box;background:#444;border:1px solid #444}[svelte-2812626217].apocCalendar-Component_Header,[svelte-2812626217] .apocCalendar-Component_Header{font-size:1em;font-weight:bold;line-height:2;margin-bottom:1px;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";
    appendNode(style, document.head);
}

function create_main_fragment$4(state, component) {
    var section, header, text_value = head(state.$year, state.$month), text, text_1;
    var month = new Month2({
        root: component.root
    });
    return {
        c: function create() {
            section = createElement("section");
            header = createElement("header");
            text = createText(text_value);
            text_1 = createText("\n\t\n\t");
            month._fragment.c();
            this.h();
        },
        h: function hydrate() {
            encapsulateStyles$3(section);
            header.className = "apocCalendar-Component_Header";
            section.className = "apocCalendar-Component_Box";
        },
        m: function mount(target, anchor) {
            insertNode(section, target, anchor);
            appendNode(header, section);
            appendNode(text, header);
            appendNode(text_1, section);
            month._mount(section, null);
        },
        p: function update(changed, state) {
            if ((changed.$year || changed.$month) && text_value !== (text_value = head(state.$year, state.$month))) {
                text.data = text_value;
            }
        },
        u: function unmount() {
            detachNode(section);
        },
        d: function destroy$$1() {
            month.destroy(false);
        }
    };
}

function Calendar2(options) {
    init(this, options);
    this._state = assign(this.store._init(["year","month"]), data$2(), options.data);
    this.store._add(this, ["year","month"]);
    this._handlers.destroy = [removeFromStore];
    if (!document.getElementById("svelte-2812626217-style")) 
        { add_css$3(); }
    var _oncreate = oncreate$2.bind(this);
    if (!options.root) {
        this._oncreate = [];
        this._beforecreate = [];
        this._aftercreate = [];
    }
    this._fragment = create_main_fragment$4(this._state, this);
    this.root._oncreate.push(_oncreate);
    if (options.target) {
        this._fragment.c();
        this._fragment.m(options.target, options.anchor || null);
        this._lock = true;
        callAll(this._beforecreate);
        callAll(this._oncreate);
        callAll(this._aftercreate);
        this._lock = false;
    }
}

assign(Calendar2.prototype, methods$2, proto);

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft);
    var dateRight = parse_1(dirtyDateRight);
    return dateLeft.getFullYear() - dateRight.getFullYear();
}

var difference_in_calendar_years = differenceInCalendarYears;

function getDaysInMonth(dirtyDate) {
    var date = parse_1(dirtyDate);
    var year = date.getFullYear();
    var monthIndex = date.getMonth();
    var lastDayOfMonth = new Date(0);
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
    lastDayOfMonth.setHours(0, 0, 0, 0);
    return lastDayOfMonth.getDate();
}

var get_days_in_month = getDaysInMonth;

function addMonths(dirtyDate, dirtyAmount) {
    var date = parse_1(dirtyDate);
    var amount = Number(dirtyAmount);
    var desiredMonth = date.getMonth() + amount;
    var dateWithDesiredMonth = new Date(0);
    dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1);
    dateWithDesiredMonth.setHours(0, 0, 0, 0);
    var daysInMonth = get_days_in_month(dateWithDesiredMonth);
    date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
    return date;
}

var add_months = addMonths;

function addYears(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount);
    return add_months(dirtyDate, amount * 12);
}

var add_years = addYears;

function getYear(dirtyDate) {
    var date = parse_1(dirtyDate);
    var year = date.getFullYear();
    return year;
}

var get_year = getYear;

function getMonth(dirtyDate) {
    var date = parse_1(dirtyDate);
    var month = date.getMonth();
    return month;
}

var get_month = getMonth;

var nativeCeil = Math.ceil;
var nativeMax$1 = Math.max;
function baseRange(start, end, step, fromRight) {
    var index = -1, length = nativeMax$1(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
    while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
    }
    return result;
}

var _baseRange = baseRange;

function eq$2(value, other) {
    return value === other || value !== value && other !== other;
}

var eq_1 = eq$2;

var freeGlobal$3 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$3;

var freeSelf$3 = typeof self == 'object' && self && self.Object === Object && self;
var root$3 = _freeGlobal || freeSelf$3 || Function('return this')();
var _root = root$3;

var Symbol$3 = _root.Symbol;
var _Symbol = Symbol$3;

var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
var nativeObjectToString = objectProto$3.toString;
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
function getRawTag(value) {
    var isOwn = hasOwnProperty$2.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}

var _getRawTag = getRawTag;

var objectProto$4 = Object.prototype;
var nativeObjectToString$1 = objectProto$4.toString;
function objectToString$3(value) {
    return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString$3;

var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

function isObject$3(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$3;

var asyncTag = '[object AsyncFunction]';
var funcTag$2 = '[object Function]';
var genTag$2 = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';
function isFunction$2(value) {
    if (!isObject_1(value)) {
        return false;
    }
    var tag = _baseGetTag(value);
    return tag == funcTag$2 || tag == genTag$2 || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$2;

var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

var MAX_SAFE_INTEGER$2 = 9007199254740991;
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;
function isIndex$1(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$2 : length;
    return !(!length) && (type == 'number' || type != 'symbol' && reIsUint$1.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$1;

function isIterateeCall(value, index, object) {
    if (!isObject_1(object)) {
        return false;
    }
    var type = typeof index;
    if (type == 'number' ? isArrayLike_1(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
        return eq_1(object[index], value);
    }
    return false;
}

var _isIterateeCall = isIterateeCall;

function isObjectLike$3(value) {
    return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$3;

var symbolTag$3 = '[object Symbol]';
function isSymbol$3(value) {
    return typeof value == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag$3;
}

var isSymbol_1 = isSymbol$3;

var NAN$1 = 0 / 0;
var reTrim$1 = /^\s+|\s+$/g;
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary$1 = /^0b[01]+$/i;
var reIsOctal$1 = /^0o[0-7]+$/i;
var freeParseInt$1 = parseInt;
function toNumber$2(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol_1(value)) {
        return NAN$1;
    }
    if (isObject_1(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject_1(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim$1, '');
    var isBinary = reIsBinary$1.test(value);
    return isBinary || reIsOctal$1.test(value) ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8) : reIsBadHex$1.test(value) ? NAN$1 : +value;
}

var toNumber_1 = toNumber$2;

var INFINITY$2 = 1 / 0;
var MAX_INTEGER = 1.7976931348623157e+308;
function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber_1(value);
    if (value === INFINITY$2 || value === -INFINITY$2) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}

var toFinite_1 = toFinite;

function createRange(fromRight) {
    return function (start, end, step) {
        if (step && typeof step != 'number' && _isIterateeCall(start, end, step)) {
            end = (step = undefined);
        }
        start = toFinite_1(start);
        if (end === undefined) {
            end = start;
            start = 0;
        } else {
            end = toFinite_1(end);
        }
        step = step === undefined ? start < end ? 1 : -1 : toFinite_1(step);
        return _baseRange(start, end, step, fromRight);
    };
}

var _createRange = createRange;

var range$1 = _createRange();
var range_1 = range$1;

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft);
    var dateRight = parse_1(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
}

var difference_in_calendar_months = differenceInCalendarMonths;

function compareAsc(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft);
    var timeLeft = dateLeft.getTime();
    var dateRight = parse_1(dirtyDateRight);
    var timeRight = dateRight.getTime();
    if (timeLeft < timeRight) {
        return -1;
    } else if (timeLeft > timeRight) {
        return 1;
    } else {
        return 0;
    }
}

var compare_asc = compareAsc;

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft);
    var dateRight = parse_1(dirtyDateRight);
    var sign = compare_asc(dateLeft, dateRight);
    var difference = Math.abs(difference_in_calendar_months(dateLeft, dateRight));
    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
    var isLastMonthNotFull = compare_asc(dateLeft, dateRight) === -sign;
    return sign * (difference - isLastMonthNotFull);
}

var difference_in_months = differenceInMonths;

function setDate(dirtyDate, dirtyDayOfMonth) {
    var date = parse_1(dirtyDate);
    var dayOfMonth = Number(dirtyDayOfMonth);
    date.setDate(dayOfMonth);
    return date;
}

var set_date = setDate;

function addDays(dirtyDate, dirtyAmount) {
    var date = parse_1(dirtyDate);
    var amount = Number(dirtyAmount);
    date.setDate(date.getDate() + amount);
    return date;
}

var add_days = addDays;

var CalendarMonth = function CalendarMonth(date) {
    this._month = get_month(date);
    var baseDate = set_date(date, 1);
    var daysInMonth = get_days_in_month(date);
    this._dates = range_1(daysInMonth).map(function (amount) { return new CalendarDate(add_days(baseDate, amount)); });
};

var prototypeAccessors$1 = { dates: { configurable: true } };
prototypeAccessors$1.dates.get = function () {
    return this._dates;
};

CalendarMonth.prototype.toEqual = function toEqual (date) {
    return this._month === get_month(date);
};

Object.defineProperties( CalendarMonth.prototype, prototypeAccessors$1 );

var CalendarYear = function CalendarYear(date, maxDate, minDate) {
    this._year = date.getFullYear();
    var diff = difference_in_months(maxDate, minDate);
    this._months = range_1(diff).map(function (amount) { return new CalendarMonth(add_months(date, amount)); });
};

var prototypeAccessors$2 = { months: { configurable: true } };
prototypeAccessors$2.months.get = function () {
    return this._months;
};

CalendarYear.prototype.toEqual = function toEqual (date) {
    return this._year === get_year(date);
};
CalendarYear.prototype.find = function find (iteratorFn) {
    var result = this._months.find(iteratorFn);
    return result;
};

Object.defineProperties( CalendarYear.prototype, prototypeAccessors$2 );

var CalendarStore$2 = (function (Store$$1) {
    function CalendarStore(initialState) {
        Store$$1.call(this, initialState);
        this._ref = undefined;
        var date = initialState.date;
        console.log('initialState', initialState);
        var diff = difference_in_calendar_years(date.min, date.max);
        var years = range_1(diff).map(function (amount) { return new CalendarYear(add_years(date.min, amount), date.max, date.min); });
        this.set({
            years: years,
            year: get_year(date.initial),
            month: get_month(date.initial)
        });
        this.compute('days', ['template'], function (ref) {
            var dayOfTheWeek = ref.dayOfTheWeek;

            return [dayOfTheWeek.sun,
            dayOfTheWeek.mon,dayOfTheWeek.tues,dayOfTheWeek.wed,dayOfTheWeek.thurs,
            dayOfTheWeek.fri,dayOfTheWeek.sat];
        });
        this.compute('dates', ['years','year','month'], function (years, currentYear, currentMonth) {
            var current = new Date(currentYear, currentMonth);
            var year = years.find(function (year) { return year.toEqual(current); });
            var month = year.find(function (month) { return month.toEqual(current); });
            if (typeof month === 'undefined') {
                throw new Error('month is undefined');
            }
            var dates = month.dates;
            var ref = dates[0];
            var day = ref.day;
            for (var i = 0;i < day; i++) {
                dates.unshift(new DatePad());
            }
            return dates;
        });
    }

    if ( Store$$1 ) CalendarStore.__proto__ = Store$$1;
    CalendarStore.prototype = Object.create( Store$$1 && Store$$1.prototype );
    CalendarStore.prototype.constructor = CalendarStore;

    var prototypeAccessors = { ref: { configurable: true },minDate: { configurable: true },maxDate: { configurable: true },initialMonth: { configurable: true },years: { configurable: true } };
    prototypeAccessors.ref.set = function (apocCalendar) {
        this._ref = apocCalendar;
    };
    prototypeAccessors.minDate.get = function () {
        return this.get('minDate');
    };
    prototypeAccessors.maxDate.get = function () {
        return this.get('maxDate');
    };
    prototypeAccessors.initialMonth.get = function () {
        return this.get('initialMonth');
    };
    prototypeAccessors.years.get = function () {
        return this.get('years');
    };
    CalendarStore.prototype.update = function update () {
        this.set({
            __key__: Math.random() / 10000 + Math.random()
        });
    };
    CalendarStore.prototype.udpateDates = function udpateDates () {
        this.set({
            __key_dates__: Math.random() / 10000 + Math.random()
        });
    };
    CalendarStore.prototype.getSelectedDates = function getSelectedDates () {
        var result = [];
        this.years.forEach(function (year) {
            year.months.forEach(function (month) {
                month.dates.forEach(function (date) {
                    if (date.isSelected()) {
                        result.push(date);
                    }
                });
            });
        });
        return result;
    };

    Object.defineProperties( CalendarStore.prototype, prototypeAccessors );

    return CalendarStore;
}(Store));

var TODAY_DATE = new Date();
var initialState = {
    'date.initial': TODAY_DATE,
    'date.min': TODAY_DATE,
    'date.max': add_months(TODAY_DATE, 12),
    'date.pad': true,
    'pager.next': true,
    'pager.prev': true,
    'pager.step': 1,
    'template.head': '{year}.{month}',
    'template.dayOfTheWeek': {
        sun: 'Sun',
        mon: 'Mon',
        tues: 'Tues',
        wed: 'Wed',
        thurs: 'Thurs',
        fri: 'Fri',
        sat: 'Sat'
    }
};

var ApocCalendar = function ApocCalendar(target, initialState$$1) {
    if ( initialState$$1 === void 0 ) initialState$$1 = initialState;

    this.target = target;
    this.store = new CalendarStore$2(Dr(_extends({}, initialState, initialState$$1)));
    this.calendar = new Calendar2({
        target: this.target,
        store: this.store
    });
    this._prepareObserver();
};
ApocCalendar.prototype._prepareObserver = function _prepareObserver () {
        var this$1 = this;

    this.store.observe('__key_dates__', function () {
        var dates = this$1.store.getSelectedDates();
        this$1.calendar.fire('onUpdateDates', dates.map(function (date) { return date.toString(); }));
    });
};
ApocCalendar.prototype.on = function on (name, cb) {
    this.calendar.on(name, cb);
};
ApocCalendar.prototype.share = function share () {
        var apocCalendars = [], len = arguments.length;
        while ( len-- ) apocCalendars[ len ] = arguments[ len ];

    apocCalendars.forEach(function (ac) {
        ac.store.ref = ac;
    });
};

return ApocCalendar;

}());
