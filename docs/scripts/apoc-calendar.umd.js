(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ApocCalendar = factory());
}(this, (function () { 'use strict';

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

function _differs(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === 'object' || typeof a === 'function');
}

function _differsImmutable(a, b) {
    return a != a ? b == b : a !== b;
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
    var this$1 = this;

    var oldState = this._state, changed = {}, dirty = false;
    for (var key in newState) {
        if (this$1._differs(newState[key], oldState[key])) 
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
    _unmount: _unmount,
    _differs: _differs
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

function Store(state, options) {
    this._observers = {
        pre: blankObject(),
        post: blankObject()
    };
    this._changeHandlers = [];
    this._dependents = [];
    this._computed = blankObject();
    this._sortedComputedProperties = [];
    this._state = assign({}, state);
    this._differs = options && options.immutable ? _differsImmutable : _differs;
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
        var store = this;
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
                    if (store._differs(newValue, value)) {
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
            if (this$1._differs(newState[key], oldState[key])) 
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

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
    var dateLeft = parse_1(dirtyDateLeft);
    var dateRight = parse_1(dirtyDateRight);
    return dateLeft.getFullYear() - dateRight.getFullYear();
}

var difference_in_calendar_years = differenceInCalendarYears;

function isBefore(dirtyDate, dirtyDateToCompare) {
    var date = parse_1(dirtyDate);
    var dateToCompare = parse_1(dirtyDateToCompare);
    return date.getTime() < dateToCompare.getTime();
}

var is_before = isBefore;

function isAfter(dirtyDate, dirtyDateToCompare) {
    var date = parse_1(dirtyDate);
    var dateToCompare = parse_1(dirtyDateToCompare);
    return date.getTime() > dateToCompare.getTime();
}

var is_after = isAfter;

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

function subMonths(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount);
    return add_months(dirtyDate, -amount);
}

var sub_months = subMonths;

function addMilliseconds(dirtyDate, dirtyAmount) {
    var timestamp = parse_1(dirtyDate).getTime();
    var amount = Number(dirtyAmount);
    return new Date(timestamp + amount);
}

var add_milliseconds = addMilliseconds;

function addSeconds(dirtyDate, dirtyAmount) {
    var amount = Number(dirtyAmount);
    return add_milliseconds(dirtyDate, amount * 1000);
}

var add_seconds = addSeconds;

var nativeCeil = Math.ceil;
var nativeMax = Math.max;
function baseRange(start, end, step, fromRight) {
    var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
    while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
    }
    return result;
}

var _baseRange = baseRange;

function eq(value, other) {
    return value === other || value !== value && other !== other;
}

var eq_1 = eq;

var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;

var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
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

var objectProto$1 = Object.prototype;
var nativeObjectToString$1 = objectProto$1.toString;
function objectToString(value) {
    return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

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

function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';
function isFunction(value) {
    if (!isObject_1(value)) {
        return false;
    }
    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !(!length) && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

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

function isObjectLike(value) {
    return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

var symbolTag = '[object Symbol]';
function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}

var isSymbol_1 = isSymbol;

var NAN = 0 / 0;
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol_1(value)) {
        return NAN;
    }
    if (isObject_1(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject_1(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

var toNumber_1 = toNumber$1;

var INFINITY = 1 / 0;
var MAX_INTEGER = 1.7976931348623157e+308;
function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber_1(value);
    if (value === INFINITY || value === -INFINITY) {
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

var range = _createRange();
var range_1 = range;

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
    var diff = difference_in_months(maxDate, minDate) + 1;
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

var CalendarStore = (function (Store$$1) {
    function CalendarStore(initialState, calendar) {
        var this$1 = this;

        Store$$1.call(this, initialState);
        this._calendar = calendar;
        var date = initialState.date;
        var ref = initialState.ref;
        if (this._hasRef()) {
            this.ref.store.set({
                __refs__: this.ref.store.refs.concat( [calendar])
            });
            var date$1 = add_months(new Date(ref.store.year, ref.store.month), ref.store.refs.length);
            this.set({
                years: ref.store.years,
                year: get_year(date$1),
                month: get_month(date$1)
            });
        } else {
            var diff = difference_in_calendar_years(date.max, date.min) + 1;
            var years = range_1(diff).map(function (amount) { return new CalendarYear(add_years(date.min, amount), date.max, date.min); });
            this.set({
                years: years,
                year: get_year(date.initial || date.min),
                month: get_month(date.initial || date.min)
            });
        }
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
            if (is_before(this$1.minDate, add_seconds(this$1.currentDate, 1)) && is_after(add_seconds(this$1.currentDate, 1), this$1.maxDate)) {
                return dates.map(function () { return new DatePad(); });
            }
            return dates;
        });
        this.set({
            getDayState: this.getDayState
        });
    }

    if ( Store$$1 ) CalendarStore.__proto__ = Store$$1;
    CalendarStore.prototype = Object.create( Store$$1 && Store$$1.prototype );
    CalendarStore.prototype.constructor = CalendarStore;

    var prototypeAccessors = { refs: { configurable: true },ref: { configurable: true },years: { configurable: true },year: { configurable: true },month: { configurable: true },dates: { configurable: true },date: { configurable: true },currentDate: { configurable: true },minDate: { configurable: true },maxDate: { configurable: true },color: { configurable: true } };
    prototypeAccessors.refs.get = function () {
        return this.get('__refs__');
    };
    prototypeAccessors.ref.get = function () {
        return this.get('ref');
    };
    prototypeAccessors.years.get = function () {
        if (this._hasRef()) {
            return this.ref.store.get('years');
        }
        return this.get('years');
    };
    prototypeAccessors.year.get = function () {
        return this.get('year');
    };
    prototypeAccessors.month.get = function () {
        return this.get('month');
    };
    prototypeAccessors.dates.get = function () {
        return this.get('dates');
    };
    prototypeAccessors.date.get = function () {
        return this.get('date');
    };
    prototypeAccessors.currentDate.get = function () {
        return new Date(this.year, this.month);
    };
    prototypeAccessors.minDate.get = function () {
        var date;
        if (this._hasRef()) {
            date = this.ref.store.date.min;
        } else {
            date = this.date.min;
        }
        return new Date(get_year(date), get_month(date));
    };
    prototypeAccessors.maxDate.get = function () {
        var date;
        if (this._hasRef()) {
            date = this.ref.store.date.max;
        } else {
            date = this.date.max;
        }
        return new Date(get_year(date), get_month(date));
    };
    prototypeAccessors.color.get = function () {
        return this.get('color');
    };
    CalendarStore.prototype._hasRef = function _hasRef () {
        return typeof this.ref !== 'undefined';
    };
    CalendarStore.prototype._getRefsSize = function _getRefsSize () {
        if (!this._hasRef()) {
            return this.refs.length;
        }
        return this.ref.store.refs.length;
    };
    CalendarStore.prototype._getFirstCalendar = function _getFirstCalendar () {
        if (!this._hasRef()) {
            return this._calendar;
        }
        return this.ref;
    };
    CalendarStore.prototype._getLastCalendar = function _getLastCalendar () {
        if (typeof this.ref === 'undefined' && this.refs.length === 0) {
            return this._calendar;
        } else if (typeof this.ref === 'undefined' && this.refs.length > 0) {
            return this.refs[this.refs.length - 1];
        } else if (typeof this.ref !== 'undefined' && this.refs.length > 0) {
            return this.ref.store.refs[this.ref.store.refs.length - 1];
        }
        return this.ref.store.refs[this.ref.store.refs.length - 1];
    };
    CalendarStore.prototype.fire = function fire (name, value) {
        if (this._hasRef()) {
            this.ref.calendar.fire(name, value);
        } else {
            this._calendar.calendar.fire(name, value);
        }
    };
    CalendarStore.prototype.update = function update () {
        this.set({
            __key__: Math.random() / 10000 + Math.random()
        });
    };
    CalendarStore.prototype.updateDates = function updateDates (fromRef) {
        var this$1 = this;
        if ( fromRef === void 0 ) fromRef = false;

        this.set({
            __key_dates__: Math.random() / 10000 + Math.random()
        });
        if (!fromRef && this._hasRef()) {
            this.ref.store.updateDates(true);
        } else if (!fromRef && this.refs.length > 0) {
            setTimeout(function () {
                this$1.refs.forEach(function (calendar) {
                    calendar.store.updateDates(true);
                });
            }, 30);
        }
    };
    CalendarStore.prototype.reset = function reset (fromRef) {
        if ( fromRef === void 0 ) fromRef = false;

        if (!fromRef) {
            var dates;
            if (this._hasRef()) {
                dates = this.ref.store.getSelectedDates();
            } else {
                dates = this.getSelectedDates();
            }
            dates.forEach(function (date) {
                date.deselect();
            });
        }
        if (!fromRef && this._hasRef()) {
            this.ref.store.reset(true);
        } else if (!fromRef) {
            this.refs.forEach(function (calendar) {
                calendar.store.reset(true);
            });
            this.updateDates();
        }
    };
    CalendarStore.prototype.restore = function restore (dates) {
        var updated = false;
        this.years.forEach(function (year) {
            year.months.forEach(function (month) {
                month.dates.forEach(function (date) {
                    if (dates.includes(date.toString())) {
                        date.select();
                        if (!updated) {
                            updated = true;
                        }
                    }
                });
            });
        });
        if (updated) {
            this.updateDates();
        }
    };
    CalendarStore.prototype.inRange = function inRange (year, month) {
        var current = new Date(year, month);
        return !is_before(this.minDate, current) && !is_after(current, this.maxDate);
    };
    CalendarStore.prototype.selectDay = function selectDay (day) {
        var state = this.getDayState(day);
        var updated = false;
        this.dates.forEach(function (date) {
            if (date instanceof DatePad) {
                return;
            }
            if (date.day === day) {
                if (state) {
                    date.deselect();
                } else {
                    date.select();
                }
                if (!updated) {
                    updated = true;
                }
            }
        });
        if (updated) {
            this.updateDates();
        }
    };
    CalendarStore.prototype.getDayState = function getDayState (day) {
        return (this.dates || this.$dates).filter(function (date) { return date.day === day; }).every(function (date) { return date.isSelected(); });
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
    CalendarStore.prototype.setPrevMonth = function setPrevMonth (fromRef, provisionalPrevDate) {
        if ( fromRef === void 0 ) fromRef = false;

        var size = this._getRefsSize();
        if (typeof provisionalPrevDate === 'undefined') {
            var firstCalendar = this._getFirstCalendar();
            provisionalPrevDate = sub_months(new Date(firstCalendar.store.year, firstCalendar.store.month), size + 1);
        }
        if (is_before(provisionalPrevDate, this.minDate)) {
            this.fire('onReachLowerLimit');
            return;
        }
        var prevDate = sub_months(new Date(this.year, this.month), size + 1);
        this.set({
            year: get_year(prevDate),
            month: get_month(prevDate)
        });
        if (!fromRef && this._hasRef()) {
            this.ref.store.setPrevMonth(true, provisionalPrevDate);
        } else if (!fromRef) {
            this.refs.forEach(function (calendar) {
                calendar.store.setPrevMonth(true, provisionalPrevDate);
            });
        }
    };
    CalendarStore.prototype.setNextMonth = function setNextMonth (fromRef, provisionalNextDate) {
        var this$1 = this;
        if ( fromRef === void 0 ) fromRef = false;

        var size = this._getRefsSize();
        if (typeof provisionalNextDate === 'undefined') {
            var lastCalendar = this._getLastCalendar();
            provisionalNextDate = add_months(new Date(lastCalendar.store.year, lastCalendar.store.month), size + 1);
        }
        if (is_after(provisionalNextDate, this.maxDate)) {
            this.fire('onReachUpperLimit');
            return;
        }
        var nextDate = add_months(new Date(this.year, this.month), size + 1);
        this.set({
            year: get_year(nextDate),
            month: get_month(nextDate)
        });
        if (!fromRef && this._hasRef()) {
            this.ref.store.setNextMonth(true, provisionalNextDate);
            this.ref.store.refs.forEach(function (calendar) {
                if (calendar !== this$1._calendar) {
                    calendar.store.setNextMonth(true, provisionalNextDate);
                }
            });
        } else if (!fromRef) {
            this.refs.forEach(function (calendar) {
                calendar.store.setNextMonth(true, provisionalNextDate);
            });
        }
    };

    Object.defineProperties( CalendarStore.prototype, prototypeAccessors );

    return CalendarStore;
}(Store));

var freeGlobal$2 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;
var root$2 = freeGlobal$2 || freeSelf$1 || Function('return this')();

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

function getDayCellClass(active) {
    var classnames = ['apocCalendar-Component_DayCell'];
    if (active) {
        classnames.push('apocCalendar-Is_Selected');
    }
    return classnames.join(' ');
}


function getDayCellStyle(active, color) {
    var styles = [("background: " + (color.background.cell)),("color: " + (color.text))];
    console.log(active);
    if (active) {
        styles.push(("background: " + (color.background.active)));
    }
    return styles.join(';');
}


function getDateCellClass(date) {
    var classnames = ['apocCalendar-Component_DateCell'];
    if (date instanceof DatePad) {
        classnames.push('apocCalendar-Is_Pad');
    }
    if (date.isSelected()) {
        classnames.push('apocCalendar-Is_Selected');
    }
    return classnames.join(' ');
}


function getDateCellStyle(date, color) {
    var styles = [("color: " + (color.text))];
    if (!date instanceof DatePad) {
        styles.push(("background: " + (color.background.cell)));
    }
    if (date.isSelected()) {
        styles.push(("background: " + (color.background.active)));
    }
    return styles.join(';');
}


var methods = {
    selectDay: function selectDay(day) {
        this.store.selectDay(day);
    },
    selectDate: function selectDate(date) {
        if (date instanceof DatePad) {
            return;
        }
        if (date.isSelected()) {
            date.deselect();
        } else {
            date.select();
        }
        this.store.updateDates();
    },
    setActiveColorToBackground: function setActiveColorToBackground(el) {
        Object.assign(el.style, {
            background: this.store.color.background.hover
        });
    },
    resetColorToBackground: function resetColorToBackground(el) {
        Object.assign(el.style, {
            background: null
        });
    },
    handleDateMouseEnter: function handleDateMouseEnter(ev) {
        var el = ev.target;
        if (!el.classList.contains('apocCalendar-Is_Selected') && !el.classList.contains('apocCalendar-Is_Pad')) {
            this.setActiveColorToBackground(el);
        }
    },
    handleDateMouseLeave: function handleDateMouseLeave(ev) {
        var el = ev.target;
        if (!el.classList.contains('apocCalendar-Is_Selected') && !el.classList.contains('apocCalendar-Is_Pad')) {
            this.resetColorToBackground(el);
        }
    }
};
function encapsulateStyles$1(node) {
    setAttribute(node, "svelte-2668734080", "");
}

function add_css$1() {
    var style = createElement("style");
    style.id = 'svelte-2668734080-style';
    style.textContent = "[svelte-2668734080].apocCalendar-Component_DateTable,[svelte-2668734080] .apocCalendar-Component_DateTable{display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:1px;list-style:none;padding:0;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;z-index:2}[svelte-2668734080].apocCalendar-Component_DayCell,[svelte-2668734080] .apocCalendar-Component_DayCell,[svelte-2668734080].apocCalendar-Component_DateCell,[svelte-2668734080] .apocCalendar-Component_DateCell{font-size:.8em;width:3em;height:1.5em;cursor:pointer;background:#fff;margin:0}[svelte-2668734080].apocCalendar-Is_Pad,[svelte-2668734080] .apocCalendar-Is_Pad{background:transparent}";
    appendNode(style, document.head);
}

function create_main_fragment$2(state, component) {
    var ul, each_anchor;
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
            encapsulateStyles$1(ul);
            ul.className = "apocCalendar-Component_DateTable";
        },
        m: function mount(target, anchor) {
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
            var $days = state.$days;
            if (changed.$getDayState || changed.$__key_dates__ || changed.$color || changed.$days) {
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
            if (changed.$dates || changed.$__key_dates__ || changed.$color) {
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

function create_each_block(state, $days, day, i, component) {
    var li, li_class_value, li_style_value;
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
            li.className = (li_class_value = getDayCellClass(state.$getDayState(i), state.$__key_dates__));
            li.style.cssText = (li_style_value = getDayCellStyle(state.$getDayState(i), state.$color, state.$__key_dates__));
            addListener(li, "click", click_handler);
            li._svelte = {
                component: component,
                $days: $days,
                i: i
            };
        },
        m: function mount(target, anchor) {
            insertNode(li, target, anchor);
            daycell._mount(li, null);
        },
        p: function update(changed, state, $days, day, i) {
            var daycell_changes = {};
            if (changed.$days) 
                { daycell_changes.day = day; }
            daycell._set(daycell_changes);
            if ((changed.$getDayState || changed.$__key_dates__) && li_class_value !== (li_class_value = getDayCellClass(state.$getDayState(i), state.$__key_dates__))) {
                li.className = li_class_value;
            }
            if ((changed.$getDayState || changed.$color || changed.$__key_dates__) && li_style_value !== (li_style_value = getDayCellStyle(state.$getDayState(i), state.$color, state.$__key_dates__))) {
                li.style.cssText = li_style_value;
            }
            li._svelte.$days = $days;
            li._svelte.i = i;
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
    var li, li_class_value, li_style_value;
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
            li.style.cssText = (li_style_value = getDateCellStyle(date, state.$color, state.$__key_dates__));
            addListener(li, "click", click_handler_1);
            addListener(li, "mouseenter", mouseenter_handler);
            addListener(li, "mouseleave", mouseleave_handler);
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
            if ((changed.$dates || changed.$color || changed.$__key_dates__) && li_style_value !== (li_style_value = getDateCellStyle(date, state.$color, state.$__key_dates__))) {
                li.style.cssText = li_style_value;
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
            removeListener(li, "mouseenter", mouseenter_handler);
            removeListener(li, "mouseleave", mouseleave_handler);
        }
    };
}

function click_handler(event) {
    var component = this._svelte.component;
    var $days = this._svelte.$days, i = this._svelte.i, day = $days[i];
    component.selectDay(i);
}

function click_handler_1(event) {
    var component = this._svelte.component;
    var $dates = this._svelte.$dates, date_index = this._svelte.date_index, date = $dates[date_index];
    component.selectDate(date);
}

function mouseenter_handler(event) {
    var component = this._svelte.component;
    component.handleDateMouseEnter(event);
}

function mouseleave_handler(event) {
    var component = this._svelte.component;
    component.handleDateMouseLeave(event);
}

function Month$1(options) {
    init(this, options);
    this._state = assign(this.store._init(["days","getDayState","__key_dates__","color",
        "dates"]), options.data);
    this.store._add(this, ["days","getDayState","__key_dates__","color","dates"]);
    this._handlers.destroy = [removeFromStore];
    if (!document.getElementById("svelte-2668734080-style")) 
        { add_css$1(); }
    if (!options.root) {
        this._oncreate = [];
        this._beforecreate = [];
        this._aftercreate = [];
    }
    this._fragment = create_main_fragment$2(this._state, this);
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

assign(Month$1.prototype, methods, proto);

function data() {
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


var methods$1 = {
    prev: function prev() {
        this.store.setPrevMonth();
    },
    next: function next() {
        this.store.setNextMonth();
    }
};
function encapsulateStyles$2(node) {
    setAttribute(node, "svelte-2048934756", "");
}

function add_css$2() {
    var style = createElement("style");
    style.id = 'svelte-2048934756-style';
    style.textContent = "[svelte-2048934756].apocCalendar-Component_Pager,[svelte-2048934756] .apocCalendar-Component_Pager{position:absolute;bottom:50%;transform:translateY(50%);cursor:pointer;border-radius:50%;background:#444;width:2em;height:2em;z-index:1}[svelte-2048934756].apocCalendar-Component_Pager svg,[svelte-2048934756] .apocCalendar-Component_Pager svg{position:absolute;bottom:50%;transform:translate(50%, 50%);width:1em;height:1em;stroke:#fff}[svelte-2048934756].apocCalendar-Is_Left,[svelte-2048934756] .apocCalendar-Is_Left{left:-1em}[svelte-2048934756].apocCalendar-Is_Left svg,[svelte-2048934756] .apocCalendar-Is_Left svg{right:calc(50% + .45em)}[svelte-2048934756].apocCalendar-Is_Right,[svelte-2048934756] .apocCalendar-Is_Right{right:-1em}[svelte-2048934756].apocCalendar-Is_Right svg,[svelte-2048934756] .apocCalendar-Is_Right svg{right:calc(50% - .45em)}";
    appendNode(style, document.head);
}

function create_main_fragment$3(state, component) {
    var text, if_block_1_anchor;
    var if_block = state.type === 'left' && create_if_block(state, component);
    var if_block_1 = state.type === 'right' && create_if_block_1(state, component);
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
            if (state.type === 'left') {
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
            if (state.type === 'right') {
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
        component.prev();
    }
    
    return {
        c: function create() {
            div = createElement("div");
            div.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevron-left\"><polyline points=\"15 18 9 12 15 6\"></polyline></svg>";
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
        component.next();
    }
    
    return {
        c: function create() {
            div = createElement("div");
            div.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevron-right\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg>";
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
    this._state = assign(data(), options.data);
    if (!document.getElementById("svelte-2048934756-style")) 
        { add_css$2(); }
    this._fragment = create_main_fragment$3(this._state, this);
    if (options.target) {
        this._fragment.c();
        this._fragment.m(options.target, options.anchor || null);
    }
}

assign(Pager.prototype, methods$1, proto);

function data$1() {
    return {};
}


function getBoxStyles(color) {
    return ("\n\t\tbackground: " + (color.background.table) + ";\n\t\tborder: 1px solid " + (color.background.table) + ";\n\t");
}


function getheaderStyles(color) {
    return ("\n\t\tbackground: " + (color.background.cell) + ";\n\t\tcolor: " + (color.text) + ";\n\t");
}


function head(year, month) {
    return (year + "." + month);
}

function encapsulateStyles$3(node) {
    setAttribute(node, "svelte-1797829316", "");
}

function add_css$3() {
    var style = createElement("style");
    style.id = 'svelte-1797829316-style';
    style.textContent = "[svelte-1797829316].apocCalendar-Component_Box,[svelte-1797829316] .apocCalendar-Component_Box{position:relative;font-size:1em;box-sizing:border-box}[svelte-1797829316].apocCalendar-Component_Header,[svelte-1797829316] .apocCalendar-Component_Header{font-size:1em;font-weight:bold;line-height:2;margin-bottom:1px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";
    appendNode(style, document.head);
}

function create_main_fragment$4(state, component) {
    var section, header, text_value = head(state.$year, state.$month + 1), text, header_style_value, text_1, text_2, text_3, section_style_value;
    var month = new Month$1({
        root: component.root
    });
    var if_block = state.$pager.prev && create_if_block$1(state, component);
    var if_block_1 = state.$pager.next && create_if_block_1$1(state, component);
    return {
        c: function create() {
            section = createElement("section");
            header = createElement("header");
            text = createText(text_value);
            text_1 = createText("\n\t");
            month._fragment.c();
            text_2 = createText("\n\n\t");
            if (if_block) 
                { if_block.c(); }
            text_3 = createText("\n\n\t");
            if (if_block_1) 
                { if_block_1.c(); }
            this.h();
        },
        h: function hydrate() {
            encapsulateStyles$3(section);
            header.className = "apocCalendar-Component_Header";
            header.style.cssText = (header_style_value = getheaderStyles(state.$color));
            section.className = "apocCalendar-Component_Box";
            section.style.cssText = (section_style_value = getBoxStyles(state.$color));
        },
        m: function mount(target, anchor) {
            insertNode(section, target, anchor);
            appendNode(header, section);
            appendNode(text, header);
            appendNode(text_1, section);
            month._mount(section, null);
            appendNode(text_2, section);
            if (if_block) 
                { if_block.m(section, null); }
            appendNode(text_3, section);
            if (if_block_1) 
                { if_block_1.m(section, null); }
        },
        p: function update(changed, state) {
            if ((changed.$year || changed.$month) && text_value !== (text_value = head(state.$year, state.$month + 1))) {
                text.data = text_value;
            }
            if (changed.$color && header_style_value !== (header_style_value = getheaderStyles(state.$color))) {
                header.style.cssText = header_style_value;
            }
            if (state.$pager.prev) {
                if (!if_block) {
                    if_block = create_if_block$1(state, component);
                    if_block.c();
                    if_block.m(section, text_3);
                }
            } else if (if_block) {
                if_block.u();
                if_block.d();
                if_block = null;
            }
            if (state.$pager.next) {
                if (!if_block_1) {
                    if_block_1 = create_if_block_1$1(state, component);
                    if_block_1.c();
                    if_block_1.m(section, null);
                }
            } else if (if_block_1) {
                if_block_1.u();
                if_block_1.d();
                if_block_1 = null;
            }
            if (changed.$color && section_style_value !== (section_style_value = getBoxStyles(state.$color))) {
                section.style.cssText = section_style_value;
            }
        },
        u: function unmount() {
            detachNode(section);
            if (if_block) 
                { if_block.u(); }
            if (if_block_1) 
                { if_block_1.u(); }
        },
        d: function destroy$$1() {
            month.destroy(false);
            if (if_block) 
                { if_block.d(); }
            if (if_block_1) 
                { if_block_1.d(); }
        }
    };
}

function create_if_block$1(state, component) {
    var pager = new Pager({
        root: component.root
    });
    return {
        c: function create() {
            pager._fragment.c();
        },
        m: function mount(target, anchor) {
            pager._mount(target, anchor);
        },
        u: function unmount() {
            pager._unmount();
        },
        d: function destroy$$1() {
            pager.destroy(false);
        }
    };
}

function create_if_block_1$1(state, component) {
    var pager = new Pager({
        root: component.root,
        data: {
            type: "right"
        }
    });
    return {
        c: function create() {
            pager._fragment.c();
        },
        m: function mount(target, anchor) {
            pager._mount(target, anchor);
        },
        u: function unmount() {
            pager._unmount();
        },
        d: function destroy$$1() {
            pager.destroy(false);
        }
    };
}

function Calendar(options) {
    init(this, options);
    this._state = assign(this.store._init(["color","year","month","pager"]), data$1(), options.data);
    this.store._add(this, ["color","year","month","pager"]);
    this._handlers.destroy = [removeFromStore];
    if (!document.getElementById("svelte-1797829316-style")) 
        { add_css$3(); }
    if (!options.root) {
        this._oncreate = [];
        this._beforecreate = [];
        this._aftercreate = [];
    }
    this._fragment = create_main_fragment$4(this._state, this);
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

assign(Calendar.prototype, proto);

var TODAY_DATE = new Date();
var initialState = {
    'date.initial': undefined,
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
    },
    'color.text': '#222',
    'color.background.table': '#444',
    'color.background.cell': '#fcfcfc',
    'color.background.hover': '#ccc',
    'color.background.active': '#cb1b45',
    __refs__: [],
    ref: undefined
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

var ApocCalendar = function ApocCalendar(target, initialState$$1) {
    if ( initialState$$1 === void 0 ) initialState$$1 = initialState;

    this.target = target;
    this.store = new CalendarStore(Dr(_extends({}, initialState, initialState$$1)), this);
    this.calendar = new Calendar({
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
ApocCalendar.prototype.reset = function reset () {
    this.store.reset();
};
ApocCalendar.prototype.restore = function restore (dates) {
    this.store.restore(dates);
};

return ApocCalendar;

})));
