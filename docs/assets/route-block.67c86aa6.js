import{d as D,r as F,q as V,s as I,b as r,c as a,i as u,w as d,m as c,e as i,h as p,k as f,t as k,F as v,v as h,u as q,p as z,x as E}from"./index.919a766f.js";const N=D({props:{formItem:null,control:null,type:{default:"input"},modelValue:null,setValue:null},emits:["update:modelValue"],setup(l,{emit:y}){const m=l,o=F(m.modelValue);V(()=>m.modelValue,()=>{o.value=m.modelValue}),V(()=>o.value,b=>{y("update:modelValue",b)}),V(()=>m.setValue,()=>{o.value=m.setValue});const x=I(()=>`el-${m.type}`);return(b,n)=>{const g=r("el-checkbox"),C=r("el-checkbox-group"),U=r("el-radio"),w=r("el-radio-group"),B=r("el-option"),P=r("el-select"),_=r("el-form-item");return a(),u(_,z(E(l.formItem)),{default:d(()=>[l.type==="checkbox"?(a(),u(C,c({key:0},l.control,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=e=>o.value=e)}),{default:d(()=>{var e;return[(a(!0),i(v,null,p((e=l.control)==null?void 0:e.options,(t,s)=>(a(),u(g,c(t,{key:s,label:t.value||t.label}),{default:d(()=>[f(k(t.label),1)]),_:2},1040,["label"]))),128))]}),_:1},16,["modelValue"])):l.type==="radio"?(a(),u(w,c({key:1},l.control,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=e=>o.value=e)}),{default:d(()=>{var e;return[(a(!0),i(v,null,p((e=l.control)==null?void 0:e.options,(t,s)=>(a(),u(U,c(l.control,{key:s,label:t.value}),{default:d(()=>[f(k(t.label),1)]),_:2},1040,["label"]))),128))]}),_:1},16,["modelValue"])):l.type==="select"?(a(),u(P,c({key:2},l.control,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=e=>o.value=e)}),{default:d(()=>{var e;return[(a(!0),i(v,null,p((e=l.control)==null?void 0:e.options,(t,s)=>(a(),u(B,{key:s,label:t.label,value:t.value},null,8,["label","value"]))),128))]}),_:1},16,["modelValue"])):(a(),u(h(q(x)),c({key:3},l.control,{modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=e=>o.value=e)}),null,16,["modelValue"]))]),_:1},16)}}});var R={};export{N as _,R as b};
