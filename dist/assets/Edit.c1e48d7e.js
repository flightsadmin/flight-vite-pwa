var b=Object.defineProperty;var u=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var m=(i,o,s)=>o in i?b(i,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[o]=s,_=(i,o)=>{for(var s in o||(o={}))v.call(o,s)&&m(i,s,o[s]);if(u)for(var s of u(o))y.call(o,s)&&m(i,s,o[s]);return i};import{u as k,g as w,S as M,K as R,T as S,l as U,o as g,c as x,b as t,M as d,N as c,n as a,Q as V,R as B,O as D}from"./vendor.8e6a27ab.js";import{i as E,a as N,j as O}from"./firebase.d8b60001.js";const q={class:"card card-body mt-4"},A=t("h3",null,"Edit Report",-1),I=["onSubmit"],T={class:"row g-3"},C={class:"col-md-6"},G=t("label",{class:"form-label"},"Person Reporting",-1),j={class:"col-md-6"},K=t("label",{class:"form-label"},"Email",-1),L={class:"col-md-6"},P=t("label",{class:"form-label"},"Select Report Type",-1),Q=t("option",{value:"GE"},"General Incident",-1),z=t("option",{value:"NM"},"Near Miss",-1),F=t("option",{value:"SO"},"Safe Observation",-1),H=[Q,z,F],J={class:"col-md-6"},W=t("label",{class:"form-label"},"Date of Occurance",-1),X={class:"col-md-12"},Y=t("label",{class:"form-label"},"Description",-1),Z={class:"form-check form-check-inline form-switch"},$=t("label",{class:"form-check-label"},"Airline Involved?",-1),ee=t("button",{type:"submit",class:"btn btn-primary mt-3 bi bi-save float-end"}," Update",-1),re={setup(i){const o=k(),s=w(),p=M(()=>s.params.id),e=R({reporter:"",reporteremail:"",reporttype:"",date:"",description:"",airline:"",updatedAt:new Date});S(async()=>{const n=await E(p.value);e.reporter=n.reporter,e.reporteremail=n.reporteremail,e.reporttype=n.reporttype,e.date=n.date,e.description=n.description,e.airline=n.airline,console.log(n)});const f=async()=>{await O(p.value,_({},e)),e.reporter="",e.reporteremail="",e.reporttype="",e.date="",e.description="",e.airline="",o.push("/report")},h=N.onAuthStateChanged(function(n){n||o.push("/login")});return U(()=>{h()}),(n,r)=>(g(),x("div",q,[A,t("form",{onSubmit:D(f,["prevent"])},[t("div",T,[t("div",C,[G,d(t("input",{"onUpdate:modelValue":r[0]||(r[0]=l=>a(e).reporter=l),type:"text",class:"form-control",required:"",readonly:""},null,512),[[c,a(e).reporter]])]),t("div",j,[K,d(t("input",{"onUpdate:modelValue":r[1]||(r[1]=l=>a(e).reporteremail=l),type:"email",class:"form-control",required:"",readonly:""},null,512),[[c,a(e).reporteremail]])]),t("div",L,[P,d(t("select",{"onUpdate:modelValue":r[2]||(r[2]=l=>a(e).reporttype=l),class:"form-select",name:"reporttype"},H,512),[[V,a(e).reporttype]])]),t("div",J,[W,d(t("input",{"onUpdate:modelValue":r[3]||(r[3]=l=>a(e).date=l),type:"date",class:"form-control",required:""},null,512),[[c,a(e).date]])]),t("div",X,[Y,d(t("textarea",{"onUpdate:modelValue":r[4]||(r[4]=l=>a(e).description=l),class:"form-control",rows:"6",name:"description"},null,512),[[c,a(e).description]])]),t("div",Z,[d(t("input",{"onUpdate:modelValue":r[5]||(r[5]=l=>a(e).airline=l),class:"form-check-input",type:"checkbox"},null,512),[[B,a(e).airline]]),$])]),ee],40,I)]))}};export{re as default};