import{_ as f}from"./extends-98964cd2.js";import{r as a}from"./index-61bf1805.js";import{$ as p,a as b,b as l,c as m}from"./index-a44938c2.js";const u="Avatar",[v,h]=p(u),[A,g]=v(u),x=a.forwardRef((t,n)=>{const{__scopeAvatar:o,...e}=t,[c,r]=a.useState("idle");return a.createElement(A,{scope:o,imageLoadingStatus:c,onImageLoadingStatusChange:r},a.createElement(b.span,f({},e,{ref:n})))}),S="AvatarImage",_=a.forwardRef((t,n)=>{const{__scopeAvatar:o,src:e,onLoadingStatusChange:c=()=>{},...r}=t,s=g(S,o),d=w(e),$=l(i=>{c(i),s.onImageLoadingStatusChange(i)});return m(()=>{d!=="idle"&&$(d)},[d,$]),d==="loaded"?a.createElement(b.img,f({},r,{ref:n,src:e})):null}),L="AvatarFallback",E=a.forwardRef((t,n)=>{const{__scopeAvatar:o,delayMs:e,...c}=t,r=g(L,o),[s,d]=a.useState(e===void 0);return a.useEffect(()=>{if(e!==void 0){const $=window.setTimeout(()=>d(!0),e);return()=>window.clearTimeout($)}},[e]),s&&r.imageLoadingStatus!=="loaded"?a.createElement(b.span,f({},c,{ref:n})):null});function w(t){const[n,o]=a.useState("idle");return a.useEffect(()=>{if(!t){o("error");return}let e=!0;const c=new window.Image,r=s=>()=>{e&&o(s)};return o("loading"),c.onload=r("loaded"),c.onerror=r("error"),c.src=t,()=>{e=!1}},[t]),n}const R=x,P=_,N=E;export{R as $,P as a,N as b};
//# sourceMappingURL=index-315e0d04.js.map
