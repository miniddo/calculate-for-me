import{r,u as h,j as e,c as j}from"./index-DDwMrstv.js";import{H as g}from"./Header-CvmVABe2.js";import{B as l}from"./Button-C3wK8Hfb.js";import{I as u}from"./Input-DXikuPIF.js";const v=({count:t,price:n})=>{const[c,o]=r.useState(1),[p,x]=r.useState(0);r.useEffect(()=>{t&&o(t)},[t]),r.useEffect(()=>{n&&x(n)},[n]);const d=s=>{const a=parseInt(s.target.value,10);a>99?o(99):o(a)},m=s=>{const a=parseInt(s.target.value,10);x(a)},f=h(),i=s=>{c>0&&f({to:"/calculate",search:{type:s,count:c,price:p}})};return e.jsxs("div",{className:"h-screen w-screen font-notoSans",children:[e.jsx(g,{}),e.jsx("div",{className:"flex items-center justify-between px-[20px] py-[30px]",children:e.jsxs("div",{className:"text-[20px] text-alternative",children:[e.jsx("p",{children:"정산할 인원과 금액을"}),e.jsx("p",{children:"입력해주세요"})]})}),e.jsxs("div",{className:"flex items-center gap-2 px-[20px] py-[5px] font-nanum text-xl text-alternative",children:[e.jsx("p",{children:"정산할 인원은"}),e.jsx(u,{className:"block w-[40px] border-b border-secondary bg-transparent text-center text-xl focus:bg-transparent focus:outline-none",type:"number",id:"count",name:"count",value:c.toString(),onChange:d}),e.jsx("p",{children:"명 입니다"})]}),e.jsxs("div",{className:"flex items-center gap-2 px-[20px] py-[5px] font-nanum text-xl text-alternative",children:[e.jsx("p",{children:"정산할 금액은"}),e.jsx(u,{className:"block w-[90px] border-b border-secondary bg-transparent text-center text-xl focus:bg-transparent focus:outline-none",type:"number",id:"price",name:"price",value:p.toString(),onChange:m}),e.jsx("p",{children:"원 입니다"})]}),e.jsxs("div",{className:"grid flex-col place-content-center items-center gap-[20px] px-[20px] py-[50px]",children:[e.jsx(l,{variant:"primary",onClick:()=>i("lump-sum"),children:"1명한테 몰아주기"}),e.jsx(l,{variant:"primary",onClick:()=>i("proportional"),children:"비율 다르게 정산하기"}),e.jsx(l,{variant:"primary",onClick:()=>i("split-equally"),children:"비율 같게 정산하기 (1/N)"})]})]})},b=j("/setting")({component:y});function y(){const{count:t,price:n}=b.useSearch();return e.jsx(v,{count:t,price:n})}export{b as Route};