import{r as n}from"./index-61bf1805.js";import{_ as m}from"./extends-98964cd2.js";import{r as S}from"./index-2801d3c9.js";function y(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function h(...e){return t=>e.forEach(o=>y(o,t))}function k(...e){return n.useCallback(h(...e),e)}function A(e,t=[]){let o=[];function r(l,c){const i=n.createContext(c),u=o.length;o=[...o,c];function p(f){const{scope:a,children:$,...d}=f,E=(a==null?void 0:a[e][u])||i,C=n.useMemo(()=>d,Object.values(d));return n.createElement(E.Provider,{value:C},$)}function b(f,a){const $=(a==null?void 0:a[e][u])||i,d=n.useContext($);if(d)return d;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${l}\``)}return p.displayName=l+"Provider",[p,b]}const s=()=>{const l=o.map(c=>n.createContext(c));return function(i){const u=(i==null?void 0:i[e])||l;return n.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return s.scopeName=e,[r,P(s,...t)]}function P(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(l){const c=r.reduce((i,{useScope:u,scopeName:p})=>{const f=u(l)[`__scope${p}`];return{...i,...f}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return o.scopeName=t.scopeName,o}const x=n.forwardRef((e,t)=>{const{children:o,...r}=e,s=n.Children.toArray(o),l=s.find(_);if(l){const c=l.props.children,i=s.map(u=>u===l?n.Children.count(c)>1?n.Children.only(null):n.isValidElement(c)?c.props.children:null:u);return n.createElement(v,m({},r,{ref:t}),n.isValidElement(c)?n.cloneElement(c,void 0,i):null)}return n.createElement(v,m({},r,{ref:t}),o)});x.displayName="Slot";const v=n.forwardRef((e,t)=>{const{children:o,...r}=e;return n.isValidElement(o)?n.cloneElement(o,{...g(r,o.props),ref:t?h(t,o.ref):o.ref}):n.Children.count(o)>1?n.Children.only(null):null});v.displayName="SlotClone";const N=({children:e})=>n.createElement(n.Fragment,null,e);function _(e){return n.isValidElement(e)&&e.type===N}function g(e,t){const o={...t};for(const r in t){const s=e[r],l=t[r];/^on[A-Z]/.test(r)?s&&l?o[r]=(...i)=>{l(...i),s(...i)}:s&&(o[r]=s):r==="style"?o[r]={...s,...l}:r==="className"&&(o[r]=[s,l].filter(Boolean).join(" "))}return{...e,...o}}const w=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],B=w.reduce((e,t)=>{const o=n.forwardRef((r,s)=>{const{asChild:l,...c}=r,i=l?x:t;return n.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),n.createElement(i,m({},c,{ref:s}))});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function H(e,t){e&&S.flushSync(()=>e.dispatchEvent(t))}function T(e){const t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...o)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...o)},[])}const j=globalThis!=null&&globalThis.document?n.useLayoutEffect:()=>{};export{A as $,B as a,T as b,j as c,k as d,H as e,N as f,x as g};
//# sourceMappingURL=index-a44938c2.js.map
