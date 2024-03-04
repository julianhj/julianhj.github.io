import{$ as i,a as u,O as l,M as r,E as m,H as p,q as d,_}from"./q-Bppy2LvQ.js";import{u as f}from"./q-D77-SG_w.js";const b=async(a,e)=>{const[s]=i(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,c)=>{typeof n=="string"&&o.append(c,n)}),s("?"+o.toString(),{type:"form",forceReload:!0}).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},v=a=>{const e=u(a,["action","spaReset","reloadDocument","onSubmit$"]),s=f();return l("form",{...e,children:m(p,null,3,"BC_0"),onSubmit$:d(()=>_(()=>Promise.resolve().then(()=>S),void 0,import.meta.url),"s_p9MSze0ojs4",[s])},{action:"get","data-spa-reset":r(t=>t.spaReset?"true":void 0,[a],'p0.spaReset?"true":undefined'),"preventdefault:submit":r(t=>!t.reloadDocument,[a],"!p0.reloadDocument")},0,"BC_1")},S=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:v,s_p9MSze0ojs4:b},Symbol.toStringTag,{value:"Module"}));export{v as s_Nk9PlpjQm9Y,b as s_p9MSze0ojs4};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
