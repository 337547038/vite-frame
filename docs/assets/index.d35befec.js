import{a as h,r as o,b as g,e as x,f as n,g as s,q as e,t as y,n as t,m as a}from"./index.1b5212cd.js";import{b as c}from"./route-block.78efdbad.js";const w=t("br",null,null,-1),v=t("br",null,null,-1),C=t("br",null,null,-1),D=t("br",null,null,-1),k=t("br",null,null,-1),B=t("br",null,null,-1),N=t("br",null,null,-1),R=t("br",null,null,-1),S=t("br",null,null,-1),T=t("br",null,null,-1),q=t("p",null,null,-1),V={name:"List01"},I=h({...V,setup(L){const r=o({btnText:["\u67E5\u8BE2","\u6E05\u7A7A"]}),u=o([{prop:"date",label:"Date",width:250,help:"\u53EF\u5FEB\u901F\u5C06\u63A5\u53E3\u7684\u5404\u79CD\u5F62\u5F0F\u7684\u65F6\u95F4\u503C\u683C\u5F0F\u5316",formatTime:"dateTime"},{prop:"name",label:"Name",width:250},{prop:"sex",label:"Sex",tag:{0:"info",1:"success"},dict:{0:"\u5973",1:"\u7537"},width:150},{prop:"status",label:"\u72B6\u6001",dict:{1:"\u7981\u7528",2:"\u542F\u7528"},width:150},{prop:"type",label:"\u7C7B\u578B",tag:{1:"info",2:"success",3:"danger"},dict:"type",width:150},{prop:"control",label:"\u64CD\u4F5C",width:250}]),i=o([{type:"input",name:"name",formItem:{label:"input2"},control:{placeholder:"\u8BF7\u8F93\u5165"}},{type:"select",name:"select",formItem:{label:"select"},control:{options:[{value:"\u9009\u98791",label:"\u9EC4\u91D1\u7CD5"},{value:"\u9009\u98792",label:"\u53CC\u76AE\u5976"}]}}]),_=l=>(console.log(l),l),p=l=>(console.log(l),l.list);return(l,E)=>{const d=a("el-alert"),m=a("el-button"),b=a("ak-list");return g(),x("div",null,[n(d,{type:"success"},{default:s(()=>[e(" \u5B9E\u73B0\u529F\u80FD\uFF1A"),w,e(" 1.\u5C06\u540E\u7AEF\u63A5\u53E3\u5E38\u89C1\u65F6\u95F4\u7C7B\u578B\u5FEB\u901F\u683C\u5F0F\u5316\u65F6\u95F4\uFF0C\u89C1Date\u5217\uFF1B"),v,e(" 2.\u4F7F\u7528tag\u6807\u7B7E\u663E\u793A\uFF0C\u540C\u65F6\u4F7F\u7528dict\u5B57\u5178\u8FDB\u884C\u6570\u636E\u8F6C\u6362\uFF0C\u89C1Sex\u548C\u7C7B\u578B\u5217\uFF1B"),C,e(" 3.\u4F7F\u7528dict\u5B57\u5178\u8FDB\u884C\u6570\u636E\u8F6C\u6362\uFF0C\u5982\u72B6\u6001\u5217\uFF1B"),D,e(" 4.\u96C6\u6210\u6761\u4EF6\u7B5B\u9009\uFF1B"),k,e(" 5.\u96C6\u6210\u5206\u9875\u7EC4\u4EF6\uFF1B"),B,e(" 6.\u96C6\u6210\u5217\u8868\u6570\u636E\u63A5\u53E3\u8BF7\u6C42\u529F\u80FD\uFF1B"),N,e(" 7.\u65E0\u9700\u91CD\u590D\u590D\u5236\u7EC4\u4EF6el-table-column\uFF1B"),R,e(" 8.\u96C6\u6210\u6A2A\u5411\u6EDA\u52A8\u6761\u56FA\u5B9A\u5728\u6D4F\u89C8\u5668\u5E95\u90E8(\u5C0F\u5C4F\u65F6\u9F20\u6807\u79FB\u5230\u8868\u683C\u533A\u57DF\u53EF\u89C1\u6EDA\u52A8\u6761\u56FA\u5B9A\u4E8E\u5E95\u90E8)\uFF1B"),S,e(" 9.\u5FEB\u901F\u8BBE\u7F6E\u8868\u5934\u5E2E\u52A9\u4FE1\u606F\uFF1B"),T]),_:1}),q,n(b,{columns:u.value,searchData:i.value,formConfig:r.value,apiKey:"tableList",fixedBottomScroll:!0,beforeRequest:_,afterResponse:p,dict:{type1:{1:"\u7C7B\u578B11",2:"\u7C7B\u578B21",3:"\u7C7B\u578B31"}}},{control:s(f=>[n(m,null,{default:s(()=>[e("\u5220\u9664"+y(f.row.name),1)]),_:2},1024)]),_:1},8,["columns","searchData","formConfig"])])}}});typeof c=="function"&&c(I);export{I as default};
