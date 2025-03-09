"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[504],{33:function(e,t,n){
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,{$3:function(){return f},$H:function(){return U},BH:function(){return z},BX:function(){return ne},Bm:function(){return w},C4:function(){return X},CE:function(){return m},CP:function(){return l},DY:function(){return j},Gv:function(){return E},J$:function(){return Y},Kg:function(){return _},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return N},Qd:function(){return k},Ro:function(){return $},SU:function(){return C},TF:function(){return d},Tg:function(){return D},Tn:function(){return b},Tr:function(){return q},We:function(){return W},X$:function(){return u},Y2:function(){return ee},ZH:function(){return L},Zf:function(){return O},bB:function(){return B},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return re},vM:function(){return g},v_:function(){return se},yI:function(){return R},yL:function(){return S},yQ:function(){return F}});const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},h=Object.prototype.hasOwnProperty,f=(e,t)=>h.call(e,t),p=Array.isArray,m=e=>"[object Map]"===T(e),g=e=>"[object Set]"===T(e),v=e=>"[object Date]"===T(e),y=e=>"[object RegExp]"===T(e),b=e=>"function"===typeof e,_=e=>"string"===typeof e,w=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,S=e=>(E(e)||b(e))&&b(e.then)&&b(e.catch),I=Object.prototype.toString,T=e=>I.call(e),O=e=>T(e).slice(8,-1),k=e=>"[object Object]"===T(e),R=e=>_(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,C=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},P=/-(\w)/g,N=A((e=>e.replace(P,((e,t)=>t?t.toUpperCase():"")))),x=/\B([A-Z])/g,D=A((e=>e.replace(x,"-$1").toLowerCase())),L=A((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=A((e=>{const t=e?`on${L(e)}`:"";return t})),U=(e,t)=>!Object.is(e,t),j=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},F=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},B=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=_(e)?Number(e):NaN;return isNaN(t)?e:t};let V;const W=()=>V||(V="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",z=r(H);function q(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=_(r)?Z(r):q(r);if(i)for(const e in i)t[e]=i[e]}return t}if(_(e)||E(e))return e}const K=/;(?![^(]*\))/g,G=/:([^]+)/,J=/\/\*[^]*?\*\//g;function Z(e){const t={};return e.replace(J,"").split(K).forEach((e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(_(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Q="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y=r(Q);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=w(e),r=w(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>!(!e||!0!==e["__v_isRef"]),se=e=>_(e)?e:null==e?"":p(e)||E(e)&&(e.toString===I||!b(e.toString))?ie(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>ie(t)?oe(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:g(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:w(t)?ae(t):!E(t)||p(t)||k(t)?t:String(t),ae=(e,t="")=>{var n;return w(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},125:function(e,t,n){n.d(t,{h1:function(){return l},uA:function(){return i}});var r=n(743);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},220:function(e,t,n){n.d(t,{LA:function(){return ce},aE:function(){return it}});var r=n(641),i=n(953);
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function a(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&o(e.default)}const c=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=d(i)?i.map(e):e(i)}return n}const u=()=>{},d=Array.isArray;const h=/#/g,f=/&/g,p=/\//g,m=/=/g,g=/\?/g,v=/\+/g,y=/%5B/g,b=/%5D/g,_=/%5E/g,w=/%60/g,E=/%7B/g,S=/%7C/g,I=/%7D/g,T=/%20/g;function O(e){return encodeURI(""+e).replace(S,"|").replace(y,"[").replace(b,"]")}function k(e){return O(e).replace(E,"{").replace(I,"}").replace(_,"^")}function R(e){return O(e).replace(v,"%2B").replace(T,"+").replace(h,"%23").replace(f,"%26").replace(w,"`").replace(E,"{").replace(I,"}").replace(_,"^")}function C(e){return R(e).replace(m,"%3D")}function A(e){return O(e).replace(h,"%23").replace(g,"%3F")}function P(e){return null==e?"":A(e).replace(p,"%2F")}function N(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const x=/\/$/,D=e=>e.replace(x,"");function L(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=W(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:N(o)}}function M(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function U(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function j(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&F(t.matched[r],n.matched[i])&&B(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function F(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function B(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!$(e[n],t[n]))return!1;return!0}function $(e,t){return d(e)?V(e,t):d(t)?V(t,e):e===t}function V(e,t){return d(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function W(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var z,q;(function(e){e["pop"]="pop",e["push"]="push"})(z||(z={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(q||(q={}));function K(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),D(e)}const G=/^[^#]+#/;function J(e,t){return e.replace(G,"#")+t}function Z(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const X=()=>({left:window.scrollX,top:window.scrollY});function Q(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Z(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Y(e,t){const n=history.state?history.state.position-t:-1;return n+e}const ee=new Map;function te(e,t){ee.set(e,t)}function ne(e){const t=ee.get(e);return ee.delete(e),t}let re=()=>location.protocol+"//"+location.host;function ie(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),U(n,"")}const o=U(n,e);return o+r+i}function se(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=ie(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:z.pop,direction:u?u>0?q.forward:q.back:q.unknown})}))};function l(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(c({},e.state,{scroll:X()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:h}}function oe(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?X():null}}function ae(e){const{history:t,location:n}=window,r={value:ie(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:re()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=c({},t.state,oe(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=c({},i.value,t.state,{forward:e,scroll:X()});s(o.current,o,!0);const a=c({},oe(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function ce(e){e=K(e);const t=ae(e),n=se(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=c({location:"",base:e,go:r,createHref:J.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function le(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const de=Symbol("");var he;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(he||(he={}));function fe(e,t){return c(new Error,{type:e,[de]:!0},t)}function pe(e,t){return e instanceof Error&&de in e&&(null==t||!!(e.type&t))}const me="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},ve=/[.+*?^${}()[\]/\\]/g;function ye(e,t){const n=c({},ge,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ve,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:l}=r;s.push({name:e,repeatable:n,optional:a});const d=l||me;if(d!==me){o+=10;try{new RegExp(`(${d})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+u.message)}}let h=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(h=a&&c.length<2?`(?:/${h})`:"/"+h),a&&(h+="?"),i+=h,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===d&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(d(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=d(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function be(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function _e(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=be(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(we(r))return 1;if(we(i))return-1}return i.length-r.length}function we(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ee={type:0,value:""},Se=/[a-zA-Z0-9_]/;function Ie(e){if(!e)return[[]];if("/"===e)return[[Ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function d(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&d(),o()):":"===a?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===a?n=2:Se.test(a)?h():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}function Te(e,t,n){const r=ye(Ie(e.path),n);const i=c(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Oe(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=Re(e);a.aliasOf=r&&r.record;const d=Ne(t,e),h=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)h.push(Re(c({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a})))}let f,p;for(const t of h){const{path:c}=t;if(n&&"/"!==c[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(c&&r+c)}if(f=Te(t,n,d),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!Ae(f)&&o(e.name)),Le(f)&&l(f),a.children){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f}return p?()=>{o(p)}:u}function o(e){if(ue(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function l(e){const t=xe(e,n);n.splice(t,0,e),e.record.name&&!Ae(e)&&r.set(e.record.name,e)}function d(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw fe(1,{location:e});0,o=i.record.name,a=c(ke(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&ke(e.params,i.keys.map((e=>e.name)))),s=i.stringify(a)}else if(null!=e.path)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw fe(1,{location:e,currentLocation:t});o=i.record.name,a=c({},t.params,e.params),s=i.stringify(a)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:l,meta:Pe(l)}}function h(){n.length=0,r.clear()}return t=Ne({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:d,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:i}}function ke(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Re(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ce(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ce(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Pe(e){return e.reduce(((e,t)=>c(e,t.meta)),{})}function Ne(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function xe(e,t){let n=0,r=t.length;while(n!==r){const i=n+r>>1,s=_e(e,t[i]);s<0?r=i:n=i+1}const i=De(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function De(e){let t=e;while(t=t.parent)if(Le(t)&&0===_e(e,t))return t}function Le({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(v," "),n=e.indexOf("="),s=N(n<0?e:e.slice(0,n)),o=n<0?null:N(e.slice(n+1));if(s in t){let e=t[s];d(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=C(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=d(r)?r.map((e=>e&&R(e))):[r&&R(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=d(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Be=Symbol(""),$e=Symbol(""),Ve=Symbol(""),We=Symbol("");function He(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ze(e,t,n,r,i,s=e=>e()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const l=e=>{!1===e?c(fe(4,{from:n,to:t})):e instanceof Error?c(e):le(e)?c(fe(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},u=s((()=>e.call(r&&r.instances[i],t,n,l)));let d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch((e=>c(e)))}))}function qe(e,t,n,r,i=e=>e()){const s=[];for(const c of e){0;for(const e in c.components){let l=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if(o(l)){const o=l.__vccOpts||l,a=o[t];a&&s.push(ze(a,n,r,c,e,i))}else{let o=l();0,s.push((()=>o.then((s=>{if(!s)throw new Error(`Couldn't resolve component "${e}" at "${c.path}"`);const o=a(s)?s.default:s;c.mods[e]=s,c.components[e]=o;const l=o.__vccOpts||o,u=l[t];return u&&ze(u,n,r,c,e,i)()}))))}}}return s}function Ke(e){const t=(0,r.WQ)($e),n=(0,r.WQ)(Ve);const s=(0,r.EW)((()=>{const n=(0,i.R1)(e.to);return t.resolve(n)})),o=(0,r.EW)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(F.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(F.bind(null,e[t-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Qe(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&B(n.params,s.value.params)));function l(n={}){if(Xe(n)){const n=t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u);return e.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition((()=>n)),n}return Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}function Ge(e){return 1===e.length?e[0]:e}const Je=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,i.Kh)(Ke(e)),{options:s}=(0,r.WQ)($e),o=(0,r.EW)((()=>({[et(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[et(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&Ge(t.default(n));return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ze=Je;function Xe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!d(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const et=(e,t,n)=>null!=e?e:null!=t?t:n,tt=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.WQ)(We),o=(0,r.EW)((()=>e.route||s.value)),a=(0,r.WQ)(Be,0),l=(0,r.EW)((()=>{let e=(0,i.R1)(a);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.EW)((()=>o.value.matched[l.value]));(0,r.Gt)(Be,(0,r.EW)((()=>l.value+1))),(0,r.Gt)(Fe,u),(0,r.Gt)(We,o);const d=(0,i.KR)();return(0,r.wB)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&F(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,a=u.value,l=a&&a.components[s];if(!l)return nt(n.default,{Component:l,route:i});const h=a.props[s],f=h?!0===h?i.params:"function"===typeof h?h(i):h:null,p=e=>{e.component.isUnmounted&&(a.instances[s]=null)},m=(0,r.h)(l,c({},f,t,{onVnodeUnmounted:p,ref:d}));return nt(n.default,{Component:m,route:i})||m}}});function nt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const rt=tt;function it(e){const t=Oe(e.routes,e),n=e.parseQuery||Me,o=e.stringifyQuery||Ue,a=e.history;const h=He(),f=He(),p=He(),m=(0,i.IJ)(H);let g=H;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=l.bind(null,(e=>""+e)),y=l.bind(null,P),b=l.bind(null,N);function _(e,n){let r,i;return ue(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function w(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function S(e){return!!t.getRecordMatcher(e)}function I(e,r){if(r=c({},r||m.value),"string"===typeof e){const i=L(n,e,r.path),s=t.resolve({path:i.path},r),o=a.createHref(i.fullPath);return c(i,s,{params:b(s.params),hash:N(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=e.path)i=c({},e,{path:L(n,e.path,r.path).path});else{const t=c({},e.params);for(const e in t)null==t[e]&&delete t[e];i=c({},e,{params:y(t)}),r.params=y(r.params)}const s=t.resolve(i,r),l=e.hash||"";s.params=v(b(s.params));const u=M(o,c({},e,{hash:k(l),path:s.path})),d=a.createHref(u);return c({fullPath:u,hash:l,query:o===Ue?je(e.query):e.query||{}},s,{redirectedFrom:void 0,href:d})}function T(e){return"string"===typeof e?L(n,e,m.value.path):c({},e)}function O(e,t){if(g!==e)return fe(8,{from:t,to:e})}function R(e){return x(e)}function C(e){return R(c(T(e),{replace:!0}))}function A(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=T(r):{path:r},r.params={}),c({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function x(e,t){const n=g=I(e),r=m.value,i=e.state,s=e.force,a=!0===e.replace,l=A(n);if(l)return x(c(T(l),{state:"object"===typeof l?c({},i,l.state):i,force:s,replace:a}),t||n);const u=n;let d;return u.redirectedFrom=t,!s&&j(o,r,n)&&(d=fe(16,{to:u,from:r}),re(r,r,!0,!1)),(d?Promise.resolve(d):F(u,r)).catch((e=>pe(e)?pe(e,2)?e:ee(e):J(e,u,r))).then((e=>{if(e){if(pe(e,2))return x(c({replace:a},T(e.to),{state:"object"===typeof e.to?c({},i,e.to.state):i,force:s}),t||u)}else e=$(u,r,!0,a,i);return B(u,r,e),e}))}function D(e,t){const n=O(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e){const t=oe.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function F(e,t){let n;const[r,i,s]=st(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(ze(r,e,t))}));const o=D.bind(null,e,t);return n.push(o),ce(n).then((()=>{n=[];for(const r of h.list())n.push(ze(r,e,t));return n.push(o),ce(n)})).then((()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(ze(r,e,t))}));return n.push(o),ce(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(d(r.beforeEnter))for(const i of r.beforeEnter)n.push(ze(i,e,t));else n.push(ze(r.beforeEnter,e,t));return n.push(o),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(s,"beforeRouteEnter",e,t,U),n.push(o),ce(n)))).then((()=>{n=[];for(const r of f.list())n.push(ze(r,e,t));return n.push(o),ce(n)})).catch((e=>pe(e,8)?e:Promise.reject(e)))}function B(e,t,n){p.list().forEach((r=>U((()=>r(e,t,n)))))}function $(e,t,n,r,i){const o=O(e,t);if(o)return o;const l=t===H,u=s?history.state:{};n&&(r||l?a.replace(e.fullPath,c({scroll:l&&u&&u.scroll},i)):a.push(e.fullPath,i)),m.value=e,re(e,t,n,l),ee()}let V;function W(){V||(V=a.listen(((e,t,n)=>{if(!ae.listening)return;const r=I(e),i=A(r);if(i)return void x(c(i,{replace:!0,force:!0}),r).catch(u);g=r;const o=m.value;s&&te(Y(o.fullPath,n.delta),X()),F(r,o).catch((e=>pe(e,12)?e:pe(e,2)?(x(c(T(e.to),{force:!0}),r).then((e=>{pe(e,20)&&!n.delta&&n.type===z.pop&&a.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&a.go(-n.delta,!1),J(e,r,o)))).then((e=>{e=e||$(r,o,!1),e&&(n.delta&&!pe(e,8)?a.go(-n.delta,!1):n.type===z.pop&&pe(e,20)&&a.go(-1,!1)),B(r,o,e)})).catch(u)})))}let q,K=He(),G=He();function J(e,t,n){ee(e);const r=G.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Z(){return q&&m.value!==H?Promise.resolve():new Promise(((e,t)=>{K.add([e,t])}))}function ee(e){return q||(q=!e,W(),K.list().forEach((([t,n])=>e?n(e):t())),K.reset()),e}function re(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&ne(Y(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&Q(e))).catch((e=>J(e,t,n)))}const ie=e=>a.go(e);let se;const oe=new Set,ae={currentRoute:m,listening:!0,addRoute:_,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:E,resolve:I,options:e,push:R,replace:C,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:h.add,beforeResolve:f.add,afterEach:p.add,onError:G.add,isReady:Z,install(e){const t=this;e.component("RouterLink",Ze),e.component("RouterView",rt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(m)}),s&&!se&&m.value===H&&(se=!0,R(a.location).catch((e=>{0})));const n={};for(const i in H)Object.defineProperty(n,i,{get:()=>m.value[i],enumerable:!0});e.provide($e,t),e.provide(Ve,(0,i.Gc)(n)),e.provide(We,m);const r=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(g=H,V&&V(),V=null,m.value=H,se=!1,q=!1),r()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>U(t)))),Promise.resolve())}return ae}function st(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>F(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>F(e,a)))||i.push(a))}return[n,r,i]}},223:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(928),i="firebase",s="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},241:function(e,t,n){n.d(t,{xI:function(){return Ir},Pj:function(){return gt},hg:function(){return _t},MN:function(){return mt},hK:function(){return vt},CI:function(){return wt}});var r=n(743),i=n(928),s=n(424);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.FA("auth","Firebase",c()),d=new s.Vy("@firebase/auth");function h(e,...t){d.logLevel<=s.$b.ERROR&&d.error(`Auth (${i.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),s=new r.FA("auth","Firebase",i);return s.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function b(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(e){b(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,i.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function S(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===O()||"https:"===O()}function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},x=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,s={}){return M(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(j(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw B(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw B(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof r.g)throw s;f(e,"network-request-failed")}}async function U(e,t,n,r,i={}){const s=await L(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function j(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?A(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=(0,r.Ku)(e),i=await n.getIdToken(t),s=q(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:W(z(s.auth_time)),issuedAtTime:W(z(s.iat)),expirationTime:W(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.u)(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(s){return h("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function K(e){const t=q(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.g&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await G(e,V(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Y(e){const t=(0,r.Ku)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=j(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return Y(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:_,isAnonymous:w,providerData:E,stsTokenManager:S}=t;v(b&&S,e,"internal-error");const I=re.fromJSON(this.name,S);v("string"===typeof b,e,"internal-error"),ie(u,e.name),ie(d,e.name),v("boolean"===typeof _,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),ie(h,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(y,e.name);const T=new se({uid:b,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(T.providerData=E.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(w(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||w(ae);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=se._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new le(i,e,n)):new le(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ve(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.ZQ)()){return/firefox\//i.test(e)}function he(e=(0,r.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.ZQ)()){return/crios\//i.test(e)}function pe(e=(0,r.ZQ)()){return/iemobile/i.test(e)}function me(e=(0,r.ZQ)()){return/android/i.test(e)}function ge(e=(0,r.ZQ)()){return/blackberry/i.test(e)}function ve(e=(0,r.ZQ)()){return/webos/i.test(e)}function ye(e=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.ZQ)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return(0,r.lT)()&&10===document.documentMode}function we(e=(0,r.ZQ)()){return ye(e)||me(e)||ve(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.ZQ)());break;case"Worker":n=`${ue((0,r.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.beforeStateQueue=new Ie(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.Ku)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Oe(e){return(0,r.Ku)(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.tD)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Re(e,t,n){const r=Oe(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ce(t),{host:o,port:a}=Ae(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ne()}function Ce(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ae(e){const t=Ce(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Pe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Pe(t)}}}function Pe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ne(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Le(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}async function Me(e,t){return L(e,"POST","/v1/accounts:sendOobCode",D(e,t))}async function Ue(e,t){return Me(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function je(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}async function Fe(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends xe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Be(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Be(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Le(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return De(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="http://localhost";class We extends xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new We(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new We(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return $e(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$e(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$e(e,t)}buildRequest(){const e={requestUri:Ve,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}async function ze(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}async function qe(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}const Ke={["USER_NOT_FOUND"]:"user-not-found"};async function Ge(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,n),Ke)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends xe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Je({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Je({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ze(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ge(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Je({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xe(e){const t=(0,r.I9)((0,r.hp)(e))["link"],n=t?(0,r.I9)((0,r.hp)(t))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(e))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||t||e}class Qe{constructor(e){var t,n,i,s,o,a;const c=(0,r.I9)((0,r.hp)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=Ze(null!==(i=c["mode"])&&void 0!==i?i:null);v(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Xe(e);try{return new Qe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,t){return Be._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qe.parseLink(t);return v(n,"argument-error"),Be._fromEmailAndCode(e,n.code,n.tenantId)}}Ye.PROVIDER_ID="password",Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends et{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends tt{constructor(){super("facebook.com")}static credential(e){return We._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com",nt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends tt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return We._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com",rt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends tt{constructor(){super("github.com")}static credential(e){return We._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch(t){return null}}}it.GITHUB_SIGN_IN_METHOD="github.com",it.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st extends tt{constructor(){super("twitter.com")}static credential(e,t){return We._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return st.credential(t,n)}catch(r){return null}}}st.TWITTER_SIGN_IN_METHOD="twitter.com",st.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=at(n),o=new ot({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=at(n);return new ot({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function at(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct extends r.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ct.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ct(e,t,n,r)}}function lt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ct._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ot._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await G(e,lt(r,i,t,e),n);v(s.idToken,r,"internal-error");const o=q(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),ot._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t,n=!1){const r="signIn",i=await lt(e,r,t),s=await ot._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ft(e,t){return ht(Oe(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pt(e,t,n){var r;v((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),v("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mt(e,t,n){const i=(0,r.Ku)(e),s={requestType:"EMAIL_SIGNIN",email:t};v(n.handleCodeInApp,i,"argument-error"),n&&pt(i,s,n),await Ue(i,s)}function gt(e,t){const n=Qe.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function vt(e,t,n){const i=(0,r.Ku)(e),s=Ye.credentialWithLink(t,n||I());return v(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),ft(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(e,t,n,i){return(0,r.Ku)(e).onIdTokenChanged(t,n,i)}function bt(e,t,n){return(0,r.Ku)(e).beforeAuthStateChanged(t,n)}function _t(e,t,n,i){return(0,r.Ku)(e).onAuthStateChanged(t,n,i)}function wt(e){return(0,r.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}function St(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",D(e,t))}new WeakMap;const It="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(It,"1"),this.storage.removeItem(It),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){const e=(0,r.ZQ)();return he(e)||ye(e)}const kt=1e3,Rt=10;class Ct extends Tt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ot()&&Ee(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);_e()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),kt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ct.type="LOCAL";const At=Ct;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Tt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pt.type="SESSION";const Nt=Pt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Dt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await xt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.receivers=[];class Mt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Lt("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function jt(e){Ut().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return"undefined"!==typeof Ut()["WorkerGlobalScope"]&&"function"===typeof Ut()["importScripts"]}async function Bt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function $t(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Vt(){return Ft()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="firebaseLocalStorageDb",Ht=1,zt="firebaseLocalStorage",qt="fbase_key";class Kt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Gt(e,t){return e.transaction([zt],t?"readwrite":"readonly").objectStore(zt)}function Jt(){const e=indexedDB.deleteDatabase(Wt);return new Kt(e).toPromise()}function Zt(){const e=indexedDB.open(Wt,Ht);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(zt,{keyPath:qt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(zt)?t(n):(n.close(),await Jt(),t(await Zt()))}))}))}async function Xt(e,t,n){const r=Gt(e,!0).put({[qt]:t,value:n});return new Kt(r).toPromise()}async function Qt(e,t){const n=Gt(e,!1).get(t),r=await new Kt(n).toPromise();return void 0===r?null:r.value}function Yt(e,t){const n=Gt(e,!0).delete(t);return new Kt(n).toPromise()}const en=800,tn=3;class nn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Zt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ft()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dt._getInstance(Vt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bt(),!this.activeServiceWorker)return;this.sender=new Mt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&$t()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zt();return await Xt(e,It,"1"),await Yt(e,It),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Qt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Yt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Gt(e,!1).getAll();return new Kt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),en)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nn.type="LOCAL";const rn=nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}function on(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",D(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function cn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",an().appendChild(r)}))}function ln(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ln("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="recaptcha";async function dn(e,t,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,e,"argument-error"),v(n.type===un,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await Et(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await sn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await He(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{constructor(e){this.providerId=hn.PROVIDER_ID,this.auth=Oe(e)}verifyPhoneNumber(e,t){return dn(this.auth,e,(0,r.Ku)(t))}static credential(e,t){return Je._fromVerification(e,t)}static credentialFromResult(e){const t=e;return hn.credentialFromTaggedObject(t)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Je._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(e,t){return t?w(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn.PROVIDER_ID="phone",hn.PHONE_SIGN_IN_METHOD="phone";class pn extends xe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $e(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mn(e){return ht(e.auth,new pn(e),e.bypassAuthState)}function gn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),dt(n,new pn(e),e.bypassAuthState)}async function vn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),ut(n,new pn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mn;case"linkViaPopup":case"linkViaRedirect":return vn;case"reauthViaPopup":case"reauthViaRedirect":return gn;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new C(2e3,1e4);class _n extends yn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Lt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,bn.get())};e()}}_n.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn="pendingRedirect",En=new Map;class Sn extends yn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=En.get(this.auth._key());if(!e){try{const t=await In(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}En.set(this.auth._key(),e)}return this.bypassAuthState||En.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function In(e,t){const n=kn(t),r=On(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Tn(e,t){En.set(e._key(),t)}function On(e){return w(e._redirectPersistence)}function kn(e){return ce(wn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(e,t,n=!1){const r=Oe(e),i=fn(r,t),s=new Sn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn=6e5;class An{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!xn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Nn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pn(e))}saveEventToCache(e){this.cachedEventUids.add(Pn(e)),this.lastProcessedEventTime=Date.now()}}function Pn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Nn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function xn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mn=/^https?/;async function Un(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Dn(e);for(const r of t)try{if(jn(r))return}catch(n){}f(e,"unauthorized-domain")}function jn(e){const t=I(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Mn.test(n))return!1;if(Ln.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new C(3e4,6e4);function Bn(){const e=Ut().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function $n(e){return new Promise(((t,n)=>{var r,i,s;function o(){Bn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bn(),n(p(e,"network-request-failed"))},timeout:Fn.get()})}if(null===(i=null===(r=Ut().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ut().gapi)||void 0===s?void 0:s.load)){const t=ln("iframefcb");return Ut()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},cn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Vn=null,e}))}let Vn=null;function Wn(e){return Vn=Vn||$n(e),Vn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new C(5e3,15e3),zn="__/auth/iframe",qn="emulator/auth/iframe",Kn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,qn):`https://${e.config.authDomain}/${zn}`,s={apiKey:t.apiKey,appName:e.name,v:i.MF},o=Gn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function Zn(e){const t=await Wn(e),n=Ut().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Jn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=Ut().setTimeout((()=>{r(i)}),Hn.get());function o(){Ut().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qn=500,Yn=600,er="_blank",tr="http://localhost";class nr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function rr(e,t,n,i=Qn,s=Yn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Xn),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.ZQ)().toLowerCase();n&&(c=fe(u)?er:n),de(u)&&(t=t||tr,l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(u)&&"_self"!==c)return ir(t||"",c),new nr(null);const h=window.open(t||"",c,d);v(h,e,"popup-blocked");try{h.focus()}catch(f){}return new nr(h)}function ir(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="__/auth/handler",or="emulator/auth/handler";function ar(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(t instanceof et){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof tt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${cr(e)}?${(0,r.Am)(l).slice(1)}`}function cr({config:e}){return e.emulator?A(e,or):`https://${e.authDomain}/${sr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="webStorageSupport";class ur{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nt,this._completeRedirectFn=Rn,this._overrideRedirectResult=Tn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=ar(e,t,n,I(),r);return rr(e,s,Lt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),jt(ar(e,t,n,I(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Zn(e),n=new An(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(lr,{type:lr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[lr];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Un(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||he()||ye()}}const dr=ur;class hr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class fr extends hr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new fr(e)}_finalizeEnroll(e,t,n){return St(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return on(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class pr{constructor(){}static assertion(e){return fr._fromCredential(e)}}pr.FACTOR_ID="phone";var mr="@firebase/auth",gr="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function br(e){(0,i.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(e)},a=new Te(t,r,i);return S(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.om)(new a.uA("auth-internal",(e=>{const t=Oe(e.getProvider("auth").getImmediate());return(e=>new vr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(mr,gr,yr(e)),(0,i.KO)(mr,gr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=300,wr=(0,r.XA)("authIdTokenMaxAge")||_r;let Er=null;const Sr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wr)return;const i=null===n||void 0===n?void 0:n.token;Er!==i&&(Er=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ir(e=(0,i.Sx)()){const t=(0,i.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=E(e,{popupRedirectResolver:dr,persistence:[rn,At,Nt]}),s=(0,r.XA)("authTokenSyncURL");if(s){const e=Sr(s);bt(n,e,(()=>e(n.currentUser))),yt(n,(t=>e(t)))}const o=(0,r.Tj)("auth");return o&&Re(n,`http://${o}`),n}br("Browser")},262:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},335:function(e,t,n){n.d(t,{A:function(){return mn}});var r={};function i(e,t){return function(){return e.apply(t,arguments)}}n.r(r),n.d(r,{hasBrowserEnv:function(){return De},hasStandardBrowserEnv:function(){return Me},hasStandardBrowserWebWorkerEnv:function(){return Ue},navigator:function(){return Le},origin:function(){return je}});const{toString:s}=Object.prototype,{getPrototypeOf:o}=Object,a=(e=>t=>{const n=s.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),c=e=>(e=e.toLowerCase(),t=>a(t)===e),l=e=>t=>typeof t===e,{isArray:u}=Array,d=l("undefined");function h(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const f=c("ArrayBuffer");function p(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t}const m=l("string"),g=l("function"),v=l("number"),y=e=>null!==e&&"object"===typeof e,b=e=>!0===e||!1===e,_=e=>{if("object"!==a(e))return!1;const t=o(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},w=c("Date"),E=c("File"),S=c("Blob"),I=c("FileList"),T=e=>y(e)&&g(e.pipe),O=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||g(e.append)&&("formdata"===(t=a(e))||"object"===t&&g(e.toString)&&"[object FormData]"===e.toString()))},k=c("URLSearchParams"),[R,C,A,P]=["ReadableStream","Request","Response","Headers"].map(c),N=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function x(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,i;if("object"!==typeof e&&(e=[e]),u(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function D(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;while(i-- >0)if(r=n[i],t===r.toLowerCase())return r;return null}const L=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),M=e=>!d(e)&&e!==L;function U(){const{caseless:e}=M(this)&&this||{},t={},n=(n,r)=>{const i=e&&D(t,r)||r;_(t[i])&&_(n)?t[i]=U(t[i],n):_(n)?t[i]=U({},n):u(n)?t[i]=n.slice():t[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&x(arguments[r],n);return t}const j=(e,t,n,{allOwnKeys:r}={})=>(x(t,((t,r)=>{n&&g(t)?e[r]=i(t,n):e[r]=t}),{allOwnKeys:r}),e),F=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),B=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$=(e,t,n,r)=>{let i,s,a;const c={};if(t=t||{},null==e)return t;do{i=Object.getOwnPropertyNames(e),s=i.length;while(s-- >0)a=i[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},V=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},W=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!v(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},H=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&o(Uint8Array)),z=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let i;while((i=r.next())&&!i.done){const n=i.value;t.call(e,n[0],n[1])}},q=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},K=c("HTMLFormElement"),G=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),J=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Z=c("RegExp"),X=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};x(n,((n,i)=>{let s;!1!==(s=t(n,i,e))&&(r[i]=s||n)})),Object.defineProperties(e,r)},Q=e=>{X(e,((t,n)=>{if(g(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];g(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Y=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},ee=()=>{},te=(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t;function ne(e){return!!(e&&g(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const re=e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=u(e)?[]:{};return x(e,((e,t)=>{const s=n(e,r+1);!d(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)},ie=c("AsyncFunction"),se=e=>e&&(y(e)||g(e))&&g(e.then)&&g(e.catch),oe=((e,t)=>e?setImmediate:t?((e,t)=>(L.addEventListener("message",(({source:n,data:r})=>{n===L&&r===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),L.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))("function"===typeof setImmediate,g(L.postMessage)),ae="undefined"!==typeof queueMicrotask?queueMicrotask.bind(L):"undefined"!==typeof process&&process.nextTick||oe;var ce={isArray:u,isArrayBuffer:f,isBuffer:h,isFormData:O,isArrayBufferView:p,isString:m,isNumber:v,isBoolean:b,isObject:y,isPlainObject:_,isReadableStream:R,isRequest:C,isResponse:A,isHeaders:P,isUndefined:d,isDate:w,isFile:E,isBlob:S,isRegExp:Z,isFunction:g,isStream:T,isURLSearchParams:k,isTypedArray:H,isFileList:I,forEach:x,merge:U,extend:j,trim:N,stripBOM:F,inherits:B,toFlatObject:$,kindOf:a,kindOfTest:c,endsWith:V,toArray:W,forEachEntry:z,matchAll:q,isHTMLForm:K,hasOwnProperty:J,hasOwnProp:J,reduceDescriptors:X,freezeMethods:Q,toObjectSet:Y,toCamelCase:G,noop:ee,toFiniteNumber:te,findKey:D,global:L,isContextDefined:M,isSpecCompliantForm:ne,toJSONObject:re,isAsyncFn:ie,isThenable:se,setImmediate:oe,asap:ae};function le(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}ce.inherits(le,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ce.toJSONObject(this.config),code:this.code,status:this.status}}});const ue=le.prototype,de={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{de[e]={value:e}})),Object.defineProperties(le,de),Object.defineProperty(ue,"isAxiosError",{value:!0}),le.from=(e,t,n,r,i,s)=>{const o=Object.create(ue);return ce.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),le.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var he=le,fe=null;function pe(e){return ce.isPlainObject(e)||ce.isArray(e)}function me(e){return ce.endsWith(e,"[]")?e.slice(0,-2):e}function ge(e,t,n){return e?e.concat(t).map((function(e,t){return e=me(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function ve(e){return ce.isArray(e)&&!e.some(pe)}const ye=ce.toFlatObject(ce,{},null,(function(e){return/^is[A-Z]/.test(e)}));function be(e,t,n){if(!ce.isObject(e))throw new TypeError("target must be an object");t=t||new(fe||FormData),n=ce.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!ce.isUndefined(t[e])}));const r=n.metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&ce.isSpecCompliantForm(t);if(!ce.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(ce.isDate(e))return e.toISOString();if(!c&&ce.isBlob(e))throw new he("Blob is not supported. Use a Buffer instead.");return ce.isArrayBuffer(e)||ce.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,i){let a=e;if(e&&!i&&"object"===typeof e)if(ce.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(ce.isArray(e)&&ve(e)||(ce.isFileList(e)||ce.endsWith(n,"[]"))&&(a=ce.toArray(e)))return n=me(n),a.forEach((function(e,r){!ce.isUndefined(e)&&null!==e&&t.append(!0===o?ge([n],r,s):null===o?n:n+"[]",l(e))})),!1;return!!pe(e)||(t.append(ge(i,n,s),l(e)),!1)}const d=[],h=Object.assign(ye,{defaultVisitor:u,convertValue:l,isVisitable:pe});function f(e,n){if(!ce.isUndefined(e)){if(-1!==d.indexOf(e))throw Error("Circular reference detected in "+n.join("."));d.push(e),ce.forEach(e,(function(e,r){const s=!(ce.isUndefined(e)||null===e)&&i.call(t,e,ce.isString(r)?r.trim():r,n,h);!0===s&&f(e,n?n.concat(r):[r])})),d.pop()}}if(!ce.isObject(e))throw new TypeError("data must be an object");return f(e),t}var _e=be;function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ee(e,t){this._pairs=[],e&&_e(e,this,t)}const Se=Ee.prototype;Se.append=function(e,t){this._pairs.push([e,t])},Se.toString=function(e){const t=e?function(t){return e.call(this,t,we)}:we;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Ie=Ee;function Te(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Oe(e,t,n){if(!t)return e;const r=n&&n.encode||Te;ce.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(s=i?i(t,n):ce.isURLSearchParams(t)?t.toString():new Ie(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}class ke{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ce.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Re=ke,Ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ae="undefined"!==typeof URLSearchParams?URLSearchParams:Ie,Pe="undefined"!==typeof FormData?FormData:null,Ne="undefined"!==typeof Blob?Blob:null,xe={isBrowser:!0,classes:{URLSearchParams:Ae,FormData:Pe,Blob:Ne},protocols:["http","https","file","blob","url","data"]};const De="undefined"!==typeof window&&"undefined"!==typeof document,Le="object"===typeof navigator&&navigator||void 0,Me=De&&(!Le||["ReactNative","NativeScript","NS"].indexOf(Le.product)<0),Ue=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),je=De&&window.location.href||"http://localhost";var Fe={...r,...xe};function Be(e,t){return _e(e,new Fe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Fe.isNode&&ce.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function $e(e){return ce.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Ve(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function We(e){function t(e,n,r,i){let s=e[i++];if("__proto__"===s)return!0;const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&ce.isArray(r)?r.length:s,a)return ce.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&ce.isObject(r[s])||(r[s]=[]);const c=t(e,n,r[s],i);return c&&ce.isArray(r[s])&&(r[s]=Ve(r[s])),!o}if(ce.isFormData(e)&&ce.isFunction(e.entries)){const n={};return ce.forEachEntry(e,((e,r)=>{t($e(e),r,n,0)})),n}return null}var He=We;function ze(e,t,n){if(ce.isString(e))try{return(t||JSON.parse)(e),ce.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const qe={transitional:Ce,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=ce.isObject(e);i&&ce.isHTMLForm(e)&&(e=new FormData(e));const s=ce.isFormData(e);if(s)return r?JSON.stringify(He(e)):e;if(ce.isArrayBuffer(e)||ce.isBuffer(e)||ce.isStream(e)||ce.isFile(e)||ce.isBlob(e)||ce.isReadableStream(e))return e;if(ce.isArrayBufferView(e))return e.buffer;if(ce.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Be(e,this.formSerializer).toString();if((o=ce.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return _e(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),ze(e)):e}],transformResponse:[function(e){const t=this.transitional||qe.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(ce.isResponse(e)||ce.isReadableStream(e))return e;if(e&&ce.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,s=!n&&r;try{return JSON.parse(e)}catch(i){if(s){if("SyntaxError"===i.name)throw he.from(i,he.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Fe.classes.FormData,Blob:Fe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ce.forEach(["delete","get","head","post","put","patch"],(e=>{qe.headers[e]={}}));var Ke=qe;const Ge=ce.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Je=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&Ge[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const Ze=Symbol("internals");function Xe(e){return e&&String(e).trim().toLowerCase()}function Qe(e){return!1===e||null==e?e:ce.isArray(e)?e.map(Qe):String(e)}function Ye(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const et=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function tt(e,t,n,r,i){return ce.isFunction(r)?r.call(this,t,n):(i&&(t=n),ce.isString(t)?ce.isString(r)?-1!==t.indexOf(r):ce.isRegExp(r)?r.test(t):void 0:void 0)}function nt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function rt(e,t){const n=ce.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}class it{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=Xe(t);if(!i)throw new Error("header name must be a non-empty string");const s=ce.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Qe(e))}const s=(e,t)=>ce.forEach(e,((e,n)=>i(e,n,t)));if(ce.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(ce.isString(e)&&(e=e.trim())&&!et(e))s(Je(e),t);else if(ce.isHeaders(e))for(const[o,a]of e.entries())i(a,o,n);else null!=e&&i(t,e,n);return this}get(e,t){if(e=Xe(e),e){const n=ce.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return Ye(e);if(ce.isFunction(t))return t.call(this,e,n);if(ce.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Xe(e),e){const n=ce.findKey(this,e);return!(!n||void 0===this[n]||t&&!tt(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=Xe(e),e){const i=ce.findKey(n,e);!i||t&&!tt(n,n[i],i,t)||(delete n[i],r=!0)}}return ce.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const i=t[n];e&&!tt(this,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return ce.forEach(this,((r,i)=>{const s=ce.findKey(n,i);if(s)return t[s]=Qe(r),void delete t[i];const o=e?nt(i):String(i).trim();o!==i&&delete t[i],t[o]=Qe(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ce.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&ce.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[Ze]=this[Ze]={accessors:{}},n=t.accessors,r=this.prototype;function i(e){const t=Xe(e);n[t]||(rt(r,e),n[t]=!0)}return ce.isArray(e)?e.forEach(i):i(e),this}}it.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ce.reduceDescriptors(it.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),ce.freezeMethods(it);var st=it;function ot(e,t){const n=this||Ke,r=t||n,i=st.from(r.headers);let s=r.data;return ce.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function at(e){return!(!e||!e.__CANCEL__)}function ct(e,t,n){he.call(this,null==e?"canceled":e,he.ERR_CANCELED,t,n),this.name="CanceledError"}ce.inherits(ct,he,{__CANCEL__:!0});var lt=ct;function ut(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new he("Request failed with status code "+n.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}function dt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ht(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[o];i||(i=c),n[s]=a,r[s]=c;let u=o,d=0;while(u!==s)d+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const h=l&&c-l;return h?Math.round(1e3*d/h):void 0}}var ft=ht;function pt(e,t){let n,r,i=0,s=1e3/t;const o=(t,s=Date.now())=>{i=s,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)},a=(...e)=>{const t=Date.now(),a=t-i;a>=s?o(e,t):(n=e,r||(r=setTimeout((()=>{r=null,o(n)}),s-a)))},c=()=>n&&o(n);return[a,c]}var mt=pt;const gt=(e,t,n=3)=>{let r=0;const i=ft(50,250);return mt((n=>{const s=n.loaded,o=n.lengthComputable?n.total:void 0,a=s-r,c=i(a),l=s<=o;r=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-s)/c:void 0,event:n,lengthComputable:null!=o,[t?"download":"upload"]:!0};e(u)}),n)},vt=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},yt=e=>(...t)=>ce.asap((()=>e(...t)));var bt=Fe.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Fe.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Fe.origin),Fe.navigator&&/(msie|trident)/i.test(Fe.navigator.userAgent)):()=>!0,_t=Fe.hasStandardBrowserEnv?{write(e,t,n,r,i,s){const o=[e+"="+encodeURIComponent(t)];ce.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ce.isString(r)&&o.push("path="+r),ce.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function wt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Et(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function St(e,t,n){let r=!wt(t);return e&&r||0==n?Et(e,t):t}const It=e=>e instanceof st?{...e}:e;function Tt(e,t){t=t||{};const n={};function r(e,t,n,r){return ce.isPlainObject(e)&&ce.isPlainObject(t)?ce.merge.call({caseless:r},e,t):ce.isPlainObject(t)?ce.merge({},t):ce.isArray(t)?t.slice():t}function i(e,t,n,i){return ce.isUndefined(t)?ce.isUndefined(e)?void 0:r(void 0,e,n,i):r(e,t,n,i)}function s(e,t){if(!ce.isUndefined(t))return r(void 0,t)}function o(e,t){return ce.isUndefined(t)?ce.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t,n)=>i(It(e),It(t),n,!0)};return ce.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||i,o=s(e[r],t[r],r);ce.isUndefined(o)&&s!==a||(n[r]=o)})),n}var Ot=e=>{const t=Tt({},e);let n,{data:r,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:o,headers:a,auth:c}=t;if(t.headers=a=st.from(a),t.url=Oe(St(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),ce.isFormData(r))if(Fe.hasStandardBrowserEnv||Fe.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(Fe.hasStandardBrowserEnv&&(i&&ce.isFunction(i)&&(i=i(t)),i||!1!==i&&bt(t.url))){const e=s&&o&&_t.read(o);e&&a.set(s,e)}return t};const kt="undefined"!==typeof XMLHttpRequest;var Rt=kt&&function(e){return new Promise((function(t,n){const r=Ot(e);let i=r.data;const s=st.from(r.headers).normalize();let o,a,c,l,u,{responseType:d,onUploadProgress:h,onDownloadProgress:f}=r;function p(){l&&l(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=st.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),i=d&&"text"!==d&&"json"!==d?m.response:m.responseText,s={data:i,status:m.status,statusText:m.statusText,headers:r,config:e,request:m};ut((function(e){t(e),p()}),(function(e){n(e),p()}),s),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new he("Request aborted",he.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new he("Network Error",he.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||Ce;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new he(t,i.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,e,m)),m=null},void 0===i&&s.setContentType(null),"setRequestHeader"in m&&ce.forEach(s.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),ce.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),f&&([c,u]=gt(f,!0),m.addEventListener("progress",c)),h&&m.upload&&([a,l]=gt(h),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",l)),(r.cancelToken||r.signal)&&(o=t=>{m&&(n(!t||t.type?new lt(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const v=dt(r.url);v&&-1===Fe.protocols.indexOf(v)?n(new he("Unsupported protocol "+v+":",he.ERR_BAD_REQUEST,e)):m.send(i||null)}))};const Ct=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const i=function(e){if(!n){n=!0,o();const t=e instanceof Error?e:this.reason;r.abort(t instanceof he?t:new lt(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{s=null,i(new he(`timeout ${t} of ms exceeded`,he.ETIMEDOUT))}),t);const o=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)})),e=null)};e.forEach((e=>e.addEventListener("abort",i)));const{signal:a}=r;return a.unsubscribe=()=>ce.asap(o),a}};var At=Ct;const Pt=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,i=0;while(i<n)r=i+t,yield e.slice(i,r),i=r},Nt=async function*(e,t){for await(const n of xt(e))yield*Pt(n,t)},xt=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Dt=(e,t,n,r)=>{const i=Nt(e,t);let s,o=0,a=e=>{s||(s=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await i.next();if(t)return a(),void e.close();let s=r.byteLength;if(n){let e=o+=s;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw a(t),t}},cancel(e){return a(e),i.return()}},{highWaterMark:2})},Lt="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Mt=Lt&&"function"===typeof ReadableStream,Ut=Lt&&("function"===typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),jt=(e,...t)=>{try{return!!e(...t)}catch(n){return!1}},Ft=Mt&&jt((()=>{let e=!1;const t=new Request(Fe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Bt=65536,$t=Mt&&jt((()=>ce.isReadableStream(new Response("").body))),Vt={stream:$t&&(e=>e.body)};Lt&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach((t=>{!Vt[t]&&(Vt[t]=ce.isFunction(e[t])?e=>e[t]():(e,n)=>{throw new he(`Response type '${t}' is not supported`,he.ERR_NOT_SUPPORT,n)})}))})(new Response);const Wt=async e=>{if(null==e)return 0;if(ce.isBlob(e))return e.size;if(ce.isSpecCompliantForm(e)){const t=new Request(Fe.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return ce.isArrayBufferView(e)||ce.isArrayBuffer(e)?e.byteLength:(ce.isURLSearchParams(e)&&(e+=""),ce.isString(e)?(await Ut(e)).byteLength:void 0)},Ht=async(e,t)=>{const n=ce.toFiniteNumber(e.getContentLength());return null==n?Wt(t):n};var zt=Lt&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:h}=Ot(e);l=l?(l+"").toLowerCase():"text";let f,p=At([i,s&&s.toAbortSignal()],o);const m=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let g;try{if(c&&Ft&&"get"!==n&&"head"!==n&&0!==(g=await Ht(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(ce.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=vt(g,gt(yt(c)));r=Dt(n.body,Bt,e,t)}}ce.isString(d)||(d=d?"include":"omit");const i="credentials"in Request.prototype;f=new Request(t,{...h,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:i?d:void 0});let s=await fetch(f);const o=$t&&("stream"===l||"response"===l);if($t&&(a||o&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=ce.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&vt(t,gt(yt(a),!0))||[];s=new Response(Dt(s.body,Bt,n,(()=>{r&&r(),m&&m()})),e)}l=l||"text";let v=await Vt[ce.findKey(Vt,l)||"text"](s,e);return!o&&m&&m(),await new Promise(((t,n)=>{ut(t,n,{data:v,headers:st.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:f})}))}catch(v){if(m&&m(),v&&"TypeError"===v.name&&/fetch/i.test(v.message))throw Object.assign(new he("Network Error",he.ERR_NETWORK,e,f),{cause:v.cause||v});throw he.from(v,v&&v.code,e,f)}});const qt={http:fe,xhr:Rt,fetch:zt};ce.forEach(qt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Kt=e=>`- ${e}`,Gt=e=>ce.isFunction(e)||null===e||!1===e;var Jt={getAdapter:e=>{e=ce.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Gt(n)&&(r=qt[(t=String(n)).toLowerCase()],void 0===r))throw new he(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+s]=r}if(!r){const e=Object.entries(i).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Kt).join("\n"):" "+Kt(e[0]):"as no adapter specified";throw new he("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:qt};function Zt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new lt(null,e)}function Xt(e){Zt(e),e.headers=st.from(e.headers),e.data=ot.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=Jt.getAdapter(e.adapter||Ke.adapter);return t(e).then((function(t){return Zt(e),t.data=ot.call(e,e.transformResponse,t),t.headers=st.from(t.headers),t}),(function(t){return at(t)||(Zt(e),t&&t.response&&(t.response.data=ot.call(e,e.transformResponse,t.response),t.response.headers=st.from(t.response.headers))),Promise.reject(t)}))}const Qt="1.8.1",Yt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Yt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const en={};function tn(e,t,n){if("object"!==typeof e)throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;while(i-- >0){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new he("option "+s+" must be "+n,he.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new he("Unknown option "+s,he.ERR_BAD_OPTION)}}Yt.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Qt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new he(r(i," has been removed"+(t?" in "+t:"")),he.ERR_DEPRECATED);return t&&!en[i]&&(en[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}},Yt.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};var nn={assertOptions:tn,validators:Yt};const rn=nn.validators;class sn{constructor(e){this.defaults=e,this.interceptors={request:new Re,response:new Re}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=Tt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&nn.assertOptions(n,{silentJSONParsing:rn.transitional(rn.boolean),forcedJSONParsing:rn.transitional(rn.boolean),clarifyTimeoutError:rn.transitional(rn.boolean)},!1),null!=r&&(ce.isFunction(r)?t.paramsSerializer={serialize:r}:nn.assertOptions(r,{encode:rn.function,serialize:rn.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),nn.assertOptions(t,{baseUrl:rn.spelling("baseURL"),withXsrfToken:rn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=i&&ce.merge(i.common,i[t.method]);i&&ce.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=st.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[Xt.bind(this),void 0];e.unshift.apply(e,o),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);while(d<u)l=l.then(e[d++],e[d++]);return l}u=o.length;let h=t;d=0;while(d<u){const e=o[d++],t=o[d++];try{h=e(h)}catch(f){t.call(this,f);break}}try{l=Xt.call(this,h)}catch(f){return Promise.reject(f)}d=0,u=c.length;while(d<u)l=l.then(c[d++],c[d++]);return l}getUri(e){e=Tt(this.defaults,e);const t=St(e.baseURL,e.url,e.allowAbsoluteUrls);return Oe(t,e.params,e.paramsSerializer)}}ce.forEach(["delete","get","head","options"],(function(e){sn.prototype[e]=function(t,n){return this.request(Tt(n||{},{method:e,url:t,data:(n||{}).data}))}})),ce.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Tt(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}sn.prototype[e]=t(),sn.prototype[e+"Form"]=t(!0)}));var on=sn;class an{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new lt(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;const t=new an((function(t){e=t}));return{token:t,cancel:e}}}var cn=an;function ln(e){return function(t){return e.apply(null,t)}}function un(e){return ce.isObject(e)&&!0===e.isAxiosError}const dn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(dn).forEach((([e,t])=>{dn[t]=e}));var hn=dn;function fn(e){const t=new on(e),n=i(on.prototype.request,t);return ce.extend(n,on.prototype,t,{allOwnKeys:!0}),ce.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return fn(Tt(e,t))},n}const pn=fn(Ke);pn.Axios=on,pn.CanceledError=lt,pn.CancelToken=cn,pn.isCancel=at,pn.VERSION=Qt,pn.toFormData=_e,pn.AxiosError=he,pn.Cancel=pn.CanceledError,pn.all=function(e){return Promise.all(e)},pn.spread=ln,pn.isAxiosError=un,pn.mergeConfig=Tt,pn.AxiosHeaders=st,pn.formToJSON=e=>He(ce.isHTMLForm(e)?new FormData(e):e),pn.getAdapter=Jt.getAdapter,pn.HttpStatusCode=hn,pn.default=pn;var mn=pn},424:function(e,t,n){n.d(t,{$b:function(){return i},Vy:function(){return l}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},641:function(e,t,n){n.d(t,{$u:function(){return ie},CE:function(){return Kt},Df:function(){return B},EW:function(){return Dn},FK:function(){return Mt},Gt:function(){return $e},Gy:function(){return D},K9:function(){return lt},Lk:function(){return Yt},MZ:function(){return F},OW:function(){return j},Q3:function(){return on},QP:function(){return M},WQ:function(){return Ve},bF:function(){return en},dY:function(){return g},g2:function(){return he},h:function(){return Ln},k6:function(){return R},nI:function(){return gn},pI:function(){return ge},pM:function(){return $},qL:function(){return o},uX:function(){return Vt},wB:function(){return _t}});var r=n(953),i=n(33);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}if((0,i.cy)(e)){const i=[];for(let s=0;s<e.length;s++)i.push(o(e[s],t,n,r));return i}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||i.MZ;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;i=i.parent}if(l)return(0,r.C4)(),s(l,null,10,[e,o,a]),void(0,r.bl)()}c(e,n,a,o,u)}function c(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const l=[];let u=-1;const d=[];let h=null,f=0;const p=Promise.resolve();let m=null;function g(e){const t=m||p;return e?t.then(this?e.bind(this):e):t}function v(e){let t=u+1,n=l.length;while(t<n){const r=t+n>>>1,i=l[r],s=S(i);s<e||s===e&&2&i.flags?t=r+1:n=r}return t}function y(e){if(!(1&e.flags)){const t=S(e),n=l[l.length-1];!n||!(2&e.flags)&&t>=S(n)?l.push(e):l.splice(v(t),0,e),e.flags|=1,b()}}function b(){m||(m=p.then(I))}function _(e){(0,i.cy)(e)?d.push(...e):h&&-1===e.id?h.splice(f+1,0,e):1&e.flags||(d.push(e),e.flags|=1),b()}function w(e,t,n=u+1){for(0;n<l.length;n++){const t=l[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,l.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function E(e){if(d.length){const e=[...new Set(d)].sort(((e,t)=>S(e)-S(t)));if(d.length=0,h)return void h.push(...e);for(h=e,f=0;f<h.length;f++){const e=h[f];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}h=null,f=0}}const S=e=>null==e.id?2&e.flags?-1:1/0:e.id;function I(e){i.tE;try{for(u=0;u<l.length;u++){const e=l[u];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),s(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;u<l.length;u++){const e=l[u];e&&(e.flags&=-2)}u=-1,l.length=0,E(e),m=null,(l.length||d.length)&&I(e)}}let T=null,O=null;function k(e){const t=T;return T=e,O=e&&e.type.__scopeId||null,t}function R(e,t=T,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&zt(-1);const i=k(t);let s;try{s=e(...n)}finally{k(i),r._d&&zt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function C(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.C4)(),o(u,n,8,[e.el,l,e,t]),(0,r.bl)())}}const A=Symbol("_vte"),P=e=>e.__isTeleport;const N=Symbol("_leaveCb"),x=Symbol("_enterCb");function D(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ne((()=>{e.isMounted=!0})),se((()=>{e.isUnmounting=!0})),e}const L=[Function,Array],M={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:L,onEnter:L,onAfterEnter:L,onEnterCancelled:L,onBeforeLeave:L,onLeave:L,onAfterLeave:L,onLeaveCancelled:L,onBeforeAppear:L,onAppear:L,onAfterAppear:L,onAppearCancelled:L};function U(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function j(e,t,n,r,s){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:d,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:y,onAppear:b,onAfterAppear:_,onAppearCancelled:w}=t,E=String(e.key),S=U(n,e),I=(e,t)=>{e&&o(e,r,9,t)},T=(e,t)=>{const n=t[1];I(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},O={mode:c,persisted:l,beforeEnter(t){let r=u;if(!n.isMounted){if(!a)return;r=y||u}t[N]&&t[N](!0);const i=S[E];i&&Zt(e,i)&&i.el[N]&&i.el[N](),I(r,[t])},enter(e){let t=d,r=h,i=f;if(!n.isMounted){if(!a)return;t=b||d,r=_||h,i=w||f}let s=!1;const o=e[x]=t=>{s||(s=!0,I(t?i:r,[e]),O.delayedLeave&&O.delayedLeave(),e[x]=void 0)};t?T(t,[e,o]):o()},leave(t,r){const i=String(e.key);if(t[x]&&t[x](!0),n.isUnmounting)return r();I(p,[t]);let s=!1;const o=t[N]=n=>{s||(s=!0,r(),I(n?v:g,[t]),t[N]=void 0,S[i]===e&&delete S[i])};S[i]=e,m?T(m,[t,o]):o()},clone(e){const i=j(e,t,n,r,s);return s&&s(i),i}};return O}function F(e,t){6&e.shapeFlag&&e.component?(e.transition=t,F(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function B(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Mt?(128&o.patchFlag&&i++,r=r.concat(B(o.children,t,a))):(t||o.type!==jt)&&r.push(null!=a?rn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function $(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}function V(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function W(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>W(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a)));if(H(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&W(e,t,n,o.component.subTree));const c=4&o.shapeFlag?Pn(o.component):o.el,l=a?null:c,{i:u,r:d}=e;const h=t&&t.r,f=u.refs===i.MZ?u.refs={}:u.refs,p=u.setupState,m=(0,r.ux)(p),g=p===i.MZ?()=>!1:e=>(0,i.$3)(m,e);if(null!=h&&h!==d&&((0,i.Kg)(h)?(f[h]=null,g(h)&&(p[h]=null)):(0,r.i9)(h)&&(h.value=null)),(0,i.Tn)(d))s(d,u,12,[l,f]);else{const t=(0,i.Kg)(d),s=(0,r.i9)(d);if(t||s){const r=()=>{if(e.f){const n=t?g(d)?p[d]:f[d]:d.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[d]=[c],g(d)&&(p[d]=f[d])):(d.value=[c],e.k&&(f[e.k]=d.value))}else t?(f[d]=l,g(d)&&(p[d]=l)):s&&(d.value=l,e.k&&(f[e.k]=l))};l?(r.id=-1,ct(r,n)):r()}else 0}}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const H=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const z=e=>e.type.__isKeepAlive;RegExp,RegExp;function q(e,t){return(0,i.cy)(e)?e.some((e=>q(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&(e.lastIndex=0,e.test(t))}function K(e,t){J(e,"a",t)}function G(e,t){J(e,"da",t)}function J(e,t,n=mn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Y(t,r,n),n){let e=n.parent;while(e&&e.parent)z(e.parent.vnode)&&Z(r,t,n,e),e=e.parent}}function Z(e,t,n,r){const s=Y(t,e,r,!0);oe((()=>{(0,i.TF)(r[t],s)}),n)}function X(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Q(e){return 128&e.shapeFlag?e.ssContent:e}function Y(e,t,n=mn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const s=bn(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const ee=e=>(t,n=mn)=>{In&&"sp"!==e||Y(e,((...e)=>t(...e)),n)},te=ee("bm"),ne=ee("m"),re=ee("bu"),ie=ee("u"),se=ee("bum"),oe=ee("um"),ae=ee("sp"),ce=ee("rtg"),le=ee("rtc");function ue(e,t=mn){Y("ec",e,t)}const de="components";function he(e,t){return pe(de,e,!0,t)||e}const fe=Symbol.for("v-ndc");function pe(e,t,n=!0,r=!1){const s=T||mn;if(s){const n=s.type;if(e===de){const e=Nn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=me(s[e]||n[e],t)||me(s.appContext[e],t);return!o&&r?n:o}}function me(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}function ge(e,t,n,s){let o;const a=n&&n[s],c=(0,i.cy)(e);if(c||(0,i.Kg)(e)){const n=c&&(0,r.g8)(e);let i=!1;n&&(i=!(0,r.fE)(e),e=(0,r.qA)(e)),o=new Array(e.length);for(let s=0,c=e.length;s<c;s++)o[s]=t(i?(0,r.lJ)(e[s]):e[s],s,void 0,a&&a[s])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,a&&a[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}const ve=e=>e?wn(e)?Pn(e):ve(e.parent):null,ye=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ve(e.parent),$root:e=>ve(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ke(e),$forceUpdate:e=>e.f||(e.f=()=>{y(e.update)}),$nextTick:e=>e.n||(e.n=g.bind(e.proxy)),$watch:e=>Et.bind(e)}),be=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),_e={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let d;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(be(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((d=e.propsOptions[0])&&(0,i.$3)(d,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Ee&&(c[t]=0)}}const h=ye[t];let f,p;return h?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),h(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return be(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||be(t,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(ye,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function we(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Ee=!0;function Se(e){const t=ke(e),n=e.proxy,s=e.ctx;Ee=!1,t.beforeCreate&&Te(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:d,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:_,destroyed:w,unmounted:E,render:S,renderTracked:I,renderTriggered:T,errorCaptured:O,serverPrefetch:k,expose:R,inheritAttrs:C,components:A,directives:P,filters:N}=t,x=null;if(d&&Ie(d,s,x),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Ee=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=Dn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)Oe(l[r],s,n,r);if(u){const e=(0,i.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{$e(t,e[t])}))}function D(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&Te(h,e,"c"),D(te,f),D(ne,p),D(re,m),D(ie,g),D(K,v),D(G,y),D(ue,O),D(le,I),D(ce,T),D(se,_),D(oe,E),D(ae,k),(0,i.cy)(R))if(R.length){const t=e.exposed||(e.exposed={});R.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});S&&e.render===i.tE&&(e.render=S),null!=C&&(e.inheritAttrs=C),A&&(e.components=A),P&&(e.directives=P),k&&V(e)}function Ie(e,t,n=i.tE){(0,i.cy)(e)&&(e=Ne(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?Ve(n.from||s,n.default,!0):Ve(n.from||s):Ve(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Te(e,t,n){o((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Oe(e,t,n,r){let s=r.includes(".")?St(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&_t(s,n)}else if((0,i.Tn)(e))_t(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>Oe(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&_t(s,r,e)}else 0}function ke(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let l;return c?l=c:s.length||n||r?(l={},s.length&&s.forEach((e=>Re(l,e,a,!0))),Re(l,t,a)):l=t,(0,i.Gv)(t)&&o.set(t,l),l}function Re(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Re(e,s,n,!0),i&&i.forEach((t=>Re(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Ce[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Ce={data:Ae,props:Le,emits:Le,methods:De,computed:De,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:De,directives:De,watch:Me,provide:Ae,inject:Pe};function Ae(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function Pe(e,t){return De(Ne(e),Ne(t))}function Ne(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function De(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function Le(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),we(e),we(null!=t?t:{})):t}function Me(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=xe(e[r],t[r]);return n}function Ue(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let je=0;function Fe(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=Ue(),a=new WeakSet,c=[];let l=!1;const u=s.app={_uid:je++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Mn,get config(){return s.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,i.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,i.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),u},component(e,t){return t?(s.components[e]=t,u):s.components[e]},directive(e,t){return t?(s.directives[e]=t,u):s.directives[e]},mount(i,o,a){if(!l){0;const c=u._ceVNode||en(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(c,i):e(c,i,a),l=!0,u._container=i,i.__vue_app__=u,Pn(c.component)}},onUnmount(e){c.push(e)},unmount(){l&&(o(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return s.provides[e]=t,u},runWithContext(e){const t=Be;Be=u;try{return e()}finally{Be=t}}};return u}}let Be=null;function $e(e,t){if(mn){let n=mn.provides;const r=mn.parent&&mn.parent.provides;r===n&&(n=mn.provides=Object.create(r)),n[e]=t}else 0}function Ve(e,t,n=!1){const r=mn||T;if(r||Be){const s=Be?Be._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const We={},He=()=>Object.create(We),ze=e=>Object.getPrototypeOf(e)===We;function qe(e,t,n,i=!1){const s={},o=He();e.propsDefaults=Object.create(null),Ge(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Ke(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.ux)(o),[u]=e.propsOptions;let d=!1;if(!(s||c>0)||16&c){let r;Ge(e,t,o,a)&&(d=!0);for(const s in l)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Je(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],d=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(kt(e.emitsOptions,s))continue;const c=t[s];if(u)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,d=!0);else{const t=(0,i.PT)(s);o[t]=Je(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,d=!0)}}d&&(0,r.hZ)(e.attrs,"set","")}function Ge(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const u=t[r];let d;o&&(0,i.$3)(o,d=(0,i.PT)(r))?a&&a.includes(d)?(c||(c={}))[d]=u:n[d]=u:kt(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,l=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Je(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return l}function Je(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=bn(s);r=i[n]=e.call(null,t),o()}}else r=e;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Ze=new WeakMap;function Xe(e,t,n=!1){const r=n?Ze:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,i.Tn)(e)){const r=e=>{l=!0;const[n,r]=Xe(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let d=0;d<o.length;d++){0;const e=(0,i.PT)(o[d]);Qe(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(Qe(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let l=!1,u=!0;if((0,i.cy)(s))for(let e=0;e<s.length;++e){const t=s[e],n=(0,i.Tn)(t)&&t.name;if("Boolean"===n){l=!0;break}"String"===n&&(u=!1)}else l=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=l,r[1]=u,(l||(0,i.$3)(r,"default"))&&c.push(t)}}}const u=[a,c];return(0,i.Gv)(e)&&r.set(e,u),u}function Qe(e){return"$"!==e[0]&&!(0,i.SU)(e)}const Ye=e=>"_"===e[0]||"$stable"===e,et=e=>(0,i.cy)(e)?e.map(an):[an(e)],tt=(e,t,n)=>{if(t._n)return t;const r=R(((...e)=>et(t(...e))),n);return r._c=!1,r},nt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ye(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=tt(s,n,r);else if(null!=n){0;const e=et(n);t[s]=()=>e}}},rt=(e,t)=>{const n=et(t);e.slots.default=()=>n},it=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},st=(e,t,n)=>{const r=e.slots=He();if(32&e.vnode.shapeFlag){const e=t._;e?(it(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):nt(t,r)}else t&&rt(e,t)},ot=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:it(s,t,n):(o=!t.$stable,nt(t,s)),a=t}else t&&(rt(e,t),a={default:1});if(o)for(const i in s)Ye(i)||null!=a[i]||delete s[i]};function at(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const ct=Lt;function lt(e){return ut(e)}function ut(e,t){at();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:d,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=i.tE,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Zt(e,t)&&(r=Y(e),G(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ut:b(e,t,n,r);break;case jt:_(e,t,n,r);break;case Ft:null==e&&S(t,n,r,o);break;case Mt:L(e,t,n,r,i,s,o,a,c);break;default:1&d?O(e,t,n,r,i,s,o,a,c):6&d?M(e,t,n,r,i,s,o,a,c):(64&d||128&d)&&l.process(e,t,n,r,i,s,o,a,c,ne)}null!=u&&i&&W(u,e&&e.ref,s,t||e,!t)},b=(e,t,n,r)=>{if(null==e)s(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},_=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},S=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},O=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?k(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},k=(e,t,n,r,o,l,u,d)=>{let f,p;const{props:m,shapeFlag:g,transition:v,dirs:y}=e;if(f=e.el=c(e.type,l,m&&m.is,m),8&g?h(f,e.children):16&g&&P(e.children,f,null,r,o,dt(e,l),u,d),y&&C(e,null,r,"created"),R(f,e,e.scopeId,u,r),m){for(const e in m)"value"===e||(0,i.SU)(e)||a(f,e,null,m[e],l,r);"value"in m&&a(f,"value",null,m.value,l),(p=m.onVnodeBeforeMount)&&dn(p,r,e)}y&&C(e,null,r,"beforeMount");const b=ft(o,v);b&&v.beforeEnter(f),s(f,t,n),((p=m&&m.onVnodeMounted)||b||y)&&ct((()=>{p&&dn(p,r,e),b&&v.enter(f),y&&C(e,null,r,"mounted")}),o)},R=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n||Dt(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},P=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?cn(e[l]):an(e[l]);v(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.MZ,m=t.props||i.MZ;let g;if(n&&ht(n,!1),(g=m.onVnodeBeforeUpdate)&&dn(g,n,t,e),f&&C(t,e,n,"beforeUpdate"),n&&ht(n,!0),(p.innerHTML&&null==m.innerHTML||p.textContent&&null==m.textContent)&&h(l,""),d?x(e.dynamicChildren,d,l,n,r,dt(t,s),o):c||$(e,t,l,null,n,r,dt(t,s),o,!1),u>0){if(16&u)D(l,p,m,n,s);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,s),4&u&&a(l,"style",p.style,m.style,s),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],o=m[r];o===i&&"value"!==r||a(l,r,i,o,s,n)}}1&u&&e.children!==t.children&&h(l,t.children)}else c||null!=d||D(l,p,m,n,s);((g=m.onVnodeUpdated)||f)&&ct((()=>{g&&dn(g,n,t,e),f&&C(t,e,n,"updated")}),r)},x=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Mt||!Zt(c,l)||70&c.shapeFlag)?f(c.el):n;v(c,l,u,null,r,i,s,o,!0)}},D=(e,t,n,r,s)=>{if(t!==n){if(t!==i.MZ)for(const o in t)(0,i.SU)(o)||o in n||a(e,o,t[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],l=t[o];c!==l&&"value"!==o&&a(e,o,l,c,s,r)}"value"in n&&a(e,"value",t.value,n.value,s)}},L=(e,t,n,r,i,o,a,c,u)=>{const d=t.el=e?e.el:l(""),h=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(d,n,r),s(h,n,r),P(t.children||[],n,h,i,o,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&pt(e,t,!0)):$(e,t,n,h,i,o,a,c,u)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):U(t,n,r,i,s,o,c):j(e,t,c)},U=(e,t,n,r,i,s,o)=>{const a=e.component=pn(e,r,i);if(z(e)&&(a.ctx.renderer=ne),Tn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,F,o),!e.el){const e=a.subTree=en(jt);_(null,e,t,n)}}else F(a,e,t,n,i,s,o)},j=(e,t,n)=>{const r=t.component=e.component;if(Pt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:u}=e;{const n=gt(e);if(n)return t&&(t.el=u.el,B(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||l()}))}let d,h=t;0,ht(e,!1),t?(t.el=u.el,B(e,t,c)):t=u,n&&(0,i.DY)(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&dn(d,s,t,u),ht(e,!0);const p=Rt(e);0;const m=e.subTree;e.subTree=p,v(m,p,f(m.el),Y(m),e,o,a),t.el=p.el,null===h&&xt(e,p.el),r&&ct(r,o),(d=t.props&&t.props.onVnodeUpdated)&&ct((()=>dn(d,s,t,u)),o)}else{let r;const{el:c,props:l}=t,{bm:u,m:d,parent:h,root:f,type:p}=e,m=H(t);if(ht(e,!1),u&&(0,i.DY)(u),!m&&(r=l&&l.onVnodeBeforeMount)&&dn(r,h,t),ht(e,!0),c&&ie){const t=()=>{e.subTree=Rt(e),ie(c,e.subTree,e,o,null)};m&&p.__asyncHydrate?p.__asyncHydrate(c,e,t):t()}else{f.ce&&f.ce._injectChildStyle(p);const r=e.subTree=Rt(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(d&&ct(d,o),!m&&(r=l&&l.onVnodeMounted)){const e=t;ct((()=>dn(r,h,e)),o)}(256&t.shapeFlag||h&&H(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&ct(e.a,o),e.isMounted=!0,t=n=s=null}};e.scope.on();const u=e.effect=new r.X2(l);e.scope.off();const d=e.update=u.run.bind(u),h=e.job=u.runIfDirty.bind(u);h.i=e,h.id=e.uid,u.scheduler=()=>y(h),ht(e,!0),d()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Ke(e,t.props,i,n),ot(e,t.children,n),(0,r.C4)(),w(e),(0,r.bl)()},$=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void q(l,d,n,r,i,s,o,a,c);if(256&f)return void V(l,d,n,r,i,s,o,a,c)}8&p?(16&u&&Q(l,i,s),d!==l&&h(n,d)):16&u?16&p?q(l,d,n,r,i,s,o,a,c):Q(l,i,s,!0):(8&u&&h(n,""),16&p&&P(d,n,r,i,s,o,a,c))},V=(e,t,n,r,s,o,a,c,l)=>{e=e||i.Oj,t=t||i.Oj;const u=e.length,d=t.length,h=Math.min(u,d);let f;for(f=0;f<h;f++){const r=t[f]=l?cn(t[f]):an(t[f]);v(e[f],r,n,null,s,o,a,c,l)}u>d?Q(e,s,o,!0,!1,h):P(t,n,r,s,o,a,c,l,h)},q=(e,t,n,r,s,o,a,c,l)=>{let u=0;const d=t.length;let h=e.length-1,f=d-1;while(u<=h&&u<=f){const r=e[u],i=t[u]=l?cn(t[u]):an(t[u]);if(!Zt(r,i))break;v(r,i,n,null,s,o,a,c,l),u++}while(u<=h&&u<=f){const r=e[h],i=t[f]=l?cn(t[f]):an(t[f]);if(!Zt(r,i))break;v(r,i,n,null,s,o,a,c,l),h--,f--}if(u>h){if(u<=f){const e=f+1,i=e<d?t[e].el:r;while(u<=f)v(null,t[u]=l?cn(t[u]):an(t[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=h)G(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?cn(t[u]):an(t[u]);null!=e.key&&g.set(e.key,u)}let y,b=0;const _=f-m+1;let w=!1,E=0;const S=new Array(_);for(u=0;u<_;u++)S[u]=0;for(u=p;u<=h;u++){const r=e[u];if(b>=_){G(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===S[y-m]&&Zt(r,t[y])){i=y;break}void 0===i?G(r,s,o,!0):(S[i-m]=u+1,i>=E?E=i:w=!0,v(r,t[i],n,null,s,o,a,c,l),b++)}const I=w?mt(S):i.Oj;for(y=I.length-1,u=_-1;u>=0;u--){const e=m+u,i=t[e],h=e+1<d?t[e+1].el:r;0===S[u]?v(null,i,n,h,s,o,a,c,l):w&&(y<0||u!==I[y]?K(i,n,h,2):y--)}}},K=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void K(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ne);if(a===Mt){s(o,t,n);for(let e=0;e<l.length;e++)K(l[e],t,n,r);return void s(e.anchor,t,n)}if(a===Ft)return void I(e,t,n);const d=2!==r&&1&u&&c;if(d)if(0===r)c.beforeEnter(o),s(o,t,n),ct((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:h,cacheIndex:f}=e;if(-2===d&&(i=!1),null!=a&&W(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&u)return void t.ctx.deactivate(e);const p=1&u&&h,m=!H(e);let g;if(m&&(g=o&&o.onVnodeBeforeUnmount)&&dn(g,t,e),6&u)X(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&C(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,ne,r):l&&!l.hasOnce&&(s!==Mt||d>0&&64&d)?Q(l,t,n,!1,!0):(s===Mt&&384&d||!i&&16&u)&&Q(c,t,n),r&&J(e)}(m&&(g=o&&o.onVnodeUnmounted)||p)&&ct((()=>{g&&dn(g,t,e),p&&C(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Mt)return void Z(n,r);if(t===Ft)return void T(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Z=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},X=(e,t,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:l,a:u}=e;vt(l),vt(u),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,G(a,e,t,n)),c&&ct(c,t),ct((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,r,i)},Y=e=>{if(6&e.shapeFlag)return Y(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[A];return n?p(n):t};let ee=!1;const te=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ee||(ee=!0,w(),E(),ee=!1)},ne={p:v,um:G,m:K,r:J,mt:U,mc:P,pc:$,pbc:x,n:Y,o:e};let re,ie;return t&&([re,ie]=t(ne)),{render:te,hydrate:re,createApp:Fe(te,re)}}function dt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ht({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ft(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function pt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=cn(s[i]),t.el=e.el),n||-2===t.patchFlag||pt(e,t)),t.type===Ut&&(t.el=e.el)}}function mt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function gt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gt(t)}function vt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const yt=Symbol.for("v-scx"),bt=()=>{{const e=Ve(yt);return e}};function _t(e,t,n){return wt(e,t,n)}function wt(e,t,n=i.MZ){const{immediate:s,deep:a,flush:c,once:l}=n;const u=(0,i.X$)({},n);const d=t&&s||!t&&"post"!==c;let h;if(In)if("sync"===c){const e=bt();h=e.__watcherHandles||(e.__watcherHandles=[])}else if(!d){const e=()=>{};return e.stop=i.tE,e.resume=i.tE,e.pause=i.tE,e}const f=mn;u.call=(e,t,n)=>o(e,f,t,n);let p=!1;"post"===c?u.scheduler=e=>{ct(e,f&&f.suspense)}:"sync"!==c&&(p=!0,u.scheduler=(e,t)=>{t?e():y(e)}),u.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const m=(0,r.wB)(e,t,u);return In&&(h?h.push(m):d&&m()),m}function Et(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?St(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=bn(this),c=wt(s,o.bind(r),n);return a(),c}function St(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const It=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function Tt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&It(r,t.slice(7));let l;c&&(c.trim&&(s=n.map((e=>(0,i.Kg)(e)?e.trim():e))),c.number&&(s=n.map(i.bB)));let u=r[l=(0,i.rU)(t)]||r[l=(0,i.rU)((0,i.PT)(t))];!u&&a&&(u=r[l=(0,i.rU)((0,i.Tg)(t))]),u&&o(u,e,6,s);const d=r[l+"Once"];if(d){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(d,e,6,s)}}function Ot(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=Ot(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((e=>a[e]=null)):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function kt(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function Rt(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:d,renderCache:h,props:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=e,y=k(e);let b,_;try{if(4&n.shapeFlag){const e=s||r,t=e;b=an(d.call(t,e,h,f,m,p,g)),_=l}else{const e=t;0,b=an(e.length>1?e(f,{attrs:l,slots:c,emit:u}):e(f,null)),_=t.props?l:Ct(l)}}catch(E){Bt.length=0,a(E,e,1),b=en(jt)}let w=b;if(_&&!1!==v){const e=Object.keys(_),{shapeFlag:t}=w;e.length&&7&t&&(o&&e.some(i.CP)&&(_=At(_,o)),w=rn(w,_,!1,!0))}return n.dirs&&(w=rn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&F(w,n.transition),b=w,k(y),b}const Ct=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},At=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Pt(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Nt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Nt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!kt(l,n))return!0}}return!1}function Nt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!kt(n,s))return!0}return!1}function xt({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const Dt=e=>e.__isSuspense;function Lt(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):_(e)}const Mt=Symbol.for("v-fgt"),Ut=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Ft=Symbol.for("v-stc"),Bt=[];let $t=null;function Vt(e=!1){Bt.push($t=e?null:[])}function Wt(){Bt.pop(),$t=Bt[Bt.length-1]||null}let Ht=1;function zt(e,t=!1){Ht+=e,e<0&&$t&&t&&($t.hasOnce=!0)}function qt(e){return e.dynamicChildren=Ht>0?$t||i.Oj:null,Wt(),Ht>0&&$t&&$t.push(e),e}function Kt(e,t,n,r,i,s){return qt(Yt(e,t,n,r,i,s,!0))}function Gt(e,t,n,r,i){return qt(en(e,t,n,r,i,!0))}function Jt(e){return!!e&&!0===e.__v_isVNode}function Zt(e,t){return e.type===t.type&&e.key===t.key}const Xt=({key:e})=>null!=e?e:null,Qt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:T,r:e,k:t,f:!!n}:e:null);function Yt(e,t=null,n=null,r=0,s=null,o=(e===Mt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xt(t),ref:t&&Qt(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:T};return c?(ln(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.Kg)(n)?8:16),Ht>0&&!a&&$t&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&$t.push(l),l}const en=tn;function tn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==fe||(e=jt),Jt(e)){const r=rn(e,t,!0);return n&&ln(r,n),Ht>0&&!a&&$t&&(6&r.shapeFlag?$t[$t.indexOf(e)]=r:$t.push(r)),r.patchFlag=-2,r}if(xn(e)&&(e=e.__vccOpts),t){t=nn(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:Dt(e)?128:P(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return Yt(e,t,n,s,o,c,a,!0)}function nn(e){return e?(0,r.ju)(e)||ze(e)?(0,i.X$)({},e):e:null}function rn(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=e,u=t?un(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Xt(u),ref:t&&t.ref?n&&o?(0,i.cy)(o)?o.concat(Qt(t)):[o,Qt(t)]:Qt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&F(d,l.clone(d)),d}function sn(e=" ",t=0){return en(Ut,null,e,t)}function on(e="",t=!1){return t?(Vt(),Gt(jt,null,e)):en(jt,null,e)}function an(e){return null==e||"boolean"===typeof e?en(jt):(0,i.cy)(e)?en(Mt,null,e.slice()):Jt(e)?cn(e):en(Ut,null,String(e))}function cn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:rn(e)}function ln(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),ln(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||ze(t)?3===r&&T&&(1===T.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=T}}else(0,i.Tn)(t)?(t={default:t,_ctx:T},n=32):(t=String(t),64&r?(n=16,t=[sn(t)]):n=8);e.children=t,e.shapeFlag|=n}function un(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function dn(e,t,n,r=null){o(e,t,7,[n,r])}const hn=Ue();let fn=0;function pn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||hn,a={uid:fn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xe(s,o),emitsOptions:Ot(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Tt.bind(null,a),e.ce&&e.ce(a),a}let mn=null;const gn=()=>mn||T;let vn,yn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};vn=t("__VUE_INSTANCE_SETTERS__",(e=>mn=e)),yn=t("__VUE_SSR_SETTERS__",(e=>In=e))}const bn=e=>{const t=mn;return vn(e),e.scope.on(),()=>{e.scope.off(),vn(t)}},_n=()=>{mn&&mn.scope.off(),vn(null)};function wn(e){return 4&e.vnode.shapeFlag}let En,Sn,In=!1;function Tn(e,t=!1,n=!1){t&&yn(t);const{props:r,children:i}=e.vnode,s=wn(e);qe(e,r,s,t),st(e,i,n);const o=s?On(e,t):void 0;return t&&yn(!1),o}function On(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,_e);const{setup:o}=n;if(o){(0,r.C4)();const n=e.setupContext=o.length>1?An(e):null,c=bn(e),l=s(o,e,0,[e.props,n]),u=(0,i.yL)(l);if((0,r.bl)(),c(),!u&&!e.sp||H(e)||V(e),u){if(l.then(_n,_n),t)return l.then((n=>{kn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else kn(e,l,t)}else Rn(e,t)}function kn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Rn(e,n)}function Rn(e,t,n){const s=e.type;if(!e.render){if(!t&&En&&!s.render){const t=s.template||ke(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=En(t,c)}}e.render=s.render||i.tE,Sn&&Sn(e)}{const t=bn(e);(0,r.C4)();try{Se(e)}finally{(0,r.bl)(),t()}}}const Cn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function An(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Cn),slots:e.slots,emit:e.emit,expose:t}}function Pn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in ye?ye[n](e):void 0},has(e,t){return t in e||t in ye}})):e.proxy}function Nn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function xn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const Dn=(e,t)=>{const n=(0,r.EW)(e,t,In);return n};function Ln(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?Jt(t)?en(e,null,[t]):en(e,t):en(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Jt(n)&&(n=[n]),en(e,t,n))}const Mn="3.5.13"},743:function(e,t,n){n.d(t,{Am:function(){return x},FA:function(){return k},I9:function(){return D},Im:function(){return A},Ku:function(){return B},T9:function(){return E},Tj:function(){return w},Uj:function(){return a},XA:function(){return S},ZQ:function(){return l},bD:function(){return P},cY:function(){return I},eX:function(){return m},g:function(){return O},hp:function(){return L},jZ:function(){return u},lT:function(){return f},lV:function(){return h},sr:function(){return d},tD:function(){return M},u:function(){return c},zW:function(){return p}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;a||(h=64,s||(d=64)),r.push(n[l],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==u)throw Error();const d=t<<2|o>>4;if(r.push(d),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function h(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){try{return"object"===typeof indexedDB}catch(e){return!1}}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function g(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=()=>g().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},b=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},_=()=>{try{return v()||y()||b()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},w=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},E=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config},S=e=>{var t;return null===(t=_())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=T,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?R(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new O(r,o,n);return a}}function R(e,t){return e.replace(C,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(N(n)&&N(s)){if(!P(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function D(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function L(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){const n=new U(e,t);return n.subscribe.bind(n)}class U{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=j(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function j(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){return e&&e._delegate?e._delegate:e}},751:function(e,t,n){n.d(t,{Ef:function(){return q}});var r=n(641),i=n(33);n(953);
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:e=>e})}catch(J){}const a=s?e=>s.createHTML(e):e=>e,c="http://www.w3.org/2000/svg",l="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,d=u&&u.createElement("template"),h={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?u.createElementNS(c,e):"mathml"===t?u.createElementNS(l,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{d.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const i=d.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},f=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r.QP;function m(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const g=Symbol("_vod"),v=Symbol("_vsh");const y=Symbol("");const b=/(^|;)\s*display\s*:/;function _(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&E(r,t,"")}else for(const e in t)null==n[e]&&E(r,e,"");for(const e in n)"display"===e&&(o=!0),E(r,e,n[e])}else if(s){if(t!==n){const e=r[y];e&&(n+=";"+e),r.cssText=n,o=b.test(n)}}else t&&e.removeAttribute("style");g in e&&(e[g]=o?r.display:"",e[v]&&(r.display="none"))}const w=/\s*!important$/;function E(e,t,n){if((0,i.cy)(n))n.forEach((n=>E(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=T(e,t);w.test(n)?e.setProperty((0,i.Tg)(r),n.replace(w,""),"important"):e[r]=n}}const S=["Webkit","Moz","ms"],I={};function T(e,t){const n=I[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return I[t]=r;r=(0,i.ZH)(r);for(let i=0;i<S.length;i++){const n=S[i]+r;if(n in e)return I[t]=n}return t}const O="http://www.w3.org/1999/xlink";function k(e,t,n,r,s,o=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(O,t.slice(6,t.length)):e.setAttributeNS(O,t,n):null==n||o&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,i.Bm)(n)?String(n):n)}function R(e,t,n,r,s){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?e.getAttribute("value")||"":e.value,i=null==n?"checkbox"===e.type?"on":"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(J){0}c&&e.removeAttribute(s||t)}function C(e,t,n,r){e.addEventListener(t,n,r)}function A(e,t,n,r){e.removeEventListener(t,n,r)}const P=Symbol("_vei");function N(e,t,n,r,i=null){const s=e[P]||(e[P]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=D(t);if(r){const o=s[t]=j(r,i);C(e,n,o,a)}else o&&(A(e,n,o,a),s[t]=void 0)}}const x=/(?:Once|Passive|Capture)$/;function D(e){let t;if(x.test(e)){let n;t={};while(n=e.match(x))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let L=0;const M=Promise.resolve(),U=()=>L||(M.then((()=>L=0)),L=Date.now());function j(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(F(e,n.value),t,5,[e])};return n.value=e,n.attached=U(),n}function F(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const B=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$=(e,t,n,r,s,o)=>{const a="svg"===s;"class"===t?m(e,r,a):"style"===t?_(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||N(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):V(e,t,r,a))?(R(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||k(e,t,r,a,o,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,i.Kg)(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),k(e,t,r,a)):R(e,(0,i.PT)(t),r,o,t)};function V(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&B(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!B(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");Symbol("_assign");const W=(0,i.X$)({patchProp:$},h);let H;function z(){return H||(H=(0,r.K9)(W))}const q=(...e)=>{const t=z().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=G(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,K(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function K(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function G(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},928:function(e,t,n){n.d(t,{MF:function(){return me},j6:function(){return de},om:function(){return ue},Sx:function(){return ve},Wp:function(){return ge},KO:function(){return ye}});var r=n(125),i=n(424),s=n(743);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));h.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(S(this),t),E(d.get(this))}:function(...t){return E(e.apply(S(this),t))}:function(t,...n){const r=e.call(S(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function w(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&v(e),o(e,l())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const S=e=>m.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],k=new Map;function R(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}b((e=>({...e,get:(t,n,r)=>R(t,n)||e.get(t,n,r),has:(t,n)=>!!R(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(A(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function A(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",N="0.9.0",x=new i.Vy("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",j="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",$="@firebase/database",V="@firebase/database-compat",W="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",q="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",Z="@firebase/performance-compat",X="@firebase/remote-config",Q="@firebase/remote-config-compat",Y="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.15.0",se="[DEFAULT]",oe={[P]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[j]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[$]:"fire-rtdb",[V]:"fire-rtdb-compat",[W]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[q]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[Z]:"fire-perf-compat",[X]:"fire-rc",[Q]:"fire-rc-compat",[Y]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(ce.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.FA("app","Firebase",he);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=ie;function ge(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ce.values())c.addComponent(r);const l=new pe(n,i,c);return ae.set(o,l),l}function ve(e=se){const t=ae.get(e);if(!t&&e===se)return ge();if(!t)throw fe.create("no-app",{appName:e});return t}function ye(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}ue(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be="firebase-heartbeat-database",_e=1,we="firebase-heartbeat-store";let Ee=null;function Se(){return Ee||(Ee=I(be,_e,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(we)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Ie(e){try{const t=await Se();return t.transaction(we).objectStore(we).get(Oe(e))}catch(t){if(t instanceof s.g)x.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});x.warn(e.message)}}}async function Te(e,t){try{const n=await Se(),r=n.transaction(we,"readwrite"),i=r.objectStore(we);return await i.put(t,Oe(e)),r.done}catch(n){if(n instanceof s.g)x.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(e.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=1024,Re=2592e6;class Ce{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ne(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Re})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ae(),{heartbeatsToSend:t,unsentEntries:n}=Pe(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ae(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=ke){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),xe(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ne{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Te(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function xe(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){ue(new r.uA("platform-logger",(e=>new C(e)),"PRIVATE")),ue(new r.uA("heartbeat",(e=>new Ce(e)),"PRIVATE")),ye(P,N,e),ye(P,N,"esm2017"),ye("fire-js","")}De("")},953:function(e,t,n){n.d(t,{C4:function(){return I},EW:function(){return Ue},Gc:function(){return ve},IG:function(){return Te},IJ:function(){return Ae},KR:function(){return Ce},Kh:function(){return ge},Pr:function(){return Le},R1:function(){return xe},X2:function(){return l},bl:function(){return T},fE:function(){return Ee},g8:function(){return _e},hZ:function(){return M},i9:function(){return Re},ju:function(){return Se},lJ:function(){return Oe},qA:function(){return j},u4:function(){return L},ux:function(){return Ie},wB:function(){return Ve},yC:function(){return o}});var r=n(33);
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(){return i}const c=new WeakSet;class l{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,O(this),g(this);const e=s,t=E;s=this,E=!0;try{return this.fn()}finally{0,v(this),s=e,E=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)_(e);this.deps=this.depsTail=void 0,O(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let u,d,h=0;function f(e,t=!1){if(e.flags|=8,t)return e.next=d,void(d=e);e.next=u,u=e}function p(){h++}function m(){if(--h>0)return;if(d){let e=d;d=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(u){let n=u;u=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function g(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function v(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),_(r),w(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function y(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(b(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function b(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===k)return;e.globalVersion=k;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!y(e))return void(e.flags&=-3);const n=s,i=E;s=e,E=!0;try{g(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e._value=n,t.version++)}catch(o){throw t.version++,o}finally{s=n,E=i,v(e),e.flags&=-3}}function _(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)_(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function w(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let E=!0;const S=[];function I(){S.push(E),E=!1}function T(){const e=S.pop();E=void 0===e||e}function O(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=s;s=void 0;try{t()}finally{s=e}}}let k=0;class R{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class C{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!s||!E||s===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==s)t=this.activeLink=new R(s,this),s.deps?(t.prevDep=s.depsTail,s.depsTail.nextDep=t,s.depsTail=t):s.deps=s.depsTail=t,A(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=s.depsTail,t.nextDep=void 0,s.depsTail.nextDep=t,s.depsTail=t,s.deps===t&&(s.deps=e)}return t}trigger(e){this.version++,k++,this.notify(e)}notify(e){p();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{m()}}}function A(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)A(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const P=new WeakMap,N=Symbol(""),x=Symbol(""),D=Symbol("");function L(e,t,n){if(E&&s){let t=P.get(e);t||P.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new C),r.map=t,r.key=n),r.track()}}function M(e,t,n,i,s,o){const a=P.get(e);if(!a)return void k++;const c=e=>{e&&e.trigger()};if(p(),"clear"===t)a.forEach(c);else{const s=(0,r.cy)(e),o=s&&(0,r.yI)(n);if(s&&"length"===n){const e=Number(i);a.forEach(((t,n)=>{("length"===n||n===D||!(0,r.Bm)(n)&&n>=e)&&c(t)}))}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(D)),t){case"add":s?o&&c(a.get("length")):(c(a.get(N)),(0,r.CE)(e)&&c(a.get(x)));break;case"delete":s||(c(a.get(N)),(0,r.CE)(e)&&c(a.get(x)));break;case"set":(0,r.CE)(e)&&c(a.get(N));break}}m()}function U(e){const t=Ie(e);return t===e?t:(L(t,"iterate",D),Ee(e)?t:t.map(Oe))}function j(e){return L(e=Ie(e),"iterate",D),e}const F={__proto__:null,[Symbol.iterator](){return B(this,Symbol.iterator,Oe)},concat(...e){return U(this).concat(...e.map((e=>(0,r.cy)(e)?U(e):e)))},entries(){return B(this,"entries",(e=>(e[1]=Oe(e[1]),e)))},every(e,t){return V(this,"every",e,t,void 0,arguments)},filter(e,t){return V(this,"filter",e,t,(e=>e.map(Oe)),arguments)},find(e,t){return V(this,"find",e,t,Oe,arguments)},findIndex(e,t){return V(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return V(this,"findLast",e,t,Oe,arguments)},findLastIndex(e,t){return V(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return V(this,"forEach",e,t,void 0,arguments)},includes(...e){return H(this,"includes",e)},indexOf(...e){return H(this,"indexOf",e)},join(e){return U(this).join(e)},lastIndexOf(...e){return H(this,"lastIndexOf",e)},map(e,t){return V(this,"map",e,t,void 0,arguments)},pop(){return z(this,"pop")},push(...e){return z(this,"push",e)},reduce(e,...t){return W(this,"reduce",e,t)},reduceRight(e,...t){return W(this,"reduceRight",e,t)},shift(){return z(this,"shift")},some(e,t){return V(this,"some",e,t,void 0,arguments)},splice(...e){return z(this,"splice",e)},toReversed(){return U(this).toReversed()},toSorted(e){return U(this).toSorted(e)},toSpliced(...e){return U(this).toSpliced(...e)},unshift(...e){return z(this,"unshift",e)},values(){return B(this,"values",Oe)}};function B(e,t,n){const r=j(e),i=r[t]();return r===e||Ee(e)||(i._next=i.next,i.next=()=>{const e=i._next();return e.value&&(e.value=n(e.value)),e}),i}const $=Array.prototype;function V(e,t,n,r,i,s){const o=j(e),a=o!==e&&!Ee(e),c=o[t];if(c!==$[t]){const t=c.apply(e,s);return a?Oe(t):t}let l=n;o!==e&&(a?l=function(t,r){return n.call(this,Oe(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));const u=c.call(o,l,r);return a&&i?i(u):u}function W(e,t,n,r){const i=j(e);let s=n;return i!==e&&(Ee(e)?n.length>3&&(s=function(t,r,i){return n.call(this,t,r,i,e)}):s=function(t,r,i){return n.call(this,t,Oe(r),i,e)}),i[t](s,...r)}function H(e,t,n){const r=Ie(e);L(r,"iterate",D);const i=r[t](...n);return-1!==i&&!1!==i||!Se(n[0])?i:(n[0]=Ie(n[0]),r[t](...n))}function z(e,t,n=[]){I(),p();const r=Ie(e)[t].apply(e,n);return m(),T(),r}const q=(0,r.pD)("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm));function G(e){(0,r.Bm)(e)||(e=String(e));const t=Ie(this);return L(t,"has",e),t.hasOwnProperty(e)}class J{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?fe:he:s?de:ue).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){let e;if(o&&(e=F[t]))return e;if("hasOwnProperty"===t)return G}const a=Reflect.get(e,t,Re(e)?e:n);return((0,r.Bm)(t)?K.has(t):q(t))?a:(i||L(e,"get",t),s?a:Re(a)?o&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?ye(a):ge(a):a)}}class Z extends J{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=we(s);if(Ee(n)||we(n)||(s=Ie(s),n=Ie(n)),!(0,r.cy)(e)&&Re(s)&&!Re(n))return!t&&(s.value=n,!0)}const o=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,Re(e)?e:i);return e===Ie(i)&&(o?(0,r.$H)(n,s)&&M(e,"set",t,n,s):M(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&M(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&K.has(t)||L(e,"has",t),n}ownKeys(e){return L(e,"iterate",(0,r.cy)(e)?"length":N),Reflect.ownKeys(e)}}class X extends J{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Q=new Z,Y=new X,ee=new Z(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Ie(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),d=n?te:t?ke:Oe;return!t&&L(o,"iterate",l?x:N),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function se(e,t){const n={get(n){const i=this["__v_raw"],s=Ie(i),o=Ie(n);e||((0,r.$H)(n,o)&&L(s,"get",n),L(s,"get",o));const{has:a}=ne(s),c=t?te:e?ke:Oe;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const t=this["__v_raw"];return!e&&L(Ie(t),"iterate",N),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],i=Ie(n),s=Ie(t);return e||((0,r.$H)(t,s)&&L(i,"has",t),L(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=Ie(s),a=t?te:e?ke:Oe;return!e&&L(o,"iterate",N),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}};(0,r.X$)(n,e?{add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear")}:{add(e){t||Ee(e)||we(e)||(e=Ie(e));const n=Ie(this),r=ne(n),i=r.has.call(n,e);return i||(n.add(e),M(n,"add",e,e)),this},set(e,n){t||Ee(n)||we(n)||(n=Ie(n));const i=Ie(this),{has:s,get:o}=ne(i);let a=s.call(i,e);a||(e=Ie(e),a=s.call(i,e));const c=o.call(i,e);return i.set(e,n),a?(0,r.$H)(n,c)&&M(i,"set",e,n,c):M(i,"add",e,n),this},delete(e){const t=Ie(this),{has:n,get:r}=ne(t);let i=n.call(t,e);i||(e=Ie(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&M(t,"delete",e,void 0,s),o},clear(){const e=Ie(this),t=0!==e.size,n=void 0,r=e.clear();return t&&M(e,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach((r=>{n[r]=re(r,e,t)})),n}function oe(e,t){const n=se(e,t);return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const ae={get:oe(!1,!1)},ce={get:oe(!1,!0)},le={get:oe(!0,!1)};const ue=new WeakMap,de=new WeakMap,he=new WeakMap,fe=new WeakMap;function pe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function me(e){return e["__v_skip"]||!Object.isExtensible(e)?0:pe((0,r.Zf)(e))}function ge(e){return we(e)?e:be(e,!1,Q,ae,ue)}function ve(e){return be(e,!1,ee,ce,de)}function ye(e){return be(e,!0,Y,le,he)}function be(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=me(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function _e(e){return we(e)?_e(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function we(e){return!(!e||!e["__v_isReadonly"])}function Ee(e){return!(!e||!e["__v_isShallow"])}function Se(e){return!!e&&!!e["__v_raw"]}function Ie(e){const t=e&&e["__v_raw"];return t?Ie(t):e}function Te(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Oe=e=>(0,r.Gv)(e)?ge(e):e,ke=e=>(0,r.Gv)(e)?ye(e):e;function Re(e){return!!e&&!0===e["__v_isRef"]}function Ce(e){return Pe(e,!1)}function Ae(e){return Pe(e,!0)}function Pe(e,t){return Re(e)?e:new Ne(e,t)}class Ne{constructor(e,t){this.dep=new C,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Ie(e),this._value=t?e:Oe(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ee(e)||we(e);e=n?e:Ie(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Oe(e),this.dep.trigger())}}function xe(e){return Re(e)?e.value:e}const De={get:(e,t,n)=>"__v_raw"===t?e:xe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Le(e){return _e(e)?e:new Proxy(e,De)}class Me{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new C(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=k-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return f(this,!0),!0}get value(){const e=this.dep.track();return b(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ue(e,t,n=!1){let i,s;(0,r.Tn)(e)?i=e:(i=e.get,s=e.set);const o=new Me(i,s,n);return o}const je={},Fe=new WeakMap;let Be;function $e(e,t=!1,n=Be){if(n){let t=Fe.get(n);t||Fe.set(n,t=[]),t.push(e)}else 0}function Ve(e,t,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:c,augmentJob:u,call:d}=n,h=e=>s?e:Ee(e)||!1===s||0===s?We(e,1):We(e);let f,p,m,g,v=!1,y=!1;if(Re(e)?(p=()=>e.value,v=Ee(e)):_e(e)?(p=()=>h(e),v=!0):(0,r.cy)(e)?(y=!0,v=e.some((e=>_e(e)||Ee(e))),p=()=>e.map((e=>Re(e)?e.value:_e(e)?h(e):(0,r.Tn)(e)?d?d(e,2):e():void 0))):p=(0,r.Tn)(e)?t?d?()=>d(e,2):e:()=>{if(m){I();try{m()}finally{T()}}const t=Be;Be=f;try{return d?d(e,3,[g]):e(g)}finally{Be=t}}:r.tE,t&&s){const e=p,t=!0===s?1/0:s;p=()=>We(e(),t)}const b=a(),_=()=>{f.stop(),b&&b.active&&(0,r.TF)(b.effects,f)};if(o&&t){const e=t;t=(...t)=>{e(...t),_()}}let w=y?new Array(e.length).fill(je):je;const E=e=>{if(1&f.flags&&(f.dirty||e))if(t){const e=f.run();if(s||v||(y?e.some(((e,t)=>(0,r.$H)(e,w[t]))):(0,r.$H)(e,w))){m&&m();const n=Be;Be=f;try{const n=[e,w===je?void 0:y&&w[0]===je?[]:w,g];d?d(t,3,n):t(...n),w=e}finally{Be=n}}}else f.run()};return u&&u(E),f=new l(p),f.scheduler=c?()=>c(E,!1):E,g=e=>$e(e,!1,f),m=f.onStop=()=>{const e=Fe.get(f);if(e){if(d)d(e,4);else for(const t of e)t();Fe.delete(f)}},t?i?E(!0):w=f.run():c?c(E.bind(null,!0),!0):f.run(),_.pause=f.pause.bind(f),_.resume=f.resume.bind(f),_.stop=_,_}function We(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Re(e))We(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)We(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach((e=>{We(e,t,n)}));else if((0,r.Qd)(e)){for(const r in e)We(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&We(e[r],t,n)}return e}}}]);
//# sourceMappingURL=chunk-vendors.73e702e4.js.map