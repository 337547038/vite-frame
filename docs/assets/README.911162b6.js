var C=Object.defineProperty,$=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var q=(t,s,e)=>s in t?C(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,y=(t,s)=>{for(var e in s||(s={}))A.call(s,e)&&q(t,e,s[e]);if(w)for(var e of w(s))R.call(s,e)&&q(t,e,s[e]);return t},H=(t,s)=>$(t,b(s));import{d as u,b as p,e as d,o as g,c as f,f as c,j as I,_ as B,r as D,t as S,h as a,n as m,i as j,a as i,g as h}from"./index.b3e42029.js";const E=u({setup(t){const s=p("");return(e,n)=>{const l=d("ak-textarea");return g(),f("div",null,[c(l,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=o=>s.value=o),placeholder:"placeholder"},null,8,["modelValue"])])}}}),T=u({setup(t){const s=p("\u4E0D\u80FD\u8F93\u5165");return(e,n)=>{const l=d("ak-textarea");return g(),f("div",null,[c(l,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=o=>s.value=o),placeholder:"placeholder",disabled:"disabled"},null,8,["modelValue"])])}}}),F=u({setup(t){const s=p("\u8F93\u5165\u4E9B\u6587\u5B57\u56DE\u8F66\u6362\u884C\u8BD5\u8BD5");return(e,n)=>{const l=d("ak-textarea");return g(),I(l,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=o=>s.value=o),placeholder:"placeholder"},null,8,["modelValue"])}}}),N=u({setup(t){const s=p("");return(e,n)=>{const l=d("ak-textarea");return g(),f("div",null,[c(l,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=o=>s.value=o),placeholder:"placeholder",maxlength:10,showWordLimit:""},null,8,["modelValue"])])}}}),V=u({components:{vdpv_0:E,vdpv_1:T,vdpv_2:F,vdpv_3:N},setup(t){const s=p(),e=p(),n=p(),l=p(),o=[s,e,n,l],r=D({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0});return H(y({toggleCode:v=>{const _="vdpv_"+v;r[_+"Height"]===0?r[_+"Height"]=(o[v].value?o[v].value.offsetHeight:0)||0:r[_+"Height"]=0}},S(r)),{vdpv_0Ref:s,vdpv_1Ref:e,vdpv_2Ref:n,vdpv_3Ref:l})}});V.$vd={matter:{},toc:[{content:"Textarea \u6587\u672C\u6846",anchor:"textarea-\u6587\u672C\u6846",level:1},{content:"\u57FA\u672C\u7528\u6CD5",anchor:"\u57FA\u672C\u7528\u6CD5",level:3},{content:"\u7981\u7528",anchor:"\u7981\u7528",level:3},{content:"\u81EA\u52A8\u9AD8",anchor:"\u81EA\u52A8\u9AD8",level:3},{content:"\u663E\u793A\u8F93\u5165\u5B57\u6570",anchor:"\u663E\u793A\u8F93\u5165\u5B57\u6570",level:3},{content:"API",anchor:"api",level:2},{content:"Textarea",anchor:"textarea",level:3}]};const U=V,L={class:"vuedoc"},W=i('<h1 id="textarea-\u6587\u672C\u6846" data-source-line="3"><a class="markdownIt-Anchor" href="#textarea-\u6587\u672C\u6846">#</a> Textarea \u6587\u672C\u6846</h1><h3 id="\u57FA\u672C\u7528\u6CD5" data-source-line="5"><a class="markdownIt-Anchor" href="#\u57FA\u672C\u7528\u6CD5">#</a> \u57FA\u672C\u7528\u6CD5</h3><pre style="display:none;"></pre>',3),P={class:"vuedoc-demo"},z={class:"vuedoc-demo__inner"},M={class:"vuedoc-demo__preview"},G={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},J=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),K=[J],O=a("h3",{id:"\u7981\u7528","data-source-line":"21"},[a("a",{class:"markdownIt-Anchor",href:"#\u7981\u7528"},"#"),h(" \u7981\u7528")],-1),Q=a("pre",{style:{display:"none"}},null,-1),X={class:"vuedoc-demo"},Y={class:"vuedoc-demo__inner"},Z={class:"vuedoc-demo__preview"},ss={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},as=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>
      <span class="hljs-attr">disabled</span>=<span class="hljs-string">&quot;disabled&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;\u4E0D\u80FD\u8F93\u5165&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),ts=[as],es=a("h3",{id:"\u81EA\u52A8\u9AD8","data-source-line":"41"},[a("a",{class:"markdownIt-Anchor",href:"#\u81EA\u52A8\u9AD8"},"#"),h(" \u81EA\u52A8\u9AD8")],-1),ns=a("pre",{style:{display:"none"}},null,-1),ls={class:"vuedoc-demo"},os={class:"vuedoc-demo__inner"},ps={class:"vuedoc-demo__preview"},ds={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},cs=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;\u8F93\u5165\u4E9B\u6587\u5B57\u56DE\u8F66\u6362\u884C\u8BD5\u8BD5&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>


</span></code></pre></div>`,1),rs=[cs],hs=a("h3",{id:"\u663E\u793A\u8F93\u5165\u5B57\u6570","data-source-line":"56"},[a("a",{class:"markdownIt-Anchor",href:"#\u663E\u793A\u8F93\u5165\u5B57\u6570"},"#"),h(" \u663E\u793A\u8F93\u5165\u5B57\u6570")],-1),is=a("p",{"data-source-line":"57"},[h("\u5728\u4F7F\u7528 "),a("code",null,"maxlength"),h(" \u5C5E\u6027\u9650\u5236\u6700\u5927\u8F93\u5165\u957F\u5EA6\u7684\u540C\u65F6\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E "),a("code",null,"show-word-limit"),h(" \u5C5E\u6027\u6765\u5C55\u793A\u5B57\u6570\u7EDF\u8BA1")],-1),vs=a("pre",{style:{display:"none"}},null,-1),_s={class:"vuedoc-demo"},us={class:"vuedoc-demo__inner"},gs={class:"vuedoc-demo__preview"},ms={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},js=i(`<div class="vuedoc__code"><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ak-textarea</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;textarea1&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;placeholder&quot;</span>
      <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;10&quot;</span>
      <span class="hljs-attr">showWordLimit</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span> <span class="hljs-attr">setup</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

  <span class="hljs-keyword">const</span> textarea1 = ref(<span class="hljs-string">&#39;&#39;</span>)
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</span></code></pre></div>`,1),fs=[js],xs=i('<h2 id="api" data-source-line="77"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="textarea" data-source-line="79"><a class="markdownIt-Anchor" href="#textarea">#</a> Textarea</h3><table data-source-line="81"><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>String</td><td>\u7ED1\u5B9A\u7684\u503C</td></tr><tr><td>autoHeight</td><td>boolean/true</td><td>\u81EA\u52A8\u9AD8</td></tr><tr><td>width</td><td>String</td><td>\u8981\u5E26\u5355\u4F4Dpx/%</td></tr><tr><td>height</td><td>String</td><td>\u8981\u5E26\u5355\u4F4Dpx</td></tr><tr><td>maxHeight</td><td>String</td><td>\u6700\u5927\u9AD8\u5EA6</td></tr><tr><td>showWordLimit</td><td>boolena/false</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u6700\u5927\u8F93\u5165\u957F\u5EA6</td></tr><tr><td>maxlength</td><td>number</td><td>\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1</td></tr></tbody></table>',3);function ks(t,s,e,n,l,o){const r=d("vdpv_0"),k=d("vdpv_1"),v=d("vdpv_2"),_=d("vdpv_3");return g(),f("div",L,[W,a("div",P,[a("div",z,[a("div",M,[c(r)]),a("div",{style:m({height:t.vdpv_0Height+"px"}),class:"vuedoc-demo__source"},[a("div",G,K,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[0]||(s[0]=x=>t.toggleCode(0))},j(t.vdpv_0Height>0?"hidden":"show"),1)])]),O,Q,a("div",X,[a("div",Y,[a("div",Z,[c(k)]),a("div",{style:m({height:t.vdpv_1Height+"px"}),class:"vuedoc-demo__source"},[a("div",ss,ts,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[1]||(s[1]=x=>t.toggleCode(1))},j(t.vdpv_1Height>0?"hidden":"show"),1)])]),es,ns,a("div",ls,[a("div",os,[a("div",ps,[c(v)]),a("div",{style:m({height:t.vdpv_2Height+"px"}),class:"vuedoc-demo__source"},[a("div",ds,rs,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[2]||(s[2]=x=>t.toggleCode(2))},j(t.vdpv_2Height>0?"hidden":"show"),1)])]),hs,is,vs,a("div",_s,[a("div",us,[a("div",gs,[c(_)]),a("div",{style:m({height:t.vdpv_3Height+"px"}),class:"vuedoc-demo__source"},[a("div",ms,fs,512)],4),a("div",{class:"vuedoc-demo__footer",onClick:s[3]||(s[3]=x=>t.toggleCode(3))},j(t.vdpv_3Height>0?"hidden":"show"),1)])]),xs])}var ys=B(U,[["render",ks]]);export{ys as default};
