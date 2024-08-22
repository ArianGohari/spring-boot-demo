function Hu(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webPush=!1;window.Vaadin.featureFlags.formFillerAddon=!1;window.Vaadin.featureFlags.hillaI18n=!1;window.Vaadin.featureFlags.copilotFlow=!1;window.Vaadin.featureFlags.copilotI18n=!1;window.Vaadin.featureFlags.copilotExperimentalFeatures=!1;var z4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ua(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vu={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),M4=Symbol.for("react.portal"),w4=Symbol.for("react.fragment"),b4=Symbol.for("react.strict_mode"),_4=Symbol.for("react.profiler"),x4=Symbol.for("react.provider"),A4=Symbol.for("react.context"),S4=Symbol.for("react.forward_ref"),C4=Symbol.for("react.suspense"),E4=Symbol.for("react.memo"),k4=Symbol.for("react.lazy"),hc=Symbol.iterator;function T4(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var Wu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gu=Object.assign,Qu={};function kr(e,t,n){this.props=e,this.context=t,this.refs=Qu,this.updater=n||Wu}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yu(){}Yu.prototype=kr.prototype;function As(e,t,n){this.props=e,this.context=t,this.refs=Qu,this.updater=n||Wu}var Ss=As.prototype=new Yu;Ss.constructor=As;Gu(Ss,kr.prototype);Ss.isPureReactComponent=!0;var cc=Array.isArray,Ku=Object.prototype.hasOwnProperty,Cs={current:null},Xu={key:!0,ref:!0,__self:!0,__source:!0};function Ju(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ku.call(t,r)&&!Xu.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var l=Array(s),h=0;h<s;h++)l[h]=arguments[h+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:ja,type:e,key:i,ref:o,props:a,_owner:Cs.current}}function P4(e,t){return{$$typeof:ja,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Es(e){return typeof e=="object"&&e!==null&&e.$$typeof===ja}function L4(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dc=/\/+/g;function io(e,t){return typeof e=="object"&&e!==null&&e.key!=null?L4(""+e.key):t.toString(36)}function Ii(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ja:case M4:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+io(o,0):r,cc(a)?(n="",e!=null&&(n=e.replace(dc,"$&/")+"/"),Ii(a,t,n,"",function(h){return h})):a!=null&&(Es(a)&&(a=P4(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(dc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",cc(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+io(i,s);o+=Ii(i,t,n,l,a)}else if(l=T4(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+io(i,s++),o+=Ii(i,t,n,l,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function hi(e,t,n){if(e==null)return e;var r=[],a=0;return Ii(e,r,"","",function(i){return t.call(n,i,a++)}),r}function R4(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var st={current:null},Di={transition:null},O4={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:Di,ReactCurrentOwner:Cs};function Zu(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!Es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=kr;re.Fragment=w4;re.Profiler=_4;re.PureComponent=As;re.StrictMode=b4;re.Suspense=C4;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O4;re.act=Zu;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gu({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Cs.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Ku.call(t,l)&&!Xu.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var h=0;h<l;h++)s[h]=arguments[h+2];r.children=s}return{$$typeof:ja,type:e.type,key:a,ref:i,props:r,_owner:o}};re.createContext=function(e){return e={$$typeof:A4,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:x4,_context:e},e.Consumer=e};re.createElement=Ju;re.createFactory=function(e){var t=Ju.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:S4,render:e}};re.isValidElement=Es;re.lazy=function(e){return{$$typeof:k4,_payload:{_status:-1,_result:e},_init:R4}};re.memo=function(e,t){return{$$typeof:E4,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Di.transition;Di.transition={};try{e()}finally{Di.transition=t}};re.unstable_act=Zu;re.useCallback=function(e,t){return st.current.useCallback(e,t)};re.useContext=function(e){return st.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return st.current.useDeferredValue(e)};re.useEffect=function(e,t){return st.current.useEffect(e,t)};re.useId=function(){return st.current.useId()};re.useImperativeHandle=function(e,t,n){return st.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return st.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return st.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return st.current.useMemo(e,t)};re.useReducer=function(e,t,n){return st.current.useReducer(e,t,n)};re.useRef=function(e){return st.current.useRef(e)};re.useState=function(e){return st.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return st.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return st.current.useTransition()};re.version="18.3.1";Vu.exports=re;var P=Vu.exports;const nl=Ua(P),J0=Hu({__proto__:null,default:nl},[P]);var qu={exports:{}},xt={},e2={exports:{}},t2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,Q){var X=D.length;D.push(Q);e:for(;0<X;){var se=X-1>>>1,te=D[se];if(0<a(te,Q))D[se]=Q,D[X]=te,X=se;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var Q=D[0],X=D.pop();if(X!==Q){D[0]=X;e:for(var se=0,te=D.length,Qe=te>>>1;se<Qe;){var Ve=2*(se+1)-1,ae=D[Ve],Ie=Ve+1,Be=D[Ie];if(0>a(ae,X))Ie<te&&0>a(Be,ae)?(D[se]=Be,D[Ie]=X,se=Ie):(D[se]=ae,D[Ve]=X,se=Ve);else if(Ie<te&&0>a(Be,X))D[se]=Be,D[Ie]=X,se=Ie;else break e}}return Q}function a(D,Q){var X=D.sortIndex-Q.sortIndex;return X!==0?X:D.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],h=[],c=1,u=null,p=3,m=!1,g=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(D){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=D)r(h),Q.sortIndex=Q.expirationTime,t(l,Q);else break;Q=n(h)}}function k(D){if(b=!1,z(D),!g)if(n(l)!==null)g=!0,$e(O);else{var Q=n(h);Q!==null&&de(k,Q.startTime-D)}}function O(D,Q){g=!1,b&&(b=!1,y(B),B=-1),m=!0;var X=p;try{for(z(Q),u=n(l);u!==null&&(!(u.expirationTime>Q)||D&&!ee());){var se=u.callback;if(typeof se=="function"){u.callback=null,p=u.priorityLevel;var te=se(u.expirationTime<=Q);Q=e.unstable_now(),typeof te=="function"?u.callback=te:u===n(l)&&r(l),z(Q)}else r(l);u=n(l)}if(u!==null)var Qe=!0;else{var Ve=n(h);Ve!==null&&de(k,Ve.startTime-Q),Qe=!1}return Qe}finally{u=null,p=X,m=!1}}var U=!1,M=null,B=-1,G=5,H=-1;function ee(){return!(e.unstable_now()-H<G)}function Z(){if(M!==null){var D=e.unstable_now();H=D;var Q=!0;try{Q=M(!0,D)}finally{Q?Y():(U=!1,M=null)}}else U=!1}var Y;if(typeof f=="function")Y=function(){f(Z)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Pe=Ae.port2;Ae.port1.onmessage=Z,Y=function(){Pe.postMessage(null)}}else Y=function(){T(Z,0)};function $e(D){M=D,U||(U=!0,Y())}function de(D,Q){B=T(function(){D(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,$e(O))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(D){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var X=p;p=Q;try{return D()}finally{p=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var X=p;p=D;try{return Q()}finally{p=X}},e.unstable_scheduleCallback=function(D,Q,X){var se=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?se+X:se):X=se,D){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=X+te,D={id:c++,callback:Q,priorityLevel:D,startTime:X,expirationTime:te,sortIndex:-1},X>se?(D.sortIndex=X,t(h,D),n(l)===null&&D===n(h)&&(b?(y(B),B=-1):b=!0,de(k,X-se))):(D.sortIndex=te,t(l,D),g||m||(g=!0,$e(O))),D},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(D){var Q=p;return function(){var X=p;p=Q;try{return D.apply(this,arguments)}finally{p=X}}}})(t2);e2.exports=t2;var N4=e2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I4=P,_t=N4;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n2=new Set,ma={};function Dn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(ma[e]=t,e=0;e<t.length;e++)n2.add(t[e])}var y0=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rl=Object.prototype.hasOwnProperty,D4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uc={},pc={};function F4(e){return rl.call(pc,e)?!0:rl.call(uc,e)?!1:D4.test(e)?pc[e]=!0:(uc[e]=!0,!1)}function $4(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B4(e,t,n,r){if(t===null||typeof t>"u"||$4(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var ks=/[\-:]([a-z])/g;function Ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ks,Ts);Je[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ks,Ts);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ks,Ts);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ps(e,t,n,r){var a=Je.hasOwnProperty(t)?Je[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B4(t,n,a,r)&&(n=null),r||a===null?F4(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var b0=I4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ci=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),Ls=Symbol.for("react.strict_mode"),al=Symbol.for("react.profiler"),r2=Symbol.for("react.provider"),a2=Symbol.for("react.context"),Rs=Symbol.for("react.forward_ref"),il=Symbol.for("react.suspense"),ol=Symbol.for("react.suspense_list"),Os=Symbol.for("react.memo"),P0=Symbol.for("react.lazy"),i2=Symbol.for("react.offscreen"),vc=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=vc&&e[vc]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Object.assign,oo;function Jr(e){if(oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);oo=t&&t[1]||""}return`
`+oo+e}var lo=!1;function so(e,t){if(!e||lo)return"";lo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==i[s]){var l=`
`+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{lo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function U4(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=so(e.type,!1),e;case 11:return e=so(e.type.render,!1),e;case 1:return e=so(e.type,!0),e;default:return""}}function ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Kn:return"Portal";case al:return"Profiler";case Ls:return"StrictMode";case il:return"Suspense";case ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case a2:return(e.displayName||"Context")+".Consumer";case r2:return(e._context.displayName||"Context")+".Provider";case Rs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Os:return t=e.displayName||null,t!==null?t:ll(e.type)||"Memo";case P0:t=e._payload,e=e._init;try{return ll(e(t))}catch{}}return null}function j4(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ll(t);case 8:return t===Ls?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Y0(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function o2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H4(e){var t=o2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function di(e){e._valueTracker||(e._valueTracker=H4(e))}function l2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=o2(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sl(e,t){var n=t.checked;return Te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Y0(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function s2(e,t){t=t.checked,t!=null&&Ps(e,"checked",t,!1)}function hl(e,t){s2(e,t);var n=Y0(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cl(e,t.type,n):t.hasOwnProperty("defaultValue")&&cl(e,t.type,Y0(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cl(e,t,n){(t!=="number"||Ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function lr(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Y0(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Zr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Y0(n)}}function h2(e,t){var n=Y0(t.value),r=Y0(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function c2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?c2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,d2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ga(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V4=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(e){V4.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ra[t]=ra[e]})});function u2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ra.hasOwnProperty(e)&&ra[e]?(""+t).trim():t+"px"}function p2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=u2(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var W4=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(e,t){if(t){if(W4[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fl=null;function Ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,sr=null,hr=null;function zc(e){if(e=Wa(e)){if(typeof ml!="function")throw Error(I(280));var t=e.stateNode;t&&(t=F1(t),ml(e.stateNode,e.type,t))}}function v2(e){sr?hr?hr.push(e):hr=[e]:sr=e}function f2(){if(sr){var e=sr,t=hr;if(hr=sr=null,zc(e),t)for(e=0;e<t.length;e++)zc(t[e])}}function m2(e,t){return e(t)}function g2(){}var ho=!1;function y2(e,t,n){if(ho)return e(t,n);ho=!0;try{return m2(e,t,n)}finally{ho=!1,(sr!==null||hr!==null)&&(g2(),f2())}}function ya(e,t){var n=e.stateNode;if(n===null)return null;var r=F1(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var gl=!1;if(y0)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){gl=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{gl=!1}function G4(e,t,n,r,a,i,o,s,l){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(c){this.onError(c)}}var aa=!1,Zi=null,qi=!1,yl=null,Q4={onError:function(e){aa=!0,Zi=e}};function Y4(e,t,n,r,a,i,o,s,l){aa=!1,Zi=null,G4.apply(Q4,arguments)}function K4(e,t,n,r,a,i,o,s,l){if(Y4.apply(this,arguments),aa){if(aa){var h=Zi;aa=!1,Zi=null}else throw Error(I(198));qi||(qi=!0,yl=h)}}function Fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function z2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mc(e){if(Fn(e)!==e)throw Error(I(188))}function X4(e){var t=e.alternate;if(!t){if(t=Fn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Mc(a),e;if(i===r)return Mc(a),t;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function M2(e){return e=X4(e),e!==null?w2(e):null}function w2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=w2(e);if(t!==null)return t;e=e.sibling}return null}var b2=_t.unstable_scheduleCallback,wc=_t.unstable_cancelCallback,J4=_t.unstable_shouldYield,Z4=_t.unstable_requestPaint,Oe=_t.unstable_now,q4=_t.unstable_getCurrentPriorityLevel,Is=_t.unstable_ImmediatePriority,_2=_t.unstable_UserBlockingPriority,e1=_t.unstable_NormalPriority,e5=_t.unstable_LowPriority,x2=_t.unstable_IdlePriority,O1=null,l0=null;function t5(e){if(l0&&typeof l0.onCommitFiberRoot=="function")try{l0.onCommitFiberRoot(O1,e,void 0,(e.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:a5,n5=Math.log,r5=Math.LN2;function a5(e){return e>>>=0,e===0?32:31-(n5(e)/r5|0)|0}var pi=64,vi=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function t1(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~a;s!==0?r=qr(s):(i&=o,i!==0&&(r=qr(i)))}else o=n&~a,o!==0?r=qr(o):i!==0&&(r=qr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Jt(t),a=1<<n,r|=e[n],t&=~a;return r}function i5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o5(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Jt(i),s=1<<o,l=a[o];l===-1?(!(s&n)||s&r)&&(a[o]=i5(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function A2(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function co(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ha(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Jt(t),e[t]=n}function l5(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Jt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Ds(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Jt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ve=0;function S2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var C2,Fs,E2,k2,T2,Ml=!1,fi=[],F0=null,$0=null,B0=null,za=new Map,Ma=new Map,R0=[],s5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bc(e,t){switch(e){case"focusin":case"focusout":F0=null;break;case"dragenter":case"dragleave":$0=null;break;case"mouseover":case"mouseout":B0=null;break;case"pointerover":case"pointerout":za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(t.pointerId)}}function Dr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Wa(t),t!==null&&Fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function h5(e,t,n,r,a){switch(t){case"focusin":return F0=Dr(F0,e,t,n,r,a),!0;case"dragenter":return $0=Dr($0,e,t,n,r,a),!0;case"mouseover":return B0=Dr(B0,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return za.set(i,Dr(za.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Ma.set(i,Dr(Ma.get(i)||null,e,t,n,r,a)),!0}return!1}function P2(e){var t=mn(e.target);if(t!==null){var n=Fn(t);if(n!==null){if(t=n.tag,t===13){if(t=z2(n),t!==null){e.blockedOn=t,T2(e.priority,function(){E2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fl=r,n.target.dispatchEvent(r),fl=null}else return t=Wa(n),t!==null&&Fs(t),e.blockedOn=n,!1;t.shift()}return!0}function _c(e,t,n){Fi(e)&&n.delete(t)}function c5(){Ml=!1,F0!==null&&Fi(F0)&&(F0=null),$0!==null&&Fi($0)&&($0=null),B0!==null&&Fi(B0)&&(B0=null),za.forEach(_c),Ma.forEach(_c)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ml||(Ml=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,c5)))}function wa(e){function t(a){return Fr(a,e)}if(0<fi.length){Fr(fi[0],e);for(var n=1;n<fi.length;n++){var r=fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(F0!==null&&Fr(F0,e),$0!==null&&Fr($0,e),B0!==null&&Fr(B0,e),za.forEach(t),Ma.forEach(t),n=0;n<R0.length;n++)r=R0[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<R0.length&&(n=R0[0],n.blockedOn===null);)P2(n),n.blockedOn===null&&R0.shift()}var cr=b0.ReactCurrentBatchConfig,n1=!0;function d5(e,t,n,r){var a=ve,i=cr.transition;cr.transition=null;try{ve=1,$s(e,t,n,r)}finally{ve=a,cr.transition=i}}function u5(e,t,n,r){var a=ve,i=cr.transition;cr.transition=null;try{ve=4,$s(e,t,n,r)}finally{ve=a,cr.transition=i}}function $s(e,t,n,r){if(n1){var a=wl(e,t,n,r);if(a===null)wo(e,t,r,r1,n),bc(e,r);else if(h5(a,e,t,n,r))r.stopPropagation();else if(bc(e,r),t&4&&-1<s5.indexOf(e)){for(;a!==null;){var i=Wa(a);if(i!==null&&C2(i),i=wl(e,t,n,r),i===null&&wo(e,t,r,r1,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else wo(e,t,r,null,n)}}var r1=null;function wl(e,t,n,r){if(r1=null,e=Ns(r),e=mn(e),e!==null)if(t=Fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=z2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return r1=e,null}function L2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q4()){case Is:return 1;case _2:return 4;case e1:case e5:return 16;case x2:return 536870912;default:return 16}default:return 16}}var I0=null,Bs=null,$i=null;function R2(){if($i)return $i;var e,t=Bs,n=t.length,r,a="value"in I0?I0.value:I0.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return $i=a.slice(e,1<r?1-r:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function xc(){return!1}function At(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mi:xc,this.isPropagationStopped=xc,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=At(Tr),Va=Te({},Tr,{view:0,detail:0}),p5=At(Va),uo,po,$r,N1=Te({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(uo=e.screenX-$r.screenX,po=e.screenY-$r.screenY):po=uo=0,$r=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:po}}),Ac=At(N1),v5=Te({},N1,{dataTransfer:0}),f5=At(v5),m5=Te({},Va,{relatedTarget:0}),vo=At(m5),g5=Te({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),y5=At(g5),z5=Te({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),M5=At(z5),w5=Te({},Tr,{data:0}),Sc=At(w5),b5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=x5[e])?!!t[e]:!1}function js(){return A5}var S5=Te({},Va,{key:function(e){if(e.key){var t=b5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),C5=At(S5),E5=Te({},N1,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=At(E5),k5=Te({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),T5=At(k5),P5=Te({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),L5=At(P5),R5=Te({},N1,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O5=At(R5),N5=[9,13,27,32],Hs=y0&&"CompositionEvent"in window,ia=null;y0&&"documentMode"in document&&(ia=document.documentMode);var I5=y0&&"TextEvent"in window&&!ia,O2=y0&&(!Hs||ia&&8<ia&&11>=ia),Ec=" ",kc=!1;function N2(e,t){switch(e){case"keyup":return N5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function D5(e,t){switch(e){case"compositionend":return I2(t);case"keypress":return t.which!==32?null:(kc=!0,Ec);case"textInput":return e=t.data,e===Ec&&kc?null:e;default:return null}}function F5(e,t){if(Jn)return e==="compositionend"||!Hs&&N2(e,t)?(e=R2(),$i=Bs=I0=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return O2&&t.locale!=="ko"?null:t.data;default:return null}}var $5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$5[e.type]:t==="textarea"}function D2(e,t,n,r){v2(r),t=a1(t,"onChange"),0<t.length&&(n=new Us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oa=null,ba=null;function B5(e){Y2(e,0)}function I1(e){var t=er(e);if(l2(t))return e}function U5(e,t){if(e==="change")return t}var F2=!1;if(y0){var fo;if(y0){var mo="oninput"in document;if(!mo){var Pc=document.createElement("div");Pc.setAttribute("oninput","return;"),mo=typeof Pc.oninput=="function"}fo=mo}else fo=!1;F2=fo&&(!document.documentMode||9<document.documentMode)}function Lc(){oa&&(oa.detachEvent("onpropertychange",$2),ba=oa=null)}function $2(e){if(e.propertyName==="value"&&I1(ba)){var t=[];D2(t,ba,e,Ns(e)),y2(B5,t)}}function j5(e,t,n){e==="focusin"?(Lc(),oa=t,ba=n,oa.attachEvent("onpropertychange",$2)):e==="focusout"&&Lc()}function H5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return I1(ba)}function V5(e,t){if(e==="click")return I1(t)}function W5(e,t){if(e==="input"||e==="change")return I1(t)}function G5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:G5;function _a(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!rl.call(t,a)||!qt(e[a],t[a]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var n=Rc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rc(n)}}function B2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?B2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function U2(){for(var e=window,t=Ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ji(e.document)}return t}function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Q5(e){var t=U2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&B2(n.ownerDocument.documentElement,n)){if(r!==null&&Vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Oc(n,i);var o=Oc(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Y5=y0&&"documentMode"in document&&11>=document.documentMode,Zn=null,bl=null,la=null,_l=!1;function Nc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||Zn==null||Zn!==Ji(r)||(r=Zn,"selectionStart"in r&&Vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),la&&_a(la,r)||(la=r,r=a1(bl,"onSelect"),0<r.length&&(t=new Us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},go={},j2={};y0&&(j2=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function D1(e){if(go[e])return go[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in j2)return go[e]=t[n];return e}var H2=D1("animationend"),V2=D1("animationiteration"),W2=D1("animationstart"),G2=D1("transitionend"),Q2=new Map,Ic="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Z0(e,t){Q2.set(e,t),Dn(t,[e])}for(var yo=0;yo<Ic.length;yo++){var zo=Ic[yo],K5=zo.toLowerCase(),X5=zo[0].toUpperCase()+zo.slice(1);Z0(K5,"on"+X5)}Z0(H2,"onAnimationEnd");Z0(V2,"onAnimationIteration");Z0(W2,"onAnimationStart");Z0("dblclick","onDoubleClick");Z0("focusin","onFocus");Z0("focusout","onBlur");Z0(G2,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J5=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function Dc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,K4(r,t,void 0,e),e.currentTarget=null}function Y2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,h=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;Dc(a,s,h),i=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,h=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;Dc(a,s,h),i=l}}}if(qi)throw e=yl,qi=!1,yl=null,e}function ze(e,t){var n=t[El];n===void 0&&(n=t[El]=new Set);var r=e+"__bubble";n.has(r)||(K2(t,e,2,!1),n.add(r))}function Mo(e,t,n){var r=0;t&&(r|=4),K2(n,e,r,t)}var yi="_reactListening"+Math.random().toString(36).slice(2);function xa(e){if(!e[yi]){e[yi]=!0,n2.forEach(function(n){n!=="selectionchange"&&(J5.has(n)||Mo(n,!1,e),Mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,Mo("selectionchange",!1,t))}}function K2(e,t,n,r){switch(L2(t)){case 1:var a=d5;break;case 4:a=u5;break;default:a=$s}n=a.bind(null,t,n,e),a=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function wo(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;o=o.return}for(;s!==null;){if(o=mn(s),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}s=s.parentNode}}r=r.return}y2(function(){var h=i,c=Ns(n),u=[];e:{var p=Q2.get(e);if(p!==void 0){var m=Us,g=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":m=C5;break;case"focusin":g="focus",m=vo;break;case"focusout":g="blur",m=vo;break;case"beforeblur":case"afterblur":m=vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=f5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=T5;break;case H2:case V2:case W2:m=y5;break;case G2:m=L5;break;case"scroll":m=p5;break;case"wheel":m=O5;break;case"copy":case"cut":case"paste":m=M5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Cc}var b=(t&4)!==0,T=!b&&e==="scroll",y=b?p!==null?p+"Capture":null:p;b=[];for(var f=h,z;f!==null;){z=f;var k=z.stateNode;if(z.tag===5&&k!==null&&(z=k,y!==null&&(k=ya(f,y),k!=null&&b.push(Aa(f,k,z)))),T)break;f=f.return}0<b.length&&(p=new m(p,g,null,n,c),u.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==fl&&(g=n.relatedTarget||n.fromElement)&&(mn(g)||g[z0]))break e;if((m||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=h,g=g?mn(g):null,g!==null&&(T=Fn(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=h),m!==g)){if(b=Ac,k="onMouseLeave",y="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=Cc,k="onPointerLeave",y="onPointerEnter",f="pointer"),T=m==null?p:er(m),z=g==null?p:er(g),p=new b(k,f+"leave",m,n,c),p.target=T,p.relatedTarget=z,k=null,mn(c)===h&&(b=new b(y,f+"enter",g,n,c),b.target=z,b.relatedTarget=T,k=b),T=k,m&&g)t:{for(b=m,y=g,f=0,z=b;z;z=Vn(z))f++;for(z=0,k=y;k;k=Vn(k))z++;for(;0<f-z;)b=Vn(b),f--;for(;0<z-f;)y=Vn(y),z--;for(;f--;){if(b===y||y!==null&&b===y.alternate)break t;b=Vn(b),y=Vn(y)}b=null}else b=null;m!==null&&Fc(u,p,m,b,!1),g!==null&&T!==null&&Fc(u,T,g,b,!0)}}e:{if(p=h?er(h):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var O=U5;else if(Tc(p))if(F2)O=W5;else{O=H5;var U=j5}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(O=V5);if(O&&(O=O(e,h))){D2(u,O,n,c);break e}U&&U(e,p,h),e==="focusout"&&(U=p._wrapperState)&&U.controlled&&p.type==="number"&&cl(p,"number",p.value)}switch(U=h?er(h):window,e){case"focusin":(Tc(U)||U.contentEditable==="true")&&(Zn=U,bl=h,la=null);break;case"focusout":la=bl=Zn=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Nc(u,n,c);break;case"selectionchange":if(Y5)break;case"keydown":case"keyup":Nc(u,n,c)}var M;if(Hs)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Jn?N2(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(O2&&n.locale!=="ko"&&(Jn||B!=="onCompositionStart"?B==="onCompositionEnd"&&Jn&&(M=R2()):(I0=c,Bs="value"in I0?I0.value:I0.textContent,Jn=!0)),U=a1(h,B),0<U.length&&(B=new Sc(B,e,null,n,c),u.push({event:B,listeners:U}),M?B.data=M:(M=I2(n),M!==null&&(B.data=M)))),(M=I5?D5(e,n):F5(e,n))&&(h=a1(h,"onBeforeInput"),0<h.length&&(c=new Sc("onBeforeInput","beforeinput",null,n,c),u.push({event:c,listeners:h}),c.data=M))}Y2(u,t)})}function Aa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function a1(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=ya(e,n),i!=null&&r.unshift(Aa(e,i,a)),i=ya(e,t),i!=null&&r.push(Aa(e,i,a))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,h=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&h!==null&&(s=h,a?(l=ya(n,i),l!=null&&o.unshift(Aa(n,l,s))):a||(l=ya(n,i),l!=null&&o.push(Aa(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Z5=/\r\n?/g,q5=/\u0000|\uFFFD/g;function $c(e){return(typeof e=="string"?e:""+e).replace(Z5,`
`).replace(q5,"")}function zi(e,t,n){if(t=$c(t),$c(e)!==t&&n)throw Error(I(425))}function i1(){}var xl=null,Al=null;function Sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cl=typeof setTimeout=="function"?setTimeout:void 0,ef=typeof clearTimeout=="function"?clearTimeout:void 0,Bc=typeof Promise=="function"?Promise:void 0,tf=typeof queueMicrotask=="function"?queueMicrotask:typeof Bc<"u"?function(e){return Bc.resolve(null).then(e).catch(nf)}:Cl;function nf(e){setTimeout(function(){throw e})}function bo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),wa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);wa(t)}function U0(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),o0="__reactFiber$"+Pr,Sa="__reactProps$"+Pr,z0="__reactContainer$"+Pr,El="__reactEvents$"+Pr,rf="__reactListeners$"+Pr,af="__reactHandles$"+Pr;function mn(e){var t=e[o0];if(t)return t;for(var n=e.parentNode;n;){if(t=n[z0]||n[o0]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uc(e);e!==null;){if(n=e[o0])return n;e=Uc(e)}return t}e=n,n=e.parentNode}return null}function Wa(e){return e=e[o0]||e[z0],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function F1(e){return e[Sa]||null}var kl=[],tr=-1;function q0(e){return{current:e}}function Me(e){0>tr||(e.current=kl[tr],kl[tr]=null,tr--)}function ye(e,t){tr++,kl[tr]=e.current,e.current=t}var K0={},rt=q0(K0),ft=q0(!1),Tn=K0;function yr(e,t){var n=e.type.contextTypes;if(!n)return K0;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function mt(e){return e=e.childContextTypes,e!=null}function o1(){Me(ft),Me(rt)}function jc(e,t,n){if(rt.current!==K0)throw Error(I(168));ye(rt,t),ye(ft,n)}function X2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(I(108,j4(e)||"Unknown",a));return Te({},n,r)}function l1(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||K0,Tn=rt.current,ye(rt,e),ye(ft,ft.current),!0}function Hc(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=X2(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,Me(ft),Me(rt),ye(rt,e)):Me(ft),ye(ft,n)}var v0=null,$1=!1,_o=!1;function J2(e){v0===null?v0=[e]:v0.push(e)}function of(e){$1=!0,J2(e)}function en(){if(!_o&&v0!==null){_o=!0;var e=0,t=ve;try{var n=v0;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}v0=null,$1=!1}catch(a){throw v0!==null&&(v0=v0.slice(e+1)),b2(Is,en),a}finally{ve=t,_o=!1}}return null}var nr=[],rr=0,s1=null,h1=0,Rt=[],Ot=0,Pn=null,f0=1,m0="";function pn(e,t){nr[rr++]=h1,nr[rr++]=s1,s1=e,h1=t}function Z2(e,t,n){Rt[Ot++]=f0,Rt[Ot++]=m0,Rt[Ot++]=Pn,Pn=e;var r=f0;e=m0;var a=32-Jt(r)-1;r&=~(1<<a),n+=1;var i=32-Jt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,f0=1<<32-Jt(t)+a|n<<a|r,m0=i+e}else f0=1<<i|n<<a|r,m0=e}function Ws(e){e.return!==null&&(pn(e,1),Z2(e,1,0))}function Gs(e){for(;e===s1;)s1=nr[--rr],nr[rr]=null,h1=nr[--rr],nr[rr]=null;for(;e===Pn;)Pn=Rt[--Ot],Rt[Ot]=null,m0=Rt[--Ot],Rt[Ot]=null,f0=Rt[--Ot],Rt[Ot]=null}var bt=null,wt=null,_e=!1,Kt=null;function q2(e,t){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,wt=U0(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:f0,overflow:m0}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,bt=e,wt=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pl(e){if(_e){var t=wt;if(t){var n=t;if(!Vc(e,t)){if(Tl(e))throw Error(I(418));t=U0(n.nextSibling);var r=bt;t&&Vc(e,t)?q2(r,n):(e.flags=e.flags&-4097|2,_e=!1,bt=e)}}else{if(Tl(e))throw Error(I(418));e.flags=e.flags&-4097|2,_e=!1,bt=e}}}function Wc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function Mi(e){if(e!==bt)return!1;if(!_e)return Wc(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sl(e.type,e.memoizedProps)),t&&(t=wt)){if(Tl(e))throw ep(),Error(I(418));for(;t;)q2(e,t),t=U0(t.nextSibling)}if(Wc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wt=U0(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=bt?U0(e.stateNode.nextSibling):null;return!0}function ep(){for(var e=wt;e;)e=U0(e.nextSibling)}function zr(){wt=bt=null,_e=!1}function Qs(e){Kt===null?Kt=[e]:Kt.push(e)}var lf=b0.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=a.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function wi(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gc(e){var t=e._init;return t(e._payload)}function tp(e){function t(y,f){if(e){var z=y.deletions;z===null?(y.deletions=[f],y.flags|=16):z.push(f)}}function n(y,f){if(!e)return null;for(;f!==null;)t(y,f),f=f.sibling;return null}function r(y,f){for(y=new Map;f!==null;)f.key!==null?y.set(f.key,f):y.set(f.index,f),f=f.sibling;return y}function a(y,f){return y=W0(y,f),y.index=0,y.sibling=null,y}function i(y,f,z){return y.index=z,e?(z=y.alternate,z!==null?(z=z.index,z<f?(y.flags|=2,f):z):(y.flags|=2,f)):(y.flags|=1048576,f)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,f,z,k){return f===null||f.tag!==6?(f=To(z,y.mode,k),f.return=y,f):(f=a(f,z),f.return=y,f)}function l(y,f,z,k){var O=z.type;return O===Xn?c(y,f,z.props.children,k,z.key):f!==null&&(f.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===P0&&Gc(O)===f.type)?(k=a(f,z.props),k.ref=Br(y,f,z),k.return=y,k):(k=Qi(z.type,z.key,z.props,null,y.mode,k),k.ref=Br(y,f,z),k.return=y,k)}function h(y,f,z,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==z.containerInfo||f.stateNode.implementation!==z.implementation?(f=Po(z,y.mode,k),f.return=y,f):(f=a(f,z.children||[]),f.return=y,f)}function c(y,f,z,k,O){return f===null||f.tag!==7?(f=Sn(z,y.mode,k,O),f.return=y,f):(f=a(f,z),f.return=y,f)}function u(y,f,z){if(typeof f=="string"&&f!==""||typeof f=="number")return f=To(""+f,y.mode,z),f.return=y,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ci:return z=Qi(f.type,f.key,f.props,null,y.mode,z),z.ref=Br(y,null,f),z.return=y,z;case Kn:return f=Po(f,y.mode,z),f.return=y,f;case P0:var k=f._init;return u(y,k(f._payload),z)}if(Zr(f)||Nr(f))return f=Sn(f,y.mode,z,null),f.return=y,f;wi(y,f)}return null}function p(y,f,z,k){var O=f!==null?f.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return O!==null?null:s(y,f,""+z,k);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ci:return z.key===O?l(y,f,z,k):null;case Kn:return z.key===O?h(y,f,z,k):null;case P0:return O=z._init,p(y,f,O(z._payload),k)}if(Zr(z)||Nr(z))return O!==null?null:c(y,f,z,k,null);wi(y,z)}return null}function m(y,f,z,k,O){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(z)||null,s(f,y,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ci:return y=y.get(k.key===null?z:k.key)||null,l(f,y,k,O);case Kn:return y=y.get(k.key===null?z:k.key)||null,h(f,y,k,O);case P0:var U=k._init;return m(y,f,z,U(k._payload),O)}if(Zr(k)||Nr(k))return y=y.get(z)||null,c(f,y,k,O,null);wi(f,k)}return null}function g(y,f,z,k){for(var O=null,U=null,M=f,B=f=0,G=null;M!==null&&B<z.length;B++){M.index>B?(G=M,M=null):G=M.sibling;var H=p(y,M,z[B],k);if(H===null){M===null&&(M=G);break}e&&M&&H.alternate===null&&t(y,M),f=i(H,f,B),U===null?O=H:U.sibling=H,U=H,M=G}if(B===z.length)return n(y,M),_e&&pn(y,B),O;if(M===null){for(;B<z.length;B++)M=u(y,z[B],k),M!==null&&(f=i(M,f,B),U===null?O=M:U.sibling=M,U=M);return _e&&pn(y,B),O}for(M=r(y,M);B<z.length;B++)G=m(M,y,B,z[B],k),G!==null&&(e&&G.alternate!==null&&M.delete(G.key===null?B:G.key),f=i(G,f,B),U===null?O=G:U.sibling=G,U=G);return e&&M.forEach(function(ee){return t(y,ee)}),_e&&pn(y,B),O}function b(y,f,z,k){var O=Nr(z);if(typeof O!="function")throw Error(I(150));if(z=O.call(z),z==null)throw Error(I(151));for(var U=O=null,M=f,B=f=0,G=null,H=z.next();M!==null&&!H.done;B++,H=z.next()){M.index>B?(G=M,M=null):G=M.sibling;var ee=p(y,M,H.value,k);if(ee===null){M===null&&(M=G);break}e&&M&&ee.alternate===null&&t(y,M),f=i(ee,f,B),U===null?O=ee:U.sibling=ee,U=ee,M=G}if(H.done)return n(y,M),_e&&pn(y,B),O;if(M===null){for(;!H.done;B++,H=z.next())H=u(y,H.value,k),H!==null&&(f=i(H,f,B),U===null?O=H:U.sibling=H,U=H);return _e&&pn(y,B),O}for(M=r(y,M);!H.done;B++,H=z.next())H=m(M,y,B,H.value,k),H!==null&&(e&&H.alternate!==null&&M.delete(H.key===null?B:H.key),f=i(H,f,B),U===null?O=H:U.sibling=H,U=H);return e&&M.forEach(function(Z){return t(y,Z)}),_e&&pn(y,B),O}function T(y,f,z,k){if(typeof z=="object"&&z!==null&&z.type===Xn&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case ci:e:{for(var O=z.key,U=f;U!==null;){if(U.key===O){if(O=z.type,O===Xn){if(U.tag===7){n(y,U.sibling),f=a(U,z.props.children),f.return=y,y=f;break e}}else if(U.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===P0&&Gc(O)===U.type){n(y,U.sibling),f=a(U,z.props),f.ref=Br(y,U,z),f.return=y,y=f;break e}n(y,U);break}else t(y,U);U=U.sibling}z.type===Xn?(f=Sn(z.props.children,y.mode,k,z.key),f.return=y,y=f):(k=Qi(z.type,z.key,z.props,null,y.mode,k),k.ref=Br(y,f,z),k.return=y,y=k)}return o(y);case Kn:e:{for(U=z.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===z.containerInfo&&f.stateNode.implementation===z.implementation){n(y,f.sibling),f=a(f,z.children||[]),f.return=y,y=f;break e}else{n(y,f);break}else t(y,f);f=f.sibling}f=Po(z,y.mode,k),f.return=y,y=f}return o(y);case P0:return U=z._init,T(y,f,U(z._payload),k)}if(Zr(z))return g(y,f,z,k);if(Nr(z))return b(y,f,z,k);wi(y,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,f!==null&&f.tag===6?(n(y,f.sibling),f=a(f,z),f.return=y,y=f):(n(y,f),f=To(z,y.mode,k),f.return=y,y=f),o(y)):n(y,f)}return T}var Mr=tp(!0),np=tp(!1),c1=q0(null),d1=null,ar=null,Ys=null;function Ks(){Ys=ar=d1=null}function Xs(e){var t=c1.current;Me(c1),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dr(e,t){d1=e,Ys=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(Ys!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(d1===null)throw Error(I(308));ar=e,d1.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var gn=null;function Js(e){gn===null?gn=[e]:gn.push(e)}function rp(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Js(t)):(n.next=a.next,a.next=n),t.interleaved=n,M0(e,r)}function M0(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var L0=!1;function Zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ap(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function g0(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function j0(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,M0(e,n)}return a=r.interleaved,a===null?(t.next=t,Js(r)):(t.next=a.next,a.next=t),r.interleaved=t,M0(e,n)}function Ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ds(e,n)}}function Qc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function u1(e,t,n,r){var a=e.updateQueue;L0=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,h=l.next;l.next=null,o===null?i=h:o.next=h,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=h:s.next=h,c.lastBaseUpdate=l))}if(i!==null){var u=a.baseState;o=0,c=h=l=null,s=i;do{var p=s.lane,m=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,b=s;switch(p=t,m=n,b.tag){case 1:if(g=b.payload,typeof g=="function"){u=g.call(m,u,p);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,p=typeof g=="function"?g.call(m,u,p):g,p==null)break e;u=Te({},u,p);break e;case 2:L0=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[s]:p.push(s))}else m={eventTime:m,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(h=c=m,l=u):c=c.next=m,o|=p;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;p=s,s=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(c===null&&(l=u),a.baseState=l,a.firstBaseUpdate=h,a.lastBaseUpdate=c,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Rn|=o,e.lanes=o,e.memoizedState=u}}function Yc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(I(191,a));a.call(r)}}}var Ga={},s0=q0(Ga),Ca=q0(Ga),Ea=q0(Ga);function yn(e){if(e===Ga)throw Error(I(174));return e}function qs(e,t){switch(ye(Ea,t),ye(Ca,e),ye(s0,Ga),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ul(t,e)}Me(s0),ye(s0,t)}function wr(){Me(s0),Me(Ca),Me(Ea)}function ip(e){yn(Ea.current);var t=yn(s0.current),n=ul(t,e.type);t!==n&&(ye(Ca,e),ye(s0,n))}function eh(e){Ca.current===e&&(Me(s0),Me(Ca))}var Ee=q0(0);function p1(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xo=[];function th(){for(var e=0;e<xo.length;e++)xo[e]._workInProgressVersionPrimary=null;xo.length=0}var ji=b0.ReactCurrentDispatcher,Ao=b0.ReactCurrentBatchConfig,Ln=0,ke=null,Ue=null,We=null,v1=!1,sa=!1,ka=0,sf=0;function et(){throw Error(I(321))}function nh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qt(e[n],t[n]))return!1;return!0}function rh(e,t,n,r,a,i){if(Ln=i,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ji.current=e===null||e.memoizedState===null?uf:pf,e=n(r,a),sa){i=0;do{if(sa=!1,ka=0,25<=i)throw Error(I(301));i+=1,We=Ue=null,t.updateQueue=null,ji.current=vf,e=n(r,a)}while(sa)}if(ji.current=f1,t=Ue!==null&&Ue.next!==null,Ln=0,We=Ue=ke=null,v1=!1,t)throw Error(I(300));return e}function ah(){var e=ka!==0;return ka=0,e}function i0(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ke.memoizedState=We=e:We=We.next=e,We}function $t(){if(Ue===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=We===null?ke.memoizedState:We.next;if(t!==null)We=t,Ue=e;else{if(e===null)throw Error(I(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},We===null?ke.memoizedState=We=e:We=We.next=e}return We}function Ta(e,t){return typeof t=="function"?t(e):t}function So(e){var t=$t(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=Ue,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=o=null,l=null,h=i;do{var c=h.lane;if((Ln&c)===c)l!==null&&(l=l.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var u={lane:c,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};l===null?(s=l=u,o=r):l=l.next=u,ke.lanes|=c,Rn|=c}h=h.next}while(h!==null&&h!==i);l===null?o=r:l.next=s,qt(r,t.memoizedState)||(vt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,ke.lanes|=i,Rn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Co(e){var t=$t(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);qt(i,t.memoizedState)||(vt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function op(){}function lp(e,t){var n=ke,r=$t(),a=t(),i=!qt(r.memoizedState,a);if(i&&(r.memoizedState=a,vt=!0),r=r.queue,ih(cp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Pa(9,hp.bind(null,n,r,a,t),void 0,null),Ge===null)throw Error(I(349));Ln&30||sp(n,t,a)}return a}function sp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hp(e,t,n,r){t.value=n,t.getSnapshot=r,dp(t)&&up(e)}function cp(e,t,n){return n(function(){dp(t)&&up(e)})}function dp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qt(e,n)}catch{return!0}}function up(e){var t=M0(e,1);t!==null&&Zt(t,e,1,-1)}function Kc(e){var t=i0();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=df.bind(null,ke,e),[t.memoizedState,e]}function Pa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pp(){return $t().memoizedState}function Hi(e,t,n,r){var a=i0();ke.flags|=e,a.memoizedState=Pa(1|t,n,void 0,r===void 0?null:r)}function B1(e,t,n,r){var a=$t();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var o=Ue.memoizedState;if(i=o.destroy,r!==null&&nh(r,o.deps)){a.memoizedState=Pa(t,n,i,r);return}}ke.flags|=e,a.memoizedState=Pa(1|t,n,i,r)}function Xc(e,t){return Hi(8390656,8,e,t)}function ih(e,t){return B1(2048,8,e,t)}function vp(e,t){return B1(4,2,e,t)}function fp(e,t){return B1(4,4,e,t)}function mp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gp(e,t,n){return n=n!=null?n.concat([e]):null,B1(4,4,mp.bind(null,t,e),n)}function oh(){}function yp(e,t){var n=$t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zp(e,t){var n=$t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mp(e,t,n){return Ln&21?(qt(n,t)||(n=A2(),ke.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n)}function hf(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=Ao.transition;Ao.transition={};try{e(!1),t()}finally{ve=n,Ao.transition=r}}function wp(){return $t().memoizedState}function cf(e,t,n){var r=V0(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bp(e))_p(t,n);else if(n=rp(e,t,n,r),n!==null){var a=lt();Zt(n,e,r,a),xp(n,t,r)}}function df(e,t,n){var r=V0(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bp(e))_p(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,qt(s,o)){var l=t.interleaved;l===null?(a.next=a,Js(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=rp(e,t,a,r),n!==null&&(a=lt(),Zt(n,e,r,a),xp(n,t,r))}}function bp(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function _p(e,t){sa=v1=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ds(e,n)}}var f1={readContext:Ft,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},uf={readContext:Ft,useCallback:function(e,t){return i0().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:Xc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4194308,4,mp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hi(4,2,e,t)},useMemo:function(e,t){var n=i0();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=i0();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cf.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=i0();return e={current:e},t.memoizedState=e},useState:Kc,useDebugValue:oh,useDeferredValue:function(e){return i0().memoizedState=e},useTransition:function(){var e=Kc(!1),t=e[0];return e=hf.bind(null,e[1]),i0().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,a=i0();if(_e){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Ge===null)throw Error(I(349));Ln&30||sp(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Xc(cp.bind(null,r,i,e),[e]),r.flags|=2048,Pa(9,hp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=i0(),t=Ge.identifierPrefix;if(_e){var n=m0,r=f0;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ka++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pf={readContext:Ft,useCallback:yp,useContext:Ft,useEffect:ih,useImperativeHandle:gp,useInsertionEffect:vp,useLayoutEffect:fp,useMemo:zp,useReducer:So,useRef:pp,useState:function(){return So(Ta)},useDebugValue:oh,useDeferredValue:function(e){var t=$t();return Mp(t,Ue.memoizedState,e)},useTransition:function(){var e=So(Ta)[0],t=$t().memoizedState;return[e,t]},useMutableSource:op,useSyncExternalStore:lp,useId:wp,unstable_isNewReconciler:!1},vf={readContext:Ft,useCallback:yp,useContext:Ft,useEffect:ih,useImperativeHandle:gp,useInsertionEffect:vp,useLayoutEffect:fp,useMemo:zp,useReducer:Co,useRef:pp,useState:function(){return Co(Ta)},useDebugValue:oh,useDeferredValue:function(e){var t=$t();return Ue===null?t.memoizedState=e:Mp(t,Ue.memoizedState,e)},useTransition:function(){var e=Co(Ta)[0],t=$t().memoizedState;return[e,t]},useMutableSource:op,useSyncExternalStore:lp,useId:wp,unstable_isNewReconciler:!1};function Wt(e,t){if(e&&e.defaultProps){t=Te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var U1={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),a=V0(e),i=g0(r,a);i.payload=t,n!=null&&(i.callback=n),t=j0(e,i,a),t!==null&&(Zt(t,e,a,r),Ui(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),a=V0(e),i=g0(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=j0(e,i,a),t!==null&&(Zt(t,e,a,r),Ui(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=V0(e),a=g0(n,r);a.tag=2,t!=null&&(a.callback=t),t=j0(e,a,r),t!==null&&(Zt(t,e,r,n),Ui(t,e,r))}};function Jc(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!_a(n,r)||!_a(a,i):!0}function Ap(e,t,n){var r=!1,a=K0,i=t.contextType;return typeof i=="object"&&i!==null?i=Ft(i):(a=mt(t)?Tn:rt.current,r=t.contextTypes,i=(r=r!=null)?yr(e,a):K0),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=U1,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&U1.enqueueReplaceState(t,t.state,null)}function Ol(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Zs(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ft(i):(i=mt(t)?Tn:rt.current,a.context=yr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Rl(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&U1.enqueueReplaceState(a,a.state,null),u1(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function br(e,t){try{var n="",r=t;do n+=U4(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ff=typeof WeakMap=="function"?WeakMap:Map;function Sp(e,t,n){n=g0(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){g1||(g1=!0,Wl=r),Nl(e,t)},n}function Cp(e,t,n){n=g0(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Nl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nl(e,t),typeof r!="function"&&(H0===null?H0=new Set([this]):H0.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ff;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=kf.bind(null,e,t,n),t.then(e,e))}function ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function td(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=g0(-1,1),t.tag=2,j0(n,t,1))),n.lanes|=1),e)}var mf=b0.ReactCurrentOwner,vt=!1;function ot(e,t,n,r){t.child=e===null?np(t,null,n,r):Mr(t,e.child,n,r)}function nd(e,t,n,r,a){n=n.render;var i=t.ref;return dr(t,a),r=rh(e,t,n,r,i,a),n=ah(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,w0(e,t,a)):(_e&&n&&Ws(t),t.flags|=1,ot(e,t,r,a),t.child)}function rd(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!vh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ep(e,t,i,r,a)):(e=Qi(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,r)&&e.ref===t.ref)return w0(e,t,a)}return t.flags|=1,e=W0(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ep(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(_a(i,r)&&e.ref===t.ref)if(vt=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,w0(e,t,a)}return Il(e,t,n,r,a)}function kp(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(or,Mt),Mt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(or,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ye(or,Mt),Mt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ye(or,Mt),Mt|=r;return ot(e,t,a,n),t.child}function Tp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Il(e,t,n,r,a){var i=mt(n)?Tn:rt.current;return i=yr(t,i),dr(t,a),n=rh(e,t,n,r,i,a),r=ah(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,w0(e,t,a)):(_e&&r&&Ws(t),t.flags|=1,ot(e,t,n,a),t.child)}function ad(e,t,n,r,a){if(mt(n)){var i=!0;l1(t)}else i=!1;if(dr(t,a),t.stateNode===null)Vi(e,t),Ap(t,n,r),Ol(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ft(h):(h=mt(n)?Tn:rt.current,h=yr(t,h));var c=n.getDerivedStateFromProps,u=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==h)&&Zc(t,o,r,h),L0=!1;var p=t.memoizedState;o.state=p,u1(t,r,o,a),l=t.memoizedState,s!==r||p!==l||ft.current||L0?(typeof c=="function"&&(Rl(t,n,c,r),l=t.memoizedState),(s=L0||Jc(t,n,s,r,p,l,h))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=h,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ap(e,t),s=t.memoizedProps,h=t.type===t.elementType?s:Wt(t.type,s),o.props=h,u=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=mt(n)?Tn:rt.current,l=yr(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==u||p!==l)&&Zc(t,o,r,l),L0=!1,p=t.memoizedState,o.state=p,u1(t,r,o,a);var g=t.memoizedState;s!==u||p!==g||ft.current||L0?(typeof m=="function"&&(Rl(t,n,m,r),g=t.memoizedState),(h=L0||Jc(t,n,h,r,p,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=l,r=h):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Dl(e,t,n,r,i,a)}function Dl(e,t,n,r,a,i){Tp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Hc(t,n,!1),w0(e,t,i);r=t.stateNode,mf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Mr(t,e.child,null,i),t.child=Mr(t,null,s,i)):ot(e,t,s,i),t.memoizedState=r.state,a&&Hc(t,n,!0),t.child}function Pp(e){var t=e.stateNode;t.pendingContext?jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jc(e,t.context,!1),qs(e,t.containerInfo)}function id(e,t,n,r,a){return zr(),Qs(a),t.flags|=256,ot(e,t,n,r),t.child}var Fl={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lp(e,t,n){var r=t.pendingProps,a=Ee.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ye(Ee,a&1),e===null)return Pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=V1(o,r,0,null),e=Sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=$l(n),t.memoizedState=Fl,e):lh(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return gf(e,t,o,r,s,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=W0(a,l),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=W0(s,i):(i=Sn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?$l(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Fl,r}return i=e.child,e=i.sibling,r=W0(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lh(e,t){return t=V1({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bi(e,t,n,r){return r!==null&&Qs(r),Mr(t,e.child,null,n),e=lh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Eo(Error(I(422))),bi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=V1({mode:"visible",children:r.children},a,0,null),i=Sn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Mr(t,e.child,null,o),t.child.memoizedState=$l(o),t.memoizedState=Fl,i);if(!(t.mode&1))return bi(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(I(419)),r=Eo(i,r,void 0),bi(e,t,o,r)}if(s=(o&e.childLanes)!==0,vt||s){if(r=Ge,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,M0(e,a),Zt(r,e,a,-1))}return ph(),r=Eo(Error(I(421))),bi(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Tf.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,wt=U0(a.nextSibling),bt=t,_e=!0,Kt=null,e!==null&&(Rt[Ot++]=f0,Rt[Ot++]=m0,Rt[Ot++]=Pn,f0=e.id,m0=e.overflow,Pn=t),t=lh(t,r.children),t.flags|=4096,t)}function od(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function ko(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Rp(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(ot(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&od(e,n,t);else if(e.tag===19)od(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ye(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&p1(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ko(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&p1(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ko(t,!0,n,null,i);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function w0(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=W0(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=W0(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yf(e,t,n){switch(t.tag){case 3:Pp(t),zr();break;case 5:ip(t);break;case 1:mt(t.type)&&l1(t);break;case 4:qs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ye(c1,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?Lp(e,t,n):(ye(Ee,Ee.current&1),e=w0(e,t,n),e!==null?e.sibling:null);ye(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rp(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ye(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,kp(e,t,n)}return w0(e,t,n)}var Op,Bl,Np,Ip;Op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};Np=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,yn(s0.current);var i=null;switch(n){case"input":a=sl(e,a),r=sl(e,r),i=[];break;case"select":a=Te({},a,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":a=dl(e,a),r=dl(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=i1)}pl(n,r);var o;n=null;for(h in a)if(!r.hasOwnProperty(h)&&a.hasOwnProperty(h)&&a[h]!=null)if(h==="style"){var s=a[h];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ma.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var l=r[h];if(s=a?.[h],r.hasOwnProperty(h)&&l!==s&&(l!=null||s!=null))if(h==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(h,n)),n=l;else h==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(h,l)):h==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(h,""+l):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ma.hasOwnProperty(h)?(l!=null&&h==="onScroll"&&ze("scroll",e),i||s===l||(i=[])):(i=i||[]).push(h,l))}n&&(i=i||[]).push("style",n);var h=i;(t.updateQueue=h)&&(t.flags|=4)}};Ip=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zf(e,t,n){var r=t.pendingProps;switch(Gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return mt(t.type)&&o1(),tt(t),null;case 3:return r=t.stateNode,wr(),Me(ft),Me(rt),th(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(Yl(Kt),Kt=null))),Bl(e,t),tt(t),null;case 5:eh(t);var a=yn(Ea.current);if(n=t.type,e!==null&&t.stateNode!=null)Np(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return tt(t),null}if(e=yn(s0.current),Mi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[o0]=t,r[Sa]=i,e=(t.mode&1)!==0,n){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(a=0;a<ea.length;a++)ze(ea[a],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":fc(r,i),ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ze("invalid",r);break;case"textarea":gc(r,i),ze("invalid",r)}pl(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zi(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zi(r.textContent,s,e),a=["children",""+s]):ma.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ze("scroll",r)}switch(n){case"input":di(r),mc(r,i,!0);break;case"textarea":di(r),yc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=i1)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=c2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[o0]=t,e[Sa]=r,Op(e,t,!1,!1),t.stateNode=e;e:{switch(o=vl(n,r),n){case"dialog":ze("cancel",e),ze("close",e),a=r;break;case"iframe":case"object":case"embed":ze("load",e),a=r;break;case"video":case"audio":for(a=0;a<ea.length;a++)ze(ea[a],e);a=r;break;case"source":ze("error",e),a=r;break;case"img":case"image":case"link":ze("error",e),ze("load",e),a=r;break;case"details":ze("toggle",e),a=r;break;case"input":fc(e,r),a=sl(e,r),ze("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Te({},r,{value:void 0}),ze("invalid",e);break;case"textarea":gc(e,r),a=dl(e,r),ze("invalid",e);break;default:a=r}pl(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?p2(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&d2(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(e,l):typeof l=="number"&&ga(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ma.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ze("scroll",e):l!=null&&Ps(e,i,l,o))}switch(n){case"input":di(e),mc(e,r,!1);break;case"textarea":di(e),yc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Y0(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?lr(e,!!r.multiple,i,!1):r.defaultValue!=null&&lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=i1)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Ip(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=yn(Ea.current),yn(s0.current),Mi(t)){if(r=t.stateNode,n=t.memoizedProps,r[o0]=t,(i=r.nodeValue!==n)&&(e=bt,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[o0]=t,t.stateNode=r}return tt(t),null;case 13:if(Me(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&wt!==null&&t.mode&1&&!(t.flags&128))ep(),zr(),t.flags|=98560,i=!1;else if(i=Mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[o0]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),i=!1}else Kt!==null&&(Yl(Kt),Kt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?je===0&&(je=3):ph())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return wr(),Bl(e,t),e===null&&xa(t.stateNode.containerInfo),tt(t),null;case 10:return Xs(t.type._context),tt(t),null;case 17:return mt(t.type)&&o1(),tt(t),null;case 19:if(Me(Ee),i=t.memoizedState,i===null)return tt(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Ur(i,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=p1(e),o!==null){for(t.flags|=128,Ur(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(Ee,Ee.current&1|2),t.child}e=e.sibling}i.tail!==null&&Oe()>_r&&(t.flags|=128,r=!0,Ur(i,!1),t.lanes=4194304)}else{if(!r)if(e=p1(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!_e)return tt(t),null}else 2*Oe()-i.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Ur(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Oe(),t.sibling=null,n=Ee.current,ye(Ee,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return uh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Mt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function Mf(e,t){switch(Gs(t),t.tag){case 1:return mt(t.type)&&o1(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),Me(ft),Me(rt),th(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return eh(t),null;case 13:if(Me(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me(Ee),null;case 4:return wr(),null;case 10:return Xs(t.type._context),null;case 22:case 23:return uh(),null;case 24:return null;default:return null}}var _i=!1,nt=!1,wf=typeof WeakSet=="function"?WeakSet:Set,W=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(e,t,r)}else n.current=null}function Ul(e,t,n){try{n()}catch(r){Le(e,t,r)}}var ld=!1;function bf(e,t){if(xl=n1,e=U2(),Vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,h=0,c=0,u=e,p=null;t:for(;;){for(var m;u!==n||a!==0&&u.nodeType!==3||(s=o+a),u!==i||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(m=u.firstChild)!==null;)p=u,u=m;for(;;){if(u===e)break t;if(p===n&&++h===a&&(s=o),p===i&&++c===r&&(l=o),(m=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Al={focusedElem:e,selectionRange:n},n1=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,T=g.memoizedState,y=t.stateNode,f=y.getSnapshotBeforeUpdate(t.elementType===t.type?b:Wt(t.type,b),T);y.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var z=t.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(k){Le(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return g=ld,ld=!1,g}function ha(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Ul(t,n,i)}a=a.next}while(a!==r)}}function j1(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function jl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dp(e){var t=e.alternate;t!==null&&(e.alternate=null,Dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[o0],delete t[Sa],delete t[El],delete t[rf],delete t[af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fp(e){return e.tag===5||e.tag===3||e.tag===4}function sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=i1));else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}var Ke=null,Gt=!1;function k0(e,t,n){for(n=n.child;n!==null;)$p(e,t,n),n=n.sibling}function $p(e,t,n){if(l0&&typeof l0.onCommitFiberUnmount=="function")try{l0.onCommitFiberUnmount(O1,n)}catch{}switch(n.tag){case 5:nt||ir(n,t);case 6:var r=Ke,a=Gt;Ke=null,k0(e,t,n),Ke=r,Gt=a,Ke!==null&&(Gt?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Gt?(e=Ke,n=n.stateNode,e.nodeType===8?bo(e.parentNode,n):e.nodeType===1&&bo(e,n),wa(e)):bo(Ke,n.stateNode));break;case 4:r=Ke,a=Gt,Ke=n.stateNode.containerInfo,Gt=!0,k0(e,t,n),Ke=r,Gt=a;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ul(n,t,o),a=a.next}while(a!==r)}k0(e,t,n);break;case 1:if(!nt&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Le(n,t,s)}k0(e,t,n);break;case 21:k0(e,t,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,k0(e,t,n),nt=r):k0(e,t,n);break;default:k0(e,t,n)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wf),t.forEach(function(r){var a=Pf.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ke=s.stateNode,Gt=!1;break e;case 3:Ke=s.stateNode.containerInfo,Gt=!0;break e;case 4:Ke=s.stateNode.containerInfo,Gt=!0;break e}s=s.return}if(Ke===null)throw Error(I(160));$p(i,o,a),Ke=null,Gt=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(h){Le(a,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}function Bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ht(t,e),a0(e),r&4){try{ha(3,e,e.return),j1(3,e)}catch(b){Le(e,e.return,b)}try{ha(5,e,e.return)}catch(b){Le(e,e.return,b)}}break;case 1:Ht(t,e),a0(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if(Ht(t,e),a0(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var a=e.stateNode;try{ga(a,"")}catch(b){Le(e,e.return,b)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&s2(a,i),vl(s,o);var h=vl(s,i);for(o=0;o<l.length;o+=2){var c=l[o],u=l[o+1];c==="style"?p2(a,u):c==="dangerouslySetInnerHTML"?d2(a,u):c==="children"?ga(a,u):Ps(a,c,u,h)}switch(s){case"input":hl(a,i);break;case"textarea":h2(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?lr(a,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?lr(a,!!i.multiple,i.defaultValue,!0):lr(a,!!i.multiple,i.multiple?[]:"",!1))}a[Sa]=i}catch(b){Le(e,e.return,b)}}break;case 6:if(Ht(t,e),a0(e),r&4){if(e.stateNode===null)throw Error(I(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(b){Le(e,e.return,b)}}break;case 3:if(Ht(t,e),a0(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(t.containerInfo)}catch(b){Le(e,e.return,b)}break;case 4:Ht(t,e),a0(e);break;case 13:Ht(t,e),a0(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(ch=Oe())),r&4&&hd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(nt=(h=nt)||c,Ht(t,e),nt=h):Ht(t,e),a0(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!c&&e.mode&1)for(W=e,c=e.child;c!==null;){for(u=W=c;W!==null;){switch(p=W,m=p.child,p.tag){case 0:case 11:case 14:case 15:ha(4,p,p.return);break;case 1:ir(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(b){Le(r,n,b)}}break;case 5:ir(p,p.return);break;case 22:if(p.memoizedState!==null){dd(u);continue}}m!==null?(m.return=p,W=m):dd(u)}c=c.sibling}e:for(c=null,u=e;;){if(u.tag===5){if(c===null){c=u;try{a=u.stateNode,h?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=u2("display",o))}catch(b){Le(e,e.return,b)}}}else if(u.tag===6){if(c===null)try{u.stateNode.nodeValue=h?"":u.memoizedProps}catch(b){Le(e,e.return,b)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;c===u&&(c=null),u=u.return}c===u&&(c=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Ht(t,e),a0(e),r&4&&hd(e);break;case 21:break;default:Ht(t,e),a0(e)}}function a0(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fp(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(ga(a,""),r.flags&=-33);var i=sd(e);Vl(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=sd(e);Hl(e,s,o);break;default:throw Error(I(161))}}catch(l){Le(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _f(e,t,n){W=e,Up(e)}function Up(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var a=W,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||_i;if(!o){var s=a.alternate,l=s!==null&&s.memoizedState!==null||nt;s=_i;var h=nt;if(_i=o,(nt=l)&&!h)for(W=a;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?ud(a):l!==null?(l.return=o,W=l):ud(a);for(;i!==null;)W=i,Up(i),i=i.sibling;W=a,_i=s,nt=h}cd(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,W=i):cd(e)}}function cd(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:nt||j1(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!nt)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Wt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Yc(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yc(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var c=h.memoizedState;if(c!==null){var u=c.dehydrated;u!==null&&wa(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}nt||t.flags&512&&jl(t)}catch(p){Le(t,t.return,p)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function dd(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function ud(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{j1(4,t)}catch(l){Le(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(l){Le(t,a,l)}}var i=t.return;try{jl(t)}catch(l){Le(t,i,l)}break;case 5:var o=t.return;try{jl(t)}catch(l){Le(t,o,l)}}}catch(l){Le(t,t.return,l)}if(t===e){W=null;break}var s=t.sibling;if(s!==null){s.return=t.return,W=s;break}W=t.return}}var xf=Math.ceil,m1=b0.ReactCurrentDispatcher,sh=b0.ReactCurrentOwner,Dt=b0.ReactCurrentBatchConfig,le=0,Ge=null,Fe=null,Xe=0,Mt=0,or=q0(0),je=0,La=null,Rn=0,H1=0,hh=0,ca=null,pt=null,ch=0,_r=1/0,u0=null,g1=!1,Wl=null,H0=null,xi=!1,D0=null,y1=0,da=0,Gl=null,Wi=-1,Gi=0;function lt(){return le&6?Oe():Wi!==-1?Wi:Wi=Oe()}function V0(e){return e.mode&1?le&2&&Xe!==0?Xe&-Xe:lf.transition!==null?(Gi===0&&(Gi=A2()),Gi):(e=ve,e!==0||(e=window.event,e=e===void 0?16:L2(e.type)),e):1}function Zt(e,t,n,r){if(50<da)throw da=0,Gl=null,Error(I(185));Ha(e,n,r),(!(le&2)||e!==Ge)&&(e===Ge&&(!(le&2)&&(H1|=n),je===4&&O0(e,Xe)),gt(e,r),n===1&&le===0&&!(t.mode&1)&&(_r=Oe()+500,$1&&en()))}function gt(e,t){var n=e.callbackNode;o5(e,t);var r=t1(e,e===Ge?Xe:0);if(r===0)n!==null&&wc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wc(n),t===1)e.tag===0?of(pd.bind(null,e)):J2(pd.bind(null,e)),tf(function(){!(le&6)&&en()}),n=null;else{switch(S2(r)){case 1:n=Is;break;case 4:n=_2;break;case 16:n=e1;break;case 536870912:n=x2;break;default:n=e1}n=Kp(n,jp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jp(e,t){if(Wi=-1,Gi=0,le&6)throw Error(I(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=t1(e,e===Ge?Xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=z1(e,r);else{t=r;var a=le;le|=2;var i=Vp();(Ge!==e||Xe!==t)&&(u0=null,_r=Oe()+500,An(e,t));do try{Cf();break}catch(s){Hp(e,s)}while(!0);Ks(),m1.current=i,le=a,Fe!==null?t=0:(Ge=null,Xe=0,t=je)}if(t!==0){if(t===2&&(a=zl(e),a!==0&&(r=a,t=Ql(e,a))),t===1)throw n=La,An(e,0),O0(e,r),gt(e,Oe()),n;if(t===6)O0(e,r);else{if(a=e.current.alternate,!(r&30)&&!Af(a)&&(t=z1(e,r),t===2&&(i=zl(e),i!==0&&(r=i,t=Ql(e,i))),t===1))throw n=La,An(e,0),O0(e,r),gt(e,Oe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:vn(e,pt,u0);break;case 3:if(O0(e,r),(r&130023424)===r&&(t=ch+500-Oe(),10<t)){if(t1(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Cl(vn.bind(null,e,pt,u0),t);break}vn(e,pt,u0);break;case 4:if(O0(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-Jt(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xf(r/1960))-r,10<r){e.timeoutHandle=Cl(vn.bind(null,e,pt,u0),r);break}vn(e,pt,u0);break;case 5:vn(e,pt,u0);break;default:throw Error(I(329))}}}return gt(e,Oe()),e.callbackNode===n?jp.bind(null,e):null}function Ql(e,t){var n=ca;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=z1(e,t),e!==2&&(t=pt,pt=n,t!==null&&Yl(t)),e}function Yl(e){pt===null?pt=e:pt.push.apply(pt,e)}function Af(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!qt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function O0(e,t){for(t&=~hh,t&=~H1,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Jt(t),r=1<<n;e[n]=-1,t&=~r}}function pd(e){if(le&6)throw Error(I(327));ur();var t=t1(e,0);if(!(t&1))return gt(e,Oe()),null;var n=z1(e,t);if(e.tag!==0&&n===2){var r=zl(e);r!==0&&(t=r,n=Ql(e,r))}if(n===1)throw n=La,An(e,0),O0(e,t),gt(e,Oe()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,pt,u0),gt(e,Oe()),null}function dh(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(_r=Oe()+500,$1&&en())}}function On(e){D0!==null&&D0.tag===0&&!(le&6)&&ur();var t=le;le|=1;var n=Dt.transition,r=ve;try{if(Dt.transition=null,ve=1,e)return e()}finally{ve=r,Dt.transition=n,le=t,!(le&6)&&en()}}function uh(){Mt=or.current,Me(or)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ef(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Gs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&o1();break;case 3:wr(),Me(ft),Me(rt),th();break;case 5:eh(r);break;case 4:wr();break;case 13:Me(Ee);break;case 19:Me(Ee);break;case 10:Xs(r.type._context);break;case 22:case 23:uh()}n=n.return}if(Ge=e,Fe=e=W0(e.current,null),Xe=Mt=t,je=0,La=null,hh=H1=Rn=0,pt=ca=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}gn=null}return e}function Hp(e,t){do{var n=Fe;try{if(Ks(),ji.current=f1,v1){for(var r=ke.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}v1=!1}if(Ln=0,We=Ue=ke=null,sa=!1,ka=0,sh.current=null,n===null||n.return===null){je=1,La=t,Fe=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=Xe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=l,c=s,u=c.tag;if(!(c.mode&1)&&(u===0||u===11||u===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=ed(o);if(m!==null){m.flags&=-257,td(m,o,s,i,t),m.mode&1&&qc(i,h,t),t=m,l=h;var g=t.updateQueue;if(g===null){var b=new Set;b.add(l),t.updateQueue=b}else g.add(l);break e}else{if(!(t&1)){qc(i,h,t),ph();break e}l=Error(I(426))}}else if(_e&&s.mode&1){var T=ed(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),td(T,o,s,i,t),Qs(br(l,s));break e}}i=l=br(l,s),je!==4&&(je=2),ca===null?ca=[i]:ca.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=Sp(i,l,t);Qc(i,y);break e;case 1:s=l;var f=i.type,z=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(H0===null||!H0.has(z)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=Cp(i,s,t);Qc(i,k);break e}}i=i.return}while(i!==null)}Gp(n)}catch(O){t=O,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function Vp(){var e=m1.current;return m1.current=f1,e===null?f1:e}function ph(){(je===0||je===3||je===2)&&(je=4),Ge===null||!(Rn&268435455)&&!(H1&268435455)||O0(Ge,Xe)}function z1(e,t){var n=le;le|=2;var r=Vp();(Ge!==e||Xe!==t)&&(u0=null,An(e,t));do try{Sf();break}catch(a){Hp(e,a)}while(!0);if(Ks(),le=n,m1.current=r,Fe!==null)throw Error(I(261));return Ge=null,Xe=0,je}function Sf(){for(;Fe!==null;)Wp(Fe)}function Cf(){for(;Fe!==null&&!J4();)Wp(Fe)}function Wp(e){var t=Yp(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?Gp(e):Fe=t,sh.current=null}function Gp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mf(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Fe=null;return}}else if(n=zf(n,t,Mt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);je===0&&(je=5)}function vn(e,t,n){var r=ve,a=Dt.transition;try{Dt.transition=null,ve=1,Ef(e,t,n,r)}finally{Dt.transition=a,ve=r}return null}function Ef(e,t,n,r){do ur();while(D0!==null);if(le&6)throw Error(I(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(l5(e,i),e===Ge&&(Fe=Ge=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xi||(xi=!0,Kp(e1,function(){return ur(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Dt.transition,Dt.transition=null;var o=ve;ve=1;var s=le;le|=4,sh.current=null,bf(e,n),Bp(n,e),Q5(Al),n1=!!xl,Al=xl=null,e.current=n,_f(n),Z4(),le=s,ve=o,Dt.transition=i}else e.current=n;if(xi&&(xi=!1,D0=e,y1=a),i=e.pendingLanes,i===0&&(H0=null),t5(n.stateNode),gt(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(g1)throw g1=!1,e=Wl,Wl=null,e;return y1&1&&e.tag!==0&&ur(),i=e.pendingLanes,i&1?e===Gl?da++:(da=0,Gl=e):da=0,en(),null}function ur(){if(D0!==null){var e=S2(y1),t=Dt.transition,n=ve;try{if(Dt.transition=null,ve=16>e?16:e,D0===null)var r=!1;else{if(e=D0,D0=null,y1=0,le&6)throw Error(I(331));var a=le;for(le|=4,W=e.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var h=s[l];for(W=h;W!==null;){var c=W;switch(c.tag){case 0:case 11:case 15:ha(8,c,i)}var u=c.child;if(u!==null)u.return=c,W=u;else for(;W!==null;){c=W;var p=c.sibling,m=c.return;if(Dp(c),c===h){W=null;break}if(p!==null){p.return=m,W=p;break}W=m}}}var g=i.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ha(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,W=y;break e}W=i.return}}var f=e.current;for(W=f;W!==null;){o=W;var z=o.child;if(o.subtreeFlags&2064&&z!==null)z.return=o,W=z;else e:for(o=f;W!==null;){if(s=W,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:j1(9,s)}}catch(O){Le(s,s.return,O)}if(s===o){W=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,W=k;break e}W=s.return}}if(le=a,en(),l0&&typeof l0.onPostCommitFiberRoot=="function")try{l0.onPostCommitFiberRoot(O1,e)}catch{}r=!0}return r}finally{ve=n,Dt.transition=t}}return!1}function vd(e,t,n){t=br(n,t),t=Sp(e,t,1),e=j0(e,t,1),t=lt(),e!==null&&(Ha(e,1,t),gt(e,t))}function Le(e,t,n){if(e.tag===3)vd(e,e,n);else for(;t!==null;){if(t.tag===3){vd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(H0===null||!H0.has(r))){e=br(n,e),e=Cp(t,e,1),t=j0(t,e,1),e=lt(),t!==null&&(Ha(t,1,e),gt(t,e));break}}t=t.return}}function kf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,Ge===e&&(Xe&n)===n&&(je===4||je===3&&(Xe&130023424)===Xe&&500>Oe()-ch?An(e,0):hh|=n),gt(e,t)}function Qp(e,t){t===0&&(e.mode&1?(t=vi,vi<<=1,!(vi&130023424)&&(vi=4194304)):t=1);var n=lt();e=M0(e,t),e!==null&&(Ha(e,t,n),gt(e,n))}function Tf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qp(e,n)}function Pf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Qp(e,n)}var Yp;Yp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)vt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return vt=!1,yf(e,t,n);vt=!!(e.flags&131072)}else vt=!1,_e&&t.flags&1048576&&Z2(t,h1,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var a=yr(t,rt.current);dr(t,n),a=rh(null,t,r,e,a,n);var i=ah();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(i=!0,l1(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Zs(t),a.updater=U1,t.stateNode=a,a._reactInternals=t,Ol(t,r,e,n),t=Dl(null,t,r,!0,i,n)):(t.tag=0,_e&&i&&Ws(t),ot(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Rf(r),e=Wt(r,e),a){case 0:t=Il(null,t,r,e,n);break e;case 1:t=ad(null,t,r,e,n);break e;case 11:t=nd(null,t,r,e,n);break e;case 14:t=rd(null,t,r,Wt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Wt(r,a),Il(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Wt(r,a),ad(e,t,r,a,n);case 3:e:{if(Pp(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,a=i.element,ap(e,t),u1(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=br(Error(I(423)),t),t=id(e,t,r,n,a);break e}else if(r!==a){a=br(Error(I(424)),t),t=id(e,t,r,n,a);break e}else for(wt=U0(t.stateNode.containerInfo.firstChild),bt=t,_e=!0,Kt=null,n=np(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===a){t=w0(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return ip(t),e===null&&Pl(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Sl(r,a)?o=null:i!==null&&Sl(r,i)&&(t.flags|=32),Tp(e,t),ot(e,t,o,n),t.child;case 6:return e===null&&Pl(t),null;case 13:return Lp(e,t,n);case 4:return qs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Wt(r,a),nd(e,t,r,a,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,ye(c1,r._currentValue),r._currentValue=o,i!==null)if(qt(i.value,o)){if(i.children===a.children&&!ft.current){t=w0(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=g0(-1,n&-n),l.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var c=h.pending;c===null?l.next=l:(l.next=c.next,c.next=l),h.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ll(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(I(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ll(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ot(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,dr(t,n),a=Ft(a),r=r(a),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,a=Wt(r,t.pendingProps),a=Wt(r.type,a),rd(e,t,r,a,n);case 15:return Ep(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Wt(r,a),Vi(e,t),t.tag=1,mt(r)?(e=!0,l1(t)):e=!1,dr(t,n),Ap(t,r,a),Ol(t,r,a,n),Dl(null,t,r,!0,e,n);case 19:return Rp(e,t,n);case 22:return kp(e,t,n)}throw Error(I(156,t.tag))};function Kp(e,t){return b2(e,t)}function Lf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,n,r){return new Lf(e,t,n,r)}function vh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rf(e){if(typeof e=="function")return vh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rs)return 11;if(e===Os)return 14}return 2}function W0(e,t){var n=e.alternate;return n===null?(n=It(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qi(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")vh(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Xn:return Sn(n.children,a,i,t);case Ls:o=8,a|=8;break;case al:return e=It(12,n,t,a|2),e.elementType=al,e.lanes=i,e;case il:return e=It(13,n,t,a),e.elementType=il,e.lanes=i,e;case ol:return e=It(19,n,t,a),e.elementType=ol,e.lanes=i,e;case i2:return V1(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case r2:o=10;break e;case a2:o=9;break e;case Rs:o=11;break e;case Os:o=14;break e;case P0:o=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=It(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Sn(e,t,n,r){return e=It(7,e,r,t),e.lanes=n,e}function V1(e,t,n,r){return e=It(22,e,r,t),e.elementType=i2,e.lanes=n,e.stateNode={isHidden:!1},e}function To(e,t,n){return e=It(6,e,null,t),e.lanes=n,e}function Po(e,t,n){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Of(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=co(0),this.expirationTimes=co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=co(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function fh(e,t,n,r,a,i,o,s,l){return e=new Of(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=It(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zs(i),e}function Nf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xp(e){if(!e)return K0;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(mt(n))return X2(e,n,t)}return t}function Jp(e,t,n,r,a,i,o,s,l){return e=fh(n,r,!0,e,a,i,o,s,l),e.context=Xp(null),n=e.current,r=lt(),a=V0(n),i=g0(r,a),i.callback=t??null,j0(n,i,a),e.current.lanes=a,Ha(e,a,r),gt(e,r),e}function W1(e,t,n,r){var a=t.current,i=lt(),o=V0(a);return n=Xp(n),t.context===null?t.context=n:t.pendingContext=n,t=g0(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=j0(a,t,o),e!==null&&(Zt(e,a,o,i),Ui(e,a,o)),o}function M1(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mh(e,t){fd(e,t),(e=e.alternate)&&fd(e,t)}function If(){return null}var Zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function gh(e){this._internalRoot=e}G1.prototype.render=gh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));W1(e,t,null,null)};G1.prototype.unmount=gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){W1(null,e,null,null)}),t[z0]=null}};function G1(e){this._internalRoot=e}G1.prototype.unstable_scheduleHydration=function(e){if(e){var t=k2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<R0.length&&t!==0&&t<R0[n].priority;n++);R0.splice(n,0,e),n===0&&P2(e)}};function yh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Q1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function md(){}function Df(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var h=M1(o);i.call(h)}}var o=Jp(t,r,e,0,null,!1,!1,"",md);return e._reactRootContainer=o,e[z0]=o.current,xa(e.nodeType===8?e.parentNode:e),On(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var h=M1(l);s.call(h)}}var l=fh(e,0,!1,null,null,!1,!1,"",md);return e._reactRootContainer=l,e[z0]=l.current,xa(e.nodeType===8?e.parentNode:e),On(function(){W1(t,l,n,r)}),l}function Y1(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var s=a;a=function(){var l=M1(o);s.call(l)}}W1(t,o,e,a)}else o=Df(n,t,e,a,r);return M1(o)}C2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(Ds(t,n|1),gt(t,Oe()),!(le&6)&&(_r=Oe()+500,en()))}break;case 13:On(function(){var r=M0(e,1);if(r!==null){var a=lt();Zt(r,e,1,a)}}),mh(e,1)}};Fs=function(e){if(e.tag===13){var t=M0(e,134217728);if(t!==null){var n=lt();Zt(t,e,134217728,n)}mh(e,134217728)}};E2=function(e){if(e.tag===13){var t=V0(e),n=M0(e,t);if(n!==null){var r=lt();Zt(n,e,t,r)}mh(e,t)}};k2=function(){return ve};T2=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}};ml=function(e,t,n){switch(t){case"input":if(hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=F1(r);if(!a)throw Error(I(90));l2(r),hl(r,a)}}}break;case"textarea":h2(e,n);break;case"select":t=n.value,t!=null&&lr(e,!!n.multiple,t,!1)}};m2=dh;g2=On;var Ff={usingClientEntryPoint:!1,Events:[Wa,er,F1,v2,f2,dh]},jr={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$f={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b0.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=M2(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||If,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{O1=Ai.inject($f),l0=Ai}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ff;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yh(t))throw Error(I(200));return Nf(e,t,null,n)};xt.createRoot=function(e,t){if(!yh(e))throw Error(I(299));var n=!1,r="",a=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=fh(e,1,!1,null,null,n,!1,r,a),e[z0]=t.current,xa(e.nodeType===8?e.parentNode:e),new gh(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=M2(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return On(e)};xt.hydrate=function(e,t,n){if(!Q1(t))throw Error(I(200));return Y1(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!yh(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=Zp;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Jp(t,null,e,1,n??null,a,!1,i,o),e[z0]=t.current,xa(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new G1(t)};xt.render=function(e,t,n){if(!Q1(t))throw Error(I(200));return Y1(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!Q1(e))throw Error(I(40));return e._reactRootContainer?(On(function(){Y1(null,null,e,!1,function(){e._reactRootContainer=null,e[z0]=null})}),!0):!1};xt.unstable_batchedUpdates=dh;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Q1(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Y1(e,t,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function qp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qp)}catch(e){console.error(e)}}qp(),qu.exports=xt;var zh=qu.exports;const Bf=Ua(zh),Uf=Hu({__proto__:null,default:Bf},[zh]);var ev,gd=zh;ev=gd.createRoot,gd.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(this,arguments)}var De;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(De||(De={}));const yd="popstate";function jf(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:o,hash:s}=r.location;return Ra("",{pathname:i,search:o,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Qa(a)}return Vf(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hf(){return Math.random().toString(36).substr(2,8)}function zd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ra(e,t,n,r){return n===void 0&&(n=null),Ce({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tn(t):t,{state:n,key:t&&t.key||r||Hf()})}function Qa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Vf(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=De.Pop,l=null,h=c();h==null&&(h=0,o.replaceState(Ce({},o.state,{idx:h}),""));function c(){return(o.state||{idx:null}).idx}function u(){s=De.Pop;let T=c(),y=T==null?null:T-h;h=T,l&&l({action:s,location:b.location,delta:y})}function p(T,y){s=De.Push;let f=Ra(b.location,T,y);h=c()+1;let z=zd(f,h),k=b.createHref(f);try{o.pushState(z,"",k)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;a.location.assign(k)}i&&l&&l({action:s,location:b.location,delta:1})}function m(T,y){s=De.Replace;let f=Ra(b.location,T,y);h=c();let z=zd(f,h),k=b.createHref(f);o.replaceState(z,"",k),i&&l&&l({action:s,location:b.location,delta:0})}function g(T){let y=a.location.origin!=="null"?a.location.origin:a.location.href,f=typeof T=="string"?T:Qa(T);return f=f.replace(/ $/,"%20"),ne(y,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,y)}let b={get action(){return s},get location(){return e(a,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(yd,u),l=T,()=>{a.removeEventListener(yd,u),l=null}},createHref(T){return t(a,T)},createURL:g,encodeLocation(T){let y=g(T);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:m,go(T){return o.go(T)}};return b}var be;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(be||(be={}));const Wf=new Set(["lazy","caseSensitive","path","id","index","children"]);function Gf(e){return e.index===!0}function Kl(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,i)=>{let o=[...n,i],s=typeof a.id=="string"?a.id:o.join("-");if(ne(a.index!==!0||!a.children,"Cannot specify children on an index route"),ne(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Gf(a)){let l=Ce({},a,t(a),{id:s});return r[s]=l,l}else{let l=Ce({},a,t(a),{id:s,children:void 0});return r[s]=l,a.children&&(l.children=Kl(a.children,t,o,r)),l}})}function zn(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?tn(t):t,a=Nn(r.pathname||"/",n);if(a==null)return null;let i=tv(e);Yf(i);let o=null;for(let s=0;o==null&&s<i.length;++s){let l=om(a);o=rm(i[s],l)}return o}function Qf(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function tv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let h=G0([r,l.relativePath]),c=n.concat(l);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),tv(i.children,t,c,h)),!(i.path==null&&!i.index)&&t.push({path:h,score:tm(h,i.index),routesMeta:c})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,o);else for(let l of nv(i.path))a(i,o,l)}),t}function nv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=nv(r.join("/")),s=[];return s.push(...o.map(l=>l===""?i:[i,l].join("/"))),a&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Yf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kf=/^:[\w-]+$/,Xf=3,Jf=2,Zf=1,qf=10,em=-2,Md=e=>e==="*";function tm(e,t){let n=e.split("/"),r=n.length;return n.some(Md)&&(r+=em),t&&(r+=Jf),n.filter(a=>!Md(a)).reduce((a,i)=>a+(Kf.test(i)?Xf:i===""?Zf:qf),r)}function nm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function rm(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,h=a==="/"?t:t.slice(a.length)||"/",c=am({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},h);if(!c)return null;Object.assign(r,c.params);let u=s.route;i.push({params:r,pathname:G0([a,c.pathname]),pathnameBase:hm(G0([a,c.pathnameBase])),route:u}),c.pathnameBase!=="/"&&(a=G0([a,c.pathnameBase]))}return i}function am(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=im(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((h,c,u)=>{let{paramName:p,isOptional:m}=c;if(p==="*"){let b=s[u]||"";o=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const g=s[u];return m&&!g?h[p]=void 0:h[p]=(g||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:o,pattern:e}}function im(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),xr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function om(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Nn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?tn(e):e;return{pathname:n?n.startsWith("/")?n:sm(n,t):t,search:cm(r),hash:dm(a)}}function sm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Lo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Mh(e,t){let n=rv(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function wh(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=tn(e):(a=Ce({},e),ne(!a.pathname||!a.pathname.includes("?"),Lo("?","pathname","search",a)),ne(!a.pathname||!a.pathname.includes("#"),Lo("#","pathname","hash",a)),ne(!a.search||!a.search.includes("#"),Lo("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,s;if(o==null)s=n;else{let u=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),u-=1;a.pathname=p.join("/")}s=u>=0?t[u]:"/"}let l=lm(a,s),h=o&&o!=="/"&&o.endsWith("/"),c=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(h||c)&&(l.pathname+="/"),l}const G0=e=>e.join("/").replace(/\/\/+/g,"/"),hm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class bh{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function _h(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const av=["post","put","patch","delete"],um=new Set(av),pm=["get",...av],vm=new Set(pm),fm=new Set([301,302,303,307,308]),mm=new Set([307,308]),Ro={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},gm={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Qn={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},xh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ym=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),iv="remix-router-transitions";function zm(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;ne(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let _=e.detectErrorBoundary;a=x=>({hasErrorBoundary:_(x)})}else a=ym;let i={},o=Kl(e.routes,a,void 0,i),s,l=e.basename||"/",h=e.unstable_dataStrategy||_m,c=Ce({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),u=null,p=new Set,m=null,g=null,b=null,T=e.hydrationData!=null,y=zn(o,e.history.location,l),f=null;if(y==null){let _=Pt(404,{pathname:e.history.location.pathname}),{matches:x,route:E}=Td(o);y=x,f={[E.id]:_}}let z,k=y.some(_=>_.route.lazy),O=y.some(_=>_.route.loader);if(k)z=!1;else if(!O)z=!0;else if(c.v7_partialHydration){let _=e.hydrationData?e.hydrationData.loaderData:null,x=e.hydrationData?e.hydrationData.errors:null,E=R=>R.route.loader?typeof R.route.loader=="function"&&R.route.loader.hydrate===!0?!1:_&&_[R.route.id]!==void 0||x&&x[R.route.id]!==void 0:!0;if(x){let R=y.findIndex(v=>x[v.route.id]!==void 0);z=y.slice(0,R+1).every(E)}else z=y.every(E)}else z=e.hydrationData!=null;let U,M={historyAction:e.history.action,location:e.history.location,matches:y,initialized:z,navigation:Ro,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||f,fetchers:new Map,blockers:new Map},B=De.Pop,G=!1,H,ee=!1,Z=new Map,Y=null,Ae=!1,Pe=!1,$e=[],de=[],D=new Map,Q=0,X=-1,se=new Map,te=new Set,Qe=new Map,Ve=new Map,ae=new Set,Ie=new Map,Be=new Map,N=!1;function j(){if(u=e.history.listen(_=>{let{action:x,location:E,delta:R}=_;if(N){N=!1;return}xr(Be.size===0||R!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let v=ri({currentLocation:M.location,nextLocation:E,historyAction:x});if(v&&R!=null){N=!0,e.history.go(R*-1),Un(v,{state:"blocked",location:E,proceed(){Un(v,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),e.history.go(R)},reset(){let d=new Map(M.blockers);d.set(v,Qn),ue({blockers:d})}});return}return qe(x,E)}),n){Nm(t,Z);let _=()=>Im(t,Z);t.addEventListener("pagehide",_),Y=()=>t.removeEventListener("pagehide",_)}return M.initialized||qe(De.Pop,M.location,{initialHydration:!0}),U}function J(){u&&u(),Y&&Y(),p.clear(),H&&H.abort(),M.fetchers.forEach((_,x)=>ln(x)),M.blockers.forEach((_,x)=>hn(x))}function Re(_){return p.add(_),()=>p.delete(_)}function ue(_,x){x===void 0&&(x={}),M=Ce({},M,_);let E=[],R=[];c.v7_fetcherPersist&&M.fetchers.forEach((v,d)=>{v.state==="idle"&&(ae.has(d)?R.push(d):E.push(d))}),[...p].forEach(v=>v(M,{deletedFetchers:R,unstable_viewTransitionOpts:x.viewTransitionOpts,unstable_flushSync:x.flushSync===!0})),c.v7_fetcherPersist&&(E.forEach(v=>M.fetchers.delete(v)),R.forEach(v=>ln(v)))}function oe(_,x,E){var R,v;let{flushSync:d}=E===void 0?{}:E,w=M.actionData!=null&&M.navigation.formMethod!=null&&Qt(M.navigation.formMethod)&&M.navigation.state==="loading"&&((R=_.state)==null?void 0:R._isRedirect)!==!0,A;x.actionData?Object.keys(x.actionData).length>0?A=x.actionData:A=null:w?A=M.actionData:A=null;let C=x.loaderData?Ed(M.loaderData,x.loaderData,x.matches||[],x.errors):M.loaderData,S=M.blockers;S.size>0&&(S=new Map(S),S.forEach(($,F)=>S.set(F,Qn)));let L=G===!0||M.navigation.formMethod!=null&&Qt(M.navigation.formMethod)&&((v=_.state)==null?void 0:v._isRedirect)!==!0;s&&(o=s,s=void 0),Ae||B===De.Pop||(B===De.Push?e.history.push(_,_.state):B===De.Replace&&e.history.replace(_,_.state));let V;if(B===De.Pop){let $=Z.get(M.location.pathname);$&&$.has(_.pathname)?V={currentLocation:M.location,nextLocation:_}:Z.has(_.pathname)&&(V={currentLocation:_,nextLocation:M.location})}else if(ee){let $=Z.get(M.location.pathname);$?$.add(_.pathname):($=new Set([_.pathname]),Z.set(M.location.pathname,$)),V={currentLocation:M.location,nextLocation:_}}ue(Ce({},x,{actionData:A,loaderData:C,historyAction:B,location:_,initialized:!0,navigation:Ro,revalidation:"idle",restoreScrollPosition:c0(_,x.matches||M.matches),preventScrollReset:L,blockers:S}),{viewTransitionOpts:V,flushSync:d===!0}),B=De.Pop,G=!1,ee=!1,Ae=!1,Pe=!1,$e=[],de=[]}async function Bt(_,x){if(typeof _=="number"){e.history.go(_);return}let E=Xl(M.location,M.matches,l,c.v7_prependBasename,_,c.v7_relativeSplatPath,x?.fromRouteId,x?.relative),{path:R,submission:v,error:d}=wd(c.v7_normalizeFormMethod,!1,E,x),w=M.location,A=Ra(M.location,R,x&&x.state);A=Ce({},A,e.history.encodeLocation(A));let C=x&&x.replace!=null?x.replace:void 0,S=De.Push;C===!0?S=De.Replace:C===!1||v!=null&&Qt(v.formMethod)&&v.formAction===M.location.pathname+M.location.search&&(S=De.Replace);let L=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,V=(x&&x.unstable_flushSync)===!0,$=ri({currentLocation:w,nextLocation:A,historyAction:S});if($){Un($,{state:"blocked",location:A,proceed(){Un($,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),Bt(_,x)},reset(){let F=new Map(M.blockers);F.set($,Qn),ue({blockers:F})}});return}return await qe(S,A,{submission:v,pendingError:d,preventScrollReset:L,replace:x&&x.replace,enableViewTransition:x&&x.unstable_viewTransition,flushSync:V})}function at(){if(jt(),ue({revalidation:"loading"}),M.navigation.state!=="submitting"){if(M.navigation.state==="idle"){qe(M.historyAction,M.location,{startUninterruptedRevalidation:!0});return}qe(B||M.historyAction,M.navigation.location,{overrideNavigation:M.navigation})}}async function qe(_,x,E){H&&H.abort(),H=null,B=_,Ae=(E&&E.startUninterruptedRevalidation)===!0,ii(M.location,M.matches),G=(E&&E.preventScrollReset)===!0,ee=(E&&E.enableViewTransition)===!0;let R=s||o,v=E&&E.overrideNavigation,d=zn(R,x,l),w=(E&&E.flushSync)===!0;if(!d){let $=Pt(404,{pathname:x.pathname}),{matches:F,route:q}=Td(R);jn(),oe(x,{matches:F,loaderData:{},errors:{[q.id]:$}},{flushSync:w});return}if(M.initialized&&!Pe&&km(M.location,x)&&!(E&&E.submission&&Qt(E.submission.formMethod))){oe(x,{matches:d},{flushSync:w});return}H=new AbortController;let A=Wn(e.history,x,H.signal,E&&E.submission),C;if(E&&E.pendingError)C=[ua(d).route.id,{type:be.error,error:E.pendingError}];else if(E&&E.submission&&Qt(E.submission.formMethod)){let $=await qa(A,x,E.submission,d,{replace:E.replace,flushSync:w});if($.shortCircuited)return;C=$.pendingActionResult,v=Oo(x,E.submission),w=!1,A=Wn(e.history,A.url,A.signal)}let{shortCircuited:S,loaderData:L,errors:V}=await A0(A,x,d,v,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,w,C);S||(H=null,oe(x,Ce({matches:d},kd(C),{loaderData:L,errors:V})))}async function qa(_,x,E,R,v){v===void 0&&(v={}),jt();let d=Rm(x,E);ue({navigation:d},{flushSync:v.flushSync===!0});let w,A=Zl(R,x);if(!A.route.action&&!A.route.lazy)w={type:be.error,error:Pt(405,{method:_.method,pathname:x.pathname,routeId:A.route.id})};else if(w=(await C0("action",_,[A],R))[0],_.signal.aborted)return{shortCircuited:!0};if(wn(w)){let C;return v&&v.replace!=null?C=v.replace:C=Ad(w.response.headers.get("Location"),new URL(_.url),l)===M.location.pathname+M.location.search,await Ut(_,w,{submission:E,replace:C}),{shortCircuited:!0}}if(Mn(w))throw Pt(400,{type:"defer-action"});if(Nt(w)){let C=ua(R,A.route.id);return(v&&v.replace)!==!0&&(B=De.Push),{pendingActionResult:[C.route.id,w]}}return{pendingActionResult:[A.route.id,w]}}async function A0(_,x,E,R,v,d,w,A,C,S){let L=R||Oo(x,v),V=v||d||Rd(L),$=s||o,[F,q]=bd(e.history,M,E,V,x,c.v7_partialHydration&&A===!0,c.unstable_skipActionErrorRevalidation,Pe,$e,de,ae,Qe,te,$,l,S);if(jn(ie=>!(E&&E.some(it=>it.route.id===ie))||F&&F.some(it=>it.route.id===ie)),X=++Q,F.length===0&&q.length===0){let ie=ti();return oe(x,Ce({matches:E,loaderData:{},errors:S&&Nt(S[1])?{[S[0]]:S[1].error}:null},kd(S),ie?{fetchers:new Map(M.fetchers)}:{}),{flushSync:C}),{shortCircuited:!0}}if(!Ae&&(!c.v7_partialHydration||!A)){q.forEach(it=>{let Tt=M.fetchers.get(it.key),Ye=Hr(void 0,Tt?Tt.data:void 0);M.fetchers.set(it.key,Ye)});let ie;S&&!Nt(S[1])?ie={[S[0]]:S[1].data}:M.actionData&&(Object.keys(M.actionData).length===0?ie=null:ie=M.actionData),ue(Ce({navigation:L},ie!==void 0?{actionData:ie}:{},q.length>0?{fetchers:new Map(M.fetchers)}:{}),{flushSync:C})}q.forEach(ie=>{D.has(ie.key)&&n0(ie.key),ie.controller&&D.set(ie.key,ie.controller)});let he=()=>q.forEach(ie=>n0(ie.key));H&&H.signal.addEventListener("abort",he);let{loaderResults:we,fetcherResults:Se}=await ei(M.matches,E,F,q,_);if(_.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",he),q.forEach(ie=>D.delete(ie.key));let dt=Pd([...we,...Se]);if(dt){if(dt.idx>=F.length){let ie=q[dt.idx-F.length].key;te.add(ie)}return await Ut(_,dt.result,{replace:w}),{shortCircuited:!0}}let{loaderData:Hn,errors:r0}=Cd(M,E,F,we,S,q,Se,Ie);Ie.forEach((ie,it)=>{ie.subscribe(Tt=>{(Tt||ie.done)&&Ie.delete(it)})}),c.v7_partialHydration&&A&&M.errors&&Object.entries(M.errors).filter(ie=>{let[it]=ie;return!F.some(Tt=>Tt.route.id===it)}).forEach(ie=>{let[it,Tt]=ie;r0=Object.assign(r0||{},{[it]:Tt})});let oi=ti(),li=ni(X),si=oi||li||q.length>0;return Ce({loaderData:Hn,errors:r0},si?{fetchers:new Map(M.fetchers)}:{})}function S0(_,x,E,R){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");D.has(_)&&n0(_);let v=(R&&R.unstable_flushSync)===!0,d=s||o,w=Xl(M.location,M.matches,l,c.v7_prependBasename,E,c.v7_relativeSplatPath,x,R?.relative),A=zn(d,w,l);if(!A){on(_,x,Pt(404,{pathname:w}),{flushSync:v});return}let{path:C,submission:S,error:L}=wd(c.v7_normalizeFormMethod,!0,w,R);if(L){on(_,x,L,{flushSync:v});return}let V=Zl(A,C);if(G=(R&&R.preventScrollReset)===!0,S&&Qt(S.formMethod)){an(_,x,C,V,A,v,S);return}Qe.set(_,{routeId:x,path:C}),ro(_,x,C,V,A,v,S)}async function an(_,x,E,R,v,d,w){if(jt(),Qe.delete(_),!R.route.action&&!R.route.lazy){let Ye=Pt(405,{method:w.formMethod,pathname:E,routeId:x});on(_,x,Ye,{flushSync:d});return}let A=M.fetchers.get(_);t0(_,Om(w,A),{flushSync:d});let C=new AbortController,S=Wn(e.history,E,C.signal,w);D.set(_,C);let L=Q,$=(await C0("action",S,[R],v))[0];if(S.signal.aborted){D.get(_)===C&&D.delete(_);return}if(c.v7_fetcherPersist&&ae.has(_)){if(wn($)||Nt($)){t0(_,T0(void 0));return}}else{if(wn($))if(D.delete(_),X>L){t0(_,T0(void 0));return}else return te.add(_),t0(_,Hr(w)),Ut(S,$,{fetcherSubmission:w});if(Nt($)){on(_,x,$.error);return}}if(Mn($))throw Pt(400,{type:"defer-action"});let F=M.navigation.location||M.location,q=Wn(e.history,F,C.signal),he=s||o,we=M.navigation.state!=="idle"?zn(he,M.navigation.location,l):M.matches;ne(we,"Didn't find any matches after fetcher action");let Se=++Q;se.set(_,Se);let dt=Hr(w,$.data);M.fetchers.set(_,dt);let[Hn,r0]=bd(e.history,M,we,w,F,!1,c.unstable_skipActionErrorRevalidation,Pe,$e,de,ae,Qe,te,he,l,[R.route.id,$]);r0.filter(Ye=>Ye.key!==_).forEach(Ye=>{let Or=Ye.key,sc=M.fetchers.get(Or),y4=Hr(void 0,sc?sc.data:void 0);M.fetchers.set(Or,y4),D.has(Or)&&n0(Or),Ye.controller&&D.set(Or,Ye.controller)}),ue({fetchers:new Map(M.fetchers)});let oi=()=>r0.forEach(Ye=>n0(Ye.key));C.signal.addEventListener("abort",oi);let{loaderResults:li,fetcherResults:si}=await ei(M.matches,we,Hn,r0,q);if(C.signal.aborted)return;C.signal.removeEventListener("abort",oi),se.delete(_),D.delete(_),r0.forEach(Ye=>D.delete(Ye.key));let ie=Pd([...li,...si]);if(ie){if(ie.idx>=Hn.length){let Ye=r0[ie.idx-Hn.length].key;te.add(Ye)}return Ut(q,ie.result)}let{loaderData:it,errors:Tt}=Cd(M,M.matches,Hn,li,void 0,r0,si,Ie);if(M.fetchers.has(_)){let Ye=T0($.data);M.fetchers.set(_,Ye)}ni(Se),M.navigation.state==="loading"&&Se>X?(ne(B,"Expected pending action"),H&&H.abort(),oe(M.navigation.location,{matches:we,loaderData:it,errors:Tt,fetchers:new Map(M.fetchers)})):(ue({errors:Tt,loaderData:Ed(M.loaderData,it,we,Tt),fetchers:new Map(M.fetchers)}),Pe=!1)}async function ro(_,x,E,R,v,d,w){let A=M.fetchers.get(_);t0(_,Hr(w,A?A.data:void 0),{flushSync:d});let C=new AbortController,S=Wn(e.history,E,C.signal);D.set(_,C);let L=Q,$=(await C0("loader",S,[R],v))[0];if(Mn($)&&($=await hv($,S.signal,!0)||$),D.get(_)===C&&D.delete(_),!S.signal.aborted){if(ae.has(_)){t0(_,T0(void 0));return}if(wn($))if(X>L){t0(_,T0(void 0));return}else{te.add(_),await Ut(S,$);return}if(Nt($)){on(_,x,$.error);return}ne(!Mn($),"Unhandled fetcher deferred data"),t0(_,T0($.data))}}async function Ut(_,x,E){let{submission:R,fetcherSubmission:v,replace:d}=E===void 0?{}:E;x.response.headers.has("X-Remix-Revalidate")&&(Pe=!0);let w=x.response.headers.get("Location");ne(w,"Expected a Location header on the redirect Response"),w=Ad(w,new URL(_.url),l);let A=Ra(M.location,w,{_isRedirect:!0});if(n){let F=!1;if(x.response.headers.has("X-Remix-Reload-Document"))F=!0;else if(xh.test(w)){const q=e.history.createURL(w);F=q.origin!==t.location.origin||Nn(q.pathname,l)==null}if(F){d?t.location.replace(w):t.location.assign(w);return}}H=null;let C=d===!0?De.Replace:De.Push,{formMethod:S,formAction:L,formEncType:V}=M.navigation;!R&&!v&&S&&L&&V&&(R=Rd(M.navigation));let $=R||v;if(mm.has(x.response.status)&&$&&Qt($.formMethod))await qe(C,A,{submission:Ce({},$,{formAction:w}),preventScrollReset:G});else{let F=Oo(A,R);await qe(C,A,{overrideNavigation:F,fetcherSubmission:v,preventScrollReset:G})}}async function C0(_,x,E,R){try{let v=await xm(h,_,x,E,R,i,a);return await Promise.all(v.map((d,w)=>{if(Tm(d)){let A=d.result;return{type:be.redirect,response:Cm(A,x,E[w].route.id,R,l,c.v7_relativeSplatPath)}}return Sm(d)}))}catch(v){return E.map(()=>({type:be.error,error:v}))}}async function ei(_,x,E,R,v){let[d,...w]=await Promise.all([E.length?C0("loader",v,E,x):[],...R.map(A=>{if(A.matches&&A.match&&A.controller){let C=Wn(e.history,A.path,A.controller.signal);return C0("loader",C,[A.match],A.matches).then(S=>S[0])}else return Promise.resolve({type:be.error,error:Pt(404,{pathname:A.path})})})]);return await Promise.all([Ld(_,E,d,d.map(()=>v.signal),!1,M.loaderData),Ld(_,R.map(A=>A.match),w,R.map(A=>A.controller?A.controller.signal:null),!0)]),{loaderResults:d,fetcherResults:w}}function jt(){Pe=!0,$e.push(...jn()),Qe.forEach((_,x)=>{D.has(x)&&(de.push(x),n0(x))})}function t0(_,x,E){E===void 0&&(E={}),M.fetchers.set(_,x),ue({fetchers:new Map(M.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function on(_,x,E,R){R===void 0&&(R={});let v=ua(M.matches,x);ln(_),ue({errors:{[v.route.id]:E},fetchers:new Map(M.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function E0(_){return c.v7_fetcherPersist&&(Ve.set(_,(Ve.get(_)||0)+1),ae.has(_)&&ae.delete(_)),M.fetchers.get(_)||gm}function ln(_){let x=M.fetchers.get(_);D.has(_)&&!(x&&x.state==="loading"&&se.has(_))&&n0(_),Qe.delete(_),se.delete(_),te.delete(_),ae.delete(_),M.fetchers.delete(_)}function sn(_){if(c.v7_fetcherPersist){let x=(Ve.get(_)||0)-1;x<=0?(Ve.delete(_),ae.add(_)):Ve.set(_,x)}else ln(_);ue({fetchers:new Map(M.fetchers)})}function n0(_){let x=D.get(_);ne(x,"Expected fetch controller: "+_),x.abort(),D.delete(_)}function h0(_){for(let x of _){let E=E0(x),R=T0(E.data);M.fetchers.set(x,R)}}function ti(){let _=[],x=!1;for(let E of te){let R=M.fetchers.get(E);ne(R,"Expected fetcher: "+E),R.state==="loading"&&(te.delete(E),_.push(E),x=!0)}return h0(_),x}function ni(_){let x=[];for(let[E,R]of se)if(R<_){let v=M.fetchers.get(E);ne(v,"Expected fetcher: "+E),v.state==="loading"&&(n0(E),se.delete(E),x.push(E))}return h0(x),x.length>0}function ao(_,x){let E=M.blockers.get(_)||Qn;return Be.get(_)!==x&&Be.set(_,x),E}function hn(_){M.blockers.delete(_),Be.delete(_)}function Un(_,x){let E=M.blockers.get(_)||Qn;ne(E.state==="unblocked"&&x.state==="blocked"||E.state==="blocked"&&x.state==="blocked"||E.state==="blocked"&&x.state==="proceeding"||E.state==="blocked"&&x.state==="unblocked"||E.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+x.state);let R=new Map(M.blockers);R.set(_,x),ue({blockers:R})}function ri(_){let{currentLocation:x,nextLocation:E,historyAction:R}=_;if(Be.size===0)return;Be.size>1&&xr(!1,"A router only supports one blocker at a time");let v=Array.from(Be.entries()),[d,w]=v[v.length-1],A=M.blockers.get(d);if(!(A&&A.state==="proceeding")&&w({currentLocation:x,nextLocation:E,historyAction:R}))return d}function jn(_){let x=[];return Ie.forEach((E,R)=>{(!_||_(R))&&(E.cancel(),x.push(R),Ie.delete(R))}),x}function Lr(_,x,E){if(m=_,b=x,g=E||null,!T&&M.navigation===Ro){T=!0;let R=c0(M.location,M.matches);R!=null&&ue({restoreScrollPosition:R})}return()=>{m=null,b=null,g=null}}function ai(_,x){return g&&g(_,x.map(R=>Qf(R,M.loaderData)))||_.key}function ii(_,x){if(m&&b){let E=ai(_,x);m[E]=b()}}function c0(_,x){if(m){let E=ai(_,x),R=m[E];if(typeof R=="number")return R}return null}function Rr(_){i={},s=Kl(_,a,void 0,i)}return U={get basename(){return l},get future(){return c},get state(){return M},get routes(){return o},get window(){return t},initialize:j,subscribe:Re,enableScrollRestoration:Lr,navigate:Bt,fetch:S0,revalidate:at,createHref:_=>e.history.createHref(_),encodeLocation:_=>e.history.encodeLocation(_),getFetcher:E0,deleteFetcher:sn,dispose:J,getBlocker:ao,deleteBlocker:hn,_internalFetchControllers:D,_internalActiveDeferreds:Ie,_internalSetRoutes:Rr},U}function Mm(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Xl(e,t,n,r,a,i,o,s){let l,h;if(o){l=[];for(let u of t)if(l.push(u),u.route.id===o){h=u;break}}else l=t,h=t[t.length-1];let c=wh(a||".",Mh(l,i),Nn(e.pathname,n)||e.pathname,s==="path");return a==null&&(c.search=e.search,c.hash=e.hash),(a==null||a===""||a===".")&&h&&h.route.index&&!Ah(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:G0([n,c.pathname])),Qa(c)}function wd(e,t,n,r){if(!r||!Mm(r))return{path:n};if(r.formMethod&&!Lm(r.formMethod))return{path:n,error:Pt(405,{method:r.formMethod})};let a=()=>({path:n,error:Pt(400,{type:"invalid-body"})}),i=r.formMethod||"get",o=e?i.toUpperCase():i.toLowerCase(),s=lv(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Qt(o))return a();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,g)=>{let[b,T]=g;return""+m+b+"="+T+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Qt(o))return a();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return a()}}}ne(typeof FormData=="function","FormData is not available in this environment");let l,h;if(r.formData)l=Jl(r.formData),h=r.formData;else if(r.body instanceof FormData)l=Jl(r.body),h=r.body;else if(r.body instanceof URLSearchParams)l=r.body,h=Sd(l);else if(r.body==null)l=new URLSearchParams,h=new FormData;else try{l=new URLSearchParams(r.body),h=Sd(l)}catch{return a()}let c={formMethod:o,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(Qt(c.formMethod))return{path:n,submission:c};let u=tn(n);return t&&u.search&&Ah(u.search)&&l.append("index",""),u.search="?"+l,{path:Qa(u),submission:c}}function wm(e,t){let n=e;if(t){let r=e.findIndex(a=>a.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function bd(e,t,n,r,a,i,o,s,l,h,c,u,p,m,g,b){let T=b?Nt(b[1])?b[1].error:b[1].data:void 0,y=e.createURL(t.location),f=e.createURL(a),z=b&&Nt(b[1])?b[0]:void 0,k=z?wm(n,z):n,O=b?b[1].statusCode:void 0,U=o&&O&&O>=400,M=k.filter((G,H)=>{let{route:ee}=G;if(ee.lazy)return!0;if(ee.loader==null)return!1;if(i)return typeof ee.loader!="function"||ee.loader.hydrate?!0:t.loaderData[ee.id]===void 0&&(!t.errors||t.errors[ee.id]===void 0);if(bm(t.loaderData,t.matches[H],G)||l.some(Ae=>Ae===G.route.id))return!0;let Z=t.matches[H],Y=G;return _d(G,Ce({currentUrl:y,currentParams:Z.params,nextUrl:f,nextParams:Y.params},r,{actionResult:T,unstable_actionStatus:O,defaultShouldRevalidate:U?!1:s||y.pathname+y.search===f.pathname+f.search||y.search!==f.search||ov(Z,Y)}))}),B=[];return u.forEach((G,H)=>{if(i||!n.some(Pe=>Pe.route.id===G.routeId)||c.has(H))return;let ee=zn(m,G.path,g);if(!ee){B.push({key:H,routeId:G.routeId,path:G.path,matches:null,match:null,controller:null});return}let Z=t.fetchers.get(H),Y=Zl(ee,G.path),Ae=!1;p.has(H)?Ae=!1:h.includes(H)?Ae=!0:Z&&Z.state!=="idle"&&Z.data===void 0?Ae=s:Ae=_d(Y,Ce({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:T,unstable_actionStatus:O,defaultShouldRevalidate:U?!1:s})),Ae&&B.push({key:H,routeId:G.routeId,path:G.path,matches:ee,match:Y,controller:new AbortController})}),[M,B]}function bm(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function ov(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function _d(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function xd(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];ne(a,"No route found in manifest");let i={};for(let o in r){let l=a[o]!==void 0&&o!=="hasErrorBoundary";xr(!l,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Wf.has(o)&&(i[o]=r[o])}Object.assign(a,i),Object.assign(a,Ce({},t(a),{lazy:void 0}))}function _m(e){return Promise.all(e.matches.map(t=>t.resolve()))}async function xm(e,t,n,r,a,i,o,s){let l=r.reduce((u,p)=>u.add(p.route.id),new Set),h=new Set,c=await e({matches:a.map(u=>{let p=l.has(u.route.id);return Ce({},u,{shouldLoad:p,resolve:g=>(h.add(u.route.id),p?Am(t,n,u,i,o,g,s):Promise.resolve({type:be.data,result:void 0}))})}),request:n,params:a[0].params,context:s});return a.forEach(u=>ne(h.has(u.route.id),'`match.resolve()` was not called for route id "'+u.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),c.filter((u,p)=>l.has(a[p].route.id))}async function Am(e,t,n,r,a,i,o){let s,l,h=c=>{let u,p=new Promise((b,T)=>u=T);l=()=>u(),t.signal.addEventListener("abort",l);let m=b=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):c({request:t,params:n.params,context:o},...b!==void 0?[b]:[]),g;return i?g=i(b=>m(b)):g=(async()=>{try{return{type:"data",result:await m()}}catch(b){return{type:"error",result:b}}})(),Promise.race([g,p])};try{let c=n.route[e];if(n.route.lazy)if(c){let u,[p]=await Promise.all([h(c).catch(m=>{u=m}),xd(n.route,a,r)]);if(u!==void 0)throw u;s=p}else if(await xd(n.route,a,r),c=n.route[e],c)s=await h(c);else if(e==="action"){let u=new URL(t.url),p=u.pathname+u.search;throw Pt(405,{method:t.method,pathname:p,routeId:n.route.id})}else return{type:be.data,result:void 0};else if(c)s=await h(c);else{let u=new URL(t.url),p=u.pathname+u.search;throw Pt(404,{pathname:p})}ne(s.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:be.error,result:c}}finally{l&&t.signal.removeEventListener("abort",l)}return s}async function Sm(e){let{result:t,type:n,status:r}=e;if(sv(t)){let o;try{let s=t.headers.get("Content-Type");s&&/\bapplication\/json\b/.test(s)?t.body==null?o=null:o=await t.json():o=await t.text()}catch(s){return{type:be.error,error:s}}return n===be.error?{type:be.error,error:new bh(t.status,t.statusText,o),statusCode:t.status,headers:t.headers}:{type:be.data,data:o,statusCode:t.status,headers:t.headers}}if(n===be.error)return{type:be.error,error:t,statusCode:_h(t)?t.status:r};if(Pm(t)){var a,i;return{type:be.deferred,deferredData:t,statusCode:(a=t.init)==null?void 0:a.status,headers:((i=t.init)==null?void 0:i.headers)&&new Headers(t.init.headers)}}return{type:be.data,data:t,statusCode:r}}function Cm(e,t,n,r,a,i){let o=e.headers.get("Location");if(ne(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!xh.test(o)){let s=r.slice(0,r.findIndex(l=>l.route.id===n)+1);o=Xl(new URL(t.url),s,a,!0,o,i),e.headers.set("Location",o)}return e}function Ad(e,t,n){if(xh.test(e)){let r=e,a=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=Nn(a.pathname,n)!=null;if(a.origin===t.origin&&i)return a.pathname+a.search+a.hash}return e}function Wn(e,t,n,r){let a=e.createURL(lv(t)).toString(),i={signal:n};if(r&&Qt(r.formMethod)){let{formMethod:o,formEncType:s}=r;i.method=o.toUpperCase(),s==="application/json"?(i.headers=new Headers({"Content-Type":s}),i.body=JSON.stringify(r.json)):s==="text/plain"?i.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?i.body=Jl(r.formData):i.body=r.formData}return new Request(a,i)}function Jl(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Sd(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Em(e,t,n,r,a,i){let o={},s=null,l,h=!1,c={},u=r&&Nt(r[1])?r[1].error:void 0;return n.forEach((p,m)=>{let g=t[m].route.id;if(ne(!wn(p),"Cannot handle redirect results in processLoaderData"),Nt(p)){let b=p.error;u!==void 0&&(b=u,u=void 0),s=s||{};{let T=ua(e,g);s[T.route.id]==null&&(s[T.route.id]=b)}o[g]=void 0,h||(h=!0,l=_h(p.error)?p.error.status:500),p.headers&&(c[g]=p.headers)}else Mn(p)?(a.set(g,p.deferredData),o[g]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!h&&(l=p.statusCode),p.headers&&(c[g]=p.headers)):(o[g]=p.data,p.statusCode&&p.statusCode!==200&&!h&&(l=p.statusCode),p.headers&&(c[g]=p.headers))}),u!==void 0&&r&&(s={[r[0]]:u},o[r[0]]=void 0),{loaderData:o,errors:s,statusCode:l||200,loaderHeaders:c}}function Cd(e,t,n,r,a,i,o,s){let{loaderData:l,errors:h}=Em(t,n,r,a,s);for(let c=0;c<i.length;c++){let{key:u,match:p,controller:m}=i[c];ne(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let g=o[c];if(!(m&&m.signal.aborted))if(Nt(g)){let b=ua(e.matches,p?.route.id);h&&h[b.route.id]||(h=Ce({},h,{[b.route.id]:g.error})),e.fetchers.delete(u)}else if(wn(g))ne(!1,"Unhandled fetcher revalidation redirect");else if(Mn(g))ne(!1,"Unhandled fetcher deferred data");else{let b=T0(g.data);e.fetchers.set(u,b)}}return{loaderData:l,errors:h}}function Ed(e,t,n,r){let a=Ce({},t);for(let i of n){let o=i.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(a[o]=t[o]):e[o]!==void 0&&i.route.loader&&(a[o]=e[o]),r&&r.hasOwnProperty(o))break}return a}function kd(e){return e?Nt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function ua(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Td(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Pt(e,t){let{pathname:n,routeId:r,method:a,type:i}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",a&&n&&r?s="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",a&&n&&r?s="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new bh(e||500,o,new Error(s),!0)}function Pd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(wn(n))return{result:n,idx:t}}}function lv(e){let t=typeof e=="string"?tn(e):e;return Qa(Ce({},t,{hash:""}))}function km(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Tm(e){return sv(e.result)&&fm.has(e.result.status)}function Mn(e){return e.type===be.deferred}function Nt(e){return e.type===be.error}function wn(e){return(e&&e.type)===be.redirect}function Pm(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function sv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Lm(e){return vm.has(e.toLowerCase())}function Qt(e){return um.has(e.toLowerCase())}async function Ld(e,t,n,r,a,i){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(!l)continue;let h=e.find(u=>u.route.id===l.route.id),c=h!=null&&!ov(h,l)&&(i&&i[l.route.id])!==void 0;if(Mn(s)&&(a||c)){let u=r[o];ne(u,"Expected an AbortSignal for revalidating fetcher deferred result"),await hv(s,u,a).then(p=>{p&&(n[o]=p||n[o])})}}}async function hv(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:be.data,data:e.deferredData.unwrappedData}}catch(a){return{type:be.error,error:a}}return{type:be.data,data:e.deferredData.data}}}function Ah(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Zl(e,t){let n=typeof t=="string"?tn(t).search:t.search;if(e[e.length-1].route.index&&Ah(n||""))return e[e.length-1];let r=rv(e);return r[r.length-1]}function Rd(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:i,json:o}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Oo(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Rm(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Hr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Om(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function T0(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Nm(e,t){try{let n=e.sessionStorage.getItem(iv);if(n){let r=JSON.parse(n);for(let[a,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(a,new Set(i||[]))}}catch{}}function Im(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(iv,JSON.stringify(n))}catch(r){xr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ar(){return Ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ar.apply(this,arguments)}const K1=P.createContext(null),cv=P.createContext(null),Ya=P.createContext(null),Sh=P.createContext(null),nn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),dv=P.createContext(null);function Ka(){return P.useContext(Sh)!=null}function Xa(){return Ka()||ne(!1),P.useContext(Sh).location}function uv(e){P.useContext(Ya).static||P.useLayoutEffect(e)}function Ch(){let{isDataRoute:e}=P.useContext(nn);return e?Xm():Dm()}function Dm(){Ka()||ne(!1);let e=P.useContext(K1),{basename:t,future:n,navigator:r}=P.useContext(Ya),{matches:a}=P.useContext(nn),{pathname:i}=Xa(),o=JSON.stringify(Mh(a,n.v7_relativeSplatPath)),s=P.useRef(!1);return uv(()=>{s.current=!0}),P.useCallback(function(h,c){if(c===void 0&&(c={}),!s.current)return;if(typeof h=="number"){r.go(h);return}let u=wh(h,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:G0([t,u.pathname])),(c.replace?r.replace:r.push)(u,c.state,c)},[t,r,o,i,e])}const Fm=P.createContext(null);function $m(e){let t=P.useContext(nn).outlet;return t&&P.createElement(Fm.Provider,{value:e},t)}function Bm(e,t,n,r){Ka()||ne(!1);let{navigator:a}=P.useContext(Ya),{matches:i}=P.useContext(nn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let h=Xa(),c;c=h;let u=c.pathname||"/",p=u;if(l!=="/"){let b=l.replace(/^\//,"").split("/");p="/"+u.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=zn(e,{pathname:p});return Wm(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:G0([l,a.encodeLocation?a.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:G0([l,a.encodeLocation?a.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),i,n,r)}function Um(){let e=Qm(),t=_h(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:a},n):null,null)}const jm=P.createElement(Um,null);class Hm extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(nn.Provider,{value:this.props.routeContext},P.createElement(dv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vm(e){let{routeContext:t,match:n,children:r}=e,a=P.useContext(K1);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(nn.Provider,{value:t},r)}function Wm(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let c=o.findIndex(u=>u.route.id&&s?.[u.route.id]!==void 0);c>=0||ne(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let u=o[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(h=c),u.route.id){let{loaderData:p,errors:m}=n,g=u.route.loader&&p[u.route.id]===void 0&&(!m||m[u.route.id]===void 0);if(u.route.lazy||g){l=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((c,u,p)=>{let m,g=!1,b=null,T=null;n&&(m=s&&u.route.id?s[u.route.id]:void 0,b=u.route.errorElement||jm,l&&(h<0&&p===0?(g=!0,T=null):h===p&&(g=!0,T=u.route.hydrateFallbackElement||null)));let y=t.concat(o.slice(0,p+1)),f=()=>{let z;return m?z=b:g?z=T:u.route.Component?z=P.createElement(u.route.Component,null):u.route.element?z=u.route.element:z=c,P.createElement(Vm,{match:u,routeContext:{outlet:c,matches:y,isDataRoute:n!=null},children:z})};return n&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?P.createElement(Hm,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:f(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):f()},null)}var Eh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Eh||{}),Oa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Oa||{});function pv(e){let t=P.useContext(K1);return t||ne(!1),t}function vv(e){let t=P.useContext(cv);return t||ne(!1),t}function Gm(e){let t=P.useContext(nn);return t||ne(!1),t}function fv(e){let t=Gm(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function Qm(){var e;let t=P.useContext(dv),n=vv(Oa.UseRouteError),r=fv(Oa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}let Ym=0;function Km(e){let{router:t,basename:n}=pv(Eh.UseBlocker),r=vv(Oa.UseBlocker),[a,i]=P.useState(""),o=P.useCallback(s=>{if(typeof e!="function")return!!e;if(n==="/")return e(s);let{currentLocation:l,nextLocation:h,historyAction:c}=s;return e({currentLocation:Ar({},l,{pathname:Nn(l.pathname,n)||l.pathname}),nextLocation:Ar({},h,{pathname:Nn(h.pathname,n)||h.pathname}),historyAction:c})},[n,e]);return P.useEffect(()=>{let s=String(++Ym);return i(s),()=>t.deleteBlocker(s)},[t]),P.useEffect(()=>{a!==""&&t.getBlocker(a,o)},[t,a,o]),a&&r.blockers.has(a)?r.blockers.get(a):Qn}function Xm(){let{router:e}=pv(Eh.UseNavigateStable),t=fv(Oa.UseNavigateStable),n=P.useRef(!1);return uv(()=>{n.current=!0}),P.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ar({fromRouteId:t},i)))},[e,t])}function Jm(e){let{to:t,replace:n,state:r,relative:a}=e;Ka()||ne(!1);let{future:i,static:o}=P.useContext(Ya),{matches:s}=P.useContext(nn),{pathname:l}=Xa(),h=Ch(),c=wh(t,Mh(s,i.v7_relativeSplatPath),l,a==="path"),u=JSON.stringify(c);return P.useEffect(()=>h(JSON.parse(u),{replace:n,state:r,relative:a}),[h,u,a,n,r]),null}function Zm(e){return $m(e.context)}function qm(e){let{basename:t="/",children:n=null,location:r,navigationType:a=De.Pop,navigator:i,static:o=!1,future:s}=e;Ka()&&ne(!1);let l=t.replace(/^\/*/,"/"),h=P.useMemo(()=>({basename:l,navigator:i,static:o,future:Ar({v7_relativeSplatPath:!1},s)}),[l,s,i,o]);typeof r=="string"&&(r=tn(r));let{pathname:c="/",search:u="",hash:p="",state:m=null,key:g="default"}=r,b=P.useMemo(()=>{let T=Nn(c,l);return T==null?null:{location:{pathname:T,search:u,hash:p,state:m,key:g},navigationType:a}},[l,c,u,p,m,g,a]);return b==null?null:P.createElement(Ya.Provider,{value:h},P.createElement(Sh.Provider,{children:n,value:b}))}new Promise(()=>{});function e6(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:P.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:P.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:P.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w1(){return w1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w1.apply(this,arguments)}const t6="6";try{window.__reactRouterVersion=t6}catch{}function n6(e,t){return zm({basename:t?.basename,future:w1({},t?.future,{v7_prependBasename:!0}),history:jf({window:t?.window}),hydrationData:t?.hydrationData||r6(),routes:e,mapRouteProperties:e6,unstable_dataStrategy:t?.unstable_dataStrategy,window:t?.window}).initialize()}function r6(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=w1({},t,{errors:a6(t.errors)})),t}function a6(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new bh(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let i=window[a.__subType];if(typeof i=="function")try{let o=new i(a.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let i=new Error(a.message);i.stack="",n[r]=i}}else n[r]=a;return n}const i6=P.createContext({isTransitioning:!1}),o6=P.createContext(new Map),l6="startTransition",Od=J0[l6],s6="flushSync",Nd=Uf[s6];function h6(e){Od?Od(e):e()}function Vr(e){Nd?Nd(e):e()}class c6{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function d6(e){let{fallbackElement:t,router:n,future:r}=e,[a,i]=P.useState(n.state),[o,s]=P.useState(),[l,h]=P.useState({isTransitioning:!1}),[c,u]=P.useState(),[p,m]=P.useState(),[g,b]=P.useState(),T=P.useRef(new Map),{v7_startTransition:y}=r||{},f=P.useCallback(M=>{y?h6(M):M()},[y]),z=P.useCallback((M,B)=>{let{deletedFetchers:G,unstable_flushSync:H,unstable_viewTransitionOpts:ee}=B;G.forEach(Y=>T.current.delete(Y)),M.fetchers.forEach((Y,Ae)=>{Y.data!==void 0&&T.current.set(Ae,Y.data)});let Z=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!ee||Z){H?Vr(()=>i(M)):f(()=>i(M));return}if(H){Vr(()=>{p&&(c&&c.resolve(),p.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})});let Y=n.window.document.startViewTransition(()=>{Vr(()=>i(M))});Y.finished.finally(()=>{Vr(()=>{u(void 0),m(void 0),s(void 0),h({isTransitioning:!1})})}),Vr(()=>m(Y));return}p?(c&&c.resolve(),p.skipTransition(),b({state:M,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation})):(s(M),h({isTransitioning:!0,flushSync:!1,currentLocation:ee.currentLocation,nextLocation:ee.nextLocation}))},[n.window,p,c,T,f]);P.useLayoutEffect(()=>n.subscribe(z),[n,z]),P.useEffect(()=>{l.isTransitioning&&!l.flushSync&&u(new c6)},[l]),P.useEffect(()=>{if(c&&o&&n.window){let M=o,B=c.promise,G=n.window.document.startViewTransition(async()=>{f(()=>i(M)),await B});G.finished.finally(()=>{u(void 0),m(void 0),s(void 0),h({isTransitioning:!1})}),m(G)}},[f,o,c,n.window]),P.useEffect(()=>{c&&o&&a.location.key===o.location.key&&c.resolve()},[c,p,a.location,o]),P.useEffect(()=>{!l.isTransitioning&&g&&(s(g.state),h({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),b(void 0))},[l.isTransitioning,g]),P.useEffect(()=>{},[]);let k=P.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:M=>n.navigate(M),push:(M,B,G)=>n.navigate(M,{state:B,preventScrollReset:G?.preventScrollReset}),replace:(M,B,G)=>n.navigate(M,{replace:!0,state:B,preventScrollReset:G?.preventScrollReset})}),[n]),O=n.basename||"/",U=P.useMemo(()=>({router:n,navigator:k,static:!1,basename:O}),[n,k,O]);return P.createElement(P.Fragment,null,P.createElement(K1.Provider,{value:U},P.createElement(cv.Provider,{value:a},P.createElement(o6.Provider,{value:T.current},P.createElement(i6.Provider,{value:l},P.createElement(qm,{basename:O,location:a.location,navigationType:a.historyAction,navigator:k,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?P.createElement(u6,{routes:n.routes,future:n.future,state:a}):t))))),null)}function u6(e){let{routes:t,future:n,state:r}=e;return Bm(t,void 0,r,n)}var Id;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Id||(Id={}));var Dd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dd||(Dd={}));function Fd(e,t,n){let r;return Array.isArray(t)?n=t:r=t,{path:e,module:r,children:n}}var mv={exports:{}},X1={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p6=P,v6=Symbol.for("react.element"),f6=Symbol.for("react.fragment"),m6=Object.prototype.hasOwnProperty,g6=p6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y6={key:!0,ref:!0,__self:!0,__source:!0};function gv(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)m6.call(t,r)&&!y6.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:v6,type:e,key:i,ref:o,props:a,_owner:g6.current}}X1.Fragment=f6;X1.jsx=gv;X1.jsxs=gv;mv.exports=X1;var ge=mv.exports;const z6=Ua(ge);/*! js-cookie v3.0.5 | MIT */function Si(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var M6={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function ql(e,t){function n(a,i,o){if(!(typeof document>"u")){o=Si({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),a=encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var l in o)o[l]&&(s+="; "+l,o[l]!==!0&&(s+="="+o[l].split(";")[0]));return document.cookie=a+"="+e.write(i,a)+s}}function r(a){if(!(typeof document>"u"||arguments.length&&!a)){for(var i=document.cookie?document.cookie.split("; "):[],o={},s=0;s<i.length;s++){var l=i[s].split("="),h=l.slice(1).join("=");try{var c=decodeURIComponent(l[0]);if(o[c]=e.read(h,c),a===c)break}catch{}}return a?o[a]:o}}return Object.create({set:n,get:r,remove:function(a,i){n(a,"",Si({},i,{expires:-1}))},withAttributes:function(a){return ql(this.converter,Si({},this.attributes,a))},withConverter:function(a){return ql(Si({},this.converter,a),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var w6=ql(M6,{path:"/"});function b6({pathname:e}){return e.length>1&&e.endsWith("/")?e.slice(0,-1):e}const _6=w6.withAttributes({path:b6(new URL(document.baseURI))});var yv=_6;const x6="X-CSRF-Token",A6="csrfToken",S6="XSRF-TOKEN";function zv(e){if(e){const t=e.content;if(t&&t.toLowerCase()!=="undefined")return t}}function C6(e){const t=e.head.querySelector('meta[name="_csrf_header"]');return zv(t)}function E6(e){const t=e.head.querySelector('meta[name="_csrf"]');return zv(t)}function k6(e){const t=C6(e);let n=yv.get(S6);(!n||n.length===0)&&(n=E6(e));const r={};return n&&t&&(r._csrf=n,r._csrf_header=t),r}function Mv(e){const t={},n=k6(e);return n._csrf&&n._csrf_header?t[n._csrf_header]=n._csrf:t[x6]=yv.get(A6)??"",t}var No,Ne;(function(e){e.CONNECTED="connected",e.LOADING="loading",e.RECONNECTING="reconnecting",e.CONNECTION_LOST="connection-lost"})(Ne||(Ne={}));class T6{constructor(t){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=t,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(n=>{var r;(r=n.active)===null||r===void 0||r.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(t){this.stateChangeListeners.add(t)}removeStateChangeListener(t){this.stateChangeListeners.delete(t)}loadingStarted(){this.state=Ne.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(Ne.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(Ne.CONNECTION_LOST)}decreaseLoadingCount(t){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=t))}get state(){return this.connectionState}set state(t){if(t!==this.connectionState){const n=this.connectionState;this.connectionState=t,this.loadingCount=0;for(const r of this.stateChangeListeners)r(n,this.connectionState)}}get online(){return this.connectionState===Ne.CONNECTED||this.connectionState===Ne.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(t){typeof t.data=="object"&&t.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(t.data.result===!0&&(this.state=Ne.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const P6=e=>!!(e==="localhost"||e==="[::1]"||/^127\.\d+\.\d+\.\d+$/u.exec(e)),Ci=window;if(!(!((No=Ci.Vaadin)===null||No===void 0)&&No.connectionState)){let e;P6(window.location.hostname)?e=!0:e=navigator.onLine,Ci.Vaadin||(Ci.Vaadin={}),Ci.Vaadin.connectionState=new T6(e?Ne.CONNECTED:Ne.CONNECTION_LOST)}function St(e,t,n,r){var a=arguments.length,i=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yi=globalThis,kh=Yi.ShadowRoot&&(Yi.ShadyCSS===void 0||Yi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Th=Symbol(),$d=new WeakMap;let Ph=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Th)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(kh&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=$d.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&$d.set(n,t))}return t}toString(){return this.cssText}};const b1=e=>new Ph(typeof e=="string"?e:e+"",void 0,Th),K=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,a,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new Ph(n,e,Th)},wv=(e,t)=>{if(kh)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),a=Yi.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=n.cssText,e.appendChild(r)}},Bd=kh?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return b1(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:L6,defineProperty:R6,getOwnPropertyDescriptor:O6,getOwnPropertyNames:N6,getOwnPropertySymbols:I6,getPrototypeOf:D6}=Object,J1=globalThis,Ud=J1.trustedTypes,F6=Ud?Ud.emptyScript:"",$6=J1.reactiveElementPolyfillSupport,pa=(e,t)=>e,_1={toAttribute(e,t){switch(t){case Boolean:e=e?F6:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Lh=(e,t)=>!L6(e,t),jd={attribute:!0,type:String,converter:_1,reflect:!1,hasChanged:Lh};Symbol.metadata??=Symbol("metadata"),J1.litPropertyMetadata??=new WeakMap;let Yn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=jd){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),a=this.getPropertyDescriptor(t,r,n);a!==void 0&&R6(this.prototype,t,a)}}static getPropertyDescriptor(t,n,r){const{get:a,set:i}=O6(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return a?.call(this)},set(o){const s=a?.call(this);i.call(this,o),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??jd}static _$Ei(){if(this.hasOwnProperty(pa("elementProperties")))return;const t=D6(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(pa("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pa("properties"))){const n=this.properties,r=[...N6(n),...I6(n)];for(const a of r)this.createProperty(a,n[a])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,a]of n)this.elementProperties.set(r,a)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const a=this._$Eu(n,r);a!==void 0&&this._$Eh.set(a,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const a of r)n.unshift(Bd(a))}else t!==void 0&&n.push(Bd(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wv(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,r);if(a!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:_1).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,a=r._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const i=r.getPropertyOptions(a),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:_1;this._$Em=a,this[a]=o.fromAttribute(n,i.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Lh)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,i]of r)i.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],i)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}};Yn.elementStyles=[],Yn.shadowRootOptions={mode:"open"},Yn[pa("elementProperties")]=new Map,Yn[pa("finalized")]=new Map,$6?.({ReactiveElement:Yn}),(J1.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rh=globalThis,x1=Rh.trustedTypes,Hd=x1?x1.createPolicy("lit-html",{createHTML:e=>e}):void 0,bv="$lit$",N0=`lit$${Math.random().toFixed(9).slice(2)}$`,_v="?"+N0,B6=`<${_v}>`,In=document,Na=()=>In.createComment(""),Ia=e=>e===null||typeof e!="object"&&typeof e!="function",xv=Array.isArray,U6=e=>xv(e)||typeof e?.[Symbol.iterator]=="function",Io=`[ 	
\f\r]`,Wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vd=/-->/g,Wd=/>/g,cn=RegExp(`>|${Io}(?:([^\\s"'>=/]+)(${Io}*=${Io}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gd=/'/g,Qd=/"/g,Av=/^(?:script|style|textarea|title)$/i,Sv=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),es=Sv(1),Cv=Sv(2),X0=Symbol.for("lit-noChange"),xe=Symbol.for("lit-nothing"),Yd=new WeakMap,bn=In.createTreeWalker(In,129);function Ev(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hd!==void 0?Hd.createHTML(t):t}const j6=(e,t)=>{const n=e.length-1,r=[];let a,i=t===2?"<svg>":"",o=Wr;for(let s=0;s<n;s++){const l=e[s];let h,c,u=-1,p=0;for(;p<l.length&&(o.lastIndex=p,c=o.exec(l),c!==null);)p=o.lastIndex,o===Wr?c[1]==="!--"?o=Vd:c[1]!==void 0?o=Wd:c[2]!==void 0?(Av.test(c[2])&&(a=RegExp("</"+c[2],"g")),o=cn):c[3]!==void 0&&(o=cn):o===cn?c[0]===">"?(o=a??Wr,u=-1):c[1]===void 0?u=-2:(u=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?cn:c[3]==='"'?Qd:Gd):o===Qd||o===Gd?o=cn:o===Vd||o===Wd?o=Wr:(o=cn,a=void 0);const m=o===cn&&e[s+1].startsWith("/>")?" ":"";i+=o===Wr?l+B6:u>=0?(r.push(h),l.slice(0,u)+bv+l.slice(u)+N0+m):l+N0+(u===-2?s:m)}return[Ev(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class Da{constructor({strings:t,_$litType$:n},r){let a;this.parts=[];let i=0,o=0;const s=t.length-1,l=this.parts,[h,c]=j6(t,n);if(this.el=Da.createElement(h,r),bn.currentNode=this.el.content,n===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(a=bn.nextNode())!==null&&l.length<s;){if(a.nodeType===1){if(a.hasAttributes())for(const u of a.getAttributeNames())if(u.endsWith(bv)){const p=c[o++],m=a.getAttribute(u).split(N0),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:g[2],strings:m,ctor:g[1]==="."?V6:g[1]==="?"?W6:g[1]==="@"?G6:Z1}),a.removeAttribute(u)}else u.startsWith(N0)&&(l.push({type:6,index:i}),a.removeAttribute(u));if(Av.test(a.tagName)){const u=a.textContent.split(N0),p=u.length-1;if(p>0){a.textContent=x1?x1.emptyScript:"";for(let m=0;m<p;m++)a.append(u[m],Na()),bn.nextNode(),l.push({type:2,index:++i});a.append(u[p],Na())}}}else if(a.nodeType===8)if(a.data===_v)l.push({type:2,index:i});else{let u=-1;for(;(u=a.data.indexOf(N0,u+1))!==-1;)l.push({type:7,index:i}),u+=N0.length-1}i++}}static createElement(t,n){const r=In.createElement("template");return r.innerHTML=t,r}}function Sr(e,t,n=e,r){if(t===X0)return t;let a=r!==void 0?n._$Co?.[r]:n._$Cl;const i=Ia(t)?void 0:t._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(e),a._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=a:n._$Cl=a),a!==void 0&&(t=Sr(e,a._$AS(e,t.values),a,r)),t}let H6=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,a=(t?.creationScope??In).importNode(n,!0);bn.currentNode=a;let i=bn.nextNode(),o=0,s=0,l=r[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new Oh(i,i.nextSibling,this,t):l.type===1?h=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(h=new Q6(i,this,t)),this._$AV.push(h),l=r[++s]}o!==l?.index&&(i=bn.nextNode(),o++)}return bn.currentNode=In,a}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},Oh=class kv{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,a){this.type=2,this._$AH=xe,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Sr(this,t,n),Ia(t)?t===xe||t==null||t===""?(this._$AH!==xe&&this._$AR(),this._$AH=xe):t!==this._$AH&&t!==X0&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):U6(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==xe&&Ia(this._$AH)?this._$AA.nextSibling.data=t:this.T(In.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,a=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Da.createElement(Ev(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===a)this._$AH.p(n);else{const i=new H6(a,this),o=i.u(this.options);i.p(n),this.T(o),this._$AH=i}}_$AC(t){let n=Yd.get(t.strings);return n===void 0&&Yd.set(t.strings,n=new Da(t)),n}k(t){xv(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,a=0;for(const i of t)a===n.length?n.push(r=new kv(this.S(Na()),this.S(Na()),this,this.options)):r=n[a],r._$AI(i),a++;a<n.length&&(this._$AR(r&&r._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Z1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,a,i){this.type=1,this._$AH=xe,this._$AN=void 0,this.element=t,this.name=n,this._$AM=a,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=xe}_$AI(t,n=this,r,a){const i=this.strings;let o=!1;if(i===void 0)t=Sr(this,t,n,0),o=!Ia(t)||t!==this._$AH&&t!==X0,o&&(this._$AH=t);else{const s=t;let l,h;for(t=i[0],l=0;l<i.length-1;l++)h=Sr(this,s[r+l],n,l),h===X0&&(h=this._$AH[l]),o||=!Ia(h)||h!==this._$AH[l],h===xe?t=xe:t!==xe&&(t+=(h??"")+i[l+1]),this._$AH[l]=h}o&&!a&&this.j(t)}j(t){t===xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},V6=class extends Z1{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===xe?void 0:t}};class W6 extends Z1{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==xe)}}let G6=class extends Z1{constructor(t,n,r,a,i){super(t,n,r,a,i),this.type=5}_$AI(t,n=this){if((t=Sr(this,t,n,0)??xe)===X0)return;const r=this._$AH,a=t===xe&&r!==xe||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==xe&&(r===xe||a);a&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}};class Q6{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Sr(this,t)}}const Y6=Rh.litHtmlPolyfillSupport;Y6?.(Da,Oh),(Rh.litHtmlVersions??=[]).push("3.1.4");const Nh=(e,t,n)=>{const r=n?.renderBefore??t;let a=r._$litPart$;if(a===void 0){const i=n?.renderBefore??null;r._$litPart$=a=new Oh(t.insertBefore(Na(),i),i,void 0,n??{})}return a._$AI(e),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Cn=class extends Yn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nh(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X0}};Cn._$litElement$=!0,Cn.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Cn});const K6=globalThis.litElementPolyfillSupport;K6?.({LitElement:Cn});(globalThis.litElementVersions??=[]).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X6={attribute:!0,type:String,converter:_1,reflect:!1,hasChanged:Lh},J6=(e=X6,t,n)=>{const{kind:r,metadata:a}=n;let i=globalThis.litPropertyMetadata.get(a);if(i===void 0&&globalThis.litPropertyMetadata.set(a,i=new Map),i.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(o,l,e)},init(s){return s!==void 0&&this.P(o,void 0,e),s}}}if(r==="setter"){const{name:o}=n;return function(s){const l=this[o];t.call(this,s),this.requestUpdate(o,l,e)}}throw Error("Unsupported decorator location: "+r)};function Ct(e){return(t,n)=>typeof n=="object"?J6(e,t,n):((r,a,i)=>{const o=a.hasOwnProperty(i);return a.constructor.createProperty(i,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(a,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tv={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pv=e=>(...t)=>({_$litDirective$:e,values:t});let Lv=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z6=Pv(class extends Lv{constructor(e){if(super(e),e.type!==Tv.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const a=!!t[r];a===this.st.has(r)||this.nt?.has(r)||(a?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return X0}}),Do="css-loading-indicator";var Vt;(function(e){e.IDLE="",e.FIRST="first",e.SECOND="second",e.THIRD="third"})(Vt||(Vt={}));class He extends Cn{static create(){var t,n;const r=window;return!((t=r.Vaadin)===null||t===void 0)&&t.connectionIndicator||(r.Vaadin||(r.Vaadin={}),r.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(r.Vaadin.connectionIndicator)),(n=r.Vaadin)===null||n===void 0?void 0:n.connectionIndicator}constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=Vt.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=Ne.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}render(){return es`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${Z6({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var t;super.connectedCallback();const n=window;!((t=n.Vaadin)===null||t===void 0)&&t.connectionState&&(this.connectionStateStore=n.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(t){t!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=t,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var t;const n=(t=this.connectionStateStore)===null||t===void 0?void 0:t.state;return this.offline=n===Ne.CONNECTION_LOST,this.reconnecting=n===Ne.RECONNECTING,this.updateLoading(n===Ne.LOADING),this.loading?!1:n!==this.lastMessageState?(this.lastMessageState=n,!0):!1}updateLoading(t){this.loading=t,this.loadingBarState=Vt.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,t,()=>{this.loadingBarState=Vt.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,t,()=>{this.loadingBarState=Vt.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,t,()=>{this.loadingBarState=Vt.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(Do)){const t=document.createElement("style");t.id=Do,t.textContent=this.getDefaultStyle(),document.head.appendChild(t)}}else{const t=document.getElementById(Do);t&&document.head.removeChild(t)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case Vt.IDLE:return"display: none";case Vt.FIRST:case Vt.SECOND:case Vt.THIRD:return"display: block";default:return""}}timeoutFor(t,n,r,a){return t!==0&&window.clearTimeout(t),n?window.setTimeout(r,a):0}static get instance(){return He.create()}}St([Ct({type:Number})],He.prototype,"firstDelay",void 0);St([Ct({type:Number})],He.prototype,"secondDelay",void 0);St([Ct({type:Number})],He.prototype,"thirdDelay",void 0);St([Ct({type:Number})],He.prototype,"expandedDuration",void 0);St([Ct({type:String})],He.prototype,"onlineText",void 0);St([Ct({type:String})],He.prototype,"offlineText",void 0);St([Ct({type:String})],He.prototype,"reconnectingText",void 0);St([Ct({type:Boolean,reflect:!0})],He.prototype,"offline",void 0);St([Ct({type:Boolean,reflect:!0})],He.prototype,"reconnecting",void 0);St([Ct({type:Boolean,reflect:!0})],He.prototype,"expanded",void 0);St([Ct({type:Boolean,reflect:!0})],He.prototype,"loading",void 0);St([Ct({type:String})],He.prototype,"loadingBarState",void 0);St([Ct({type:Boolean})],He.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",He);He.instance;var Kd;const A1=window;A1.Vaadin||(A1.Vaadin={});(Kd=A1.Vaadin).registrations||(Kd.registrations=[]);A1.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class Ih extends Error{detail;type;constructor(t,n,r){super(t),this.type=n,this.detail=r}}class q6 extends Ih{validationErrorData;validationErrorMessage;constructor(t,n,r){super(t,r,n),this.validationErrorMessage=t,this.detail=null,this.validationErrorData=n}}class Dh extends Ih{response;constructor(t,n){super(t,"EndpointResponseError",n),this.response=n}get status(){return this.response.status}}class eg extends Dh{constructor(t,n){super(t,n),this.type="UnauthorizedResponseError"}}class tg extends Dh{constructor(t,n){super(t,n),this.type="ForbiddenResponseError"}}var Rv={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(z4,function(){var n={},r=!1,a=[],i=[],o=0;return n={version:"3.1.3-javascript",onError:function(s){},onClose:function(s){},onOpen:function(s){},onReopen:function(s){},onMessage:function(s){},onReconnect:function(s,l){},onMessagePublished:function(s){},onTransportFailure:function(s,l){},onLocalMessage:function(s){},onFailureToReconnect:function(s,l){},onClientTimeout:function(s){},onOpenAfterResume:function(s){},WebsocketApiAdapter:function(s){var l,h;return s.onMessage=function(c){h.onmessage({data:c.responseBody})},s.onMessagePublished=function(c){h.onmessage({data:c.responseBody})},s.onOpen=function(c){h.onopen(c)},h={close:function(){l.close()},send:function(c){l.push(c)},onmessage:function(c){},onopen:function(c){},onclose:function(c){},onerror:function(c){}},l=new n.subscribe(s),h},AtmosphereRequest:function(s){var l={timeout:3e5,method:"GET",headers:{},contentType:"",callback:null,url:"",data:"",suspend:!0,maxRequest:-1,reconnect:!0,maxStreamingLength:1e7,lastIndex:0,logLevel:"info",requestCount:0,fallbackMethod:"GET",fallbackTransport:"streaming",transport:"long-polling",webSocketImpl:null,webSocketBinaryType:null,dispatchUrl:null,webSocketPathDelimiter:"@@",enableXDR:!1,rewriteURL:!1,attachHeadersAsQueryString:!0,executeCallbackBeforeReconnect:!1,readyState:0,withCredentials:!1,trackMessageLength:!1,messageDelimiter:"|",connectTimeout:-1,reconnectInterval:0,dropHeaders:!0,uuid:0,shared:!1,readResponsesHeaders:!1,maxReconnectOnClose:5,enableProtocol:!0,disableDisconnect:!1,pollingInterval:0,heartbeat:{client:null,server:null},ackInterval:0,reconnectOnServerError:!0,handleOnlineOffline:!0,maxWebsocketErrorRetries:1,curWebsocketErrorRetries:0,unloadBackwardCompat:!navigator.sendBeacon,onError:function(v){},onClose:function(v){},onOpen:function(v){},onMessage:function(v){},onReopen:function(v,d){},onReconnect:function(v,d){},onMessagePublished:function(v){},onTransportFailure:function(v,d){},onLocalMessage:function(v){},onFailureToReconnect:function(v,d){},onClientTimeout:function(v){},onOpenAfterResume:function(v){}},h={status:200,reasonPhrase:"OK",responseBody:"",messages:[],headers:[],state:"messageReceived",transport:"polling",error:null,request:null,partialMessage:"",errorHandled:!1,closedByClientTimeout:!1,ffTryingReconnect:!1},c=null,u=null,p=null,m=null,g=null,b=!0,T=0,y=0,f="X",z=!1,k=null,O,U=null,M=n.util.now(),B,G;Q(s);function H(){b=!0,z=!1,T=0,c=null,u=null,p=null,m=null}function ee(){de(),H()}function Z(v){return v=="debug"?l.logLevel==="debug":v=="info"?l.logLevel==="info"||l.logLevel==="debug":v=="warn"?l.logLevel==="warn"||l.logLevel==="info"||l.logLevel==="debug":v=="error"?l.logLevel==="error"||l.logLevel==="warn"||l.logLevel==="info"||l.logLevel==="debug":!1}function Y(v){Z("debug")&&n.util.debug(new Date+" Atmosphere: "+v)}function Ae(v,d){return h.partialMessage===""&&d.transport==="streaming"&&v.responseText.length>d.maxStreamingLength}function Pe(){if(l.enableProtocol&&!l.disableDisconnect&&!l.firstMessage){var v="X-Atmosphere-Transport=close&X-Atmosphere-tracking-id="+l.uuid;n.util.each(l.headers,function(C,S){var L=n.util.isFunction(S)?S.call(this,l,l,h):S;L!=null&&(v+="&"+encodeURIComponent(C)+"="+encodeURIComponent(L))});var d=l.url.replace(/([?&])_=[^&]*/,v);d=d+(d===l.url?(/\?/.test(l.url)?"&":"?")+v:"");var w={connected:!1},A=new n.AtmosphereRequest(w);A.connectTimeout=l.connectTimeout,A.attachHeadersAsQueryString=!1,A.dropHeaders=!0,A.url=d,A.contentType="text/plain",A.transport="polling",A.method="GET",A.data="",A.heartbeat=null,l.enableXDR&&(A.enableXDR=l.enableXDR),ti("",A)}}function $e(){Y("Closing (AtmosphereRequest._close() called)"),z=!0,l.reconnectId&&(clearTimeout(l.reconnectId),delete l.reconnectId),l.heartbeatTimer&&clearTimeout(l.heartbeatTimer),l.reconnect=!1,h.request=l,h.state="unsubscribe",h.responseBody="",h.status=408,h.partialMessage="",l.curWebsocketErrorRetries=0,R(),Pe(),de()}function de(){h.partialMessage="",l.id&&clearTimeout(l.id),l.heartbeatTimer&&clearTimeout(l.heartbeatTimer),l.reconnectId&&(clearTimeout(l.reconnectId),delete l.reconnectId),m!=null&&(m.close(),m=null),g!=null&&(g.abort(),g=null),p!=null&&(p.abort(),p=null),c!=null&&(c.canSendMessage&&(Y("invoking .close() on WebSocket object"),c.close()),c=null),u!=null&&(u.close(),u=null),D()}function D(){O!=null&&(clearInterval(B),document.cookie=G+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",O.signal("close",{reason:"",heir:z?(O.get("children")||[])[0]:M}),O.close()),U?.close()}function Q(v){ee(),l=n.util.extend(l,v),l.mrequest=l.reconnect,l.reconnect||(l.reconnect=!0)}function X(){return l.webSocketImpl!=null||window.WebSocket||window.MozWebSocket}function se(){var v=n.util.getAbsoluteURL(l.url.toLowerCase()),d=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/.exec(v),w=!!(d&&(d[1]!=window.location.protocol||d[2]!=window.location.hostname||(d[3]||(d[1]==="http:"?80:443))!=(window.location.port||(window.location.protocol==="http:"?80:443))));return window.EventSource&&(!w||!n.util.browser.safari||n.util.browser.vmajor>=7)}function te(){if(l.shared){if(U=Qe(l),U!=null&&(Z("debug")&&n.util.debug("Storage service available. All communication will be local"),U.open(l)))return;Z("debug")&&n.util.debug("No Storage service available."),U=null}l.firstMessage=o==0,l.isOpen=!1,l.ctime=n.util.now(),l.uuid===0&&(l.uuid=o),h.closedByClientTimeout=!1,l.transport!=="websocket"&&l.transport!=="sse"?Ut(l):l.transport==="websocket"?X()?Re(!1):A0("Websocket is not supported, using request.fallbackTransport ("+l.fallbackTransport+")"):l.transport==="sse"&&(se()?J(!1):A0("Server Side Events(SSE) is not supported, using request.fallbackTransport ("+l.fallbackTransport+")"))}function Qe(v){var d,w,A,C="atmosphere-"+v.url,S={storage:function(){function F(Se){Se.key===C&&Se.newValue&&V(Se.newValue)}if(n.util.storage){var q=window.localStorage,he=function(Se){var dt=q.getItem(C+"-"+Se);return dt===null?[]:JSON.parse(dt)},we=function(Se,dt){q.setItem(C+"-"+Se,JSON.stringify(dt))};return{init:function(){return we("children",he("children").concat([M])),n.util.on(window,"storage",F),he("opened")},signal:function(Se,dt){q.setItem(C,JSON.stringify({target:"p",type:Se,data:dt}))},close:function(){var Se=he("children");n.util.off(window,"storage",F),Se&&L(Se,v.id)&&we("children",Se)}}}},windowref:function(){var F=window.open("",C.replace(/\W/g,""));if(!(!F||F.closed||!F.callbacks))return{init:function(){return F.callbacks.push(V),F.children.push(M),F.opened},signal:function(q,he){!F.closed&&F.fire&&F.fire(JSON.stringify({target:"p",type:q,data:he}))},close:function(){A||(L(F.callbacks,V),L(F.children,M))}}}};function L(F,q){var he,we=F.length;for(he=0;he<we;he++)F[he]===q&&F.splice(he,1);return we!==F.length}function V(F){var q=JSON.parse(F),he=q.data;if(q.target==="c")switch(q.type){case"open":ae("opening","local",l);break;case"close":A||(A=!0,he.reason==="aborted"?$e():he.heir===M?te():setTimeout(function(){te()},100));break;case"message":c0(he,"messageReceived",200,v.transport);break;case"localMessage":ii(he);break}}function $(){var F=new RegExp("(?:^|; )("+encodeURIComponent(C)+")=([^;]*)").exec(document.cookie);if(F)return JSON.parse(decodeURIComponent(F[2]))}if(d=$(),!(!d||n.util.now()-d.ts>1e3)&&(w=S.storage()||S.windowref(),!!w))return{open:function(){var F;return B=setInterval(function(){var q=d;d=$(),(!d||q.ts===d.ts)&&V(JSON.stringify({target:"c",type:"close",data:{reason:"error",heir:q.heir}}))},1e3),F=w.init(),F&&setTimeout(function(){ae("opening","local",v)},50),F},send:function(F){w.signal("send",F)},localSend:function(F){w.signal("localSend",JSON.stringify({id:M,event:F}))},close:function(){z||(clearInterval(B),w.signal("close"),w.close())}}}function Ve(){var v,d="atmosphere-"+l.url,w={storage:function(){function S(V){V.key===d&&V.newValue&&A(V.newValue)}if(n.util.storage){var L=window.localStorage;return{init:function(){n.util.on(window,"storage",S)},signal:function(V,$){L.setItem(d,JSON.stringify({target:"c",type:V,data:$}))},get:function(V){return JSON.parse(L.getItem(d+"-"+V))},set:function(V,$){L.setItem(d+"-"+V,JSON.stringify($))},close:function(){n.util.off(window,"storage",S),L.removeItem(d),L.removeItem(d+"-opened"),L.removeItem(d+"-children")}}}},windowref:function(){var S=d.replace(/\W/g,""),L=document.getElementById(S),V;return L||(L=document.createElement("div"),L.id=S,L.style.display="none",L.innerHTML='<iframe name="'+S+'"></iframe>',document.body.appendChild(L)),V=L.firstChild.contentWindow,{init:function(){V.callbacks=[A],V.fire=function($){var F;for(F=0;F<V.callbacks.length;F++)V.callbacks[F]($)}},signal:function($,F){!V.closed&&V.fire&&V.fire(JSON.stringify({target:"c",type:$,data:F}))},get:function($){return V.closed?null:V[$]},set:function($,F){V.closed||(V[$]=F)},close:function(){}}}};function A(S){var L=JSON.parse(S),V=L.data;if(L.target==="p")switch(L.type){case"send":h0(V);break;case"localSend":ii(V);break;case"close":$e();break}}k=function(L){v.signal("message",L)};function C(){document.cookie=G+"="+encodeURIComponent(JSON.stringify({ts:n.util.now()+1,heir:(v.get("children")||[])[0]}))+"; path=/"}v=w.storage()||w.windowref(),v.init(),Z("debug")&&n.util.debug("Installed StorageService "+v),v.set("children",[]),v.get("opened")!=null&&!v.get("opened")&&v.set("opened",!1),G=encodeURIComponent(d),C(),B=setInterval(C,1e3),O=v}function ae(v,d,w){if(l.shared&&d!=="local"&&Ve(),O?.set("opened",!0),w.close=function(){$e()},T>0&&v==="re-connecting")w.isReopen=!0,t0(h);else if(!h.error){h.request=w;var A=h.state;h.state=v;var C=h.transport;h.transport=d;var S=h.responseBody;R(),h.responseBody=S,h.state=A,h.transport=C}}function Ie(v){v.transport="jsonp";var d=l,w;v!=null&&typeof v<"u"&&(d=v),g={open:function(){var A="atmosphere"+ ++M;function C(){d.lastIndex=0,d.openId&&clearTimeout(d.openId),d.heartbeatTimer&&clearTimeout(d.heartbeatTimer),d.reconnect&&T++<d.maxReconnectOnClose?(ae("re-connecting",d.transport,d),jt(g,d,v.reconnectInterval),d.openId=setTimeout(function(){an(d)},d.reconnectInterval+1e3)):at(0,"maxReconnectOnClose reached")}function S(){var L=d.url;d.dispatchUrl!=null&&(L+=d.dispatchUrl);var V=d.data;d.attachHeadersAsQueryString&&(L=S0(d),V!==""&&(L+="&X-Atmosphere-Post-Body="+encodeURIComponent(V)),V="");var $=document.head||document.getElementsByTagName("head")[0]||document.documentElement;w=document.createElement("script"),w.src=L+"&jsonpTransport="+A,w.clean=function(){w.clean=w.onerror=w.onload=w.onreadystatechange=null,w.parentNode&&w.parentNode.removeChild(w),++v.scriptCount===2&&(v.scriptCount=1,C())},w.onload=w.onreadystatechange=function(){Y("jsonp.onload"),(!w.readyState||/loaded|complete/.test(w.readyState))&&w.clean()},w.onerror=function(){Y("jsonp.onerror"),v.scriptCount=1,w.clean()},$.insertBefore(w,$.firstChild)}window[A]=function(L){if(Y("jsonp.window"),v.scriptCount=0,d.reconnect&&d.maxRequest===-1||d.requestCount++<d.maxRequest){if(d.executeCallbackBeforeReconnect||jt(g,d,d.pollingInterval),L!=null&&typeof L!="string")try{L=L.message}catch{}var V=qe(L,d,h);V||c0(h.responseBody,"messageReceived",200,d.transport),d.executeCallbackBeforeReconnect&&jt(g,d,d.pollingInterval),oe(d)}else n.util.log(l.logLevel,["JSONP reconnect maximum try reached "+l.requestCount]),at(0,"maxRequest reached")},setTimeout(function(){S()},50)},abort:function(){w&&w.clean&&w.clean()}},g.open()}function Be(v){return l.webSocketImpl!=null?l.webSocketImpl:window.WebSocket?new WebSocket(v):new MozWebSocket(v)}function N(){return S0(l,n.util.getAbsoluteURL(l.webSocketUrl||l.url)).replace(/^http/,"ws")}function j(){var v=S0(l);return v}function J(v){h.transport="sse";var d=j();if(Z("debug")&&(n.util.debug("Invoking executeSSE"),n.util.debug("Using URL: "+d)),v&&!l.reconnect){u!=null&&de();return}try{u=new EventSource(d,{withCredentials:l.withCredentials})}catch(w){at(0,w),A0("SSE failed. Downgrading to fallback transport and resending");return}l.connectTimeout>0&&(l.id=setTimeout(function(){v||de()},l.connectTimeout)),u.onopen=function(){Y("sse.onopen"),oe(l),Z("debug")&&n.util.debug("SSE successfully opened"),l.enableProtocol?l.isReopen&&(l.isReopen=!1,ae("re-opening",l.transport,l)):ae(v?"re-opening":"opening","sse",l),v=!0,l.method==="POST"&&(h.state="messageReceived",h0(l.data))},u.onmessage=function(w){if(Y("sse.onmessage"),oe(l),!l.enableXDR&&window.location.host&&w.origin&&w.origin!==window.location.protocol+"//"+window.location.host){n.util.log(l.logLevel,["Origin was not "+window.location.protocol+"//"+window.location.host]);return}h.state="messageReceived",h.status=200,w=w.data;var A=qe(w,l,h);A||(R(),h.responseBody="",h.messages=[])},u.onerror=function(){if(Y("sse.onerror"),clearTimeout(l.id),l.heartbeatTimer&&clearTimeout(l.heartbeatTimer),!h.closedByClientTimeout){if(E(v),de(),z)n.util.log(l.logLevel,["SSE closed normally"]);else if(!v)A0("SSE failed. Downgrading to fallback transport and resending");else if(l.reconnect&&h.transport==="sse")if(T++<l.maxReconnectOnClose){if(ae("re-connecting",l.transport,l),l.reconnectInterval>0){var w=l.handleOnlineOffline;l.handleOnlineOffline=!1,l.reconnectId=setTimeout(function(){l.handleOnlineOffline=w,J(!0)},l.reconnectInterval)}else J(!0);h.responseBody="",h.messages=[]}else n.util.log(l.logLevel,["SSE reconnect maximum try reached "+T]),at(0,"maxReconnectOnClose reached")}}}function Re(v){h.transport="websocket";var d=N(l.url);if(Z("debug")&&n.util.debug("Invoking executeWebSocket, using URL: "+d),v&&!l.reconnect){c!=null&&de();return}c=Be(d),l.webSocketBinaryType!=null&&(c.binaryType=l.webSocketBinaryType),l.connectTimeout>0&&(l.id=setTimeout(function(){if(!v){var C={code:1002,reason:"Connection timeout after "+l.connectTimeout+"ms.",wasClean:!1},S=c;try{de()}catch{}S.onclose(C)}},l.connectTimeout)),c.onopen=function(){if(c==null){this.close(),l.transport=="websocket"&&$e();return}Y("websocket.onopen"),(!l.enableProtocol||l.connectTimeout<=0)&&oe(l),r=!1,Z("debug")&&n.util.debug("Websocket successfully opened");var C=v;c.canSendMessage=!0,l.enableProtocol||(v=!0,ae(C?"re-opening":"opening","websocket",l)),l.method==="POST"&&(h.state="messageReceived",c.send(l.data))},c.onmessage=function(C){if(c==null){this.close(),l.transport=="websocket"&&$e();return}Y("websocket.onmessage"),oe(l),l.enableProtocol&&(v=!0),h.state="messageReceived",h.status=200,C=C.data;var S=typeof C=="string";if(S){var L=qe(C,l,h);L||(R(),h.responseBody="",h.messages=[])}else{if(C=ue(l,C),C==="")return;h.responseBody=C,R(),h.responseBody=null}},c.onerror=function(){Y("websocket.onerror"),clearTimeout(l.id),l.heartbeatTimer&&clearTimeout(l.heartbeatTimer),h.error=!0},c.onclose=function(C){if(Y("websocket.onclose"),h.transport==="websocket"&&(clearTimeout(l.id),h.state!=="closed")){var S=C.reason;if(S==="")switch(C.code){case 1e3:S="Normal closure; the connection successfully completed whatever purpose for which it was created.";break;case 1001:S="The endpoint is going away, either because of a server failure or because the browser is navigating away from the page that opened the connection.";break;case 1002:S="The endpoint is terminating the connection due to a protocol error.";break;case 1003:S="The connection is being terminated because the endpoint received data of a type it cannot accept (for example, a text-only endpoint received binary data).";break;case 1004:S="The endpoint is terminating the connection because a data frame was received that is too large.";break;case 1005:S="Unknown: no status code was provided even though one was expected.";break;case 1006:S="Connection was closed abnormally (that is, with no close frame being sent).";break}if(Z("warn")&&n.util.warn("Websocket closed, reason: "+S+" - wasClean: "+C.wasClean),h.closedByClientTimeout||l.handleOnlineOffline&&r){l.reconnectId&&(clearTimeout(l.reconnectId),delete l.reconnectId);return}E(v),h.state="closed",z?n.util.log(l.logLevel,["Websocket closed normally"]):h.error&&l.curWebsocketErrorRetries<l.maxWebsocketErrorRetries&&T+1<l.maxReconnectOnClose?(h.error=!1,l.curWebsocketErrorRetries++,qa()):(h.error||!v||l.maxWebsocketErrorRetries===0)&&l.fallbackTransport!=="websocket"?(h.error=!1,A0("Websocket failed on first connection attempt. Downgrading to "+l.fallbackTransport+" and resending")):l.reconnect&&qa()}};var w=navigator.userAgent.toLowerCase(),A=w.indexOf("android")>-1;A&&c.url===void 0&&c.onclose({reason:"Android 4.1 does not support websockets.",wasClean:!1})}function ue(v,d){var w=d;if(v.transport==="polling")return w;if(v.enableProtocol&&v.firstMessage&&n.util.trim(d).length!==0){var A=v.trackMessageLength?1:0,C=d.split(v.messageDelimiter);if(C.length<=A+1)return w;if(v.firstMessage=!1,v.uuid=n.util.trim(C[A]),C.length<=A+2&&n.util.log("error",["Protocol data not sent by the server. If you enable protocol on client side, be sure to install JavascriptProtocol interceptor on server side.Also note that atmosphere-runtime 2.2+ should be used."]),y=parseInt(n.util.trim(C[A+1]),10),f=C[A+2],v.transport!=="long-polling"&&an(v),o=v.uuid,w="",A=v.trackMessageLength?4:3,C.length>A+1)for(var S=A;S<C.length;S++)w+=C[S],S+1!==C.length&&(w+=v.messageDelimiter);v.ackInterval!==0&&setTimeout(function(){h0("...ACK...")},v.ackInterval)}else v.enableProtocol&&v.firstMessage&&n.util.browser.msie&&+n.util.browser.version.split(".")[0]<10?n.util.log(l.logLevel,["Receiving unexpected data from IE"]):an(v);return w}function oe(v){clearTimeout(v.id),v.timeout>0&&v.transport!=="polling"&&(v.id=setTimeout(function(){Bt(),Pe(),de()},v.timeout))}function Bt(v){h.closedByClientTimeout=!0,h.state="closedByClient",h.responseBody="",h.status=408,h.messages=[],R()}function at(v,d){de(),clearTimeout(l.id),h.state="error",h.reasonPhrase=d,h.responseBody="",h.status=v,h.messages=[],R()}function qe(v,d,w){if(v=ue(d,v),v.length===0)return!0;if(w.responseBody=v,d.trackMessageLength){v=w.partialMessage+v;var A=[],C=v.indexOf(d.messageDelimiter);if(C!=-1){for(;C!==-1;){var S=v.substring(0,C),L=+S;if(isNaN(L))throw w.partialMessage="",new Error('message length "'+S+'" is not a number');C+=d.messageDelimiter.length,C+L>v.length?C=-1:(A.push(v.substring(C,C+L)),v=v.substring(C+L,v.length),C=v.indexOf(d.messageDelimiter))}return w.partialMessage=v,A.length!==0?(w.responseBody=A.join(d.messageDelimiter),w.messages=A,!1):(w.responseBody="",w.messages=[],!0)}}return w.responseBody=v,w.messages=[v],!1}function qa(){if(de(),T++<l.maxReconnectOnClose)if(ae("re-connecting",l.transport,l),l.reconnectInterval>0){var v=l.handleOnlineOffline;l.handleOnlineOffline=!1,l.reconnectId=setTimeout(function(){l.handleOnlineOffline=v,h.responseBody="",h.messages=[],Re(!0)},l.reconnectInterval)}else h.responseBody="",h.messages=[],Re(!0);else n.util.log(l.logLevel,["Websocket reconnect maximum try reached "+T]),at(0,"maxReconnectOnClose reached")}function A0(v){if(n.util.log(l.logLevel,[v]),de(),typeof l.onTransportFailure<"u"?l.onTransportFailure(v,l):typeof n.util.onTransportFailure<"u"&&n.util.onTransportFailure(v,l),l.reconnect&&l.transport!=="none"||l.transport==null)if(l.transport=l.fallbackTransport,l.method=l.fallbackMethod,h.transport=l.fallbackTransport,h.state="",l.fallbackTransport="none",l.reconnectInterval>0){var d=l.handleOnlineOffline;l.handleOnlineOffline=!1,l.reconnectId=setTimeout(function(){l.handleOnlineOffline=d,te()},l.reconnectInterval)}else te();else at(500,"Unable to reconnect with fallback transport")}function S0(v,d){var w=l;return v!=null&&typeof v<"u"&&(w=v),d==null&&(d=w.url),!w.attachHeadersAsQueryString||d.indexOf("X-Atmosphere-Framework")!==-1||(d+=d.indexOf("?")!==-1?"&":"?",d+="X-Atmosphere-tracking-id="+w.uuid,d+="&X-Atmosphere-Framework="+n.version,d+="&X-Atmosphere-Transport="+w.transport,w.trackMessageLength&&(d+="&X-Atmosphere-TrackMessageSize=true"),w.heartbeat!==null&&w.heartbeat.server!==null&&(d+="&X-Heartbeat-Server="+w.heartbeat.server),w.contentType!==""&&(d+="&Content-Type="+(w.transport==="websocket"?w.contentType:encodeURIComponent(w.contentType))),w.enableProtocol&&(d+="&X-atmo-protocol=true"),n.util.each(w.headers,function(A,C){var S=n.util.isFunction(C)?C.call(this,w,v,h):C;S!=null&&(d+="&"+encodeURIComponent(A)+"="+encodeURIComponent(S))})),d}function an(v){if(!v.isOpen)v.isOpen=!0,ae("opening",v.transport,v);else if(v.isReopen)v.isReopen=!1,ae("re-opening",v.transport,v);else if(h.state==="messageReceived"&&(v.transport==="jsonp"||v.transport==="long-polling"))on(h);else return;ro(v)}function ro(v){if(v.heartbeatTimer!=null&&clearTimeout(v.heartbeatTimer),!isNaN(y)&&y>0){var d=function(){Z("debug")&&n.util.debug("Sending heartbeat"),h0(f),v.heartbeatTimer=setTimeout(d,y)};v.heartbeatTimer=setTimeout(d,y)}}function Ut(v){var d=l;if((v!=null||typeof v<"u")&&(d=v),d.lastIndex=0,d.readyState=0,d.transport==="jsonp"||d.enableXDR&&n.util.checkCORSSupport()){Ie(d);return}if(n.util.browser.msie&&+n.util.browser.version.split(".")[0]<10){if(d.transport==="streaming"){d.enableXDR&&window.XDomainRequest?E0(d):sn(d);return}if(d.enableXDR&&window.XDomainRequest){E0(d);return}}var w=function(L){if(d.lastIndex=0,T++,L||d.reconnect&&T<=d.maxReconnectOnClose){var V=L?0:v.reconnectInterval;h.ffTryingReconnect=!0,ae("re-connecting",v.transport,v),jt(S,d,V)}else at(0,"maxReconnectOnClose reached")},A=function(L){n._beforeUnloadState?(n.util.debug(new Date+" Atmosphere: reconnectF: execution delayed due to _beforeUnloadState flag"),setTimeout(function(){w(L)},5e3)):w(L)},C=function(){h.errorHandled=!0,de(),A(!1)};if(d.force||d.reconnect&&(d.maxRequest===-1||d.requestCount++<d.maxRequest)){d.force=!1;var S=n.util.xhr();S.hasData=!1,ei(S,d,!0),d.suspend&&(p=S),d.transport!=="polling"&&(h.transport=d.transport,S.onabort=function(){Y("ajaxrequest.onabort"),E(!0)},S.onerror=function(){Y("ajaxrequest.onerror"),h.error=!0,h.ffTryingReconnect=!0;try{h.status=XMLHttpRequest.status}catch{h.status=500}h.status||(h.status=500),h.errorHandled||(de(),A(!1))}),S.onreadystatechange=function(){if(Y("ajaxRequest.onreadystatechange, new state: "+S.readyState),z){Y("onreadystatechange has been ignored due to _abortingConnection flag");return}h.error=!1;var L=!1,V=!1;if(d.transport==="streaming"&&d.readyState>2&&S.readyState===4){de(),A(!1);return}if(d.readyState=S.readyState,(d.transport==="streaming"&&S.readyState>=3||d.transport==="long-polling"&&S.readyState===4)&&(V=!0),oe(l),d.transport!=="polling"){var $=200;if(S.readyState===4&&($=S.status>1e3?0:S.status),!d.reconnectOnServerError&&$>=300&&$<600){at($,S.statusText);return}if($>=300||$===0){!d.isOpen&&Z("warn")&&n.util.warn(d.transport+" connection failed with status: "+$+" "+(S.statusText||"Unable to connect")),C();return}(!d.enableProtocol||!v.firstMessage)&&(S.readyState===2||S.readyState>2&&!d.isOpen)&&(n.util.browser.mozilla&&h.ffTryingReconnect?(h.ffTryingReconnect=!1,setTimeout(function(){h.ffTryingReconnect||an(d)},500)):an(d))}else S.readyState===4&&(V=!0);if(V){var F=S.responseText;if(h.errorHandled=!1,d.transport==="long-polling"&&n.util.trim(F).length===0){S.hasData?S.hasData=!1:A(!0);return}if(S.hasData=!0,Rr(S,l),d.transport==="streaming")if(n.util.browser.opera)n.util.iterate(function(){if(h.status!==500&&S.responseText.length>d.lastIndex){try{h.status=S.status,h.headers=n.util.parseHeaders(S.getAllResponseHeaders()),Rr(S,l)}catch{h.status=404}oe(l),h.state="messageReceived";var Se=S.responseText.substring(d.lastIndex);if(d.lastIndex=S.responseText.length,L=qe(Se,d,h),L||R(),Ae(S,d)){C0(S,d);return}}else if(h.status>400)return d.lastIndex=S.responseText.length,!1},0);else{var q=F.substring(d.lastIndex,F.length);if(L=qe(q,d,h),d.lastIndex=F.length,L)return}else L=qe(F,d,h);var he=Ae(S,d);try{h.status=S.status,h.headers=n.util.parseHeaders(S.getAllResponseHeaders()),Rr(S,d)}catch{h.status=404}d.suspend?h.state=h.status===0?"closed":"messageReceived":h.state="messagePublished";var we=!he&&v.transport!=="streaming"&&v.transport!=="polling";we&&!d.executeCallbackBeforeReconnect&&jt(S,d,d.pollingInterval),h.responseBody.length!==0&&!L&&R(),we&&d.executeCallbackBeforeReconnect&&jt(S,d,d.pollingInterval),he&&C0(S,d)}};try{S.send(d.data),b=!0}catch(L){n.util.log(d.logLevel,["Unable to connect to "+d.url]),at(0,L)}}else d.logLevel==="debug"&&n.util.log(d.logLevel,["Max re-connection reached."]),at(0,"maxRequest reached")}function C0(v,d){h.messages=[],d.isReopen=!0,$e(),z=!1,jt(v,d,500)}function ei(v,d,w){var A=d.url;d.dispatchUrl!=null&&d.method==="POST"&&(A+=d.dispatchUrl),A=S0(d,A),A=n.util.prepareURL(A),v.open(d.method,A,!0),d.connectTimeout>0&&(d.id=setTimeout(function(){d.requestCount===0&&(de(),c0("Connect timeout","closed",200,d.transport))},d.connectTimeout)),l.withCredentials&&l.transport!=="websocket"&&"withCredentials"in v&&(v.withCredentials=!0),l.dropHeaders||(v.setRequestHeader("X-Atmosphere-Framework",n.version),v.setRequestHeader("X-Atmosphere-Transport",d.transport),d.heartbeat!==null&&d.heartbeat.server!==null&&v.setRequestHeader("X-Heartbeat-Server",v.heartbeat.server),d.trackMessageLength&&v.setRequestHeader("X-Atmosphere-TrackMessageSize","true"),v.setRequestHeader("X-Atmosphere-tracking-id",d.uuid),n.util.each(d.headers,function(C,S){var L=n.util.isFunction(S)?S.call(this,v,d,w,h):S;L!=null&&v.setRequestHeader(C,L)})),d.contentType!==""&&v.setRequestHeader("Content-Type",d.contentType)}function jt(v,d,w){if(!h.closedByClientTimeout&&(d.reconnect||d.suspend&&b)){var A=0;if(v&&v.readyState>1&&(A=v.status>1e3?0:v.status),h.status=A===0?204:A,h.reason=A===0?"Server resumed the connection or down.":"OK",clearTimeout(d.id),d.reconnectId&&(clearTimeout(d.reconnectId),delete d.reconnectId),w>0){var C=l.handleOnlineOffline;l.handleOnlineOffline=!1,l.reconnectId=setTimeout(function(){l.handleOnlineOffline=C,Ut(d)},w)}else Ut(d)}}function t0(v){v.state="re-connecting",_(v)}function on(v){v.state="openAfterResume",_(v),v.state="messageReceived"}function E0(v){v.transport!=="polling"?(m=ln(v),m.open()):ln(v).open()}function ln(v){var d=l;v!=null&&typeof v<"u"&&(d=v);var w=d.transport,A=0,C=new window.XDomainRequest,S=function(){d.transport==="long-polling"&&d.reconnect&&(d.maxRequest===-1||d.requestCount++<d.maxRequest)&&(C.status=200,E0(d))},L=d.rewriteURL||function($){var F=/(?:^|;\s*)(JSESSIONID|PHPSESSID)=([^;]*)/.exec(document.cookie);switch(F&&F[1]){case"JSESSIONID":return $.replace(/;jsessionid=[^\?]*|(\?)|$/,";jsessionid="+F[2]+"$1");case"PHPSESSID":return $.replace(/\?PHPSESSID=[^&]*&?|\?|$/,"?PHPSESSID="+F[2]+"&").replace(/&$/,"")}return $};C.onprogress=function(){V(C)},C.onerror=function(){d.transport!=="polling"&&(de(),T++<d.maxReconnectOnClose?d.reconnectInterval>0?d.reconnectId=setTimeout(function(){ae("re-connecting",v.transport,v),E0(d)},d.reconnectInterval):(ae("re-connecting",v.transport,v),E0(d)):at(0,"maxReconnectOnClose reached"))},C.onload=function(){};var V=function($){clearTimeout(d.id);var F=$.responseText;if(F=F.substring(A),A+=F.length,w!=="polling"){oe(d);var q=qe(F,d,h);if(w==="long-polling"&&n.util.trim(F).length===0)return;d.executeCallbackBeforeReconnect&&S(),q||c0(h.responseBody,"messageReceived",200,w),d.executeCallbackBeforeReconnect||S()}};return{open:function(){var $=d.url;d.dispatchUrl!=null&&($+=d.dispatchUrl),$=S0(d,$),C.open(d.method,L($)),d.method==="GET"?C.send():C.send(d.data),d.connectTimeout>0&&(d.id=setTimeout(function(){d.requestCount===0&&(de(),c0("Connect timeout","closed",200,d.transport))},d.connectTimeout))},close:function(){C.abort()}}}function sn(v){m=n0(v),m.open()}function n0(v){var d=l;v!=null&&typeof v<"u"&&(d=v);var w,A=new window.ActiveXObject("htmlfile");A.open(),A.close();var C=d.url;return d.dispatchUrl!=null&&(C+=d.dispatchUrl),d.transport!=="polling"&&(h.transport=d.transport),{open:function(){var S=A.createElement("iframe");C=S0(d),d.data!==""&&(C+="&X-Atmosphere-Post-Body="+encodeURIComponent(d.data)),C=n.util.prepareURL(C),S.src=C,A.body.appendChild(S);var L=S.contentDocument||S.contentWindow.document;w=n.util.iterate(function(){try{if(!L.firstChild)return;var V=L.body?L.body.lastChild:L;V.omgThisIsBroken;var $=function(){var he=V.cloneNode(!0);he.appendChild(L.createTextNode("."));var we=he.innerText;return we=we.substring(0,we.length-1),we};if(!L.body||!L.body.firstChild||L.body.firstChild.nodeName.toLowerCase()!=="pre"){var F=L.head||L.getElementsByTagName("head")[0]||L.documentElement||L,q=L.createElement("script");q.text="document.write('<plaintext>')",F.insertBefore(q,F.firstChild),F.removeChild(q),V=L.body.lastChild}return d.closed&&(d.isReopen=!0),w=n.util.iterate(function(){var he=$();if(he.length>d.lastIndex){oe(l),h.status=200,h.error=!1,V.innerText="";var we=qe(he,d,h);if(we)return"";c0(h.responseBody,"messageReceived",200,d.transport)}if(d.lastIndex=0,L.readyState==="complete")return E(!0),ae("re-connecting",d.transport,d),d.reconnectInterval>0?d.reconnectId=setTimeout(function(){sn(d)},d.reconnectInterval):sn(d),!1},null),!1}catch{return h.error=!0,ae("re-connecting",d.transport,d),T++<d.maxReconnectOnClose?d.reconnectInterval>0?d.reconnectId=setTimeout(function(){sn(d)},d.reconnectInterval):sn(d):at(0,"maxReconnectOnClose reached"),A.execCommand("Stop"),A.close(),!1}})},close:function(){w&&w(),A.execCommand("Stop"),E(!0)}}}function h0(v){U!=null?ni(v):p!=null||u!=null?hn(v):m!=null?Un(v):g!=null?ri(v):c!=null?ai(v):(at(0,"No suspended connection available"),n.util.error("No suspended connection available. Make sure atmosphere.subscribe has been called and request.onOpen invoked before trying to push data"))}function ti(v,d){d||(d=Lr(v)),d.transport="polling",d.method="GET",d.withCredentials=!1,d.reconnect=!1,d.force=!0,d.suspend=!1,d.timeout=1e3,l.unloadBackwardCompat?Ut(d):navigator.sendBeacon(d.url,d.data)}function ni(v){U.send(v)}function ao(v){if(v.length!==0)try{U?U.localSend(v):O&&O.signal("localMessage",JSON.stringify({id:M,event:v}))}catch(d){n.util.error(d)}}function hn(v){var d=Lr(v);Ut(d)}function Un(v){if(l.enableXDR&&n.util.checkCORSSupport()){var d=Lr(v);d.reconnect=!1,Ie(d)}else hn(v)}function ri(v){hn(v)}function jn(v){var d=v;return typeof d=="object"&&(d=v.data),d}function Lr(v){var d=jn(v),w={connected:!1,timeout:6e4,method:"POST",url:l.url,contentType:l.contentType,headers:l.headers,reconnect:!0,callback:null,data:d,suspend:!1,maxRequest:-1,logLevel:"info",requestCount:0,withCredentials:l.withCredentials,transport:"polling",isOpen:!0,attachHeadersAsQueryString:!0,enableXDR:l.enableXDR,uuid:l.uuid,dispatchUrl:l.dispatchUrl,enableProtocol:!1,messageDelimiter:"|",trackMessageLength:l.trackMessageLength,maxReconnectOnClose:l.maxReconnectOnClose,heartbeatTimer:l.heartbeatTimer,heartbeat:l.heartbeat};return typeof v=="object"&&(w=n.util.extend(w,v)),w}function ai(v){var d=n.util.isBinary(v)?v:jn(v),w;try{if(l.dispatchUrl!=null?w=l.webSocketPathDelimiter+l.dispatchUrl+l.webSocketPathDelimiter+d:w=d,!c.canSendMessage){n.util.error("WebSocket not connected.");return}c.send(w)}catch{c.onclose=function(){},de(),A0("Websocket failed. Downgrading to "+l.fallbackTransport+" and resending "+v),hn(v)}}function ii(v){var d=JSON.parse(v);d.id!==M&&(typeof l.onLocalMessage<"u"?l.onLocalMessage(d.event):typeof n.util.onLocalMessage<"u"&&n.util.onLocalMessage(d.event))}function c0(v,d,w,A){h.responseBody=v,h.transport=A,h.status=w,h.state=d,R()}function Rr(v,d){if(!d.readResponsesHeaders)d.enableProtocol||(d.uuid=M);else try{var w=v.getResponseHeader("X-Atmosphere-tracking-id");w&&w!=null&&(d.uuid=w.split(" ").pop())}catch{}}function _(v){x(v,l),x(v,n.util)}function x(v,d){switch(v.state){case"messageReceived":Y("Firing onMessage"),T=0,typeof d.onMessage<"u"&&d.onMessage(v),typeof d.onmessage<"u"&&d.onmessage(v);break;case"error":var w=typeof v.reasonPhrase<"u"?v.reasonPhrase:"n/a";Y("Firing onError, reasonPhrase: "+w),typeof d.onError<"u"&&d.onError(v),typeof d.onerror<"u"&&d.onerror(v);break;case"opening":delete l.closed,Y("Firing onOpen"),typeof d.onOpen<"u"&&d.onOpen(v),typeof d.onopen<"u"&&d.onopen(v);break;case"messagePublished":Y("Firing messagePublished"),typeof d.onMessagePublished<"u"&&d.onMessagePublished(v);break;case"re-connecting":Y("Firing onReconnect"),typeof d.onReconnect<"u"&&d.onReconnect(l,v);break;case"closedByClient":Y("Firing closedByClient"),typeof d.onClientTimeout<"u"&&d.onClientTimeout(l);break;case"re-opening":delete l.closed,Y("Firing onReopen"),typeof d.onReopen<"u"&&d.onReopen(l,v);break;case"fail-to-reconnect":Y("Firing onFailureToReconnect"),typeof d.onFailureToReconnect<"u"&&d.onFailureToReconnect(l,v);break;case"unsubscribe":case"closed":var A=typeof l.closed<"u"?l.closed:!1;A?Y("Request already closed, not firing onClose ("+v.state+" case)"):(Y("Firing onClose ("+v.state+" case)"),typeof d.onClose<"u"&&d.onClose(v),typeof d.onclose<"u"&&d.onclose(v)),l.closed=!0;break;case"openAfterResume":typeof d.onOpenAfterResume<"u"&&d.onOpenAfterResume(l);break}}function E(v){h.state!=="closed"&&(h.state="closed",h.responseBody="",h.messages=[],h.status=v?200:501,R())}function R(){var v=function(C,S){S(h)};U==null&&k!=null&&k(h.responseBody),l.reconnect=l.mrequest;for(var d=typeof h.responseBody=="string",w=d&&l.trackMessageLength?h.messages.length>0?h.messages:[""]:new Array(h.responseBody),A=0;A<w.length;A++)if(!(w.length>1&&w[A].length===0)){if(h.responseBody=d?n.util.trim(w[A]):w[A],U==null&&k!=null&&k(h.responseBody),h.state==="messageReceived"){if(h.responseBody.length===0)continue;if(d&&f===h.responseBody){T=0;continue}}if(_(h),i.length>0){Z("debug")&&n.util.debug("Invoking "+i.length+" global callbacks: "+h.state);try{n.util.each(i,v)}catch(C){n.util.log(l.logLevel,["Callback exception"+C])}}if(typeof l.callback=="function"){Z("debug")&&n.util.debug("Invoking request callbacks");try{l.callback(h)}catch(C){n.util.log(l.logLevel,["Callback exception"+C])}}}}this.subscribe=function(v){Q(v),te()},this.execute=function(){te()},this.close=function(){$e()},this.disconnect=function(){Pe()},this.getUrl=function(){return l.url},this.push=function(v,d){if(d!=null){var w=l.dispatchUrl;l.dispatchUrl=d,h0(v),l.dispatchUrl=w}else h0(v)},this.getUUID=function(){return l.uuid},this.pushLocal=function(v){ao(v)},this.enableProtocol=function(){return l.enableProtocol},this.init=function(){H()},this.request=l,this.response=h}},n.subscribe=function(s,l,h){typeof l=="function"&&n.addCallback(l),typeof s!="string"?h=s:h.url=s,o=typeof h<"u"&&typeof h.uuid<"u"?h.uuid:0;var c=new n.AtmosphereRequest(h);return c.execute(),a[a.length]=c,c},n.unsubscribe=function(){if(a.length>0)for(var s=[].concat(a),l=0;l<s.length;l++){var h=s[l];h.close(),clearTimeout(h.response.request.id),h.heartbeatTimer&&clearTimeout(h.heartbeatTimer)}a=[],i=[]},n.unsubscribeUrl=function(s){var l=-1;if(a.length>0)for(var h=0;h<a.length;h++){var c=a[h];if(c.getUrl()===s){c.close(),clearTimeout(c.response.request.id),c.heartbeatTimer&&clearTimeout(c.heartbeatTimer),l=h;break}}l>=0&&a.splice(l,1)},n.addCallback=function(s){n.util.inArray(s,i)===-1&&i.push(s)},n.removeCallback=function(s){var l=n.util.inArray(s,i);l!==-1&&i.splice(l,1)},n.util={browser:{},parseHeaders:function(s){for(var l,h=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,c={};l=h.exec(s);)c[l[1]]=l[2];return c},now:function(){return new Date().getTime()},isArray:function(s){return Object.prototype.toString.call(s)==="[object Array]"},inArray:function(s,l){if(!Array.prototype.indexOf){for(var h=l.length,c=0;c<h;++c)if(l[c]===s)return c;return-1}return l.indexOf(s)},isBinary:function(s){return/^\[object\s(?:Blob|ArrayBuffer|.+Array)\]$/.test(Object.prototype.toString.call(s))},isFunction:function(s){return Object.prototype.toString.call(s)==="[object Function]"},getAbsoluteURL:function(s){if(typeof document.createElement>"u")return s;var l=document.createElement("div");l.innerHTML='<a href="'+s+'"></a>';var h=window.navigator.userAgent;return h.indexOf("MSIE ")>0||h.indexOf("Trident/")>0||h.indexOf("Edge/")>0?n.util.fixedEncodeURI(decodeURI(l.firstChild.href)):l.firstChild.href},fixedEncodeURI:function(s){return encodeURI(s).replace(/%5B/g,"[").replace(/%5D/g,"]")},prepareURL:function(s){var l=n.util.now(),h=s.replace(/([?&])_=[^&]*/,"$1_="+l);return h+(h===s?(/\?/.test(s)?"&":"?")+"_="+l:"")},trim:function(s){return String.prototype.trim?s.toString().trim():s.toString().replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,"").replace(/\s+/g," ")},param:function(s){var l,h=[];function c(p,m){m=n.util.isFunction(m)?m():m??"",h.push(encodeURIComponent(p)+"="+encodeURIComponent(m))}function u(p,m){var g;if(n.util.isArray(m))n.util.each(m,function(b,T){/\[\]$/.test(p)?c(p,T):u(p+"["+(typeof T=="object"?b:"")+"]",T)});else if(Object.prototype.toString.call(m)==="[object Object]")for(g in m)u(p+"["+g+"]",m[g]);else c(p,m)}for(l in s)u(l,s[l]);return h.join("&").replace(/%20/g,"+")},storage:function(){try{return!!(window.localStorage&&window.StorageEvent)}catch{return!1}},iterate:function(s,l){var h;return l=l||0,function c(){h=setTimeout(function(){s()!==!1&&c()},l)}(),function(){clearTimeout(h)}},each:function(s,l,h){if(s){var c,u=0,p=s.length,m=n.util.isArray(s);if(h){if(m)for(;u<p&&(c=l.apply(s[u],h),c!==!1);u++);else for(u in s)if(c=l.apply(s[u],h),c===!1)break}else if(m)for(;u<p&&(c=l.call(s[u],u,s[u]),c!==!1);u++);else for(u in s)if(c=l.call(s[u],u,s[u]),c===!1)break;return s}},extend:function(s){var l,h,c;for(l=1;l<arguments.length;l++)if((h=arguments[l])!=null)for(c in h)s[c]=h[c];return s},on:function(s,l,h){s.addEventListener?s.addEventListener(l,h,!1):s.attachEvent&&s.attachEvent("on"+l,h)},off:function(s,l,h){s.removeEventListener?s.removeEventListener(l,h,!1):s.detachEvent&&s.detachEvent("on"+l,h)},log:function(s,l){if(window.console){var h=window.console[s];typeof h=="function"&&h.apply(window.console,l)}},warn:function(){n.util.log("warn",arguments)},info:function(){n.util.log("info",arguments)},debug:function(){n.util.log("debug",arguments)},error:function(){n.util.log("error",arguments)},xhr:function(){try{return new window.XMLHttpRequest}catch{try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch{}}},checkCORSSupport:function(){if(n.util.browser.msie&&!window.XDomainRequest&&+n.util.browser.version.split(".")[0]<11)return!0;if(n.util.browser.opera&&+n.util.browser.version.split(".")<12)return!0;if(n.util.trim(navigator.userAgent).slice(0,16)==="KreaTVWebKit/531")return!0;if(n.util.trim(navigator.userAgent).slice(-7).toLowerCase()==="kreatel")return!0;var s=navigator.userAgent.toLowerCase(),l=s.match(/.+android ([0-9]{1,2})/i),h=parseInt(l&&l[0]||-1,10);return!isNaN(h)&&h>-1&&h<3}},n.util.now(),function(){var s=navigator.userAgent.toLowerCase(),l=/(chrome)[ \/]([\w.]+)/.exec(s)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(s)||/(msie) ([\w.]+)/.exec(s)||/(trident)(?:.*? rv:([\w.]+)|)/.exec(s)||s.indexOf("android")<0&&/version\/(.+) (safari)/.exec(s)||s.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(s)||[];l[2]==="safari"&&(l[2]=l[1],l[1]="safari"),n.util.browser[l[1]||""]=!0,n.util.browser.version=l[2]||"0",n.util.browser.vmajor=n.util.browser.version.split(".")[0],n.util.browser.trident&&(n.util.browser.msie=!0),(n.util.browser.msie||n.util.browser.mozilla&&+n.util.browser.version.split(".")[0]==1)&&(n.util.storage=!1)}(),n.callbacks={unload:function(){n.util.debug(new Date+" Atmosphere: unload event"),n.unsubscribe()},beforeUnload:function(){n.util.debug(new Date+" Atmosphere: beforeunload event"),n._beforeUnloadState=!0,setTimeout(function(){n.util.debug(new Date+" Atmosphere: beforeunload event timeout reached. Reset _beforeUnloadState flag"),n._beforeUnloadState=!1},5e3)},offline:function(){if(n.util.debug(new Date+" Atmosphere: offline event"),r=!0,a.length>0)for(var s=[].concat(a),l=0;l<s.length;l++){var h=s[l];h.request.handleOnlineOffline&&(h.close(),clearTimeout(h.response.request.id),h.heartbeatTimer&&clearTimeout(h.heartbeatTimer))}},online:function(){if(n.util.debug(new Date+" Atmosphere: online event"),a.length>0)for(var s=0;s<a.length;s++)a[s].request.handleOnlineOffline&&(a[s].init(),a[s].execute());r=!1}},n.bindEvents=function(){n.util.on(window,"unload",n.callbacks.unload),n.util.on(window,"beforeunload",n.callbacks.beforeUnload),n.util.on(window,"offline",n.callbacks.offline),n.util.on(window,"online",n.callbacks.online)},n.unbindEvents=function(){n.util.off(window,"unload",n.callbacks.unload),n.util.off(window,"beforeunload",n.callbacks.beforeUnload),n.util.off(window,"offline",n.callbacks.offline),n.util.off(window,"online",n.callbacks.online)},n.bindEvents(),n})})(Rv);var ng=Rv.exports,rg=ng;const ag=Ua(rg);function ig(e){return e!=null&&typeof e=="object"&&"@type"in e}class og extends EventTarget{state="inactive";#e=new Map;#l=0;#t=new Map;#n=new Map;#r=new Map;#a=[];#s;constructor(t,n){super(),this.#c(t.replace(/connect$/u,""),n??{})}subscribe(t,n,r){const a=this.#l.toString();this.#l+=1;const i=r??[],o={"@type":"subscribe",endpointName:t,id:a,methodName:n,params:i},s=`${t}.${n}(${JSON.stringify(i)})`;this.#o(o),this.#e.set(a,s);const l={cancel:()=>{if(!this.#e.has(a))return;const h={"@type":"unsubscribe",id:a};this.#o(h),this.#i(a)},context(h){return h.addController({hostDisconnected(){l.cancel()}}),l},onComplete:h=>(this.#t.set(a,h),l),onError:h=>(this.#n.set(a,h),l),onNext:h=>(this.#r.set(a,h),l)};return l}#c(t,n){const r=Mv(document),a="HILLA/push",i=t.length===0?a:(t.endsWith("/")?t:`${t}/`)+a;this.#s=ag.subscribe?.({contentType:"application/json; charset=UTF-8",enableProtocol:!0,fallbackTransport:"long-polling",headers:r,maxReconnectOnClose:1e7,onClose:o=>{this.state==="active"&&(this.state="inactive",this.dispatchEvent(new CustomEvent("state-changed",{detail:{active:!1}})))},onError:o=>{console.error("error in push communication",o)},onMessage:o=>{o.responseBody&&this.#d(JSON.parse(o.responseBody))},onOpen:o=>{this.state==="inactive"&&(this.state="active",this.dispatchEvent(new CustomEvent("state-changed",{detail:{active:!0}})),this.#h())},onReopen:o=>{this.state==="inactive"&&(this.state="active",this.dispatchEvent(new CustomEvent("state-changed",{detail:{active:!0}})),this.#h())},reconnectInterval:5e3,timeout:-1,trackMessageLength:!0,transport:"websocket",url:i,...n})}#d(t){if(ig(t)){const{id:n}=t,r=this.#e.get(n)??"unknown";if(t["@type"]==="update"){const a=this.#r.get(n);a&&a(t.item)}else if(t["@type"]==="complete")this.#t.get(n)?.(),this.#i(n);else{const a=this.#n.get(n);if(a&&a(),this.#i(n),!a)throw new Error(`Error in ${r}: ${t.message}`)}}else throw new Error(`Unknown message from server: ${String(t)}`)}#i(t){this.#r.delete(t),this.#t.delete(t),this.#n.delete(t),this.#e.delete(t)}#o(t){this.state==="inactive"?this.#a.push(t):this.#s?.push?.(JSON.stringify(t))}#h(){this.#a.forEach(t=>this.#o(t)),this.#a=[]}}const Lt=window;Lt.Vaadin??={};Lt.Vaadin.registrations??=[];Lt.Vaadin.registrations.push({is:"endpoint"});const lg=async e=>{if(!e.ok){const t=await e.text();let n;try{n=JSON.parse(t)}catch{n=null}const r=n?.message??(t.length>0?t:`expected "200 OK" response, but got ${e.status} ${e.statusText}`),a=n?.type;if(n?.validationErrorData)throw new q6(r,n.validationErrorData,a);if(a)throw new Ih(r,a,n?.detail);switch(e.status){case 401:throw new eg(r,e);case 403:throw new tg(r,e);default:throw new Dh(r,e)}}};function Xd(){return Lt.Vaadin?.Flow?.clients?.TypeScript!==void 0}class sg{middlewares=[];prefix="/connect";atmosphereOptions={};#e;constructor(t={}){t.prefix&&(this.prefix=t.prefix),t.middlewares&&(this.middlewares=t.middlewares),t.atmosphereOptions&&(this.atmosphereOptions=t.atmosphereOptions),He.create(),addEventListener("online",()=>{!Xd()&&Lt.Vaadin?.connectionState&&(Lt.Vaadin.connectionState.state=Ne.CONNECTED)}),addEventListener("offline",()=>{!Xd()&&Lt.Vaadin?.connectionState&&(Lt.Vaadin.connectionState.state=Ne.CONNECTION_LOST)})}get fluxConnection(){return this.#e||(this.#e=new og(this.prefix,this.atmosphereOptions)),this.#e}async call(t,n,r,a){if(arguments.length<2)throw new TypeError(`2 arguments required, but got only ${arguments.length}`);const o={Accept:"application/json","Content-Type":"application/json",...Mv(document)},s=new Request(`${this.prefix}/${t}/${n}`,{body:r!==void 0?JSON.stringify(r,(m,g)=>g===void 0?null:g):void 0,headers:o,method:"POST"}),l={endpoint:t,method:n,params:r,request:s};async function h(m,g){const b=await g(m);await lg(b);const T=await b.text();return JSON.parse(T,(y,f)=>f===null?void 0:f)}async function c(m){Lt.Vaadin?.connectionState?.loadingStarted();try{const g=await fetch(m.request,{signal:a?.signal});return Lt.Vaadin?.connectionState?.loadingFinished(),g}catch(g){return g instanceof Error&&g.name==="AbortError"?Lt.Vaadin?.connectionState?.loadingFinished():Lt.Vaadin?.connectionState?.loadingFailed(),Promise.reject(g)}}return[h,...this.middlewares].reduceRight((m,g)=>async b=>typeof g=="function"?g(b,m):g.invoke(b,m),c)(l)}subscribe(t,n,r){return this.fluxConnection.subscribe(t,n,r?Object.values(r):[])}}function hg(e,t=window.Vaadin??={}){t.registrations??=[],t.registrations.push({is:"@vaadin/hilla-frontend",version:"24.4.4"})}hg();const cg={initializing:!0,loading:!1},dg=P.createContext({state:cg,login(){throw new Error("AuthContext not initialized")},logout(){throw new Error("AuthContext not initialized")},hasAccess(){throw new Error("AuthContext not initialized")}});function Ov({redirectPath:e,access:t,element:n}){const{state:{initializing:r,loading:a,user:i},hasAccess:o}=P.useContext(dg),s=Xa();return r||a?ge.jsx("div",{}):o(t)?n:ge.jsx(Jm,{to:e,state:{from:s},replace:!0})}Ov.type="ProtectedRoute";function ug(e,t="/login"){const{handle:n}=e;return(n?.loginRequired??n?.requiresLogin??n?.rolesAllowed?.length)&&(e.element=ge.jsx(Ov,{redirectPath:t,access:n,element:e.element})),e}function pg(e,t=window.Vaadin??={}){t.registrations??=[],t.registrations.push({is:"@vaadin/hilla-react-auth",version:"24.4.4"})}pg();const vg=/view/giu,fg=/(?=[A-Z])/gu;function mg(e){let t;return e&&(typeof e=="object"||typeof e=="function")&&"name"in e&&typeof e.name=="string"?{name:t}=e:t=String(e),t.replace(vg,"").split(fg).join(" ")}function Nv(e,t){return t(e,(...n)=>Nv(n,t))}function gg(e){return e?"default"in e&&typeof e.default=="function":!0}function Jd(e){return[`${e.path??""}-${e.children?"n":"i"}`,e]}class yg{#e=[];withReactRoutes(t){return this.update(t)}withFileRoutes(t){return this.update(t,(n,r,a)=>{if(r){const{module:i,path:o}=r;if(!gg(i))throw new Error(`The module for the "${o}" section doesn't have the React component exported by default`);const s=i?.default?P.createElement(i.default):void 0,l={...i?.config,title:i?.config?.title??mg(i?.default)};return o===""&&!a?{...n,element:s,handle:l,index:!0}:{...n,path:i?.config?.route??o,element:s,children:a,handle:l}}return n})}withFallback(t,n){const r=[{path:"*",element:P.createElement(t),handle:n},{index:!0,element:P.createElement(t),handle:n}];return this.update(r,(a,i,o)=>{if(a){if(!o)return a;const s=[...r];return o.some(({path:l})=>l==="*")&&s.shift(),o.some(({index:l,path:h})=>l??h?.includes("?"))&&s.pop(),{...a,children:[...o,...s]}}return i}),this}protect(t){return this.update(void 0,(n,r,a)=>{const i=ug(n,t);return i.children=a,i}),this}update(t,n=(r,a,i)=>({...r,...a,children:i})){return this.#e.push(r=>Nv([r,t],([a,i],o)=>{if(a&&i){const s=new Map(a.map(c=>Jd(c))),l=new Map(i.map(c=>Jd(c))),h=new Set([...s.keys(),...l.keys()]);for(const c of h){const u=s.get(c),p=l.get(c);let m;u&&p?m=n(u,p,o(u.children,p.children)):u?m=n(u,void 0,o(u.children,void 0)):m=n(void 0,p,o(void 0,p.children)),m&&s.set(c,m)}return[...s.values()]}else{if(a)return a.map(s=>n(s,void 0,o(s.children,void 0))).filter(Boolean);if(i)return i.map(s=>n(void 0,s,o(void 0,s.children))).filter(Boolean)}})),this}build(t){const n=this.#e.reduce((r,a)=>a(r)??r,void 0)??[];return{routes:n,router:n6([...n],{basename:new URL(document.baseURI).pathname,...t})}}}const zg="modulepreload",Mg=function(e,t){return new URL(e,t).href},Zd={},ts=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),s=o?.nonce||o?.getAttribute("nonce");a=Promise.all(n.map(l=>{if(l=Mg(l,r),l in Zd)return;Zd[l]=!0;const h=l.endsWith(".css"),c=h?'[rel="stylesheet"]':"";if(!!r)for(let m=i.length-1;m>=0;m--){const g=i[m];if(g.href===l&&(!h||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":zg,h||(p.as="script",p.crossOrigin=""),p.href=l,s&&p.setAttribute("nonce",s),document.head.appendChild(p),h)return new Promise((m,g)=>{p.addEventListener("load",m),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return a.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};class qd extends Error{}const Fo=window.document.body,fe=window,wg=1;function Iv(){return Object.keys(fe.Vaadin.Flow.clients).filter(e=>e!=="TypeScript").map(e=>fe.Vaadin.Flow.clients[e])}function eu(e,t){Iv().forEach(n=>n.sendEventMessage(wg,e,t))}let bg=class{constructor(t){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",Fo.$=Fo.$||[],this.config=t||{},fe.Vaadin=fe.Vaadin||{},fe.Vaadin.Flow=fe.Vaadin.Flow||{},fe.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const n=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||n&&n.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,fe.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,fe.Vaadin.connectionState.loadingFinished(),!fe.Vaadin.listener&&(fe.Vaadin.listener={},document.addEventListener("click",t=>{t.target&&(t.target.hasAttribute("router-link")?this.navigation="link":t.composedPath().some(n=>n.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async t=>{if(this.pathname=t.pathname,fe.Vaadin.connectionState.online)try{await this.flowInit()}catch(n){if(n instanceof qd)return fe.Vaadin.connectionState.state=Ne.CONNECTION_LOST,this.offlineStubAction();throw n}else return this.offlineStubAction();return this.container.onBeforeEnter=(n,r)=>this.flowNavigate(n,r),this.container.onBeforeLeave=(n,r)=>this.flowLeave(n,r),this.container}}async flowLeave(t,n){const{connectionState:r}=fe.Vaadin;return this.pathname===t.pathname||!this.isFlowClientLoaded()||r.offline?Promise.resolve({}):new Promise(a=>{this.loadingStarted(),this.container.serverConnected=i=>{var o;a(n&&i?n.prevent():(o=n?.continue)===null||o===void 0?void 0:o.call(n)),this.loadingFinished()},eu("ui-leave-navigation",{route:this.getFlowRoutePath(t),query:this.getFlowRouteQuery(t)})})}async flowNavigate(t,n){return this.response?new Promise(r=>{this.loadingStarted(),this.container.serverConnected=(a,i)=>{var o;n&&a?r(n.prevent()):n&&n.redirect&&i?r(n.redirect(i.pathname)):((o=n?.continue)===null||o===void 0||o.call(n),this.container.style.display="",r(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},eu("ui-navigate",{route:this.getFlowRoutePath(t),query:this.getFlowRouteQuery(t),appShellTitle:this.appShellTitle,historyState:history.state,trigger:this.navigation}),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(t){return decodeURIComponent(t.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(t){return t.search&&t.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:t,appConfig:n}=this.response;typeof t=="string"&&await this.loadScript(t);const{appId:r}=n,a=`flow-container-${r.toLowerCase()}`,i=document.querySelector(a);i?this.container=i:(this.container=document.createElement(a),this.container.id=r),Fo.$[r]=this.container,(await ts(()=>import("./FlowBootstrap-BRNFttkU.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(r),await this.config.imports());const s=await ts(()=>import("./FlowClient-Ccq10N4j.js"),[],import.meta.url);await this.flowInitClient(s),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(t){return new Promise((n,r)=>{const a=document.createElement("script");a.onload=()=>n(),a.onerror=r,a.src=t,document.body.appendChild(a)})}injectAppIdScript(t){const n=t.substring(0,t.lastIndexOf("-")),r=document.createElement("script");r.type="module",r.setAttribute("data-app-id",n),document.body.append(r)}async flowInitClient(t){return t.init(),new Promise(n=>{const r=setInterval(()=>{Iv().reduce((i,o)=>i||o.isActive(),!1)||(clearInterval(r),n())},5)})}async flowInitUi(){const t=fe.Vaadin&&fe.Vaadin.TypeScript&&fe.Vaadin.TypeScript.initial;return t?(fe.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((n,r)=>{const i=new XMLHttpRequest,o=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;i.open("GET",o),i.onerror=()=>r(new qd(`Invalid server response when initializing Flow UI.
        ${i.status}
        ${i.responseText}`)),i.onload=()=>{const s=i.getResponseHeader("content-type");s&&s.indexOf("application/json")!==-1?n(JSON.parse(i.responseText)):i.onerror()},i.send()})}addConnectionIndicator(){He.create(),fe.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){fe.Vaadin.connectionState.state=Ne.RECONNECTING;const t=new XMLHttpRequest;t.open("HEAD","sw.js"),t.onload=()=>{fe.Vaadin.connectionState.state=Ne.CONNECTED},t.onerror=()=>{fe.Vaadin.connectionState.state=Ne.CONNECTION_LOST},setTimeout(()=>t.send(),50)}}),fe.addEventListener("offline",()=>{this.isFlowClientLoaded()||(fe.Vaadin.connectionState.state=Ne.CONNECTION_LOST)})}async offlineStubAction(){const t=document.createElement("iframe");t.setAttribute("src","./offline-stub.html"),t.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let r;const a=()=>{r!==void 0&&(fe.Vaadin.connectionState.removeStateChangeListener(r),r=void 0)};return t.onBeforeEnter=(i,o,s)=>{r=()=>{fe.Vaadin.connectionState.online&&(a(),s.render(i,!1))},fe.Vaadin.connectionState.addStateChangeListener(r)},t.onBeforeLeave=(i,o,s)=>{a()},t}isFlowClientLoaded(){return this.response!==void 0}};const _g=new bg({imports:()=>ts(()=>import("./generated-flow-imports-BH70Tib8.js"),[],import.meta.url)}),$o={render(){return Promise.resolve()}};function xg(e){const t=e.port,n=e.protocol,i=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${i}`}function Dv(e){if(e.href.startsWith(document.baseURI))return"/"+e.href.slice(document.baseURI.length)}function Ag(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let i=0;i<n.length;i++){const o=n[i];if(o.nodeName&&o.nodeName.toLowerCase()==="a"){t=o;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a")return;const r=t;if(r.target&&r.target.toLowerCase()!=="_self"||r.hasAttribute("download")||r.hasAttribute("router-ignore"))return;if(r.pathname===window.location.pathname&&r.hash!==""){window.location.hash=r.hash;return}if((r.origin||xg(r))===window.location.origin)return Dv(new URL(r.href,r.baseURI))}function tu(e,t){setTimeout(()=>window.dispatchEvent(new CustomEvent("vaadin-navigated",{detail:{pathname:e,search:t}})))}function Fv(){}const nu=()=>Fv;function Fh(){const e=P.useRef(null),t=Ch(),n=Km(({currentLocation:p,nextLocation:m})=>(o.current=o.current||m.pathname===p.pathname&&m.search===p.search&&m.hash===p.hash,!0)),{pathname:r,search:a,hash:i}=Xa(),o=P.useRef(!1),s=P.useRef(void 0),l=P.useCallback(p=>{const m=Ag(p);m&&(p&&p.preventDefault&&p.preventDefault(),o.current=!1,t(m))},[t]),h=P.useCallback(p=>{const m=p.detail,g=Dv(m);g&&(p.preventDefault(),t(g))},[t]),c=P.useCallback(p=>{const m="/"+p.detail.url;o.current=!p.detail.replace,t(m,{state:p.detail.state,replace:p.detail.replace})},[t]),u=P.useCallback(p=>()=>{t(p,{replace:!0})},[t]);return P.useEffect(()=>(window.addEventListener("vaadin-router-go",h),window.addEventListener("vaadin-navigate",c),()=>{window.removeEventListener("vaadin-router-go",h),window.removeEventListener("vaadin-navigate",c)}),[h,c]),P.useEffect(()=>()=>{s.current?.parentNode?.removeChild(s.current),s.current=void 0},[]),P.useEffect(()=>{if(n.state==="blocked"){if(o.current){n.proceed();return}const{pathname:p,search:m}=n.location,g=window?.Vaadin?.routesConfig||[];let b=zn(Array.from(g),window.location.pathname);b&&b.filter(T=>T.route?.element?.type?.name===Fh.name).length!=0?(s.current?.onBeforeEnter?.call(s?.current,{pathname:p,search:m},{prevent(){n.reset(),o.current=!1},redirect:u,continue(){n.proceed()}},$o),o.current=!0):Promise.resolve(s.current?.onBeforeLeave?.call(s?.current,{pathname:p,search:m},{prevent:nu},$o)).then(T=>{T===Fv&&s.current?s.current.serverConnected=y=>{y?n.reset():(n.proceed(),window.removeEventListener("click",l))}:(n.proceed(),window.removeEventListener("click",l))})}},[n.state,n.location]),P.useEffect(()=>{if(o.current){o.current=!1,tu(r,a);return}_g.serverSideRoutes[0].action({pathname:r,search:a}).then(p=>{const m=e.current?.parentNode;return m&&m!==p.parentNode&&(m.append(p),window.addEventListener("click",l),s.current=p),p.onBeforeEnter?.call(p,{pathname:r,search:a},{prevent:nu,redirect:u,continue(){tu(r,a)}},$o)}).then(p=>{typeof p=="function"&&p()})},[r,a,i]),ge.jsx("output",{ref:e})}Fh.type="FlowContainer";/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ct(e){const t=customElements.get(e.is);if(!t)Object.defineProperty(e,"version",{get(){return"24.4.4"}}),customElements.define(e.is,e);else{const n=t.version;n&&e.version&&n===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sg extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}ct(Sg);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $h=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(n,r,a){super.attributeChangedCallback(n,r,a),n==="theme"&&this._set_theme(a)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $v=[],ns=new Set,Bh=new Set;function Bv(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function Cg(e){return Bv(customElements.get(e))}function Eg(e=[]){return[e].flat(1/0).filter(t=>t instanceof Ph?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Uv(e,t){return(e||"").split(" ").some(n=>new RegExp(`^${n.split("*").join(".*")}$`,"u").test(t))}function jv(e){return e.map(t=>t.cssText).join(`
`)}const S1="vaadin-themable-mixin-style";function kg(e,t){const n=document.createElement("style");n.id=S1,n.textContent=jv(e),t.content.appendChild(n)}function Tg(e){if(!e.shadowRoot)return;const t=e.constructor;if(e instanceof Cn)[...e.shadowRoot.querySelectorAll("style")].forEach(n=>n.remove()),wv(e.shadowRoot,t.elementStyles);else{const n=e.shadowRoot.getElementById(S1),r=t.prototype._template;n.textContent=r.content.getElementById(S1).textContent}}function Pg(e){ns.forEach(t=>{const n=t.deref();n instanceof e?Tg(n):n||ns.delete(t)})}function Hv(e){if(e.prototype instanceof Cn)e.elementStyles=e.finalizeStyles(e.styles);else{const t=e.prototype._template;t.content.getElementById(S1).textContent=jv(e.getStylesForThis())}Bh.forEach(t=>{const n=customElements.get(t);n!==e&&n.prototype instanceof e&&Hv(n)})}function Lg(e,t){const n=e.__themes;return!n||!t?!1:n.some(r=>r.styles.some(a=>t.some(i=>i.cssText===a.cssText)))}function pe(e,t,n={}){t=Eg(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,n):$v.push({themeFor:e,styles:t,include:n.include,moduleId:n.moduleId}),e&&Bh.forEach(r=>{if(Uv(e,r)&&Cg(r)){const a=customElements.get(r);Lg(a,t)?console.warn(`Registering styles that already exist for ${r}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${r}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),Hv(a),Pg(a)}})}function rs(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():$v}function Rg(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function Vv(e){const t=[];return e.include&&[].concat(e.include).forEach(n=>{const r=rs().find(a=>a.moduleId===n);r?t.push(...Vv(r),...r.styles):console.warn(`Included moduleId ${n} not found in style registry`)},e.styles),t}function Og(e){const t=`${e}-default-theme`,n=rs().filter(r=>r.moduleId!==t&&Uv(r.themeFor,e)).map(r=>({...r,styles:[...Vv(r),...r.styles],includePriority:Rg(r.moduleId)})).sort((r,a)=>a.includePriority-r.includePriority);return n.length>0?n:rs().filter(r=>r.moduleId===t)}const e0=e=>class extends $h(e){constructor(){super(),ns.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&Bh.add(this.is),this.elementStyles)return;const n=this.prototype._template;!n||Bv(this)||kg(this.getStylesForThis(),n)}static finalizeStyles(n){const r=this.getStylesForThis();return n?[...[n].flat(1/0),...r]:r}static getStylesForThis(){const n=e.__themes||[],r=Object.getPrototypeOf(this.prototype),a=(r?r.constructor.__themes:[])||[];this.__themes=[...n,...a,...Og(this.is)];const i=this.__themes.flatMap(o=>o.styles);return i.filter((o,s)=>s===i.lastIndexOf(o))}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ng=(e,...t)=>{const n=document.createElement("style");n.id=e,n.textContent=t.map(r=>r.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",n)},_0=(e,...t)=>{Ng(`lumo-${e}`,t)};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ig=K`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;_0("color-props",Ig);const Uh=K`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;pe("",Uh,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dg=K`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;_0("font-icons",Dg);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fg=K`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;_0("sizing-props",Fg);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $g=K`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;_0("spacing-props",$g);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bg=K`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;K`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;_0("style-props",Bg);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ug=K`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,jh=K`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;pe("",jh,{moduleId:"lumo-typography"});_0("typography-props",Ug);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let jg=/(url\()([^)]*)(\))/g,Hg=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ei,zt;function va(e,t){if(e&&Hg.test(e)||e==="//")return e;if(Ei===void 0){Ei=!1;try{const n=new URL("b","http://a");n.pathname="c%20d",Ei=n.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Ei)try{return new URL(e,t).href}catch{return e}return zt||(zt=document.implementation.createHTMLDocument("temp"),zt.base=zt.createElement("base"),zt.head.appendChild(zt.base),zt.anchor=zt.createElement("a"),zt.body.appendChild(zt.anchor)),zt.base.href=t,zt.anchor.href=e,zt.anchor.href||e}function Hh(e,t){return e.replace(jg,function(n,r,a,i){return r+"'"+va(a.replace(/["']/g,""),t)+"'"+i})}function Vh(e){return e.substring(0,e.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Vg=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Wg=Vg&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let Gg=window.Polymer&&window.Polymer.rootPath||Vh(document.baseURI||window.location.href),C1=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let as=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Qg=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Yg=window.Polymer&&window.Polymer.legacyOptimizations||!1,Kg=window.Polymer&&window.Polymer.legacyWarnings||!1,Xg=window.Polymer&&window.Polymer.syncInitialRender||!1,is=window.Polymer&&window.Polymer.legacyUndefined||!1,Jg=window.Polymer&&window.Polymer.orderedComputed||!1,ru=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Zg=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let qg=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let e8=0;const Et=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=e8++;function r(a){let i=a.__mixinSet;if(i&&i[n])return a;let o=t,s=o.get(a);if(!s){s=e(a),o.set(a,s);let l=Object.create(s.__mixinSet||i||null);l[n]=!0,s.__mixinSet=l}return s}return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Wh={},Wv={};function au(e,t){Wh[e]=Wv[e.toLowerCase()]=t}function iu(e){return Wh[e]||Wv[e.toLowerCase()]}function t8(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class Fa extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,n){if(t){let r=iu(t);return r&&n?r.querySelector(n):r}return null}attributeChangedCallback(t,n,r,a){n!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,n=va(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Vh(n)}return this.__assetpath}register(t){if(t=t||this.id,t){if(as&&iu(t)!==void 0)throw au(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,au(t,this),t8(this)}}}Fa.prototype.modules=Wh;customElements.define("dom-module",Fa);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const n8="link[rel=import][type~=css]",r8="include",ou="shady-unscoped";function Gv(e){return Fa.import(e)}function lu(e){let t=e.body?e.body:e;const n=Hh(t.textContent,e.baseURI),r=document.createElement("style");return r.textContent=n,r}function a8(e){const t=e.trim().split(/\s+/),n=[];for(let r=0;r<t.length;r++)n.push(...i8(t[r]));return n}function i8(e){const t=Gv(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const n=[];n.push(...Yv(t));const r=t.querySelector("template");r&&n.push(...Qv(r,t.assetpath)),t._styles=n}return t._styles}function Qv(e,t){if(!e._styles){const n=[],r=e.content.querySelectorAll("style");for(let a=0;a<r.length;a++){let i=r[a],o=i.getAttribute(r8);o&&n.push(...a8(o).filter(function(s,l,h){return h.indexOf(s)===l})),t&&(i.textContent=Hh(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function o8(e){let t=Gv(e);return t?Yv(t):[]}function Yv(e){const t=[],n=e.querySelectorAll(n8);for(let r=0;r<n.length;r++){let a=n[r];if(a.import){const i=a.import,o=a.hasAttribute(ou);if(o&&!i._unscopedStyle){const s=lu(i);s.setAttribute(ou,""),i._unscopedStyle=s}else i._style||(i._style=lu(i));t.push(o?i._unscopedStyle:i._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const En=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function os(e){return e.indexOf(".")>=0}function $n(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function l8(e,t){return e.indexOf(t+".")===0}function E1(e,t){return t.indexOf(e+".")===0}function k1(e,t,n){return t+n.slice(e.length)}function ta(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(".");for(let a=0;a<r.length;a++)t.push(r[a])}return t.join(".")}else return e}function Kv(e){return Array.isArray(e)?ta(e).split("."):e.toString().split(".")}function ut(e,t,n){let r=e,a=Kv(t);for(let i=0;i<a.length;i++){if(!r)return;let o=a[i];r=r[o]}return n&&(n.path=a.join(".")),r}function su(e,t,n){let r=e,a=Kv(t),i=a[a.length-1];if(a.length>1){for(let o=0;o<a.length-1;o++){let s=a[o];if(r=r[s],!r)return}r[i]=n}else r[t]=n;return a.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const T1={},s8=/-[a-z]/g,h8=/([A-Z])/g;function Xv(e){return T1[e]||(T1[e]=e.indexOf("-")<0?e:e.replace(s8,t=>t[1].toUpperCase()))}function q1(e){return T1[e]||(T1[e]=e.replace(h8,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let c8=0,Jv=0,pr=[],d8=0,ls=!1,Zv=document.createTextNode("");new window.MutationObserver(u8).observe(Zv,{characterData:!0});function u8(){ls=!1;const e=pr.length;for(let t=0;t<e;t++){let n=pr[t];if(n)try{n()}catch(r){setTimeout(()=>{throw r})}}pr.splice(0,e),Jv+=e}const p8={run(e){return ls||(ls=!0,Zv.textContent=d8++),pr.push(e),c8++},cancel(e){const t=e-Jv;if(t>=0){if(!pr[t])throw new Error("invalid async handle: "+e);pr[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const v8=p8,qv=Et(e=>{class t extends e{static createProperties(r){const a=this.prototype;for(let i in r)i in a||a._createPropertyAccessor(i)}static attributeNameForProperty(r){return r.toLowerCase()}static typeForProperty(r){}_createPropertyAccessor(r,a){this._addPropertyToAttributeMap(r),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[r]||(this.__dataHasAccessor[r]=!0,this._definePropertyAccessor(r,a))}_addPropertyToAttributeMap(r){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let a=this.__dataAttributes[r];return a||(a=this.constructor.attributeNameForProperty(r),this.__dataAttributes[a]=r),a}_definePropertyAccessor(r,a){Object.defineProperty(this,r,{get(){return this.__data[r]},set:a?function(){}:function(i){this._setPendingProperty(r,i,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let r in this.__dataHasAccessor)this.hasOwnProperty(r)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[r]=this[r],delete this[r])}_initializeInstanceProperties(r){Object.assign(this,r)}_setProperty(r,a){this._setPendingProperty(r,a)&&this._invalidateProperties()}_getProperty(r){return this.__data[r]}_setPendingProperty(r,a,i){let o=this.__data[r],s=this._shouldPropertyChange(r,a,o);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(r in this.__dataOld)&&(this.__dataOld[r]=o),this.__data[r]=a,this.__dataPending[r]=a),s}_isPropertyPending(r){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(r))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,v8.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const r=this.__data,a=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(r,a,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(r,a,i)),this.__dataCounter--}_shouldPropertiesChange(r,a,i){return!!a}_propertiesChanged(r,a,i){}_shouldPropertyChange(r,a,i){return i!==a&&(i===i||a===a)}attributeChangedCallback(r,a,i,o){a!==i&&this._attributeToProperty(r,i),super.attributeChangedCallback&&super.attributeChangedCallback(r,a,i,o)}_attributeToProperty(r,a,i){if(!this.__serializing){const o=this.__dataAttributes,s=o&&o[r]||r;this[s]=this._deserializeValue(a,i||this.constructor.typeForProperty(s))}}_propertyToAttribute(r,a,i){this.__serializing=!0,i=arguments.length<3?this[r]:i,this._valueToNodeAttribute(this,i,a||this.constructor.attributeNameForProperty(r)),this.__serializing=!1}_valueToNodeAttribute(r,a,i){const o=this._serializeValue(a);(i==="class"||i==="name"||i==="slot")&&(r=En(r)),o===void 0?r.removeAttribute(i):r.setAttribute(i,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(r){switch(typeof r){case"boolean":return r?"":void 0;default:return r?.toString()}}_deserializeValue(r,a){switch(a){case Boolean:return r!==null;case Number:return Number(r);default:return r}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const e3={};let ki=HTMLElement.prototype;for(;ki;){let e=Object.getOwnPropertyNames(ki);for(let t=0;t<e.length;t++)e3[e[t]]=!0;ki=Object.getPrototypeOf(ki)}const f8=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function m8(e,t){if(!e3[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}const g8=Et(e=>{const t=qv(e);class n extends t{static createPropertiesForAttributes(){let a=this.observedAttributes;for(let i=0;i<a.length;i++)this.prototype._createPropertyAccessor(Xv(a[i]))}static attributeNameForProperty(a){return q1(a)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(a){for(let i in a)this._setProperty(i,a[i])}_ensureAttribute(a,i){const o=this;o.hasAttribute(a)||this._valueToNodeAttribute(o,i,a)}_serializeValue(a){switch(typeof a){case"object":if(a instanceof Date)return a.toString();if(a){if(f8(a))return a;try{return JSON.stringify(a)}catch{return""}}default:return super._serializeValue(a)}}_deserializeValue(a,i){let o;switch(i){case Object:try{o=JSON.parse(a)}catch{o=a}break;case Array:try{o=JSON.parse(a)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${a}`)}break;case Date:o=isNaN(a)?String(a):Number(a),o=new Date(o);break;default:o=super._deserializeValue(a,i);break}return o}_definePropertyAccessor(a,i){m8(this,a),super._definePropertyAccessor(a,i)}_hasAccessor(a){return this.__dataHasAccessor&&this.__dataHasAccessor[a]}_isPropertyPending(a){return!!(this.__dataPending&&a in this.__dataPending)}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const y8={"dom-if":!0,"dom-repeat":!0};let hu=!1,cu=!1;function z8(){if(!hu){hu=!0;const e=document.createElement("textarea");e.placeholder="a",cu=e.placeholder===e.textContent}return cu}function M8(e){z8()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const w8=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,n,r)=>{const a=n.getAttribute(r);if(e&&r.startsWith("on-")){t.setAttribute(r,e.createScript(a,r));return}t.setAttribute(r,a)}})();function b8(e){let t=e.getAttribute("is");if(t&&y8[t]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){const{name:r}=n.attributes[0];w8(e,n,r),n.removeAttribute(r)}}return e}function t3(e,t){let n=t.parentInfo&&t3(e,t.parentInfo);if(n){for(let r=n.firstChild,a=0;r;r=r.nextSibling)if(t.parentIndex===a++)return r}else return e}function _8(e,t,n,r){r.id&&(t[r.id]=n)}function x8(e,t,n){if(n.events&&n.events.length)for(let r=0,a=n.events,i;r<a.length&&(i=a[r]);r++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function A8(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function S8(e,t,n){return e=e._methodHost||e,function(a){e[n]?e[n](a,a.detail):console.warn("listener method `"+n+"` not defined")}}const C8=Et(e=>{class t extends e{static _parseTemplate(r,a){if(!r._templateInfo){let i=r._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=!!a,i.stripWhiteSpace=a&&a.stripWhiteSpace||r.hasAttribute&&r.hasAttribute("strip-whitespace"),this._parseTemplateContent(r,i,{parent:null})}return r._templateInfo}static _parseTemplateContent(r,a,i){return this._parseTemplateNode(r.content,a,i)}static _parseTemplateNode(r,a,i){let o=!1,s=r;return s.localName=="template"&&!s.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(s,a,i)||o:s.localName==="slot"&&(a.hasInsertionPoint=!0),M8(s),s.firstChild&&this._parseTemplateChildNodes(s,a,i),s.hasAttributes&&s.hasAttributes()&&(o=this._parseTemplateNodeAttributes(s,a,i)||o),o||i.noted}static _parseTemplateChildNodes(r,a,i){if(!(r.localName==="script"||r.localName==="style"))for(let o=r.firstChild,s=0,l;o;o=l){if(o.localName=="template"&&(o=b8(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)o.textContent+=c.textContent,l=c.nextSibling,r.removeChild(c),c=l;if(a.stripWhiteSpace&&!o.textContent.trim()){r.removeChild(o);continue}}let h={parentIndex:s,parentInfo:i};this._parseTemplateNode(o,a,h)&&(h.infoIndex=a.nodeInfoList.push(h)-1),o.parentNode&&s++}}static _parseTemplateNestedTemplate(r,a,i){let o=r,s=this._parseTemplate(o,a);return(s.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),i.templateInfo=s,!0}static _parseTemplateNodeAttributes(r,a,i){let o=!1,s=Array.from(r.attributes);for(let l=s.length-1,h;h=s[l];l--)o=this._parseTemplateNodeAttribute(r,a,i,h.name,h.value)||o;return o}static _parseTemplateNodeAttribute(r,a,i,o,s){return o.slice(0,3)==="on-"?(r.removeAttribute(o),i.events=i.events||[],i.events.push({name:o.slice(3),value:s}),!0):o==="id"?(i.id=s,!0):!1}static _contentForTemplate(r){let a=r._templateInfo;return a&&a.content||r.content}_stampTemplate(r,a){r&&!r.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(r),a=a||this.constructor._parseTemplate(r);let i=a.nodeInfoList,o=a.content||r.content,s=document.importNode(o,!0);s.__noInsertionPoint=!a.hasInsertionPoint;let l=s.nodeList=new Array(i.length);s.$={};for(let h=0,c=i.length,u;h<c&&(u=i[h]);h++){let p=l[h]=t3(s,u);_8(this,s.$,p,u),A8(this,p,u,a),x8(this,p,u)}return s=s,s}_addMethodEventListenerToNode(r,a,i,o){o=o||r;let s=S8(o,a,i);return this._addEventListenerToNode(r,a,s),s}_addEventListenerToNode(r,a,i){r.addEventListener(a,i)}_removeEventListenerFromNode(r,a,i){r.removeEventListener(a,i)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let $a=0;const Ba=[],ce={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},n3="__computeInfo",E8=/[A-Z]/;function Bo(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let a in r){let i=r[a],o=r[a]=Array(i.length);for(let s=0;s<i.length;s++)o[s]=i[s]}return r}function na(e,t,n,r,a,i){if(t){let o=!1;const s=$a++;for(let l in n){let h=a?$n(l):l,c=t[h];if(c)for(let u=0,p=c.length,m;u<p&&(m=c[u]);u++)(!m.info||m.info.lastRun!==s)&&(!a||Gh(l,m.trigger))&&(m.info&&(m.info.lastRun=s),m.fn(e,l,n,r,m.info,a,i),o=!0)}return o}return!1}function k8(e,t,n,r,a,i,o,s){let l=!1,h=o?$n(r):r,c=t[h];if(c)for(let u=0,p=c.length,m;u<p&&(m=c[u]);u++)(!m.info||m.info.lastRun!==n)&&(!o||Gh(r,m.trigger))&&(m.info&&(m.info.lastRun=n),m.fn(e,r,a,i,m.info,o,s),l=!0);return l}function Gh(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&l8(n,e))||!!(t.wildcard&&E1(n,e))}else return!0}function du(e,t,n,r,a){let i=typeof a.method=="string"?e[a.method]:a.method,o=a.property;i?i.call(e,e.__data[o],r[o]):a.dynamicFn||console.warn("observer method `"+a.method+"` not defined")}function T8(e,t,n,r,a){let i=e[ce.NOTIFY],o,s=$a++;for(let h in t)t[h]&&(i&&k8(e,i,s,h,n,r,a)||a&&P8(e,h,n))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function P8(e,t,n){let r=$n(t);if(r!==t){let a=q1(r)+"-changed";return r3(e,a,n[t],t),!0}return!1}function r3(e,t,n,r){let a={value:n,queueProperty:!0};r&&(a.path=r),En(e).dispatchEvent(new CustomEvent(t,{detail:a}))}function L8(e,t,n,r,a,i){let s=(i?$n(t):t)!=t?t:null,l=s?ut(e,s):e.__data[t];s&&l===void 0&&(l=n[t]),r3(e,a.eventName,l,s)}function R8(e,t,n,r,a){let i,o=e.detail,s=o&&o.path;s?(r=k1(n,r,s),i=o&&o.value):i=e.currentTarget[n],i=a?!i:i,(!t[ce.READ_ONLY]||!t[ce.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,i,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function O8(e,t,n,r,a){let i=e.__data[t];C1&&(i=C1(i,a.attrName,"attribute",e)),e._propertyToAttribute(t,a.attrName,i)}function N8(e,t,n,r){let a=e[ce.COMPUTE];if(a)if(Jg){$a++;const i=D8(e),o=[];for(let l in t)uu(l,a,o,i,r);let s;for(;s=o.shift();)a3(e,"",t,n,s)&&uu(s.methodInfo,a,o,i,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let i=t;for(;na(e,a,i,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),i=e.__dataPending,e.__dataPending=null}}const I8=(e,t,n)=>{let r=0,a=t.length-1,i=-1;for(;r<=a;){const o=r+a>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)a=o-1;else{i=o;break}}i<0&&(i=a+1),t.splice(i,0,e)},uu=(e,t,n,r,a)=>{const i=a?$n(e):e,o=t[i];if(o)for(let s=0;s<o.length;s++){const l=o[s];l.info.lastRun!==$a&&(!a||Gh(e,l.trigger))&&(l.info.lastRun=$a,I8(l.info,n,r))}};function D8(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const n=e[ce.COMPUTE];let{counts:r,ready:a,total:i}=F8(e),o;for(;o=a.shift();){t.set(o,t.size);const s=n[o];s&&s.forEach(l=>{const h=l.info.methodInfo;--i,--r[h]===0&&a.push(h)})}i!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function F8(e){const t=e[n3],n={},r=e[ce.COMPUTE],a=[];let i=0;for(let o in t){const s=t[o];i+=n[o]=s.args.filter(l=>!l.literal).length+(s.dynamicFn?1:0)}for(let o in r)t[o]||a.push(o);return{counts:n,ready:a,total:i}}function a3(e,t,n,r,a){let i=ss(e,t,n,r,a);if(i===Ba)return!1;let o=a.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,i,!0):(e[o]=i,!1)}function $8(e,t,n){let r=e.__dataLinkedPaths;if(r){let a;for(let i in r){let o=r[i];E1(i,t)?(a=k1(i,o,t),e._setPendingPropertyOrPath(a,n,!0,!0)):E1(o,t)&&(a=k1(o,i,t),e._setPendingPropertyOrPath(a,n,!0,!0))}}}function Uo(e,t,n,r,a,i,o){n.bindings=n.bindings||[];let s={kind:r,target:a,parts:i,literal:o,isCompound:i.length!==1};if(n.bindings.push(s),V8(s)){let{event:h,negate:c}=s.parts[0];s.listenerEvent=h||q1(a)+"-changed",s.listenerNegate=c}let l=t.nodeInfoList.length;for(let h=0;h<s.parts.length;h++){let c=s.parts[h];c.compoundIndex=h,B8(e,t,s,c,l)}}function B8(e,t,n,r,a){if(!r.literal)if(n.kind==="attribute"&&n.target[0]==="-")console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let i=r.dependencies,o={index:a,binding:n,part:r,evaluator:e};for(let s=0;s<i.length;s++){let l=i[s];typeof l=="string"&&(l=o3(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:U8,info:o,trigger:l})}}}function U8(e,t,n,r,a,i,o){let s=o[a.index],l=a.binding,h=a.part;if(i&&h.source&&t.length>h.source.length&&l.kind=="property"&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let c=n[t];t=k1(h.source,l.target,t),s._setPendingPropertyOrPath(t,c,!1,!0)&&e._enqueueClient(s)}else{let c=a.evaluator._evaluateBinding(e,h,t,n,r,i);c!==Ba&&j8(e,s,l,h,c)}}function j8(e,t,n,r,a){if(a=H8(t,a,n,r),C1&&(a=C1(a,n.target,n.kind,t)),n.kind=="attribute")e._valueToNodeAttribute(t,a,n.target);else{let i=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?(!t[ce.READ_ONLY]||!t[ce.READ_ONLY][i])&&t._setPendingProperty(i,a)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,a)}}function H8(e,t,n,r){if(n.isCompound){let a=e.__dataCompoundStorage[n.target];a[r.compoundIndex]=t,t=a.join("")}return n.kind!=="attribute"&&(n.target==="textContent"||n.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function V8(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function W8(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let a=0;a<r.length;a++){let i=r[a],o=n[a],s=i.bindings;if(s)for(let l=0;l<s.length;l++){let h=s[l];G8(o,h),Q8(o,e,h)}o.__dataHost=e}}function G8(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,a=new Array(r.length);for(let o=0;o<r.length;o++)a[o]=r[o].literal;let i=t.target;n[i]=a,t.literal&&t.kind=="property"&&(i==="className"&&(e=En(e)),e[i]=t.literal)}}function Q8(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(a){R8(a,t,n.target,r.source,r.negate)})}}function pu(e,t,n,r,a,i){i=t.static||i&&(typeof i!="object"||i[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:a,dynamicFn:i};for(let s=0,l;s<t.args.length&&(l=t.args[s]);s++)l.literal||e._addPropertyEffect(l.rootProperty,n,{fn:r,info:o,trigger:l});return i&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function ss(e,t,n,r,a){let i=e._methodHost||e,o=i[a.methodName];if(o){let s=e._marshalArgs(a.args,t,n);return s===Ba?Ba:o.apply(i,s)}else a.dynamicFn||console.warn("method `"+a.methodName+"` not defined")}const Y8=[],i3="(?:[a-zA-Z_$][\\w.:$\\-*]*)",K8="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",X8="(?:'(?:[^'\\\\]|\\\\.)*')",J8='(?:"(?:[^"\\\\]|\\\\.)*")',Z8="(?:"+X8+"|"+J8+")",vu="(?:("+i3+"|"+K8+"|"+Z8+")\\s*)",q8="(?:"+vu+"(?:,\\s*"+vu+")*)",e7="(?:\\(\\s*(?:"+q8+"?)\\)\\s*)",t7="("+i3+"\\s*"+e7+"?)",n7="(\\[\\[|{{)\\s*",r7="(?:]]|}})",a7="(?:(!)\\s*)?",i7=n7+a7+t7+r7,fu=new RegExp(i7,"g");function mu(e){let t="";for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||""}return t}function jo(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let r={methodName:t[1],static:!0,args:Y8};if(t[2].trim()){let a=t[2].replace(/\\,/g,"&comma;").split(",");return o7(a,r)}else return r}return null}function o7(e,t){return t.args=e.map(function(n){let r=o3(n);return r.literal||(t.static=!1),r},this),t}function o3(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},r=t[0];switch(r==="-"&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':n.value=t.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=$n(t),n.structured=os(t),n.structured&&(n.wildcard=t.slice(-2)==".*",n.wildcard&&(n.name=t.slice(0,-2)))),n}function gu(e,t,n){let r=ut(e,n);return r===void 0&&(r=t[n]),r}function l3(e,t,n,r){const a={indexSplices:r};is&&!e._overrideLegacyUndefined&&(t.splices=a),e.notifyPath(n+".splices",a),e.notifyPath(n+".length",t.length),is&&!e._overrideLegacyUndefined&&(a.indexSplices=[])}function Gr(e,t,n,r,a,i){l3(e,t,n,[{index:r,addedCount:a,removed:i,object:t,type:"splice"}])}function l7(e){return e[0].toUpperCase()+e.substring(1)}const s7=Et(e=>{const t=C8(g8(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return ce}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Qr.length){let a=Qr[Qr.length-1];a._enqueueClient(this),this.__dataHost=a}}_initializeProtoProperties(a){this.__data=Object.create(a),this.__dataPending=Object.create(a),this.__dataOld={}}_initializeInstanceProperties(a){let i=this[ce.READ_ONLY];for(let o in a)(!i||!i[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=a[o])}_addPropertyEffect(a,i,o){this._createPropertyAccessor(a,i==ce.READ_ONLY);let s=Bo(this,i,!0)[a];s||(s=this[i][a]=[]),s.push(o)}_removePropertyEffect(a,i,o){let s=Bo(this,i,!0)[a],l=s.indexOf(o);l>=0&&s.splice(l,1)}_hasPropertyEffect(a,i){let o=this[i];return!!(o&&o[a])}_hasReadOnlyEffect(a){return this._hasPropertyEffect(a,ce.READ_ONLY)}_hasNotifyEffect(a){return this._hasPropertyEffect(a,ce.NOTIFY)}_hasReflectEffect(a){return this._hasPropertyEffect(a,ce.REFLECT)}_hasComputedEffect(a){return this._hasPropertyEffect(a,ce.COMPUTE)}_setPendingPropertyOrPath(a,i,o,s){if(s||$n(Array.isArray(a)?a[0]:a)!==a){if(!s){let l=ut(this,a);if(a=su(this,a,i),!a||!super._shouldPropertyChange(a,i,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(a,i,o))return $8(this,a,i),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[a])return this._setPendingProperty(a,i,o);this[a]=i}return!1}_setUnmanagedPropertyToNode(a,i,o){(o!==a[i]||typeof o=="object")&&(i==="className"&&(a=En(a)),a[i]=o)}_setPendingProperty(a,i,o){let s=this.__dataHasPaths&&os(a),l=s?this.__dataTemp:this.__data;return this._shouldPropertyChange(a,i,l[a])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),a in this.__dataOld||(this.__dataOld[a]=this.__data[a]),s?this.__dataTemp[a]=i:this.__data[a]=i,this.__dataPending[a]=i,(s||this[ce.NOTIFY]&&this[ce.NOTIFY][a])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[a]=o),!0):!1}_setProperty(a,i){this._setPendingProperty(a,i,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(a){this.__dataPendingClients=this.__dataPendingClients||[],a!==this&&this.__dataPendingClients.push(a)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let a=this.__dataPendingClients;if(a){this.__dataPendingClients=null;for(let i=0;i<a.length;i++){let o=a[i];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(a,i){for(let o in a)(i||!this[ce.READ_ONLY]||!this[ce.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,a[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(a,i,o){let s=this.__dataHasPaths;this.__dataHasPaths=!1;let l;N8(this,i,o,s),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(i,o,s),this._flushClients(),na(this,this[ce.REFLECT],i,o,s),na(this,this[ce.OBSERVE],i,o,s),l&&T8(this,l,i,o,s),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(a,i,o){this[ce.PROPAGATE]&&na(this,this[ce.PROPAGATE],a,i,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,a,i,o)}_runEffectsForTemplate(a,i,o,s){const l=(h,c)=>{na(this,a.propertyEffects,h,o,c,a.nodeList);for(let u=a.firstChild;u;u=u.nextSibling)this._runEffectsForTemplate(u,h,o,c)};a.runEffects?a.runEffects(l,i,s):l(i,s)}linkPaths(a,i){a=ta(a),i=ta(i),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[a]=i}unlinkPaths(a){a=ta(a),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[a]}notifySplices(a,i){let o={path:""},s=ut(this,a,o);l3(this,s,o.path,i)}get(a,i){return ut(i||this,a)}set(a,i,o){o?su(o,a,i):(!this[ce.READ_ONLY]||!this[ce.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,i,!0)&&this._invalidateProperties()}push(a,...i){let o={path:""},s=ut(this,a,o),l=s.length,h=s.push(...i);return i.length&&Gr(this,s,o.path,l,i.length,[]),h}pop(a){let i={path:""},o=ut(this,a,i),s=!!o.length,l=o.pop();return s&&Gr(this,o,i.path,o.length,0,[l]),l}splice(a,i,o,...s){let l={path:""},h=ut(this,a,l);i<0?i=h.length-Math.floor(-i):i&&(i=Math.floor(i));let c;return arguments.length===2?c=h.splice(i):c=h.splice(i,o,...s),(s.length||c.length)&&Gr(this,h,l.path,i,s.length,c),c}shift(a){let i={path:""},o=ut(this,a,i),s=!!o.length,l=o.shift();return s&&Gr(this,o,i.path,0,0,[l]),l}unshift(a,...i){let o={path:""},s=ut(this,a,o),l=s.unshift(...i);return i.length&&Gr(this,s,o.path,0,i.length,[]),l}notifyPath(a,i){let o;if(arguments.length==1){let s={path:""};i=ut(this,a,s),o=s.path}else Array.isArray(a)?o=ta(a):o=a;this._setPendingPropertyOrPath(o,i,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(a,i){this._addPropertyEffect(a,ce.READ_ONLY),i&&(this["_set"+l7(a)]=function(o){this._setProperty(a,o)})}_createPropertyObserver(a,i,o){let s={property:a,method:i,dynamicFn:!!o};this._addPropertyEffect(a,ce.OBSERVE,{fn:du,info:s,trigger:{name:a}}),o&&this._addPropertyEffect(i,ce.OBSERVE,{fn:du,info:s,trigger:{name:i}})}_createMethodObserver(a,i){let o=jo(a);if(!o)throw new Error("Malformed observer expression '"+a+"'");pu(this,o,ce.OBSERVE,ss,null,i)}_createNotifyingProperty(a){this._addPropertyEffect(a,ce.NOTIFY,{fn:L8,info:{eventName:q1(a)+"-changed",property:a}})}_createReflectedProperty(a){let i=this.constructor.attributeNameForProperty(a);i[0]==="-"?console.warn("Property "+a+" cannot be reflected to attribute "+i+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(a,ce.REFLECT,{fn:O8,info:{attrName:i}})}_createComputedProperty(a,i,o){let s=jo(i);if(!s)throw new Error("Malformed computed expression '"+i+"'");const l=pu(this,s,ce.COMPUTE,a3,a,o);Bo(this,n3)[a]=l}_marshalArgs(a,i,o){const s=this.__data,l=[];for(let h=0,c=a.length;h<c;h++){let{name:u,structured:p,wildcard:m,value:g,literal:b}=a[h];if(!b)if(m){const T=E1(u,i),y=gu(s,o,T?i:u);g={path:T?i:u,value:y,base:T?ut(s,u):y}}else g=p?gu(s,o,u):s[u];if(is&&!this._overrideLegacyUndefined&&g===void 0&&a.length>1)return Ba;l[h]=g}return l}static addPropertyEffect(a,i,o){this.prototype._addPropertyEffect(a,i,o)}static createPropertyObserver(a,i,o){this.prototype._createPropertyObserver(a,i,o)}static createMethodObserver(a,i){this.prototype._createMethodObserver(a,i)}static createNotifyingProperty(a){this.prototype._createNotifyingProperty(a)}static createReadOnlyProperty(a,i){this.prototype._createReadOnlyProperty(a,i)}static createReflectedProperty(a){this.prototype._createReflectedProperty(a)}static createComputedProperty(a,i,o){this.prototype._createComputedProperty(a,i,o)}static bindTemplate(a){return this.prototype._bindTemplate(a)}_bindTemplate(a,i){let o=this.constructor._parseTemplate(a),s=this.__preBoundTemplateInfo==o;if(!s)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(i)if(o=Object.create(o),o.wasPreBound=s,!this.__templateInfo)this.__templateInfo=o;else{const l=a._parentTemplateInfo||this.__templateInfo,h=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=h,h?h.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(a,i,o){let s=a.hostProps=a.hostProps||{};s[i]=!0;let l=a.propertyEffects=a.propertyEffects||{};(l[i]=l[i]||[]).push(o)}_stampTemplate(a,i){i=i||this._bindTemplate(a,!0),Qr.push(this);let o=super._stampTemplate(a,i);if(Qr.pop(),i.nodeList=o.nodeList,!i.wasPreBound){let s=i.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)s.push(l)}return o.templateInfo=i,W8(this,i),this.__dataClientsReady&&(this._runEffectsForTemplate(i,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(a){const i=a.templateInfo,{previousSibling:o,nextSibling:s,parent:l}=i;o?o.nextSibling=s:l&&(l.firstChild=s),s?s.previousSibling=o:l&&(l.lastChild=o),i.nextSibling=i.previousSibling=null;let h=i.childNodes;for(let c=0;c<h.length;c++){let u=h[c];En(En(u).parentNode).removeChild(u)}}static _parseTemplateNode(a,i,o){let s=t._parseTemplateNode.call(this,a,i,o);if(a.nodeType===Node.TEXT_NODE){let l=this._parseBindings(a.textContent,i);l&&(a.textContent=mu(l)||" ",Uo(this,i,o,"text","textContent",l),s=!0)}return s}static _parseTemplateNodeAttribute(a,i,o,s,l){let h=this._parseBindings(l,i);if(h){let c=s,u="property";E8.test(s)?u="attribute":s[s.length-1]=="$"&&(s=s.slice(0,-1),u="attribute");let p=mu(h);return p&&u=="attribute"&&(s=="class"&&a.hasAttribute("class")&&(p+=" "+a.getAttribute(s)),a.setAttribute(s,p)),u=="attribute"&&c=="disable-upgrade$"&&a.setAttribute(s,""),a.localName==="input"&&c==="value"&&a.setAttribute(c,""),a.removeAttribute(c),u==="property"&&(s=Xv(s)),Uo(this,i,o,u,s,h,p),!0}else return t._parseTemplateNodeAttribute.call(this,a,i,o,s,l)}static _parseTemplateNestedTemplate(a,i,o){let s=t._parseTemplateNestedTemplate.call(this,a,i,o);const l=a.parentNode,h=o.templateInfo,c=l.localName==="dom-if",u=l.localName==="dom-repeat";ru&&(c||u)&&(l.removeChild(a),o=o.parentInfo,o.templateInfo=h,o.noted=!0,s=!1);let p=h.hostProps;if(Zg&&c)p&&(i.hostProps=Object.assign(i.hostProps||{},p),ru||(o.parentInfo.noted=!0));else{let m="{";for(let g in p){let b=[{mode:m,source:g,dependencies:[g],hostProp:!0}];Uo(this,i,o,"property","_host_"+g,b)}}return s}static _parseBindings(a,i){let o=[],s=0,l;for(;(l=fu.exec(a))!==null;){l.index>s&&o.push({literal:a.slice(s,l.index)});let h=l[1][0],c=!!l[2],u=l[3].trim(),p=!1,m="",g=-1;h=="{"&&(g=u.indexOf("::"))>0&&(m=u.substring(g+2),u=u.substring(0,g),p=!0);let b=jo(u),T=[];if(b){let{args:y,methodName:f}=b;for(let k=0;k<y.length;k++){let O=y[k];O.literal||T.push(O)}let z=i.dynamicFns;(z&&z[f]||b.static)&&(T.push(f),b.dynamicFn=!0)}else T.push(u);o.push({source:u,mode:h,negate:c,customEvent:p,signature:b,dependencies:T,event:m}),s=fu.lastIndex}if(s&&s<a.length){let h=a.substring(s);h&&o.push({literal:h})}return o.length?o:null}static _evaluateBinding(a,i,o,s,l,h){let c;return i.signature?c=ss(a,o,s,l,i.signature):o!=i.source?c=ut(a,i.source):h&&os(o)?c=ut(a,o):c=a.__data[o],i.negate&&(c=!c),c}}return n}),Qr=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function h7(e){const t={};for(let n in e){const r=e[n];t[n]=typeof r=="function"?{type:r}:r}return t}const c7=Et(e=>{const t=qv(e);function n(i){const o=Object.getPrototypeOf(i);return o.prototype instanceof a?o:null}function r(i){if(!i.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",i))){let o=null;if(i.hasOwnProperty(JSCompiler_renameProperty("properties",i))){const s=i.properties;s&&(o=h7(s))}i.__ownProperties=o}return i.__ownProperties}class a extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(s=>this.prototype._addPropertyToAttributeMap(s)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=n(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=r(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=n(this);this.__properties=Object.assign({},o&&o._properties,r(this))}return this.__properties}static typeForProperty(o){const s=this._properties[o];return s&&s.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return a});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const d7="3.5.1",yu=window.ShadyCSS&&window.ShadyCSS.cssBuild,u7=Et(e=>{const t=c7(s7(e));function n(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let h=l._properties;for(let c in h){let u=h[c];"value"in u&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=u)}}return l.__propertyDefaults}function r(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function a(l,h,c,u){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(h)?console.warn(`Cannot redefine computed property '${h}'.`):l._createComputedProperty(h,c.computed,u)),c.readOnly&&!l._hasReadOnlyEffect(h)?l._createReadOnlyProperty(h,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(h)&&console.warn(`Cannot make readOnly property '${h}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(h)?l._createReflectedProperty(h):c.reflectToAttribute===!1&&l._hasReflectEffect(h)&&console.warn(`Cannot make reflected property '${h}' non-reflected.`),c.notify&&!l._hasNotifyEffect(h)?l._createNotifyingProperty(h):c.notify===!1&&l._hasNotifyEffect(h)&&console.warn(`Cannot make notify property '${h}' non-notify.`),c.observer&&l._createPropertyObserver(h,c.observer,u[c.observer]),l._addPropertyToAttributeMap(h)}function i(l,h,c,u){if(!yu){const p=h.content.querySelectorAll("style"),m=Qv(h),g=o8(c),b=h.content.firstElementChild;for(let y=0;y<g.length;y++){let f=g[y];f.textContent=l._processStyleText(f.textContent,u),h.content.insertBefore(f,b)}let T=0;for(let y=0;y<m.length;y++){let f=m[y],z=p[T];z!==f?(f=f.cloneNode(!0),z.parentNode.insertBefore(f,z)):T++,f.textContent=l._processStyleText(f.textContent,u)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(h,c),qg&&yu&&Wg){const p=h.content.querySelectorAll("style");if(p){let m="";Array.from(p).forEach(g=>{m+=g.textContent,g.parentNode.removeChild(g)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(m)}}}function o(l){let h=null;if(l&&(!as||Qg)&&(h=Fa.import(l,"template"),as&&!h))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return h}class s extends t{static get polymerElementVersion(){return d7}static _finalizeClass(){t._finalizeClass.call(this);const h=r(this);h&&this.createObservers(h,this._properties),this._prepareTemplate()}static _prepareTemplate(){let h=this.template;h&&(typeof h=="string"?(console.error("template getter must return HTMLTemplateElement"),h=null):Yg||(h=h.cloneNode(!0))),this.prototype._template=h}static createProperties(h){for(let c in h)a(this.prototype,c,h[c],h)}static createObservers(h,c){const u=this.prototype;for(let p=0;p<h.length;p++)u._createMethodObserver(h[p],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let h=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof h=="function"&&(h=h()),this._template=h!==void 0?h:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(h){this._template=h}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const h=this.importMeta;if(h)this._importPath=Vh(h.url);else{const c=Fa.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Gg,this.importPath=this.constructor.importPath;let h=n(this.constructor);if(h)for(let c in h){let u=h[c];if(this._canApplyPropertyDefault(c)){let p=typeof u.value=="function"?u.value.call(this):u.value;this._hasAccessor(c)?this._setPendingProperty(c,p,!0):this[c]=p}}}_canApplyPropertyDefault(h){return!this.hasOwnProperty(h)}static _processStyleText(h,c){return Hh(h,c)}static _finalizeTemplate(h){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const u=this.importPath,p=u?va(u):"";i(this,c,h,p),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(h){const c=En(this);if(c.attachShadow)return h?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:h}),c.shadowRoot.appendChild(h),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Xg&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(h){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,h)}resolveUrl(h,c){return!c&&this.importPath&&(c=va(this.importPath)),va(h,c)}static _parseTemplateContent(h,c,u){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,h,c,u)}static _addTemplatePropertyEffect(h,c,u){return Kg&&!(c in this._properties)&&!(u.info.part.signature&&u.info.part.signature.static)&&!u.info.part.hostProp&&!h.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,h,c,u)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zu=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class s3{constructor(t,n){c3(t,n);const r=n.reduce((a,i,o)=>a+h3(i)+t[o+1],t[0]);this.value=r.toString()}toString(){return this.value}}function h3(e){if(e instanceof s3)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function p7(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof s3)return h3(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const kt=function(t,...n){c3(t,n);const r=document.createElement("template");let a=n.reduce((i,o,s)=>i+p7(o)+t[s+1],t[0]);return zu&&(a=zu.createHTML(a)),r.innerHTML=a,r},c3=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const yt=u7(HTMLElement);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Mu=0,d3=0;const vr=[];let hs=!1;function v7(){hs=!1;const e=vr.length;for(let t=0;t<e;t++){const n=vr[t];if(n)try{n()}catch(r){setTimeout(()=>{throw r})}}vr.splice(0,e),d3+=e}const f7={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},m7={run(e){return window.requestAnimationFrame(e)},cancel(e){window.cancelAnimationFrame(e)}},g7={run(e){return window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16)},cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},y7={run(e){hs||(hs=!0,queueMicrotask(()=>v7())),vr.push(e);const t=Mu;return Mu+=1,t},cancel(e){const t=e-d3;if(t>=0){if(!vr[t])throw new Error(`invalid async handle: ${e}`);vr[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const z7=!1,M7=e=>e,Qh=typeof document.head.style.touchAction=="string",cs="__polymerGestures",Ho="__polymerGesturesHandled",ds="__polymerGesturesTouchAction",wu=25,bu=5,w7=2,b7=["mousedown","mousemove","mouseup","click"],_7=[0,1,4,2],x7=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Yh(e){return b7.indexOf(e)>-1}let u3=!1;(function(){try{const e=Object.defineProperty({},"passive",{get(){u3=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function A7(e){if(!(Yh(e)||e==="touchend")&&Qh&&u3&&z7)return{passive:!0}}const S7=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),C7={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function kn(e){const t=e.type;if(!Yh(t))return!1;if(t==="mousemove"){let r=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!x7&&(r=_7[e.which]||0),!!(r&1)}return(e.button===void 0?0:e.button)===0}function E7(e){if(e.type==="click"){if(e.detail===0)return!0;const t=Q0(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const n=t.getBoundingClientRect(),r=e.pageX,a=e.pageY;return!(r>=n.left&&r<=n.right&&a>=n.top&&a<=n.bottom)}return!1}const p0={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function k7(e){let t="auto";const n=v3(e);for(let r=0,a;r<n.length;r++)if(a=n[r],a[ds]){t=a[ds];break}return t}function p3(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function fr(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const v3=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Kh={},_n=[];function T7(e,t){let n=document.elementFromPoint(e,t),r=n;for(;r&&r.shadowRoot&&!window.ShadyDOM;){const a=r;if(r=r.shadowRoot.elementFromPoint(e,t),a===r)break;r&&(n=r)}return n}function Q0(e){const t=v3(e);return t.length>0?t[0]:e.target}function P7(e){const t=e.type,r=e.currentTarget[cs];if(!r)return;const a=r[t];if(!a)return;if(!e[Ho]&&(e[Ho]={},t.startsWith("touch"))){const o=e.changedTouches[0];if(t==="touchstart"&&e.touches.length===1&&(p0.touch.id=o.identifier),p0.touch.id!==o.identifier)return;Qh||(t==="touchstart"||t==="touchmove")&&L7(e)}const i=e[Ho];if(!i.skip){for(let o=0,s;o<_n.length;o++)s=_n[o],a[s.name]&&!i[s.name]&&s.flow&&s.flow.start.indexOf(e.type)>-1&&s.reset&&s.reset();for(let o=0,s;o<_n.length;o++)s=_n[o],a[s.name]&&!i[s.name]&&(i[s.name]=!0,s[t](e))}}function L7(e){const t=e.changedTouches[0],n=e.type;if(n==="touchstart")p0.touch.x=t.clientX,p0.touch.y=t.clientY,p0.touch.scrollDecided=!1;else if(n==="touchmove"){if(p0.touch.scrollDecided)return;p0.touch.scrollDecided=!0;const r=k7(e);let a=!1;const i=Math.abs(p0.touch.x-t.clientX),o=Math.abs(p0.touch.y-t.clientY);e.cancelable&&(r==="none"?a=!0:r==="pan-x"?a=o>i:r==="pan-y"&&(a=i>o)),a?e.preventDefault():P1("track")}}function _u(e,t,n){return Kh[t]?(R7(e,t,n),!0):!1}function R7(e,t,n){const r=Kh[t],a=r.deps,i=r.name;let o=e[cs];o||(e[cs]=o={});for(let s=0,l,h;s<a.length;s++)l=a[s],!(S7&&Yh(l)&&l!=="click")&&(h=o[l],h||(o[l]=h={_count:0}),h._count===0&&e.addEventListener(l,P7,A7(l)),h[i]=(h[i]||0)+1,h._count=(h._count||0)+1);e.addEventListener(t,n),r.touchAction&&N7(e,r.touchAction)}function Xh(e){_n.push(e),e.emits.forEach(t=>{Kh[t]=e})}function O7(e){for(let t=0,n;t<_n.length;t++){n=_n[t];for(let r=0,a;r<n.emits.length;r++)if(a=n.emits[r],a===e)return n}return null}function N7(e,t){Qh&&e instanceof HTMLElement&&y7.run(()=>{e.style.touchAction=t}),e[ds]=t}function Jh(e,t,n){const r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=n,M7(e).dispatchEvent(r),r.defaultPrevented){const a=n.preventer||n.sourceEvent;a&&a.preventDefault&&a.preventDefault()}}function P1(e){const t=O7(e);t.info&&(t.info.prevent=!0)}Xh({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){fr(this.info)},mousedown(e){if(!kn(e))return;const t=Q0(e),n=this,r=i=>{kn(i)||(Yr("up",t,i),fr(n.info))},a=i=>{kn(i)&&Yr("up",t,i),fr(n.info)};p3(this.info,r,a),Yr("down",t,e)},touchstart(e){Yr("down",Q0(e),e.changedTouches[0],e)},touchend(e){Yr("up",Q0(e),e.changedTouches[0],e)}});function Yr(e,t,n,r){t&&Jh(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:r,prevent(a){return P1(a)}})}Xh({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(e){this.moves.length>w7&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,fr(this.info)},mousedown(e){if(!kn(e))return;const t=Q0(e),n=this,r=i=>{const o=i.clientX,s=i.clientY;xu(n.info,o,s)&&(n.info.state=n.info.started?i.type==="mouseup"?"end":"track":"start",n.info.state==="start"&&P1("tap"),n.info.addMove({x:o,y:s}),kn(i)||(n.info.state="end",fr(n.info)),t&&Vo(n.info,t,i),n.info.started=!0)},a=i=>{n.info.started&&r(i),fr(n.info)};p3(this.info,r,a),this.info.x=e.clientX,this.info.y=e.clientY},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(e){const t=Q0(e),n=e.changedTouches[0],r=n.clientX,a=n.clientY;xu(this.info,r,a)&&(this.info.state==="start"&&P1("tap"),this.info.addMove({x:r,y:a}),Vo(this.info,t,n),this.info.state="track",this.info.started=!0)},touchend(e){const t=Q0(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),Vo(this.info,t,n))}});function xu(e,t,n){if(e.prevent)return!1;if(e.started)return!0;const r=Math.abs(e.x-t),a=Math.abs(e.y-n);return r>=bu||a>=bu}function Vo(e,t,n){if(!t)return;const r=e.moves[e.moves.length-2],a=e.moves[e.moves.length-1],i=a.x-e.x,o=a.y-e.y;let s,l=0;r&&(s=a.x-r.x,l=a.y-r.y),Jh(t,"track",{state:e.state,x:n.clientX,y:n.clientY,dx:i,dy:o,ddx:s,ddy:l,sourceEvent:n,hover(){return T7(n.clientX,n.clientY)}})}Xh({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(e){kn(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click(e){kn(e)&&Au(this.info,e)},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(e){Au(this.info,e.changedTouches[0],e)}});function Au(e,t,n){const r=Math.abs(t.clientX-e.x),a=Math.abs(t.clientY-e.y),i=Q0(n||t);!i||C7[i.localName]&&i.hasAttribute("disabled")||(isNaN(r)||isNaN(a)||r<=wu&&a<=wu||E7(t))&&(e.prevent||Jh(i,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const f3=Et(e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(n){this._setAriaDisabled(n)}_setAriaDisabled(n){n?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const m3=Et(e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",n=>{this._onKeyDown(n)}),this.addEventListener("keyup",n=>{this._onKeyUp(n)})}_onKeyDown(n){switch(n.key){case"Enter":this._onEnter(n);break;case"Escape":this._onEscape(n);break}}_onKeyUp(n){}_onEnter(n){}_onEscape(n){}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const g3=e=>class extends f3(m3(e)){get _activeKeys(){return[" "]}ready(){super.ready(),_u(this,"down",n=>{this._shouldSetActive(n)&&this._setActive(!0)}),_u(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(n){return!this.disabled}_onKeyDown(n){super._onKeyDown(n),this._shouldSetActive(n)&&this._activeKeys.includes(n.key)&&(this._setActive(!0),document.addEventListener("keyup",r=>{this._activeKeys.includes(r.key)&&this._setActive(!1)},{once:!0}))}_setActive(n){this.toggleAttribute("active",n)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const d0=[];function us(e,t,n=e.getAttribute("dir")){t?e.setAttribute("dir",t):n!=null&&e.removeAttribute("dir")}function ps(){return document.documentElement.getAttribute("dir")}function I7(){const e=ps();d0.forEach(t=>{us(t,e)})}const D7=new MutationObserver(I7);D7.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const y3=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:n=>n||"",toAttribute:n=>n===""?null:n}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),us(this,ps(),null))}attributeChangedCallback(n,r,a){if(super.attributeChangedCallback(n,r,a),n!=="dir")return;const i=ps(),o=a===i&&d0.indexOf(this)===-1,s=!a&&r&&d0.indexOf(this)===-1;o||s?(this.__subscribe(),us(this,i,a)):a!==i&&r===i&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=d0.includes(this),this.__unsubscribe()}_valueToNodeAttribute(n,r,a){a==="dir"&&r===""&&!n.hasAttribute("dir")||super._valueToNodeAttribute(n,r,a)}_attributeToProperty(n,r,a){n==="dir"&&!r?this.dir="":super._attributeToProperty(n,r,a)}__subscribe(){d0.includes(this)||d0.push(this)}__unsubscribe(){d0.includes(this)&&d0.splice(d0.indexOf(this),1)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F7=new Set(["children","localName","ref","style","className"]),Su=new WeakMap,Cu=(e,t,n,r,a)=>{const i=a?.[t];i===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((o,s,l)=>{let h=Su.get(o);h===void 0&&Su.set(o,h=new Map);let c=h.get(s);l!==void 0?c===void 0?(h.set(s,c={handleEvent:l}),o.addEventListener(s,c)):c.handleEvent=l:c!==void 0&&(h.delete(s),o.removeEventListener(s,c))})(e,i,n)},$7=({react:e,tagName:t,elementClass:n,events:r,displayName:a})=>{const i=new Set(Object.keys(r??{})),o=e.forwardRef((s,l)=>{const h=e.useRef(new Map),c=e.useRef(null),u={},p={};for(const[m,g]of Object.entries(s))F7.has(m)?u[m==="className"?"class":m]=g:i.has(m)||m in n.prototype?p[m]=g:u[m]=g;return e.useLayoutEffect(()=>{if(c.current===null)return;const m=new Map;for(const g in p)Cu(c.current,g,s[g],h.current.get(g),r),h.current.delete(g),m.set(g,s[g]);for(const[g,b]of h.current)Cu(c.current,g,void 0,b,r);h.current=m}),e.useLayoutEffect(()=>{c.current?.removeAttribute("defer-hydration")},[]),u.suppressHydrationWarning=!0,e.createElement(t,{...u,ref:e.useCallback(m=>{c.current=m,typeof l=="function"?l(m):l!==null&&(l.current=m)},[l])})});return o.displayName=a??n.name,o};window.Vaadin??={},window.Vaadin.registrations??=[],window.Vaadin.registrations.push({is:"@vaadin/react-components",version:"24.4.4"});function Bn(e){const{elementClass:t}=e;return $7("_properties"in t?{...e,elementClass:{name:t.name,prototype:{...t._properties,hidden:Boolean}}}:e)}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rn=Et(e=>typeof e.prototype.addController=="function"?e:class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(n=>{n.hostConnected&&n.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(n=>{n.hostDisconnected&&n.hostDisconnected()})}addController(n){this.__controllers.add(n),this.$!==void 0&&this.isConnected&&n.hostConnected&&n.hostConnected()}removeController(n){this.__controllers.delete(n)}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Zh=!1;window.addEventListener("keydown",()=>{Zh=!0},{capture:!0});window.addEventListener("mousedown",()=>{Zh=!1},{capture:!0});function vs(){let e=document.activeElement||document.body;for(;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}function B7(){return Zh}function z3(e){const t=e.style;if(t.visibility==="hidden"||t.display==="none")return!0;const n=window.getComputedStyle(e);return n.visibility==="hidden"||n.display==="none"}function U7(e,t){const n=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return n===0||r===0?r>n:n>r}function j7(e,t){const n=[];for(;e.length>0&&t.length>0;)U7(e[0],t[0])?n.push(t.shift()):n.push(e.shift());return n.concat(e,t)}function fs(e){const t=e.length;if(t<2)return e;const n=Math.ceil(t/2),r=fs(e.slice(0,n)),a=fs(e.slice(n));return j7(r,a)}function ms(e){return e.offsetParent===null&&e.clientWidth===0&&e.clientHeight===0?!0:z3(e)}function H7(e){return e.matches('[tabindex="-1"]')?!1:e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function M3(e){return e.getRootNode().activeElement===e}function V7(e){if(!H7(e))return-1;const t=e.getAttribute("tabindex")||0;return Number(t)}function w3(e,t){if(e.nodeType!==Node.ELEMENT_NODE||z3(e))return!1;const n=e,r=V7(n);let a=r>0;r>=0&&t.push(n);let i=[];return n.localName==="slot"?i=n.assignedNodes({flatten:!0}):i=(n.shadowRoot||n).children,[...i].forEach(o=>{a=w3(o,t)||a}),a}function W7(e){const t=[];return w3(e,t)?fs(t):t}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qh=Et(e=>class extends e{get _keyboardActive(){return B7()}ready(){this.addEventListener("focusin",n=>{this._shouldSetFocus(n)&&this._setFocused(!0)}),this.addEventListener("focusout",n=>{this._shouldRemoveFocus(n)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(n){this.toggleAttribute("focused",n),this.toggleAttribute("focus-ring",n&&this._keyboardActive)}_shouldSetFocus(n){return!0}_shouldRemoveFocus(n){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const G7=e=>class extends f3(e){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(n,r){super._disabledChanged(n,r),n?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):r&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(n){this.disabled&&n!==-1&&(this._lastTabIndex=n,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function nM(e){const t=[];for(;e;){if(e.nodeType===Node.DOCUMENT_NODE){t.push(e);break}if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(e),e=e.host;continue}if(e.assignedSlot){e=e.assignedSlot;continue}e=e.parentNode}return t}function b3(e){const t=[];let n;return e.localName==="slot"?n=e.assignedElements():(t.push(e),n=[...e.children]),n.forEach(r=>t.push(...b3(r))),t}function ec(e){return e?new Set(e.split(" ")):new Set}function eo(e){return e?[...e].join(" "):""}function _3(e,t,n){const r=ec(e.getAttribute(t));r.add(n),e.setAttribute(t,eo(r))}function Q7(e,t,n){const r=ec(e.getAttribute(t));if(r.delete(n),r.size===0){e.removeAttribute(t);return}e.setAttribute(t,eo(r))}function Y7(e){return e.nodeType===Node.TEXT_NODE&&e.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class x3{constructor(t,n){this.slot=t,this.callback=n,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let n=[];const r=[],a=[];t.length&&(n=t.filter(i=>!this._storedNodes.includes(i))),this._storedNodes.length&&this._storedNodes.forEach((i,o)=>{const s=t.indexOf(i);s===-1?r.push(i):s!==o&&a.push(i)}),(n.length||r.length||a.length)&&this.callback({addedNodes:n,movedNodes:a,removedNodes:r}),this._storedNodes=t}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let K7=0;function A3(){return K7++}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xt extends EventTarget{static generateId(t,n){return`${n||"default"}-${t.localName}-${A3()}`}constructor(t,n,r,a={}){super();const{initializer:i,multiple:o,observe:s,useUniqueId:l}=a;this.host=t,this.slotName=n,this.tagName=r,this.observe=typeof s=="boolean"?s:!0,this.multiple=typeof o=="boolean"?o:!1,this.slotInitializer=i,o&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(t,n))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const n=this.attachDefaultNode();n&&(this.nodes=[n],this.initNode(n))}else this.nodes=t,t.forEach(n=>{this.initAddedNode(n)})}attachDefaultNode(){const{host:t,slotName:n,tagName:r}=this;let a=this.defaultNode;return!a&&r&&(a=document.createElement(r),a instanceof Element&&(n!==""&&a.setAttribute("slot",n),this.defaultNode=a)),a&&(this.node=a,t.appendChild(a)),a}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(n=>n.nodeType===Node.ELEMENT_NODE&&n.slot===t||n.nodeType===Node.TEXT_NODE&&n.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:n}=this;n&&n(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,n=t===""?"slot:not([name])":`slot[name=${t}]`,r=this.host.shadowRoot.querySelector(n);this.__slotObserver=new x3(r,({addedNodes:a,removedNodes:i})=>{const o=this.multiple?this.nodes:[this.node],s=a.filter(l=>!Y7(l)&&!o.includes(l));i.length&&(this.nodes=o.filter(l=>!i.includes(l)),i.forEach(l=>{this.teardownNode(l)})),s&&s.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...o,...s].filter(l=>l!==this.defaultNode),s.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=s[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tc extends Xt{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(t){this.ariaTarget=t;const n=this.node;n&&(n.ariaTarget=t)}setContext(t){this.context=t;const n=this.node;n&&(n.context=t)}setManual(t){this.manual=t;const n=this.node;n&&(n.manual=t)}setOpened(t){this.opened=t;const n=this.node;n&&(n.opened=t)}setPosition(t){this.position=t;const n=this.node;n&&(n._position=t)}setShouldShow(t){this.shouldShow=t;const n=this.node;n&&(n.shouldShow=t)}setTarget(t){this.target=t;const n=this.node;n&&(n.target=t)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}const X7=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ki=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function J7(){function e(){return!0}return S3(e)}function Z7(){try{return q7()?!0:e9()?Ki?!t9():!J7():!1}catch{return!1}}function q7(){return localStorage.getItem("vaadin.developmentmode.force")}function e9(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function t9(){return!!(Ki&&Object.keys(Ki).map(t=>Ki[t]).filter(t=>t.productionMode).length>0)}function S3(e,t){if(typeof e!="function")return;const n=X7.exec(e.toString());if(n)try{e=new Function(n[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return e(t)}window.Vaadin=window.Vaadin||{};const Eu=function(e,t){if(window.Vaadin.developmentMode)return S3(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Z7());function n9(){}const r9=function(){if(typeof Eu=="function")return Eu(n9)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const gs=new Set;class Cr{static debounce(t,n,r){return t instanceof Cr?t._cancelAsync():t=new Cr,t.setConfig(n,r),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,n){this._asyncModule=t,this._callback=n,this._timer=this._asyncModule.run(()=>{this._timer=null,gs.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),gs.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function a9(e){gs.add(e)}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){r9()};let Wo;const ku=new Set,x0=e=>class extends y3(e){static finalize(){super.finalize();const{is:n}=this;n&&!ku.has(n)&&(window.Vaadin.registrations.push(this),ku.add(n),window.Vaadin.developmentModeCallback&&(Wo=Cr.debounce(Wo,g7,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),a9(Wo)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const i9=e=>class extends m3(e){get focused(){return(this._getItems()||[]).find(M3)}get _vertical(){return!0}focus(){const n=this._getItems();if(Array.isArray(n)){const r=this._getAvailableIndex(n,0,null,a=>!ms(a));r>=0&&this._focus(r)}}_getItems(){return Array.from(this.children)}_onKeyDown(n){if(super._onKeyDown(n),n.metaKey||n.ctrlKey)return;const{key:r}=n,a=this._getItems()||[],i=a.indexOf(this.focused);let o,s;const h=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(r)?(s=-h,o=i-h):this.__isNextKey(r)?(s=h,o=i+h):r==="Home"?(s=1,o=0):r==="End"&&(s=-1,o=a.length-1),o=this._getAvailableIndex(a,o,s,c=>!ms(c)),o>=0&&(n.preventDefault(),this._focus(o,!0))}__isPrevKey(n){return this._vertical?n==="ArrowUp":n==="ArrowLeft"}__isNextKey(n){return this._vertical?n==="ArrowDown":n==="ArrowRight"}_focus(n,r=!1){const a=this._getItems();this._focusItem(a[n],r)}_focusItem(n){n&&(n.focus(),n.setAttribute("focus-ring",""))}_getAvailableIndex(n,r,a,i){const o=n.length;let s=r;for(let l=0;typeof s=="number"&&l<o;l+=1,s+=a||1){s<0?s=o-1:s>=o&&(s=0);const h=n[s];if(!h.hasAttribute("disabled")&&this.__isMatchingItem(h,i))return s}return-1}__isMatchingItem(n,r){return typeof r=="function"?r(n):!0}};pe("vaadin-app-layout",K`
    [part='navbar'],
    [part='drawer'] {
      background-color: var(--lumo-base-color);
      background-clip: padding-box;
    }

    [part='navbar'] {
      min-height: var(--lumo-size-xl);
      border-bottom: 1px solid var(--lumo-contrast-10pct);
    }

    [part='navbar'][bottom] {
      border-bottom: none;
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    [part='drawer'] {
      border-inline-end: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer'] {
      border-inline-end: none;
      box-shadow: var(--lumo-box-shadow-s);
    }

    :host([primary-section='navbar']) [part='navbar'] {
      border: none;
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host([primary-section='drawer']:not([overlay])) [part='drawer'] {
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }
  `,{moduleId:"lumo-app-layout"});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const to=e=>e.test(navigator.userAgent),ys=e=>e.test(navigator.platform),o9=e=>e.test(navigator.vendor);to(/Android/u);to(/Chrome/u)&&o9(/Google Inc/u);to(/Firefox/u);const l9=ys(/^iPad/u)||ys(/^Mac/u)&&navigator.maxTouchPoints>1,s9=ys(/^iPhone/u),C3=s9||l9,h9=to(/^((?!chrome|android).)*safari/iu),c9=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2018 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function E3(){if(C3){const e=window.innerHeight,n=window.innerWidth>e,r=document.documentElement.clientHeight;n&&r>e?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${r-e}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}E3();window.addEventListener("resize",E3);const k3=document.createElement("template");k3.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(k3.content);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let L1=!1,T3=[],P3=[];function L3(){L1=!0,requestAnimationFrame(function(){L1=!1,d9(T3),setTimeout(function(){u9(P3)})})}function d9(e){for(;e.length;)R3(e.shift())}function u9(e){for(let t=0,n=e.length;t<n;t++)R3(e.shift())}function R3(e){const t=e[0],n=e[1],r=e[2];try{n.apply(t,r)}catch(a){setTimeout(()=>{throw a})}}function p9(e,t,n){L1||L3(),T3.push([e,t,n])}function nc(e,t,n){L1||L3(),P3.push([e,t,n])}/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let Gn=new WeakMap,Ti=new WeakMap,Pi={},Go=0;const Tu=e=>e&&e.nodeType===Node.ELEMENT_NODE,Qo=(...e)=>{console.error(`Error: ${e.join(" ")}. Skip setting aria-hidden.`)},v9=(e,t)=>Tu(e)?t.map(n=>{if(!Tu(n))return Qo(n,"is not a valid element"),null;let r=n;for(;r&&r!==e;){if(e.contains(r))return n;r=r.getRootNode().host}return Qo(n,"is not contained inside",e),null}).filter(n=>!!n):(Qo(e,"is not a valid element"),[]),f9=(e,t,n,r)=>{const a=v9(t,Array.isArray(e)?e:[e]);Pi[n]||(Pi[n]=new WeakMap);const i=Pi[n],o=[],s=new Set,l=new Set(a),h=u=>{if(!u||s.has(u))return;s.add(u);const p=u.assignedSlot;p&&h(p),h(u.parentNode||u.host)};a.forEach(h);const c=u=>{if(!u||l.has(u))return;const p=u.shadowRoot;(p?[...u.children,...p.children]:[...u.children]).forEach(g=>{if(!["template","script","style"].includes(g.localName))if(s.has(g))c(g);else{const b=g.getAttribute(r),T=b!==null&&b!=="false",y=(Gn.get(g)||0)+1,f=(i.get(g)||0)+1;Gn.set(g,y),i.set(g,f),o.push(g),y===1&&T&&Ti.set(g,!0),f===1&&g.setAttribute(n,"true"),T||g.setAttribute(r,"true")}})};return c(t),s.clear(),Go+=1,()=>{o.forEach(u=>{const p=Gn.get(u)-1,m=i.get(u)-1;Gn.set(u,p),i.set(u,m),p||(Ti.has(u)?Ti.delete(u):u.removeAttribute(r)),m||u.removeAttribute(n)}),Go-=1,Go||(Gn=new WeakMap,Gn=new WeakMap,Ti=new WeakMap,Pi={})}},m9=(e,t=document.body,n="data-aria-hidden")=>{const r=Array.from(Array.isArray(e)?e:[e]);return t&&r.push(...Array.from(t.querySelectorAll("[aria-live]"))),f9(r,t,n,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class O3{constructor(t,n){this.host=t,this.callback=typeof n=="function"?n:()=>t}showModal(){const t=this.callback();this.__showOthers=m9(t)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yo=[];class N3{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return W7(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(M3).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Yo.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Yo.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(Yo).pop()&&t.key==="Tab"){t.preventDefault();const n=t.shiftKey;this.__focusNextElement(n)}}__focusNextElement(t=!1){const n=this.__focusableElements,r=t?-1:1,a=this.__focusedElementIndex,i=(n.length+a+r)%n.length,o=n[i];o.focus(),o.localName==="input"&&o.select()}}/**
 * @license
 * Copyright (c) 2018 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class I3 extends x0(e0(rn(yt))){static get template(){return kt`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --_vaadin-app-layout-drawer-width: var(--vaadin-app-layout-drawer-width, 16em);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-block: var(--vaadin-app-layout-navbar-offset-top) var(--vaadin-app-layout-navbar-offset-bottom);
          padding-inline-start: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'] {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          inset-inline: 0;
          transition: inset-inline-start var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host([primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          inset-inline-start: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          inset-inline: var(--vaadin-app-layout-navbar-offset-left, 0) auto;
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: var(--_vaadin-app-layout-drawer-width);
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
          display: flex;
          flex-direction: column;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          inset: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          transform: translateX(100%);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host([drawer-opened]:not([overlay])) {
          padding-inline-start: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
            --_vaadin-app-layout-drawer-width: var(--vaadin-app-layout-drawer-width, 20em);
          }
        }

        /* If a vaadin-scroller is used in the drawer, allow it to take all remaining space and contain scrolling */
        [part='drawer'] ::slotted(vaadin-scroller) {
          flex: 1;
          overscroll-behavior: contain;
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar" on-slotchange="_updateTouchOptimizedMode"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer">
        <slot name="drawer" id="drawerSlot" on-slotchange="_updateDrawerSize"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden>
        <slot id="touchSlot" name="navbar touch-optimized" on-slotchange="_updateTouchOptimizedMode"></slot>
      </div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__onDrawerKeyDown=this.__onDrawerKeyDown.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__ariaModalController=new O3(this,()=>[...this.querySelectorAll('vaadin-drawer-toggle, [slot="drawer"]')]),this.__focusTrapController=new N3(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),p9(this,this._afterFirstRender),this._updateTouchOptimizedMode(),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{requestAnimationFrame(()=>{this.__isDrawerAnimating?this.__updateOffsetSizePending=!0:this._updateOffsetSize()})}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener),window.addEventListener("keydown",this.__onDrawerKeyDown)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded(),this.$.drawer.addEventListener("transitionstart",()=>{this.__isDrawerAnimating=!0}),this.$.drawer.addEventListener("transitionend",()=>{this.__updateOffsetSizePending&&(this.__updateOffsetSizePending=!1,this._updateOffsetSize()),requestAnimationFrame(()=>{this.__isDrawerAnimating=!1})})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener),window.removeEventListener("keydown",this.__onDrawerKeyDown)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,n){this.overlay&&(t?this.__trapFocusInDrawer():n&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,n=this.$.drawer;t===0?(n.setAttribute("hidden",""),this.style.setProperty("--_vaadin-app-layout-drawer-width",0)):(n.removeAttribute("hidden"),this.style.removeProperty("--_vaadin-app-layout-drawer-width")),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const n=this.$.navbarTop.getBoundingClientRect(),a=this.$.navbarBottom.getBoundingClientRect(),o=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${n.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${a.height}px`),this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${o.width}px`)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__ariaModalController.close(),this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,n){n&&window.removeEventListener(n,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",n=this.querySelectorAll('[slot*="navbar"]');n.length>0&&Array.from(n).forEach(r=>{r.getAttribute("slot").indexOf("touch-optimized")>-1&&(r.__touchOptimized=!0),t&&r.__touchOptimized?r.setAttribute("slot","navbar-bottom"):r.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),this.$.navbarBottom.querySelector("[name=navbar-bottom]").assignedNodes().length===0?this.$.navbarBottom.setAttribute("hidden",""):this.$.navbarBottom.removeAttribute("hidden"),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),nc(this,()=>{this.removeAttribute("no-anim")})}}ct(I3);var g9={onPrimarySectionChanged:"primary-section-changed",onDrawerOpenedChanged:"drawer-opened-changed",onOverlayChanged:"overlay-changed"},y9=Bn({elementClass:I3,events:g9,react:J0,tagName:"vaadin-app-layout"});const z9=K`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;pe("vaadin-button",z9,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const M9=K`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,w9=e=>e`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const b9=e=>class extends g3(G7(qh(e))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(n){super._onKeyDown(n),!(n.altKey||n.shiftKey||n.ctrlKey||n.metaKey)&&this._activeKeys.includes(n.key)&&(n.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const no=K`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;pe("",no,{moduleId:"lumo-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _9=K`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class x9{saveFocus(t){this.focusNode=t||vs()}restoreFocus(){const t=this.focusNode;t&&(vs()===document.body?setTimeout(()=>t.focus()):t.focus(),this.focusNode=null)}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const A9=e=>class extends rn(e){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new O3(this),this.__focusTrapController=new N3(this),this.__focusRestorationController=new x9}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const n=vs();return n===document.body||this._deepContains(n)}_deepContains(n){if(this.contains(n))return!0;let r=n;const a=n.ownerDocument;for(;r&&r!==a&&r!==this;)r=r.parentNode||r.host;return r===this}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xi=()=>Array.from(document.body.children).filter(e=>e instanceof HTMLElement&&e._hasOverlayStackMixin&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0),S9=e=>e===Xi().pop(),C9=e=>class extends e{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return S9(this)}bringToFront(){let n="";const r=Xi().filter(a=>a!==this).pop();r&&(n=r.__zIndex+1),this.style.zIndex=n,this.__zIndex=n||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Xi().forEach(n=>{n!==this&&(n.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const n=Xi();let r;for(;(r=n.pop())&&!(r!==this&&(r.$.overlay.style.removeProperty("pointer-events"),!r.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const E9=e=>class extends A9(C9(e)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:{type:Object},model:{type:Object},renderer:{type:Object},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),C3&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(n){const r=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:n}});this.dispatchEvent(r),r.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const n=window.innerHeight,a=window.innerWidth>n,i=document.documentElement.clientHeight;a&&i>n?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${i-n}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(n,r,a,i){const o=this._oldOwner!==r||this._oldModel!==a;this._oldModel=a,this._oldOwner=r;const s=this._oldRenderer!==n,l=this._oldRenderer!==void 0;this._oldRenderer=n;const h=this._oldOpened!==i;this._oldOpened=i,s&&l&&(this.innerHTML="",delete this._$litPart$),i&&n&&(s||h||o)&&this.requestContentUpdate()}_modelessChanged(n){n?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(n,r){n?(this._saveFocus(),this._animatedOpening(),nc(this,()=>{this._trapFocus();const a=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(a)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):r&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(n){n&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const n=getComputedStyle(this),r=n.getPropertyValue("animation-name");return!(n.getPropertyValue("display")==="none")&&r&&r!=="none"}_enqueueAnimation(n,r){const a=`__${n}Handler`,i=o=>{o&&o.target!==this||(r(),this.removeEventListener("animationend",i),delete this[a])};this[a]=i,this.addEventListener("animationend",i)}_flushAnimation(n){const r=`__${n}Handler`;typeof this[r]=="function"&&this[r]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(n){this._mouseDownInside=n.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(n){this._mouseUpInside=n.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(n){return this._last}_outsideClickListener(n){if(n.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(n))return;const r=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:n}});this.dispatchEvent(r),this.opened&&!r.defaultPrevented&&this.close(n)}_keydownListener(n){if(this._last&&!(this.modeless&&!n.composedPath().includes(this.$.overlay))&&n.key==="Escape"){const r=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:n}});this.dispatchEvent(r),this.opened&&!r.defaultPrevented&&this.close(n)}}};/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const k9=e=>class extends e{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(n,r){if(!r||n===void 0)return;const{classList:a}=r;if(this.__initialClasses||(this.__initialClasses=new Set(a)),Array.isArray(this.__previousClasses)){const o=this.__previousClasses.filter(s=>!this.__initialClasses.has(s));o.length>0&&a.remove(...o)}const i=typeof n=="string"?n.split(" ").filter(Boolean):[];i.length>0&&a.add(...i),this.__previousClasses=i}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const T9=K`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`;_0("user-color-props",T9);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const D3=K`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;pe("",D3,{moduleId:"lumo-menu-overlay-core"});const P9=K`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,L9=[no,D3,P9];pe("",L9,{moduleId:"lumo-menu-overlay"});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function F3(e,t){const{scrollLeft:n}=e;return t!=="rtl"?n:e.scrollWidth-e.clientWidth+n}function R9(e,t,n){t!=="rtl"?e.scrollLeft=n:e.scrollLeft=e.clientWidth-e.scrollWidth+n}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const O9=e=>class extends i9(e){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(){this._observer&&this._observer.flush();const n=Array.isArray(this.items)?this.items:[],r=this._getAvailableIndex(n,0,null,a=>a.tabIndex===0&&!ms(a));r>=0?this._focus(r):super.focus()}ready(){super.ready(),this.addEventListener("click",r=>this._onClick(r));const n=this.shadowRoot.querySelector("slot:not([name])");this._observer=new x3(n,()=>{this._setItems(this._filterItems(b3(this)))})}_getItems(){return this.items}_enhanceItems(n,r,a,i){if(!i&&n){this.setAttribute("aria-orientation",r||"vertical"),n.forEach(s=>{r?s.setAttribute("orientation",r):s.removeAttribute("orientation")}),this._setFocusable(a||0);const o=n[a];n.forEach(s=>{s.selected=s===o}),o&&!o.disabled&&this._scrollToItem(a)}}_filterItems(n){return n.filter(r=>r._hasVaadinItemMixin)}_onClick(n){if(n.metaKey||n.shiftKey||n.ctrlKey||n.defaultPrevented)return;const r=this._filterItems(n.composedPath())[0];let a;r&&!r.disabled&&(a=this.items.indexOf(r))>=0&&(this.selected=a)}_searchKey(n,r){this._searchReset=Cr.debounce(this._searchReset,f7.after(500),()=>{this._searchBuf=""}),this._searchBuf+=r.toLowerCase(),this.items.some(i=>this.__isMatchingKey(i))||(this._searchBuf=r.toLowerCase());const a=this._searchBuf.length===1?n+1:n;return this._getAvailableIndex(this.items,a,1,i=>this.__isMatchingKey(i)&&getComputedStyle(i).display!=="none")}__isMatchingKey(n){return n.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(n){if(n.metaKey||n.ctrlKey)return;const r=n.key,a=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(r)&&r.length===1){const i=this._searchKey(a,r);i>=0&&this._focus(i);return}super._onKeyDown(n)}_isItemHidden(n){return getComputedStyle(n).display==="none"}_setFocusable(n){n=this._getAvailableIndex(this.items,n,1);const r=this.items[n];this.items.forEach(a=>{a.tabIndex=a===r?0:-1})}_focus(n){this.items.forEach((r,a)=>{r.focused=a===n}),this._setFocusable(n),this._scrollToItem(n),super._focus(n)}_scrollToItem(n){const r=this.items[n];if(!r)return;const a=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],i=this._scrollerElement.getBoundingClientRect(),o=(this.items[n+1]||r).getBoundingClientRect(),s=(this.items[n-1]||r).getBoundingClientRect();let l=0;!this._isRTL&&o[a[1]]>=i[a[1]]||this._isRTL&&o[a[1]]<=i[a[1]]?l=o[a[1]]-i[a[1]]:(!this._isRTL&&s[a[0]]<=i[a[0]]||this._isRTL&&s[a[0]]>=i[a[0]])&&(l=s[a[0]]-i[a[0]]),this._scroll(l)}_scroll(n){if(this._vertical)this._scrollerElement.scrollTop+=n;else{const r=this.getAttribute("dir")||"ltr",a=F3(this._scrollerElement,r)+n;R9(this._scrollerElement,r,a)}}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const N9=e=>class extends g3(qh(e)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(n){this._value=n}ready(){super.ready();const n=this.getAttribute("value");n!==null&&(this.value=n)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(n){return!this.disabled&&!(n.type==="keydown"&&n.defaultPrevented)}_selectedChanged(n){this.setAttribute("aria-selected",n)}_disabledChanged(n){super._disabledChanged(n),n&&(this.selected=!1,this.blur())}_onKeyDown(n){super._onKeyDown(n),this._activeKeys.includes(n.key)&&!n.defaultPrevented&&(n.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yt=document.createElement("div");Yt.style.position="fixed";Yt.style.clip="rect(0px, 0px, 0px, 0px)";Yt.setAttribute("aria-live","polite");document.body.appendChild(Yt);let Li;function Ri(e,t={}){const n=t.mode||"polite",r=t.timeout===void 0?150:t.timeout;n==="alert"?(Yt.removeAttribute("aria-live"),Yt.removeAttribute("role"),Li=Cr.debounce(Li,m7,()=>{Yt.setAttribute("role","alert")})):(Li&&Li.cancel(),Yt.removeAttribute("role"),Yt.setAttribute("aria-live",n)),Yt.textContent="",setTimeout(()=>{Yt.textContent=e},r)}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oi=new ResizeObserver(e=>{setTimeout(()=>{e.forEach(t=>{t.target.resizables?t.target.resizables.forEach(n=>{n._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),$3=Et(e=>class extends e{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),Oi.observe(this),this._observeParent){const n=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;n.resizables||(n.resizables=new Set,Oi.observe(n)),n.resizables.add(this),this.__parent=n}}disconnectedCallback(){super.disconnectedCallback(),Oi.unobserve(this);const n=this.__parent;if(this._observeParent&&n){const r=n.resizables;r&&(r.delete(this),r.size===0&&Oi.unobserve(n)),this.__parent=null}}_onResize(n){}});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */pe("vaadin-button",M9,{moduleId:"vaadin-button-styles"});class I9 extends b9(x0(e0(rn(yt)))){static get is(){return"vaadin-button"}static get template(){return w9(kt)}ready(){super.ready(),this._tooltipController=new tc(this),this.addController(this._tooltipController)}}ct(I9);/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ko=new Map;function rc(e){return Ko.has(e)||Ko.set(e,new WeakMap),Ko.get(e)}function B3(e,t){e&&e.removeAttribute(t)}function U3(e,t){if(!e||!t)return;const n=rc(t);if(n.has(e))return;const r=ec(e.getAttribute(t));n.set(e,new Set(r))}function pM(e,t){if(!e||!t)return;const n=rc(t),r=n.get(e);!r||r.size===0?e.removeAttribute(t):_3(e,t,eo(r)),n.delete(e)}function Pu(e,t,n={newId:null,oldId:null,fromUser:!1}){if(!e||!t)return;const{newId:r,oldId:a,fromUser:i}=n,o=rc(t),s=o.get(e);if(!i&&s){a&&s.delete(a),r&&s.add(r);return}i&&(s?r||o.delete(e):U3(e,t),B3(e,t)),Q7(e,t,a);const l=r||eo(s);l&&_3(e,t,l)}function vM(e,t){U3(e,t),B3(e,t)}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const D9=K`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;pe("",D9,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const j3=K`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;pe("",j3,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xo=new WeakMap;function F9(e){return Xo.has(e)||Xo.set(e,new Set),Xo.get(e)}function $9(e,t){const n=document.createElement("style");n.textContent=e,t===document?document.head.appendChild(n):t.insertBefore(n,t.firstChild)}const B9=Et(e=>class extends e{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const n=this.getRootNode(),r=F9(n);this.slotStyles.forEach(a=>{r.has(a)||($9(a,n),r.add(a))})}}),H3=K`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0 !important;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;pe("vaadin-dialog-overlay",[no,H3],{moduleId:"lumo-dialog"});pe("vaadin-confirm-dialog-overlay",[no,H3,K`
      [part='header'] ::slotted(h3) {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
      }

      [part='message'] {
        width: 25em;
        min-width: 100%;
        max-width: 100%;
      }

      ::slotted([slot$='button'][theme~='tertiary']) {
        padding-left: var(--lumo-space-s);
        padding-right: var(--lumo-space-s);
      }

      [part='cancel-button'] {
        flex-grow: 1;
      }

      @media (max-width: 360px) {
        [part='footer'] {
          flex-direction: column-reverse;
          align-items: stretch;
          padding: var(--lumo-space-s) var(--lumo-space-l);
          gap: var(--lumo-space-s);
        }

        ::slotted([slot$='button']) {
          width: 100%;
          margin: 0;
        }
      }
    `],{moduleId:"lumo-confirm-dialog-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const U9=e=>class extends e{static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},modeless:{type:Boolean,value:!1}}}ready(){super.ready();const n=this.$.overlay;n.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),n.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._overlayElement=n}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),setTimeout(()=>{this.isConnected||(this.__restoreOpened=this.opened,this.opened=!1)})}_onOverlayOpened(n){n.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(n){this.noCloseOnOutsideClick&&n.preventDefault()}_handleEscPress(n){this.noCloseOnEsc&&n.preventDefault()}_bringOverlayToFront(){this.modeless&&this._overlayElement.bringToFront()}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const j9=K`
  [part='header'],
  [part='header-content'],
  [part='footer'] {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: none;
    pointer-events: none;
    z-index: 1;
  }

  [part='header'] {
    flex-wrap: nowrap;
  }

  ::slotted([slot='header-content']),
  ::slotted([slot='title']),
  ::slotted([slot='footer']) {
    display: contents;
    pointer-events: auto;
  }

  ::slotted([slot='title']) {
    font: inherit !important;
    overflow-wrap: anywhere;
  }

  [part='header-content'] {
    flex: 1;
  }

  :host([has-title]) [part='header-content'],
  [part='footer'] {
    justify-content: flex-end;
  }

  :host(:not([has-title]):not([has-header])) [part='header'],
  :host(:not([has-header])) [part='header-content'],
  :host(:not([has-title])) [part='title'],
  :host(:not([has-footer])) [part='footer'] {
    display: none !important;
  }

  :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
    height: auto;
  }

  @media (min-height: 320px) {
    :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      flex: 1;
      overflow: auto;
    }
  }

  /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
  [part='content'] {
    min-width: 12em; /* matches the default <vaadin-text-field> width */
  }

  :host([has-bounds-set]) [part='overlay'] {
    max-width: none;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`;K`
  [part='overlay'] {
    position: relative;
    overflow: visible;
    max-height: 100%;
    display: flex;
  }

  [part='content'] {
    box-sizing: border-box;
    height: 100%;
  }

  .resizer-container {
    overflow: auto;
    flex-grow: 1;
    border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
  }

  [part='overlay'][style] .resizer-container {
    min-height: 100%;
    width: 100%;
  }

  :host(:not([resizable])) .resizer {
    display: none;
  }

  :host([resizable]) [part='title'] {
    cursor: move;
    -webkit-user-select: none;
    user-select: none;
  }

  .resizer {
    position: absolute;
    height: 16px;
    width: 16px;
  }

  .resizer.edge {
    height: 8px;
    width: 8px;
    inset: -4px;
  }

  .resizer.edge.n {
    width: auto;
    bottom: auto;
    cursor: ns-resize;
  }

  .resizer.ne {
    top: -4px;
    right: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.e {
    height: auto;
    left: auto;
    cursor: ew-resize;
  }

  .resizer.se {
    bottom: -4px;
    right: -4px;
    cursor: nwse-resize;
  }

  .resizer.edge.s {
    width: auto;
    top: auto;
    cursor: ns-resize;
  }

  .resizer.sw {
    bottom: -4px;
    left: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.w {
    height: auto;
    right: auto;
    cursor: ew-resize;
  }

  .resizer.nw {
    top: -4px;
    left: -4px;
    cursor: nwse-resize;
  }
`;/**
 * @license
 * Copyright (c) 2018 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const H9=e=>class extends e{static get properties(){return{ariaLabel:{type:String,value:""},contentHeight:{type:String},contentWidth:{type:String}}}static get observers(){return["__updateContentHeight(contentHeight, _overlayElement)","__updateContentWidth(contentWidth, _overlayElement)"]}__updateDimension(n,r,a){const i=`--_vaadin-confirm-dialog-content-${r}`;a?n.style.setProperty(i,a):n.style.removeProperty(i)}__updateContentHeight(n,r){r&&this.__updateDimension(r,"height",n)}__updateContentWidth(n,r){r&&this.__updateDimension(r,"width",n)}};/**
 * @license
 * Copyright (c) 2018 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const V9=K`
  :host {
    --_vaadin-confirm-dialog-content-width: auto;
    --_vaadin-confirm-dialog-content-height: auto;
  }

  [part='overlay'] {
    width: var(--_vaadin-confirm-dialog-content-width);
    height: var(--_vaadin-confirm-dialog-content-height);
  }

  ::slotted([slot='header']) {
    pointer-events: auto;
  }

  /* Make buttons clickable */
  [part='footer'] > * {
    pointer-events: all;
  }
`;/**
 * @license
 * Copyright (c) 2018 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */pe("vaadin-confirm-dialog-overlay",[_9,j9,V9],{moduleId:"vaadin-confirm-dialog-overlay-styles"});class W9 extends E9(y3(e0(yt))){static get is(){return"vaadin-confirm-dialog-overlay"}static get template(){return kt`
      <div part="backdrop" id="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <section id="resizerContainer" class="resizer-container">
          <header part="header"><slot name="header"></slot></header>
          <div part="content" id="content">
            <div part="message"><slot></slot></div>
          </div>
          <footer part="footer" role="toolbar">
            <div part="cancel-button">
              <slot name="cancel-button"></slot>
            </div>
            <div part="reject-button">
              <slot name="reject-button"></slot>
            </div>
            <div part="confirm-button">
              <slot name="confirm-button"></slot>
            </div>
          </footer>
        </section>
      </div>
    `}ready(){super.ready(),this.setAttribute("has-header",""),this.setAttribute("has-footer","")}}ct(W9);class G9 extends H9(U9(k9($h(yt)))){static get is(){return"vaadin-confirm-dialog-dialog"}static get template(){return kt`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-confirm-dialog-overlay
        id="overlay"
        opened="[[opened]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        aria-label$="[[ariaLabel]]"
        restore-focus-on-close
        focus-trap
      ></vaadin-confirm-dialog-overlay>
    `}}ct(G9);/**
 * @license
 * Copyright (c) 2018 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Q9=e=>class extends e{static get properties(){return{accessibleDescriptionRef:{type:String},opened:{type:Boolean,value:!1,notify:!0},header:{type:String,value:""},message:{type:String,value:""},confirmText:{type:String,value:"Confirm"},confirmTheme:{type:String,value:"primary"},noCloseOnEsc:{type:Boolean,value:!1},rejectButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},rejectText:{type:String,value:"Reject"},rejectTheme:{type:String,value:"error tertiary"},cancelButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},cancelText:{type:String,value:"Cancel"},cancelTheme:{type:String,value:"tertiary"},overlayClass:{type:String},_cancelButton:{type:Object},_confirmButton:{type:Object},_headerNode:{type:Object},_messageNodes:{type:Array,value:()=>[]},_overlayElement:{type:Object,sync:!0},_rejectButton:{type:Object},_contentHeight:{type:String},_contentWidth:{type:String}}}static get observers(){return["__updateConfirmButton(_confirmButton, confirmText, confirmTheme)","__updateCancelButton(_cancelButton, cancelText, cancelTheme, cancelButtonVisible)","__updateHeaderNode(_headerNode, header)","__updateMessageNodes(_messageNodes, message)","__updateRejectButton(_rejectButton, rejectText, rejectTheme, rejectButtonVisible)","__accessibleDescriptionRefChanged(_overlayElement, _messageNodes, accessibleDescriptionRef)"]}constructor(){super(),this.__cancel=this.__cancel.bind(this),this.__confirm=this.__confirm.bind(this),this.__reject=this.__reject.bind(this)}get __slottedNodes(){return[this._headerNode,...this._messageNodes,this._cancelButton,this._confirmButton,this._rejectButton]}ready(){super.ready(),this._headerController=new Xt(this,"header","h3",{initializer:n=>{this._headerNode=n}}),this.addController(this._headerController),this._messageController=new Xt(this,"","div",{multiple:!0,observe:!1,initializer:n=>{const r=document.createElement("div");r.style.display="contents";const a=`confirm-dialog-message-${A3()}`;r.id=a,this.appendChild(r),r.appendChild(n),this._messageNodes=[...this._messageNodes,r]}}),this.addController(this._messageController),this._cancelController=new Xt(this,"cancel-button","vaadin-button",{initializer:n=>{this.__setupSlottedButton("cancel",n)}}),this.addController(this._cancelController),this._rejectController=new Xt(this,"reject-button","vaadin-button",{initializer:n=>{this.__setupSlottedButton("reject",n)}}),this.addController(this._rejectController),this._confirmController=new Xt(this,"confirm-button","vaadin-button",{initializer:n=>{this.__setupSlottedButton("confirm",n)}}),this.addController(this._confirmController)}_initOverlay(n){n.addEventListener("vaadin-overlay-escape-press",this._escPressed.bind(this)),n.addEventListener("vaadin-overlay-open",()=>this.__onDialogOpened()),n.addEventListener("vaadin-overlay-closed",()=>this.__onDialogClosed()),n.setAttribute("role","alertdialog")}__onDialogOpened(){const n=this._overlayElement;this.__slottedNodes.forEach(a=>{n.appendChild(a)});const r=n.querySelector('[slot="confirm-button"]');r&&r.focus()}__onDialogClosed(){this.__slottedNodes.forEach(n=>{this.appendChild(n)})}__accessibleDescriptionRefChanged(n,r,a){!n||!r||(a!==void 0?Pu(n,"aria-describedby",{newId:a,oldId:this.__oldAccessibleDescriptionRef,fromUser:!0}):r.forEach(i=>{Pu(n,"aria-describedby",{newId:i.id})}),this.__oldAccessibleDescriptionRef=a)}__setupSlottedButton(n,r){const a=`_${n}Button`,i=`__${n}`;this[a]&&this[a]!==r&&this[a].remove(),r.addEventListener("click",this[i]),this[a]=r}__updateCancelButton(n,r,a,i){n&&(n===this._cancelController.defaultNode&&(n.textContent=r,n.setAttribute("theme",a)),n.toggleAttribute("hidden",!i))}__updateConfirmButton(n,r,a){n&&n===this._confirmController.defaultNode&&(n.textContent=r,n.setAttribute("theme",a))}__updateHeaderNode(n,r){n&&n===this._headerController.defaultNode&&(n.textContent=r)}__updateMessageNodes(n,r){if(n&&n.length>0){const a=n.find(i=>this._messageController.defaultNode&&i===this._messageController.defaultNode.parentElement);a&&(a.firstChild.textContent=r)}}__updateRejectButton(n,r,a,i){n&&(n===this._rejectController.defaultNode&&(n.textContent=r,n.setAttribute("theme",a)),n.toggleAttribute("hidden",!i))}_escPressed(n){n.defaultPrevented||this.__cancel()}__confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.opened=!1}__cancel(){this.dispatchEvent(new CustomEvent("cancel")),this.opened=!1}__reject(){this.dispatchEvent(new CustomEvent("reject")),this.opened=!1}_getAriaLabel(n){return n||"confirmation"}};/**
 * @license
 * Copyright (c) 2018 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class V3 extends Q9(x0($h(rn(yt)))){static get template(){return kt`
      <style>
        :host,
        [hidden] {
          display: none !important;
        }
      </style>

      <vaadin-confirm-dialog-dialog
        id="dialog"
        opened="{{opened}}"
        overlay-class="[[overlayClass]]"
        aria-label="[[_getAriaLabel(header)]]"
        theme$="[[_theme]]"
        no-close-on-outside-click
        no-close-on-esc="[[noCloseOnEsc]]"
        content-height="[[_contentHeight]]"
        content-width="[[_contentWidth]]"
      ></vaadin-confirm-dialog-dialog>

      <div hidden>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="cancel-button"></slot>
        <slot name="reject-button"></slot>
        <slot name="confirm-button"></slot>
      </div>
    `}static get is(){return"vaadin-confirm-dialog"}ready(){super.ready(),this._overlayElement=this.$.dialog.$.overlay,this._initOverlay(this._overlayElement)}}ct(V3);var Y9={onCancel:"cancel",onConfirm:"confirm",onReject:"reject",onOpenedChanged:"opened-changed"},K9=Bn({elementClass:V3,events:Y9,react:J0,tagName:"vaadin-confirm-dialog"}),X9=K9;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J9={HTML:1,SVG:2},Z9=(e,t)=>e?._$litType$===t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let zs=class extends Lv{constructor(t){if(super(t),this.it=xe,t.type!==Tv.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===xe||t==null)return this._t=void 0,this.it=t;if(t===X0)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};zs.directiveName="unsafeHTML",zs.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ms=class extends zs{};Ms.directiveName="unsafeSVG",Ms.resultType=2;const W3=Pv(Ms);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Lu(e){let t=xe;if(e){const n=e.cloneNode(!0);n.removeAttribute("id"),t=Cv`${W3(n.outerHTML)}`}return t}function q9(e){return Z9(e,J9.SVG)||e===xe}function G3(e){let t=e==null||e===""?xe:e;return q9(t)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),t=xe),t}function ey(e,t){const n=G3(e);Nh(n,t)}function ty(e){return Cv`${W3(e)}`}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dn={},Ru=new Set;function Q3(e,t){return(e||"").replace(`${t}:`,"")}function Ou(e){return e?e.split(":")[0]||"vaadin":void 0}function Nu(e,t){e._icons=[...e.querySelectorAll("[id]")].reduce((n,r)=>{const a=Q3(r.id,t);return n[a]=r,n},{})}const ny=e=>class extends e{static get properties(){return{name:{type:String,observer:"__nameChanged",sync:!0},size:{type:Number,value:24,sync:!0}}}static get attachedIcons(){return Ru}static getIconset(t){return dn[t]}static getIconSvg(t,n){const r=n||Ou(t),a=this.getIconset(r);if(!t||!a)return{svg:Lu(null)};const i=Q3(t,r),o=a._icons[i];return{preserveAspectRatio:o?o.getAttribute("preserveAspectRatio"):null,svg:Lu(o),size:a.size,viewBox:o?o.getAttribute("viewBox"):null}}static register(t,n,r){if(!dn[t]){const a=document.createElement("vaadin-iconset");a.appendChild(r.content.cloneNode(!0)),dn[t]=a,Nu(a,t),a.size=n,a.name=t,a.__nameChanged(t)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:t}=this;dn[t]=this,Nu(this,t),this.__updateIcons(t)}__updateIcons(t){Ru.forEach(n=>{t===Ou(n.icon)&&n._applyIcon()})}__nameChanged(t,n){n&&(dn[t]=dn[n],delete dn[n]),t&&this.__updateIcons(t)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ac=class extends ny(x0(yt)){static get template(){return null}static get is(){return"vaadin-iconset"}};ct(ac);pe("vaadin-icon",K`
    :host {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-icon"});/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ry(){const e=document.createElement("style");e.textContent=`
    .vaadin-icon-test-element {
      container-type: size;
      height: 2px;
      visibility: hidden;
      position: fixed;
    }

    .vaadin-icon-test-element::before {
      content: '';
      display: block;
      height: 100cqh;
    `;const t=document.createElement("div");t.classList.add("vaadin-icon-test-element"),document.body.append(e,t);const{height:n}=getComputedStyle(t,"::before");return e.remove(),t.remove(),n==="2px"}function ay(){return CSS.supports("container-type: inline-size")?h9?!ry():!1:!0}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Y3=ay();Y3&&pe("vaadin-icon",K`
      :host::after,
      :host::before {
        font-size: var(--_vaadin-font-icon-size);
      }
    `,"vaadin-icon-font-size-mixin-styles");const iy=Et(e=>Y3?class extends $3(e){static get observers(){return["__iconFontSizeMixinfontChanged(iconClass, char, ligature)"]}ready(){super.ready(),this.__updateFontIconSize()}__iconFontSizeMixinfontChanged(t,n,r){this.__updateFontIconSize()}_onResize(){this.__updateFontIconSize()}__updateFontIconSize(){if(this.char||this.iconClass||this.ligature){const{paddingTop:t,paddingBottom:n,height:r}=getComputedStyle(this),a=parseFloat(r)-parseFloat(t)-parseFloat(n);this.style.setProperty("--_vaadin-font-icon-size",`${a}px`)}}}:e);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jo=new Map,Zo=customElements.get("vaadin-iconset"),oy=e=>class extends iy(B9(e)){static get properties(){return{icon:{type:String,reflectToAttribute:!0,observer:"__iconChanged",sync:!0},svg:{type:Object,sync:!0},src:{type:String,sync:!0},symbol:{type:String,sync:!0},iconClass:{type:String,reflectToAttribute:!0,sync:!0},char:{type:String,sync:!0},ligature:{type:String,sync:!0},fontFamily:{type:String,observer:"__fontFamilyChanged",sync:!0},size:{type:Number,value:24,sync:!0},__defaultPAR:{type:String,value:"xMidYMid meet"},__preserveAspectRatio:String,__useRef:Object,__svgElement:String,__viewBox:String,__fill:String,__stroke:String,__strokeWidth:String,__strokeLinecap:String,__strokeLinejoin:String}}static get observers(){return["__svgChanged(svg, __svgElement)","__fontChanged(iconClass, char, ligature)","__srcChanged(src, symbol)"]}static get observedAttributes(){return[...super.observedAttributes,"class"]}constructor(){super(),this.__fetch=fetch.bind(window)}get slotStyles(){return[`
        ${this.localName}[icon-class] {
          display: inline-flex;
          vertical-align: middle;
          font-size: inherit;
        }
      `]}get __iconClasses(){return this.iconClass?this.iconClass.split(" "):[]}ready(){super.ready(),this.__svgElement=this.shadowRoot.querySelector("#svg-group"),this._tooltipController=new tc(this),this.addController(this._tooltipController)}connectedCallback(){super.connectedCallback(),Zo.attachedIcons.add(this)}disconnectedCallback(){super.disconnectedCallback(),Zo.attachedIcons.delete(this)}_applyIcon(){const{preserveAspectRatio:t,svg:n,size:r,viewBox:a}=Zo.getIconSvg(this.icon);a&&(this.__viewBox=a),t&&(this.__preserveAspectRatio=t),r&&r!==this.size&&(this.size=r),this.svg=n}__iconChanged(t){t?this._applyIcon():this.svg=G3(null)}async __srcChanged(t,n){if(!t){this.svg=null;return}if(this.icon="",!t.startsWith("data:")&&(n||t.includes("#"))){const[r,a]=t.split("#");this.__useRef=`${r}#${n||a}`}else try{Jo.has(t)||Jo.set(t,this.__fetch(t,{mode:"cors"}).then(o=>{if(!o.ok)throw new Error("Error loading icon");return o.text()}));const r=await Jo.get(t);e.__domParser||(e.__domParser=new DOMParser);const i=e.__domParser.parseFromString(r,"text/html").querySelector("svg");if(!i)throw new Error(`SVG element not found on path: ${t}`);this.svg=ty(i.innerHTML),n&&(this.__useRef=`#${n}`),this.__viewBox=i.getAttribute("viewBox"),this.__fill=i.getAttribute("fill"),this.__stroke=i.getAttribute("stroke"),this.__strokeWidth=i.getAttribute("stroke-width"),this.__strokeLinecap=i.getAttribute("stroke-linecap"),this.__strokeLinejoin=i.getAttribute("stroke-linejoin")}catch(r){console.error(r),this.svg=null}}__svgChanged(t,n){n&&ey(t,n)}__computePAR(t,n){return n||t}__computeVisibility(t){return t?"visible":"hidden"}__computeViewBox(t,n){return n||`0 0 ${t} ${t}`}__fontChanged(t,n,r){this.classList.remove(...this.__addedIconClasses||[]),t&&(this.__addedIconClasses=[...this.__iconClasses],this.classList.add(...this.__addedIconClasses)),n?this.setAttribute("font-icon-content",n.length>1?String.fromCodePoint(parseInt(n,16)):n):r?this.setAttribute("font-icon-content",r):this.removeAttribute("font-icon-content"),(t||n||r)&&!this.icon&&(this.icon="")}attributeChangedCallback(t,n,r){super.attributeChangedCallback(t,n,r),t==="class"&&this.__iconClasses.some(a=>!this.classList.contains(a))&&this.classList.add(...this.__iconClasses)}__fontFamilyChanged(t){this.style.fontFamily=`'${t}'`}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ly=K`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    fill: currentColor;
    container-type: size;
  }

  :host::after,
  :host::before {
    line-height: 1;
    font-size: 100cqh;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([hidden]) {
    display: none !important;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
    /* prevent overflowing icon from clipping, see https://github.com/vaadin/flow-components/issues/5872 */
    overflow: visible;
  }

  :host(:is([icon-class], [font-icon-content])) svg {
    display: none;
  }

  :host([font-icon-content])::before {
    content: attr(font-icon-content);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */pe("vaadin-icon",ly,{moduleId:"vaadin-icon-styles"});class K3 extends oy(rn(x0(e0(yt)))){static get template(){return kt`
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="[[__computeViewBox(size, __viewBox)]]"
        preserveAspectRatio="[[__computePAR(__defaultPAR, __preserveAspectRatio)]]"
        fill$="[[__fill]]"
        stroke$="[[__stroke]]"
        stroke-width$="[[__strokeWidth]]"
        stroke-linecap$="[[__strokeLinecap]]"
        stroke-linejoin$="[[__strokeLinejoin]]"
        aria-hidden="true"
      >
        <g id="svg-group"></g>
        <g id="use-group" visibility$="[[__computeVisibility(__useRef, svg)]]">
          <use href$="[[__useRef]]" />
        </g>
      </svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-icon"}}ct(K3);var sy={},Iu=Bn({elementClass:K3,events:sy,react:J0,tagName:"vaadin-icon"});pe("vaadin-progress-bar",K`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const X3=document.createElement("template");X3.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(X3.content);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hy=K`
  :host {
    display: block;
    width: 100%; /* prevent collapsing inside non-stretching column flex */
    height: 8px;
  }

  :host([hidden]) {
    display: none !important;
  }

  [part='bar'] {
    height: 100%;
  }

  [part='value'] {
    height: 100%;
    transform-origin: 0 50%;
    transform: scaleX(var(--vaadin-progress-value));
  }

  :host([dir='rtl']) [part='value'] {
    transform-origin: 100% 50%;
  }

  @media (forced-colors: active) {
    [part='bar'] {
      outline: 1px solid;
    }

    [part='value'] {
      background-color: AccentColor !important;
      forced-color-adjust: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cy=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(n,r,a){const i=this._normalizeValue(n,r,a);this.style.setProperty("--vaadin-progress-value",i)}_valueChanged(n){this.setAttribute("aria-valuenow",n)}_minChanged(n){this.setAttribute("aria-valuemin",n)}_maxChanged(n){this.setAttribute("aria-valuemax",n)}_normalizeValue(n,r,a){let i;return!n&&n!==0?i=0:r>=a?i=1:(i=(n-r)/(a-r),i=Math.min(Math.max(i,0),1)),i}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */pe("vaadin-progress-bar",hy,{moduleId:"vaadin-progress-bar-styles"});class J3 extends x0(e0(cy(yt))){static get is(){return"vaadin-progress-bar"}static get template(){return kt`
      <div part="bar">
        <div part="value"></div>
      </div>
    `}}ct(J3);var dy={},uy=Bn({elementClass:J3,events:dy,react:J0,tagName:"vaadin-progress-bar"});pe("vaadin-tab",K`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    @media (forced-colors: active) {
      :host([focused]) {
        outline: 1px solid;
        outline-offset: -1px;
      }

      :host([orientation='vertical'][selected]) {
        border-bottom: none;
        border-left: 2px solid;
      }
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--_selection-color-text);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--_selection-color-text);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--_selection-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--_selection-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const py=e=>class extends N9(e){ready(){super.ready(),this.setAttribute("role","tab")}_onKeyUp(n){const r=this.hasAttribute("active");if(super._onKeyUp(n),r){const a=this.querySelector("a");a&&a.click()}}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vy=K`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none !important;
  }

  @media (forced-colors: active) {
    :host([focused]) {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([selected]) {
      border-bottom: 2px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */pe("vaadin-tab",vy,{moduleId:"vaadin-tab-styles"});class Z3 extends x0(e0(py(rn(yt)))){static get template(){return kt`
      <slot></slot>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this._tooltipController=new tc(this),this.addController(this._tooltipController)}}ct(Z3);var fy={},Du=Bn({elementClass:Z3,events:fy,react:J0,tagName:"vaadin-tab"});pe("vaadin-tabs",K`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const my=e=>class extends $3(O9(e)){static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.__isRTL?1:-1}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),nc(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(n){this.__itemsResizeObserver.disconnect(),(n||[]).forEach(r=>{this.__itemsResizeObserver.observe(r)}),this._updateOverflow()}_scrollForward(){const n=this._getNavigationButtonVisibleWidth("forward-button"),r=this._getNavigationButtonVisibleWidth("back-button"),a=this._scrollerElement.getBoundingClientRect(),o=[...this.items].reverse().find(c=>this._isItemVisible(c,n,r,a)).getBoundingClientRect(),l=20+this.shadowRoot.querySelector('[part="back-button"]').clientWidth;let h;if(this.__isRTL){const c=a.right-l;h=o.right-c}else{const c=a.left+l;h=o.left-c}-this.__direction*h<1&&(h=-this.__direction*(this._scrollOffset-l)),this._scroll(h)}_scrollBack(){const n=this._getNavigationButtonVisibleWidth("forward-button"),r=this._getNavigationButtonVisibleWidth("back-button"),a=this._scrollerElement.getBoundingClientRect(),o=this.items.find(c=>this._isItemVisible(c,n,r,a)).getBoundingClientRect(),l=20+this.shadowRoot.querySelector('[part="forward-button"]').clientWidth;let h;if(this.__isRTL){const c=a.left+l;h=o.left-c}else{const c=a.right-l;h=o.right-c}this.__direction*h<1&&(h=this.__direction*(this._scrollOffset-l)),this._scroll(h)}_isItemVisible(n,r,a,i){if(this._vertical)throw new Error("Visibility check is only supported for horizontal tabs.");const o=this.__isRTL?a:r,s=this.__isRTL?r:a,l=i.right-o,h=i.left+s,c=n.getBoundingClientRect();return l>Math.floor(c.left)&&h<Math.ceil(c.right)}_getNavigationButtonVisibleWidth(n){const r=this.shadowRoot.querySelector(`[part="${n}"]`);return window.getComputedStyle(r).opacity==="0"?0:r.clientWidth}_updateOverflow(){const n=this._vertical?this._scrollerElement.scrollTop:F3(this._scrollerElement,this.getAttribute("dir")),r=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let a=Math.floor(n)>1?"start":"";Math.ceil(n)<Math.ceil(r-this._scrollOffset)&&(a+=" end"),this.__direction===1&&(a=a.replace(/start|end/giu,i=>i==="start"?"end":"start")),a?this.setAttribute("overflow",a.trim()):this.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gy=K`
  :host {
    display: flex;
    align-items: center;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([orientation='vertical']) {
    display: block;
  }

  :host([orientation='horizontal']) [part='tabs'] {
    flex-grow: 1;
    display: flex;
    align-self: stretch;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
  @-moz-document url-prefix() {
    :host([orientation='horizontal']) [part='tabs'] {
      overflow: hidden;
    }
  }

  :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
    display: none;
  }

  :host([orientation='vertical']) [part='tabs'] {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  [part='back-button'],
  [part='forward-button'] {
    pointer-events: none;
    opacity: 0;
    cursor: default;
  }

  :host([overflow~='start']) [part='back-button'],
  :host([overflow~='end']) [part='forward-button'] {
    pointer-events: auto;
    opacity: 1;
  }

  [part='back-button']::after {
    content: '\\25C0';
  }

  [part='forward-button']::after {
    content: '\\25B6';
  }

  :host([orientation='vertical']) [part='back-button'],
  :host([orientation='vertical']) [part='forward-button'] {
    display: none;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='back-button']::after {
    content: '\\25B6';
  }

  :host([dir='rtl']) [part='forward-button']::after {
    content: '\\25C0';
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */pe("vaadin-tabs",gy,{moduleId:"vaadin-tabs-styles"});class q3 extends my(x0(e0(yt))){static get template(){return kt`
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}}ct(q3);var yy={onSelectedChanged:"selected-changed",onItemsChanged:"items-changed"},zy=Bn({elementClass:q3,events:yy,react:J0,tagName:"vaadin-tabs"});pe("vaadin-upload",K`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }
  `,{moduleId:"lumo-upload"});pe("vaadin-upload-icon",K`
    :host::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }
  `,{moduleId:"lumo-upload-icon"});pe("vaadin-upload-file-list",K`
    ::slotted(li:not(:first-of-type)) {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload-file-list"});const My=K`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  ::slotted([slot='progress']) {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }
`;pe("vaadin-upload-file",[j3,My],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wy extends e0(yt){static get is(){return"vaadin-upload-icon"}static get template(){return kt`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
    `}}ct(wy);/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const e4=document.createElement("template");e4.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(e4.content);/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const by=e=>class extends qh(e){static get properties(){return{complete:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},file:{type:Object},fileName:{type:String},held:{type:Boolean,value:!1},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0},i18n:{type:Object},progress:{type:Number},status:{type:String},tabindex:{type:Number,value:0,reflectToAttribute:!0},uploading:{type:Boolean,value:!1,reflectToAttribute:!0},_progress:{type:Object}}}static get observers(){return["__updateProgress(_progress, progress, indeterminate)"]}ready(){super.ready(),this.addController(new Xt(this,"progress","vaadin-progress-bar",{initializer:n=>{this._progress=n}})),this.shadowRoot.addEventListener("focusin",n=>{n.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",n=>{n.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(n){return n.composedPath()[0]===this}_errorMessageChanged(n){this.toggleAttribute("error",!!n)}__updateProgress(n,r,a){n&&(n.value=isNaN(r)?0:r/100,n.indeterminate=a)}_fireFileEvent(n){return n.preventDefault(),this.dispatchEvent(new CustomEvent(n.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _y=K`
  :host {
    display: block;
  }

  [hidden] {
    display: none;
  }

  [part='row'] {
    list-style-type: none;
  }

  button {
    background: transparent;
    padding: 0;
    border: none;
    box-shadow: none;
  }

  :host([complete]) ::slotted([slot='progress']),
  :host([error]) ::slotted([slot='progress']) {
    display: none !important;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */pe("vaadin-upload-file",_y,{moduleId:"vaadin-upload-file-styles"});class xy extends by(e0(rn(yt))){static get template(){return kt`
      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!errorMessage]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[fileName]]</div>
            <div part="status" hidden$="[[!status]]" id="status">[[status]]</div>
            <div part="error" id="error" hidden$="[[!errorMessage]]">[[errorMessage]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!errorMessage]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <slot name="progress"></slot>
    `}static get is(){return"vaadin-upload-file"}}ct(xy);/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ay=e=>class extends e{static get properties(){return{items:{type:Array},i18n:{type:Object}}}static get observers(){return["__updateItems(items, i18n)"]}__updateItems(n,r){n&&r&&this.requestContentUpdate()}requestContentUpdate(){const{items:n,i18n:r}=this;Nh(es`
          ${n.map(a=>es`
              <li>
                <vaadin-upload-file
                  .file="${a}"
                  .complete="${a.complete}"
                  .errorMessage="${a.error}"
                  .fileName="${a.name}"
                  .held="${a.held}"
                  .indeterminate="${a.indeterminate}"
                  .progress="${a.progress}"
                  .status="${a.status}"
                  .uploading="${a.uploading}"
                  .i18n="${r}"
                ></vaadin-upload-file>
              </li>
            `)}
        `,this)}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sy extends Ay(e0(yt)){static get is(){return"vaadin-upload-file-list"}static get template(){return kt`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>
      <ul part="list">
        <slot></slot>
      </ul>
    `}}ct(Sy);/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cy extends Xt{constructor(t){super(t,"add-button","vaadin-button")}initNode(t){t._isDefault&&(this.defaultNode=t),t.addEventListener("touchend",n=>{this.host._onAddFilesTouchEnd(n)}),t.addEventListener("click",n=>{this.host._onAddFilesClick(n)}),this.host._addButton=t}}class Ey extends Xt{constructor(t){super(t,"drop-label","span")}initNode(t){t._isDefault&&(this.defaultNode=t),this.host._dropLabel=t}}const ky=e=>class extends e{static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:c9},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[],sync:!0},maxFiles:{type:Number,value:1/0,sync:!0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}},_addButton:{type:Object},_dropLabel:{type:Object},_fileList:{type:Object},_files:{type:Array}}}static get observers(){return["__updateAddButton(_addButton, maxFiles, i18n, maxFilesReached)","__updateDropLabel(_dropLabel, maxFiles, i18n)","__updateFileList(_fileList, files, i18n)","__updateMaxFilesReached(maxFiles, files)"]}get __acceptRegexp(){if(!this.accept)return null;const n=this.accept.split(",").map(r=>{let a=r.trim();return a=a.replace(/[+.]/gu,"\\$&"),a.startsWith("\\.")&&(a=`.*${a}$`),a.replace(/\/\*/gu,"/.*")});return new RegExp(`^(${n.join("|")})$`,"iu")}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this)),this._addButtonController=new Cy(this),this.addController(this._addButtonController),this._dropLabelController=new Ey(this),this.addController(this._dropLabelController),this.addController(new Xt(this,"file-list","vaadin-upload-file-list",{initializer:n=>{this._fileList=n}})),this.addController(new Xt(this,"drop-label-icon","vaadin-upload-icon"))}_formatSize(n){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(n);const r=this.i18n.units.sizeBase||1e3,a=~~(Math.log(n)/Math.log(r)),i=Math.max(0,Math.min(3,a-1));return`${parseFloat((n/r**a).toFixed(i))} ${this.i18n.units.size[a]}`}_splitTimeByUnits(n){const r=[60,60,24,1/0],a=[0];for(let i=0;i<r.length&&n>0;i++)a[i]=n%r[i],n=Math.floor(n/r[i]);return a}_formatTime(n,r){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(n,r);for(;r.length<3;)r.push(0);return r.reverse().map(a=>(a<10?"0":"")+a).join(":")}_formatFileProgress(n){const r=n.loaded>0?this.i18n.uploading.remainingTime.prefix+n.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${n.totalStr}: ${n.progress}% (${r})`}__updateMaxFilesReached(n,r){this._setMaxFilesReached(n>=0&&r.length>=n)}__updateAddButton(n,r,a,i){n&&(n.disabled=i,n===this._addButtonController.defaultNode&&(n.textContent=this._i18nPlural(r,a.addFiles)))}__updateDropLabel(n,r,a){n&&n===this._dropLabelController.defaultNode&&(n.textContent=this._i18nPlural(r,a.dropFiles))}__updateFileList(n,r,a){n&&(n.items=[...r],n.i18n=a)}_onDragover(n){n.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),n.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(n){n.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(n){this.nodrop||(n.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(n.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(n){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([r,a])=>{n.setRequestHeader(r,a)}),this.timeout&&(n.timeout=this.timeout),n.withCredentials=this.withCredentials}_setStatus(n,r,a,i){n.elapsed=i,n.elapsedStr=this._formatTime(n.elapsed,this._splitTimeByUnits(n.elapsed)),n.remaining=Math.ceil(i*(r/a-1)),n.remainingStr=this._formatTime(n.remaining,this._splitTimeByUnits(n.remaining)),n.speed=~~(r/i/1024),n.totalStr=this._formatSize(r),n.loadedStr=this._formatSize(a),n.status=this._formatFileProgress(n)}uploadFiles(n=this.files){n&&!Array.isArray(n)&&(n=[n]),n=n.filter(r=>!r.complete),Array.prototype.forEach.call(n,this._uploadFile.bind(this))}_uploadFile(n){if(n.uploading)return;const r=Date.now(),a=n.xhr=this._createXhr();let i,o;a.upload.onprogress=c=>{clearTimeout(i),o=Date.now();const u=(o-r)/1e3,p=c.loaded,m=c.total,g=~~(p/m*100);n.loaded=p,n.progress=g,n.indeterminate=p<=0||p>=m,n.error?n.indeterminate=n.status=void 0:n.abort||(g<100?(this._setStatus(n,m,p,u),i=setTimeout(()=>{n.status=this.i18n.uploading.status.stalled,this._renderFileList()},2e3)):(n.loadedStr=n.totalStr,n.status=this.i18n.uploading.status.processing)),this._renderFileList(),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:n,xhr:a}}))},a.onreadystatechange=()=>{if(a.readyState===4){if(clearTimeout(i),n.indeterminate=n.uploading=!1,n.abort||(n.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:n,xhr:a},cancelable:!0}))))return;a.status===0?n.error=this.i18n.uploading.error.serverUnavailable:a.status>=500?n.error=this.i18n.uploading.error.unexpectedServerError:a.status>=400&&(n.error=this.i18n.uploading.error.forbidden),n.complete=!n.error,this.dispatchEvent(new CustomEvent(`upload-${n.error?"error":"success"}`,{detail:{file:n,xhr:a}})),this._renderFileList()}};const s=new FormData;if(n.uploadTarget=n.uploadTarget||this.target||"",n.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:n,xhr:a},cancelable:!0})))return;s.append(n.formDataName,n,n.name),a.open(this.method,n.uploadTarget,!0),this._configureXhr(a),n.status=this.i18n.uploading.status.connecting,n.uploading=n.indeterminate=!0,n.complete=n.abort=n.error=n.held=!1,a.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:n,xhr:a}})),this._renderFileList()},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:n,xhr:a,formData:s},cancelable:!0}))&&a.send(s)}_retryFileUpload(n){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:n,xhr:n.xhr},cancelable:!0}))&&this._uploadFile(n)}_abortFileUpload(n){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:n,xhr:n.xhr},cancelable:!0}))&&(n.abort=!0,n.xhr&&n.xhr.abort(),this._removeFile(n))}_renderFileList(){this._fileList&&this._fileList.requestContentUpdate()}_addFiles(n){Array.prototype.forEach.call(n,this._addFile.bind(this))}_addFile(n){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:n,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&n.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:n,error:this.i18n.error.fileIsTooBig}}));return}const r=this.__acceptRegexp;if(r&&!(r.test(n.type)||r.test(n.name))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:n,error:this.i18n.error.incorrectFileType}}));return}n.loaded=0,n.held=!0,n.status=this.i18n.uploading.status.held,this.files=[n,...this.files],this.noAuto||this._uploadFile(n)}_removeFile(n){this.files.indexOf(n)>-1&&(this.files=this.files.filter(r=>r!==n),this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:n},bubbles:!0,composed:!0})))}_onAddFilesTouchEnd(n){n.preventDefault(),this._onAddFilesClick(n)}_onAddFilesClick(n){this.maxFilesReached||(n.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(n){this._addFiles(n.target.files)}_onFileStart(n){this._uploadFile(n.detail.file)}_onFileRetry(n){this._retryFileUpload(n.detail.file)}_onFileAbort(n){this._abortFileUpload(n.detail.file)}_onFileReject(n){Ri(`${n.detail.file.name}: ${n.detail.error}`,{mode:"alert"})}_onUploadStart(n){Ri(`${n.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(n){Ri(`${n.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(n){Ri(`${n.detail.file.name}: ${n.detail.file.error}`,{mode:"alert"})}_dragoverChanged(n){n?this.setAttribute("dragover",n):this.removeAttribute("dragover")}_dragoverValidChanged(n){n?this.setAttribute("dragover-valid",n):this.removeAttribute("dragover-valid")}_i18nPlural(n,r){return n===1?r.one:r.many}_isMultiple(n){return n!==1}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class t4 extends ky(x0(e0(rn(yt)))){static get template(){return kt`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <div part="primary-buttons">
        <slot name="add-button"></slot>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon"></slot>
          <slot name="drop-label"></slot>
        </div>
      </div>
      <slot name="file-list"></slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}}ct(t4);var Ty={onFileReject:"file-reject",onUploadAbort:"upload-abort",onUploadBefore:"upload-before",onUploadError:"upload-error",onUploadProgress:"upload-progress",onUploadRequest:"upload-request",onUploadResponse:"upload-response",onUploadRetry:"upload-retry",onUploadStart:"upload-start",onUploadSuccess:"upload-success",onFilesChanged:"files-changed",onMaxFilesReachedChanged:"max-files-reached-changed"},Py=Bn({elementClass:t4,events:Ty,react:J0,tagName:"vaadin-upload"}),Ly=Symbol.for("preact-signals");function ic(){if(mr>1)mr--;else{for(var e,t=!1;fa!==void 0;){var n=fa;for(fa=void 0,ws++;n!==void 0;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&r4(n))try{n.c()}catch(a){t||(e=a,t=!0)}n=r}}if(ws=0,mr--,t)throw e}}var me=void 0,fa=void 0,mr=0,ws=0,R1=0;function n4(e){if(me!==void 0){var t=e.n;if(t===void 0||t.t!==me)return t={i:0,S:e,p:me.s,n:void 0,t:me,e:void 0,x:void 0,r:t},me.s!==void 0&&(me.s.n=t),me.s=t,e.n=t,32&me.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=me.s,t.n=void 0,me.s.n=t,me.s=t),t}}function Ze(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}Ze.prototype.brand=Ly;Ze.prototype.h=function(){return!0};Ze.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};Ze.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};Ze.prototype.subscribe=function(e){var t=this;return l4(function(){var n=t.value,r=me;me=void 0;try{e(n)}finally{me=r}})};Ze.prototype.valueOf=function(){return this.value};Ze.prototype.toString=function(){return this.value+""};Ze.prototype.toJSON=function(){return this.value};Ze.prototype.peek=function(){var e=me;me=void 0;try{return this.value}finally{me=e}};Object.defineProperty(Ze.prototype,"value",{get:function(){var e=n4(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(ws>100)throw new Error("Cycle detected");this.v=e,this.i++,R1++,mr++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{ic()}}}});function Ry(e){return new Ze(e)}function r4(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function a4(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function i4(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function Ja(e){Ze.call(this,void 0),this.x=e,this.s=void 0,this.g=R1-1,this.f=4}(Ja.prototype=new Ze).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===R1))return!0;if(this.g=R1,this.f|=1,this.i>0&&!r4(this))return this.f&=-2,!0;var e=me;try{a4(this),me=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return me=e,i4(this),this.f&=-2,!0};Ja.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Ze.prototype.S.call(this,e)};Ja.prototype.U=function(e){if(this.t!==void 0&&(Ze.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Ja.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(Ja.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=n4(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function o4(e){var t=e.u;if(e.u=void 0,typeof t=="function"){mr++;var n=me;me=void 0;try{t()}catch(r){throw e.f&=-2,e.f|=8,oc(e),r}finally{me=n,ic()}}}function oc(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,o4(e)}function Oy(e){if(me!==this)throw new Error("Out-of-order effect");i4(this),me=e,this.f&=-2,8&this.f&&oc(this),ic()}function Za(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Za.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Za.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,o4(this),a4(this),mr++;var e=me;return me=this,Oy.bind(this,e)};Za.prototype.N=function(){2&this.f||(this.f|=2,this.o=fa,fa=this)};Za.prototype.d=function(){this.f|=8,1&this.f||oc(this)};function l4(e){var t=new Za(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var s4={exports:{}},h4={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er=P;function Ny(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Iy=typeof Object.is=="function"?Object.is:Ny,Dy=Er.useState,Fy=Er.useEffect,$y=Er.useLayoutEffect,By=Er.useDebugValue;function Uy(e,t){var n=t(),r=Dy({inst:{value:n,getSnapshot:t}}),a=r[0].inst,i=r[1];return $y(function(){a.value=n,a.getSnapshot=t,qo(a)&&i({inst:a})},[e,n,t]),Fy(function(){return qo(a)&&i({inst:a}),e(function(){qo(a)&&i({inst:a})})},[e]),By(n),n}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Iy(e,n)}catch{return!0}}function jy(e,t){return t()}var Hy=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?jy:Uy;h4.useSyncExternalStore=Er.useSyncExternalStore!==void 0?Er.useSyncExternalStore:Hy;s4.exports=h4;var Vy=s4.exports,c4={exports:{}},lc={};/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy=Symbol.for("react.fragment");lc.Fragment=Wy;lc.jsxDEV=void 0;c4.exports=lc;var Gy=c4.exports;const Qy=Ua(Gy);var Kr=null,Xr=!1,Ni=null,Fu=new Map;function $u(e){if(!e)return 1;var t,n=Fu.get(e);if(n!==void 0)return n;var r=e.useCallback.toString();if(e.useReducer===e.useEffect)t=1;else if(e.useEffect===e.useImperativeHandle)t=32;else if(/Invalid/.test(r))t=2;else if(/updateCallback/.test(r)||/\[0\]/.test(r)&&/\[1\]/.test(r)){var a=e.useReducer.toString();/rerenderReducer/.test(a)||/return\s*\[\w+,/.test(a)?t=16:t=8}else t=4;return Fu.set(e,t),t}function Yy(){if(P.version.split(".").map(Number)[0]>=19)throw new Error("Automatic signals tracking is not supported in React 19 and later, try the Babel plugin instead https://github.com/preactjs/signals/tree/main/packages/react-transform#signals-react-transform.");(function(){Object.defineProperty(P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher,"current",{get:function(){return Ni},set:function(e){if(Xr)Ni=e;else{var t=$u(Ni),n=$u(e);if(Ni=e,function(i,o){return 1&i&&28&o?!0:(2&i||2&o,!1)}(t,n))Xr=!0,Kr=_s(1),Xr=!1;else if(function(i,o){return!!(28&i&&16&o)}(t,n)){var r;(r=Kr)==null||r.f(),Xr=!0,Kr=_s(1),Xr=!1}else if(function(i,o){return!!(28&i&&1&o)}(t,n)){var a;(a=Kr)==null||a.f(),Kr=null}}}})})(),function(){var e=z6,t=Qy;nl.createElement=un(nl.createElement),t.jsx&&(t.jsx=un(t.jsx)),e.jsx&&(e.jsx=un(e.jsx)),t.jsxs&&(t.jsxs=un(t.jsxs)),e.jsxs&&(e.jsxs=un(e.jsxs)),t.jsxDEV&&(t.jsxDEV=un(t.jsxDEV)),e.jsxDEV&&(e.jsxDEV=un(e.jsxDEV))}()}var Ky=[],Xy=Symbol.for("react.element"),Bu=function(){};function un(e){return typeof e!="function"?e:function(t,n){if(typeof t=="string"&&n)for(var r in n){var a=n[r];r!=="children"&&a instanceof Ze&&(n[r]=a.value)}return e.call.apply(e,[e,t,n].concat([].slice.call(arguments,2)))}}var xn,d4=Symbol.dispose||Symbol.for("Symbol.dispose");function el(e,t){var n=t.effect.S();return xn=t,Jy.bind(t,e,n)}function Jy(e,t){t(),xn=e}var Uu,bs;(Uu={u:0,effect:{s:void 0,c:function(){},S:function(){return Bu},d:function(){}},subscribe:function(){return Bu},getSnapshot:function(){return 0},S:function(){},f:function(){}})[d4]=function(){};var Zy=Promise.prototype.then.bind(Promise.resolve());function qy(){bs||(bs=Zy(ez))}function ez(){var e;bs=void 0,(e=xn)==null||e.f()}function _s(e){qy();var t=P.useRef();t.current==null&&(t.current=function(r){var a,i,o,s,l=0,h=l4(function(){i=this});return i.c=function(){l=l+1|0,s&&s()},(a={u:r,effect:i,subscribe:function(c){return s=c,function(){l=l+1|0,s=void 0,h()}},getSnapshot:function(){return l},S:function(){if(xn!=null){var c=xn.u,u=this.u;c==0&&u==0||c==0&&u==1?(xn.f(),o=el(void 0,this)):c==1&&u==0||c==2&&u==0||(o=el(xn,this))}else o=el(void 0,this)},f:function(){var c=o;o=void 0,c?.()}})[d4]=function(){this.f()},a}(e));var n=t.current;return Vy.useSyncExternalStore(n.subscribe,n.getSnapshot,n.getSnapshot),n.S(),n}Object.defineProperties(Ze.prototype,{$$typeof:{configurable:!0,value:Xy},type:{configurable:!0,value:function(e){var t=e.data,n=_s(1);try{return t.value}finally{n.f()}}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}});function fn(e){return P.useMemo(function(){return Ry(e)},Ky)}Yy();function tz(){const e=fn(!1),t=fn(!1),n=Ch(),r=P.useRef(null);P.useEffect(()=>{r.current&&(r.current.i18n.addFiles.one="Upload PDF",r.current.i18n.dropFiles.one="Or Drop here",r.current.i18n.error.incorrectFileType="The provided file does not have the correct format (PDF document).",r.current.i18n={...r.current.i18n})},[]);const a={border:"1px dashed var(--lumo-contrast-30pct)",borderRadius:"var(--lumo-border-radius-s)",boxShadow:"var(--lumo-box-shadow-s)",width:"21rem",height:"25rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem"};return e.value?ge.jsx("div",{style:a,children:ge.jsx(uy,{indeterminate:!0,style:{width:"50%"}})}):t.value?ge.jsx("div",{style:a,children:ge.jsx("p",{children:"Something went wrong :/"})}):ge.jsx(Py,{ref:r,accept:"application/pdf,.pdf",maxFiles:1,target:"/api/papers",className:"w-full",onUploadSuccess:i=>{const o=JSON.parse(i.detail.xhr.response);n(`paper/${o.id}`),window.location.reload()}})}function u4(){const e={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",overflow:"hidden"};return ge.jsx("div",{style:e,children:ge.jsx(tz,{})})}Object.defineProperty(u4,"name",{value:"MainView"});const nz=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rz=K`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] > vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] > vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] > vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;pe("",rz,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const az=K`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const iz=K`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-tint {
    background-color: var(--lumo-tint);
  }
  .bg-tint-90 {
    background-color: var(--lumo-tint-90pct);
  }
  .bg-tint-80 {
    background-color: var(--lumo-tint-80pct);
  }
  .bg-tint-70 {
    background-color: var(--lumo-tint-70pct);
  }
  .bg-tint-60 {
    background-color: var(--lumo-tint-60pct);
  }
  .bg-tint-50 {
    background-color: var(--lumo-tint-50pct);
  }
  .bg-tint-40 {
    background-color: var(--lumo-tint-40pct);
  }
  .bg-tint-30 {
    background-color: var(--lumo-tint-30pct);
  }
  .bg-tint-20 {
    background-color: var(--lumo-tint-20pct);
  }
  .bg-tint-10 {
    background-color: var(--lumo-tint-10pct);
  }
  .bg-tint-5 {
    background-color: var(--lumo-tint-5pct);
  }

  .bg-shade {
    background-color: var(--lumo-shade);
  }
  .bg-shade-90 {
    background-color: var(--lumo-shade-90pct);
  }
  .bg-shade-80 {
    background-color: var(--lumo-shade-80pct);
  }
  .bg-shade-70 {
    background-color: var(--lumo-shade-70pct);
  }
  .bg-shade-60 {
    background-color: var(--lumo-shade-60pct);
  }
  .bg-shade-50 {
    background-color: var(--lumo-shade-50pct);
  }
  .bg-shade-40 {
    background-color: var(--lumo-shade-40pct);
  }
  .bg-shade-30 {
    background-color: var(--lumo-shade-30pct);
  }
  .bg-shade-20 {
    background-color: var(--lumo-shade-20pct);
  }
  .bg-shade-10 {
    background-color: var(--lumo-shade-10pct);
  }
  .bg-shade-5 {
    background-color: var(--lumo-shade-5pct);
  }

  .bg-contrast {
    background-color: var(--lumo-contrast);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oz=K`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border-dashed {
    --lumo-utility-border-style: dashed;
  }
  .border-dotted {
    --lumo-utility-border-style: dotted;
  }
  .border {
    border: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-b {
    border-bottom: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-e {
    border-inline-end: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-l {
    border-left: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-r {
    border-right: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-s {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-t {
    border-top: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }

  /* === Border color === */
  .border-contrast {
    --lumo-utility-border-color: var(--lumo-contrast);
  }
  .border-contrast-90 {
    --lumo-utility-border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast-80 {
    --lumo-utility-border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-70 {
    --lumo-utility-border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-60 {
    --lumo-utility-border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-50 {
    --lumo-utility-border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-40 {
    --lumo-utility-border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-30 {
    --lumo-utility-border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-20 {
    --lumo-utility-border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-10 {
    --lumo-utility-border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-5 {
    --lumo-utility-border-color: var(--lumo-contrast-5pct);
  }

  .border-primary {
    --lumo-utility-border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    --lumo-utility-border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    --lumo-utility-border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    --lumo-utility-border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    --lumo-utility-border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    --lumo-utility-border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    --lumo-utility-border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    --lumo-utility-border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    --lumo-utility-border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    --lumo-utility-border-color: var(--lumo-warning-color);
  }
  .border-warning-strong {
    --lumo-utility-border-color: var(--lumo-warning-text-color);
  }
  .border-warning-10 {
    --lumo-utility-border-color: var(--lumo-warning-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
  .rounded-full {
    border-radius: 9999px;
  }

  /* === Divide === */
  .divide-x > * + * {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .divide-y > * + * {
    border-block-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lz=K`
  /* === Backdrop filter === */
  .backdrop-blur-none {
    backdrop-filter: blur(0);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur {
    backdrop-filter: blur(8px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sz=K`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-1 {
    flex: 1 1 0%;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow {
    flex-grow: 1;
  }
  .flex-grow-0 {
    flex-grow: 0;
  }

  /* === Flex shrink === */
  .flex-shrink {
    flex-shrink: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\items-baseline {
      align-items: baseline;
    }
    .sm\\items-center {
      align-items: center;
    }
    .sm\\items-end {
      align-items: flex-end;
    }
    .sm\\items-start {
      align-items: flex-start;
    }
    .sm\\items-stretch {
      align-items: stretch;
    }
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\items-baseline {
      align-items: baseline;
    }
    .md\\items-center {
      align-items: center;
    }
    .md\\items-end {
      align-items: flex-end;
    }
    .md\\items-start {
      align-items: flex-start;
    }
    .md\\items-stretch {
      align-items: stretch;
    }
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\items-baseline {
      align-items: baseline;
    }
    .lg\\items-center {
      align-items: center;
    }
    .lg\\items-end {
      align-items: flex-end;
    }
    .lg\\items-start {
      align-items: flex-start;
    }
    .lg\\items-stretch {
      align-items: stretch;
    }
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\items-baseline {
      align-items: baseline;
    }
    .xl\\items-center {
      align-items: center;
    }
    .xl\\items-end {
      align-items: flex-end;
    }
    .xl\\items-start {
      align-items: flex-start;
    }
    .xl\\items-stretch {
      align-items: stretch;
    }
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\items-baseline {
      align-items: baseline;
    }
    .\\32xl\\items-center {
      align-items: center;
    }
    .\\32xl\\items-end {
      align-items: flex-end;
    }
    .\\32xl\\items-start {
      align-items: flex-start;
    }
    .\\32xl\\items-stretch {
      align-items: stretch;
    }
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hz=K`
  /* === Aspect ratio === */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Top, end, bottom, start === */
  .-bottom-xs {
    bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-bottom-s {
    bottom: calc(var(--lumo-space-s) / -1);
  }
  .-bottom-m {
    bottom: calc(var(--lumo-space-m) / -1);
  }
  .-bottom-l {
    bottom: calc(var(--lumo-space-l) / -1);
  }
  .-bottom-xl {
    bottom: calc(var(--lumo-space-xl) / -1);
  }
  .-bottom-full {
    bottom: -100%;
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-xs {
    bottom: var(--lumo-space-xs);
  }
  .bottom-s {
    bottom: var(--lumo-space-s);
  }
  .bottom-m {
    bottom: var(--lumo-space-m);
  }
  .bottom-l {
    bottom: var(--lumo-space-l);
  }
  .bottom-xl {
    bottom: var(--lumo-space-xl);
  }
  .bottom-auto {
    bottom: auto;
  }
  .bottom-full {
    bottom: 100%;
  }

  .-end-xs {
    inset-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-end-s {
    inset-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-end-m {
    inset-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-end-l {
    inset-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-end-xl {
    inset-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .-end-full {
    inset-inline-end: -100%;
  }
  .end-0 {
    inset-inline-end: 0;
  }
  .end-xs {
    inset-inline-end: var(--lumo-space-xs);
  }
  .end-s {
    inset-inline-end: var(--lumo-space-s);
  }
  .end-m {
    inset-inline-end: var(--lumo-space-m);
  }
  .end-l {
    inset-inline-end: var(--lumo-space-l);
  }
  .end-xl {
    inset-inline-end: var(--lumo-space-xl);
  }
  .end-auto {
    inset-inline-end: auto;
  }
  .end-full {
    inset-inline-end: 100%;
  }

  .-start-xs {
    inset-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-start-s {
    inset-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-start-m {
    inset-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-start-l {
    inset-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-start-xl {
    inset-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .-start-full {
    inset-inline-start: -100%;
  }
  .start-0 {
    inset-inline-start: 0;
  }
  .start-xs {
    inset-inline-start: var(--lumo-space-xs);
  }
  .start-s {
    inset-inline-start: var(--lumo-space-s);
  }
  .start-m {
    inset-inline-start: var(--lumo-space-m);
  }
  .start-l {
    inset-inline-start: var(--lumo-space-l);
  }
  .start-xl {
    inset-inline-start: var(--lumo-space-xl);
  }
  .start-auto {
    inset-inline-start: auto;
  }
  .start-full {
    inset-inline-start: 100%;
  }

  .-top-xs {
    top: calc(var(--lumo-space-xs) / -1);
  }
  .-top-s {
    top: calc(var(--lumo-space-s) / -1);
  }
  .-top-m {
    top: calc(var(--lumo-space-m) / -1);
  }
  .-top-l {
    top: calc(var(--lumo-space-l) / -1);
  }
  .-top-xl {
    top: calc(var(--lumo-space-xl) / -1);
  }
  .-top-full {
    top: -100%;
  }
  .top-0 {
    top: 0;
  }
  .top-xs {
    top: var(--lumo-space-xs);
  }
  .top-s {
    top: var(--lumo-space-s);
  }
  .top-m {
    top: var(--lumo-space-m);
  }
  .top-l {
    top: var(--lumo-space-l);
  }
  .top-xl {
    top: var(--lumo-space-xl);
  }
  .top-auto {
    top: auto;
  }
  .top-full {
    top: 100%;
  }

  /* === Visibility === */
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  /* === Z-index === */
  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }
  .z-auto {
    z-index: auto;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    /* Display */
    .sm\\:block {
      display: block;
    }
    .sm\\:flex {
      display: flex;
    }
    .sm\\:grid {
      display: grid;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:inline {
      display: inline;
    }
    .sm\\:inline-block {
      display: inline-block;
    }
    .sm\\:inline-flex {
      display: inline-flex;
    }
    .sm\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .sm\\:absolute {
      position: absolute;
    }
    .sm\\:fixed {
      position: fixed;
    }
    .sm\\:relative {
      position: relative;
    }
    .sm\\:static {
      position: static;
    }
    .sm\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 768px) {
    /* Display */
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\:grid {
      display: grid;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:inline {
      display: inline;
    }
    .md\\:inline-block {
      display: inline-block;
    }
    .md\\:inline-flex {
      display: inline-flex;
    }
    .md\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .md\\:absolute {
      position: absolute;
    }
    .md\\:fixed {
      position: fixed;
    }
    .md\\:relative {
      position: relative;
    }
    .md\\:static {
      position: static;
    }
    .md\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1024px) {
    /* Display */
    .lg\\:block {
      display: block;
    }
    .lg\\:flex {
      display: flex;
    }
    .lg\\:grid {
      display: grid;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:inline {
      display: inline;
    }
    .lg\\:inline-block {
      display: inline-block;
    }
    .lg\\:inline-flex {
      display: inline-flex;
    }
    .lg\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .lg\\:absolute {
      position: absolute;
    }
    .lg\\:fixed {
      position: fixed;
    }
    .lg\\:relative {
      position: relative;
    }
    .lg\\:static {
      position: static;
    }
    .lg\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1280px) {
    /* Display */
    .xl\\:block {
      display: block;
    }
    .xl\\:flex {
      display: flex;
    }
    .xl\\:grid {
      display: grid;
    }
    .xl\\:hidden {
      display: none;
    }
    .xl\\:inline {
      display: inline;
    }
    .xl\\:inline-block {
      display: inline-block;
    }
    .xl\\:inline-flex {
      display: inline-flex;
    }
    .xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .xl\\:absolute {
      position: absolute;
    }
    .xl\\:fixed {
      position: fixed;
    }
    .xl\\:relative {
      position: relative;
    }
    .xl\\:static {
      position: static;
    }
    .xl\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1536px) {
    /* Display */
    .\\32xl\\:block {
      display: block;
    }
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:grid {
      display: grid;
    }
    .\\32xl\\:hidden {
      display: none;
    }
    .\\32xl\\:inline {
      display: inline;
    }
    .\\32xl\\:inline-block {
      display: inline-block;
    }
    .\\32xl\\:inline-flex {
      display: inline-flex;
    }
    .\\32xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .\\32xl\\:absolute {
      position: absolute;
    }
    .\\32xl\\:fixed {
      position: fixed;
    }
    .\\32xl\\:relative {
      position: relative;
    }
    .\\32xl\\:static {
      position: static;
    }
    .\\32xl\\:sticky {
      position: sticky;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cz=K`
  /* === Box shadow === */
  .shadow-none {
    box-shadow: none;
  }
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dz=K`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uz=K`
  /* === Margin === */
  .-m-xs {
    margin: calc(var(--lumo-space-xs) / -1);
  }
  .-m-s {
    margin: calc(var(--lumo-space-s) / -1);
  }
  .-m-m {
    margin: calc(var(--lumo-space-m) / -1);
  }
  .-m-l {
    margin: calc(var(--lumo-space-l) / -1);
  }
  .-m-xl {
    margin: calc(var(--lumo-space-xl) / -1);
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }
  .m-auto {
    margin: auto;
  }

  /* === Margin (bottom) === */
  .-mb-xs {
    margin-bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-mb-s {
    margin-bottom: calc(var(--lumo-space-s) / -1);
  }
  .-mb-m {
    margin-bottom: calc(var(--lumo-space-m) / -1);
  }
  .-mb-l {
    margin-bottom: calc(var(--lumo-space-l) / -1);
  }
  .-mb-xl {
    margin-bottom: calc(var(--lumo-space-xl) / -1);
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }
  .mb-auto {
    margin-bottom: auto;
  }

  /* === Margin (end) === */
  .-me-xs {
    margin-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-me-s {
    margin-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-me-m {
    margin-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-me-l {
    margin-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-me-xl {
    margin-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }
  .me-auto {
    margin-inline-end: auto;
  }

  /* === Margin (horizontal) === */
  .-mx-xs {
    margin-inline: calc(var(--lumo-space-xs) / -1);
  }
  .-mx-s {
    margin-inline: calc(var(--lumo-space-s) / -1);
  }
  .-mx-m {
    margin-inline: calc(var(--lumo-space-m) / -1);
  }
  .-mx-l {
    margin-inline: calc(var(--lumo-space-l) / -1);
  }
  .-mx-xl {
    margin-inline: calc(var(--lumo-space-xl) / -1);
  }
  .mx-0 {
    margin-inline: 0;
  }
  .mx-xs {
    margin-inline: var(--lumo-space-xs);
  }
  .mx-s {
    margin-inline: var(--lumo-space-s);
  }
  .mx-m {
    margin-inline: var(--lumo-space-m);
  }
  .mx-l {
    margin-inline: var(--lumo-space-l);
  }
  .mx-xl {
    margin-inline: var(--lumo-space-xl);
  }
  .mx-auto {
    margin-inline: auto;
  }

  /* === Margin (left) === */
  .-ml-xs {
    margin-left: calc(var(--lumo-space-xs) / -1);
  }
  .-ml-s {
    margin-left: calc(var(--lumo-space-s) / -1);
  }
  .-ml-m {
    margin-left: calc(var(--lumo-space-m) / -1);
  }
  .-ml-l {
    margin-left: calc(var(--lumo-space-l) / -1);
  }
  .-ml-xl {
    margin-left: calc(var(--lumo-space-xl) / -1);
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }
  .ml-auto {
    margin-left: auto;
  }

  /* === Margin (right) === */
  .-mr-xs {
    margin-right: calc(var(--lumo-space-xs) / -1);
  }
  .-mr-s {
    margin-right: calc(var(--lumo-space-s) / -1);
  }
  .-mr-m {
    margin-right: calc(var(--lumo-space-m) / -1);
  }
  .-mr-l {
    margin-right: calc(var(--lumo-space-l) / -1);
  }
  .-mr-xl {
    margin-right: calc(var(--lumo-space-xl) / -1);
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }
  .mr-auto {
    margin-right: auto;
  }

  /* === Margin (start) === */
  .-ms-xs {
    margin-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-ms-s {
    margin-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-ms-m {
    margin-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-ms-l {
    margin-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-ms-xl {
    margin-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }
  .ms-auto {
    margin-inline-start: auto;
  }

  /* === Margin (top) === */
  .-mt-xs {
    margin-top: calc(var(--lumo-space-xs) / -1);
  }
  .-mt-s {
    margin-top: calc(var(--lumo-space-s) / -1);
  }
  .-mt-m {
    margin-top: calc(var(--lumo-space-m) / -1);
  }
  .-mt-l {
    margin-top: calc(var(--lumo-space-l) / -1);
  }
  .-mt-xl {
    margin-top: calc(var(--lumo-space-xl) / -1);
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }
  .mt-auto {
    margin-top: auto;
  }

  /* === Margin (vertical) === */
  .-my-xs {
    margin-block: calc(var(--lumo-space-xs) / -1);
  }
  .-my-s {
    margin-block: calc(var(--lumo-space-s) / -1);
  }
  .-my-m {
    margin-block: calc(var(--lumo-space-m) / -1);
  }
  .-my-l {
    margin-block: calc(var(--lumo-space-l) / -1);
  }
  .-my-xl {
    margin-block: calc(var(--lumo-space-xl) / -1);
  }
  .my-0 {
    margin-block: 0;
  }
  .my-xs {
    margin-block: var(--lumo-space-xs);
  }
  .my-s {
    margin-block: var(--lumo-space-s);
  }
  .my-m {
    margin-block: var(--lumo-space-m);
  }
  .my-l {
    margin-block: var(--lumo-space-l);
  }
  .my-xl {
    margin-block: var(--lumo-space-xl);
  }
  .my-auto {
    margin-block: auto;
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pz=K`
  .transition-none {
    transition: none;
  }
  .transition-all {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition {
    transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,
      transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-colors {
    transition: color, background-color, border-color, text-decoration-color, fill,
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-opacity {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-shadow {
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-transform {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vz=K`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line clamp === */
  [class*='line-clamp-'] {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }
  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }
  .line-clamp-6 {
    -webkit-line-clamp: 6;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* == Text decoration === */
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-break-spaces {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fz=K`
${az}
${iz}
${oz}
${lz}
${sz}
${hz}
${cz}
${dz}
${uz}
${pz}
${vz}
`;pe("",fz,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const p4=document.createElement("template");p4.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;ac.register("lumo",1e3,p4);/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const v4=document.createElement("template");v4.innerHTML=`<svg><defs>
<g id="vaadin:abacus"><path d="M0 0v16h16v-16h-16zM14 2v3h-0.1c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-3h12zM13.9 10c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-4h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1l-0.1 4zM2 14v-3h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1v3h-12z"></path></g>
<g id="vaadin:absolute-position"><path d="M0 0v16h16v-16h-16zM15 15h-14v-6h3v1l3-2-3-2v1h-3v-6h6v3h-1l2 3 2-3h-1v-3h6v14z"></path></g>
<g id="vaadin:academy-cap"><path d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path><path d="M8 0l-8 4 8 5 8-5-8-4z"></path><path d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path></g>
<g id="vaadin:accessibility"><path d="M10.4 10h-0.5c0.1 0.3 0.1 0.7 0.1 1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-0.2-1c-2.6 0.4-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-3.9l-0.5-2.1z"></path><path d="M13.1 13l-1.1-5h-4.1l-0.2-1h3.3v-1h-3.5l-0.6-2.5c0.9-0.1 1.6-0.8 1.6-1.7 0-1-0.8-1.8-1.8-1.8s-1.7 0.8-1.7 1.8c0 0.6 0.3 1.2 0.8 1.5l1.3 5.7h4.1l1.2 5h2.6v-1h-1.9z"></path></g>
<g id="vaadin:accordion-menu"><path d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M0 13h16v3h-16v-3z"></path></g>
<g id="vaadin:add-dock"><path d="M0 11v5h16v-5h-16zM12 15h-3v-3h3v3z"></path><path d="M12 7v-2c0-5-8-5-8-5s5 0 5 5v2h-2l3.5 3 3.5-3h-2z"></path></g>
<g id="vaadin:adjust"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM2 8c0-3.3 2.7-6 6-6v12c-3.3 0-6-2.7-6-6z"></path></g>
<g id="vaadin:adobe-flash"><path d="M0 0v16h16v-16h-16zM13 4.4c-3 0-3.3 2.6-3.3 2.6h1.3v2h-2.4c-1.8 5.8-5.6 5-5.6 5v-2.5c0 0 2.5 0.6 3.9-4 1.8-6.1 6.1-5.5 6.1-5.5v2.4z"></path></g>
<g id="vaadin:airplane"><path d="M12.3 6.5c0.5-0.5 0.9-0.8 1.2-1.1 1.6-1.6 3.2-4.1 2.2-5.1s-3.4 0.6-5 2.2c-0.3 0.3-0.6 0.7-1.1 1.2l-7-3.2c-0.7-0.3-1.5-0.2-2 0.3l-0.6 0.5 6.6 5.7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-0.6c-0.5-0.3-1.2-0.3-1.6 0.2l-0.3 0.3 2.8 2.1 2 2.8 0.3-0.3c0.4-0.4 0.5-1.1 0.2-1.6l-0.5-1.1c0.9-0.7 2.4-2.1 4-3.4l5.7 6.6 0.5-0.5c0.5-0.5 0.6-1.3 0.3-2l-3.2-7z"></path></g>
<g id="vaadin:alarm"><path d="M8 5h-1v5h4v-1l-2.93 0.070-0.070-4.070z"></path><path d="M5.46 0.87c-0.387-0.522-1-0.856-1.692-0.856-0.41 0-0.793 0.118-1.117 0.321l-0.991 0.765c-0.41 0.384-0.666 0.929-0.666 1.534 0 0.496 0.172 0.951 0.459 1.31z"></path><path d="M14.34 1.1l-1-0.77c-0.315-0.198-0.698-0.316-1.108-0.316-0.692 0-1.305 0.334-1.688 0.85l3.996 3.076c0.287-0.356 0.46-0.813 0.46-1.312 0-0.602-0.253-1.145-0.659-1.528z"></path><path d="M12.87 14c1.308-1.268 2.122-3.038 2.13-4.998-0.028-3.856-3.145-6.973-6.997-7.002-3.857 0.028-6.975 3.145-7.003 6.997 0.008 1.965 0.822 3.735 2.128 5.001l-0.938 0.942c-0.075 0.102-0.12 0.231-0.12 0.37 0 0.348 0.282 0.63 0.63 0.63 0.139 0 0.268-0.045 0.372-0.122l0.998-0.999c1.092 0.758 2.446 1.211 3.905 1.211s2.813-0.453 3.928-1.226l0.977 1.015c0.102 0.075 0.231 0.12 0.37 0.12 0.348 0 0.63-0.282 0.63-0.63 0-0.139-0.045-0.268-0.122-0.372zM2.87 9c0.028-2.822 2.308-5.102 5.127-5.13 2.825 0.028 5.105 2.308 5.133 5.127-0.028 2.825-2.308 5.105-5.127 5.133-2.825-0.028-5.105-2.308-5.133-5.127z"></path></g>
<g id="vaadin:align-center"><path d="M5 0h6v3h-6v-3z"></path><path d="M1 4h14v3h-14v-3z"></path><path d="M3 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-justify"><path d="M0 0h16v3h-16v-3z"></path><path d="M0 4h16v3h-16v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 8h16v3h-16v-3z"></path></g>
<g id="vaadin:align-left"><path d="M0 0h11v3h-11v-3z"></path><path d="M0 4h15v3h-15v-3z"></path><path d="M0 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-right"><path d="M5 0h11v3h-11v-3z"></path><path d="M1 4h15v3h-15v-3z"></path><path d="M3 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:alt-a"><path d="M14 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0 1 0.56 1.44 2 1.44v-1c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M9 3h1v9h-1v-9z"></path><path d="M3 12l0.57-2h2.82l0.61 2h1l-2.27-8h-1.46l-2.27 8h1zM5 5.1l1.11 3.9h-2.22z"></path></g>
<g id="vaadin:alt"><path d="M3.89 9h2.22l-1.11-3.9-1.11 3.9z"></path><path d="M0 0v16h16v-16h-16zM7 12l-0.61-2h-2.78l-0.61 2h-1l2.27-8h1.46l2.27 8h-1zM10 12h-1v-9h1v9zM14 7h-1v3.5s0 0.5 1 0.5v1c-1 0-2-0.44-2-1.44v-3.56h-0.5v-1h0.5v-1h1v1h1v1z"></path></g>
<g id="vaadin:ambulance"><path d="M6.18 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M14 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M5 6h-1v1h-1v1h1v1h1v-1h1v-1h-1v-1z"></path><path d="M15.76 8.64l-3-4.53c-0.455-0.673-1.215-1.11-2.078-1.11-0.008 0-0.015 0-0.023 0l-2.659-0v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-4.5c-0.828 0-1.5 0.672-1.5 1.5v8.5h1.37c0.474-1.135 1.546-1.931 2.812-2 1.278 0.072 2.345 0.868 2.81 1.978l2.188 0.021c0.474-1.135 1.546-1.931 2.812-2 1.303 0.003 2.405 0.827 2.822 1.979l1.187 0.021v-3.57c-0.001-0.294-0.090-0.568-0.243-0.795zM6.92 8.12c-0.266 1.117-1.255 1.935-2.435 1.935-1.381 0-2.5-1.119-2.5-2.5 0-1.18 0.818-2.17 1.918-2.432 0.195-0.049 0.399-0.075 0.609-0.075 1.37 0 2.48 1.11 2.48 2.48 0 0.21-0.026 0.414-0.075 0.609zM10 8v-3h0.85c0.003-0 0.006-0 0.009-0 0.777 0 1.461 0.394 1.866 0.992l1.325 2.008z"></path></g>
<g id="vaadin:anchor"><path d="M13 9v2c0 0-0.8 1.7-4 1.9v-6.9h2.2c0.2 0.3 0.5 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.8 0.5h-2.2v-1.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v1.3h-2.2c-0.1-0.3-0.4-0.5-0.8-0.5-0.6 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5h2.2v7c-3.3-0.3-4-2-4-2v-2h-3c0 0 2.8 7 8 7 5 0 8-7 8-7h-3zM8 1c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1 0.4-1 1-1z"></path></g>
<g id="vaadin:angle-double-down"><path d="M3 2v2l5 5 5-5v-2l-5 5z"></path><path d="M3 7v2l5 5 5-5v-2l-5 5z"></path></g>
<g id="vaadin:angle-double-left"><path d="M14 3h-2l-5 5 5 5h2l-5-5z"></path><path d="M9 3h-2l-5 5 5 5h2l-5-5z"></path></g>
<g id="vaadin:angle-double-right"><path d="M2 13h2l5-5-5-5h-2l5 5z"></path><path d="M7 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-double-up"><path d="M13 14v-2l-5-5-5 5v2l5-5z"></path><path d="M13 9v-2l-5-5-5 5v2l5-5z"></path></g>
<g id="vaadin:angle-down"><path d="M13 4v2l-5 5-5-5v-2l5 5z"></path></g>
<g id="vaadin:angle-left"><path d="M12 13h-2l-5-5 5-5h2l-5 5z"></path></g>
<g id="vaadin:angle-right"><path d="M4 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-up"><path d="M3 12v-2l5-5 5 5v2l-5-5z"></path></g>
<g id="vaadin:archive"><path d="M0 1h16v3h-16v-3z"></path><path d="M1 5v11h14v-11h-14zM11 9h-6v-2h6v2z"></path></g>
<g id="vaadin:archives"><path d="M11 2h-6v4h6v-4zM9 4h-2v-1h2v1z"></path><path d="M3 0v16h2v-1h6v1h2v-16h-10zM12 14h-8v-6h8v6zM12 7h-8v-6h8v6z"></path><path d="M11 9h-6v4h6v-4zM9 11h-2v-1h2v1z"></path></g>
<g id="vaadin:area-select"><path d="M7.9 7.9l2.1 7.5 1.7-2.6 3.2 3.2 1.1-1.1-3.3-3.2 2.7-1.6z"></path><path d="M8 12h-7v-9h12v5.4l1 0.2v-6.6h-14v11h8.2z"></path></g>
<g id="vaadin:arrow-backward"><path d="M0 7.9l6-4.9v3c0 0 1.1 0 2 0 8 0 8 8 8 8s-1-4-7.8-4c-1.1 0-1.8 0-2.2 0v2.9l-6-5z"></path></g>
<g id="vaadin:arrow-circle-down-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-4.4 0-8 3.6-8 8zM9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-left-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-right-o"><path d="M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8v0z"></path><path d="M9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-up-o"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8v0z"></path><path d="M7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-down"><path d="M12.5 8.6l-3.5 3.6v-12.2h-2v12.2l-3.5-3.6-1.4 1.5 5.9 5.9 5.9-5.9z"></path></g>
<g id="vaadin:arrow-forward"><path d="M16 7.9l-6-4.9v3c-0.5 0-1.1 0-2 0-8 0-8 8-8 8s1-4 7.8-4c1.1 0 1.8 0 2.2 0v2.9l6-5z"></path></g>
<g id="vaadin:arrow-left"><path d="M7.4 12.5l-3.6-3.5h12.2v-2h-12.2l3.6-3.5-1.5-1.4-5.9 5.9 5.9 5.9z"></path></g>
<g id="vaadin:arrow-long-down"><path d="M7 1h2v11h2l-3 3-3-3h2z"></path></g>
<g id="vaadin:arrow-long-left"><path d="M15 7v2h-11v2l-3-3 3-3v2z"></path></g>
<g id="vaadin:arrow-right"><path d="M8.6 3.5l3.5 3.5h-12.1v2h12.1l-3.5 3.5 1.4 1.4 6-5.9-6-5.9z"></path></g>
<g id="vaadin:arrow-up"><path d="M3.4 7.4l3.6-3.6v12.2h2v-12.2l3.5 3.6 1.4-1.5-5.9-5.9-6 5.9z"></path></g>
<g id="vaadin:arrows-cross"><path d="M15 5v-4h-4l1.3 1.3-4.3 4.3-4.3-4.3 1.3-1.3h-4v4l1.3-1.3 4.3 4.3-4.3 4.3-1.3-1.3v4h4l-1.3-1.3 4.3-4.3 4.3 4.3-1.3 1.3h4v-4l-1.3 1.3-4.3-4.3 4.3-4.3z"></path></g>
<g id="vaadin:arrows-long-h"><path d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"></path></g>
<g id="vaadin:arrows-long-right"><path d="M1 9v-2h11v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:arrows-long-up"><path d="M9 15h-2v-11h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:arrows-long-v"><path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:arrows"><path d="M16 8l-3-3v2h-4v-4h2l-3-3-3 3h2v4h-4v-2l-3 3 3 3v-2h4v4h-2l3 3 3-3h-2v-4h4v2z"></path></g>
<g id="vaadin:asterisk"><path d="M15.9 5.7l-2-3.4-3.9 2.2v-4.5h-4v4.5l-4-2.2-2 3.4 3.9 2.3-3.9 2.3 2 3.4 4-2.2v4.5h4v-4.5l3.9 2.2 2-3.4-4-2.3z"></path></g>
<g id="vaadin:at"><path d="M7.5 12.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0.1 2.3-1.9 4.2-4.2 4.2zM7.5 5.2c-1.5 0-2.7 1.3-2.7 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.4-2.8-2.9-2.8z"></path><path d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.5-0.4 3-1.2 4.2-0.3 0.5-1.1 1.2-2.3 1.2-0.8 0-1.3-0.3-1.6-0.6-0.7-0.7-0.6-1.8-0.6-1.9v-6.9h1.5v7c0 0.2 0 0.6 0.2 0.8 0 0 0.2 0.2 0.5 0.2 0.7 0 1.1-0.5 1.1-0.5 0.6-1 1-2.2 1-3.4 0-3.6-2.9-6.5-6.5-6.5s-6.6 2.8-6.6 6.4 2.9 6.5 6.5 6.5c0.7 0 1.3-0.1 1.9-0.3l0.4 1.4c-0.7 0.3-1.5 0.4-2.3 0.4z"></path></g>
<g id="vaadin:automation"><path d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M11.7 16v0c-0.8 0-1.6-0.2-2.3-0.7l-6.2-3.3c-0.5-0.4-0.9-0.6-1.3-1-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.3 1.9-4.5c1.2-1.2 2.8-1.9 4.5-1.9s3.3 0.7 4.6 1.9c0.4 0.4 0.6 0.7 1 1.2l3.5 6.4c1 1.7 0.7 3.8-0.7 5.2-0.9 0.9-1.9 1.3-3.1 1.3zM6.4 1c-1.4 0-2.8 0.6-3.8 1.6s-1.6 2.4-1.6 3.8c0 1.5 0.6 2.8 1.6 3.8 0.3 0.3 0.6 0.5 1.1 0.8l6.3 3.4c0.6 0.4 1.2 0.5 1.8 0.5v0c0.9 0 1.7-0.3 2.3-1 1.1-1.1 1.3-2.7 0.5-4l-3.5-6.4c-0.3-0.4-0.5-0.7-0.8-1-1.1-0.9-2.4-1.5-3.9-1.5z"></path><path d="M11 7v-1l-1.4-0.5c-0.1-0.2-0.1-0.3-0.2-0.5l0.6-1.3-0.7-0.7-1.3 0.6c-0.2-0.1-0.3-0.1-0.5-0.2l-0.5-1.4h-1l-0.5 1.4c-0.2 0.1-0.3 0.1-0.5 0.2l-1.3-0.6-0.7 0.7 0.6 1.3c-0.1 0.2-0.1 0.3-0.2 0.5l-1.4 0.5v1l1.4 0.5c0.1 0.2 0.1 0.3 0.2 0.5l-0.6 1.3 0.7 0.7 1.3-0.6c0.2 0.1 0.3 0.2 0.5 0.2l0.5 1.4h1l0.5-1.4c0.2-0.1 0.3-0.1 0.5-0.2l1.3 0.6 0.7-0.7-0.6-1.3c0.1-0.2 0.2-0.3 0.2-0.5l1.4-0.5zM6.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:backspace-a"><path d="M5 12l-5-4 5-4v2h11v4h-11v2z"></path></g>
<g id="vaadin:backspace"><path d="M0 2v12h16v-12h-16zM13 9h-7v2l-3-3 3-3v2h7v2z"></path></g>
<g id="vaadin:backwards"><path d="M16 15v-14l-8 7z"></path><path d="M8 15v-14l-8 7z"></path></g>
<g id="vaadin:ban"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 2c1.3 0 2.5 0.4 3.5 1.1l-8.4 8.4c-0.7-1-1.1-2.2-1.1-3.5 0-3.3 2.7-6 6-6zM8 14c-1.3 0-2.5-0.4-3.5-1.1l8.4-8.4c0.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z"></path></g>
<g id="vaadin:bar-chart-h"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M2 8h4v6h-4v-6z"></path><path d="M7 2h4v12h-4v-12z"></path><path d="M12 6h4v8h-4v-8z"></path></g>
<g id="vaadin:bar-chart-v"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M8 0v4h-6v-4h6z"></path><path d="M14 5v4h-12v-4h12z"></path><path d="M10 10v4h-8v-4h8z"></path></g>
<g id="vaadin:bar-chart"><path d="M0 15h15v1h-15v-1z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M4 9h3v5h-3v-5z"></path><path d="M8 5h3v9h-3v-9z"></path><path d="M12 0h3v14h-3v-14z"></path></g>
<g id="vaadin:barcode"><path d="M0 3h1v10h-1v-10z"></path><path d="M8 3h2v10h-2v-10z"></path><path d="M11 3h1v10h-1v-10z"></path><path d="M13 3h1v10h-1v-10z"></path><path d="M15 3h1v10h-1v-10z"></path><path d="M2 3h3v10h-3v-10z"></path><path d="M6 3h1v10h-1v-10z"></path></g>
<g id="vaadin:bed"><path d="M4.28 7h2.72l-1.15-1.68c-0.542-0.725-1.36-1.216-2.295-1.319l-0.555-0.001v1.54c-0.011 0.063-0.018 0.136-0.018 0.211 0 0.69 0.56 1.25 1.25 1.25 0.017 0 0.034-0 0.050-0.001z"></path><path d="M13 7v-0.28c0-0.003 0-0.007 0-0.010 0-0.934-0.749-1.693-1.678-1.71l-4.692-0c0.5 0.62 1.37 2 1.37 2h5z"></path><path d="M15 5.1c-0.552 0-1 0.448-1 1v1.9h-12v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v9h2v-2h12v2h2v-6.9c0-0.552-0.448-1-1-1z"></path></g>
<g id="vaadin:bell-o"><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0 0-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v2h4c0 0-0.1 2 2 2s2-2 2-2h4v-2l-1.3-0.6zM13 13h-10v-0.4l0.7-0.4c0.8-0.3 1.3-1.1 1.3-2v-5.2c0-0.1 0-1.6 2.2-1.9l0.8-0.2 0.8 0.1c2 0.4 2.2 1.7 2.2 2v5.2c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.3z"></path></g>
<g id="vaadin:bell-slash-o"><path d="M15.2 0l-3.6 3.6c-0.4-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1.3l-2 2v0.7h0.7l15.3-15.4v-0.6h-0.8zM5 10.3c0-0.1 0-0.1 0 0v-5.3c0-0.1 0.1-1.6 2.2-1.9l0.8-0.2 0.8 0.1c1.2 0.2 1.8 0.8 2 1.3l-5.8 6z"></path><path d="M12 10.2v-4.6l-1 1v3.5c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.4h-8.3l-1 1h2.4c0 0-0.1 2 2 2s2-2 2-2h3.9v-2l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell-slash"><path d="M15.2 0l-3.6 3.6c-0.5-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h0.3l-2.3 2.3v0.7h0.7l15.3-15.4v-0.6h-0.8zM6 4.8v4.5l-1 1v-5.3c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path><path d="M8 16c2.1 0 2-2 2-2h-4c0 0-0.1 2 2 2z"></path><path d="M12 10.2v-4.6l-6 6-0.3 0.4-1 1h9.3v-1l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell"><path d="M6 14h4c0 0 0.1 2-2 2s-2-2-2-2z"></path><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0-0.2-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h12v-1l-1.3-0.6zM6 4.8v7.2h-2c0.8 0 1-1 1-1v-6c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path></g>
<g id="vaadin:boat"><path d="M1.5 9.6c1.1 0.7 2.5 1.9 2.5 3.3 0 0.4 0 0.7 0 1.1 0 0 0.1 0 0.1 0s0.9 0 2-1c1 1 2 1 2 1s1 0 2-1c1 1 1.9 1 1.9 1s0.1 0 0.1 0c0-0.3 0-0.7 0-1.1 0-1.4 1.4-2.6 2.5-3.3 0.6-0.4 0.5-1.2-0.2-1.4l-1.4-0.4v-3.8h-1v-1h-3v-2h-2v2h-3v1h-1v3.8l-1.3 0.4c-0.8 0.2-0.8 1-0.2 1.4zM4 5h1v-1h6v1h1v2.5l-3.3-1c-0.5-0.1-1-0.1-1.5 0l-3.2 1v-2.5z"></path><path d="M14 14c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1v1h16v-1c0 0-1 0-2-1z"></path></g>
<g id="vaadin:bold"><path d="M11 7.5c0 0 2-0.8 2-3.6 0-4.1-5.1-3.9-7-3.9h-4v16h4c3.7 0 8 0 8-4.4 0-3.8-3-4.1-3-4.1zM9 4.4c0 1.8-1.5 1.6-3 1.6v-3c1.8 0 3 0.1 3 1.4zM6 13v-4c1.8 0 4-0.3 4 2.2 0 1.9-2.5 1.8-4 1.8z"></path></g>
<g id="vaadin:bolt"><path d="M7.99 0l-7.010 9.38 6.020-0.42-4.96 7.040 12.96-10-7.010 0.47 7.010-6.47h-7.010z"></path></g>
<g id="vaadin:bomb"><path d="M12 1h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M14 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M14.6 2.1l0.7-0.7-0.7-0.7-1.4 1.4 0.7 0.7z"></path><path d="M13.9 4.2l-0.7 0.7 1.4 1.4 0.7-0.7-0.7-0.7z"></path><path d="M11.1 2.8l0.7-0.7-1.4-1.4-0.7 0.7 0.7 0.7z"></path><path d="M10.4 6.4l2-2-0.7-0.7-2 2-0.7-0.7-0.7 0.8c-0.8-0.5-1.8-0.8-2.8-0.8-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-1-0.3-1.9-0.7-2.8l0.7-0.7-0.6-0.6zM6 7.2c-2 0-3.4 1.8-3.4 2.8h-1c0-2 2.4-3.8 4.4-3.8v1z"></path></g>
<g id="vaadin:book-dollar"><path d="M12.9 2.5c-1.6-1.2-1.4-2.5-1.4-2.5h-9.5v12.5c0 1.9 2.1 3.5 4 3.5h8v-13c0 0-0.8-0.2-1.1-0.5zM7 6.3c-0.9-0.3-2.3-0.8-2.3-1.9 0.1-0.8 1.3-1.4 1.3-1.6v-0.8h1v0.7c1 0.1 1.8 0.4 1.9 0.4l-0.3 0.9c0 0-0.7-0.3-1.5-0.3-0.7 0-1.1 0.3-1.2 0.8 0 0.3 0.5 0.6 1.3 0.9 1.5 0.5 1.9 1.1 1.9 1.9 0 0.7-0.1 1.6-2.1 1.8v0.9h-1v-0.8c0-0.1-1.4-0.5-1.5-0.5l0.5-0.9c0 0 1.1 0.5 2 0.4s1.3-0.6 1.3-1c0.1-0.3-0.4-0.6-1.3-0.9zM13 15h-7c-1 0-1.8-0.6-2-1.3-0.1-0.3 0-0.7 0.4-0.7h6.6v-10.3c1 0.6 2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:book-percent"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM5.5 3.2c0.8 0 1.5 0.7 1.5 1.6s-0.7 1.4-1.5 1.4-1.5-0.6-1.5-1.4 0.7-1.6 1.5-1.6zM9 3h1l-5 7h-1l5-7zM10 8.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0 0.6 1 1.1 2 1.3v11z"></path><path d="M9 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path><path d="M6 4.8c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:book"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM4 2h5v2h-5v-2zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0.4 0.6 1.2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:bookmark-o"><path d="M3 0v16l5-5 5 5v-16h-10zM12 13.7l-4-3.9-4 3.9v-10.7h8v10.7zM12 2h-8v-1h8v1z"></path></g>
<g id="vaadin:bookmark"><path d="M3 0v0 1h10l0.1-1z"></path><path d="M3 2h10v14l-5-5-5 5z"></path></g>
<g id="vaadin:briefcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM10 3h-4v-1h4v1z"></path></g>
<g id="vaadin:browser"><path d="M15 1v-1h-15v15h1v1h15v-15h-1zM3 1h9v1h-9v-1zM1 1h1v1h-1v-1zM1 3h13v11h-13v-11z"></path></g>
<g id="vaadin:bug-o"><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.681 1.007 1.714 1.731 2.92 1.994l0.031-0.994h2v1c1.237-0.269 2.271-0.993 2.939-1.983 0.013-0.017 0.016-0.017 0.019-0.017 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM6 13.5c-0.44-0.253-0.805-0.589-1.083-0.989l-0.247-0.411-0.15-0.39c-0.302-0.802-0.49-1.73-0.52-2.697l-0-0.013v-1.65c0.578 0.326 1.254 0.556 1.973 0.647l0.027 5.573zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1zM12 9c-0.030 0.98-0.218 1.908-0.54 2.77l-0.13 0.33-0.24 0.4c-0.285 0.411-0.65 0.747-1.074 0.992l-0.016-5.492c0.743-0.081 1.421-0.297 2.029-0.624l-0.029 1.624z"></path><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path></g>
<g id="vaadin:bug"><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.588 1.095 1.667 1.859 2.934 1.998l0.017-0.998h2v1c1.284-0.141 2.364-0.905 2.94-1.98 0.012-0.020 0.015-0.020 0.018-0.020 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1z"></path></g>
<g id="vaadin:building-o"><path d="M2 0v16h12v-16h-12zM13 15h-4v-3h-2v3h-4v-14h10v14z"></path><path d="M4 9h2v2h-2v-2z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M10 9h2v2h-2v-2z"></path><path d="M4 6h2v2h-2v-2z"></path><path d="M7 6h2v2h-2v-2z"></path><path d="M10 6h2v2h-2v-2z"></path><path d="M4 3h2v2h-2v-2z"></path><path d="M7 3h2v2h-2v-2z"></path><path d="M10 3h2v2h-2v-2z"></path></g>
<g id="vaadin:building"><path d="M3 0v16h4v-3h2v3h4v-16h-10zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM6 6h-2v-2h2v2zM6 3h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM12 6h-2v-2h2v2zM12 3h-2v-2h2v2z"></path></g>
<g id="vaadin:bullets"><path d="M0 2.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 7.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 12.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:bullseye"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path><path d="M8 2.3c-3.2 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7-2.5-5.7-5.7-5.7zM8 12.6c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"></path><path d="M8 4.6c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4z"></path></g>
<g id="vaadin:bus"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:button"><path d="M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"></path></g>
<g id="vaadin:calc-book"><path d="M11.9 0c-1.3 0-2 0.4-2.4 0.8-0.4-0.4-1.1-0.8-2.5-0.8-3.4 0-4 2-4 2v0 0 4h-3v10h7v-4.6l1.5-0.2c0 0 0.2-0.3 0.3 0.7h1.3c0.1-1 0.4-0.7 0.4-0.7l5.5 0.7v-9.8c0 0-0.6-2.1-4.1-2.1zM1 7h5v2h-5v-2zM6 10v1h-1v-1h1zM4 10v1h-1v-1h1zM2 15h-1v-1h1v1zM2 13h-1v-1h1v1zM2 11h-1v-1h1v1zM4 15h-1v-1h1v1zM4 13h-1v-1h1v1zM6 15h-1v-1h1v1zM6 13h-1v-1h1v1zM9 9.5c-0.9-0.1-1.3-0.3-2-0.3v-3.2h-3v-3.9c0-0.4 0.8-1.5 3-1.5 1.8 0 1.9 0.8 1.9 1 0 0 0 0 0 0v7.9zM15 9.9c-1-0.4-1.1-0.7-2.5-0.7-0.1 0-0.2 0-0.2 0-1 0-1.3 0.2-2.3 0.4v-7.6c0 0 0-0.1 0-0.1s0-0.1 0-0.1c0-0.2 0.2-1.1 1.9-1.1 2.3 0 3.1 0.9 3.1 1.4v7.8z"></path></g>
<g id="vaadin:calc"><path d="M9 3h6v2h-6v-2z"></path><path d="M9 11h6v2h-6v-2z"></path><path d="M5 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M7 10.4l-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6z"></path><path d="M13 14.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M13 9.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:calendar-briefcase"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M13 1v3h-3v-3h-5v3h-3v-3h-2v14h5v-1h-4v-8h13v3h1v-8z"></path><path d="M13 10v-2h-4v2h-3v6h10v-6h-3zM10 9h2v1h-2v-1z"></path></g>
<g id="vaadin:calendar-clock"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"></path><path d="M14 12h-3v-3h1v2h2z"></path><path d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"></path></g>
<g id="vaadin:calendar-envelope"><path d="M3 0h1v2h-1v-2z"></path><path d="M9 0h1v2h-1v-2z"></path><path d="M13 7v-6h-2v2h-3v-2h-3v2h-3v-2h-2v12h4v3h12v-9h-3zM4 12h-3v-7h11v2h-8v5zM5 10.2l2.6 1.5-2.6 2.6v-4.1zM5.7 15l2.8-2.8 1.5 0.9 1.5-0.8 2.8 2.8h-8.6zM15 14.3l-2.6-2.6 2.6-1.4v4zM15 9.2l-5 2.7-5-2.9v-1h10v1.2zM15.4 9.6v0 0 0z"></path></g>
<g id="vaadin:calendar-o"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:calendar-user"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M9 14.1c0-0.1 0-0.1 0 0l-8-0.1v-8h13v1.2c0.4 0.1 0.7 0.3 1 0.6v-6.8h-2v3h-3v-3h-5v3h-3v-3h-2v14h9v-0.9z"></path><path d="M15 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13.9 12h-1.8c-1.1 0-2.1 0.9-2.1 2.1v1.9h6v-1.9c0-1.2-0.9-2.1-2.1-2.1z"></path></g>
<g id="vaadin:calendar"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM3 15h-2v-2h2v2zM3 12h-2v-2h2v2zM3 9h-2v-2h2v2zM6 15h-2v-2h2v2zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM9 15h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM12 15h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM15 15h-2v-2h2v2zM15 12h-2v-2h2v2zM15 9h-2v-2h2v2z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:camera"><path d="M11 9c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path><path d="M11 4v-3h-6v3h-5v9h5c0.8 0.6 1.9 1 3 1s2.2-0.4 3-1h5v-9h-5zM6 2h4v2h-4v-2zM8 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM15 6h-2v-1h2v1z"></path></g>
<g id="vaadin:car"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-1.9-1.2h-7.4c-0.8 0-1.5 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0.4 1.1 1 1.2v2c0 0.6 0.5 1.1 1.1 1.1h0.9c0.5 0 1-0.5 1-1.1v-1.9h8v1.9c0 0.6 0.5 1.1 1.1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c0.6-0.1 1-0.6 1-1.2v-3.5c-0.1-0.5-0.5-1-1.1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:caret-down"><path d="M3 4h10l-5 7z"></path></g>
<g id="vaadin:caret-left"><path d="M11 3v10l-7-5z"></path></g>
<g id="vaadin:caret-right"><path d="M5 13v-10l7 5z"></path></g>
<g id="vaadin:caret-square-down-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M4 6h8l-4 5z"></path></g>
<g id="vaadin:caret-square-left-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M10 4v8l-5-4z"></path></g>
<g id="vaadin:caret-square-right-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M5.9 12v-8l5 4z"></path></g>
<g id="vaadin:caret-square-up-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M12 10h-8l4-5z"></path></g>
<g id="vaadin:caret-up"><path d="M13 12h-10l5-7z"></path></g>
<g id="vaadin:cart-o"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path></g>
<g id="vaadin:cart"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4z"></path></g>
<g id="vaadin:cash"><path d="M16 14h-14v-1h13v-7h1v8z"></path><path d="M13 4v7h-12v-7h12zM14 3h-14v9h14v-9z"></path><path d="M3 6h-1v3h1v1h4c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h-4v1z"></path><path d="M11 6v-1h-4c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5h4v-1h1v-3h-1z"></path></g>
<g id="vaadin:chart-3d"><path d="M12 4v-2l-4-2-4 2v1l-4 2v5l12 6 4-2v-8zM4 10.88l-3-1.5v-3.3l3 1.53v3.27zM4 6.49l-2.34-1.2 2.34-1.17v2.37zM8 12.88l-3-1.5v-8.31l3 1.54v8.27zM5.66 2.29l2.34-1.17 2.34 1.17-2.34 1.2zM12 14.88l-3-1.5v-6.31l3 1.54v6.27zM12 7.49l-2.34-1.2 2.34-1.17 2.34 1.17z"></path></g>
<g id="vaadin:chart-grid"><path d="M0 9v7h16v-7h-16zM5 15h-4v-1h4v1zM5 13h-4v-1h4v1zM5 11h-4v-1h4v1zM10 15h-4v-1h4v1zM10 13h-4v-1h4v1zM10 11h-4v-1h4v1zM15 15h-4v-1h4v1zM15 13h-4v-1h4v1zM15 11h-4v-1h4v1z"></path><path d="M16 8h-16v-8h1v7h15v1z"></path><path d="M15 1.57l-5.020 2.86-3.96-1.98-4.020 1.61v1.080l3.98-1.59 4.040 2.020 4.98-2.85v-1.15z"></path></g>
<g id="vaadin:chart-line"><path d="M0 16h16v-16h-1v2.6l-4 3.4v-6h-1v6.4l-4-0.9v-5.5h-1v5.7l-4 2.9v-8.6h-1zM5 14h-4v-1.7l4-2.9v4.6zM10 14h-4v-5.3l0.1-0.1 3.9 0.9v4.5zM15 14h-4v-4.3h0.1l3.9-3.2v7.5z"></path></g>
<g id="vaadin:chart-timeline"><path d="M16 13v-1h-15v-12h-1v13h5v2h-5v1h16v-1h-5v-2h5z"></path><path d="M9 7l-3-3-4 4v3h14v-11l-7 7z"></path></g>
<g id="vaadin:chart"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0h1v16h-1v-16z"></path><path d="M9 8l-2.9-3-4.1 4v5h14v-13.1z"></path></g>
<g id="vaadin:chat"><path d="M14 14.2c0 0 0 0 0 0 0-0.6 2-1.8 2-3.1 0-1.5-1.4-2.7-3.1-3.2 0.7-0.8 1.1-1.7 1.1-2.8 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.6 0 2.9-0.5 3.7-1.1 0 0.1 0 0.1 0 0.2 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0.1-0.1-0.7-0.5-0.7-1.9zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:check-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7.1 11.7l-4.2-4.1 1.4-1.4 2.8 2.7 4.9-4.9 1.4 1.4z"></path></g>
<g id="vaadin:check-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7.1 11.7l-4.2-4.1 1.4-1.4 2.7 2.7 5-4.9 1.4 1.4-6.3 6.3z"></path></g>
<g id="vaadin:check-square-o"><path d="M14 6.2v7.8h-12v-12h10.5l1-1h-12.5v14h14v-9.8z"></path><path d="M7.9 10.9l-4.2-4.2 1.5-1.4 2.7 2.8 6.7-6.7 1.4 1.4z"></path></g>
<g id="vaadin:check-square"><path d="M13 0.9l-1 1.1h-12v14h14v-10.5l1.7-2-2.7-2.6zM6.5 11.7l-4.2-4.2 1.4-1.4 2.7 2.7 6.6-6.6 1.4 1.4-7.9 8.1z"></path></g>
<g id="vaadin:check"><path d="M7.3 14.2l-7.1-5.2 1.7-2.4 4.8 3.5 6.6-8.5 2.3 1.8z"></path></g>
<g id="vaadin:chevron-circle-down-o"><path d="M13 6.6l-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path></g>
<g id="vaadin:chevron-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM11.6 5.2l1.4 1.4-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-left-o"><path d="M9.4 13l-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM10.8 11.6l-1.4 1.4-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path></g>
<g id="vaadin:chevron-circle-right-o"><path d="M6.6 13l5-5-5-5-1.4 1.4 3.6 3.6-3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM5.2 4.4l1.4-1.4 5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-up-o"><path d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path></g>
<g id="vaadin:chevron-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM4.4 10.8l-1.4-1.4 5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path></g>
<g id="vaadin:chevron-down-small"><path d="M8 12l-6.32-6.32 1.67-1.68 4.65 4.65 4.65-4.65 1.67 1.68-6.32 6.32z"></path></g>
<g id="vaadin:chevron-down"><path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z"></path></g>
<g id="vaadin:chevron-left-small"><path d="M4 8l6.32-6.32 1.68 1.67-4.65 4.65 4.65 4.65-1.68 1.67-6.32-6.32z"></path></g>
<g id="vaadin:chevron-left"><path d="M2.9 8l8-8 2.2 2.1-5.9 5.9 5.9 5.9-2.2 2.1z"></path></g>
<g id="vaadin:chevron-right-small"><path d="M12 8l-6.32-6.32-1.68 1.67 4.65 4.65-4.65 4.65 1.68 1.67 6.32-6.32z"></path></g>
<g id="vaadin:chevron-right"><path d="M13.1 8l-8 8-2.2-2.1 5.9-5.9-5.9-5.9 2.2-2.1z"></path></g>
<g id="vaadin:chevron-up-small"><path d="M8 4l-6.32 6.32 1.67 1.68 4.65-4.65 4.65 4.65 1.67-1.68-6.32-6.32z"></path></g>
<g id="vaadin:chevron-up"><path d="M8 2.9l8 8-2.1 2.2-5.9-5.9-5.9 5.9-2.1-2.2z"></path></g>
<g id="vaadin:child"><path d="M10 5c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 10.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v6.47h1.5v-4h1v4h1.5v-6.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:circle-thin"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"></path></g>
<g id="vaadin:clipboard-check"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M7.39 12.47l-3-2.73 1.35-1.48 1.58 1.44 2.87-2.9 1.42 1.4-4.22 4.27z"></path></g>
<g id="vaadin:clipboard-cross"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M11 8h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></path></g>
<g id="vaadin:clipboard-heart"><path d="M9.5 7c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-pulse"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M9.3 13c0 0 0 0 0 0-0.2 0-0.3-0.1-0.4-0.3l-0.8-4.8-0.7 3.1c0 0.1-0.1 0.2-0.3 0.3-0.1 0-0.3 0-0.4-0.1l-1-1.3h-1.3c-0.2 0-0.4-0.2-0.4-0.4s0.2-0.4 0.4-0.4h1.6c0.1 0 0.2 0.1 0.3 0.1l0.6 0.8 0.9-4.3c0-0.2 0.2-0.3 0.4-0.3 0 0 0 0 0 0 0.2 0 0.3 0.2 0.3 0.4l0.9 5.3 0.6-1.7c0.1-0.1 0.2-0.2 0.3-0.2h1.3c0.2 0 0.4 0.2 0.4 0.4s-0.2 0.4-0.4 0.4h-1l-1 2.9c0 0-0.2 0.1-0.3 0.1z"></path></g>
<g id="vaadin:clipboard-text"><path d="M4 6h8v1h-8v-1z"></path><path d="M4 8h8v1h-8v-1z"></path><path d="M4 10h5v1h-5v-1z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-user"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M8 6c-2.5 0-1.3 3.2-1.3 3.2 0.3 0.4 0.7 0.4 0.7 0.6 0 0.3-0.3 0.3-0.6 0.4-0.5 0.1-0.9-0.1-1.4 0.8-0.3 0.4-0.4 2-0.4 2h6c0 0-0.1-1.6-0.4-2-0.4-0.8-0.9-0.7-1.4-0.8-0.3 0-0.6-0.1-0.6-0.4s0.3-0.2 0.6-0.6c0.1 0 1.3-3.2-1.2-3.2z"></path></g>
<g id="vaadin:clipboard"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clock"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M8 3h-1v6h5v-1h-4z"></path></g>
<g id="vaadin:close-big"><path d="M16 0l-1 0.010-7 6.99-7-6.99-1-0.010v1l7 7-7 7v1h1l7-7 7 7h1v-1l-7-7 7-7v-1z"></path></g>
<g id="vaadin:close-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M12.2 10.8l-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8-2.8-2.8-1.4 1.4 2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-small"><path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path></g>
<g id="vaadin:close"><path d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></g>
<g id="vaadin:cloud-download-o"><path d="M14.1 9.8c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0.1-0.6 0.1-0.9 0.1v-3h-2v2.4c-0.4-0.3-0.9-0.4-1.3-0.4-1.6 0-2.9 1.3-2.9 2.9 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.6 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.5 2.4-2.7s-0.8-2.3-1.9-2.5zM13.6 14h-10.3c-1.2 0-2.3-1.3-2.3-2.6s1.1-2.6 2.3-2.6c0.1 0 0.3 0 0.4 0l1.4 0.2-0.9-1c-0.2-0.3-0.4-0.7-0.4-1.2 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v2.4h-1.9l3 4 3-4h-2v-1.9c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6 0.8 0.1c0.7 0 1.4 0.7 1.4 1.5 0 0.7-0.6 1.6-1.4 1.6z"></path></g>
<g id="vaadin:cloud-download"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4v-4h-4v3.1c-0.2-0.1-0.3-0.1-0.5-0.1-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM8 11.4l-2.9-3.4h1.9v-6h2v6h1.9l-2.9 3.4z"></path></g>
<g id="vaadin:cloud-o"><path d="M14.1 8.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.6 0-1.2 0.1-1.8 0.4-0.5-0.7-1.5-1.2-2.4-1.2-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 13h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.8 0 1.5 0.5 1.7 1.2l0.3 0.6 0.5-0.3c0.5-0.3 1.1-0.5 1.8-0.5 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0 0.6-0.6 1.5-1.4 1.5z"></path></g>
<g id="vaadin:cloud-upload-o"><path d="M14.1 10.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0-0.6 0-0.9 0.1v-2.1h2l-3-4-3 4h2v1.5c-0.4-0.2-0.9-0.3-1.3-0.3-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 15h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v3.2h2v-2.8c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0.1 0.7-0.5 1.6-1.3 1.6z"></path></g>
<g id="vaadin:cloud-upload"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-1.6-1-3-2.4-3.6l-3.6-4.4-2.5 3c-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM9 6v6h-2v-6h-1.9l2.9-3.4 2.9 3.4h-1.9z"></path></g>
<g id="vaadin:cloud"><path d="M14 13c1.1 0 2-0.9 2-2s-0.9-2-2-2c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4-0.8 0-1.5 0.2-2.2 0.6-0.3-0.9-1.2-1.6-2.3-1.6-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11z"></path></g>
<g id="vaadin:cluster"><path d="M14 12c-0.372 0.011-0.716 0.121-1.008 0.305l-2.212-2.155c0.434-0.547 0.708-1.239 0.74-1.993l1.57-0.157c0.225 0.556 0.76 0.941 1.385 0.941 0.823 0 1.49-0.667 1.49-1.49s-0.667-1.49-1.49-1.49c-0.749 0-1.368 0.552-1.474 1.271l-1.591 0.128c-0.224-1.136-0.973-2.060-1.978-2.521l0.308-0.839h0.26c1.099-0.008 1.986-0.9 1.986-2 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.742 0.404 1.39 1.004 1.735l-0.27 0.855c-0.227-0.054-0.487-0.084-0.754-0.084-0.83 0-1.59 0.296-2.181 0.789l-2.994-3.004c0.141-0.224 0.225-0.497 0.225-0.79 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0.823 0.663 1.492 1.484 1.5 0.281-0.001 0.544-0.079 0.767-0.214l2.993 3.004c-0.474 0.588-0.76 1.344-0.76 2.168 0 0.015 0 0.030 0 0.045-0 0.058-0 0.108-0 0.158l-0.66 0.11c-0.313-0.72-1.019-1.214-1.839-1.214-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.020-0-0.039-0.001-0.059l0.63-0.097c0.242 0.843 0.768 1.538 1.466 1.992l-0.556 1.188c-0.161-0.049-0.347-0.078-0.539-0.080-0.006-0-0.012-0-0.017-0-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.64-0.301-1.211-0.769-1.577l0.566-1.153c0.364 0.146 0.787 0.231 1.229 0.231 0.847 0 1.621-0.311 2.216-0.824l2.176 2.124c-0.25 0.33-0.4 0.748-0.4 1.2 0 1.105 0.895 2 2 2s2-0.895 2-2c0-1.105-0.895-2-2-2 0 0 0 0 0 0zM5 15c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"></path></g>
<g id="vaadin:code"><path d="M5.2 14l4.5-12h1.1l-4.5 12z"></path><path d="M11.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path><path d="M4.9 13h-1.2l-3.7-5 3.7-5h1.3l-3.8 5z"></path></g>
<g id="vaadin:coffee"><path d="M14 13l-4 1h-6l-4-1v-1h14z"></path><path d="M14.7 3h-1.7v-1h-12v5c0 1.5 0.8 2.8 2 3.4v0.6h8v-0.6c0.9-0.5 1.6-1.4 1.9-2.4 0 0 0.1 0 0.1 0 2.3 0 2.9-2 3-3.5 0.1-0.8-0.5-1.5-1.3-1.5zM13 7v-3h1.7c0.1 0 0.2 0.1 0.2 0.1s0.1 0.1 0.1 0.3c-0.2 2.6-1.6 2.6-2 2.6z"></path></g>
<g id="vaadin:cog-o"><path d="M15.2 6l-1.1-0.2c-0.1-0.2-0.1-0.4-0.2-0.6l0.6-0.9 0.5-0.7-2.6-2.6-0.7 0.5-0.9 0.6c-0.2-0.1-0.4-0.1-0.6-0.2l-0.2-1.1-0.2-0.8h-3.6l-0.2 0.8-0.2 1.1c-0.2 0.1-0.4 0.1-0.6 0.2l-0.9-0.6-0.7-0.4-2.5 2.5 0.5 0.7 0.6 0.9c-0.2 0.2-0.2 0.4-0.3 0.6l-1.1 0.2-0.8 0.2v3.6l0.8 0.2 1.1 0.2c0.1 0.2 0.1 0.4 0.2 0.6l-0.6 0.9-0.5 0.7 2.6 2.6 0.7-0.5 0.9-0.6c0.2 0.1 0.4 0.1 0.6 0.2l0.2 1.1 0.2 0.8h3.6l0.2-0.8 0.2-1.1c0.2-0.1 0.4-0.1 0.6-0.2l0.9 0.6 0.7 0.5 2.6-2.6-0.5-0.7-0.6-0.9c0.1-0.2 0.2-0.4 0.2-0.6l1.1-0.2 0.8-0.2v-3.6l-0.8-0.2zM15 9l-1.7 0.3c-0.1 0.5-0.3 1-0.6 1.5l0.9 1.4-1.4 1.4-1.4-0.9c-0.5 0.3-1 0.5-1.5 0.6l-0.3 1.7h-2l-0.3-1.7c-0.5-0.1-1-0.3-1.5-0.6l-1.4 0.9-1.4-1.4 0.9-1.4c-0.3-0.5-0.5-1-0.6-1.5l-1.7-0.3v-2l1.7-0.3c0.1-0.5 0.3-1 0.6-1.5l-1-1.4 1.4-1.4 1.4 0.9c0.5-0.3 1-0.5 1.5-0.6l0.4-1.7h2l0.3 1.7c0.5 0.1 1 0.3 1.5 0.6l1.4-0.9 1.4 1.4-0.9 1.4c0.3 0.5 0.5 1 0.6 1.5l1.7 0.3v2z"></path><path d="M8 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM8 10.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:cog"><path d="M16 9v-2l-1.7-0.6c-0.2-0.6-0.4-1.2-0.7-1.8l0.8-1.6-1.4-1.4-1.6 0.8c-0.5-0.3-1.1-0.6-1.8-0.7l-0.6-1.7h-2l-0.6 1.7c-0.6 0.2-1.2 0.4-1.7 0.7l-1.6-0.8-1.5 1.5 0.8 1.6c-0.3 0.5-0.5 1.1-0.7 1.7l-1.7 0.6v2l1.7 0.6c0.2 0.6 0.4 1.2 0.7 1.8l-0.8 1.6 1.4 1.4 1.6-0.8c0.5 0.3 1.1 0.6 1.8 0.7l0.6 1.7h2l0.6-1.7c0.6-0.2 1.2-0.4 1.8-0.7l1.6 0.8 1.4-1.4-0.8-1.6c0.3-0.5 0.6-1.1 0.7-1.8l1.7-0.6zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path><path d="M10.6 7.9c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5z"></path></g>
<g id="vaadin:cogs"><path d="M12 7v-2l-1.2-0.4c-0.1-0.3-0.2-0.7-0.4-1l0.6-1.2-1.5-1.3-1.1 0.5c-0.3-0.2-0.6-0.3-1-0.4l-0.4-1.2h-2l-0.4 1.2c-0.3 0.1-0.7 0.2-1 0.4l-1.1-0.5-1.4 1.4 0.6 1.2c-0.2 0.3-0.3 0.6-0.4 1l-1.3 0.3v2l1.2 0.4c0.1 0.3 0.2 0.7 0.4 1l-0.5 1.1 1.4 1.4 1.2-0.6c0.3 0.2 0.6 0.3 1 0.4l0.3 1.3h2l0.4-1.2c0.3-0.1 0.7-0.2 1-0.4l1.2 0.6 1.4-1.4-0.6-1.2c0.2-0.3 0.3-0.6 0.4-1l1.2-0.4zM3 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3z"></path><path d="M7.5 6c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M16 3v-1h-0.6c0-0.2-0.1-0.4-0.2-0.5l0.4-0.4-0.7-0.7-0.4 0.4c-0.2-0.1-0.3-0.2-0.5-0.2v-0.6h-1v0.6c-0.2 0-0.4 0.1-0.5 0.2l-0.4-0.4-0.7 0.7 0.4 0.4c-0.1 0.2-0.2 0.3-0.2 0.5h-0.6v1h0.6c0 0.2 0.1 0.4 0.2 0.5l-0.4 0.4 0.7 0.7 0.4-0.4c0.2 0.1 0.3 0.2 0.5 0.2v0.6h1v-0.6c0.2 0 0.4-0.1 0.5-0.2l0.4 0.4 0.7-0.7-0.4-0.4c0.1-0.2 0.2-0.3 0.2-0.5h0.6zM13.5 3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path><path d="M15.4 11.8c-0.1-0.3-0.2-0.6-0.4-0.9l0.3-0.6-0.7-0.7-0.5 0.4c-0.3-0.2-0.6-0.3-0.9-0.4l-0.2-0.6h-1l-0.2 0.6c-0.3 0.1-0.6 0.2-0.9 0.4l-0.6-0.3-0.7 0.7 0.3 0.6c-0.2 0.3-0.3 0.6-0.4 0.9l-0.5 0.1v1l0.6 0.2c0.1 0.3 0.2 0.6 0.4 0.9l-0.3 0.6 0.7 0.7 0.6-0.3c0.3 0.2 0.6 0.3 0.9 0.4l0.1 0.5h1l0.2-0.6c0.3-0.1 0.6-0.2 0.9-0.4l0.6 0.3 0.7-0.7-0.4-0.5c0.2-0.3 0.3-0.6 0.4-0.9l0.6-0.2v-1l-0.6-0.2zM12.5 14c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:coin-piles"><path d="M10.5 0c-3.040 0-5.5 0.88-5.5 2 0 0 0 0 0 0v2c-3 0.1-5 0.94-5 2 0 0 0 0 0 0v2s0 0 0 0v2s0 0 0 0v2c0 1.090 2.46 2 5.5 2 0.020 0 0.043 0 0.067 0 0.732 0 1.45-0.055 2.153-0.16 0.698 1.305 2.094 2.158 3.69 2.158 2.017 0 3.715-1.363 4.224-3.217 0.209-0.199 0.344-0.442 0.367-0.717l0-2.064v-8c0-1.12-2.46-2-5.5-2zM5.5 5c2.5 0 4.5 0.45 4.5 1s-2 1-4.5 1-4.5-0.45-4.5-1 2-1 4.5-1zM5.5 13c-2.71 0-4.25-0.71-4.5-1v-0.8c1.199 0.512 2.595 0.809 4.060 0.809 0.155 0 0.309-0.003 0.462-0.010 0.508-0.001 1.030-0.030 1.544-0.085-0.043 0.371 0.022 0.712 0.123 1.037-0.452 0.021-0.967 0.051-1.488 0.051-0.070 0-0.141-0.001-0.211-0.002zM7.070 10.91c-0.467 0.057-1.008 0.090-1.556 0.090-0.005 0-0.010 0-0.014 0-2.709 0-4.249-0.71-4.499-1v-0.84c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.632-0.001 1.271-0.044 1.897-0.128-0.197 0.306-0.291 0.654-0.342 1.015zM5.5 9c-2.71 0-4.25-0.71-4.5-1v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.366c-0.777 0.265-1.432 0.717-1.935 1.304-0.752 0.165-1.611 0.256-2.491 0.256-0.026 0-0.052-0-0.077-0zM11.41 15c-1.883 0-3.41-1.527-3.41-3.41s1.527-3.41 3.41-3.41c1.883 0 3.41 1.527 3.41 3.41s-1.527 3.41-3.41 3.41zM15 8c-0.175 0.167-0.385 0.3-0.617 0.386-0.288-0.244-0.6-0.46-0.938-0.634 0.575-0.153 1.101-0.352 1.593-0.61l-0.038 0.858zM15 6c-0.24 0.31-1.61 0.94-4 1v-1c0.003 0 0.007 0 0.011 0 1.443 0 2.814-0.305 4.053-0.855l-0.064 0.855zM15 4c-0.25 0.33-1.79 1-4.5 1h-0.23c-1.213-0.63-2.648-1-4.169-1-0.014 0-0.029 0-0.043 0l-0.058-0v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.926zM10.5 3c-2.5 0-4.5-0.45-4.5-1s2-1 4.5-1 4.5 0.45 4.5 1-2 1-4.5 1z"></path><path d="M10.5 11h0.5v3h1v-5h-0.5l-1 2z"></path></g>
<g id="vaadin:coins"><path d="M11.5 0c-2.485 0-4.5 2.015-4.5 4.5 0.004 0.261 0.029 0.513 0.074 0.758-0.479-0.176-1.025-0.261-1.591-0.261-3.043 0-5.51 2.467-5.51 5.51s2.467 5.51 5.51 5.51c3.043 0 5.51-2.467 5.51-5.51 0-0.566-0.085-1.112-0.244-1.626 0.23 0.077 0.484 0.099 0.742 0.099 2.48 0 4.49-2.010 4.49-4.49 0-2.477-2.005-4.485-4.481-4.49zM10 10.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.485 2.015-4.5 4.5-4.5 2.483 0.006 4.494 2.017 4.5 4.499zM12.5 7h-2v-0.5h0.5v-3h-0.5l1-1.5h0.5v4.5h0.5v0.5z"></path><path d="M5.63 8c0.033-0.003 0.072-0.005 0.111-0.005 0.696 0 1.26 0.564 1.26 1.26 0 0.016-0 0.031-0.001 0.047 0 1.698-1.86 2.698-1.86 2.698h1.37v-0.5h0.49v1.5h-3v-1s2-1.27 2-2.33c0-0.37 0-0.67-0.42-0.67-0.69 0-0.65 1-0.65 1h-0.93s-0.23-2 1.63-2z"></path></g>
<g id="vaadin:combobox"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM10 11h-9v-6h9v6zM13 8.4l-2-1.4h4l-2 1.4z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:comment-ellipsis-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.6 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.2l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.8-2.3-2.8-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path><path d="M6 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:comment-ellipsis"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5zM5 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM8 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM11 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:comment-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.5 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.3l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.7-2.3-2.7-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path></g>
<g id="vaadin:comment"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5z"></path></g>
<g id="vaadin:comments-o"><path d="M14.2 14c0.6-0.5 1.8-1.6 1.8-3.2 0-1.4-1.2-2.6-2.8-3.3 0.5-0.6 0.8-1.5 0.8-2.4 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.2 0 2.2-0.3 3-0.7 0.3 1.9 2.5 3.4 5.3 3.4 0.1 0 0.3 0 0.5 0 0.6 0.5 1.8 1.3 3.5 1.3h1.4l-1.1-0.9c0 0-0.3-0.3-0.4-1.1zM10.3 13.7c-2.3 0-4.3-1.3-4.3-2.8 0-0.1 0-0.1 0-0.2 0.2-0.2 0.4-0.3 0.5-0.5 0.2 0 0.5 0 0.7 0 2.1 0 4-0.7 5.2-1.9 1.5 0.5 2.6 1.5 2.6 2.5s-0.9 2-1.7 2.5l-0.3 0.2v0.3c0 0.5 0.2 0.8 0.3 1.1-1-0.2-1.7-0.7-1.9-1l-0.1-0.2h-0.2c-0.3 0-0.6 0-0.8 0zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:comments"><path d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3-1.3 1.5-3.9 2.4-6.4 2.4-0.1 0-0.3 0-0.4 0 0 0 0 0-0.1 0-0.1 0.3-0.1 0.5-0.1 0.8 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0 0-0.8-0.4-0.8-1.8 0 0 0 0 0 0 0-0.6 2-1.8 2-3.1z"></path><path d="M13 4.6c0-2.5-2.8-4.6-6.4-4.6s-6.6 2.1-6.6 4.6c0 1.7 2 3.2 3 4 0 0 0 0 0 0 0 1.8-1.4 2.4-1.4 2.4 2.3 0 3.6-1.1 4.2-1.8 0.2 0 0.5 0 0.8 0 3.5 0.1 6.4-2 6.4-4.6z"></path></g>
<g id="vaadin:compile"><path d="M1 12h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M11 12h4v4h-4v-4z"></path><path d="M1 7h4v4h-4v-4z"></path><path d="M1 2h4v4h-4v-4z"></path><path d="M6 7h4v4h-4v-4z"></path><path d="M7 1h4v4h-4v-4z"></path><path d="M11 7h4v4h-4v-4z"></path><path d="M13 0h3v3h-3v-3z"></path></g>
<g id="vaadin:compress-square"><path d="M12 0h-12v12l1-1v-10h10z"></path><path d="M4 16h12v-12l-1 1v10h-10z"></path><path d="M7 9h-5l1.8 1.8-3.8 3.8 1.4 1.4 3.8-3.8 1.8 1.8z"></path><path d="M16 1.4l-1.4-1.4-3.8 3.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:compress"><path d="M5.3 9.3l-5 5 1.4 1.4 5-5 1.3 1.3v-4h-4z"></path><path d="M15.7 1.7l-1.4-1.4-4 4-1.3-1.3v4h4l-1.3-1.3z"></path></g>
<g id="vaadin:connect-o"><path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:connect"><path d="M12 10c-0.8 0-1.4 0.3-2 0.8l-3.2-1.8c0.1-0.3 0.2-0.7 0.2-1s-0.1-0.7-0.2-1l3.2-1.8c0.6 0.5 1.2 0.8 2 0.8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 0.2 0 0.3 0 0.5l-3.5 1.9c-0.4-0.2-0.9-0.4-1.5-0.4-1.6 0-3 1.3-3 3v0c0 1.6 1.4 3 3 3 0.6 0 1.1-0.2 1.5-0.4l3.5 1.9c0 0.2 0 0.3 0 0.5 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z"></path></g>
<g id="vaadin:controller"><path d="M5.951 0.249l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M8.877 14.966l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M0.055 9.071l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M14.773 6.145l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M11.471 1.897l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M3.139 14.441l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M1.069 3.989l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M13.547 12.299l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M8.875 1.039l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M5.953 15.745l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M0.061 6.931l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M14.767 9.854l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M3.139 1.628l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M11.477 14.101l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M1.071 12.033l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M13.539 3.63l0.83-0.56 0.56 0.83-0.83 0.56-0.56-0.83z"></path><path d="M14 8c-0.003-1.895-0.884-3.583-2.258-4.681l-3.322 4.991-0.84-0.59 3.32-5c-0.836-0.47-1.836-0.747-2.9-0.747-3.314 0-6 2.686-6 6s2.686 6 6 6c3.304 0 5.984-2.671 6-5.971z"></path></g>
<g id="vaadin:copy-o"><path d="M13 3h-3l-3-3h-7v13h6v3h10v-10l-3-3zM7 1l2 2h-2v-2zM1 12v-11h5v3h3v8h-8zM15 15h-8v-2h3v-9h2v3h3v8zM13 6v-2l2 2h-2z"></path></g>
<g id="vaadin:copy"><path d="M6 0v3h3z"></path><path d="M9 4h-4v-4h-5v12h9z"></path><path d="M13 4v3h3z"></path><path d="M12 4h-2v9h-3v3h9v-8h-4z"></path></g>
<g id="vaadin:copyright"><path d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z"></path></g>
<g id="vaadin:corner-lower-left"><path d="M16 16l-16-16v16z"></path></g>
<g id="vaadin:corner-lower-right"><path d="M16 16h-16l16-16z"></path></g>
<g id="vaadin:corner-upper-left"><path d="M0 16l16-16h-16z"></path></g>
<g id="vaadin:corner-upper-right"><path d="M16 16l-16-16h16z"></path></g>
<g id="vaadin:credit-card"><path d="M0 2v12h16v-12h-16zM15 13h-14v-5h14v5zM15 5h-14v-2h14v2z"></path><path d="M10 11h3v1h-3v-1z"></path><path d="M2 11h6v1h-6v-1z"></path></g>
<g id="vaadin:crop"><path d="M16 0.7v-0.7h-0.7l-3 3h-7.3v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7.3l3-3zM5 5h5.3l-5.3 5.3v-5.3zM11 11h-5.3l5.3-5.3v5.3z"></path></g>
<g id="vaadin:cross-cutlery"><path d="M10.9 8.6c0 0 0 0 0 0 0.6-0.1 1.2-0.4 1.6-0.9l3.1-3.1c0.4-0.4 0.4-1 0-1.4l-0.1-0.2-3 3c-0.2 0.2-0.6 0.2-0.9 0s-0.2-0.6 0-0.9l2.6-2.6c0.2-0.2 0.2-0.6 0-0.9-0.2-0.2-0.6-0.2-0.9 0l-2.6 2.6c-0.2 0.2-0.6 0.2-0.9 0-0.2-0.2-0.2-0.6 0-0.9l3-3-0.1-0.1c-0.4-0.4-1-0.4-1.4 0l-3.1 3.3c-0.4 0.4-0.7 1-0.8 1.6l-4.9-4.8c-0.4-0.4-1-0.3-1.3 0l-0.2 0.2c-1.4 1.4-0.9 4.2 1.5 6.6l0.8 0.8c0.4 0.4 0.9 0.7 1.5 0.8-0.5 0.4-0.8 0.8-0.8 0.8l-3.4 3.4c-0.7 0.7-0.7 1.9 0 2.6s1.9 0.7 2.6 0l3.3-3.5c0.2-0.2 0.7-0.8 1.3-1.5 0.3 0.4 0.5 0.6 0.5 0.6l4.3 4.3c0.7 0.7 1.9 0.7 2.6 0s0.7-1.9 0-2.6l-4.3-4.2z"></path></g>
<g id="vaadin:crosshairs"><path d="M7.5 0h1v4l-0.5 2-0.5-2v-4z"></path><path d="M8.5 16h-1v-4l0.5-2 0.5 2v4z"></path><path d="M16 7.5v1h-4l-2-0.5 2-0.5h4z"></path><path d="M0 8.5v-1h4l2 0.5-2 0.5h-4z"></path><path d="M8 2.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5c-3.038 0-5.5-2.462-5.5-5.5 0.006-3.035 2.465-5.494 5.499-5.5zM8 1c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7v0z"></path></g>
<g id="vaadin:css"><path d="M4.1 11c1.4 0 1.9-1 1.9-1l-0.8-0.5c0 0-0.3 0.5-1 0.5s-1.2-0.9-1.2-2.2c0-1.2 0.6-1.8 1.2-1.8 0.5 0 0.9 0.4 0.9 0.4l0.8-0.6c0 0-0.7-0.8-1.7-0.8-1.1 0-2.2 0.9-2.2 2.8s0.9 3.2 2.1 3.2zM8.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM12.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM0 0v16h16v-16h-16zM15 15h-14v-14h14v14z"></path></g>
<g id="vaadin:ctrl-a"><path d="M9 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0.176 0.835 0.907 1.453 1.783 1.453 0.077 0 0.152-0.005 0.226-0.014l-0.009-0.999c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M14 3h1v9h-1v-9z"></path><path d="M13 6c-0.025-0.001-0.055-0.001-0.085-0.001-0.773 0-1.462 0.358-1.911 0.917l-0.004-0.915h-1v6h1v-3c-0.003-0.037-0.004-0.080-0.004-0.124 0-1.038 0.842-1.88 1.88-1.88 0.044 0 0.087 0.001 0.13 0.004l-0.006-1z"></path><path d="M4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47z"></path></g>
<g id="vaadin:ctrl"><path d="M0 0v16h16v-16h-16zM4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47zM9 7h-1v3.5c0.147 0.309 0.457 0.519 0.815 0.519 0.065 0 0.129-0.007 0.19-0.020l-0.006 1.001c-0.065 0.008-0.141 0.013-0.217 0.013-0.875 0-1.606-0.618-1.781-1.441l-0.002-3.572h-0.51v-1h0.51v-1h1v1h1v1zM11 9v3h-1v-6h1v0.92c0.453-0.564 1.142-0.921 1.915-0.921 0.030 0 0.060 0.001 0.090 0.002l-0.004 1c-0.037-0.003-0.080-0.004-0.124-0.004-1.038 0-1.88 0.842-1.88 1.88 0 0.044 0.001 0.087 0.004 0.13zM15 12h-1v-9h1v9z"></path></g>
<g id="vaadin:cube"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM14.4 2.6l-5.9 2.2-6.6-2.2 6.1-1.6 6.4 1.6zM1 11.4v-8.1l7 2.4v9.2l-7-3.5z"></path></g>
<g id="vaadin:cubes"><path d="M12 6v-4l-4-2-4 2v4l-4 2v5l4 2 4-2 4 2 4-2v-5zM8.090 1.12l2.91 1.44-2.6 1.3-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5v-3.6zM4 13.88l-3-1.5v-3.6l3 1.5v3.6zM4.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44zM12 13.88l-3-1.5v-3.6l3 1.5v3.6zM12.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44z"></path></g>
<g id="vaadin:curly-brackets"><path d="M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z"></path><path d="M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z"></path></g>
<g id="vaadin:cursor-o"><path d="M5 2.6l5.75 6.4h-2.46l0.63 1.41 1.8 4-0.91 0.34-1.88-4.3-0.5-1.11-1 0.71-1.43 1.020v-8.47zM4 0v13l3-2.14 2.26 5.14 2.8-1-2.23-5h3.17l-9-10z"></path></g>
<g id="vaadin:cursor"><path d="M4 0v13l3.31-3.47 2.69 6.47 1.37-0.63-2.72-6.37h4.35l-9-9z"></path></g>
<g id="vaadin:cutlery"><path d="M13 0.8c0-0.5-0.4-0.8-0.8-0.8h-0.2c-1.7 0-3 1.9-3 4.7v0.9c0 1 0.5 1.9 1.4 2.4-0.3 1.2-0.4 2.5-0.4 2.5v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.4-0.1-1.4-0.3-2.3 0.2-0.2 0.3-0.4 0.3-0.7v-6.7z"></path><path d="M7.2 0h-0.2v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3c0-0.3-0.2-0.5-0.5-0.5s-0.5 0.2-0.5 0.5v3c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-0.2c-0.4 0-0.8 0.4-0.8 0.8v3.7c0 1 0.6 1.9 1.5 2.3-0.4 1.6-0.5 3.7-0.5 3.7v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.5-0.1-2.3-0.4-3.7 0.8-0.4 1.4-1.3 1.4-2.3v-3.7c0-0.4-0.4-0.8-0.8-0.8z"></path></g>
<g id="vaadin:dashboard"><path d="M16 10.1c0-4.4-3.6-8.1-8-8.1s-8 3.7-8 8.1c0 1.4 0.3 2.9 0.9 3.9h4.9c0.5 0.6 1.3 1 2.2 1s1.7-0.4 2.2-1h4.9c0.6-1 0.9-2.5 0.9-3.9zM14 7v1l-4.1 3.5c0 0.1 0.1 0.3 0.1 0.5 0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.3 0 0.6 0.1 0.8 0.2l4.2-3.2h1zM10 4h1v1h-1v-1zM5 4h1v1h-1v-1zM2 12h-1v-1h1v1zM3 8h-1v-1h1v1zM15 12h-1v-1h1v1z"></path><path d="M9 12c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:database"><path d="M14 2.5c0 0.828-2.686 1.5-6 1.5s-6-0.672-6-1.5c0-0.828 2.686-1.5 6-1.5s6 0.672 6 1.5z"></path><path d="M8 5c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 9c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 13c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path></g>
<g id="vaadin:date-input"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path><path d="M3 8h1v5h-1v-5z"></path></g>
<g id="vaadin:deindent"><path d="M4 10.5v-6l-4 3z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:del-a"><path d="M14 3h1v9h-1v-9z"></path><path d="M3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM2 11h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5h-1v7z"></path><path d="M13 9v-0.5c-0.017-0.77-0.31-1.468-0.783-2.003-0.419-0.412-0.999-0.668-1.638-0.668-0.031 0-0.063 0.001-0.094 0.002-0.013-0.001-0.034-0.001-0.054-0.001-0.594 0-1.132 0.241-1.521 0.631-0.566 0.685-0.91 1.572-0.91 2.54 0 0.003-0 0.006-0 0.009 0 0.881 0.322 1.686 0.854 2.306 0.43 0.429 1.030 0.697 1.692 0.697 0.030 0 0.059-0.001 0.089-0.002 0.861-0.026 1.642-0.372 2.228-0.922l-0.712-0.708c-0.401 0.368-0.931 0.603-1.515 0.63-0.026 0.001-0.051 0.002-0.076 0.002-0.385 0-0.734-0.153-0.99-0.402-0.355-0.435-0.57-0.997-0.57-1.61l4-0zM10.5 6.8c0.020-0.001 0.043-0.002 0.066-0.002 0.362 0 0.691 0.141 0.935 0.372 0.209 0.224 0.361 0.505 0.427 0.818l-2.778 0.011c0.11-0.661 0.661-1.165 1.337-1.2z"></path></g>
<g id="vaadin:del"><path d="M0 0v16h16v-16h-16zM3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM13 9h-4c-0 0.004-0 0.008-0 0.012 0 0.607 0.211 1.164 0.564 1.603 0.252 0.244 0.601 0.397 0.986 0.397 0.025 0 0.049-0.001 0.074-0.002 0.586-0.027 1.115-0.261 1.518-0.631l0.708 0.712c-0.584 0.548-1.364 0.893-2.225 0.92-0.030 0.001-0.060 0.002-0.090 0.002-0.662 0-1.261-0.268-1.696-0.702-0.522-0.613-0.84-1.414-0.84-2.289 0-0.007 0-0.014 0-0.022-0-0.005-0-0.012-0-0.019 0-0.968 0.344-1.855 0.915-2.547 0.384-0.383 0.922-0.624 1.516-0.624 0.021 0 0.041 0 0.062 0.001 0.024-0.001 0.055-0.002 0.086-0.002 0.639 0 1.219 0.256 1.641 0.672 0.47 0.532 0.762 1.23 0.78 1.996l0 0.524zM15 12h-1v-9h1v9z"></path><path d="M3 4h-1v7h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5z"></path><path d="M10.49 6.8c-0.679 0.035-1.23 0.539-1.339 1.192l2.779 0.008c-0.069-0.324-0.22-0.606-0.431-0.831-0.242-0.229-0.571-0.371-0.934-0.371-0.027 0-0.053 0.001-0.079 0.002z"></path></g>
<g id="vaadin:dental-chair"><path d="M11.5 8.2c-0.3-0.1-0.6-0.2-0.8-0.2h-2.7v-1h3c0-0.6-0.4-1-1-1h-4c0 0.6 0.4 1 1 1v1c-0.5 0-1-0.2-1.2-0.6l-1.1-1.8c-0.3-0.4-0.7-0.6-1.1-0.6h-0.6v-0.7c0-0.3-0.1-0.5-0.2-0.8l-0.3-0.7c-0.3-0.5-0.9-0.8-1.5-0.8h-1l5 7c0.4 0.6 1.1 1 1.8 1h1.2v1h-1v2h-0.6c-0.9 0-1.8 0.4-2.4 1v0h-1v1h11v-1h-1c-0.6-0.6-1.5-1-2.4-1h-0.6v-2h-1v-1h1.6c0.2 0 0.5 0.1 0.7 0.2l1.7 0.9c0.9 0.5 2 0.5 2.9 0h0.1l-4.5-2.9z"></path></g>
<g id="vaadin:desktop"><path d="M16 0h-16v13h6v2h-2v1h8v-1h-2v-2h6v-13zM9 12h-2v-1h2v1zM15 10h-14v-8.9c0-0.1 0-0.1 0-0.1h14c0 0 0 0 0 0.1v8.9z"></path></g>
<g id="vaadin:diamond-o"><path d="M13 2h-10l-3 3.5 8 9.5 8-9.5zM4.64 5h-2.89l1.52-1.78zM6.42 5l1.58-1.84 1.58 1.84h-3.16zM10 6l-2 6.68-2-6.68h4zM5.26 6l1.89 6.44-5.42-6.44h3.53zM10.75 6h3.53l-5.43 6.44zM11.37 5l1.37-1.78 1.51 1.78h-2.9zM12 3l-1.44 1.81-1.46-1.81h2.9zM5.43 4.83l-1.43-1.83h2.9z"></path></g>
<g id="vaadin:diamond"><path d="M0 6h4l3 8.6-7-8.6z"></path><path d="M16 6h-4l-3 8.6 7-8.6z"></path><path d="M8 15l-3-9h6l-3 9z"></path><path d="M4 5h-4l2-3 2 3z"></path><path d="M16 5h-4l2-3 2 3z"></path><path d="M10 5h-4l2-3 2 3z"></path><path d="M3.34 2h3.66l-2 3-1.66-3z"></path><path d="M9 2h4l-2 3-2-3z"></path></g>
<g id="vaadin:diploma-scroll"><path d="M12.61 8.41c-0.53-0.079-1.008-0.223-1.454-0.424 2.104-1.876 4.424-3.536 4.454-3.556l0.1-0.070 0.060-0.11c0.177-0.367 0.281-0.797 0.281-1.252 0-0.901-0.407-1.707-1.046-2.244-0.523-0.482-1.219-0.776-1.983-0.776-0.538 0-1.043 0.146-1.476 0.4l-0.126 0.133c-1.578 2.181-3.182 4.099-4.908 5.899-1.836 1.638-3.87 3.195-6.018 4.592l-0.394 0.248v0.23c-0.077 0.314-0.122 0.675-0.122 1.046 0 0.97 0.304 1.87 0.822 2.609 0.507 0.53 1.237 0.87 2.045 0.87 0.055 0 0.109-0.002 0.162-0.005 0.026 0.002 0.065 0.003 0.104 0.003 0.701 0 1.317-0.36 1.674-0.905 0.245-0.308 2.065-2.608 4.005-4.708 0.268 0.464 0.476 1.003 0.594 1.575 0.032 0.249 0.046 0.496 0.046 0.747 0 0.823-0.158 1.61-0.445 2.331l1.685-2.043 1.33 1c-0.041-1.174-0.243-2.286-0.584-3.336-0.227-0.416-0.542-0.845-0.915-1.214 0.406 0.346 0.871 0.643 1.372 0.874 0.94 0.338 1.989 0.572 3.076 0.672l-0.949-1.266 2-1.73c-0.83 0.273-1.785 0.431-2.777 0.431-0.216 0-0.43-0.007-0.642-0.022zM12.16 1.18c0.246-0.123 0.536-0.194 0.842-0.194 0.506 0 0.966 0.196 1.309 0.516 0.441 0.356 0.721 0.897 0.721 1.504 0 0.242-0.045 0.474-0.126 0.688-0.486 0.307-2.346 1.717-4.146 3.307-0.055-0.521-0.302-0.975-0.668-1.298-0.28-0.239-0.643-0.384-1.039-0.384-0.068 0-0.135 0.004-0.201 0.012 1.568-1.771 2.978-3.691 3.308-4.151zM2.7 11.81c0.073-0.051 0.164-0.082 0.262-0.082 0.014 0 0.027 0.001 0.040 0.002l0.068-0c0.179 0.052 0.334 0.142 0.461 0.261l-0.871 0.719c-0.081-0.165-0.128-0.358-0.128-0.563 0-0.052 0.003-0.103 0.009-0.153 0.027-0.077 0.084-0.144 0.158-0.183zM4 14.5c-0.175 0.306-0.499 0.508-0.871 0.508-0.046 0-0.090-0.003-0.134-0.009-0.046 0.006-0.106 0.008-0.167 0.008-0.515 0-0.981-0.209-1.318-0.548-0.365-0.54-0.583-1.206-0.583-1.922 0-0.251 0.027-0.495 0.077-0.73l0.706-0.457c-0.094 0.14-0.164 0.304-0.199 0.481-0.007 0.076-0.010 0.154-0.010 0.234 0 0.642 0.202 1.237 0.545 1.724l0.354 0.44 1.7-1.4c0.066 0.209 0.104 0.45 0.104 0.7 0 0.351-0.075 0.685-0.21 0.985zM4.86 12.050c-0.345-0.6-0.889-1.053-1.54-1.274-0.071-0.012-0.13-0.016-0.19-0.016s-0.119 0.004-0.177 0.010c-0.046-0.007-0.106-0.011-0.168-0.011s-0.122 0.004-0.182 0.011c1.489-1.018 2.766-2.003 3.988-3.052 0.398 0.071 0.812 0.25 1.131 0.533 0.297 0.313 0.48 0.739 0.48 1.209 0 0.032-0.001 0.063-0.002 0.094-1.14 1.226-2.25 2.536-3 3.506-0.054-0.379-0.177-0.719-0.357-1.023z"></path></g>
<g id="vaadin:diploma"><path d="M14 10.58c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167l-0.479-0.698c-0.009-0.013-0.014-0.028-0.014-0.045s0.005-0.032 0.014-0.045l0.48-0.7c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167c-0.040-0.11-0.127-0.196-0.236-0.237l-0.823-0.301c-0.031-0.011-0.054-0.037-0.060-0.069l-0-0.841c-0.007-0.125-0.072-0.233-0.169-0.299-0.066-0.045-0.145-0.071-0.231-0.071-0.004 0-0.007 0-0.011 0l-0.159-0-0.85 0.22c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l-0.549-0.65c-0.079-0.085-0.191-0.137-0.315-0.137s-0.236 0.053-0.315 0.137l-0.55 0.65c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l0.001 0-0.9-0.23h-0.1c-0.002-0-0.005-0-0.008-0-0.087 0-0.167 0.026-0.234 0.071-0.096 0.066-0.161 0.174-0.168 0.298l-0 0.841c-0.006 0.033-0.029 0.059-0.059 0.070l-0.821 0.3c-0.134 0.023-0.245 0.11-0.299 0.228-0.025 0.051-0.039 0.107-0.039 0.167s0.014 0.117 0.039 0.167l0.479 0.698c0.009 0.013 0.014 0.028 0.014 0.045s-0.005 0.032-0.014 0.045l-0.48 0.7c-0.024 0.048-0.038 0.105-0.038 0.165s0.014 0.117 0.039 0.167c0.040 0.11 0.127 0.196 0.236 0.237l0.823 0.301c0.031 0.011 0.054 0.037 0.060 0.069l0 0.841c0.007 0.125 0.072 0.233 0.169 0.299 0.067 0.045 0.147 0.071 0.234 0.071 0.003 0 0.005-0 0.008-0h0.16l0.31-0.070v3.69l1.53-2 1.47 2v-3.69l0.31 0.080h0.11c0.002 0 0.005 0 0.008 0 0.087 0 0.167-0.026 0.234-0.071 0.096-0.066 0.161-0.174 0.168-0.298l0-0.841c0.006-0.033 0.029-0.059 0.059-0.070l0.821-0.3c0.13-0.026 0.236-0.112 0.289-0.227z"></path><path d="M0 1v12h8l-0.11-0.050c-0.282-0.195-0.469-0.508-0.49-0.867l-0-0.083h-6.4v-10h14v10h-1.43v0.080c-0.021 0.361-0.208 0.675-0.486 0.868l-0.084 0.052h3v-12h-16z"></path><path d="M7.43 6.91c0.007-0.377 0.198-0.708 0.486-0.908 0.016-0.005 0.030-0.006 0.044-0.006s0.028 0.001 0.041 0.004l-5.001-0v1h4.43v-0.090z"></path><path d="M6.42 8h-3.42v1h3.36c-0.074-0.136-0.117-0.298-0.117-0.47 0-0.13 0.025-0.253 0.070-0.367 0.014-0.063 0.054-0.122 0.107-0.163z"></path><path d="M3 4h10v1h-10v-1z"></path></g>
<g id="vaadin:disc"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM15 8c0 1.1-0.2 2.1-0.7 3l-2.7-1.2c0.2-0.6 0.4-1.2 0.4-1.8 0-2.2-1.8-4-4-4-0.5 0-0.9 0.1-1.4 0.3l-1.2-2.8c0.6-0.2 1.2-0.4 1.8-0.5l0.3 3h0.5v-3c3.9 0 7 3.1 7 7zM8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM1 8c0-1.1 0.2-2.1 0.7-3l2.7 1.2c-0.2 0.6-0.4 1.2-0.4 1.8 0 2.2 1.8 4 4 4 0.5 0 0.9-0.1 1.4-0.3l1.2 2.8c-0.6 0.2-1.2 0.4-1.8 0.5l-0.3-3h-0.5v3c-3.9 0-7-3.1-7-7z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:doctor-briefcase"><path d="M16 12l-1.4-6.7c-0.2-0.7-0.9-1.3-1.7-1.3h-1.9v-1.2c0-1-0.8-1.8-1.8-1.8h-2.4c-1 0-1.8 0.8-1.8 1.8v1.2h-1.9c-0.8 0-1.5 0.6-1.7 1.3l-1.4 6.7c-0.2 1 0.6 2 1.7 2h12.5c1.2 0 2-1 1.8-2zM6 2.8c0-0.4 0.4-0.8 0.8-0.8h2.4c0.4 0 0.8 0.4 0.8 0.8v1.2h-4v-1.2zM11 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"></path></g>
<g id="vaadin:doctor"><path d="M14 11.3c-1-1.9-2-1.6-3.1-1.7 0.1 0.3 0.1 0.6 0.1 1 1.6 0.4 2 2.3 2 3.4v1h-2v-1h1c0 0 0-2.5-1.5-2.5s-1.5 2.4-1.5 2.5h1v1h-2v-1c0-1.1 0.4-3.1 2-3.4 0-0.6-0.1-1.1-0.2-1.3-0.2-0.1-0.4-0.3-0.4-0.6 0-0.6 0.8-0.4 1.4-1.5 0 0 0.9-2.3 0.6-4.3h-1c0-0.2 0.1-0.3 0.1-0.5s0-0.3-0.1-0.5h0.8c-0.3-1-1.3-1.9-3.2-1.9 0 0 0 0 0 0s0 0 0 0 0 0 0 0c-1.9 0-2.9 0.9-3.3 2h0.8c0 0.2-0.1 0.3-0.1 0.5s0 0.3 0.1 0.5h-1c-0.2 2 0.6 4.3 0.6 4.3 0.6 1 1.4 0.8 1.4 1.5 0 0.5-0.5 0.7-1.1 0.8-0.2 0.2-0.4 0.6-0.4 1.4 0 0.4 0 0.8 0 1.2 0.6 0.2 1 0.8 1 1.4 0 0.7-0.7 1.4-1.5 1.4s-1.5-0.7-1.5-1.5c0-0.7 0.4-1.2 1-1.4 0-0.3 0-0.7 0-1.2s0.1-0.9 0.2-1.3c-0.7 0.1-1.5 0.4-2.2 1.7-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0.1 0-0.2-3.6-0.8-4.7zM6.5 2.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5z"></path><path d="M5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:dollar"><path d="M8.2 6.8c-0.1 0-0.1-0.1-0.2-0.1v-3.1c1.2 0.1 2.2 0.6 2.2 0.6l0.9-1.8c-0.1 0-1.5-0.8-3.1-0.8v-1.6h-1v1.6c-0.8 0.2-1.4 0.5-2 0.9-0.6 0.6-1 1.4-1 2.3 0 0.7 0.2 2.3 3 3.6v3.9c-0.9-0.2-2-0.7-2.4-0.9l-1 1.7c0.2 0.1 1.8 1 3.4 1.2v1.7h1v-1.7c0 0 0 0 0 0 2.3-0.3 3.6-2.1 3.6-3.8 0-1.5-1-2.7-3.4-3.7zM7 6.2c-0.8-0.5-1-1-1-1.3 0-0.4 0.1-0.7 0.4-0.9 0.2-0.1 0.4-0.2 0.6-0.3v2.5zM8 12.3v-3.4c1.1 0.5 1.6 1.1 1.6 1.6 0 0.6-0.3 1.6-1.6 1.8z"></path></g>
<g id="vaadin:dot-circle"><path d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:download-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 13l5-5h-3v-8h-4v8h-3z"></path></g>
<g id="vaadin:download"><path d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"></path><path d="M10 6v-6h-4v6h-3l5 5 5-5z"></path></g>
<g id="vaadin:drop"><path d="M8 0c0 0-5 8.2-5 11s2.2 5 5 5 5-2.2 5-5-5-11-5-11zM8.9 14.9l-0.2-1c1.4-0.3 2.4-1.7 2.4-3.2 0-0.3-0.1-1.1-0.8-2.6l0.9-0.4c0.6 1.4 0.8 2.4 0.8 3 0 2-1.3 3.8-3.1 4.2z"></path></g>
<g id="vaadin:edit"><path d="M16 4c0 0 0-1-1-2s-1.9-1-1.9-1l-1.1 1.1v-2.1h-12v16h12v-8l4-4zM6.3 11.4l-0.6-0.6 0.3-1.1 1.5 1.5-1.2 0.2zM7.2 9.5l-0.6-0.6 5.2-5.2c0.2 0.1 0.4 0.3 0.6 0.5zM14.1 2.5l-0.9 1c-0.2-0.2-0.4-0.3-0.6-0.5l0.9-0.9c0.1 0.1 0.3 0.2 0.6 0.4zM11 15h-10v-14h10v2.1l-5.9 5.9-1.1 4.1 4.1-1.1 2.9-3v6z"></path></g>
<g id="vaadin:eject"><path d="M1 11h14l-7-10z"></path><path d="M1 12h14v3h-14v-3z"></path></g>
<g id="vaadin:elastic"><path d="M4.7 16v0c-1.7 0-3.1-0.8-4-2.1-1.1-1.7-0.9-4 0.4-5.8 0.9-1.3 2.1-2.1 3.6-2.4 1.2-0.3 2.2-1.1 2.5-2.2 0.2-0.8 0.7-1.5 1.3-2 0.9-1 2.2-1.5 3.5-1.5 1.1 0 2.2 0.4 2.9 1.2 1.5 1.6 1.5 4.2-0.1 6-0.5 0.6-1.2 1.1-2 1.4-1.2 0.5-2.2 1.6-2.6 3-0.3 1-0.8 1.9-1.5 2.6-1.1 1.2-2.6 1.8-4 1.8zM12 1c-1 0-2 0.4-2.8 1.2-0.5 0.5-0.8 1-1 1.6-0.5 1.5-1.8 2.5-3.3 2.9-1.2 0.2-2.2 0.9-3 2-1.1 1.5-1.2 3.3-0.3 4.7 0.6 1 1.8 1.6 3.1 1.6v0c1.2 0 2.4-0.5 3.3-1.4 0.6-0.6 1.1-1.4 1.3-2.2 0.4-1.7 1.6-3 3.2-3.6 0.6-0.2 1.2-0.7 1.6-1.2 1.2-1.4 1.3-3.5 0.1-4.7-0.6-0.6-1.4-0.9-2.2-0.9z"></path></g>
<g id="vaadin:ellipsis-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M4 7h2v2h-2v-2z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 7h2v2h-2v-2z"></path></g>
<g id="vaadin:ellipsis-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 9h-2v-2h2v2zM9 9h-2v-2h2v2zM12 9h-2v-2h2v2z"></path></g>
<g id="vaadin:ellipsis-dots-h"><path d="M4 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-dots-v"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-h"><path d="M0 6h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path></g>
<g id="vaadin:ellipsis-v"><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path></g>
<g id="vaadin:enter-arrow"><path d="M0 9l7 4v-3h9v-7l-3 2v2h-6v-3l-7 5z"></path></g>
<g id="vaadin:enter"><path d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"></path></g>
<g id="vaadin:envelope-o"><path d="M0 3v11h16v-11h-16zM1 7.1l3.9 2-3.9 3.4v-5.4zM1.9 13l4-3.5 2.1 1.1 2.1-1.1 4 3.5h-12.2zM15 12.5l-3.9-3.5 3.9-2v5.5zM15 5.9l-7 3.5-7-3.5v-1.9h14v1.9z"></path></g>
<g id="vaadin:envelope-open-o"><path d="M14 3.7v-0.7h-1.5l-4.5-3-4.6 3h-1.4v0.7l-2 1.3v11h16v-10.9l-2-1.4zM8 1.2l2.7 1.8h-5.5l2.8-1.8zM3 4h10v3.7l-3.5 1.7-1.5-1.3-1.5 1.4-3.5-1.7v-3.8zM1 5.5l1-0.7v2.4l-1-0.4v-1.3zM1 7.9l4.6 2.3-4.6 4v-6.3zM1.9 15l6.1-5.3 6.1 5.3h-12.2zM15 14.2l-4.7-4.1 4.7-2.3v6.4zM15 6.7l-1 0.5v-2.3l1 0.7v1.1z"></path></g>
<g id="vaadin:envelope-open"><path d="M14 3.7v3.7l2-1v-1.4z"></path><path d="M2 3.8l-2 1.2v1.5l2 1z"></path><path d="M11.2 2l-3.2-2-3.2 2z"></path><path d="M13 3h-10v4.9l3.4 1.7 1.6-1.2 1.6 1.2 3.4-1.7z"></path><path d="M16 7.6l-5.5 2.7 5.5 4.4z"></path><path d="M8 9.6l-8 6.4h16z"></path><path d="M5.5 10.3l-5.5-2.7v7.1z"></path></g>
<g id="vaadin:envelope"><path d="M0 3h16v2.4l-8 4-8-4z"></path><path d="M0 14l5.5-4.8 2.5 1.4 2.5-1.4 5.5 4.8z"></path><path d="M4.6 8.8l-4.6-2.3v6.5z"></path><path d="M11.4 8.8l4.6-2.3v6.5z"></path></g>
<g id="vaadin:envelopes-o"><path d="M14 2h-14v10h14v-10zM5.71 8l1.29 0.55 1.29-0.55 4.71 3h-12zM1 9.83v-4l3.64 1.63zM9.36 7.46l3.64-1.68v4zM13 3v1.68l-6 2.77-6-2.77v-1.68h12z"></path><path d="M15 4v9h-13v1h14v-10h-1z"></path></g>
<g id="vaadin:envelopes"><path d="M16 14h-14v-1h13v-9h1v10z"></path><path d="M14 10.77v-5.48l-4.68 2.18 4.68 3.3z"></path><path d="M8.28 7.96l-1.28 0.59-1.28-0.59-5.72 4.030v0.010l14-0.010-5.72-4.030z"></path><path d="M7 7.45l7-3.27v-2.18h-14v2.18l7 3.27z"></path><path d="M4.68 7.47l-4.68-2.18v5.48l4.68-3.3z"></path></g>
<g id="vaadin:eraser"><path d="M8.1 14l6.4-7.2c0.6-0.7 0.6-1.8-0.1-2.5l-2.7-2.7c-0.3-0.4-0.8-0.6-1.3-0.6h-1.8c-0.5 0-1 0.2-1.4 0.6l-6.7 7.6c-0.6 0.7-0.6 1.9 0.1 2.5l2.7 2.7c0.3 0.4 0.8 0.6 1.3 0.6h11.4v-1h-7.9zM6.8 13.9c0 0 0-0.1 0 0l-2.7-2.7c-0.4-0.4-0.4-0.9 0-1.3l3.4-3.9h-1l-3 3.3c-0.6 0.7-0.6 1.7 0.1 2.4l2.3 2.3h-1.3c-0.2 0-0.4-0.1-0.6-0.2l-2.8-2.8c-0.3-0.3-0.3-0.8 0-1.1l3.5-3.9h1.8l3.5-4h1l-3.5 4 3.1 3.7-3.5 4c-0.1 0.1-0.2 0.1-0.3 0.2z"></path></g>
<g id="vaadin:esc-a"><path d="M8 12c-0.726-0.029-1.409-0.177-2.043-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.85 0.33 2 0.77 1.8 2.080-0.067 0.511-0.364 0.94-0.782 1.186-0.323 0.163-0.696 0.256-1.090 0.256-0.034 0-0.069-0.001-0.103-0.002z"></path><path d="M13.71 12c-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.646-0.548-1.059-1.37-1.059-2.289 0-0.079 0.003-0.157 0.009-0.235-0.011-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.010 0.063-0.016 0.148-0.016 0.234 0 0.599 0.255 1.138 0.663 1.514 0.346 0.177 0.754 0.28 1.185 0.28 0.292 0 0.573-0.047 0.835-0.134l0.331 0.905c-0.383 0.121-0.823 0.19-1.279 0.19-0.004 0-0.008 0-0.012-0z"></path><path d="M5 4v-1h-4v9h4v-1h-3v-3h3v-1h-3v-3h3z"></path></g>
<g id="vaadin:esc"><path d="M0 0v16h16v-16h-16zM5 4h-3v3h3v1h-3v3h3v1h-4v-9h4v1zM10 10.54c-0.067 0.511-0.364 0.94-0.782 1.186-0.333 0.175-0.719 0.276-1.129 0.276-0.031 0-0.062-0.001-0.093-0.002-0.722-0.029-1.405-0.177-2.038-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.83 0.3 2.020 0.75 1.83 2.060zM12.67 10.72c0.345 0.176 0.752 0.279 1.183 0.279 0.292 0 0.573-0.047 0.835-0.134l0.311 0.945c-0.383 0.121-0.823 0.19-1.279 0.19-0 0-0.001 0-0.001 0-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.651-0.548-1.069-1.374-1.069-2.297 0-0.076 0.003-0.152 0.008-0.227-0.010-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.008 0.055-0.013 0.13-0.013 0.206 0 0.592 0.25 1.126 0.65 1.502z"></path></g>
<g id="vaadin:euro"><path d="M10.89 3c1.166 0.009 2.244 0.383 3.127 1.011l-0.017-2.321c-0.918-0.433-1.994-0.686-3.129-0.686-3.606 0-6.616 2.551-7.323 5.947l-1.548 0.049v1h1.41c0 0.17 0 0.33 0 0.5-0.005 0.075-0.008 0.162-0.008 0.25s0.003 0.175 0.008 0.262l-1.411-0.012v1h1.54c0.882 3.353 3.805 5.818 7.331 5.999 1.149-0.002 2.218-0.256 3.175-0.708l-0.045-2.291c-0.866 0.617-1.944 0.991-3.108 1-2.461-0.128-4.512-1.744-5.28-3.959l6.388-0.041v-1h-6.59c-0.006-0.075-0.009-0.162-0.009-0.25s0.003-0.175 0.010-0.261c-0.001-0.159-0.001-0.319-0.001-0.489h6.59v-1h-6.4c0.678-2.325 2.788-3.996 5.29-4z"></path></g>
<g id="vaadin:exchange"><path d="M16 5v2h-13v2l-3-3 3-3v2z"></path><path d="M0 12v-2h13v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:exclamation-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 3h2v7h-2v-7z"></path><path d="M7 11h2v2h-2v-2z"></path></g>
<g id="vaadin:exclamation-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-2h2v2zM9 10h-2v-7h2v7z"></path></g>
<g id="vaadin:exclamation"><path d="M6 0h4v4l-1 7h-2l-1-7z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:exit-o"><path d="M10 0c1.1 0 2 0.9 2 2 0 0.9-0.6 1.7-1.5 1.9 0 0 0 0.1 0 0.1 0.4 0 0.7 0.2 1 0.5l1.3 1.3c0.1 0.1 0.3 0.2 0.5 0.2h1.7v-6h-5z"></path><path d="M11.8 14.5l-3.8-4.5v2.5c0 0.8-0.7 1.5-1.5 1.5h-3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1h2.5c0.3 0 0.5-0.2 0.5-0.5v-2c0-0.7 0.1-1.3 0.4-2l0.7-1.5h-0.8c-0.5 0-0.9 0.2-1.2 0.6l-0.5 0.7c-0.2 0.4-0.7 0.5-1.2 0.3-0.4-0.3-0.6-0.9-0.2-1.3l0.6-0.8c0.7-1 1.9-1.5 3.1-1.5h2l0.1-0.3c-0.6-0.3-1-1-1-1.7 0-1.1 0.9-2 2-2h-7v4.9l-0.6 0.8c-0.3 0.4-0.5 0.9-0.4 1.5 0.1 0.5 0.4 1 0.9 1.3 0 0 0 0 0 0v2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2v1h11.6c-1.1 0-2.1-0.6-2.7-1.5z"></path><path d="M11.4 7.3l-0.7-0.8-0.6 1.5c-0.2 0.5-0.3 0.9 0 1.3l4.9 6.1v-7.4h-2.1c-0.6 0-1.1-0.2-1.5-0.7z"></path></g>
<g id="vaadin:exit"><path d="M14 6h-1.7c-0.2 0-0.4-0.1-0.6-0.2l-1.3-1.3c-0.2-0.3-0.6-0.5-1.1-0.5h-0.3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7l-0.2 0.3h-2c-1.1 0-2.3 0.5-3 1.5l-0.6 0.8c-0.4 0.4-0.2 1 0.2 1.3 0.4 0.2 0.9 0.1 1.2-0.3l0.5-0.7c0.3-0.4 0.7-0.6 1.2-0.6h0.8l-0.7 1.6c-0.3 0.6-0.4 1.2-0.4 1.9v2c0 0.3-0.2 0.5-0.5 0.5h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.5c0.8 0 1.5-0.7 1.5-1.5v-2.5l3.8 4.5c0.6 0.9 1.7 1.5 2.8 1.5h0.9l-5.4-6.7c-0.3-0.4-0.2-0.8 0-1.3l0.6-1.5 0.7 0.8c0.4 0.4 1 0.7 1.6 0.7h2c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path></g>
<g id="vaadin:expand-full"><path d="M5.3 6.7l1.4-1.4-3-3 1.3-1.3h-4v4l1.3-1.3z"></path><path d="M6.7 10.7l-1.4-1.4-3 3-1.3-1.3v4h4l-1.3-1.3z"></path><path d="M10.7 9.3l-1.4 1.4 3 3-1.3 1.3h4v-4l-1.3 1.3z"></path><path d="M11 1l1.3 1.3-3 3 1.4 1.4 3-3 1.3 1.3v-4z"></path></g>
<g id="vaadin:expand-square"><path d="M11 2h-9v9l1-1v-7h7z"></path><path d="M5 14h9v-9l-1 1v7h-7z"></path><path d="M16 0h-5l1.8 1.8-4.5 4.5 1.4 1.4 4.5-4.5 1.8 1.8z"></path><path d="M7.7 9.7l-1.4-1.4-4.5 4.5-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:expand"><path d="M15 1h-4l1.3 1.3-4.5 4.5 1.4 1.4 4.5-4.5 1.3 1.3z"></path><path d="M6.8 7.8l-4.5 4.5-1.3-1.3v4h4l-1.3-1.3 4.5-4.5z"></path></g>
<g id="vaadin:external-browser"><path d="M11 10l-2.9-3.2-3.3 3.2h2.2v1.8c0 1.7-0.9 4.2-4 4.2 4.8 0 6-1.4 6-4.3v-1.7h2z"></path><path d="M0 0v13h6v-1h-5v-9h14v9h-5v1h6v-13h-16zM2 2h-1v-1h1v1zM13 2h-10v-1h10v1z"></path></g>
<g id="vaadin:external-link"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"></path></g>
<g id="vaadin:eye-slash"><path d="M12.9 5.2l-0.8 0.8c1.7 0.9 2.5 2.3 2.8 3-0.7 0.9-2.8 3.1-7 3.1-0.7 0-1.2-0.1-1.8-0.2l-0.8 0.8c0.8 0.3 1.7 0.4 2.6 0.4 5.7 0 8.1-4 8.1-4s-0.6-2.4-3.1-3.9z"></path><path d="M12 7.1c0-0.3 0-0.6-0.1-0.8l-4.8 4.7c0.3 0 0.6 0.1 0.9 0.1 2.2 0 4-1.8 4-4z"></path><path d="M15.3 0l-4.4 4.4c-0.8-0.2-1.8-0.4-2.9-0.4-6.7 0-8 5.1-8 5.1s1 1.8 3.3 3l-3.3 3.2v0.7h0.7l15.3-15.3v-0.7h-0.7zM4 11.3c-1.6-0.7-2.5-1.8-2.9-2.3 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 1.1 0.5 2.2 1.3 2.9l-1.3 1.3zM6.2 7.9l-1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.5 0.4-1.5 0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.7c-0.1 0.7 0.1 1.1 0.1 1.1z"></path></g>
<g id="vaadin:eye"><path d="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z"></path></g>
<g id="vaadin:eyedropper"><path d="M15 1c-1.8-1.8-3.7-0.7-4.6 0.1-0.4 0.4-0.7 0.9-0.7 1.5v0c0 1.1-1.1 1.8-2.1 1.5l-0.1-0.1-0.7 0.8 0.7 0.7-6 6-0.8 2.3-0.7 0.7 1.5 1.5 0.8-0.8 2.3-0.8 6-6 0.7 0.7 0.7-0.6-0.1-0.2c-0.3-1 0.4-2.1 1.5-2.1v0c0.6 0 1.1-0.2 1.4-0.6 0.9-0.9 2-2.8 0.2-4.6zM3.9 13.6l-2 0.7-0.2 0.1 0.1-0.2 0.7-2 5.8-5.8 1.5 1.5-5.9 5.7z"></path></g>
<g id="vaadin:facebook-square"><path d="M0 0v16h16v-16h-16zM12.9 8.4h-2.1v5.6h-2.1v-5.6h-1.5v-2h1.5c0 0 0-0.8 0-1.7 0-1.5 0.9-2.7 2.9-2.7 0.8 0 1.4 0.1 1.4 0.1v1.9c0 0-0.6 0-1.3 0s-0.8 0.3-0.8 0.9c0 0.1 0 0.1 0 0.1 0 0.2 0 0.5 0 1.4h2.1l-0.1 2z"></path></g>
<g id="vaadin:facebook"><path d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z"></path></g>
<g id="vaadin:factory"><path d="M4.4 1.3c-0.6 0.3-0.8 1.1-0.4 1.5 0.5-0.9 1.3-0.6 2.5 0.4 0.8 0.7 1.9 0.1 1.9 0.1s0.2 1.2 1.7 1.4c1.7 0.2 2.3-0.8 2.3-0.8s0.4 1 1.9 0.4c1.1-0.4 0.7-1.1 0.7-1.1s1 0 1-0.7c0-0.9-1.1-0.8-1.1-0.8s0.2-1-0.9-1.1c-1-0.1-1.3 0.5-1.3 0.5s-0.3-1.1-1.8-1.1c-1.4 0-1.9 1.3-1.9 1.3s-0.4-0.6-1.6-0.6c-0.9 0-1.3 0.7-1.3 0.7s-1.1-0.5-1.7-0.1z"></path><path d="M12 12.1v-2.1l-4 2.1v-2.1h-2.4l-0.6-7h-2l-0.6 7h-2.4v6h16v-6l-4 2.1zM6 14h-4v-2h4v2z"></path></g>
<g id="vaadin:family"><path d="M9.5 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M14.27 4h-2.54c0 0 0 0 0 0-0.955 0-1.73 0.775-1.73 1.73v3.27c0 0.552 0.448 1 1 1v6h4v-6c0.552 0 1-0.448 1-1v-3.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M15 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M4.27 5h-2.54c-0.955 0-1.73 0.775-1.73 1.73s0.775 1.73 1.73 1.73c0.955 0 1.73-0.775 1.73-1.73s-0.775-1.73-1.73-1.73c-0.955 0-1.73 0.775-1.73 1.73v2.27c0 0.552 0.448 1 1 1l-1 3h1v3h4v-3h1l-1-3c0.552 0 1-0.448 1-1v-2.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M5 3c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M7 13v3h2v-3c0.552 0 1-0.448 1-1v-1.54c0-0.806-0.654-1.46-1.46-1.46 0 0 0 0 0 0h-1.080c-0.806 0-1.46 0.654-1.46 1.46 0 0 0 0 0 0v1.54c0 0.552 0.448 1 1 1z"></path></g>
<g id="vaadin:fast-backward"><path d="M16 15v-14l-7 7z"></path><path d="M9 15v-14l-7 7z"></path><path d="M0 1h2v14h-2v-14z"></path></g>
<g id="vaadin:fast-forward"><path d="M0 1v14l7-7z"></path><path d="M7 1v14l7-7z"></path><path d="M14 1h2v14h-2v-14z"></path></g>
<g id="vaadin:female"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8v-1.5l1.8 1.8c0.3 0.3 0.7 0.3 1 0s0.3-0.8 0-1l-2.6-2.6c-0.4-0.5-1-0.7-1.7-0.7h-1c-0.7 0-1.3 0.2-1.7 0.7l-2.6 2.6c-0.3 0.3-0.3 0.8 0 1 0.3 0.3 0.7 0.3 1 0l1.8-1.8v1.5l-4 5h4v3h4v-3h4l-4-5z"></path></g>
<g id="vaadin:file-add"><path d="M12 15h-10v-14h6v4h4v1h1v-2l-4-4h-8v16h12v-2h-1v1zM9 1l3 3h-3v-3z"></path><path d="M13 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:file-code"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6.2 13h-0.7l-2-2.5 2-2.5h0.7l-2 2.5z"></path><path d="M9.8 13h0.7l2-2.5-2-2.5h-0.7l2 2.5z"></path><path d="M6.7 14h0.6l2.1-7h-0.8z"></path></g>
<g id="vaadin:file-font"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M5 7v2h2v5h2v-5h2v-2z"></path></g>
<g id="vaadin:file-movie"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M10 10v-2h-6v5h6v-2l2 2v-5z"></path></g>
<g id="vaadin:file-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path></g>
<g id="vaadin:file-picture"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 11.5v2.5h8v-1.7c0 0 0.1-1.3-1.3-1.5-1.3-0.2-1.5 0.4-2.5 0.5-0.8 0-0.6-1.3-2.2-1.3-1.2 0-2 1.5-2 1.5z"></path><path d="M12 8.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:file-presentation"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M9 6h-2v1h-3v6h2v1h1v-1h2v1h1v-1h2v-6h-3v-1zM11 8v4h-6v-4h6z"></path><path d="M7 9v2l2-1z"></path></g>
<g id="vaadin:file-process"><path d="M12 0h-7v6h0.7l0.2 0.7 0.1 0.1v-5.8h5v4h4v9h-6l0.3 0.5-0.5 0.5h7.2v-11l-4-4zM12 4v-3l3 3h-3z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:file-refresh"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M4.7 7.7l-0.7-0.7v3h3l-1.2-1.2c0.4-0.8 1.3-1.3 2.2-1.3 1.4 0 2.5 1.1 2.5 2.5h1.5c0-2.2-1.8-4-4-4-1.3 0-2.5 0.7-3.3 1.7z"></path><path d="M9.8 11.8c-0.5 0.5-1.1 0.8-1.8 0.7-1 0-1.9-0.6-2.3-1.5h-1.6c0.4 1.7 2 3 3.8 3 1.1 0 2.1-0.5 2.8-1.2l1.3 1.2v-3h-3l0.8 0.8z"></path></g>
<g id="vaadin:file-remove"><path d="M12 15h-10v-14h6v4h4v2.59l1-1v-2.59l-4-4h-8v16h12v-2.59l-1-1v2.59zM9 1l3 3h-3v-3z"></path><path d="M15 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:file-search"><path d="M12 13.47v1.53h-10v-14h6v4h4v0.56c0.386 0.229 0.716 0.504 0.996 0.825l0.004-2.385-4-4h-8v16h12v-1.53zM9 1l3 3h-3v-3z"></path><path d="M14.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM10 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:file-sound"><path d="M11.4 10.5c0 1.2-0.4 2.2-1 3l0.4 0.5c0.7-0.9 1.2-2.1 1.2-3.5s-0.5-2.6-1.2-3.5l-0.4 0.5c0.6 0.8 1 1.9 1 3z"></path><path d="M9.9 8l-0.4 0.5c0.4 0.5 0.7 1.2 0.7 2s-0.3 1.5-0.7 2l0.4 0.5c0.5-0.6 0.8-1.5 0.8-2.5s-0.3-1.8-0.8-2.5z"></path><path d="M9.1 9l-0.4 0.5c0.2 0.3 0.3 0.6 0.3 1s-0.1 0.7-0.3 1l0.4 0.5c0.3-0.4 0.5-0.9 0.5-1.5s-0.2-1.1-0.5-1.5z"></path><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6 9h-2v3h2l2 2v-7z"></path></g>
<g id="vaadin:file-start"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6v6l6-3z"></path></g>
<g id="vaadin:file-table"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7v6h8v-6h-8zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM9 12h-2v-1h2v1zM9 10h-2v-1h2v1zM11 12h-1v-1h1v1zM11 10h-1v-1h1v1z"></path></g>
<g id="vaadin:file-text-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7h8v1h-8v-1z"></path><path d="M4 9h8v1h-8v-1z"></path><path d="M4 11h8v1h-8v-1z"></path></g>
<g id="vaadin:file-text"><path d="M10 0v4h4z"></path><path d="M9 0h-7v16h12v-11h-5v-5zM12 12h-8v-1h8v1zM12 10h-8v-1h8v1zM12 7v1h-8v-1h8z"></path></g>
<g id="vaadin:file-tree-small"><path d="M5 12v2h11v-5h-11v2h-2v-4h9v-5h-12v5h2v5z"></path></g>
<g id="vaadin:file-tree-sub"><path d="M8 11v1h-1v-2h5v-4h-8v1h-1v-2h6v-4h-9v4h2v3h2v2h2v3h2v2h8v-4z"></path></g>
<g id="vaadin:file-tree"><path d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z"></path></g>
<g id="vaadin:file-zip"><path d="M10 0h-8v16h12v-12l-4-4zM9 15h-4v-2.8l0.7-2.2h2.4l0.9 2.2v2.8zM13 15h-3v-3l-1-3h-2v-1h-2v1l-1 3v3h-1v-14h4v1h2v1h-2v1h2v1h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6h2v1h-2v-1z"></path><path d="M5 2h2v1h-2v-1z"></path><path d="M5 4h2v1h-2v-1z"></path><path d="M7 5h2v1h-2v-1z"></path><path d="M7 7h2v1h-2v-1z"></path><path d="M6 12h2v2h-2v-2z"></path></g>
<g id="vaadin:file"><path d="M9 5h5v11h-12v-16h7v5zM10 4v-4l4 4h-4z"></path></g>
<g id="vaadin:fill"><path d="M13 14.5c0.468-2.207 0.985-4.050 1.604-5.846 0.411 1.796 0.928 3.638 1.337 5.521 0.059 1.153-0.612 1.825-1.441 1.825s-1.5-0.672-1.5-1.5z"></path><path d="M8 1l-1.44 1.44-2-2c-0.276-0.262-0.649-0.423-1.060-0.423s-0.784 0.161-1.061 0.423c-0.27 0.271-0.438 0.645-0.438 1.059s0.168 0.789 0.439 1.060l2 2-4.44 4.44 7 7 8-8zM8 2.41l5.59 5.59h-11.18l2.75-2.75c0.071 0.042 0.156 0.067 0.247 0.067 0.271 0 0.49-0.219 0.49-0.49 0-0.091-0.025-0.176-0.068-0.249l0.721-0.718 1.54 1.53c0.091 0.091 0.216 0.147 0.355 0.147 0.277 0 0.502-0.225 0.502-0.502 0-0.139-0.056-0.264-0.147-0.355l-1.53-1.53zM3.15 1.85c-0.091-0.091-0.148-0.216-0.148-0.355s0.057-0.264 0.148-0.355c0.092-0.089 0.217-0.144 0.355-0.144s0.263 0.055 0.355 0.144l2 2-0.71 0.71z"></path></g>
<g id="vaadin:film"><path d="M0 0v16h1v-1h1v1h12v-1h1v1h1v-16h-16zM2 14h-1v-1h1v1zM2 12h-1v-1h1v1zM2 10h-1v-1h1v1zM2 8h-1v-1h1v1zM2 6h-1v-1h1v1zM2 4h-1v-1h1v1zM2 2h-1v-1h1v1zM13 15h-10v-6h10v6zM13 7h-10v-6h10v6zM15 14h-1v-1h1v1zM15 12h-1v-1h1v1zM15 10h-1v-1h1v1zM15 8h-1v-1h1v1zM15 6h-1v-1h1v1zM15 4h-1v-1h1v1zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:filter"><path d="M1 2h14v2l-6 5v7l-2-2v-5l-6-5v-2z"></path><path d="M1 0h14v1h-14v-1z"></path></g>
<g id="vaadin:fire"><path d="M4.9 15.8c0 0-3.9-0.4-3.9-5.7 0-4.1 3.1-6.5 3.1-6.5s1.3 1.4 2.3 1.9c1 0.6 1.4-5.5 1.4-5.5s7.2 3.9 7.2 9.8c0 6.1-4 5.9-4 5.9s1.8-2.4 1.8-5.2c0-3-3.9-6.7-3.9-6.7s-0.5 4.4-2.1 5c-1.6-0.9-2.5-2.3-2.5-2.3s-3.7 5.8 0.6 9.3z"></path><path d="M8.2 16.1c-2-0.1-3.7-1.4-3.7-3.2s0.7-2.6 0.7-2.6 0.5 1 1.1 1.5 1.8 0.8 2.4 0.1c0.6-0.6 0.8-2.3 0.8-2.3s1.4 1.1 1.2 3c-0.1 2-0.9 3.5-2.5 3.5z"></path></g>
<g id="vaadin:flag-checkered"><path d="M2 0c-1.1 0-2 0.9-2 2 0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2z"></path><path d="M12 2c-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8c0 0-1.6 1-4 1zM15 4.5c-0.2 0.2-0.8 0.4-2 0.6v-2.2c0.8-0.1 1.5-0.2 2-0.4v2zM5 7.9v-2.6c0.4-0.6 1.1-1.1 2-1.1v-2.1c0.2-0.1 0.4-0.1 0.6-0.1 1.2 0 1.6 0.2 2.1 0.4 0.1 0.1 0.2 0.2 0.3 0.2v2.2c0.5 0.2 1.1 0.4 2 0.4 0.4 0 0.7 0 1-0.1v2.6c-0.3 0-0.6 0.1-1 0.1-1.1 0-1.5-0.2-2-0.5v2.3c-0.7-0.3-1.5-0.6-3-0.6v-2.2c-0.9 0.2-1.5 0.6-2 1.1zM13 9.9v-2.2c1.1-0.2 1.7-0.6 2-0.8v1.8c-0.2 0.3-0.7 1-2 1.2z"></path><path d="M10 7.2v-2.4c0 0-1.2-0.6-3-0.6v2.6c1.7-0.4 3 0.4 3 0.4z"></path></g>
<g id="vaadin:flag-o"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M7.6 2c1.2 0 1.6 0.2 2.1 0.4 0.5 0.3 1.1 0.6 2.3 0.6s2.2-0.2 3-0.5v6.3c-0.2 0.3-0.9 1.2-3 1.2-0.9 0-1.3-0.2-1.9-0.4-0.7-0.3-1.5-0.6-3.1-0.6-0.8 0-1.5 0.2-2 0.5v-5.3c0.2-0.5 1-2.2 2.6-2.2zM16 1c0 0-1.6 1-4 1-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8z"></path></g>
<g id="vaadin:flag"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M4 4c0 0 1-3 3.6-3 2.7 0 2.3 1 4.4 1 2.4 0 4-1 4-1v8c0 0-0.7 2-4 2-2.2 0-2.3-1-5-1-2.3 0-3 2-3 2v-8z"></path></g>
<g id="vaadin:flash"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6z"></path></g>
<g id="vaadin:flask"><path d="M2 16h12l-4-8v-7h1v-1h-6v1h1v7l-4 8zM9 1v7.2l1.9 3.8h-5.8l1.9-3.8v-7.2h2z"></path></g>
<g id="vaadin:flight-landing"><path d="M13.64 7c-0.71-0.2-1.89-0.43-3.23-0.67l-3.82-4.24c-0.209-0.23-0.462-0.416-0.746-0.544l-1.194-0.546c-0.090 0-0.15 0-0.1 0.11s1.45 2.89 2.29 4.59c-1.84-0.29-3.5-0.53-4.23-0.63-0.258-0.047-0.474-0.198-0.608-0.406l-0.722-1.074c-0.115-0.168-0.28-0.294-0.474-0.358l-0.806-0.232 0.61 3.26c0.067 0.34 0.318 0.609 0.644 0.699 1.326 0.381 4.816 1.341 7.526 1.921 6 1.28 6.8 1.28 7.12 0.91s-0.67-2.38-2.26-2.79z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flight-takeoff"><path d="M12.57 2.26c-0.65 0.29-1.66 0.85-2.8 1.5l-5.46-0.76c-0.093-0.014-0.2-0.022-0.309-0.022-0.211 0-0.414 0.030-0.607 0.086l-1.185 0.336c-0.1 0-0.1 0.1 0 0.14l4.56 2c-1.54 0.92-2.91 1.76-3.51 2.14-0.13 0.082-0.288 0.13-0.458 0.13-0.094 0-0.184-0.015-0.268-0.042l-1.194-0.378c-0.086-0.031-0.186-0.049-0.29-0.049s-0.204 0.018-0.296 0.051l-0.754 0.308 2.52 2.1c0.152 0.127 0.349 0.205 0.565 0.205 0.129 0 0.251-0.028 0.361-0.077 1.204-0.538 4.374-1.998 6.734-3.228 5.24-2.78 5.82-3.26 5.82-3.7 0-0.69-2-1.4-3.43-0.74z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flip-h"><path d="M0 15l6-5-6-4.9z"></path><path d="M9 10.1l6 4.9v-10l-6 5.1zM14 12.9l-3.4-2.8 3.4-3v5.8z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M7 7h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M7.5 1v0c1.3 0 2.6 0.7 3.6 1.9l-1.1 1.1h3v-3l-1.2 1.2c-1.2-1.4-2.7-2.2-4.3-2.2 0 0 0 0 0 0-1.9 0-3.6 1-4.9 2.9l0.8 0.6c1.1-1.6 2.5-2.5 4.1-2.5z"></path></g>
<g id="vaadin:flip-v"><path d="M1 1l5 6 4.94-6h-9.94z"></path><path d="M5.94 10l-4.94 6h10zM3.12 15l2.83-3.44 3 3.44h-5.83z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 8.47v0c-0.059 1.485-0.782 2.789-1.879 3.632l-1.121-1.102v3h3l-1.18-1.18c1.293-1.031 2.128-2.588 2.18-4.342l0-0.008c-0.092-2.083-1.223-3.883-2.884-4.905l-0.596 0.805c1.423 0.857 2.383 2.357 2.479 4.087z"></path></g>
<g id="vaadin:folder-add"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14v-1h-13v-9h0.62l1-2h2.57l1.19 2h6.62v1h1z"></path><path d="M14 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:folder-o"><path d="M7 4l-1-2h-4l-1 2h-1v11h16v-11h-9zM15 14h-14v-9h0.6l1-2h2.6l1.2 2h8.6v9z"></path></g>
<g id="vaadin:folder-open-o"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14l2-9h-2zM14.9 7l-1.6 7-11.9-0.1 2.3-6.9h11.2zM1 5h0.6l1-2h2.6l1.2 2h6.6v1h-10l-2 5.9v-6.9z"></path></g>
<g id="vaadin:folder-open"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v9.5l3-7.5z"></path><path d="M3.7 7l-3.2 8h12.8l2.5-8z"></path></g>
<g id="vaadin:folder-remove"><path d="M13 12.41v1.59h-12v-9h0.62l1-2h2.57l1.19 2h6.62v2.59l1-1v-2.59h-7l-1-2h-4l-1 2h-1v11h14v-1.59l-1-1z"></path><path d="M16 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:folder-search"><path d="M13 13.47v0.53h-12v-9h0.62l1-2h2.57l1.19 2h6.62v0.91c0.385 0.179 0.716 0.407 1.001 0.681l-0.001-2.591h-7l-1-2h-4l-1 2h-1v11h14v-0.53z"></path><path d="M15.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM11 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:folder"><path d="M16 15h-16v-11h1l1-2h4l1 2h9z"></path></g>
<g id="vaadin:font"><path d="M12 16h3l-6-16h-2l-6 16h3l1.9-5h4.2l1.9 5zM6.7 9l1.3-3.6 1.3 3.6h-2.6z"></path></g>
<g id="vaadin:form"><path d="M15 2v2h-9v-2h9zM16 1h-11v4h11v-4z"></path><path d="M0 1h4v4h-4v-4z"></path><path d="M15 7v2h-9v-2h9zM16 6h-11v4h11v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M15 12v2h-9v-2h9zM16 11h-11v4h11v-4z"></path><path d="M0 11h4v4h-4v-4z"></path></g>
<g id="vaadin:forward"><path d="M0 1v14l8-7z"></path><path d="M8 1v14l8-7z"></path></g>
<g id="vaadin:frown-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11.3 12.3c-0.7-1.1-2-1.8-3.3-1.8s-2.6 0.7-3.3 1.8l-0.8-0.6c0.9-1.4 2.4-2.2 4.1-2.2s3.2 0.8 4.1 2.2l-0.8 0.6z"></path></g>
<g id="vaadin:function"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:funnel"><path d="M6 11h4v4h-4v-4z"></path><path d="M13.6 5l2.4-4h-16l2.4 4h11.2z"></path><path d="M3 6l2.4 4h5.2l2.4-4h-10z"></path></g>
<g id="vaadin:gamepad"><path d="M12.16 2c-1.215 0.603-2.641 0.968-4.149 1-1.53-0.032-2.956-0.397-4.229-1.026-2.611 0.026-3.781 1.196-3.781 3.866v6c0.017 1.197 0.991 2.16 2.19 2.16 0 0 0 0 0 0h0.23c0 0 0.001 0 0.002 0 0.963 0 1.78-0.621 2.074-1.485 0.305-0.915 1.145-2.515 2.085-2.515h2.84c0.94 0 1.78 1.6 2.080 2.5 0.298 0.879 1.116 1.5 2.078 1.5 0.001 0 0.001 0 0.002 0h0.23c1.21 0 2.19-0.98 2.19-2.19v-6c0-2.64-1.17-3.81-3.84-3.81zM5 7h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zM10.060 8.11c-0.585 0-1.060-0.475-1.060-1.060s0.475-1.060 1.060-1.060c0.585 0 1.060 0.475 1.060 1.060s-0.475 1.060-1.060 1.060zM13 8c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:gavel"><path d="M6.4 4.1v0c-0.4-0.4-0.4-0.9-0.1-1.2l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.5c-0.3 0.3-0.9 0.3-1.2 0z"></path><path d="M12 9.7v0c-0.4-0.4-0.4-0.9-0.1-1.3l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.6c-0.4 0.3-0.9 0.3-1.2 0z"></path><path d="M10 7.7l-1.7-1.7c-0.4-0.4-0.4-1 0-1.4l2.3-2.3c0.4-0.4 1-0.4 1.4 0l1.7 1.7c0.4 0.4 0.4 1 0 1.4l-2.3 2.3c-0.4 0.4-1 0.4-1.4 0z"></path><path d="M4 14.2c0.6-0.6 4-5.6 4.5-5.3 0.4 0.2 1-0.5 1-0.5l-1.9-1.9c0 0-0.7 0.6-0.5 1 0.3 0.5-4.7 3.9-5.3 4.5 0 0-2.8 2.2-1.4 3.6s3.6-1.4 3.6-1.4z"></path></g>
<g id="vaadin:gift"><path d="M10.1 5c2-0.3 3.9-1.1 2.2-3.6-0.7-1-1.4-1.4-2-1.4-1 0-1.7 1.1-2.3 2.2-0.6-1.1-1.3-2.2-2.3-2.2-0.6 0-1.3 0.4-2 1.4-1.8 2.5 0.2 3.3 2.2 3.6h-5.9v3h16v-3h-5.9zM10.3 1c0.1 0 0.5 0.1 1.2 1 0.5 0.7 0.6 1.1 0.5 1.3-0.2 0.3-1.3 0.7-3.3 0.8 0-0.2-0.1-0.4-0.2-0.6 0.6-1.4 1.3-2.5 1.8-2.5zM4 3.3c-0.1-0.2 0-0.6 0.5-1.3 0.7-0.9 1.1-1 1.2-1 0.5 0 1.2 1.1 1.8 2.5-0.1 0.2-0.2 0.4-0.2 0.6-2-0.1-3.1-0.5-3.3-0.8zM7 7v-2h2v2h-2z"></path><path d="M9 15h-2v-6h-6v7h14v-7h-6z"></path></g>
<g id="vaadin:glass"><path d="M11 15h-2v-8l6-7h-15l6 7v8h-2c-2 0-2 1-2 1h11c0 0 0-1-2-1zM12.9 1l-1.8 2h-7.2l-1.7-2h10.7zM7 15v-8h1v8h-1z"></path></g>
<g id="vaadin:glasses"><path d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"></path></g>
<g id="vaadin:globe-wire"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM14.8 9.5c0 0.5-0.7 0.66-2 1 0.124-0.589 0.206-1.277 0.229-1.98l2.001-0.020c0 0.36-0.080 0.5-0.16 1v0zM1.2 9.5v0c-0.1-0.5-0.15-0.64-0.2-1h2c0.024 0.723 0.106 1.411 0.244 2.079-1.344-0.419-2.044-0.579-2.044-1.079zM1.2 6.5c0-0.5 0.7-0.66 2-1-0.115 0.594-0.187 1.284-0.2 1.989l-2 0.011c0-0.36 0.080-0.5 0.16-1v0zM8.5 5c1.13 0.013 2.226 0.107 3.298 0.277 0.047 0.643 0.165 1.41 0.201 2.199l-3.499 0.025v-2.5zM8.5 4v-2.94c1.17 0.27 2.2 1.47 2.84 3.15-0.836-0.116-1.819-0.192-2.817-0.21zM7.5 1.060v2.94c-1.017 0.015-2.001 0.087-2.968 0.214 0.768-1.684 1.798-2.884 2.968-3.154zM7.5 5v2.5h-3.5c0.031-0.806 0.142-1.571 0.326-2.307 0.932-0.080 2.035-0.177 3.158-0.193zM4 8.5h3.5v2.5c-1.13-0.013-2.226-0.107-3.298-0.277-0.047-0.643-0.165-1.41-0.201-2.199zM7.5 12v2.94c-1.17-0.27-2.2-1.47-2.84-3.15 0.836 0.116 1.819 0.192 2.817 0.21zM8.5 14.94v-2.94c1.017-0.015 2.001-0.087 2.968-0.214-0.768 1.684-1.798 2.884-2.968 3.154zM8.5 11v-2.5h3.5c-0.031 0.806-0.142 1.571-0.326 2.307-0.932 0.080-2.035 0.177-3.158 0.193zM15 7.5h-2c-0.024-0.723-0.106-1.411-0.244-2.079 1.354 0.399 2.014 0.559 2.014 1.079v0c0.13 0.5 0.18 0.64 0.23 1zM14.3 4.91c-0.506-0.204-1.106-0.38-1.726-0.5-0.361-1.019-0.809-1.898-1.389-2.672 1.355 0.726 2.413 1.811 3.067 3.131zM4.84 1.76c-0.568 0.752-1.019 1.631-1.305 2.581-0.699 0.189-1.299 0.365-1.874 0.593 0.751-1.39 1.823-2.475 3.139-3.156zM1.73 11.090c0.506 0.204 1.106 0.38 1.726 0.5 0.361 1.019 0.809 1.898 1.389 2.672-1.367-0.722-2.436-1.807-3.097-3.131zM11.17 14.24c0.564-0.753 1.012-1.631 1.295-2.581 0.699-0.189 1.299-0.365 1.874-0.593-0.751 1.39-1.823 2.475-3.139 3.156z"></path></g>
<g id="vaadin:globe"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13.2 5.3c0.4 0 0.7 0.3 1.1 0.3-0.3 0.4-1.6 0.4-2-0.1 0.3-0.1 0.5-0.2 0.9-0.2zM1 8c0-0.4 0-0.8 0.1-1.3 0.1 0 0.2 0.1 0.3 0.1 0 0 0.1 0.1 0.1 0.2 0 0.3 0.3 0.5 0.5 0.5 0.8 0.1 1.1 0.8 1.8 1 0.2 0.1 0.1 0.3 0 0.5-0.6 0.8-0.1 1.4 0.4 1.9 0.5 0.4 0.5 0.8 0.6 1.4 0 0.7 0.1 1.5 0.4 2.2-2.5-1.2-4.2-3.6-4.2-6.5zM8 15c-0.7 0-1.5-0.1-2.1-0.3-0.1-0.2-0.1-0.4 0-0.6 0.4-0.8 0.8-1.5 1.3-2.2 0.2-0.2 0.4-0.4 0.4-0.7 0-0.2 0.1-0.5 0.2-0.7 0.3-0.5 0.2-0.8-0.2-0.9-0.8-0.2-1.2-0.9-1.8-1.2s-1.2-0.5-1.7-0.2c-0.2 0.1-0.5 0.2-0.5-0.1 0-0.4-0.5-0.7-0.4-1.1-0.1 0-0.2 0-0.3 0.1s-0.2 0.2-0.4 0.1c-0.2-0.2-0.1-0.4-0.1-0.6 0.1-0.2 0.2-0.3 0.4-0.4 0.4-0.1 0.8-0.1 1 0.4 0.3-0.9 0.9-1.4 1.5-1.8 0 0 0.8-0.7 0.9-0.7s0.2 0.2 0.4 0.3c0.2 0 0.3 0 0.3-0.2 0.1-0.5-0.2-1.1-0.6-1.2 0-0.1 0.1-0.1 0.1-0.1 0.3-0.1 0.7-0.3 0.6-0.6 0-0.4-0.4-0.6-0.8-0.6-0.2 0-0.4 0-0.6 0.1-0.4 0.2-0.9 0.4-1.5 0.4 1.1-0.8 2.5-1.2 3.9-1.2 0.3 0 0.5 0 0.8 0-0.6 0.1-1.2 0.3-1.6 0.5 0.6 0.1 0.7 0.4 0.5 0.9-0.1 0.2 0 0.4 0.2 0.5s0.4 0.1 0.5-0.1c0.2-0.3 0.6-0.4 0.9-0.5 0.4-0.1 0.7-0.3 1-0.7 0-0.1 0.1-0.1 0.2-0.2 0.6 0.2 1.2 0.6 1.8 1-0.1 0-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.3-0.2 0.7 0.1 0.2 0 0.3-0.1 0.4-0.2 0.1-0.3 0-0.4-0.1s-0.1-0.3-0.4-0.3c-0.1 0.2-0.4 0.3-0.4 0.6 0.5 0 0.4 0.4 0.5 0.7-0.6 0.1-0.8 0.4-0.5 0.9 0.1 0.2-0.1 0.3-0.2 0.4-0.4 0.6-0.8 1-0.8 1.7s0.5 1.4 1.3 1.3c0.9-0.1 0.9-0.1 1.2 0.7 0 0.1 0.1 0.2 0.1 0.3 0.1 0.2 0.2 0.4 0.1 0.6-0.3 0.8 0.1 1.4 0.4 2 0.1 0.2 0.2 0.3 0.3 0.4-1.3 1.4-3 2.2-5 2.2z"></path></g>
<g id="vaadin:golf"><path d="M7 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M9.8 1.8c-0.2-0.5-1.7-0.1-2 0.5-0.2 0.3-0.2 1.2-1.2 1.9-0.8 0.5-1.6 0.5-1.6 0.5-0.3 0.6-0.1 1.1 0.2 1.6 0.5 0.9 0.6 1.8 0.7 2.8 0.1 1.3-0.5 2.4-2.3 3.2-0.8 0.3-1.3 0.9-1 1.9 0 0 2-0.3 3.1-1.2 1.5-1.2 1.8-2.3 1.8-2.3s0.1 0.7 0 1.9c-0.1 1-0.2 1.5-0.4 2.2s0.3 1.2 0.9 1.2 1-0.4 1-1l0.3-1.9c0.3-2.1 0-4.3-0.8-6.3 0-0.1-0.1-0.1-0.1-0.2-0.6-1.6 0.2-2.6 0.6-3 0.3-0.4 1.2-1.2 0.8-1.8z"></path><path d="M12 0v10h1v-6l3-2z"></path><path d="M16 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M1 8.4l3.7-3.7-0.7-0.3-3.8 3.6c0 0-0.4 0.7 0.1 1.7s1.6 0.3 1.6 0.3c0.4-0.2 0.2-0.4 0-0.6s-0.9-1-0.9-1z"></path></g>
<g id="vaadin:google-plus-square"><path d="M5 3.4c-0.8 0-1.3 0.8-1.2 1.8 0.1 1.1 0.9 1.9 1.7 2 0.8 0 1.3-0.8 1.2-1.9-0.1-1-0.9-1.9-1.7-1.9z"></path><path d="M5.4 9.3c-1.2 0-2.3 0.7-2.3 1.6s0.9 1.7 2.1 1.7c1.7 0 2.3-0.7 2.3-1.6 0-0.1 0-0.2 0-0.3-0.1-0.5-0.6-0.8-1.3-1.2-0.2-0.2-0.5-0.2-0.8-0.2z"></path><path d="M0 0v16h16v-16h-16zM7.9 5.3c0 0.7-0.4 1.2-0.9 1.6s-0.6 0.6-0.6 0.9c0 0.3 0.5 0.8 0.8 1 0.8 0.6 1.1 1.1 1.1 2 0 1.1-1.1 2.3-3.1 2.3-1.7 0-3.2-0.7-3.2-1.8 0-1.2 1.3-2.3 3.1-2.3 0.2 0 0.4 0 0.5 0-0.2-0.3-0.4-0.6-0.4-0.9 0-0.2 0.1-0.4 0.2-0.6-0.1 0-0.2 0-0.3 0-1.4 0-2.4-1-2.4-2.3 0-1.2 1.3-2.3 2.7-2.3 0.8 0 3.1 0 3.1 0l-0.7 0.6h-1c0.7 0.2 1.1 1 1.1 1.8zM14 5.5h-2.1v2h-0.5v-2h-2v-0.5h2v-2h0.5v2h2.1v0.5z"></path></g>
<g id="vaadin:google-plus"><path d="M16 3.9h-2.8v-2.6h-0.6v2.6h-2.7v0.8h2.7v2.6h0.6v-2.6h2.8z"></path><path d="M6.9 9c-0.4-0.2-1.1-0.9-1.1-1.3s0.1-0.7 0.8-1.2c0.7-0.5 1.2-1.2 1.2-2.1 0-1.1-0.5-2.1-1.3-2.4h1.3l0.9-0.7c0 0-3.1 0-4.2 0-1.9 0-3.6 1.4-3.6 3.1s1.3 3 3.2 3c0.1 0 0.3 0 0.4 0-0.2 0.2-0.2 0.4-0.2 0.7 0 0.5 0.3 0.8 0.6 1.2-0.2 0-0.5 0-0.7 0-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3-0.1-1.3-0.5-2-1.6-2.8zM4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6s0.5-2.5 1.6-2.5c1.1 0 2.1 1.2 2.3 2.6s-0.5 2.6-1.6 2.5zM4.3 14.1c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c0.4 0 0.7 0.1 1 0.2 0.9 0.6 1.5 0.9 1.7 1.6 0 0.1 0.1 0.3 0.1 0.4 0 1.2-0.8 2.2-3 2.2z"></path></g>
<g id="vaadin:grab"><path d="M12.6 4c-0.2 0-0.4 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.5-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.8 0-1.2 0.5-1.4 1-0.1 0-0.3-0.1-0.5-0.1-0.5 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.5v0.4c-0.6 0-1.1 0.2-1.4 0.5-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.5 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM10.5 3.8c0.4 0 0.5 0.4 0.5 0.6v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0 0 0-0.4 0.4-0.3 0.6 0.2 0.7 1.1 0.7 1.3 0 0 0 0 0 0v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.7-1.1-1.1-1.1-2.1 0-0.2 0-0.3 0-0.6 0-1 0-1.8 0.3-2.1 0.1-0.2 0.4-0.3 0.7-0.3v0.8l-0.3 1.2c0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0l1-1.2c0 0 0-0.1 0-0.1v-2c0-0.1 0-0.6 0.2-0.8 0.1-0.1 0.2-0.2 0.4-0.2 0.3 0 0.4 0.2 0.4 0.4v0.4c0 0.2 0.2 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-1.3c0-0.1 0-0.5 0.5-0.5 0.3 0 0.5 0.2 0.5 0.5v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.5c0-0.3 0.2-0.5 0.5-0.5z"></path></g>
<g id="vaadin:grid-bevel"><path d="M14 2v-1h-13v13h1v1h13v-13h-1zM5 13h-3v-3h3v3zM5 9h-3v-3h3v3zM5 5h-3v-3h3v3zM9 13h-3v-3h3v3zM9 9h-3v-3h3v3zM9 5h-3v-3h3v3zM13 13h-3v-3h3v3zM13 9h-3v-3h3v3zM13 5h-3v-3h3v3z"></path></g>
<g id="vaadin:grid-big-o"><path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z"></path><path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z"></path><path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z"></path><path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z"></path></g>
<g id="vaadin:grid-big"><path d="M0 0h7v7h-7v-7z"></path><path d="M9 0h7v7h-7v-7z"></path><path d="M0 9h7v7h-7v-7z"></path><path d="M9 9h7v7h-7v-7z"></path></g>
<g id="vaadin:grid-h"><path d="M0 0v16h16v-16h-16zM5 15h-4v-14h4v14zM10 15h-4v-14h4v14zM15 15h-4v-14h4v14z"></path></g>
<g id="vaadin:grid-small-o"><path d="M0 4h4v-4h-4v4zM1 1h2v2h-2v-2z"></path><path d="M0 10h4v-4h-4v4zM1 7h2v2h-2v-2z"></path><path d="M0 16h4v-4h-4v4zM1 13h2v2h-2v-2z"></path><path d="M6 4h4v-4h-4v4zM7 1h2v2h-2v-2z"></path><path d="M6 10h4v-4h-4v4zM7 7h2v2h-2v-2z"></path><path d="M6 16h4v-4h-4v4zM7 13h2v2h-2v-2z"></path><path d="M12 0v4h4v-4h-4zM15 3h-2v-2h2v2z"></path><path d="M12 10h4v-4h-4v4zM13 7h2v2h-2v-2z"></path><path d="M12 16h4v-4h-4v4zM13 13h2v2h-2v-2z"></path></g>
<g id="vaadin:grid-small"><path d="M0 0h4v4h-4v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M0 12h4v4h-4v-4z"></path><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M12 0h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path><path d="M12 12h4v4h-4v-4z"></path></g>
<g id="vaadin:grid-v"><path d="M16 0h-16v16h16v-16zM1 5v-4h14v4h-14zM1 10v-4h14v4h-14zM1 15v-4h14v4h-14z"></path></g>
<g id="vaadin:grid"><path d="M0 0v16h16v-16h-16zM5 15h-4v-4h4v4zM5 10h-4v-4h4v4zM5 5h-4v-4h4v4zM10 15h-4v-4h4v4zM10 10h-4v-4h4v4zM10 5h-4v-4h4v4zM15 15h-4v-4h4v4zM15 10h-4v-4h4v4zM15 5h-4v-4h4v4z"></path></g>
<g id="vaadin:group"><path d="M5 16v-5.3c-0.6-0.3-1-1-1-1.7v-4c0-0.7 0.4-1.3 1-1.7 0-0.1 0-0.2 0-0.3 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2h-2c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v5h4z"></path><path d="M15 5h-2c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.1 0 0.2 0 0.3 0.6 0.4 1 1 1 1.7v4c0 0.7-0.4 1.4-1 1.7v5.3h4v-5c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 4h-4c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v6h4v-6c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path></g>
<g id="vaadin:hammer"><path d="M6 2l7 7 3-3-4.48-4.48s-2.97 1.030-4.52-0.52z"></path><path d="M8.8 5.79l-8.53 8.52c-0.165 0.178-0.267 0.417-0.267 0.68s0.101 0.502 0.267 0.681c0.181 0.183 0.433 0.297 0.711 0.297 0.253 0 0.484-0.094 0.66-0.248l8.569-8.519z"></path></g>
<g id="vaadin:hand"><path d="M13.5 2.4c-0.4-0.4-1-0.5-1.5-0.3 0-0.3-0.1-0.6-0.4-0.9-0.2-0.2-0.6-0.4-1.1-0.4-0.3 0-0.5 0.1-0.7 0.1 0-0.2-0.1-0.3-0.2-0.5-0.5-0.6-1.5-0.6-2 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 0-0.4-0.1-0.6-0.1-0.5 0-0.8 0.2-1.1 0.5-0.5 0.5-0.5 1.3-0.5 1.3v3.8c-0.3-0.3-0.8-0.8-1.5-0.8-0.2 0-0.5 0.1-0.7 0.2-0.4 0.2-0.6 0.5-0.7 0.9-0.3 1 0.6 2.4 0.6 2.5 0.1 0.1 1.2 2.7 2.2 3.8 1 1.2 2.1 1.9 4.9 1.9 2.9 0 4.2-1.6 4.2-5.1v-5.5c0-0.1 0.1-1.3-0.5-2zM8 2c0-0.3-0.1-1 0.5-1 0.5 0 0.5 0.5 0.5 1v4c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-3.8c0 0 0-0.4 0.5-0.4 0.6 0 0.5 0.9 0.5 0.9v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-2.4c0-0.1 0-0.6 0.5-0.6s0.5 1 0.5 1v5.9c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.5-4.1-1.6-0.9-1-2.1-3.6-2.1-3.7-0.3-0.3-0.7-1.2-0.6-1.6 0-0.1 0.1-0.2 0.2-0.3 0.1 0 0.2-0.1 0.2-0.1 0.4 0 0.8 0.5 0.9 0.7l0.6 0.9c0.1 0.2 0.4 0.3 0.6 0.2 0.4 0 0.5-0.2 0.5-0.4v-5.2c0-0.4 0-1 0.5-1 0.4 0 0.5 0.3 0.5 0.8v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5z"></path></g>
<g id="vaadin:handle-corner"><path d="M6.7 16l9.3-9.3v-1.4l-10.7 10.7z"></path><path d="M9.7 16l6.3-6.3v-1.4l-7.7 7.7z"></path><path d="M12.7 16l3.3-3.3v-1.4l-4.7 4.7z"></path><path d="M15.7 16l0.3-0.3v-1.4l-1.7 1.7z"></path></g>
<g id="vaadin:hands-up"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M6 16h1.5v-5h1v5h1.5v-9c-0-0.016-0.001-0.034-0.001-0.052 0-0.521 0.194-0.997 0.513-1.36l3.278-3.318c0.216-0.129 0.358-0.362 0.358-0.628 0-0.403-0.327-0.73-0.73-0.73-0.266 0-0.499 0.142-0.626 0.355l-2.362 2.383c-0.212 0.216-0.508 0.35-0.835 0.35-0.002 0-0.004 0-0.006-0h-3.18c-0.002 0-0.004 0-0.005 0-0.327 0-0.622-0.134-0.834-0.35l-2.32-2.39c-0.129-0.216-0.362-0.358-0.628-0.358-0.403 0-0.73 0.327-0.73 0.73 0 0.266 0.142 0.499 0.355 0.626l3.243 3.332c0.317 0.361 0.511 0.836 0.511 1.358 0 0.018-0 0.037-0.001 0.055l0 8.997z"></path></g>
<g id="vaadin:handshake"><path d="M13 3c-0.538 0.515-1.185 0.92-1.902 1.178-0.748 0.132-2.818-0.828-3.838 0.152-0.17 0.17-0.38 0.34-0.6 0.51-0.48-0.21-1.22-0.53-1.76-0.84s-1.9-1-1.9-1l-3 3.5s0.74 1 1.2 1.66c0.3 0.44 0.67 1.11 0.91 1.56l-0.34 0.4c-0.058 0.115-0.093 0.25-0.093 0.393 0 0.235 0.092 0.449 0.243 0.607 0.138 0.103 0.311 0.165 0.5 0.165s0.362-0.062 0.502-0.167c-0.094 0.109-0.149 0.249-0.149 0.402 0 0.193 0.088 0.365 0.226 0.479 0.144 0.085 0.317 0.135 0.501 0.135s0.357-0.050 0.505-0.137c-0.112 0.139-0.177 0.313-0.177 0.503s0.065 0.364 0.174 0.502c0.099 0.035 0.214 0.056 0.334 0.056 0.207 0 0.399-0.063 0.558-0.17-0.043 0.095-0.065 0.203-0.065 0.317 0 0.234 0.096 0.445 0.252 0.595 0.13 0.059 0.283 0.093 0.443 0.093 0.226 0 0.437-0.068 0.611-0.185l0.516-0.467c0.472 0.47 1.123 0.761 1.842 0.761 0.020 0 0.041-0 0.061-0.001 0.494-0.042 0.908-0.356 1.094-0.791 0.146 0.056 0.312 0.094 0.488 0.094 0.236 0 0.455-0.068 0.64-0.185 0.585-0.387 0.445-0.687 0.445-0.687 0.125 0.055 0.27 0.087 0.423 0.087 0.321 0 0.61-0.142 0.806-0.366 0.176-0.181 0.283-0.427 0.283-0.697 0-0.19-0.053-0.367-0.145-0.518 0.008 0.005 0.015 0.005 0.021 0.005 0.421 0 0.787-0.232 0.978-0.574 0.068-0.171 0.105-0.363 0.105-0.563 0-0.342-0.11-0.659-0.296-0.917l0.003 0.005c0.82-0.16 0.79-0.57 1.19-1.17 0.384-0.494 0.852-0.902 1.387-1.208zM12.95 10.060c-0.44 0.44-0.78 0.25-1.53-0.32s-2.24-1.64-2.24-1.64c0.061 0.305 0.202 0.57 0.401 0.781 0.319 0.359 1.269 1.179 1.719 1.599 0.28 0.26 1 0.78 0.58 1.18s-0.75 0-1.44-0.56-2.23-1.94-2.23-1.94c-0.001 0.018-0.002 0.038-0.002 0.059 0 0.258 0.104 0.491 0.272 0.661 0.17 0.2 1.12 1.12 1.52 1.54s0.75 0.67 0.41 1-1.030-0.19-1.41-0.58c-0.59-0.57-1.76-1.63-1.76-1.63-0.001 0.016-0.001 0.034-0.001 0.053 0 0.284 0.098 0.544 0.263 0.75 0.288 0.378 0.848 0.868 1.188 1.248s0.54 0.7 0 1-1.34-0.44-1.69-0.8c0-0.001 0-0.001 0-0.002 0-0.103-0.038-0.197-0.1-0.269-0.159-0.147-0.374-0.238-0.609-0.238-0.104 0-0.204 0.018-0.297 0.050 0.128-0.114 0.204-0.274 0.204-0.452s-0.076-0.338-0.198-0.45c-0.126-0.095-0.284-0.152-0.455-0.152s-0.33 0.057-0.457 0.153c0.117-0.113 0.189-0.268 0.189-0.441 0-0.213-0.109-0.4-0.274-0.509-0.153-0.097-0.336-0.153-0.532-0.153-0.244 0-0.468 0.088-0.642 0.233 0.095-0.114 0.151-0.26 0.151-0.42 0-0.195-0.085-0.37-0.219-0.491-0.178-0.165-0.417-0.266-0.679-0.266-0.185 0-0.358 0.050-0.507 0.138l-0.665-1.123c-0.46-0.73-1-1.49-1-1.49l2.28-2.77s0.81 0.5 1.48 0.88c0.33 0.19 0.9 0.44 1.33 0.64-0.68 0.51-1.25 1-1.080 1.34 0.297 0.214 0.668 0.343 1.069 0.343 0.376 0 0.726-0.113 1.018-0.307 0.373-0.251 0.84-0.403 1.343-0.403 0.347 0 0.677 0.072 0.976 0.203 0.554 0.374 1.574 1.294 2.504 1.874v0c1.17 0.85 1.4 1.4 1.12 1.68z"></path></g>
<g id="vaadin:harddrive-o"><path d="M2 12h1v1h-1v-1z"></path><path d="M4 12h3v1h-3v-1z"></path><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM3.7 2h8.6l2.7 8h-13.9l2.6-8zM1 14v-3h14v3h-14z"></path></g>
<g id="vaadin:harddrive"><path d="M13 1h-10l-2.7 8h15.4z"></path><path d="M0 10v5h16v-5h-16zM3 13h-1v-1h1v1zM7 13h-3v-1h3v1z"></path></g>
<g id="vaadin:hash"><path d="M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z"></path></g>
<g id="vaadin:header"><path d="M11 0v7h-6v-7h-3v16h3v-7h6v7h3v-16z"></path></g>
<g id="vaadin:headphones"><path d="M14 8.3v-2.3c0-3.3-2.7-6-6-6s-6 2.7-6 6v2.3c-1.2 0.5-2 1.7-2 3.1v1.2c0 1.8 1.3 3.2 3 3.4h2v-8h-1v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-1v8h2c1.7-0.2 3-1.7 3-3.4v-1.2c0-1.4-0.8-2.6-2-3.1zM4 15h-1v-6h1v6zM13 15h-1v-6h1v6z"></path></g>
<g id="vaadin:headset"><path d="M14.82 8c-0.309-0.851-0.969-1.511-1.799-1.813l-0.021-1.687c0-2.5-2.47-4.5-5.5-4.5s-5.5 2-5.5 4.5v1.68c-1.173 0.423-1.996 1.525-2 2.82v1c0 1.657 1.343 3 3 3h1v-7h-1v-1.5c0-1.93 2-3.5 4.5-3.5s4.5 1.57 4.5 3.5v1.5h-1v7h1c1.657 0 3-1.343 3-3v1.73c0 1.806-1.464 3.27-3.27 3.27h-1.73c0-0.552-0.448-1-1-1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.73c2.358 0 4.27-1.912 4.27-4.27v-3.73h-1.18z"></path></g>
<g id="vaadin:health-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M9 5h5v1h-5v-1z"></path><path d="M9 7h5v1h-5v-1z"></path><path d="M9 9h2v1h-2v-1z"></path><path d="M6.5 5c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path></g>
<g id="vaadin:heart-o"><path d="M11.7 2c-0.9 0-2.7 0.5-3.7 2.1-1-1.6-2.8-2.1-3.8-2.1-2.3 0-4.2 1.9-4.2 4.2 0 4 7.4 8.5 7.7 8.7l0.3 0.2 0.3-0.2c0.3-0.2 7.7-4.8 7.7-8.7 0-2.3-1.9-4.2-4.3-4.2zM8 13.9c-2.2-1.4-7-5-7-7.7 0-1.8 1.5-3.2 3.2-3.2 0.1 0 2.5 0.1 3.3 2.4l0.5 1.4 0.5-1.4c0.8-2.3 3.2-2.4 3.3-2.4 1.7 0 3.2 1.4 3.2 3.2 0 2.7-4.8 6.3-7 7.7z"></path></g>
<g id="vaadin:heart"><path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path></g>
<g id="vaadin:home-o"><path d="M16 6.6l-8-5.2-2 1.3v-1.7h-2v3l-4 2.6 1.9 2.7 0.1-0.1v5.8h5v-4h2v4h5v-5.8l0.1 0.1 1.9-2.7zM1.4 6.9l6.6-4.3 6.6 4.3-0.7 1-5.9-3.9-5.9 3.9-0.7-1zM13 14h-3v-4h-4v4h-3v-5.4l5-3.3 5 3.3v5.4z"></path></g>
<g id="vaadin:home"><path d="M8 1.4l-2 1.3v-1.7h-2v3l-4 2.6 0.6 0.8 7.4-4.8 7.4 4.8 0.6-0.8z"></path><path d="M8 4l-6 4v7h5v-3h2v3h5v-7z"></path></g>
<g id="vaadin:hospital"><path d="M15 4v-4h-7v4h-8v12h6v-3h4v3h6v-12h-1zM4 11h-2v-2h2v2zM4 8h-2v-2h2v2zM7 11h-2v-2h2v2zM7 8h-2v-2h2v2zM10 3v-1h1v-1h1v1h1v1h-1v1h-1v-1h-1zM11 11h-2v-2h2v2zM11 8h-2v-2h2v2zM14 11h-2v-2h2v2zM14 8h-2v-2h2v2z"></path></g>
<g id="vaadin:hourglass-empty"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-end"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1s-1.62-3.5-3-3.5-3 3.5-3 3.5h-1v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-start"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.573-0.385 0.984-0.939 1.17-1.589l-5.995-0.020c0.191 0.67 0.603 1.225 1.15 1.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.23-0.199 0.426-0.395 0.609-0.602l-4.874-0.007c0.19 0.214 0.386 0.41 0.593 0.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1.77c-0.7-0.87-1.71-2-2.23-2s-1.53 1.13-2.23 2h-1.77v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:inbox"><path d="M10 6v-6h-4v6h-2l4 5 4-5z"></path><path d="M13 1h-2v1h1.3l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h1.3v-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:indent"><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 4.5v6l4-3z"></path></g>
<g id="vaadin:info-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6h2v7h-2v-7z"></path><path d="M7 3h2v2h-2v-2z"></path></g>
<g id="vaadin:info-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-7h2v7zM9 5h-2v-2h2v2z"></path></g>
<g id="vaadin:info"><path d="M6 5h4v11h-4v-11z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:input"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:insert"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 1.4l-1.4-1.4-6.8 6.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:institution"><path d="M8 0l-8 3v2h16v-2z"></path><path d="M0 14h16v2h-16v-2z"></path><path d="M16 7v-1h-16v1h1v5h-1v1h16v-1h-1v-5h1zM4 12h-1v-5h1v5zM7 12h-1v-5h1v5zM10 12h-1v-5h1v5zM13 12h-1v-5h1v5z"></path></g>
<g id="vaadin:invoice"><path d="M4.4 10.2c-0.6 0.1-1.4-0.3-1.7-0.4l-0.5 0.9c0 0 0.9 0.4 1.7 0.5v0.8h1v-0.9c0.9-0.3 1.4-1.1 1.5-1.8 0-0.8-0.6-1.4-1.9-1.9-0.4-0.2-1.1-0.5-1.1-0.9 0-0.5 0.4-0.8 1-0.8 0.7 0 1.4 0.3 1.4 0.3l0.4-0.9c0 0-0.5-0.2-1.2-0.4v-0.7h-1v0.7c-0.9 0.2-1.5 0.8-1.6 1.7 0 1.2 1.3 1.7 1.8 1.9 0.6 0.2 1.3 0.6 1.3 0.9 0 0.4-0.4 0.9-1.1 1z"></path><path d="M0 2v12h16v-12h-16zM15 13h-14v-10h14v10z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path></g>
<g id="vaadin:italic"><path d="M8 0h3l-3 16h-3z"></path></g>
<g id="vaadin:key-o"><path d="M13 0l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.3 0-0.6-0.1-0.9l1.1-1.1v-2h2v-2h2l1-1v-4h-3zM12 6h-1.7l1.7-1.4v1.4zM15 3.6l-0.4 0.4h-1.9l2.3-2v1.6zM7.3 7.6l0.7 0.4 2-1.7v2.3l-0.8 0.8-0.3 0.4 0.1 0.5c0 0.2 0.1 0.5 0.1 0.7 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c0.3 0 0.5 0 0.8 0.1l0.5 0.1 0.4-0.3 6.6-5.9h1.6l-7.7 6.6z"></path><path d="M6 11.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:key"><path d="M8.1 7c-0.2-0.1-0.4-0.2-0.6-0.3l7.5-6.7h-2l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.6-0.1-1.2-0.3-1.7l1.3-1.3v-2h2v-2h2l1-1v-3l-7.9 7zM4 13.2c-0.7 0-1.2-0.6-1.2-1.2s0.6-1.2 1.2-1.2 1.2 0.6 1.2 1.2-0.5 1.2-1.2 1.2z"></path></g>
<g id="vaadin:keyboard-o"><path d="M15 5v7h-14v-7h14zM16 4h-16v9h16v-9z"></path><path d="M4 10h8v1h-8v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M11 8h1v1h-1v-1z"></path><path d="M9 8h1v1h-1v-1z"></path><path d="M7 8h1v1h-1v-1z"></path><path d="M5 8h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M12 6v1h1v2h1v-3z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path></g>
<g id="vaadin:keyboard"><path d="M0 4v9h16v-9h-16zM10 6h1v1h-1v-1zM8 6h1v1h-1v-1zM10 8v1h-1v-1h1zM6 6h1v1h-1v-1zM8 8v1h-1v-1h1zM4 6h1v1h-1v-1zM6 8v1h-1v-1h1zM2 6h1v1h-1v-1zM3 11h-1v-1h1v1zM3 8h1v1h-1v-1zM12 11h-8v-1h8v1zM12 9h-1v-1h1v1zM14 11h-1v-1h1v1zM14 9h-1v-2h-1v-1h2v3z"></path></g>
<g id="vaadin:laptop"><path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path></g>
<g id="vaadin:layout"><path d="M0 0v16h16v-16h-16zM1 3h4v12h-4v-12zM15 15h-9v-12h9v12z"></path></g>
<g id="vaadin:level-down-bold"><path d="M9 16l4-7h-3v-9h-7l2 3h2v6h-3z"></path></g>
<g id="vaadin:level-down"><path d="M5 1h6v11h2l-3 3-3-3h2v-9h-6z"></path></g>
<g id="vaadin:level-left-bold"><path d="M0 7l7-4v3h9v7l-3-2v-2h-6v3z"></path></g>
<g id="vaadin:level-left"><path d="M15 12v-6h-11v-2l-3 3 3 3v-2h9v6z"></path></g>
<g id="vaadin:level-right-bold"><path d="M16 7l-7-4v3h-9v7l3-2v-2h6v3z"></path></g>
<g id="vaadin:level-right"><path d="M1 12v-6h11v-2l3 3-3 3v-2h-9v6z"></path></g>
<g id="vaadin:level-up-bold"><path d="M9 0l4 7h-3v9h-7l2-3h2v-6h-3z"></path></g>
<g id="vaadin:level-up"><path d="M11 15h-6v-11h-2l3-3 3 3h-2v9h6z"></path></g>
<g id="vaadin:lifebuoy"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4 8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4s-4-1.8-4-4zM12.6 9.8c0.3-0.5 0.4-1.2 0.4-1.8s-0.1-1.3-0.4-1.8l1.5-1.5c0.6 1 0.9 2.1 0.9 3.3s-0.3 2.3-0.8 3.3l-1.6-1.5zM11.3 1.8l-1.5 1.6c-0.5-0.3-1.2-0.4-1.8-0.4s-1.3 0.1-1.8 0.4l-1.5-1.6c1-0.5 2.1-0.8 3.3-0.8s2.3 0.3 3.3 0.8zM1.8 4.7l1.5 1.5c-0.2 0.5-0.3 1.2-0.3 1.8s0.1 1.3 0.4 1.8l-1.5 1.5c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3 0.8-3.3zM4.7 14.2l1.5-1.5c0.5 0.2 1.2 0.3 1.8 0.3s1.3-0.1 1.8-0.4l1.5 1.5c-1 0.6-2.1 0.9-3.3 0.9s-2.3-0.3-3.3-0.8z"></path></g>
<g id="vaadin:lightbulb"><path d="M8 0c-2.761 0-5 2.239-5 5 0.013 1.672 0.878 3.138 2.182 3.989l0.818 2.011c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.41c0.342 0.55 0.915 0.929 1.581 0.999 0.684-0.071 1.258-0.449 1.594-0.99l0.415-0.009c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5l0.8-2c1.322-0.862 2.187-2.328 2.2-3.998 0-2.763-2.239-5.002-5-5.002zM10.25 8.21l-0.25 0.17-0.11 0.29-0.89 2.14c-0.042 0.111-0.147 0.189-0.27 0.19h-1.51c-0.103-0.020-0.186-0.093-0.219-0.188l-0.871-2.142-0.13-0.29-0.25-0.18c-1.045-0.7-1.729-1.868-1.75-3.197-0-2.212 1.791-4.003 4-4.003s4 1.791 4 4c-0.017 1.336-0.702 2.509-1.736 3.201z"></path><path d="M10.29 3c-0.574-0.612-1.387-0.995-2.289-1l-0.001 1c0.585 0.002 1.115 0.238 1.5 0.62 0.278 0.386 0.459 0.858 0.499 1.37l1.001 0.009c-0.045-0.756-0.305-1.443-0.718-2.011z"></path></g>
<g id="vaadin:line-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M16 0.070l-5.68 4.97-5.47-1.7-4.85 3.76v1.9l5.15-4 5.53 1.72 5.32-4.66v-1.99z"></path></g>
<g id="vaadin:line-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M9 8l-3-3-4 4v2l4-4 3 3 7-7v-2z"></path></g>
<g id="vaadin:line-h"><path d="M0 7h16v1h-16v-1z"></path></g>
<g id="vaadin:line-v"><path d="M8 0h1v16h-1v-16z"></path></g>
<g id="vaadin:lines-list"><path d="M0 1h3v2h-3v-2z"></path><path d="M0 5h3v2h-3v-2z"></path><path d="M0 9h3v2h-3v-2z"></path><path d="M0 13h3v2h-3v-2z"></path><path d="M4 1h12v2h-12v-2z"></path><path d="M4 5h12v2h-12v-2z"></path><path d="M4 9h12v2h-12v-2z"></path><path d="M4 13h12v2h-12v-2z"></path></g>
<g id="vaadin:lines"><path d="M0 1h16v2h-16v-2z"></path><path d="M0 5h16v2h-16v-2z"></path><path d="M0 9h16v2h-16v-2z"></path><path d="M0 13h16v2h-16v-2z"></path></g>
<g id="vaadin:link"><path d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"></path><path d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"></path></g>
<g id="vaadin:list-ol"><path d="M4 0h12v4h-12v-4z"></path><path d="M4 6h12v4h-12v-4z"></path><path d="M4 12h12v4h-12v-4z"></path><path d="M1 0l-0.9 0.5 0.2 0.7 0.7-0.3v3.1h1v-4z"></path><path d="M2.2 13.9c0.3-0.2 0.5-0.5 0.5-0.8 0-0.5-0.4-1-1.3-1-0.5 0-1 0.1-1.2 0.3h-0.1l0.2 0.8 0.1-0.1c0.1-0.1 0.4-0.2 0.7-0.2s0.4 0.1 0.4 0.3c0 0.4-0.5 0.4-0.6 0.4h-0.4v0.7h0.4c0.3 0 0.6 0.1 0.6 0.4 0 0.2-0.2 0.4-0.6 0.4s-0.7-0.2-0.8-0.2l-0.1-0.1v0.9h0.1c0.2 0.2 0.6 0.3 1.1 0.3 1 0 1.6-0.5 1.6-1.2 0-0.4-0.2-0.8-0.6-0.9z"></path><path d="M0.1 6.4l0.3 1c0 0 0.7-0.6 1.2-0.3 1.1 0.8-1.6 2.4-1.6 2.4v0.5h3v-1h-1.2c0.6-0.5 1.2-1.2 1-1.9-0.5-1.9-2.7-0.7-2.7-0.7z"></path></g>
<g id="vaadin:list-select"><path d="M1 0h12v2h-12v-2z"></path><path d="M1 8h13v2h-13v-2z"></path><path d="M1 11h11v2h-11v-2z"></path><path d="M1 14h14v2h-14v-2z"></path><path d="M0 3v4h16v-4h-16zM11 6h-10v-2h10v2z"></path></g>
<g id="vaadin:list-ul"><path d="M0 1h3v3h-3v-3z"></path><path d="M0 6h3v3h-3v-3z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:list"><path d="M0 0h4v3h-4v-3z"></path><path d="M0 4h4v3h-4v-3z"></path><path d="M0 12h4v3h-4v-3z"></path><path d="M0 8h4v3h-4v-3z"></path><path d="M5 0h11v3h-11v-3z"></path><path d="M5 4h11v3h-11v-3z"></path><path d="M5 12h11v3h-11v-3z"></path><path d="M5 8h11v3h-11v-3z"></path></g>
<g id="vaadin:location-arrow-circle-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M2 9l10-5-5 10v-5z"></path></g>
<g id="vaadin:location-arrow-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 14v-5h-5l10-5-5 10z"></path></g>
<g id="vaadin:location-arrow"><path d="M0 9l16-9-9 16v-7z"></path></g>
<g id="vaadin:lock"><path d="M12 8v-3.1c0-2.2-1.6-3.9-3.8-3.9h-0.3c-2.1 0-3.9 1.7-3.9 3.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-1zM9 14h-1v-2c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1v3zM10 8h-4v-3.1c0-1.1 0.9-1.9 1.9-1.9h0.3c1 0 1.8 0.8 1.8 1.9v3.1z"></path></g>
<g id="vaadin:magic"><path d="M0 5h3v1h-3v-1z"></path><path d="M5 0h1v3h-1v-3z"></path><path d="M6 11h-1v-2.5l1 1z"></path><path d="M11 6h-1.5l-1-1h2.5z"></path><path d="M3.131 7.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M10.131 0.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M0.836 0.199l3.465 3.465-0.707 0.707-3.465-3.465 0.707-0.707z"></path><path d="M6.1 4.1l-2.1 2 9.8 9.9 2.2-2.1-9.9-9.8zM6.1 5.5l2.4 2.5-0.6 0.6-2.5-2.5 0.7-0.6z"></path></g>
<g id="vaadin:magnet"><path d="M11 0h5v4h-5v-4z"></path><path d="M11 5v3c0 1.6-1.4 3-3 3s-3-1.4-3-3v-3h-5v3c0 4.4 3.6 8 8 8s8-3.6 8-8v-3h-5z"></path><path d="M0 0h5v4h-5v-4z"></path></g>
<g id="vaadin:mailbox"><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM11 10v2h-6v-2h-3.9l2.7-8h8.6l2.7 8h-4.1z"></path></g>
<g id="vaadin:male"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 7.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v9.47h1.5v-5h1v5h1.5v-9.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:map-marker"><path d="M8 0c-2.8 0-5 2.2-5 5s4 11 5 11c1 0 5-8.2 5-11s-2.2-5-5-5zM8 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></g>
<g id="vaadin:margin-bottom"><path d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-13h-16zM15 12h-14v-11h14v11z"></path><path d="M0 15h1v1h-1v-1z"></path><path d="M1 14h1v1h-1v-1z"></path><path d="M2 15h1v1h-1v-1z"></path><path d="M3 14h1v1h-1v-1z"></path><path d="M4 15h1v1h-1v-1z"></path><path d="M5 14h1v1h-1v-1z"></path><path d="M6 15h1v1h-1v-1z"></path><path d="M7 14h1v1h-1v-1z"></path><path d="M8 15h1v1h-1v-1z"></path><path d="M9 14h1v1h-1v-1z"></path><path d="M10 15h1v1h-1v-1z"></path><path d="M11 14h1v1h-1v-1z"></path><path d="M12 15h1v1h-1v-1z"></path><path d="M13 14h1v1h-1v-1z"></path><path d="M14 15h1v1h-1v-1z"></path><path d="M15 14h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-left"><path d="M2 0v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h13v-16h-14zM15 15h-11v-14h11v14z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-right"><path d="M14 2v-1h-1v-1h-13v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1zM12 15h-11v-14h11v14z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-top"><path d="M15 2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v13h16v-14h-1zM15 15h-14v-11h14v11z"></path><path d="M15 0h1v1h-1v-1z"></path><path d="M14 1h1v1h-1v-1z"></path><path d="M13 0h1v1h-1v-1z"></path><path d="M12 1h1v1h-1v-1z"></path><path d="M11 0h1v1h-1v-1z"></path><path d="M10 1h1v1h-1v-1z"></path><path d="M9 0h1v1h-1v-1z"></path><path d="M8 1h1v1h-1v-1z"></path><path d="M7 0h1v1h-1v-1z"></path><path d="M6 1h1v1h-1v-1z"></path><path d="M5 0h1v1h-1v-1z"></path><path d="M4 1h1v1h-1v-1z"></path><path d="M3 0h1v1h-1v-1z"></path><path d="M2 1h1v1h-1v-1z"></path><path d="M1 0h1v1h-1v-1z"></path><path d="M0 1h1v1h-1v-1z"></path></g>
<g id="vaadin:margin"><path d="M0 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M13 2h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1zM12 12h-8v-8h8v8z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path></g>
<g id="vaadin:medal"><path d="M10 12.2c-0.3 0-0.5-0.1-0.8-0.2l-1.2-0.5-1.2 0.5c-0.2 0.1-0.5 0.2-0.8 0.2-0.2 0-0.3 0-0.5-0.1l-0.5 3.9 3-2 3 2-0.6-3.9c-0.1 0.1-0.3 0.1-0.4 0.1z"></path><path d="M12.9 5.9c-0.1-0.2-0.1-0.5 0-0.7l0.6-1.2c0.2-0.4 0-0.9-0.5-1.1l-1.3-0.5c-0.2-0.1-0.4-0.3-0.5-0.5l-0.5-1.3c-0.1-0.4-0.4-0.6-0.7-0.6-0.1 0-0.3 0-0.4 0.1l-1.3 0.6c-0.1 0-0.2 0-0.3 0s-0.2 0-0.3-0.1l-1.3-0.5c-0.1-0.1-0.3-0.1-0.4-0.1-0.3 0-0.6 0.2-0.8 0.5l-0.5 1.4c0 0.2-0.2 0.4-0.4 0.5l-1.4 0.5c-0.4 0.1-0.6 0.6-0.4 1.1l0.6 1.3c0.1 0.2 0.1 0.5 0 0.7l-0.6 1.2c-0.2 0.4 0 0.9 0.5 1.1l1.3 0.5c0.2 0.1 0.4 0.3 0.5 0.5l0.5 1.3c0.1 0.4 0.4 0.6 0.7 0.6 0.1 0 0.2 0 0.3-0.1l1.3-0.6c0.1 0 0.2-0.1 0.3-0.1s0.2 0 0.3 0.1l1.3 0.6c0.1 0.1 0.2 0.1 0.3 0.1 0.3 0 0.6-0.2 0.8-0.5l0.5-1.3c0.1-0.2 0.3-0.4 0.5-0.5l1.3-0.5c0.4-0.2 0.7-0.7 0.5-1.1l-0.5-1.4zM8 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 2.2-1.8 4-4 4z"></path><path d="M11 5.6c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></g>
<g id="vaadin:megaphone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:meh-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M4 10h8v1h-8v-1z"></path></g>
<g id="vaadin:menu"><path d="M0 1h16v3h-16v-3z"></path><path d="M0 6h16v3h-16v-3z"></path><path d="M0 11h16v3h-16v-3z"></path></g>
<g id="vaadin:microphone"><path d="M8 10v0c-1.7 0-3-1.3-3-3v-4c0-1.6 1.3-3 3-3v0c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3z"></path><path d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-0.4c-2 0-3.8-1.6-3.8-3.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 2.2 1.8 4.1 4 4.4v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.6-0.4-1-1-1z"></path></g>
<g id="vaadin:minus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M3 7h10v2h-10v-2z"></path></g>
<g id="vaadin:minus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-10v-2h10v2z"></path></g>
<g id="vaadin:minus-square-o"><path d="M4 7h8v2h-8v-2z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:minus"><path d="M2 7h12v2h-12v-2z"></path></g>
<g id="vaadin:mobile-browser"><path d="M16 0h-13v5h-3v11h7v-3h9v-13zM6 1h9v1h-9v-1zM4 1h1v1h-1v-1zM4 15h-1v-1h1v1zM6 13h-5v-7h5v7zM15 12h-8v-7h-3v-2h11v9z"></path></g>
<g id="vaadin:mobile-retro"><path d="M11 0h-1v2h-6v14h7v-16zM6 14h-1v-1h1v1zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM8 14h-1v-1h1v1zM8 12h-1v-1h1v1zM8 10h-1v-1h1v1zM10 14h-1v-1h1v1zM10 12h-1v-1h1v1zM10 10h-1v-1h1v1zM10 8h-5v-4h5v4z"></path></g>
<g id="vaadin:mobile"><path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path></g>
<g id="vaadin:modal-list"><path d="M3 6h2v1h-2v-1z"></path><path d="M6 6h7v1h-7v-1z"></path><path d="M3 8h2v1h-2v-1z"></path><path d="M6 8h7v1h-7v-1z"></path><path d="M3 10h2v1h-2v-1z"></path><path d="M6 10h7v1h-7v-1z"></path><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:modal"><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:money-deposit"><path d="M8 16l-2-3h1v-2h2v2h1l-2 3z"></path><path d="M15 1v8h-14v-8h14zM16 0h-16v10h16v-10z"></path><path d="M8 2c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 5c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money-exchange"><path d="M16 14l-3 2v-1h-4.75l2-2h2.75v-1l3 2z"></path><path d="M0 2l3-2v1h4.75l-2 2h-2.75v1l-3-2z"></path><path d="M9.74 0l-9.74 9.74 6.26 6.26 9.74-9.74zM1.39 9.74l8.35-8.35 4.87 4.87-8.35 8.35z"></path><path d="M4.17 9.74l-0.7 0.7 2.090 2.090 0.7-0.7 0.74 0.69 2.74-2.78c-0.445 0.445-1.060 0.721-1.74 0.721-1.359 0-2.461-1.102-2.461-2.461 0-0.68 0.275-1.295 0.721-1.74l-2.78 2.74z"></path><path d="M12.52 5.57l-2.090-2.090-0.7 0.7-0.73-0.7-2.74 2.78c0.445-0.445 1.060-0.721 1.74-0.721 1.359 0 2.461 1.102 2.461 2.461 0 0.68-0.275 1.295-0.721 1.74l2.78-2.74-0.7-0.7z"></path></g>
<g id="vaadin:money-withdraw"><path d="M8 0l2 3h-1v2h-2v-2h-1l2-3z"></path><path d="M15 7v8h-14v-8h14zM16 6h-16v10h16v-10z"></path><path d="M8 8c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 11c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money"><path d="M15 4v8h-14v-8h14zM16 3h-16v10h16v-10z"></path><path d="M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 8c0-1.7 1.3-3 3-3h-5v1h-1v4h1v1h5c-1.7 0-3-1.3-3-3z"></path></g>
<g id="vaadin:moon-o"><path d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1 0-1.4 0.3-2.7 0.9-3.8-3.4 0.9-6 4.1-6 7.9 0 4.5 3.6 8.1 8.1 8.1 3.1 0 5.8-1.8 7.2-4.4-0.6 0.2-1.3 0.3-2.1 0.3zM8.1 15c-3.9 0-7.1-3.2-7.1-7.1 0-2.5 1.3-4.7 3.3-6-0.2 0.6-0.2 1.2-0.2 1.9 0 5 4.1 9.1 9.1 9.2-1.4 1.2-3.2 2-5.1 2z"></path></g>
<g id="vaadin:moon"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 15c-3.9 0-7-3.1-7-7 0-2.4 1.2-4.6 3.2-5.9-0.1 0.6-0.2 1.3-0.2 1.9 0 4.9 4 8.9 8.9 9-1.3 1.3-3 2-4.9 2z"></path></g>
<g id="vaadin:morning"><path d="M14 10l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 10c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:movie"><path d="M12 7v-3h-12v9h12v-3l4 2v-7l-4 2zM9 11h-7v-5h7v5z"></path><path d="M5 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:music"><path d="M4 3v9.4c-0.4-0.2-0.9-0.4-1.5-0.4-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-7.3l7-2.3v5.1c-0.4-0.3-0.9-0.5-1.5-0.5-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-11l-9 3z"></path></g>
<g id="vaadin:mute"><path d="M15.2 0l-4.2 4.2v-1.2c0-1.7-1.3-3-3-3s-3 1.3-3 3v4c0 0.9 0.4 1.7 1 2.2l-0.8 0.8c-0.7-0.6-1.2-1.5-1.2-2.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 1.3 0.6 2.4 1.5 3.2l-4.5 4.6v0.7h0.7l15.3-15.4v-0.6h-0.8z"></path><path d="M12.5 5.1l-0.5 0.5v1.9c0 1.9-1.8 3.5-3.8 3.5h-0.4c-0.3 0-0.6-0.1-0.9-0.1l-0.9 0.7c0.3 0.1 0.6 0.2 1 0.3v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.4-0.2-0.7-0.5-0.9z"></path><path d="M11 7v-0.4l-3.3 3.4c0.1 0 0.2 0 0.3 0 1.7 0 3-1.4 3-3z"></path></g>
<g id="vaadin:native-button"><path d="M15 12h-14c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v6c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:newspaper"><path d="M2 4h11v4h-11v-4z"></path><path d="M2 2h11v1h-11v-1z"></path><path d="M8 13h3v1h-3v-1z"></path><path d="M8 11h5v1h-5v-1z"></path><path d="M8 9h5v1h-5v-1z"></path><path d="M2 13h5v1h-5v-1z"></path><path d="M2 11h5v1h-5v-1z"></path><path d="M2 9h5v1h-5v-1z"></path><path d="M15 2v-2h-15v14.5c0 0.828 0.672 1.5 1.5 1.5h13c0.828 0 1.5-0.672 1.5-1.5v-12.5h-1zM1.5 15c-0.276 0-0.5-0.224-0.5-0.5v-13.5h13v12.5c0 1.5 1 1.5 1 1.5h-13.5z"></path></g>
<g id="vaadin:notebook"><path d="M2 0v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v2h12v-15.88h-12zM3.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM12 6h-6v-3h6v3z"></path></g>
<g id="vaadin:nurse"><path d="M15.2 12c-0.658-1.414-2.067-2.376-3.701-2.376-0.077 0-0.154 0.002-0.23 0.006l-3.269 3.9-3.28-3.9c-0.049-0.002-0.106-0.003-0.163-0.003-1.648 0-3.072 0.958-3.746 2.348-0.422 0.9-0.707 1.917-0.808 2.988l1.997 0.037v1h12v-1h2c-0.104-1.107-0.388-2.124-0.824-3.057z"></path><path d="M6.57 8.73c-0.038 0.374-0.322 0.671-0.685 0.729l2.115 2.541 2.12-2.52c-0.368-0.059-0.652-0.356-0.69-0.727-0-0.613 0.8-0.413 1.43-1.453 0-0.030 2.88-7.3-2.86-7.3s-2.86 7.27-2.86 7.27c0.63 1.050 1.44 0.85 1.43 1.46z"></path></g>
<g id="vaadin:office"><path d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"></path></g>
<g id="vaadin:open-book"><path d="M15 4.7v-0.7c-1.159-1.163-2.734-1.91-4.484-1.999-0.112-0.012-0.222-0.018-0.334-0.018-0.874 0-1.657 0.394-2.179 1.013-0.556-0.617-1.357-1.007-2.249-1.007-0.090 0-0.178 0.004-0.266 0.012-1.754 0.089-3.33 0.836-4.488 1.999l-0 0.7-1 0.3v10l6.7-1.4 0.3 0.4h2l0.3-0.4 6.7 1.4v-10zM5.48 11.31c-1.275 0.037-2.467 0.358-3.526 0.902l0.046-7.792c0.885-0.835 2.066-1.365 3.369-1.42 0.806 0.054 1.534 0.303 2.159 0.701l-0.019 7.869c-0.555-0.166-1.193-0.262-1.854-0.262-0.062 0-0.124 0.001-0.185 0.003zM14 12.19c-1.013-0.522-2.205-0.843-3.468-0.88-0.056-0.001-0.108-0.002-0.161-0.002-0.66 0-1.297 0.096-1.899 0.274l0.047-7.902c0.601-0.381 1.322-0.627 2.096-0.679 1.324 0.055 2.501 0.586 3.386 1.422l-0.003 7.768z"></path></g>
<g id="vaadin:option-a"><path d="M12.5 10h-1.5v-4h1.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5c-1.381 0-2.5 1.119-2.5 2.5v1.5h-4v-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5h1.5v4h-1.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5v-1.5h4v1.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM11 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5h-1.5v-1.5zM5 12.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5h1.5v1.5zM5 5h-1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v1.5zM10 10h-4v-4h4v4zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5v-1.5h1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:option"><path d="M4 11c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h-1c-0.552 0-1 0.448-1 1z"></path><path d="M0 0v16h16v-16h-16zM11 9c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2v-1h-2v1c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2h1v-2h-1c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v1h2v-1c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2h-1v2h1z"></path><path d="M12 5c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h1c0.552 0 1-0.448 1-1z"></path><path d="M5 4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v-1c0-0.552-0.448-1-1-1z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 11c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.552-0.448-1-1-1h-1v1z"></path></g>
<g id="vaadin:options"><path d="M5 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M3.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM3.5 6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M3.5 8c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM3.5 14c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M8 2h8v3h-8v-3z"></path><path d="M8 10h8v3h-8v-3z"></path></g>
<g id="vaadin:orientation"><path d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2 1.5-2h-1c0-2.2-2-3.9-4-3.9v-1.1l-2 1.5 2 1.5v-0.9z"></path><path d="M9 9h6v6h-7v-15h-8v16h16v-8h-7v1zM7 8h-1v1h1v6h-6v-14h6v7z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path></g>
<g id="vaadin:out"><path d="M3.5 8c0.3 0 0.5 0.2 0.5 0.5v2c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-2c0-0.3 0.2-0.5 0.5-0.5v0zM3.5 7v0c-0.8 0-1.5 0.7-1.5 1.5v2c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-2c0-0.8-0.7-1.5-1.5-1.5v0z"></path><path d="M8 7v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-1v3.5c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-3.5h-1z"></path><path d="M13 7h-3v1h1v4h1v-4h1z"></path><path d="M15 6v-1h-2.4l-3.7-3c0.1-0.2 0.1-0.3 0.1-0.5 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.2 0 0.3 0.1 0.5l-3.7 3h-2.4v9h1v1h15v-9h-1zM6.7 2.8c0.3 0.1 0.5 0.2 0.8 0.2s0.5-0.1 0.8-0.2l2.7 2.2h-7l2.7-2.2zM14 13h-13v-7h13v7z"></path></g>
<g id="vaadin:outbox"><path d="M6 5v6h4v-6h2l-4-5-4 5z"></path><path d="M13 2h-2l0.9 1h0.4l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h0.4l0.9-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:package"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM8 1l2.1 0.5-5.9 1.9-2.3-0.8 6.1-1.6zM8 14.9l-7-3.5v-8.1l3 1v3.4l1 0.3v-3.3l3 1v9.2zM8.5 4.8l-2.7-0.9 6.2-1.9 2.4 0.6-5.9 2.2z"></path></g>
<g id="vaadin:padding-bottom"><path d="M16 16v-16h-16v16h16zM1 13h1v-1h-1v-11h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-left"><path d="M0 16h16v-16h-16v16zM3 1v1h1v-1h11v14h-12v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-right"><path d="M16 0h-16v16h16v-16zM13 15v-1h-1v1h-11v-14h12v1h1v-1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-top"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v11h-14v-12h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M13 4h1v1h-1v-1z"></path><path d="M12 7h1v1h-1v-1z"></path><path d="M13 6h1v1h-1v-1z"></path><path d="M12 9h1v1h-1v-1z"></path><path d="M13 8h1v1h-1v-1z"></path><path d="M12 11h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M3 4h1v1h-1v-1z"></path><path d="M2 5h1v1h-1v-1z"></path><path d="M3 6h1v1h-1v-1z"></path><path d="M2 7h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M2 9h1v1h-1v-1z"></path><path d="M3 10h1v1h-1v-1z"></path><path d="M2 11h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 11h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path></g>
<g id="vaadin:paint-roll"><path d="M16 6.9v-4.9h-2v-2h-13v1h-1v3h1v1h13v-2h1v3.1l-8 1v1.9h-1v0.9c0 0 0.5 0 0.5 0.9s-0.5 0.6-0.5 1.5v2.8c0 0 0 0.9 1.5 0.9s1.5-0.9 1.5-0.9v-2.8c0-0.9-0.5-0.7-0.5-1.5s0.5-0.9 0.5-0.9v-0.9h-1v-1.1l8-1z"></path></g>
<g id="vaadin:paintbrush"><path d="M5.6 11.6l-1.2-1.2c-0.8-0.2-2-0.1-2.7 1-0.8 1.1-0.3 2.8-1.7 4.6 0 0 3.5 0 4.8-1.3 1.2-1.2 1.2-2.2 1-3l-0.2-0.1z"></path><path d="M5.8 8.1c-0.2 0.3-0.5 0.7-0.7 1 0 0.2-0.1 0.3-0.2 0.4l1.5 1.5c0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.7-0.4 1-0.7 0.4 0 0.6-0.2 0.8-0.4l-2.2-2.2c-0.2 0.2-0.4 0.4-0.6 0.7z"></path><path d="M15.8 0.2c-0.3-0.3-0.7-0.3-1-0.1 0 0-3 2.5-5.9 5.1-0.4 0.4-0.7 0.7-1.1 1-0.2 0.2-0.4 0.4-0.6 0.5l2.1 2.1c0.2-0.2 0.4-0.4 0.5-0.7 0.3-0.4 0.6-0.7 0.9-1.1 2.5-3 5.1-5.9 5.1-5.9 0.3-0.2 0.3-0.6 0-0.9z"></path></g>
<g id="vaadin:palette"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:panel"><path d="M0 0v16h16v-16h-16zM13 15h-12v-12h12v12zM15 15h-1v-1h1v1zM15 13h-1v-8h1v8zM15 4h-1v-1h1v1z"></path></g>
<g id="vaadin:paperclip"><path d="M2.7 15.3c-0.7 0-1.4-0.3-1.9-0.8-0.9-0.9-1.2-2.5 0-3.7l8.9-8.9c1.4-1.4 3.8-1.4 5.2 0s1.4 3.8 0 5.2l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c1-1 1-2.7 0-3.7s-2.7-1-3.7 0l-8.9 8.9c-0.8 0.8-0.6 1.7 0 2.2 0.6 0.6 1.5 0.8 2.2 0l8.9-8.9c0.2-0.2 0.2-0.5 0-0.7s-0.5-0.2-0.7 0l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-8.9 8.9c-0.6 0.4-1.3 0.7-1.9 0.7z"></path></g>
<g id="vaadin:paperplane-o"><path d="M16 0l-16 8 4.7 1.6 0.3 5.4 2.5-2.8 2.5 3.8 6-16zM7.5 10.4l4.3-5.9-6.2 4.3-3-1 11.6-5.8-4.5 11.8-2.2-3.4z"></path></g>
<g id="vaadin:paperplane"><path d="M0 8l4.9 1.4h0.1v-0.1l7.1-5.3-1.1 1.2-6.2 6.6 0.2 3.2 2.9-3.2 2.1 4.2 6-16z"></path></g>
<g id="vaadin:paragraph"><path d="M5.5 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h2.5v7h2v-14h1v14h2v-14h2v-2h-9.5z"></path></g>
<g id="vaadin:password"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M6 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:paste"><path d="M13 4h-3v-4h-10v14h6v2h10v-9l-3-3zM3 1h4v1h-4v-1zM15 15h-8v-10h5v3h3v7zM13 7v-2l2 2h-2z"></path></g>
<g id="vaadin:pause"><path d="M0 1h7v14h-7v-14z"></path><path d="M9 1h7v14h-7v-14z"></path></g>
<g id="vaadin:pencil"><path d="M1 11.9l-1 4.1 4.1-1 9.2-9.2-3.1-3.1-9.2 9.2zM1.5 15l-0.4-0.5 0.4-2 2 2-2 0.5zM10.9 4.4l-8.1 8-0.6-0.6 8.1-8 0.6 0.6z"></path><path d="M15.3 0.7c-1.1-1.1-2.6-0.5-2.6-0.5l-1.5 1.5 3.1 3.1 1.5-1.5c0-0.1 0.6-1.5-0.5-2.6zM13.4 1.6l-0.5-0.5c0.6-0.6 1.1-0.1 1.1-0.1l-0.6 0.6z"></path></g>
<g id="vaadin:phone-landline"><path d="M15.88 3.86l-0.61-1.31c-0.155-0.326-0.443-0.568-0.792-0.658-1.938-0.528-4.161-0.851-6.453-0.891-2.342 0.041-4.565 0.363-6.687 0.934-0.165 0.048-0.453 0.29-0.605 0.609l-0.613 1.317c-0.075 0.152-0.119 0.331-0.12 0.52v0.87c-0.001 0.012-0.001 0.026-0.001 0.041 0 0.392 0.318 0.71 0.71 0.71 0.011 0 0.022-0 0.033-0.001l2.518 0c0.412-0.010 0.742-0.346 0.742-0.76 0-0.018-0.001-0.035-0.002-0.053l0-0.838c-0-0.004-0-0.008-0-0.012 0-0.229 0.119-0.43 0.298-0.546 0.947-0.508 2.069-0.806 3.26-0.806 0.156 0 0.31 0.005 0.464 0.015 0.122-0.011 0.288-0.017 0.456-0.017 1.178 0 2.287 0.291 3.261 0.805 0.143 0.099 0.262 0.3 0.262 0.529 0 0.004-0 0.009-0 0.013l0 0.859c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.413 0.33 0.75 0.741 0.76l2.521 0c0.009 0 0.020 0.001 0.031 0.001 0.392 0 0.71-0.318 0.71-0.71 0-0.014-0-0.029-0.001-0.043l0-0.868c-0.001-0.189-0.045-0.368-0.123-0.527z"></path><path d="M12 8.3c-0.624-0.797-1.001-1.815-1.001-2.92 0-0.028 0-0.056 0.001-0.084l-0-0.296h-1v1h-4v-1h-1v0.33c0 0.024 0.001 0.052 0.001 0.080 0 1.105-0.377 2.122-1.009 2.93l-2.992 3.66v3h14v-3zM8 13c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3s-1.343 3-3 3z"></path><path d="M10 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:phone"><path d="M12.2 10c-1.1-0.1-1.7 1.4-2.5 1.8-1.3 0.7-3.7-1.8-3.7-1.8s-2.5-2.4-1.9-3.7c0.5-0.8 2-1.4 1.9-2.5-0.1-1-2.3-4.6-3.4-3.6-2.4 2.2-2.6 3.1-2.6 4.9-0.1 3.1 3.9 7 3.9 7 0.4 0.4 3.9 4 7 3.9 1.8 0 2.7-0.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path></g>
<g id="vaadin:picture"><path d="M16 14h-16v-12h16v12zM1 13h14v-10h-14v10z"></path><path d="M2 10v2h12v-1c0 0 0.2-1.7-2-2-1.9-0.3-2.2 0.6-3.8 0.6-1.1 0-0.9-1.6-3.2-1.6-1.7 0-3 2-3 2z"></path><path d="M13 6c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:pie-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M5 0c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zM5 9c-2.209 0-4-1.791-4-4s1.791-4 4-4v4h4c0 2.209-1.791 4-4 4z"></path></g>
<g id="vaadin:pie-chart"><path d="M9 1c3.2 0.2 5.7 2.8 6 6h-6v-6zM8.5 0c-0.2 0-0.3 0-0.5 0v8h8c0-0.2 0-0.3 0-0.5 0-4.1-3.4-7.5-7.5-7.5v0z"></path><path d="M7 9v-8c-3.9 0.3-7 3.5-7 7.5 0 4.1 3.4 7.5 7.5 7.5 4 0 7.2-3.1 7.5-7h-8z"></path></g>
<g id="vaadin:piggy-bank-coin"><path d="M15.93 7.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.411h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 7.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 7c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 9.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.001s0-0.13 0-0.13 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 9.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path><path d="M8 3h-1v-0.17h0.25v-1.090h-0.25l0.55-0.55h0.2v1.64h0.25v0.17z"></path><path d="M7.5 0.75c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5zM7.5 0c-1.243 0-2.25 1.007-2.25 2.25s1.007 2.25 2.25 2.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25v0z"></path></g>
<g id="vaadin:piggy-bank"><path d="M15.93 5.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.41h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 5.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 5c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 7.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.011s0-0.14 0-0.14 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 7.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path></g>
<g id="vaadin:pill"><path d="M14.8 1.4l-0.2-0.2c-0.7-0.8-1.8-1.2-2.8-1.2s-2.1 0.4-2.9 1.2l-7.7 7.7c-1.6 1.6-1.6 4.1 0 5.7l0.2 0.2c0.7 0.8 1.8 1.2 2.8 1.2s2.1-0.4 2.9-1.2l7.8-7.8c1.5-1.5 1.5-4.1-0.1-5.6zM14.1 6.4l-3.9 3.9-3.5-3.6-3.8 3.8c-1.1 1.1-1.1 2.5-1 3.5v0c-1.2-1.2-1.2-3.1 0-4.3l7.8-7.8c0.5-0.6 1.3-0.9 2.1-0.9s1.6 0.3 2.2 0.9l0.2 0.2c0.5 0.5 0.8 1.3 0.8 2.1s-0.3 1.6-0.9 2.2z"></path></g>
<g id="vaadin:pills"><path d="M3.5 8l6.3-6.3c0.4-0.4 1-0.7 1.7-0.7s1.3 0.3 1.8 0.7c1 1 1 2.6 0 3.5l-2.8 2.8h1.4l2-2c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.7 0.2-2.4 0.9l-6.3 6.4c-0.3 0.2-0.5 0.5-0.7 0.9 0.5-0.2 1-0.3 1.5-0.3z"></path><path d="M7.3 5.6l-2.4 2.4h4.7z"></path><path d="M12.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5zM12.5 15h-4.5v-4h-4.5c-1.1 0-2 0.6-2.5 1.2 0.2-1.2 1.2-2.2 2.5-2.2h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:pin-post"><path d="M15 4v-1h-6c0-1.69 1-2 1-2v-1h-5v1s1 0.31 1 2h-6v12h2v1h14v-12h-1zM14 14h-13v-10h4v1h2v2h1v-2h2v-1h4v10z"></path></g>
<g id="vaadin:pin"><path d="M11 6.5v-5.5h1v-1h-8v1h1v5.5c0 0-2 1.5-2 3.5 0 0.5 1.9 0.7 4 0.7v2.2c0 0.7 0.2 1.4 0.5 2.1l0.5 1 0.5-1c0.3-0.6 0.5-1.3 0.5-2.1v-2.2c2.1 0 4-0.3 4-0.7 0-2-2-3.5-2-3.5zM7 6.6c0 0-0.5 0.3-1.6 1.4-1 1-1.5 1.9-1.5 1.9s0.1-1 0.8-1.9c0.9-1.1 1.3-1.4 1.3-1.4v-5.6h1v5.6z"></path></g>
<g id="vaadin:play-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6 4v8l6-4z"></path></g>
<g id="vaadin:play-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 12v-8l6 4-6 4z"></path></g>
<g id="vaadin:play"><path d="M2 1v14l12-7z"></path></g>
<g id="vaadin:plug"><path d="M14.7 3.1c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8-1.5-1.4 2.8-2.8c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-2.8 2.8-1.4-1.4-1.4 1.4 0.7 0.7-1.4 1.4c-1.4 1.4-1.5 3.5-0.5 5.1-1.7 1.5-2.6 3.8-2.6 5.7h2c0-1.3 0.4-3.2 2.1-4.4 1.5 0.8 3.4 0.5 4.6-0.7l1.4-1.4 0.7 0.7 1.4-1.4-1.4-1.4 2.8-2.8c0.5-0.5 0.5-1.1 0.1-1.5z"></path></g>
<g id="vaadin:plus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M13 7h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></path></g>
<g id="vaadin:plus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path></g>
<g id="vaadin:plus-minus"><path d="M10 7h6v2h-6v-2z"></path><path d="M4 5h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M6 2l3 12h1l-3-12z"></path></g>
<g id="vaadin:plus-square-o"><path d="M12 7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:plus"><path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z"></path></g>
<g id="vaadin:pointer"><path d="M12.6 5c-0.2 0-0.5 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.6-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.2 0-0.4 0-0.5 0.1v-1.7c0-0.6-0.4-1.4-1.4-1.4-0.4 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.4v4.3c-0.6 0.1-1.1 0.3-1.4 0.6-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.4 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM13 7.4v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.8-1.1-1.2-1.1-2.2 0-0.2 0-0.5 0-0.7 0-1 0-1.7 0.3-2.1 0.1-0.1 0.4-0.2 0.7-0.2v0.5l-0.3 1.5c0 0.1 0 0.1 0.1 0.2s0.2 0 0.2 0l1-1.2c0-0.1 0-0.2 0-0.2v-6.2c0-0.1 0-0.5 0.2-0.7 0.1 0 0.2-0.1 0.4-0.1 0.3 0 0.4 0.3 0.4 0.4v3.1c0 0 0 0 0 0v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-1.3c0 0 0 0 0 0 0-0.1 0.1-0.5 0.5-0.5 0.3 0 0.5 0.1 0.5 0.4v1.3c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.7c0-0.1 0.1-0.3 0.5-0.3 0.2 0 0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.4 0.2 0.4v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0-0.1 0.1-0.2 0.2-0.3 0 0 0.1 0 0.2 0 0.6 0.2 0.7 1.2 0.7 1.5 0-0.1 0-0.1 0 0z"></path></g>
<g id="vaadin:power-off"><path d="M10 2.3v3.3c1.2 0.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5 0.8-2.8 2-3.4v-3.3c-2.9 0.9-5 3.5-5 6.7 0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7z"></path><path d="M7 1h2v7h-2v-7z"></path></g>
<g id="vaadin:presentation"><path d="M16 1h-7v-1h-2v1h-7v11h5l-2 4h2.2l2-4h1.5l2 4h2.3l-2-4h5v-11zM15 11h-14v-9h14v9z"></path><path d="M6 4v5l4-2.5z"></path></g>
<g id="vaadin:print"><path d="M0 10v4h2v2h12v-2h2v-4h-16zM13 15h-10v-3h10v3z"></path><path d="M12 6v-4l-2.7-2h-5.3v6h-4v3h16v-3h-4zM9 1l1.3 1h-1.3v-1zM11 7h-6v-6h3v2h3v4zM15 8h-1v-1h1v1z"></path></g>
<g id="vaadin:progressbar"><path d="M0 5v6h16v-6h-16zM15 10h-14v-4h14v4z"></path><path d="M2 7h7v2h-7v-2z"></path></g>
<g id="vaadin:puzzle-piece"><path d="M14.9 0.9c-1.1-1-2.5-1.3-3.1-0.4-0.7 1.1 0.5 1.7-0.3 2.5-0.5 0.6-2-0.8-2-0.8l-0.8-0.8-1.4 1.4c-0.6 0.7-2.1 1.5-2.6 1.1-0.7-0.6 0.1-1.8-0.5-2.6-0.7-1-2.1-0.8-3 0.3-1 1.1-1.4 2.4-0.5 3 1.1 0.7 1.9-0.3 2.7 0.5 0.4 0.4-0.2 1.7-0.5 2.1l-2.3 2.3 6.5 6.5 1.7-1.7c0.7-0.7 1.5-2 1.1-2.4-0.6-0.7-1.7 0.1-2.5-0.4-1-0.7-0.8-2 0.3-3s2.5-1.3 3.1-0.4c0.7 1.1-0.4 1.8 0.4 2.6 0.4 0.4 1.6-0.2 2-0.6l2.1-2.1-1.1-1.1c-0.6-0.6-1.9-2-1.4-2.5 0.6-0.7 1.7 0.2 2.5-0.4 0.9-0.8 0.6-2.1-0.4-3.1z"></path></g>
<g id="vaadin:pyramid-chart"><path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path><path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path><path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path></g>
<g id="vaadin:qrcode"><path d="M6 0h-6v6h6v-6zM5 5h-4v-4h4v4z"></path><path d="M2 2h2v2h-2v-2z"></path><path d="M0 16h6v-6h-6v6zM1 11h4v4h-4v-4z"></path><path d="M2 12h2v2h-2v-2z"></path><path d="M10 0v6h6v-6h-6zM15 5h-4v-4h4v4z"></path><path d="M12 2h2v2h-2v-2z"></path><path d="M2 7h-2v2h3v-1h-1z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M3 7h2v1h-2v-1z"></path><path d="M9 12h-2v1h1v1h1v-1z"></path><path d="M6 7v1h-1v1h2v-2z"></path><path d="M8 4h1v2h-1v-2z"></path><path d="M9 8v1h2v-2h-3v1z"></path><path d="M7 6h1v1h-1v-1z"></path><path d="M9 14h2v2h-2v-2z"></path><path d="M7 14h1v2h-1v-2z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M9 3v-2h-1v-1h-1v4h1v-1z"></path><path d="M12 14h1v2h-1v-2z"></path><path d="M12 12h2v1h-2v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M14 10v1h1v1h1v-2h-1z"></path><path d="M15 13h-1v3h2v-2h-1z"></path><path d="M10 10v1h3v-2h-2v1z"></path><path d="M12 7v1h2v1h2v-2h-2z"></path></g>
<g id="vaadin:question-circle-o"><path d="M9 10h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.9 11h2v2h-2v-2z"></path></g>
<g id="vaadin:question-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8.9 13h-2v-2h2v2zM11 8.1c-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3z"></path></g>
<g id="vaadin:question"><path d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"></path><path d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:quote-left"><path d="M7 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path><path d="M16 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path></g>
<g id="vaadin:quote-right"><path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path><path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path></g>
<g id="vaadin:random"><path d="M13 12h-2c-1 0-1.7-1.2-2.4-2.7-0.3 0.7-0.6 1.5-1 2.3 0.8 1.4 1.8 2.4 3.4 2.4h2v2l3-3-3-3v2z"></path><path d="M5.4 6.6c0.3-0.7 0.6-1.5 1-2.2-0.8-1.4-1.9-2.4-3.4-2.4h-3v2h3c1 0 1.7 1.2 2.4 2.6z"></path><path d="M16 3l-3-3v2h-2c-2.7 0-3.9 3-5 5.7-0.8 2.1-1.7 4.3-3 4.3h-3v2h3c2.6 0 3.8-2.8 4.9-5.6 0.9-2.2 1.8-4.4 3.1-4.4h2v2l3-3z"></path></g>
<g id="vaadin:raster-lower-left"><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:raster"><path d="M7 7h1v1h-1v-1z"></path><path d="M5 7h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M5 5h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M6 4h1v1h-1v-1z"></path><path d="M4 4h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M5 3h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M6 2h1v1h-1v-1z"></path><path d="M4 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M9 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M10 4h1v1h-1v-1z"></path><path d="M8 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M11 3h1v1h-1v-1z"></path><path d="M9 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M10 2h1v1h-1v-1z"></path><path d="M8 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M4 10h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M5 9h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:records"><path d="M4 9h4v2h-4v-2z"></path><path d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path></g>
<g id="vaadin:recycle"><path d="M8 3.1l1.4 2.2-1.6 1.1 1.3 0.3 2.8 0.6 0.6-2.7 0.4-1.4-1.8 1.1-2-3.3h-2.2l-2.6 4.3 1.7 1z"></path><path d="M16 12l-2.7-4.3-1.7 1 2 3.3h-2.6v-2l-3 3 3 3v-2h3.7z"></path><path d="M2.4 12v0l1.4-2.3 1.7 1.1-0.9-4.2-2.8 0.7-1.3 0.3 1.6 1-2.1 3.4 1.3 2h5.7v-2z"></path></g>
<g id="vaadin:refresh"><path d="M2.6 5.6c0.9-2.1 3-3.6 5.4-3.6 3 0 5.4 2.2 5.9 5h2c-0.5-3.9-3.8-7-7.9-7-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.4-1.4z"></path><path d="M16 9h-4.1l1.5 1.4c-0.9 2.1-3 3.6-5.5 3.6-2.9 0-5.4-2.2-5.9-5h-2c0.5 3.9 3.9 7 7.9 7 3 0 5.6-1.7 7-4.1l1.1 1.1v-4z"></path></g>
<g id="vaadin:reply-all"><path d="M16 8c0-5-4.9-5-4.9-5h-2.1v-3l-6 6 6 6v-3h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path><path d="M0 6l6 6v-1.5l-4.5-4.5 4.5-4.5v-1.5z"></path></g>
<g id="vaadin:reply"><path d="M16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path></g>
<g id="vaadin:resize-h"><path d="M0 7h16v2h-16v-2z"></path><path d="M7 6h2v-3h2l-3-3-3 3h2z"></path><path d="M9 10h-2v3h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:resize-v"><path d="M7 0h2v16h-2v-16z"></path><path d="M3 5l-3 3 3 3v-2h3v-2h-3z"></path><path d="M16 8l-3-3v2h-3v2h3v2z"></path></g>
<g id="vaadin:retweet"><path d="M2 1h12v5h2l-3 3-3-3h2v-3h-8v2h-2z"></path><path d="M14 14h-12v-5h-2l3-3 3 3h-2v3h8v-2h2z"></path></g>
<g id="vaadin:rhombus"><path d="M8 0l-8 8 8 8 8-8-8-8zM2 8l6-6 6 6-6 6-6-6z"></path></g>
<g id="vaadin:road-branch"><path d="M16 4h-16v3h3.2l3.8 3.6c1.6 1.5 3.6 2.4 5.8 2.4h3.2v-3h-3.2c-1.4 0-2.7-0.5-3.7-1.5l-1.6-1.5h8.5v-3z"></path></g>
<g id="vaadin:road-branches"><path d="M16 4v-3h-16v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5h1.6v-3h-1.5c-1 0-1.9-0.5-2.7-1.4l-1.3-1.6h5.5v-3h-8l-2.4-3h10.4z"></path></g>
<g id="vaadin:road-split"><path d="M14 13v-1c0-0.2 0-4.1-2.8-5.4-2.2-1-2.2-3.5-2.2-3.6v-3h-2v3c0 0.1 0 2.6-2.2 3.6-2.8 1.3-2.8 5.2-2.8 5.4v1h-2l3 3 3-3h-2v-1c0 0 0-2.8 1.7-3.6 1.1-0.5 1.8-1.3 2.3-2 0.5 0.8 1.2 1.5 2.3 2 1.7 0.8 1.7 3.6 1.7 3.6v1h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:road"><path d="M9 11v4h7l-4-14h-3v3h-2v-3h-3l-4 14h7v-4h2zM7 6h2v3h-2v-3z"></path></g>
<g id="vaadin:rocket"><path d="M16 0c0 0-3.5-0.4-6.7 2.8-1.6 1.5-2.9 3.5-3.9 5.3l-2.5-0.6-1.6 1.6 2.8 1.4c-0.3 0.6-0.4 1-0.4 1l0.8 0.8c0 0 0.4-0.2 1-0.4l1.4 2.8 1.6-1.6-0.5-2.5c1.7-1 3.8-2.3 5.3-3.8 3.1-3.2 2.7-6.8 2.7-6.8zM12.8 4.8c-0.4 0.4-1.1 0.4-1.6 0-0.4-0.4-0.4-1.1 0-1.6 0.4-0.4 1.1-0.4 1.6 0 0.4 0.4 0.4 1.1 0 1.6z"></path><path d="M4 14.2c-0.8 0.8-2.6 0.4-2.6 0.4s-0.4-1.8 0.4-2.6c0.8-0.8 1.5-0.9 1.5-0.9s-1.3-0.3-2.1 0.6c-1.6 1.6-1 4.2-1 4.2s2.6 0.6 4.2-1c0.9-0.9 0.6-2.2 0.6-2.2s-0.2 0.7-1 1.5z"></path></g>
<g id="vaadin:rotate-left"><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:rotate-right"><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:rss-square"><path d="M0 0v16h16v-16h-16zM3.6 14c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.6 1.6-1.6 1.6zM7.6 14c0-3.1-2.5-5.6-5.6-5.6v-2.4c4.4 0 8 3.6 8 8h-2.4zM11.6 14c0-5.3-4.3-9.6-9.6-9.6v-2.4c6.6 0 12 5.4 12 12h-2.4z"></path></g>
<g id="vaadin:rss"><path d="M4.4 13.8c0 1.215-0.985 2.2-2.2 2.2s-2.2-0.985-2.2-2.2c0-1.215 0.985-2.2 2.2-2.2s2.2 0.985 2.2 2.2z"></path><path d="M10.6 16h-3.1c0-4.1-3.4-7.5-7.5-7.5v0-3.1c5.9 0 10.6 4.7 10.6 10.6z"></path><path d="M12.8 16c0-7.1-5.7-12.8-12.8-12.8v-3.2c8.8 0 16 7.2 16 16h-3.2z"></path></g>
<g id="vaadin:safe-lock"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11.13 14.25l-0.37-0.9-0.92 0.38 0.37 0.9c-0.659 0.23-1.419 0.363-2.21 0.363s-1.551-0.133-2.259-0.378l0.419-0.885-0.92-0.38-0.37 0.9c-1.355-0.69-2.43-1.765-3.102-3.080l0.882-0.41-0.38-0.93-0.9 0.37c-0.23-0.659-0.363-1.419-0.363-2.21s0.133-1.551 0.378-2.259l0.885 0.419 0.38-0.92-0.9-0.37c0.691-1.351 1.766-2.423 3.080-3.092l0.41 0.882 0.92-0.38-0.37-0.9c0.659-0.23 1.419-0.363 2.21-0.363s1.551 0.133 2.259 0.378l-0.419 0.885 0.92 0.38 0.37-0.9c1.355 0.69 2.43 1.765 3.102 3.080l-0.882 0.41 0.38 0.92 0.9-0.37c0.23 0.659 0.363 1.419 0.363 2.21s-0.133 1.551-0.378 2.259l-0.885-0.419-0.38 0.92 0.9 0.37c-0.69 1.355-1.765 2.43-3.080 3.102z"></path><path d="M10.36 3.62l-1.16 2.79c-0.329-0.253-0.746-0.407-1.199-0.41h0.279l1.15-2.77c-0.426-0.14-0.917-0.223-1.427-0.23-0.023-0-0.047-0-0.071-0-2.795 0-5.060 2.265-5.060 5.060s2.265 5.060 5.060 5.060c2.795 0 5.060-2.265 5.060-5.060 0-1.904-1.052-3.563-2.606-4.426z"></path></g>
<g id="vaadin:safe"><path d="M1 0v16h3v-1h8v1h3v-16h-14zM14 10h-1v-5h1v5zM14 3h-1v-1h-10v11h10v-1h1v2h-12v-13h12v2zM8.5 7.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"></path><path d="M7.5 7.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scale-unbalance"><path d="M15.81 9l-2.47-4.93 0.83-0.15c0.239-0.044 0.418-0.251 0.418-0.5 0-0.281-0.227-0.508-0.508-0.508-0.032 0-0.063 0.003-0.093 0.009l-0.777 0.14c-0.993-0.755-2.25-1.21-3.613-1.21-0.21 0-0.418 0.011-0.623 0.032-0.036-0.5-0.457-0.882-0.967-0.882-0.003 0-0.005 0-0.008 0-0.552 0-1 0.448-1 1v0.2c-1.714 0.336-3.151 1.327-4.066 2.697l-0.754 0.153c-0.257 0.024-0.457 0.239-0.457 0.5 0 0.277 0.225 0.502 0.502 0.502 0.016 0 0.032-0.001 0.047-0.002l0.088 0 0.35-0.050-2.52 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.56-5.12h0.1c0.172-0.031 0.311-0.144 0.379-0.297 0.021-0.093 0.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1v-11.12c0.201-0.031 0.434-0.049 0.67-0.049 1.152 0 2.205 0.419 3.016 1.114l-0.006-0.005-2.49 5.060h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 11h-4l2-3.94zM11 9l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scale"><path d="M15.81 10l-2.5-5h0.69c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.79c-1.056-1.145-2.541-1.881-4.198-1.95l-0.012-0.050c0-0.552-0.448-1-1-1s-1 0.448-1 1v0.050c-1.681 0.073-3.178 0.807-4.247 1.947l-0.753 0.003c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.69l-2.5 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.55-5.090c0.064-0.039 0.118-0.089 0.159-0.148 0.873-1.019 2.148-1.669 3.575-1.702l0.006 10.94h-1v1h-2v1h8v-1h-2v-1h-1v-10.94c1.418 0.030 2.679 0.682 3.524 1.693 0.053 0.084 0.117 0.145 0.193 0.186l-2.527 5.061h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 10h-4l2-3.94zM11 10l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scatter-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M5 11c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M14 5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scissors"><path d="M16 3.1c0 0-2.1-1.1-3.5-1-0.3 0-0.5 0.1-0.7 0.2l-4.3 3.4-1.8-1.5c0.1-0.3 0.2-0.6 0.3-1 0.1-1.8-1.4-3.4-3.3-3.2-1.2 0.1-2.3 1-2.6 2.2-0.3 1.3 0.2 2.5 1.2 3.2l3.3 2.6-3.3 2.6c-1 0.7-1.5 1.9-1.2 3.2 0.3 1.2 1.4 2 2.6 2.2 1.9 0.2 3.4-1.4 3.2-3.2 0-0.3-0.1-0.7-0.3-1l1.8-1.5 4.3 3.4c0.2 0.1 0.4 0.2 0.7 0.2 1.4 0.1 3.5-1 3.5-1l-5.7-4.9 5.8-4.9zM2.8 4.6c-0.9-0.1-1.6-0.9-1.5-1.8s0.9-1.6 1.8-1.5c0.9 0.1 1.6 0.9 1.5 1.8 0 0.9-0.9 1.6-1.8 1.5zM3.1 14.7c-0.9 0.1-1.7-0.6-1.8-1.5s0.6-1.7 1.5-1.8c0.9-0.1 1.7 0.6 1.8 1.5s-0.6 1.7-1.5 1.8zM12.4 3.2c0 0 0.1 0 0.2 0 0.4 0 0.9 0.1 1.4 0.2l-6.8 5.7-0.9-1.1 6.1-4.8zM14 12.6c-0.5 0.2-1 0.3-1.4 0.2-0.1 0-0.2 0-0.2 0l-4-3.2 1-0.9 4.6 3.9z"></path></g>
<g id="vaadin:screwdriver"><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:search-minus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M3 5h6v2h-6v-2z"></path></g>
<g id="vaadin:search-plus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M7 3h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></g>
<g id="vaadin:search"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path></g>
<g id="vaadin:select"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM12 9l-2-2h4l-2 2z"></path></g>
<g id="vaadin:server"><path d="M3 5v3h10v-3h-10zM7 7h-3v-1h3v1z"></path><path d="M3 4h10l-2-4h-6z"></path><path d="M3 12h10v-3h-10v3zM11 10h1v1h-1v-1zM9 10h1v1h-1v-1z"></path><path d="M3 16h10v-3h-10v3zM4 14h3v1h-3v-1z"></path></g>
<g id="vaadin:share-square"><path d="M11 3h-3.6c0 0-4.4-0.2-4.4 4.3 0 3.5 2 6.7 2 6.7s-0.4-7 2.3-7h3.7v3l5-5-5-5v3z"></path><path d="M14 9v6h-13v-13h9v-1h-10v15h15v-8z"></path></g>
<g id="vaadin:share"><path d="M10 3h-5.1c0 0-4.9 0-4.9 5 0 3.9 3 8 3 8s-1.7-7 1.8-7h5.2v3l6-6-6-6v3z"></path></g>
<g id="vaadin:shield"><path d="M1 0c0 0 0 3.2 0 7 0 5.6 7 9 7 9s7-3.4 7-9c0-3.8 0-7 0-7h-14zM14 7c0 4.2-4.6 7.1-6 7.9v-13.9h6v6z"></path></g>
<g id="vaadin:shift-arrow"><path d="M8 2l-7 7h4v5h6v-5h4zM10 8v5h-4v-5h-2.5l4.5-4.58 4.5 4.58h-2.5z"></path></g>
<g id="vaadin:shift"><path d="M0 2v12h16v-12h-16zM6 8v3h-2v-3h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:shop"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0v6c0.005 0.732 0.401 1.37 0.991 1.715l0.009 6.285h9v-5h3v5h2v-6.28c0.599-0.35 0.995-0.988 1-1.719v-6.001h-16zM4 2h2v4c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4zM2 7c-0.552 0-1-0.448-1-1v-4h2v4c0 0.552-0.448 1-1 1zM8 12h-5v-3h5v3zM9 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM12 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM15 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4z"></path></g>
<g id="vaadin:sign-in-alt"><path d="M0 0h2v16h-2v-16z"></path><path d="M3 10h8v3l5-5-5-5v3h-8z"></path></g>
<g id="vaadin:sign-in"><path d="M7 1v2l1 1v-2h7v12h-7v-2l-1 1v2h9v-14z"></path><path d="M10 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:sign-out-alt"><path d="M14 0h2v16h-2v-16z"></path><path d="M8 6h-8v4h8v3l5-5-5-5z"></path></g>
<g id="vaadin:sign-out"><path d="M9 4v-3h-9v14h9v-3h-1v2h-7v-12h7v2z"></path><path d="M16 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:signal"><path d="M6.9 13.2l1.1 1.1 1.1-1.1c-0.3-0.3-0.7-0.5-1.1-0.5s-0.9 0.2-1.1 0.5z"></path><path d="M8 4.6c2.7 0 5.1 1.1 6.9 2.8l1.1-1.1c-2-2-4.9-3.3-8-3.3s-6 1.3-8 3.3l1.1 1.1c1.8-1.7 4.2-2.8 6.9-2.8z"></path><path d="M2.3 8.6l1.1 1.1c1.2-1.1 2.8-1.8 4.6-1.8s3.4 0.7 4.6 1.9l1.1-1.1c-1.4-1.6-3.5-2.5-5.7-2.5s-4.3 0.9-5.7 2.4z"></path><path d="M4.6 10.9l1.1 1.1c0.6-0.6 1.4-0.9 2.3-0.9s1.7 0.4 2.3 0.9l1.1-1.1c-0.8-0.9-2.1-1.4-3.4-1.4s-2.6 0.5-3.4 1.4z"></path></g>
<g id="vaadin:sitemap"><path d="M14.5 12v-4.5h-6v-3.5h1.5v-4h-4v4h1.5v3.5h-6v4.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4z"></path></g>
<g id="vaadin:slider"><path d="M16 6h-3.6c-0.7-1.2-2-2-3.4-2s-2.8 0.8-3.4 2h-5.6v4h5.6c0.7 1.2 2 2 3.4 2s2.8-0.8 3.4-2h3.6v-4zM1 9v-2h4.1c0 0.3-0.1 0.7-0.1 1s0.1 0.7 0.1 1h-4.1zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.7-1.3 3-3 3z"></path></g>
<g id="vaadin:sliders"><path d="M7 0h2v3h-2v-3z"></path><path d="M6 4v3h1v9h2v-9h1v-3z"></path><path d="M2 0h2v8h-2v-8z"></path><path d="M1 9v3h1v4h2v-4h1v-3z"></path><path d="M12 0h2v10h-2v-10z"></path><path d="M11 11v3h1v2h2v-2h1v-3z"></path></g>
<g id="vaadin:smiley-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l0.9-0.4c0.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l0.9 0.4c-0.8 2-2.6 3.1-4.6 3.1z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:sort"><path d="M11 7h-6l3-4z"></path><path d="M5 9h6l-3 4z"></path></g>
<g id="vaadin:sound-disable"><path d="M4 5h-4v6h4l5 4v-14z"></path><path d="M15.9 5.6l-0.8-0.7-2.3 2.4-2.4-2.4-0.8 0.7 2.4 2.4-2.4 2.4 0.8 0.7 2.4-2.4 2.3 2.4 0.8-0.7-2.4-2.4z"></path></g>
<g id="vaadin:spark-line"><path d="M14 6c-1.105 0-2 0.895-2 2 0 0.060 0 0.11 0 0.16l-0.81 0.25-2.3-3.48-1.73 4.32-1.16-5.81-2.3 4.78-1.64-1.31-2.060 1.090v1.080l1.94-1 2.11 1.7 1.56-3.22 1.23 6.19 2.27-5.68 1.68 2.52 1.55-0.48c0.364 0.54 0.973 0.89 1.664 0.89 1.105 0 2-0.895 2-2s-0.895-2-2-2c-0.001 0-0.003 0-0.004 0zM14 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:specialist"><path d="M4.1 8c0.2 0.6 0.3 1.1 0.3 1.1 0.8 1.3 1.8 1.1 1.8 1.8 0 0.3-0.2 0.6-0.5 0.7l2.3 1.8 2.3-1.7c-0.3-0.2-0.5-0.4-0.5-0.7 0-0.8 1-0.5 1.8-1.8 0 0 0.2-0.4 0.3-1.1v0c0.3-1.1 0.6-3.1 0.5-4.1h-1.5c0-0.3 0.1-0.6 0.1-1h1.1c-0.3-1.4-1-2-2.2-2.3-0.5-0.4-1.2-0.7-1.9-0.7s-1.4 0.3-1.9 0.7c-1.2 0.3-1.8 0.9-2.2 2.3h1.1c0 0.4 0.1 0.7 0.2 1h-1.6c-0.1 1 0.2 3 0.5 4v0zM11.2 8.5c-0.1 0.1-0.2 0.2-0.3 0.3l-0.5 0.6c-0.4 0.5-0.8 0.8-1.4 0.9l-0.4 0.1c-0.4 0.1-0.9 0.1-1.4 0l-0.4-0.1c-0.6-0.2-1.1-0.5-1.5-1.1l-0.2-0.4c-0.1-0.1-0.2-0.2-0.3-0.3l-0.7-0.5 3.1-0.9c0.5-0.1 1-0.2 1.5 0l3.2 0.9-0.7 0.5zM6 3c0-1.1 0.9-2 2-2s2 0.9 2 2c0 1.1-0.9 2-2 2s-2-0.9-2-2z"></path><path d="M15.5 14.2c-1.3-2.4-2.6-2-3.9-2.2 0 0 0 0-0.1 0l-3.5 2.6-3.5-2.6c0 0 0 0-0.1 0-1.4 0.1-2.6-0.2-3.9 2.2-0.2 0.4-0.4 1.1-0.5 1.8h16c-0.1-0.7-0.3-1.4-0.5-1.8z"></path></g>
<g id="vaadin:spinner-arc"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7h-1c0 4 3.6 8 8 8s8-3.6 8-8h-1z"></path></g>
<g id="vaadin:spinner-third"><path d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z"></path></g>
<g id="vaadin:spinner"><path d="M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z"></path></g>
<g id="vaadin:spline-area-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M10 7c-2 0-2.080-1-4-1-2.34 0-4 3-4 3v5h14v-12c-2 0-3.86 5-6 5z"></path></g>
<g id="vaadin:spline-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M12 5c-0.69 1-1.41 2-2 2-0.026 0.001-0.056 0.001-0.087 0.001-0.601 0-1.164-0.16-1.65-0.44-0.623-0.35-1.387-0.562-2.2-0.562-0.022 0-0.045 0-0.067 0-1.6 0.116-3.009 0.864-3.991 1.993l-0.006 2.347c0.77-1.12 2.32-2.84 4-2.84 0.014-0 0.031-0 0.048-0 0.579 0 1.121 0.156 1.587 0.428 0.643 0.358 1.429 0.573 2.264 0.573 0.035 0 0.071-0 0.106-0.001 1.395 0 2.335-1.32 3.245-2.6s1.75-2.4 2.75-2.4v-1.5c-1.81 0-3 1.61-4 3z"></path></g>
<g id="vaadin:split-h"><path d="M0 1v14h16v-14h-16zM1 4h6.5v10h-6.5v-10zM15 14h-6.5v-10h6.5v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:split-v"><path d="M0 1v14h16v-14h-16zM14 2h1v1h-1v-1zM15 4v4.5h-14v-4.5h14zM1 14v-4.5h14v4.5h-14z"></path></g>
<g id="vaadin:split"><path d="M0 11h6v5h-6v-5z"></path><path d="M11 10v-2l-0.64 0.64c-0.851-0.81-1.38-1.952-1.38-3.217 0-0.149 0.007-0.296 0.022-0.441l1.999 0.018v-5h-6v5h2c0.013 0.127 0.020 0.274 0.020 0.423 0 1.265-0.529 2.407-1.378 3.216l-0.642-0.638v2h2l-0.65-0.65c1.028-0.991 1.667-2.38 1.667-3.919 0-0.152-0.006-0.302-0.018-0.45-0.010 0.149-0.016 0.299-0.016 0.45 0 1.539 0.639 2.928 1.665 3.917l-0.648 0.652h2z"></path><path d="M10 11h6v5h-6v-5z"></path></g>
<g id="vaadin:spoon"><path d="M10.5 4.8c0-1.8-0.9-4.8-3-4.8s-3 3-3 4.8c0 1.5 0.8 2.8 2.2 3.1-0.5 1.6-0.7 4.6-0.7 4.6v2c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-2c0-0.6-0.2-3.2-0.7-4.6 1.4-0.3 2.2-1.6 2.2-3.1z"></path></g>
<g id="vaadin:square-shadow"><path d="M14 2v-2h-14v14h2v2h14v-14h-2zM13 13h-12v-12h12v12z"></path></g>
<g id="vaadin:star-half-left-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8v-9.1l1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star-half-left"><path d="M5.6 5.4l-5.5 0.8 3.9 3.8-0.9 5.5 4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-half-right-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM4.4 13.7l0.7-4-2.9-2.8 4-0.6 1.8-3.6v9.1l-3.6 1.9z"></path></g>
<g id="vaadin:star-half-right"><path d="M10.5 5.4l5.5 0.8-4 3.8 0.9 5.5-4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8l-3.6 1.9 0.7-4-2.9-2.8 4-0.6 1.8-3.6 1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star"><path d="M12.9 15.4l-4.9-2.6-4.9 2.6 0.9-5.4-4-3.9 5.5-0.8 2.4-5 2.4 5 5.5 0.8-3.8 3.9 0.9 5.4z"></path></g>
<g id="vaadin:start-cog"><path d="M4 0v6h1.7l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v0.2l6.1-3.4-12-7z"></path><path d="M4.5 10.5c-0.2 0-0.4 0.1-0.5 0.2-0.3 0.2-0.5 0.5-0.5 0.8s0.2 0.7 0.5 0.8c0.1 0.1 0.3 0.2 0.5 0.2 0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path><path d="M9 12v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.3 0.3-0.6 0.4-0.9l1.1-0.3zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:step-backward"><path d="M14 15v-14l-10 7z"></path><path d="M2 1h2v14h-2v-14z"></path></g>
<g id="vaadin:step-forward"><path d="M2 1v14l10-7z"></path><path d="M12 1h2v14h-2v-14z"></path></g>
<g id="vaadin:stethoscope"><path d="M5.7 15.2c0.3 0.3 1 0.8 1.8 0.8 2.7 0 3.3-2 3.4-3.6 0.2-2.3 0.8-2.2 1.1-2.2 0.7 0 0.9 0.4 0.9 1.1-0.6 0.4-1 1-1 1.7 0 1.1 0.9 2 2 2s2-0.9 2-2-0.9-2-2-2c-0.1 0-0.1 0-0.2 0-0.2-0.9-0.7-1.8-1.8-1.8-1.6 0-2 1.4-2.1 2.9-0.1 2.1-0.8 2.9-2.3 2.9-0.4 0-0.8-0.2-1-0.4-0.6-0.5-0.5-2.3-0.5-2.3 2 0 4-1.8 4.7-4.8l-0.2-0.1c0.3-1.2 0.5-2.6 0.5-3.6 0-1.1-0.3-1.9-1-2.5s-1.5-0.8-2.1-0.8c-0.2-0.3-0.5-0.5-0.9-0.5-0.5 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5 0.5 0 1 0.2 1.5 0.6s0.7 0.9 0.7 1.7c0 0.9-0.2 2.2-0.5 3.5l-0.2-0.1c-0.3 1.1-1.3 3.6-3.3 3.6h-1c-2 0-3-2.5-3.3-3.6l-0.2 0.1c-0.3-1.3-0.5-2.6-0.5-3.5 0-0.8 0.2-1.3 0.7-1.7 0.4-0.4 1-0.5 1.5-0.6 0.1 0.3 0.4 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.9 0.5-0.6 0-1.4 0.2-2.1 0.8s-1 1.4-1 2.5c0 1 0.2 2.4 0.5 3.7l-0.2 0.1c0.7 2.9 2.7 4.7 4.7 4.7 0 0-0.1 2.2 0.7 2.9zM14 14c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.5 1-1 1z"></path></g>
<g id="vaadin:stock"><path d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path><path d="M0 16h3v-1h10v1h3v-2h-16v2z"></path></g>
<g id="vaadin:stop-cog"><path d="M1 0v7.2l0.5-0.5 1.2 0.6c0 0 0.1 0 0.1 0l0.2-0.6 0.3-0.7h2.4l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v2.4l-0.7 0.2-0.6 0.2c0 0 0 0.1 0 0.1l0.6 1.2-0.4 0.7h7.2v-15h-15z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:stop"><path d="M1 1h14v14h-14v-14z"></path></g>
<g id="vaadin:stopwatch"><path d="M8.5 8.14v-3.64h-1v3.64c-0.301 0.176-0.5 0.498-0.5 0.866 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.368-0.199-0.69-0.495-0.863z"></path><path d="M8 2c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7zM8 14.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5-0.006 3.035-2.465 5.494-5.499 5.5z"></path><path d="M6 0h4v1.5h-4v-1.5z"></path><path d="M0.005 4.438l2.713-2.939 1.102 1.017-2.713 2.939-1.102-1.017z"></path><path d="M12.186 2.519l1.102-1.017 2.713 2.939-1.102 1.017-2.713-2.939z"></path></g>
<g id="vaadin:storage"><path d="M16 4l-8.060-4-7.94 4v1h1v11h2v-9h10v9h2v-11h1v-1zM4 6v-1h2v1h-2zM7 6v-1h2v1h-2zM10 6v-1h2v1h-2z"></path><path d="M6 9h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M6 13h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M10 13h-1v-1h-1v3h3v-3h-1v1z"></path></g>
<g id="vaadin:strikethrough"><path d="M10.5 7c-0.5-0.3-1-0.5-1.4-0.7-2-0.9-2.1-1.1-2-1.9s0.4-1 0.6-1.2c0.9-0.5 2.8-0.1 3.5 0.2l1.1-2.8c-0.4-0.2-3.7-1.4-6.1 0-0.8 0.5-1.9 1.5-2.1 3.4-0.2 1.3 0.1 2.3 0.7 3h-4.8v1h16v-1h-5.5z"></path><path d="M7.7 9c0 0 0.1 0 0.1 0.1 2 0.9 2.4 1.2 2.2 2.5-0.2 0.9-0.5 1.1-0.8 1.3-1.1 0.6-3.3 0-4.4-0.5l-1.2 2.6c0.3 0.1 2.3 1 4.5 1 0.9 0 1.8-0.2 2.6-0.6 0.9-0.5 2-1.4 2.4-3.4 0.2-1.3 0-2.3-0.4-3.1h-5z"></path></g>
<g id="vaadin:subscript"><path d="M16 15v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:suitcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM4 14h-1v-10h1v10zM10 3h-4v-1h4v1zM13 14h-1v-10h1v10z"></path></g>
<g id="vaadin:sun-down"><path d="M10 3h-1v-2h-2v2h-1l2 3 2-3z"></path><path d="M14 13l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:sun-o"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path></g>
<g id="vaadin:sun-rise"><path d="M6 4h1v2h2v-2h1l-2-3-2 3z"></path><path d="M12.42 11.82l0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:superscript"><path d="M16 5v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:sword"><path d="M15.8 0.5l-0.1-0.2-0.2-0.1c-0.1 0-2.5-0.8-4.2 0.9l-6.7 6.6c-0.9-0.6-1.7-1.2-1.8-1l-0.4 0.3c-0.2 0.2 0.9 1.7 1.8 2.7l-2.5 3.4c-0.3-0.3-0.8-0.3-1.1 0l-0.3 0.3c-0.3 0.3-0.3 0.8 0 1.1l1 1c0.3 0.3 0.8 0.3 1.1 0l0.3-0.3c0.3-0.3 0.3-0.8 0-1.1v0l3.5-2.5c1 0.9 2.5 2 2.7 1.8l0.4-0.4c0.1-0.1-0.4-1-1.1-1.8l6.7-6.7c1.7-1.5 0.9-3.9 0.9-4zM7.7 10.5l-0.8-0.8 6.2-6.9-6.9 6.2-0.7-0.7 6.5-6.5c1-1 2.3-0.8 2.9-0.7 0.1 0.6 0.3 1.9-0.7 2.8l-6.5 6.6z"></path></g>
<g id="vaadin:tab-a"><path d="M9 10h-9v-4h9v-2l5 4-5 4v-2z"></path><path d="M14 4h2v8h-2v-8z"></path></g>
<g id="vaadin:tab"><path d="M0 2v12h16v-12h-16zM13 11h-1v-3l-3 3v-2h-6v-2h6v-2l3 3v-3h1v6z"></path></g>
<g id="vaadin:table"><path d="M0 1v15h16v-15h-16zM5 15h-4v-2h4v2zM5 12h-4v-2h4v2zM5 9h-4v-2h4v2zM5 6h-4v-2h4v2zM10 15h-4v-2h4v2zM10 12h-4v-2h4v2zM10 9h-4v-2h4v2zM10 6h-4v-2h4v2zM15 15h-4v-2h4v2zM15 12h-4v-2h4v2zM15 9h-4v-2h4v2zM15 6h-4v-2h4v2z"></path></g>
<g id="vaadin:tablet"><path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path></g>
<g id="vaadin:tabs"><path d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z"></path></g>
<g id="vaadin:tag"><path d="M8 1h-7v7l7 7 7-7zM3.75 5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25z"></path></g>
<g id="vaadin:tags"><path d="M9 2h-1.5l7 7-5.3 5.2 0.8 0.8 6-6z"></path><path d="M6 2h-6v6l7 7 6-6-7-7zM2.8 6c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.2 1.2-1.2 1.3 0.5 1.3 1.2-0.6 1.2-1.2 1.2z"></path></g>
<g id="vaadin:tasks"><path d="M6 0h10v4h-10v-4z"></path><path d="M6 6h10v4h-10v-4z"></path><path d="M6 12h10v4h-10v-4z"></path><path d="M3 1v2h-2v-2h2zM4 0h-4v4h4v-4z"></path><path d="M3 13v2h-2v-2h2zM4 12h-4v4h4v-4z"></path><path d="M5.3 5.9l-0.6-0.8-0.9 0.9h-3.8v4h4v-2.8l1.3-1.3zM2.7 7l-0.7 0.7-0.8-0.7h1.5zM1 8.2l0.9 0.8h-0.9v-0.8zM3 9h-0.9l0.9-0.9v0.9z"></path></g>
<g id="vaadin:taxi"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-2-1.2h-0.6v-1.3c0-0.4-0.3-0.7-0.7-0.7h-4.6c-0.4 0-0.7 0.3-0.7 0.7v1.3h-0.7c-0.8 0-1.6 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0 1.1 1 1.2v2c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-1.9h8v1.9c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c1-0.1 1-0.6 1-1.2v-3.5c0-0.5-0.4-1-1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:teeth"><path d="M4.6 7.6c-0.1 0.1-0.5 0.4-1.6 0.4 1.1 0 1.5 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.5-0.4-0.9 0-1.3-0.2-1.5-0.4z"></path><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM13.1 11.6c-1 0-1.4-0.8-1.6-1.6-0.2 0.9-0.6 2-1.8 2-1.1 0-1.5-1.1-1.7-2-0.2 1-0.6 2-1.7 2s-1.6-1.1-1.8-2c-0.2 0.8-0.6 1.6-1.6 1.6-2 0-1.9-3-1.9-3s0.2-0.6 1.7-0.6c-1.5 0-1.7-0.5-1.7-0.5s-0.1-3 1.9-3c1 0 1.4 0.8 1.6 1.6 0.2-0.9 0.6-2 1.8-2 1.1-0.1 1.5 1 1.7 1.9 0.2-1 0.6-2 1.7-2s1.6 1.1 1.8 2c0.2-0.8 0.6-1.6 1.6-1.6 2 0 1.9 3 1.9 3s-0.3 0.6-1.8 0.6c-1.2 0-1.6-0.3-1.8-0.4-0.2 0.2-0.7 0.4-1.6 0.4-1.2 0-1.6-0.2-1.8-0.4-0.1 0.1-0.6 0.4-1.6 0.4 1 0 1.4 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.8-0.4 1 0 1.4 0.2 1.7 0.4 0-0.1 0.5-0.4 1.7-0.4 1.5 0 1.8 0.6 1.8 0.6s0.1 3-1.9 3z"></path></g>
<g id="vaadin:terminal"><path d="M6 12h9v1h-9v-1z"></path><path d="M1.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path></g>
<g id="vaadin:text-height"><path d="M15 3h1l-1.5-3-1.5 3h1v10h-1l1.5 3 1.5-3h-1z"></path><path d="M1 0v3h4v13h3v-13h4v-3z"></path></g>
<g id="vaadin:text-input"><path d="M2 2h1v4h-1v-4z"></path><path d="M1 0c-0.6 0-1 0.4-1 1v14c0 0.6 0.4 1 1 1h15v-16h-15zM13 15h-12v-14h12v14zM15 15v0h-1v-1h1v1zM15 13h-1v-10h1v10zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:text-label"><path d="M12.5 4.9c-1.4 0-2.5 0.8-2.6 0.9l1.2 1.6c0 0 0.7-0.5 1.4-0.5 1.4 0 1.5 1.2 1.5 1.6-0.4-0.1-1.1-0.3-2-0.1-1.4 0.3-2.8 2-2.1 3.9 0.7 1.8 3.1 2.1 4.1 0.6v1h2v-5.3c0-2.7-1.9-3.7-3.5-3.7zM11.5 11.4c-0.1-1.9 1.5-1.9 2.5-1.8v1c0 1.2-2.3 2.3-2.5 0.8z"></path><path d="M6.9 14h2.1l-3.2-12h-2.7l-3.1 12h2.1l1-4h2.7l1.1 4zM3.6 8l0.8-3.2 0.9 3.2h-1.7z"></path></g>
<g id="vaadin:text-width"><path d="M15 14.5l-3-1.5v1h-9v-1l-3 1.5 3 1.5v-1h9v1z"></path><path d="M0 0v3h6v9h3v-9h6v-3z"></path></g>
<g id="vaadin:thin-square"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:thumbs-down-o"><path d="M15.6 7.3c0.1-0.3 0.3-0.7 0.2-1.2 0-0.6-0.3-1.1-0.5-1.3 0.1-0.3 0.1-0.6 0-1.1s-0.4-0.8-0.6-1c0.1-0.3 0.1-0.8-0.3-1.4-0.4-1-1.2-1.3-3.6-1.3-1.7 0-3.3 0.8-4.6 1.5-0.4 0.2-1 0.5-1.2 0.5v0h-5v9h5v-0.9l2.7 2.7 1 2.8c0.2 0.2 0.4 0.4 0.8 0.4h0.1c0 0 0 0 0 0 0.5 0 2-0.1 2.4-1.9 0.2-0.9-0.1-2.2-0.5-3.1h2.3c0.7-0.1 2.1-0.6 2.2-2.1 0-0.7-0.2-1.3-0.4-1.6zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1zM13.8 10h-2.5c-0.3 0-0.5 0.1-0.7 0.4-0.2 0.2-0.2 0.5-0.1 0.8 0.5 1.2 0.7 2.2 0.6 2.8-0.2 0.9-0.9 1.1-1.4 1.1l-1-2.7c0-0.1-0.1-0.2-0.2-0.3l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2h-0.1v-6c0.4 0 0.8-0.2 1.7-0.6 1.1-0.6 2.7-1.4 4.1-1.4 2.5 0 2.7 0.4 2.9 0.7 0.3 0.5 0.1 0.9 0.1 0.9l-0.2 0.4 0.4 0.3c0 0 0.4 0.2 0.5 0.7 0.1 0.4 0 0.7 0 0.7l-0.3 0.3 0.3 0.3c0 0 0.4 0.3 0.4 0.9 0 0.5-0.2 0.7-0.2 0.7l-0.4 0.3 0.4 0.4c0 0 0.4 0.4 0.3 1.2 0 1.1-1.1 1.2-1.2 1.2z"></path></g>
<g id="vaadin:thumbs-down"><path d="M15.6 7.8c0 0 0.5 0.5 0.4 1.6 0 1.5-1.6 1.6-1.6 1.6h-2.4c-0.2 0-0.3 0.2-0.3 0.4 0.3 0.7 0.8 2.1 0.6 3.1-0.3 1.4-1.5 1.5-1.9 1.5-0.1 0-0.2-0.1-0.2-0.2l-1-2.8c0 0 0-0.1-0.1-0.1l-2.6-2.8c-0.1-0.1-0.2-0.1-0.3-0.1h-0.2v-7h0.2c0.7 0 3.2-2 5.4-2s2.7 0.3 3.1 1c0.4 0.7 0.1 1.3 0.1 1.3s0.5 0.3 0.6 1c0.1 0.7-0.1 1.1-0.1 1.1s0.5 0.4 0.5 1.2c0.1 0.9-0.2 1.2-0.2 1.2z"></path><path d="M0 11h5v-8h-5v8zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:thumbs-up-o"><path d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"></path></g>
<g id="vaadin:thumbs-up"><path d="M15.6 8.2c0 0 0.5-0.5 0.4-1.6 0-1.5-1.6-1.6-1.6-1.6h-2.4c-0.2 0-0.3-0.2-0.3-0.4 0.3-0.7 0.8-2.1 0.6-3.1-0.3-1.4-1.5-1.5-1.9-1.5-0.1 0-0.2 0.1-0.2 0.2l-1 2.8c0 0 0 0.1-0.1 0.1l-2.6 2.8c-0.1 0.1-0.2 0.1-0.3 0.1h-0.2v7h0.2c0.7 0 3.2 2 5.4 2s2.7-0.3 3.1-1c0.4-0.7 0.1-1.3 0.1-1.3s0.5-0.3 0.6-1c0.1-0.7-0.1-1.1-0.1-1.1s0.5-0.4 0.5-1.2c0.1-0.9-0.2-1.2-0.2-1.2z"></path><path d="M0 14h5v-8h-5v8zM2.5 10.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:ticket"><path d="M14 3h-12c0 1.1-0.9 2-2 2v6c1.1 0 2 0.9 2 2h12c0-1.1 0.9-2 2-2v0-6c-1.1 0-2-0.9-2-2zM13 12h-10v-8h10v8z"></path><path d="M4 5h8v6h-8v-6z"></path></g>
<g id="vaadin:time-backward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:time-forward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:timer"><path d="M9.060 9.060c0.271-0.271 0.439-0.646 0.439-1.060s-0.168-0.789-0.439-1.060c-0.59-0.59-6.72-4.6-6.72-4.6s4 6.13 4.59 6.72c0.272 0.274 0.649 0.444 1.065 0.444s0.793-0.17 1.065-0.444z"></path><path d="M8 0v3h1v-1.41c3.153 0.495 5.536 3.192 5.536 6.445 0 3.601-2.919 6.52-6.52 6.52s-6.52-2.919-6.52-6.52c0-1.256 0.355-2.428 0.97-3.423l-0.916-1.322c-0.958 1.303-1.533 2.939-1.533 4.71 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8-0.006 0-0.012 0-0.017 0z"></path></g>
<g id="vaadin:toolbox"><path d="M0 8h6v2h4v-2h6v6h-16z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M11 4v-2h-6v2h-5v3h6v-1h4v1h6v-3h-5zM6 4v-1h4v1h-4z"></path></g>
<g id="vaadin:tools"><path d="M10.3 8.2l-0.9 0.9 0.9 0.9-1.2 1.2 4.3 4.3c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1l-5.2-5.2zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path><path d="M3.6 8l0.9-0.6 1.5-1.7 0.9 0.9 0.9-0.9-0.1-0.1c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.1 1.6 3.7 3.6 4z"></path><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:tooth"><path d="M11.3 16c-1.2 0-1.7-3.9-1.7-4.1-0.1-1.3-1-2.1-1.6-2.2-0.6 0-1.4 0.9-1.6 2.2 0 0.2-0.5 4.1-1.7 4.1s-1.8-4.4-1.9-4.4c-0.2-1.4 0.1-3.4 0.2-4-0.4-1.2-1.8-5.6-0.5-7 0.5-0.4 1.1-0.6 1.9-0.6 0.6 0 1.3 0.1 2 0.3 0.6 0.1 1.1 0.2 1.6 0.2s1-0.1 1.6-0.2c0.7-0.2 1.4-0.3 2-0.3 0.8 0 1.4 0.2 1.8 0.7 1.3 1.4-0.1 5.8-0.5 7 0.1 0.5 0.4 2.5 0.2 3.9 0.1 0-0.5 4.4-1.8 4.4zM8 8.7c1.3 0.1 2.4 1.4 2.6 3.1 0.1 1.2 0.5 2.4 0.7 2.9 0.3-0.6 0.7-2.1 0.9-3.3 0.2-1.4-0.2-3.7-0.2-3.7v-0.2c0.7-2.1 1.4-5.3 0.8-6.1-0.3-0.3-0.7-0.4-1.2-0.4s-1.2 0.1-1.8 0.3c-0.6 0.1-1.2 0.2-1.8 0.2s-1.2-0.1-1.8-0.2c-0.6-0.2-1.3-0.3-1.8-0.3s-0.9 0.1-1.1 0.4c-0.7 0.7 0 4 0.8 6.1v0.2c0 0-0.4 2.3-0.2 3.7 0.2 1.2 0.6 2.7 0.9 3.3 0.2-0.6 0.6-1.7 0.7-2.9 0.1-1.6 1.2-3 2.5-3.1z"></path></g>
<g id="vaadin:touch"><path d="M12.62 6c-0.093-0.023-0.2-0.036-0.31-0.036s-0.217 0.013-0.319 0.038c-0.045-0.33-0.192-0.616-0.402-0.843-0.257-0.259-0.614-0.42-1.008-0.42-0.018 0-0.036 0-0.053 0.001-0-0-0.004-0-0.007-0-0.22 0-0.43 0.044-0.621 0.124-0.062-0.183-0.163-0.336-0.29-0.464-0.261-0.25-0.617-0.403-1.008-0.403-0.036 0-0.072 0.001-0.107 0.004l0.005-0c0.315-0.414 0.505-0.938 0.505-1.506 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 0.813 0.388 1.535 0.989 1.992l0.006 2.664c-0.554 0.015-1.054 0.233-1.432 0.581-0.568 0.619-0.568 1.579-0.568 2.779 0 0.23 0 0.47 0 0.72 0.032 1.127 0.573 2.121 1.402 2.764l0.358 0.356c1.24 1.27 2.38 1.65 5.020 1.65 2.88 0 4.22-1.61 4.22-5.060v-2.51c0-0.77-0.22-2.12-1.38-2.43zM13 8.35v2.59c0 3.37-1.29 4.060-3.22 4.060-2.6 0-3.4-0.39-4.3-1.33l-0.36-0.37c-0.657-0.468-1.088-1.215-1.12-2.065-0-0.265-0-0.505-0-0.735-0.033-0.178-0.053-0.383-0.053-0.592 0-0.538 0.126-1.047 0.351-1.498 0.186-0.132 0.431-0.228 0.698-0.24l0.003 0.7v-0.22l-0.34 1.5c-0.010 0.022-0.016 0.048-0.016 0.075 0 0.103 0.083 0.186 0.186 0.186 0.075 0 0.14-0.045 0.17-0.11l1-1.211c0.003-0.014 0.005-0.029 0.005-0.045s-0.002-0.031-0.005-0.046l0-5.609c-0-0.012-0.001-0.026-0.001-0.039 0-0.256 0.083-0.492 0.223-0.684 0.091-0.096 0.223-0.158 0.369-0.158 0.010 0 0.020 0 0.030 0.001-0.001-0-0.001-0-0.001-0 0.21 0 0.38 0.17 0.38 0.38 0 0.004-0 0.007-0 0.011l0 3.869c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.32c0.010-0.251 0.217-0.451 0.47-0.451 0.011 0 0.021 0 0.032 0.001 0.023-0.005 0.051-0.008 0.079-0.008 0.232 0 0.42 0.188 0.42 0.42 0 0.010-0 0.020-0.001 0.029l0 1.329c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.64c0.034-0.218 0.22-0.383 0.445-0.383 0.019 0 0.038 0.001 0.057 0.004 0.013-0.002 0.030-0.003 0.047-0.003 0.112 0 0.214 0.043 0.291 0.113 0.1 0.129 0.16 0.294 0.16 0.473 0 0.006-0 0.012-0 0.017l0 0.819c0.003 0.252 0.193 0.459 0.438 0.49 0.021 0.003 0.043 0.004 0.066 0.004 0.241 0 0.442-0.166 0.496-0.39 0.026-0.112 0.082-0.204 0.16-0.273 0.033-0.015 0.071-0.024 0.111-0.024s0.078 0.009 0.112 0.024c0.38 0.249 0.628 0.674 0.628 1.157 0 0.057-0.003 0.113-0.010 0.169l0.001-0.007z"></path></g>
<g id="vaadin:train"><path d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path></g>
<g id="vaadin:trash"><path d="M13 3s0-0.51-2-0.8v-0.7c-0.017-0.832-0.695-1.5-1.53-1.5-0 0-0 0-0 0h-3c-0.815 0.017-1.47 0.682-1.47 1.5 0 0 0 0 0 0v0.7c-0.765 0.068-1.452 0.359-2.007 0.806l-0.993-0.006v1h12v-1h-1zM6 1.5c0.005-0.274 0.226-0.495 0.499-0.5l3.001-0c0 0 0.001 0 0.001 0 0.282 0 0.513 0.22 0.529 0.499l0 0.561c-0.353-0.042-0.763-0.065-1.178-0.065-0.117 0-0.233 0.002-0.349 0.006-0.553-0-2.063-0-2.503 0.070v-0.57z"></path><path d="M2 5v1h1v9c1.234 0.631 2.692 1 4.236 1 0.002 0 0.003 0 0.005 0h1.52c0.001 0 0.003 0 0.004 0 1.544 0 3.002-0.369 4.289-1.025l-0.054-8.975h1v-1h-12zM6 13.92q-0.51-0.060-1-0.17v-6.75h1v6.92zM9 14h-2v-7h2v7zM11 13.72c-0.267 0.070-0.606 0.136-0.95 0.184l-0.050-6.904h1v6.72z"></path></g>
<g id="vaadin:tree-table"><path d="M6 10v-2h-2v-1h1v-2h-3v2h1v6h3v-2h-2v-1z"></path><path d="M0 0v16h16v-16h-16zM7 15h-6v-12h6v12zM11 15h-3v-12h3v12zM15 15h-3v-12h3v12z"></path></g>
<g id="vaadin:trending-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-up"><path d="M16 2h-4l1.29 1.29-4.29 4.3-3-3-6 6v2.82l6-6 3 3 5.71-5.7 1.28 1.29 0.010-4z"></path></g>
<g id="vaadin:trophy"><path d="M11.7 8c4.2-0.3 4.3-2.7 4.3-5h-3v-3h-10v3h-3c0 2.3 0.1 4.7 4.3 5 0.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8c0 0 0-2-3-2v-4c0.6 0 1.8-0.6 2.7-2zM13 4h2c-0.1 1.6-0.4 2.7-2.7 2.9 0.3-0.8 0.6-1.7 0.7-2.9zM1 4h2c0.1 1.2 0.4 2.1 0.7 2.9-2.2-0.2-2.6-1.3-2.7-2.9zM4.5 6.1c-0.5-1.7-0.5-3.1-0.5-3.1v-2h1v2c0 0 0 1.7 0.4 3.1 0.5 1.7 1.6 2.9 1.6 2.9s-1.8-0.2-2.5-2.9z"></path></g>
<g id="vaadin:truck"><path d="M6 3h10v7h-10v-7z"></path><path d="M15 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13 11c1.3 0 2.4 0.8 2.8 2h0.2v-2h-3z"></path><path d="M5 5h-4l-1 4v4h1.2c0.4-1.2 1.5-2 2.8-2s2.4 0.8 2.8 2h3.4c0.4-1.2 1.5-2 2.8-2h-8v-6zM4 9h-3l0.8-3h2.2v3z"></path><path d="M6 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:twin-col-select"><path d="M0 2v12h16v-12h-16zM7 13h-6v-10h6v10zM15 13h-6v-10h6v10z"></path><path d="M10 4h4v1h-4v-1z"></path><path d="M2 4h4v1h-4v-1z"></path><path d="M2 6h4v1h-4v-1z"></path><path d="M2 8h4v1h-4v-1z"></path></g>
<g id="vaadin:twitter-square"><path d="M0 0v16h16v-16h-16zM12.8 5.6c0 0.1 0 0.2 0 0.3 0 3.3-2.5 7-7 7-1.4 0-2.7-0.4-3.8-1.1 0.2 0 0.4 0 0.6 0 1.2 0 2.2-0.4 3.1-1.1-1.1 0-2-0.7-2.3-1.7 0.2 0 0.3 0 0.5 0s0.4 0 0.6-0.1c-1.1-0.2-2-1.2-2-2.4 0 0 0 0 0 0 0.3 0.2 0.7 0.3 1.1 0.3-0.7-0.4-1.1-1.2-1.1-2 0-0.5 0.1-0.9 0.3-1.2 1.2 1.5 3.1 2.4 5.1 2.5 0-0.2-0.1-0.4-0.1-0.6 0-1.4 1.1-2.5 2.5-2.5 0.7 0 1.3 0.3 1.8 0.8 0.6-0.1 1.1-0.3 1.6-0.6-0.2 0.6-0.6 1.1-1.1 1.4 0.5-0.1 1-0.2 1.4-0.4-0.3 0.6-0.7 1-1.2 1.4z"></path></g>
<g id="vaadin:twitter"><path d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z"></path></g>
<g id="vaadin:umbrella"><path d="M5.36 0.9l-0.27-0.57c-0.083-0.197-0.275-0.333-0.499-0.333-0.1 0-0.193 0.027-0.274 0.074-0.217 0.074-0.372 0.279-0.372 0.52 0 0.087 0.020 0.169 0.056 0.242l0.319 0.577c-6.2 3.49-3.9 10.59-3.9 10.59h0.060c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21l0.12-0.060c0.477-0.742 0.998-1.387 1.58-1.97l3.37 7.070c0.246 0.619 0.729 1.098 1.334 1.335 0.168 0.053 0.343 0.080 0.524 0.080 0.254 0 0.495-0.053 0.713-0.149l0.359-0.176c0.263-0.145 0.462-0.38 0.558-0.662 0.117-0.276 0.183-0.586 0.183-0.913 0-0.401-0.1-0.778-0.277-1.108-0.102-0.189-0.311-0.324-0.551-0.324-0.076 0-0.149 0.014-0.217 0.038-0.182 0.089-0.308 0.277-0.308 0.495 0 0.093 0.023 0.18 0.064 0.257s0.529 1.067-0.101 1.337-1.19-0.73-1.19-0.73l-3.42-7.060c0.372-0.043 0.803-0.067 1.24-0.067s0.868 0.024 1.292 0.072l0.068-0.065c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21h0.060s-3.98-6.41-10.62-3.58zM7.36 6.36c-1.034 0.399-1.834 1.209-2.211 2.224-0.55-1.082-0.909-2.375-1.007-3.74-0.142-2.244 0.608-2.924 0.608-2.924l0.77-0.32c1.084 0.101 2.052 0.534 2.816 1.195 0.976 0.895 1.747 2.009 2.233 3.265-0.339-0.021-0.752-0.067-1.175-0.067-0.724 0-1.417 0.134-2.054 0.379z"></path></g>
<g id="vaadin:underline"><path d="M2 15h12v1h-12v-1z"></path><path d="M11 0v8.4c0 1.5-1.1 2.6-2.6 2.6h-0.8c-1.5 0-2.6-1.1-2.6-2.6v-8.4h-3v8.4c0 3.1 2.5 5.6 5.6 5.6h0.9c3.1 0 5.6-2.5 5.6-5.6v-8.4h-3.1z"></path></g>
<g id="vaadin:unlink"><path d="M8 0h1v4h-1v-4z"></path><path d="M8 12h1v4h-1v-4z"></path><path d="M7 9h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h4v-2z"></path><path d="M13 5h-4v2h4c0.552 0 1 0.448 1 1s-0.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3s-1.343-3-3-3z"></path><path d="M4.51 15.44l2.49-3.44h-1.23l-2.080 2.88 0.82 0.56z"></path><path d="M12.49 15.44l-2.49-3.44h1.23l2.080 2.88-0.82 0.56z"></path><path d="M12.49 0.99l-2.49 3.010h1.23l2.080-2.66-0.82-0.35z"></path><path d="M4.51 0.99l2.49 3.010h-1.23l-2.080-2.66 0.82-0.35z"></path></g>
<g id="vaadin:unlock"><path d="M8 8v-3.1c0-2.2-1.8-3.9-3.9-3.9h-0.3c-2.2 0-3.8 1.7-3.8 3.9v2.1h2v-2.1c0-1.1 0.7-1.9 1.8-1.9h0.3c1 0 1.9 0.8 1.9 1.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-7zM11 14h-1v-1.8c-0.6 0-1-0.6-1-1.1 0-0.6 0.4-1.1 1-1.1s1 0.4 1 0.9v3.1z"></path></g>
<g id="vaadin:upload-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 0l-5 5h3v8h4v-8h3z"></path></g>
<g id="vaadin:upload"><path d="M11 10v2h-6v-2h-5v6h16v-6h-5zM4 14h-2v-2h2v2z"></path><path d="M13 5l-5-5-5 5h3v6h4v-6z"></path></g>
<g id="vaadin:user-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path><path d="M5.4 7h-0.4v-0.1c0.6-0.2 1-0.8 1-1.4 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.7 0.4 1.2 1 1.4v0.1h-0.4c-0.9 0-1.6 0.7-1.6 1.6v2.4h5v-2.4c0-0.9-0.7-1.6-1.6-1.6z"></path></g>
<g id="vaadin:user-check"><path d="M7.5 14.4c-0.8-0.8-0.8-2 0-2.8s2-0.8 2.8 0l0.6 0.6 1.9-2.1c-0.7-0.4-1.3-0.4-2-0.4-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h8l-1.6-1.6z"></path><path d="M12.8 16h2.1c0 0-0.1-0.9-0.2-2l-1.9 2z"></path><path d="M11 16c-0.3 0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.4 0l1.3 1.3 3.3-3.6c0.4-0.4 1-0.4 1.4-0.1 0.4 0.4 0.4 1 0.1 1.4l-4 4.3c-0.3 0.3-0.5 0.4-0.8 0.4 0 0 0 0 0 0z"></path></g>
<g id="vaadin:user-clock"><path d="M14 13h-3v-3h1v2h2z"></path><path d="M16 12.5c0-2.5-2-4.5-4.5-4.5-0.7 0-1.4 0.2-2 0.5 0.2-0.3 0.8-0.3 1.4-1.2 0 0 2.7-7.3-2.9-7.3s-2.9 7.3-2.9 7.3c0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h10.4c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5h3.4c0 0 0-0.2 0-0.5 0.6-0.8 1.1-1.8 1.1-3z"></path></g>
<g id="vaadin:user-heart"><path d="M14.2 16h0.6c0 0 0-0.2 0-0.6l-0.6 0.6z"></path><path d="M8.6 13.9c-0.7-0.7-1-1.8-0.8-2.8s0.8-1.8 1.7-2.1c0-0.1-0.1-0.2-0.1-0.2 0-0.6 0.8-0.4 1.4-1.5 0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h9.6l-2.1-2.1z"></path><path d="M14.9 10.1c-0.2-0.1-0.5-0.1-0.7-0.1-0.7 0-1.3 0.6-1.7 1.1-0.4-0.5-1-1.1-1.7-1.1-0.3 0-0.5 0-0.7 0.1-1.2 0.4-1.4 2-0.5 2.9l3 2.9 3-2.9c0.8-0.9 0.5-2.5-0.7-2.9z"></path></g>
<g id="vaadin:user-star"><path d="M8.92 13.67l-1.61-1.53-1.5-1.42 2-0.29 2.25-0.32 0.29-0.57c-0.006 0-0.013 0-0.020 0-0.482 0-0.884-0.34-0.979-0.794-0.001-0.617 0.799-0.417 1.429-1.457 0.080-0.020 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c0.63 1 1.44 0.85 1.43 1.45s-0.74 0.8-1.43 0.87c-1.14 0.13-2.14-0.13-3.14 1.76-0.6 1.090-0.85 4.65-0.85 4.65h7.36v-0.17z"></path><path d="M11.72 16h0.56l-0.28-0.14-0.28 0.14z"></path><path d="M12 14.73l2.47 1.27-0.47-2.69 2-1.9-2.76-0.39-1.24-2.45-1.24 2.45-2.76 0.39 2 1.9-0.47 2.69 2.47-1.27z"></path></g>
<g id="vaadin:user"><path d="M8 0c-5.6 0-2.9 7.3-2.9 7.3 0.6 1 1.4 0.8 1.4 1.5 0 0.6-0.7 0.8-1.4 0.9-1.1 0-2.1-0.2-3.1 1.6-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0 0-0.3-3.6-0.8-4.7-1-1.9-2-1.6-3.1-1.7-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0.1 2.7-7.2-2.9-7.2z"></path></g>
<g id="vaadin:users"><path d="M5.3 9.7c-0.4 0-0.9-0.2-0.9-0.6s0.5-0.3 0.9-1c0 0 1.8-4.9-1.8-4.9s-1.8 4.9-1.8 4.9c0.4 0.7 0.9 0.6 0.9 1s-0.5 0.6-0.9 0.6c-0.6 0.1-1.1 0-1.7 0.6v5.7h5c0.2-1.7 0.7-5.2 1.1-6.1 0 0 0.1-0.1 0.1-0.1-0.2-0.1-0.5-0.1-0.9-0.1z"></path><path d="M16 9.5c-0.7-0.8-1.3-0.7-2-0.8-0.5-0.1-1.1-0.2-1.1-0.7s0.6-0.3 1.1-1.2c0 0 2.1-5.9-2.2-5.9-4.4 0.1-2.3 6-2.3 6 0.5 0.8 1.1 0.7 1.1 1.1 0 0.5-0.6 0.6-1.1 0.7-0.9 0.1-1.7 0-2.5 1.5-0.4 0.9-1 5.8-1 5.8h10v-6.5z"></path></g>
<g id="vaadin:vaadin-h"><path d="M15.21 0.35c-0.436 0-0.79 0.354-0.79 0.79v0 0.46c0 0.5-0.32 0.85-1.070 0.85h-3.55c-1.61 0-1.73 1.19-1.8 1.83v0c-0.060-0.64-0.18-1.83-1.79-1.83h-3.57c-0.75 0-1.090-0.37-1.090-0.86v-0.45c0-0.006 0-0.013 0-0.020 0-0.425-0.345-0.77-0.77-0.77-0 0-0 0-0 0h0c-0 0-0 0-0 0-0.431 0-0.78 0.349-0.78 0.78 0 0.004 0 0.007 0 0.011v-0.001 1.32c0 1.54 0.7 2.31 2.34 2.31h3.66c1.090 0 1.19 0.46 1.19 0.9 0 0 0 0.090 0 0.13 0.048 0.428 0.408 0.758 0.845 0.758s0.797-0.33 0.845-0.754l0-0.004s0-0.080 0-0.13c0-0.44 0.1-0.9 1.19-0.9h3.61c1.61 0 2.32-0.77 2.32-2.31v-1.32c0-0.436-0.354-0.79-0.79-0.79v0z"></path><path d="M11.21 7.38c-0.012-0-0.026-0.001-0.040-0.001-0.453 0-0.835 0.301-0.958 0.714l-0.002 0.007-2.21 4.21-2.3-4.2c-0.122-0.425-0.507-0.731-0.963-0.731-0.013 0-0.026 0-0.039 0.001l0.002-0c-0.012-0-0.025-0.001-0.039-0.001-0.58 0-1.050 0.47-1.050 1.050 0 0.212 0.063 0.41 0.171 0.575l-0.002-0.004 3.29 6.1c0.15 0.333 0.478 0.561 0.86 0.561s0.71-0.228 0.858-0.555l0.002-0.006 3.34-6.1c0.090-0.152 0.144-0.335 0.144-0.53 0-0.58-0.47-1.050-1.050-1.050-0.005 0-0.010 0-0.014 0h0.001z"></path></g>
<g id="vaadin:vaadin-v"><path d="M5.8 7.16h-0.13c-0.44 0-0.9-0.1-0.9-1.19v-3.62c0-1.64-0.77-2.35-2.31-2.35h-1.32c-0.436 0-0.79 0.354-0.79 0.79v0c0 0.436 0.354 0.79 0.79 0.79v0h0.46c0.5 0 0.85 0.32 0.85 1.070v3.55c0 1.61 1.19 1.73 1.83 1.8v0c-0.64 0.060-1.83 0.18-1.83 1.79v3.55c0 0.75-0.37 1.090-0.86 1.090h-0.45c-0.006-0-0.013-0-0.020-0-0.425 0-0.77 0.345-0.77 0.77 0 0 0 0 0 0v-0c0 0 0 0 0 0 0 0.431 0.349 0.78 0.78 0.78 0.004 0 0.007-0 0.011-0h1.319c1.54 0 2.31-0.7 2.31-2.34v-3.59c0-1.090 0.46-1.19 0.9-1.19h0.13c0.428-0.048 0.758-0.408 0.758-0.845s-0.33-0.797-0.754-0.845l-0.004-0z"></path><path d="M15.1 7.19v0l-6.1-3.32c-0.152-0.090-0.335-0.144-0.53-0.144-0.58 0-1.050 0.47-1.050 1.050 0 0.005 0 0.010 0 0.014v-0.001c-0 0.012-0.001 0.026-0.001 0.040 0 0.453 0.301 0.835 0.714 0.958l0.007 0.002 4.21 2.26-4.24 2.25c-0.425 0.122-0.731 0.507-0.731 0.963 0 0.013 0 0.026 0.001 0.039l-0-0.002c-0 0.012-0.001 0.025-0.001 0.039 0 0.58 0.47 1.050 1.050 1.050 0.212 0 0.41-0.063 0.575-0.171l-0.004 0.002 6.1-3.29c0.333-0.15 0.561-0.478 0.561-0.86s-0.228-0.71-0.555-0.858l-0.006-0.002z"></path></g>
<g id="vaadin:viewport"><path d="M1 4h-1v-4h4v1h-3z"></path><path d="M12 1v-1h4v4h-1v-3z"></path><path d="M15 12h1v4h-4v-1h3z"></path><path d="M4 15v1h-4v-4h1v3z"></path><path d="M13 3v10h-10v-10h10zM14 2h-12v12h12v-12z"></path></g>
<g id="vaadin:vimeo-square"><path d="M0 0v16h16v-16h-16zM13.9 5.3c-0.7 3.8-4.4 7-5.5 7.7s-2.2-0.3-2.5-1.1c-0.4-0.9-1.7-5.7-2-6.1-0.4-0.3-1.4 0.5-1.4 0.5l-0.5-0.7c0 0 2-2.4 3.6-2.7s1.6 2.5 2 4.1c0.4 1.5 0.6 2.4 1 2.4 0.3 0 1-0.9 1.7-2.2s0-2.5-1.4-1.6c0.5-3.3 5.7-4.1 5-0.3z"></path></g>
<g id="vaadin:vimeo"><path d="M15.9 4.4c-0.9 5-5.9 9.3-7.4 10.3s-2.9-0.4-3.4-1.4c-0.5-1.3-2.2-7.6-2.7-8.2-0.4-0.5-1.8 0.6-1.8 0.6l-0.6-0.9c0 0 2.7-3.3 4.8-3.7 2.2-0.4 2.2 3.4 2.7 5.5 0.5 2 0.9 3.2 1.3 3.2s1.3-1.1 2.2-2.9c0.9-1.7 0-3.3-1.9-2.2 0.8-4.3 7.7-5.4 6.8-0.3z"></path></g>
<g id="vaadin:volume-down"><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-off"><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-up"><path d="M15 8.5c0 2.3-0.8 4.5-2 6.2l0.7 0.8c1.5-1.9 2.4-4.4 2.4-7 0-3.1-1.2-5.9-3.2-8l-0.5 1c1.6 1.8 2.6 4.3 2.6 7z"></path><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume"><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:wallet"><path d="M14.5 4h-12.12c-0.057 0.012-0.123 0.018-0.19 0.018-0.552 0-1-0.448-1-1 0-0.006 0-0.013 0-0.019l12.81-0.499v-1.19c0.005-0.041 0.008-0.089 0.008-0.138 0-0.652-0.528-1.18-1.18-1.18-0.049 0-0.097 0.003-0.144 0.009l-11.374 1.849c-0.771 0.289-1.31 1.020-1.31 1.877 0 0.011 0 0.023 0 0.034l-0 10.728c-0 0.003-0 0.006-0 0.010 0 0.828 0.672 1.5 1.5 1.5 0 0 0 0 0 0h13c0 0 0 0 0 0 0.828 0 1.5-0.672 1.5-1.5 0-0.004-0-0.007-0-0.011v-8.999c0-0.012 0.001-0.027 0.001-0.041 0-0.801-0.649-1.45-1.45-1.45-0.018 0-0.036 0-0.053 0.001zM13 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:warning"><path d="M8 1l-8 14h16l-8-14zM8 13c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM7 10v-4h2v4h-2z"></path></g>
<g id="vaadin:workplace"><path d="M11,3 L11,0 L2,0 L2,14 L0,14 L0,15 L7,15 L7,10 L9,10 L9,8 L14,8 L14,3 L11,3 Z M6,10 L4,10 L4,8 L6,8 L6,10 Z M6,7 L4,7 L4,5 L6,5 L6,7 Z M6,4 L4,4 L4,2 L6,2 L6,4 Z M9,7 L7,7 L7,5 L9,5 L9,7 Z M9,4 L7,4 L7,2 L9,2 L9,4 Z M13,7 L11,7 L11,5 L13,5 L13,7 Z M14,11 L16,11 L16,16 L8,16 L8,11 L10,11 L10,9 L14,9 L14,11 Z" fill-rule="nonzero"></path></g>
<g id="vaadin:wrench"><path d="M15.5 13.4l-7.8-7.8c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.2 1.8 4 4 4 0.6 0 1.1-0.1 1.6-0.3l7.8 7.8c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1zM6.8 7.6l-1.4-1.4 0.9-0.9 1.4 1.4-0.9 0.9zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path></g>
<g id="vaadin:youtube-square"><path d="M7.9 6c0.2 0 0.3-0.2 0.3-0.5v-1.4c0-0.3-0.1-0.5-0.3-0.5s-0.3 0.2-0.3 0.5v1.4c0 0.3 0.1 0.5 0.3 0.5z"></path><path d="M7.1 11.9c-0.1 0.2-0.3 0.3-0.4 0.3s-0.1 0-0.1-0.1c0 0 0-0.1 0-0.2v-2.5h-0.6v2.6c0 0.2 0 0.4 0.1 0.5 0.1 0.2 0.2 0.2 0.4 0.2s0.4-0.1 0.7-0.4v0.4h0.6v-3.3h-0.7v2.5z"></path><path d="M3.8 8.9h0.7v3.8h0.7v-3.8h0.7v-0.7h-2.1z"></path><path d="M9.4 9.3c-0.2 0-0.4 0.2-0.6 0.4v-1.5h-0.6v4.4h0.6v-0.3c0.2 0.2 0.4 0.4 0.6 0.4s0.4-0.1 0.5-0.4c0-0.1 0.1-0.4 0.1-0.7v-1.3c0-0.3 0-0.5-0.1-0.7-0.1-0.1-0.2-0.3-0.5-0.3zM9.4 11.7c0 0.3-0.1 0.4-0.3 0.4-0.1 0-0.2 0-0.3-0.1v-2c0.1-0.1 0.2-0.1 0.3-0.1 0.2 0 0.3 0.2 0.3 0.5v1.3z"></path><path d="M11.3 9.3c-0.3 0-0.5 0.1-0.7 0.3-0.1 0.2-0.2 0.4-0.2 0.8v1.2c0 0.4 0.1 0.6 0.2 0.8 0.2 0.2 0.4 0.3 0.7 0.3s0.6-0.1 0.7-0.4c0.1-0.1 0.1-0.2 0.1-0.4 0-0.1 0-0.2 0-0.4v-0.1h-0.6c0 0.2 0 0.4 0 0.4 0 0.2-0.1 0.2-0.3 0.2s-0.3-0.2-0.3-0.5v-0.6h1.2v-0.7c0-0.4-0.1-0.6-0.2-0.8 0 0.1-0.3-0.1-0.6-0.1zM11.6 10.6h-0.6v-0.3c0-0.3 0.1-0.5 0.3-0.5s0.3 0.2 0.3 0.5v0.3z"></path><path d="M0 0v16h16v-16h-16zM9.3 3.1h0.6v2.5c0 0.1 0 0.2 0 0.2 0 0.1 0 0.2 0.1 0.2s0.2-0.1 0.4-0.3v-2.6h0.6v3.3h-0.6v-0.3c-0.2 0.3-0.5 0.4-0.7 0.4s-0.3-0.1-0.4-0.2c0-0.1-0.1-0.3-0.1-0.5v-2.7zM7 4.2c0-0.3 0-0.6 0.2-0.8s0.4-0.3 0.7-0.3c0.3 0 0.5 0.1 0.7 0.3 0.1 0.2 0.2 0.4 0.2 0.8v1.2c0 0.4-0.1 0.6-0.2 0.8-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.7-0.3c-0.2-0.2-0.2-0.4-0.2-0.8v-1.2zM5.3 2l0.5 1.8 0.5-1.8h0.7l-0.8 2.7v1.8h-0.7v-1.8c-0.1-0.4-0.2-0.8-0.4-1.5-0.2-0.4-0.3-0.8-0.5-1.2h0.7zM12.8 12.9c-0.1 0.5-0.6 0.9-1.1 1-1.2 0.1-2.5 0.1-3.7 0.1s-2.5 0-3.7-0.1c-0.5-0.1-1-0.4-1.1-1-0.2-0.8-0.2-1.6-0.2-2.4 0-0.7 0-1.5 0.2-2.3 0.1-0.5 0.6-0.9 1.1-1 1.2-0.1 2.5-0.1 3.7-0.1s2.5 0 3.7 0.1c0.5 0.1 1 0.4 1.1 1 0.2 0.8 0.2 1.6 0.2 2.3 0 0.8 0 1.6-0.2 2.4z"></path></g>
<g id="vaadin:youtube"><path d="M6.6 0h-0.9l-0.6 2.3-0.6-2.3h-1c0.2 0.6 0.4 1.1 0.6 1.7 0.3 0.8 0.5 1.5 0.5 1.9v2.4h0.9v-2.4l1.1-3.6zM9 4.5v-1.5c0-0.5-0.1-0.8-0.3-1.1s-0.5-0.4-0.9-0.4c-0.4 0-0.7 0.2-0.9 0.5-0.2 0.2-0.3 0.5-0.3 1v1.6c0 0.5 0.1 0.8 0.3 1 0.2 0.3 0.5 0.4 0.9 0.4s0.7-0.2 0.9-0.5c0.2-0.1 0.3-0.5 0.3-1zM8.2 4.7c0 0.4-0.1 0.6-0.4 0.6s-0.4-0.2-0.4-0.6v-1.9c0-0.4 0.1-0.6 0.4-0.6s0.4 0.2 0.4 0.6v1.9zM12 6v-4.5h-0.8v3.4c-0.2 0.3-0.3 0.4-0.5 0.4-0.1 0-0.2-0.1-0.2-0.2 0 0 0-0.1 0-0.3v-3.3h-0.8v3.5c0 0.3 0 0.5 0.1 0.7 0 0.2 0.2 0.3 0.5 0.3s0.6-0.2 0.9-0.5v0.5h0.8z"></path><path d="M12.4 10.5c-0.3 0-0.4 0.2-0.4 0.6v0.4h0.8v-0.4c0-0.4-0.1-0.6-0.4-0.6z"></path><path d="M9.5 10.5c-0.1 0-0.3 0.1-0.4 0.2v2.7c0.1 0.1 0.3 0.2 0.4 0.2 0.2 0 0.3-0.2 0.3-0.6v-1.9c0-0.4-0.1-0.6-0.3-0.6z"></path><path d="M14.4 8.3c-0.2-0.7-0.8-1.3-1.4-1.3-1.6-0.2-3.3-0.2-5-0.2s-3.3 0-5 0.2c-0.6 0-1.2 0.6-1.4 1.3-0.2 1-0.2 2.1-0.2 3.1s0 2.1 0.2 3.1c0.2 0.7 0.7 1.2 1.4 1.3 1.7 0.2 3.3 0.2 5 0.2s3.3 0 5-0.2c0.7-0.1 1.3-0.6 1.4-1.3 0.2-1 0.2-2.1 0.2-3.1s0-2.1-0.2-3.1zM5.2 9.2h-1v5.1h-0.9v-5.1h-0.9v-0.9h2.8v0.9zM7.6 14.3h-0.8v-0.5c-0.3 0.4-0.6 0.5-0.9 0.5s-0.4-0.1-0.5-0.3c0-0.1-0.1-0.3-0.1-0.7v-3.5h0.8v3.2c0 0.2 0 0.3 0 0.3 0 0.1 0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.5-0.4v-3.3h0.8v4.5zM10.6 12.9c0 0.4 0 0.7-0.1 0.9-0.1 0.3-0.3 0.5-0.6 0.5s-0.6-0.2-0.8-0.5v0.4h-0.8v-5.9h0.8v1.9c0.3-0.3 0.5-0.5 0.8-0.5s0.5 0.2 0.6 0.5c0.1 0.2 0.1 0.5 0.1 0.9v1.8zM13.6 12.2h-1.6v0.8c0 0.4 0.1 0.6 0.4 0.6 0.2 0 0.3-0.1 0.4-0.3 0 0 0-0.2 0-0.5h0.8v0.1c0 0.3 0 0.4 0 0.5 0 0.2-0.1 0.3-0.2 0.5-0.2 0.3-0.5 0.5-1 0.5-0.4 0-0.7-0.2-1-0.5-0.2-0.2-0.3-0.6-0.3-1v-1.5c0-0.5 0.1-0.8 0.2-1 0.2-0.3 0.5-0.5 1-0.5 0.4 0 0.7 0.2 0.9 0.5 0.2 0.2 0.2 0.6 0.2 1v0.8z"></path></g>
</defs></svg>`;ac.register("vaadin",16,v4);const f4=new sg({prefix:"connect"});async function mz(e,t){return f4.call("PaperService","delete",{paperId:e},t)}async function gz(e){return f4.call("PaperService","loadPreview",{},e)}function m4(){const e=fn([]),t=fn([]),n=fn(void 0),r=fn(void 0),a=fn(!1);P.useEffect(()=>{gz().then(g=>{e.value=g,t.value=g.map(T=>T.id);const b=window.location.pathname;if(b==="/")r.value=0;else{const T=b.split("/")[2];r.value=t.value.indexOf(T)+1}})},[]);const i=g=>{r.value=g.detail.value},o={overflow:"hidden"},s={fontSize:"var(--lumo-font-size-l)",margin:"var(--lumo-space-m)"},l={boxSizing:"border-box",marginInlineEnd:"var(--lumo-space-m)",marginInlineStart:"var(--lumo-space-xs)",padding:"var(--lumo-space-xs)"};function h(g){return g.name!=null&&g.name?.length>16?g.name?.substring(0,16)+"...pdf":g.name}function c(g){n.value=g,a.value=!0}function u(){n.value=void 0,a.value=!1}function p(){n.value!=null&&mz(n.value.id).then(()=>{const g=e.value.indexOf(n.value);e.value.splice(g,1),t.value.splice(g,1),u()})}function m(g,b){g.preventDefault(),c(b)}return ge.jsxs(y9,{style:o,children:[ge.jsx("h1",{slot:"navbar",style:s,children:"Spring Boot - React - MongoDB - Demo App"}),ge.jsxs(zy,{slot:"drawer",orientation:"vertical",selected:r.value,onSelectedChanged:i,children:[ge.jsx(Du,{tabIndex:0,children:ge.jsxs("a",{href:"/",children:[ge.jsx(Iu,{icon:"vaadin:cloud-upload-o",style:l}),ge.jsx("span",{children:"Upload paper"})]})}),e.value.map(g=>ge.jsx(Du,{onContextMenu:b=>m(b,g),children:ge.jsxs("a",{href:`/paper/${g.id}`,children:[ge.jsx(Iu,{icon:"vaadin:file-text-o",style:l}),ge.jsx("span",{children:h(g)})]})},g.id))]}),ge.jsxs(X9,{header:"Delete paper",cancelButtonVisible:!0,confirmText:"Delete",opened:a.value,onConfirm:p,onCancel:u,children:["Do you want to delete ",n.value?.name??"this paper","?"]}),ge.jsx(Zm,{})]})}Object.defineProperty(m4,"name",{value:"MainLayout"});const yz=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),zz=[Fd("",yz,[Fd("",nz)])],{router:Mz,routes:wz}=new yg().withFileRoutes(zz).withFallback(Fh).protect().build();function bz(){return ge.jsx(d6,{router:Mz})}const xs=document.getElementById("outlet");let g4=xs._root??ev(xs);xs._root=g4;g4.render(P.createElement(bz));window.Vaadin??={};window.Vaadin.routesConfig=wz;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */_0("color",Uh);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _z=K`
  ${b1(jh.cssText.replace(/,\s*:host/su,""))}
`;_0("typography",_z);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),n=new WeakMap,r=typeof DOMException=="object"?Error:DOMException,a=Object.defineProperty,i=Array.prototype.forEach,o=/@import.+?;?$/gm;function s(N){var j=N.replace(o,"");return j!==N&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),j.trim()}function l(N){return"isConnected"in N?N.isConnected:document.contains(N)}function h(N){return N.filter(function(j,J){return N.indexOf(j)===J})}function c(N,j){return N.filter(function(J){return j.indexOf(J)===-1})}function u(N){N.parentNode.removeChild(N)}function p(N){return N.shadowRoot||n.get(N)}var m=["addRule","deleteRule","insertRule","removeRule"],g=CSSStyleSheet,b=g.prototype;b.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},b.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function T(N){return typeof N=="object"?Z.isPrototypeOf(N)||b.isPrototypeOf(N):!1}function y(N){return typeof N=="object"?b.isPrototypeOf(N):!1}var f=new WeakMap,z=new WeakMap,k=new WeakMap,O=new WeakMap;function U(N,j){var J=document.createElement("style");return k.get(N).set(j,J),z.get(N).push(j),J}function M(N,j){return k.get(N).get(j)}function B(N,j){k.get(N).delete(j),z.set(N,z.get(N).filter(function(J){return J!==j}))}function G(N,j){requestAnimationFrame(function(){j.textContent=f.get(N).textContent,O.get(N).forEach(function(J){return j.sheet[J.method].apply(j.sheet,J.args)})})}function H(N){if(!f.has(N))throw new TypeError("Illegal invocation")}function ee(){var N=this,j=document.createElement("style");t.body.appendChild(j),f.set(N,j),z.set(N,[]),k.set(N,new WeakMap),O.set(N,[])}var Z=ee.prototype;Z.replace=function(j){try{return this.replaceSync(j),Promise.resolve(this)}catch(J){return Promise.reject(J)}},Z.replaceSync=function(j){if(H(this),typeof j=="string"){var J=this;f.get(J).textContent=s(j),O.set(J,[]),z.get(J).forEach(function(Re){Re.isConnected()&&G(J,M(J,Re))})}},a(Z,"cssRules",{configurable:!0,enumerable:!0,get:function(){return H(this),f.get(this).sheet.cssRules}}),a(Z,"media",{configurable:!0,enumerable:!0,get:function(){return H(this),f.get(this).sheet.media}}),m.forEach(function(N){Z[N]=function(){var j=this;H(j);var J=arguments;O.get(j).push({method:N,args:J}),z.get(j).forEach(function(ue){if(ue.isConnected()){var oe=M(j,ue).sheet;oe[N].apply(oe,J)}});var Re=f.get(j).sheet;return Re[N].apply(Re,J)}}),a(ee,Symbol.hasInstance,{configurable:!0,value:T});var Y={childList:!0,subtree:!0},Ae=new WeakMap;function Pe(N){var j=Ae.get(N);return j||(j=new Ve(N),Ae.set(N,j)),j}function $e(N){a(N.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return Pe(this).sheets},set:function(j){Pe(this).update(j)}})}function de(N,j){for(var J=document.createNodeIterator(N,NodeFilter.SHOW_ELEMENT,function(ue){return p(ue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),Re=void 0;Re=J.nextNode();)j(p(Re))}var D=new WeakMap,Q=new WeakMap,X=new WeakMap;function se(N,j){return j instanceof HTMLStyleElement&&Q.get(N).some(function(J){return M(J,N)})}function te(N){var j=D.get(N);return j instanceof Document?j.body:j}function Qe(N){var j=document.createDocumentFragment(),J=Q.get(N),Re=X.get(N),ue=te(N);Re.disconnect(),J.forEach(function(oe){j.appendChild(M(oe,N)||U(oe,N))}),ue.insertBefore(j,null),Re.observe(ue,Y),J.forEach(function(oe){G(oe,M(oe,N))})}function Ve(N){var j=this;j.sheets=[],D.set(j,N),Q.set(j,[]),X.set(j,new MutationObserver(function(J,Re){if(!document){Re.disconnect();return}J.forEach(function(ue){e||i.call(ue.addedNodes,function(oe){oe instanceof Element&&de(oe,function(Bt){Pe(Bt).connect()})}),i.call(ue.removedNodes,function(oe){oe instanceof Element&&(se(j,oe)&&Qe(j),e||de(oe,function(Bt){Pe(Bt).disconnect()}))})})}))}if(Ve.prototype={isConnected:function(){var N=D.get(this);return N instanceof Document?N.readyState!=="loading":l(N.host)},connect:function(){var N=te(this);X.get(this).observe(N,Y),Q.get(this).length>0&&Qe(this),de(N,function(j){Pe(j).connect()})},disconnect:function(){X.get(this).disconnect()},update:function(N){var j=this,J=D.get(j)===document?"Document":"ShadowRoot";if(!Array.isArray(N))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+J+": Iterator getter is not callable.");if(!N.every(T))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+J+": Failed to convert value to 'CSSStyleSheet'");if(N.some(y))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+J+": Can't adopt non-constructed stylesheets");j.sheets=N;var Re=Q.get(j),ue=h(N),oe=c(Re,ue);oe.forEach(function(Bt){u(M(Bt,j)),B(Bt,j)}),Q.set(j,ue),j.isConnected()&&ue.length>0&&Qe(j)}},window.CSSStyleSheet=ee,$e(Document),"ShadowRoot"in window){$e(ShadowRoot);var ae=Element.prototype,Ie=ae.attachShadow;ae.attachShadow=function(j){var J=Ie.call(this,j);return j.mode==="closed"&&n.set(this,J),J}}var Be=Pe(document);Be.isConnected()?Be.connect():document.addEventListener("DOMContentLoaded",Be.connect.bind(Be))})();const{toString:xz}=Object.prototype;function Az(e){return xz.call(e)==="[object RegExp]"}function Sz(e,{preserve:t=!0,whitespace:n=!0,all:r}={}){if(r)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let a=t,i;typeof t=="function"?(a=!1,i=t):Az(t)&&(a=!1,i=c=>t.test(c));let o=!1,s="",l="",h="";for(let c=0;c<e.length;c++){if(s=e[c],e[c-1]!=="\\"&&(s==='"'||s==="'")&&(o===s?o=!1:o||(o=s)),!o&&s==="/"&&e[c+1]==="*"){const u=e[c+2]==="!";let p=c+2;for(;p<e.length;p++){if(e[p]==="*"&&e[p+1]==="/"){a&&u||i&&i(l)?h+=`/*${l}*/`:n||(e[p+2]===`
`?p++:e[p+2]+e[p+3]===`\r
`&&(p+=2)),l="";break}l+=e[p]}c=p+1;continue}h+=s}return h}const Cz=CSSStyleSheet.toString().includes("document.createElement"),Ez=(e,t)=>{const n=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(e)!=null&&(e=Sz(e));for(var r,a=e;(r=n.exec(e))!==null;){a=a.replace(r[0],"");const i=document.createElement("link");i.rel="stylesheet",i.href=r[2]||r[4];const o=r[1]||r[5];o&&(i.media=o),t===document?document.head.appendChild(i):t.appendChild(i)}return a},kz=(e,t,n)=>(n?t.adoptedStyleSheets=[e,...t.adoptedStyleSheets]:t.adoptedStyleSheets=[...t.adoptedStyleSheets,e],()=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(r=>r!==e)}),Tz=(e,t,n)=>{const r=new CSSStyleSheet;return r.replaceSync(e),Cz?kz(r,t,n):(n?t.adoptedStyleSheets.splice(0,0,r):t.adoptedStyleSheets.push(r),()=>{t.adoptedStyleSheets.splice(t.adoptedStyleSheets.indexOf(r),1)})},Pz=(e,t)=>{const n=document.createElement("style");n.type="text/css",n.textContent=e;let r;if(t){const i=Array.from(document.head.childNodes).filter(o=>o.nodeType===Node.COMMENT_NODE).find(o=>o.data.trim()===t);i&&(r=i)}return document.head.insertBefore(n,r),()=>{n.remove()}},tl=(e,t,n,r)=>{if(n===document){const i=Lz(e);if(window.Vaadin.theme.injectedGlobalCss.indexOf(i)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(i)}const a=Ez(e,n);return n===document?Pz(a,t):Tz(a,n,r)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function ju(e){let t,n,r=2166136261;for(t=0,n=e.length;t<n;t++)r^=e.charCodeAt(t),r+=(r<<1)+(r<<4)+(r<<7)+(r<<8)+(r<<24);return("0000000"+(r>>>0).toString(16)).substr(-8)}function Lz(e){let t=ju(e);return t+ju(t+e)}const Rz="[part~=drop-label]{display:none}vaadin-upload-file-list{display:none}",Oz="[part~=toolbar]{display:none!important}[part~=viewer-container]{height:100%!important}";document._vaadintheme_default_componentCss||(pe("zvaadin-upload",b1(Rz.toString())),pe("vcf-pdf-viewer",b1(Oz.toString())),document._vaadintheme_default_componentCss=!0);const Nz='html{--lumo-icons-align-center: "";--lumo-icons-align-left: "";--lumo-icons-align-right: "";--lumo-icons-angle-down: "";--lumo-icons-angle-left: "";--lumo-icons-angle-right: "";--lumo-icons-angle-up: "";--lumo-icons-arrow-down: "";--lumo-icons-arrow-left: "";--lumo-icons-arrow-right: "";--lumo-icons-arrow-up: "";--lumo-icons-bar-chart: "";--lumo-icons-bell: "";--lumo-icons-calendar: "";--lumo-icons-checkmark: "";--lumo-icons-chevron-down: "";--lumo-icons-chevron-left: "";--lumo-icons-chevron-right: "";--lumo-icons-chevron-up: "";--lumo-icons-clock: "";--lumo-icons-cog: "";--lumo-icons-cross: "";--lumo-icons-download: "";--lumo-icons-dropdown: "";--lumo-icons-edit: "";--lumo-icons-error: "";--lumo-icons-eye: "";--lumo-icons-eye-disabled: "";--lumo-icons-menu: "";--lumo-icons-minus: "";--lumo-icons-ordered-list: "";--lumo-icons-phone: "";--lumo-icons-photo: "";--lumo-icons-play: "";--lumo-icons-plus: "";--lumo-icons-redo: "";--lumo-icons-reload: "";--lumo-icons-search: "";--lumo-icons-undo: "";--lumo-icons-unordered-list: "";--lumo-icons-upload: "";--lumo-icons-user: ""}',Iz=e=>{const t=[];e!==document&&(t.push(tl(Uh.cssText,"",e,!0)),t.push(tl(jh.cssText,"",e,!0)),t.push(tl(Nz.toString(),"",e)))},Dz=Iz;Dz(document);export{es as $,vM as A,I9 as B,rn as C,Fa as D,x0 as E,qh as F,pM as G,Pu as H,D9 as I,j3 as J,m3 as K,c9 as L,B9 as M,f7 as N,E9 as O,yt as P,s7 as Q,as as R,Xt as S,G7 as T,En as U,Kg as V,N9 as W,$3 as X,i9 as Y,Nh as Z,ts as _,pe as a,L9 as a0,O9 as a1,b9 as a2,f4 as a3,p8 as a4,ev as a5,P as a6,ge as a7,Iu as a8,tl as b,_9 as c,Et as d,ct as e,y3 as f,nM as g,kt as h,K as i,e0 as j,k9 as k,A3 as l,Cr as m,y7 as n,no as o,B7 as p,Q7 as q,b1 as r,Qv as s,$v as t,_3 as u,$h as v,tc as w,xe as x,Bn as y,J0 as z};
