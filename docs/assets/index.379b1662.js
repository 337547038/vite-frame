import{d as Q,a as T,r as B,c as M,w as J,o as K,b as a,e as x,f as e,g as t,F as V,h as I,i as r,j as f,t as L,u as D,k as y,l as O,m as X,n,p as R,q as U,s as W,v as Y,K as Z,x as ee}from"./index.807ab3fa.js";const te=""+new URL("logo.03d6d6da.png",import.meta.url).href;const q=window.sessionStorage.getItem("tagViews");let z=[];q&&(z=JSON.parse(q));const $=Q("layout",{state:()=>({breadcrumb:[],tabs:z}),actions:{changeBreadcrumb(v){this.breadcrumb=v},setTabsViews(v){this.tabs=v,window.sessionStorage.setItem("tagViews",JSON.stringify(v))}}}),ne={class:"tag-tabs"},le={class:"tabs-label"},ae=T({__name:"tagViews",props:{navList:{default:()=>[]}},setup(v){const k=v,s=$(),l=O(),_=X(),u=B(),p=M(()=>(s==null?void 0:s.tabs)||[]),o=c=>{u.value=c,_.push({path:c})},d=(c,h,b)=>{const C=p.value.filter(m=>m.path!==c.path);if(h>0){const m=p.value[h-1].path;u.value=m,_.push({path:m})}else h===0&&_.push({path:"/"});s.setTabsViews(C),b.stopPropagation()},i=()=>{var h;if(console.log("route"),console.log(l.name),((h=l.meta)==null?void 0:h.keepAlive)===!1){u.value="";return}if(!p.value.some(b=>b.path===l.path)&&l.path!=="/"){let b="";k.navList.forEach(m=>{m.path===l.path&&(b=m.title)});const C=p.value;C.push({title:b,path:l.path,name:l.name}),s.setTabsViews(C)}u.value=l.path},w=()=>{_.push({path:"/"}),s.setTabsViews([])};return J(()=>l.path,()=>{i()}),K(()=>{i()}),(c,h)=>{var F;const b=n("el-tab-pane"),C=n("Close"),m=n("el-icon"),E=n("el-tabs");return a(),x("div",ne,[e(E,{modelValue:u.value,"onUpdate:modelValue":h[0]||(h[0]=g=>u.value=g),onTabChange:o},{default:t(()=>[e(b,{label:"\u9996\u9875",name:"/"}),(a(!0),x(V,null,I(D(p),(g,S)=>(a(),r(b,{key:g.path,label:g.title,name:g.path},{label:t(()=>[f("span",le,[f("span",null,L(g.title),1),e(m,{onClick:N=>d(g,S,N)},{default:t(()=>[e(C)]),_:2},1032,["onClick"])])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"]),((F=D(p))==null?void 0:F.length)>0?(a(),r(m,{key:0,onClick:w,class:"clear-tag",title:"\u6E05\u7A7A\u5168\u90E8"},{default:t(()=>[e(C)]),_:1})):y("",!0)])}}}),oe=T({__name:"menuItem",props:{data:{default:()=>[]}},setup(v){return(k,s)=>{const l=n("el-icon"),_=n("menu-item",!0),u=n("el-sub-menu"),p=n("el-menu-item");return a(!0),x(V,null,I(v.data,(o,d)=>(a(),x(V,{key:d},[o.children?(a(),r(u,{key:0,index:o.path||o.title+d},{title:t(()=>[e(l,null,{default:t(()=>[(a(),r(R(o.icon)))]),_:2},1024),f("span",null,L(o.title),1)]),default:t(()=>[e(_,{data:o.children},null,8,["data"])]),_:2},1032,["index"])):(a(),r(p,{key:1,index:o.path||o.title+d},{default:t(()=>[e(l,null,{default:t(()=>[(a(),r(R(o.icon)))]),_:2},1024),f("span",null,L(o.title),1)]),_:2},1032,["index"]))],64))),128)}}}),se=T({__name:"menu",props:{collapse:{type:Boolean}},emits:["getMenuList"],setup(v,{emit:k}){const s=X(),l=O(),_=$(),u=B([{title:"\u9996\u9875",path:"/",icon:"HomeFilled"},{title:"\u8868\u5355\u9875\u9762",path:"/form",icon:"location"},{title:"\u8868\u5355\u9875\u97622",path:"/form2",icon:"location"},{title:"\u5217\u8868\u9875\u9762",path:"/list",icon:"collection"},{title:"\u6D4B\u8BD5",path:"/test",icon:"collection"},{title:"\u7528\u6237\u7BA1\u7406",icon:"user",children:[{title:"\u65B0\u589E\u7528\u6237",path:"/test"},{title:"\u7528\u6237\u5217\u8868",children:[{title:"\u666E\u901A\u7528\u6237",path:"/test"},{title:"\u5408\u4F5C\u7528\u6237",path:"/test"},{title:"\u5408\u4F5C\u7528\u62372",path:"/test"}]}]},{title:"\u7CFB\u7EDF\u7BA1\u7406",icon:"setting",children:[{title:"\u7528\u6237\u7BA1\u7406",path:"/test"},{title:"\u89D2\u8272\u7BA1\u7406",path:"/test"},{title:"\u83DC\u5355\u7BA1\u7406",path:"/test"},{title:"\u767B\u5F55\u65E5\u5FD7",path:"/test"},{title:"\u64CD\u4F5C\u7BA1\u7406",path:"/test"}]}]),p=o=>{s.push({path:o})};return console.log(l),J(()=>l.path,()=>{u.value.forEach(o=>{o.path===l.path&&_.changeBreadcrumb([{label:o.title}])})}),K(()=>{k("getMenuList",u.value)}),(o,d)=>{const i=n("el-menu");return a(),r(i,{collapse:v.collapse,"active-text-color":"#ffd04b","background-color":"rgb(48 65 86)","text-color":"#fff",onSelect:p},{default:t(()=>[e(oe,{data:u.value},null,8,["data"])]),_:1},8,["collapse"])}}}),ue={class:"comm-header-tool"},ce={class:"header-right"},re={class:"header-avatar",style:{cursor:"pointer"}},ie={class:"name"},_e=f("span",{class:"title"},"\u4E2A\u4EBA\u4E2D\u5FC3",-1),pe=f("span",{class:"title"},"\u8BBE\u7F6E",-1),de=f("span",{class:"title"},"\u9000\u51FA\u767B\u5F55",-1),me=T({__name:"header",props:{collapse:{type:Boolean}},emits:["click"],setup(v,{emit:k}){const s=$(),l=M(()=>s==null?void 0:s.breadcrumb),_=B({name:"userName",avatar:""}),u=o=>{k("click",o)},p=()=>{console.log("logout")};return(o,d)=>{const i=n("Fold"),w=n("Expand"),c=n("el-icon"),h=n("el-breadcrumb-item"),b=n("el-breadcrumb"),C=n("RefreshRight"),m=n("FullScreen"),E=n("el-avatar"),F=n("arrow-down"),g=n("User"),S=n("el-menu-item"),N=n("Setting"),G=n("CircleClose"),H=n("el-menu"),P=n("el-dropdown");return a(),x(V,null,[e(c,{onClick:d[0]||(d[0]=A=>u("collapse")),class:"collapse-icon"},{default:t(()=>[v.collapse?(a(),r(w,{key:1})):(a(),r(i,{key:0}))]),_:1}),e(b,{separator:"/",class:"breadcrumb"},{default:t(()=>[e(h,{to:{path:"/"}},{default:t(()=>[U("\u9996\u9875")]),_:1}),(a(!0),x(V,null,I(D(l),(A,j)=>(a(),r(h,{key:j,to:{path:A.path}},{default:t(()=>[U(L(A.label),1)]),_:2},1032,["to"]))),128))]),_:1}),f("div",ue,[e(c,{onClick:d[1]||(d[1]=A=>u("refresh")),title:"\u5237\u65B0\u9875\u9762"},{default:t(()=>[e(C)]),_:1}),e(c,{title:"\u5168\u5C4F"},{default:t(()=>[e(m,{onClick:d[2]||(d[2]=A=>u("fullScreen"))})]),_:1})]),f("div",ce,[e(P,null,{dropdown:t(()=>[e(H,{class:"avatar-menu"},{default:t(()=>[e(S,null,{default:t(()=>[e(c,null,{default:t(()=>[e(g)]),_:1}),_e]),_:1}),e(S,null,{default:t(()=>[e(c,null,{default:t(()=>[e(N)]),_:1}),pe]),_:1}),e(S,{onClick:p},{default:t(()=>[e(c,null,{default:t(()=>[e(G)]),_:1}),de]),_:1})]),_:1})]),default:t(()=>[f("div",re,[e(E,{class:"avatar",size:"small",shape:"circle",src:_.value.avatar},null,8,["src"]),f("span",ie,L(_.value.name),1),e(c,{class:"el-icon--right"},{default:t(()=>[e(F)]),_:1})])]),_:1})])],64)}}});const he={class:"logo"},fe=f("img",{src:te},null,-1),be=T({__name:"index",setup(v){const k=$(),s=B(!1),l=B(!1),_=B(!0),u=B([]),p=i=>{i==="collapse"&&(s.value=!s.value),i==="fullScreen"&&(l.value=!l.value),i==="refresh"&&(_.value=!1,ee(()=>{_.value=!0}))},o=i=>{u.value=i},d=M(()=>{const i=k==null?void 0:k.tabs;if(i){const w=[];return i.forEach(c=>{w.push(c.name)}),w}return[]});return(i,w)=>{const c=n("el-aside"),h=n("el-header"),b=n("router-view"),C=n("el-main"),m=n("el-container"),E=n("Close"),F=n("el-icon");return a(),r(m,{class:"common-layout"},{default:t(()=>[l.value?y("",!0):(a(),r(c,{key:0,width:s.value?"64px":"220px",class:"common-sidebar"},{default:t(()=>[f("div",he,[fe,W(f("span",null,"XX\u7BA1\u7406\u7CFB\u7EDF",512),[[Y,!s.value]])]),e(se,{collapse:s.value,onGetMenuList:o},null,8,["collapse"])]),_:1},8,["width"])),e(m,{class:"common-container"},{default:t(()=>[l.value?y("",!0):(a(),r(h,{key:0,class:"common-header"},{default:t(()=>[e(me,{onClick:p,collapse:s.value},null,8,["collapse"])]),_:1})),l.value?y("",!0):(a(),r(ae,{key:1,navList:u.value},null,8,["navList"])),e(C,{class:"common-main"},{default:t(()=>[_.value?(a(),r(b,{key:0},{default:t(({Component:g})=>[(a(),r(Z,{include:D(d)},[(a(),r(R(g)))],1032,["include"]))]),_:1})):y("",!0)]),_:1})]),_:1}),l.value?(a(),r(F,{key:1,class:"quit-full",onClick:w[0]||(w[0]=g=>p("fullScreen")),title:"\u9000\u51FA\u5168\u5C4F"},{default:t(()=>[e(E)]),_:1})):y("",!0)]),_:1})}}});export{be as default};
