import{a as z,r as D,w as V,c as F,e as r,f as a,k as u,i as d,z as c,g as i,j as p,q as b,t as k,F as v,p as I,m as j,B as q,C as E}from"./index.2cc539a9.js";const N=z({props:{formItem:null,control:null,type:{default:"input"},modelValue:null,setValue:null},emits:["update:modelValue"],setup(l,{emit:y}){const m=l,o=D(m.modelValue);V(()=>m.modelValue,()=>{o.value=m.modelValue}),V(()=>o.value,f=>{y("update:modelValue",f)}),V(()=>m.setValue,()=>{o.value=m.setValue});const g=F(()=>`el-${m.type}`);return(f,n)=>{const x=r("el-checkbox"),C=r("el-checkbox-group"),B=r("el-radio"),U=r("el-radio-group"),w=r("el-option"),P=r("el-select"),_=r("el-form-item");return a(),u(_,q(E(l.formItem)),{default:d(()=>[l.type==="checkbox"?(a(),u(C,c({key:0},l.control,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=e=>o.value=e)}),{default:d(()=>{var e;return[(a(!0),i(v,null,p((e=l.control)==null?void 0:e.options,(t,s)=>(a(),u(x,c(t,{key:s,label:t.value||t.label}),{default:d(()=>[b(k(t.label),1)]),_:2},1040,["label"]))),128))]}),_:1},16,["modelValue"])):l.type==="radio"?(a(),u(U,c({key:1},l.control,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=e=>o.value=e)}),{default:d(()=>{var e;return[(a(!0),i(v,null,p((e=l.control)==null?void 0:e.options,(t,s)=>(a(),u(B,c(l.control,{key:s,label:t.value}),{default:d(()=>[b(k(t.label),1)]),_:2},1040,["label"]))),128))]}),_:1},16,["modelValue"])):l.type==="select"?(a(),u(P,c({key:2},l.control,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=e=>o.value=e)}),{default:d(()=>{var e;return[(a(!0),i(v,null,p((e=l.control)==null?void 0:e.options,(t,s)=>(a(),u(w,{key:s,label:t.label,value:t.value},null,8,["label","value"]))),128))]}),_:1},16,["modelValue"])):(a(),u(I(j(g)),c({key:3},l.control,{modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=e=>o.value=e)}),null,16,["modelValue"]))]),_:1},16)}}});var R={};export{N as _,R as b};
