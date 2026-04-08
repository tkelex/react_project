(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var jl={exports:{}},Zr={},Wl={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kt=Symbol.for("react.element"),td=Symbol.for("react.portal"),rd=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),ad=Symbol.for("react.provider"),ld=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),dd=Symbol.for("react.memo"),cd=Symbol.for("react.lazy"),Fa=Symbol.iterator;function fd(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var Bl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xl=Object.assign,Kl={};function it(e,n,t){this.props=e,this.context=n,this.refs=Kl,this.updater=t||Bl}it.prototype.isReactComponent={};it.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};it.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $l(){}$l.prototype=it.prototype;function No(e,n,t){this.props=e,this.context=n,this.refs=Kl,this.updater=t||Bl}var Oo=No.prototype=new $l;Oo.constructor=No;Xl(Oo,it.prototype);Oo.isPureReactComponent=!0;var _a=Array.isArray,Ql=Object.prototype.hasOwnProperty,Go={current:null},Jl={key:!0,ref:!0,__self:!0,__source:!0};function Yl(e,n,t){var r,i={},o=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(o=""+n.key),n)Ql.call(n,r)&&!Jl.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Kt,type:e,key:o,ref:a,props:i,_owner:Go.current}}function pd(e,n){return{$$typeof:Kt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function zo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kt}function md(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Va=/\/+/g;function Ti(e,n){return typeof e=="object"&&e!==null&&e.key!=null?md(""+e.key):n.toString(36)}function gr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Kt:case td:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ti(a,0):r,_a(i)?(t="",e!=null&&(t=e.replace(Va,"$&/")+"/"),gr(i,n,t,"",function(d){return d})):i!=null&&(zo(i)&&(i=pd(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Va,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",_a(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Ti(o,l);a+=gr(o,n,t,s,i)}else if(s=fd(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Ti(o,l++),a+=gr(o,n,t,s,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function er(e,n,t){if(e==null)return e;var r=[],i=0;return gr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function hd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Tr={transition:null},yd={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:Go};function ql(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:er,forEach:function(e,n,t){er(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return er(e,function(){n++}),n},toArray:function(e){return er(e,function(n){return n})||[]},only:function(e){if(!zo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=it;P.Fragment=rd;P.Profiler=od;P.PureComponent=No;P.StrictMode=id;P.Suspense=ud;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yd;P.act=ql;P.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xl({},e.props),i=e.key,o=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,a=Go.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Ql.call(n,s)&&!Jl.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Kt,type:e.type,key:i,ref:o,props:r,_owner:a}};P.createContext=function(e){return e={$$typeof:ld,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ad,_context:e},e.Consumer=e};P.createElement=Yl;P.createFactory=function(e){var n=Yl.bind(null,e);return n.type=e,n};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:sd,render:e}};P.isValidElement=zo;P.lazy=function(e){return{$$typeof:cd,_payload:{_status:-1,_result:e},_init:hd}};P.memo=function(e,n){return{$$typeof:dd,type:e,compare:n===void 0?null:n}};P.startTransition=function(e){var n=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=n}};P.unstable_act=ql;P.useCallback=function(e,n){return ae.current.useCallback(e,n)};P.useContext=function(e){return ae.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};P.useEffect=function(e,n){return ae.current.useEffect(e,n)};P.useId=function(){return ae.current.useId()};P.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};P.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};P.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};P.useMemo=function(e,n){return ae.current.useMemo(e,n)};P.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};P.useRef=function(e){return ae.current.useRef(e)};P.useState=function(e){return ae.current.useState(e)};P.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};P.useTransition=function(){return ae.current.useTransition()};P.version="18.3.1";Wl.exports=P;var Uo=Wl.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=Uo,Td=Symbol.for("react.element"),vd=Symbol.for("react.fragment"),Ed=Object.prototype.hasOwnProperty,Md=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ld={key:!0,ref:!0,__self:!0,__source:!0};function Zl(e,n,t){var r,i={},o=null,a=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Ed.call(n,r)&&!Ld.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Td,type:e,key:o,ref:a,props:i,_owner:Md.current}}Zr.Fragment=vd;Zr.jsx=Zl;Zr.jsxs=Zl;jl.exports=Zr;var gn=jl.exports,Wi={},es={exports:{}},ge={},ns={exports:{}},ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(H,x){var C=H.length;H.push(x);e:for(;0<C;){var j=C-1>>>1,$=H[j];if(0<i($,x))H[j]=x,H[C]=$,C=j;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var x=H[0],C=H.pop();if(C!==x){H[0]=C;e:for(var j=0,$=H.length,qt=$>>>1;j<qt;){var hn=2*(j+1)-1,gi=H[hn],yn=hn+1,Zt=H[yn];if(0>i(gi,C))yn<$&&0>i(Zt,gi)?(H[j]=Zt,H[yn]=C,j=yn):(H[j]=gi,H[hn]=C,j=hn);else if(yn<$&&0>i(Zt,C))H[j]=Zt,H[yn]=C,j=yn;else break e}}return x}function i(H,x){var C=H.sortIndex-x.sortIndex;return C!==0?C:H.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],d=[],h=1,m=null,p=3,T=!1,v=!1,E=!1,V=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(H){for(var x=t(d);x!==null;){if(x.callback===null)r(d);else if(x.startTime<=H)r(d),x.sortIndex=x.expirationTime,n(s,x);else break;x=t(d)}}function y(H){if(E=!1,f(H),!v)if(t(s)!==null)v=!0,hi(L);else{var x=t(d);x!==null&&yi(y,x.startTime-H)}}function L(H,x){v=!1,E&&(E=!1,c(R),R=-1),T=!0;var C=p;try{for(f(x),m=t(s);m!==null&&(!(m.expirationTime>x)||H&&!be());){var j=m.callback;if(typeof j=="function"){m.callback=null,p=m.priorityLevel;var $=j(m.expirationTime<=x);x=e.unstable_now(),typeof $=="function"?m.callback=$:m===t(s)&&r(s),f(x)}else r(s);m=t(s)}if(m!==null)var qt=!0;else{var hn=t(d);hn!==null&&yi(y,hn.startTime-x),qt=!1}return qt}finally{m=null,p=C,T=!1}}var S=!1,b=null,R=-1,U=5,w=-1;function be(){return!(e.unstable_now()-w<U)}function lt(){if(b!==null){var H=e.unstable_now();w=H;var x=!0;try{x=b(!0,H)}finally{x?st():(S=!1,b=null)}}else S=!1}var st;if(typeof u=="function")st=function(){u(lt)};else if(typeof MessageChannel<"u"){var Da=new MessageChannel,nd=Da.port2;Da.port1.onmessage=lt,st=function(){nd.postMessage(null)}}else st=function(){V(lt,0)};function hi(H){b=H,S||(S=!0,st())}function yi(H,x){R=V(function(){H(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_continueExecution=function(){v||T||(v=!0,hi(L))},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(H){switch(p){case 1:case 2:case 3:var x=3;break;default:x=p}var C=p;p=x;try{return H()}finally{p=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(H,x){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var C=p;p=H;try{return x()}finally{p=C}},e.unstable_scheduleCallback=function(H,x,C){var j=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?j+C:j):C=j,H){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=C+$,H={id:h++,callback:x,priorityLevel:H,startTime:C,expirationTime:$,sortIndex:-1},C>j?(H.sortIndex=C,n(d,H),t(s)===null&&H===t(d)&&(E?(c(R),R=-1):E=!0,yi(y,C-j))):(H.sortIndex=$,n(s,H),v||T||(v=!0,hi(L))),H},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(H){var x=p;return function(){var C=p;p=x;try{return H.apply(this,arguments)}finally{p=C}}}})(ts);ns.exports=ts;var Hd=ns.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd=Uo,ye=Hd;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rs=new Set,wt={};function wn(e,n){Yn(e,n),Yn(e+"Capture",n)}function Yn(e,n){for(wt[e]=n,e=0;e<n.length;e++)rs.add(n[e])}var je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bi=Object.prototype.hasOwnProperty,bd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ia={},Na={};function Rd(e){return Bi.call(Na,e)?!0:Bi.call(Ia,e)?!1:bd.test(e)?Na[e]=!0:(Ia[e]=!0,!1)}function xd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cd(e,n,t,r){if(n===null||typeof n>"u"||xd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function le(e,n,t,r,i,o,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=a}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Z[n]=new le(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Z[e]=new le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Z[e]=new le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Z[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var jo=/[\-:]([a-z])/g;function Wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(jo,Wo);Z[n]=new le(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(jo,Wo);Z[n]=new le(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(jo,Wo);Z[n]=new le(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)});Z.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Z[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bo(e,n,t,r){var i=Z.hasOwnProperty(n)?Z[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Cd(n,t,i,r)&&(t=null),r||i===null?Rd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Ke=Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Xi=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),os=Symbol.for("react.context"),Ko=Symbol.for("react.forward_ref"),Ki=Symbol.for("react.suspense"),$i=Symbol.for("react.suspense_list"),$o=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),as=Symbol.for("react.offscreen"),Oa=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=Oa&&e[Oa]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,vi;function gt(e){if(vi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);vi=n&&n[1]||""}return`
`+vi+e}var Ei=!1;function Mi(e,n){if(!e||Ei)return"";Ei=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ei=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?gt(e):""}function Pd(e){switch(e.tag){case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return gt("Suspense");case 19:return gt("SuspenseList");case 0:case 2:case 15:return e=Mi(e.type,!1),e;case 11:return e=Mi(e.type.render,!1),e;case 1:return e=Mi(e.type,!0),e;default:return""}}function Qi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case Dn:return"Portal";case Xi:return"Profiler";case Xo:return"StrictMode";case Ki:return"Suspense";case $i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case os:return(e.displayName||"Context")+".Consumer";case is:return(e._context.displayName||"Context")+".Provider";case Ko:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $o:return n=e.displayName||null,n!==null?n:Qi(e.type)||"Memo";case Qe:n=e._payload,e=e._init;try{return Qi(e(n))}catch{}}return null}function wd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qi(n);case 8:return n===Xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ls(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function kd(e){var n=ls(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function tr(e){e._valueTracker||(e._valueTracker=kd(e))}function ss(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ls(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ji(e,n){var t=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ga(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=dn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function us(e,n){n=n.checked,n!=null&&Bo(e,"checked",n,!1)}function Yi(e,n){us(e,n);var t=dn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?qi(e,n.type,t):n.hasOwnProperty("defaultValue")&&qi(e,n.type,dn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function za(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function qi(e,n,t){(n!=="number"||Pr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Tt=Array.isArray;function Bn(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+dn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Zi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(g(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ua(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(g(92));if(Tt(t)){if(1<t.length)throw Error(g(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:dn(t)}}function ds(e,n){var t=dn(n.value),r=dn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ja(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function cs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?cs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rr,fs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function kt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ad=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){Ad.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mt[n]=Mt[e]})});function ps(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+n).trim():n+"px"}function ms(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ps(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Dd=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(e,n){if(n){if(Dd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(g(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(g(61))}if(n.style!=null&&typeof n.style!="object")throw Error(g(62))}}function to(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ro=null;function Qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,Xn=null,Kn=null;function Wa(e){if(e=Jt(e)){if(typeof io!="function")throw Error(g(280));var n=e.stateNode;n&&(n=ii(n),io(e.stateNode,e.type,n))}}function hs(e){Xn?Kn?Kn.push(e):Kn=[e]:Xn=e}function ys(){if(Xn){var e=Xn,n=Kn;if(Kn=Xn=null,Wa(e),n)for(e=0;e<n.length;e++)Wa(n[e])}}function gs(e,n){return e(n)}function Ts(){}var Li=!1;function vs(e,n,t){if(Li)return e(n,t);Li=!0;try{return gs(e,n,t)}finally{Li=!1,(Xn!==null||Kn!==null)&&(Ts(),ys())}}function At(e,n){var t=e.stateNode;if(t===null)return null;var r=ii(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(g(231,n,typeof t));return t}var oo=!1;if(je)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){oo=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{oo=!1}function Fd(e,n,t,r,i,o,a,l,s){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(h){this.onError(h)}}var Lt=!1,wr=null,kr=!1,ao=null,_d={onError:function(e){Lt=!0,wr=e}};function Vd(e,n,t,r,i,o,a,l,s){Lt=!1,wr=null,Fd.apply(_d,arguments)}function Id(e,n,t,r,i,o,a,l,s){if(Vd.apply(this,arguments),Lt){if(Lt){var d=wr;Lt=!1,wr=null}else throw Error(g(198));kr||(kr=!0,ao=d)}}function kn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Es(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ba(e){if(kn(e)!==e)throw Error(g(188))}function Nd(e){var n=e.alternate;if(!n){if(n=kn(e),n===null)throw Error(g(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Ba(i),e;if(o===r)return Ba(i),n;o=o.sibling}throw Error(g(188))}if(t.return!==r.return)t=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a)throw Error(g(189))}}if(t.alternate!==r)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?e:n}function Ms(e){return e=Nd(e),e!==null?Ls(e):null}function Ls(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ls(e);if(n!==null)return n;e=e.sibling}return null}var Hs=ye.unstable_scheduleCallback,Xa=ye.unstable_cancelCallback,Od=ye.unstable_shouldYield,Gd=ye.unstable_requestPaint,W=ye.unstable_now,zd=ye.unstable_getCurrentPriorityLevel,Jo=ye.unstable_ImmediatePriority,Ss=ye.unstable_UserBlockingPriority,Ar=ye.unstable_NormalPriority,Ud=ye.unstable_LowPriority,bs=ye.unstable_IdlePriority,ei=null,Ve=null;function jd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var we=Math.clz32?Math.clz32:Xd,Wd=Math.log,Bd=Math.LN2;function Xd(e){return e>>>=0,e===0?32:31-(Wd(e)/Bd|0)|0}var ir=64,or=4194304;function vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~i;l!==0?r=vt(l):(o&=a,o!==0&&(r=vt(o)))}else a=t&~i,a!==0?r=vt(a):o!==0&&(r=vt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-we(n),i=1<<t,r|=e[t],n&=~i;return r}function Kd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $d(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-we(o),l=1<<a,s=i[a];s===-1?(!(l&t)||l&r)&&(i[a]=Kd(l,n)):s<=n&&(e.expiredLanes|=l),o&=~l}}function lo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rs(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function Hi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function $t(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-we(n),e[n]=t}function Qd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-we(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function Yo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-we(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var A=0;function xs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cs,qo,Ps,ws,ks,so=!1,ar=[],nn=null,tn=null,rn=null,Dt=new Map,Ft=new Map,Ye=[],Jd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ka(e,n){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Dt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ft.delete(n.pointerId)}}function ct(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Jt(n),n!==null&&qo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Yd(e,n,t,r,i){switch(n){case"focusin":return nn=ct(nn,e,n,t,r,i),!0;case"dragenter":return tn=ct(tn,e,n,t,r,i),!0;case"mouseover":return rn=ct(rn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Dt.set(o,ct(Dt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ft.set(o,ct(Ft.get(o)||null,e,n,t,r,i)),!0}return!1}function As(e){var n=En(e.target);if(n!==null){var t=kn(n);if(t!==null){if(n=t.tag,n===13){if(n=Es(t),n!==null){e.blockedOn=n,ks(e.priority,function(){Ps(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=uo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ro=r,t.target.dispatchEvent(r),ro=null}else return n=Jt(t),n!==null&&qo(n),e.blockedOn=t,!1;n.shift()}return!0}function $a(e,n,t){vr(e)&&t.delete(n)}function qd(){so=!1,nn!==null&&vr(nn)&&(nn=null),tn!==null&&vr(tn)&&(tn=null),rn!==null&&vr(rn)&&(rn=null),Dt.forEach($a),Ft.forEach($a)}function ft(e,n){e.blockedOn===n&&(e.blockedOn=null,so||(so=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,qd)))}function _t(e){function n(i){return ft(i,e)}if(0<ar.length){ft(ar[0],e);for(var t=1;t<ar.length;t++){var r=ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&ft(nn,e),tn!==null&&ft(tn,e),rn!==null&&ft(rn,e),Dt.forEach(n),Ft.forEach(n),t=0;t<Ye.length;t++)r=Ye[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ye.length&&(t=Ye[0],t.blockedOn===null);)As(t),t.blockedOn===null&&Ye.shift()}var $n=Ke.ReactCurrentBatchConfig,Fr=!0;function Zd(e,n,t,r){var i=A,o=$n.transition;$n.transition=null;try{A=1,Zo(e,n,t,r)}finally{A=i,$n.transition=o}}function ec(e,n,t,r){var i=A,o=$n.transition;$n.transition=null;try{A=4,Zo(e,n,t,r)}finally{A=i,$n.transition=o}}function Zo(e,n,t,r){if(Fr){var i=uo(e,n,t,r);if(i===null)Di(e,n,r,_r,t),Ka(e,r);else if(Yd(i,e,n,t,r))r.stopPropagation();else if(Ka(e,r),n&4&&-1<Jd.indexOf(e)){for(;i!==null;){var o=Jt(i);if(o!==null&&Cs(o),o=uo(e,n,t,r),o===null&&Di(e,n,r,_r,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Di(e,n,r,null,t)}}var _r=null;function uo(e,n,t,r){if(_r=null,e=Qo(r),e=En(e),e!==null)if(n=kn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Es(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return _r=e,null}function Ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zd()){case Jo:return 1;case Ss:return 4;case Ar:case Ud:return 16;case bs:return 536870912;default:return 16}default:return 16}}var Ze=null,ea=null,Er=null;function Fs(){if(Er)return Er;var e,n=ea,t=n.length,r,i="value"in Ze?Ze.value:Ze.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[o-r];r++);return Er=i.slice(e,1<r?1-r:void 0)}function Mr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function lr(){return!0}function Qa(){return!1}function Te(e){function n(t,r,i,o,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?lr:Qa,this.isPropagationStopped=Qa,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=lr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=lr)},persist:function(){},isPersistent:lr}),n}var ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=Te(ot),Qt=G({},ot,{view:0,detail:0}),nc=Te(Qt),Si,bi,pt,ni=G({},Qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pt&&(pt&&e.type==="mousemove"?(Si=e.screenX-pt.screenX,bi=e.screenY-pt.screenY):bi=Si=0,pt=e),Si)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),Ja=Te(ni),tc=G({},ni,{dataTransfer:0}),rc=Te(tc),ic=G({},Qt,{relatedTarget:0}),Ri=Te(ic),oc=G({},ot,{animationName:0,elapsedTime:0,pseudoElement:0}),ac=Te(oc),lc=G({},ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sc=Te(lc),uc=G({},ot,{data:0}),Ya=Te(uc),dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=fc[e])?!!n[e]:!1}function ta(){return pc}var mc=G({},Qt,{key:function(e){if(e.key){var n=dc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hc=Te(mc),yc=G({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qa=Te(yc),gc=G({},Qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),Tc=Te(gc),vc=G({},ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=Te(vc),Mc=G({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lc=Te(Mc),Hc=[9,13,27,32],ra=je&&"CompositionEvent"in window,Ht=null;je&&"documentMode"in document&&(Ht=document.documentMode);var Sc=je&&"TextEvent"in window&&!Ht,_s=je&&(!ra||Ht&&8<Ht&&11>=Ht),Za=" ",el=!1;function Vs(e,n){switch(e){case"keyup":return Hc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Is(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function bc(e,n){switch(e){case"compositionend":return Is(n);case"keypress":return n.which!==32?null:(el=!0,Za);case"textInput":return e=n.data,e===Za&&el?null:e;default:return null}}function Rc(e,n){if(_n)return e==="compositionend"||!ra&&Vs(e,n)?(e=Fs(),Er=ea=Ze=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _s&&n.locale!=="ko"?null:n.data;default:return null}}var xc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xc[e.type]:n==="textarea"}function Ns(e,n,t,r){hs(r),n=Vr(n,"onChange"),0<n.length&&(t=new na("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var St=null,Vt=null;function Cc(e){Qs(e,0)}function ti(e){var n=Nn(e);if(ss(n))return e}function Pc(e,n){if(e==="change")return n}var Os=!1;if(je){var xi;if(je){var Ci="oninput"in document;if(!Ci){var tl=document.createElement("div");tl.setAttribute("oninput","return;"),Ci=typeof tl.oninput=="function"}xi=Ci}else xi=!1;Os=xi&&(!document.documentMode||9<document.documentMode)}function rl(){St&&(St.detachEvent("onpropertychange",Gs),Vt=St=null)}function Gs(e){if(e.propertyName==="value"&&ti(Vt)){var n=[];Ns(n,Vt,e,Qo(e)),vs(Cc,n)}}function wc(e,n,t){e==="focusin"?(rl(),St=n,Vt=t,St.attachEvent("onpropertychange",Gs)):e==="focusout"&&rl()}function kc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(Vt)}function Ac(e,n){if(e==="click")return ti(n)}function Dc(e,n){if(e==="input"||e==="change")return ti(n)}function Fc(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ae=typeof Object.is=="function"?Object.is:Fc;function It(e,n){if(Ae(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Bi.call(n,i)||!Ae(e[i],n[i]))return!1}return!0}function il(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ol(e,n){var t=il(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=il(t)}}function zs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Us(){for(var e=window,n=Pr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Pr(e.document)}return n}function ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function _c(e){var n=Us(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&zs(t.ownerDocument.documentElement,t)){if(r!==null&&ia(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ol(t,o);var a=ol(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vc=je&&"documentMode"in document&&11>=document.documentMode,Vn=null,co=null,bt=null,fo=!1;function al(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fo||Vn==null||Vn!==Pr(r)||(r=Vn,"selectionStart"in r&&ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bt&&It(bt,r)||(bt=r,r=Vr(co,"onSelect"),0<r.length&&(n=new na("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Vn)))}function sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var In={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Pi={},js={};je&&(js=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function ri(e){if(Pi[e])return Pi[e];if(!In[e])return e;var n=In[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in js)return Pi[e]=n[t];return e}var Ws=ri("animationend"),Bs=ri("animationiteration"),Xs=ri("animationstart"),Ks=ri("transitionend"),$s=new Map,ll="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,n){$s.set(e,n),wn(n,[e])}for(var wi=0;wi<ll.length;wi++){var ki=ll[wi],Ic=ki.toLowerCase(),Nc=ki[0].toUpperCase()+ki.slice(1);fn(Ic,"on"+Nc)}fn(Ws,"onAnimationEnd");fn(Bs,"onAnimationIteration");fn(Xs,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(Ks,"onTransitionEnd");Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Et="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Et));function sl(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Id(r,n,void 0,e),e.currentTarget=null}function Qs(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;sl(i,l,d),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,d=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;sl(i,l,d),o=s}}}if(kr)throw e=ao,kr=!1,ao=null,e}function F(e,n){var t=n[go];t===void 0&&(t=n[go]=new Set);var r=e+"__bubble";t.has(r)||(Js(n,e,2,!1),t.add(r))}function Ai(e,n,t){var r=0;n&&(r|=4),Js(t,e,r,n)}var ur="_reactListening"+Math.random().toString(36).slice(2);function Nt(e){if(!e[ur]){e[ur]=!0,rs.forEach(function(t){t!=="selectionchange"&&(Oc.has(t)||Ai(t,!1,e),Ai(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ur]||(n[ur]=!0,Ai("selectionchange",!1,n))}}function Js(e,n,t,r){switch(Ds(n)){case 1:var i=Zd;break;case 4:i=ec;break;default:i=Zo}t=i.bind(null,n,t,e),i=void 0,!oo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Di(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=En(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}vs(function(){var d=o,h=Qo(t),m=[];e:{var p=$s.get(e);if(p!==void 0){var T=na,v=e;switch(e){case"keypress":if(Mr(t)===0)break e;case"keydown":case"keyup":T=hc;break;case"focusin":v="focus",T=Ri;break;case"focusout":v="blur",T=Ri;break;case"beforeblur":case"afterblur":T=Ri;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Tc;break;case Ws:case Bs:case Xs:T=ac;break;case Ks:T=Ec;break;case"scroll":T=nc;break;case"wheel":T=Lc;break;case"copy":case"cut":case"paste":T=sc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=qa}var E=(n&4)!==0,V=!E&&e==="scroll",c=E?p!==null?p+"Capture":null:p;E=[];for(var u=d,f;u!==null;){f=u;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,c!==null&&(y=At(u,c),y!=null&&E.push(Ot(u,y,f)))),V)break;u=u.return}0<E.length&&(p=new T(p,v,null,t,h),m.push({event:p,listeners:E}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",p&&t!==ro&&(v=t.relatedTarget||t.fromElement)&&(En(v)||v[We]))break e;if((T||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,T?(v=t.relatedTarget||t.toElement,T=d,v=v?En(v):null,v!==null&&(V=kn(v),v!==V||v.tag!==5&&v.tag!==6)&&(v=null)):(T=null,v=d),T!==v)){if(E=Ja,y="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(E=qa,y="onPointerLeave",c="onPointerEnter",u="pointer"),V=T==null?p:Nn(T),f=v==null?p:Nn(v),p=new E(y,u+"leave",T,t,h),p.target=V,p.relatedTarget=f,y=null,En(h)===d&&(E=new E(c,u+"enter",v,t,h),E.target=f,E.relatedTarget=V,y=E),V=y,T&&v)n:{for(E=T,c=v,u=0,f=E;f;f=An(f))u++;for(f=0,y=c;y;y=An(y))f++;for(;0<u-f;)E=An(E),u--;for(;0<f-u;)c=An(c),f--;for(;u--;){if(E===c||c!==null&&E===c.alternate)break n;E=An(E),c=An(c)}E=null}else E=null;T!==null&&ul(m,p,T,E,!1),v!==null&&V!==null&&ul(m,V,v,E,!0)}}e:{if(p=d?Nn(d):window,T=p.nodeName&&p.nodeName.toLowerCase(),T==="select"||T==="input"&&p.type==="file")var L=Pc;else if(nl(p))if(Os)L=Dc;else{L=kc;var S=wc}else(T=p.nodeName)&&T.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=Ac);if(L&&(L=L(e,d))){Ns(m,L,t,h);break e}S&&S(e,p,d),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&qi(p,"number",p.value)}switch(S=d?Nn(d):window,e){case"focusin":(nl(S)||S.contentEditable==="true")&&(Vn=S,co=d,bt=null);break;case"focusout":bt=co=Vn=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,al(m,t,h);break;case"selectionchange":if(Vc)break;case"keydown":case"keyup":al(m,t,h)}var b;if(ra)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _n?Vs(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(_s&&t.locale!=="ko"&&(_n||R!=="onCompositionStart"?R==="onCompositionEnd"&&_n&&(b=Fs()):(Ze=h,ea="value"in Ze?Ze.value:Ze.textContent,_n=!0)),S=Vr(d,R),0<S.length&&(R=new Ya(R,e,null,t,h),m.push({event:R,listeners:S}),b?R.data=b:(b=Is(t),b!==null&&(R.data=b)))),(b=Sc?bc(e,t):Rc(e,t))&&(d=Vr(d,"onBeforeInput"),0<d.length&&(h=new Ya("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:d}),h.data=b))}Qs(m,n)})}function Ot(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Vr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=At(e,t),o!=null&&r.unshift(Ot(e,o,i)),o=At(e,n),o!=null&&r.push(Ot(e,o,i))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ul(e,n,t,r,i){for(var o=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,d=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&d!==null&&(l=d,i?(s=At(t,o),s!=null&&a.unshift(Ot(t,s,l))):i||(s=At(t,o),s!=null&&a.push(Ot(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Gc=/\r\n?/g,zc=/\u0000|\uFFFD/g;function dl(e){return(typeof e=="string"?e:""+e).replace(Gc,`
`).replace(zc,"")}function dr(e,n,t){if(n=dl(n),dl(e)!==n&&t)throw Error(g(425))}function Ir(){}var po=null,mo=null;function ho(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Uc=typeof clearTimeout=="function"?clearTimeout:void 0,cl=typeof Promise=="function"?Promise:void 0,jc=typeof queueMicrotask=="function"?queueMicrotask:typeof cl<"u"?function(e){return cl.resolve(null).then(e).catch(Wc)}:yo;function Wc(e){setTimeout(function(){throw e})}function Fi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),_t(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);_t(n)}function on(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function fl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var at=Math.random().toString(36).slice(2),_e="__reactFiber$"+at,Gt="__reactProps$"+at,We="__reactContainer$"+at,go="__reactEvents$"+at,Bc="__reactListeners$"+at,Xc="__reactHandles$"+at;function En(e){var n=e[_e];if(n)return n;for(var t=e.parentNode;t;){if(n=t[We]||t[_e]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=fl(e);e!==null;){if(t=e[_e])return t;e=fl(e)}return n}e=t,t=e.parentNode}return null}function Jt(e){return e=e[_e]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ii(e){return e[Gt]||null}var To=[],On=-1;function pn(e){return{current:e}}function _(e){0>On||(e.current=To[On],To[On]=null,On--)}function D(e,n){On++,To[On]=e.current,e.current=n}var cn={},re=pn(cn),de=pn(!1),bn=cn;function qn(e,n){var t=e.type.contextTypes;if(!t)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ce(e){return e=e.childContextTypes,e!=null}function Nr(){_(de),_(re)}function pl(e,n,t){if(re.current!==cn)throw Error(g(168));D(re,n),D(de,t)}function Ys(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(g(108,wd(e)||"Unknown",i));return G({},t,r)}function Or(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,bn=re.current,D(re,e),D(de,de.current),!0}function ml(e,n,t){var r=e.stateNode;if(!r)throw Error(g(169));t?(e=Ys(e,n,bn),r.__reactInternalMemoizedMergedChildContext=e,_(de),_(re),D(re,e)):_(de),D(de,t)}var Oe=null,oi=!1,_i=!1;function qs(e){Oe===null?Oe=[e]:Oe.push(e)}function Kc(e){oi=!0,qs(e)}function mn(){if(!_i&&Oe!==null){_i=!0;var e=0,n=A;try{var t=Oe;for(A=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Oe=null,oi=!1}catch(i){throw Oe!==null&&(Oe=Oe.slice(e+1)),Hs(Jo,mn),i}finally{A=n,_i=!1}}return null}var Gn=[],zn=0,Gr=null,zr=0,ve=[],Ee=0,Rn=null,Ge=1,ze="";function Tn(e,n){Gn[zn++]=zr,Gn[zn++]=Gr,Gr=e,zr=n}function Zs(e,n,t){ve[Ee++]=Ge,ve[Ee++]=ze,ve[Ee++]=Rn,Rn=e;var r=Ge;e=ze;var i=32-we(r)-1;r&=~(1<<i),t+=1;var o=32-we(n)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ge=1<<32-we(n)+i|t<<i|r,ze=o+e}else Ge=1<<o|t<<i|r,ze=e}function oa(e){e.return!==null&&(Tn(e,1),Zs(e,1,0))}function aa(e){for(;e===Gr;)Gr=Gn[--zn],Gn[zn]=null,zr=Gn[--zn],Gn[zn]=null;for(;e===Rn;)Rn=ve[--Ee],ve[Ee]=null,ze=ve[--Ee],ve[Ee]=null,Ge=ve[--Ee],ve[Ee]=null}var he=null,me=null,I=!1,Pe=null;function eu(e,n){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function hl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,he=e,me=on(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,he=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Rn!==null?{id:Ge,overflow:ze}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,he=e,me=null,!0):!1;default:return!1}}function vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eo(e){if(I){var n=me;if(n){var t=n;if(!hl(e,n)){if(vo(e))throw Error(g(418));n=on(t.nextSibling);var r=he;n&&hl(e,n)?eu(r,t):(e.flags=e.flags&-4097|2,I=!1,he=e)}}else{if(vo(e))throw Error(g(418));e.flags=e.flags&-4097|2,I=!1,he=e}}}function yl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;he=e}function cr(e){if(e!==he)return!1;if(!I)return yl(e),I=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ho(e.type,e.memoizedProps)),n&&(n=me)){if(vo(e))throw nu(),Error(g(418));for(;n;)eu(e,n),n=on(n.nextSibling)}if(yl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=on(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=he?on(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=me;e;)e=on(e.nextSibling)}function Zn(){me=he=null,I=!1}function la(e){Pe===null?Pe=[e]:Pe.push(e)}var $c=Ke.ReactCurrentBatchConfig;function mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(g(309));var r=t.stateNode}if(!r)throw Error(g(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},n._stringRef=o,n)}if(typeof e!="string")throw Error(g(284));if(!t._owner)throw Error(g(290,e))}return e}function fr(e,n){throw e=Object.prototype.toString.call(n),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gl(e){var n=e._init;return n(e._payload)}function tu(e){function n(c,u){if(e){var f=c.deletions;f===null?(c.deletions=[u],c.flags|=16):f.push(u)}}function t(c,u){if(!e)return null;for(;u!==null;)n(c,u),u=u.sibling;return null}function r(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=un(c,u),c.index=0,c.sibling=null,c}function o(c,u,f){return c.index=f,e?(f=c.alternate,f!==null?(f=f.index,f<u?(c.flags|=2,u):f):(c.flags|=2,u)):(c.flags|=1048576,u)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,u,f,y){return u===null||u.tag!==6?(u=Ui(f,c.mode,y),u.return=c,u):(u=i(u,f),u.return=c,u)}function s(c,u,f,y){var L=f.type;return L===Fn?h(c,u,f.props.children,y,f.key):u!==null&&(u.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Qe&&gl(L)===u.type)?(y=i(u,f.props),y.ref=mt(c,u,f),y.return=c,y):(y=Cr(f.type,f.key,f.props,null,c.mode,y),y.ref=mt(c,u,f),y.return=c,y)}function d(c,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=ji(f,c.mode,y),u.return=c,u):(u=i(u,f.children||[]),u.return=c,u)}function h(c,u,f,y,L){return u===null||u.tag!==7?(u=Sn(f,c.mode,y,L),u.return=c,u):(u=i(u,f),u.return=c,u)}function m(c,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ui(""+u,c.mode,f),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case nr:return f=Cr(u.type,u.key,u.props,null,c.mode,f),f.ref=mt(c,null,u),f.return=c,f;case Dn:return u=ji(u,c.mode,f),u.return=c,u;case Qe:var y=u._init;return m(c,y(u._payload),f)}if(Tt(u)||ut(u))return u=Sn(u,c.mode,f,null),u.return=c,u;fr(c,u)}return null}function p(c,u,f,y){var L=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return L!==null?null:l(c,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:return f.key===L?s(c,u,f,y):null;case Dn:return f.key===L?d(c,u,f,y):null;case Qe:return L=f._init,p(c,u,L(f._payload),y)}if(Tt(f)||ut(f))return L!==null?null:h(c,u,f,y,null);fr(c,f)}return null}function T(c,u,f,y,L){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(f)||null,l(u,c,""+y,L);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nr:return c=c.get(y.key===null?f:y.key)||null,s(u,c,y,L);case Dn:return c=c.get(y.key===null?f:y.key)||null,d(u,c,y,L);case Qe:var S=y._init;return T(c,u,f,S(y._payload),L)}if(Tt(y)||ut(y))return c=c.get(f)||null,h(u,c,y,L,null);fr(u,y)}return null}function v(c,u,f,y){for(var L=null,S=null,b=u,R=u=0,U=null;b!==null&&R<f.length;R++){b.index>R?(U=b,b=null):U=b.sibling;var w=p(c,b,f[R],y);if(w===null){b===null&&(b=U);break}e&&b&&w.alternate===null&&n(c,b),u=o(w,u,R),S===null?L=w:S.sibling=w,S=w,b=U}if(R===f.length)return t(c,b),I&&Tn(c,R),L;if(b===null){for(;R<f.length;R++)b=m(c,f[R],y),b!==null&&(u=o(b,u,R),S===null?L=b:S.sibling=b,S=b);return I&&Tn(c,R),L}for(b=r(c,b);R<f.length;R++)U=T(b,c,R,f[R],y),U!==null&&(e&&U.alternate!==null&&b.delete(U.key===null?R:U.key),u=o(U,u,R),S===null?L=U:S.sibling=U,S=U);return e&&b.forEach(function(be){return n(c,be)}),I&&Tn(c,R),L}function E(c,u,f,y){var L=ut(f);if(typeof L!="function")throw Error(g(150));if(f=L.call(f),f==null)throw Error(g(151));for(var S=L=null,b=u,R=u=0,U=null,w=f.next();b!==null&&!w.done;R++,w=f.next()){b.index>R?(U=b,b=null):U=b.sibling;var be=p(c,b,w.value,y);if(be===null){b===null&&(b=U);break}e&&b&&be.alternate===null&&n(c,b),u=o(be,u,R),S===null?L=be:S.sibling=be,S=be,b=U}if(w.done)return t(c,b),I&&Tn(c,R),L;if(b===null){for(;!w.done;R++,w=f.next())w=m(c,w.value,y),w!==null&&(u=o(w,u,R),S===null?L=w:S.sibling=w,S=w);return I&&Tn(c,R),L}for(b=r(c,b);!w.done;R++,w=f.next())w=T(b,c,R,w.value,y),w!==null&&(e&&w.alternate!==null&&b.delete(w.key===null?R:w.key),u=o(w,u,R),S===null?L=w:S.sibling=w,S=w);return e&&b.forEach(function(lt){return n(c,lt)}),I&&Tn(c,R),L}function V(c,u,f,y){if(typeof f=="object"&&f!==null&&f.type===Fn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:e:{for(var L=f.key,S=u;S!==null;){if(S.key===L){if(L=f.type,L===Fn){if(S.tag===7){t(c,S.sibling),u=i(S,f.props.children),u.return=c,c=u;break e}}else if(S.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Qe&&gl(L)===S.type){t(c,S.sibling),u=i(S,f.props),u.ref=mt(c,S,f),u.return=c,c=u;break e}t(c,S);break}else n(c,S);S=S.sibling}f.type===Fn?(u=Sn(f.props.children,c.mode,y,f.key),u.return=c,c=u):(y=Cr(f.type,f.key,f.props,null,c.mode,y),y.ref=mt(c,u,f),y.return=c,c=y)}return a(c);case Dn:e:{for(S=f.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(c,u.sibling),u=i(u,f.children||[]),u.return=c,c=u;break e}else{t(c,u);break}else n(c,u);u=u.sibling}u=ji(f,c.mode,y),u.return=c,c=u}return a(c);case Qe:return S=f._init,V(c,u,S(f._payload),y)}if(Tt(f))return v(c,u,f,y);if(ut(f))return E(c,u,f,y);fr(c,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(c,u.sibling),u=i(u,f),u.return=c,c=u):(t(c,u),u=Ui(f,c.mode,y),u.return=c,c=u),a(c)):t(c,u)}return V}var et=tu(!0),ru=tu(!1),Ur=pn(null),jr=null,Un=null,sa=null;function ua(){sa=Un=jr=null}function da(e){var n=Ur.current;_(Ur),e._currentValue=n}function Mo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Qn(e,n){jr=e,sa=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ue=!0),e.firstContext=null)}function He(e){var n=e._currentValue;if(sa!==e)if(e={context:e,memoizedValue:n,next:null},Un===null){if(jr===null)throw Error(g(308));Un=e,jr.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return n}var Mn=null;function ca(e){Mn===null?Mn=[e]:Mn.push(e)}function iu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ca(n)):(t.next=i.next,i.next=t),n.interleaved=t,Be(e,r)}function Be(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Je=!1;function fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ou(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function an(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,k&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Be(e,t)}return i=r.interleaved,i===null?(n.next=n,ca(r)):(n.next=i.next,i.next=n),r.interleaved=n,Be(e,t)}function Lr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Yo(e,t)}}function Tl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=a:o=o.next=a,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Wr(e,n,t,r){var i=e.updateQueue;Je=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,d=s.next;s.next=null,a===null?o=d:a.next=d,a=s;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=s))}if(o!==null){var m=i.baseState;a=0,h=d=s=null,l=o;do{var p=l.lane,T=l.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,E=l;switch(p=n,T=t,E.tag){case 1:if(v=E.payload,typeof v=="function"){m=v.call(T,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,p=typeof v=="function"?v.call(T,m,p):v,p==null)break e;m=G({},m,p);break e;case 2:Je=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else T={eventTime:T,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=T,s=m):h=h.next=T,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(s=m),i.baseState=s,i.firstBaseUpdate=d,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Cn|=a,e.lanes=a,e.memoizedState=m}}function vl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(g(191,i));i.call(r)}}}var Yt={},Ie=pn(Yt),zt=pn(Yt),Ut=pn(Yt);function Ln(e){if(e===Yt)throw Error(g(174));return e}function pa(e,n){switch(D(Ut,n),D(zt,e),D(Ie,Yt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:eo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=eo(n,e)}_(Ie),D(Ie,n)}function nt(){_(Ie),_(zt),_(Ut)}function au(e){Ln(Ut.current);var n=Ln(Ie.current),t=eo(n,e.type);n!==t&&(D(zt,e),D(Ie,t))}function ma(e){zt.current===e&&(_(Ie),_(zt))}var N=pn(0);function Br(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=[];function ha(){for(var e=0;e<Vi.length;e++)Vi[e]._workInProgressVersionPrimary=null;Vi.length=0}var Hr=Ke.ReactCurrentDispatcher,Ii=Ke.ReactCurrentBatchConfig,xn=0,O=null,X=null,Q=null,Xr=!1,Rt=!1,jt=0,Qc=0;function ee(){throw Error(g(321))}function ya(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ae(e[t],n[t]))return!1;return!0}function ga(e,n,t,r,i,o){if(xn=o,O=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Hr.current=e===null||e.memoizedState===null?Zc:ef,e=t(r,i),Rt){o=0;do{if(Rt=!1,jt=0,25<=o)throw Error(g(301));o+=1,Q=X=null,n.updateQueue=null,Hr.current=nf,e=t(r,i)}while(Rt)}if(Hr.current=Kr,n=X!==null&&X.next!==null,xn=0,Q=X=O=null,Xr=!1,n)throw Error(g(300));return e}function Ta(){var e=jt!==0;return jt=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Q===null?O.memoizedState=Q=e:Q=Q.next=e,Q}function Se(){if(X===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=Q===null?O.memoizedState:Q.next;if(n!==null)Q=n,X=e;else{if(e===null)throw Error(g(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Q===null?O.memoizedState=Q=e:Q=Q.next=e}return Q}function Wt(e,n){return typeof n=="function"?n(e):n}function Ni(e){var n=Se(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=X,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,d=o;do{var h=d.lane;if((xn&h)===h)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=m,a=r):s=s.next=m,O.lanes|=h,Cn|=h}d=d.next}while(d!==null&&d!==o);s===null?a=r:s.next=l,Ae(r,n.memoizedState)||(ue=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,O.lanes|=o,Cn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Oi(e){var n=Se(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ae(o,n.memoizedState)||(ue=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function lu(){}function su(e,n){var t=O,r=Se(),i=n(),o=!Ae(r.memoizedState,i);if(o&&(r.memoizedState=i,ue=!0),r=r.queue,va(cu.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Q!==null&&Q.memoizedState.tag&1){if(t.flags|=2048,Bt(9,du.bind(null,t,r,i,n),void 0,null),J===null)throw Error(g(349));xn&30||uu(t,n,i)}return i}function uu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=O.updateQueue,n===null?(n={lastEffect:null,stores:null},O.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function du(e,n,t,r){n.value=t,n.getSnapshot=r,fu(n)&&pu(e)}function cu(e,n,t){return t(function(){fu(n)&&pu(e)})}function fu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ae(e,t)}catch{return!0}}function pu(e){var n=Be(e,1);n!==null&&ke(n,e,1,-1)}function El(e){var n=Fe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},n.queue=e,e=e.dispatch=qc.bind(null,O,e),[n.memoizedState,e]}function Bt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=O.updateQueue,n===null?(n={lastEffect:null,stores:null},O.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function mu(){return Se().memoizedState}function Sr(e,n,t,r){var i=Fe();O.flags|=e,i.memoizedState=Bt(1|n,t,void 0,r===void 0?null:r)}function ai(e,n,t,r){var i=Se();r=r===void 0?null:r;var o=void 0;if(X!==null){var a=X.memoizedState;if(o=a.destroy,r!==null&&ya(r,a.deps)){i.memoizedState=Bt(n,t,o,r);return}}O.flags|=e,i.memoizedState=Bt(1|n,t,o,r)}function Ml(e,n){return Sr(8390656,8,e,n)}function va(e,n){return ai(2048,8,e,n)}function hu(e,n){return ai(4,2,e,n)}function yu(e,n){return ai(4,4,e,n)}function gu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tu(e,n,t){return t=t!=null?t.concat([e]):null,ai(4,4,gu.bind(null,n,e),t)}function Ea(){}function vu(e,n){var t=Se();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ya(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Eu(e,n){var t=Se();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ya(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Mu(e,n,t){return xn&21?(Ae(t,n)||(t=Rs(),O.lanes|=t,Cn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=t)}function Jc(e,n){var t=A;A=t!==0&&4>t?t:4,e(!0);var r=Ii.transition;Ii.transition={};try{e(!1),n()}finally{A=t,Ii.transition=r}}function Lu(){return Se().memoizedState}function Yc(e,n,t){var r=sn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Hu(e))Su(n,t);else if(t=iu(e,n,t,r),t!==null){var i=oe();ke(t,e,r,i),bu(t,n,r)}}function qc(e,n,t){var r=sn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Hu(e))Su(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var a=n.lastRenderedState,l=o(a,t);if(i.hasEagerState=!0,i.eagerState=l,Ae(l,a)){var s=n.interleaved;s===null?(i.next=i,ca(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=iu(e,n,i,r),t!==null&&(i=oe(),ke(t,e,r,i),bu(t,n,r))}}function Hu(e){var n=e.alternate;return e===O||n!==null&&n===O}function Su(e,n){Rt=Xr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function bu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Yo(e,t)}}var Kr={readContext:He,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},Zc={readContext:He,useCallback:function(e,n){return Fe().memoizedState=[e,n===void 0?null:n],e},useContext:He,useEffect:Ml,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Sr(4194308,4,gu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Sr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Sr(4,2,e,n)},useMemo:function(e,n){var t=Fe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Fe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Yc.bind(null,O,e),[r.memoizedState,e]},useRef:function(e){var n=Fe();return e={current:e},n.memoizedState=e},useState:El,useDebugValue:Ea,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=El(!1),n=e[0];return e=Jc.bind(null,e[1]),Fe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=O,i=Fe();if(I){if(t===void 0)throw Error(g(407));t=t()}else{if(t=n(),J===null)throw Error(g(349));xn&30||uu(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Ml(cu.bind(null,r,o,e),[e]),r.flags|=2048,Bt(9,du.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Fe(),n=J.identifierPrefix;if(I){var t=ze,r=Ge;t=(r&~(1<<32-we(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=jt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Qc++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},ef={readContext:He,useCallback:vu,useContext:He,useEffect:va,useImperativeHandle:Tu,useInsertionEffect:hu,useLayoutEffect:yu,useMemo:Eu,useReducer:Ni,useRef:mu,useState:function(){return Ni(Wt)},useDebugValue:Ea,useDeferredValue:function(e){var n=Se();return Mu(n,X.memoizedState,e)},useTransition:function(){var e=Ni(Wt)[0],n=Se().memoizedState;return[e,n]},useMutableSource:lu,useSyncExternalStore:su,useId:Lu,unstable_isNewReconciler:!1},nf={readContext:He,useCallback:vu,useContext:He,useEffect:va,useImperativeHandle:Tu,useInsertionEffect:hu,useLayoutEffect:yu,useMemo:Eu,useReducer:Oi,useRef:mu,useState:function(){return Oi(Wt)},useDebugValue:Ea,useDeferredValue:function(e){var n=Se();return X===null?n.memoizedState=e:Mu(n,X.memoizedState,e)},useTransition:function(){var e=Oi(Wt)[0],n=Se().memoizedState;return[e,n]},useMutableSource:lu,useSyncExternalStore:su,useId:Lu,unstable_isNewReconciler:!1};function xe(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Lo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:G({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var li={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=oe(),i=sn(e),o=Ue(r,i);o.payload=n,t!=null&&(o.callback=t),n=an(e,o,i),n!==null&&(ke(n,e,i,r),Lr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=oe(),i=sn(e),o=Ue(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=an(e,o,i),n!==null&&(ke(n,e,i,r),Lr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),r=sn(e),i=Ue(t,r);i.tag=2,n!=null&&(i.callback=n),n=an(e,i,r),n!==null&&(ke(n,e,r,t),Lr(n,e,r))}};function Ll(e,n,t,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):n.prototype&&n.prototype.isPureReactComponent?!It(t,r)||!It(i,o):!0}function Ru(e,n,t){var r=!1,i=cn,o=n.contextType;return typeof o=="object"&&o!==null?o=He(o):(i=ce(n)?bn:re.current,r=n.contextTypes,o=(r=r!=null)?qn(e,i):cn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=li,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Hl(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&li.enqueueReplaceState(n,n.state,null)}function Ho(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},fa(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=He(o):(o=ce(n)?bn:re.current,i.context=qn(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Lo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&li.enqueueReplaceState(i,i.state,null),Wr(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function tt(e,n){try{var t="",r=n;do t+=Pd(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Gi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function So(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function xu(e,n,t){t=Ue(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Qr||(Qr=!0,Fo=r),So(e,n)},t}function Cu(e,n,t){t=Ue(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){So(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){So(e,n),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Sl(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new tf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=gf.bind(null,e,n,t),n.then(e,e))}function bl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Rl(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ue(-1,1),n.tag=2,an(t,n,1))),t.lanes|=1),e)}var rf=Ke.ReactCurrentOwner,ue=!1;function ie(e,n,t,r){n.child=e===null?ru(n,null,t,r):et(n,e.child,t,r)}function xl(e,n,t,r,i){t=t.render;var o=n.ref;return Qn(n,i),r=ga(e,n,t,r,o,i),t=Ta(),e!==null&&!ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xe(e,n,i)):(I&&t&&oa(n),n.flags|=1,ie(e,n,r,i),n.child)}function Cl(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Ca(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Pu(e,n,o,r,i)):(e=Cr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(t=t.compare,t=t!==null?t:It,t(a,r)&&e.ref===n.ref)return Xe(e,n,i)}return n.flags|=1,e=un(o,r),e.ref=n.ref,e.return=n,n.child=e}function Pu(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(It(o,r)&&e.ref===n.ref)if(ue=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ue=!0);else return n.lanes=e.lanes,Xe(e,n,i)}return bo(e,n,t,r,i)}function wu(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Wn,pe),pe|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,D(Wn,pe),pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,D(Wn,pe),pe|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,D(Wn,pe),pe|=r;return ie(e,n,i,t),n.child}function ku(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function bo(e,n,t,r,i){var o=ce(t)?bn:re.current;return o=qn(n,o),Qn(n,i),t=ga(e,n,t,r,o,i),r=Ta(),e!==null&&!ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xe(e,n,i)):(I&&r&&oa(n),n.flags|=1,ie(e,n,t,i),n.child)}function Pl(e,n,t,r,i){if(ce(t)){var o=!0;Or(n)}else o=!1;if(Qn(n,i),n.stateNode===null)br(e,n),Ru(n,t,r),Ho(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,d=t.contextType;typeof d=="object"&&d!==null?d=He(d):(d=ce(t)?bn:re.current,d=qn(n,d));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==d)&&Hl(n,a,r,d),Je=!1;var p=n.memoizedState;a.state=p,Wr(n,r,a,i),s=n.memoizedState,l!==r||p!==s||de.current||Je?(typeof h=="function"&&(Lo(n,t,h,r),s=n.memoizedState),(l=Je||Ll(n,t,l,r,p,s,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,ou(e,n),l=n.memoizedProps,d=n.type===n.elementType?l:xe(n.type,l),a.props=d,m=n.pendingProps,p=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=He(s):(s=ce(t)?bn:re.current,s=qn(n,s));var T=t.getDerivedStateFromProps;(h=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||p!==s)&&Hl(n,a,r,s),Je=!1,p=n.memoizedState,a.state=p,Wr(n,r,a,i);var v=n.memoizedState;l!==m||p!==v||de.current||Je?(typeof T=="function"&&(Lo(n,t,T,r),v=n.memoizedState),(d=Je||Ll(n,t,d,r,p,v,s)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=s,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Ro(e,n,t,r,o,i)}function Ro(e,n,t,r,i,o){ku(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&ml(n,t,!1),Xe(e,n,o);r=n.stateNode,rf.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=et(n,e.child,null,o),n.child=et(n,null,l,o)):ie(e,n,l,o),n.memoizedState=r.state,i&&ml(n,t,!0),n.child}function Au(e){var n=e.stateNode;n.pendingContext?pl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&pl(e,n.context,!1),pa(e,n.containerInfo)}function wl(e,n,t,r,i){return Zn(),la(i),n.flags|=256,ie(e,n,t,r),n.child}var xo={dehydrated:null,treeContext:null,retryLane:0};function Co(e){return{baseLanes:e,cachePool:null,transitions:null}}function Du(e,n,t){var r=n.pendingProps,i=N.current,o=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(N,i&1),e===null)return Eo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,o?(r=n.mode,o=n.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=di(a,r,0,null),e=Sn(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Co(t),n.memoizedState=xo,e):Ma(n,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return of(e,n,a,r,l,i,t);if(o){o=r.fallback,a=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=un(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=un(l,o):(o=Sn(o,a,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,a=e.child.memoizedState,a=a===null?Co(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~t,n.memoizedState=xo,r}return o=e.child,e=o.sibling,r=un(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ma(e,n){return n=di({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function pr(e,n,t,r){return r!==null&&la(r),et(n,e.child,null,t),e=Ma(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function of(e,n,t,r,i,o,a){if(t)return n.flags&256?(n.flags&=-257,r=Gi(Error(g(422))),pr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=di({mode:"visible",children:r.children},i,0,null),o=Sn(o,i,a,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&et(n,e.child,null,a),n.child.memoizedState=Co(a),n.memoizedState=xo,o);if(!(n.mode&1))return pr(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(g(419)),r=Gi(o,r,void 0),pr(e,n,a,r)}if(l=(a&e.childLanes)!==0,ue||l){if(r=J,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Be(e,i),ke(r,e,i,-1))}return xa(),r=Gi(Error(g(421))),pr(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Tf.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,me=on(i.nextSibling),he=n,I=!0,Pe=null,e!==null&&(ve[Ee++]=Ge,ve[Ee++]=ze,ve[Ee++]=Rn,Ge=e.id,ze=e.overflow,Rn=n),n=Ma(n,r.children),n.flags|=4096,n)}function kl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Mo(e.return,n,t)}function zi(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Fu(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ie(e,n,r.children,t),r=N.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kl(e,t,n);else if(e.tag===19)kl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(N,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Br(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),zi(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Br(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}zi(n,!0,t,null,o);break;case"together":zi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function br(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Cn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(g(153));if(n.child!==null){for(e=n.child,t=un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function af(e,n,t){switch(n.tag){case 3:Au(n),Zn();break;case 5:au(n);break;case 1:ce(n.type)&&Or(n);break;case 4:pa(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;D(Ur,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(D(N,N.current&1),n.flags|=128,null):t&n.child.childLanes?Du(e,n,t):(D(N,N.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);D(N,N.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Fu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(N,N.current),r)break;return null;case 22:case 23:return n.lanes=0,wu(e,n,t)}return Xe(e,n,t)}var _u,Po,Vu,Iu;_u=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Po=function(){};Vu=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Ln(Ie.current);var o=null;switch(t){case"input":i=Ji(e,i),r=Ji(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=Zi(e,i),r=Zi(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ir)}no(t,r);var a;t=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(wt.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var s=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(o||(o=[]),o.push(d,t)),t=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(wt.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&F("scroll",e),o||l===s||(o=[])):(o=o||[]).push(d,s))}t&&(o=o||[]).push("style",t);var d=o;(n.updateQueue=d)&&(n.flags|=4)}};Iu=function(e,n,t,r){t!==r&&(n.flags|=4)};function ht(e,n){if(!I)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function lf(e,n,t){var r=n.pendingProps;switch(aa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return ce(n.type)&&Nr(),ne(n),null;case 3:return r=n.stateNode,nt(),_(de),_(re),ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Pe!==null&&(Io(Pe),Pe=null))),Po(e,n),ne(n),null;case 5:ma(n);var i=Ln(Ut.current);if(t=n.type,e!==null&&n.stateNode!=null)Vu(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(g(166));return ne(n),null}if(e=Ln(Ie.current),cr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[_e]=n,r[Gt]=o,e=(n.mode&1)!==0,t){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(i=0;i<Et.length;i++)F(Et[i],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Ga(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":Ua(r,o),F("invalid",r)}no(t,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,l,e),i=["children",""+l]):wt.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&F("scroll",r)}switch(t){case"input":tr(r),za(r,o,!0);break;case"textarea":tr(r),ja(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ir)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[_e]=n,e[Gt]=r,_u(e,n,!1,!1),n.stateNode=e;e:{switch(a=to(t,r),t){case"dialog":F("cancel",e),F("close",e),i=r;break;case"iframe":case"object":case"embed":F("load",e),i=r;break;case"video":case"audio":for(i=0;i<Et.length;i++)F(Et[i],e);i=r;break;case"source":F("error",e),i=r;break;case"img":case"image":case"link":F("error",e),F("load",e),i=r;break;case"details":F("toggle",e),i=r;break;case"input":Ga(e,r),i=Ji(e,r),F("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),F("invalid",e);break;case"textarea":Ua(e,r),i=Zi(e,r),F("invalid",e);break;default:i=r}no(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?ms(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fs(e,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&kt(e,s):typeof s=="number"&&kt(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wt.hasOwnProperty(o)?s!=null&&o==="onScroll"&&F("scroll",e):s!=null&&Bo(e,o,s,a))}switch(t){case"input":tr(e),za(e,r,!1);break;case"textarea":tr(e),ja(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Bn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Bn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ir)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ne(n),null;case 6:if(e&&n.stateNode!=null)Iu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(g(166));if(t=Ln(Ut.current),Ln(Ie.current),cr(n)){if(r=n.stateNode,t=n.memoizedProps,r[_e]=n,(o=r.nodeValue!==t)&&(e=he,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[_e]=n,n.stateNode=r}return ne(n),null;case 13:if(_(N),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(I&&me!==null&&n.mode&1&&!(n.flags&128))nu(),Zn(),n.flags|=98560,o=!1;else if(o=cr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(g(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(g(317));o[_e]=n}else Zn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ne(n),o=!1}else Pe!==null&&(Io(Pe),Pe=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||N.current&1?K===0&&(K=3):xa())),n.updateQueue!==null&&(n.flags|=4),ne(n),null);case 4:return nt(),Po(e,n),e===null&&Nt(n.stateNode.containerInfo),ne(n),null;case 10:return da(n.type._context),ne(n),null;case 17:return ce(n.type)&&Nr(),ne(n),null;case 19:if(_(N),o=n.memoizedState,o===null)return ne(n),null;if(r=(n.flags&128)!==0,a=o.rendering,a===null)if(r)ht(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Br(e),a!==null){for(n.flags|=128,ht(o,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return D(N,N.current&1|2),n.child}e=e.sibling}o.tail!==null&&W()>rt&&(n.flags|=128,r=!0,ht(o,!1),n.lanes=4194304)}else{if(!r)if(e=Br(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ht(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!I)return ne(n),null}else 2*W()-o.renderingStartTime>rt&&t!==1073741824&&(n.flags|=128,r=!0,ht(o,!1),n.lanes=4194304);o.isBackwards?(a.sibling=n.child,n.child=a):(t=o.last,t!==null?t.sibling=a:n.child=a,o.last=a)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=W(),n.sibling=null,t=N.current,D(N,r?t&1|2:t&1),n):(ne(n),null);case 22:case 23:return Ra(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?pe&1073741824&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),null;case 24:return null;case 25:return null}throw Error(g(156,n.tag))}function sf(e,n){switch(aa(n),n.tag){case 1:return ce(n.type)&&Nr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return nt(),_(de),_(re),ha(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ma(n),null;case 13:if(_(N),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(g(340));Zn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _(N),null;case 4:return nt(),null;case 10:return da(n.type._context),null;case 22:case 23:return Ra(),null;case 24:return null;default:return null}}var mr=!1,te=!1,uf=typeof WeakSet=="function"?WeakSet:Set,M=null;function jn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){z(e,n,r)}else t.current=null}function wo(e,n,t){try{t()}catch(r){z(e,n,r)}}var Al=!1;function df(e,n){if(po=Fr,e=Us(),ia(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,d=0,h=0,m=e,p=null;n:for(;;){for(var T;m!==t||i!==0&&m.nodeType!==3||(l=a+i),m!==o||r!==0&&m.nodeType!==3||(s=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(T=m.firstChild)!==null;)p=m,m=T;for(;;){if(m===e)break n;if(p===t&&++d===i&&(l=a),p===o&&++h===r&&(s=a),(T=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=T}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(mo={focusedElem:e,selectionRange:t},Fr=!1,M=n;M!==null;)if(n=M,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,M=e;else for(;M!==null;){n=M;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,V=v.memoizedState,c=n.stateNode,u=c.getSnapshotBeforeUpdate(n.elementType===n.type?E:xe(n.type,E),V);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){z(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,M=e;break}M=n.return}return v=Al,Al=!1,v}function xt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&wo(n,t,o)}i=i.next}while(i!==r)}}function si(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ko(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Nu(e){var n=e.alternate;n!==null&&(e.alternate=null,Nu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[_e],delete n[Gt],delete n[go],delete n[Bc],delete n[Xc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ou(e){return e.tag===5||e.tag===3||e.tag===4}function Dl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ao(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ir));else if(r!==4&&(e=e.child,e!==null))for(Ao(e,n,t),e=e.sibling;e!==null;)Ao(e,n,t),e=e.sibling}function Do(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Do(e,n,t),e=e.sibling;e!==null;)Do(e,n,t),e=e.sibling}var Y=null,Ce=!1;function $e(e,n,t){for(t=t.child;t!==null;)Gu(e,n,t),t=t.sibling}function Gu(e,n,t){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(ei,t)}catch{}switch(t.tag){case 5:te||jn(t,n);case 6:var r=Y,i=Ce;Y=null,$e(e,n,t),Y=r,Ce=i,Y!==null&&(Ce?(e=Y,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Y.removeChild(t.stateNode));break;case 18:Y!==null&&(Ce?(e=Y,t=t.stateNode,e.nodeType===8?Fi(e.parentNode,t):e.nodeType===1&&Fi(e,t),_t(e)):Fi(Y,t.stateNode));break;case 4:r=Y,i=Ce,Y=t.stateNode.containerInfo,Ce=!0,$e(e,n,t),Y=r,Ce=i;break;case 0:case 11:case 14:case 15:if(!te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&wo(t,n,a),i=i.next}while(i!==r)}$e(e,n,t);break;case 1:if(!te&&(jn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){z(t,n,l)}$e(e,n,t);break;case 21:$e(e,n,t);break;case 22:t.mode&1?(te=(r=te)||t.memoizedState!==null,$e(e,n,t),te=r):$e(e,n,t);break;default:$e(e,n,t)}}function Fl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new uf),n.forEach(function(r){var i=vf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:Y=l.stateNode,Ce=!1;break e;case 3:Y=l.stateNode.containerInfo,Ce=!0;break e;case 4:Y=l.stateNode.containerInfo,Ce=!0;break e}l=l.return}if(Y===null)throw Error(g(160));Gu(o,a,i),Y=null,Ce=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(d){z(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)zu(n,e),n=n.sibling}function zu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),De(e),r&4){try{xt(3,e,e.return),si(3,e)}catch(E){z(e,e.return,E)}try{xt(5,e,e.return)}catch(E){z(e,e.return,E)}}break;case 1:Re(n,e),De(e),r&512&&t!==null&&jn(t,t.return);break;case 5:if(Re(n,e),De(e),r&512&&t!==null&&jn(t,t.return),e.flags&32){var i=e.stateNode;try{kt(i,"")}catch(E){z(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=t!==null?t.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&us(i,o),to(l,a);var d=to(l,o);for(a=0;a<s.length;a+=2){var h=s[a],m=s[a+1];h==="style"?ms(i,m):h==="dangerouslySetInnerHTML"?fs(i,m):h==="children"?kt(i,m):Bo(i,h,m,d)}switch(l){case"input":Yi(i,o);break;case"textarea":ds(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var T=o.value;T!=null?Bn(i,!!o.multiple,T,!1):p!==!!o.multiple&&(o.defaultValue!=null?Bn(i,!!o.multiple,o.defaultValue,!0):Bn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Gt]=o}catch(E){z(e,e.return,E)}}break;case 6:if(Re(n,e),De(e),r&4){if(e.stateNode===null)throw Error(g(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(E){z(e,e.return,E)}}break;case 3:if(Re(n,e),De(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{_t(n.containerInfo)}catch(E){z(e,e.return,E)}break;case 4:Re(n,e),De(e);break;case 13:Re(n,e),De(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Sa=W())),r&4&&Fl(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(te=(d=te)||h,Re(n,e),te=d):Re(n,e),De(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(M=e,h=e.child;h!==null;){for(m=M=h;M!==null;){switch(p=M,T=p.child,p.tag){case 0:case 11:case 14:case 15:xt(4,p,p.return);break;case 1:jn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(E){z(r,t,E)}}break;case 5:jn(p,p.return);break;case 22:if(p.memoizedState!==null){Vl(m);continue}}T!==null?(T.return=p,M=T):Vl(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,s=m.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ps("display",a))}catch(E){z(e,e.return,E)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(E){z(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(n,e),De(e),r&4&&Fl(e);break;case 21:break;default:Re(n,e),De(e)}}function De(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Ou(t)){var r=t;break e}t=t.return}throw Error(g(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kt(i,""),r.flags&=-33);var o=Dl(e);Do(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Dl(e);Ao(e,l,a);break;default:throw Error(g(161))}}catch(s){z(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function cf(e,n,t){M=e,Uu(e)}function Uu(e,n,t){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||mr;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||te;l=mr;var d=te;if(mr=a,(te=s)&&!d)for(M=i;M!==null;)a=M,s=a.child,a.tag===22&&a.memoizedState!==null?Il(i):s!==null?(s.return=a,M=s):Il(i);for(;o!==null;)M=o,Uu(o),o=o.sibling;M=i,mr=l,te=d}_l(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):_l(e)}}function _l(e){for(;M!==null;){var n=M;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:te||si(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!te)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:xe(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&vl(n,o,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}vl(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&_t(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}te||n.flags&512&&ko(n)}catch(p){z(n,n.return,p)}}if(n===e){M=null;break}if(t=n.sibling,t!==null){t.return=n.return,M=t;break}M=n.return}}function Vl(e){for(;M!==null;){var n=M;if(n===e){M=null;break}var t=n.sibling;if(t!==null){t.return=n.return,M=t;break}M=n.return}}function Il(e){for(;M!==null;){var n=M;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{si(4,n)}catch(s){z(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){z(n,i,s)}}var o=n.return;try{ko(n)}catch(s){z(n,o,s)}break;case 5:var a=n.return;try{ko(n)}catch(s){z(n,a,s)}}}catch(s){z(n,n.return,s)}if(n===e){M=null;break}var l=n.sibling;if(l!==null){l.return=n.return,M=l;break}M=n.return}}var ff=Math.ceil,$r=Ke.ReactCurrentDispatcher,La=Ke.ReactCurrentOwner,Le=Ke.ReactCurrentBatchConfig,k=0,J=null,B=null,q=0,pe=0,Wn=pn(0),K=0,Xt=null,Cn=0,ui=0,Ha=0,Ct=null,se=null,Sa=0,rt=1/0,Ne=null,Qr=!1,Fo=null,ln=null,hr=!1,en=null,Jr=0,Pt=0,_o=null,Rr=-1,xr=0;function oe(){return k&6?W():Rr!==-1?Rr:Rr=W()}function sn(e){return e.mode&1?k&2&&q!==0?q&-q:$c.transition!==null?(xr===0&&(xr=Rs()),xr):(e=A,e!==0||(e=window.event,e=e===void 0?16:Ds(e.type)),e):1}function ke(e,n,t,r){if(50<Pt)throw Pt=0,_o=null,Error(g(185));$t(e,t,r),(!(k&2)||e!==J)&&(e===J&&(!(k&2)&&(ui|=t),K===4&&qe(e,q)),fe(e,r),t===1&&k===0&&!(n.mode&1)&&(rt=W()+500,oi&&mn()))}function fe(e,n){var t=e.callbackNode;$d(e,n);var r=Dr(e,e===J?q:0);if(r===0)t!==null&&Xa(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Xa(t),n===1)e.tag===0?Kc(Nl.bind(null,e)):qs(Nl.bind(null,e)),jc(function(){!(k&6)&&mn()}),t=null;else{switch(xs(r)){case 1:t=Jo;break;case 4:t=Ss;break;case 16:t=Ar;break;case 536870912:t=bs;break;default:t=Ar}t=Ju(t,ju.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ju(e,n){if(Rr=-1,xr=0,k&6)throw Error(g(327));var t=e.callbackNode;if(Jn()&&e.callbackNode!==t)return null;var r=Dr(e,e===J?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Yr(e,r);else{n=r;var i=k;k|=2;var o=Bu();(J!==e||q!==n)&&(Ne=null,rt=W()+500,Hn(e,n));do try{hf();break}catch(l){Wu(e,l)}while(!0);ua(),$r.current=o,k=i,B!==null?n=0:(J=null,q=0,n=K)}if(n!==0){if(n===2&&(i=lo(e),i!==0&&(r=i,n=Vo(e,i))),n===1)throw t=Xt,Hn(e,0),qe(e,r),fe(e,W()),t;if(n===6)qe(e,r);else{if(i=e.current.alternate,!(r&30)&&!pf(i)&&(n=Yr(e,r),n===2&&(o=lo(e),o!==0&&(r=o,n=Vo(e,o))),n===1))throw t=Xt,Hn(e,0),qe(e,r),fe(e,W()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(g(345));case 2:vn(e,se,Ne);break;case 3:if(qe(e,r),(r&130023424)===r&&(n=Sa+500-W(),10<n)){if(Dr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yo(vn.bind(null,e,se,Ne),n);break}vn(e,se,Ne);break;case 4:if(qe(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-we(r);o=1<<a,a=n[a],a>i&&(i=a),r&=~o}if(r=i,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ff(r/1960))-r,10<r){e.timeoutHandle=yo(vn.bind(null,e,se,Ne),r);break}vn(e,se,Ne);break;case 5:vn(e,se,Ne);break;default:throw Error(g(329))}}}return fe(e,W()),e.callbackNode===t?ju.bind(null,e):null}function Vo(e,n){var t=Ct;return e.current.memoizedState.isDehydrated&&(Hn(e,n).flags|=256),e=Yr(e,n),e!==2&&(n=se,se=t,n!==null&&Io(n)),e}function Io(e){se===null?se=e:se.push.apply(se,e)}function pf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Ae(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qe(e,n){for(n&=~Ha,n&=~ui,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-we(n),r=1<<t;e[t]=-1,n&=~r}}function Nl(e){if(k&6)throw Error(g(327));Jn();var n=Dr(e,0);if(!(n&1))return fe(e,W()),null;var t=Yr(e,n);if(e.tag!==0&&t===2){var r=lo(e);r!==0&&(n=r,t=Vo(e,r))}if(t===1)throw t=Xt,Hn(e,0),qe(e,n),fe(e,W()),t;if(t===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vn(e,se,Ne),fe(e,W()),null}function ba(e,n){var t=k;k|=1;try{return e(n)}finally{k=t,k===0&&(rt=W()+500,oi&&mn())}}function Pn(e){en!==null&&en.tag===0&&!(k&6)&&Jn();var n=k;k|=1;var t=Le.transition,r=A;try{if(Le.transition=null,A=1,e)return e()}finally{A=r,Le.transition=t,k=n,!(k&6)&&mn()}}function Ra(){pe=Wn.current,_(Wn)}function Hn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Uc(t)),B!==null)for(t=B.return;t!==null;){var r=t;switch(aa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nr();break;case 3:nt(),_(de),_(re),ha();break;case 5:ma(r);break;case 4:nt();break;case 13:_(N);break;case 19:_(N);break;case 10:da(r.type._context);break;case 22:case 23:Ra()}t=t.return}if(J=e,B=e=un(e.current,null),q=pe=n,K=0,Xt=null,Ha=ui=Cn=0,se=Ct=null,Mn!==null){for(n=0;n<Mn.length;n++)if(t=Mn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}t.pending=r}Mn=null}return e}function Wu(e,n){do{var t=B;try{if(ua(),Hr.current=Kr,Xr){for(var r=O.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xr=!1}if(xn=0,Q=X=O=null,Rt=!1,jt=0,La.current=null,t===null||t.return===null){K=1,Xt=n,B=null;break}e:{var o=e,a=t.return,l=t,s=n;if(n=q,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var T=bl(a);if(T!==null){T.flags&=-257,Rl(T,a,l,o,n),T.mode&1&&Sl(o,d,n),n=T,s=d;var v=n.updateQueue;if(v===null){var E=new Set;E.add(s),n.updateQueue=E}else v.add(s);break e}else{if(!(n&1)){Sl(o,d,n),xa();break e}s=Error(g(426))}}else if(I&&l.mode&1){var V=bl(a);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Rl(V,a,l,o,n),la(tt(s,l));break e}}o=s=tt(s,l),K!==4&&(K=2),Ct===null?Ct=[o]:Ct.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var c=xu(o,s,n);Tl(o,c);break e;case 1:l=s;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ln===null||!ln.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var y=Cu(o,l,n);Tl(o,y);break e}}o=o.return}while(o!==null)}Ku(t)}catch(L){n=L,B===t&&t!==null&&(B=t=t.return);continue}break}while(!0)}function Bu(){var e=$r.current;return $r.current=Kr,e===null?Kr:e}function xa(){(K===0||K===3||K===2)&&(K=4),J===null||!(Cn&268435455)&&!(ui&268435455)||qe(J,q)}function Yr(e,n){var t=k;k|=2;var r=Bu();(J!==e||q!==n)&&(Ne=null,Hn(e,n));do try{mf();break}catch(i){Wu(e,i)}while(!0);if(ua(),k=t,$r.current=r,B!==null)throw Error(g(261));return J=null,q=0,K}function mf(){for(;B!==null;)Xu(B)}function hf(){for(;B!==null&&!Od();)Xu(B)}function Xu(e){var n=Qu(e.alternate,e,pe);e.memoizedProps=e.pendingProps,n===null?Ku(e):B=n,La.current=null}function Ku(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=sf(t,n),t!==null){t.flags&=32767,B=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,B=null;return}}else if(t=lf(t,n,pe),t!==null){B=t;return}if(n=n.sibling,n!==null){B=n;return}B=n=e}while(n!==null);K===0&&(K=5)}function vn(e,n,t){var r=A,i=Le.transition;try{Le.transition=null,A=1,yf(e,n,t,r)}finally{Le.transition=i,A=r}return null}function yf(e,n,t,r){do Jn();while(en!==null);if(k&6)throw Error(g(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Qd(e,o),e===J&&(B=J=null,q=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hr||(hr=!0,Ju(Ar,function(){return Jn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Le.transition,Le.transition=null;var a=A;A=1;var l=k;k|=4,La.current=null,df(e,t),zu(t,e),_c(mo),Fr=!!po,mo=po=null,e.current=t,cf(t),Gd(),k=l,A=a,Le.transition=o}else e.current=t;if(hr&&(hr=!1,en=e,Jr=i),o=e.pendingLanes,o===0&&(ln=null),jd(t.stateNode),fe(e,W()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qr)throw Qr=!1,e=Fo,Fo=null,e;return Jr&1&&e.tag!==0&&Jn(),o=e.pendingLanes,o&1?e===_o?Pt++:(Pt=0,_o=e):Pt=0,mn(),null}function Jn(){if(en!==null){var e=xs(Jr),n=Le.transition,t=A;try{if(Le.transition=null,A=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Jr=0,k&6)throw Error(g(331));var i=k;for(k|=4,M=e.current;M!==null;){var o=M,a=o.child;if(M.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(M=d;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:xt(8,h,o)}var m=h.child;if(m!==null)m.return=h,M=m;else for(;M!==null;){h=M;var p=h.sibling,T=h.return;if(Nu(h),h===d){M=null;break}if(p!==null){p.return=T,M=p;break}M=T}}}var v=o.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var V=E.sibling;E.sibling=null,E=V}while(E!==null)}}M=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,M=a;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xt(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,M=c;break e}M=o.return}}var u=e.current;for(M=u;M!==null;){a=M;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,M=f;else e:for(a=u;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:si(9,l)}}catch(L){z(l,l.return,L)}if(l===a){M=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,M=y;break e}M=l.return}}if(k=i,mn(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{A=t,Le.transition=n}}return!1}function Ol(e,n,t){n=tt(t,n),n=xu(e,n,1),e=an(e,n,1),n=oe(),e!==null&&($t(e,1,n),fe(e,n))}function z(e,n,t){if(e.tag===3)Ol(e,e,t);else for(;n!==null;){if(n.tag===3){Ol(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=tt(t,e),e=Cu(n,e,1),n=an(n,e,1),e=oe(),n!==null&&($t(n,1,e),fe(n,e));break}}n=n.return}}function gf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,J===e&&(q&t)===t&&(K===4||K===3&&(q&130023424)===q&&500>W()-Sa?Hn(e,0):Ha|=t),fe(e,n)}function $u(e,n){n===0&&(e.mode&1?(n=or,or<<=1,!(or&130023424)&&(or=4194304)):n=1);var t=oe();e=Be(e,n),e!==null&&($t(e,n,t),fe(e,t))}function Tf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),$u(e,t)}function vf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(n),$u(e,t)}var Qu;Qu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ue=!1,af(e,n,t);ue=!!(e.flags&131072)}else ue=!1,I&&n.flags&1048576&&Zs(n,zr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;br(e,n),e=n.pendingProps;var i=qn(n,re.current);Qn(n,t),i=ga(null,n,r,e,i,t);var o=Ta();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ce(r)?(o=!0,Or(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fa(n),i.updater=li,n.stateNode=i,i._reactInternals=n,Ho(n,r,e,t),n=Ro(null,n,r,!0,o,t)):(n.tag=0,I&&o&&oa(n),ie(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(br(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Mf(r),e=xe(r,e),i){case 0:n=bo(null,n,r,e,t);break e;case 1:n=Pl(null,n,r,e,t);break e;case 11:n=xl(null,n,r,e,t);break e;case 14:n=Cl(null,n,r,xe(r.type,e),t);break e}throw Error(g(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xe(r,i),bo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xe(r,i),Pl(e,n,r,i,t);case 3:e:{if(Au(n),e===null)throw Error(g(387));r=n.pendingProps,o=n.memoizedState,i=o.element,ou(e,n),Wr(n,r,null,t);var a=n.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=tt(Error(g(423)),n),n=wl(e,n,r,t,i);break e}else if(r!==i){i=tt(Error(g(424)),n),n=wl(e,n,r,t,i);break e}else for(me=on(n.stateNode.containerInfo.firstChild),he=n,I=!0,Pe=null,t=ru(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zn(),r===i){n=Xe(e,n,t);break e}ie(e,n,r,t)}n=n.child}return n;case 5:return au(n),e===null&&Eo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ho(r,i)?a=null:o!==null&&ho(r,o)&&(n.flags|=32),ku(e,n),ie(e,n,a,t),n.child;case 6:return e===null&&Eo(n),null;case 13:return Du(e,n,t);case 4:return pa(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=et(n,null,r,t):ie(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xe(r,i),xl(e,n,r,i,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,a=i.value,D(Ur,r._currentValue),r._currentValue=a,o!==null)if(Ae(o.value,a)){if(o.children===i.children&&!de.current){n=Xe(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ue(-1,t&-t),s.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Mo(o.return,t,n),l.lanes|=t;break}s=s.next}}else if(o.tag===10)a=o.type===n.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(g(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Mo(a,t,n),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===n){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ie(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Qn(n,t),i=He(i),r=r(i),n.flags|=1,ie(e,n,r,t),n.child;case 14:return r=n.type,i=xe(r,n.pendingProps),i=xe(r.type,i),Cl(e,n,r,i,t);case 15:return Pu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:xe(r,i),br(e,n),n.tag=1,ce(r)?(e=!0,Or(n)):e=!1,Qn(n,t),Ru(n,r,i),Ho(n,r,i,t),Ro(null,n,r,!0,e,t);case 19:return Fu(e,n,t);case 22:return wu(e,n,t)}throw Error(g(156,n.tag))};function Ju(e,n){return Hs(e,n)}function Ef(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,t,r){return new Ef(e,n,t,r)}function Ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mf(e){if(typeof e=="function")return Ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ko)return 11;if(e===$o)return 14}return 2}function un(e,n){var t=e.alternate;return t===null?(t=Me(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Cr(e,n,t,r,i,o){var a=2;if(r=e,typeof e=="function")Ca(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Fn:return Sn(t.children,i,o,n);case Xo:a=8,i|=8;break;case Xi:return e=Me(12,t,n,i|2),e.elementType=Xi,e.lanes=o,e;case Ki:return e=Me(13,t,n,i),e.elementType=Ki,e.lanes=o,e;case $i:return e=Me(19,t,n,i),e.elementType=$i,e.lanes=o,e;case as:return di(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:a=10;break e;case os:a=9;break e;case Ko:a=11;break e;case $o:a=14;break e;case Qe:a=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return n=Me(a,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Sn(e,n,t,r){return e=Me(7,e,r,n),e.lanes=t,e}function di(e,n,t,r){return e=Me(22,e,r,n),e.elementType=as,e.lanes=t,e.stateNode={isHidden:!1},e}function Ui(e,n,t){return e=Me(6,e,null,n),e.lanes=t,e}function ji(e,n,t){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Lf(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pa(e,n,t,r,i,o,a,l,s){return e=new Lf(e,n,t,l,s),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Me(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fa(o),e}function Hf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Yu(e){if(!e)return cn;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(g(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(g(171))}if(e.tag===1){var t=e.type;if(ce(t))return Ys(e,t,n)}return n}function qu(e,n,t,r,i,o,a,l,s){return e=Pa(t,r,!0,e,i,o,a,l,s),e.context=Yu(null),t=e.current,r=oe(),i=sn(t),o=Ue(r,i),o.callback=n??null,an(t,o,i),e.current.lanes=i,$t(e,i,r),fe(e,r),e}function ci(e,n,t,r){var i=n.current,o=oe(),a=sn(i);return t=Yu(t),n.context===null?n.context=t:n.pendingContext=t,n=Ue(o,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=an(i,n,a),e!==null&&(ke(e,i,a,o),Lr(e,i,a)),a}function qr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function wa(e,n){Gl(e,n),(e=e.alternate)&&Gl(e,n)}function Sf(){return null}var Zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function ka(e){this._internalRoot=e}fi.prototype.render=ka.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(g(409));ci(e,n,null,null)};fi.prototype.unmount=ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pn(function(){ci(null,e,null,null)}),n[We]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var n=ws();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ye.length&&n!==0&&n<Ye[t].priority;t++);Ye.splice(t,0,e),t===0&&As(e)}};function Aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zl(){}function bf(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=qr(a);o.call(d)}}var a=qu(n,r,e,0,null,!1,!1,"",zl);return e._reactRootContainer=a,e[We]=a.current,Nt(e.nodeType===8?e.parentNode:e),Pn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=qr(s);l.call(d)}}var s=Pa(e,0,!1,null,null,!1,!1,"",zl);return e._reactRootContainer=s,e[We]=s.current,Nt(e.nodeType===8?e.parentNode:e),Pn(function(){ci(n,s,t,r)}),s}function mi(e,n,t,r,i){var o=t._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=qr(a);l.call(s)}}ci(n,a,e,i)}else a=bf(t,n,e,i,r);return qr(a)}Cs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=vt(n.pendingLanes);t!==0&&(Yo(n,t|1),fe(n,W()),!(k&6)&&(rt=W()+500,mn()))}break;case 13:Pn(function(){var r=Be(e,1);if(r!==null){var i=oe();ke(r,e,1,i)}}),wa(e,1)}};qo=function(e){if(e.tag===13){var n=Be(e,134217728);if(n!==null){var t=oe();ke(n,e,134217728,t)}wa(e,134217728)}};Ps=function(e){if(e.tag===13){var n=sn(e),t=Be(e,n);if(t!==null){var r=oe();ke(t,e,n,r)}wa(e,n)}};ws=function(){return A};ks=function(e,n){var t=A;try{return A=e,n()}finally{A=t}};io=function(e,n,t){switch(n){case"input":if(Yi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ii(r);if(!i)throw Error(g(90));ss(r),Yi(r,i)}}}break;case"textarea":ds(e,t);break;case"select":n=t.value,n!=null&&Bn(e,!!t.multiple,n,!1)}};gs=ba;Ts=Pn;var Rf={usingClientEntryPoint:!1,Events:[Jt,Nn,ii,hs,ys,ba]},yt={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xf={bundleType:yt.bundleType,version:yt.version,rendererPackageName:yt.rendererPackageName,rendererConfig:yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ms(e),e===null?null:e.stateNode},findFiberByHostInstance:yt.findFiberByHostInstance||Sf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ei=yr.inject(xf),Ve=yr}catch{}}ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rf;ge.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Aa(n))throw Error(g(200));return Hf(e,n,null,t)};ge.createRoot=function(e,n){if(!Aa(e))throw Error(g(299));var t=!1,r="",i=Zu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Pa(e,1,!1,null,null,t,!1,r,i),e[We]=n.current,Nt(e.nodeType===8?e.parentNode:e),new ka(n)};ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Ms(n),e=e===null?null:e.stateNode,e};ge.flushSync=function(e){return Pn(e)};ge.hydrate=function(e,n,t){if(!pi(n))throw Error(g(200));return mi(null,e,n,!0,t)};ge.hydrateRoot=function(e,n,t){if(!Aa(e))throw Error(g(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",a=Zu;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=qu(n,null,e,1,t??null,i,!1,o,a),e[We]=n.current,Nt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new fi(n)};ge.render=function(e,n,t){if(!pi(n))throw Error(g(200));return mi(null,e,n,!1,t)};ge.unmountComponentAtNode=function(e){if(!pi(e))throw Error(g(40));return e._reactRootContainer?(Pn(function(){mi(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1};ge.unstable_batchedUpdates=ba;ge.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!pi(t))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return mi(e,n,t,!1,r)};ge.version="18.3.1-next-f1338f8080-20240426";function ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ed)}catch(e){console.error(e)}}ed(),es.exports=ge;var Cf=es.exports,Ul=Cf;Wi.createRoot=Ul.createRoot,Wi.hydrateRoot=Ul.hydrateRoot;const Pf=`// NOTE: Users of the \`experimental\` builds of React should add a reference
// to 'react/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.

/// <reference path="global.d.ts" />

import * as CSS from "csstype";
import * as PropTypes from "prop-types";

type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeInputEvent = InputEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;

/**
 * Used to represent DOM API's where users can either pass
 * true or false as a boolean or as its equivalent strings.
 */
type Booleanish = boolean | "true" | "false";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin MDN}
 */
type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;

declare const UNDEFINED_VOID_ONLY: unique symbol;

/**
 * The function returned from an effect passed to {@link React.useEffect useEffect},
 * which can be used to clean up the effect when the component unmounts.
 *
 * @see {@link https://react.dev/reference/react/useEffect React Docs}
 */
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never };
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = React;
export as namespace React;

declare namespace React {
    //
    // React Elements
    // ----------------------------------------------------------------------

    /**
     * Used to retrieve the possible components which accept a given set of props.
     *
     * Can be passed no type parameters to get a union of all possible components
     * and tags.
     *
     * Is a superset of {@link ComponentType}.
     *
     * @template P The props to match against. If not passed, defaults to any.
     * @template Tag An optional tag to match against. If not passed, attempts to match against all possible tags.
     *
     * @example
     *
     * \`\`\`tsx
     * // All components and tags (img, embed etc.)
     * // which accept \`src\`
     * type SrcComponents = ElementType<{ src: any }>;
     * \`\`\`
     *
     * @example
     *
     * \`\`\`tsx
     * // All components
     * type AllComponents = ElementType;
     * \`\`\`
     *
     * @example
     *
     * \`\`\`tsx
     * // All custom components which match \`src\`, and tags which
     * // match \`src\`, narrowed down to just \`audio\` and \`embed\`
     * type SrcComponents = ElementType<{ src: any }, 'audio' | 'embed'>;
     * \`\`\`
     */
    type ElementType<P = any, Tag extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> =
        | { [K in Tag]: P extends JSX.IntrinsicElements[K] ? K : never }[Tag]
        | ComponentType<P>;

    /**
     * Represents any user-defined component, either as a function or a class.
     *
     * Similar to {@link JSXElementConstructor}, but with extra properties like
     * {@link FunctionComponent.defaultProps defaultProps } and
     * {@link ComponentClass.contextTypes contextTypes}.
     *
     * @template P The props the component accepts.
     *
     * @see {@link ComponentClass}
     * @see {@link FunctionComponent}
     */
    type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

    /**
     * Represents any user-defined component, either as a function or a class.
     *
     * Similar to {@link ComponentType}, but without extra properties like
     * {@link FunctionComponent.defaultProps defaultProps } and
     * {@link ComponentClass.contextTypes contextTypes}.
     *
     * @template P The props the component accepts.
     */
    type JSXElementConstructor<P> =
        | ((
            props: P,
            /**
             * @deprecated
             *
             * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-stateless-function-components React Docs}
             */
            deprecatedLegacyContext?: any,
        ) => ReactNode)
        | (new(
            props: P,
            /**
             * @deprecated
             *
             * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods React Docs}
             */
            deprecatedLegacyContext?: any,
        ) => Component<any, any>);

    /**
     * A readonly ref container where {@link current} cannot be mutated.
     *
     * Created by {@link createRef}, or {@link useRef} when passed \`null\`.
     *
     * @template T The type of the ref's value.
     *
     * @example
     *
     * \`\`\`tsx
     * const ref = createRef<HTMLDivElement>();
     *
     * ref.current = document.createElement('div'); // Error
     * \`\`\`
     */
    interface RefObject<T> {
        /**
         * The current value of the ref.
         */
        readonly current: T | null;
    }

    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES {
    }
    /**
     * A callback fired whenever the ref's value changes.
     *
     * @template T The type of the ref's value.
     *
     * @see {@link https://react.dev/reference/react-dom/components/common#ref-callback React Docs}
     *
     * @example
     *
     * \`\`\`tsx
     * <div ref={(node) => console.log(node)} />
     * \`\`\`
     */
    type RefCallback<T> = {
        bivarianceHack(
            instance: T | null,
        ):
            | void
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES
            ];
    }["bivarianceHack"];

    /**
     * A union type of all possible shapes for React refs.
     *
     * @see {@link RefCallback}
     * @see {@link RefObject}
     */

    type Ref<T> = RefCallback<T> | RefObject<T> | null;
    /**
     * A legacy implementation of refs where you can pass a string to a ref prop.
     *
     * @see {@link https://react.dev/reference/react/Component#refs React Docs}
     *
     * @example
     *
     * \`\`\`tsx
     * <div ref="myRef" />
     * \`\`\`
     */
    // TODO: Remove the string ref special case from \`PropsWithRef\` once we remove LegacyRef
    type LegacyRef<T> = string | Ref<T>;

    /**
     * Retrieves the type of the 'ref' prop for a given component type or tag name.
     *
     * @template C The component type.
     *
     * @example
     *
     * \`\`\`tsx
     * type MyComponentRef = React.ElementRef<typeof MyComponent>;
     * \`\`\`
     *
     * @example
     *
     * \`\`\`tsx
     * type DivRef = React.ElementRef<'div'>;
     * \`\`\`
     */
    type ElementRef<
        C extends
            | ForwardRefExoticComponent<any>
            | { new(props: any): Component<any> }
            | ((props: any, deprecatedLegacyContext?: any) => ReactNode)
            | keyof JSX.IntrinsicElements,
    > =
        // need to check first if \`ref\` is a valid prop for ts@3.0
        // otherwise it will infer \`{}\` instead of \`never\`
        "ref" extends keyof ComponentPropsWithRef<C>
            ? NonNullable<ComponentPropsWithRef<C>["ref"]> extends RefAttributes<
                infer Instance
            >["ref"] ? Instance
            : never
            : never;

    type ComponentState = any;

    /**
     * A value which uniquely identifies a node among items in an array.
     *
     * @see {@link https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key React Docs}
     */
    type Key = string | number | bigint;

    /**
     * @internal The props any component can receive.
     * You don't have to add this type. All components automatically accept these props.
     * \`\`\`tsx
     * const Component = () => <div />;
     * <Component key="one" />
     * \`\`\`
     *
     * WARNING: The implementation of a component will never have access to these attributes.
     * The following example would be incorrect usage because {@link Component} would never have access to \`key\`:
     * \`\`\`tsx
     * const Component = (props: React.Attributes) => props.key;
     * \`\`\`
     */
    interface Attributes {
        key?: Key | null | undefined;
    }
    /**
     * The props any component accepting refs can receive.
     * Class components, built-in browser components (e.g. \`div\`) and forwardRef components can receive refs and automatically accept these props.
     * \`\`\`tsx
     * const Component = forwardRef(() => <div />);
     * <Component ref={(current) => console.log(current)} />
     * \`\`\`
     *
     * You only need this type if you manually author the types of props that need to be compatible with legacy refs.
     * \`\`\`tsx
     * interface Props extends React.RefAttributes<HTMLDivElement> {}
     * declare const Component: React.FunctionComponent<Props>;
     * \`\`\`
     *
     * Otherwise it's simpler to directly use {@link Ref} since you can safely use the
     * props type to describe to props that a consumer can pass to the component
     * as well as describing the props the implementation of a component "sees".
     * {@link RefAttributes} is generally not safe to describe both consumer and seen props.
     *
     * \`\`\`tsx
     * interface Props extends {
     *   ref?: React.Ref<HTMLDivElement> | undefined;
     * }
     * declare const Component: React.FunctionComponent<Props>;
     * \`\`\`
     *
     * WARNING: The implementation of a component will not have access to the same type in versions of React supporting string refs.
     * The following example would be incorrect usage because {@link Component} would never have access to a \`ref\` with type \`string\`
     * \`\`\`tsx
     * const Component = (props: React.RefAttributes) => props.ref;
     * \`\`\`
     */
    interface RefAttributes<T> extends Attributes {
        /**
         * Allows getting a ref to the component instance.
         * Once the component unmounts, React will set \`ref.current\` to \`null\`
         * (or call the ref with \`null\` if you passed a callback ref).
         *
         * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
         */
        ref?: LegacyRef<T> | undefined;
    }

    /**
     * Represents the built-in attributes available to class components.
     */
    interface ClassAttributes<T> extends RefAttributes<T> {
    }

    /**
     * Represents a JSX element.
     *
     * Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
     * only represents JSX.
     *
     * @template P The type of the props object
     * @template T The type of the component or tag
     *
     * @example
     *
     * \`\`\`tsx
     * const element: ReactElement = <div />;
     * \`\`\`
     */
    interface ReactElement<
        P = any,
        T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
    > {
        type: T;
        props: P;
        key: string | null;
    }

    /**
     * @deprecated
     */
    interface ReactComponentElement<
        T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
        P = Pick<ComponentProps<T>, Exclude<keyof ComponentProps<T>, "key" | "ref">>,
    > extends ReactElement<P, Exclude<T, number>> {}

    interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>> {
        ref?: ("ref" extends keyof P ? P extends { ref?: infer R | undefined } ? R : never : never) | undefined;
    }

    type CElement<P, T extends Component<P, ComponentState>> = ComponentElement<P, T>;
    interface ComponentElement<P, T extends Component<P, ComponentState>> extends ReactElement<P, ComponentClass<P>> {
        ref?: LegacyRef<T> | undefined;
    }

    /**
     * @deprecated Use {@link ComponentElement} instead.
     */
    type ClassicElement<P> = CElement<P, ClassicComponent<P, ComponentState>>;

    // string fallback for custom web-components
    interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element>
        extends ReactElement<P, string>
    {
        ref: LegacyRef<T>;
    }

    // ReactHTML for ReactHTMLElement
    interface ReactHTMLElement<T extends HTMLElement> extends DetailedReactHTMLElement<AllHTMLAttributes<T>, T> {}

    interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
        type: keyof ReactHTML;
    }

    // ReactSVG for ReactSVGElement
    interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
        type: keyof ReactSVG;
    }

    interface ReactPortal extends ReactElement {
        children: ReactNode;
    }

    //
    // Factories
    // ----------------------------------------------------------------------

    /** @deprecated */
    type Factory<P> = (props?: Attributes & P, ...children: ReactNode[]) => ReactElement<P>;

    /** @deprecated */
    type SFCFactory<P> = FunctionComponentFactory<P>;

    /** @deprecated */
    type FunctionComponentFactory<P> = (
        props?: Attributes & P,
        ...children: ReactNode[]
    ) => FunctionComponentElement<P>;

    /** @deprecated */
    type ComponentFactory<P, T extends Component<P, ComponentState>> = (
        props?: ClassAttributes<T> & P,
        ...children: ReactNode[]
    ) => CElement<P, T>;

    /** @deprecated */
    type CFactory<P, T extends Component<P, ComponentState>> = ComponentFactory<P, T>;
    /** @deprecated */
    type ClassicFactory<P> = CFactory<P, ClassicComponent<P, ComponentState>>;

    /** @deprecated */
    type DOMFactory<P extends DOMAttributes<T>, T extends Element> = (
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ) => DOMElement<P, T>;

    /** @deprecated */
    interface HTMLFactory<T extends HTMLElement> extends DetailedHTMLFactory<AllHTMLAttributes<T>, T> {}

    /** @deprecated */
    interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMFactory<P, T> {
        (props?: ClassAttributes<T> & P | null, ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
    }

    /** @deprecated */
    interface SVGFactory extends DOMFactory<SVGAttributes<SVGElement>, SVGElement> {
        (
            props?: ClassAttributes<SVGElement> & SVGAttributes<SVGElement> | null,
            ...children: ReactNode[]
        ): ReactSVGElement;
    }

    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactText = string | number;
    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactChild = ReactElement | string | number;

    /**
     * @deprecated Use either \`ReactNode[]\` if you need an array or \`Iterable<ReactNode>\` if its passed to a host component.
     */
    interface ReactNodeArray extends ReadonlyArray<ReactNode> {}
    /**
     * WARNING: Not related to \`React.Fragment\`.
     * @deprecated This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactFragment = Iterable<ReactNode>;

    /**
     * Different release channels declare additional types of ReactNode this particular release channel accepts.
     * App or library types should never augment this interface.
     */
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES {}

    /**
     * Represents all of the things React can render.
     *
     * Where {@link ReactElement} only represents JSX, \`ReactNode\` represents everything that can be rendered.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/reactnode/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * \`\`\`tsx
     * // Typing children
     * type Props = { children: ReactNode }
     *
     * const Component = ({ children }: Props) => <div>{children}</div>
     *
     * <Component>hello</Component>
     * \`\`\`
     *
     * @example
     *
     * \`\`\`tsx
     * // Typing a custom element
     * type Props = { customElement: ReactNode }
     *
     * const Component = ({ customElement }: Props) => <div>{customElement}</div>
     *
     * <Component customElement={<div>hello</div>} />
     * \`\`\`
     */
    // non-thenables need to be kept in sync with AwaitedReactNode
    type ReactNode =
        | ReactElement
        | string
        | number
        | Iterable<ReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined
        | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES[
            keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES
        ];

    //
    // Top Level API
    // ----------------------------------------------------------------------

    // DOM Elements
    /** @deprecated */
    function createFactory<T extends HTMLElement>(
        type: keyof ReactHTML,
    ): HTMLFactory<T>;
    /** @deprecated */
    function createFactory(
        type: keyof ReactSVG,
    ): SVGFactory;
    /** @deprecated */
    function createFactory<P extends DOMAttributes<T>, T extends Element>(
        type: string,
    ): DOMFactory<P, T>;

    // Custom components
    /** @deprecated */
    function createFactory<P>(type: FunctionComponent<P>): FunctionComponentFactory<P>;
    /** @deprecated */
    function createFactory<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>,
    ): CFactory<P, T>;
    /** @deprecated */
    function createFactory<P>(type: ComponentClass<P>): Factory<P>;

    // DOM Elements
    // TODO: generalize this to everything in \`keyof ReactHTML\`, not just "input"
    function createElement(
        type: "input",
        props?: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    function createElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        type: keyof ReactHTML,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    function createElement<P extends SVGAttributes<T>, T extends SVGElement>(
        type: keyof ReactSVG,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): ReactSVGElement;
    function createElement<P extends DOMAttributes<T>, T extends Element>(
        type: string,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): DOMElement<P, T>;

    // Custom components

    function createElement<P extends {}>(
        type: FunctionComponent<P>,
        props?: Attributes & P | null,
        ...children: ReactNode[]
    ): FunctionComponentElement<P>;
    function createElement<P extends {}, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]
    ): CElement<P, T>;
    function createElement<P extends {}>(
        type: FunctionComponent<P> | ComponentClass<P> | string,
        props?: Attributes & P | null,
        ...children: ReactNode[]
    ): ReactElement<P>;

    // DOM Elements
    // ReactHTMLElement
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: DetailedReactHTMLElement<P, T>,
        props?: P,
        ...children: ReactNode[]
    ): DetailedReactHTMLElement<P, T>;
    // ReactHTMLElement, less specific
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: ReactHTMLElement<T>,
        props?: P,
        ...children: ReactNode[]
    ): ReactHTMLElement<T>;
    // SVGElement
    function cloneElement<P extends SVGAttributes<T>, T extends SVGElement>(
        element: ReactSVGElement,
        props?: P,
        ...children: ReactNode[]
    ): ReactSVGElement;
    // DOM Element (has to be the last, because type checking stops at first overload that fits)
    function cloneElement<P extends DOMAttributes<T>, T extends Element>(
        element: DOMElement<P, T>,
        props?: DOMAttributes<T> & P,
        ...children: ReactNode[]
    ): DOMElement<P, T>;

    // Custom components
    function cloneElement<P>(
        element: FunctionComponentElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]
    ): FunctionComponentElement<P>;
    function cloneElement<P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        props?: Partial<P> & ClassAttributes<T>,
        ...children: ReactNode[]
    ): CElement<P, T>;
    function cloneElement<P>(
        element: ReactElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]
    ): ReactElement<P>;

    /**
     * Describes the props accepted by a Context {@link Provider}.
     *
     * @template T The type of the value the context provides.
     */
    interface ProviderProps<T> {
        value: T;
        children?: ReactNode | undefined;
    }

    /**
     * Describes the props accepted by a Context {@link Consumer}.
     *
     * @template T The type of the value the context provides.
     */
    interface ConsumerProps<T> {
        children: (value: T) => ReactNode;
    }

    /**
     * An object masquerading as a component. These are created by functions
     * like {@link forwardRef}, {@link memo}, and {@link createContext}.
     *
     * In order to make TypeScript work, we pretend that they are normal
     * components.
     *
     * But they are, in fact, not callable - instead, they are objects which
     * are treated specially by the renderer.
     *
     * @template P The props the component accepts.
     */
    interface ExoticComponent<P = {}> {
        (props: P): ReactNode;
        readonly $$typeof: symbol;
    }

    /**
     * An {@link ExoticComponent} with a \`displayName\` property applied to it.
     *
     * @template P The props the component accepts.
     */
    interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
    }

    /**
     * An {@link ExoticComponent} with a \`propTypes\` property applied to it.
     *
     * @template P The props the component accepts.
     */
    interface ProviderExoticComponent<P> extends ExoticComponent<P> {
        propTypes?: WeakValidationMap<P> | undefined;
    }

    /**
     * Used to retrieve the type of a context object from a {@link Context}.
     *
     * @template C The context object.
     *
     * @example
     *
     * \`\`\`tsx
     * import { createContext } from 'react';
     *
     * const MyContext = createContext({ foo: 'bar' });
     *
     * type ContextType = ContextType<typeof MyContext>;
     * // ContextType = { foo: string }
     * \`\`\`
     */
    type ContextType<C extends Context<any>> = C extends Context<infer T> ? T : never;

    /**
     * Wraps your components to specify the value of this context for all components inside.
     *
     * @see {@link https://react.dev/reference/react/createContext#provider React Docs}
     *
     * @example
     *
     * \`\`\`tsx
     * import { createContext } from 'react';
     *
     * const ThemeContext = createContext('light');
     *
     * function App() {
     *   return (
     *     <ThemeContext.Provider value="dark">
     *       <Toolbar />
     *     </ThemeContext.Provider>
     *   );
     * }
     * \`\`\`
     */
    type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;

    /**
     * The old way to read context, before {@link useContext} existed.
     *
     * @see {@link https://react.dev/reference/react/createContext#consumer React Docs}
     *
     * @example
     *
     * \`\`\`tsx
     * import { UserContext } from './user-context';
     *
     * function Avatar() {
     *   return (
     *     <UserContext.Consumer>
     *       {user => <img src={user.profileImage} alt={user.name} />}
     *     </UserContext.Consumer>
     *   );
     * }
     * \`\`\`
     */
    type Consumer<T> = ExoticComponent<ConsumerProps<T>>;

    /**
     * Context lets components pass information deep down without explicitly
     * passing props.
     *
     * Created from {@link createContext}
     *
     * @see {@link https://react.dev/learn/passing-data-deeply-with-context React Docs}
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * \`\`\`tsx
     * import { createContext } from 'react';
     *
     * const ThemeContext = createContext('light');
     * \`\`\`
     */
    interface Context<T> {
        Provider: Provider<T>;
        Consumer: Consumer<T>;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
    }

    /**
     * Lets you create a {@link Context} that components can provide or read.
     *
     * @param defaultValue The value you want the context to have when there is no matching
     * {@link Provider} in the tree above the component reading the context. This is meant
     * as a "last resort" fallback.
     *
     * @see {@link https://react.dev/reference/react/createContext#reference React Docs}
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * \`\`\`tsx
     * import { createContext } from 'react';
     *
     * const ThemeContext = createContext('light');
     * \`\`\`
     */
    function createContext<T>(
        // If you thought this should be optional, see
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
        defaultValue: T,
    ): Context<T>;

    function isValidElement<P>(object: {} | null | undefined): object is ReactElement<P>;

    /**
     * Maintainer's note: Sync with {@link ReactChildren} until {@link ReactChildren} is removed.
     */
    const Children: {
        map<T, C>(
            children: C | readonly C[],
            fn: (child: C, index: number) => T,
        ): C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | readonly C[], fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    };
    /**
     * Lets you group elements without a wrapper node.
     *
     * @see {@link https://react.dev/reference/react/Fragment React Docs}
     *
     * @example
     *
     * \`\`\`tsx
     * import { Fragment } from 'react';
     *
     * <Fragment>
     *   <td>Hello</td>
     *   <td>World</td>
     * </Fragment>
     * \`\`\`
     *
     * @example
     *
     * \`\`\`tsx
     * // Using the <></> shorthand syntax:
     *
     * <>
     *   <td>Hello</td>
     *   <td>World</td>
     * </>
     * \`\`\`
     */
    const Fragment: ExoticComponent<{ children?: ReactNode | undefined }>;

    /**
     * Lets you find common bugs in your components early during development.
     *
     * @see {@link https://react.dev/reference/react/StrictMode React Docs}
     *
     * @example
     *
     * \`\`\`tsx
     * import { StrictMode } from 'react';
     *
     * <StrictMode>
     *   <App />
     * </StrictMode>
     * \`\`\`
     */
    const StrictMode: ExoticComponent<{ children?: ReactNode | undefined }>;

    /**
     * The props accepted by {@link Suspense}.
     *
     * @see {@link https://react.dev/reference/react/Suspense React Docs}
     */
    interface SuspenseProps {
        children?: ReactNode | undefined;

        /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
        fallback?: ReactNode;

        /**
         * A name for this Suspense boundary for instrumentation purposes.
         * The name will help identify this boundary in React DevTools.
         */
        name?: string | undefined;
    }

    /**
     * Lets you display a fallback until its children have finished loading.
     *
     * @see {@link https://react.dev/reference/react/Suspense React Docs}
     *
     * @example
     *
     * \`\`\`tsx
     * import { Suspense } from 'react';
     *
     * <Suspense fallback={<Loading />}>
     *   <ProfileDetails />
     * </Suspense>
     * \`\`\`
     */
    const Suspense: ExoticComponent<SuspenseProps>;
    const version: string;

    /**
     * The callback passed to {@link ProfilerProps.onRender}.
     *
     * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
     */
    type ProfilerOnRenderCallback = (
        /**
         * The string id prop of the {@link Profiler} tree that has just committed. This lets
         * you identify which part of the tree was committed if you are using multiple
         * profilers.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        id: string,
        /**
         * This lets you know whether the tree has just been mounted for the first time
         * or re-rendered due to a change in props, state, or hooks.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        phase: "mount" | "update" | "nested-update",
        /**
         * The number of milliseconds spent rendering the {@link Profiler} and its descendants
         * for the current update. This indicates how well the subtree makes use of
         * memoization (e.g. {@link memo} and {@link useMemo}). Ideally this value should decrease
         * significantly after the initial mount as many of the descendants will only need to
         * re-render if their specific props change.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        actualDuration: number,
        /**
         * The number of milliseconds estimating how much time it would take to re-render the entire
         * {@link Profiler} subtree without any optimizations. It is calculated by summing up the most
         * recent render durations of each component in the tree. This value estimates a worst-case
         * cost of rendering (e.g. the initial mount or a tree with no memoization). Compare
         * {@link actualDuration} against it to see if memoization is working.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        baseDuration: number,
        /**
         * A numeric timestamp for when React began rendering the current update.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        startTime: number,
        /**
         * A numeric timestamp for when React committed the current update. This value is shared
         * between all profilers in a commit, enabling them to be grouped if desirable.
         *
         * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
         */
        commitTime: number,
    ) => void;

    /**
     * The props accepted by {@link Profiler}.
     *
     * @see {@link https://react.dev/reference/react/Profiler React Docs}
     */
    interface ProfilerProps {
        children?: ReactNode | undefined;
        id: string;
        onRender: ProfilerOnRenderCallback;
    }

    /**
     * Lets you measure rendering performance of a React tree programmatically.
     *
     * @see {@link https://react.dev/reference/react/Profiler#onrender-callback React Docs}
     *
     * @example
     *
     * \`\`\`tsx
     * <Profiler id="App" onRender={onRender}>
     *   <App />
     * </Profiler>
     * \`\`\`
     */
    const Profiler: ExoticComponent<ProfilerProps>;

    //
    // Component API
    // ----------------------------------------------------------------------

    type ReactInstance = Component<any> | Element;

    // Base component for plain JS classes
    interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> {}
    class Component<P, S> {
        /**
         * If set, \`this.context\` will be set at runtime to the current value of the given Context.
         *
         * @example
         *
         * \`\`\`ts
         * type MyContext = number
         * const Ctx = React.createContext<MyContext>(0)
         *
         * class Foo extends React.Component {
         *   static contextType = Ctx
         *   context!: React.ContextType<typeof Ctx>
         *   render () {
         *     return <>My context's value: {this.context}</>;
         *   }
         * }
         * \`\`\`
         *
         * @see {@link https://react.dev/reference/react/Component#static-contexttype}
         */
        static contextType?: Context<any> | undefined;

        /**
         * If using the new style context, re-declare this in your class to be the
         * \`React.ContextType\` of your \`static contextType\`.
         * Should be used with type annotation or static contextType.
         *
         * @example
         * \`\`\`ts
         * static contextType = MyContext
         * // For TS pre-3.7:
         * context!: React.ContextType<typeof MyContext>
         * // For TS 3.7 and above:
         * declare context: React.ContextType<typeof MyContext>
         * \`\`\`
         *
         * @see {@link https://react.dev/reference/react/Component#context React Docs}
         */
        context: unknown;

        constructor(props: P);
        /**
         * @deprecated
         * @see {@link https://legacy.reactjs.org/docs/legacy-context.html React Docs}
         */
        constructor(props: P, context: any);

        // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
        // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
        // Also, the \` | S\` allows intellisense to not be dumbisense
        setState<K extends keyof S>(
            state: ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null) | (Pick<S, K> | S | null),
            callback?: () => void,
        ): void;

        forceUpdate(callback?: () => void): void;
        render(): ReactNode;

        readonly props: Readonly<P>;
        state: Readonly<S>;
        /**
         * @deprecated
         *
         * @see {@link https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs Legacy React Docs}
         */
        refs: {
            [key: string]: ReactInstance;
        };
    }

    class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> {}

    /**
     * @deprecated Use \`ClassicComponent\` from \`create-react-class\`
     *
     * @see {@link https://legacy.reactjs.org/docs/react-without-es6.html Legacy React Docs}
     * @see {@link https://www.npmjs.com/package/create-react-class \`create-react-class\` on npm}
     */
    interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
        replaceState(nextState: S, callback?: () => void): void;
        isMounted(): boolean;
        getInitialState?(): S;
    }

    interface ChildContextProvider<CC> {
        getChildContext(): CC;
    }

    //
    // Class Interfaces
    // ----------------------------------------------------------------------

    /**
     * Represents the type of a function component. Can optionally
     * receive a type argument that represents the props the component
     * receives.
     *
     * @template P The props the component accepts.
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
     * @alias for {@link FunctionComponent}
     *
     * @example
     *
     * \`\`\`tsx
     * // With props:
     * type Props = { name: string }
     *
     * const MyComponent: FC<Props> = (props) => {
     *  return <div>{props.name}</div>
     * }
     * \`\`\`
     *
     * @example
     *
     * \`\`\`tsx
     * // Without props:
     * const MyComponentWithoutProps: FC = () => {
     *   return <div>MyComponentWithoutProps</div>
     * }
     * \`\`\`
     */
    type FC<P = {}> = FunctionComponent<P>;

    /**
     * Represents the type of a function component. Can optionally
     * receive a type argument that represents the props the component
     * accepts.
     *
     * @template P The props the component accepts.
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}
     *
     * @example
     *
     * \`\`\`tsx
     * // With props:
     * type Props = { name: string }
     *
     * const MyComponent: FunctionComponent<Props> = (props) => {
     *  return <div>{props.name}</div>
     * }
     * \`\`\`
     *
     * @example
     *
     * \`\`\`tsx
     * // Without props:
     * const MyComponentWithoutProps: FunctionComponent = () => {
     *   return <div>MyComponentWithoutProps</div>
     * }
     * \`\`\`
     */
    interface FunctionComponent<P = {}> {
        (
            props: P,
            /**
             * @deprecated
             *
             * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods React Docs}
             */
            deprecatedLegacyContext?: any,
        ): ReactNode;
        /**
         * Used to declare the types of the props accepted by the
         * component. These types will be checked during rendering
         * and in development only.
         *
         * We recommend using TypeScript instead of checking prop
         * types at runtime.
         *
         * @see {@link https://react.dev/reference/react/Component#static-proptypes React Docs}
         */
        propTypes?: WeakValidationMap<P> | undefined;
        /**
         * @deprecated
         *
         * Lets you specify which legacy context is consumed by
         * this component.
         *
         * @see {@link https://legacy.reactjs.org/docs/legacy-context.html Legacy React Docs}
         */
        contextTypes?: ValidationMap<any> | undefined;
        /**
         * Used to define default values for the props accepted by
         * the component.
         *
         * @see {@link https://react.dev/reference/react/Component#static-defaultprops React Docs}
         *
         * @example
         *
         * \`\`\`tsx
         * type Props = { name?: string }
         *
         * const MyComponent: FC<Props> = (props) => {
         *   return <div>{props.name}</div>
         * }
         *
         * MyComponent.defaultProps = {
         *   name: 'John Doe'
         * }
         * \`\`\`
         *
         * @deprecated Use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value|default values for destructuring assignments instead}.
         */
        defaultProps?: Partial<P> | undefined;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         *
         * @example
         *
         * \`\`\`tsx
         *
         * const MyComponent: FC = () => {
         *   return <div>Hello!</div>
         * }
         *
         * MyComponent.displayName = 'MyAwesomeComponent'
         * \`\`\`
         */
        displayName?: string | undefined;
    }

    /**
     * @deprecated - Equivalent to {@link React.FunctionComponent}.
     *
     * @see {@link React.FunctionComponent}
     * @alias {@link VoidFunctionComponent}
     */
    type VFC<P = {}> = VoidFunctionComponent<P>;

    /**
     * @deprecated - Equivalent to {@link React.FunctionComponent}.
     *
     * @see {@link React.FunctionComponent}
     */
    interface VoidFunctionComponent<P = {}> {
        (
            props: P,
            /**
             * @deprecated
             *
             * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods React Docs}
             */
            deprecatedLegacyContext?: any,
        ): ReactNode;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        /**
         * @deprecated Use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value|default values for destructuring assignments instead}.
         */
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    /**
     * The type of the ref received by a {@link ForwardRefRenderFunction}.
     *
     * @see {@link ForwardRefRenderFunction}
     */
    type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

    /**
     * The type of the function passed to {@link forwardRef}. This is considered different
     * to a normal {@link FunctionComponent} because it receives an additional argument,
     *
     * @param props Props passed to the component, if any.
     * @param ref A ref forwarded to the component of type {@link ForwardedRef}.
     *
     * @template T The type of the forwarded ref.
     * @template P The type of the props the component accepts.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/ React TypeScript Cheatsheet}
     * @see {@link forwardRef}
     */
    interface ForwardRefRenderFunction<T, P = {}> {
        (props: P, ref: ForwardedRef<T>): ReactNode;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * Will show \`ForwardRef(\${Component.displayName || Component.name})\`
         * in devtools by default, but can be given its own specific name.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
        /**
         * defaultProps are not supported on render functions passed to forwardRef.
         *
         * @see {@link https://github.com/microsoft/TypeScript/issues/36826 linked GitHub issue} for context
         * @see {@link https://react.dev/reference/react/Component#static-defaultprops React Docs}
         */
        defaultProps?: never | undefined;
        /**
         * propTypes are not supported on render functions passed to forwardRef.
         *
         * @see {@link https://github.com/microsoft/TypeScript/issues/36826 linked GitHub issue} for context
         * @see {@link https://react.dev/reference/react/Component#static-proptypes React Docs}
         */
        propTypes?: never | undefined;
    }

    /**
     * Represents a component class in React.
     *
     * @template P The props the component accepts.
     * @template S The internal state of the component.
     */
    interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
        new(
            props: P,
            /**
             * @deprecated
             *
             * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods React Docs}
             */
            deprecatedLegacyContext?: any,
        ): Component<P, S>;
        /**
         * Used to declare the types of the props accepted by the
         * component. These types will be checked during rendering
         * and in development only.
         *
         * We recommend using TypeScript instead of checking prop
         * types at runtime.
         *
         * @see {@link https://react.dev/reference/react/Component#static-proptypes React Docs}
         */
        propTypes?: WeakValidationMap<P> | undefined;
        contextType?: Context<any> | undefined;
        /**
         * @deprecated use {@link ComponentClass.contextType} instead
         *
         * Lets you specify which legacy context is consumed by
         * this component.
         *
         * @see {@link https://legacy.reactjs.org/docs/legacy-context.html Legacy React Docs}
         */
        contextTypes?: ValidationMap<any> | undefined;
        /**
         * @deprecated
         *
         * @see {@link https://legacy.reactjs.org/docs/legacy-context.html#how-to-use-context Legacy React Docs}
         */
        childContextTypes?: ValidationMap<any> | undefined;
        /**
         * Used to define default values for the props accepted by
         * the component.
         *
         * @see {@link https://react.dev/reference/react/Component#static-defaultprops React Docs}
         */
        defaultProps?: Partial<P> | undefined;
        /**
         * Used in debugging messages. You might want to set it
         * explicitly if you want to display a different name for
         * debugging purposes.
         *
         * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
         */
        displayName?: string | undefined;
    }

    /**
     * @deprecated Use \`ClassicComponentClass\` from \`create-react-class\`
     *
     * @see {@link https://legacy.reactjs.org/docs/react-without-es6.html Legacy React Docs}
     * @see {@link https://www.npmjs.com/package/create-react-class \`create-react-class\` on npm}
     */
    interface ClassicComponentClass<P = {}> extends ComponentClass<P> {
        new(props: P, deprecatedLegacyContext?: any): ClassicComponent<P, ComponentState>;
        getDefaultProps?(): P;
    }

    /**
     * Used in {@link createElement} and {@link createFactory} to represent
     * a class.
     *
     * An intersection type is used to infer multiple type parameters from
     * a single argument, which is useful for many top-level API defs.
     * See {@link https://github.com/Microsoft/TypeScript/issues/7234 this GitHub issue}
     * for more info.
     */
    type ClassType<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>> =
        & C
        & (new(props: P, deprecatedLegacyContext?: any) => T);

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------

    // This should actually be something like \`Lifecycle<P, S> | DeprecatedLifecycle<P, S>\`,
    // as React will _not_ call the deprecated lifecycle methods if any of the new lifecycle
    // methods are present.
    interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
        /**
         * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
         */
        componentDidMount?(): void;
        /**
         * Called to determine whether the change in props and state should trigger a re-render.
         *
         * \`Component\` always returns true.
         * \`PureComponent\` implements a shallow comparison on props and state and returns true if any
         * props or states have changed.
         *
         * If false is returned, {@link Component.render}, \`componentWillUpdate\`
         * and \`componentDidUpdate\` will not be called.
         */
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
        /**
         * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
         * cancelled network requests, or cleaning up any DOM elements created in \`componentDidMount\`.
         */
        componentWillUnmount?(): void;
        /**
         * Catches exceptions generated in descendant components. Unhandled exceptions will cause
         * the entire component tree to unmount.
         */
        componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    }

    // Unfortunately, we have no way of declaring that the component constructor must implement this
    interface StaticLifecycle<P, S> {
        getDerivedStateFromProps?: GetDerivedStateFromProps<P, S> | undefined;
        getDerivedStateFromError?: GetDerivedStateFromError<P, S> | undefined;
    }

    type GetDerivedStateFromProps<P, S> =
        /**
         * Returns an update to a component's state based on its new props and old state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
         */
        (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;

    type GetDerivedStateFromError<P, S> =
        /**
         * This lifecycle is invoked after an error has been thrown by a descendant component.
         * It receives the error that was thrown as a parameter and should return a value to update state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
         */
        (error: any) => Partial<S> | null;

    // This should be "infer SS" but can't use it yet
    interface NewLifecycle<P, S, SS> {
        /**
         * Runs before React applies the result of {@link Component.render render} to the document, and
         * returns an object to be given to {@link componentDidUpdate}. Useful for saving
         * things such as scroll position before {@link Component.render render} causes changes to it.
         *
         * Note: the presence of this method prevents any of the deprecated
         * lifecycle events from running.
         */
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
        /**
         * Called immediately after updating occurs. Not called for the initial render.
         *
         * The snapshot is only present if {@link getSnapshotBeforeUpdate} is present and returns non-null.
         */
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
    }

    interface DeprecatedLifecycle<P, S> {
        /**
         * Called immediately before mounting occurs, and before {@link Component.render}.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use {@link ComponentLifecycle.componentDidMount componentDidMount} or the constructor instead; will stop working in React 17
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        componentWillMount?(): void;
        /**
         * Called immediately before mounting occurs, and before {@link Component.render}.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use {@link ComponentLifecycle.componentDidMount componentDidMount} or the constructor instead
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        UNSAFE_componentWillMount?(): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling {@link Component.setState} generally does not trigger this method.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use static {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} instead; will stop working in React 17
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling {@link Component.setState} generally does not trigger this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use static {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} instead
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call {@link Component.setState} here.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call {@link Component.setState} here.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of {@link NewLifecycle.getSnapshotBeforeUpdate getSnapshotBeforeUpdate}
         * or {@link StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps} prevents
         * this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update}
         * @see {@link https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path}
         */
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    }

    /**
     * @deprecated
     *
     * @see {@link https://legacy.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html Mixins Considered Harmful}
     */
    interface Mixin<P, S> extends ComponentLifecycle<P, S> {
        mixins?: Array<Mixin<P, S>> | undefined;
        statics?: {
            [key: string]: any;
        } | undefined;

        displayName?: string | undefined;
        propTypes?: ValidationMap<any> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        childContextTypes?: ValidationMap<any> | undefined;

        getDefaultProps?(): P;
        getInitialState?(): S;
    }

    /**
     * @deprecated
     *
     * @see {@link https://legacy.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html Mixins Considered Harmful}
     */
    interface ComponentSpec<P, S> extends Mixin<P, S> {
        render(): ReactNode;

        [propertyName: string]: any;
    }

    function createRef<T>(): RefObject<T>;

    /**
     * The type of the component returned from {@link forwardRef}.
     *
     * @template P The props the component accepts, if any.
     *
     * @see {@link ExoticComponent}
     */
    interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
        /**
         * @deprecated Use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value|default values for destructuring assignments instead}.
         */
        defaultProps?: Partial<P> | undefined;
        propTypes?: WeakValidationMap<P> | undefined;
    }

    /**
     * Lets your component expose a DOM node to a parent component
     * using a ref.
     *
     * @see {@link https://react.dev/reference/react/forwardRef React Docs}
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/ React TypeScript Cheatsheet}
     *
     * @param render See the {@link ForwardRefRenderFunction}.
     *
     * @template T The type of the DOM node.
     * @template P The props the component accepts, if any.
     *
     * @example
     *
     * \`\`\`tsx
     * interface Props {
     *   children?: ReactNode;
     *   type: "submit" | "button";
     * }
     *
     * export const FancyButton = forwardRef<HTMLButtonElement, Props>((props, ref) => (
     *   <button ref={ref} className="MyClassName" type={props.type}>
     *     {props.children}
     *   </button>
     * ));
     * \`\`\`
     */
    function forwardRef<T, P = {}>(
        render: ForwardRefRenderFunction<T, PropsWithoutRef<P>>,
    ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

    /**
     * Omits the 'ref' attribute from the given props object.
     *
     * @template P The props object type.
     */
    type PropsWithoutRef<P> =
        // Omit would not be sufficient for this. We'd like to avoid unnecessary mapping and need a distributive conditional to support unions.
        // see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
        // https://github.com/Microsoft/TypeScript/issues/28339
        P extends any ? ("ref" extends keyof P ? Omit<P, "ref"> : P) : P;
    /** Ensures that the props do not include string ref, which cannot be forwarded */
    type PropsWithRef<P> =
        // Note: String refs can be forwarded. We can't fix this bug without breaking a bunch of libraries now though.
        // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
        "ref" extends keyof P
            ? P extends { ref?: infer R | undefined }
                ? string extends R ? PropsWithoutRef<P> & { ref?: Exclude<R, string> | undefined }
                : P
            : P
            : P;

    type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };

    /**
     * Used to retrieve the props a component accepts. Can either be passed a string,
     * indicating a DOM element (e.g. 'div', 'span', etc.) or the type of a React
     * component.
     *
     * It's usually better to use {@link ComponentPropsWithRef} or {@link ComponentPropsWithoutRef}
     * instead of this type, as they let you be explicit about whether or not to include
     * the \`ref\` prop.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * \`\`\`tsx
     * // Retrieves the props an 'input' element accepts
     * type InputProps = React.ComponentProps<'input'>;
     * \`\`\`
     *
     * @example
     *
     * \`\`\`tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentProps = React.ComponentProps<typeof MyComponent>;
     * \`\`\`
     */
    type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = T extends
        JSXElementConstructor<infer P> ? P
        : T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T]
        : {};

    /**
     * Used to retrieve the props a component accepts with its ref. Can either be
     * passed a string, indicating a DOM element (e.g. 'div', 'span', etc.) or the
     * type of a React component.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * \`\`\`tsx
     * // Retrieves the props an 'input' element accepts
     * type InputProps = React.ComponentPropsWithRef<'input'>;
     * \`\`\`
     *
     * @example
     *
     * \`\`\`tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentPropsWithRef = React.ComponentPropsWithRef<typeof MyComponent>;
     * \`\`\`
     */
    type ComponentPropsWithRef<T extends ElementType> = T extends (new(props: infer P) => Component<any, any>)
        ? PropsWithoutRef<P> & RefAttributes<InstanceType<T>>
        : PropsWithRef<ComponentProps<T>>;
    /**
     * Used to retrieve the props a custom component accepts with its ref.
     *
     * Unlike {@link ComponentPropsWithRef}, this only works with custom
     * components, i.e. components you define yourself. This is to improve
     * type-checking performance.
     *
     * @example
     *
     * \`\`\`tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentPropsWithRef = React.CustomComponentPropsWithRef<typeof MyComponent>;
     * \`\`\`
     */
    type CustomComponentPropsWithRef<T extends ComponentType> = T extends (new(props: infer P) => Component<any, any>)
        ? (PropsWithoutRef<P> & RefAttributes<InstanceType<T>>)
        : T extends ((props: infer P, legacyContext?: any) => ReactNode) ? PropsWithRef<P>
        : never;

    /**
     * Used to retrieve the props a component accepts without its ref. Can either be
     * passed a string, indicating a DOM element (e.g. 'div', 'span', etc.) or the
     * type of a React component.
     *
     * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/ React TypeScript Cheatsheet}
     *
     * @example
     *
     * \`\`\`tsx
     * // Retrieves the props an 'input' element accepts
     * type InputProps = React.ComponentPropsWithoutRef<'input'>;
     * \`\`\`
     *
     * @example
     *
     * \`\`\`tsx
     * const MyComponent = (props: { foo: number, bar: string }) => <div />;
     *
     * // Retrieves the props 'MyComponent' accepts
     * type MyComponentPropsWithoutRef = React.ComponentPropsWithoutRef<typeof MyComponent>;
     * \`\`\`
     */
    type ComponentPropsWithoutRef<T extends ElementType> = PropsWithoutRef<ComponentProps<T>>;

    type ComponentRef<T extends ElementType> = T extends NamedExoticComponent<
        ComponentPropsWithoutRef<T> & RefAttributes<infer Method>
    > ? Method
        : ComponentPropsWithRef<T> extends RefAttributes<infer Method> ? Method
        : never;

    // will show \`Memo(\${Component.displayName || Component.name})\` in devtools by default,
    // but can be given its own specific name
    type MemoExoticComponent<T extends ComponentType<any>> = NamedExoticComponent<CustomComponentPropsWithRef<T>> & {
        readonly type: T;
    };

    /**
     * Lets you skip re-rendering a component when its props are unchanged.
     *
     * @see {@link https://react.dev/reference/react/memo React Docs}
     *
     * @param Component The component to memoize.
     * @param propsAreEqual A function that will be used to determine if the props have changed.
     *
     * @example
     *
     * \`\`\`tsx
     * import { memo } from 'react';
     *
     * const SomeComponent = memo(function SomeComponent(props: { foo: string }) {
     *   // ...
     * });
     * \`\`\`
     */
    function memo<P extends object>(
        Component: FunctionComponent<P>,
        propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean,
    ): NamedExoticComponent<P>;
    function memo<T extends ComponentType<any>>(
        Component: T,
        propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean,
    ): MemoExoticComponent<T>;

    interface LazyExoticComponent<T extends ComponentType<any>>
        extends ExoticComponent<CustomComponentPropsWithRef<T>>
    {
        readonly _result: T;
    }

    /**
     * Lets you defer loading a component’s code until it is rendered for the first time.
     *
     * @see {@link https://react.dev/reference/react/lazy React Docs}
     *
     * @param load A function that returns a \`Promise\` or another thenable (a \`Promise\`-like object with a
     * then method). React will not call \`load\` until the first time you attempt to render the returned
     * component. After React first calls load, it will wait for it to resolve, and then render the
     * resolved value’s \`.default\` as a React component. Both the returned \`Promise\` and the \`Promise\`’s
     * resolved value will be cached, so React will not call load more than once. If the \`Promise\` rejects,
     * React will throw the rejection reason for the nearest Error Boundary to handle.
     *
     * @example
     *
     * \`\`\`tsx
     * import { lazy } from 'react';
     *
     * const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
     * \`\`\`
     */
    function lazy<T extends ComponentType<any>>(
        load: () => Promise<{ default: T }>,
    ): LazyExoticComponent<T>;

    //
    // React Hooks
    // ----------------------------------------------------------------------

    /**
     * The instruction passed to a {@link Dispatch} function in {@link useState}
     * to tell React what the next value of the {@link useState} should be.
     *
     * Often found wrapped in {@link Dispatch}.
     *
     * @template S The type of the state.
     *
     * @example
     *
     * \`\`\`tsx
     * // This return type correctly represents the type of
     * // \`setCount\` in the example below.
     * const useCustomState = (): Dispatch<SetStateAction<number>> => {
     *   const [count, setCount] = useState(0);
     *
     *   return setCount;
     * }
     * \`\`\`
     */
    type SetStateAction<S> = S | ((prevState: S) => S);

    /**
     * A function that can be used to update the state of a {@link useState}
     * or {@link useReducer} hook.
     */
    type Dispatch<A> = (value: A) => void;
    /**
     * A {@link Dispatch} function can sometimes be called without any arguments.
     */
    type DispatchWithoutAction = () => void;
    // Unlike redux, the actions _can_ be anything
    type Reducer<S, A> = (prevState: S, action: A) => S;
    // If useReducer accepts a reducer without action, dispatch may be called without any parameters.
    type ReducerWithoutAction<S> = (prevState: S) => S;
    // types used to try and prevent the compiler from reducing S
    // to a supertype common with the second argument to useReducer()
    type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
    type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;
    // The identity check is done with the SameValue algorithm (Object.is), which is stricter than ===
    type ReducerStateWithoutAction<R extends ReducerWithoutAction<any>> = R extends ReducerWithoutAction<infer S> ? S
        : never;
    type DependencyList = readonly unknown[];

    // NOTE: callbacks are _only_ allowed to return either void, or a destructor.
    type EffectCallback = () => void | Destructor;

    interface MutableRefObject<T> {
        current: T;
    }

    // This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
    /**
     * Accepts a context object (the value returned from \`React.createContext\`) and returns the current
     * context value, as given by the nearest context provider for the given context.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useContext}
     */
    function useContext<T>(context: Context<T> /*, (not public API) observedBits?: number|boolean */): T;
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useState}
     */
    function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
    // convenience overload when first argument is omitted
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useState}
     */
    function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    // overload where dispatch could accept 0 arguments.
    function useReducer<R extends ReducerWithoutAction<any>, I>(
        reducer: R,
        initializerArg: I,
        initializer: (arg: I) => ReducerStateWithoutAction<R>,
    ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    // overload where dispatch could accept 0 arguments.
    function useReducer<R extends ReducerWithoutAction<any>>(
        reducer: R,
        initializerArg: ReducerStateWithoutAction<R>,
        initializer?: undefined,
    ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    // overload where "I" may be a subset of ReducerState<R>; used to provide autocompletion.
    // If "I" matches ReducerState<R> exactly then the last overload will allow initializer to be omitted.
    // the last overload effectively behaves as if the identity function (x => x) is the initializer.
    function useReducer<R extends Reducer<any, any>, I>(
        reducer: R,
        initializerArg: I & ReducerState<R>,
        initializer: (arg: I & ReducerState<R>) => ReducerState<R>,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */
    // overload for free "I"; all goes as long as initializer converts it into "ReducerState<R>".
    function useReducer<R extends Reducer<any, any>, I>(
        reducer: R,
        initializerArg: I,
        initializer: (arg: I) => ReducerState<R>,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * An alternative to \`useState\`.
     *
     * \`useReducer\` is usually preferable to \`useState\` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass \`dispatch\` down instead of callbacks.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useReducer}
     */

    // I'm not sure if I keep this 2-ary or if I make it (2,3)-ary; it's currently (2,3)-ary.
    // The Flow types do have an overload for 3-ary invocation with undefined initializer.

    // NOTE: without the ReducerState indirection, TypeScript would reduce S to be the most common
    // supertype between the reducer's return type and the initialState (or the initializer's return type),
    // which would prevent autocompletion from ever working.

    // TODO: double-check if this weird overload logic is necessary. It is possible it's either a bug
    // in older versions, or a regression in newer versions of the typescript completion service.
    function useReducer<R extends Reducer<any, any>>(
        reducer: R,
        initialState: ReducerState<R>,
        initializer?: undefined,
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * \`useRef\` returns a mutable ref object whose \`.current\` property is initialized to the passed argument
     * (\`initialValue\`). The returned object will persist for the full lifetime of the component.
     *
     * Note that \`useRef()\` is useful for more than the \`ref\` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useRef}
     */
    function useRef<T>(initialValue: T): MutableRefObject<T>;
    // convenience overload for refs given as a ref prop as they typically start with a null value
    /**
     * \`useRef\` returns a mutable ref object whose \`.current\` property is initialized to the passed argument
     * (\`initialValue\`). The returned object will persist for the full lifetime of the component.
     *
     * Note that \`useRef()\` is useful for more than the \`ref\` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * Usage note: if you need the result of useRef to be directly mutable, include \`| null\` in the type
     * of the generic argument.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useRef}
     */
    function useRef<T>(initialValue: T | null): RefObject<T>;
    // convenience overload for potentially undefined initialValue / call with 0 arguments
    // has a default to stop it from defaulting to {} instead
    /**
     * \`useRef\` returns a mutable ref object whose \`.current\` property is initialized to the passed argument
     * (\`initialValue\`). The returned object will persist for the full lifetime of the component.
     *
     * Note that \`useRef()\` is useful for more than the \`ref\` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useRef}
     */
    function useRef<T = undefined>(initialValue?: undefined): MutableRefObject<T | undefined>;
    /**
     * The signature is identical to \`useEffect\`, but it fires synchronously after all DOM mutations.
     * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
     * \`useLayoutEffect\` will be flushed synchronously, before the browser has a chance to paint.
     *
     * Prefer the standard \`useEffect\` when possible to avoid blocking visual updates.
     *
     * If you’re migrating code from a class component, \`useLayoutEffect\` fires in the same phase as
     * \`componentDidMount\` and \`componentDidUpdate\`.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useLayoutEffect}
     */
    function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
    /**
     * Accepts a function that contains imperative, possibly effectful code.
     *
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useEffect}
     */
    function useEffect(effect: EffectCallback, deps?: DependencyList): void;
    // NOTE: this does not accept strings, but this will have to be fixed by removing strings from type Ref<T>
    /**
     * \`useImperativeHandle\` customizes the instance value that is exposed to parent components when using
     * \`ref\`. As always, imperative code using refs should be avoided in most cases.
     *
     * \`useImperativeHandle\` should be used with \`React.forwardRef\`.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useImperativeHandle}
     */
    function useImperativeHandle<T, R extends T>(ref: Ref<T> | undefined, init: () => R, deps?: DependencyList): void;
    // I made 'inputs' required here and in useMemo as there's no point to memoizing without the memoization key
    // useCallback(X) is identical to just using X, useMemo(() => Y) is identical to just using Y.
    /**
     * \`useCallback\` will return a memoized version of the callback that only changes if one of the \`inputs\`
     * has changed.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useCallback}
     */
    // A specific function type would not trigger implicit any.
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/52873#issuecomment-845806435 for a comparison between \`Function\` and more specific types.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    function useCallback<T extends Function>(callback: T, deps: DependencyList): T;
    /**
     * \`useMemo\` will only recompute the memoized value when one of the \`deps\` has changed.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useMemo}
     */
    // allow undefined, but don't make it optional as that is very likely a mistake
    function useMemo<T>(factory: () => T, deps: DependencyList): T;
    /**
     * \`useDebugValue\` can be used to display a label for custom hooks in React DevTools.
     *
     * NOTE: We don’t recommend adding debug values to every custom hook.
     * It’s most valuable for custom hooks that are part of shared libraries.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useDebugValue}
     */
    // the name of the custom hook is itself derived from the function name at runtime:
    // it's just the function name without the "use" prefix.
    function useDebugValue<T>(value: T, format?: (value: T) => any): void;

    // must be synchronous
    export type TransitionFunction = () => VoidOrUndefinedOnly;
    // strange definition to allow vscode to show documentation on the invocation
    export interface TransitionStartFunction {
        /**
         * State updates caused inside the callback are allowed to be deferred.
         *
         * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
         *
         * @param callback A _synchronous_ function which causes state updates that can be deferred.
         */
        (callback: TransitionFunction): void;
    }

    /**
     * Returns a deferred version of the value that may “lag behind” it.
     *
     * This is commonly used to keep the interface responsive when you have something that renders immediately
     * based on user input and something that needs to wait for a data fetch.
     *
     * A good example of this is a text input.
     *
     * @param value The value that is going to be deferred
     *
     * @see {@link https://react.dev/reference/react/useDeferredValue}
     */
    export function useDeferredValue<T>(value: T): T;

    /**
     * Allows components to avoid undesirable loading states by waiting for content to load
     * before transitioning to the next screen. It also allows components to defer slower,
     * data fetching updates until subsequent renders so that more crucial updates can be
     * rendered immediately.
     *
     * The \`useTransition\` hook returns two values in an array.
     *
     * The first is a boolean, React’s way of informing us whether we’re waiting for the transition to finish.
     * The second is a function that takes a callback. We can use it to tell React which state we want to defer.
     *
     * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
     *
     * @see {@link https://react.dev/reference/react/useTransition}
     */
    export function useTransition(): [boolean, TransitionStartFunction];

    /**
     * Similar to \`useTransition\` but allows uses where hooks are not available.
     *
     * @param callback A _synchronous_ function which causes state updates that can be deferred.
     */
    export function startTransition(scope: TransitionFunction): void;

    /**
     * Wrap any code rendering and triggering updates to your components into \`act()\` calls.
     *
     * Ensures that the behavior in your tests matches what happens in the browser
     * more closely by executing pending \`useEffect\`s before returning. This also
     * reduces the amount of re-renders done.
     *
     * @param callback A synchronous, void callback that will execute as a single, complete React commit.
     *
     * @see {@link https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks}
     */
    // While act does always return Thenable, if a void function is passed, we pretend the return value is also void to not trigger dangling Promise lint rules.
    export function act(callback: () => VoidOrUndefinedOnly): void;
    export function act<T>(callback: () => T | Promise<T>): Promise<T>;

    export function useId(): string;

    /**
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @see {@link https://github.com/facebook/react/pull/21913}
     */
    export function useInsertionEffect(effect: EffectCallback, deps?: DependencyList): void;

    /**
     * @param subscribe
     * @param getSnapshot
     *
     * @see {@link https://github.com/reactwg/react-18/discussions/86}
     */
    // keep in sync with \`useSyncExternalStore\` from \`use-sync-external-store\`
    export function useSyncExternalStore<Snapshot>(
        subscribe: (onStoreChange: () => void) => () => void,
        getSnapshot: () => Snapshot,
        getServerSnapshot?: () => Snapshot,
    ): Snapshot;

    //
    // Event System
    // ----------------------------------------------------------------------
    // TODO: change any to unknown when moving to TS v3
    interface BaseSyntheticEvent<E = object, C = any, T = any> {
        nativeEvent: E;
        currentTarget: C;
        target: T;
        bubbles: boolean;
        cancelable: boolean;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        preventDefault(): void;
        isDefaultPrevented(): boolean;
        stopPropagation(): void;
        isPropagationStopped(): boolean;
        persist(): void;
        timeStamp: number;
        type: string;
    }

    /**
     * currentTarget - a reference to the element on which the event listener is registered.
     *
     * target - a reference to the element from which the event was originally dispatched.
     * This might be a child element to the element on which the event listener is registered.
     * If you thought this should be \`EventTarget & T\`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
     */
    interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}

    interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
        clipboardData: DataTransfer;
    }

    interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
        data: string;
    }

    interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
        dataTransfer: DataTransfer;
    }

    interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
        pointerId: number;
        pressure: number;
        tangentialPressure: number;
        tiltX: number;
        tiltY: number;
        twist: number;
        width: number;
        height: number;
        pointerType: "mouse" | "pen" | "touch";
        isPrimary: boolean;
    }

    interface FocusEvent<Target = Element, RelatedTarget = Element> extends SyntheticEvent<Target, NativeFocusEvent> {
        relatedTarget: (EventTarget & RelatedTarget) | null;
        target: EventTarget & Target;
    }

    interface FormEvent<T = Element> extends SyntheticEvent<T> {
    }

    interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface InputEvent<T = Element> extends SyntheticEvent<T, NativeInputEvent> {
        data: string;
    }

    export type ModifierKey =
        | "Alt"
        | "AltGraph"
        | "CapsLock"
        | "Control"
        | "Fn"
        | "FnLock"
        | "Hyper"
        | "Meta"
        | "NumLock"
        | "ScrollLock"
        | "Shift"
        | "Super"
        | "Symbol"
        | "SymbolLock";

    interface KeyboardEvent<T = Element> extends UIEvent<T, NativeKeyboardEvent> {
        altKey: boolean;
        /** @deprecated */
        charCode: number;
        ctrlKey: boolean;
        code: string;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        /**
         * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
         */
        key: string;
        /** @deprecated */
        keyCode: number;
        locale: string;
        location: number;
        metaKey: boolean;
        repeat: boolean;
        shiftKey: boolean;
        /** @deprecated */
        which: number;
    }

    interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        movementX: number;
        movementY: number;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget | null;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    interface TouchEvent<T = Element> extends UIEvent<T, NativeTouchEvent> {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    interface UIEvent<T = Element, E = NativeUIEvent> extends SyntheticEvent<T, E> {
        detail: number;
        view: AbstractView;
    }

    interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
    }

    interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
        animationName: string;
        elapsedTime: number;
        pseudoElement: string;
    }

    interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
        elapsedTime: number;
        propertyName: string;
        pseudoElement: string;
    }

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

    type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

    type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
    type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
    type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
    type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
    type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
    type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
    type InputEventHandler<T = Element> = EventHandler<InputEvent<T>>;
    type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
    type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
    type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
    type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
    type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
    type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
    type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
    type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

    //
    // Props / DOM Attributes
    // ----------------------------------------------------------------------

    interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {
    }

    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    }

    interface SVGLineElementAttributes<T> extends SVGProps<T> {}
    interface SVGTextElementAttributes<T> extends SVGProps<T> {}

    interface DOMAttributes<T> {
        children?: ReactNode | undefined;
        dangerouslySetInnerHTML?: {
            // Should be InnerHTML['innerHTML'].
            // But unfortunately we're mixing renderer-specific type declarations.
            __html: string | TrustedHTML;
        } | undefined;

        // Clipboard Events
        onCopy?: ClipboardEventHandler<T> | undefined;
        onCopyCapture?: ClipboardEventHandler<T> | undefined;
        onCut?: ClipboardEventHandler<T> | undefined;
        onCutCapture?: ClipboardEventHandler<T> | undefined;
        onPaste?: ClipboardEventHandler<T> | undefined;
        onPasteCapture?: ClipboardEventHandler<T> | undefined;

        // Composition Events
        onCompositionEnd?: CompositionEventHandler<T> | undefined;
        onCompositionEndCapture?: CompositionEventHandler<T> | undefined;
        onCompositionStart?: CompositionEventHandler<T> | undefined;
        onCompositionStartCapture?: CompositionEventHandler<T> | undefined;
        onCompositionUpdate?: CompositionEventHandler<T> | undefined;
        onCompositionUpdateCapture?: CompositionEventHandler<T> | undefined;

        // Focus Events
        onFocus?: FocusEventHandler<T> | undefined;
        onFocusCapture?: FocusEventHandler<T> | undefined;
        onBlur?: FocusEventHandler<T> | undefined;
        onBlurCapture?: FocusEventHandler<T> | undefined;

        // Form Events
        onChange?: FormEventHandler<T> | undefined;
        onChangeCapture?: FormEventHandler<T> | undefined;
        onBeforeInput?: InputEventHandler<T> | undefined;
        onBeforeInputCapture?: FormEventHandler<T> | undefined;
        onInput?: FormEventHandler<T> | undefined;
        onInputCapture?: FormEventHandler<T> | undefined;
        onReset?: FormEventHandler<T> | undefined;
        onResetCapture?: FormEventHandler<T> | undefined;
        onSubmit?: FormEventHandler<T> | undefined;
        onSubmitCapture?: FormEventHandler<T> | undefined;
        onInvalid?: FormEventHandler<T> | undefined;
        onInvalidCapture?: FormEventHandler<T> | undefined;

        // Image Events
        onLoad?: ReactEventHandler<T> | undefined;
        onLoadCapture?: ReactEventHandler<T> | undefined;
        onError?: ReactEventHandler<T> | undefined; // also a Media Event
        onErrorCapture?: ReactEventHandler<T> | undefined; // also a Media Event

        // Keyboard Events
        onKeyDown?: KeyboardEventHandler<T> | undefined;
        onKeyDownCapture?: KeyboardEventHandler<T> | undefined;
        /** @deprecated Use \`onKeyUp\` or \`onKeyDown\` instead */
        onKeyPress?: KeyboardEventHandler<T> | undefined;
        /** @deprecated Use \`onKeyUpCapture\` or \`onKeyDownCapture\` instead */
        onKeyPressCapture?: KeyboardEventHandler<T> | undefined;
        onKeyUp?: KeyboardEventHandler<T> | undefined;
        onKeyUpCapture?: KeyboardEventHandler<T> | undefined;

        // Media Events
        onAbort?: ReactEventHandler<T> | undefined;
        onAbortCapture?: ReactEventHandler<T> | undefined;
        onCanPlay?: ReactEventHandler<T> | undefined;
        onCanPlayCapture?: ReactEventHandler<T> | undefined;
        onCanPlayThrough?: ReactEventHandler<T> | undefined;
        onCanPlayThroughCapture?: ReactEventHandler<T> | undefined;
        onDurationChange?: ReactEventHandler<T> | undefined;
        onDurationChangeCapture?: ReactEventHandler<T> | undefined;
        onEmptied?: ReactEventHandler<T> | undefined;
        onEmptiedCapture?: ReactEventHandler<T> | undefined;
        onEncrypted?: ReactEventHandler<T> | undefined;
        onEncryptedCapture?: ReactEventHandler<T> | undefined;
        onEnded?: ReactEventHandler<T> | undefined;
        onEndedCapture?: ReactEventHandler<T> | undefined;
        onLoadedData?: ReactEventHandler<T> | undefined;
        onLoadedDataCapture?: ReactEventHandler<T> | undefined;
        onLoadedMetadata?: ReactEventHandler<T> | undefined;
        onLoadedMetadataCapture?: ReactEventHandler<T> | undefined;
        onLoadStart?: ReactEventHandler<T> | undefined;
        onLoadStartCapture?: ReactEventHandler<T> | undefined;
        onPause?: ReactEventHandler<T> | undefined;
        onPauseCapture?: ReactEventHandler<T> | undefined;
        onPlay?: ReactEventHandler<T> | undefined;
        onPlayCapture?: ReactEventHandler<T> | undefined;
        onPlaying?: ReactEventHandler<T> | undefined;
        onPlayingCapture?: ReactEventHandler<T> | undefined;
        onProgress?: ReactEventHandler<T> | undefined;
        onProgressCapture?: ReactEventHandler<T> | undefined;
        onRateChange?: ReactEventHandler<T> | undefined;
        onRateChangeCapture?: ReactEventHandler<T> | undefined;
        onSeeked?: ReactEventHandler<T> | undefined;
        onSeekedCapture?: ReactEventHandler<T> | undefined;
        onSeeking?: ReactEventHandler<T> | undefined;
        onSeekingCapture?: ReactEventHandler<T> | undefined;
        onStalled?: ReactEventHandler<T> | undefined;
        onStalledCapture?: ReactEventHandler<T> | undefined;
        onSuspend?: ReactEventHandler<T> | undefined;
        onSuspendCapture?: ReactEventHandler<T> | undefined;
        onTimeUpdate?: ReactEventHandler<T> | undefined;
        onTimeUpdateCapture?: ReactEventHandler<T> | undefined;
        onVolumeChange?: ReactEventHandler<T> | undefined;
        onVolumeChangeCapture?: ReactEventHandler<T> | undefined;
        onWaiting?: ReactEventHandler<T> | undefined;
        onWaitingCapture?: ReactEventHandler<T> | undefined;

        // MouseEvents
        onAuxClick?: MouseEventHandler<T> | undefined;
        onAuxClickCapture?: MouseEventHandler<T> | undefined;
        onClick?: MouseEventHandler<T> | undefined;
        onClickCapture?: MouseEventHandler<T> | undefined;
        onContextMenu?: MouseEventHandler<T> | undefined;
        onContextMenuCapture?: MouseEventHandler<T> | undefined;
        onDoubleClick?: MouseEventHandler<T> | undefined;
        onDoubleClickCapture?: MouseEventHandler<T> | undefined;
        onDrag?: DragEventHandler<T> | undefined;
        onDragCapture?: DragEventHandler<T> | undefined;
        onDragEnd?: DragEventHandler<T> | undefined;
        onDragEndCapture?: DragEventHandler<T> | undefined;
        onDragEnter?: DragEventHandler<T> | undefined;
        onDragEnterCapture?: DragEventHandler<T> | undefined;
        onDragExit?: DragEventHandler<T> | undefined;
        onDragExitCapture?: DragEventHandler<T> | undefined;
        onDragLeave?: DragEventHandler<T> | undefined;
        onDragLeaveCapture?: DragEventHandler<T> | undefined;
        onDragOver?: DragEventHandler<T> | undefined;
        onDragOverCapture?: DragEventHandler<T> | undefined;
        onDragStart?: DragEventHandler<T> | undefined;
        onDragStartCapture?: DragEventHandler<T> | undefined;
        onDrop?: DragEventHandler<T> | undefined;
        onDropCapture?: DragEventHandler<T> | undefined;
        onMouseDown?: MouseEventHandler<T> | undefined;
        onMouseDownCapture?: MouseEventHandler<T> | undefined;
        onMouseEnter?: MouseEventHandler<T> | undefined;
        onMouseLeave?: MouseEventHandler<T> | undefined;
        onMouseMove?: MouseEventHandler<T> | undefined;
        onMouseMoveCapture?: MouseEventHandler<T> | undefined;
        onMouseOut?: MouseEventHandler<T> | undefined;
        onMouseOutCapture?: MouseEventHandler<T> | undefined;
        onMouseOver?: MouseEventHandler<T> | undefined;
        onMouseOverCapture?: MouseEventHandler<T> | undefined;
        onMouseUp?: MouseEventHandler<T> | undefined;
        onMouseUpCapture?: MouseEventHandler<T> | undefined;

        // Selection Events
        onSelect?: ReactEventHandler<T> | undefined;
        onSelectCapture?: ReactEventHandler<T> | undefined;

        // Touch Events
        onTouchCancel?: TouchEventHandler<T> | undefined;
        onTouchCancelCapture?: TouchEventHandler<T> | undefined;
        onTouchEnd?: TouchEventHandler<T> | undefined;
        onTouchEndCapture?: TouchEventHandler<T> | undefined;
        onTouchMove?: TouchEventHandler<T> | undefined;
        onTouchMoveCapture?: TouchEventHandler<T> | undefined;
        onTouchStart?: TouchEventHandler<T> | undefined;
        onTouchStartCapture?: TouchEventHandler<T> | undefined;

        // Pointer Events
        onPointerDown?: PointerEventHandler<T> | undefined;
        onPointerDownCapture?: PointerEventHandler<T> | undefined;
        onPointerMove?: PointerEventHandler<T> | undefined;
        onPointerMoveCapture?: PointerEventHandler<T> | undefined;
        onPointerUp?: PointerEventHandler<T> | undefined;
        onPointerUpCapture?: PointerEventHandler<T> | undefined;
        onPointerCancel?: PointerEventHandler<T> | undefined;
        onPointerCancelCapture?: PointerEventHandler<T> | undefined;
        onPointerEnter?: PointerEventHandler<T> | undefined;
        onPointerLeave?: PointerEventHandler<T> | undefined;
        onPointerOver?: PointerEventHandler<T> | undefined;
        onPointerOverCapture?: PointerEventHandler<T> | undefined;
        onPointerOut?: PointerEventHandler<T> | undefined;
        onPointerOutCapture?: PointerEventHandler<T> | undefined;
        onGotPointerCapture?: PointerEventHandler<T> | undefined;
        onGotPointerCaptureCapture?: PointerEventHandler<T> | undefined;
        onLostPointerCapture?: PointerEventHandler<T> | undefined;
        onLostPointerCaptureCapture?: PointerEventHandler<T> | undefined;

        // UI Events
        onScroll?: UIEventHandler<T> | undefined;
        onScrollCapture?: UIEventHandler<T> | undefined;

        // Wheel Events
        onWheel?: WheelEventHandler<T> | undefined;
        onWheelCapture?: WheelEventHandler<T> | undefined;

        // Animation Events
        onAnimationStart?: AnimationEventHandler<T> | undefined;
        onAnimationStartCapture?: AnimationEventHandler<T> | undefined;
        onAnimationEnd?: AnimationEventHandler<T> | undefined;
        onAnimationEndCapture?: AnimationEventHandler<T> | undefined;
        onAnimationIteration?: AnimationEventHandler<T> | undefined;
        onAnimationIterationCapture?: AnimationEventHandler<T> | undefined;

        // Transition Events
        onTransitionEnd?: TransitionEventHandler<T> | undefined;
        onTransitionEndCapture?: TransitionEventHandler<T> | undefined;
    }

    export interface CSSProperties extends CSS.Properties<string | number> {
        /**
         * The index signature was removed to enable closed typing for style
         * using CSSType. You're able to use type assertion or module augmentation
         * to add properties or an index signature of your own.
         *
         * For examples and more information, visit:
         * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
         */
    }

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface AriaAttributes {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        "aria-activedescendant"?: string | undefined;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        "aria-atomic"?: Booleanish | undefined;
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        /**
         * Defines a string value that labels the current element, which is intended to be converted into Braille.
         * @see aria-label.
         */
        "aria-braillelabel"?: string | undefined;
        /**
         * Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
         * @see aria-roledescription.
         */
        "aria-brailleroledescription"?: string | undefined;
        "aria-busy"?: Booleanish | undefined;
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        "aria-colcount"?: number | undefined;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        "aria-colindex"?: number | undefined;
        /**
         * Defines a human readable text alternative of aria-colindex.
         * @see aria-rowindextext.
         */
        "aria-colindextext"?: string | undefined;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        "aria-colspan"?: number | undefined;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        "aria-controls"?: string | undefined;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        "aria-describedby"?: string | undefined;
        /**
         * Defines a string value that describes or annotates the current element.
         * @see related aria-describedby.
         */
        "aria-description"?: string | undefined;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        "aria-details"?: string | undefined;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        "aria-disabled"?: Booleanish | undefined;
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        "aria-errormessage"?: string | undefined;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        "aria-expanded"?: Booleanish | undefined;
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        "aria-flowto"?: string | undefined;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        "aria-grabbed"?: Booleanish | undefined;
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        "aria-hidden"?: Booleanish | undefined;
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        "aria-keyshortcuts"?: string | undefined;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        "aria-label"?: string | undefined;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        "aria-labelledby"?: string | undefined;
        /** Defines the hierarchical level of an element within a structure. */
        "aria-level"?: number | undefined;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        "aria-live"?: "off" | "assertive" | "polite" | undefined;
        /** Indicates whether an element is modal when displayed. */
        "aria-modal"?: Booleanish | undefined;
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        "aria-multiline"?: Booleanish | undefined;
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        "aria-multiselectable"?: Booleanish | undefined;
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        "aria-orientation"?: "horizontal" | "vertical" | undefined;
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        "aria-owns"?: string | undefined;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        "aria-placeholder"?: string | undefined;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        "aria-posinset"?: number | undefined;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        "aria-readonly"?: Booleanish | undefined;
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        "aria-relevant"?:
            | "additions"
            | "additions removals"
            | "additions text"
            | "all"
            | "removals"
            | "removals additions"
            | "removals text"
            | "text"
            | "text additions"
            | "text removals"
            | undefined;
        /** Indicates that user input is required on the element before a form may be submitted. */
        "aria-required"?: Booleanish | undefined;
        /** Defines a human-readable, author-localized description for the role of an element. */
        "aria-roledescription"?: string | undefined;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        "aria-rowcount"?: number | undefined;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        "aria-rowindex"?: number | undefined;
        /**
         * Defines a human readable text alternative of aria-rowindex.
         * @see aria-colindextext.
         */
        "aria-rowindextext"?: string | undefined;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        "aria-rowspan"?: number | undefined;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        "aria-selected"?: Booleanish | undefined;
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        "aria-setsize"?: number | undefined;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
        /** Defines the maximum allowed value for a range widget. */
        "aria-valuemax"?: number | undefined;
        /** Defines the minimum allowed value for a range widget. */
        "aria-valuemin"?: number | undefined;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        "aria-valuenow"?: number | undefined;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        "aria-valuetext"?: string | undefined;
    }

    // All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
    type AriaRole =
        | "alert"
        | "alertdialog"
        | "application"
        | "article"
        | "banner"
        | "button"
        | "cell"
        | "checkbox"
        | "columnheader"
        | "combobox"
        | "complementary"
        | "contentinfo"
        | "definition"
        | "dialog"
        | "directory"
        | "document"
        | "feed"
        | "figure"
        | "form"
        | "grid"
        | "gridcell"
        | "group"
        | "heading"
        | "img"
        | "link"
        | "list"
        | "listbox"
        | "listitem"
        | "log"
        | "main"
        | "marquee"
        | "math"
        | "menu"
        | "menubar"
        | "menuitem"
        | "menuitemcheckbox"
        | "menuitemradio"
        | "navigation"
        | "none"
        | "note"
        | "option"
        | "presentation"
        | "progressbar"
        | "radio"
        | "radiogroup"
        | "region"
        | "row"
        | "rowgroup"
        | "rowheader"
        | "scrollbar"
        | "search"
        | "searchbox"
        | "separator"
        | "slider"
        | "spinbutton"
        | "status"
        | "switch"
        | "tab"
        | "table"
        | "tablist"
        | "tabpanel"
        | "term"
        | "textbox"
        | "timer"
        | "toolbar"
        | "tooltip"
        | "tree"
        | "treegrid"
        | "treeitem"
        | (string & {});

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;

        // Standard HTML Attributes
        accessKey?: string | undefined;
        autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {});
        autoFocus?: boolean | undefined;
        className?: string | undefined;
        contentEditable?: Booleanish | "inherit" | "plaintext-only" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: Booleanish | undefined;
        enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        slot?: string | undefined;
        spellCheck?: Booleanish | undefined;
        style?: CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;

        // Unknown
        radioGroup?: string | undefined; // <command>, <menuitem>

        // WAI-ARIA
        role?: AriaRole | undefined;

        // RDFa Attributes
        about?: string | undefined;
        content?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        rel?: string | undefined;
        resource?: string | undefined;
        rev?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;

        // Non-standard Attributes
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;

        // Living Standard
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}
         */
        inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
        /**
         * Specify that a standard HTML element should behave like a defined custom built-in element
         * @see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}
         */
        is?: string | undefined;
        /**
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts}
         */
        exportparts?: string | undefined;
        /**
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part}
         */
        part?: string | undefined;
    }

    /**
     * For internal usage only.
     * Different release channels declare additional types of ReactNode this particular release channel accepts.
     * App or library types should never augment this interface.
     */
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS {}

    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
        accept?: string | undefined;
        acceptCharset?: string | undefined;
        action?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        alt?: string | undefined;
        as?: string | undefined;
        async?: boolean | undefined;
        autoComplete?: string | undefined;
        autoPlay?: boolean | undefined;
        capture?: boolean | "user" | "environment" | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        charSet?: string | undefined;
        challenge?: string | undefined;
        checked?: boolean | undefined;
        cite?: string | undefined;
        classID?: string | undefined;
        cols?: number | undefined;
        colSpan?: number | undefined;
        controls?: boolean | undefined;
        coords?: string | undefined;
        crossOrigin?: CrossOrigin;
        data?: string | undefined;
        dateTime?: string | undefined;
        default?: boolean | undefined;
        defer?: boolean | undefined;
        disabled?: boolean | undefined;
        download?: any;
        encType?: string | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        frameBorder?: number | string | undefined;
        headers?: string | undefined;
        height?: number | string | undefined;
        high?: number | undefined;
        href?: string | undefined;
        hrefLang?: string | undefined;
        htmlFor?: string | undefined;
        httpEquiv?: string | undefined;
        integrity?: string | undefined;
        keyParams?: string | undefined;
        keyType?: string | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        list?: string | undefined;
        loop?: boolean | undefined;
        low?: number | undefined;
        manifest?: string | undefined;
        marginHeight?: number | undefined;
        marginWidth?: number | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        media?: string | undefined;
        mediaGroup?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        muted?: boolean | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        open?: boolean | undefined;
        optimum?: number | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        preload?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        reversed?: boolean | undefined;
        rows?: number | undefined;
        rowSpan?: number | undefined;
        sandbox?: string | undefined;
        scope?: string | undefined;
        scoped?: boolean | undefined;
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        selected?: boolean | undefined;
        shape?: string | undefined;
        size?: number | undefined;
        sizes?: string | undefined;
        span?: number | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        srcLang?: string | undefined;
        srcSet?: string | undefined;
        start?: number | undefined;
        step?: number | string | undefined;
        summary?: string | undefined;
        target?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        value?: string | readonly string[] | number | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
        wrap?: string | undefined;
    }

    type HTMLAttributeReferrerPolicy =
        | ""
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";

    type HTMLAttributeAnchorTarget =
        | "_self"
        | "_blank"
        | "_parent"
        | "_top"
        | (string & {});

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        ping?: string | undefined;
        target?: HTMLAttributeAnchorTarget | undefined;
        type?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    }

    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        coords?: string | undefined;
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        shape?: string | undefined;
        target?: string | undefined;
    }

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
        href?: string | undefined;
        target?: string | undefined;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ]
            | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        name?: string | undefined;
        type?: "submit" | "reset" | "button" | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        width?: number | string | undefined;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
        width?: number | string | undefined;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
    }

    interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | readonly string[] | number | undefined;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean | undefined;
        onToggle?: ReactEventHandler<T> | undefined;
        name?: string | undefined;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
        closedby?: "any" | "closerequest" | "none" | undefined;
        onCancel?: ReactEventHandler<T> | undefined;
        onClose?: ReactEventHandler<T> | undefined;
        open?: boolean | undefined;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        src?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        form?: string | undefined;
        name?: string | undefined;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        acceptCharset?: string | undefined;
        action?:
            | string
            | undefined
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ];
        autoComplete?: string | undefined;
        encType?: string | undefined;
        method?: string | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        target?: string | undefined;
    }

    interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
        manifest?: string | undefined;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allow?: string | undefined;
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        /** @deprecated */
        frameBorder?: number | string | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        /** @deprecated */
        marginHeight?: number | undefined;
        /** @deprecated */
        marginWidth?: number | undefined;
        name?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sandbox?: string | undefined;
        /** @deprecated */
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        width?: number | string | undefined;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        crossOrigin?: CrossOrigin;
        decoding?: "async" | "auto" | "sync" | undefined;
        fetchPriority?: "high" | "low" | "auto";
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    type HTMLInputTypeAttribute =
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
        | (string & {});

    type AutoFillAddressKind = "billing" | "shipping";
    type AutoFillBase = "" | "off" | "on";
    type AutoFillContactField =
        | "email"
        | "tel"
        | "tel-area-code"
        | "tel-country-code"
        | "tel-extension"
        | "tel-local"
        | "tel-local-prefix"
        | "tel-local-suffix"
        | "tel-national";
    type AutoFillContactKind = "home" | "mobile" | "work";
    type AutoFillCredentialField = "webauthn";
    type AutoFillNormalField =
        | "additional-name"
        | "address-level1"
        | "address-level2"
        | "address-level3"
        | "address-level4"
        | "address-line1"
        | "address-line2"
        | "address-line3"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "cc-csc"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-family-name"
        | "cc-given-name"
        | "cc-name"
        | "cc-number"
        | "cc-type"
        | "country"
        | "country-name"
        | "current-password"
        | "family-name"
        | "given-name"
        | "honorific-prefix"
        | "honorific-suffix"
        | "name"
        | "new-password"
        | "one-time-code"
        | "organization"
        | "postal-code"
        | "street-address"
        | "transaction-amount"
        | "transaction-currency"
        | "username";
    type OptionalPrefixToken<T extends string> = \`\${T} \` | "";
    type OptionalPostfixToken<T extends string> = \` \${T}\` | "";
    type AutoFillField = AutoFillNormalField | \`\${OptionalPrefixToken<AutoFillContactKind>}\${AutoFillContactField}\`;
    type AutoFillSection = \`section-\${string}\`;
    type AutoFill =
        | AutoFillBase
        | \`\${OptionalPrefixToken<AutoFillSection>}\${OptionalPrefixToken<
            AutoFillAddressKind
        >}\${AutoFillField}\${OptionalPostfixToken<AutoFillCredentialField>}\`;
    type HTMLInputAutoCompleteAttribute = AutoFill | (string & {});

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string | undefined;
        alt?: string | undefined;
        autoComplete?: HTMLInputAutoCompleteAttribute | undefined;
        capture?: boolean | "user" | "environment" | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        formAction?:
            | string
            | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS[
                keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS
            ]
            | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        height?: number | string | undefined;
        list?: string | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        src?: string | undefined;
        step?: number | string | undefined;
        type?: HTMLInputTypeAttribute | undefined;
        value?: string | readonly string[] | number | undefined;
        width?: number | string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        challenge?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        keyType?: string | undefined;
        keyParams?: string | undefined;
        name?: string | undefined;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | readonly string[] | number | undefined;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        as?: string | undefined;
        blocking?: "render" | (string & {}) | undefined;
        crossOrigin?: CrossOrigin;
        fetchPriority?: "high" | "low" | "auto";
        href?: string | undefined;
        hrefLang?: string | undefined;
        integrity?: string | undefined;
        media?: string | undefined;
        imageSrcSet?: string | undefined;
        imageSizes?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        type?: string | undefined;
        charSet?: string | undefined;
    }

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: string | undefined;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoPlay?: boolean | undefined;
        controls?: boolean | undefined;
        controlsList?: string | undefined;
        crossOrigin?: CrossOrigin;
        loop?: boolean | undefined;
        mediaGroup?: string | undefined;
        muted?: boolean | undefined;
        playsInline?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string | undefined;
        content?: string | undefined;
        httpEquiv?: string | undefined;
        media?: string | undefined;
        name?: string | undefined;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        high?: number | undefined;
        low?: number | undefined;
        max?: number | string | undefined;
        min?: number | string | undefined;
        optimum?: number | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
        classID?: string | undefined;
        data?: string | undefined;
        form?: string | undefined;
        height?: number | string | undefined;
        name?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
    }

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
        reversed?: boolean | undefined;
        start?: number | undefined;
        type?: "1" | "a" | "A" | "i" | "I" | undefined;
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
        selected?: boolean | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
        name?: string | undefined;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string | undefined;
        value?: string | readonly string[] | number | undefined;
    }

    interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean | undefined;
        blocking?: "render" | (string & {}) | undefined;
        /** @deprecated */
        charSet?: string | undefined;
        crossOrigin?: CrossOrigin;
        defer?: boolean | undefined;
        integrity?: string | undefined;
        noModule?: boolean | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        src?: string | undefined;
        type?: string | undefined;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        value?: string | readonly string[] | number | undefined;
        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        media?: string | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        blocking?: "render" | (string & {}) | undefined;
        media?: string | undefined;
        scoped?: boolean | undefined;
        type?: string | undefined;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | undefined;
        bgcolor?: string | undefined;
        border?: number | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        frame?: boolean | undefined;
        rules?: "none" | "groups" | "rows" | "columns" | "all" | undefined;
        summary?: string | undefined;
        width?: number | string | undefined;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        cols?: number | undefined;
        dirName?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        maxLength?: number | undefined;
        minLength?: number | undefined;
        name?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        rows?: number | undefined;
        value?: string | readonly string[] | number | undefined;
        wrap?: string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
        height?: number | string | undefined;
        width?: number | string | undefined;
        valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        dateTime?: string | undefined;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        default?: boolean | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        src?: string | undefined;
        srcLang?: string | undefined;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        height?: number | string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        width?: number | string | undefined;
        disablePictureInPicture?: boolean | undefined;
        disableRemotePlayback?: boolean | undefined;

        onResize?: ReactEventHandler<T> | undefined;
        onResizeCapture?: ReactEventHandler<T> | undefined;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        suppressHydrationWarning?: boolean | undefined;

        // Attributes which also defined in HTMLAttributes
        // See comment in SVGDOMPropertyConfig.js
        className?: string | undefined;
        color?: string | undefined;
        height?: number | string | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        max?: number | string | undefined;
        media?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        name?: string | undefined;
        style?: CSSProperties | undefined;
        target?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;

        // Other HTML properties supported by SVG elements in browsers
        role?: AriaRole | undefined;
        tabIndex?: number | undefined;
        crossOrigin?: CrossOrigin;

        // SVG Specific attributes
        accentHeight?: number | string | undefined;
        accumulate?: "none" | "sum" | undefined;
        additive?: "replace" | "sum" | undefined;
        alignmentBaseline?:
            | "auto"
            | "baseline"
            | "before-edge"
            | "text-before-edge"
            | "middle"
            | "central"
            | "after-edge"
            | "text-after-edge"
            | "ideographic"
            | "alphabetic"
            | "hanging"
            | "mathematical"
            | "inherit"
            | undefined;
        allowReorder?: "no" | "yes" | undefined;
        alphabetic?: number | string | undefined;
        amplitude?: number | string | undefined;
        arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
        ascent?: number | string | undefined;
        attributeName?: string | undefined;
        attributeType?: string | undefined;
        autoReverse?: Booleanish | undefined;
        azimuth?: number | string | undefined;
        baseFrequency?: number | string | undefined;
        baselineShift?: number | string | undefined;
        baseProfile?: number | string | undefined;
        bbox?: number | string | undefined;
        begin?: number | string | undefined;
        bias?: number | string | undefined;
        by?: number | string | undefined;
        calcMode?: number | string | undefined;
        capHeight?: number | string | undefined;
        clip?: number | string | undefined;
        clipPath?: string | undefined;
        clipPathUnits?: number | string | undefined;
        clipRule?: number | string | undefined;
        colorInterpolation?: number | string | undefined;
        colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
        colorProfile?: number | string | undefined;
        colorRendering?: number | string | undefined;
        contentScriptType?: number | string | undefined;
        contentStyleType?: number | string | undefined;
        cursor?: number | string | undefined;
        cx?: number | string | undefined;
        cy?: number | string | undefined;
        d?: string | undefined;
        decelerate?: number | string | undefined;
        descent?: number | string | undefined;
        diffuseConstant?: number | string | undefined;
        direction?: number | string | undefined;
        display?: number | string | undefined;
        divisor?: number | string | undefined;
        dominantBaseline?:
            | "auto"
            | "use-script"
            | "no-change"
            | "reset-size"
            | "ideographic"
            | "alphabetic"
            | "hanging"
            | "mathematical"
            | "central"
            | "middle"
            | "text-after-edge"
            | "text-before-edge"
            | "inherit"
            | undefined;
        dur?: number | string | undefined;
        dx?: number | string | undefined;
        dy?: number | string | undefined;
        edgeMode?: number | string | undefined;
        elevation?: number | string | undefined;
        enableBackground?: number | string | undefined;
        end?: number | string | undefined;
        exponent?: number | string | undefined;
        externalResourcesRequired?: Booleanish | undefined;
        fill?: string | undefined;
        fillOpacity?: number | string | undefined;
        fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
        filter?: string | undefined;
        filterRes?: number | string | undefined;
        filterUnits?: number | string | undefined;
        floodColor?: number | string | undefined;
        floodOpacity?: number | string | undefined;
        focusable?: Booleanish | "auto" | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | string | undefined;
        fontSizeAdjust?: number | string | undefined;
        fontStretch?: number | string | undefined;
        fontStyle?: number | string | undefined;
        fontVariant?: number | string | undefined;
        fontWeight?: number | string | undefined;
        format?: number | string | undefined;
        fr?: number | string | undefined;
        from?: number | string | undefined;
        fx?: number | string | undefined;
        fy?: number | string | undefined;
        g1?: number | string | undefined;
        g2?: number | string | undefined;
        glyphName?: number | string | undefined;
        glyphOrientationHorizontal?: number | string | undefined;
        glyphOrientationVertical?: number | string | undefined;
        glyphRef?: number | string | undefined;
        gradientTransform?: string | undefined;
        gradientUnits?: string | undefined;
        hanging?: number | string | undefined;
        horizAdvX?: number | string | undefined;
        horizOriginX?: number | string | undefined;
        href?: string | undefined;
        ideographic?: number | string | undefined;
        imageRendering?: number | string | undefined;
        in2?: number | string | undefined;
        in?: string | undefined;
        intercept?: number | string | undefined;
        k1?: number | string | undefined;
        k2?: number | string | undefined;
        k3?: number | string | undefined;
        k4?: number | string | undefined;
        k?: number | string | undefined;
        kernelMatrix?: number | string | undefined;
        kernelUnitLength?: number | string | undefined;
        kerning?: number | string | undefined;
        keyPoints?: number | string | undefined;
        keySplines?: number | string | undefined;
        keyTimes?: number | string | undefined;
        lengthAdjust?: number | string | undefined;
        letterSpacing?: number | string | undefined;
        lightingColor?: number | string | undefined;
        limitingConeAngle?: number | string | undefined;
        local?: number | string | undefined;
        markerEnd?: string | undefined;
        markerHeight?: number | string | undefined;
        markerMid?: string | undefined;
        markerStart?: string | undefined;
        markerUnits?: number | string | undefined;
        markerWidth?: number | string | undefined;
        mask?: string | undefined;
        maskContentUnits?: number | string | undefined;
        maskUnits?: number | string | undefined;
        mathematical?: number | string | undefined;
        mode?: number | string | undefined;
        numOctaves?: number | string | undefined;
        offset?: number | string | undefined;
        opacity?: number | string | undefined;
        operator?: number | string | undefined;
        order?: number | string | undefined;
        orient?: number | string | undefined;
        orientation?: number | string | undefined;
        origin?: number | string | undefined;
        overflow?: number | string | undefined;
        overlinePosition?: number | string | undefined;
        overlineThickness?: number | string | undefined;
        paintOrder?: number | string | undefined;
        panose1?: number | string | undefined;
        path?: string | undefined;
        pathLength?: number | string | undefined;
        patternContentUnits?: string | undefined;
        patternTransform?: number | string | undefined;
        patternUnits?: string | undefined;
        pointerEvents?: number | string | undefined;
        points?: string | undefined;
        pointsAtX?: number | string | undefined;
        pointsAtY?: number | string | undefined;
        pointsAtZ?: number | string | undefined;
        preserveAlpha?: Booleanish | undefined;
        preserveAspectRatio?: string | undefined;
        primitiveUnits?: number | string | undefined;
        r?: number | string | undefined;
        radius?: number | string | undefined;
        refX?: number | string | undefined;
        refY?: number | string | undefined;
        renderingIntent?: number | string | undefined;
        repeatCount?: number | string | undefined;
        repeatDur?: number | string | undefined;
        requiredExtensions?: number | string | undefined;
        requiredFeatures?: number | string | undefined;
        restart?: number | string | undefined;
        result?: string | undefined;
        rotate?: number | string | undefined;
        rx?: number | string | undefined;
        ry?: number | string | undefined;
        scale?: number | string | undefined;
        seed?: number | string | undefined;
        shapeRendering?: number | string | undefined;
        slope?: number | string | undefined;
        spacing?: number | string | undefined;
        specularConstant?: number | string | undefined;
        specularExponent?: number | string | undefined;
        speed?: number | string | undefined;
        spreadMethod?: string | undefined;
        startOffset?: number | string | undefined;
        stdDeviation?: number | string | undefined;
        stemh?: number | string | undefined;
        stemv?: number | string | undefined;
        stitchTiles?: number | string | undefined;
        stopColor?: string | undefined;
        stopOpacity?: number | string | undefined;
        strikethroughPosition?: number | string | undefined;
        strikethroughThickness?: number | string | undefined;
        string?: number | string | undefined;
        stroke?: string | undefined;
        strokeDasharray?: string | number | undefined;
        strokeDashoffset?: string | number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
        strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
        strokeMiterlimit?: number | string | undefined;
        strokeOpacity?: number | string | undefined;
        strokeWidth?: number | string | undefined;
        surfaceScale?: number | string | undefined;
        systemLanguage?: number | string | undefined;
        tableValues?: number | string | undefined;
        targetX?: number | string | undefined;
        targetY?: number | string | undefined;
        textAnchor?: "start" | "middle" | "end" | "inherit" | undefined;
        textDecoration?: number | string | undefined;
        textLength?: number | string | undefined;
        textRendering?: number | string | undefined;
        to?: number | string | undefined;
        transform?: string | undefined;
        transformOrigin?: string | undefined;
        u1?: number | string | undefined;
        u2?: number | string | undefined;
        underlinePosition?: number | string | undefined;
        underlineThickness?: number | string | undefined;
        unicode?: number | string | undefined;
        unicodeBidi?: number | string | undefined;
        unicodeRange?: number | string | undefined;
        unitsPerEm?: number | string | undefined;
        vAlphabetic?: number | string | undefined;
        values?: string | undefined;
        vectorEffect?: number | string | undefined;
        version?: string | undefined;
        vertAdvY?: number | string | undefined;
        vertOriginX?: number | string | undefined;
        vertOriginY?: number | string | undefined;
        vHanging?: number | string | undefined;
        vIdeographic?: number | string | undefined;
        viewBox?: string | undefined;
        viewTarget?: number | string | undefined;
        visibility?: number | string | undefined;
        vMathematical?: number | string | undefined;
        widths?: number | string | undefined;
        wordSpacing?: number | string | undefined;
        writingMode?: number | string | undefined;
        x1?: number | string | undefined;
        x2?: number | string | undefined;
        x?: number | string | undefined;
        xChannelSelector?: string | undefined;
        xHeight?: number | string | undefined;
        xlinkActuate?: string | undefined;
        xlinkArcrole?: string | undefined;
        xlinkHref?: string | undefined;
        xlinkRole?: string | undefined;
        xlinkShow?: string | undefined;
        xlinkTitle?: string | undefined;
        xlinkType?: string | undefined;
        xmlBase?: string | undefined;
        xmlLang?: string | undefined;
        xmlns?: string | undefined;
        xmlnsXlink?: string | undefined;
        xmlSpace?: string | undefined;
        y1?: number | string | undefined;
        y2?: number | string | undefined;
        y?: number | string | undefined;
        yChannelSelector?: string | undefined;
        z?: number | string | undefined;
        zoomAndPan?: string | undefined;
    }

    interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
        allowFullScreen?: boolean | undefined;
        allowpopups?: boolean | undefined;
        autosize?: boolean | undefined;
        blinkfeatures?: string | undefined;
        disableblinkfeatures?: string | undefined;
        disableguestresize?: boolean | undefined;
        disablewebsecurity?: boolean | undefined;
        guestinstance?: string | undefined;
        httpreferrer?: string | undefined;
        nodeintegration?: boolean | undefined;
        partition?: string | undefined;
        plugins?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
        useragent?: string | undefined;
        webpreferences?: string | undefined;
    }

    //
    // React.DOM
    // ----------------------------------------------------------------------

    /* deprecated */
    interface ReactHTML {
        a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
        abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
        article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
        b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
        bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
        br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
        button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
        canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
        caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        center: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        data: DetailedHTMLFactory<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
        datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
        dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        del: DetailedHTMLFactory<DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
        details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
        dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
        div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
        dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
        fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
        figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
        h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
        header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
        html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
        i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
        img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
        input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
        kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
        label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
        li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
        link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
        main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
        mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
        menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
        meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
        nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        object: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
        ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
        optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
        option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
        output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
        p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
        param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
        picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
        progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
        q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        search: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        slot: DetailedHTMLFactory<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
        script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
        section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
        small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
        span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
        sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
        template: DetailedHTMLFactory<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
        tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
        textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
        tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        th: DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
        thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
        title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
        tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
        track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
        u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        "var": DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
        wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
    }

    /* deprecated */
    interface ReactSVG {
        animate: SVGFactory;
        circle: SVGFactory;
        clipPath: SVGFactory;
        defs: SVGFactory;
        desc: SVGFactory;
        ellipse: SVGFactory;
        feBlend: SVGFactory;
        feColorMatrix: SVGFactory;
        feComponentTransfer: SVGFactory;
        feComposite: SVGFactory;
        feConvolveMatrix: SVGFactory;
        feDiffuseLighting: SVGFactory;
        feDisplacementMap: SVGFactory;
        feDistantLight: SVGFactory;
        feDropShadow: SVGFactory;
        feFlood: SVGFactory;
        feFuncA: SVGFactory;
        feFuncB: SVGFactory;
        feFuncG: SVGFactory;
        feFuncR: SVGFactory;
        feGaussianBlur: SVGFactory;
        feImage: SVGFactory;
        feMerge: SVGFactory;
        feMergeNode: SVGFactory;
        feMorphology: SVGFactory;
        feOffset: SVGFactory;
        fePointLight: SVGFactory;
        feSpecularLighting: SVGFactory;
        feSpotLight: SVGFactory;
        feTile: SVGFactory;
        feTurbulence: SVGFactory;
        filter: SVGFactory;
        foreignObject: SVGFactory;
        g: SVGFactory;
        image: SVGFactory;
        line: SVGFactory;
        linearGradient: SVGFactory;
        marker: SVGFactory;
        mask: SVGFactory;
        metadata: SVGFactory;
        path: SVGFactory;
        pattern: SVGFactory;
        polygon: SVGFactory;
        polyline: SVGFactory;
        radialGradient: SVGFactory;
        rect: SVGFactory;
        stop: SVGFactory;
        svg: SVGFactory;
        switch: SVGFactory;
        symbol: SVGFactory;
        text: SVGFactory;
        textPath: SVGFactory;
        tspan: SVGFactory;
        use: SVGFactory;
        view: SVGFactory;
    }

    /* deprecated */
    interface ReactDOM extends ReactHTML, ReactSVG {}

    //
    // React.PropTypes
    // ----------------------------------------------------------------------

    /**
     * @deprecated Use \`Validator\` from the ´prop-types\` instead.
     */
    type Validator<T> = PropTypes.Validator<T>;

    /**
     * @deprecated Use \`Requireable\` from the ´prop-types\` instead.
     */
    type Requireable<T> = PropTypes.Requireable<T>;

    /**
     * @deprecated Use \`ValidationMap\` from the ´prop-types\` instead.
     */
    type ValidationMap<T> = PropTypes.ValidationMap<T>;

    /**
     * @deprecated Use \`WeakValidationMap\` from the ´prop-types\` instead.
     */
    type WeakValidationMap<T> = {
        [K in keyof T]?: null extends T[K] ? Validator<T[K] | null | undefined>
            : undefined extends T[K] ? Validator<T[K] | null | undefined>
            : Validator<T[K]>;
    };

    /**
     * @deprecated Use \`PropTypes.*\` where \`PropTypes\` comes from \`import * as PropTypes from 'prop-types'\` instead.
     */
    interface ReactPropTypes {
        any: typeof PropTypes.any;
        array: typeof PropTypes.array;
        bool: typeof PropTypes.bool;
        func: typeof PropTypes.func;
        number: typeof PropTypes.number;
        object: typeof PropTypes.object;
        string: typeof PropTypes.string;
        node: typeof PropTypes.node;
        element: typeof PropTypes.element;
        instanceOf: typeof PropTypes.instanceOf;
        oneOf: typeof PropTypes.oneOf;
        oneOfType: typeof PropTypes.oneOfType;
        arrayOf: typeof PropTypes.arrayOf;
        objectOf: typeof PropTypes.objectOf;
        shape: typeof PropTypes.shape;
        exact: typeof PropTypes.exact;
    }

    //
    // React.Children
    // ----------------------------------------------------------------------

    /**
     * @deprecated - Use \`typeof React.Children\` instead.
     */
    // Sync with type of \`const Children\`.
    interface ReactChildren {
        map<T, C>(
            children: C | readonly C[],
            fn: (child: C, index: number) => T,
        ): C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | readonly C[], fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    }

    //
    // Browser Interfaces
    // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
    // ----------------------------------------------------------------------

    interface AbstractView {
        styleMedia: StyleMedia;
        document: Document;
    }

    interface Touch {
        identifier: number;
        target: EventTarget;
        screenX: number;
        screenY: number;
        clientX: number;
        clientY: number;
        pageX: number;
        pageY: number;
    }

    interface TouchList {
        [index: number]: Touch;
        length: number;
        item(index: number): Touch;
        identifiedTouch(identifier: number): Touch;
    }

    //
    // Error Interfaces
    // ----------------------------------------------------------------------
    interface ErrorInfo {
        /**
         * Captures which component contained the exception, and its ancestors.
         */
        componentStack?: string | null;
        digest?: string | null;
    }

    // Keep in sync with JSX namespace in ./jsx-runtime.d.ts and ./jsx-dev-runtime.d.ts
    namespace JSX {
        type ElementType = GlobalJSXElementType;
        interface Element extends GlobalJSXElement {}
        interface ElementClass extends GlobalJSXElementClass {}
        interface ElementAttributesProperty extends GlobalJSXElementAttributesProperty {}
        interface ElementChildrenAttribute extends GlobalJSXElementChildrenAttribute {}

        type LibraryManagedAttributes<C, P> = GlobalJSXLibraryManagedAttributes<C, P>;

        interface IntrinsicAttributes extends GlobalJSXIntrinsicAttributes {}
        interface IntrinsicClassAttributes<T> extends GlobalJSXIntrinsicClassAttributes<T> {}
        interface IntrinsicElements extends GlobalJSXIntrinsicElements {}
    }
}

// naked 'any' type in a conditional type will short circuit and union both the then/else branches
// so boolean is only resolved for T = any
type IsExactlyAny<T> = boolean extends (T extends never ? true : false) ? true : false;

type ExactlyAnyPropertyKeys<T> = { [K in keyof T]: IsExactlyAny<T[K]> extends true ? K : never }[keyof T];
type NotExactlyAnyPropertyKeys<T> = Exclude<keyof T, ExactlyAnyPropertyKeys<T>>;

// Try to resolve ill-defined props like for JS users: props can be any, or sometimes objects with properties of type any
type MergePropTypes<P, T> =
    // Distribute over P in case it is a union type
    P extends any
        // If props is type any, use propTypes definitions
        ? IsExactlyAny<P> extends true ? T
            // If declared props have indexed properties, ignore inferred props entirely as keyof gets widened
        : string extends keyof P ? P
            // Prefer declared types which are not exactly any
        :
            & Pick<P, NotExactlyAnyPropertyKeys<P>>
            // For props which are exactly any, use the type inferred from propTypes if present
            & Pick<T, Exclude<keyof T, NotExactlyAnyPropertyKeys<P>>>
            // Keep leftover props not specified in propTypes
            & Pick<P, Exclude<keyof P, keyof T>>
        : never;

type InexactPartial<T> = { [K in keyof T]?: T[K] | undefined };

// Any prop that has a default prop becomes optional, but its type is unchanged
// Undeclared default props are augmented into the resulting allowable attributes
// If declared props have indexed properties, ignore default props entirely as keyof gets widened
// Wrap in an outer-level conditional type to allow distribution over props that are unions
type Defaultize<P, D> = P extends any ? string extends keyof P ? P
    :
        & Pick<P, Exclude<keyof P, keyof D>>
        & InexactPartial<Pick<P, Extract<keyof P, keyof D>>>
        & InexactPartial<Pick<D, Exclude<keyof D, keyof P>>>
    : never;

type ReactManagedAttributes<C, P> = C extends { propTypes: infer T; defaultProps: infer D }
    ? Defaultize<MergePropTypes<P, PropTypes.InferProps<T>>, D>
    : C extends { propTypes: infer T } ? MergePropTypes<P, PropTypes.InferProps<T>>
    : C extends { defaultProps: infer D } ? Defaultize<P, D>
    : P;

declare global {
    /**
     * @deprecated Use \`React.JSX\` instead of the global \`JSX\` namespace.
     */
    namespace JSX {
        // We don't just alias React.ElementType because React.ElementType
        // historically does more than we need it to.
        // E.g. it also contains .propTypes and so TS also verifies the declared
        // props type does match the declared .propTypes.
        // But if libraries declared their .propTypes but not props type,
        // or they mismatch, you won't be able to use the class component
        // as a JSX.ElementType.
        // We could fix this everywhere but we're ultimately not interested in
        // .propTypes assignability so we might as well drop it entirely here to
        //  reduce the work of the type-checker.
        // TODO: Check impact of making React.ElementType<P = any> = React.JSXElementConstructor<P>
        type ElementType = string | React.JSXElementConstructor<any>;
        interface Element extends React.ReactElement<any, any> {}
        interface ElementClass extends React.Component<any> {
            render(): React.ReactNode;
        }
        interface ElementAttributesProperty {
            props: {};
        }
        interface ElementChildrenAttribute {
            children: {};
        }

        // We can't recurse forever because \`type\` can't be self-referential;
        // let's assume it's reasonable to do a single React.lazy() around a single React.memo() / vice-versa
        type LibraryManagedAttributes<C, P> = C extends
            React.MemoExoticComponent<infer T> | React.LazyExoticComponent<infer T>
            ? T extends React.MemoExoticComponent<infer U> | React.LazyExoticComponent<infer U>
                ? ReactManagedAttributes<U, P>
            : ReactManagedAttributes<T, P>
            : ReactManagedAttributes<C, P>;

        interface IntrinsicAttributes extends React.Attributes {}
        interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}

        interface IntrinsicElements {
            // HTML
            a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
            datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
            details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
            dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
            nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
            p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            search: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
            script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
            tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
            title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

            // SVG
            svg: React.SVGProps<SVGSVGElement>;

            animate: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
            animateMotion: React.SVGProps<SVGElement>;
            animateTransform: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
            circle: React.SVGProps<SVGCircleElement>;
            clipPath: React.SVGProps<SVGClipPathElement>;
            defs: React.SVGProps<SVGDefsElement>;
            desc: React.SVGProps<SVGDescElement>;
            ellipse: React.SVGProps<SVGEllipseElement>;
            feBlend: React.SVGProps<SVGFEBlendElement>;
            feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
            feComposite: React.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
            feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
            feFlood: React.SVGProps<SVGFEFloodElement>;
            feFuncA: React.SVGProps<SVGFEFuncAElement>;
            feFuncB: React.SVGProps<SVGFEFuncBElement>;
            feFuncG: React.SVGProps<SVGFEFuncGElement>;
            feFuncR: React.SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
            feImage: React.SVGProps<SVGFEImageElement>;
            feMerge: React.SVGProps<SVGFEMergeElement>;
            feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: React.SVGProps<SVGFEMorphologyElement>;
            feOffset: React.SVGProps<SVGFEOffsetElement>;
            fePointLight: React.SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: React.SVGProps<SVGFESpotLightElement>;
            feTile: React.SVGProps<SVGFETileElement>;
            feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
            filter: React.SVGProps<SVGFilterElement>;
            foreignObject: React.SVGProps<SVGForeignObjectElement>;
            g: React.SVGProps<SVGGElement>;
            image: React.SVGProps<SVGImageElement>;
            line: React.SVGLineElementAttributes<SVGLineElement>;
            linearGradient: React.SVGProps<SVGLinearGradientElement>;
            marker: React.SVGProps<SVGMarkerElement>;
            mask: React.SVGProps<SVGMaskElement>;
            metadata: React.SVGProps<SVGMetadataElement>;
            mpath: React.SVGProps<SVGElement>;
            path: React.SVGProps<SVGPathElement>;
            pattern: React.SVGProps<SVGPatternElement>;
            polygon: React.SVGProps<SVGPolygonElement>;
            polyline: React.SVGProps<SVGPolylineElement>;
            radialGradient: React.SVGProps<SVGRadialGradientElement>;
            rect: React.SVGProps<SVGRectElement>;
            set: React.SVGProps<SVGSetElement>;
            stop: React.SVGProps<SVGStopElement>;
            switch: React.SVGProps<SVGSwitchElement>;
            symbol: React.SVGProps<SVGSymbolElement>;
            text: React.SVGTextElementAttributes<SVGTextElement>;
            textPath: React.SVGProps<SVGTextPathElement>;
            tspan: React.SVGProps<SVGTSpanElement>;
            use: React.SVGProps<SVGUseElement>;
            view: React.SVGProps<SVGViewElement>;
        }
    }
}

// React.JSX needs to point to global.JSX to keep global module augmentations intact.
// But we can't access global.JSX so we need to create these aliases instead.
// Once the global JSX namespace will be removed we replace React.JSX with the contents of global.JSX
type GlobalJSXElementType = JSX.ElementType;
interface GlobalJSXElement extends JSX.Element {}
interface GlobalJSXElementClass extends JSX.ElementClass {}
interface GlobalJSXElementAttributesProperty extends JSX.ElementAttributesProperty {}
interface GlobalJSXElementChildrenAttribute extends JSX.ElementChildrenAttribute {}

type GlobalJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>;

interface GlobalJSXIntrinsicAttributes extends JSX.IntrinsicAttributes {}
interface GlobalJSXIntrinsicClassAttributes<T> extends JSX.IntrinsicClassAttributes<T> {}

interface GlobalJSXIntrinsicElements extends JSX.IntrinsicElements {}
`,wf=`/*
React projects that don't include the DOM library need these interfaces to compile.
React Native applications use React, but there is no DOM available. The JavaScript runtime
is ES6/ES2015 only. These definitions allow such projects to compile with only \`--lib ES6\`.

Warning: all of these interfaces are empty. If you want type definitions for various properties
(such as HTMLInputElement.prototype.value), you need to add \`--lib DOM\` (via command line or tsconfig.json).
*/

interface Event {}
interface AnimationEvent extends Event {}
interface ClipboardEvent extends Event {}
interface CompositionEvent extends Event {}
interface DragEvent extends Event {}
interface FocusEvent extends Event {}
interface InputEvent extends Event {}
interface KeyboardEvent extends Event {}
interface MouseEvent extends Event {}
interface TouchEvent extends Event {}
interface PointerEvent extends Event {}
interface ToggleEvent extends Event {}
interface TransitionEvent extends Event {}
interface UIEvent extends Event {}
interface WheelEvent extends Event {}

interface EventTarget {}
interface Document {}
interface DataTransfer {}
interface StyleMedia {}

interface Element {}
interface DocumentFragment {}

interface HTMLElement extends Element {}
interface HTMLAnchorElement extends HTMLElement {}
interface HTMLAreaElement extends HTMLElement {}
interface HTMLAudioElement extends HTMLElement {}
interface HTMLBaseElement extends HTMLElement {}
interface HTMLBodyElement extends HTMLElement {}
interface HTMLBRElement extends HTMLElement {}
interface HTMLButtonElement extends HTMLElement {}
interface HTMLCanvasElement extends HTMLElement {}
interface HTMLDataElement extends HTMLElement {}
interface HTMLDataListElement extends HTMLElement {}
interface HTMLDetailsElement extends HTMLElement {}
interface HTMLDialogElement extends HTMLElement {}
interface HTMLDivElement extends HTMLElement {}
interface HTMLDListElement extends HTMLElement {}
interface HTMLEmbedElement extends HTMLElement {}
interface HTMLFieldSetElement extends HTMLElement {}
interface HTMLFormElement extends HTMLElement {}
interface HTMLHeadingElement extends HTMLElement {}
interface HTMLHeadElement extends HTMLElement {}
interface HTMLHRElement extends HTMLElement {}
interface HTMLHtmlElement extends HTMLElement {}
interface HTMLIFrameElement extends HTMLElement {}
interface HTMLImageElement extends HTMLElement {}
interface HTMLInputElement extends HTMLElement {}
interface HTMLModElement extends HTMLElement {}
interface HTMLLabelElement extends HTMLElement {}
interface HTMLLegendElement extends HTMLElement {}
interface HTMLLIElement extends HTMLElement {}
interface HTMLLinkElement extends HTMLElement {}
interface HTMLMapElement extends HTMLElement {}
interface HTMLMetaElement extends HTMLElement {}
interface HTMLMeterElement extends HTMLElement {}
interface HTMLObjectElement extends HTMLElement {}
interface HTMLOListElement extends HTMLElement {}
interface HTMLOptGroupElement extends HTMLElement {}
interface HTMLOptionElement extends HTMLElement {}
interface HTMLOutputElement extends HTMLElement {}
interface HTMLParagraphElement extends HTMLElement {}
interface HTMLParamElement extends HTMLElement {}
interface HTMLPreElement extends HTMLElement {}
interface HTMLProgressElement extends HTMLElement {}
interface HTMLQuoteElement extends HTMLElement {}
interface HTMLSlotElement extends HTMLElement {}
interface HTMLScriptElement extends HTMLElement {}
interface HTMLSelectElement extends HTMLElement {}
interface HTMLSourceElement extends HTMLElement {}
interface HTMLSpanElement extends HTMLElement {}
interface HTMLStyleElement extends HTMLElement {}
interface HTMLTableElement extends HTMLElement {}
interface HTMLTableColElement extends HTMLElement {}
interface HTMLTableDataCellElement extends HTMLElement {}
interface HTMLTableHeaderCellElement extends HTMLElement {}
interface HTMLTableRowElement extends HTMLElement {}
interface HTMLTableSectionElement extends HTMLElement {}
interface HTMLTemplateElement extends HTMLElement {}
interface HTMLTextAreaElement extends HTMLElement {}
interface HTMLTimeElement extends HTMLElement {}
interface HTMLTitleElement extends HTMLElement {}
interface HTMLTrackElement extends HTMLElement {}
interface HTMLUListElement extends HTMLElement {}
interface HTMLVideoElement extends HTMLElement {}
interface HTMLWebViewElement extends HTMLElement {}

interface SVGElement extends Element {}
interface SVGSVGElement extends SVGElement {}
interface SVGCircleElement extends SVGElement {}
interface SVGClipPathElement extends SVGElement {}
interface SVGDefsElement extends SVGElement {}
interface SVGDescElement extends SVGElement {}
interface SVGEllipseElement extends SVGElement {}
interface SVGFEBlendElement extends SVGElement {}
interface SVGFEColorMatrixElement extends SVGElement {}
interface SVGFEComponentTransferElement extends SVGElement {}
interface SVGFECompositeElement extends SVGElement {}
interface SVGFEConvolveMatrixElement extends SVGElement {}
interface SVGFEDiffuseLightingElement extends SVGElement {}
interface SVGFEDisplacementMapElement extends SVGElement {}
interface SVGFEDistantLightElement extends SVGElement {}
interface SVGFEDropShadowElement extends SVGElement {}
interface SVGFEFloodElement extends SVGElement {}
interface SVGFEFuncAElement extends SVGElement {}
interface SVGFEFuncBElement extends SVGElement {}
interface SVGFEFuncGElement extends SVGElement {}
interface SVGFEFuncRElement extends SVGElement {}
interface SVGFEGaussianBlurElement extends SVGElement {}
interface SVGFEImageElement extends SVGElement {}
interface SVGFEMergeElement extends SVGElement {}
interface SVGFEMergeNodeElement extends SVGElement {}
interface SVGFEMorphologyElement extends SVGElement {}
interface SVGFEOffsetElement extends SVGElement {}
interface SVGFEPointLightElement extends SVGElement {}
interface SVGFESpecularLightingElement extends SVGElement {}
interface SVGFESpotLightElement extends SVGElement {}
interface SVGFETileElement extends SVGElement {}
interface SVGFETurbulenceElement extends SVGElement {}
interface SVGFilterElement extends SVGElement {}
interface SVGForeignObjectElement extends SVGElement {}
interface SVGGElement extends SVGElement {}
interface SVGImageElement extends SVGElement {}
interface SVGLineElement extends SVGElement {}
interface SVGLinearGradientElement extends SVGElement {}
interface SVGMarkerElement extends SVGElement {}
interface SVGMaskElement extends SVGElement {}
interface SVGMetadataElement extends SVGElement {}
interface SVGPathElement extends SVGElement {}
interface SVGPatternElement extends SVGElement {}
interface SVGPolygonElement extends SVGElement {}
interface SVGPolylineElement extends SVGElement {}
interface SVGRadialGradientElement extends SVGElement {}
interface SVGRectElement extends SVGElement {}
interface SVGSetElement extends SVGElement {}
interface SVGStopElement extends SVGElement {}
interface SVGSwitchElement extends SVGElement {}
interface SVGSymbolElement extends SVGElement {}
interface SVGTextElement extends SVGElement {}
interface SVGTextPathElement extends SVGElement {}
interface SVGTSpanElement extends SVGElement {}
interface SVGUseElement extends SVGElement {}
interface SVGViewElement extends SVGElement {}

interface FormData {}
interface Text {}
interface TouchList {}
interface WebGLRenderingContext {}
interface WebGL2RenderingContext {}

interface TrustedHTML {}
`,kf=`import * as React from "./";
export { Fragment } from "./";

export namespace JSX {
    type ElementType = React.JSX.ElementType;
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends React.JSX.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
}

/**
 * Create a React element.
 *
 * You should not use this function directly. Use JSX and a transpiler instead.
 */
export function jsx(
    type: React.ElementType,
    props: unknown,
    key?: React.Key,
): React.ReactElement;

/**
 * Create a React element.
 *
 * You should not use this function directly. Use JSX and a transpiler instead.
 */
export function jsxs(
    type: React.ElementType,
    props: unknown,
    key?: React.Key,
): React.ReactElement;
`;function Af(){const e=Uo.useMemo(()=>[{filePath:"file:///node_modules/@types/react/index.d.ts",content:Pf},{filePath:"file:///node_modules/@types/react/global.d.ts",content:wf},{filePath:"file:///node_modules/@types/react/jsx-runtime.d.ts",content:kf}],[]),n=e.reduce((t,r)=>t+r.content.length,0);return gn.jsxs("main",{style:{fontFamily:"sans-serif",padding:20},children:[gn.jsx("h1",{children:"Scenario A: Static Import ?raw"}),gn.jsx("p",{children:"模拟把 React 类型定义静态打进主包，准备传给 Monaco Editor 的 addExtraLib。"}),gn.jsxs("p",{children:["extra libs: ",e.length]}),gn.jsxs("p",{children:["raw chars: ",n.toLocaleString()]}),gn.jsx("pre",{style:{whiteSpace:"pre-wrap",background:"#f5f5f5",padding:12},children:e.map(t=>`${t.filePath} -> ${t.content.length} chars`).join(`
`)})]})}Wi.createRoot(document.getElementById("root")).render(gn.jsx(Af,{}));
