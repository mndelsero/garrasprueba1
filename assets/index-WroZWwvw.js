function r1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ko(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nm={exports:{}},So={},rm={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),a1=Symbol.for("react.portal"),i1=Symbol.for("react.fragment"),o1=Symbol.for("react.strict_mode"),s1=Symbol.for("react.profiler"),l1=Symbol.for("react.provider"),u1=Symbol.for("react.context"),c1=Symbol.for("react.forward_ref"),f1=Symbol.for("react.suspense"),d1=Symbol.for("react.memo"),m1=Symbol.for("react.lazy"),qc=Symbol.iterator;function p1(e){return e===null||typeof e!="object"?null:(e=qc&&e[qc]||e["@@iterator"],typeof e=="function"?e:null)}var am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},im=Object.assign,om={};function _r(e,t,n){this.props=e,this.context=t,this.refs=om,this.updater=n||am}_r.prototype.isReactComponent={};_r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sm(){}sm.prototype=_r.prototype;function ku(e,t,n){this.props=e,this.context=t,this.refs=om,this.updater=n||am}var Su=ku.prototype=new sm;Su.constructor=ku;im(Su,_r.prototype);Su.isPureReactComponent=!0;var Zc=Array.isArray,lm=Object.prototype.hasOwnProperty,bu={current:null},um={key:!0,ref:!0,__self:!0,__source:!0};function cm(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)lm.call(t,r)&&!um.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:Da,type:e,key:i,ref:o,props:a,_owner:bu.current}}function h1(e,t){return{$$typeof:Da,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Da}function v1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jc=/\/+/g;function vs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?v1(""+e.key):t.toString(36)}function Ni(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Da:case a1:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+vs(o,0):r,Zc(a)?(n="",e!=null&&(n=e.replace(Jc,"$&/")+"/"),Ni(a,t,n,"",function(u){return u})):a!=null&&(Eu(a)&&(a=h1(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Jc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Zc(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+vs(i,s);o+=Ni(i,t,n,l,a)}else if(l=p1(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+vs(i,s++),o+=Ni(i,t,n,l,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ga(e,t,n){if(e==null)return e;var r=[],a=0;return Ni(e,r,"","",function(i){return t.call(n,i,a++)}),r}function g1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},ji={transition:null},y1={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:ji,ReactCurrentOwner:bu};F.Children={map:Ga,forEach:function(e,t,n){Ga(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ga(e,function(){t++}),t},toArray:function(e){return Ga(e,function(t){return t})||[]},only:function(e){if(!Eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=_r;F.Fragment=i1;F.Profiler=s1;F.PureComponent=ku;F.StrictMode=o1;F.Suspense=f1;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=im({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=bu.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)lm.call(t,l)&&!um.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Da,type:e.type,key:a,ref:i,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:u1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l1,_context:e},e.Consumer=e};F.createElement=cm;F.createFactory=function(e){var t=cm.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:c1,render:e}};F.isValidElement=Eu;F.lazy=function(e){return{$$typeof:m1,_payload:{_status:-1,_result:e},_init:g1}};F.memo=function(e,t){return{$$typeof:d1,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=ji.transition;ji.transition={};try{e()}finally{ji.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return Ae.current.useCallback(e,t)};F.useContext=function(e){return Ae.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};F.useEffect=function(e,t){return Ae.current.useEffect(e,t)};F.useId=function(){return Ae.current.useId()};F.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Ae.current.useMemo(e,t)};F.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};F.useRef=function(e){return Ae.current.useRef(e)};F.useState=function(e){return Ae.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return Ae.current.useTransition()};F.version="18.2.0";rm.exports=F;var w=rm.exports;const dt=ko(w),qs=r1({__proto__:null,default:dt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x1=w,w1=Symbol.for("react.element"),k1=Symbol.for("react.fragment"),S1=Object.prototype.hasOwnProperty,b1=x1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E1={key:!0,ref:!0,__self:!0,__source:!0};function fm(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)S1.call(t,r)&&!E1.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:w1,type:e,key:i,ref:o,props:a,_owner:b1.current}}So.Fragment=k1;So.jsx=fm;So.jsxs=fm;nm.exports=So;var f=nm.exports,Zs={},dm={exports:{}},qe={},mm={exports:{}},pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,A){var M=O.length;O.push(A);e:for(;0<M;){var ee=M-1>>>1,fe=O[ee];if(0<a(fe,A))O[ee]=A,O[M]=fe,M=ee;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var A=O[0],M=O.pop();if(M!==A){O[0]=M;e:for(var ee=0,fe=O.length,Pt=fe>>>1;ee<Pt;){var Me=2*(ee+1)-1,Hn=O[Me],te=Me+1,Xn=O[te];if(0>a(Hn,M))te<fe&&0>a(Xn,Hn)?(O[ee]=Xn,O[te]=M,ee=te):(O[ee]=Hn,O[Me]=M,ee=Me);else if(te<fe&&0>a(Xn,M))O[ee]=Xn,O[te]=M,ee=te;else break e}}return A}function a(O,A){var M=O.sortIndex-A.sortIndex;return M!==0?M:O.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,p=3,g=!1,y=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=O)r(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function k(O){if(x=!1,v(O),!y)if(n(l)!==null)y=!0,Ve(E);else{var A=n(u);A!==null&&Ye(k,A.startTime-O)}}function E(O,A){y=!1,x&&(x=!1,h(N),N=-1),g=!0;var M=p;try{for(v(A),d=n(l);d!==null&&(!(d.expirationTime>A)||O&&!re());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,p=d.priorityLevel;var fe=ee(d.expirationTime<=A);A=e.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(l)&&r(l),v(A)}else r(l);d=n(l)}if(d!==null)var Pt=!0;else{var Me=n(u);Me!==null&&Ye(k,Me.startTime-A),Pt=!1}return Pt}finally{d=null,p=M,g=!1}}var C=!1,b=null,N=-1,I=5,_=-1;function re(){return!(e.unstable_now()-_<I)}function ce(){if(b!==null){var O=e.unstable_now();_=O;var A=!0;try{A=b(!0,O)}finally{A?be():(C=!1,b=null)}}else C=!1}var be;if(typeof m=="function")be=function(){m(ce)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,U=ve.port2;ve.port1.onmessage=ce,be=function(){U.postMessage(null)}}else be=function(){S(ce,0)};function Ve(O){b=O,C||(C=!0,be())}function Ye(O,A){N=S(function(){O(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Ve(E))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(O){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var M=p;p=A;try{return O()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,A){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var M=p;p=O;try{return A()}finally{p=M}},e.unstable_scheduleCallback=function(O,A,M){var ee=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ee+M:ee):M=ee,O){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=M+fe,O={id:c++,callback:A,priorityLevel:O,startTime:M,expirationTime:fe,sortIndex:-1},M>ee?(O.sortIndex=M,t(u,O),n(l)===null&&O===n(u)&&(x?(h(N),N=-1):x=!0,Ye(k,M-ee))):(O.sortIndex=fe,t(l,O),y||g||(y=!0,Ve(E))),O},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(O){var A=p;return function(){var M=p;p=A;try{return O.apply(this,arguments)}finally{p=M}}}})(pm);mm.exports=pm;var C1=mm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=w,Ge=C1;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vm=new Set,fa={};function Bn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(fa[e]=t,e=0;e<t.length;e++)vm.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Js=Object.prototype.hasOwnProperty,N1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ef={},tf={};function j1(e){return Js.call(tf,e)?!0:Js.call(ef,e)?!1:N1.test(e)?tf[e]=!0:(ef[e]=!0,!1)}function P1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _1(e,t,n,r){if(t===null||typeof t>"u"||P1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cu=/[\-:]([a-z])/g;function Nu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cu,Nu);je[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cu,Nu);je[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cu,Nu);je[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function ju(e,t,n,r){var a=je.hasOwnProperty(t)?je[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_1(t,n,a,r)&&(n=null),r||a===null?j1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),Pu=Symbol.for("react.strict_mode"),el=Symbol.for("react.profiler"),gm=Symbol.for("react.provider"),ym=Symbol.for("react.context"),_u=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),nl=Symbol.for("react.suspense_list"),Ou=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),xm=Symbol.for("react.offscreen"),nf=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=nf&&e[nf]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,gs;function Hr(e){if(gs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gs=t&&t[1]||""}return`
`+gs+e}var ys=!1;function xs(e,t){if(!e||ys)return"";ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==i[s]){var l=`
`+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hr(e):""}function O1(e){switch(e.tag){case 5:return Hr(e.type);case 16:return Hr("Lazy");case 13:return Hr("Suspense");case 19:return Hr("SuspenseList");case 0:case 2:case 15:return e=xs(e.type,!1),e;case 11:return e=xs(e.type.render,!1),e;case 1:return e=xs(e.type,!0),e;default:return""}}function rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case qn:return"Portal";case el:return"Profiler";case Pu:return"StrictMode";case tl:return"Suspense";case nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ym:return(e.displayName||"Context")+".Consumer";case gm:return(e._context.displayName||"Context")+".Provider";case _u:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ou:return t=e.displayName||null,t!==null?t:rl(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return rl(e(t))}catch{}}return null}function T1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rl(t);case 8:return t===Pu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I1(e){var t=wm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Za(e){e._valueTracker||(e._valueTracker=I1(e))}function km(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function al(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sm(e,t){t=t.checked,t!=null&&ju(e,"checked",t,!1)}function il(e,t){Sm(e,t);var n=dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&ol(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function af(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ol(e,t,n){(t!=="number"||Wi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function sl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function of(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Xr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dn(n)}}function bm(e,t){var n=dn(t.value),r=dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Em(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Em(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ja,Cm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ja.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function da(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R1=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){R1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jr[t]=Jr[e]})});function Nm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}function jm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Nm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var L1=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ul(e,t){if(t){if(L1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fl=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,mr=null,pr=null;function lf(e){if(e=Ba(e)){if(typeof dl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=jo(t),dl(e.stateNode,e.type,t))}}function Pm(e){mr?pr?pr.push(e):pr=[e]:mr=e}function _m(){if(mr){var e=mr,t=pr;if(pr=mr=null,lf(e),t)for(e=0;e<t.length;e++)lf(t[e])}}function Om(e,t){return e(t)}function Tm(){}var ws=!1;function Im(e,t,n){if(ws)return e(t,n);ws=!0;try{return Om(e,t,n)}finally{ws=!1,(mr!==null||pr!==null)&&(Tm(),_m())}}function ma(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ml=!1;if(At)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){ml=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{ml=!1}function A1(e,t,n,r,a,i,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ea=!1,Vi=null,Yi=!1,pl=null,z1={onError:function(e){ea=!0,Vi=e}};function M1(e,t,n,r,a,i,o,s,l){ea=!1,Vi=null,A1.apply(z1,arguments)}function $1(e,t,n,r,a,i,o,s,l){if(M1.apply(this,arguments),ea){if(ea){var u=Vi;ea=!1,Vi=null}else throw Error(j(198));Yi||(Yi=!0,pl=u)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uf(e){if(Wn(e)!==e)throw Error(j(188))}function D1(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return uf(a),e;if(i===r)return uf(a),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Lm(e){return e=D1(e),e!==null?Am(e):null}function Am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Am(e);if(t!==null)return t;e=e.sibling}return null}var zm=Ge.unstable_scheduleCallback,cf=Ge.unstable_cancelCallback,F1=Ge.unstable_shouldYield,U1=Ge.unstable_requestPaint,ue=Ge.unstable_now,B1=Ge.unstable_getCurrentPriorityLevel,Iu=Ge.unstable_ImmediatePriority,Mm=Ge.unstable_UserBlockingPriority,Hi=Ge.unstable_NormalPriority,W1=Ge.unstable_LowPriority,$m=Ge.unstable_IdlePriority,bo=null,Ct=null;function V1(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:X1,Y1=Math.log,H1=Math.LN2;function X1(e){return e>>>=0,e===0?32:31-(Y1(e)/H1|0)|0}var ei=64,ti=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~a;s!==0?r=Qr(s):(i&=o,i!==0&&(r=Qr(i)))}else o=n&~a,o!==0?r=Qr(o):i!==0&&(r=Qr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),a=1<<n,r|=e[n],t&=~a;return r}function Q1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-pt(i),s=1<<o,l=a[o];l===-1?(!(s&n)||s&r)&&(a[o]=Q1(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dm(){var e=ei;return ei<<=1,!(ei&4194240)&&(ei=64),e}function ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function G1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-pt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Y=0;function Fm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Um,Lu,Bm,Wm,Vm,vl=!1,ni=[],nn=null,rn=null,an=null,pa=new Map,ha=new Map,Kt=[],q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":pa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(t.pointerId)}}function $r(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ba(t),t!==null&&Lu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Z1(e,t,n,r,a){switch(t){case"focusin":return nn=$r(nn,e,t,n,r,a),!0;case"dragenter":return rn=$r(rn,e,t,n,r,a),!0;case"mouseover":return an=$r(an,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return pa.set(i,$r(pa.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,ha.set(i,$r(ha.get(i)||null,e,t,n,r,a)),!0}return!1}function Ym(e){var t=Pn(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Rm(n),t!==null){e.blockedOn=t,Vm(e.priority,function(){Bm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fl=r,n.target.dispatchEvent(r),fl=null}else return t=Ba(n),t!==null&&Lu(t),e.blockedOn=n,!1;t.shift()}return!0}function df(e,t,n){Pi(e)&&n.delete(t)}function J1(){vl=!1,nn!==null&&Pi(nn)&&(nn=null),rn!==null&&Pi(rn)&&(rn=null),an!==null&&Pi(an)&&(an=null),pa.forEach(df),ha.forEach(df)}function Dr(e,t){e.blockedOn===t&&(e.blockedOn=null,vl||(vl=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,J1)))}function va(e){function t(a){return Dr(a,e)}if(0<ni.length){Dr(ni[0],e);for(var n=1;n<ni.length;n++){var r=ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Dr(nn,e),rn!==null&&Dr(rn,e),an!==null&&Dr(an,e),pa.forEach(t),ha.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Ym(n),n.blockedOn===null&&Kt.shift()}var hr=Bt.ReactCurrentBatchConfig,Qi=!0;function ev(e,t,n,r){var a=Y,i=hr.transition;hr.transition=null;try{Y=1,Au(e,t,n,r)}finally{Y=a,hr.transition=i}}function tv(e,t,n,r){var a=Y,i=hr.transition;hr.transition=null;try{Y=4,Au(e,t,n,r)}finally{Y=a,hr.transition=i}}function Au(e,t,n,r){if(Qi){var a=gl(e,t,n,r);if(a===null)Ts(e,t,r,Ki,n),ff(e,r);else if(Z1(a,e,t,n,r))r.stopPropagation();else if(ff(e,r),t&4&&-1<q1.indexOf(e)){for(;a!==null;){var i=Ba(a);if(i!==null&&Um(i),i=gl(e,t,n,r),i===null&&Ts(e,t,r,Ki,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Ts(e,t,r,null,n)}}var Ki=null;function gl(e,t,n,r){if(Ki=null,e=Tu(r),e=Pn(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ki=e,null}function Hm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B1()){case Iu:return 1;case Mm:return 4;case Hi:case W1:return 16;case $m:return 536870912;default:return 16}default:return 16}}var qt=null,zu=null,_i=null;function Xm(){if(_i)return _i;var e,t=zu,n=t.length,r,a="value"in qt?qt.value:qt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return _i=a.slice(e,1<r?1-r:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function mf(){return!1}function Ze(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ri:mf,this.isPropagationStopped=mf,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=Ze(Or),Ua=oe({},Or,{view:0,detail:0}),nv=Ze(Ua),Ss,bs,Fr,Eo=oe({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Ss=e.screenX-Fr.screenX,bs=e.screenY-Fr.screenY):bs=Ss=0,Fr=e),Ss)},movementY:function(e){return"movementY"in e?e.movementY:bs}}),pf=Ze(Eo),rv=oe({},Eo,{dataTransfer:0}),av=Ze(rv),iv=oe({},Ua,{relatedTarget:0}),Es=Ze(iv),ov=oe({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=Ze(ov),lv=oe({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uv=Ze(lv),cv=oe({},Or,{data:0}),hf=Ze(cv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mv[e])?!!t[e]:!1}function $u(){return pv}var hv=oe({},Ua,{key:function(e){if(e.key){var t=fv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vv=Ze(hv),gv=oe({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=Ze(gv),yv=oe({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),xv=Ze(yv),wv=oe({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),kv=Ze(wv),Sv=oe({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=Ze(Sv),Ev=[9,13,27,32],Du=At&&"CompositionEvent"in window,ta=null;At&&"documentMode"in document&&(ta=document.documentMode);var Cv=At&&"TextEvent"in window&&!ta,Qm=At&&(!Du||ta&&8<ta&&11>=ta),gf=" ",yf=!1;function Km(e,t){switch(e){case"keyup":return Ev.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Nv(e,t){switch(e){case"compositionend":return Gm(t);case"keypress":return t.which!==32?null:(yf=!0,gf);case"textInput":return e=t.data,e===gf&&yf?null:e;default:return null}}function jv(e,t){if(Jn)return e==="compositionend"||!Du&&Km(e,t)?(e=Xm(),_i=zu=qt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qm&&t.locale!=="ko"?null:t.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pv[e.type]:t==="textarea"}function qm(e,t,n,r){Pm(r),t=Gi(t,"onChange"),0<t.length&&(n=new Mu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var na=null,ga=null;function _v(e){lp(e,0)}function Co(e){var t=nr(e);if(km(t))return e}function Ov(e,t){if(e==="change")return t}var Zm=!1;if(At){var Cs;if(At){var Ns="oninput"in document;if(!Ns){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),Ns=typeof wf.oninput=="function"}Cs=Ns}else Cs=!1;Zm=Cs&&(!document.documentMode||9<document.documentMode)}function kf(){na&&(na.detachEvent("onpropertychange",Jm),ga=na=null)}function Jm(e){if(e.propertyName==="value"&&Co(ga)){var t=[];qm(t,ga,e,Tu(e)),Im(_v,t)}}function Tv(e,t,n){e==="focusin"?(kf(),na=t,ga=n,na.attachEvent("onpropertychange",Jm)):e==="focusout"&&kf()}function Iv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(ga)}function Rv(e,t){if(e==="click")return Co(t)}function Lv(e,t){if(e==="input"||e==="change")return Co(t)}function Av(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Av;function ya(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Js.call(t,a)||!vt(e[a],t[a]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bf(e,t){var n=Sf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sf(n)}}function ep(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ep(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tp(){for(var e=window,t=Wi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wi(e.document)}return t}function Fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zv(e){var t=tp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ep(n.ownerDocument.documentElement,n)){if(r!==null&&Fu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=bf(n,i);var o=bf(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mv=At&&"documentMode"in document&&11>=document.documentMode,er=null,yl=null,ra=null,xl=!1;function Ef(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xl||er==null||er!==Wi(r)||(r=er,"selectionStart"in r&&Fu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&ya(ra,r)||(ra=r,r=Gi(yl,"onSelect"),0<r.length&&(t=new Mu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:ai("Animation","AnimationEnd"),animationiteration:ai("Animation","AnimationIteration"),animationstart:ai("Animation","AnimationStart"),transitionend:ai("Transition","TransitionEnd")},js={},np={};At&&(np=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function No(e){if(js[e])return js[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in np)return js[e]=t[n];return e}var rp=No("animationend"),ap=No("animationiteration"),ip=No("animationstart"),op=No("transitionend"),sp=new Map,Cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){sp.set(e,t),Bn(t,[e])}for(var Ps=0;Ps<Cf.length;Ps++){var _s=Cf[Ps],$v=_s.toLowerCase(),Dv=_s[0].toUpperCase()+_s.slice(1);gn($v,"on"+Dv)}gn(rp,"onAnimationEnd");gn(ap,"onAnimationIteration");gn(ip,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(op,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function Nf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$1(r,t,void 0,e),e.currentTarget=null}function lp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;Nf(a,s,u),i=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;Nf(a,s,u),i=l}}}if(Yi)throw e=pl,Yi=!1,pl=null,e}function G(e,t){var n=t[El];n===void 0&&(n=t[El]=new Set);var r=e+"__bubble";n.has(r)||(up(t,e,2,!1),n.add(r))}function Os(e,t,n){var r=0;t&&(r|=4),up(n,e,r,t)}var ii="_reactListening"+Math.random().toString(36).slice(2);function xa(e){if(!e[ii]){e[ii]=!0,vm.forEach(function(n){n!=="selectionchange"&&(Fv.has(n)||Os(n,!1,e),Os(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ii]||(t[ii]=!0,Os("selectionchange",!1,t))}}function up(e,t,n,r){switch(Hm(t)){case 1:var a=ev;break;case 4:a=tv;break;default:a=Au}n=a.bind(null,t,n,e),a=void 0,!ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ts(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;o=o.return}for(;s!==null;){if(o=Pn(s),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Im(function(){var u=i,c=Tu(n),d=[];e:{var p=sp.get(e);if(p!==void 0){var g=Mu,y=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":g=vv;break;case"focusin":y="focus",g=Es;break;case"focusout":y="blur",g=Es;break;case"beforeblur":case"afterblur":g=Es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=xv;break;case rp:case ap:case ip:g=sv;break;case op:g=kv;break;case"scroll":g=nv;break;case"wheel":g=bv;break;case"copy":case"cut":case"paste":g=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vf}var x=(t&4)!==0,S=!x&&e==="scroll",h=x?p!==null?p+"Capture":null:p;x=[];for(var m=u,v;m!==null;){v=m;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,h!==null&&(k=ma(m,h),k!=null&&x.push(wa(m,k,v)))),S)break;m=m.return}0<x.length&&(p=new g(p,y,null,n,c),d.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==fl&&(y=n.relatedTarget||n.fromElement)&&(Pn(y)||y[zt]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Pn(y):null,y!==null&&(S=Wn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(x=pf,k="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=vf,k="onPointerLeave",h="onPointerEnter",m="pointer"),S=g==null?p:nr(g),v=y==null?p:nr(y),p=new x(k,m+"leave",g,n,c),p.target=S,p.relatedTarget=v,k=null,Pn(c)===u&&(x=new x(h,m+"enter",y,n,c),x.target=v,x.relatedTarget=S,k=x),S=k,g&&y)t:{for(x=g,h=y,m=0,v=x;v;v=Qn(v))m++;for(v=0,k=h;k;k=Qn(k))v++;for(;0<m-v;)x=Qn(x),m--;for(;0<v-m;)h=Qn(h),v--;for(;m--;){if(x===h||h!==null&&x===h.alternate)break t;x=Qn(x),h=Qn(h)}x=null}else x=null;g!==null&&jf(d,p,g,x,!1),y!==null&&S!==null&&jf(d,S,y,x,!0)}}e:{if(p=u?nr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var E=Ov;else if(xf(p))if(Zm)E=Lv;else{E=Iv;var C=Tv}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Rv);if(E&&(E=E(e,u))){qm(d,E,n,c);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ol(p,"number",p.value)}switch(C=u?nr(u):window,e){case"focusin":(xf(C)||C.contentEditable==="true")&&(er=C,yl=u,ra=null);break;case"focusout":ra=yl=er=null;break;case"mousedown":xl=!0;break;case"contextmenu":case"mouseup":case"dragend":xl=!1,Ef(d,n,c);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":Ef(d,n,c)}var b;if(Du)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Jn?Km(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Qm&&n.locale!=="ko"&&(Jn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Jn&&(b=Xm()):(qt=c,zu="value"in qt?qt.value:qt.textContent,Jn=!0)),C=Gi(u,N),0<C.length&&(N=new hf(N,e,null,n,c),d.push({event:N,listeners:C}),b?N.data=b:(b=Gm(n),b!==null&&(N.data=b)))),(b=Cv?Nv(e,n):jv(e,n))&&(u=Gi(u,"onBeforeInput"),0<u.length&&(c=new hf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}lp(d,t)})}function wa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=ma(e,n),i!=null&&r.unshift(wa(e,i,a)),i=ma(e,t),i!=null&&r.push(wa(e,i,a))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jf(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,a?(l=ma(n,i),l!=null&&o.unshift(wa(n,l,s))):a||(l=ma(n,i),l!=null&&o.push(wa(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Uv=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace(Uv,`
`).replace(Bv,"")}function oi(e,t,n){if(t=Pf(t),Pf(e)!==t&&n)throw Error(j(425))}function qi(){}var wl=null,kl=null;function Sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,Vv=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(e){return _f.resolve(null).then(e).catch(Yv)}:bl;function Yv(e){setTimeout(function(){throw e})}function Is(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),va(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);va(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Of(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),bt="__reactFiber$"+Tr,ka="__reactProps$"+Tr,zt="__reactContainer$"+Tr,El="__reactEvents$"+Tr,Hv="__reactListeners$"+Tr,Xv="__reactHandles$"+Tr;function Pn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Of(e);e!==null;){if(n=e[bt])return n;e=Of(e)}return t}e=n,n=e.parentNode}return null}function Ba(e){return e=e[bt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function jo(e){return e[ka]||null}var Cl=[],rr=-1;function yn(e){return{current:e}}function Z(e){0>rr||(e.current=Cl[rr],Cl[rr]=null,rr--)}function K(e,t){rr++,Cl[rr]=e.current,e.current=t}var mn={},Ie=yn(mn),Fe=yn(!1),An=mn;function kr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ue(e){return e=e.childContextTypes,e!=null}function Zi(){Z(Fe),Z(Ie)}function Tf(e,t,n){if(Ie.current!==mn)throw Error(j(168));K(Ie,t),K(Fe,n)}function cp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(j(108,T1(e)||"Unknown",a));return oe({},n,r)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,An=Ie.current,K(Ie,e),K(Fe,Fe.current),!0}function If(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=cp(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,Z(Fe),Z(Ie),K(Ie,e)):Z(Fe),K(Fe,n)}var Tt=null,Po=!1,Rs=!1;function fp(e){Tt===null?Tt=[e]:Tt.push(e)}function Qv(e){Po=!0,fp(e)}function xn(){if(!Rs&&Tt!==null){Rs=!0;var e=0,t=Y;try{var n=Tt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,Po=!1}catch(a){throw Tt!==null&&(Tt=Tt.slice(e+1)),zm(Iu,xn),a}finally{Y=t,Rs=!1}}return null}var ar=[],ir=0,eo=null,to=0,tt=[],nt=0,zn=null,It=1,Rt="";function bn(e,t){ar[ir++]=to,ar[ir++]=eo,eo=e,to=t}function dp(e,t,n){tt[nt++]=It,tt[nt++]=Rt,tt[nt++]=zn,zn=e;var r=It;e=Rt;var a=32-pt(r)-1;r&=~(1<<a),n+=1;var i=32-pt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,It=1<<32-pt(t)+a|n<<a|r,Rt=i+e}else It=1<<i|n<<a|r,Rt=e}function Uu(e){e.return!==null&&(bn(e,1),dp(e,1,0))}function Bu(e){for(;e===eo;)eo=ar[--ir],ar[ir]=null,to=ar[--ir],ar[ir]=null;for(;e===zn;)zn=tt[--nt],tt[nt]=null,Rt=tt[--nt],tt[nt]=null,It=tt[--nt],tt[nt]=null}var Qe=null,Xe=null,ne=!1,ft=null;function mp(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:It,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Xe=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(ne){var t=Xe;if(t){var n=t;if(!Rf(e,t)){if(Nl(e))throw Error(j(418));t=on(n.nextSibling);var r=Qe;t&&Rf(e,t)?mp(r,n):(e.flags=e.flags&-4097|2,ne=!1,Qe=e)}}else{if(Nl(e))throw Error(j(418));e.flags=e.flags&-4097|2,ne=!1,Qe=e}}}function Lf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function si(e){if(e!==Qe)return!1;if(!ne)return Lf(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sl(e.type,e.memoizedProps)),t&&(t=Xe)){if(Nl(e))throw pp(),Error(j(418));for(;t;)mp(e,t),t=on(t.nextSibling)}if(Lf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Qe?on(e.stateNode.nextSibling):null;return!0}function pp(){for(var e=Xe;e;)e=on(e.nextSibling)}function Sr(){Xe=Qe=null,ne=!1}function Wu(e){ft===null?ft=[e]:ft.push(e)}var Kv=Bt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var no=yn(null),ro=null,or=null,Vu=null;function Yu(){Vu=or=ro=null}function Hu(e){var t=no.current;Z(no),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){ro=e,Vu=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Vu!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(ro===null)throw Error(j(308));or=e,ro.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var _n=null;function Xu(e){_n===null?_n=[e]:_n.push(e)}function hp(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Xu(t)):(n.next=a.next,a.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Mt(e,n)}return a=r.interleaved,a===null?(t.next=t,Xu(r)):(t.next=a.next,a.next=t),r.interleaved=t,Mt(e,n)}function Ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}function Af(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ao(e,t,n,r){var a=e.updateQueue;Qt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?i=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(i!==null){var d=a.baseState;o=0,c=u=l=null,s=i;do{var p=s.lane,g=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(p=t,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(g,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(g,d,p):y,p==null)break e;d=oe({},d,p);break e;case 2:Qt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=p;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;p=s,s=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(c===null&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);$n|=o,e.lanes=o,e.memoizedState=d}}function zf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(j(191,a));a.call(r)}}}var gp=new hm.Component().refs;function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),a=un(e),i=Lt(r,a);i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,a),t!==null&&(ht(t,e,a,r),Ti(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),a=un(e),i=Lt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,a),t!==null&&(ht(t,e,a,r),Ti(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=un(e),a=Lt(n,r);a.tag=2,t!=null&&(a.callback=t),t=sn(e,a,r),t!==null&&(ht(t,e,r,n),Ti(t,e,r))}};function Mf(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!ya(n,r)||!ya(a,i):!0}function yp(e,t,n){var r=!1,a=mn,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(a=Ue(t)?An:Ie.current,r=t.contextTypes,i=(r=r!=null)?kr(e,a):mn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function $f(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function Ol(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=gp,Qu(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=it(i):(i=Ue(t)?An:Ie.current,a.context=kr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_l(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&_o.enqueueReplaceState(a,a.state,null),ao(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=a.refs;s===gp&&(s=a.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function li(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Df(e){var t=e._init;return t(e._payload)}function xp(e){function t(h,m){if(e){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function a(h,m){return h=cn(h,m),h.index=0,h.sibling=null,h}function i(h,m,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,m,v,k){return m===null||m.tag!==6?(m=Fs(v,h.mode,k),m.return=h,m):(m=a(m,v),m.return=h,m)}function l(h,m,v,k){var E=v.type;return E===Zn?c(h,m,v.props.children,k,v.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Xt&&Df(E)===m.type)?(k=a(m,v.props),k.ref=Ur(h,m,v),k.return=h,k):(k=Mi(v.type,v.key,v.props,null,h.mode,k),k.ref=Ur(h,m,v),k.return=h,k)}function u(h,m,v,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Us(v,h.mode,k),m.return=h,m):(m=a(m,v.children||[]),m.return=h,m)}function c(h,m,v,k,E){return m===null||m.tag!==7?(m=Ln(v,h.mode,k,E),m.return=h,m):(m=a(m,v),m.return=h,m)}function d(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Fs(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case qa:return v=Mi(m.type,m.key,m.props,null,h.mode,v),v.ref=Ur(h,null,m),v.return=h,v;case qn:return m=Us(m,h.mode,v),m.return=h,m;case Xt:var k=m._init;return d(h,k(m._payload),v)}if(Xr(m)||zr(m))return m=Ln(m,h.mode,v,null),m.return=h,m;li(h,m)}return null}function p(h,m,v,k){var E=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:s(h,m,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qa:return v.key===E?l(h,m,v,k):null;case qn:return v.key===E?u(h,m,v,k):null;case Xt:return E=v._init,p(h,m,E(v._payload),k)}if(Xr(v)||zr(v))return E!==null?null:c(h,m,v,k,null);li(h,v)}return null}function g(h,m,v,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(v)||null,s(m,h,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case qa:return h=h.get(k.key===null?v:k.key)||null,l(m,h,k,E);case qn:return h=h.get(k.key===null?v:k.key)||null,u(m,h,k,E);case Xt:var C=k._init;return g(h,m,v,C(k._payload),E)}if(Xr(k)||zr(k))return h=h.get(v)||null,c(m,h,k,E,null);li(m,k)}return null}function y(h,m,v,k){for(var E=null,C=null,b=m,N=m=0,I=null;b!==null&&N<v.length;N++){b.index>N?(I=b,b=null):I=b.sibling;var _=p(h,b,v[N],k);if(_===null){b===null&&(b=I);break}e&&b&&_.alternate===null&&t(h,b),m=i(_,m,N),C===null?E=_:C.sibling=_,C=_,b=I}if(N===v.length)return n(h,b),ne&&bn(h,N),E;if(b===null){for(;N<v.length;N++)b=d(h,v[N],k),b!==null&&(m=i(b,m,N),C===null?E=b:C.sibling=b,C=b);return ne&&bn(h,N),E}for(b=r(h,b);N<v.length;N++)I=g(b,h,N,v[N],k),I!==null&&(e&&I.alternate!==null&&b.delete(I.key===null?N:I.key),m=i(I,m,N),C===null?E=I:C.sibling=I,C=I);return e&&b.forEach(function(re){return t(h,re)}),ne&&bn(h,N),E}function x(h,m,v,k){var E=zr(v);if(typeof E!="function")throw Error(j(150));if(v=E.call(v),v==null)throw Error(j(151));for(var C=E=null,b=m,N=m=0,I=null,_=v.next();b!==null&&!_.done;N++,_=v.next()){b.index>N?(I=b,b=null):I=b.sibling;var re=p(h,b,_.value,k);if(re===null){b===null&&(b=I);break}e&&b&&re.alternate===null&&t(h,b),m=i(re,m,N),C===null?E=re:C.sibling=re,C=re,b=I}if(_.done)return n(h,b),ne&&bn(h,N),E;if(b===null){for(;!_.done;N++,_=v.next())_=d(h,_.value,k),_!==null&&(m=i(_,m,N),C===null?E=_:C.sibling=_,C=_);return ne&&bn(h,N),E}for(b=r(h,b);!_.done;N++,_=v.next())_=g(b,h,N,_.value,k),_!==null&&(e&&_.alternate!==null&&b.delete(_.key===null?N:_.key),m=i(_,m,N),C===null?E=_:C.sibling=_,C=_);return e&&b.forEach(function(ce){return t(h,ce)}),ne&&bn(h,N),E}function S(h,m,v,k){if(typeof v=="object"&&v!==null&&v.type===Zn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case qa:e:{for(var E=v.key,C=m;C!==null;){if(C.key===E){if(E=v.type,E===Zn){if(C.tag===7){n(h,C.sibling),m=a(C,v.props.children),m.return=h,h=m;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Xt&&Df(E)===C.type){n(h,C.sibling),m=a(C,v.props),m.ref=Ur(h,C,v),m.return=h,h=m;break e}n(h,C);break}else t(h,C);C=C.sibling}v.type===Zn?(m=Ln(v.props.children,h.mode,k,v.key),m.return=h,h=m):(k=Mi(v.type,v.key,v.props,null,h.mode,k),k.ref=Ur(h,m,v),k.return=h,h=k)}return o(h);case qn:e:{for(C=v.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=a(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=Us(v,h.mode,k),m.return=h,h=m}return o(h);case Xt:return C=v._init,S(h,m,C(v._payload),k)}if(Xr(v))return y(h,m,v,k);if(zr(v))return x(h,m,v,k);li(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=a(m,v),m.return=h,h=m):(n(h,m),m=Fs(v,h.mode,k),m.return=h,h=m),o(h)):n(h,m)}return S}var br=xp(!0),wp=xp(!1),Wa={},Nt=yn(Wa),Sa=yn(Wa),ba=yn(Wa);function On(e){if(e===Wa)throw Error(j(174));return e}function Ku(e,t){switch(K(ba,t),K(Sa,e),K(Nt,Wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ll(t,e)}Z(Nt),K(Nt,t)}function Er(){Z(Nt),Z(Sa),Z(ba)}function kp(e){On(ba.current);var t=On(Nt.current),n=ll(t,e.type);t!==n&&(K(Sa,e),K(Nt,n))}function Gu(e){Sa.current===e&&(Z(Nt),Z(Sa))}var ae=yn(0);function io(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ls=[];function qu(){for(var e=0;e<Ls.length;e++)Ls[e]._workInProgressVersionPrimary=null;Ls.length=0}var Ii=Bt.ReactCurrentDispatcher,As=Bt.ReactCurrentBatchConfig,Mn=0,ie=null,ge=null,we=null,oo=!1,aa=!1,Ea=0,Gv=0;function Pe(){throw Error(j(321))}function Zu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Ju(e,t,n,r,a,i){if(Mn=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?eg:tg,e=n(r,a),aa){i=0;do{if(aa=!1,Ea=0,25<=i)throw Error(j(301));i+=1,we=ge=null,t.updateQueue=null,Ii.current=ng,e=n(r,a)}while(aa)}if(Ii.current=so,t=ge!==null&&ge.next!==null,Mn=0,we=ge=ie=null,oo=!1,t)throw Error(j(300));return e}function ec(){var e=Ea!==0;return Ea=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ie.memoizedState=we=e:we=we.next=e,we}function ot(){if(ge===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=we===null?ie.memoizedState:we.next;if(t!==null)we=t,ge=e;else{if(e===null)throw Error(j(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?ie.memoizedState=we=e:we=we.next=e}return we}function Ca(e,t){return typeof t=="function"?t(e):t}function zs(e){var t=ot(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ge,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=o=null,l=null,u=i;do{var c=u.lane;if((Mn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,ie.lanes|=c,$n|=c}u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=s,vt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,ie.lanes|=i,$n|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ms(e){var t=ot(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);vt(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sp(){}function bp(e,t){var n=ie,r=ot(),a=t(),i=!vt(r.memoizedState,a);if(i&&(r.memoizedState=a,De=!0),r=r.queue,tc(Np.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Na(9,Cp.bind(null,n,r,a,t),void 0,null),ke===null)throw Error(j(349));Mn&30||Ep(n,t,a)}return a}function Ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cp(e,t,n,r){t.value=n,t.getSnapshot=r,jp(t)&&Pp(e)}function Np(e,t,n){return n(function(){jp(t)&&Pp(e)})}function jp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Pp(e){var t=Mt(e,1);t!==null&&ht(t,e,1,-1)}function Ff(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:e},t.queue=e,e=e.dispatch=Jv.bind(null,ie,e),[t.memoizedState,e]}function Na(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _p(){return ot().memoizedState}function Ri(e,t,n,r){var a=wt();ie.flags|=e,a.memoizedState=Na(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var a=ot();r=r===void 0?null:r;var i=void 0;if(ge!==null){var o=ge.memoizedState;if(i=o.destroy,r!==null&&Zu(r,o.deps)){a.memoizedState=Na(t,n,i,r);return}}ie.flags|=e,a.memoizedState=Na(1|t,n,i,r)}function Uf(e,t){return Ri(8390656,8,e,t)}function tc(e,t){return Oo(2048,8,e,t)}function Op(e,t){return Oo(4,2,e,t)}function Tp(e,t){return Oo(4,4,e,t)}function Ip(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rp(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,Ip.bind(null,t,e),n)}function nc(){}function Lp(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ap(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zp(e,t,n){return Mn&21?(vt(n,t)||(n=Dm(),ie.lanes|=n,$n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function qv(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=As.transition;As.transition={};try{e(!1),t()}finally{Y=n,As.transition=r}}function Mp(){return ot().memoizedState}function Zv(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$p(e))Dp(t,n);else if(n=hp(e,t,n,r),n!==null){var a=Le();ht(n,e,r,a),Fp(n,t,r)}}function Jv(e,t,n){var r=un(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($p(e))Dp(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,vt(s,o)){var l=t.interleaved;l===null?(a.next=a,Xu(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=hp(e,t,a,r),n!==null&&(a=Le(),ht(n,e,r,a),Fp(n,t,r))}}function $p(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Dp(e,t){aa=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}var so={readContext:it,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},eg={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Uf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4194308,4,Ip.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zv.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Ff,useDebugValue:nc,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Ff(!1),t=e[0];return e=qv.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,a=wt();if(ne){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ke===null)throw Error(j(349));Mn&30||Ep(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Uf(Np.bind(null,r,i,e),[e]),r.flags|=2048,Na(9,Cp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=ke.identifierPrefix;if(ne){var n=Rt,r=It;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ea++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tg={readContext:it,useCallback:Lp,useContext:it,useEffect:tc,useImperativeHandle:Rp,useInsertionEffect:Op,useLayoutEffect:Tp,useMemo:Ap,useReducer:zs,useRef:_p,useState:function(){return zs(Ca)},useDebugValue:nc,useDeferredValue:function(e){var t=ot();return zp(t,ge.memoizedState,e)},useTransition:function(){var e=zs(Ca)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:bp,useId:Mp,unstable_isNewReconciler:!1},ng={readContext:it,useCallback:Lp,useContext:it,useEffect:tc,useImperativeHandle:Rp,useInsertionEffect:Op,useLayoutEffect:Tp,useMemo:Ap,useReducer:Ms,useRef:_p,useState:function(){return Ms(Ca)},useDebugValue:nc,useDeferredValue:function(e){var t=ot();return ge===null?t.memoizedState=e:zp(t,ge.memoizedState,e)},useTransition:function(){var e=Ms(Ca)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:bp,useId:Mp,unstable_isNewReconciler:!1};function Cr(e,t){try{var n="",r=t;do n+=O1(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function $s(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rg=typeof WeakMap=="function"?WeakMap:Map;function Up(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){uo||(uo=!0,Ul=r),Tl(e,t)},n}function Bp(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Tl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Tl(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Bf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rg;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=gg.bind(null,e,t,n),t.then(e,e))}function Wf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vf(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var ag=Bt.ReactCurrentOwner,De=!1;function Re(e,t,n,r){t.child=e===null?wp(t,null,n,r):br(t,e.child,n,r)}function Yf(e,t,n,r,a){n=n.render;var i=t.ref;return vr(t,a),r=Ju(e,t,n,r,i,a),n=ec(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$t(e,t,a)):(ne&&n&&Uu(t),t.flags|=1,Re(e,t,r,a),t.child)}function Hf(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!cc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Wp(e,t,i,r,a)):(e=Mi(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(o,r)&&e.ref===t.ref)return $t(e,t,a)}return t.flags|=1,e=cn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Wp(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(ya(i,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,$t(e,t,a)}return Il(e,t,n,r,a)}function Vp(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(lr,He),He|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(lr,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(lr,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(lr,He),He|=r;return Re(e,t,a,n),t.child}function Yp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Il(e,t,n,r,a){var i=Ue(n)?An:Ie.current;return i=kr(t,i),vr(t,a),n=Ju(e,t,n,r,i,a),r=ec(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$t(e,t,a)):(ne&&r&&Uu(t),t.flags|=1,Re(e,t,n,a),t.child)}function Xf(e,t,n,r,a){if(Ue(n)){var i=!0;Ji(t)}else i=!1;if(vr(t,a),t.stateNode===null)Li(e,t),yp(t,n,r),Ol(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=Ue(n)?An:Ie.current,u=kr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&$f(t,o,r,u),Qt=!1;var p=t.memoizedState;o.state=p,ao(t,r,o,a),l=t.memoizedState,s!==r||p!==l||Fe.current||Qt?(typeof c=="function"&&(_l(t,n,c,r),l=t.memoizedState),(s=Qt||Mf(t,n,s,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,vp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ut(t.type,s),o.props=u,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=Ue(n)?An:Ie.current,l=kr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==l)&&$f(t,o,r,l),Qt=!1,p=t.memoizedState,o.state=p,ao(t,r,o,a);var y=t.memoizedState;s!==d||p!==y||Fe.current||Qt?(typeof g=="function"&&(_l(t,n,g,r),y=t.memoizedState),(u=Qt||Mf(t,n,u,r,p,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Rl(e,t,n,r,i,a)}function Rl(e,t,n,r,a,i){Yp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&If(t,n,!1),$t(e,t,i);r=t.stateNode,ag.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=br(t,e.child,null,i),t.child=br(t,null,s,i)):Re(e,t,s,i),t.memoizedState=r.state,a&&If(t,n,!0),t.child}function Hp(e){var t=e.stateNode;t.pendingContext?Tf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tf(e,t.context,!1),Ku(e,t.containerInfo)}function Qf(e,t,n,r,a){return Sr(),Wu(a),t.flags|=256,Re(e,t,n,r),t.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xp(e,t,n){var r=t.pendingProps,a=ae.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),K(ae,a&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ro(o,r,0,null),e=Ln(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Al(n),t.memoizedState=Ll,e):rc(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return ig(e,t,o,r,s,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=cn(a,l),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=cn(s,i):(i=Ln(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Al(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ll,r}return i=e.child,e=i.sibling,r=cn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rc(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ui(e,t,n,r){return r!==null&&Wu(r),br(t,e.child,null,n),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ig(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=$s(Error(j(422))),ui(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Ro({mode:"visible",children:r.children},a,0,null),i=Ln(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&br(t,e.child,null,o),t.child.memoizedState=Al(o),t.memoizedState=Ll,i);if(!(t.mode&1))return ui(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(j(419)),r=$s(i,r,void 0),ui(e,t,o,r)}if(s=(o&e.childLanes)!==0,De||s){if(r=ke,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Mt(e,a),ht(r,e,a,-1))}return uc(),r=$s(Error(j(421))),ui(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=yg.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Xe=on(a.nextSibling),Qe=t,ne=!0,ft=null,e!==null&&(tt[nt++]=It,tt[nt++]=Rt,tt[nt++]=zn,It=e.id,Rt=e.overflow,zn=t),t=rc(t,r.children),t.flags|=4096,t)}function Kf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function Ds(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Qp(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Re(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kf(e,n,t);else if(e.tag===19)Kf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(ae,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&io(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ds(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&io(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ds(t,!0,n,null,i);break;case"together":Ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Li(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function og(e,t,n){switch(t.tag){case 3:Hp(t),Sr();break;case 5:kp(t);break;case 1:Ue(t.type)&&Ji(t);break;case 4:Ku(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;K(no,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?Xp(e,t,n):(K(ae,ae.current&1),e=$t(e,t,n),e!==null?e.sibling:null);K(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qp(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),K(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Vp(e,t,n)}return $t(e,t,n)}var Kp,zl,Gp,qp;Kp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zl=function(){};Gp=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,On(Nt.current);var i=null;switch(n){case"input":a=al(e,a),r=al(e,r),i=[];break;case"select":a=oe({},a,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":a=sl(e,a),r=sl(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qi)}ul(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fa.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};qp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sg(e,t,n){var r=t.pendingProps;switch(Bu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Ue(t.type)&&Zi(),_e(t),null;case 3:return r=t.stateNode,Er(),Z(Fe),Z(Ie),qu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Vl(ft),ft=null))),zl(e,t),_e(t),null;case 5:Gu(t);var a=On(ba.current);if(n=t.type,e!==null&&t.stateNode!=null)Gp(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return _e(t),null}if(e=On(Nt.current),si(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[bt]=t,r[ka]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(a=0;a<Kr.length;a++)G(Kr[a],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":rf(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":of(r,i),G("invalid",r)}ul(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&oi(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&oi(r.textContent,s,e),a=["children",""+s]):fa.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":Za(r),af(r,i,!0);break;case"textarea":Za(r),sf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qi)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Em(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[bt]=t,e[ka]=r,Kp(e,t,!1,!1),t.stateNode=e;e:{switch(o=cl(n,r),n){case"dialog":G("cancel",e),G("close",e),a=r;break;case"iframe":case"object":case"embed":G("load",e),a=r;break;case"video":case"audio":for(a=0;a<Kr.length;a++)G(Kr[a],e);a=r;break;case"source":G("error",e),a=r;break;case"img":case"image":case"link":G("error",e),G("load",e),a=r;break;case"details":G("toggle",e),a=r;break;case"input":rf(e,r),a=al(e,r),G("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=oe({},r,{value:void 0}),G("invalid",e);break;case"textarea":of(e,r),a=sl(e,r),G("invalid",e);break;default:a=r}ul(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?jm(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cm(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(e,l):typeof l=="number"&&da(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(fa.hasOwnProperty(i)?l!=null&&i==="onScroll"&&G("scroll",e):l!=null&&ju(e,i,l,o))}switch(n){case"input":Za(e),af(e,r,!1);break;case"textarea":Za(e),sf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?dr(e,!!r.multiple,i,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)qp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=On(ba.current),On(Nt.current),si(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:oi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return _e(t),null;case 13:if(Z(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Xe!==null&&t.mode&1&&!(t.flags&128))pp(),Sr(),t.flags|=98560,i=!1;else if(i=si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[bt]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else ft!==null&&(Vl(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?ye===0&&(ye=3):uc())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return Er(),zl(e,t),e===null&&xa(t.stateNode.containerInfo),_e(t),null;case 10:return Hu(t.type._context),_e(t),null;case 17:return Ue(t.type)&&Zi(),_e(t),null;case 19:if(Z(ae),i=t.memoizedState,i===null)return _e(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Br(i,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=io(e),o!==null){for(t.flags|=128,Br(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ae,ae.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>Nr&&(t.flags|=128,r=!0,Br(i,!1),t.lanes=4194304)}else{if(!r)if(e=io(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ne)return _e(t),null}else 2*ue()-i.renderingStartTime>Nr&&n!==1073741824&&(t.flags|=128,r=!0,Br(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=ae.current,K(ae,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return lc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function lg(e,t){switch(Bu(t),t.tag){case 1:return Ue(t.type)&&Zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),Z(Fe),Z(Ie),qu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gu(t),null;case 13:if(Z(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ae),null;case 4:return Er(),null;case 10:return Hu(t.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var ci=!1,Te=!1,ug=typeof WeakSet=="function"?WeakSet:Set,R=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Ml(e,t,n){try{n()}catch(r){se(e,t,r)}}var Gf=!1;function cg(e,t){if(wl=Qi,e=tp(),Fu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var g;d!==n||a!==0&&d.nodeType!==3||(s=o+a),d!==i||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===n&&++u===a&&(s=o),p===i&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kl={focusedElem:e,selectionRange:n},Qi=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,S=y.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:ut(t.type,x),S);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(k){se(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Gf,Gf=!1,y}function ia(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Ml(t,n,i)}a=a.next}while(a!==r)}}function To(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $l(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zp(e){var t=e.alternate;t!==null&&(e.alternate=null,Zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[ka],delete t[El],delete t[Hv],delete t[Xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jp(e){return e.tag===5||e.tag===3||e.tag===4}function qf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(r!==4&&(e=e.child,e!==null))for(Dl(e,t,n),e=e.sibling;e!==null;)Dl(e,t,n),e=e.sibling}function Fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;e!==null;)Fl(e,t,n),e=e.sibling}var Ee=null,ct=!1;function Yt(e,t,n){for(n=n.child;n!==null;)e0(e,t,n),n=n.sibling}function e0(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 5:Te||sr(n,t);case 6:var r=Ee,a=ct;Ee=null,Yt(e,t,n),Ee=r,ct=a,Ee!==null&&(ct?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(ct?(e=Ee,n=n.stateNode,e.nodeType===8?Is(e.parentNode,n):e.nodeType===1&&Is(e,n),va(e)):Is(Ee,n.stateNode));break;case 4:r=Ee,a=ct,Ee=n.stateNode.containerInfo,ct=!0,Yt(e,t,n),Ee=r,ct=a;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ml(n,t,o),a=a.next}while(a!==r)}Yt(e,t,n);break;case 1:if(!Te&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Yt(e,t,n),Te=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function Zf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ug),t.forEach(function(r){var a=xg.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ee=s.stateNode,ct=!1;break e;case 3:Ee=s.stateNode.containerInfo,ct=!0;break e;case 4:Ee=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(Ee===null)throw Error(j(160));e0(i,o,a),Ee=null,ct=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){se(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)t0(t,e),t=t.sibling}function t0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),xt(e),r&4){try{ia(3,e,e.return),To(3,e)}catch(x){se(e,e.return,x)}try{ia(5,e,e.return)}catch(x){se(e,e.return,x)}}break;case 1:lt(t,e),xt(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(lt(t,e),xt(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var a=e.stateNode;try{da(a,"")}catch(x){se(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Sm(a,i),cl(s,o);var u=cl(s,i);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?jm(a,d):c==="dangerouslySetInnerHTML"?Cm(a,d):c==="children"?da(a,d):ju(a,c,d,u)}switch(s){case"input":il(a,i);break;case"textarea":bm(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?dr(a,!!i.multiple,g,!1):p!==!!i.multiple&&(i.defaultValue!=null?dr(a,!!i.multiple,i.defaultValue,!0):dr(a,!!i.multiple,i.multiple?[]:"",!1))}a[ka]=i}catch(x){se(e,e.return,x)}}break;case 6:if(lt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(j(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){se(e,e.return,x)}}break;case 3:if(lt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{va(t.containerInfo)}catch(x){se(e,e.return,x)}break;case 4:lt(t,e),xt(e);break;case 13:lt(t,e),xt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(oc=ue())),r&4&&Zf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,lt(t,e),Te=u):lt(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(d=R=c;R!==null;){switch(p=R,g=p.child,p.tag){case 0:case 11:case 14:case 15:ia(4,p,p.return);break;case 1:sr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){se(r,n,x)}}break;case 5:sr(p,p.return);break;case 22:if(p.memoizedState!==null){ed(d);continue}}g!==null?(g.return=p,R=g):ed(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{a=d.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Nm("display",o))}catch(x){se(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){se(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(t,e),xt(e),r&4&&Zf(e);break;case 21:break;default:lt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jp(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(da(a,""),r.flags&=-33);var i=qf(e);Fl(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=qf(e);Dl(e,s,o);break;default:throw Error(j(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fg(e,t,n){R=e,n0(e)}function n0(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var a=R,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||ci;if(!o){var s=a.alternate,l=s!==null&&s.memoizedState!==null||Te;s=ci;var u=Te;if(ci=o,(Te=l)&&!u)for(R=a;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?td(a):l!==null?(l.return=o,R=l):td(a);for(;i!==null;)R=i,n0(i),i=i.sibling;R=a,ci=s,Te=u}Jf(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,R=i):Jf(e)}}function Jf(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||To(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&zf(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zf(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&va(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Te||t.flags&512&&$l(t)}catch(p){se(t,t.return,p)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function ed(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function td(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{To(4,t)}catch(l){se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(l){se(t,a,l)}}var i=t.return;try{$l(t)}catch(l){se(t,i,l)}break;case 5:var o=t.return;try{$l(t)}catch(l){se(t,o,l)}}}catch(l){se(t,t.return,l)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var dg=Math.ceil,lo=Bt.ReactCurrentDispatcher,ac=Bt.ReactCurrentOwner,at=Bt.ReactCurrentBatchConfig,B=0,ke=null,pe=null,Ne=0,He=0,lr=yn(0),ye=0,ja=null,$n=0,Io=0,ic=0,oa=null,$e=null,oc=0,Nr=1/0,Ot=null,uo=!1,Ul=null,ln=null,fi=!1,Zt=null,co=0,sa=0,Bl=null,Ai=-1,zi=0;function Le(){return B&6?ue():Ai!==-1?Ai:Ai=ue()}function un(e){return e.mode&1?B&2&&Ne!==0?Ne&-Ne:Kv.transition!==null?(zi===0&&(zi=Dm()),zi):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Hm(e.type)),e):1}function ht(e,t,n,r){if(50<sa)throw sa=0,Bl=null,Error(j(185));Fa(e,n,r),(!(B&2)||e!==ke)&&(e===ke&&(!(B&2)&&(Io|=n),ye===4&&Gt(e,Ne)),Be(e,r),n===1&&B===0&&!(t.mode&1)&&(Nr=ue()+500,Po&&xn()))}function Be(e,t){var n=e.callbackNode;K1(e,t);var r=Xi(e,e===ke?Ne:0);if(r===0)n!==null&&cf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cf(n),t===1)e.tag===0?Qv(nd.bind(null,e)):fp(nd.bind(null,e)),Vv(function(){!(B&6)&&xn()}),n=null;else{switch(Fm(r)){case 1:n=Iu;break;case 4:n=Mm;break;case 16:n=Hi;break;case 536870912:n=$m;break;default:n=Hi}n=c0(n,r0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function r0(e,t){if(Ai=-1,zi=0,B&6)throw Error(j(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Xi(e,e===ke?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fo(e,r);else{t=r;var a=B;B|=2;var i=i0();(ke!==e||Ne!==t)&&(Ot=null,Nr=ue()+500,Rn(e,t));do try{hg();break}catch(s){a0(e,s)}while(!0);Yu(),lo.current=i,B=a,pe!==null?t=0:(ke=null,Ne=0,t=ye)}if(t!==0){if(t===2&&(a=hl(e),a!==0&&(r=a,t=Wl(e,a))),t===1)throw n=ja,Rn(e,0),Gt(e,r),Be(e,ue()),n;if(t===6)Gt(e,r);else{if(a=e.current.alternate,!(r&30)&&!mg(a)&&(t=fo(e,r),t===2&&(i=hl(e),i!==0&&(r=i,t=Wl(e,i))),t===1))throw n=ja,Rn(e,0),Gt(e,r),Be(e,ue()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:En(e,$e,Ot);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=oc+500-ue(),10<t)){if(Xi(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=bl(En.bind(null,e,$e,Ot),t);break}En(e,$e,Ot);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-pt(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dg(r/1960))-r,10<r){e.timeoutHandle=bl(En.bind(null,e,$e,Ot),r);break}En(e,$e,Ot);break;case 5:En(e,$e,Ot);break;default:throw Error(j(329))}}}return Be(e,ue()),e.callbackNode===n?r0.bind(null,e):null}function Wl(e,t){var n=oa;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=fo(e,t),e!==2&&(t=$e,$e=n,t!==null&&Vl(t)),e}function Vl(e){$e===null?$e=e:$e.push.apply($e,e)}function mg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!vt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~ic,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function nd(e){if(B&6)throw Error(j(327));gr();var t=Xi(e,0);if(!(t&1))return Be(e,ue()),null;var n=fo(e,t);if(e.tag!==0&&n===2){var r=hl(e);r!==0&&(t=r,n=Wl(e,r))}if(n===1)throw n=ja,Rn(e,0),Gt(e,t),Be(e,ue()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,$e,Ot),Be(e,ue()),null}function sc(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Nr=ue()+500,Po&&xn())}}function Dn(e){Zt!==null&&Zt.tag===0&&!(B&6)&&gr();var t=B;B|=1;var n=at.transition,r=Y;try{if(at.transition=null,Y=1,e)return e()}finally{Y=r,at.transition=n,B=t,!(B&6)&&xn()}}function lc(){He=lr.current,Z(lr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wv(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zi();break;case 3:Er(),Z(Fe),Z(Ie),qu();break;case 5:Gu(r);break;case 4:Er();break;case 13:Z(ae);break;case 19:Z(ae);break;case 10:Hu(r.type._context);break;case 22:case 23:lc()}n=n.return}if(ke=e,pe=e=cn(e.current,null),Ne=He=t,ye=0,ja=null,ic=Io=$n=0,$e=oa=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}_n=null}return e}function a0(e,t){do{var n=pe;try{if(Yu(),Ii.current=so,oo){for(var r=ie.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}oo=!1}if(Mn=0,we=ge=ie=null,aa=!1,Ea=0,ac.current=null,n===null||n.return===null){ye=1,ja=t,pe=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=Ne,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Wf(o);if(g!==null){g.flags&=-257,Vf(g,o,s,i,t),g.mode&1&&Bf(i,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Bf(i,u,t),uc();break e}l=Error(j(426))}}else if(ne&&s.mode&1){var S=Wf(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Vf(S,o,s,i,t),Wu(Cr(l,s));break e}}i=l=Cr(l,s),ye!==4&&(ye=2),oa===null?oa=[i]:oa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Up(i,l,t);Af(i,h);break e;case 1:s=l;var m=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ln===null||!ln.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Bp(i,s,t);Af(i,k);break e}}i=i.return}while(i!==null)}s0(n)}catch(E){t=E,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function i0(){var e=lo.current;return lo.current=so,e===null?so:e}function uc(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||!($n&268435455)&&!(Io&268435455)||Gt(ke,Ne)}function fo(e,t){var n=B;B|=2;var r=i0();(ke!==e||Ne!==t)&&(Ot=null,Rn(e,t));do try{pg();break}catch(a){a0(e,a)}while(!0);if(Yu(),B=n,lo.current=r,pe!==null)throw Error(j(261));return ke=null,Ne=0,ye}function pg(){for(;pe!==null;)o0(pe)}function hg(){for(;pe!==null&&!F1();)o0(pe)}function o0(e){var t=u0(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?s0(e):pe=t,ac.current=null}function s0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lg(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,pe=null;return}}else if(n=sg(n,t,He),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ye===0&&(ye=5)}function En(e,t,n){var r=Y,a=at.transition;try{at.transition=null,Y=1,vg(e,t,n,r)}finally{at.transition=a,Y=r}return null}function vg(e,t,n,r){do gr();while(Zt!==null);if(B&6)throw Error(j(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(G1(e,i),e===ke&&(pe=ke=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fi||(fi=!0,c0(Hi,function(){return gr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=at.transition,at.transition=null;var o=Y;Y=1;var s=B;B|=4,ac.current=null,cg(e,n),t0(n,e),zv(kl),Qi=!!wl,kl=wl=null,e.current=n,fg(n),U1(),B=s,Y=o,at.transition=i}else e.current=n;if(fi&&(fi=!1,Zt=e,co=a),i=e.pendingLanes,i===0&&(ln=null),V1(n.stateNode),Be(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(uo)throw uo=!1,e=Ul,Ul=null,e;return co&1&&e.tag!==0&&gr(),i=e.pendingLanes,i&1?e===Bl?sa++:(sa=0,Bl=e):sa=0,xn(),null}function gr(){if(Zt!==null){var e=Fm(co),t=at.transition,n=Y;try{if(at.transition=null,Y=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,co=0,B&6)throw Error(j(331));var a=B;for(B|=4,R=e.current;R!==null;){var i=R,o=i.child;if(R.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:ia(8,c,i)}var d=c.child;if(d!==null)d.return=c,R=d;else for(;R!==null;){c=R;var p=c.sibling,g=c.return;if(Zp(c),c===u){R=null;break}if(p!==null){p.return=g,R=p;break}R=g}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}R=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,R=o;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ia(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,R=h;break e}R=i.return}}var m=e.current;for(R=m;R!==null;){o=R;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,R=v;else e:for(o=m;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:To(9,s)}}catch(E){se(s,s.return,E)}if(s===o){R=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,R=k;break e}R=s.return}}if(B=a,xn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(bo,e)}catch{}r=!0}return r}finally{Y=n,at.transition=t}}return!1}function rd(e,t,n){t=Cr(n,t),t=Up(e,t,1),e=sn(e,t,1),t=Le(),e!==null&&(Fa(e,1,t),Be(e,t))}function se(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=Cr(n,e),e=Bp(t,e,1),t=sn(t,e,1),e=Le(),t!==null&&(Fa(t,1,e),Be(t,e));break}}t=t.return}}function gg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Ne&n)===n&&(ye===4||ye===3&&(Ne&130023424)===Ne&&500>ue()-oc?Rn(e,0):ic|=n),Be(e,t)}function l0(e,t){t===0&&(e.mode&1?(t=ti,ti<<=1,!(ti&130023424)&&(ti=4194304)):t=1);var n=Le();e=Mt(e,t),e!==null&&(Fa(e,t,n),Be(e,n))}function yg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),l0(e,n)}function xg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),l0(e,n)}var u0;u0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,og(e,t,n);De=!!(e.flags&131072)}else De=!1,ne&&t.flags&1048576&&dp(t,to,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Li(e,t),e=t.pendingProps;var a=kr(t,Ie.current);vr(t,n),a=Ju(null,t,r,e,a,n);var i=ec();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,Ji(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Qu(t),a.updater=_o,t.stateNode=a,a._reactInternals=t,Ol(t,r,e,n),t=Rl(null,t,r,!0,i,n)):(t.tag=0,ne&&i&&Uu(t),Re(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Li(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=kg(r),e=ut(r,e),a){case 0:t=Il(null,t,r,e,n);break e;case 1:t=Xf(null,t,r,e,n);break e;case 11:t=Yf(null,t,r,e,n);break e;case 14:t=Hf(null,t,r,ut(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),Il(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),Xf(e,t,r,a,n);case 3:e:{if(Hp(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,a=i.element,vp(e,t),ao(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Cr(Error(j(423)),t),t=Qf(e,t,r,n,a);break e}else if(r!==a){a=Cr(Error(j(424)),t),t=Qf(e,t,r,n,a);break e}else for(Xe=on(t.stateNode.containerInfo.firstChild),Qe=t,ne=!0,ft=null,n=wp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===a){t=$t(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return kp(t),e===null&&jl(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Sl(r,a)?o=null:i!==null&&Sl(r,i)&&(t.flags|=32),Yp(e,t),Re(e,t,o,n),t.child;case 6:return e===null&&jl(t),null;case 13:return Xp(e,t,n);case 4:return Ku(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),Yf(e,t,r,a,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,K(no,r._currentValue),r._currentValue=o,i!==null)if(vt(i.value,o)){if(i.children===a.children&&!Fe.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Lt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Pl(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Pl(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Re(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,vr(t,n),a=it(a),r=r(a),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,a=ut(r,t.pendingProps),a=ut(r.type,a),Hf(e,t,r,a,n);case 15:return Wp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),Li(e,t),t.tag=1,Ue(r)?(e=!0,Ji(t)):e=!1,vr(t,n),yp(t,r,a),Ol(t,r,a,n),Rl(null,t,r,!0,e,n);case 19:return Qp(e,t,n);case 22:return Vp(e,t,n)}throw Error(j(156,t.tag))};function c0(e,t){return zm(e,t)}function wg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new wg(e,t,n,r)}function cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kg(e){if(typeof e=="function")return cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_u)return 11;if(e===Ou)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mi(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")cc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zn:return Ln(n.children,a,i,t);case Pu:o=8,a|=8;break;case el:return e=rt(12,n,t,a|2),e.elementType=el,e.lanes=i,e;case tl:return e=rt(13,n,t,a),e.elementType=tl,e.lanes=i,e;case nl:return e=rt(19,n,t,a),e.elementType=nl,e.lanes=i,e;case xm:return Ro(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gm:o=10;break e;case ym:o=9;break e;case _u:o=11;break e;case Ou:o=14;break e;case Xt:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=rt(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Ln(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ro(e,t,n,r){return e=rt(22,e,r,t),e.elementType=xm,e.lanes=n,e.stateNode={isHidden:!1},e}function Fs(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Us(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sg(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ks(0),this.expirationTimes=ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function fc(e,t,n,r,a,i,o,s,l){return e=new Sg(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(i),e}function bg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function f0(e){if(!e)return mn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ue(n))return cp(e,n,t)}return t}function d0(e,t,n,r,a,i,o,s,l){return e=fc(n,r,!0,e,a,i,o,s,l),e.context=f0(null),n=e.current,r=Le(),a=un(n),i=Lt(r,a),i.callback=t??null,sn(n,i,a),e.current.lanes=a,Fa(e,a,r),Be(e,r),e}function Lo(e,t,n,r){var a=t.current,i=Le(),o=un(a);return n=f0(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(a,t,o),e!==null&&(ht(e,a,o,i),Ti(e,a,o)),o}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dc(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function Eg(){return null}var m0=typeof reportError=="function"?reportError:function(e){console.error(e)};function mc(e){this._internalRoot=e}Ao.prototype.render=mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Lo(e,t,null,null)};Ao.prototype.unmount=mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){Lo(null,e,null,null)}),t[zt]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Ym(e)}};function pc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Cg(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=mo(o);i.call(u)}}var o=d0(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=o,e[zt]=o.current,xa(e.nodeType===8?e.parentNode:e),Dn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var u=mo(l);s.call(u)}}var l=fc(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=l,e[zt]=l.current,xa(e.nodeType===8?e.parentNode:e),Dn(function(){Lo(t,l,n,r)}),l}function Mo(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var s=a;a=function(){var l=mo(o);s.call(l)}}Lo(t,o,e,a)}else o=Cg(n,t,e,a,r);return mo(o)}Um=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qr(t.pendingLanes);n!==0&&(Ru(t,n|1),Be(t,ue()),!(B&6)&&(Nr=ue()+500,xn()))}break;case 13:Dn(function(){var r=Mt(e,1);if(r!==null){var a=Le();ht(r,e,1,a)}}),dc(e,1)}};Lu=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Le();ht(t,e,134217728,n)}dc(e,134217728)}};Bm=function(e){if(e.tag===13){var t=un(e),n=Mt(e,t);if(n!==null){var r=Le();ht(n,e,t,r)}dc(e,t)}};Wm=function(){return Y};Vm=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};dl=function(e,t,n){switch(t){case"input":if(il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=jo(r);if(!a)throw Error(j(90));km(r),il(r,a)}}}break;case"textarea":bm(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};Om=sc;Tm=Dn;var Ng={usingClientEntryPoint:!1,Events:[Ba,nr,jo,Pm,_m,sc]},Wr={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jg={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lm(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Eg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!di.isDisabled&&di.supportsFiber)try{bo=di.inject(jg),Ct=di}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ng;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pc(t))throw Error(j(200));return bg(e,t,null,n)};qe.createRoot=function(e,t){if(!pc(e))throw Error(j(299));var n=!1,r="",a=m0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=fc(e,1,!1,null,null,n,!1,r,a),e[zt]=t.current,xa(e.nodeType===8?e.parentNode:e),new mc(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Lm(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Dn(e)};qe.hydrate=function(e,t,n){if(!zo(t))throw Error(j(200));return Mo(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!pc(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=m0;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=d0(t,null,e,1,n??null,a,!1,i,o),e[zt]=t.current,xa(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ao(t)};qe.render=function(e,t,n){if(!zo(t))throw Error(j(200));return Mo(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!zo(e))throw Error(j(40));return e._reactRootContainer?(Dn(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};qe.unstable_batchedUpdates=sc;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Mo(e,t,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";function p0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0)}catch(e){console.error(e)}}p0(),dm.exports=qe;var h0=dm.exports;const Gr=ko(h0);var od=h0;Zs.createRoot=od.createRoot,Zs.hydrateRoot=od.hydrateRoot;var Pg={exports:{}};(function(e,t){(function(n,r,a,i,o){if("customElements"in a)o();else{if(a.AWAITING_WEB_COMPONENTS_POLYFILL)return void a.AWAITING_WEB_COMPONENTS_POLYFILL.then(o);var s=a.AWAITING_WEB_COMPONENTS_POLYFILL=c();s.then(o);var l=a.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",u=a.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in a?d(l).then(function(){s.isDone=!0,s.exec()}):d(u).then(function(){d(l).then(function(){s.isDone=!0,s.exec()})})}function c(){var p=[];return p.isDone=!1,p.exec=function(){p.splice(0).forEach(function(g){g()})},p.then=function(g){return p.isDone?g():p.push(g),p},p}function d(p){var g=c(),y=i.createElement("script");return y.type="text/javascript",y.readyState?y.onreadystatechange=function(){y.readyState!="loaded"&&y.readyState!="complete"||(y.onreadystatechange=null,g.isDone=!0,g.exec())}:y.onload=function(){g.isDone=!0,g.exec()},y.src=p,i.getElementsByTagName("head")[0].appendChild(y),y.then=g.then,y}})(0,0,window,document,function(){var n;n=function(){return function(r){var a={};function i(o){if(a[o])return a[o].exports;var s=a[o]={i:o,l:!1,exports:{}};return r[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=r,i.c=a,i.d=function(o,s,l){i.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:l})},i.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,s){if(1&s&&(o=i(o)),8&s||4&s&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&s&&typeof o!="string")for(var u in o)i.d(l,u,(function(c){return o[c]}).bind(null,u));return l},i.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(s,"a",s),s},i.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},i.p="",i(i.s=5)}([function(r,a){r.exports=function(i){var o=[];return o.toString=function(){return this.map(function(s){var l=function(u,c){var d,p=u[1]||"",g=u[3];if(!g)return p;if(c&&typeof btoa=="function"){var y=(d=g,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(d))))+" */"),x=g.sources.map(function(S){return"/*# sourceURL="+g.sourceRoot+S+" */"});return[p].concat(x).concat([y]).join(`
`)}return[p].join(`
`)}(s,i);return s[2]?"@media "+s[2]+"{"+l+"}":l}).join("")},o.i=function(s,l){typeof s=="string"&&(s=[[null,s,""]]);for(var u={},c=0;c<this.length;c++){var d=this[c][0];typeof d=="number"&&(u[d]=!0)}for(c=0;c<s.length;c++){var p=s[c];typeof p[0]=="number"&&u[p[0]]||(l&&!p[2]?p[2]=l:l&&(p[2]="("+p[2]+") and ("+l+")"),o.push(p))}},o}},function(r,a,i){var o=i(3);r.exports=typeof o=="string"?o:o.toString()},function(r,a,i){var o=i(4);r.exports=typeof o=="string"?o:o.toString()},function(r,a,i){(r.exports=i(0)(!1)).push([r.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(r,a,i){(r.exports=i(0)(!1)).push([r.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(r,a,i){i.r(a),i.d(a,"BoxIconElement",function(){return E});var o,s,l,u,c=i(1),d=i.n(c),p=i(2),g=i.n(p),y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},x=function(){function C(b,N){for(var I=0;I<N.length;I++){var _=N[I];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(b,_.key,_)}}return function(b,N,I){return N&&C(b.prototype,N),I&&C(b,I),b}}(),S=(s=(o=Object).getPrototypeOf||function(C){return C.__proto__},l=o.setPrototypeOf||function(C,b){return C.__proto__=b,C},u=(typeof Reflect>"u"?"undefined":y(Reflect))==="object"?Reflect.construct:function(C,b,N){var I,_=[null];return _.push.apply(_,b),I=C.bind.apply(C,_),l(new I,N.prototype)},function(C){var b=s(C);return l(C,l(function(){return u(b,arguments,s(this).constructor)},b))}),h=window,m={},v=document.createElement("template"),k=function(){return!!h.ShadyCSS};v.innerHTML=`
<style>
:host {
  display: inline-block;
  font-size: initial;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
}
:host([size=xs]) {
    width: 0.8rem;
    height: 0.8rem;
}
:host([size=sm]) {
    width: 1.55rem;
    height: 1.55rem;
}
:host([size=md]) {
    width: 2.25rem;
    height: 2.25rem;
}
:host([size=lg]) {
    width: 3.0rem;
    height: 3.0rem;
}

:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {
    width: auto;
    height: auto;
}
:host([pull=left]) #icon {
    float: left;
    margin-right: .3em!important;
}
:host([pull=right]) #icon {
    float: right;
    margin-left: .3em!important;
}
:host([border=square]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: .25em;
}
:host([border=circle]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: 50%;
}
#icon,
svg {
  width: 100%;
  height: 100%;
}
#icon {
    box-sizing: border-box;
} 
`+d.a+`
`+g.a+`
</style>
<div id="icon"></div>`;var E=S(function(C){function b(){(function(I,_){if(!(I instanceof _))throw new TypeError("Cannot call a class as a function")})(this,b);var N=function(I,_){if(!I)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!_||typeof _!="object"&&typeof _!="function"?I:_}(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return N.$ui=N.attachShadow({mode:"open"}),N.$ui.appendChild(N.ownerDocument.importNode(v.content,!0)),k()&&h.ShadyCSS.styleElement(N),N._state={$iconHolder:N.$ui.getElementById("icon"),type:N.getAttribute("type")},N}return function(N,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);N.prototype=Object.create(I&&I.prototype,{constructor:{value:N,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(N,I):N.__proto__=I)}(b,HTMLElement),x(b,null,[{key:"getIconSvg",value:function(N,I){var _=this.cdnUrl+"/regular/bx-"+N+".svg";return I==="solid"?_=this.cdnUrl+"/solid/bxs-"+N+".svg":I==="logo"&&(_=this.cdnUrl+"/logos/bxl-"+N+".svg"),_&&m[_]||(m[_]=new Promise(function(re,ce){var be=new XMLHttpRequest;be.addEventListener("load",function(){this.status<200||this.status>=300?ce(new Error(this.status+" "+this.responseText)):re(this.responseText)}),be.onerror=ce,be.onabort=ce,be.open("GET",_),be.send()})),m[_]}},{key:"define",value:function(N){N=N||this.tagName,k()&&h.ShadyCSS.prepareTemplate(v,N),customElements.define(N,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),x(b,[{key:"attributeChangedCallback",value:function(N,I,_){var re=this._state.$iconHolder;switch(N){case"type":(function(ce,be,ve){var U=ce._state;U.$iconHolder.textContent="",U.type&&(U.type=null),U.type=!ve||ve!=="solid"&&ve!=="logo"?"regular":ve,U.currentName!==void 0&&ce.constructor.getIconSvg(U.currentName,U.type).then(function(Ve){U.type===ve&&(U.$iconHolder.innerHTML=Ve)}).catch(function(Ve){console.error("Failed to load icon: "+U.currentName+`
`+Ve)})})(this,0,_);break;case"name":(function(ce,be,ve){var U=ce._state;U.currentName=ve,U.$iconHolder.textContent="",ve&&U.type!==void 0&&ce.constructor.getIconSvg(ve,U.type).then(function(Ve){U.currentName===ve&&(U.$iconHolder.innerHTML=Ve)}).catch(function(Ve){console.error("Failed to load icon: "+ve+`
`+Ve)})})(this,0,_);break;case"color":re.style.fill=_||"";break;case"size":(function(ce,be,ve){var U=ce._state;U.size&&(U.$iconHolder.style.width=U.$iconHolder.style.height="",U.size=U.sizeType=null),ve&&!/^(xs|sm|md|lg)$/.test(U.size)&&(U.size=ve.trim(),U.$iconHolder.style.width=U.$iconHolder.style.height=U.size)})(this,0,_);break;case"rotate":I&&re.classList.remove("bx-rotate-"+I),_&&re.classList.add("bx-rotate-"+_);break;case"flip":I&&re.classList.remove("bx-flip-"+I),_&&re.classList.add("bx-flip-"+_);break;case"animation":I&&re.classList.remove("bx-"+I),_&&re.classList.add("bx-"+_)}}},{key:"connectedCallback",value:function(){k()&&h.ShadyCSS.styleElement(this)}}]),b}());a.default=E,E.define()}])},e.exports=n()})})(Pg);/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}var Jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Jt||(Jt={}));const sd="popstate";function _g(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:o,hash:s}=r.location;return Yl("",{pathname:i,search:o,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:po(a)}return Tg(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Og(){return Math.random().toString(36).substr(2,8)}function ld(e,t){return{usr:e.state,key:e.key,idx:t}}function Yl(e,t,n,r){return n===void 0&&(n=null),Pa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ir(t):t,{state:n,key:t&&t.key||r||Og()})}function po(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Tg(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=Jt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Pa({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=Jt.Pop;let S=c(),h=S==null?null:S-u;u=S,l&&l({action:s,location:x.location,delta:h})}function p(S,h){s=Jt.Push;let m=Yl(x.location,S,h);n&&n(m,S),u=c()+1;let v=ld(m,u),k=x.createHref(m);try{o.pushState(v,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;a.location.assign(k)}i&&l&&l({action:s,location:x.location,delta:1})}function g(S,h){s=Jt.Replace;let m=Yl(x.location,S,h);n&&n(m,S),u=c();let v=ld(m,u),k=x.createHref(m);o.replaceState(v,"",k),i&&l&&l({action:s,location:x.location,delta:0})}function y(S){let h=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof S=="string"?S:po(S);return he(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let x={get action(){return s},get location(){return e(a,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(sd,d),l=S,()=>{a.removeEventListener(sd,d),l=null}},createHref(S){return t(a,S)},createURL:y,encodeLocation(S){let h=y(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(S){return o.go(S)}};return x}var ud;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ud||(ud={}));function Ig(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ir(t):t,a=vc(r.pathname||"/",n);if(a==null)return null;let i=v0(e);Rg(i);let o=null;for(let s=0;o==null&&s<i.length;++s)o=Bg(i[s],Yg(a));return o}function v0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=fn([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(he(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),v0(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Fg(u,i.index),routesMeta:c})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,o);else for(let l of g0(i.path))a(i,o,l)}),t}function g0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=g0(r.join("/")),s=[];return s.push(...o.map(l=>l===""?i:[i,l].join("/"))),a&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Rg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ug(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lg=/^:[\w-]+$/,Ag=3,zg=2,Mg=1,$g=10,Dg=-2,cd=e=>e==="*";function Fg(e,t){let n=e.split("/"),r=n.length;return n.some(cd)&&(r+=Dg),t&&(r+=zg),n.filter(a=>!cd(a)).reduce((a,i)=>a+(Lg.test(i)?Ag:i===""?Mg:$g),r)}function Ug(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Bg(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",c=Wg({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;i.push({params:r,pathname:fn([a,c.pathname]),pathnameBase:Gg(fn([a,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(a=fn([a,c.pathnameBase]))}return i}function Wg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Vg(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:g}=c;if(p==="*"){let x=s[d]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const y=s[d];return g&&!y?u[p]=void 0:u[p]=Hg(y||"",p),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Vg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Yg(e){try{return decodeURI(e)}catch(t){return hc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Hg(e,t){try{return decodeURIComponent(e)}catch(n){return hc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function vc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Xg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Ir(e):e;return{pathname:n?n.startsWith("/")?n:Qg(n,t):t,search:qg(r),hash:Zg(a)}}function Qg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Bs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function y0(e,t){let n=Kg(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function x0(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Ir(e):(a=Pa({},e),he(!a.pathname||!a.pathname.includes("?"),Bs("?","pathname","search",a)),he(!a.pathname||!a.pathname.includes("#"),Bs("#","pathname","hash",a)),he(!a.search||!a.search.includes("#"),Bs("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,s;if(o==null)s=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;a.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=Xg(a,s),u=o&&o!=="/"&&o.endsWith("/"),c=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const fn=e=>e.join("/").replace(/\/\/+/g,"/"),Gg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const w0=["post","put","patch","delete"];new Set(w0);const ey=["get",...w0];new Set(ey);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_a.apply(this,arguments)}const gc=w.createContext(null),ty=w.createContext(null),Vn=w.createContext(null),$o=w.createContext(null),Yn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),k0=w.createContext(null);function ny(e,t){let{relative:n}=t===void 0?{}:t;Va()||he(!1);let{basename:r,navigator:a}=w.useContext(Vn),{hash:i,pathname:o,search:s}=b0(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:fn([r,o])),a.createHref({pathname:l,search:s,hash:i})}function Va(){return w.useContext($o)!=null}function Do(){return Va()||he(!1),w.useContext($o).location}function S0(e){w.useContext(Vn).static||w.useLayoutEffect(e)}function ry(){let{isDataRoute:e}=w.useContext(Yn);return e?vy():ay()}function ay(){Va()||he(!1);let e=w.useContext(gc),{basename:t,future:n,navigator:r}=w.useContext(Vn),{matches:a}=w.useContext(Yn),{pathname:i}=Do(),o=JSON.stringify(y0(a,n.v7_relativeSplatPath)),s=w.useRef(!1);return S0(()=>{s.current=!0}),w.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let d=x0(u,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:fn([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,o,i,e])}function b0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Vn),{matches:a}=w.useContext(Yn),{pathname:i}=Do(),o=JSON.stringify(y0(a,r.v7_relativeSplatPath));return w.useMemo(()=>x0(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function iy(e,t){return oy(e,t)}function oy(e,t,n,r){Va()||he(!1);let{navigator:a}=w.useContext(Vn),{matches:i}=w.useContext(Yn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Do(),c;if(t){var d;let S=typeof t=="string"?Ir(t):t;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||he(!1),c=S}else c=u;let p=c.pathname||"/",g=l==="/"?p:p.slice(l.length)||"/",y=Ig(e,{pathname:g}),x=fy(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:fn([l,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:fn([l,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&x?w.createElement($o.Provider,{value:{location:_a({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Jt.Pop}},x):x}function sy(){let e=hy(),t=Jg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:a},n):null,null)}const ly=w.createElement(sy,null);class uy extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Yn.Provider,{value:this.props.routeContext},w.createElement(k0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cy(e){let{routeContext:t,match:n,children:r}=e,a=w.useContext(gc);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Yn.Provider,{value:t},r)}function fy(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let c=o.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id]));c>=0||he(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:g}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,p)=>{let g,y=!1,x=null,S=null;n&&(g=s&&d.route.id?s[d.route.id]:void 0,x=d.route.errorElement||ly,l&&(u<0&&p===0?(gy("route-fallback",!1),y=!0,S=null):u===p&&(y=!0,S=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,p+1)),m=()=>{let v;return g?v=x:y?v=S:d.route.Component?v=w.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,w.createElement(cy,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?w.createElement(uy,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var E0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(E0||{}),ho=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ho||{});function dy(e){let t=w.useContext(gc);return t||he(!1),t}function my(e){let t=w.useContext(ty);return t||he(!1),t}function py(e){let t=w.useContext(Yn);return t||he(!1),t}function C0(e){let t=py(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function hy(){var e;let t=w.useContext(k0),n=my(ho.UseRouteError),r=C0(ho.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function vy(){let{router:e}=dy(E0.UseNavigateStable),t=C0(ho.UseNavigateStable),n=w.useRef(!1);return S0(()=>{n.current=!0}),w.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,_a({fromRouteId:t},i)))},[e,t])}const fd={};function gy(e,t,n){!t&&!fd[e]&&(fd[e]=!0)}function Cn(e){he(!1)}function yy(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Jt.Pop,navigator:i,static:o=!1,future:s}=e;Va()&&he(!1);let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:i,static:o,future:_a({v7_relativeSplatPath:!1},s)}),[l,s,i,o]);typeof r=="string"&&(r=Ir(r));let{pathname:c="/",search:d="",hash:p="",state:g=null,key:y="default"}=r,x=w.useMemo(()=>{let S=vc(c,l);return S==null?null:{location:{pathname:S,search:d,hash:p,state:g,key:y},navigationType:a}},[l,c,d,p,g,y,a]);return x==null?null:w.createElement(Vn.Provider,{value:u},w.createElement($o.Provider,{children:n,value:x}))}function xy(e){let{children:t,location:n}=e;return iy(Hl(t),n)}new Promise(()=>{});function Hl(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,a)=>{if(!w.isValidElement(r))return;let i=[...t,a];if(r.type===w.Fragment){n.push.apply(n,Hl(r.props.children,i));return}r.type!==Cn&&he(!1),!r.props.index||!r.props.children||he(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Hl(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xl.apply(this,arguments)}function wy(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ky(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sy(e,t){return e.button===0&&(!t||t==="_self")&&!ky(e)}const by=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ey="startTransition",dd=qs[Ey];function Cy(e){let{basename:t,children:n,future:r,window:a}=e,i=w.useRef();i.current==null&&(i.current=_g({window:a,v5Compat:!0}));let o=i.current,[s,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=w.useCallback(d=>{u&&dd?dd(()=>l(d)):l(d)},[l,u]);return w.useLayoutEffect(()=>o.listen(c),[o,c]),w.createElement(yy,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Ny=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D=w.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:s,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,p=wy(t,by),{basename:g}=w.useContext(Vn),y,x=!1;if(typeof u=="string"&&jy.test(u)&&(y=u,Ny))try{let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),E=vc(k.pathname,g);k.origin===v.origin&&E!=null?u=E+k.search+k.hash:x=!0}catch{}let S=ny(u,{relative:a}),h=Py(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:a,unstable_viewTransition:d});function m(v){r&&r(v),v.defaultPrevented||h(v)}return w.createElement("a",Xl({},p,{href:y||S,onClick:x||i?r:m,ref:n,target:l}))});var md;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(md||(md={}));var pd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pd||(pd={}));function Py(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,l=ry(),u=Do(),c=b0(e,{relative:o});return w.useCallback(d=>{if(Sy(d,n)){d.preventDefault();let p=r!==void 0?r:po(u)===po(c);l(e,{replace:p,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:s})}},[u,l,c,r,a,n,e,i,o,s])}const N0="https://mndelsero.github.io/garrasprueba1/assets/logofondonegro-vhwyRBAl.jpeg",_y=()=>{const[e,t]=w.useState("menu-close"),n=()=>{t("menu")},r=()=>{t("menu-close")};return f.jsxs("div",{className:"headers",children:[f.jsxs("header",{className:"header ",children:[f.jsx("div",{className:"logo",children:f.jsx(D,{to:"/",className:"logo-link",children:f.jsx("img",{src:N0,alt:"logo",className:"logo-img"})})}),f.jsx("div",{className:"menu",children:f.jsxs("ul",{className:"menu-ul",children:[f.jsx(D,{to:"/nosotros",className:"menu-link",children:"Nuestra Academia"}),f.jsx(D,{to:"/clases",className:"menu-link",children:"Clases y Modalidades"}),f.jsx(D,{to:"/indumentaria",className:"menu-link",children:"Indumentaria"}),f.jsx(D,{to:"/contacto",className:"menu-link",children:"Contacto"})]})}),f.jsxs("div",{className:"social",children:[f.jsx("a",{href:"https://www.facebook.com/profile.php?id=100046205372986",target:"_blank",className:"social-link",children:f.jsx("svg",{className:"social-svg",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"})})}),f.jsx("a",{href:"mailto:ezequielmpabon@gmail.com",target:"_blank",className:"social-link",children:f.jsx("svg",{className:"social-svg",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:f.jsx("path",{d:"m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"})})}),f.jsx("a",{href:"https://www.instagram.com/garras.de.tigre/",target:"_blank",className:"social-link",children:f.jsxs("svg",{className:"social-svg",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[f.jsx("path",{d:"M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"}),f.jsx("circle",{cx:"16.806",cy:"7.207",r:"1.078"}),f.jsx("path",{d:"M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"})]})})]})]}),f.jsxs("header",{className:"head-mobile",children:[f.jsx("div",{onClick:n,children:f.jsx("box-icon",{name:"menu",className:"open-menu"})}),f.jsx("div",{className:e,children:f.jsxs("ul",{className:"menu-ul",children:[f.jsx(D,{to:"/",className:"menu-link",children:"Inicio"}),f.jsx(D,{to:"/nosotros",className:"menu-link",children:"Nuestra Academia"}),f.jsx(D,{to:"/clases",className:"menu-link",children:"Clases y Modalidades"}),f.jsx(D,{to:"/indumentaria",className:"menu-link",children:"Indumentaria"}),f.jsx(D,{to:"/contacto",className:"menu-link",children:"Contacto"}),f.jsx("box-icon",{name:"x",onClick:r})]})})]})]})},Oy=()=>f.jsxs("footer",{className:"footer ",children:[f.jsx("div",{className:"logo-foot",children:f.jsx(D,{to:"/",className:"logo-link-foot",children:f.jsx("img",{src:N0,alt:"logo",className:"logo-img-foot"})})}),f.jsx("div",{className:"menu-foot",children:f.jsxs("ul",{className:"menu-foot-list",children:[f.jsx(D,{to:"/nosotros",className:"menu-link-foot",children:"Nuestra Academia"}),f.jsx(D,{to:"/clases",className:"menu-link-foot",children:"Clases y Modalidades"}),f.jsx(D,{to:"/indumentaria",className:"menu-link-foot",children:"Indumentaria"}),f.jsx(D,{to:"/contacto",className:"menu-link-foot",children:"Contacto"})]})}),f.jsxs("div",{className:"contacto-foot",children:[f.jsxs("li",{className:"contato-foot-item",children:[" Instagram : ",f.jsx("a",{href:"https://www.instagram.com/garras.de.tigre/",target:"_blank",className:"contacto-foot-link",children:" kaswnan@gmail.com"})]}),f.jsxs("li",{className:"contato-foot-item",children:[" Whatsapp : ",f.jsx("a",{href:"https://wa.me/5491137926399",target:"_blank",className:"contacto-foot-link",children:"+261978272"})]}),f.jsxs("li",{className:"contato-foot-item",children:[" Facebook : ",f.jsx("a",{href:"https://www.facebook.com/profile.php?id=100046205372986",target:"_blank",className:"contacto-foot-link",children:"garrasdetigre.com "})]})]}),f.jsxs("div",{className:"social-foot",children:[f.jsx("a",{href:"https://www.facebook.com/profile.php?id=100046205372986",target:"_blank",className:"social-link-foot",children:f.jsx("svg",{className:"social-svg",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"})})}),f.jsx("a",{href:"mailto:ezequielmpabon@gmail.com",target:"_blank",className:"social-link-foot",children:f.jsx("svg",{className:"social-svg",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:f.jsx("path",{d:"m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"})})}),f.jsx("a",{href:"https://www.instagram.com/garras.de.tigre/",target:"_blank",className:"social-link-foot",children:f.jsxs("svg",{className:"social-svg",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:[f.jsx("path",{d:"M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"}),f.jsx("circle",{cx:"16.806",cy:"7.207",r:"1.078"}),f.jsx("path",{d:"M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"})]})})]})]});function j0(e){const t=w.useRef(e);return w.useEffect(()=>{t.current=e},[e]),t}function Ql(e){const t=j0(e);return w.useCallback(function(...n){return t.current&&t.current(...n)},[t])}function Ty(e,t){const n=w.useRef(!0);w.useEffect(()=>{if(n.current){n.current=!1;return}return e()},t)}function Iy(){const e=w.useRef(!0),t=w.useRef(()=>e.current);return w.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function Ry(e){const t=w.useRef(e);return t.current=e,t}function Ly(e){const t=Ry(e);w.useEffect(()=>()=>t.current(),[])}const Kl=2**31-1;function P0(e,t,n){const r=n-Date.now();e.current=r<=Kl?setTimeout(t,r):setTimeout(()=>P0(e,t,n),Kl)}function Ay(){const e=Iy(),t=w.useRef();return Ly(()=>clearTimeout(t.current)),w.useMemo(()=>{const n=()=>clearTimeout(t.current);function r(a,i=0){e()&&(n(),i<=Kl?t.current=setTimeout(a,i):P0(t,a,Date.now()+i))}return{set:r,clear:n,handleRef:t}},[])}const zy=["as","disabled"];function My(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function $y(e){return!e||e.trim()==="#"}function _0({tagName:e,disabled:t,href:n,target:r,rel:a,role:i,onClick:o,tabIndex:s=0,type:l}){e||(n!=null||r!=null||a!=null?e="a":e="button");const u={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},u];const c=p=>{if((t||e==="a"&&$y(n))&&p.preventDefault(),t){p.stopPropagation();return}o==null||o(p)},d=p=>{p.key===" "&&(p.preventDefault(),c(p))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:i??"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:e==="a"?r:void 0,"aria-disabled":t||void 0,rel:e==="a"?a:void 0,onClick:c,onKeyDown:d},u]}const Dy=w.forwardRef((e,t)=>{let{as:n,disabled:r}=e,a=My(e,zy);const[i,{tagName:o}]=_0(Object.assign({tagName:n,disabled:r},a));return f.jsx(o,Object.assign({},a,i,{ref:t}))});Dy.displayName="Button";const Fy=["onKeyDown"];function Uy(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function By(e){return!e||e.trim()==="#"}const O0=w.forwardRef((e,t)=>{let{onKeyDown:n}=e,r=Uy(e,Fy);const[a]=_0(Object.assign({tagName:"a"},r)),i=Ql(o=>{a.onKeyDown(o),n==null||n(o)});return By(r.href)||r.role==="button"?f.jsx("a",Object.assign({ref:t},r,a,{onKeyDown:i})):f.jsx("a",Object.assign({ref:t},r,{onKeyDown:n}))});O0.displayName="Anchor";const hd=O0;var T0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=a(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)t.call(i,s)&&i[s]&&(o=a(o,s));return o}function a(i,o){return o?i?i+" "+o:i+o:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(T0);var Wy=T0.exports;const la=ko(Wy);function Gl(){return Gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gl.apply(this,arguments)}function I0(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function vd(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Vy(e){var t=Yy(e,"string");return typeof t=="symbol"?t:String(t)}function Yy(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hy(e,t,n){var r=w.useRef(e!==void 0),a=w.useState(t),i=a[0],o=a[1],s=e!==void 0,l=r.current;return r.current=s,!s&&l&&i!==t&&o(t),[s?e:i,w.useCallback(function(u){for(var c=arguments.length,d=new Array(c>1?c-1:0),p=1;p<c;p++)d[p-1]=arguments[p];n&&n.apply(void 0,[u].concat(d)),o(u)},[n])]}function Xy(e,t){return Object.keys(t).reduce(function(n,r){var a,i=n,o=i[vd(r)],s=i[r],l=I0(i,[vd(r),r].map(Vy)),u=t[r],c=Hy(s,o,e[u]),d=c[0],p=c[1];return Gl({},l,(a={},a[r]=d,a[u]=p,a))},e)}function ql(e,t){return ql=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},ql(e,t)}function Qy(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ql(e,t)}const Ky=["xxl","xl","lg","md","sm","xs"],Gy="xs",R0=w.createContext({prefixes:{},breakpoints:Ky,minBreakpoint:Gy});function yc(e,t){const{prefixes:n}=w.useContext(R0);return e||n[t]||t}function qy(){const{dir:e}=w.useContext(R0);return e==="rtl"}const L0=w.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=yc(t,"carousel-caption"),f.jsx(n,{ref:a,className:la(e,t),...r})));L0.displayName="CarouselCaption";const Zy=L0,A0=w.forwardRef(({as:e="div",bsPrefix:t,className:n,...r},a)=>{const i=la(n,yc(t,"carousel-item"));return f.jsx(e,{ref:a,...r,className:i})});A0.displayName="CarouselItem";const Jy=A0;function gd(e,t){let n=0;return w.Children.map(e,r=>w.isValidElement(r)?t(r,n++):r)}function e2(e,t){let n=0;w.Children.forEach(e,r=>{w.isValidElement(r)&&t(r,n++)})}function t2(e){return e&&e.ownerDocument||document}function n2(e){var t=t2(e);return t&&t.defaultView||window}function r2(e,t){return n2(e).getComputedStyle(e,t)}var a2=/([A-Z])/g;function i2(e){return e.replace(a2,"-$1").toLowerCase()}var o2=/^ms-/;function mi(e){return i2(e).replace(o2,"-ms-")}var s2=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function l2(e){return!!(e&&s2.test(e))}function z0(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(mi(t))||r2(e).getPropertyValue(mi(t));Object.keys(t).forEach(function(a){var i=t[a];!i&&i!==0?e.style.removeProperty(mi(a)):l2(a)?r+=a+"("+i+") ":n+=mi(a)+": "+i+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}const u2=!!(typeof window<"u"&&window.document&&window.document.createElement);var Zl=!1,Jl=!1;try{var Ws={get passive(){return Zl=!0},get once(){return Jl=Zl=!0}};u2&&(window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,!0))}catch{}function c2(e,t,n,r){if(r&&typeof r!="boolean"&&!Jl){var a=r.once,i=r.capture,o=n;!Jl&&a&&(o=n.__once||function s(l){this.removeEventListener(t,s,i),n.call(this,l)},n.__once=o),e.addEventListener(t,o,Zl?r:i)}e.addEventListener(t,n,r)}function f2(e,t,n,r){var a=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)}function M0(e,t,n,r){return c2(e,t,n,r),function(){f2(e,t,n,r)}}function d2(e,t,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}function m2(e){var t=z0(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function p2(e,t,n){n===void 0&&(n=5);var r=!1,a=setTimeout(function(){r||d2(e,"transitionend",!0)},t+n),i=M0(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(a),i()}}function h2(e,t,n,r){n==null&&(n=m2(e)||0);var a=p2(e,n,r),i=M0(e,"transitionend",t);return function(){a(),i()}}function yd(e,t){const n=z0(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function v2(e,t){const n=yd(e,"transitionDuration"),r=yd(e,"transitionDelay"),a=h2(e,i=>{i.target===e&&(a(),t(i))},n+r)}function g2(e){e.offsetHeight}var $0={exports:{}},y2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",x2=y2,w2=x2;function D0(){}function F0(){}F0.resetWarningCache=D0;var k2=function(){function e(r,a,i,o,s,l){if(l!==w2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:F0,resetWarningCache:D0};return n.PropTypes=n,n};$0.exports=k2();var S2=$0.exports;const $=ko(S2),xd={disabled:!1},U0=dt.createContext(null);var b2=function(t){return t.scrollTop},qr="unmounted",Nn="exited",jn="entering",Gn="entered",eu="exiting",Wt=function(e){Qy(t,e);function t(r,a){var i;i=e.call(this,r,a)||this;var o=a,s=o&&!o.isMounting?r.enter:r.appear,l;return i.appearStatus=null,r.in?s?(l=Nn,i.appearStatus=jn):l=Gn:r.unmountOnExit||r.mountOnEnter?l=qr:l=Nn,i.state={status:l},i.nextCallback=null,i}t.getDerivedStateFromProps=function(a,i){var o=a.in;return o&&i.status===qr?{status:Nn}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(a){var i=null;if(a!==this.props){var o=this.state.status;this.props.in?o!==jn&&o!==Gn&&(i=jn):(o===jn||o===Gn)&&(i=eu)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var a=this.props.timeout,i,o,s;return i=o=s=a,a!=null&&typeof a!="number"&&(i=a.exit,o=a.enter,s=a.appear!==void 0?a.appear:o),{exit:i,enter:o,appear:s}},n.updateStatus=function(a,i){if(a===void 0&&(a=!1),i!==null)if(this.cancelNextCallback(),i===jn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Gr.findDOMNode(this);o&&b2(o)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Nn&&this.setState({status:qr})},n.performEnter=function(a){var i=this,o=this.props.enter,s=this.context?this.context.isMounting:a,l=this.props.nodeRef?[s]:[Gr.findDOMNode(this),s],u=l[0],c=l[1],d=this.getTimeouts(),p=s?d.appear:d.enter;if(!a&&!o||xd.disabled){this.safeSetState({status:Gn},function(){i.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:jn},function(){i.props.onEntering(u,c),i.onTransitionEnd(p,function(){i.safeSetState({status:Gn},function(){i.props.onEntered(u,c)})})})},n.performExit=function(){var a=this,i=this.props.exit,o=this.getTimeouts(),s=this.props.nodeRef?void 0:Gr.findDOMNode(this);if(!i||xd.disabled){this.safeSetState({status:Nn},function(){a.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:eu},function(){a.props.onExiting(s),a.onTransitionEnd(o.exit,function(){a.safeSetState({status:Nn},function(){a.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(a,i){i=this.setNextCallback(i),this.setState(a,i)},n.setNextCallback=function(a){var i=this,o=!0;return this.nextCallback=function(s){o&&(o=!1,i.nextCallback=null,a(s))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(a,i){this.setNextCallback(i);var o=this.props.nodeRef?this.props.nodeRef.current:Gr.findDOMNode(this),s=a==null&&!this.props.addEndListener;if(!o||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}a!=null&&setTimeout(this.nextCallback,a)},n.render=function(){var a=this.state.status;if(a===qr)return null;var i=this.props,o=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=I0(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return dt.createElement(U0.Provider,{value:null},typeof o=="function"?o(a,s):dt.cloneElement(dt.Children.only(o),s))},t}(dt.Component);Wt.contextType=U0;Wt.propTypes={};function Kn(){}Wt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Kn,onEntering:Kn,onEntered:Kn,onExit:Kn,onExiting:Kn,onExited:Kn};Wt.UNMOUNTED=qr;Wt.EXITED=Nn;Wt.ENTERING=jn;Wt.ENTERED=Gn;Wt.EXITING=eu;const E2=Wt,wd=e=>!e||typeof e=="function"?e:t=>{e.current=t};function C2(e,t){const n=wd(e),r=wd(t);return a=>{n&&n(a),r&&r(a)}}function N2(e,t){return w.useMemo(()=>C2(e,t),[e,t])}function j2(e){return e&&"setState"in e?Gr.findDOMNode(e):e??null}const P2=dt.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:a,onExited:i,addEndListener:o,children:s,childRef:l,...u},c)=>{const d=w.useRef(null),p=N2(d,l),g=C=>{p(j2(C))},y=C=>b=>{C&&d.current&&C(d.current,b)},x=w.useCallback(y(e),[e]),S=w.useCallback(y(t),[t]),h=w.useCallback(y(n),[n]),m=w.useCallback(y(r),[r]),v=w.useCallback(y(a),[a]),k=w.useCallback(y(i),[i]),E=w.useCallback(y(o),[o]);return f.jsx(E2,{ref:c,...u,onEnter:x,onEntered:h,onEntering:S,onExit:m,onExited:k,onExiting:v,addEndListener:E,nodeRef:d,children:typeof s=="function"?(C,b)=>s(C,{...b,ref:g}):dt.cloneElement(s,{ref:g})})}),_2=P2,O2=40;function T2(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const B0=w.forwardRef(({defaultActiveIndex:e=0,...t},n)=>{const{as:r="div",bsPrefix:a,slide:i=!0,fade:o=!1,controls:s=!0,indicators:l=!0,indicatorLabels:u=[],activeIndex:c,onSelect:d,onSlide:p,onSlid:g,interval:y=5e3,keyboard:x=!0,onKeyDown:S,pause:h="hover",onMouseOver:m,onMouseOut:v,wrap:k=!0,touch:E=!0,onTouchStart:C,onTouchMove:b,onTouchEnd:N,prevIcon:I=f.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:_="Previous",nextIcon:re=f.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:ce="Next",variant:be,className:ve,children:U,...Ve}=Xy({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),Ye=yc(a,"carousel"),O=qy(),A=w.useRef(null),[M,ee]=w.useState("next"),[fe,Pt]=w.useState(!1),[Me,Hn]=w.useState(!1),[te,Xn]=w.useState(c||0);w.useEffect(()=>{!Me&&c!==te&&(A.current?ee(A.current):ee((c||0)>te?"next":"prev"),i&&Hn(!0),Xn(c||0))},[c,Me,te,i]),w.useEffect(()=>{A.current&&(A.current=null)});let wn=0,Vc;e2(U,(z,Q)=>{++wn,Q===c&&(Vc=z.props.interval)});const Yc=j0(Vc),gt=w.useCallback(z=>{if(Me)return;let Q=te-1;if(Q<0){if(!k)return;Q=wn-1}A.current="prev",d==null||d(Q,z)},[Me,te,d,k,wn]),yt=Ql(z=>{if(Me)return;let Q=te+1;if(Q>=wn){if(!k)return;Q=0}A.current="next",d==null||d(Q,z)}),ps=w.useRef();w.useImperativeHandle(n,()=>({element:ps.current,prev:gt,next:yt}));const Hc=Ql(()=>{!document.hidden&&T2(ps.current)&&(O?gt():yt())}),kn=M==="next"?"start":"end";Ty(()=>{i||(p==null||p(te,kn),g==null||g(te,kn))},[te]);const Hh=`${Ye}-item-${M}`,Xh=`${Ye}-item-${kn}`,Qh=w.useCallback(z=>{g2(z),p==null||p(te,kn)},[p,te,kn]),Kh=w.useCallback(()=>{Hn(!1),g==null||g(te,kn)},[g,te,kn]),Gh=w.useCallback(z=>{if(x&&!/input|textarea/i.test(z.target.tagName))switch(z.key){case"ArrowLeft":z.preventDefault(),O?yt(z):gt(z);return;case"ArrowRight":z.preventDefault(),O?gt(z):yt(z);return}S==null||S(z)},[x,S,gt,yt,O]),qh=w.useCallback(z=>{h==="hover"&&Pt(!0),m==null||m(z)},[h,m]),Zh=w.useCallback(z=>{Pt(!1),v==null||v(z)},[v]),Xc=w.useRef(0),Ka=w.useRef(0),Qc=Ay(),Jh=w.useCallback(z=>{Xc.current=z.touches[0].clientX,Ka.current=0,h==="hover"&&Pt(!0),C==null||C(z)},[h,C]),e1=w.useCallback(z=>{z.touches&&z.touches.length>1?Ka.current=0:Ka.current=z.touches[0].clientX-Xc.current,b==null||b(z)},[b]),t1=w.useCallback(z=>{if(E){const Q=Ka.current;Math.abs(Q)>O2&&(Q>0?gt(z):yt(z))}h==="hover"&&Qc.set(()=>{Pt(!1)},y||void 0),N==null||N(z)},[E,h,gt,yt,Qc,y,N]),Kc=y!=null&&!fe&&!Me,hs=w.useRef();w.useEffect(()=>{var z,Q;if(!Kc)return;const _t=O?gt:yt;return hs.current=window.setInterval(document.visibilityState?Hc:_t,(z=(Q=Yc.current)!=null?Q:y)!=null?z:void 0),()=>{hs.current!==null&&clearInterval(hs.current)}},[Kc,gt,yt,Yc,y,Hc,O]);const Gc=w.useMemo(()=>l&&Array.from({length:wn},(z,Q)=>_t=>{d==null||d(Q,_t)}),[l,wn,d]);return f.jsxs(r,{ref:ps,...Ve,onKeyDown:Gh,onMouseOver:qh,onMouseOut:Zh,onTouchStart:Jh,onTouchMove:e1,onTouchEnd:t1,className:la(ve,Ye,i&&"slide",o&&`${Ye}-fade`,be&&`${Ye}-${be}`),children:[l&&f.jsx("div",{className:`${Ye}-indicators`,children:gd(U,(z,Q)=>f.jsx("button",{type:"button","data-bs-target":"","aria-label":u!=null&&u.length?u[Q]:`Slide ${Q+1}`,className:Q===te?"active":void 0,onClick:Gc?Gc[Q]:void 0,"aria-current":Q===te},Q))}),f.jsx("div",{className:`${Ye}-inner`,children:gd(U,(z,Q)=>{const _t=Q===te;return i?f.jsx(_2,{in:_t,onEnter:_t?Qh:void 0,onEntered:_t?Kh:void 0,addEndListener:v2,children:(Ar,n1)=>w.cloneElement(z,{...n1,className:la(z.props.className,_t&&Ar!=="entered"&&Hh,(Ar==="entered"||Ar==="exiting")&&"active",(Ar==="entering"||Ar==="exiting")&&Xh)})}):w.cloneElement(z,{className:la(z.props.className,_t&&"active")})})}),s&&f.jsxs(f.Fragment,{children:[(k||c!==0)&&f.jsxs(hd,{className:`${Ye}-control-prev`,onClick:gt,children:[I,_&&f.jsx("span",{className:"visually-hidden",children:_})]}),(k||c!==wn-1)&&f.jsxs(hd,{className:`${Ye}-control-next`,onClick:yt,children:[re,ce&&f.jsx("span",{className:"visually-hidden",children:ce})]})]})]})});B0.displayName="Carousel";const Sn=Object.assign(B0,{Caption:Zy,Item:Jy}),I2="https://mndelsero.github.io/garrasprueba1/assets/evento viaje-H5R9MpqX.jpeg",R2="https://mndelsero.github.io/garrasprueba1/assets/evento-viaje2-_xdRbIUa.jpeg",W0="https://mndelsero.github.io/garrasprueba1/assets/fotograduado-xnh53axt.jpeg",L2=()=>f.jsx("div",{children:f.jsxs(Sn,{className:"carousel",children:[f.jsxs(Sn.Item,{children:[f.jsx("img",{src:I2,alt:"",className:"carousel-img"}),f.jsx(Sn.Caption,{})]}),f.jsxs(Sn.Item,{children:[f.jsx("img",{src:R2,alt:"",className:"carousel-img"}),f.jsx(Sn.Caption,{})]}),f.jsxs(Sn.Item,{children:[f.jsx("img",{src:W0,alt:"",className:"carousel-img"}),f.jsx(Sn.Caption,{})]})]})}),A2="https://mndelsero.github.io/garrasprueba1/assets/eventoviaje-jWtgei1c.jpeg",z2="https://mndelsero.github.io/garrasprueba1/assets/fondo-inspiracion-frflQ4XP.jpeg",tu="https://mndelsero.github.io/garrasprueba1/assets/grupo-pelea-RjmGBTOZ.jpeg",Vr="https://mndelsero.github.io/garrasprueba1/assets/wta-_B_bbKny.png",M2="https://mndelsero.github.io/garrasprueba1/assets/torneo el ceibo-78doOeuh.jpg",$2="https://mndelsero.github.io/garrasprueba1/assets/fmt-qI15jPkK.jpg",V0="https://mndelsero.github.io/garrasprueba1/assets/alumnado--EH3Jdwo.jpg",D2="https://mndelsero.github.io/garrasprueba1/assets/alumnotorneo-a5Z1-rNM.jpg",F2="https://mndelsero.github.io/garrasprueba1/assets/fondopatada-4X_4Hojx.jpg",U2="https://mndelsero.github.io/garrasprueba1/assets/redbelt-Mbob4ccY.png",B2="https://mndelsero.github.io/garrasprueba1/assets/redblackwall-SjNZPFIG.png";function W2(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function V2(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Y2=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(V2(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=W2(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Oe="-ms-",vo="-moz-",W="-webkit-",Y0="comm",xc="rule",wc="decl",H2="@import",H0="@keyframes",X2="@layer",Q2=Math.abs,Fo=String.fromCharCode,K2=Object.assign;function G2(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function X0(e){return e.trim()}function q2(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function nu(e,t){return e.indexOf(t)}function Ce(e,t){return e.charCodeAt(t)|0}function Oa(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function kc(e){return e.length}function pi(e,t){return t.push(e),e}function Z2(e,t){return e.map(t).join("")}var Uo=1,jr=1,Q0=0,We=0,me=0,Rr="";function Bo(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Uo,column:jr,length:o,return:""}}function Yr(e,t){return K2(Bo("",null,null,"",null,null,0),e,{length:-e.length},t)}function J2(){return me}function ex(){return me=We>0?Ce(Rr,--We):0,jr--,me===10&&(jr=1,Uo--),me}function Ke(){return me=We<Q0?Ce(Rr,We++):0,jr++,me===10&&(jr=1,Uo++),me}function jt(){return Ce(Rr,We)}function $i(){return We}function Ya(e,t){return Oa(Rr,e,t)}function Ta(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function K0(e){return Uo=jr=1,Q0=kt(Rr=e),We=0,[]}function G0(e){return Rr="",e}function Di(e){return X0(Ya(We-1,ru(e===91?e+2:e===40?e+1:e)))}function tx(e){for(;(me=jt())&&me<33;)Ke();return Ta(e)>2||Ta(me)>3?"":" "}function nx(e,t){for(;--t&&Ke()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return Ya(e,$i()+(t<6&&jt()==32&&Ke()==32))}function ru(e){for(;Ke();)switch(me){case e:return We;case 34:case 39:e!==34&&e!==39&&ru(me);break;case 40:e===41&&ru(e);break;case 92:Ke();break}return We}function rx(e,t){for(;Ke()&&e+me!==57;)if(e+me===84&&jt()===47)break;return"/*"+Ya(t,We-1)+"*"+Fo(e===47?e:Ke())}function ax(e){for(;!Ta(jt());)Ke();return Ya(e,We)}function ix(e){return G0(Fi("",null,null,null,[""],e=K0(e),0,[0],e))}function Fi(e,t,n,r,a,i,o,s,l){for(var u=0,c=0,d=o,p=0,g=0,y=0,x=1,S=1,h=1,m=0,v="",k=a,E=i,C=r,b=v;S;)switch(y=m,m=Ke()){case 40:if(y!=108&&Ce(b,d-1)==58){nu(b+=V(Di(m),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:b+=Di(m);break;case 9:case 10:case 13:case 32:b+=tx(y);break;case 92:b+=nx($i()-1,7);continue;case 47:switch(jt()){case 42:case 47:pi(ox(rx(Ke(),$i()),t,n),l);break;default:b+="/"}break;case 123*x:s[u++]=kt(b)*h;case 125*x:case 59:case 0:switch(m){case 0:case 125:S=0;case 59+c:h==-1&&(b=V(b,/\f/g,"")),g>0&&kt(b)-d&&pi(g>32?Sd(b+";",r,n,d-1):Sd(V(b," ","")+";",r,n,d-2),l);break;case 59:b+=";";default:if(pi(C=kd(b,t,n,u,c,a,s,v,k=[],E=[],d),i),m===123)if(c===0)Fi(b,t,C,C,k,i,d,s,E);else switch(p===99&&Ce(b,3)===110?100:p){case 100:case 108:case 109:case 115:Fi(e,C,C,r&&pi(kd(e,C,C,0,0,a,s,v,a,k=[],d),E),a,E,d,s,r?k:E);break;default:Fi(b,C,C,C,[""],E,0,s,E)}}u=c=g=0,x=h=1,v=b="",d=o;break;case 58:d=1+kt(b),g=y;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&ex()==125)continue}switch(b+=Fo(m),m*x){case 38:h=c>0?1:(b+="\f",-1);break;case 44:s[u++]=(kt(b)-1)*h,h=1;break;case 64:jt()===45&&(b+=Di(Ke())),p=jt(),c=d=kt(v=b+=ax($i())),m++;break;case 45:y===45&&kt(b)==2&&(x=0)}}return i}function kd(e,t,n,r,a,i,o,s,l,u,c){for(var d=a-1,p=a===0?i:[""],g=kc(p),y=0,x=0,S=0;y<r;++y)for(var h=0,m=Oa(e,d+1,d=Q2(x=o[y])),v=e;h<g;++h)(v=X0(x>0?p[h]+" "+m:V(m,/&\f/g,p[h])))&&(l[S++]=v);return Bo(e,t,n,a===0?xc:s,l,u,c)}function ox(e,t,n){return Bo(e,t,n,Y0,Fo(J2()),Oa(e,2,-2),0)}function Sd(e,t,n,r){return Bo(e,t,n,wc,Oa(e,0,r),Oa(e,r+1,-1),r)}function yr(e,t){for(var n="",r=kc(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function sx(e,t,n,r){switch(e.type){case X2:if(e.children.length)break;case H2:case wc:return e.return=e.return||e.value;case Y0:return"";case H0:return e.return=e.value+"{"+yr(e.children,r)+"}";case xc:e.value=e.props.join(",")}return kt(n=yr(e.children,r))?e.return=e.value+"{"+n+"}":""}function lx(e){var t=kc(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function ux(e){return function(t){t.root||(t=t.return)&&e(t)}}function cx(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var fx=function(t,n,r){for(var a=0,i=0;a=i,i=jt(),a===38&&i===12&&(n[r]=1),!Ta(i);)Ke();return Ya(t,We)},dx=function(t,n){var r=-1,a=44;do switch(Ta(a)){case 0:a===38&&jt()===12&&(n[r]=1),t[r]+=fx(We-1,n,r);break;case 2:t[r]+=Di(a);break;case 4:if(a===44){t[++r]=jt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Fo(a)}while(a=Ke());return t},mx=function(t,n){return G0(dx(K0(t),n))},bd=new WeakMap,px=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!bd.get(r))&&!a){bd.set(t,!0);for(var i=[],o=mx(n,i),s=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<s.length;c++,u++)t.props[u]=i[l]?o[l].replace(/&\f/g,s[c]):s[c]+" "+o[l]}}},hx=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function q0(e,t){switch(G2(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+vo+e+Oe+e+e;case 6828:case 4268:return W+e+Oe+e+e;case 6165:return W+e+Oe+"flex-"+e+e;case 5187:return W+e+V(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Oe+"flex-$1$2")+e;case 5443:return W+e+Oe+"flex-item-"+V(e,/flex-|-self/,"")+e;case 4675:return W+e+Oe+"flex-line-pack"+V(e,/align-content|flex-|-self/,"")+e;case 5548:return W+e+Oe+V(e,"shrink","negative")+e;case 5292:return W+e+Oe+V(e,"basis","preferred-size")+e;case 6060:return W+"box-"+V(e,"-grow","")+W+e+Oe+V(e,"grow","positive")+e;case 4554:return W+V(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+vo+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~nu(e,"stretch")?q0(V(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ce(e,t+1)!==115)break;case 6444:switch(Ce(e,kt(e)-3-(~nu(e,"!important")&&10))){case 107:return V(e,":",":"+W)+e;case 101:return V(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+W+(Ce(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Oe+"$2box$3")+e}break;case 5936:switch(Ce(e,t+11)){case 114:return W+e+Oe+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Oe+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Oe+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return W+e+Oe+e+e}return e}var vx=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case wc:t.return=q0(t.value,t.length);break;case H0:return yr([Yr(t,{value:V(t.value,"@","@"+W)})],a);case xc:if(t.length)return Z2(t.props,function(i){switch(q2(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return yr([Yr(t,{props:[V(i,/:(read-\w+)/,":"+vo+"$1")]})],a);case"::placeholder":return yr([Yr(t,{props:[V(i,/:(plac\w+)/,":"+W+"input-$1")]}),Yr(t,{props:[V(i,/:(plac\w+)/,":"+vo+"$1")]}),Yr(t,{props:[V(i,/:(plac\w+)/,Oe+"input-$1")]})],a)}return""})}},gx=[vx],yx=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var S=x.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var a=t.stylisPlugins||gx,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var S=x.getAttribute("data-emotion").split(" "),h=1;h<S.length;h++)i[S[h]]=!0;s.push(x)});var l,u=[px,hx];{var c,d=[sx,ux(function(x){c.insert(x)})],p=lx(u.concat(a,d)),g=function(S){return yr(ix(S),p)};l=function(S,h,m,v){c=m,g(S?S+"{"+h.styles+"}":h.styles),v&&(y.inserted[h.name]=!0)}}var y={key:n,sheet:new Y2({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return y.sheet.hydrate(s),y},Z0={exports:{}},H={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se=typeof Symbol=="function"&&Symbol.for,Sc=Se?Symbol.for("react.element"):60103,bc=Se?Symbol.for("react.portal"):60106,Wo=Se?Symbol.for("react.fragment"):60107,Vo=Se?Symbol.for("react.strict_mode"):60108,Yo=Se?Symbol.for("react.profiler"):60114,Ho=Se?Symbol.for("react.provider"):60109,Xo=Se?Symbol.for("react.context"):60110,Ec=Se?Symbol.for("react.async_mode"):60111,Qo=Se?Symbol.for("react.concurrent_mode"):60111,Ko=Se?Symbol.for("react.forward_ref"):60112,Go=Se?Symbol.for("react.suspense"):60113,xx=Se?Symbol.for("react.suspense_list"):60120,qo=Se?Symbol.for("react.memo"):60115,Zo=Se?Symbol.for("react.lazy"):60116,wx=Se?Symbol.for("react.block"):60121,kx=Se?Symbol.for("react.fundamental"):60117,Sx=Se?Symbol.for("react.responder"):60118,bx=Se?Symbol.for("react.scope"):60119;function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sc:switch(e=e.type,e){case Ec:case Qo:case Wo:case Yo:case Vo:case Go:return e;default:switch(e=e&&e.$$typeof,e){case Xo:case Ko:case Zo:case qo:case Ho:return e;default:return t}}case bc:return t}}}function J0(e){return Je(e)===Qo}H.AsyncMode=Ec;H.ConcurrentMode=Qo;H.ContextConsumer=Xo;H.ContextProvider=Ho;H.Element=Sc;H.ForwardRef=Ko;H.Fragment=Wo;H.Lazy=Zo;H.Memo=qo;H.Portal=bc;H.Profiler=Yo;H.StrictMode=Vo;H.Suspense=Go;H.isAsyncMode=function(e){return J0(e)||Je(e)===Ec};H.isConcurrentMode=J0;H.isContextConsumer=function(e){return Je(e)===Xo};H.isContextProvider=function(e){return Je(e)===Ho};H.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sc};H.isForwardRef=function(e){return Je(e)===Ko};H.isFragment=function(e){return Je(e)===Wo};H.isLazy=function(e){return Je(e)===Zo};H.isMemo=function(e){return Je(e)===qo};H.isPortal=function(e){return Je(e)===bc};H.isProfiler=function(e){return Je(e)===Yo};H.isStrictMode=function(e){return Je(e)===Vo};H.isSuspense=function(e){return Je(e)===Go};H.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wo||e===Qo||e===Yo||e===Vo||e===Go||e===xx||typeof e=="object"&&e!==null&&(e.$$typeof===Zo||e.$$typeof===qo||e.$$typeof===Ho||e.$$typeof===Xo||e.$$typeof===Ko||e.$$typeof===kx||e.$$typeof===Sx||e.$$typeof===bx||e.$$typeof===wx)};H.typeOf=Je;Z0.exports=H;var Ex=Z0.exports,eh=Ex,Cx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},th={};th[eh.ForwardRef]=Cx;th[eh.Memo]=Nx;var jx=!0;function nh(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var Cc=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||jx===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},rh=function(t,n,r){Cc(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Px(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var _x={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ox=/[A-Z]|^ms/g,Tx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ah=function(t){return t.charCodeAt(1)===45},Ed=function(t){return t!=null&&typeof t!="boolean"},Vs=cx(function(e){return ah(e)?e:e.replace(Ox,"-$&").toLowerCase()}),Cd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Tx,function(r,a,i){return St={name:a,styles:i,next:St},a})}return _x[t]!==1&&!ah(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ia(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return St={name:n.name,styles:n.styles,next:St},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)St={name:r.name,styles:r.styles,next:St},r=r.next;var a=n.styles+";";return a}return Ix(e,t,n)}case"function":{if(e!==void 0){var i=St,o=n(e);return St=i,Ia(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Ix(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Ia(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":Ed(o)&&(r+=Vs(i)+":"+Cd(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)Ed(o[s])&&(r+=Vs(i)+":"+Cd(i,o[s])+";");else{var l=Ia(e,t,o);switch(i){case"animation":case"animationName":{r+=Vs(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var Nd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,St,Nc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";St=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Ia(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=Ia(r,n,t[s]),a&&(i+=o[s]);Nd.lastIndex=0;for(var l="",u;(u=Nd.exec(i))!==null;)l+="-"+u[1];var c=Px(i)+l;return{name:c,styles:i,next:St}},Rx=function(t){return t()},Lx=qs.useInsertionEffect?qs.useInsertionEffect:!1,ih=Lx||Rx,jc={}.hasOwnProperty,oh=w.createContext(typeof HTMLElement<"u"?yx({key:"css"}):null);oh.Provider;var sh=function(t){return w.forwardRef(function(n,r){var a=w.useContext(oh);return t(n,a,r)})},lh=w.createContext({}),au="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ax=function(t,n){var r={};for(var a in n)jc.call(n,a)&&(r[a]=n[a]);return r[au]=t,r},zx=function(t){var n=t.cache,r=t.serialized,a=t.isStringTag;return Cc(n,r,a),ih(function(){return rh(n,r,a)}),null},Mx=sh(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var a=e[au],i=[r],o="";typeof e.className=="string"?o=nh(t.registered,i,e.className):e.className!=null&&(o=e.className+" ");var s=Nc(i,void 0,w.useContext(lh));o+=t.key+"-"+s.name;var l={};for(var u in e)jc.call(e,u)&&u!=="css"&&u!==au&&(l[u]=e[u]);return l.ref=n,l.className=o,w.createElement(w.Fragment,null,w.createElement(zx,{cache:t,serialized:s,isStringTag:typeof a=="string"}),w.createElement(a,l))}),$x=Mx,Dx=f.Fragment;function de(e,t,n){return jc.call(t,"css")?f.jsx($x,Ax(e,t),n):f.jsx(e,t,n)}function uh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Nc(t)}var P=function(){var t=uh.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Fx=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var i=t[r];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var s in i)i[s]&&s&&(o&&(o+=" "),o+=s)}break}default:o=i}o&&(a&&(a+=" "),a+=o)}}return a};function Ux(e,t,n){var r=[],a=nh(e,r,n);return r.length<2?n:a+t(r)}var Bx=function(t){var n=t.cache,r=t.serializedArr;return ih(function(){for(var a=0;a<r.length;a++)rh(n,r[a],!1)}),null},Ys=sh(function(e,t){var n=!1,r=[],a=function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];var p=Nc(c,t.registered);return r.push(p),Cc(t,p,!1),t.key+"-"+p.name},i=function(){for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];return Ux(t.registered,a,Fx(c))},o={css:a,cx:i,theme:w.useContext(lh)},s=e.children(o);return n=!0,w.createElement(w.Fragment,null,w.createElement(Bx,{cache:t,serializedArr:r}),s)}),Wx=Object.defineProperty,Vx=(e,t,n)=>t in e?Wx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hi=(e,t,n)=>(Vx(e,typeof t!="symbol"?t+"":t,n),n),iu=new Map,vi=new WeakMap,jd=0,Yx=void 0;function Hx(e){return e?(vi.has(e)||(jd+=1,vi.set(e,jd.toString())),vi.get(e)):"0"}function Xx(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Hx(e.root):e[t]}`).toString()}function Qx(e){const t=Xx(e);let n=iu.get(t);if(!n){const r=new Map;let a;const i=new IntersectionObserver(o=>{o.forEach(s=>{var l;const u=s.isIntersecting&&a.some(c=>s.intersectionRatio>=c);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=u),(l=r.get(s.target))==null||l.forEach(c=>{c(u,s)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},iu.set(t,n)}return n}function ch(e,t,n={},r=Yx){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:a,observer:i,elements:o}=Qx(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),iu.delete(a))}}function Kx(e){return typeof e.children!="function"}var Pd=class extends w.Component{constructor(e){super(e),hi(this,"node",null),hi(this,"_unobserveCb",null),hi(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),hi(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Kx(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:i}=this.props;this._unobserveCb=ch(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:y}=this.state;return e({inView:g,entry:y,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:a,rootMargin:i,onChange:o,skip:s,trackVisibility:l,delay:u,initialInView:c,fallbackInView:d,...p}=this.props;return w.createElement(t||"div",{ref:this.handleNode,...p},e)}};function fh({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:a,triggerOnce:i,skip:o,initialInView:s,fallbackInView:l,onChange:u}={}){var c;const[d,p]=w.useState(null),g=w.useRef(),[y,x]=w.useState({inView:!!s,entry:void 0});g.current=u,w.useEffect(()=>{if(o||!d)return;let v;return v=ch(d,(k,E)=>{x({inView:k,entry:E}),g.current&&g.current(k,E),E.isIntersecting&&i&&v&&(v(),v=void 0)},{root:a,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{v&&v()}},[Array.isArray(e)?e.toString():e,d,a,r,i,o,n,l,t]);const S=(c=y.entry)==null?void 0:c.target,h=w.useRef();!d&&S&&!i&&!o&&h.current!==S&&(h.current=S,x({inView:!!s,entry:void 0}));const m=[p,y.inView,y.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}var dh={exports:{}},X={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc=Symbol.for("react.element"),_c=Symbol.for("react.portal"),Jo=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),ts=Symbol.for("react.profiler"),ns=Symbol.for("react.provider"),rs=Symbol.for("react.context"),Gx=Symbol.for("react.server_context"),as=Symbol.for("react.forward_ref"),is=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),ss=Symbol.for("react.memo"),ls=Symbol.for("react.lazy"),qx=Symbol.for("react.offscreen"),mh;mh=Symbol.for("react.module.reference");function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Pc:switch(e=e.type,e){case Jo:case ts:case es:case is:case os:return e;default:switch(e=e&&e.$$typeof,e){case Gx:case rs:case as:case ls:case ss:case ns:return e;default:return t}}case _c:return t}}}X.ContextConsumer=rs;X.ContextProvider=ns;X.Element=Pc;X.ForwardRef=as;X.Fragment=Jo;X.Lazy=ls;X.Memo=ss;X.Portal=_c;X.Profiler=ts;X.StrictMode=es;X.Suspense=is;X.SuspenseList=os;X.isAsyncMode=function(){return!1};X.isConcurrentMode=function(){return!1};X.isContextConsumer=function(e){return st(e)===rs};X.isContextProvider=function(e){return st(e)===ns};X.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pc};X.isForwardRef=function(e){return st(e)===as};X.isFragment=function(e){return st(e)===Jo};X.isLazy=function(e){return st(e)===ls};X.isMemo=function(e){return st(e)===ss};X.isPortal=function(e){return st(e)===_c};X.isProfiler=function(e){return st(e)===ts};X.isStrictMode=function(e){return st(e)===es};X.isSuspense=function(e){return st(e)===is};X.isSuspenseList=function(e){return st(e)===os};X.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Jo||e===ts||e===es||e===is||e===os||e===qx||typeof e=="object"&&e!==null&&(e.$$typeof===ls||e.$$typeof===ss||e.$$typeof===ns||e.$$typeof===rs||e.$$typeof===as||e.$$typeof===mh||e.getModuleId!==void 0)};X.typeOf=st;dh.exports=X;var Zx=dh.exports;P`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;P`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;P`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;P`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;P`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;P`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Jx=P`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,ew=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tw=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nw=P`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rw=P`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Oc=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,aw=P`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,iw=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ow=P`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sw=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,lw=P`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,uw=P`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cw=P`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function fw({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Oc,iterationCount:a=1}){return uh`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function dw(e){return e==null}function mw(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ph(e,t){return n=>n?e():t()}function Ra(e){return ph(e,()=>null)}function ou(e){return Ra(()=>({opacity:0}))(e)}const us=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:a=1e3,fraction:i=0,keyframes:o=Oc,triggerOnce:s=!1,className:l,style:u,childClassName:c,childStyle:d,children:p,onVisibilityChange:g}=e,y=w.useMemo(()=>fw({keyframes:o,duration:a}),[a,o]);return dw(p)?null:mw(p)?de(hw,{...e,animationStyles:y,children:String(p)}):Zx.isFragment(p)?de(hh,{...e,animationStyles:y}):de(Dx,{children:w.Children.map(p,(x,S)=>{if(!w.isValidElement(x))return null;const h=r+(t?S*a*n:0);switch(x.type){case"ol":case"ul":return de(Ys,{children:({cx:m})=>de(x.type,{...x.props,className:m(l,x.props.className),style:Object.assign({},u,x.props.style),children:de(us,{...e,children:x.props.children})})});case"li":return de(Pd,{threshold:i,triggerOnce:s,onChange:g,children:({inView:m,ref:v})=>de(Ys,{children:({cx:k})=>de(x.type,{...x.props,ref:v,className:k(c,x.props.className),css:Ra(()=>y)(m),style:Object.assign({},d,x.props.style,ou(!m),{animationDelay:h+"ms"})})})});default:return de(Pd,{threshold:i,triggerOnce:s,onChange:g,children:({inView:m,ref:v})=>de("div",{ref:v,className:l,css:Ra(()=>y)(m),style:Object.assign({},u,ou(!m),{animationDelay:h+"ms"}),children:de(Ys,{children:({cx:k})=>de(x.type,{...x.props,className:k(c,x.props.className),style:Object.assign({},d,x.props.style)})})})})}})})},pw={display:"inline-block",whiteSpace:"pre"},hw=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:i=1e3,fraction:o=0,triggerOnce:s=!1,className:l,style:u,children:c,onVisibilityChange:d}=e,{ref:p,inView:g}=fh({triggerOnce:s,threshold:o,onChange:d});return ph(()=>de("div",{ref:p,className:l,style:Object.assign({},u,pw),children:c.split("").map((y,x)=>de("span",{css:Ra(()=>t)(g),style:{animationDelay:a+x*i*r+"ms"},children:y},x))}),()=>de(hh,{...e,children:c}))(n)},hh=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:i,children:o,onVisibilityChange:s}=e,{ref:l,inView:u}=fh({triggerOnce:r,threshold:n,onChange:s});return de("div",{ref:l,className:a,css:Ra(()=>t)(u),style:Object.assign({},i,ou(!u)),children:o})};P`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;P`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;P`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;P`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;P`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const vw=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,gw=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,yw=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,xw=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,ww=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,kw=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Sw=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,bw=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ew=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Cw=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Nw=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,jw=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Pw=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function _w(e,t,n){switch(n){case"bottom-left":return t?gw:ew;case"bottom-right":return t?yw:tw;case"down":return e?t?ww:rw:t?xw:nw;case"left":return e?t?Sw:aw:t?kw:Oc;case"right":return e?t?Ew:ow:t?bw:iw;case"top-left":return t?Cw:sw;case"top-right":return t?Nw:lw;case"up":return e?t?Pw:cw:t?jw:uw;default:return t?vw:Jx}}const Ow=e=>{const{big:t=!1,direction:n,reverse:r=!1,...a}=e,i=w.useMemo(()=>_w(t,r,n),[t,n,r]);return de(us,{keyframes:i,...a})};P`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;P`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;P`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;P`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;P`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;P`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;P`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const Tw=P`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Iw=P`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Rw=P`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Lw=P`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Aw=P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,zw=P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Mw=P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,$w=P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Dw(e,t){switch(t){case"down":return e?Aw:Tw;case"right":return e?Mw:Rw;case"up":return e?$w:Lw;case"left":default:return e?zw:Iw}}const Fw=e=>{const{direction:t,reverse:n=!1,...r}=e,a=w.useMemo(()=>Dw(n,t),[t,n]);return de(us,{keyframes:a,...r})},Uw=P`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Bw=P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ww=P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Vw=P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Yw=P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Hw=P`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Xw=P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Qw=P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Kw=P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Gw=P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function qw(e,t){switch(t){case"down":return e?Xw:Bw;case"left":return e?Qw:Ww;case"right":return e?Kw:Vw;case"up":return e?Gw:Yw;default:return e?Hw:Uw}}const Zw=e=>{const{direction:t,reverse:n=!1,...r}=e,a=w.useMemo(()=>qw(n,t),[t,n]);return de(us,{keyframes:a,...r})},Jw=()=>f.jsxs("div",{className:"intro",children:[f.jsx(Fw,{duration:2e3,children:f.jsx("img",{className:"intro-img ",src:F2,alt:""})}),f.jsxs("div",{className:"intro-text",children:[f.jsx("h4",{children:"Taekwondo"}),f.jsx("p",{children:"La filosofía del Taekwondo se basa en cinco principios derivados de las filosofías chinas del confucionismo, y el taoísmo; influenciadas en gran parte por el inmenso nacionalismo coreano; estos principios son: cortesía, integridad, perseverancia, autocontrol y espíritu indomable."})]}),f.jsx("div",{className:"intro-text",children:f.jsx("h4",{children:'"LA CONQUISTA DE LA VOLUNTAD"'})}),f.jsx(Zw,{delay:500,duration:2e3,children:f.jsx("img",{className:"intro-img ",src:U2,alt:""})}),f.jsx(Ow,{delay:1e3,duration:2e3,children:f.jsx("img",{className:"intro-img",src:B2,alt:""})}),f.jsx("div",{className:"intro-text",children:f.jsx("p",{children:'"AL OTRO LADO DE TUS MIEDOS ENCONTRARAS TU PODER"'})})]}),e3=()=>f.jsxs("div",{className:"inicio",children:[f.jsx(D,{to:"/contacto",className:"inscribirse-btn",children:"INSCRIBIRME YA!!!"}),f.jsxs("div",{className:"inicio-intro",children:[f.jsx("h1",{children:"Los Garras Marcos Paz"}),f.jsx("p",{children:'"Queremos que esta escuela sea Un espacio para que todos aprendan del respeto y la defensa personal, con los valores del Taekwondo"'})]}),f.jsx(Jw,{}),f.jsx(L2,{}),f.jsxs("div",{className:"fotos",children:[f.jsx("h2",{children:"Fotos"}),f.jsx("p",{children:"Te mostramos algunos de los lindos momentos de nuestra escuela"}),f.jsxs("div",{className:"grid-fotos",children:[f.jsx("img",{src:A2,alt:"",className:"grid-fotos-img"}),f.jsx("img",{src:z2,alt:"",className:"grid-fotos-img"}),f.jsx("img",{src:W0,alt:"",className:"grid-fotos-img"}),f.jsx("img",{src:tu,alt:"",className:"grid-fotos-img"})]})]}),f.jsxs("div",{className:"competencias",children:[f.jsx("h2",{children:"Competencias"}),f.jsx("p",{children:"En Garras de Tigre somos activos para ir a torneos en toda Argentina y algunos internacionales."}),f.jsxs("div",{className:"grid-competencias",children:[f.jsxs("div",{className:"img-card",children:[f.jsxs(D,{to:"/torneo",children:[" ",f.jsx("img",{src:Vr,alt:"",className:"grid-competencias-img"})]}),f.jsx(D,{to:"/torneo",className:"competencia-btn",children:"Ver Mas"})]}),f.jsxs("div",{className:"img-card",children:[f.jsxs(D,{to:"/torneo",children:["  ",f.jsx("img",{src:M2,alt:"",className:"grid-competencias-img"})]}),f.jsx(D,{to:"/torneo",className:"competencia-btn",children:"Ver Mas"})]}),f.jsxs("div",{className:"img-card",children:[f.jsxs(D,{to:"/torneo",children:["   ",f.jsx("img",{src:$2,alt:"",className:"grid-competencias-img"})]}),f.jsx(D,{to:"/torneo",className:"competencia-btn",children:"Ver Mas"})]})]})]}),f.jsxs("div",{className:"modalidades",children:[f.jsx("h2",{children:"Modalidades de Clase"}),f.jsx("p",{children:"Aqui puedes ver las propuestas de entrenamiento y clases!"}),f.jsxs("div",{className:"modalidades-grid",children:[f.jsxs("div",{className:"img-card",children:[f.jsx("h4",{children:"Individual Taekwondo"}),f.jsxs(D,{to:"/clases",children:[" ",f.jsx("img",{src:D2,alt:"",className:"grid-eventos-img"})]}),f.jsx(D,{to:"/clases",className:"eventos-btn",children:"Ver Mas"})]}),f.jsxs("div",{className:"img-card",children:[f.jsx("h4",{children:"Pack Amigos Taekwondo"}),f.jsxs(D,{to:"/clases",children:[" ",f.jsx("img",{src:V0,alt:"",className:"grid-eventos-img"})]}),f.jsx(D,{to:"/clases",className:"eventos-btn",children:"Ver Mas"})]}),f.jsxs("div",{className:"img-card",children:[f.jsx("h4",{children:"Acondicionamiento Fisico"}),f.jsxs(D,{to:"/clases",children:[" ",f.jsx("img",{src:Vr,alt:"",className:"grid-eventos-img"})]}),f.jsx(D,{to:"/clases",className:"eventos-btn",children:"Ver Mas"})]}),f.jsxs("div",{className:"img-card",children:[f.jsx("h4",{children:"Defensa Personal"}),f.jsxs(D,{to:"/clases",children:[" ",f.jsx("img",{src:tu,alt:"",className:"grid-eventos-img"})]}),f.jsx(D,{to:"/clases",className:"eventos-btn",children:"Ver Mas"})]})]})]}),f.jsxs("div",{className:"proximos-eventos",children:[f.jsx("h2",{children:"Proximos eventos"}),f.jsx("p",{children:"Aqui puedes ver las proximas propuestas y eventos de la escuela!"}),f.jsxs("div",{className:"eventos-grid",children:[f.jsxs("div",{className:"img-card",children:[f.jsxs(D,{to:"/torneo",children:[" ",f.jsx("img",{src:Vr,alt:"",className:"grid-eventos-img"})]}),f.jsx(D,{to:"/torneo",className:"eventos-btn",children:"Ver Mas"})]}),f.jsxs("div",{className:"img-card",children:[f.jsxs(D,{to:"/torneo",children:[" ",f.jsx("img",{src:Vr,alt:"",className:"grid-eventos-img"})]}),f.jsx(D,{to:"/torneo",className:"eventos-btn",children:"Ver Mas"})]}),f.jsxs("div",{className:"img-card",children:[f.jsxs(D,{to:"/torneo",children:[" ",f.jsx("img",{src:Vr,alt:"",className:"grid-eventos-img"})]}),f.jsx(D,{to:"/torneo",className:"eventos-btn",children:"Ver Mas"})]})]})]})]});function _d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_d(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_d(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function go(e){"@babel/helpers - typeof";return go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},go(e)}function t3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Od(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n3(e,t,n){return t&&Od(e.prototype,t),n&&Od(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tc(e,t){return a3(e)||o3(e,t)||vh(e,t)||l3()}function Ha(e){return r3(e)||i3(e)||vh(e)||s3()}function r3(e){if(Array.isArray(e))return su(e)}function a3(e){if(Array.isArray(e))return e}function i3(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function o3(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function vh(e,t){if(e){if(typeof e=="string")return su(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return su(e,t)}}function su(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Td=function(){},Ic={},gh={},yh=null,xh={mark:Td,measure:Td};try{typeof window<"u"&&(Ic=window),typeof document<"u"&&(gh=document),typeof MutationObserver<"u"&&(yh=MutationObserver),typeof performance<"u"&&(xh=performance)}catch{}var u3=Ic.navigator||{},Id=u3.userAgent,Rd=Id===void 0?"":Id,pn=Ic,J=gh,Ld=yh,gi=xh;pn.document;var Vt=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",wh=~Rd.indexOf("MSIE")||~Rd.indexOf("Trident/"),yi,xi,wi,ki,Si,Dt="___FONT_AWESOME___",lu=16,kh="fa",Sh="svg-inline--fa",Fn="data-fa-i2svg",uu="data-fa-pseudo-element",c3="data-fa-pseudo-element-pending",Rc="data-prefix",Lc="data-icon",Ad="fontawesome-i2svg",f3="async",d3=["HTML","HEAD","STYLE","SCRIPT"],bh=function(){try{return!0}catch{return!1}}(),q="classic",le="sharp",Ac=[q,le];function Xa(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var La=Xa((yi={},xe(yi,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),xe(yi,le,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yi)),Aa=Xa((xi={},xe(xi,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),xe(xi,le,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),xi)),za=Xa((wi={},xe(wi,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),xe(wi,le,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),wi)),m3=Xa((ki={},xe(ki,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),xe(ki,le,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ki)),p3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Eh="fa-layers-text",h3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,v3=Xa((Si={},xe(Si,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),xe(Si,le,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Si)),Ch=[1,2,3,4,5,6,7,8,9,10],g3=Ch.concat([11,12,13,14,15,16,17,18,19,20]),y3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Tn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ma=new Set;Object.keys(Aa[q]).map(Ma.add.bind(Ma));Object.keys(Aa[le]).map(Ma.add.bind(Ma));var x3=[].concat(Ac,Ha(Ma),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Tn.GROUP,Tn.SWAP_OPACITY,Tn.PRIMARY,Tn.SECONDARY]).concat(Ch.map(function(e){return"".concat(e,"x")})).concat(g3.map(function(e){return"w-".concat(e)})),ua=pn.FontAwesomeConfig||{};function w3(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function k3(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var S3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];S3.forEach(function(e){var t=Tc(e,2),n=t[0],r=t[1],a=k3(w3(n));a!=null&&(ua[r]=a)})}var Nh={styleDefault:"solid",familyDefault:"classic",cssPrefix:kh,replacementClass:Sh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ua.familyPrefix&&(ua.cssPrefix=ua.familyPrefix);var Pr=T(T({},Nh),ua);Pr.autoReplaceSvg||(Pr.observeMutations=!1);var L={};Object.keys(Nh).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){Pr[e]=n,ca.forEach(function(r){return r(L)})},get:function(){return Pr[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){Pr.cssPrefix=t,ca.forEach(function(n){return n(L)})},get:function(){return Pr.cssPrefix}});pn.FontAwesomeConfig=L;var ca=[];function b3(e){return ca.push(e),function(){ca.splice(ca.indexOf(e),1)}}var Ht=lu,Et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E3(e){if(!(!e||!Vt)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var C3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $a(){for(var e=12,t="";e-- >0;)t+=C3[Math.random()*62|0];return t}function Lr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function zc(e){return e.classList?Lr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function jh(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function N3(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(jh(e[n]),'" ')},"").trim()}function cs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Mc(e){return e.size!==Et.size||e.x!==Et.x||e.y!==Et.y||e.rotate!==Et.rotate||e.flipX||e.flipY}function j3(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function P3(e){var t=e.transform,n=e.width,r=n===void 0?lu:n,a=e.height,i=a===void 0?lu:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&wh?l+="translate(".concat(t.x/Ht-r/2,"em, ").concat(t.y/Ht-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ht,"em), calc(-50% + ").concat(t.y/Ht,"em)) "):l+="translate(".concat(t.x/Ht,"em, ").concat(t.y/Ht,"em) "),l+="scale(".concat(t.size/Ht*(t.flipX?-1:1),", ").concat(t.size/Ht*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var _3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ph(){var e=kh,t=Sh,n=L.cssPrefix,r=L.replacementClass,a=_3;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var zd=!1;function Hs(){L.autoAddCss&&!zd&&(E3(Ph()),zd=!0)}var O3={mixout:function(){return{dom:{css:Ph,insertCss:Hs}}},hooks:function(){return{beforeDOMElementCreation:function(){Hs()},beforeI2svg:function(){Hs()}}}},Ft=pn||{};Ft[Dt]||(Ft[Dt]={});Ft[Dt].styles||(Ft[Dt].styles={});Ft[Dt].hooks||(Ft[Dt].hooks={});Ft[Dt].shims||(Ft[Dt].shims=[]);var mt=Ft[Dt],_h=[],T3=function e(){J.removeEventListener("DOMContentLoaded",e),yo=1,_h.map(function(t){return t()})},yo=!1;Vt&&(yo=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),yo||J.addEventListener("DOMContentLoaded",T3));function I3(e){Vt&&(yo?setTimeout(e,0):_h.push(e))}function Qa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?jh(e):"<".concat(t," ").concat(N3(r),">").concat(i.map(Qa).join(""),"</").concat(t,">")}function Md(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var R3=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Xs=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?R3(n,a):n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function L3(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function cu(e){var t=L3(e);return t.length===1?t[0].toString(16):null}function A3(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function $d(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function fu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=$d(t);typeof mt.hooks.addPack=="function"&&!a?mt.hooks.addPack(e,$d(t)):mt.styles[e]=T(T({},mt.styles[e]||{}),i),e==="fas"&&fu("fa",t)}var bi,Ei,Ci,ur=mt.styles,z3=mt.shims,M3=(bi={},xe(bi,q,Object.values(za[q])),xe(bi,le,Object.values(za[le])),bi),$c=null,Oh={},Th={},Ih={},Rh={},Lh={},$3=(Ei={},xe(Ei,q,Object.keys(La[q])),xe(Ei,le,Object.keys(La[le])),Ei);function D3(e){return~x3.indexOf(e)}function F3(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!D3(a)?a:null}var Ah=function(){var t=function(i){return Xs(ur,function(o,s,l){return o[l]=Xs(s,i,{}),o},{})};Oh=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Th=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Lh=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ur||L.autoFetchSvg,r=Xs(z3,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ih=r.names,Rh=r.unicodes,$c=fs(L.styleDefault,{family:L.familyDefault})};b3(function(e){$c=fs(e.styleDefault,{family:L.familyDefault})});Ah();function Dc(e,t){return(Oh[e]||{})[t]}function U3(e,t){return(Th[e]||{})[t]}function In(e,t){return(Lh[e]||{})[t]}function zh(e){return Ih[e]||{prefix:null,iconName:null}}function B3(e){var t=Rh[e],n=Dc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function hn(){return $c}var Fc=function(){return{prefix:null,iconName:null,rest:[]}};function fs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=La[r][e],i=Aa[r][e]||Aa[r][a],o=e in mt.styles?e:null;return i||o||null}var Dd=(Ci={},xe(Ci,q,Object.keys(za[q])),xe(Ci,le,Object.keys(za[le])),Ci);function ds(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},xe(t,q,"".concat(L.cssPrefix,"-").concat(q)),xe(t,le,"".concat(L.cssPrefix,"-").concat(le)),t),o=null,s=q;(e.includes(i[q])||e.some(function(u){return Dd[q].includes(u)}))&&(s=q),(e.includes(i[le])||e.some(function(u){return Dd[le].includes(u)}))&&(s=le);var l=e.reduce(function(u,c){var d=F3(L.cssPrefix,c);if(ur[c]?(c=M3[s].includes(c)?m3[s][c]:c,o=c,u.prefix=c):$3[s].indexOf(c)>-1?(o=c,u.prefix=fs(c,{family:s})):d?u.iconName=d:c!==L.replacementClass&&c!==i[q]&&c!==i[le]&&u.rest.push(c),!a&&u.prefix&&u.iconName){var p=o==="fa"?zh(u.iconName):{},g=In(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||g||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!ur.far&&ur.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},Fc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===le&&(ur.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=In(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=hn()||"fas"),l}var W3=function(){function e(){t3(this,e),this.definitions={}}return n3(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),fu(s,o[s]);var l=za[q][s];l&&fu(l,o[s]),Ah()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),e}(),Fd=[],cr={},xr={},V3=Object.keys(xr);function Y3(e,t){var n=t.mixoutsTo;return Fd=e,cr={},Object.keys(xr).forEach(function(r){V3.indexOf(r)===-1&&delete xr[r]}),Fd.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),go(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){cr[o]||(cr[o]=[]),cr[o].push(i[o])})}r.provides&&r.provides(xr)}),n}function du(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=cr[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=cr[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ut(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xr[e]?xr[e].apply(null,t):void 0}function mu(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||hn();if(t)return t=In(n,t)||t,Md(Mh.definitions,n,t)||Md(mt.styles,n,t)}var Mh=new W3,H3=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,Un("noAuto")},X3={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vt?(Un("beforeI2svg",t),Ut("pseudoElements2svg",t),Ut("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,I3(function(){K3({autoReplaceSvgRoot:n}),Un("watch",t)})}},Q3={icon:function(t){if(t===null)return null;if(go(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:In(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=fs(t[0]);return{prefix:r,iconName:In(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(p3))){var a=ds(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||hn(),iconName:In(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=hn();return{prefix:i,iconName:In(i,t)||t}}}},et={noAuto:H3,config:L,dom:X3,parse:Q3,library:Mh,findIconDefinition:mu,toHtml:Qa},K3=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(mt.styles).length>0||L.autoFetchSvg)&&Vt&&L.autoReplaceSvg&&et.dom.i2svg({node:r})};function ms(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Qa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Vt){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function G3(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Mc(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=cs(T(T({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function q3(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function Uc(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,y=r.found?r:n,x=y.width,S=y.height,h=a==="fak",m=[L.replacementClass,i?"".concat(L.cssPrefix,"-").concat(i):""].filter(function(I){return d.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(d.classes).join(" "),v={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(S)})},k=h&&!~d.classes.indexOf("fa-fw")?{width:"".concat(x/S*16*.0625,"em")}:{};g&&(v.attributes[Fn]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||$a())},children:[l]}),delete v.attributes.title);var E=T(T({},v),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:T(T({},k),d.styles)}),C=r.found&&n.found?Ut("generateAbstractMask",E)||{children:[],attributes:{}}:Ut("generateAbstractIcon",E)||{children:[],attributes:{}},b=C.children,N=C.attributes;return E.children=b,E.attributes=N,s?q3(E):G3(E)}function Ud(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[Fn]="");var c=T({},o.styles);Mc(a)&&(c.transform=P3({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=cs(c);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Z3(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=cs(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Qs=mt.styles;function pu(e){var t=e[0],n=e[1],r=e.slice(4),a=Tc(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Tn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Tn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Tn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var J3={found:!1,width:512,height:512};function e5(e,t){!bh&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function hu(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=hn()),new Promise(function(r,a){if(Ut("missingIconAbstract"),n==="fa"){var i=zh(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Qs[t]&&Qs[t][e]){var o=Qs[t][e];return r(pu(o))}e5(e,t),r(T(T({},J3),{},{icon:L.showMissingIcons&&e?Ut("missingIconAbstract")||{}:{}}))})}var Bd=function(){},vu=L.measurePerformance&&gi&&gi.mark&&gi.measure?gi:{mark:Bd,measure:Bd},Zr='FA "6.5.1"',t5=function(t){return vu.mark("".concat(Zr," ").concat(t," begins")),function(){return $h(t)}},$h=function(t){vu.mark("".concat(Zr," ").concat(t," ends")),vu.measure("".concat(Zr," ").concat(t),"".concat(Zr," ").concat(t," begins"),"".concat(Zr," ").concat(t," ends"))},Bc={begin:t5,end:$h},Ui=function(){};function Wd(e){var t=e.getAttribute?e.getAttribute(Fn):null;return typeof t=="string"}function n5(e){var t=e.getAttribute?e.getAttribute(Rc):null,n=e.getAttribute?e.getAttribute(Lc):null;return t&&n}function r5(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function a5(){if(L.autoReplaceSvg===!0)return Bi.replace;var e=Bi[L.autoReplaceSvg];return e||Bi.replace}function i5(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function o5(e){return J.createElement(e)}function Dh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?i5:o5:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Dh(o,{ceFn:r}))}),a}function s5(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Bi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Dh(a),n)}),n.getAttribute(Fn)===null&&L.keepOriginalSource){var r=J.createComment(s5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~zc(n).indexOf(L.replacementClass))return Bi.replace(t);var a=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===L.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Qa(s)}).join(`
`);n.setAttribute(Fn,""),n.innerHTML=o}};function Vd(e){e()}function Fh(e,t){var n=typeof t=="function"?t:Ui;if(e.length===0)n();else{var r=Vd;L.mutateApproach===f3&&(r=pn.requestAnimationFrame||Vd),r(function(){var a=a5(),i=Bc.begin("mutate");e.map(a),i(),n()})}}var Wc=!1;function Uh(){Wc=!0}function gu(){Wc=!1}var xo=null;function Yd(e){if(Ld&&L.observeMutations){var t=e.treeCallback,n=t===void 0?Ui:t,r=e.nodeCallback,a=r===void 0?Ui:r,i=e.pseudoElementsCallback,o=i===void 0?Ui:i,s=e.observeMutationsRoot,l=s===void 0?J:s;xo=new Ld(function(u){if(!Wc){var c=hn();Lr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Wd(d.addedNodes[0])&&(L.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&L.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Wd(d.target)&&~y3.indexOf(d.attributeName))if(d.attributeName==="class"&&n5(d.target)){var p=ds(zc(d.target)),g=p.prefix,y=p.iconName;d.target.setAttribute(Rc,g||c),y&&d.target.setAttribute(Lc,y)}else r5(d.target)&&a(d.target)})}}),Vt&&xo.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function l5(){xo&&xo.disconnect()}function u5(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function c5(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ds(zc(e));return a.prefix||(a.prefix=hn()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=U3(a.prefix,e.innerText)||Dc(a.prefix,cu(e.innerText))),!a.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function f5(e){var t=Lr(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||$a()):(t["aria-hidden"]="true",t.focusable="false")),t}function d5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=c5(e),r=n.iconName,a=n.prefix,i=n.rest,o=f5(e),s=du("parseNodeAttributes",{},e),l=t.styleParser?u5(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var m5=mt.styles;function Bh(e){var t=L.autoReplaceSvg==="nest"?Hd(e,{styleParser:!1}):Hd(e);return~t.extra.classes.indexOf(Eh)?Ut("generateLayersText",e,t):Ut("generateSvgReplacementMutation",e,t)}var vn=new Set;Ac.map(function(e){vn.add("fa-".concat(e))});Object.keys(La[q]).map(vn.add.bind(vn));Object.keys(La[le]).map(vn.add.bind(vn));vn=Ha(vn);function Xd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vt)return Promise.resolve();var n=J.documentElement.classList,r=function(d){return n.add("".concat(Ad,"-").concat(d))},a=function(d){return n.remove("".concat(Ad,"-").concat(d))},i=L.autoFetchSvg?vn:Ac.map(function(c){return"fa-".concat(c)}).concat(Object.keys(m5));i.includes("fa")||i.push("fa");var o=[".".concat(Eh,":not([").concat(Fn,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Fn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Lr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Bc.begin("onTree"),u=s.reduce(function(c,d){try{var p=Bh(d);p&&c.push(p)}catch(g){bh||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(p){Fh(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function p5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bh(e).then(function(n){n&&Fh([n],t)})}function h5(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:mu(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:mu(a||{})),e(r,T(T({},n),{},{mask:a}))}}var v5=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Et:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,p=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,x=n.classes,S=x===void 0?[]:x,h=n.attributes,m=h===void 0?{}:h,v=n.styles,k=v===void 0?{}:v;if(t){var E=t.prefix,C=t.iconName,b=t.icon;return ms(T({type:"icon"},t),function(){return Un("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(p?m["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(y||$a()):(m["aria-hidden"]="true",m.focusable="false")),Uc({icons:{main:pu(b),mask:l?pu(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:C,transform:T(T({},Et),a),symbol:o,title:p,maskId:c,titleId:y,extra:{attributes:m,styles:k,classes:S}})})}},g5={mixout:function(){return{icon:h5(v5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Xd,n.nodeCallback=p5,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Xd(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,y){Promise.all([hu(a,s),c.iconName?hu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var S=Tc(x,2),h=S[0],m=S[1];g([n,Uc({icons:{main:h,mask:m},prefix:s,iconName:a,transform:l,symbol:u,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=cs(s);l.length>0&&(a.style=l);var u;return Mc(o)&&(u=Ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},y5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ms({type:"layer"},function(){Un("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Ha(i)).join(" ")},children:o}]})}}}},x5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return ms({type:"counter",content:n},function(){return Un("beforeDOMElementCreation",{content:n,params:r}),Z3({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Ha(s))}})})}}}},w5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Et:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return ms({type:"text",content:n},function(){return Un("beforeDOMElementCreation",{content:n,params:r}),Ud({content:n,transform:T(T({},Et),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Ha(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(wh){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return L.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ud({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},k5=new RegExp('"',"ug"),Qd=[1105920,1112319];function S5(e){var t=e.replace(k5,""),n=A3(t,0),r=n>=Qd[0]&&n<=Qd[1],a=t.length===2?t[0]===t[1]:!1;return{value:cu(a?t[0]:t),isSecondary:r||a}}function Kd(e,t){var n="".concat(c3).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Lr(e.children),o=i.filter(function(b){return b.getAttribute(uu)===t})[0],s=pn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(h3),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?le:q,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Aa[p][l[2].toLowerCase()]:v3[p][u],y=S5(d),x=y.value,S=y.isSecondary,h=l[0].startsWith("FontAwesome"),m=Dc(g,x),v=m;if(h){var k=B3(x);k.iconName&&k.prefix&&(m=k.iconName,g=k.prefix)}if(m&&!S&&(!o||o.getAttribute(Rc)!==g||o.getAttribute(Lc)!==v)){e.setAttribute(n,v),o&&e.removeChild(o);var E=d5(),C=E.extra;C.attributes[uu]=t,hu(m,g).then(function(b){var N=Uc(T(T({},E),{},{icons:{main:b,mask:Fc()},prefix:g,iconName:v,extra:C,watchable:!0})),I=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=N.map(function(_){return Qa(_)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function b5(e){return Promise.all([Kd(e,"::before"),Kd(e,"::after")])}function E5(e){return e.parentNode!==document.head&&!~d3.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(uu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Gd(e){if(Vt)return new Promise(function(t,n){var r=Lr(e.querySelectorAll("*")).filter(E5).map(b5),a=Bc.begin("searchPseudoElements");Uh(),Promise.all(r).then(function(){a(),gu(),t()}).catch(function(){a(),gu(),n()})})}var C5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Gd,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;L.searchPseudoElements&&Gd(a)}}},qd=!1,N5={mixout:function(){return{dom:{unwatch:function(){Uh(),qd=!0}}}},hooks:function(){return{bootstrap:function(){Yd(du("mutationObserverCallbacks",{}))},noAuto:function(){l5()},watch:function(n){var r=n.observeMutationsRoot;qd?gu():Yd(du("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Zd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},j5={mixout:function(){return{parse:{transform:function(n){return Zd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Zd(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Ks={x:0,y:0,width:"100%",height:"100%"};function Jd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function P5(e){return e.tag==="g"?e.children:[e]}var _5={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?ds(a.split(" ").map(function(o){return o.trim()})):Fc();return i.prefix||(i.prefix=hn()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,d=o.width,p=o.icon,g=j3({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:T(T({},Ks),{},{fill:"white"})},x=c.children?{children:c.children.map(Jd)}:{},S={tag:"g",attributes:T({},g.inner),children:[Jd(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},x))]},h={tag:"g",attributes:T({},g.outer),children:[S]},m="mask-".concat(s||$a()),v="clip-".concat(s||$a()),k={tag:"mask",attributes:T(T({},Ks),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,h]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:P5(p)},k]};return r.push(E,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(m,")")},Ks)}),{children:r,attributes:a}}}},O5={provides:function(t){var n=!1;pn.matchMedia&&(n=pn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},T5={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},I5=[O3,g5,y5,x5,w5,C5,N5,j5,_5,O5,T5];Y3(I5,{mixoutsTo:et});et.noAuto;et.config;et.library;et.dom;var yu=et.parse;et.findIconDefinition;et.toHtml;var R5=et.icon;et.layer;et.text;et.counter;function em(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?em(Object(n),!0).forEach(function(r){fr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):em(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wo(e){"@babel/helpers - typeof";return wo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wo(e)}function fr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L5(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function A5(e,t){if(e==null)return{};var n=L5(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xu(e){return z5(e)||M5(e)||$5(e)||D5()}function z5(e){if(Array.isArray(e))return wu(e)}function M5(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $5(e,t){if(e){if(typeof e=="string")return wu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wu(e,t)}}function wu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F5(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,p=e.fixedWidth,g=e.inverse,y=e.border,x=e.listItem,S=e.flip,h=e.size,m=e.rotation,v=e.pull,k=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":g,"fa-border":y,"fa-li":x,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},fr(t,"fa-".concat(h),typeof h<"u"&&h!==null),fr(t,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),fr(t,"fa-pull-".concat(v),typeof v<"u"&&v!==null),fr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(k).map(function(E){return k[E]?E:null}).filter(function(E){return E})}function U5(e){return e=e-0,e===e}function Wh(e){return U5(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var B5=["style"];function W5(e){return e.charAt(0).toUpperCase()+e.slice(1)}function V5(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Wh(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[W5(a)]=i:t[a]=i,t},{})}function Vh(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Vh(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=V5(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Wh(u)]=c}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=A5(n,B5);return a.attrs.style=en(en({},a.attrs.style),o),e.apply(void 0,[t.tag,en(en({},a.attrs),s)].concat(xu(r)))}var Yh=!1;try{Yh=!0}catch{}function Y5(){if(!Yh&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function tm(e){if(e&&wo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(yu.icon)return yu.icon(e);if(e===null)return null;if(e&&wo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Gs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fr({},e,t):{}}var tn=dt.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,u=tm(n),c=Gs("classes",[].concat(xu(F5(e)),xu(i.split(" ")))),d=Gs("transform",typeof e.transform=="string"?yu.transform(e.transform):e.transform),p=Gs("mask",tm(r)),g=R5(u,en(en(en(en({},c),d),p),{},{symbol:a,title:o,titleId:s,maskId:l}));if(!g)return Y5("Could not find icon",u),null;var y=g.abstract,x={ref:t};return Object.keys(e).forEach(function(S){tn.defaultProps.hasOwnProperty(S)||(x[S]=e[S])}),H5(y[0],x)});tn.displayName="FontAwesomeIcon";tn.propTypes={beat:$.bool,border:$.bool,beatFade:$.bool,bounce:$.bool,className:$.string,fade:$.bool,flash:$.bool,mask:$.oneOfType([$.object,$.array,$.string]),maskId:$.string,fixedWidth:$.bool,inverse:$.bool,flip:$.oneOf([!0,!1,"horizontal","vertical","both"]),icon:$.oneOfType([$.object,$.array,$.string]),listItem:$.bool,pull:$.oneOf(["right","left"]),pulse:$.bool,rotation:$.oneOf([0,90,180,270]),shake:$.bool,size:$.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:$.bool,spinPulse:$.bool,spinReverse:$.bool,symbol:$.oneOfType([$.bool,$.string]),title:$.string,titleId:$.string,transform:$.oneOfType([$.string,$.object]),swapOpacity:$.bool};tn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var H5=Vh.bind(null,dt.createElement),X5={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Q5={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},K5={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},G5={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};const q5="https://mndelsero.github.io/garrasprueba1/assets/logo-dexoEsRO.jpg",Z5="https://mndelsero.github.io/garrasprueba1/assets/promo-camisetas-R8FhvjLk.jpeg",J5=()=>f.jsxs("section",{className:"nosotros",children:[f.jsx("h1",{children:"La Academia"}),f.jsxs("div",{className:"nosotros-grid",children:[f.jsxs("div",{className:"nosotros-historia",children:[f.jsx("h3",{children:"Nuestra Escuela"}),f.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ullam, est ex molestias optio eveniet, totam repudiandae vitae modi possimus inventore cumque, corrupti nihil a sint. Corporis atque temporibus id consequatur harum ullam,"}),f.jsx("img",{src:q5,alt:"logo",className:"hist-logo"})]}),f.jsxs("div",{className:"nosotros-mp",children:[f.jsx("h3",{children:"Nuestra Sede"}),f.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ullam, est ex molestias optio eveniet, totam repudiandae vitae modi possimus inventore cumque, corrupti nihil a sint. Corporis atque temporibus id consequatur harum ullam, non cupiditate! Quia, nulla. Inventore vitae dolorum magni est tenetur aliquam aperiam dolore ut quos, ipsam voluptas minima aspernatur ."}),f.jsx("img",{src:tu,alt:"marcos paz",className:"nosotros-img"})]}),f.jsxs("div",{className:"nosotros-profe",children:[f.jsx("h3",{children:"Nuestro Profe"}),f.jsx("img",{src:Z5,alt:"profe",className:"profe-img"}),f.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ullam, est ex molestias optio eveniet, totam repudiandae vitae modi possimus inventore cumque, corrupti nihil a sint. Corporis atque temporibus id dolorum dignissimos, quam accusantium dicta voluptatum. Culpa, est optio."})]}),f.jsxs("div",{className:"nosotros-redes",children:[f.jsx("h3",{children:"Nuestras Redes"}),f.jsxs("div",{className:"redes",children:[f.jsx("a",{href:"https://www.facebook.com/profile.php?id=100046205372986",target:"_blank",className:"redes-link",children:f.jsx(tn,{icon:Q5,className:"redes-icon"})}),f.jsx("a",{href:"https://wa.me/5491137926399",target:"_blank",className:"redes-link",children:f.jsx(tn,{icon:K5,className:"redes-icon"})}),f.jsx("a",{href:"https://www.instagram.com/garras.de.tigre/",target:"_blank",className:"redes-link",children:f.jsx(tn,{icon:X5,className:"redes-icon"})}),f.jsx("a",{href:"mailto:ezequielmpabon@gmail.com",target:"_blank",className:"redes-link",children:f.jsx(tn,{icon:G5,className:"redes-icon"})})]})]})]})]}),ek=()=>f.jsxs("div",{className:"contacto",children:[f.jsx("h1",{children:"Contacto"}),f.jsxs("div",{className:"contacto-info",children:[f.jsx("p",{children:"Rellena el Formulario, a continuacion recibiras un llamado para confirmar tus datos e iniciar cuanto antes tu primera clase!"}),f.jsx("p",{children:"Tambien, por este sitio puedes hacer pedido de tu indumentaria o algun otro producto que quieras comprar!"})]}),f.jsxs("div",{className:"inscripcion",children:[f.jsx("h2",{children:"Inscripcion!!!"}),f.jsxs("form",{action:"#",method:"POST",className:"inscripcion-form",children:[f.jsxs("div",{className:"form-grid",children:[f.jsxs("div",{className:"form-element",children:[f.jsx("label",{for:"nombreCompleto",className:"form-label",children:"Nombre Completo:"}),f.jsx("input",{className:"form-input",type:"text",id:"nombreCompleto",name:"nombreCompleto",placeholder:"Ingrese su nombre completo",required:!0})]}),f.jsxs("div",{className:"form-element",children:[f.jsx("label",{for:"apellido",className:"form-label",children:"Apellido:"}),f.jsx("input",{className:"form-input",type:"text",id:"apellido",name:"apellido",placeholder:"Ingrese su apellido",required:!0})]}),f.jsxs("div",{className:"form-element",children:[f.jsx("label",{for:"telefono",className:"form-label",children:"Número de Teléfono:"}),f.jsx("input",{className:"form-input",type:"tel",id:"telefono",name:"telefono",placeholder:"Ingrese su número de teléfono",required:!0})]}),f.jsxs("div",{className:"form-element",children:[f.jsx("label",{for:"dni",className:"form-label",children:"Número de DNI:"}),f.jsx("input",{className:"form-input",type:"text",id:"dni",name:"dni",placeholder:"Ingrese su número de DNI",required:!0})]}),f.jsxs("div",{className:"form-element",children:[f.jsx("label",{for:"correo",className:"form-label",children:"Dirección de Correo:"}),f.jsx("input",{className:"form-input",type:"email",id:"correo",name:"correo",placeholder:"Ingrese su dirección de correo",required:!0})]}),f.jsxs("div",{className:"form-element",children:[f.jsx("label",{for:"direccion",className:"form-label",children:"Dirección:"}),f.jsx("input",{className:"form-input",type:"text",id:"direccion",name:"direccion",placeholder:"Ingrese su dirección",required:!0})]}),f.jsxs("div",{className:"form-element",children:[f.jsx("label",{for:"genero",className:"form-label",children:"Género:"}),f.jsxs("select",{id:"genero",name:"genero",className:"formu-select",children:[f.jsx("option",{className:"form-option",value:"masculino",children:"Masculino"}),f.jsx("option",{className:"form-option",value:"femenino",children:"Femenino"})]})]}),f.jsxs("div",{className:"form-element",children:[f.jsx("label",{for:"edad",className:"form-label",children:"Edad:"}),f.jsx("input",{className:"form-input",type:"number",id:"edad",name:"edad",placeholder:"Ingrese su edad",required:!0})]}),f.jsxs("div",{className:"form-element",children:[f.jsx("label",{for:"especificacionSalud",className:"form-label",children:"Especificación de Salud:"}),f.jsx("textarea",{className:"form-textarea",id:"especificacionSalud",name:"especificacionSalud",cols:40,rows:5,placeholder:"Ingrese alguna especificación sobre su salud"})]})]}),f.jsx("div",{children:f.jsx("button",{type:"submit",className:"btn-inscripcion",children:"Enviar"})})]})]}),f.jsxs("div",{className:"pedir-prod",children:[f.jsx("h2",{children:"Pedidos de Productos"}),f.jsxs("form",{action:"#",method:"POST",className:"producto-form",children:[f.jsxs("div",{className:"form-element",children:[f.jsx("label",{className:"form-label",for:"producto",children:"Producto:"}),f.jsxs("select",{className:"form-input",id:"producto",name:"producto",required:!0,children:[f.jsx("option",{className:"form-option",value:"botella",children:"Botella"}),f.jsx("option",{className:"form-option",value:"taza",children:"Taza"}),f.jsx("option",{className:"form-option",value:"cartuchera",children:"Cartuchera"}),f.jsx("option",{className:"form-option",value:"buzo",children:"Buzo"}),f.jsx("option",{className:"form-option",value:"pantalon",children:"Pantalón"}),f.jsx("option",{className:"form-option",value:"remera",children:"Remera"}),f.jsx("option",{className:"form-option",value:"kit-completo",children:"Kit Completo"})]})]}),f.jsxs("div",{className:"form-element",children:[f.jsx("label",{className:"form-label",for:"talle",children:"Especificación del Talle:"}),f.jsx("textarea",{className:"form-input",cols:50,rows:5,id:"talle",name:"talle",placeholder:"Ingrese la especificación del talle",required:!0})]}),f.jsx("div",{children:f.jsx("button",{type:"submit",className:"btn-inscripcion",children:"Enviar"})})]})]})]}),tk="https://mndelsero.github.io/garrasprueba1/assets/botella club-oLM-oxZH.jpg",nk="https://mndelsero.github.io/garrasprueba1/assets/cartuchera club-xeumdYw-.jpg",rk="https://mndelsero.github.io/garrasprueba1/assets/indumentaria-back-ZRpJNx1M.jpeg",ak="https://mndelsero.github.io/garrasprueba1/assets/indumentaria--JXXrHUi.jpeg",ik="https://mndelsero.github.io/garrasprueba1/assets/tazasclub-WLC6Ijw2.jpg",ok=()=>f.jsxs("div",{className:"indumentaria-sctn",children:[f.jsx("h1",{children:"Nuestra Marca "}),f.jsxs("div",{className:"indumentaria",children:[f.jsx("h2",{children:"Indumentaria"}),f.jsx("p",{children:"Nuestra Indumentaria se caracteriza por los colores Rojo, Naranja y Negro, colores fuertes y de caracter, al igual que nuestros alumnos, quienes son firmes en su valor y disciplina!"}),f.jsxs("div",{className:"indumentaria-grid",children:[f.jsx("img",{src:rk,alt:"indu back",className:"indu-img"}),f.jsx("img",{src:ak,alt:"indu",className:"indu-img"})]})]}),f.jsxs("div",{className:"productos",children:[f.jsx("h2",{children:"Productos"}),f.jsx("p",{children:"Nuestra Indumentaria se caracteriza por los colores Rojo, Naranja y Negro, colores fuertes y de caracter, al igual que nuestros alumnos, quienes son firmes en su valor y disciplina!"}),f.jsxs("div",{className:"productos-grid",children:[f.jsx("img",{src:ik,alt:"",className:"prod-img"}),f.jsx("img",{src:tk,alt:"",className:"prod-img"}),f.jsx("img",{src:nk,alt:"",className:"prod-img"})]})]}),f.jsx(D,{to:"/contacto",className:"btn-pedir",children:" Pedir Producto"})]}),sk=()=>f.jsxs("div",{className:"clases",children:[f.jsx("h1",{children:"Información Clases Sede Marcos Paz"}),f.jsx("img",{src:V0,alt:"",className:"clases-img"}),f.jsxs("div",{className:"info-sctn",children:[f.jsxs("div",{className:"info-clases",children:[f.jsx("h4",{children:"Clase de Taekwondo"}),f.jsxs("li",{className:"info-li",children:["Edad: ",f.jsx("span",{className:"info-span",children:"Adultos y Niños"})]}),f.jsxs("li",{className:"info-li",children:["Dias: ",f.jsx("span",{className:"info-span",children:"Lunes,Miercoles y Viernes"})]}),f.jsxs("li",{className:"info-li",children:["Horario: ",f.jsx("span",{className:"info-span",children:"21:00hs a 22:30hs"})]}),f.jsxs("li",{className:"info-li",children:["Ubicacion: ",f.jsx("span",{className:"info-span",children:"Club Ciclista, Alsina 458.Marcos Paz"})]})]}),f.jsx("iframe",{className:"mapa",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.81859585971793!2d-58.84056257007068!3d-34.77831986225316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcec0ff8b3aa3d%3A0xadf4a85ad044fbb2!2sAdolfo%20Alsina%20458%2C%20B1727DLJ%20Marcos%20Paz%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1707347557980!5m2!1ses!2sar",width:"600",height:"450",style:{border:"0"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})]});function lk(){return f.jsx(f.Fragment,{children:f.jsxs(Cy,{basename:"/garrasprueba1",children:[f.jsx(_y,{}),f.jsxs(xy,{children:[f.jsx(Cn,{path:"/",element:f.jsx(e3,{})}),f.jsx(Cn,{path:"/nosotros",element:f.jsx(J5,{})}),f.jsx(Cn,{path:"/clases",element:f.jsx(sk,{})}),f.jsx(Cn,{path:"/indumentaria",element:f.jsx(ok,{})}),f.jsx(Cn,{path:"/contacto",element:f.jsx(ek,{})}),f.jsx(Cn,{})]}),f.jsx(Oy,{})]})})}Zs.createRoot(document.getElementById("root")).render(f.jsx(dt.StrictMode,{children:f.jsx(lk,{})}));
