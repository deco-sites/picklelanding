/* esm.sh - esbuild bundle(es5-ext@0.10.62/global) denonext production */
var p=Object.create;var f=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var w=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),j=(t,e)=>{for(var r in e)f(t,r,{get:e[r],enumerable:!0})},i=(t,e,r,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of g(e))!y.call(t,n)&&n!==r&&f(t,n,{get:()=>e[n],enumerable:!(a=d(e,n))||a.enumerable});return t},l=(t,e,r)=>(i(t,e,"default"),r&&i(r,e,"default")),u=(t,e,r)=>(r=t!=null?p(h(t)):{},i(e||!t||!t.__esModule?f(r,"default",{value:t,enumerable:!0}):r,t));var _=w((T,s)=>{var b=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};s.exports=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch{return b()}try{return __global__||b()}finally{delete Object.prototype.__global__}}()});var o={};j(o,{default:()=>x});var m=u(_());l(o,u(_()));var{default:c,...v}=m,x=c!==void 0?c:v;export{x as default};
//# sourceMappingURL=global.js.map