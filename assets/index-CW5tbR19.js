(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function ic(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qs={exports:{}},tl={},Ks={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt=Symbol.for("react.element"),sc=Symbol.for("react.portal"),uc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),zi=Symbol.iterator;function gc(e){return e===null||typeof e!="object"?null:(e=zi&&e[zi]||e["@@iterator"],typeof e=="function"?e:null)}var Gs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Js=Object.assign,Xs={};function it(e,n,t){this.props=e,this.context=n,this.refs=Xs,this.updater=t||Gs}it.prototype.isReactComponent={};it.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};it.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ys(){}Ys.prototype=it.prototype;function Vo(e,n,t){this.props=e,this.context=n,this.refs=Xs,this.updater=t||Gs}var Bo=Vo.prototype=new Ys;Bo.constructor=Vo;Js(Bo,it.prototype);Bo.isPureReactComponent=!0;var Fi=Array.isArray,Zs=Object.prototype.hasOwnProperty,Wo={current:null},qs={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,n,t){var r,l={},o=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Zs.call(n,r)&&!qs.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Xt,type:e,key:o,ref:i,props:l,_owner:Wo.current}}function yc(e,n){return{$$typeof:Xt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function $o(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt}function Sc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ai=/\/+/g;function kl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):n.toString(36)}function Sr(e,n,t,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xt:case sc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+kl(i,0):r,Fi(l)?(t="",e!=null&&(t=e.replace(Ai,"$&/")+"/"),Sr(l,n,t,"",function(c){return c})):l!=null&&($o(l)&&(l=yc(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ai,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",Fi(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+kl(o,s);i+=Sr(o,n,t,u,l)}else if(u=gc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+kl(o,s++),i+=Sr(o,n,t,u,l);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function tr(e,n,t){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(o){return n.call(t,o,l++)}),r}function wc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},wr={transition:null},kc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Wo};function eu(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:tr,forEach:function(e,n,t){tr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return tr(e,function(){n++}),n},toArray:function(e){return tr(e,function(n){return n})||[]},only:function(e){if(!$o(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=it;_.Fragment=uc;_.Profiler=cc;_.PureComponent=Vo;_.StrictMode=ac;_.Suspense=mc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;_.act=eu;_.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Js({},e.props),l=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=Wo.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)Zs.call(n,u)&&!qs.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Xt,type:e.type,key:l,ref:o,props:r,_owner:i}};_.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fc,_context:e},e.Consumer=e};_.createElement=bs;_.createFactory=function(e){var n=bs.bind(null,e);return n.type=e,n};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:pc,render:e}};_.isValidElement=$o;_.lazy=function(e){return{$$typeof:vc,_payload:{_status:-1,_result:e},_init:wc}};_.memo=function(e,n){return{$$typeof:hc,type:e,compare:n===void 0?null:n}};_.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};_.unstable_act=eu;_.useCallback=function(e,n){return se.current.useCallback(e,n)};_.useContext=function(e){return se.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return se.current.useDeferredValue(e)};_.useEffect=function(e,n){return se.current.useEffect(e,n)};_.useId=function(){return se.current.useId()};_.useImperativeHandle=function(e,n,t){return se.current.useImperativeHandle(e,n,t)};_.useInsertionEffect=function(e,n){return se.current.useInsertionEffect(e,n)};_.useLayoutEffect=function(e,n){return se.current.useLayoutEffect(e,n)};_.useMemo=function(e,n){return se.current.useMemo(e,n)};_.useReducer=function(e,n,t){return se.current.useReducer(e,n,t)};_.useRef=function(e){return se.current.useRef(e)};_.useState=function(e){return se.current.useState(e)};_.useSyncExternalStore=function(e,n,t){return se.current.useSyncExternalStore(e,n,t)};_.useTransition=function(){return se.current.useTransition()};_.version="18.3.1";Ks.exports=_;var Le=Ks.exports;const xc=ic(Le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=Le,Ec=Symbol.for("react.element"),Tc=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,jc=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nc={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,n,t){var r,l={},o=null,i=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Pc.call(n,r)&&!Nc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Ec,type:e,key:o,ref:i,props:l,_owner:jc.current}}tl.Fragment=Tc;tl.jsx=nu;tl.jsxs=nu;Qs.exports=tl;var y=Qs.exports,Gl={},tu={exports:{}},ye={},ru={exports:{}},lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,N){var R=E.length;E.push(N);e:for(;0<R;){var $=R-1>>>1,X=E[$];if(0<l(X,N))E[$]=N,E[R]=X,R=$;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var N=E[0],R=E.pop();if(R!==N){E[0]=R;e:for(var $=0,X=E.length,er=X>>>1;$<er;){var gn=2*($+1)-1,wl=E[gn],yn=gn+1,nr=E[yn];if(0>l(wl,R))yn<X&&0>l(nr,wl)?(E[$]=nr,E[yn]=R,$=yn):(E[$]=wl,E[gn]=R,$=gn);else if(yn<X&&0>l(nr,R))E[$]=nr,E[yn]=R,$=yn;else break e}}return N}function l(E,N){var R=E.sortIndex-N.sortIndex;return R!==0?R:E.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],c=[],p=1,h=null,m=3,S=!1,w=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(E){for(var N=t(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=E)r(c),N.sortIndex=N.expirationTime,n(u,N);else break;N=t(c)}}function v(E){if(k=!1,d(E),!w)if(t(u)!==null)w=!0,yl(C);else{var N=t(c);N!==null&&Sl(v,N.startTime-E)}}function C(E,N){w=!1,k&&(k=!1,f(j),j=-1),S=!0;var R=m;try{for(d(N),h=t(u);h!==null&&(!(h.expirationTime>N)||E&&!Pe());){var $=h.callback;if(typeof $=="function"){h.callback=null,m=h.priorityLevel;var X=$(h.expirationTime<=N);N=e.unstable_now(),typeof X=="function"?h.callback=X:h===t(u)&&r(u),d(N)}else r(u);h=t(u)}if(h!==null)var er=!0;else{var gn=t(c);gn!==null&&Sl(v,gn.startTime-N),er=!1}return er}finally{h=null,m=R,S=!1}}var T=!1,P=null,j=-1,W=5,L=-1;function Pe(){return!(e.unstable_now()-L<W)}function at(){if(P!==null){var E=e.unstable_now();L=E;var N=!0;try{N=P(!0,E)}finally{N?ct():(T=!1,P=null)}}else T=!1}var ct;if(typeof a=="function")ct=function(){a(at)};else if(typeof MessageChannel<"u"){var Ii=new MessageChannel,oc=Ii.port2;Ii.port1.onmessage=at,ct=function(){oc.postMessage(null)}}else ct=function(){F(at,0)};function yl(E){P=E,T||(T=!0,ct())}function Sl(E,N){j=F(function(){E(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,yl(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var R=m;m=N;try{return E()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=m;m=E;try{return N()}finally{m=R}},e.unstable_scheduleCallback=function(E,N,R){var $=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?$+R:$):R=$,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=R+X,E={id:p++,callback:N,priorityLevel:E,startTime:R,expirationTime:X,sortIndex:-1},R>$?(E.sortIndex=R,n(c,E),t(u)===null&&E===t(c)&&(k?(f(j),j=-1):k=!0,Sl(v,R-$))):(E.sortIndex=X,n(u,E),w||S||(w=!0,yl(C))),E},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(E){var N=m;return function(){var R=m;m=N;try{return E.apply(this,arguments)}finally{m=R}}}})(lu);ru.exports=lu;var Rc=ru.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=Le,ge=Rc;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ou=new Set,Dt={};function Ln(e,n){bn(e,n),bn(e+"Capture",n)}function bn(e,n){for(Dt[e]=n,e=0;e<n.length;e++)ou.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ui={},Hi={};function Dc(e){return Jl.call(Hi,e)?!0:Jl.call(Ui,e)?!1:Lc.test(e)?Hi[e]=!0:(Ui[e]=!0,!1)}function Mc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oc(e,n,t,r){if(n===null||typeof n>"u"||Mc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,r,l,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qo=/[\-:]([a-z])/g;function Ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Qo,Ko);ee[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Qo,Ko);ee[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Qo,Ko);ee[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Go(e,n,t,r){var l=ee.hasOwnProperty(n)?ee[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Oc(n,t,l,r)&&(t=null),r||l===null?Dc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Xe=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),In=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Jo=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),iu=Symbol.for("react.provider"),su=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),Yo=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),uu=Symbol.for("react.offscreen"),Vi=Symbol.iterator;function ft(e){return e===null||typeof e!="object"?null:(e=Vi&&e[Vi]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,xl;function St(e){if(xl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xl=n&&n[1]||""}return`
`+xl+e}var Cl=!1;function El(e,n){if(!e||Cl)return"";Cl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Cl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?St(e):""}function Ic(e){switch(e.tag){case 5:return St(e.type);case 16:return St("Lazy");case 13:return St("Suspense");case 19:return St("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case In:return"Portal";case Xl:return"Profiler";case Jo:return"StrictMode";case Yl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case su:return(e.displayName||"Context")+".Consumer";case iu:return(e._context.displayName||"Context")+".Provider";case Xo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yo:return n=e.displayName||null,n!==null?n:ql(e.type)||"Memo";case Ze:n=e._payload,e=e._init;try{return ql(e(n))}catch{}}return null}function zc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(n);case 8:return n===Jo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function au(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fc(e){var n=au(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function lr(e){e._valueTracker||(e._valueTracker=Fc(e))}function cu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=au(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Bi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=dn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fu(e,n){n=n.checked,n!=null&&Go(e,"checked",n,!1)}function eo(e,n){fu(e,n);var t=dn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?no(e,n.type,t):n.hasOwnProperty("defaultValue")&&no(e,n.type,dn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function no(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wt=Array.isArray;function Gn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+dn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function to(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(g(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $i(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(g(92));if(wt(t)){if(1<t.length)throw Error(g(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dn(t)}}function du(e,n){var t=dn(n.value),r=dn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Qi(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function pu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?pu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,mu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(Ct).forEach(function(e){Ac.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ct[n]=Ct[e]})});function hu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ct.hasOwnProperty(e)&&Ct[e]?(""+n).trim():n+"px"}function vu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=hu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Uc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lo(e,n){if(n){if(Uc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(g(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(g(61))}if(n.style!=null&&typeof n.style!="object")throw Error(g(62))}}function oo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function Zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var so=null,Jn=null,Xn=null;function Ki(e){if(e=qt(e)){if(typeof so!="function")throw Error(g(280));var n=e.stateNode;n&&(n=sl(n),so(e.stateNode,e.type,n))}}function gu(e){Jn?Xn?Xn.push(e):Xn=[e]:Jn=e}function yu(){if(Jn){var e=Jn,n=Xn;if(Xn=Jn=null,Ki(e),n)for(e=0;e<n.length;e++)Ki(n[e])}}function Su(e,n){return e(n)}function wu(){}var Tl=!1;function ku(e,n,t){if(Tl)return e(n,t);Tl=!0;try{return Su(e,n,t)}finally{Tl=!1,(Jn!==null||Xn!==null)&&(wu(),yu())}}function Ot(e,n){var t=e.stateNode;if(t===null)return null;var r=sl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(g(231,n,typeof t));return t}var uo=!1;if(Qe)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){uo=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{uo=!1}function Hc(e,n,t,r,l,o,i,s,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(p){this.onError(p)}}var Et=!1,Dr=null,Mr=!1,ao=null,Vc={onError:function(e){Et=!0,Dr=e}};function Bc(e,n,t,r,l,o,i,s,u){Et=!1,Dr=null,Hc.apply(Vc,arguments)}function Wc(e,n,t,r,l,o,i,s,u){if(Bc.apply(this,arguments),Et){if(Et){var c=Dr;Et=!1,Dr=null}else throw Error(g(198));Mr||(Mr=!0,ao=c)}}function Dn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function xu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Gi(e){if(Dn(e)!==e)throw Error(g(188))}function $c(e){var n=e.alternate;if(!n){if(n=Dn(e),n===null)throw Error(g(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return Gi(l),e;if(o===r)return Gi(l),n;o=o.sibling}throw Error(g(188))}if(t.return!==r.return)t=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,r=o;break}if(s===r){i=!0,r=l,t=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===t){i=!0,t=o,r=l;break}if(s===r){i=!0,r=o,t=l;break}s=s.sibling}if(!i)throw Error(g(189))}}if(t.alternate!==r)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?e:n}function Cu(e){return e=$c(e),e!==null?Eu(e):null}function Eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Eu(e);if(n!==null)return n;e=e.sibling}return null}var Tu=ge.unstable_scheduleCallback,Ji=ge.unstable_cancelCallback,Qc=ge.unstable_shouldYield,Kc=ge.unstable_requestPaint,Q=ge.unstable_now,Gc=ge.unstable_getCurrentPriorityLevel,qo=ge.unstable_ImmediatePriority,Pu=ge.unstable_UserBlockingPriority,Or=ge.unstable_NormalPriority,Jc=ge.unstable_LowPriority,ju=ge.unstable_IdlePriority,rl=null,Ae=null;function Xc(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:qc,Yc=Math.log,Zc=Math.LN2;function qc(e){return e>>>=0,e===0?32:31-(Yc(e)/Zc|0)|0}var ir=64,sr=4194304;function kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~l;s!==0?r=kt(s):(o&=i,o!==0&&(r=kt(o)))}else i=t&~l,i!==0?r=kt(i):o!==0&&(r=kt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,o=n&-n,l>=o||l===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-De(n),l=1<<t,r|=e[t],n&=~l;return r}function bc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-De(o),s=1<<i,u=l[i];u===-1?(!(s&t)||s&r)&&(l[i]=bc(s,n)):u<=n&&(e.expiredLanes|=s),o&=~s}}function co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nu(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Pl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=t}function nf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-De(t),o=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~o}}function bo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-De(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var M=0;function Ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _u,ei,Lu,Du,Mu,fo=!1,ur=[],rn=null,ln=null,on=null,It=new Map,zt=new Map,be=[],tf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":It.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(n.pointerId)}}function pt(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=qt(n),n!==null&&ei(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function rf(e,n,t,r,l){switch(n){case"focusin":return rn=pt(rn,e,n,t,r,l),!0;case"dragenter":return ln=pt(ln,e,n,t,r,l),!0;case"mouseover":return on=pt(on,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return It.set(o,pt(It.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,zt.set(o,pt(zt.get(o)||null,e,n,t,r,l)),!0}return!1}function Ou(e){var n=kn(e.target);if(n!==null){var t=Dn(n);if(t!==null){if(n=t.tag,n===13){if(n=xu(t),n!==null){e.blockedOn=n,Mu(e.priority,function(){Lu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=po(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);io=r,t.target.dispatchEvent(r),io=null}else return n=qt(t),n!==null&&ei(n),e.blockedOn=t,!1;n.shift()}return!0}function Yi(e,n,t){kr(e)&&t.delete(n)}function lf(){fo=!1,rn!==null&&kr(rn)&&(rn=null),ln!==null&&kr(ln)&&(ln=null),on!==null&&kr(on)&&(on=null),It.forEach(Yi),zt.forEach(Yi)}function mt(e,n){e.blockedOn===n&&(e.blockedOn=null,fo||(fo=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,lf)))}function Ft(e){function n(l){return mt(l,e)}if(0<ur.length){mt(ur[0],e);for(var t=1;t<ur.length;t++){var r=ur[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&mt(rn,e),ln!==null&&mt(ln,e),on!==null&&mt(on,e),It.forEach(n),zt.forEach(n),t=0;t<be.length;t++)r=be[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(t=be[0],t.blockedOn===null);)Ou(t),t.blockedOn===null&&be.shift()}var Yn=Xe.ReactCurrentBatchConfig,zr=!0;function of(e,n,t,r){var l=M,o=Yn.transition;Yn.transition=null;try{M=1,ni(e,n,t,r)}finally{M=l,Yn.transition=o}}function sf(e,n,t,r){var l=M,o=Yn.transition;Yn.transition=null;try{M=4,ni(e,n,t,r)}finally{M=l,Yn.transition=o}}function ni(e,n,t,r){if(zr){var l=po(e,n,t,r);if(l===null)zl(e,n,r,Fr,t),Xi(e,r);else if(rf(l,e,n,t,r))r.stopPropagation();else if(Xi(e,r),n&4&&-1<tf.indexOf(e)){for(;l!==null;){var o=qt(l);if(o!==null&&_u(o),o=po(e,n,t,r),o===null&&zl(e,n,r,Fr,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else zl(e,n,r,null,t)}}var Fr=null;function po(e,n,t,r){if(Fr=null,e=Zo(r),e=kn(e),e!==null)if(n=Dn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=xu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Fr=e,null}function Iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case qo:return 1;case Pu:return 4;case Or:case Jc:return 16;case ju:return 536870912;default:return 16}default:return 16}}var nn=null,ti=null,xr=null;function zu(){if(xr)return xr;var e,n=ti,t=n.length,r,l="value"in nn?nn.value:nn.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[o-r];r++);return xr=l.slice(e,1<r?1-r:void 0)}function Cr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Zi(){return!1}function Se(e){function n(t,r,l,o,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ar:Zi,this.isPropagationStopped=Zi,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),n}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=Se(st),Zt=V({},st,{view:0,detail:0}),uf=Se(Zt),jl,Nl,ht,ll=V({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ht&&(ht&&e.type==="mousemove"?(jl=e.screenX-ht.screenX,Nl=e.screenY-ht.screenY):Nl=jl=0,ht=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:Nl}}),qi=Se(ll),af=V({},ll,{dataTransfer:0}),cf=Se(af),ff=V({},Zt,{relatedTarget:0}),Rl=Se(ff),df=V({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=Se(df),mf=V({},st,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hf=Se(mf),vf=V({},st,{data:0}),bi=Se(vf),gf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sf[e])?!!n[e]:!1}function li(){return wf}var kf=V({},Zt,{key:function(e){if(e.key){var n=gf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xf=Se(kf),Cf=V({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=Se(Cf),Ef=V({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),Tf=Se(Ef),Pf=V({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=Se(Pf),Nf=V({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rf=Se(Nf),_f=[9,13,27,32],oi=Qe&&"CompositionEvent"in window,Tt=null;Qe&&"documentMode"in document&&(Tt=document.documentMode);var Lf=Qe&&"TextEvent"in window&&!Tt,Fu=Qe&&(!oi||Tt&&8<Tt&&11>=Tt),ns=" ",ts=!1;function Au(e,n){switch(e){case"keyup":return _f.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Df(e,n){switch(e){case"compositionend":return Uu(n);case"keypress":return n.which!==32?null:(ts=!0,ns);case"textInput":return e=n.data,e===ns&&ts?null:e;default:return null}}function Mf(e,n){if(Fn)return e==="compositionend"||!oi&&Au(e,n)?(e=zu(),xr=ti=nn=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fu&&n.locale!=="ko"?null:n.data;default:return null}}var Of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Of[e.type]:n==="textarea"}function Hu(e,n,t,r){gu(r),n=Ar(n,"onChange"),0<n.length&&(t=new ri("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Pt=null,At=null;function If(e){Zu(e,0)}function ol(e){var n=Hn(e);if(cu(n))return e}function zf(e,n){if(e==="change")return n}var Vu=!1;if(Qe){var _l;if(Qe){var Ll="oninput"in document;if(!Ll){var ls=document.createElement("div");ls.setAttribute("oninput","return;"),Ll=typeof ls.oninput=="function"}_l=Ll}else _l=!1;Vu=_l&&(!document.documentMode||9<document.documentMode)}function os(){Pt&&(Pt.detachEvent("onpropertychange",Bu),At=Pt=null)}function Bu(e){if(e.propertyName==="value"&&ol(At)){var n=[];Hu(n,At,e,Zo(e)),ku(If,n)}}function Ff(e,n,t){e==="focusin"?(os(),Pt=n,At=t,Pt.attachEvent("onpropertychange",Bu)):e==="focusout"&&os()}function Af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(At)}function Uf(e,n){if(e==="click")return ol(n)}function Hf(e,n){if(e==="input"||e==="change")return ol(n)}function Vf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Oe=typeof Object.is=="function"?Object.is:Vf;function Ut(e,n){if(Oe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Jl.call(n,l)||!Oe(e[l],n[l]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ss(e,n){var t=is(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=is(t)}}function Wu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $u(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function ii(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bf(e){var n=$u(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wu(t.ownerDocument.documentElement,t)){if(r!==null&&ii(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ss(t,o);var i=ss(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wf=Qe&&"documentMode"in document&&11>=document.documentMode,An=null,mo=null,jt=null,ho=!1;function us(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ho||An==null||An!==Lr(r)||(r=An,"selectionStart"in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jt&&Ut(jt,r)||(jt=r,r=Ar(mo,"onSelect"),0<r.length&&(n=new ri("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=An)))}function cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Un={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Dl={},Qu={};Qe&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function il(e){if(Dl[e])return Dl[e];if(!Un[e])return e;var n=Un[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Qu)return Dl[e]=n[t];return e}var Ku=il("animationend"),Gu=il("animationiteration"),Ju=il("animationstart"),Xu=il("transitionend"),Yu=new Map,as="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,n){Yu.set(e,n),Ln(n,[e])}for(var Ml=0;Ml<as.length;Ml++){var Ol=as[Ml],$f=Ol.toLowerCase(),Qf=Ol[0].toUpperCase()+Ol.slice(1);mn($f,"on"+Qf)}mn(Ku,"onAnimationEnd");mn(Gu,"onAnimationIteration");mn(Ju,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Xu,"onTransitionEnd");bn("onMouseEnter",["mouseout","mouseover"]);bn("onMouseLeave",["mouseout","mouseover"]);bn("onPointerEnter",["pointerout","pointerover"]);bn("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(xt));function cs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Wc(r,n,void 0,e),e.currentTarget=null}function Zu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;cs(l,s,c),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;cs(l,s,c),o=u}}}if(Mr)throw e=ao,Mr=!1,ao=null,e}function I(e,n){var t=n[wo];t===void 0&&(t=n[wo]=new Set);var r=e+"__bubble";t.has(r)||(qu(n,e,2,!1),t.add(r))}function Il(e,n,t){var r=0;n&&(r|=4),qu(t,e,r,n)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Ht(e){if(!e[fr]){e[fr]=!0,ou.forEach(function(t){t!=="selectionchange"&&(Kf.has(t)||Il(t,!1,e),Il(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fr]||(n[fr]=!0,Il("selectionchange",!1,n))}}function qu(e,n,t,r){switch(Iu(n)){case 1:var l=of;break;case 4:l=sf;break;default:l=ni}t=l.bind(null,n,t,e),l=void 0,!uo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function zl(e,n,t,r,l){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=kn(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}ku(function(){var c=o,p=Zo(t),h=[];e:{var m=Yu.get(e);if(m!==void 0){var S=ri,w=e;switch(e){case"keypress":if(Cr(t)===0)break e;case"keydown":case"keyup":S=xf;break;case"focusin":w="focus",S=Rl;break;case"focusout":w="blur",S=Rl;break;case"beforeblur":case"afterblur":S=Rl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=qi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Tf;break;case Ku:case Gu:case Ju:S=pf;break;case Xu:S=jf;break;case"scroll":S=uf;break;case"wheel":S=Rf;break;case"copy":case"cut":case"paste":S=hf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=es}var k=(n&4)!==0,F=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var a=c,d;a!==null;){d=a;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Ot(a,f),v!=null&&k.push(Vt(a,v,d)))),F)break;a=a.return}0<k.length&&(m=new S(m,w,null,t,p),h.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&t!==io&&(w=t.relatedTarget||t.fromElement)&&(kn(w)||w[Ke]))break e;if((S||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,S?(w=t.relatedTarget||t.toElement,S=c,w=w?kn(w):null,w!==null&&(F=Dn(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(k=qi,v="onMouseLeave",f="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(k=es,v="onPointerLeave",f="onPointerEnter",a="pointer"),F=S==null?m:Hn(S),d=w==null?m:Hn(w),m=new k(v,a+"leave",S,t,p),m.target=F,m.relatedTarget=d,v=null,kn(p)===c&&(k=new k(f,a+"enter",w,t,p),k.target=d,k.relatedTarget=F,v=k),F=v,S&&w)n:{for(k=S,f=w,a=0,d=k;d;d=Mn(d))a++;for(d=0,v=f;v;v=Mn(v))d++;for(;0<a-d;)k=Mn(k),a--;for(;0<d-a;)f=Mn(f),d--;for(;a--;){if(k===f||f!==null&&k===f.alternate)break n;k=Mn(k),f=Mn(f)}k=null}else k=null;S!==null&&fs(h,m,S,k,!1),w!==null&&F!==null&&fs(h,F,w,k,!0)}}e:{if(m=c?Hn(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var C=zf;else if(rs(m))if(Vu)C=Hf;else{C=Af;var T=Ff}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=Uf);if(C&&(C=C(e,c))){Hu(h,C,t,p);break e}T&&T(e,m,c),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&no(m,"number",m.value)}switch(T=c?Hn(c):window,e){case"focusin":(rs(T)||T.contentEditable==="true")&&(An=T,mo=c,jt=null);break;case"focusout":jt=mo=An=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,us(h,t,p);break;case"selectionchange":if(Wf)break;case"keydown":case"keyup":us(h,t,p)}var P;if(oi)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Fn?Au(e,t)&&(j="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(j="onCompositionStart");j&&(Fu&&t.locale!=="ko"&&(Fn||j!=="onCompositionStart"?j==="onCompositionEnd"&&Fn&&(P=zu()):(nn=p,ti="value"in nn?nn.value:nn.textContent,Fn=!0)),T=Ar(c,j),0<T.length&&(j=new bi(j,e,null,t,p),h.push({event:j,listeners:T}),P?j.data=P:(P=Uu(t),P!==null&&(j.data=P)))),(P=Lf?Df(e,t):Mf(e,t))&&(c=Ar(c,"onBeforeInput"),0<c.length&&(p=new bi("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:c}),p.data=P))}Zu(h,n)})}function Vt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ar(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Ot(e,t),o!=null&&r.unshift(Vt(e,o,l)),o=Ot(e,n),o!=null&&r.push(Vt(e,o,l))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fs(e,n,t,r,l){for(var o=n._reactName,i=[];t!==null&&t!==r;){var s=t,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Ot(t,o),u!=null&&i.unshift(Vt(t,u,s))):l||(u=Ot(t,o),u!=null&&i.push(Vt(t,u,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Gf=/\r\n?/g,Jf=/\u0000|\uFFFD/g;function ds(e){return(typeof e=="string"?e:""+e).replace(Gf,`
`).replace(Jf,"")}function dr(e,n,t){if(n=ds(n),ds(e)!==n&&t)throw Error(g(425))}function Ur(){}var vo=null,go=null;function yo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,Xf=typeof clearTimeout=="function"?clearTimeout:void 0,ps=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof ps<"u"?function(e){return ps.resolve(null).then(e).catch(Zf)}:So;function Zf(e){setTimeout(function(){throw e})}function Fl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Ft(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Ft(n)}function sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ms(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ut=Math.random().toString(36).slice(2),Fe="__reactFiber$"+ut,Bt="__reactProps$"+ut,Ke="__reactContainer$"+ut,wo="__reactEvents$"+ut,qf="__reactListeners$"+ut,bf="__reactHandles$"+ut;function kn(e){var n=e[Fe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[Fe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ms(e);e!==null;){if(t=e[Fe])return t;e=ms(e)}return n}e=t,t=e.parentNode}return null}function qt(e){return e=e[Fe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function sl(e){return e[Bt]||null}var ko=[],Vn=-1;function hn(e){return{current:e}}function z(e){0>Vn||(e.current=ko[Vn],ko[Vn]=null,Vn--)}function O(e,n){Vn++,ko[Vn]=e.current,e.current=n}var pn={},le=hn(pn),fe=hn(!1),Pn=pn;function et(e,n){var t=e.type.contextTypes;if(!t)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in t)l[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function Hr(){z(fe),z(le)}function hs(e,n,t){if(le.current!==pn)throw Error(g(168));O(le,n),O(fe,t)}function bu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(g(108,zc(e)||"Unknown",l));return V({},t,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Pn=le.current,O(le,e),O(fe,fe.current),!0}function vs(e,n,t){var r=e.stateNode;if(!r)throw Error(g(169));t?(e=bu(e,n,Pn),r.__reactInternalMemoizedMergedChildContext=e,z(fe),z(le),O(le,e)):z(fe),O(fe,t)}var Ve=null,ul=!1,Al=!1;function ea(e){Ve===null?Ve=[e]:Ve.push(e)}function ed(e){ul=!0,ea(e)}function vn(){if(!Al&&Ve!==null){Al=!0;var e=0,n=M;try{var t=Ve;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,ul=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Tu(qo,vn),l}finally{M=n,Al=!1}}return null}var Bn=[],Wn=0,Br=null,Wr=0,we=[],ke=0,jn=null,Be=1,We="";function Sn(e,n){Bn[Wn++]=Wr,Bn[Wn++]=Br,Br=e,Wr=n}function na(e,n,t){we[ke++]=Be,we[ke++]=We,we[ke++]=jn,jn=e;var r=Be;e=We;var l=32-De(r)-1;r&=~(1<<l),t+=1;var o=32-De(n)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Be=1<<32-De(n)+l|t<<l|r,We=o+e}else Be=1<<o|t<<l|r,We=e}function si(e){e.return!==null&&(Sn(e,1),na(e,1,0))}function ui(e){for(;e===Br;)Br=Bn[--Wn],Bn[Wn]=null,Wr=Bn[--Wn],Bn[Wn]=null;for(;e===jn;)jn=we[--ke],we[ke]=null,We=we[--ke],we[ke]=null,Be=we[--ke],we[ke]=null}var ve=null,he=null,A=!1,_e=null;function ta(e,n){var t=xe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function gs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ve=e,he=sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ve=e,he=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=jn!==null?{id:Be,overflow:We}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=xe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ve=e,he=null,!0):!1;default:return!1}}function xo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Co(e){if(A){var n=he;if(n){var t=n;if(!gs(e,n)){if(xo(e))throw Error(g(418));n=sn(t.nextSibling);var r=ve;n&&gs(e,n)?ta(r,t):(e.flags=e.flags&-4097|2,A=!1,ve=e)}}else{if(xo(e))throw Error(g(418));e.flags=e.flags&-4097|2,A=!1,ve=e}}}function ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function pr(e){if(e!==ve)return!1;if(!A)return ys(e),A=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yo(e.type,e.memoizedProps)),n&&(n=he)){if(xo(e))throw ra(),Error(g(418));for(;n;)ta(e,n),n=sn(n.nextSibling)}if(ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){he=sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}he=null}}else he=ve?sn(e.stateNode.nextSibling):null;return!0}function ra(){for(var e=he;e;)e=sn(e.nextSibling)}function nt(){he=ve=null,A=!1}function ai(e){_e===null?_e=[e]:_e.push(e)}var nd=Xe.ReactCurrentBatchConfig;function vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(g(309));var r=t.stateNode}if(!r)throw Error(g(147,e));var l=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(g(284));if(!t._owner)throw Error(g(290,e))}return e}function mr(e,n){throw e=Object.prototype.toString.call(n),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ss(e){var n=e._init;return n(e._payload)}function la(e){function n(f,a){if(e){var d=f.deletions;d===null?(f.deletions=[a],f.flags|=16):d.push(a)}}function t(f,a){if(!e)return null;for(;a!==null;)n(f,a),a=a.sibling;return null}function r(f,a){for(f=new Map;a!==null;)a.key!==null?f.set(a.key,a):f.set(a.index,a),a=a.sibling;return f}function l(f,a){return f=fn(f,a),f.index=0,f.sibling=null,f}function o(f,a,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<a?(f.flags|=2,a):d):(f.flags|=2,a)):(f.flags|=1048576,a)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,a,d,v){return a===null||a.tag!==6?(a=Ql(d,f.mode,v),a.return=f,a):(a=l(a,d),a.return=f,a)}function u(f,a,d,v){var C=d.type;return C===zn?p(f,a,d.props.children,v,d.key):a!==null&&(a.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ze&&Ss(C)===a.type)?(v=l(a,d.props),v.ref=vt(f,a,d),v.return=f,v):(v=_r(d.type,d.key,d.props,null,f.mode,v),v.ref=vt(f,a,d),v.return=f,v)}function c(f,a,d,v){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=Kl(d,f.mode,v),a.return=f,a):(a=l(a,d.children||[]),a.return=f,a)}function p(f,a,d,v,C){return a===null||a.tag!==7?(a=Tn(d,f.mode,v,C),a.return=f,a):(a=l(a,d),a.return=f,a)}function h(f,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Ql(""+a,f.mode,d),a.return=f,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case rr:return d=_r(a.type,a.key,a.props,null,f.mode,d),d.ref=vt(f,null,a),d.return=f,d;case In:return a=Kl(a,f.mode,d),a.return=f,a;case Ze:var v=a._init;return h(f,v(a._payload),d)}if(wt(a)||ft(a))return a=Tn(a,f.mode,d,null),a.return=f,a;mr(f,a)}return null}function m(f,a,d,v){var C=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return C!==null?null:s(f,a,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:return d.key===C?u(f,a,d,v):null;case In:return d.key===C?c(f,a,d,v):null;case Ze:return C=d._init,m(f,a,C(d._payload),v)}if(wt(d)||ft(d))return C!==null?null:p(f,a,d,v,null);mr(f,d)}return null}function S(f,a,d,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,s(a,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return f=f.get(v.key===null?d:v.key)||null,u(a,f,v,C);case In:return f=f.get(v.key===null?d:v.key)||null,c(a,f,v,C);case Ze:var T=v._init;return S(f,a,d,T(v._payload),C)}if(wt(v)||ft(v))return f=f.get(d)||null,p(a,f,v,C,null);mr(a,v)}return null}function w(f,a,d,v){for(var C=null,T=null,P=a,j=a=0,W=null;P!==null&&j<d.length;j++){P.index>j?(W=P,P=null):W=P.sibling;var L=m(f,P,d[j],v);if(L===null){P===null&&(P=W);break}e&&P&&L.alternate===null&&n(f,P),a=o(L,a,j),T===null?C=L:T.sibling=L,T=L,P=W}if(j===d.length)return t(f,P),A&&Sn(f,j),C;if(P===null){for(;j<d.length;j++)P=h(f,d[j],v),P!==null&&(a=o(P,a,j),T===null?C=P:T.sibling=P,T=P);return A&&Sn(f,j),C}for(P=r(f,P);j<d.length;j++)W=S(P,f,j,d[j],v),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?j:W.key),a=o(W,a,j),T===null?C=W:T.sibling=W,T=W);return e&&P.forEach(function(Pe){return n(f,Pe)}),A&&Sn(f,j),C}function k(f,a,d,v){var C=ft(d);if(typeof C!="function")throw Error(g(150));if(d=C.call(d),d==null)throw Error(g(151));for(var T=C=null,P=a,j=a=0,W=null,L=d.next();P!==null&&!L.done;j++,L=d.next()){P.index>j?(W=P,P=null):W=P.sibling;var Pe=m(f,P,L.value,v);if(Pe===null){P===null&&(P=W);break}e&&P&&Pe.alternate===null&&n(f,P),a=o(Pe,a,j),T===null?C=Pe:T.sibling=Pe,T=Pe,P=W}if(L.done)return t(f,P),A&&Sn(f,j),C;if(P===null){for(;!L.done;j++,L=d.next())L=h(f,L.value,v),L!==null&&(a=o(L,a,j),T===null?C=L:T.sibling=L,T=L);return A&&Sn(f,j),C}for(P=r(f,P);!L.done;j++,L=d.next())L=S(P,f,j,L.value,v),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?j:L.key),a=o(L,a,j),T===null?C=L:T.sibling=L,T=L);return e&&P.forEach(function(at){return n(f,at)}),A&&Sn(f,j),C}function F(f,a,d,v){if(typeof d=="object"&&d!==null&&d.type===zn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case rr:e:{for(var C=d.key,T=a;T!==null;){if(T.key===C){if(C=d.type,C===zn){if(T.tag===7){t(f,T.sibling),a=l(T,d.props.children),a.return=f,f=a;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ze&&Ss(C)===T.type){t(f,T.sibling),a=l(T,d.props),a.ref=vt(f,T,d),a.return=f,f=a;break e}t(f,T);break}else n(f,T);T=T.sibling}d.type===zn?(a=Tn(d.props.children,f.mode,v,d.key),a.return=f,f=a):(v=_r(d.type,d.key,d.props,null,f.mode,v),v.ref=vt(f,a,d),v.return=f,f=v)}return i(f);case In:e:{for(T=d.key;a!==null;){if(a.key===T)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){t(f,a.sibling),a=l(a,d.children||[]),a.return=f,f=a;break e}else{t(f,a);break}else n(f,a);a=a.sibling}a=Kl(d,f.mode,v),a.return=f,f=a}return i(f);case Ze:return T=d._init,F(f,a,T(d._payload),v)}if(wt(d))return w(f,a,d,v);if(ft(d))return k(f,a,d,v);mr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(t(f,a.sibling),a=l(a,d),a.return=f,f=a):(t(f,a),a=Ql(d,f.mode,v),a.return=f,f=a),i(f)):t(f,a)}return F}var tt=la(!0),oa=la(!1),$r=hn(null),Qr=null,$n=null,ci=null;function fi(){ci=$n=Qr=null}function di(e){var n=$r.current;z($r),e._currentValue=n}function Eo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Zn(e,n){Qr=e,ci=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function Ee(e){var n=e._currentValue;if(ci!==e)if(e={context:e,memoizedValue:n,next:null},$n===null){if(Qr===null)throw Error(g(308));$n=e,Qr.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return n}var xn=null;function pi(e){xn===null?xn=[e]:xn.push(e)}function ia(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,pi(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ge(e,r)}function Ge(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var qe=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ge(e,t)}return l=r.interleaved,l===null?(n.next=n,pi(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ge(e,t)}function Er(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,bo(e,t)}}function ws(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?l=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Kr(e,n,t,r){var l=e.updateQueue;qe=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,i===null?o=c:i.next=c,i=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=u))}if(o!==null){var h=l.baseState;i=0,p=c=u=null,s=o;do{var m=s.lane,S=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=n,S=t,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(S,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(S,h,m):w,m==null)break e;h=V({},h,m);break e;case 2:qe=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else S={eventTime:S,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=S,u=h):p=p.next=S,i|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(p===null&&(u=h),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=p,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else o===null&&(l.shared.lanes=0);Rn|=i,e.lanes=i,e.memoizedState=h}}function ks(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var bt={},Ue=hn(bt),Wt=hn(bt),$t=hn(bt);function Cn(e){if(e===bt)throw Error(g(174));return e}function hi(e,n){switch(O($t,n),O(Wt,e),O(Ue,bt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ro(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ro(n,e)}z(Ue),O(Ue,n)}function rt(){z(Ue),z(Wt),z($t)}function ua(e){Cn($t.current);var n=Cn(Ue.current),t=ro(n,e.type);n!==t&&(O(Wt,e),O(Ue,t))}function vi(e){Wt.current===e&&(z(Ue),z(Wt))}var U=hn(0);function Gr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ul=[];function gi(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Tr=Xe.ReactCurrentDispatcher,Hl=Xe.ReactCurrentBatchConfig,Nn=0,H=null,G=null,Y=null,Jr=!1,Nt=!1,Qt=0,td=0;function ne(){throw Error(g(321))}function yi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Oe(e[t],n[t]))return!1;return!0}function Si(e,n,t,r,l,o){if(Nn=o,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tr.current=e===null||e.memoizedState===null?id:sd,e=t(r,l),Nt){o=0;do{if(Nt=!1,Qt=0,25<=o)throw Error(g(301));o+=1,Y=G=null,n.updateQueue=null,Tr.current=ud,e=t(r,l)}while(Nt)}if(Tr.current=Xr,n=G!==null&&G.next!==null,Nn=0,Y=G=H=null,Jr=!1,n)throw Error(g(300));return e}function wi(){var e=Qt!==0;return Qt=0,e}function ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?H.memoizedState=Y=e:Y=Y.next=e,Y}function Te(){if(G===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var n=Y===null?H.memoizedState:Y.next;if(n!==null)Y=n,G=e;else{if(e===null)throw Error(g(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},Y===null?H.memoizedState=Y=e:Y=Y.next=e}return Y}function Kt(e,n){return typeof n=="function"?n(e):n}function Vl(e){var n=Te(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=t.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,t.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,c=o;do{var p=c.lane;if((Nn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,i=r):u=u.next=h,H.lanes|=p,Rn|=p}c=c.next}while(c!==null&&c!==o);u===null?i=r:u.next=s,Oe(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do o=l.lane,H.lanes|=o,Rn|=o,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bl(e){var n=Te(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Oe(o,n.memoizedState)||(ce=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function aa(){}function ca(e,n){var t=H,r=Te(),l=n(),o=!Oe(r.memoizedState,l);if(o&&(r.memoizedState=l,ce=!0),r=r.queue,ki(pa.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Gt(9,da.bind(null,t,r,l,n),void 0,null),Z===null)throw Error(g(349));Nn&30||fa(t,n,l)}return l}function fa(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function da(e,n,t,r){n.value=t,n.getSnapshot=r,ma(n)&&ha(e)}function pa(e,n,t){return t(function(){ma(n)&&ha(e)})}function ma(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Oe(e,t)}catch{return!0}}function ha(e){var n=Ge(e,1);n!==null&&Me(n,e,1,-1)}function xs(e){var n=ze();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},n.queue=e,e=e.dispatch=od.bind(null,H,e),[n.memoizedState,e]}function Gt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function va(){return Te().memoizedState}function Pr(e,n,t,r){var l=ze();H.flags|=e,l.memoizedState=Gt(1|n,t,void 0,r===void 0?null:r)}function al(e,n,t,r){var l=Te();r=r===void 0?null:r;var o=void 0;if(G!==null){var i=G.memoizedState;if(o=i.destroy,r!==null&&yi(r,i.deps)){l.memoizedState=Gt(n,t,o,r);return}}H.flags|=e,l.memoizedState=Gt(1|n,t,o,r)}function Cs(e,n){return Pr(8390656,8,e,n)}function ki(e,n){return al(2048,8,e,n)}function ga(e,n){return al(4,2,e,n)}function ya(e,n){return al(4,4,e,n)}function Sa(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wa(e,n,t){return t=t!=null?t.concat([e]):null,al(4,4,Sa.bind(null,n,e),t)}function xi(){}function ka(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function xa(e,n){var t=Te();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ca(e,n,t){return Nn&21?(Oe(t,n)||(t=Nu(),H.lanes|=t,Rn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function rd(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),n()}finally{M=t,Hl.transition=r}}function Ea(){return Te().memoizedState}function ld(e,n,t){var r=cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ta(e))Pa(n,t);else if(t=ia(e,n,t,r),t!==null){var l=ie();Me(t,e,r,l),ja(t,n,r)}}function od(e,n,t){var r=cn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ta(e))Pa(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,t);if(l.hasEagerState=!0,l.eagerState=s,Oe(s,i)){var u=n.interleaved;u===null?(l.next=l,pi(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=ia(e,n,l,r),t!==null&&(l=ie(),Me(t,e,r,l),ja(t,n,r))}}function Ta(e){var n=e.alternate;return e===H||n!==null&&n===H}function Pa(e,n){Nt=Jr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ja(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,bo(e,t)}}var Xr={readContext:Ee,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},id={readContext:Ee,useCallback:function(e,n){return ze().memoizedState=[e,n===void 0?null:n],e},useContext:Ee,useEffect:Cs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Pr(4194308,4,Sa.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Pr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Pr(4,2,e,n)},useMemo:function(e,n){var t=ze();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=ze();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ld.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=ze();return e={current:e},n.memoizedState=e},useState:xs,useDebugValue:xi,useDeferredValue:function(e){return ze().memoizedState=e},useTransition:function(){var e=xs(!1),n=e[0];return e=rd.bind(null,e[1]),ze().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,l=ze();if(A){if(t===void 0)throw Error(g(407));t=t()}else{if(t=n(),Z===null)throw Error(g(349));Nn&30||fa(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Cs(pa.bind(null,r,o,e),[e]),r.flags|=2048,Gt(9,da.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=ze(),n=Z.identifierPrefix;if(A){var t=We,r=Be;t=(r&~(1<<32-De(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=td++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},sd={readContext:Ee,useCallback:ka,useContext:Ee,useEffect:ki,useImperativeHandle:wa,useInsertionEffect:ga,useLayoutEffect:ya,useMemo:xa,useReducer:Vl,useRef:va,useState:function(){return Vl(Kt)},useDebugValue:xi,useDeferredValue:function(e){var n=Te();return Ca(n,G.memoizedState,e)},useTransition:function(){var e=Vl(Kt)[0],n=Te().memoizedState;return[e,n]},useMutableSource:aa,useSyncExternalStore:ca,useId:Ea,unstable_isNewReconciler:!1},ud={readContext:Ee,useCallback:ka,useContext:Ee,useEffect:ki,useImperativeHandle:wa,useInsertionEffect:ga,useLayoutEffect:ya,useMemo:xa,useReducer:Bl,useRef:va,useState:function(){return Bl(Kt)},useDebugValue:xi,useDeferredValue:function(e){var n=Te();return G===null?n.memoizedState=e:Ca(n,G.memoizedState,e)},useTransition:function(){var e=Bl(Kt)[0],n=Te().memoizedState;return[e,n]},useMutableSource:aa,useSyncExternalStore:ca,useId:Ea,unstable_isNewReconciler:!1};function Ne(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function To(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var cl={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ie(),l=cn(e),o=$e(r,l);o.payload=n,t!=null&&(o.callback=t),n=un(e,o,l),n!==null&&(Me(n,e,l,r),Er(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ie(),l=cn(e),o=$e(r,l);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=un(e,o,l),n!==null&&(Me(n,e,l,r),Er(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ie(),r=cn(e),l=$e(t,r);l.tag=2,n!=null&&(l.callback=n),n=un(e,l,r),n!==null&&(Me(n,e,r,t),Er(n,e,r))}};function Es(e,n,t,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):n.prototype&&n.prototype.isPureReactComponent?!Ut(t,r)||!Ut(l,o):!0}function Na(e,n,t){var r=!1,l=pn,o=n.contextType;return typeof o=="object"&&o!==null?o=Ee(o):(l=de(n)?Pn:le.current,r=n.contextTypes,o=(r=r!=null)?et(e,l):pn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=cl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),n}function Ts(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&cl.enqueueReplaceState(n,n.state,null)}function Po(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},mi(e);var o=n.contextType;typeof o=="object"&&o!==null?l.context=Ee(o):(o=de(n)?Pn:le.current,l.context=et(e,o)),l.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(To(e,n,o,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&cl.enqueueReplaceState(l,l.state,null),Kr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function lt(e,n){try{var t="",r=n;do t+=Ic(r),r=r.return;while(r);var l=t}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:l,digest:null}}function Wl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function jo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Ra(e,n,t){t=$e(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Zr||(Zr=!0,Fo=r),jo(e,n)},t}function _a(e,n,t){t=$e(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){jo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){jo(e,n),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Ps(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Cd.bind(null,e,n,t),n.then(e,e))}function js(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ns(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=$e(-1,1),n.tag=2,un(t,n,1))),t.lanes|=1),e)}var cd=Xe.ReactCurrentOwner,ce=!1;function oe(e,n,t,r){n.child=e===null?oa(n,null,t,r):tt(n,e.child,t,r)}function Rs(e,n,t,r,l){t=t.render;var o=n.ref;return Zn(n,l),r=Si(e,n,t,r,o,l),t=wi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Je(e,n,l)):(A&&t&&si(n),n.flags|=1,oe(e,n,r,l),n.child)}function _s(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!_i(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,La(e,n,o,r,l)):(e=_r(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ut,t(i,r)&&e.ref===n.ref)return Je(e,n,l)}return n.flags|=1,e=fn(o,r),e.ref=n.ref,e.return=n,n.child=e}function La(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(Ut(o,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Je(e,n,l)}return No(e,n,t,r,l)}function Da(e,n,t){var r=n.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Kn,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(Kn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,O(Kn,me),me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,O(Kn,me),me|=r;return oe(e,n,l,t),n.child}function Ma(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function No(e,n,t,r,l){var o=de(t)?Pn:le.current;return o=et(n,o),Zn(n,l),t=Si(e,n,t,r,o,l),r=wi(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Je(e,n,l)):(A&&r&&si(n),n.flags|=1,oe(e,n,t,l),n.child)}function Ls(e,n,t,r,l){if(de(t)){var o=!0;Vr(n)}else o=!1;if(Zn(n,l),n.stateNode===null)jr(e,n),Na(n,t,r),Po(n,t,r,l),r=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var u=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=de(t)?Pn:le.current,c=et(n,c));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Ts(n,i,r,c),qe=!1;var m=n.memoizedState;i.state=m,Kr(n,r,i,l),u=n.memoizedState,s!==r||m!==u||fe.current||qe?(typeof p=="function"&&(To(n,t,p,r),u=n.memoizedState),(s=qe||Es(n,t,s,r,m,u,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),i.props=r,i.state=u,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,sa(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:Ne(n.type,s),i.props=c,h=n.pendingProps,m=i.context,u=t.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=de(t)?Pn:le.current,u=et(n,u));var S=t.getDerivedStateFromProps;(p=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||m!==u)&&Ts(n,i,r,u),qe=!1,m=n.memoizedState,i.state=m,Kr(n,r,i,l);var w=n.memoizedState;s!==h||m!==w||fe.current||qe?(typeof S=="function"&&(To(n,t,S,r),w=n.memoizedState),(c=qe||Es(n,t,c,r,m,w,u)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,u)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),i.props=r,i.state=w,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ro(e,n,t,r,o,l)}function Ro(e,n,t,r,l,o){Ma(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&vs(n,t,!1),Je(e,n,o);r=n.stateNode,cd.current=n;var s=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=tt(n,e.child,null,o),n.child=tt(n,null,s,o)):oe(e,n,s,o),n.memoizedState=r.state,l&&vs(n,t,!0),n.child}function Oa(e){var n=e.stateNode;n.pendingContext?hs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&hs(e,n.context,!1),hi(e,n.containerInfo)}function Ds(e,n,t,r,l){return nt(),ai(l),n.flags|=256,oe(e,n,t,r),n.child}var _o={dehydrated:null,treeContext:null,retryLane:0};function Lo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ia(e,n,t){var r=n.pendingProps,l=U.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(U,l&1),e===null)return Co(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,o?(r=n.mode,o=n.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=pl(i,r,0,null),e=Tn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Lo(t),n.memoizedState=_o,e):Ci(n,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return fd(e,n,i,r,s,l,t);if(o){o=r.fallback,i=n.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=fn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=fn(s,o):(o=Tn(o,i,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,i=e.child.memoizedState,i=i===null?Lo(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~t,n.memoizedState=_o,r}return o=e.child,e=o.sibling,r=fn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ci(e,n){return n=pl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function hr(e,n,t,r){return r!==null&&ai(r),tt(n,e.child,null,t),e=Ci(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fd(e,n,t,r,l,o,i){if(t)return n.flags&256?(n.flags&=-257,r=Wl(Error(g(422))),hr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,l=n.mode,r=pl({mode:"visible",children:r.children},l,0,null),o=Tn(o,l,i,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&tt(n,e.child,null,i),n.child.memoizedState=Lo(i),n.memoizedState=_o,o);if(!(n.mode&1))return hr(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(g(419)),r=Wl(o,r,void 0),hr(e,n,i,r)}if(s=(i&e.childLanes)!==0,ce||s){if(r=Z,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ge(e,l),Me(r,e,l,-1))}return Ri(),r=Wl(Error(g(421))),hr(e,n,i,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Ed.bind(null,e),l._reactRetry=n,null):(e=o.treeContext,he=sn(l.nextSibling),ve=n,A=!0,_e=null,e!==null&&(we[ke++]=Be,we[ke++]=We,we[ke++]=jn,Be=e.id,We=e.overflow,jn=n),n=Ci(n,r.children),n.flags|=4096,n)}function Ms(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Eo(e.return,n,t)}function $l(e,n,t,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=l)}function za(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;if(oe(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ms(e,t,n);else if(e.tag===19)Ms(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Gr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),$l(n,!1,l,t,o);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Gr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}$l(n,!0,t,null,o);break;case"together":$l(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function jr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Je(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Rn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(g(153));if(n.child!==null){for(e=n.child,t=fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function dd(e,n,t){switch(n.tag){case 3:Oa(n),nt();break;case 5:ua(n);break;case 1:de(n.type)&&Vr(n);break;case 4:hi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;O($r,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Ia(e,n,t):(O(U,U.current&1),e=Je(e,n,t),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return za(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,Da(e,n,t)}return Je(e,n,t)}var Fa,Do,Aa,Ua;Fa=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Do=function(){};Aa=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Cn(Ue.current);var o=null;switch(t){case"input":l=bl(e,l),r=bl(e,r),o=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),o=[];break;case"textarea":l=to(e,l),r=to(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}lo(t,r);var i;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Dt.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(t||(t={}),t[i]=u[i])}else t||(o||(o=[]),o.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Dt.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&I("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};Ua=function(e,n,t,r){t!==r&&(n.flags|=4)};function gt(e,n){if(!A)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function pd(e,n,t){var r=n.pendingProps;switch(ui(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return de(n.type)&&Hr(),te(n),null;case 3:return r=n.stateNode,rt(),z(fe),z(le),gi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_e!==null&&(Ho(_e),_e=null))),Do(e,n),te(n),null;case 5:vi(n);var l=Cn($t.current);if(t=n.type,e!==null&&n.stateNode!=null)Aa(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(g(166));return te(n),null}if(e=Cn(Ue.current),pr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Fe]=n,r[Bt]=o,e=(n.mode&1)!==0,t){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<xt.length;l++)I(xt[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Bi(r,o),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},I("invalid",r);break;case"textarea":$i(r,o),I("invalid",r)}lo(t,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,s,e),l=["children",""+s]):Dt.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&I("scroll",r)}switch(t){case"input":lr(r),Wi(r,o,!0);break;case"textarea":lr(r),Qi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ur)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Fe]=n,e[Bt]=r,Fa(e,n,!1,!1),n.stateNode=e;e:{switch(i=oo(t,r),t){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<xt.length;l++)I(xt[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":Bi(e,r),l=bl(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":$i(e,r),l=to(e,r),I("invalid",e);break;default:l=r}lo(t,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?vu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&mu(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Mt(e,u):typeof u=="number"&&Mt(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Dt.hasOwnProperty(o)?u!=null&&o==="onScroll"&&I("scroll",e):u!=null&&Go(e,o,u,i))}switch(t){case"input":lr(e),Wi(e,r,!1);break;case"textarea":lr(e),Qi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Ua(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(g(166));if(t=Cn($t.current),Cn(Ue.current),pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Fe]=n,(o=r.nodeValue!==t)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Fe]=n,n.stateNode=r}return te(n),null;case 13:if(z(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&he!==null&&n.mode&1&&!(n.flags&128))ra(),nt(),n.flags|=98560,o=!1;else if(o=pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(g(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(g(317));o[Fe]=n}else nt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),o=!1}else _e!==null&&(Ho(_e),_e=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?J===0&&(J=3):Ri())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return rt(),Do(e,n),e===null&&Ht(n.stateNode.containerInfo),te(n),null;case 10:return di(n.type._context),te(n),null;case 17:return de(n.type)&&Hr(),te(n),null;case 19:if(z(U),o=n.memoizedState,o===null)return te(n),null;if(r=(n.flags&128)!==0,i=o.rendering,i===null)if(r)gt(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Gr(e),i!==null){for(n.flags|=128,gt(o,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&Q()>ot&&(n.flags|=128,r=!0,gt(o,!1),n.lanes=4194304)}else{if(!r)if(e=Gr(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!A)return te(n),null}else 2*Q()-o.renderingStartTime>ot&&t!==1073741824&&(n.flags|=128,r=!0,gt(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(t=o.last,t!==null?t.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Q(),n.sibling=null,t=U.current,O(U,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Ni(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(g(156,n.tag))}function md(e,n){switch(ui(n),n.tag){case 1:return de(n.type)&&Hr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rt(),z(fe),z(le),gi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return vi(n),null;case 13:if(z(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(g(340));nt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(U),null;case 4:return rt(),null;case 10:return di(n.type._context),null;case 22:case 23:return Ni(),null;case 24:return null;default:return null}}var vr=!1,re=!1,hd=typeof WeakSet=="function"?WeakSet:Set,x=null;function Qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){B(e,n,r)}else t.current=null}function Mo(e,n,t){try{t()}catch(r){B(e,n,r)}}var Os=!1;function vd(e,n){if(vo=zr,e=$u(),ii(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var i=0,s=-1,u=-1,c=0,p=0,h=e,m=null;n:for(;;){for(var S;h!==t||l!==0&&h.nodeType!==3||(s=i+l),h!==o||r!==0&&h.nodeType!==3||(u=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(S=h.firstChild)!==null;)m=h,h=S;for(;;){if(h===e)break n;if(m===t&&++c===l&&(s=i),m===o&&++p===r&&(u=i),(S=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=S}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(go={focusedElem:e,selectionRange:t},zr=!1,x=n;x!==null;)if(n=x,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,x=e;else for(;x!==null;){n=x;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,F=w.memoizedState,f=n.stateNode,a=f.getSnapshotBeforeUpdate(n.elementType===n.type?k:Ne(n.type,k),F);f.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){B(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,x=e;break}x=n.return}return w=Os,Os=!1,w}function Rt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Mo(n,t,o)}l=l.next}while(l!==r)}}function fl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Oo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ha(e){var n=e.alternate;n!==null&&(e.alternate=null,Ha(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fe],delete n[Bt],delete n[wo],delete n[qf],delete n[bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Va(e){return e.tag===5||e.tag===3||e.tag===4}function Is(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Va(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Io(e,n,t),e=e.sibling;e!==null;)Io(e,n,t),e=e.sibling}function zo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zo(e,n,t),e=e.sibling;e!==null;)zo(e,n,t),e=e.sibling}var q=null,Re=!1;function Ye(e,n,t){for(t=t.child;t!==null;)Ba(e,n,t),t=t.sibling}function Ba(e,n,t){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(rl,t)}catch{}switch(t.tag){case 5:re||Qn(t,n);case 6:var r=q,l=Re;q=null,Ye(e,n,t),q=r,Re=l,q!==null&&(Re?(e=q,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):q.removeChild(t.stateNode));break;case 18:q!==null&&(Re?(e=q,t=t.stateNode,e.nodeType===8?Fl(e.parentNode,t):e.nodeType===1&&Fl(e,t),Ft(e)):Fl(q,t.stateNode));break;case 4:r=q,l=Re,q=t.stateNode.containerInfo,Re=!0,Ye(e,n,t),q=r,Re=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Mo(t,n,i),l=l.next}while(l!==r)}Ye(e,n,t);break;case 1:if(!re&&(Qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){B(t,n,s)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Ye(e,n,t),re=r):Ye(e,n,t);break;default:Ye(e,n,t)}}function zs(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new hd),n.forEach(function(r){var l=Td.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function je(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,Re=!1;break e;case 3:q=s.stateNode.containerInfo,Re=!0;break e;case 4:q=s.stateNode.containerInfo,Re=!0;break e}s=s.return}if(q===null)throw Error(g(160));Ba(o,i,l),q=null,Re=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){B(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wa(n,e),n=n.sibling}function Wa(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(n,e),Ie(e),r&4){try{Rt(3,e,e.return),fl(3,e)}catch(k){B(e,e.return,k)}try{Rt(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:je(n,e),Ie(e),r&512&&t!==null&&Qn(t,t.return);break;case 5:if(je(n,e),Ie(e),r&512&&t!==null&&Qn(t,t.return),e.flags&32){var l=e.stateNode;try{Mt(l,"")}catch(k){B(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=t!==null?t.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&fu(l,o),oo(s,i);var c=oo(s,o);for(i=0;i<u.length;i+=2){var p=u[i],h=u[i+1];p==="style"?vu(l,h):p==="dangerouslySetInnerHTML"?mu(l,h):p==="children"?Mt(l,h):Go(l,p,h,c)}switch(s){case"input":eo(l,o);break;case"textarea":du(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Gn(l,!!o.multiple,S,!1):m!==!!o.multiple&&(o.defaultValue!=null?Gn(l,!!o.multiple,o.defaultValue,!0):Gn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Bt]=o}catch(k){B(e,e.return,k)}}break;case 6:if(je(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){B(e,e.return,k)}}break;case 3:if(je(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ft(n.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:je(n,e),Ie(e);break;case 13:je(n,e),Ie(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Pi=Q())),r&4&&zs(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||p,je(n,e),re=c):je(n,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(x=e,p=e.child;p!==null;){for(h=x=p;x!==null;){switch(m=x,S=m.child,m.tag){case 0:case 11:case 14:case 15:Rt(4,m,m.return);break;case 1:Qn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(k){B(r,t,k)}}break;case 5:Qn(m,m.return);break;case 22:if(m.memoizedState!==null){As(h);continue}}S!==null?(S.return=m,x=S):As(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,u=h.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=hu("display",i))}catch(k){B(e,e.return,k)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){B(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:je(n,e),Ie(e),r&4&&zs(e);break;case 21:break;default:je(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Va(t)){var r=t;break e}t=t.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mt(l,""),r.flags&=-33);var o=Is(e);zo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Is(e);Io(e,s,i);break;default:throw Error(g(161))}}catch(u){B(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gd(e,n,t){x=e,$a(e)}function $a(e,n,t){for(var r=(e.mode&1)!==0;x!==null;){var l=x,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||vr;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||re;s=vr;var c=re;if(vr=i,(re=u)&&!c)for(x=l;x!==null;)i=x,u=i.child,i.tag===22&&i.memoizedState!==null?Us(l):u!==null?(u.return=i,x=u):Us(l);for(;o!==null;)x=o,$a(o),o=o.sibling;x=l,vr=s,re=c}Fs(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,x=o):Fs(e)}}function Fs(e){for(;x!==null;){var n=x;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||fl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Ne(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&ks(n,o,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ks(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Ft(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}re||n.flags&512&&Oo(n)}catch(m){B(n,n.return,m)}}if(n===e){x=null;break}if(t=n.sibling,t!==null){t.return=n.return,x=t;break}x=n.return}}function As(e){for(;x!==null;){var n=x;if(n===e){x=null;break}var t=n.sibling;if(t!==null){t.return=n.return,x=t;break}x=n.return}}function Us(e){for(;x!==null;){var n=x;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fl(4,n)}catch(u){B(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){B(n,l,u)}}var o=n.return;try{Oo(n)}catch(u){B(n,o,u)}break;case 5:var i=n.return;try{Oo(n)}catch(u){B(n,i,u)}}}catch(u){B(n,n.return,u)}if(n===e){x=null;break}var s=n.sibling;if(s!==null){s.return=n.return,x=s;break}x=n.return}}var yd=Math.ceil,Yr=Xe.ReactCurrentDispatcher,Ei=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,D=0,Z=null,K=null,b=0,me=0,Kn=hn(0),J=0,Jt=null,Rn=0,dl=0,Ti=0,_t=null,ae=null,Pi=0,ot=1/0,He=null,Zr=!1,Fo=null,an=null,gr=!1,tn=null,qr=0,Lt=0,Ao=null,Nr=-1,Rr=0;function ie(){return D&6?Q():Nr!==-1?Nr:Nr=Q()}function cn(e){return e.mode&1?D&2&&b!==0?b&-b:nd.transition!==null?(Rr===0&&(Rr=Nu()),Rr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Iu(e.type)),e):1}function Me(e,n,t,r){if(50<Lt)throw Lt=0,Ao=null,Error(g(185));Yt(e,t,r),(!(D&2)||e!==Z)&&(e===Z&&(!(D&2)&&(dl|=t),J===4&&en(e,b)),pe(e,r),t===1&&D===0&&!(n.mode&1)&&(ot=Q()+500,ul&&vn()))}function pe(e,n){var t=e.callbackNode;ef(e,n);var r=Ir(e,e===Z?b:0);if(r===0)t!==null&&Ji(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ji(t),n===1)e.tag===0?ed(Hs.bind(null,e)):ea(Hs.bind(null,e)),Yf(function(){!(D&6)&&vn()}),t=null;else{switch(Ru(r)){case 1:t=qo;break;case 4:t=Pu;break;case 16:t=Or;break;case 536870912:t=ju;break;default:t=Or}t=qa(t,Qa.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Qa(e,n){if(Nr=-1,Rr=0,D&6)throw Error(g(327));var t=e.callbackNode;if(qn()&&e.callbackNode!==t)return null;var r=Ir(e,e===Z?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=br(e,r);else{n=r;var l=D;D|=2;var o=Ga();(Z!==e||b!==n)&&(He=null,ot=Q()+500,En(e,n));do try{kd();break}catch(s){Ka(e,s)}while(!0);fi(),Yr.current=o,D=l,K!==null?n=0:(Z=null,b=0,n=J)}if(n!==0){if(n===2&&(l=co(e),l!==0&&(r=l,n=Uo(e,l))),n===1)throw t=Jt,En(e,0),en(e,r),pe(e,Q()),t;if(n===6)en(e,r);else{if(l=e.current.alternate,!(r&30)&&!Sd(l)&&(n=br(e,r),n===2&&(o=co(e),o!==0&&(r=o,n=Uo(e,o))),n===1))throw t=Jt,En(e,0),en(e,r),pe(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(g(345));case 2:wn(e,ae,He);break;case 3:if(en(e,r),(r&130023424)===r&&(n=Pi+500-Q(),10<n)){if(Ir(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=So(wn.bind(null,e,ae,He),n);break}wn(e,ae,He);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var i=31-De(r);o=1<<i,i=n[i],i>l&&(l=i),r&=~o}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yd(r/1960))-r,10<r){e.timeoutHandle=So(wn.bind(null,e,ae,He),r);break}wn(e,ae,He);break;case 5:wn(e,ae,He);break;default:throw Error(g(329))}}}return pe(e,Q()),e.callbackNode===t?Qa.bind(null,e):null}function Uo(e,n){var t=_t;return e.current.memoizedState.isDehydrated&&(En(e,n).flags|=256),e=br(e,n),e!==2&&(n=ae,ae=t,n!==null&&Ho(n)),e}function Ho(e){ae===null?ae=e:ae.push.apply(ae,e)}function Sd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Oe(o(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Ti,n&=~dl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-De(n),r=1<<t;e[t]=-1,n&=~r}}function Hs(e){if(D&6)throw Error(g(327));qn();var n=Ir(e,0);if(!(n&1))return pe(e,Q()),null;var t=br(e,n);if(e.tag!==0&&t===2){var r=co(e);r!==0&&(n=r,t=Uo(e,r))}if(t===1)throw t=Jt,En(e,0),en(e,n),pe(e,Q()),t;if(t===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wn(e,ae,He),pe(e,Q()),null}function ji(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(ot=Q()+500,ul&&vn())}}function _n(e){tn!==null&&tn.tag===0&&!(D&6)&&qn();var n=D;D|=1;var t=Ce.transition,r=M;try{if(Ce.transition=null,M=1,e)return e()}finally{M=r,Ce.transition=t,D=n,!(D&6)&&vn()}}function Ni(){me=Kn.current,z(Kn)}function En(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xf(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:rt(),z(fe),z(le),gi();break;case 5:vi(r);break;case 4:rt();break;case 13:z(U);break;case 19:z(U);break;case 10:di(r.type._context);break;case 22:case 23:Ni()}t=t.return}if(Z=e,K=e=fn(e.current,null),b=me=n,J=0,Jt=null,Ti=dl=Rn=0,ae=_t=null,xn!==null){for(n=0;n<xn.length;n++)if(t=xn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}t.pending=r}xn=null}return e}function Ka(e,n){do{var t=K;try{if(fi(),Tr.current=Xr,Jr){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Jr=!1}if(Nn=0,Y=G=H=null,Nt=!1,Qt=0,Ei.current=null,t===null||t.return===null){J=1,Jt=n,K=null;break}e:{var o=e,i=t.return,s=t,u=n;if(n=b,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=s,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=js(i);if(S!==null){S.flags&=-257,Ns(S,i,s,o,n),S.mode&1&&Ps(o,c,n),n=S,u=c;var w=n.updateQueue;if(w===null){var k=new Set;k.add(u),n.updateQueue=k}else w.add(u);break e}else{if(!(n&1)){Ps(o,c,n),Ri();break e}u=Error(g(426))}}else if(A&&s.mode&1){var F=js(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ns(F,i,s,o,n),ai(lt(u,s));break e}}o=u=lt(u,s),J!==4&&(J=2),_t===null?_t=[o]:_t.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var f=Ra(o,u,n);ws(o,f);break e;case 1:s=u;var a=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(an===null||!an.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var v=_a(o,s,n);ws(o,v);break e}}o=o.return}while(o!==null)}Xa(t)}catch(C){n=C,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Ga(){var e=Yr.current;return Yr.current=Xr,e===null?Xr:e}function Ri(){(J===0||J===3||J===2)&&(J=4),Z===null||!(Rn&268435455)&&!(dl&268435455)||en(Z,b)}function br(e,n){var t=D;D|=2;var r=Ga();(Z!==e||b!==n)&&(He=null,En(e,n));do try{wd();break}catch(l){Ka(e,l)}while(!0);if(fi(),D=t,Yr.current=r,K!==null)throw Error(g(261));return Z=null,b=0,J}function wd(){for(;K!==null;)Ja(K)}function kd(){for(;K!==null&&!Qc();)Ja(K)}function Ja(e){var n=Za(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Xa(e):K=n,Ei.current=null}function Xa(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=md(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(t=pd(t,n,me),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);J===0&&(J=5)}function wn(e,n,t){var r=M,l=Ce.transition;try{Ce.transition=null,M=1,xd(e,n,t,r)}finally{Ce.transition=l,M=r}return null}function xd(e,n,t,r){do qn();while(tn!==null);if(D&6)throw Error(g(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(nf(e,o),e===Z&&(K=Z=null,b=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gr||(gr=!0,qa(Or,function(){return qn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var i=M;M=1;var s=D;D|=4,Ei.current=null,vd(e,t),Wa(t,e),Bf(go),zr=!!vo,go=vo=null,e.current=t,gd(t),Kc(),D=s,M=i,Ce.transition=o}else e.current=t;if(gr&&(gr=!1,tn=e,qr=l),o=e.pendingLanes,o===0&&(an=null),Xc(t.stateNode),pe(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Zr)throw Zr=!1,e=Fo,Fo=null,e;return qr&1&&e.tag!==0&&qn(),o=e.pendingLanes,o&1?e===Ao?Lt++:(Lt=0,Ao=e):Lt=0,vn(),null}function qn(){if(tn!==null){var e=Ru(qr),n=Ce.transition,t=M;try{if(Ce.transition=null,M=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,qr=0,D&6)throw Error(g(331));var l=D;for(D|=4,x=e.current;x!==null;){var o=x,i=o.child;if(x.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(x=c;x!==null;){var p=x;switch(p.tag){case 0:case 11:case 15:Rt(8,p,o)}var h=p.child;if(h!==null)h.return=p,x=h;else for(;x!==null;){p=x;var m=p.sibling,S=p.return;if(Ha(p),p===c){x=null;break}if(m!==null){m.return=S,x=m;break}x=S}}}var w=o.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}x=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,x=i;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rt(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,x=f;break e}x=o.return}}var a=e.current;for(x=a;x!==null;){i=x;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,x=d;else e:for(i=a;x!==null;){if(s=x,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fl(9,s)}}catch(C){B(s,s.return,C)}if(s===i){x=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,x=v;break e}x=s.return}}if(D=l,vn(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(rl,e)}catch{}r=!0}return r}finally{M=t,Ce.transition=n}}return!1}function Vs(e,n,t){n=lt(t,n),n=Ra(e,n,1),e=un(e,n,1),n=ie(),e!==null&&(Yt(e,1,n),pe(e,n))}function B(e,n,t){if(e.tag===3)Vs(e,e,t);else for(;n!==null;){if(n.tag===3){Vs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=lt(t,e),e=_a(n,e,1),n=un(n,e,1),e=ie(),n!==null&&(Yt(n,1,e),pe(n,e));break}}n=n.return}}function Cd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ie(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(b&t)===t&&(J===4||J===3&&(b&130023424)===b&&500>Q()-Pi?En(e,0):Ti|=t),pe(e,n)}function Ya(e,n){n===0&&(e.mode&1?(n=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):n=1);var t=ie();e=Ge(e,n),e!==null&&(Yt(e,n,t),pe(e,t))}function Ed(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ya(e,t)}function Td(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(n),Ya(e,t)}var Za;Za=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||fe.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,dd(e,n,t);ce=!!(e.flags&131072)}else ce=!1,A&&n.flags&1048576&&na(n,Wr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;jr(e,n),e=n.pendingProps;var l=et(n,le.current);Zn(n,t),l=Si(null,n,r,e,l,t);var o=wi();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,de(r)?(o=!0,Vr(n)):o=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mi(n),l.updater=cl,n.stateNode=l,l._reactInternals=n,Po(n,r,e,t),n=Ro(null,n,r,!0,o,t)):(n.tag=0,A&&o&&si(n),oe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(jr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=jd(r),e=Ne(r,e),l){case 0:n=No(null,n,r,e,t);break e;case 1:n=Ls(null,n,r,e,t);break e;case 11:n=Rs(null,n,r,e,t);break e;case 14:n=_s(null,n,r,Ne(r.type,e),t);break e}throw Error(g(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),No(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),Ls(e,n,r,l,t);case 3:e:{if(Oa(n),e===null)throw Error(g(387));r=n.pendingProps,o=n.memoizedState,l=o.element,sa(e,n),Kr(n,r,null,t);var i=n.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){l=lt(Error(g(423)),n),n=Ds(e,n,r,t,l);break e}else if(r!==l){l=lt(Error(g(424)),n),n=Ds(e,n,r,t,l);break e}else for(he=sn(n.stateNode.containerInfo.firstChild),ve=n,A=!0,_e=null,t=oa(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nt(),r===l){n=Je(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return ua(n),e===null&&Co(n),r=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,yo(r,l)?i=null:o!==null&&yo(r,o)&&(n.flags|=32),Ma(e,n),oe(e,n,i,t),n.child;case 6:return e===null&&Co(n),null;case 13:return Ia(e,n,t);case 4:return hi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=tt(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),Rs(e,n,r,l,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,i=l.value,O($r,r._currentValue),r._currentValue=i,o!==null)if(Oe(o.value,i)){if(o.children===l.children&&!fe.current){n=Je(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=$e(-1,t&-t),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),Eo(o.return,t,n),s.lanes|=t;break}u=u.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(g(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Eo(i,t,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}oe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Zn(n,t),l=Ee(l),r=r(l),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,l=Ne(r,n.pendingProps),l=Ne(r.type,l),_s(e,n,r,l,t);case 15:return La(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),jr(e,n),n.tag=1,de(r)?(e=!0,Vr(n)):e=!1,Zn(n,t),Na(n,r,l),Po(n,r,l,t),Ro(null,n,r,!0,e,t);case 19:return za(e,n,t);case 22:return Da(e,n,t)}throw Error(g(156,n.tag))};function qa(e,n){return Tu(e,n)}function Pd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,n,t,r){return new Pd(e,n,t,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jd(e){if(typeof e=="function")return _i(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===Yo)return 14}return 2}function fn(e,n){var t=e.alternate;return t===null?(t=xe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _r(e,n,t,r,l,o){var i=2;if(r=e,typeof e=="function")_i(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case zn:return Tn(t.children,l,o,n);case Jo:i=8,l|=8;break;case Xl:return e=xe(12,t,n,l|2),e.elementType=Xl,e.lanes=o,e;case Yl:return e=xe(13,t,n,l),e.elementType=Yl,e.lanes=o,e;case Zl:return e=xe(19,t,n,l),e.elementType=Zl,e.lanes=o,e;case uu:return pl(t,l,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case iu:i=10;break e;case su:i=9;break e;case Xo:i=11;break e;case Yo:i=14;break e;case Ze:i=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return n=xe(i,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function Tn(e,n,t,r){return e=xe(7,e,r,n),e.lanes=t,e}function pl(e,n,t,r){return e=xe(22,e,r,n),e.elementType=uu,e.lanes=t,e.stateNode={isHidden:!1},e}function Ql(e,n,t){return e=xe(6,e,null,n),e.lanes=t,e}function Kl(e,n,t){return n=xe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Nd(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Li(e,n,t,r,l,o,i,s,u){return e=new Nd(e,n,t,s,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=xe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(o),e}function Rd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ba(e){if(!e)return pn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(g(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(de(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(g(171))}if(e.tag===1){var t=e.type;if(de(t))return bu(e,t,n)}return n}function ec(e,n,t,r,l,o,i,s,u){return e=Li(t,r,!0,e,l,o,i,s,u),e.context=ba(null),t=e.current,r=ie(),l=cn(t),o=$e(r,l),o.callback=n??null,un(t,o,l),e.current.lanes=l,Yt(e,l,r),pe(e,r),e}function ml(e,n,t,r){var l=n.current,o=ie(),i=cn(l);return t=ba(t),n.context===null?n.context=t:n.pendingContext=t,n=$e(o,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=un(l,n,i),e!==null&&(Me(e,l,i,o),Er(e,l,i)),i}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Di(e,n){Bs(e,n),(e=e.alternate)&&Bs(e,n)}function _d(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mi(e){this._internalRoot=e}hl.prototype.render=Mi.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(g(409));ml(e,n,null,null)};hl.prototype.unmount=Mi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_n(function(){ml(null,e,null,null)}),n[Ke]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Du();e={blockedOn:null,target:e,priority:n};for(var t=0;t<be.length&&n!==0&&n<be[t].priority;t++);be.splice(t,0,e),t===0&&Ou(e)}};function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ws(){}function Ld(e,n,t,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=el(i);o.call(c)}}var i=ec(n,r,e,0,null,!1,!1,"",Ws);return e._reactRootContainer=i,e[Ke]=i.current,Ht(e.nodeType===8?e.parentNode:e),_n(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=el(u);s.call(c)}}var u=Li(e,0,!1,null,null,!1,!1,"",Ws);return e._reactRootContainer=u,e[Ke]=u.current,Ht(e.nodeType===8?e.parentNode:e),_n(function(){ml(n,u,t,r)}),u}function gl(e,n,t,r,l){var o=t._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=el(i);s.call(u)}}ml(n,i,e,l)}else i=Ld(t,n,e,l,r);return el(i)}_u=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kt(n.pendingLanes);t!==0&&(bo(n,t|1),pe(n,Q()),!(D&6)&&(ot=Q()+500,vn()))}break;case 13:_n(function(){var r=Ge(e,1);if(r!==null){var l=ie();Me(r,e,1,l)}}),Di(e,1)}};ei=function(e){if(e.tag===13){var n=Ge(e,134217728);if(n!==null){var t=ie();Me(n,e,134217728,t)}Di(e,134217728)}};Lu=function(e){if(e.tag===13){var n=cn(e),t=Ge(e,n);if(t!==null){var r=ie();Me(t,e,n,r)}Di(e,n)}};Du=function(){return M};Mu=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};so=function(e,n,t){switch(n){case"input":if(eo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=sl(r);if(!l)throw Error(g(90));cu(r),eo(r,l)}}}break;case"textarea":du(e,t);break;case"select":n=t.value,n!=null&&Gn(e,!!t.multiple,n,!1)}};Su=ji;wu=_n;var Dd={usingClientEntryPoint:!1,Events:[qt,Hn,sl,gu,yu,ji]},yt={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Md={bundleType:yt.bundleType,version:yt.version,rendererPackageName:yt.rendererPackageName,rendererConfig:yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cu(e),e===null?null:e.stateNode},findFiberByHostInstance:yt.findFiberByHostInstance||_d,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{rl=yr.inject(Md),Ae=yr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dd;ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oi(n))throw Error(g(200));return Rd(e,n,null,t)};ye.createRoot=function(e,n){if(!Oi(e))throw Error(g(299));var t=!1,r="",l=nc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Li(e,1,!1,null,null,t,!1,r,l),e[Ke]=n.current,Ht(e.nodeType===8?e.parentNode:e),new Mi(n)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Cu(n),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return _n(e)};ye.hydrate=function(e,n,t){if(!vl(n))throw Error(g(200));return gl(null,e,n,!0,t)};ye.hydrateRoot=function(e,n,t){if(!Oi(e))throw Error(g(405));var r=t!=null&&t.hydratedSources||null,l=!1,o="",i=nc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=ec(n,null,e,1,t??null,l,!1,o,i),e[Ke]=n.current,Ht(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new hl(n)};ye.render=function(e,n,t){if(!vl(n))throw Error(g(200));return gl(null,e,n,!1,t)};ye.unmountComponentAtNode=function(e){if(!vl(e))throw Error(g(40));return e._reactRootContainer?(_n(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ye.unstable_batchedUpdates=ji;ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!vl(t))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return gl(e,n,t,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),tu.exports=ye;var Od=tu.exports,$s=Od;Gl.createRoot=$s.createRoot,Gl.hydrateRoot=$s.hydrateRoot;const nl={1:{label:"INTERN",color:"#8b949e"},2:{label:"JUNIOR",color:"#3fb950"},3:{label:"MIDDLE",color:"#d29922"},4:{label:"SENIOR",color:"#f85149"}},Id=[{id:"js",title:"JS",icon:"⚡",color:"#F0DB4F",topics:[{name:"Определение контекста выполнения, случаи применения",level:"2",content:`**Контекст выполнения (Execution Context)** — структура, которая создаётся при каждом вызове функции.

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
5. Если return объект → вернётся он; если примитив/ничего → свой объект`,score:3.5},{name:"Вычисление контекста, его значение по умолчанию",level:"2",content:"**Reference Type** — внутренний тип спецификации. При вычислении `obj.method` движок получает:\n```\n{ base: obj, name: 'method', strict: false }\n```\n\n**GetValue()** — внутренняя операция, которая извлекает значение из Reference Type, уничтожая base.\n\nВызывается при: присваивании (`=`), логических операторах (`||`, `&&`), операторе запятая.\n**НЕ вызывается** при группировке `()`.\n\n```js\nobj.method()              // Reference Type жив → this = obj\n(obj.method)()            // группировка не ломает → this = obj\n(obj.method = obj.method)() // присваивание → GetValue() → this = window\n(false || obj.method)()   // || → GetValue() → this = window\n```\n\n**Boxing (нестрогий режим):**\n• `null` / `undefined` → `window`\n• Примитив → обёртка: `7` → `Number{7}`\n\n**Strict mode:** boxing не происходит. Что передал — то и получил.",score:2.5},{name:"Сохранение контекста выполнения через замыкание",level:"2",content:`**Замыкание** — функция + её ссылка \`[[Environment]]\` на лексическое окружение, в котором она была создана.

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
3. \`#\` — настоящая, встроенная в язык`,score:3},{name:"Оптимизации в V8: Скрытые классы, Inline Caching",level:"4",content:`**Скрытые классы (Hidden Classes / Maps):**
Описывают форму объекта — какие свойства и по какому смещению в памяти.

\`\`\`js
const user = {};          // Hidden Class C0
user.name = 'Alice';      // → C1: { name: offset 0 }
user.age = 25;            // → C2: { name: offset 0, age: offset 8 }
\`\`\`

Одинаковый порядок свойств → один Hidden Class → переиспользование оптимизаций.

**delete** — часто переводит в dictionary mode (slow mode). Вместо delete → \`= undefined\`.

**Inline Caching:**
• Monomorphic (1 форма) → максимально быстро
• Polymorphic (2-4) → медленнее
• Megamorphic (5+) → кэш бесполезен

**Глобальные переменные медленнее:**
1. Длинный путь по outer
2. Нет оптимизации через регистры CPU
3. Нестабильная форма глобального объекта`,score:3.5},{name:"Proxy и Reflect",level:"4",content:`**Proxy** — обёртка, перехватывающая операции с объектом:
\`\`\`js
new Proxy(target, {
  get(target, prop, receiver) { ... },
  set(target, prop, value, receiver) { ... },
  deleteProperty(target, prop) { ... },
  has(target, prop) { ... },     // оператор in
  apply(target, thisArg, args) { ... }, // вызов функции
  construct(target, args) { ... },      // new
});
\`\`\`

**Reflect** — стандартный способ выполнить операцию по умолчанию:
• Единообразие — метод для каждой ловушки
• **receiver** — правильно передаёт this в геттерах/сеттерах
• Без Reflect: \`target[prop]\` может дать неправильный this

**Практика:** Vue 3 (реактивность), MobX, Immer (Redux Toolkit).

**Proxy.revocable():**
\`\`\`js
const { proxy, revoke } = Proxy.revocable(target, handler);
revoke(); // proxy становится мёртвым → TypeError на любую операцию
\`\`\`
Кейс: временный доступ к объекту (capability-based security), после revoke все ссылки бесполезны.

**Инварианты Proxy:**
Proxy не может нарушать объектную модель JS. Если свойство \`non-configurable + non-writable\`, get-ловушка ОБЯЗАНА вернуть то же значение что в target — иначе TypeError. Движок принудительно проверяет это.

**Полезные ловушки (трапы):**
\`\`\`js
{
  ownKeys(target) { ... },          // Object.keys(), for...in
  defineProperty(target, key, desc) { ... }, // Object.defineProperty
  getOwnPropertyDescriptor(target, key) { ... },
  has(target, prop) { ... },        // in оператор
}
\`\`\``,score:3}]},{id:"browser",title:"БРАУЗЕР И ЕГО ИНСТРУМЕНТЫ",icon:"🌐",color:"#4FC3F7",topics:[{name:"devTools (network, application)",level:"2",content:`**Network:** мониторинг HTTP-запросов, время загрузки, размеры, заголовки, тело ответа. Фильтрация по типу (XHR, JS, CSS, Img). Throttling (3G, offline).

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

HOC не изменяет оригинальный компонент, а оборачивает. Сейчас заменён хуками.`,score:4},{name:"Virtual DOM",level:"3",content:`**Virtual DOM** — легковесное JS-представление реального DOM.

**Reconciliation (согласование):**
1. Тип элемента изменился → уничтожить поддерево, строить заново
2. Тип тот же → обновить только изменённые props/атрибуты

**key** — идентификатор элемента в списке для правильного сопоставления. index как key → баги при вставке/удалении + лишние ререндеры.`,score:4},{name:"Способы оптимизации React-приложения",level:"3",content:`1. **memo/useMemo/useCallback** — мемоизация (применять предметно!)
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

**Решение:** разделить на отдельные контексты (UserContext, ThemeContext).`,score:4.5},{name:"Концепция SSR. Ограничения применения",level:"3",content:`Сервер рендерит HTML → браузер показывает сразу → **гидратация** (навешивает обработчики).

**API:**
• \`createRoot\` — CSR (пустой DOM)
• \`hydrateRoot\` — SSR (DOM с контентом)
• \`renderToString\` — синхронный (старый)
• \`renderToPipeableStream\` — потоковый (React 18, Streaming SSR)

**Плюсы:** SEO, быстрый FCP.
**Минусы:** нет window/document, увеличенный TTFB, нагрузка на сервер.`,score:3.5},{name:"Form managers",level:"3",content:`**Контролируемые компоненты:** значение в state, React управляет вводом. Каждый keystroke → setState → ререндер.
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

**React Hook Form** — неконтролируемые + \`register\`. Минимум ререндеров, высокая производительность.
**Formik** — контролируемые. Каждое нажатие → ререндер. Хорош для простых форм.

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

**React 19 — Server Actions:**
\`\`\`jsx
// Форма с серверным экшном — без useState/fetch
<form action={async (formData) => {
  'use server';
  await saveUser(formData.get('name'));
  revalidatePath('/users');
}}>
  <input name="name" /><button>Save</button>
</form>
\`\`\``,score:3},{name:"React паттерны. Compound components. render-props",level:"4",content:`**Compound Components:** набор связанных компонентов через Context.
\`\`\`jsx
<Table>
  <Table.Header><Table.Cell>Name</Table.Cell></Table.Header>
  <Table.Row><Table.Cell>Alice</Table.Cell></Table.Row>
</Table>
\`\`\`

**Render-props:** компонент принимает функцию для рендеринга.
\`\`\`jsx
<MouseTracker render={({ x, y }) => <p>{x}, {y}</p>} />
\`\`\`

Оба паттерна в основном заменены хуками (проще, без wrapper hell).`,score:3.5},{name:"Механизм Reconciliation",level:"4",content:`Алгоритм сравнения Virtual DOM деревьев O(n):

1. **Разный тип** → уничтожить поддерево, создать заново (включая state)
2. **Одинаковый тип DOM** → обновить атрибуты
3. **Одинаковый тип компонента** → обновить props, вызвать render
4. **Списки** → key для сопоставления

**Одинаковый key** → warning + баги со стейтом. **index как key** → лишние ререндеры при вставке/удалении.`,score:4},{name:"Архитектура Fiber",level:"4",content:`**Fiber** — структура данных (узел) для каждого компонента. Хранит тип, props, state, ссылки на соседей.

**Проблема до Fiber:** стековый рекурсивный обход — нельзя прервать, UI зависает.

**Решение:** работа делится на маленькие units of work, можно прервать и возобновить.

**useTransition** — помечает обновление как низкоприоритетное. React может прервать при срочном обновлении.

**useDeferredValue** — аналог, но для значения. 
        **1. Render фаза (reconciliation) — прерываемая:**
Строит дерево Fiber
Вычисляет изменения (diffing)
Можно прервать и возобновить

**2. Commit фаза — непрерываемая:**

Применяет изменения к реальному DOM
Вызывает useEffect, useLayoutEffect
Нельзя прервать — DOM должен обновиться атомарно

Именно поэтому функции в render фазе (например тело компонента) могут вызываться несколько раз — Fiber может перезапустить работу. Это причина почему в StrictMode React намеренно вызывает рендер дважды.`,score:4},{name:"Server components",level:"4",content:`Код остаётся на сервере, JS НЕ отправляется клиенту. Нет гидратации.

**\`'use client'\`** — маркер клиентского компонента. Остальное — серверное по умолчанию.

**RSC Payload:** серверные компоненты → готовая разметка, клиентские → ссылки из бандла.

**Ограничения SC:** нет useState/useEffect, нет обработчиков событий, нет интерактивности.

**Плюс:** тяжёлые библиотеки не попадают в бандл клиента. Прямой доступ к БД, файловой системе.

**Server Actions (React 19 / Next.js 14+):**
\`\`\`js
// actions.ts
'use server';
export async function createUser(formData: FormData) {
  await db.insert({ name: formData.get('name') });
  revalidatePath('/users'); // инвалидировать кэш
}
\`\`\`
\`\`\`jsx
// Серверный компонент — нет JS на клиенте
<form action={createUser}>
  <input name="name" />
  <button>Создать</button>
</form>

// Или из клиентского компонента
const [isPending, startTransition] = useTransition();
startTransition(async () => { await createUser(formData); });
\`\`\`
- Выполняются на сервере, не попадают в бандл
- Поддерживают optimistic updates через \`useOptimistic\`
- Интегрируются с Suspense и streaming`,score:4}]}],zd=[{id:"network",title:"СЕТЬ",icon:"🔗",color:"#66BB6A",topics:[{name:"ip-адрес и hostName",level:"1",content:`**IP-адрес** — уникальный числовой идентификатор устройства в сети.
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
• Stateless — сервер не хранит состояние клиента
• Единый интерфейс

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

**Заголовки:** Content-Type, Authorization, Cache-Control, CORS-заголовки.
**HTTPS** — HTTP + TLS шифрование.

**HTTP/3:**
• Основан на **QUIC** (поверх UDP вместо TCP)
• Встроенное шифрование TLS 1.3 прямо в QUIC
• Нет head-of-line блокировки на транспортном уровне (в HTTP/2 один потерянный TCP-пакет блокирует все потоки одного соединения)
• **0-RTT** для повторных подключений — быстрее установление соединения
• **Connection migration** — соединение выживает при смене IP (переход Wi-Fi ↔ LTE, критично для мобильных)
• Поддерживается Cloudflare, Google, Fastly`},{name:"Понимание протокола HTTP/2",level:"3",content:`**Улучшения над HTTP/1.1:**

• **Мультиплексирование** — множество запросов по одному TCP-соединению параллельно (в HTTP/1.1 — блокировка head-of-line)
• **Сжатие заголовков (HPACK)** — заголовки больше не дублируются
• **Server Push** — сервер может отправить ресурс до запроса клиента
• **Бинарный протокол** — вместо текстового, эффективнее парсинг
• **Приоритизация потоков** — важные ресурсы грузятся первыми

**Практический эффект:** не нужны хаки HTTP/1.1 (спрайты, domain sharding, конкатенация файлов).`},{name:"Различие Long-Polling, Websockets, Server-Sent Events",level:"3",content:`**Long-Polling:**
Клиент отправляет запрос → сервер держит соединение открытым до появления данных → отвечает → клиент сразу шлёт новый запрос. Простой, но неэффективный.

**WebSocket:**
Полнодуплексное соединение. Клиент и сервер отправляют данные в любой момент. Handshake через HTTP → Upgrade → ws://. Идеален для чатов, игр, трейдинга.

**Server-Sent Events (SSE):**
Однонаправленный поток: сервер → клиент. Работает по HTTP. Автоматическое переподключение. Проще WebSocket. Идеален для уведомлений, live-лент.

**Выбор:** двусторонняя связь → WebSocket. Только сервер → клиент → SSE. Простота/legacy → Long-Polling.`},{name:"Базовое понимание TCP",level:"4",content:`**TCP (Transmission Control Protocol)** — надёжный протокол транспортного уровня.

**Гарантирует:** доставку, порядок пакетов, отсутствие дубликатов.

**Трёхстороннее рукопожатие (3-way handshake):**
1. Клиент → SYN
2. Сервер → SYN-ACK
3. Клиент → ACK
После этого соединение установлено.

**Механизмы надёжности:**
• Нумерация пакетов (sequence numbers)
• Подтверждения (ACK)
• Повторная передача (retransmission)
• Контроль потока (flow control)
• Контроль перегрузки (congestion control)

**TCP vs UDP:** TCP — надёжный, медленнее. UDP — ненадёжный, быстрее (видео, игры, DNS).`},{name:"Базовое понимание IP",level:"4",content:`**IP (Internet Protocol)** — протокол сетевого уровня, доставляет пакеты между устройствами.

**Функции:**
• Адресация (IP-адреса)
• Маршрутизация (выбор пути)
• Фрагментация (разбивка больших пакетов)

**IP НЕ гарантирует:** доставку, порядок, отсутствие дубликатов (это делает TCP сверху).

**Модель OSI (упрощённо для frontend):**
\`\`\`
7. Application  — HTTP, WebSocket
4. Transport    — TCP, UDP
3. Network      — IP
2. Data Link    — Ethernet, Wi-Fi
1. Physical     — кабели, сигналы
\`\`\``},{name:"Базовое понимание DNS",level:"4",content:`**DNS (Domain Name System)** — преобразует доменное имя в IP-адрес.

**Иерархия:** . (root) → .com (TLD) → example.com → api.example.com

**Процесс резолвинга:**
1. Браузер → кэш (браузер, OS)
2. → Recursive resolver (провайдер)
3. → Root сервер → TLD сервер → Authoritative сервер
4. ← IP-адрес

**Типы записей:**
• **A** — домен → IPv4
• **AAAA** — домен → IPv6
• **CNAME** — алиас (blog.example.com → example.com)
• **MX** — почтовый сервер
• **TXT** — текстовая информация (SPF, DKIM)
• **NS** — nameserver

**TTL** — время кэширования записи.`}]},{id:"patterns",title:"ПАТТЕРНЫ",icon:"🧩",color:"#AB47BC",topics:[{name:"DRY, KISS, YAGNI",level:"2",content:`**DRY (Don't Repeat Yourself):** каждая часть знания имеет единственное представление. Дублирование → вынести в функцию/модуль. Но: не путай совпадение кода с дублированием логики.

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

**flex: 1** = flex-grow: 1, flex-shrink: 1, flex-basis: 0%.`,score:4},{name:"Базовое понимание контекста наложения",level:"3",content:`**z-index** работает с позиционированными элементами (relative, absolute, fixed, sticky). Может быть отрицательным.

**Stacking context** создаёт: z-index + position, opacity < 1, transform, filter, will-change, isolation: isolate.

Дочерний элемент соревнуется только внутри stacking context родителя.`,score:3.5},{name:"Современные подходы к организации стилей",level:"3",content:`**CSS-Modules:** автоматические уникальные имена классов.
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
**minmax(200px, 1fr)** — адаптивные колонки.`,score:4},{name:"Векторная и растровая графика",level:"4",content:`**Растровая (PNG, JPG, WebP):** пиксели, размывается при увеличении, для фотографий, тяжёлая.
**Векторная (SVG):** математические формулы, НЕ размывается, для иконок/логотипов, лёгкая.

SVG — лёгкий и чёткий на любом экране. Для сложных изображений может быть тяжелее растра.

**Форматы и когда использовать:**
| Формат | Прозрачность | Сжатие | Применение |
|--------|-------------|--------|------------|
| JPEG | Нет | Lossy | Фотографии |
| PNG | Да | Lossless | Скриншоты, пиксель-арт |
| WebP | Да | Lossy/Lossless | Замена JPEG/PNG (–25-30%) |
| AVIF | Да | Lossy/Lossless | Лучше WebP (–50%), 2024: хорошая поддержка |
| SVG | Да | — | Иконки, логотипы, диаграммы |

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
\`<img src="icon.svg">\` — кэшируется браузером, но нельзя стилизовать через CSS.`,score:2},{name:"browserslist",level:"4",content:'Конфиг, определяющий целевые браузеры. Читают: Autoprefixer, Babel, PostCSS Preset Env, ESLint.\n\n```json\n"browserslist": ["> 1%", "last 2 versions", "not dead"]\n```\n\nВсе инструменты работают согласованно по одному конфигу.',score:2.5},{name:"Доступность (aria, tabindex & etc.)",level:"4",content:`**tabindex:** 0 — в порядке DOM, -1 — только программно (focus()), положительный — антипаттерн.

**ARIA:** aria-label, aria-hidden, aria-expanded, aria-live, role.

**Первое правило ARIA:** если есть нативный HTML-элемент — используй его вместо ARIA. \`<button>\` лучше \`<div role="button">\`.

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
\`\`\``,score:3.5},{name:"Механизм Event loop, тасоки и микротасоки",level:"3",content:`**Один тик Event Loop:**
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

**return value vs return Promise.resolve(value):** второй на один микротик медленнее.`,score:4},{name:"Функции-генераторы, область их применения",level:"4",content:`\`\`\`js
function* gen() {
  const x = yield 'question';
  return x * 2;
}
const g = gen();
g.next();      // { value: 'question', done: false }
g.next(21);    // { value: 42, done: true }
\`\`\`

yield — двусторонний: отдаёт значение наружу, next(value) передаёт внутрь.

**Применение:** Redux-Saga целиком построена на генераторах.`,score:2.5},{name:"Работа с запросами",level:"2",content:`**Промисы — цепочки:**
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
\`\`\``},{name:"Event loop",level:"2",content:"Подробный разбор в теме «Механизм Event loop». Отдельная оценка: понимание Web API, callstack, очередей."}]},{id:"ts",title:"TS",icon:"🔷",color:"#3178C6",topics:[{name:"Основные типы данных в TS",level:"2",content:`**Примитивы:** string, number, boolean, null, undefined, bigint, symbol.

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

type тоже можно implements в классах.`,score:3.5},{name:"Файлы деклараций .d.ts",level:"3",content:`Декларации типов без реализации. Основное назначение — типизация JS-библиотек.

**@types/...** пакеты — это .d.ts файлы.

**declare global** — расширение глобальных типов (Window и др.).

**/// <reference types="..." />** — подключение типов из пакета.`,score:3},{name:"Механизм typeGuard, type cast",level:"3",content:"**Type Guard:** функция с type predicate:\n```ts\nfunction isCat(x: Cat | Dog): x is Cat { return 'meow' in x; }\n```\n\n**Type Cast:** as (основной) и <Type> (не работает в JSX).\nЭто утверждение, не преобразование — в рантайме ничего не происходит.",score:3.5},{name:"UtilityTypes",level:"3",content:`**Partial<T>** — все поля необязательны
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
      **Capitalize<S>** — первая буква заглавная: 'hello' → 'Hello'
**Uncapitalize<S>** — первая буква строчная: 'Hello' → 'hello'
**Uppercase<S>** — всё заглавными: 'hello' → 'HELLO'
**Lowercase<S>** — всё строчными: 'HELLO' → 'hello'`,score:3.5},{name:"Conditional types, mapped types, infer",level:"4",content:`**Conditional:** T extends string ? 'yes' : 'no'
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

**Senior-ответственность:** видеть картину целиком, приоритизировать тех. долг, обосновывать бизнесу время на рефакторинг, планировать миграции.`}]},{id:"git",title:"GIT",icon:"📦",color:"#F4511E",topics:[{name:"Базовые команды: pull, push, commit, fetch, add, clone",level:"2",content:`\`\`\`bash
git clone <url>          # клонировать репо
git add .                # добавить все файлы в staging
git commit -m "msg"      # зафиксировать
git push                 # отправить на remote
git pull                 # fetch + merge
git fetch                # скачать без merge
git status               # состояние
git log --oneline        # история
\`\`\`

**fetch vs pull:** fetch скачивает изменения, но не применяет. pull = fetch + merge.`},{name:"init, config, checkout, merge, git branch, git remote",level:"2",content:`\`\`\`bash
git init                     # инициализация репо
git config user.name "Name"  # настройка
git branch feature           # создать ветку
git checkout feature         # переключиться (старый способ)
git checkout -b feature      # создать + переключиться
git merge feature            # влить ветку в текущую
git remote add origin <url>  # добавить remote
git remote -v                # список remotes
\`\`\`

**merge** создаёт merge-коммит. **Конфликты** — ручное разрешение, затем git add + commit.`},{name:"amend, fixup, revert, cherry-pick, stash, rebase, .gitignore",level:"3",content:`\`\`\`bash
git commit --amend          # изменить последний коммит
git revert <hash>           # отменяющий коммит (безопасно)
git cherry-pick <hash>      # скопировать коммит в текущую ветку
git stash                   # спрятать изменения
git stash pop               # достать обратно
git rebase main             # переместить коммиты на верх main
\`\`\`

**merge vs rebase:** merge сохраняет историю (merge-коммит). rebase — линейная история, но переписывает.

**fixup:** \`git commit --fixup <hash>\` + \`git rebase -i --autosquash\` — склеить с целевым коммитом.

**.gitignore** — файлы/папки, которые git игнорирует (node_modules, .env, dist).`},{name:"reset, tag, log, diff, reflog",level:"3",content:`\`\`\`bash
git reset --soft HEAD~1    # отменить коммит, сохранить staging
git reset --mixed HEAD~1   # отменить коммит + staging
git reset --hard HEAD~1    # отменить всё (опасно!)

git tag v1.0.0             # создать тег
git log --graph --oneline  # красивая история
git diff                   # изменения в working directory
git diff --staged          # изменения в staging

git reflog                 # ВСЕ перемещения HEAD (спасение!)
\`\`\`

**reflog** — история ВСЕХ перемещений HEAD. Позволяет восстановить после reset --hard.`},{name:"hooks",level:"4",content:`**Git Hooks** — скрипты, выполняющиеся автоматически при событиях git.

**Клиентские (популярные):**
• **pre-commit** — перед коммитом (линтинг, форматирование)
• **commit-msg** — проверка формата сообщения коммита
• **pre-push** — перед push (тесты)

**Инструменты:**
• **Husky** — управление git hooks в npm-проекте
• **lint-staged** — линтинг только staged файлов
• **commitlint** — проверка Conventional Commits

\`\`\`json
// package.json
"husky": { "hooks": { "pre-commit": "lint-staged" } }
\`\`\``},{name:"switch, restore",level:"4",content:`Новые команды (Git 2.23+), заменяющие перегруженный \`checkout\`:

\`\`\`bash
# checkout → split into:
git switch feature         # переключить ветку
git switch -c new-branch   # создать + переключить
git restore file.js        # откатить файл в working directory
git restore --staged file.js # убрать из staging
\`\`\`

**Зачем:** checkout делал слишком много (переключение веток + откат файлов). switch и restore — чёткое разделение обязанностей.`},{name:"Способы оптимизации рабочего пространства Git, git-lfs, сабмодули",level:"4",content:'**git-lfs (Large File Storage):**\nХранение больших файлов (видео, PSD, дата-сеты) отдельно. В git — только указатели.\n```bash\ngit lfs track "*.psd"\n```\n\n**Submodules:**\nВложенный git-репозиторий внутри основного:\n```bash\ngit submodule add <url> libs/shared\ngit submodule update --init --recursive\n```\n\n**Shallow clone:** `git clone --depth 1` — только последний коммит (быстрее для CI).\n**Sparse checkout** — скачивать только нужные папки из большого монорепо.'},{name:"worktree",level:"4",content:`**git worktree** — несколько рабочих директорий одного репо одновременно.

\`\`\`bash
git worktree add ../hotfix hotfix-branch
# Теперь можно работать в двух ветках параллельно
# без stash и переключения

git worktree list    # список worktrees
git worktree remove ../hotfix  # удалить
\`\`\`

**Кейсы:**
• Срочный hotfix без прерывания текущей работы
• Сравнение двух веток бок о бок
• Запуск тестов на одной ветке, работа на другой`}]}],On=[...Id,...zd],Fd=[];On.forEach(e=>{e.topics.forEach(n=>{n.content&&Fd.push({section:e.title,sectionColor:e.color,topic:n.name,level:n.level,content:n.content,score:n.score??null})})});function Ad(e,n){if(!n)return e;const t=e.toLowerCase().indexOf(n.toLowerCase());return t===-1?e:y.jsxs(y.Fragment,{children:[e.slice(0,t),y.jsx("mark",{className:"search-highlight",children:e.slice(t,t+n.length)}),e.slice(t+n.length)]})}function rc({topic:e,sectionColor:n,highlight:t,defaultOpen:r=!1}){const[l,o]=Le.useState(r),i=nl[e.level]||nl[2];return y.jsxs("div",{className:"topic-row",children:[y.jsxs("button",{className:"topic-header",onClick:()=>o(!l),children:[y.jsx("span",{className:"topic-chevron",children:l?"▾":"▸"}),y.jsx("span",{className:"topic-name",children:t?Ad(e.name,t):e.name}),y.jsxs("span",{className:"topic-badges",children:[e.score!=null&&y.jsxs("span",{className:"topic-score",title:"Оценка",children:[e.score,"/5"]}),y.jsxs("span",{className:"topic-level",style:{background:i.color+"22",color:i.color,borderColor:i.color+"44"},children:[e.level," — ",i.label]})]})]}),l&&y.jsx("div",{className:"topic-content",children:y.jsx(lc,{text:e.content})})]})}function lc({text:e}){if(!e)return y.jsx("p",{className:"placeholder",children:"Контент будет добавлен позже"});const n=e.split(`
`),t=[];let r=!1,l=[],o=0;return n.forEach((i,s)=>{if(i.startsWith("```")){r?(t.push(y.jsx("pre",{children:l.join(`
`)},o++)),l=[],r=!1):r=!0;return}if(r){l.push(i);return}if(i.trim()===""){t.push(y.jsx("div",{className:"spacer"},o++));return}let u=i.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^• /,"‣ ");t.push(y.jsx("p",{className:"content-line",dangerouslySetInnerHTML:{__html:u}},o++))}),r&&l.length&&t.push(y.jsx("pre",{children:l.join(`
`)},o++)),y.jsx("div",{className:"formatted-content",children:t})}function Ud({section:e,defaultCollapsed:n=!1}){const[t,r]=Le.useState(n),l=e.topics.length,o=e.topics.filter(s=>s.score!=null),i=o.length?(o.reduce((s,u)=>s+u.score,0)/o.length).toFixed(1):null;return y.jsxs("div",{className:"section-block",children:[y.jsxs("button",{className:"section-header",onClick:()=>r(!t),style:{"--accent":e.color},children:[y.jsxs("div",{className:"section-left",children:[y.jsx("span",{className:"section-icon",children:e.icon}),y.jsxs("div",{children:[y.jsx("h2",{className:"section-title",children:e.title}),y.jsxs("span",{className:"section-meta",children:[l," тем",i?` · Средняя: ${i}/5`:""]})]})]}),y.jsx("span",{className:"section-chevron",children:t?"▸":"▾"})]}),!t&&y.jsx("div",{className:"section-topics",children:e.topics.map((s,u)=>y.jsx(rc,{topic:s,sectionColor:e.color},u))})]})}function Hd({query:e,sections:n}){const t=e.toLowerCase(),r=[];return n.forEach(l=>{const o=l.topics.filter(i=>i.name.toLowerCase().includes(t)||i.content&&i.content.toLowerCase().includes(t));o.length>0&&r.push({section:l,topics:o})}),r.length===0?y.jsxs("p",{className:"search-empty",children:["Ничего не найдено по запросу «",e,"»"]}):y.jsx(y.Fragment,{children:r.map(({section:l,topics:o})=>y.jsxs("div",{className:"section-block",children:[y.jsx("div",{className:"section-header",style:{"--accent":l.color},children:y.jsxs("div",{className:"section-left",children:[y.jsx("span",{className:"section-icon",children:l.icon}),y.jsxs("div",{children:[y.jsx("h2",{className:"section-title",children:l.title}),y.jsxs("span",{className:"section-meta",children:[o.length," совпадений"]})]})]})}),y.jsx("div",{className:"section-topics",children:o.map((i,s)=>y.jsx(rc,{topic:i,sectionColor:l.color,highlight:e,defaultOpen:!0},s))})]},l.id))})}function Vd({sections:e}){const[n,t]=Le.useState("all"),[r,l]=Le.useState(0),[o,i]=Le.useState(!1),s=[];e.forEach(p=>{p.topics.forEach(h=>{h.content&&(n==="all"||n===p.id)&&s.push({...h,sectionTitle:p.title,sectionIcon:p.icon,sectionColor:p.color})})});const u=s[r];if(!u)return y.jsx("p",{children:"Нет карточек"});const c=nl[u.level]||nl[2];return y.jsxs("div",{className:"flashcard-mode",children:[y.jsxs("div",{className:"flash-filter",children:[y.jsxs("select",{value:n,onChange:p=>{t(p.target.value),l(0),i(!1)},children:[y.jsx("option",{value:"all",children:"Все разделы"}),e.map(p=>y.jsxs("option",{value:p.id,children:[p.icon," ",p.title]},p.id))]}),y.jsxs("span",{className:"flash-counter",children:[r+1," / ",s.length]})]}),y.jsx("div",{className:`flash-card ${o?"flipped":""}`,onClick:()=>i(!o),children:o?y.jsx("div",{className:"flash-back",children:y.jsx(lc,{text:u.content})}):y.jsxs("div",{className:"flash-front",children:[y.jsxs("span",{className:"flash-section",style:{color:u.sectionColor},children:[u.sectionIcon," ",u.sectionTitle]}),y.jsx("span",{className:"flash-level",style:{color:c.color},children:c.label}),y.jsx("h3",{className:"flash-question",children:u.name}),y.jsx("span",{className:"flash-hint",children:"Нажми, чтобы увидеть ответ"})]})}),y.jsxs("div",{className:"flash-nav",children:[y.jsx("button",{disabled:r===0,onClick:()=>{l(p=>p-1),i(!1)},children:"← Назад"}),y.jsx("button",{onClick:()=>{l(Math.floor(Math.random()*s.length)),i(!1)},children:"🎲 Случайная"}),y.jsx("button",{disabled:r>=s.length-1,onClick:()=>{l(p=>p+1),i(!1)},children:"Далее →"})]})]})}function Bd(){const[e,n]=Le.useState("roadmap"),[t,r]=Le.useState("list"),[l,o]=Le.useState(""),i=On.reduce((u,c)=>u+c.topics.length,0),s=e==="roadmap"&&l.trim().length>0;return y.jsxs("div",{className:"app",children:[y.jsxs("header",{className:"app-header",children:[y.jsxs("div",{className:"header-content",children:[y.jsx("h1",{className:"app-title",children:"Frontend Senior+ Roadmap"}),y.jsxs("p",{className:"app-sub",children:[On.length," разделов · ",i," тем"]})]}),y.jsxs("div",{className:"header-controls",children:[y.jsxs("nav",{className:"tabs",children:[y.jsx("button",{className:`tab ${e==="roadmap"?"active":""}`,onClick:()=>{n("roadmap"),o("")},children:"📋 Темы"}),y.jsx("button",{className:`tab ${e==="cards"?"active":""}`,onClick:()=>{n("cards"),o("")},children:"🃏 Карточки"})]}),e==="roadmap"&&y.jsxs("div",{className:"view-toggle",children:[y.jsx("button",{className:`view-btn ${t==="list"?"active":""}`,onClick:()=>r("list"),title:"Список",children:y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("rect",{x:"1",y:"2",width:"14",height:"2",rx:"1"}),y.jsx("rect",{x:"1",y:"7",width:"14",height:"2",rx:"1"}),y.jsx("rect",{x:"1",y:"12",width:"14",height:"2",rx:"1"})]})}),y.jsx("button",{className:`view-btn ${t==="grid"?"active":""}`,onClick:()=>r("grid"),title:"Сетка",children:y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("rect",{x:"1",y:"1",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"9",y:"1",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"1",y:"9",width:"6",height:"6",rx:"1"}),y.jsx("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"})]})})]})]}),e==="roadmap"&&y.jsxs("div",{className:"search-bar",children:[y.jsx("svg",{className:"search-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:y.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})}),y.jsx("input",{type:"search",placeholder:"Поиск по темам...",value:l,onChange:u=>o(u.target.value),className:"search-input"}),l&&y.jsx("button",{className:"search-clear",onClick:()=>o(""),title:"Очистить",children:"✕"})]})]}),y.jsx("main",{className:`app-main ${e==="roadmap"&&!s&&t==="grid"?"view-grid":""}`,children:e==="roadmap"?s?y.jsx(Hd,{query:l.trim(),sections:On}):On.map(u=>y.jsx(Ud,{section:u,defaultCollapsed:t==="grid"},u.id)):y.jsx(Vd,{sections:On})},s?`search-${l}`:t)]})}Gl.createRoot(document.getElementById("root")).render(y.jsx(xc.StrictMode,{children:y.jsx(Bd,{})}));
