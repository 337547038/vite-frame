var ke=Object.defineProperty,Fe=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var se=(t,e,r)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ie=(t,e)=>{for(var r in e||(e={}))Me.call(e,r)&&se(t,r,e[r]);if(ae)for(var r of ae(e))Ie.call(e,r)&&se(t,r,e[r]);return t},oe=(t,e)=>Fe(t,He(e));import{d as ge,B as ze,o as Je,e as C,f as U,g as V,l as W,h as x,i as w,C as ue,F as Ve,j as We,y as le,m as $,k as Xe,D as Ke,p as X,t as Ce,z as Ge,r as ce}from"./index.b2668844.js";import{b as fe}from"./route-block.67f66939.js";var Y={exports:{}},xe=function(e,r){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(r,n)}},Ye=xe,E=Object.prototype.toString;function Q(t){return Array.isArray(t)}function K(t){return typeof t=="undefined"}function Qe(t){return t!==null&&!K(t)&&t.constructor!==null&&!K(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Re(t){return E.call(t)==="[object ArrayBuffer]"}function Ze(t){return E.call(t)==="[object FormData]"}function et(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Re(t.buffer),e}function tt(t){return typeof t=="string"}function rt(t){return typeof t=="number"}function _e(t){return t!==null&&typeof t=="object"}function D(t){if(E.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function nt(t){return E.call(t)==="[object Date]"}function at(t){return E.call(t)==="[object File]"}function st(t){return E.call(t)==="[object Blob]"}function Oe(t){return E.call(t)==="[object Function]"}function it(t){return _e(t)&&Oe(t.pipe)}function ot(t){return E.call(t)==="[object URLSearchParams]"}function ut(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function lt(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Z(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),Q(t))for(var r=0,a=t.length;r<a;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function G(){var t={};function e(n,s){D(t[s])&&D(n)?t[s]=G(t[s],n):D(n)?t[s]=G({},n):Q(n)?t[s]=n.slice():t[s]=n}for(var r=0,a=arguments.length;r<a;r++)Z(arguments[r],e);return t}function ct(t,e,r){return Z(e,function(n,s){r&&typeof n=="function"?t[s]=Ye(n,r):t[s]=n}),t}function ft(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var h={isArray:Q,isArrayBuffer:Re,isBuffer:Qe,isFormData:Ze,isArrayBufferView:et,isString:tt,isNumber:rt,isObject:_e,isPlainObject:D,isUndefined:K,isDate:nt,isFile:at,isBlob:st,isFunction:Oe,isStream:it,isURLSearchParams:ot,isStandardBrowserEnv:lt,forEach:Z,merge:G,extend:ct,trim:ut,stripBOM:ft},_=h;function de(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Pe=function(e,r,a){if(!r)return e;var n;if(a)n=a(r);else if(_.isURLSearchParams(r))n=r.toString();else{var s=[];_.forEach(r,function(l,p){l===null||typeof l=="undefined"||(_.isArray(l)?p=p+"[]":l=[l],_.forEach(l,function(c){_.isDate(c)?c=c.toISOString():_.isObject(c)&&(c=JSON.stringify(c)),s.push(de(p)+"="+de(c))}))}),n=s.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},dt=h;function B(){this.handlers=[]}B.prototype.use=function(e,r,a){return this.handlers.push({fulfilled:e,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};B.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};B.prototype.forEach=function(e){dt.forEach(this.handlers,function(a){a!==null&&e(a)})};var pt=B,ht=h,mt=function(e,r){ht.forEach(e,function(n,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[s])})},$e=function(e,r,a,n,s){return e.config=r,a&&(e.code=a),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vt=$e,Ae=function(e,r,a,n,s){var o=new Error(e);return vt(o,r,a,n,s)},bt=Ae,yt=function(e,r,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):r(bt("Request failed with status code "+a.status,a.config,null,a.request,a))},T=h,wt=T.isStandardBrowserEnv()?function(){return{write:function(r,a,n,s,o,u){var l=[];l.push(r+"="+encodeURIComponent(a)),T.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),T.isString(s)&&l.push("path="+s),T.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Et=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},St=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},gt=Et,Ct=St,xt=function(e,r){return e&&!gt(r)?Ct(e,r):r},M=h,Rt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],_t=function(e){var r={},a,n,s;return e&&M.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),a=M.trim(u.substr(0,s)).toLowerCase(),n=M.trim(u.substr(s+1)),a){if(r[a]&&Rt.indexOf(a)>=0)return;a==="set-cookie"?r[a]=(r[a]?r[a]:[]).concat([n]):r[a]=r[a]?r[a]+", "+n:n}}),r},pe=h,Ot=pe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function n(s){var o=s;return e&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=n(window.location.href),function(o){var u=pe.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function ee(t){this.message=t}ee.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};ee.prototype.__CANCEL__=!0;var q=ee,L=h,Pt=yt,$t=wt,Nt=Pe,At=xt,Tt=_t,Lt=Ot,I=Ae,Ut=Ne,Dt=q,he=function(e){return new Promise(function(a,n){var s=e.data,o=e.headers,u=e.responseType,l;function p(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}L.isFormData(s)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(c+":"+v)}var f=At(e.baseURL,e.url);i.open(e.method.toUpperCase(),Nt(f,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function A(){if(!!i){var b="getAllResponseHeaders"in i?Tt(i.getAllResponseHeaders()):null,R=!u||u==="text"||u==="json"?i.responseText:i.response,g={data:R,status:i.status,statusText:i.statusText,headers:b,config:e,request:i};Pt(function(H){a(H),p()},function(H){n(H),p()},g),i=null}}if("onloadend"in i?i.onloadend=A:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(A)},i.onabort=function(){!i||(n(I("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(I("Network Error",e,null,i)),i=null},i.ontimeout=function(){var R=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",g=e.transitional||Ut;e.timeoutErrorMessage&&(R=e.timeoutErrorMessage),n(I(R,e,g.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",i)),i=null},L.isStandardBrowserEnv()){var S=(e.withCredentials||Lt(f))&&e.xsrfCookieName?$t.read(e.xsrfCookieName):void 0;S&&(o[e.xsrfHeaderName]=S)}"setRequestHeader"in i&&L.forEach(o,function(R,g){typeof s=="undefined"&&g.toLowerCase()==="content-type"?delete o[g]:i.setRequestHeader(g,R)}),L.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),u&&u!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(b){!i||(n(!b||b&&b.type?new Dt("canceled"):b),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null),i.send(s)})},d=h,me=mt,jt=$e,Bt=Ne,qt={"Content-Type":"application/x-www-form-urlencoded"};function ve(t,e){!d.isUndefined(t)&&d.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function kt(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=he),t}function Ft(t,e,r){if(d.isString(t))try{return(e||JSON.parse)(t),d.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(t)}var k={transitional:Bt,adapter:kt(),transformRequest:[function(e,r){return me(r,"Accept"),me(r,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)?e:d.isArrayBufferView(e)?e.buffer:d.isURLSearchParams(e)?(ve(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):d.isObject(e)||r&&r["Content-Type"]==="application/json"?(ve(r,"application/json"),Ft(e)):e}],transformResponse:[function(e){var r=this.transitional||k.transitional,a=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||n&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?jt(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],function(e){k.headers[e]={}});d.forEach(["post","put","patch"],function(e){k.headers[e]=d.merge(qt)});var te=k,Ht=h,Mt=te,It=function(e,r,a){var n=this||Mt;return Ht.forEach(a,function(o){e=o.call(n,e,r)}),e},Te=function(e){return!!(e&&e.__CANCEL__)},be=h,z=It,zt=Te,Jt=te,Vt=q;function J(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Vt("canceled")}var Wt=function(e){J(e),e.headers=e.headers||{},e.data=z.call(e,e.data,e.headers,e.transformRequest),e.headers=be.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),be.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Jt.adapter;return r(e).then(function(n){return J(e),n.data=z.call(e,n.data,n.headers,e.transformResponse),n},function(n){return zt(n)||(J(e),n&&n.response&&(n.response.data=z.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},m=h,Le=function(e,r){r=r||{};var a={};function n(i,c){return m.isPlainObject(i)&&m.isPlainObject(c)?m.merge(i,c):m.isPlainObject(c)?m.merge({},c):m.isArray(c)?c.slice():c}function s(i){if(m.isUndefined(r[i])){if(!m.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],r[i])}function o(i){if(!m.isUndefined(r[i]))return n(void 0,r[i])}function u(i){if(m.isUndefined(r[i])){if(!m.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,r[i])}function l(i){if(i in r)return n(e[i],r[i]);if(i in e)return n(void 0,e[i])}var p={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return m.forEach(Object.keys(e).concat(Object.keys(r)),function(c){var v=p[c]||s,f=v(c);m.isUndefined(f)&&v!==l||(a[c]=f)}),a},Ue={version:"0.26.1"},Xt=Ue.version,re={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){re[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});var ye={};re.transitional=function(e,r,a){function n(s,o){return"[Axios v"+Xt+"] Transitional option '"+s+"'"+o+(a?". "+a:"")}return function(s,o,u){if(e===!1)throw new Error(n(o," has been removed"+(r?" in "+r:"")));return r&&!ye[o]&&(ye[o]=!0,console.warn(n(o," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(s,o,u):!0}};function Kt(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var a=Object.keys(t),n=a.length;n-- >0;){var s=a[n],o=e[s];if(o){var u=t[s],l=u===void 0||o(u,s,t);if(l!==!0)throw new TypeError("option "+s+" must be "+l);continue}if(r!==!0)throw Error("Unknown option "+s)}}var Gt={assertOptions:Kt,validators:re},De=h,Yt=Pe,we=pt,Ee=Wt,F=Le,je=Gt,O=je.validators;function N(t){this.defaults=t,this.interceptors={request:new we,response:new we}}N.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=F(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var a=r.transitional;a!==void 0&&je.assertOptions(a,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(r)===!1||(s=s&&f.synchronous,n.unshift(f.fulfilled,f.rejected))});var o=[];this.interceptors.response.forEach(function(f){o.push(f.fulfilled,f.rejected)});var u;if(!s){var l=[Ee,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(r);l.length;)u=u.then(l.shift(),l.shift());return u}for(var p=r;n.length;){var i=n.shift(),c=n.shift();try{p=i(p)}catch(v){c(v);break}}try{u=Ee(p)}catch(v){return Promise.reject(v)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};N.prototype.getUri=function(e){return e=F(this.defaults,e),Yt(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};De.forEach(["delete","get","head","options"],function(e){N.prototype[e]=function(r,a){return this.request(F(a||{},{method:e,url:r,data:(a||{}).data}))}});De.forEach(["post","put","patch"],function(e){N.prototype[e]=function(r,a,n){return this.request(F(n||{},{method:e,url:r,data:a}))}});var Qt=N,Zt=q;function P(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(a){if(!!r._listeners){var n,s=r._listeners.length;for(n=0;n<s;n++)r._listeners[n](a);r._listeners=null}}),this.promise.then=function(a){var n,s=new Promise(function(o){r.subscribe(o),n=o}).then(a);return s.cancel=function(){r.unsubscribe(n)},s},t(function(n){r.reason||(r.reason=new Zt(n),e(r.reason))})}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};P.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};P.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};P.source=function(){var e,r=new P(function(n){e=n});return{token:r,cancel:e}};var er=P,tr=function(e){return function(a){return e.apply(null,a)}},rr=h,nr=function(e){return rr.isObject(e)&&e.isAxiosError===!0},Se=h,ar=xe,j=Qt,sr=Le,ir=te;function Be(t){var e=new j(t),r=ar(j.prototype.request,e);return Se.extend(r,j.prototype,e),Se.extend(r,e),r.create=function(n){return Be(sr(t,n))},r}var y=Be(ir);y.Axios=j;y.Cancel=q;y.CancelToken=er;y.isCancel=Te;y.VERSION=Ue.version;y.all=function(e){return Promise.all(e)};y.spread=tr;y.isAxiosError=nr;Y.exports=y;Y.exports.default=y;var or=Y.exports;const ne=or.create({baseURL:"http://localhost:3001",timeout:6e3,headers:{}});ne.interceptors.request.use(t=>t,t=>{Promise.reject(t)});ne.interceptors.response.use(t=>t,t=>Promise.reject(t));const ur={tableList:"/get/table/list"},lr=(t,e,r={})=>{const a=Object.assign({url:ur[t],method:"POST",data:e},r);return ne(a)},cr={class:"table-comm"},fr={class:"search-box"},dr=["innerHTML"],pr=W("i",{class:"icon-help"},null,-1),hr=ge({props:{tableProps:null,columns:null,search:null,api:null,tableList:{default:()=>[]},beforeRequest:null,afterResponse:null},setup(t){const e=t,r=ze({tableData:[],currentPage:1,total:10,pageSize:10}),a=o=>{const u={};o&&Object.assign(u,o),typeof e.beforeRequest=="function"&&Object.assign(u,e.beforeRequest()),e.api?lr(e.api,u).then(l=>{typeof e.afterResponse=="function"?r.tableData=e.afterResponse(l):r.tableData=l.list}).catch(()=>{}):r.tableData=e.tableList},n=()=>{},s=()=>{};return Je(()=>{a()}),(o,u)=>{const l=C("el-form"),p=C("el-tooltip"),i=C("el-table-column"),c=C("el-table"),v=C("el-pagination");return U(),V("div",cr,[W("div",fr,[x(l,{inline:!0},{default:w(()=>[ue(o.$slots,"_searchForm")]),_:3})]),x(c,le({stripe:!0,data:$(r).tableData},t.tableProps),{default:w(()=>[(U(!0),V(Ve,null,We(t.columns,(f,A)=>(U(),Xe(i,Ge(le({key:A},f)),Ke({_:2},[f.help?{name:"header",fn:w(S=>[X(Ce(S.column.label)+" ",1),x(p,{placement:"top"},{content:w(()=>[W("span",{innerHTML:f.help},null,8,dr)]),default:w(()=>[pr]),_:2},1024)])}:void 0,o.$slots[f.prop]?{name:"default",fn:w(S=>[ue(o.$slots,f.prop,{row:S.row,$index:S.$index})])}:void 0]),1040))),128))]),_:3},16,["data"]),x(v,{currentPage:$(r).currentPage,"onUpdate:currentPage":u[0]||(u[0]=f=>$(r).currentPage=f),"page-sizes":[10,20,30,40],"page-size":$(r).pageSize,layout:"sizes, prev, pager, next, jumper",total:$(r).total,onSizeChange:n,onCurrentChange:s},null,8,["currentPage","page-size","total"])])}}});var mr=hr;const vr={name:"List01"};var br=ge(oe(ie({},vr),{setup(t){const e=ce([{prop:"date",label:"Date",width:150},{prop:"name",label:"Name"},{prop:"sex",label:"Sex",width:160,formatter:a=>x(C("el-tag"),null,{default:()=>[X(" "),a.sex]})},{prop:"control",label:"\u64CD\u4F5C"}]),r=ce([{date:"2022-02-22",name:"\u5F20\u4E09",sex:"\u7537"},{date:"2022-02-22",name:"\u674E\u56DB",sex:"\u5973"}]);return(a,n)=>{const s=C("el-button");return U(),V("div",null,[x(mr,{columns:e.value,tableList:r.value},{control:w(o=>[x(s,null,{default:w(()=>[X("\u5220\u9664"+Ce(o.row.name),1)]),_:2},1024)]),_:1},8,["columns","tableList"])])}}}));typeof fe=="function"&&fe(br);export{br as default};
