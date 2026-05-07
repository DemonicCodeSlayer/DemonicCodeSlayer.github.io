(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Js={exports:{}},tl={},Gs={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt=Symbol.for("react.element"),sc=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),Ai=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Ai&&e[Ai]||e["@@iterator"],typeof e=="function"?e:null)}var Qs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ks=Object.assign,Xs={};function it(e,n,t){this.props=e,this.context=n,this.refs=Xs,this.updater=t||Qs}it.prototype.isReactComponent={};it.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};it.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ys(){}Ys.prototype=it.prototype;function Vo(e,n,t){this.props=e,this.context=n,this.refs=Xs,this.updater=t||Qs}var Bo=Vo.prototype=new Ys;Bo.constructor=Vo;Ks(Bo,it.prototype);Bo.isPureReactComponent=!0;var zi=Array.isArray,bs=Object.prototype.hasOwnProperty,Wo={current:null},Zs={key:!0,ref:!0,__self:!0,__source:!0};function qs(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)bs.call(n,r)&&!Zs.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Xt,type:e,key:o,ref:i,props:l,_owner:Wo.current}}function yc(e,n){return{$$typeof:Xt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt}function Sc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Fi=/\/+/g;function kl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):n.toString(36)}function Sr(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xt:case sc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+kl(i,0):r,zi(l)?(t="",e!=null&&(t=e.replace(Fi,"$&/")+"/"),Sr(l,n,t,"",function(c){return c})):l!=null&&($o(l)&&(l=yc(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Fi,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",zi(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+kl(o,s);i+=Sr(o,n,t,a,l)}else if(a=vc(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+kl(o,s++),i+=Sr(o,n,t,a,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function tr(e,n,t){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(o){return n.call(t,o,l++)}),r}function wc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},wr={transition:null},kc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Wo};function ea(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:tr,forEach:function(e,n,t){tr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return tr(e,function(){n++}),n},toArray:function(e){return tr(e,function(n){return n})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=it;D.Fragment=ac;D.Profiler=cc;D.PureComponent=Vo;D.StrictMode=uc;D.Suspense=mc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;D.act=ea;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ks({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Wo.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)bs.call(n,a)&&!Zs.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Xt,type:e.type,key:l,ref:o,props:r,_owner:i}};D.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};D.createElement=qs;D.createFactory=function(e){var n=qs.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:pc,render:e}};D.isValidElement=$o;D.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:wc}};D.memo=function(e,n){return{$$typeof:hc,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};D.unstable_act=ea;D.useCallback=function(e,n){return se.current.useCallback(e,n)};D.useContext=function(e){return se.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return se.current.useDeferredValue(e)};D.useEffect=function(e,n){return se.current.useEffect(e,n)};D.useId=function(){return se.current.useId()};D.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return se.current.useMemo(e,n)};D.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};D.useRef=function(e){return se.current.useRef(e)};D.useState=function(e){return se.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return se.current.useTransition()};D.version="18.3.1";Gs.exports=D;var Me=Gs.exports;const xc=ic(Me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=Me,Tc=Symbol.for("react.element"),Ec=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,jc=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rc={key:!0,ref:!0,__self:!0,__source:!0};function na(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Pc.call(n,r)&&!Rc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Tc,type:e,key:o,ref:i,props:l,_owner:jc.current}}tl.Fragment=Ec;tl.jsx=na;tl.jsxs=na;Js.exports=tl;var y=Js.exports,Ql={},ta={exports:{}},ye={},ra={exports:{}},la={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(T,R){var N=T.length;T.push(R);e:for(;0<N;){var $=N-1>>>1,X=T[$];if(0<l(X,R))T[$]=R,T[N]=X,N=$;else break e}}function t(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],N=T.pop();if(N!==R){T[0]=N;e:for(var $=0,X=T.length,er=X>>>1;$<er;){var vn=2*($+1)-1,wl=T[vn],yn=vn+1,nr=T[yn];if(0>l(wl,N))yn<X&&0>l(nr,wl)?(T[$]=nr,T[yn]=N,$=yn):(T[$]=wl,T[vn]=N,$=vn);else if(yn<X&&0>l(nr,N))T[$]=nr,T[yn]=N,$=yn;else break e}}return R}function l(T,R){var N=T.sortIndex-R.sortIndex;return N!==0?N:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],p=1,h=null,m=3,S=!1,w=!1,k=!1,z=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(T){for(var R=t(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=T)r(c),R.sortIndex=R.expirationTime,n(a,R);else break;R=t(c)}}function g(T){if(k=!1,d(T),!w)if(t(a)!==null)w=!0,yl(C);else{var R=t(c);R!==null&&Sl(g,R.startTime-T)}}function C(T,R){w=!1,k&&(k=!1,f(j),j=-1),S=!0;var N=m;try{for(d(R),h=t(a);h!==null&&(!(h.expirationTime>R)||T&&!Pe());){var $=h.callback;if(typeof $=="function"){h.callback=null,m=h.priorityLevel;var X=$(h.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?h.callback=X:h===t(a)&&r(a),d(R)}else r(a);h=t(a)}if(h!==null)var er=!0;else{var vn=t(c);vn!==null&&Sl(g,vn.startTime-R),er=!1}return er}finally{h=null,m=N,S=!1}}var E=!1,P=null,j=-1,W=5,M=-1;function Pe(){return!(e.unstable_now()-M<W)}function ut(){if(P!==null){var T=e.unstable_now();M=T;var R=!0;try{R=P(!0,T)}finally{R?ct():(E=!1,P=null)}}else E=!1}var ct;if(typeof u=="function")ct=function(){u(ut)};else if(typeof MessageChannel<"u"){var Ii=new MessageChannel,oc=Ii.port2;Ii.port1.onmessage=ut,ct=function(){oc.postMessage(null)}}else ct=function(){z(ut,0)};function yl(T){P=T,E||(E=!0,ct())}function Sl(T,R){j=z(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,yl(C))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var N=m;m=R;try{return T()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=m;m=T;try{return R()}finally{m=N}},e.unstable_scheduleCallback=function(T,R,N){var $=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?$+N:$):N=$,T){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,T={id:p++,callback:R,priorityLevel:T,startTime:N,expirationTime:X,sortIndex:-1},N>$?(T.sortIndex=N,n(c,T),t(a)===null&&T===t(c)&&(k?(f(j),j=-1):k=!0,Sl(g,N-$))):(T.sortIndex=X,n(a,T),w||S||(w=!0,yl(C))),T},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(T){var R=m;return function(){var N=m;m=R;try{return T.apply(this,arguments)}finally{m=N}}}})(la);ra.exports=la;var Nc=ra.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=Me,ve=Nc;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oa=new Set,Lt={};function Mn(e,n){qn(e,n),qn(e+"Capture",n)}function qn(e,n){for(Lt[e]=n,e=0;e<n.length;e++)oa.add(n[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,Mc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hi={},Ui={};function Lc(e){return Kl.call(Ui,e)?!0:Kl.call(Hi,e)?!1:Mc.test(e)?Ui[e]=!0:(Hi[e]=!0,!1)}function Oc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _c(e,n,t,r){if(n===null||typeof n>"u"||Oc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jo=/[\-:]([a-z])/g;function Go(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Jo,Go);ee[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Jo,Go);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Jo,Go);ee[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qo(e,n,t,r){var l=ee.hasOwnProperty(n)?ee[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(_c(n,t,l,r)&&(t=null),r||l===null?Lc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Xe=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),In=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),ia=Symbol.for("react.provider"),sa=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),aa=Symbol.for("react.offscreen"),Vi=Symbol.iterator;function ft(e){return e===null||typeof e!="object"?null:(e=Vi&&e[Vi]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,xl;function St(e){if(xl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xl=n&&n[1]||""}return`
`+xl+e}var Cl=!1;function Tl(e,n){if(!e||Cl)return"";Cl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Cl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?St(e):""}function Ic(e){switch(e.tag){case 5:return St(e.type);case 16:return St("Lazy");case 13:return St("Suspense");case 19:return St("SuspenseList");case 0:case 2:case 15:return e=Tl(e.type,!1),e;case 11:return e=Tl(e.type.render,!1),e;case 1:return e=Tl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case In:return"Portal";case Xl:return"Profiler";case Ko:return"StrictMode";case Yl:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sa:return(e.displayName||"Context")+".Consumer";case ia:return(e._context.displayName||"Context")+".Provider";case Xo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yo:return n=e.displayName||null,n!==null?n:Zl(e.type)||"Memo";case be:n=e._payload,e=e._init;try{return Zl(e(n))}catch{}}return null}function Ac(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(n);case 8:return n===Ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ua(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zc(e){var n=ua(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function lr(e){e._valueTracker||(e._valueTracker=zc(e))}function ca(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ua(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Bi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=dn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fa(e,n){n=n.checked,n!=null&&Qo(e,"checked",n,!1)}function eo(e,n){fa(e,n);var t=dn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?no(e,n.type,t):n.hasOwnProperty("defaultValue")&&no(e,n.type,dn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function no(e,n,t){(n!=="number"||Mr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wt=Array.isArray;function Qn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+dn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function to(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $i(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(wt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dn(t)}}function da(e,n){var t=dn(n.value),r=dn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ji(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?pa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ma=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ot(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fc=["Webkit","ms","Moz","O"];Object.keys(Ct).forEach(function(e){Fc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ct[n]=Ct[e]})});function ha(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ct.hasOwnProperty(e)&&Ct[e]?(""+n).trim():n+"px"}function ga(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=ha(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Hc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lo(e,n){if(n){if(Hc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function oo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var so=null,Kn=null,Xn=null;function Gi(e){if(e=Zt(e)){if(typeof so!="function")throw Error(v(280));var n=e.stateNode;n&&(n=sl(n),so(e.stateNode,e.type,n))}}function va(e){Kn?Xn?Xn.push(e):Xn=[e]:Kn=e}function ya(){if(Kn){var e=Kn,n=Xn;if(Xn=Kn=null,Gi(e),n)for(e=0;e<n.length;e++)Gi(n[e])}}function Sa(e,n){return e(n)}function wa(){}var El=!1;function ka(e,n,t){if(El)return e(n,t);El=!0;try{return Sa(e,n,t)}finally{El=!1,(Kn!==null||Xn!==null)&&(wa(),ya())}}function _t(e,n){var t=e.stateNode;if(t===null)return null;var r=sl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var ao=!1;if(Je)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){ao=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{ao=!1}function Uc(e,n,t,r,l,o,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(p){this.onError(p)}}var Tt=!1,Lr=null,Or=!1,uo=null,Vc={onError:function(e){Tt=!0,Lr=e}};function Bc(e,n,t,r,l,o,i,s,a){Tt=!1,Lr=null,Uc.apply(Vc,arguments)}function Wc(e,n,t,r,l,o,i,s,a){if(Bc.apply(this,arguments),Tt){if(Tt){var c=Lr;Tt=!1,Lr=null}else throw Error(v(198));Or||(Or=!0,uo=c)}}function Ln(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function xa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Qi(e){if(Ln(e)!==e)throw Error(v(188))}function $c(e){var n=e.alternate;if(!n){if(n=Ln(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return Qi(l),e;if(o===r)return Qi(l),n;o=o.sibling}throw Error(v(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function Ca(e){return e=$c(e),e!==null?Ta(e):null}function Ta(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ta(e);if(n!==null)return n;e=e.sibling}return null}var Ea=ve.unstable_scheduleCallback,Ki=ve.unstable_cancelCallback,Jc=ve.unstable_shouldYield,Gc=ve.unstable_requestPaint,J=ve.unstable_now,Qc=ve.unstable_getCurrentPriorityLevel,Zo=ve.unstable_ImmediatePriority,Pa=ve.unstable_UserBlockingPriority,_r=ve.unstable_NormalPriority,Kc=ve.unstable_LowPriority,ja=ve.unstable_IdlePriority,rl=null,Fe=null;function Xc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Zc,Yc=Math.log,bc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(Yc(e)/bc|0)|0}var ir=64,sr=4194304;function kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~l;s!==0?r=kt(s):(o&=i,o!==0&&(r=kt(o)))}else i=t&~l,i!==0?r=kt(i):o!==0&&(r=kt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Le(n),l=1<<t,r|=e[t],n&=~l;return r}function qc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Le(o),s=1<<i,a=l[i];a===-1?(!(s&t)||s&r)&&(l[i]=qc(s,n)):a<=n&&(e.expiredLanes|=s),o&=~s}}function co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ra(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Pl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function nf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Le(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function qo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Le(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var O=0;function Na(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Da,ei,Ma,La,Oa,fo=!1,ar=[],rn=null,ln=null,on=null,It=new Map,At=new Map,qe=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":It.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(n.pointerId)}}function pt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=Zt(n),n!==null&&ei(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function rf(e,n,t,r,l){switch(n){case"focusin":return rn=pt(rn,e,n,t,r,l),!0;case"dragenter":return ln=pt(ln,e,n,t,r,l),!0;case"mouseover":return on=pt(on,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return It.set(o,pt(It.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,At.set(o,pt(At.get(o)||null,e,n,t,r,l)),!0}return!1}function _a(e){var n=kn(e.target);if(n!==null){var t=Ln(n);if(t!==null){if(n=t.tag,n===13){if(n=xa(t),n!==null){e.blockedOn=n,Oa(e.priority,function(){Ma(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=po(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);io=r,t.target.dispatchEvent(r),io=null}else return n=Zt(t),n!==null&&ei(n),e.blockedOn=t,!1;n.shift()}return!0}function Yi(e,n,t){kr(e)&&t.delete(n)}function lf(){fo=!1,rn!==null&&kr(rn)&&(rn=null),ln!==null&&kr(ln)&&(ln=null),on!==null&&kr(on)&&(on=null),It.forEach(Yi),At.forEach(Yi)}function mt(e,n){e.blockedOn===n&&(e.blockedOn=null,fo||(fo=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,lf)))}function zt(e){function n(l){return mt(l,e)}if(0<ar.length){mt(ar[0],e);for(var t=1;t<ar.length;t++){var r=ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&mt(rn,e),ln!==null&&mt(ln,e),on!==null&&mt(on,e),It.forEach(n),At.forEach(n),t=0;t<qe.length;t++)r=qe[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(t=qe[0],t.blockedOn===null);)_a(t),t.blockedOn===null&&qe.shift()}var Yn=Xe.ReactCurrentBatchConfig,Ar=!0;function of(e,n,t,r){var l=O,o=Yn.transition;Yn.transition=null;try{O=1,ni(e,n,t,r)}finally{O=l,Yn.transition=o}}function sf(e,n,t,r){var l=O,o=Yn.transition;Yn.transition=null;try{O=4,ni(e,n,t,r)}finally{O=l,Yn.transition=o}}function ni(e,n,t,r){if(Ar){var l=po(e,n,t,r);if(l===null)Al(e,n,r,zr,t),Xi(e,r);else if(rf(l,e,n,t,r))r.stopPropagation();else if(Xi(e,r),n&4&&-1<tf.indexOf(e)){for(;l!==null;){var o=Zt(l);if(o!==null&&Da(o),o=po(e,n,t,r),o===null&&Al(e,n,r,zr,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else Al(e,n,r,null,t)}}var zr=null;function po(e,n,t,r){if(zr=null,e=bo(r),e=kn(e),e!==null)if(n=Ln(e),n===null)e=null;else if(t=n.tag,t===13){if(e=xa(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return zr=e,null}function Ia(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qc()){case Zo:return 1;case Pa:return 4;case _r:case Kc:return 16;case ja:return 536870912;default:return 16}default:return 16}}var nn=null,ti=null,xr=null;function Aa(){if(xr)return xr;var e,n=ti,t=n.length,r,l="value"in nn?nn.value:nn.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return xr=l.slice(e,1<r?1-r:void 0)}function Cr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function bi(){return!1}function Se(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ur:bi,this.isPropagationStopped=bi,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),n}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=Se(st),bt=V({},st,{view:0,detail:0}),af=Se(bt),jl,Rl,ht,ll=V({},bt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ht&&(ht&&e.type==="mousemove"?(jl=e.screenX-ht.screenX,Rl=e.screenY-ht.screenY):Rl=jl=0,ht=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),Zi=Se(ll),uf=V({},ll,{dataTransfer:0}),cf=Se(uf),ff=V({},bt,{relatedTarget:0}),Nl=Se(ff),df=V({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=Se(df),mf=V({},st,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hf=Se(mf),gf=V({},st,{data:0}),qi=Se(gf),vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sf[e])?!!n[e]:!1}function li(){return wf}var kf=V({},bt,{key:function(e){if(e.key){var n=vf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xf=Se(kf),Cf=V({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=Se(Cf),Tf=V({},bt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),Ef=Se(Tf),Pf=V({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=Se(Pf),Rf=V({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nf=Se(Rf),Df=[9,13,27,32],oi=Je&&"CompositionEvent"in window,Et=null;Je&&"documentMode"in document&&(Et=document.documentMode);var Mf=Je&&"TextEvent"in window&&!Et,za=Je&&(!oi||Et&&8<Et&&11>=Et),ns=" ",ts=!1;function Fa(e,n){switch(e){case"keyup":return Df.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ha(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Lf(e,n){switch(e){case"compositionend":return Ha(n);case"keypress":return n.which!==32?null:(ts=!0,ns);case"textInput":return e=n.data,e===ns&&ts?null:e;default:return null}}function Of(e,n){if(zn)return e==="compositionend"||!oi&&Fa(e,n)?(e=Aa(),xr=ti=nn=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return za&&n.locale!=="ko"?null:n.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!_f[e.type]:n==="textarea"}function Ua(e,n,t,r){va(r),n=Fr(n,"onChange"),0<n.length&&(t=new ri("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Pt=null,Ft=null;function If(e){ba(e,0)}function ol(e){var n=Un(e);if(ca(n))return e}function Af(e,n){if(e==="change")return n}var Va=!1;if(Je){var Dl;if(Je){var Ml="oninput"in document;if(!Ml){var ls=document.createElement("div");ls.setAttribute("oninput","return;"),Ml=typeof ls.oninput=="function"}Dl=Ml}else Dl=!1;Va=Dl&&(!document.documentMode||9<document.documentMode)}function os(){Pt&&(Pt.detachEvent("onpropertychange",Ba),Ft=Pt=null)}function Ba(e){if(e.propertyName==="value"&&ol(Ft)){var n=[];Ua(n,Ft,e,bo(e)),ka(If,n)}}function zf(e,n,t){e==="focusin"?(os(),Pt=n,Ft=t,Pt.attachEvent("onpropertychange",Ba)):e==="focusout"&&os()}function Ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Ft)}function Hf(e,n){if(e==="click")return ol(n)}function Uf(e,n){if(e==="input"||e==="change")return ol(n)}function Vf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _e=typeof Object.is=="function"?Object.is:Vf;function Ht(e,n){if(_e(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Kl.call(n,l)||!_e(e[l],n[l]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ss(e,n){var t=is(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=is(t)}}function Wa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $a(){for(var e=window,n=Mr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Mr(e.document)}return n}function ii(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bf(e){var n=$a(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wa(t.ownerDocument.documentElement,t)){if(r!==null&&ii(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ss(t,o);var i=ss(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wf=Je&&"documentMode"in document&&11>=document.documentMode,Fn=null,mo=null,jt=null,ho=!1;function as(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ho||Fn==null||Fn!==Mr(r)||(r=Fn,"selectionStart"in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jt&&Ht(jt,r)||(jt=r,r=Fr(mo,"onSelect"),0<r.length&&(n=new ri("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Fn)))}function cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Hn={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Ll={},Ja={};Je&&(Ja=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function il(e){if(Ll[e])return Ll[e];if(!Hn[e])return e;var n=Hn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ja)return Ll[e]=n[t];return e}var Ga=il("animationend"),Qa=il("animationiteration"),Ka=il("animationstart"),Xa=il("transitionend"),Ya=new Map,us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,n){Ya.set(e,n),Mn(n,[e])}for(var Ol=0;Ol<us.length;Ol++){var _l=us[Ol],$f=_l.toLowerCase(),Jf=_l[0].toUpperCase()+_l.slice(1);mn($f,"on"+Jf)}mn(Ga,"onAnimationEnd");mn(Qa,"onAnimationIteration");mn(Ka,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Xa,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));function cs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Wc(r,n,void 0,e),e.currentTarget=null}function ba(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;cs(l,s,c),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;cs(l,s,c),o=a}}}if(Or)throw e=uo,Or=!1,uo=null,e}function I(e,n){var t=n[wo];t===void 0&&(t=n[wo]=new Set);var r=e+"__bubble";t.has(r)||(Za(n,e,2,!1),t.add(r))}function Il(e,n,t){var r=0;n&&(r|=4),Za(t,e,r,n)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Ut(e){if(!e[fr]){e[fr]=!0,oa.forEach(function(t){t!=="selectionchange"&&(Gf.has(t)||Il(t,!1,e),Il(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fr]||(n[fr]=!0,Il("selectionchange",!1,n))}}function Za(e,n,t,r){switch(Ia(n)){case 1:var l=of;break;case 4:l=sf;break;default:l=ni}t=l.bind(null,n,t,e),l=void 0,!ao||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Al(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=kn(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}ka(function(){var c=o,p=bo(t),h=[];e:{var m=Ya.get(e);if(m!==void 0){var S=ri,w=e;switch(e){case"keypress":if(Cr(t)===0)break e;case"keydown":case"keyup":S=xf;break;case"focusin":w="focus",S=Nl;break;case"focusout":w="blur",S=Nl;break;case"beforeblur":case"afterblur":S=Nl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ef;break;case Ga:case Qa:case Ka:S=pf;break;case Xa:S=jf;break;case"scroll":S=af;break;case"wheel":S=Nf;break;case"copy":case"cut":case"paste":S=hf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=es}var k=(n&4)!==0,z=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var u=c,d;u!==null;){d=u;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=_t(u,f),g!=null&&k.push(Vt(u,g,d)))),z)break;u=u.return}0<k.length&&(m=new S(m,w,null,t,p),h.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&t!==io&&(w=t.relatedTarget||t.fromElement)&&(kn(w)||w[Ge]))break e;if((S||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,S?(w=t.relatedTarget||t.toElement,S=c,w=w?kn(w):null,w!==null&&(z=Ln(w),w!==z||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(k=Zi,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=es,g="onPointerLeave",f="onPointerEnter",u="pointer"),z=S==null?m:Un(S),d=w==null?m:Un(w),m=new k(g,u+"leave",S,t,p),m.target=z,m.relatedTarget=d,g=null,kn(p)===c&&(k=new k(f,u+"enter",w,t,p),k.target=d,k.relatedTarget=z,g=k),z=g,S&&w)n:{for(k=S,f=w,u=0,d=k;d;d=On(d))u++;for(d=0,g=f;g;g=On(g))d++;for(;0<u-d;)k=On(k),u--;for(;0<d-u;)f=On(f),d--;for(;u--;){if(k===f||f!==null&&k===f.alternate)break n;k=On(k),f=On(f)}k=null}else k=null;S!==null&&fs(h,m,S,k,!1),w!==null&&z!==null&&fs(h,z,w,k,!0)}}e:{if(m=c?Un(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var C=Af;else if(rs(m))if(Va)C=Uf;else{C=Ff;var E=zf}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=Hf);if(C&&(C=C(e,c))){Ua(h,C,t,p);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&no(m,"number",m.value)}switch(E=c?Un(c):window,e){case"focusin":(rs(E)||E.contentEditable==="true")&&(Fn=E,mo=c,jt=null);break;case"focusout":jt=mo=Fn=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,as(h,t,p);break;case"selectionchange":if(Wf)break;case"keydown":case"keyup":as(h,t,p)}var P;if(oi)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else zn?Fa(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(za&&t.locale!=="ko"&&(zn||j!=="onCompositionStart"?j==="onCompositionEnd"&&zn&&(P=Aa()):(nn=p,ti="value"in nn?nn.value:nn.textContent,zn=!0)),E=Fr(c,j),0<E.length&&(j=new qi(j,e,null,t,p),h.push({event:j,listeners:E}),P?j.data=P:(P=Ha(t),P!==null&&(j.data=P)))),(P=Mf?Lf(e,t):Of(e,t))&&(c=Fr(c,"onBeforeInput"),0<c.length&&(p=new qi("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:c}),p.data=P))}ba(h,n)})}function Vt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=_t(e,t),o!=null&&r.unshift(Vt(e,o,l)),o=_t(e,n),o!=null&&r.push(Vt(e,o,l))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fs(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=_t(t,o),a!=null&&i.unshift(Vt(t,a,s))):l||(a=_t(t,o),a!=null&&i.push(Vt(t,a,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Qf=/\r\n?/g,Kf=/\u0000|\uFFFD/g;function ds(e){return(typeof e=="string"?e:""+e).replace(Qf,`
`).replace(Kf,"")}function dr(e,n,t){if(n=ds(n),ds(e)!==n&&t)throw Error(v(425))}function Hr(){}var go=null,vo=null;function yo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,Xf=typeof clearTimeout=="function"?clearTimeout:void 0,ps=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof ps<"u"?function(e){return ps.resolve(null).then(e).catch(bf)}:So;function bf(e){setTimeout(function(){throw e})}function zl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),zt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);zt(n)}function sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ms(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var at=Math.random().toString(36).slice(2),ze="__reactFiber$"+at,Bt="__reactProps$"+at,Ge="__reactContainer$"+at,wo="__reactEvents$"+at,Zf="__reactListeners$"+at,qf="__reactHandles$"+at;function kn(e){var n=e[ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ge]||t[ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ms(e);e!==null;){if(t=e[ze])return t;e=ms(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){return e=e[ze]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function sl(e){return e[Bt]||null}var ko=[],Vn=-1;function hn(e){return{current:e}}function A(e){0>Vn||(e.current=ko[Vn],ko[Vn]=null,Vn--)}function _(e,n){Vn++,ko[Vn]=e.current,e.current=n}var pn={},le=hn(pn),fe=hn(!1),Pn=pn;function et(e,n){var t=e.type.contextTypes;if(!t)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function Ur(){A(fe),A(le)}function hs(e,n,t){if(le.current!==pn)throw Error(v(168));_(le,n),_(fe,t)}function qa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(v(108,Ac(e)||"Unknown",l));return V({},t,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Pn=le.current,_(le,e),_(fe,fe.current),!0}function gs(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=qa(e,n,Pn),r.__reactInternalMemoizedMergedChildContext=e,A(fe),A(le),_(le,e)):A(fe),_(fe,t)}var Ve=null,al=!1,Fl=!1;function eu(e){Ve===null?Ve=[e]:Ve.push(e)}function ed(e){al=!0,eu(e)}function gn(){if(!Fl&&Ve!==null){Fl=!0;var e=0,n=O;try{var t=Ve;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,al=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Ea(Zo,gn),l}finally{O=n,Fl=!1}}return null}var Bn=[],Wn=0,Br=null,Wr=0,we=[],ke=0,jn=null,Be=1,We="";function Sn(e,n){Bn[Wn++]=Wr,Bn[Wn++]=Br,Br=e,Wr=n}function nu(e,n,t){we[ke++]=Be,we[ke++]=We,we[ke++]=jn,jn=e;var r=Be;e=We;var l=32-Le(r)-1;r&=~(1<<l),t+=1;var o=32-Le(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Be=1<<32-Le(n)+l|t<<l|r,We=o+e}else Be=1<<o|t<<l|r,We=e}function si(e){e.return!==null&&(Sn(e,1),nu(e,1,0))}function ai(e){for(;e===Br;)Br=Bn[--Wn],Bn[Wn]=null,Wr=Bn[--Wn],Bn[Wn]=null;for(;e===jn;)jn=we[--ke],we[ke]=null,We=we[--ke],we[ke]=null,Be=we[--ke],we[ke]=null}var ge=null,he=null,F=!1,De=null;function tu(e,n){var t=xe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function vs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,he=sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,he=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=jn!==null?{id:Be,overflow:We}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=xe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,he=null,!0):!1;default:return!1}}function xo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Co(e){if(F){var n=he;if(n){var t=n;if(!vs(e,n)){if(xo(e))throw Error(v(418));n=sn(t.nextSibling);var r=ge;n&&vs(e,n)?tu(r,t):(e.flags=e.flags&-4097|2,F=!1,ge=e)}}else{if(xo(e))throw Error(v(418));e.flags=e.flags&-4097|2,F=!1,ge=e}}}function ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!F)return ys(e),F=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yo(e.type,e.memoizedProps)),n&&(n=he)){if(xo(e))throw ru(),Error(v(418));for(;n;)tu(e,n),n=sn(n.nextSibling)}if(ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){he=sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}he=null}}else he=ge?sn(e.stateNode.nextSibling):null;return!0}function ru(){for(var e=he;e;)e=sn(e.nextSibling)}function nt(){he=ge=null,F=!1}function ui(e){De===null?De=[e]:De.push(e)}var nd=Xe.ReactCurrentBatchConfig;function gt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function mr(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ss(e){var n=e._init;return n(e._payload)}function lu(e){function n(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function t(f,u){if(!e)return null;for(;u!==null;)n(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=fn(f,u),f.index=0,f.sibling=null,f}function o(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,g){return u===null||u.tag!==6?(u=Jl(d,f.mode,g),u.return=f,u):(u=l(u,d),u.return=f,u)}function a(f,u,d,g){var C=d.type;return C===An?p(f,u,d.props.children,g,d.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===be&&Ss(C)===u.type)?(g=l(u,d.props),g.ref=gt(f,u,d),g.return=f,g):(g=Dr(d.type,d.key,d.props,null,f.mode,g),g.ref=gt(f,u,d),g.return=f,g)}function c(f,u,d,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Gl(d,f.mode,g),u.return=f,u):(u=l(u,d.children||[]),u.return=f,u)}function p(f,u,d,g,C){return u===null||u.tag!==7?(u=En(d,f.mode,g,C),u.return=f,u):(u=l(u,d),u.return=f,u)}function h(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Jl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rr:return d=Dr(u.type,u.key,u.props,null,f.mode,d),d.ref=gt(f,null,u),d.return=f,d;case In:return u=Gl(u,f.mode,d),u.return=f,u;case be:var g=u._init;return h(f,g(u._payload),d)}if(wt(u)||ft(u))return u=En(u,f.mode,d,null),u.return=f,u;mr(f,u)}return null}function m(f,u,d,g){var C=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return C!==null?null:s(f,u,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:return d.key===C?a(f,u,d,g):null;case In:return d.key===C?c(f,u,d,g):null;case be:return C=d._init,m(f,u,C(d._payload),g)}if(wt(d)||ft(d))return C!==null?null:p(f,u,d,g,null);mr(f,d)}return null}function S(f,u,d,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,s(u,f,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rr:return f=f.get(g.key===null?d:g.key)||null,a(u,f,g,C);case In:return f=f.get(g.key===null?d:g.key)||null,c(u,f,g,C);case be:var E=g._init;return S(f,u,d,E(g._payload),C)}if(wt(g)||ft(g))return f=f.get(d)||null,p(u,f,g,C,null);mr(u,g)}return null}function w(f,u,d,g){for(var C=null,E=null,P=u,j=u=0,W=null;P!==null&&j<d.length;j++){P.index>j?(W=P,P=null):W=P.sibling;var M=m(f,P,d[j],g);if(M===null){P===null&&(P=W);break}e&&P&&M.alternate===null&&n(f,P),u=o(M,u,j),E===null?C=M:E.sibling=M,E=M,P=W}if(j===d.length)return t(f,P),F&&Sn(f,j),C;if(P===null){for(;j<d.length;j++)P=h(f,d[j],g),P!==null&&(u=o(P,u,j),E===null?C=P:E.sibling=P,E=P);return F&&Sn(f,j),C}for(P=r(f,P);j<d.length;j++)W=S(P,f,j,d[j],g),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?j:W.key),u=o(W,u,j),E===null?C=W:E.sibling=W,E=W);return e&&P.forEach(function(Pe){return n(f,Pe)}),F&&Sn(f,j),C}function k(f,u,d,g){var C=ft(d);if(typeof C!="function")throw Error(v(150));if(d=C.call(d),d==null)throw Error(v(151));for(var E=C=null,P=u,j=u=0,W=null,M=d.next();P!==null&&!M.done;j++,M=d.next()){P.index>j?(W=P,P=null):W=P.sibling;var Pe=m(f,P,M.value,g);if(Pe===null){P===null&&(P=W);break}e&&P&&Pe.alternate===null&&n(f,P),u=o(Pe,u,j),E===null?C=Pe:E.sibling=Pe,E=Pe,P=W}if(M.done)return t(f,P),F&&Sn(f,j),C;if(P===null){for(;!M.done;j++,M=d.next())M=h(f,M.value,g),M!==null&&(u=o(M,u,j),E===null?C=M:E.sibling=M,E=M);return F&&Sn(f,j),C}for(P=r(f,P);!M.done;j++,M=d.next())M=S(P,f,j,M.value,g),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?j:M.key),u=o(M,u,j),E===null?C=M:E.sibling=M,E=M);return e&&P.forEach(function(ut){return n(f,ut)}),F&&Sn(f,j),C}function z(f,u,d,g){if(typeof d=="object"&&d!==null&&d.type===An&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:e:{for(var C=d.key,E=u;E!==null;){if(E.key===C){if(C=d.type,C===An){if(E.tag===7){t(f,E.sibling),u=l(E,d.props.children),u.return=f,f=u;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===be&&Ss(C)===E.type){t(f,E.sibling),u=l(E,d.props),u.ref=gt(f,E,d),u.return=f,f=u;break e}t(f,E);break}else n(f,E);E=E.sibling}d.type===An?(u=En(d.props.children,f.mode,g,d.key),u.return=f,f=u):(g=Dr(d.type,d.key,d.props,null,f.mode,g),g.ref=gt(f,u,d),g.return=f,f=g)}return i(f);case In:e:{for(E=d.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){t(f,u.sibling),u=l(u,d.children||[]),u.return=f,f=u;break e}else{t(f,u);break}else n(f,u);u=u.sibling}u=Gl(d,f.mode,g),u.return=f,f=u}return i(f);case be:return E=d._init,z(f,u,E(d._payload),g)}if(wt(d))return w(f,u,d,g);if(ft(d))return k(f,u,d,g);mr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(t(f,u.sibling),u=l(u,d),u.return=f,f=u):(t(f,u),u=Jl(d,f.mode,g),u.return=f,f=u),i(f)):t(f,u)}return z}var tt=lu(!0),ou=lu(!1),$r=hn(null),Jr=null,$n=null,ci=null;function fi(){ci=$n=Jr=null}function di(e){var n=$r.current;A($r),e._currentValue=n}function To(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function bn(e,n){Jr=e,ci=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function Te(e){var n=e._currentValue;if(ci!==e)if(e={context:e,memoizedValue:n,next:null},$n===null){if(Jr===null)throw Error(v(308));$n=e,Jr.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return n}var xn=null;function pi(e){xn===null?xn=[e]:xn.push(e)}function iu(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,pi(n)):(t.next=l.next,l.next=t),n.interleaved=t,Qe(e,r)}function Qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function an(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Qe(e,t)}return l=r.interleaved,l===null?(n.next=n,pi(r)):(n.next=l.next,l.next=n),r.interleaved=n,Qe(e,t)}function Tr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qo(e,t)}}function ws(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Gr(e,n,t,r){var l=e.updateQueue;Ze=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?o=c:i.next=c,i=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=a))}if(o!==null){var h=l.baseState;i=0,p=c=a=null,s=o;do{var m=s.lane,S=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=n,S=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(S,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(S,h,m):w,m==null)break e;h=V({},h,m);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else S={eventTime:S,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=S,a=h):p=p.next=S,i|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(p===null&&(a=h),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=p,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);Nn|=i,e.lanes=i,e.memoizedState=h}}function ks(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var qt={},He=hn(qt),Wt=hn(qt),$t=hn(qt);function Cn(e){if(e===qt)throw Error(v(174));return e}function hi(e,n){switch(_($t,n),_(Wt,e),_(He,qt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ro(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ro(n,e)}A(He),_(He,n)}function rt(){A(He),A(Wt),A($t)}function au(e){Cn($t.current);var n=Cn(He.current),t=ro(n,e.type);n!==t&&(_(Wt,e),_(He,t))}function gi(e){Wt.current===e&&(A(He),A(Wt))}var H=hn(0);function Qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hl=[];function vi(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var Er=Xe.ReactCurrentDispatcher,Ul=Xe.ReactCurrentBatchConfig,Rn=0,U=null,Q=null,Y=null,Kr=!1,Rt=!1,Jt=0,td=0;function ne(){throw Error(v(321))}function yi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_e(e[t],n[t]))return!1;return!0}function Si(e,n,t,r,l,o){if(Rn=o,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Er.current=e===null||e.memoizedState===null?id:sd,e=t(r,l),Rt){o=0;do{if(Rt=!1,Jt=0,25<=o)throw Error(v(301));o+=1,Y=Q=null,n.updateQueue=null,Er.current=ad,e=t(r,l)}while(Rt)}if(Er.current=Xr,n=Q!==null&&Q.next!==null,Rn=0,Y=Q=U=null,Kr=!1,n)throw Error(v(300));return e}function wi(){var e=Jt!==0;return Jt=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?U.memoizedState=Y=e:Y=Y.next=e,Y}function Ee(){if(Q===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=Y===null?U.memoizedState:Y.next;if(n!==null)Y=n,Q=e;else{if(e===null)throw Error(v(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},Y===null?U.memoizedState=Y=e:Y=Y.next=e}return Y}function Gt(e,n){return typeof n=="function"?n(e):n}function Vl(e){var n=Ee(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=Q,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,c=o;do{var p=c.lane;if((Rn&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,i=r):a=a.next=h,U.lanes|=p,Nn|=p}c=c.next}while(c!==null&&c!==o);a===null?i=r:a.next=s,_e(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,U.lanes|=o,Nn|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bl(e){var n=Ee(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);_e(o,n.memoizedState)||(ce=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function uu(){}function cu(e,n){var t=U,r=Ee(),l=n(),o=!_e(r.memoizedState,l);if(o&&(r.memoizedState=l,ce=!0),r=r.queue,ki(pu.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Qt(9,du.bind(null,t,r,l,n),void 0,null),b===null)throw Error(v(349));Rn&30||fu(t,n,l)}return l}function fu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function du(e,n,t,r){n.value=t,n.getSnapshot=r,mu(n)&&hu(e)}function pu(e,n,t){return t(function(){mu(n)&&hu(e)})}function mu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_e(e,t)}catch{return!0}}function hu(e){var n=Qe(e,1);n!==null&&Oe(n,e,1,-1)}function xs(e){var n=Ae();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},n.queue=e,e=e.dispatch=od.bind(null,U,e),[n.memoizedState,e]}function Qt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function gu(){return Ee().memoizedState}function Pr(e,n,t,r){var l=Ae();U.flags|=e,l.memoizedState=Qt(1|n,t,void 0,r===void 0?null:r)}function ul(e,n,t,r){var l=Ee();r=r===void 0?null:r;var o=void 0;if(Q!==null){var i=Q.memoizedState;if(o=i.destroy,r!==null&&yi(r,i.deps)){l.memoizedState=Qt(n,t,o,r);return}}U.flags|=e,l.memoizedState=Qt(1|n,t,o,r)}function Cs(e,n){return Pr(8390656,8,e,n)}function ki(e,n){return ul(2048,8,e,n)}function vu(e,n){return ul(4,2,e,n)}function yu(e,n){return ul(4,4,e,n)}function Su(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wu(e,n,t){return t=t!=null?t.concat([e]):null,ul(4,4,Su.bind(null,n,e),t)}function xi(){}function ku(e,n){var t=Ee();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function xu(e,n){var t=Ee();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cu(e,n,t){return Rn&21?(_e(t,n)||(t=Ra(),U.lanes|=t,Nn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function rd(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),n()}finally{O=t,Ul.transition=r}}function Tu(){return Ee().memoizedState}function ld(e,n,t){var r=cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Eu(e))Pu(n,t);else if(t=iu(e,n,t,r),t!==null){var l=ie();Oe(t,e,r,l),ju(t,n,r)}}function od(e,n,t){var r=cn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Pu(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(l.hasEagerState=!0,l.eagerState=s,_e(s,i)){var a=n.interleaved;a===null?(l.next=l,pi(n)):(l.next=a.next,a.next=l),n.interleaved=l;return}}catch{}finally{}t=iu(e,n,l,r),t!==null&&(l=ie(),Oe(t,e,r,l),ju(t,n,r))}}function Eu(e){var n=e.alternate;return e===U||n!==null&&n===U}function Pu(e,n){Rt=Kr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ju(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qo(e,t)}}var Xr={readContext:Te,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},id={readContext:Te,useCallback:function(e,n){return Ae().memoizedState=[e,n===void 0?null:n],e},useContext:Te,useEffect:Cs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Pr(4194308,4,Su.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Pr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Pr(4,2,e,n)},useMemo:function(e,n){var t=Ae();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ae();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ld.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var n=Ae();return e={current:e},n.memoizedState=e},useState:xs,useDebugValue:xi,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=xs(!1),n=e[0];return e=rd.bind(null,e[1]),Ae().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=U,l=Ae();if(F){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),b===null)throw Error(v(349));Rn&30||fu(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Cs(pu.bind(null,r,o,e),[e]),r.flags|=2048,Qt(9,du.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Ae(),n=b.identifierPrefix;if(F){var t=We,r=Be;t=(r&~(1<<32-Le(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=td++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sd={readContext:Te,useCallback:ku,useContext:Te,useEffect:ki,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:yu,useMemo:xu,useReducer:Vl,useRef:gu,useState:function(){return Vl(Gt)},useDebugValue:xi,useDeferredValue:function(e){var n=Ee();return Cu(n,Q.memoizedState,e)},useTransition:function(){var e=Vl(Gt)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:uu,useSyncExternalStore:cu,useId:Tu,unstable_isNewReconciler:!1},ad={readContext:Te,useCallback:ku,useContext:Te,useEffect:ki,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:yu,useMemo:xu,useReducer:Bl,useRef:gu,useState:function(){return Bl(Gt)},useDebugValue:xi,useDeferredValue:function(e){var n=Ee();return Q===null?n.memoizedState=e:Cu(n,Q.memoizedState,e)},useTransition:function(){var e=Bl(Gt)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:uu,useSyncExternalStore:cu,useId:Tu,unstable_isNewReconciler:!1};function Re(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Eo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var cl={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),l=cn(e),o=$e(r,l);o.payload=n,t!=null&&(o.callback=t),n=an(e,o,l),n!==null&&(Oe(n,e,l,r),Tr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),l=cn(e),o=$e(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=an(e,o,l),n!==null&&(Oe(n,e,l,r),Tr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=cn(e),l=$e(t,r);l.tag=2,n!=null&&(l.callback=n),n=an(e,l,r),n!==null&&(Oe(n,e,r,t),Tr(n,e,r))}};function Ts(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Ht(t,r)||!Ht(l,o):!0}function Ru(e,n,t){var r=!1,l=pn,o=n.contextType;return typeof o=="object"&&o!==null?o=Te(o):(l=de(n)?Pn:le.current,r=n.contextTypes,o=(r=r!=null)?et(e,l):pn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=cl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Es(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&cl.enqueueReplaceState(n,n.state,null)}function Po(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},mi(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Te(o):(o=de(n)?Pn:le.current,l.context=et(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Eo(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&cl.enqueueReplaceState(l,l.state,null),Gr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function lt(e,n){try{var t="",r=n;do t+=Ic(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Wl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function jo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ud=typeof WeakMap=="function"?WeakMap:Map;function Nu(e,n,t){t=$e(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){br||(br=!0,zo=r),jo(e,n)},t}function Du(e,n,t){t=$e(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){jo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){jo(e,n),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Ps(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ud;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Cd.bind(null,e,n,t),n.then(e,e))}function js(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Rs(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=$e(-1,1),n.tag=2,an(t,n,1))),t.lanes|=1),e)}var cd=Xe.ReactCurrentOwner,ce=!1;function oe(e,n,t,r){n.child=e===null?ou(n,null,t,r):tt(n,e.child,t,r)}function Ns(e,n,t,r,l){t=t.render;var o=n.ref;return bn(n,l),r=Si(e,n,t,r,o,l),t=wi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ke(e,n,l)):(F&&t&&si(n),n.flags|=1,oe(e,n,r,l),n.child)}function Ds(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!Di(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Mu(e,n,o,r,l)):(e=Dr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ht,t(i,r)&&e.ref===n.ref)return Ke(e,n,l)}return n.flags|=1,e=fn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Mu(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Ht(o,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Ke(e,n,l)}return Ro(e,n,t,r,l)}function Lu(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(Gn,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,_(Gn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,_(Gn,me),me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,_(Gn,me),me|=r;return oe(e,n,l,t),n.child}function Ou(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ro(e,n,t,r,l){var o=de(t)?Pn:le.current;return o=et(n,o),bn(n,l),t=Si(e,n,t,r,o,l),r=wi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ke(e,n,l)):(F&&r&&si(n),n.flags|=1,oe(e,n,t,l),n.child)}function Ms(e,n,t,r,l){if(de(t)){var o=!0;Vr(n)}else o=!1;if(bn(n,l),n.stateNode===null)jr(e,n),Ru(n,t,r),Po(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var a=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=de(t)?Pn:le.current,c=et(n,c));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Es(n,i,r,c),Ze=!1;var m=n.memoizedState;i.state=m,Gr(n,r,i,l),a=n.memoizedState,s!==r||m!==a||fe.current||Ze?(typeof p=="function"&&(Eo(n,t,p,r),a=n.memoizedState),(s=Ze||Ts(n,t,s,r,m,a,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,su(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:Re(n.type,s),i.props=c,h=n.pendingProps,m=i.context,a=t.contextType,typeof a=="object"&&a!==null?a=Te(a):(a=de(t)?Pn:le.current,a=et(n,a));var S=t.getDerivedStateFromProps;(p=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||m!==a)&&Es(n,i,r,a),Ze=!1,m=n.memoizedState,i.state=m,Gr(n,r,i,l);var w=n.memoizedState;s!==h||m!==w||fe.current||Ze?(typeof S=="function"&&(Eo(n,t,S,r),w=n.memoizedState),(c=Ze||Ts(n,t,c,r,m,w,a)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),i.props=r,i.state=w,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return No(e,n,t,r,o,l)}function No(e,n,t,r,l,o){Ou(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&gs(n,t,!1),Ke(e,n,o);r=n.stateNode,cd.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=tt(n,e.child,null,o),n.child=tt(n,null,s,o)):oe(e,n,s,o),n.memoizedState=r.state,l&&gs(n,t,!0),n.child}function _u(e){var n=e.stateNode;n.pendingContext?hs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&hs(e,n.context,!1),hi(e,n.containerInfo)}function Ls(e,n,t,r,l){return nt(),ui(l),n.flags|=256,oe(e,n,t,r),n.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Iu(e,n,t){var r=n.pendingProps,l=H.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),_(H,l&1),e===null)return Co(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=pl(i,r,0,null),e=En(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Mo(t),n.memoizedState=Do,e):Ci(n,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return fd(e,n,i,r,s,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=fn(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=fn(s,o):(o=En(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Mo(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=Do,r}return o=e.child,e=o.sibling,r=fn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ci(e,n){return n=pl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function hr(e,n,t,r){return r!==null&&ui(r),tt(n,e.child,null,t),e=Ci(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fd(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Wl(Error(v(422))),hr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=pl({mode:"visible",children:r.children},l,0,null),o=En(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&tt(n,e.child,null,i),n.child.memoizedState=Mo(i),n.memoizedState=Do,o);if(!(n.mode&1))return hr(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(v(419)),r=Wl(o,r,void 0),hr(e,n,i,r)}if(s=(i&e.childLanes)!==0,ce||s){if(r=b,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Qe(e,l),Oe(r,e,l,-1))}return Ni(),r=Wl(Error(v(421))),hr(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Td.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,he=sn(l.nextSibling),ge=n,F=!0,De=null,e!==null&&(we[ke++]=Be,we[ke++]=We,we[ke++]=jn,Be=e.id,We=e.overflow,jn=n),n=Ci(n,r.children),n.flags|=4096,n)}function Os(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),To(e.return,n,t)}function $l(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function Au(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(oe(e,n,r.children,t),r=H.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Os(e,t,n);else if(e.tag===19)Os(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_(H,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Qr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),$l(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Qr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}$l(n,!0,t,null,o);break;case"together":$l(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function jr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ke(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function dd(e,n,t){switch(n.tag){case 3:_u(n),nt();break;case 5:au(n);break;case 1:de(n.type)&&Vr(n);break;case 4:hi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;_($r,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(_(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?Iu(e,n,t):(_(H,H.current&1),e=Ke(e,n,t),e!==null?e.sibling:null);_(H,H.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Au(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),_(H,H.current),r)break;return null;case 22:case 23:return n.lanes=0,Lu(e,n,t)}return Ke(e,n,t)}var zu,Lo,Fu,Hu;zu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Lo=function(){};Fu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Cn(He.current);var o=null;switch(t){case"input":l=ql(e,l),r=ql(e,r),o=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":l=to(e,l),r=to(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}lo(t,r);var i;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lt.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(t||(t={}),t[i]=a[i])}else t||(o||(o=[]),o.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lt.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&I("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};Hu=function(e,n,t,r){t!==r&&(n.flags|=4)};function vt(e,n){if(!F)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function pd(e,n,t){var r=n.pendingProps;switch(ai(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return de(n.type)&&Ur(),te(n),null;case 3:return r=n.stateNode,rt(),A(fe),A(le),vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,De!==null&&(Uo(De),De=null))),Lo(e,n),te(n),null;case 5:gi(n);var l=Cn($t.current);if(t=n.type,e!==null&&n.stateNode!=null)Fu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return te(n),null}if(e=Cn(He.current),pr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[ze]=n,r[Bt]=o,e=(n.mode&1)!==0,t){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<xt.length;l++)I(xt[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Bi(r,o),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},I("invalid",r);break;case"textarea":$i(r,o),I("invalid",r)}lo(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),l=["children",""+s]):Lt.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&I("scroll",r)}switch(t){case"input":lr(r),Wi(r,o,!0);break;case"textarea":lr(r),Ji(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Hr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[ze]=n,e[Bt]=r,zu(e,n,!1,!1),n.stateNode=e;e:{switch(i=oo(t,r),t){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<xt.length;l++)I(xt[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":Bi(e,r),l=ql(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":$i(e,r),l=to(e,r),I("invalid",e);break;default:l=r}lo(t,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?ga(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ma(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ot(e,a):typeof a=="number"&&Ot(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Lt.hasOwnProperty(o)?a!=null&&o==="onScroll"&&I("scroll",e):a!=null&&Qo(e,o,a,i))}switch(t){case"input":lr(e),Wi(e,r,!1);break;case"textarea":lr(e),Ji(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Qn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Hr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Hu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=Cn($t.current),Cn(He.current),pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[ze]=n,(o=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ze]=n,n.stateNode=r}return te(n),null;case 13:if(A(H),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&he!==null&&n.mode&1&&!(n.flags&128))ru(),nt(),n.flags|=98560,o=!1;else if(o=pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[ze]=n}else nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),o=!1}else De!==null&&(Uo(De),De=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?K===0&&(K=3):Ni())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return rt(),Lo(e,n),e===null&&Ut(n.stateNode.containerInfo),te(n),null;case 10:return di(n.type._context),te(n),null;case 17:return de(n.type)&&Ur(),te(n),null;case 19:if(A(H),o=n.memoizedState,o===null)return te(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)vt(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Qr(e),i!==null){for(n.flags|=128,vt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return _(H,H.current&1|2),n.child}e=e.sibling}o.tail!==null&&J()>ot&&(n.flags|=128,r=!0,vt(o,!1),n.lanes=4194304)}else{if(!r)if(e=Qr(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),vt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!F)return te(n),null}else 2*J()-o.renderingStartTime>ot&&t!==1073741824&&(n.flags|=128,r=!0,vt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=J(),n.sibling=null,t=H.current,_(H,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Ri(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function md(e,n){switch(ai(n),n.tag){case 1:return de(n.type)&&Ur(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rt(),A(fe),A(le),vi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return gi(n),null;case 13:if(A(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return A(H),null;case 4:return rt(),null;case 10:return di(n.type._context),null;case 22:case 23:return Ri(),null;case 24:return null;default:return null}}var gr=!1,re=!1,hd=typeof WeakSet=="function"?WeakSet:Set,x=null;function Jn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){B(e,n,r)}else t.current=null}function Oo(e,n,t){try{t()}catch(r){B(e,n,r)}}var _s=!1;function gd(e,n){if(go=Ar,e=$a(),ii(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,a=-1,c=0,p=0,h=e,m=null;n:for(;;){for(var S;h!==t||l!==0&&h.nodeType!==3||(s=i+l),h!==o||r!==0&&h.nodeType!==3||(a=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(S=h.firstChild)!==null;)m=h,h=S;for(;;){if(h===e)break n;if(m===t&&++c===l&&(s=i),m===o&&++p===r&&(a=i),(S=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=S}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(vo={focusedElem:e,selectionRange:t},Ar=!1,x=n;x!==null;)if(n=x,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,x=e;else for(;x!==null;){n=x;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,z=w.memoizedState,f=n.stateNode,u=f.getSnapshotBeforeUpdate(n.elementType===n.type?k:Re(n.type,k),z);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){B(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,x=e;break}x=n.return}return w=_s,_s=!1,w}function Nt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Oo(n,t,o)}l=l.next}while(l!==r)}}function fl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function _o(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Uu(e){var n=e.alternate;n!==null&&(e.alternate=null,Uu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[ze],delete n[Bt],delete n[wo],delete n[Zf],delete n[qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function Is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Io(e,n,t),e=e.sibling;e!==null;)Io(e,n,t),e=e.sibling}function Ao(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ao(e,n,t),e=e.sibling;e!==null;)Ao(e,n,t),e=e.sibling}var Z=null,Ne=!1;function Ye(e,n,t){for(t=t.child;t!==null;)Bu(e,n,t),t=t.sibling}function Bu(e,n,t){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(rl,t)}catch{}switch(t.tag){case 5:re||Jn(t,n);case 6:var r=Z,l=Ne;Z=null,Ye(e,n,t),Z=r,Ne=l,Z!==null&&(Ne?(e=Z,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Z.removeChild(t.stateNode));break;case 18:Z!==null&&(Ne?(e=Z,t=t.stateNode,e.nodeType===8?zl(e.parentNode,t):e.nodeType===1&&zl(e,t),zt(e)):zl(Z,t.stateNode));break;case 4:r=Z,l=Ne,Z=t.stateNode.containerInfo,Ne=!0,Ye(e,n,t),Z=r,Ne=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Oo(t,n,i),l=l.next}while(l!==r)}Ye(e,n,t);break;case 1:if(!re&&(Jn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){B(t,n,s)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Ye(e,n,t),re=r):Ye(e,n,t);break;default:Ye(e,n,t)}}function As(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new hd),n.forEach(function(r){var l=Ed.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function je(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:Z=s.stateNode,Ne=!1;break e;case 3:Z=s.stateNode.containerInfo,Ne=!0;break e;case 4:Z=s.stateNode.containerInfo,Ne=!0;break e}s=s.return}if(Z===null)throw Error(v(160));Bu(o,i,l),Z=null,Ne=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){B(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wu(n,e),n=n.sibling}function Wu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(n,e),Ie(e),r&4){try{Nt(3,e,e.return),fl(3,e)}catch(k){B(e,e.return,k)}try{Nt(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:je(n,e),Ie(e),r&512&&t!==null&&Jn(t,t.return);break;case 5:if(je(n,e),Ie(e),r&512&&t!==null&&Jn(t,t.return),e.flags&32){var l=e.stateNode;try{Ot(l,"")}catch(k){B(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&fa(l,o),oo(s,i);var c=oo(s,o);for(i=0;i<a.length;i+=2){var p=a[i],h=a[i+1];p==="style"?ga(l,h):p==="dangerouslySetInnerHTML"?ma(l,h):p==="children"?Ot(l,h):Qo(l,p,h,c)}switch(s){case"input":eo(l,o);break;case"textarea":da(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Qn(l,!!o.multiple,S,!1):m!==!!o.multiple&&(o.defaultValue!=null?Qn(l,!!o.multiple,o.defaultValue,!0):Qn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Bt]=o}catch(k){B(e,e.return,k)}}break;case 6:if(je(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){B(e,e.return,k)}}break;case 3:if(je(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{zt(n.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:je(n,e),Ie(e);break;case 13:je(n,e),Ie(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Pi=J())),r&4&&As(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||p,je(n,e),re=c):je(n,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(x=e,p=e.child;p!==null;){for(h=x=p;x!==null;){switch(m=x,S=m.child,m.tag){case 0:case 11:case 14:case 15:Nt(4,m,m.return);break;case 1:Jn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(k){B(r,t,k)}}break;case 5:Jn(m,m.return);break;case 22:if(m.memoizedState!==null){Fs(h);continue}}S!==null?(S.return=m,x=S):Fs(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,a=h.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ha("display",i))}catch(k){B(e,e.return,k)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){B(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:je(n,e),Ie(e),r&4&&As(e);break;case 21:break;default:je(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Vu(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Ot(l,""),r.flags&=-33);var o=Is(e);Ao(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Is(e);Io(e,s,i);break;default:throw Error(v(161))}}catch(a){B(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vd(e,n,t){x=e,$u(e)}function $u(e,n,t){for(var r=(e.mode&1)!==0;x!==null;){var l=x,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||gr;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||re;s=gr;var c=re;if(gr=i,(re=a)&&!c)for(x=l;x!==null;)i=x,a=i.child,i.tag===22&&i.memoizedState!==null?Hs(l):a!==null?(a.return=i,x=a):Hs(l);for(;o!==null;)x=o,$u(o),o=o.sibling;x=l,gr=s,re=c}zs(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,x=o):zs(e)}}function zs(e){for(;x!==null;){var n=x;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||fl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Re(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ks(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ks(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&zt(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||n.flags&512&&_o(n)}catch(m){B(n,n.return,m)}}if(n===e){x=null;break}if(t=n.sibling,t!==null){t.return=n.return,x=t;break}x=n.return}}function Fs(e){for(;x!==null;){var n=x;if(n===e){x=null;break}var t=n.sibling;if(t!==null){t.return=n.return,x=t;break}x=n.return}}function Hs(e){for(;x!==null;){var n=x;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fl(4,n)}catch(a){B(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(a){B(n,l,a)}}var o=n.return;try{_o(n)}catch(a){B(n,o,a)}break;case 5:var i=n.return;try{_o(n)}catch(a){B(n,i,a)}}}catch(a){B(n,n.return,a)}if(n===e){x=null;break}var s=n.sibling;if(s!==null){s.return=n.return,x=s;break}x=n.return}}var yd=Math.ceil,Yr=Xe.ReactCurrentDispatcher,Ti=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,L=0,b=null,G=null,q=0,me=0,Gn=hn(0),K=0,Kt=null,Nn=0,dl=0,Ei=0,Dt=null,ue=null,Pi=0,ot=1/0,Ue=null,br=!1,zo=null,un=null,vr=!1,tn=null,Zr=0,Mt=0,Fo=null,Rr=-1,Nr=0;function ie(){return L&6?J():Rr!==-1?Rr:Rr=J()}function cn(e){return e.mode&1?L&2&&q!==0?q&-q:nd.transition!==null?(Nr===0&&(Nr=Ra()),Nr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ia(e.type)),e):1}function Oe(e,n,t,r){if(50<Mt)throw Mt=0,Fo=null,Error(v(185));Yt(e,t,r),(!(L&2)||e!==b)&&(e===b&&(!(L&2)&&(dl|=t),K===4&&en(e,q)),pe(e,r),t===1&&L===0&&!(n.mode&1)&&(ot=J()+500,al&&gn()))}function pe(e,n){var t=e.callbackNode;ef(e,n);var r=Ir(e,e===b?q:0);if(r===0)t!==null&&Ki(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ki(t),n===1)e.tag===0?ed(Us.bind(null,e)):eu(Us.bind(null,e)),Yf(function(){!(L&6)&&gn()}),t=null;else{switch(Na(r)){case 1:t=Zo;break;case 4:t=Pa;break;case 16:t=_r;break;case 536870912:t=ja;break;default:t=_r}t=Zu(t,Ju.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ju(e,n){if(Rr=-1,Nr=0,L&6)throw Error(v(327));var t=e.callbackNode;if(Zn()&&e.callbackNode!==t)return null;var r=Ir(e,e===b?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=qr(e,r);else{n=r;var l=L;L|=2;var o=Qu();(b!==e||q!==n)&&(Ue=null,ot=J()+500,Tn(e,n));do try{kd();break}catch(s){Gu(e,s)}while(!0);fi(),Yr.current=o,L=l,G!==null?n=0:(b=null,q=0,n=K)}if(n!==0){if(n===2&&(l=co(e),l!==0&&(r=l,n=Ho(e,l))),n===1)throw t=Kt,Tn(e,0),en(e,r),pe(e,J()),t;if(n===6)en(e,r);else{if(l=e.current.alternate,!(r&30)&&!Sd(l)&&(n=qr(e,r),n===2&&(o=co(e),o!==0&&(r=o,n=Ho(e,o))),n===1))throw t=Kt,Tn(e,0),en(e,r),pe(e,J()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:wn(e,ue,Ue);break;case 3:if(en(e,r),(r&130023424)===r&&(n=Pi+500-J(),10<n)){if(Ir(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=So(wn.bind(null,e,ue,Ue),n);break}wn(e,ue,Ue);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-Le(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yd(r/1960))-r,10<r){e.timeoutHandle=So(wn.bind(null,e,ue,Ue),r);break}wn(e,ue,Ue);break;case 5:wn(e,ue,Ue);break;default:throw Error(v(329))}}}return pe(e,J()),e.callbackNode===t?Ju.bind(null,e):null}function Ho(e,n){var t=Dt;return e.current.memoizedState.isDehydrated&&(Tn(e,n).flags|=256),e=qr(e,n),e!==2&&(n=ue,ue=t,n!==null&&Uo(n)),e}function Uo(e){ue===null?ue=e:ue.push.apply(ue,e)}function Sd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!_e(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Ei,n&=~dl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),r=1<<t;e[t]=-1,n&=~r}}function Us(e){if(L&6)throw Error(v(327));Zn();var n=Ir(e,0);if(!(n&1))return pe(e,J()),null;var t=qr(e,n);if(e.tag!==0&&t===2){var r=co(e);r!==0&&(n=r,t=Ho(e,r))}if(t===1)throw t=Kt,Tn(e,0),en(e,n),pe(e,J()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wn(e,ue,Ue),pe(e,J()),null}function ji(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(ot=J()+500,al&&gn())}}function Dn(e){tn!==null&&tn.tag===0&&!(L&6)&&Zn();var n=L;L|=1;var t=Ce.transition,r=O;try{if(Ce.transition=null,O=1,e)return e()}finally{O=r,Ce.transition=t,L=n,!(L&6)&&gn()}}function Ri(){me=Gn.current,A(Gn)}function Tn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xf(t)),G!==null)for(t=G.return;t!==null;){var r=t;switch(ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:rt(),A(fe),A(le),vi();break;case 5:gi(r);break;case 4:rt();break;case 13:A(H);break;case 19:A(H);break;case 10:di(r.type._context);break;case 22:case 23:Ri()}t=t.return}if(b=e,G=e=fn(e.current,null),q=me=n,K=0,Kt=null,Ei=dl=Nn=0,ue=Dt=null,xn!==null){for(n=0;n<xn.length;n++)if(t=xn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}xn=null}return e}function Gu(e,n){do{var t=G;try{if(fi(),Er.current=Xr,Kr){for(var r=U.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Kr=!1}if(Rn=0,Y=Q=U=null,Rt=!1,Jt=0,Ti.current=null,t===null||t.return===null){K=1,Kt=n,G=null;break}e:{var o=e,i=t.return,s=t,a=n;if(n=q,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=s,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=js(i);if(S!==null){S.flags&=-257,Rs(S,i,s,o,n),S.mode&1&&Ps(o,c,n),n=S,a=c;var w=n.updateQueue;if(w===null){var k=new Set;k.add(a),n.updateQueue=k}else w.add(a);break e}else{if(!(n&1)){Ps(o,c,n),Ni();break e}a=Error(v(426))}}else if(F&&s.mode&1){var z=js(i);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Rs(z,i,s,o,n),ui(lt(a,s));break e}}o=a=lt(a,s),K!==4&&(K=2),Dt===null?Dt=[o]:Dt.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=Nu(o,a,n);ws(o,f);break e;case 1:s=a;var u=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(un===null||!un.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=Du(o,s,n);ws(o,g);break e}}o=o.return}while(o!==null)}Xu(t)}catch(C){n=C,G===t&&t!==null&&(G=t=t.return);continue}break}while(!0)}function Qu(){var e=Yr.current;return Yr.current=Xr,e===null?Xr:e}function Ni(){(K===0||K===3||K===2)&&(K=4),b===null||!(Nn&268435455)&&!(dl&268435455)||en(b,q)}function qr(e,n){var t=L;L|=2;var r=Qu();(b!==e||q!==n)&&(Ue=null,Tn(e,n));do try{wd();break}catch(l){Gu(e,l)}while(!0);if(fi(),L=t,Yr.current=r,G!==null)throw Error(v(261));return b=null,q=0,K}function wd(){for(;G!==null;)Ku(G)}function kd(){for(;G!==null&&!Jc();)Ku(G)}function Ku(e){var n=bu(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Xu(e):G=n,Ti.current=null}function Xu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=md(t,n),t!==null){t.flags&=32767,G=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,G=null;return}}else if(t=pd(t,n,me),t!==null){G=t;return}if(n=n.sibling,n!==null){G=n;return}G=n=e}while(n!==null);K===0&&(K=5)}function wn(e,n,t){var r=O,l=Ce.transition;try{Ce.transition=null,O=1,xd(e,n,t,r)}finally{Ce.transition=l,O=r}return null}function xd(e,n,t,r){do Zn();while(tn!==null);if(L&6)throw Error(v(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(nf(e,o),e===b&&(G=b=null,q=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vr||(vr=!0,Zu(_r,function(){return Zn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var i=O;O=1;var s=L;L|=4,Ti.current=null,gd(e,t),Wu(t,e),Bf(vo),Ar=!!go,vo=go=null,e.current=t,vd(t),Gc(),L=s,O=i,Ce.transition=o}else e.current=t;if(vr&&(vr=!1,tn=e,Zr=l),o=e.pendingLanes,o===0&&(un=null),Xc(t.stateNode),pe(e,J()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(br)throw br=!1,e=zo,zo=null,e;return Zr&1&&e.tag!==0&&Zn(),o=e.pendingLanes,o&1?e===Fo?Mt++:(Mt=0,Fo=e):Mt=0,gn(),null}function Zn(){if(tn!==null){var e=Na(Zr),n=Ce.transition,t=O;try{if(Ce.transition=null,O=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Zr=0,L&6)throw Error(v(331));var l=L;for(L|=4,x=e.current;x!==null;){var o=x,i=o.child;if(x.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(x=c;x!==null;){var p=x;switch(p.tag){case 0:case 11:case 15:Nt(8,p,o)}var h=p.child;if(h!==null)h.return=p,x=h;else for(;x!==null;){p=x;var m=p.sibling,S=p.return;if(Uu(p),p===c){x=null;break}if(m!==null){m.return=S,x=m;break}x=S}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var z=k.sibling;k.sibling=null,k=z}while(k!==null)}}x=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,x=i;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Nt(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,x=f;break e}x=o.return}}var u=e.current;for(x=u;x!==null;){i=x;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,x=d;else e:for(i=u;x!==null;){if(s=x,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fl(9,s)}}catch(C){B(s,s.return,C)}if(s===i){x=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,x=g;break e}x=s.return}}if(L=l,gn(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{O=t,Ce.transition=n}}return!1}function Vs(e,n,t){n=lt(t,n),n=Nu(e,n,1),e=an(e,n,1),n=ie(),e!==null&&(Yt(e,1,n),pe(e,n))}function B(e,n,t){if(e.tag===3)Vs(e,e,t);else for(;n!==null;){if(n.tag===3){Vs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=lt(t,e),e=Du(n,e,1),n=an(n,e,1),e=ie(),n!==null&&(Yt(n,1,e),pe(n,e));break}}n=n.return}}function Cd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,b===e&&(q&t)===t&&(K===4||K===3&&(q&130023424)===q&&500>J()-Pi?Tn(e,0):Ei|=t),pe(e,n)}function Yu(e,n){n===0&&(e.mode&1?(n=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):n=1);var t=ie();e=Qe(e,n),e!==null&&(Yt(e,n,t),pe(e,t))}function Td(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yu(e,t)}function Ed(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),Yu(e,t)}var bu;bu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||fe.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,dd(e,n,t);ce=!!(e.flags&131072)}else ce=!1,F&&n.flags&1048576&&nu(n,Wr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;jr(e,n),e=n.pendingProps;var l=et(n,le.current);bn(n,t),l=Si(null,n,r,e,l,t);var o=wi();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,de(r)?(o=!0,Vr(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mi(n),l.updater=cl,n.stateNode=l,l._reactInternals=n,Po(n,r,e,t),n=No(null,n,r,!0,o,t)):(n.tag=0,F&&o&&si(n),oe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(jr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=jd(r),e=Re(r,e),l){case 0:n=Ro(null,n,r,e,t);break e;case 1:n=Ms(null,n,r,e,t);break e;case 11:n=Ns(null,n,r,e,t);break e;case 14:n=Ds(null,n,r,Re(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Re(r,l),Ro(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Re(r,l),Ms(e,n,r,l,t);case 3:e:{if(_u(n),e===null)throw Error(v(387));r=n.pendingProps,o=n.memoizedState,l=o.element,su(e,n),Gr(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=lt(Error(v(423)),n),n=Ls(e,n,r,t,l);break e}else if(r!==l){l=lt(Error(v(424)),n),n=Ls(e,n,r,t,l);break e}else for(he=sn(n.stateNode.containerInfo.firstChild),ge=n,F=!0,De=null,t=ou(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nt(),r===l){n=Ke(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return au(n),e===null&&Co(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,yo(r,l)?i=null:o!==null&&yo(r,o)&&(n.flags|=32),Ou(e,n),oe(e,n,i,t),n.child;case 6:return e===null&&Co(n),null;case 13:return Iu(e,n,t);case 4:return hi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=tt(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Re(r,l),Ns(e,n,r,l,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,_($r,r._currentValue),r._currentValue=i,o!==null)if(_e(o.value,i)){if(o.children===l.children&&!fe.current){n=Ke(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=$e(-1,t&-t),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),To(o.return,t,n),s.lanes|=t;break}a=a.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(v(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),To(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}oe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,bn(n,t),l=Te(l),r=r(l),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,l=Re(r,n.pendingProps),l=Re(r.type,l),Ds(e,n,r,l,t);case 15:return Mu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Re(r,l),jr(e,n),n.tag=1,de(r)?(e=!0,Vr(n)):e=!1,bn(n,t),Ru(n,r,l),Po(n,r,l,t),No(null,n,r,!0,e,t);case 19:return Au(e,n,t);case 22:return Lu(e,n,t)}throw Error(v(156,n.tag))};function Zu(e,n){return Ea(e,n)}function Pd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,n,t,r){return new Pd(e,n,t,r)}function Di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jd(e){if(typeof e=="function")return Di(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===Yo)return 14}return 2}function fn(e,n){var t=e.alternate;return t===null?(t=xe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Dr(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")Di(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case An:return En(t.children,l,o,n);case Ko:i=8,l|=8;break;case Xl:return e=xe(12,t,n,l|2),e.elementType=Xl,e.lanes=o,e;case Yl:return e=xe(13,t,n,l),e.elementType=Yl,e.lanes=o,e;case bl:return e=xe(19,t,n,l),e.elementType=bl,e.lanes=o,e;case aa:return pl(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ia:i=10;break e;case sa:i=9;break e;case Xo:i=11;break e;case Yo:i=14;break e;case be:i=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=xe(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function En(e,n,t,r){return e=xe(7,e,r,n),e.lanes=t,e}function pl(e,n,t,r){return e=xe(22,e,r,n),e.elementType=aa,e.lanes=t,e.stateNode={isHidden:!1},e}function Jl(e,n,t){return e=xe(6,e,null,n),e.lanes=t,e}function Gl(e,n,t){return n=xe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Rd(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Mi(e,n,t,r,l,o,i,s,a){return e=new Rd(e,n,t,s,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=xe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(o),e}function Nd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function qu(e){if(!e)return pn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(de(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(de(t))return qa(e,t,n)}return n}function ec(e,n,t,r,l,o,i,s,a){return e=Mi(t,r,!0,e,l,o,i,s,a),e.context=qu(null),t=e.current,r=ie(),l=cn(t),o=$e(r,l),o.callback=n??null,an(t,o,l),e.current.lanes=l,Yt(e,l,r),pe(e,r),e}function ml(e,n,t,r){var l=n.current,o=ie(),i=cn(l);return t=qu(t),n.context===null?n.context=t:n.pendingContext=t,n=$e(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=an(l,n,i),e!==null&&(Oe(e,l,i,o),Tr(e,l,i)),i}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Li(e,n){Bs(e,n),(e=e.alternate)&&Bs(e,n)}function Dd(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oi(e){this._internalRoot=e}hl.prototype.render=Oi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));ml(e,n,null,null)};hl.prototype.unmount=Oi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dn(function(){ml(null,e,null,null)}),n[Ge]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var n=La();e={blockedOn:null,target:e,priority:n};for(var t=0;t<qe.length&&n!==0&&n<qe[t].priority;t++);qe.splice(t,0,e),t===0&&_a(e)}};function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ws(){}function Md(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=el(i);o.call(c)}}var i=ec(n,r,e,0,null,!1,!1,"",Ws);return e._reactRootContainer=i,e[Ge]=i.current,Ut(e.nodeType===8?e.parentNode:e),Dn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=el(a);s.call(c)}}var a=Mi(e,0,!1,null,null,!1,!1,"",Ws);return e._reactRootContainer=a,e[Ge]=a.current,Ut(e.nodeType===8?e.parentNode:e),Dn(function(){ml(n,a,t,r)}),a}function vl(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=el(i);s.call(a)}}ml(n,i,e,l)}else i=Md(t,n,e,l,r);return el(i)}Da=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kt(n.pendingLanes);t!==0&&(qo(n,t|1),pe(n,J()),!(L&6)&&(ot=J()+500,gn()))}break;case 13:Dn(function(){var r=Qe(e,1);if(r!==null){var l=ie();Oe(r,e,1,l)}}),Li(e,1)}};ei=function(e){if(e.tag===13){var n=Qe(e,134217728);if(n!==null){var t=ie();Oe(n,e,134217728,t)}Li(e,134217728)}};Ma=function(e){if(e.tag===13){var n=cn(e),t=Qe(e,n);if(t!==null){var r=ie();Oe(t,e,n,r)}Li(e,n)}};La=function(){return O};Oa=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};so=function(e,n,t){switch(n){case"input":if(eo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=sl(r);if(!l)throw Error(v(90));ca(r),eo(r,l)}}}break;case"textarea":da(e,t);break;case"select":n=t.value,n!=null&&Qn(e,!!t.multiple,n,!1)}};Sa=ji;wa=Dn;var Ld={usingClientEntryPoint:!1,Events:[Zt,Un,sl,va,ya,ji]},yt={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Od={bundleType:yt.bundleType,version:yt.version,rendererPackageName:yt.rendererPackageName,rendererConfig:yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ca(e),e===null?null:e.stateNode},findFiberByHostInstance:yt.findFiberByHostInstance||Dd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{rl=yr.inject(Od),Fe=yr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ld;ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_i(n))throw Error(v(200));return Nd(e,n,null,t)};ye.createRoot=function(e,n){if(!_i(e))throw Error(v(299));var t=!1,r="",l=nc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Mi(e,1,!1,null,null,t,!1,r,l),e[Ge]=n.current,Ut(e.nodeType===8?e.parentNode:e),new Oi(n)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Ca(n),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Dn(e)};ye.hydrate=function(e,n,t){if(!gl(n))throw Error(v(200));return vl(null,e,n,!0,t)};ye.hydrateRoot=function(e,n,t){if(!_i(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=nc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=ec(n,null,e,1,t??null,l,!1,o,i),e[Ge]=n.current,Ut(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new hl(n)};ye.render=function(e,n,t){if(!gl(n))throw Error(v(200));return vl(null,e,n,!1,t)};ye.unmountComponentAtNode=function(e){if(!gl(e))throw Error(v(40));return e._reactRootContainer?(Dn(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};ye.unstable_batchedUpdates=ji;ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!gl(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return vl(e,n,t,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ta.exports=ye;var _d=ta.exports,$s=_d;Ql.createRoot=$s.createRoot,Ql.hydrateRoot=$s.hydrateRoot;const nl={1:{label:"INTERN",color:"#8b949e"},2:{label:"JUNIOR",color:"#3fb950"},3:{label:"MIDDLE",color:"#d29922"},4:{label:"SENIOR",color:"#f85149"}},Id=[{id:"js",title:"JS",icon:"⚡",color:"#F0DB4F",topics:[{name:"Определение контекста выполнения, случаи применения",level:"2",content:`**Контекст выполнения (Execution Context)** — структура, которая создаётся при каждом вызове функции.

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
SSR — рендер на сервере + гидратация на клиенте, JS едет клиенту. RSC — рендер на сервере, JS не едет, нет гидратации. Они совместимы: страница может использовать и SSR и RSC одновременно.`,score:4}]}],Ad=[{id:"network",title:"СЕТЬ",icon:"🔗",color:"#66BB6A",topics:[{name:"ip-адрес и hostName",level:"1",content:`**IP-адрес** — уникальный числовой идентификатор устройства в сети.
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
\`\`\``,score:3},{name:"Перегрузка функций",level:"4",content:`Несколько сигнатур + одна реализация. Сигнатуры стираются при компиляции.

Более конкретные сигнатуры — выше. Используй только когда возвращаемый тип зависит от типа аргумента.

\`\`\`ts
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return String(value);
}
\`\`\`

**Важные правила:**
• Сигнатуры сверху — для TypeScript
• Реализация снизу — для JS рантайма, должна покрывать все сигнатуры
• Реализацию нельзя вызвать напрямую — только через сигнатуры`,score:3},{name:"Reference types",level:"4",content:`Reference types — директивы в начале файла для подключения типов:

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
\`\`\``,score:3.5}]},{id:"security",title:"БЕЗОПАСНОСТЬ",icon:"🔒",color:"#EF5350",topics:[{name:"eval, dangerouslySetInnerHTML",level:"2",content:"**eval()** — выполняет строку как код. Опасно: XSS-инъекция, нет оптимизаций V8.\n\n**dangerouslySetInnerHTML** — React-аналог innerHTML. Вставляет сырой HTML. Обязательно **санитизировать** входные данные (DOMPurify).\n\n```jsx\n<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />\n```"},{name:"Аутентификация и авторизация, их отличия",level:"2",content:`**Аутентификация (Authentication)** — КТО ты? Проверка личности (логин/пароль, OAuth, биометрия).

**Авторизация (Authorization)** — ЧТО тебе можно? Проверка прав доступа (роли, permissions).

Сначала аутентификация, потом авторизация.

**OAuth 2.0 flows:**
• **Authorization Code + PKCE** — стандарт для SPA и мобильных приложений. Код обменивается на токен на сервере.
• **Client Credentials** — server-to-server (без пользователя)
• **Implicit flow** — устарел, небезопасен, не использовать

**Session vs JWT:**
| | Session | JWT |
|--|---------|-----|
| Хранение | Сервер (Redis/DB) | Нигде (stateless) |
| Инвалидация | Мгновенная | Только по истечении |
| Масштабирование | Нужен общий Redis | Легко (stateless) |
| Размер запроса | Маленький (cookie ID) | Больше (JWT в header) |

**Token rotation паттерн:**
\`\`\`
access token: 15 мин → в памяти (НЕ в localStorage!)
refresh token: 7 дней → в httpOnly cookie (защита от XSS)

access истёк → клиент отправляет refresh token
сервер проверяет хэш refresh в БД → выдаёт новый access + ротирует refresh
\`\`\`
При компрометации refresh — блокируем в БД. В localStorage нельзя — доступен через XSS.`},{name:"npm audit. SCA и SAST",level:"2",content:`**npm audit** — проверка зависимостей на известные уязвимости.
**npm audit fix** — автоматическое обновление уязвимых пакетов.

**SCA (Software Composition Analysis)** — анализ зависимостей (npm audit, Snyk, Dependabot).
**SAST (Static Application Security Testing)** — анализ исходного кода без запуска (ESLint security plugins, SonarQube).`},{name:"Атрибут rel: noreferrer, noopener, nofollow",level:"3",content:'```html\n<a href="..." target="_blank" rel="noopener noreferrer">\n```\n\n**noopener** — новая вкладка не получает доступ к window.opener (защита от подмены страницы).\n**noreferrer** — не передаёт заголовок Referer (скрывает откуда пришёл пользователь). Включает noopener.\n**nofollow** — указание поисковикам не передавать «вес» ссылки (SEO).'},{name:"CSP и X-Frame-Options",level:"3",content:`**CSP (Content Security Policy)** — заголовок, контролирующий откуда можно загружать ресурсы:
\`\`\`
Content-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com;
\`\`\`
Защита от XSS — запрет inline-скриптов и загрузки с чужих доменов.

**X-Frame-Options** — контролирует встраивание в iframe:
• DENY — запретить
• SAMEORIGIN — только с того же домена
• ALLOW-FROM — с конкретного домена`},{name:"CORS",level:"3",content:`**CORS (Cross-Origin Resource Sharing)** — механизм разрешения кросс-доменных запросов.

**Простой запрос:** GET/POST с простыми заголовками → браузер добавляет Origin → сервер проверяет.

**Preflight (OPTIONS):** для «сложных» запросов (PUT, DELETE, кастомные заголовки) → браузер сначала шлёт OPTIONS → сервер отвечает Access-Control-Allow-*.

**Заголовки:**
• Access-Control-Allow-Origin: * или конкретный домен
• Access-Control-Allow-Methods: GET, POST, PUT
• Access-Control-Allow-Headers: Content-Type, Authorization
• Access-Control-Allow-Credentials: true (для cookies)`,score:null},{name:"XSS",level:"3",content:`**XSS (Cross-Site Scripting)** — внедрение вредоносного скрипта на страницу.

**Типы:**
• **Stored** — скрипт сохранён на сервере (комментарий с JS)
• **Reflected** — скрипт в URL-параметре, отражается в ответе
• **DOM-based** — через клиентский JS (innerHTML, eval)

**Защита:**
• Экранирование вывода (React делает по умолчанию)
• CSP заголовки
• HttpOnly cookies (недоступны для JS)
• Санитизация ввода (DOMPurify)`},{name:"CSRF",level:"3",content:`**CSRF (Cross-Site Request Forgery)** — атака, заставляющая браузер отправить запрос от имени пользователя.

**Пример:** пользователь залогинен на bank.com. На evil.com — форма, отправляющая POST на bank.com/transfer. Браузер прикрепит cookies автоматически.

**Защита:**
• **CSRF-токен** — уникальный токен в форме, проверяемый сервером
• **SameSite cookies** — Strict/Lax
• Проверка заголовка Origin/Referer
• Double-submit cookie`},{name:"Безопасность JWT",level:"3",content:`**JWT (JSON Web Token)** — header.payload.signature (Base64).

**Не шифрует данные!** Только подписывает. Payload читается кем угодно.

**Уязвимости:**
• Хранение в localStorage → доступен через XSS
• Длинный срок жизни → украденный токен работает долго
• Алгоритм none → отключение подписи

**Лучшие практики:**
• Короткий срок жизни access token (15 мин)
• Refresh token в HttpOnly cookie
• Проверять алгоритм на сервере
• Не хранить чувствительные данные в payload`},{name:"Работа SSL/TLS",level:"4",content:`**TLS (Transport Layer Security)** — шифрование соединения.

**Handshake (TLS 1.3):**
1. ClientHello — поддерживаемые алгоритмы + случайное число
2. ServerHello — выбранный алгоритм + сертификат
3. Обмен ключами (Diffie-Hellman)
4. Симметричное шифрование установлено

**Сертификат:** подтверждает подлинность сервера. Выдаётся CA (Certificate Authority). Let's Encrypt — бесплатный.`},{name:"Организация безопасности при реализации WebSocket-ов",level:"4",content:`**Угрозы:** CSWSH (Cross-Site WebSocket Hijacking), DDoS, инъекции в сообщениях.

**Защита:**
• Проверка Origin при handshake
• Аутентификация через токен (не полагаться на cookies)
• Валидация и санитизация всех входящих сообщений
• Rate limiting
• WSS (WebSocket Secure) — только через TLS
• Heartbeat/ping-pong для обнаружения мёртвых соединений`}]},{id:"testing",title:"ТЕСТИРОВАНИЕ",icon:"🧪",color:"#26A69A",topics:[{name:"Паттерн AAA (Arrange Act Assert)",level:"2",content:`\`\`\`js
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

Кейсы: срочный hotfix без прерывания текущей работы, сравнение двух веток бок о бок, запуск тестов на одной ветке пока работаешь на другой.`}]}],_n=[...Id,...Ad],zd=[];_n.forEach(e=>{e.topics.forEach(n=>{n.content&&zd.push({section:e.title,sectionColor:e.color,topic:n.name,level:n.level,content:n.content,score:n.score??null})})});function Fd(e,n){if(!n)return e;const t=e.toLowerCase().indexOf(n.toLowerCase());return t===-1?e:y.jsxs(y.Fragment,{children:[e.slice(0,t),y.jsx("mark",{className:"search-highlight",children:e.slice(t,t+n.length)}),e.slice(t+n.length)]})}function rc({topic:e,sectionColor:n,highlight:t,defaultOpen:r=!1}){const[l,o]=Me.useState(r),i=nl[e.level]||nl[2];return y.jsxs("div",{className:"topic-row",children:[y.jsxs("button",{className:"topic-header",onClick:()=>o(!l),children:[y.jsx("span",{className:"topic-chevron",children:l?"▾":"▸"}),y.jsx("span",{className:"topic-name",children:t?Fd(e.name,t):e.name}),y.jsxs("span",{className:"topic-badges",children:[e.score!=null&&y.jsxs("span",{className:"topic-score",title:"Оценка",children:[e.score,"/5"]}),y.jsxs("span",{className:"topic-level",style:{background:i.color+"22",color:i.color,borderColor:i.color+"44"},children:[e.level," — ",i.label]})]})]}),l&&y.jsx("div",{className:"topic-content",children:y.jsx(lc,{text:e.content})})]})}function lc({text:e}){if(!e)return y.jsx("p",{className:"placeholder",children:"Контент будет добавлен позже"});const n=e.split(`
`),t=[];let r=!1,l=[],o=0;return n.forEach((i,s)=>{if(i.startsWith("```")){r?(t.push(y.jsx("pre",{children:l.join(`
`)},o++)),l=[],r=!1):r=!0;return}if(r){l.push(i);return}if(i.trim()===""){t.push(y.jsx("div",{className:"spacer"},o++));return}let a=i.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^• /,"‣ ");t.push(y.jsx("p",{className:"content-line",dangerouslySetInnerHTML:{__html:a}},o++))}),r&&l.length&&t.push(y.jsx("pre",{children:l.join(`
`)},o++)),y.jsx("div",{className:"formatted-content",children:t})}function Hd({section:e,defaultCollapsed:n=!1}){const[t,r]=Me.useState(n),l=e.topics.length,o=e.topics.filter(s=>s.score!=null),i=o.length?(o.reduce((s,a)=>s+a.score,0)/o.length).toFixed(1):null;return y.jsxs("div",{className:"section-block",children:[y.jsxs("button",{className:"section-header",onClick:()=>r(!t),style:{"--accent":e.color},children:[y.jsxs("div",{className:"section-left",children:[y.jsx("span",{className:"section-icon",children:e.icon}),y.jsxs("div",{children:[y.jsx("h2",{className:"section-title",children:e.title}),y.jsxs("span",{className:"section-meta",children:[l," тем",i?` · Средняя: ${i}/5`:""]})]})]}),y.jsx("span",{className:"section-chevron",children:t?"▸":"▾"})]}),!t&&y.jsx("div",{className:"section-topics",children:e.topics.map((s,a)=>y.jsx(rc,{topic:s,sectionColor:e.color},a))})]})}function Ud({query:e,sections:n}){const t=e.toLowerCase(),r=[];return n.forEach(l=>{const o=l.topics.filter(i=>i.name.toLowerCase().includes(t)||i.content&&i.content.toLowerCase().includes(t));o.length>0&&r.push({section:l,topics:o})}),r.length===0?y.jsxs("p",{className:"search-empty",children:["Ничего не найдено по запросу «",e,"»"]}):y.jsx(y.Fragment,{children:r.map(({section:l,topics:o})=>y.jsxs("div",{className:"section-block",children:[y.jsx("div",{className:"section-header",style:{"--accent":l.color},children:y.jsxs("div",{className:"section-left",children:[y.jsx("span",{className:"section-icon",children:l.icon}),y.jsxs("div",{children:[y.jsx("h2",{className:"section-title",children:l.title}),y.jsxs("span",{className:"section-meta",children:[o.length," совпадений"]})]})]})}),y.jsx("div",{className:"section-topics",children:o.map((i,s)=>y.jsx(rc,{topic:i,sectionColor:l.color,highlight:e,defaultOpen:!0},s))})]},l.id))})}function Vd({sections:e}){const[n,t]=Me.useState("all"),[r,l]=Me.useState(0),[o,i]=Me.useState(!1),s=[];e.forEach(p=>{p.topics.forEach(h=>{h.content&&(n==="all"||n===p.id)&&s.push({...h,sectionTitle:p.title,sectionIcon:p.icon,sectionColor:p.color})})});const a=s[r];if(!a)return y.jsx("p",{children:"Нет карточек"});const c=nl[a.level]||nl[2];return y.jsxs("div",{className:"flashcard-mode",children:[y.jsxs("div",{className:"flash-filter",children:[y.jsxs("select",{value:n,onChange:p=>{t(p.target.value),l(0),i(!1)},children:[y.jsx("option",{value:"all",children:"Все разделы"}),e.map(p=>y.jsxs("option",{value:p.id,children:[p.icon," ",p.title]},p.id))]}),y.jsxs("span",{className:"flash-counter",children:[r+1," / ",s.length]})]}),y.jsx("div",{className:`flash-card ${o?"flipped":""}`,onClick:()=>i(!o),children:o?y.jsx("div",{className:"flash-back",children:y.jsx(lc,{text:a.content})}):y.jsxs("div",{className:"flash-front",children:[y.jsxs("span",{className:"flash-section",style:{color:a.sectionColor},children:[a.sectionIcon," ",a.sectionTitle]}),y.jsx("span",{className:"flash-level",style:{color:c.color},children:c.label}),y.jsx("h3",{className:"flash-question",children:a.name}),y.jsx("span",{className:"flash-hint",children:"Нажми, чтобы увидеть ответ"})]})}),y.jsxs("div",{className:"flash-nav",children:[y.jsx("button",{disabled:r===0,onClick:()=>{l(p=>p-1),i(!1)},children:"← Назад"}),y.jsx("button",{onClick:()=>{l(Math.floor(Math.random()*s.length)),i(!1)},children:"🎲 Случайная"}),y.jsx("button",{disabled:r>=s.length-1,onClick:()=>{l(p=>p+1),i(!1)},children:"Далее →"})]})]})}function Bd(){const[e,n]=Me.useState("roadmap"),[t,r]=Me.useState("list"),[l,o]=Me.useState(""),i=_n.reduce((a,c)=>a+c.topics.length,0),s=e==="roadmap"&&l.trim().length>0;return y.jsxs("div",{className:"app",children:[y.jsxs("header",{className:"app-header",children:[y.jsxs("div",{className:"header-content",children:[y.jsx("h1",{className:"app-title",children:"Frontend Senior+ Roadmap"}),y.jsxs("p",{className:"app-sub",children:[_n.length," разделов · ",i," тем"]})]}),y.jsxs("div",{className:"header-controls",children:[y.jsxs("nav",{className:"tabs",children:[y.jsx("button",{className:`tab ${e==="roadmap"?"active":""}`,onClick:()=>{n("roadmap"),o("")},children:"📋 Темы"}),y.jsx("button",{className:`tab ${e==="cards"?"active":""}`,onClick:()=>{n("cards"),o("")},children:"🃏 Карточки"})]}),e==="roadmap"&&y.jsxs("div",{className:"view-toggle",children:[y.jsx("button",{className:`view-btn ${t==="list"?"active":""}`,onClick:()=>r("list"),title:"Список",children:y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("rect",{x:"1",y:"2",width:"14",height:"2",rx:"1"}),y.jsx("rect",{x:"1",y:"7",width:"14",height:"2",rx:"1"}),y.jsx("rect",{x:"1",y:"12",width:"14",height:"2",rx:"1"})]})}),y.jsx("button",{className:`view-btn ${t==="grid"?"active":""}`,onClick:()=>r("grid"),title:"Сетка",children:y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("rect",{x:"1",y:"1",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"9",y:"1",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"1",y:"9",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"})]})})]})]}),e==="roadmap"&&y.jsxs("div",{className:"search-bar",children:[y.jsx("svg",{className:"search-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:y.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})}),y.jsx("input",{type:"search",placeholder:"Поиск по темам...",value:l,onChange:a=>o(a.target.value),className:"search-input"}),l&&y.jsx("button",{className:"search-clear",onClick:()=>o(""),title:"Очистить",children:"✕"})]})]}),y.jsx("main",{className:`app-main ${e==="roadmap"&&!s&&t==="grid"?"view-grid":""}`,children:e==="roadmap"?s?y.jsx(Ud,{query:l.trim(),sections:_n}):_n.map(a=>y.jsx(Hd,{section:a,defaultCollapsed:t==="grid"},a.id)):y.jsx(Vd,{sections:_n})},s?`search-${l}`:t)]})}Ql.createRoot(document.getElementById("root")).render(y.jsx(xc.StrictMode,{children:y.jsx(Bd,{})}));
