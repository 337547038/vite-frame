import{d as m,r as c,m as h,f,b as i,o as y,g as k,e as n,w as o,h as e,p as t,t as g,T as v,F as w}from"./index-DdK8bCNS.js";import{_ as x}from"./inputTest.vue_vue_type_script_setup_true_lang-xx9u2Ojp.js";const E=t("br",null,null,-1),V=t("br",null,null,-1),T=t("br",null,null,-1),B=t("br",null,null,-1),L=t("br",null,null,-1),C=t("br",null,null,-1),D=t("br",null,null,-1),F=t("br",null,null,-1),N=t("br",null,null,-1),A=t("br",null,null,-1),M={class:"common-main"},$=m({__name:"index",setup(P){const u=c([{type:"selection"},{label:"序号",type:"index",width:80},{prop:"diy",label:"自定义筛选",show:!1,search:{type:"component",component:h(x)}},{prop:"name",label:"昵称",search:{placeholder:"请输入"}},{prop:"name2",label:"列表不显示",show:!1},{prop:"sex",label:"性别",render:"switch",attr:{inlinePrompt:!0,activeValue:1,inactiveValue:0,activeText:"男",inactiveText:"女"},search:{type:"radio",options:[{value:0,label:"男"}]}},{prop:"src",label:"图片地址",render:"image",attr:{width:"120px",height:"90px"},search:!1},{prop:"date",label:"Date",width:150,help:"可快速将接口的各种形式的时间值格式化",render:"date",search:{type:"datePicker"}},{prop:"status",label:"状态",render:"tag",replaceValue:{1:"启用",0:"禁用"},custom:{1:"success",0:"danger"},search:{type:"select",options:[{value:"0",label:"禁用"}]}},{prop:"type",label:"类型"},{label:"操作",render:"buttons",buttons:[{key:"edit",click:l=>{console.log("click")}},{label:"设置",tooltip:"设置",disabled:l=>l.status===1},{key:"del",tooltip:"del",popConfirm:{confirmButtonType:"danger"},display:l=>!0,disabled:l=>l.status===1,click:()=>{console.log("click")}}]}]),d=(l,a)=>(console.log("beforeEvent",l),a),p=(l,a)=>{console.log("afterEvent",l)},s=c();return f(()=>{s.value.setFormValue({name:"123",diy:"diy"})}),(l,a)=>{const _=i("el-alert"),r=i("el-button");return y(),k(w,null,[n(_,{type:"success"},{default:o(()=>[e(" 实现功能："),E,e(" 1.将常见渲染类型如switch,image,date,tag等进行可配置化，无需要自定义slot"),V,e(" 2.集成条件筛选；"),T,e(" 3.集成分页组件；"),B,e(" 4.集成列表数据接口请求功能；"),L,e(" 5.无需重复复制组件el-table-column；"),C,e(" 6.集成横向滚动条固定在浏览器底部(鼠标移到表格区域可见滚动条固定于底部)；"),D,e(" 7.快速设置表头帮助信息；"),F,e(" 8.常见增删查改按钮封装；"),N,e(" ..."),A,e(" 无需重复代码，快速实现表格数据渲染。更多使用配置详见 /components/list/README.md ")]),_:1}),t("div",M,[n(v,{ref_key:"tableListEl",ref:s,pk:"id",columns:u.value,api:{list:"tableList",edit:"tableList"},before:d,after:p,controlBtn:[{key:"add"},{key:"edit"},{key:"del"},{label:"导入"}]},{name:o(b=>[e(g(b.row.name),1)]),btnAppend:o(()=>[n(r,null,{default:o(()=>[e("测试")]),_:1}),n(r,null,{default:o(()=>[e("测试2")]),_:1})]),_:1},8,["columns"])])],64)}}});export{$ as default};