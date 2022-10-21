import b from"./test.081d3cbb.js";import{a as C,r as s,z as A,b as h,e as y,f as n,g as i,q as u,F as v,j as t,n as m}from"./index.66e36694.js";import{b as p}from"./route-block.78efdbad.js";const D=t("br",null,null,-1),k=t("br",null,null,-1),x=t("br",null,null,-1),I=t("br",null,null,-1),V=t("br",null,null,-1),w=t("br",null,null,-1),P=t("br",null,null,-1),q=t("br",null,null,-1),R=t("p",null,null,-1),O={name:"Form"},j=C({...O,setup(N){const d=s([{type:"input",name:"text",formItem:{label:"\u7528\u6237\u540D"},control:{modelValue:"12",placeholder:"\u8BF7\u8F93\u5165",onChange:e=>{console.log(e)}},config:{linkValue:'$.select==="2"',linkResult:"disabled"}},{type:"input",name:"password",formItem:{label:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"change"}]},control:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"}},{type:"input",name:"password2",formItem:{label:"\u786E\u8BA4\u5BC6\u7801",rules:[{message:"\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4",trigger:"change",validator:(e,r,l)=>{const a=o.value.getValue();r!==a.password?l(new Error("Two inputs don't match!")):l()}}]},control:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"}},{type:"input",name:"textC",formItem:{label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",customRules:[{type:"required",message:"\u5FC5\u586B\u9879",trigger:"blur"},{type:"phone"}]},control:{modelValue:"",placeholder:"\u8BF7\u8F93\u5165"},config:{linkValue:'$.select!=="1"'}},{type:"select",name:"select",formItem:{label:"\u8054\u52A8\u4E8B\u4EF6",rules:[{required:!0,message:"Please select Activity zone",trigger:"change"}]},control:{options:[{value:"0",label:"\u4E0D\u8BBE\u7F6E"},{value:"1",label:"\u9690\u85CF\u81EA\u5B9A\u4E49\u6821\u9A8C\u7EC4\u4EF6"},{value:"2",label:"\u7981\u7528\u7528\u6237\u540D\u8F93\u5165"}]}},{type:"radio",name:"radio",formItem:{label:"\u5355\u9009\u7EC4\u56FA\u5B9A\u503C"},control:{options:[{value:"0",label:"\u7537"},{value:"1",label:"\u5973"}]},config:{optionsKey:!1}},{type:"radio",name:"radio2",formItem:{label:"URL\u83B7\u53D6Options"},control:{options:[]},config:{url:"./mock/options.json",method:"get",params:{},afterResponse:e=>e}},{type:"radio",name:"radio3",formItem:{label:"\u5173\u8054\u7528\u6237\u540D"},control:{options:[]},config:{url:"./mock/options.json?name=${text}",method:"get",params:{},afterResponse:e=>e}},{type:"radio",name:"radio4",formItem:{label:"\u4ECE\u63A5\u53E3dict\u5339\u914D"},control:{options:[]},config:{optionsKey:"checkbox"}},{type:"datePicker",name:"datePicker",formItem:{label:"datePicker"},control:{placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"}},{type:"component",name:"component",component:A(b),control:{placeholder:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},formItem:{label:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",rules:[{required:!0,message:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",trigger:"change"}]}},{type:"title",title:"div\u5E03\u5C40",control:{}},{type:"div",control:{},list:[{type:"input",name:"textDiv",formItem:{label:"div1"},control:{}},{type:"input",name:"textDiv2",formItem:{label:"div2"},control:{}}]}]),B=s({rules:{name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}]}}),E=e=>{console.log(e)},F=()=>({id:"id12121"}),o=s(),f=()=>{o.value.setValue({text:"abc",password:"123",select:"1",textC:"\u81EA\u5B9A\u4E49\u6821\u9A8C\u521D\u59CB\u503C"})},_=()=>{o.value.setOptions({radio:[{value:"0",label:"\u7537"}],radio2:{0:"setOption"}})},g=(e,r)=>{};return(e,r)=>{const l=m("el-alert"),a=m("ak-form"),c=m("el-button");return h(),y(v,null,[n(l,{type:"success"},{default:i(()=>[u(" \u5B9E\u73B0\u529F\u80FD\uFF1A"),D,u(" 1.\u5B9E\u73B0\u8054\u52A8\u9690\u85CF\u663E\u793A\u6216\u7981\u7528\u542F\u7528\uFF1B"),k,u(" 2.\u5B9E\u73B0\u63A5\u53E3\u6570\u636E\u521D\u59CB\u586B\u5145\uFF1B"),x,u(" 3.\u5B9E\u73B0\u6570\u636E\u63D0\u4EA4\uFF1B"),I,u(" 4.\u5B9E\u73B0\u5E38\u89C1\u7C7B\u578B\u5FEB\u901F\u6821\u9A8C\uFF1B"),V,u(" 5.\u5B9E\u73B0radio\u7B49\u7C7B\u9009\u9879\u6570\u636E\u52A8\u6001\u83B7\u53D6/\u5B57\u5178\u5339\u914D\uFF1B"),w,u(" 6.\u5B9E\u73B0\u52A8\u6001\u8054\u52A8\u8BF7\u6C42\uFF1B"),P,u(" 7.\u5B9E\u73B0div\u5E03\u5C40\uFF1B"),q,u(" \u4EE5\u4E0A\u529F\u80FD\u4EC5\u9700\u4E00\u6BB5json\u4EE3\u7801\uFF0C\u65E0\u9700\u91CD\u590D\u7684el-form-item,el-input..\u7B49\u7B49 ")]),_:1}),R,n(a,{data:d.value,formProps:B.value,onSubmit:E,submitApi:"formSubmit",beforeSubmit:F,onChange:g,getApi:"getFormContent",ref_key:"autoFormEl",ref:o},null,8,["data","formProps"]),n(c,{onClick:f},{default:i(()=>[u("setValue")]),_:1}),n(c,{onClick:_},{default:i(()=>[u("setOptions")]),_:1})],64)}}});typeof p=="function"&&p(j);export{j as default};
