import{j as e}from"./jsx-runtime-4ca860c5.js";import{B as h}from"./Box-0130b8a6.js";import{T as b}from"./Text-55118835.js";import{r as $}from"./index-61bf1805.js";import{s as n}from"./index-07334fb1.js";import"./_commonjsHelpers-de833af9.js";import"./fonts-5b4b3dab.js";const T=n("div",{backgroundColor:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),_=n("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),I=n("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),o=$.forwardRef(({prefix:r,...y},x)=>e.jsxs(T,{children:[!!r&&e.jsx(_,{children:r}),e.jsx(I,{ref:x,...y})]}));o.displayName="TextInput";try{o.displayName="TextInput",o.__docgenInfo={description:"",displayName:"TextInput",props:{prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:"CSS<{}, { colors: { white: string; black: string; gray100: string; gray200: string; gray400: string; gray500: string; gray600: string; gray700: string; gray800: string; gray900: string; ignite300: string; ignite500: string; ignite700: string; ignite900: string; test: string; }; ... 5 more ...; space: { ...; }; }, { ..."}}}}}catch{}const W={title:"Form/Text Input",component:o,args:{},decorators:[r=>e.jsxs(h,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[e.jsx(b,{size:"sm",children:"Email address"}),r()]})]},s={args:{placeholder:"Type your name"}},a={args:{disabled:!0}},t={args:{prefix:"cal.com/",placeholder:"your-username"}};var i,d,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your name'
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username'
  }
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const k=["Primary","Disabled","WithPrefix"];export{a as Disabled,s as Primary,t as WithPrefix,k as __namedExportsOrder,W as default};
//# sourceMappingURL=TextInput.stories-2f15c4ef.js.map
