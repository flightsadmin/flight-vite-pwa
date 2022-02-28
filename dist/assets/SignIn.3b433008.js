import{r as i,u as v,a as f,o as c,c as d,b as o,O as w,M as u,N as m,t as y,U as k,d as x,w as I,e as p}from"./vendor.8e6a27ab.js";import{a as h,p as E}from"./firebase.d8b60001.js";const P={class:"container"},V={class:"row justify-content-center"},L={class:"col-md-6"},N={class:"card mt-4"},S={class:"card-body text-center"},A=o("h3",null," Login to Your Account ",-1),C=o("span",{class:"small text-muted"},"Login to Proceed",-1),M=["onSubmit"],B={class:"form-floating mb-3"},D=o("label",{for:"floatingInput"},"Email Address",-1),T={class:"form-floating mb-3"},U=o("label",{for:"floatingInput"},"Enter your Password",-1),R={key:0,class:"text-danger"},W=o("button",{type:"submit",class:"btn btn-primary btn-sm mb-3 bi bi-box-arrow-in-right"}," Login ",-1),j={class:"text-center"},G=p(" Don't have account? "),O=p(" Register "),F={setup(Y){const a=i(""),n=i(""),t=i(),r=v(),_=()=>{h.signInWithEmailAndPassword(a.value,n.value).then(s=>{console.log("Successfully logged in!"),r.push("/")}).catch(s=>{switch(s.code){case"auth/invalid-email":t.value="Invalid email address";break;case"auth/user-not-found":t.value="Account with that email was not found";break;case"auth/wrong-password":t.value="Incorrect password";break;case"auth/weak-password":t.value="The Password you provided is short";break;default:t.value="Email or password was incorrect";break}})};function g(){h.signInWithPopup(E).then(()=>{console.log("Successfully logged in!"),r.push("/")}).catch(s=>{console.log(s.code),alert(s.message)})}return(s,e)=>{const b=f("router-link");return c(),d("div",P,[o("div",V,[o("div",L,[o("div",N,[o("div",S,[A,C,o("form",{onSubmit:w(_,["prevent"])},[o("div",B,[u(o("input",{type:"text",class:"form-control mb-2",placeholder:"Email","onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l)},null,512),[[m,a.value]]),D]),o("div",T,[u(o("input",{type:"password",class:"form-control mb-2",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l)},null,512),[[m,n.value]]),U]),t.value?(c(),d("p",R,y(t.value),1)):k("",!0),W,o("p",j,[G,x(b,{to:"/register"},{default:I(()=>[O]),_:1})]),o("button",{onClick:g,class:"btn btn-primary btn-sm mb-3 bi bi-google"}," Login with Google ")],40,M)])])])])])}}};export{F as default};
