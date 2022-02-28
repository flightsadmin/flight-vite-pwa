var f=Object.defineProperty;var c=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var u=(l,e,t)=>e in l?f(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,p=(l,e)=>{for(var t in e||(e={}))h.call(e,t)&&u(l,t,e[t]);if(c)for(var t of c(e))b.call(e,t)&&u(l,t,e[t]);return l};import{u as g,K as v,l as S,o as X,c as D,b as o,M as n,N as d,n as i,O as V,P as m}from"./vendor.8e6a27ab.js";import{a as y,e as B}from"./firebase.d8b60001.js";const U={class:"card card-body mt-4"},w=["onSubmit"],N={class:"row g-3"},C={class:"col-md-6"},M=o("label",{class:"form-label"},"Flight No",-1),x={class:"col-md-6"},E=o("label",{class:"form-label"},"Date",-1),T={class:"col-md-6"},F=o("label",{class:"form-label"},"STA",-1),K={class:"col-md-6"},O=o("label",{class:"form-label"},"STD",-1),R={class:"col-md-6"},k=o("label",{class:"form-label"},"Registration",-1),q=m('<datalist id="registrations"><option value="XA-AAA">XA-AAA</option><option value="XA-AAB">XA-AAB</option><option value="XA-AAC">XA-AAC</option><option value="XA-AAD">XA-AAD</option><option value="XA-AAE">XA-AAE</option></datalist>',1),J={class:"col-md-6"},I=o("label",{class:"form-label"},"Origin",-1),L=m('<datalist id="stations"><option value="MCT">Muscat</option><option value="NBO">Nairobi</option><option value="DXB">Dubai</option><option value="KWI">Kuwait</option><option value="JED">Jeddah</option></datalist>',1),P={class:"col-md-6"},W=o("label",{class:"form-label"},"Destination",-1),j=o("button",{type:"submit",class:"btn btn-primary bi bi-plus-lg mt-3 float-end"}," Create Flight",-1),Q={setup(l){const e=g(),t=v({flight:"",date:"",sta:"",std:"",registration:"",origin:"",destination:"",createdAt:new Date}),A=async()=>{await B(p({},t)),t.flight="",t.date="",t.sta="",t.std="",t.registration="",t.origin="",t.destination="",e.push("/")},_=y.onAuthStateChanged(function(r){r||e.push("/login")});return S(()=>{_()}),(r,s)=>(X(),D("div",U,[o("form",{onSubmit:V(A,["prevent"])},[o("div",N,[o("div",C,[M,n(o("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>i(t).flight=a),type:"text",class:"form-control",required:""},null,512),[[d,i(t).flight]])]),o("div",x,[E,n(o("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>i(t).date=a),type:"date",class:"form-control",required:""},null,512),[[d,i(t).date]])]),o("div",T,[F,n(o("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>i(t).sta=a),type:"time",class:"form-control"},null,512),[[d,i(t).sta]])]),o("div",K,[O,n(o("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>i(t).std=a),type:"time",class:"form-control"},null,512),[[d,i(t).std]])]),o("div",R,[k,n(o("input",{class:"form-control","onUpdate:modelValue":s[4]||(s[4]=a=>i(t).registration=a),list:"registrations",placeholder:"Search Registrations"},null,512),[[d,i(t).registration]]),q]),o("div",J,[I,n(o("input",{class:"form-control","onUpdate:modelValue":s[5]||(s[5]=a=>i(t).origin=a),list:"stations",placeholder:"Search Stations"},null,512),[[d,i(t).origin]]),L]),o("div",P,[W,n(o("input",{class:"form-control","onUpdate:modelValue":s[6]||(s[6]=a=>i(t).destination=a),list:"stations",placeholder:"Search Stations"},null,512),[[d,i(t).destination]])])]),j],40,w)]))}};export{Q as default};