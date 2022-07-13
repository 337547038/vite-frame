var b=Object.defineProperty,z=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var $=(n,a,t)=>a in n?b(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,x=(n,a)=>{for(var t in a||(a={}))F.call(a,t)&&$(n,t,a[t]);if(I)for(var t of I(a))S.call(a,t)&&$(n,t,a[t]);return n},B=(n,a)=>z(n,E(a));import{d as C,b as h,e as c,o as i,c as f,h as s,f as e,F as w,j as A,_ as y,w as V,g as l,r as D,t as N,n as _,i as v,a as r}from"./index.b3e42029.js";const P=C({setup(n){const a=h("\u521D\u59CB\u9ED8\u8BA4\u503C");return(t,p)=>{const o=c("ak-input");return i(),f(w,null,[s("p",null,[e(o)]),s("p",null,[e(o,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"})]),s("p",null,[e(o,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=d=>a.value=d)},null,8,["modelValue"])]),s("p",null,[e(o,{placeholder:"\u7981\u7528\u72B6\u6001",disabled:!0})])],64)}}}),M={setup(n){const a=h("");return(t,p)=>{const o=c("ak-input");return i(),A(o,{placeholder:"\u8BD5\u7740\u8F93\u5165\u4E9B\u4EC0\u4E48\u770B\u770B",modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=d=>a.value=d),clear:!0},null,8,["modelValue"])}}},U=C({setup(n){const a=h("");return(t,p)=>{const o=c("ak-input");return i(),A(o,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=d=>a.value=d),showEye:!0,type:"password"},null,8,["modelValue"])}}}),T={};function G(n,a){const t=c("ak-input");return i(),f(w,null,[s("p",null,[e(t,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9","prefix-icon":"icon-user"})]),s("p",null,[e(t,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9","suffix-icon":"icon-search"})])],64)}var J=y(T,[["render",G]]);const K={},L=l("CM"),O=l("http://");function Q(n,a){const t=c("ak-input");return i(),f(w,null,[s("p",null,[e(t,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},{append:V(()=>[L]),_:1})]),s("p",null,[e(t,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},{prepend:V(()=>[O]),_:1})])],64)}var W=y(K,[["render",Q]]);const X={};function Y(n,a){const t=c("ak-input");return i(),f(w,null,[s("p",null,[e(t,{placeholder:"\u9ED8\u8BA4\u5C3A\u5BF8",size:"large"})]),s("p",null,[e(t,{placeholder:"\u9ED8\u8BA4\u5C3A\u5BF8"})]),s("p",null,[e(t,{placeholder:"sixe=small",size:"small"})]),s("p",null,[e(t,{placeholder:"sixe=mini",size:"mini"})])],64)}var Z=y(X,[["render",Y]]);const R=C({components:{vdpv_0:P,vdpv_1:M,vdpv_2:U,vdpv_3:J,vdpv_4:W,vdpv_5:Z},setup(n){const a=h(),t=h(),p=h(),o=h(),d=h(),k=h(),q=[a,t,p,o,d,k],u=D({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0,vdpv_5Height:0});return B(x({toggleCode:g=>{const j="vdpv_"+g;u[j+"Height"]===0?u[j+"Height"]=(q[g].value?q[g].value.offsetHeight:0)||0:u[j+"Height"]=0}},N(u)),{vdpv_0Ref:a,vdpv_1Ref:t,vdpv_2Ref:p,vdpv_3Ref:o,vdpv_4Ref:d,vdpv_5Ref:k})}});R.$vd={matter:{},toc:[{content:"Input \u8F93\u5165\u6846",anchor:"input-\u8F93\u5165\u6846",level:1},{content:"\u57FA\u672C\u4F7F\u7528",anchor:"\u57FA\u672C\u4F7F\u7528",level:3},{content:"\u663E\u793A\u6E05\u7A7A\u6309\u94AE",anchor:"\u663E\u793A\u6E05\u7A7A\u6309\u94AE",level:3},{content:"\u53EF\u663E\u793A\u5BC6\u7801\u660E\u6587",anchor:"\u53EF\u663E\u793A\u5BC6\u7801\u660E\u6587",level:3},{content:"\u6DFB\u52A0\u524D\u540E\u7F00Icon",anchor:"\u6DFB\u52A0\u524D\u540E\u7F00icon",level:3},{content:"\u590D\u5408\u578B\u8F93\u5165\u6846",anchor:"\u590D\u5408\u578B\u8F93\u5165\u6846",level:3},{content:"\u8BBE\u7F6E\u5927\u5C0F",anchor:"\u8BBE\u7F6E\u5927\u5C0F",level:3},{content:"API",anchor:"api",level:2},{content:"Input Props",anchor:"input-props",level:3},{content:"Input Slots",anchor:"input-slots",level:3}]};const ss=R,as={class:"vuedoc"},ns=r('<h1 id="input-\u8F93\u5165\u6846" data-source-line="1"><a class="markdownIt-Anchor" href="#input-\u8F93\u5165\u6846">#</a> Input \u8F93\u5165\u6846</h1><h3 id="\u57FA\u672C\u4F7F\u7528" data-source-line="3"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u4F7F\u7528">#</a> \u57FA\u672C\u4F7F\u7528</h3><pre style="display:none;"></pre>',3),ts={class:"vuedoc-demo"},ls={class:"vuedoc-demo__inner"},es={class:"vuedoc-demo__preview"},ps={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},os=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;defaultValue&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u7981\u7528\u72B6\u6001&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> defaultValue = ref(<span class="hljs-string">&#39;\u521D\u59CB\u9ED8\u8BA4\u503C&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),cs=[os],ds=s("h3",{id:"\u663E\u793A\u6E05\u7A7A\u6309\u94AE","data-source-line":"19"},[s("a",{class:"markdownIt-Anchor",href:"#\u663E\u793A\u6E05\u7A7A\u6309\u94AE"},"#"),l(" \u663E\u793A\u6E05\u7A7A\u6309\u94AE")],-1),hs=s("p",{"data-source-line":"21"},[l("\u8BBE\u7F6E"),s("code",null,'clear="true"'),l("\uFF0C\u5728\u8F93\u5165\u6846\u4E0D\u4E3A\u7A7A\u65F6\u663E\u793A\u6E05\u7A7A\u6309\u94AE")],-1),rs=s("pre",{style:{display:"none"}},null,-1),is={class:"vuedoc-demo"},us={class:"vuedoc-demo__inner"},_s={class:"vuedoc-demo__preview"},vs={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},gs=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BD5\u7740\u8F93\u5165\u4E9B\u4EC0\u4E48\u770B\u770B&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;valueClear&quot;</span>
    <span class="hljs-attr">:clear</span>=<span class="hljs-string">&quot;true&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> valueClear = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),js=[gs],ms=s("h3",{id:"\u53EF\u663E\u793A\u5BC6\u7801\u660E\u6587","data-source-line":"38"},[s("a",{class:"markdownIt-Anchor",href:"#\u53EF\u663E\u793A\u5BC6\u7801\u660E\u6587"},"#"),l(" \u53EF\u663E\u793A\u5BC6\u7801\u660E\u6587")],-1),fs=s("p",{"data-source-line":"40"},[s("code",null,'type="password'),l("\u65F6\u8BBE\u7F6E"),s("code",null,'showEye="true"'),l("\u53EF\u663E\u793A\u5BC6\u7801\u660E\u6587")],-1),ks=s("pre",{style:{display:"none"}},null,-1),qs={class:"vuedoc-demo"},ws={class:"vuedoc-demo__inner"},ys={class:"vuedoc-demo__preview"},Cs={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},Hs=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">:showEye</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">const</span> value = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),Is=[Hs],$s=s("h3",{id:"\u6DFB\u52A0\u524D\u540E\u7F00icon","data-source-line":"58"},[s("a",{class:"markdownIt-Anchor",href:"#\u6DFB\u52A0\u524D\u540E\u7F00icon"},"#"),l(" \u6DFB\u52A0\u524D\u540E\u7F00Icon")],-1),xs=s("p",{"data-source-line":"60"},[l("\u53EF\u4EE5\u901A\u8FC7 "),s("code",null,"prefix-icon"),l(" \u548C "),s("code",null,"suffix-icon"),l(" \u5C5E\u6027\u5728 input \u7EC4\u4EF6\u9996\u90E8\u548C\u5C3E\u90E8\u589E\u52A0\u663E\u793A\u56FE\u6807\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot "),s("code",null,"prefix"),l(" \u548C "),s("code",null,"suffix"),l(" \u6765\u653E\u7F6E\u56FE\u6807\u3002")],-1),Bs=s("pre",{style:{display:"none"}},null,-1),Vs={class:"vuedoc-demo"},As={class:"vuedoc-demo__inner"},Rs={class:"vuedoc-demo__preview"},bs={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},zs=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span> <span class="hljs-attr">prefix-icon</span>=<span class="hljs-string">&quot;icon-user&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span> <span class="hljs-attr">suffix-icon</span>=<span class="hljs-string">&quot;icon-search&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

</span></code></pre></div>`,1),Es=[zs],Fs=s("h3",{id:"\u590D\u5408\u578B\u8F93\u5165\u6846","data-source-line":"74"},[s("a",{class:"markdownIt-Anchor",href:"#\u590D\u5408\u578B\u8F93\u5165\u6846"},"#"),l(" \u590D\u5408\u578B\u8F93\u5165\u6846")],-1),Ss=s("p",{"data-source-line":"76"},"\u53EF\u524D\u7F6E\u6216\u540E\u7F6E\u5143\u7D20\uFF0C\u4E00\u822C\u4E3A\u6807\u7B7E\u6216\u6309\u94AE",-1),Ds=s("pre",{style:{display:"none"}},null,-1),Ns={class:"vuedoc-demo"},Ps={class:"vuedoc-demo__inner"},Ms={class:"vuedoc-demo__preview"},Us={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},Ts=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">append</span>&gt;</span>CM<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prepend</span>&gt;</span>http://<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ak-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

</span></code></pre></div>`,1),Gs=[Ts],Js=s("h3",{id:"\u8BBE\u7F6E\u5927\u5C0F","data-source-line":"94"},[s("a",{class:"markdownIt-Anchor",href:"#\u8BBE\u7F6E\u5927\u5C0F"},"#"),l(" \u8BBE\u7F6E\u5927\u5C0F")],-1),Ks=s("p",{"data-source-line":"96"},[l("\u652F\u6301 "),s("code",null,"large"),l("\u3001"),s("code",null,"normal"),l("\u3001"),s("code",null,"small"),l("\u3001"),s("code",null,"mini"),l(" \u56DB\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A normal")],-1),Ls=s("pre",{style:{display:"none"}},null,-1),Os={class:"vuedoc-demo"},Qs={class:"vuedoc-demo__inner"},Ws={class:"vuedoc-demo__preview"},Xs={ref:"vdpv_5Ref",class:"vuedoc-demo__sourceref"},Ys=r(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u9ED8\u8BA4\u5C3A\u5BF8&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u9ED8\u8BA4\u5C3A\u5BF8&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;sixe=small&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ak-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;sixe=mini&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

</span></code></pre></div>`,1),Zs=[Ys],sa=r('<h2 id="api" data-source-line="108"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="input-props" data-source-line="110"><a class="markdownIt-Anchor" href="#input-props">#</a> Input Props</h3><table data-source-line="112"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>any</td><td>\u8F93\u5165\u6846\u7684\u503C</td></tr><tr><td>clear</td><td>boolean/false</td><td>\u663E\u793A\u6E05\u7A7A\u6309\u94AE</td></tr><tr><td>showEye</td><td>boolean/false</td><td>\u5BC6\u7801\u6846\u663E\u793A\u660E\u6587\u5207\u6362</td></tr><tr><td>width</td><td>string</td><td>\u8BBE\u7F6E\u5BBD\u5EA6\u5C5E\u6027</td></tr><tr><td>size</td><td>string</td><td>\u652F\u6301 <code>large</code>\u3001<code>normal</code>\u3001<code>small</code>\u3001<code>mini</code> \u56DB\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A <code>normal</code></td></tr><tr><td>prefixIcon</td><td>string</td><td>\u524D\u7F00icon\u56FE\u6807</td></tr><tr><td>suffixIcon</td><td>string</td><td>\u540E\u7F00icon\u56FE\u6807</td></tr><tr><td>-</td><td></td><td>\u5176\u5B83\u539F\u751F\u6240\u6709\u5C5E\u6027</td></tr></tbody></table><h3 id="input-slots" data-source-line="123"><a class="markdownIt-Anchor" href="#input-slots">#</a> Input Slots</h3><table data-source-line="125"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>prepend</td><td>\u8F93\u5165\u6846\u524D\u7F6E\u5185\u5BB9</td></tr><tr><td>append</td><td>\u8F93\u5165\u6846\u540E\u7F6E\u5185\u5BB9</td></tr><tr><td>prefix</td><td>\u524D\u7F00icon\u56FE\u6807</td></tr><tr><td>suffix</td><td>\u540E\u7F00icon\u56FE\u6807</td></tr></tbody></table>',5);function aa(n,a,t,p,o,d){const k=c("vdpv_0"),q=c("vdpv_1"),u=c("vdpv_2"),H=c("vdpv_3"),g=c("vdpv_4"),j=c("vdpv_5");return i(),f("div",as,[ns,s("div",ts,[s("div",ls,[s("div",es,[e(k)]),s("div",{style:_({height:n.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[s("div",ps,cs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[0]||(a[0]=m=>n.toggleCode(0))},v(n.vdpv_0Height>0?"hidden":"show"),1)])]),ds,hs,rs,s("div",is,[s("div",us,[s("div",_s,[e(q)]),s("div",{style:_({height:n.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[s("div",vs,js,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=m=>n.toggleCode(1))},v(n.vdpv_1Height>0?"hidden":"show"),1)])]),ms,fs,ks,s("div",qs,[s("div",ws,[s("div",ys,[e(u)]),s("div",{style:_({height:n.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[s("div",Cs,Is,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=m=>n.toggleCode(2))},v(n.vdpv_2Height>0?"hidden":"show"),1)])]),$s,xs,Bs,s("div",Vs,[s("div",As,[s("div",Rs,[e(H)]),s("div",{style:_({height:n.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[s("div",bs,Es,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=m=>n.toggleCode(3))},v(n.vdpv_3Height>0?"hidden":"show"),1)])]),Fs,Ss,Ds,s("div",Ns,[s("div",Ps,[s("div",Ms,[e(g)]),s("div",{style:_({height:n.vdpv_4Height+"px"}),class:"vuedoc-demo__source"},[s("div",Us,Gs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=m=>n.toggleCode(4))},v(n.vdpv_4Height>0?"hidden":"show"),1)])]),Js,Ks,Ls,s("div",Os,[s("div",Qs,[s("div",Ws,[e(j)]),s("div",{style:_({height:n.vdpv_5Height+"px"}),class:"vuedoc-demo__source"},[s("div",Xs,Zs,512)],4),s("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=m=>n.toggleCode(5))},v(n.vdpv_5Height>0?"hidden":"show"),1)])]),sa])}var la=y(ss,[["render",aa]]);export{la as default};
