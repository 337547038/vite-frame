import{_ as g}from"./test.vue_vue_type_script_setup_true_lang.f19c2b3c.js";import{a as C,r as s,y as h,b as A,e as y,f as n,g as i,q as e,F as v,n as t,m as c}from"./index.80351a2e.js";import{b as p}from"./route-block.78efdbad.js";const k=t("br",null,null,-1),x=t("br",null,null,-1),D=t("br",null,null,-1),I=t("br",null,null,-1),V=t("br",null,null,-1),w=t("br",null,null,-1),P=t("br",null,null,-1),R=t("br",null,null,-1),q=t("p",null,null,-1),O={name:"Form"},$=C({...O,setup(N){const d=s([{type:"input",name:"text",formItem:{label:"\u7528\u6237\u540D"},control:{modelValue:"12",placeholder:"\u8BF7\u8F93\u5165",onChange:u=>{console.log(u)}},config:{linkValue:'$.select==="2"',linkResult:"disabled"}},{type:"input",name:"password",formItem:{label:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"change"}]},control:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},{type:"input",name:"password2",formItem:{label:"\u786E\u8BA4\u5BC6\u7801",rules:[{message:"\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4",trigger:"change",validator:(u,a,l)=>{const r=o.value.getValue();a!==r.password?l(new Error("Two inputs don't match!")):l()}}]},control:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"}},{type:"input",name:"textC",formItem:{label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",customRules:[{type:"required",message:"\u5FC5\u586B\u9879",trigger:"blur"},{type:"phone"}]},control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165"},config:{linkValue:'$.select!=="1"'}},{type:"select",name:"select",formItem:{label:"\u8054\u52A8\u4E8B\u4EF6",rules:[{required:!0,message:"Please select Activity zone",trigger:"change"}]},control:{options:[{value:"0",label:"\u4E0D\u8BBE\u7F6E"},{value:"1",label:"\u9690\u85CF\u81EA\u5B9A\u4E49\u6821\u9A8C\u7EC4\u4EF6"},{value:"2",label:"\u7981\u7528\u7528\u6237\u540D\u8F93\u5165"}]}},{type:"radio",name:"radio",formItem:{label:"\u5355\u9009\u7EC4\u56FA\u5B9A\u503C"},control:{options:[{value:"0",label:"\u7537"},{value:"1",label:"\u5973"}]},config:{optionsKey:!1}},{type:"radio",name:"radio2",formItem:{label:"URL\u83B7\u53D6Options"},control:{options:[]},config:{url:"./mock/options.json",method:"get",params:{},afterResponse:u=>u}},{type:"radio",name:"radio3",formItem:{label:"\u5173\u8054\u7528\u6237\u540D"},control:{options:[]},config:{url:"./mock/options.json?name=${text}",method:"get",params:{},afterResponse:u=>u}},{type:"radio",name:"radio4",formItem:{label:"\u4ECE\u63A5\u53E3dict\u5339\u914D"},control:{options:[]},config:{optionsKey:"checkbox"}},{type:"datePicker",name:"datePicker",formItem:{label:"datePicker"},control:{placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"}},{type:"component",name:"component",component:h(g),control:{placeholder:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"}},{type:"title",title:"div\u5E03\u5C40",control:{}},{type:"div",control:{},list:[{type:"input",name:"textDiv",formItem:{label:"div1"},control:{}},{type:"input",name:"textDiv2",formItem:{label:"div2"},control:{}}]}]),B=s({rules:{name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}]}}),_=u=>{console.log(u)},E=()=>({id:"id12121"}),o=s(),F=()=>{o.value.setValue({text:"abc",password:"123",select:"1",textC:"\u81EA\u5B9A\u4E49\u6821\u9A8C\u521D\u59CB\u503C"})},f=()=>{o.value.setOptions({radio:[{value:"0",label:"\u7537"}],radio2:{0:"setOption"}})},b=(u,a)=>{};return(u,a)=>{const l=c("el-alert"),r=c("ak-form"),m=c("el-button");return A(),y(v,null,[n(l,{type:"success"},{default:i(()=>[e(" \u5B9E\u73B0\u529F\u80FD\uFF1A"),k,e(" 1.\u5B9E\u73B0\u8054\u52A8\u9690\u85CF\u663E\u793A\u6216\u7981\u7528\u542F\u7528\uFF1B"),x,e(" 2.\u5B9E\u73B0\u63A5\u53E3\u6570\u636E\u521D\u59CB\u586B\u5145\uFF1B"),D,e(" 3.\u5B9E\u73B0\u6570\u636E\u63D0\u4EA4\uFF1B"),I,e(" 4.\u5B9E\u73B0\u5E38\u89C1\u7C7B\u578B\u5FEB\u901F\u6821\u9A8C\uFF1B"),V,e(" 5.\u5B9E\u73B0radio\u7B49\u7C7B\u9009\u9879\u6570\u636E\u52A8\u6001\u83B7\u53D6/\u5B57\u5178\u5339\u914D\uFF1B"),w,e(" 6.\u5B9E\u73B0\u52A8\u6001\u8054\u52A8\u8BF7\u6C42\uFF1B"),P,e(" 7.\u5B9E\u73B0div\u5E03\u5C40\uFF1B"),R]),_:1}),q,n(r,{data:d.value,formProps:B.value,onSubmit:_,submitApi:"formSubmit",beforeSubmit:E,onChange:b,getApi:"getFormContent",ref_key:"autoFormEl",ref:o},null,8,["data","formProps"]),n(m,{onClick:F},{default:i(()=>[e("setValue")]),_:1}),n(m,{onClick:f},{default:i(()=>[e("setOptions")]),_:1})],64)}}});typeof p=="function"&&p($);export{$ as default};