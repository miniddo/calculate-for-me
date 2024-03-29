import{j as e,u as v,r as u,c as w}from"./index-DDwMrstv.js";import{H as N}from"./Header-CvmVABe2.js";import{B as h}from"./Button-C3wK8Hfb.js";import{I as y}from"./Input-DXikuPIF.js";import{u as b}from"./useStores-5DdldQXJ.js";const k=({size:t=3,color:s="currentColor"})=>{const l={1:"h-1 w-1",2:"h-2 w-2",3:"h-3 w-3",4:"h-4 w-4",5:"h-5 w-5"};return e.jsx("svg",{className:l[t],"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18",children:e.jsx("path",{stroke:s,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 1v16M1 9h16"})})},C=({color:t="primary",size:s=8})=>{const l={4:"h-4 w-4",6:"h-6 w-6",8:"h-8 w-8",10:"h-10 w-10"},r={default:"fill-default",primary:"fill-primary",secondary:"fill-secondary",alternative:"fill-alternative"},c=`inline ${l[s]} animate-spin ${r[t]} text-gray-200 dark:text-gray-600`;return e.jsxs("div",{role:"status",children:[e.jsxs("svg",{"aria-hidden":"true",className:c,viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]})},S=({size:t=3,color:s="currentColor"})=>{const l={1:"h-1 w-1",2:"h-2 w-2",3:"h-3 w-3",4:"h-4 w-4",5:"h-5 w-5"};return e.jsx("svg",{className:l[t],"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 2",children:e.jsx("path",{stroke:s,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h16"})})},L=({count:t,price:s})=>{const l=v(),[r,c]=u.useState(!1),[o,f]=u.useState(0),p=()=>{c(!0),setTimeout(()=>{const j=Math.floor(Math.random()*t)+1;f(j),c(!1)},2e3)},m=()=>{l({to:"/setting",search:{count:t,price:s}})};return e.jsxs("div",{className:"h-full",children:[e.jsx("div",{className:"flex h-1/6 items-center px-[20px]",children:e.jsxs("div",{className:"text-[15px] text-alternative",children:[e.jsxs("p",{children:["1부터 ",t,"까지 숫자 중 랜덤하게 추첨합니다!"]}),e.jsx("p",{children:"아래의 몰아주기 버튼을 눌러주세요"})]})}),e.jsx("div",{className:"flex h-[200px] items-center justify-center gap-4",children:r?e.jsx(C,{}):e.jsx(e.Fragment,{children:o>0?e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"flex h-[100px] w-[100px] items-center justify-center text-5xl",children:o}),e.jsx(h,{onClick:p,children:"다시 몰아주기"})]}):e.jsxs("div",{className:"flex gap-4",children:[e.jsx(h,{variant:"secondary",onClick:m,children:"이전으로"}),e.jsx(h,{onClick:p,children:"몰아주기"})]})})}),o>0&&!r&&e.jsxs("div",{className:"px-[20px] text-center font-nanum text-2xl text-alternative",children:[o,"번에게 ",s.toLocaleString("ko-KR"),"원이 모두 정산되었습니다 :)"]})]})},M=({count:t,price:s})=>{const l=v(),[r,c]=u.useState([]),{calculateStore:o}=b();u.useEffect(()=>{if(o.calculateInfo.length>0)c(o.calculateInfo);else{const n=[];for(let a=0;a<t;a++)n.push({name:"홍길동",price:Math.floor(s/t),proportional:1});c(n)}},[t,s,o.calculateInfo]);const f=()=>{l({to:"/setting",search:{count:t,price:s}})},p=()=>{o.setCount(t),o.setPrice(s),o.setCalculateInfo(r),l({to:"/result",search:{count:t,price:s}})},m=(n,a)=>{if(n==="minus"){if(r[a].proportional===1)return}else if(n==="plus"&&r[a].proportional===10)return;const d=n==="minus"?r[a].proportional-1:r[a].proportional+1;let x=0;for(let i=0;i<t;i++)i===a?x+=d:x+=r[i].proportional;const g=[];for(let i=0;i<t;i++)i===a?g.push({name:r[a].name,price:Math.floor(d*s/x),proportional:d}):g.push({name:r[i].name,price:Math.floor(r[i].proportional*s/x),proportional:r[i].proportional});c(g)},j=(n,a)=>{const d=n.target.value,x=[...r];x[a]={...x[a],name:d},c(x)};return e.jsxs("div",{className:"h-full",children:[e.jsx("div",{className:"flex h-1/6 items-center px-[20px]",children:e.jsxs("div",{className:"text-[15px] text-alternative",children:[e.jsxs("p",{children:[t,"명의 친구들과 ",s.toLocaleString("kr"),"원을 다르게 정산합니다."]}),e.jsx("p",{children:"아래의 표를 채워주세요!"})]})}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:"relative max-h-[430px] w-full overflow-x-auto overflow-y-scroll",children:e.jsxs("table",{className:"w-full text-left rtl:text-right ",children:[e.jsx("thead",{className:"border-b border-t bg-secondary text-[15px] text-alternative",children:e.jsxs("tr",{className:"w-[100%]",children:[e.jsx("th",{scope:"col",className:"w-[25%] px-5 py-3",children:"이름"}),e.jsx("th",{scope:"col",className:"w-[35%] px-5 py-3",children:"금액"}),e.jsx("th",{scope:"col",className:"w-[40%] px-5 py-3",children:"비율"})]})}),e.jsx("tbody",{className:"text-sm text-alternative",children:r.map((n,a)=>e.jsxs("tr",{className:"border-b",children:[e.jsx("td",{className:"px-5 py-4 font-semibold",children:e.jsx(y,{id:"name",className:"block w-[70px] rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",defaultValue:n.name,onChange:d=>j(d,a)})}),e.jsx("td",{className:"px-5 py-4",children:e.jsx("div",{className:"flex items-center",children:e.jsxs("p",{className:"font-semibold",children:[n.price.toLocaleString("kr")," 원"]})})}),e.jsxs("td",{className:"flex items-center gap-1 px-5 py-4 font-semibold",children:[e.jsx("button",{className:"inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500",type:"button",onClick:()=>m("minus",a),children:e.jsx(S,{})}),e.jsx(y,{type:"number",id:"price",className:"block w-[50px] rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",value:n.proportional,readOnly:!0}),e.jsx("button",{className:"inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500",type:"button",onClick:()=>m("plus",a),children:e.jsx(k,{})})]})]},a))})]})}),e.jsx("p",{className:"w-full pr-[10px] pt-[10px] text-right text-[12px]",children:"ෆ 비율은 1에서 10까지 가능합니다."})]}),e.jsxs("div",{className:"flex h-[120px] items-center justify-center gap-4",children:[e.jsx(h,{variant:"secondary",onClick:f,children:"이전으로"}),e.jsx(h,{variant:"primary",onClick:p,children:"결과보기"})]})]})},I=({count:t,price:s})=>{const l=v(),r=()=>{l({to:"/setting",search:{count:t,price:s}})};return e.jsxs("div",{className:"h-full",children:[e.jsx("div",{className:"flex h-1/6 items-center px-[20px]",children:e.jsxs("div",{className:"text-[15px] text-alternative",children:[e.jsxs("p",{children:[t,"명의 친구들과 ",s.toLocaleString("kr"),"원을 동일하게 정산합니다."]}),e.jsx("p",{children:"아래의 금액을 보내주세요!"})]})}),e.jsxs("div",{className:"flex h-[200px] flex-col items-center justify-center font-nanum text-alternative",children:[e.jsx("p",{className:"text-2xl",children:"오늘의 정산금은?"}),e.jsxs("p",{className:"text-5xl",children:[Math.floor(s/t).toLocaleString("kr"),"원"]})]}),e.jsx("div",{className:"flex h-[100px] items-center  justify-center",children:e.jsx(h,{variant:"secondary",onClick:r,children:"이전으로"})})]})},B=({type:t="lump-sum",count:s=1,price:l=0})=>e.jsxs("div",{className:"h-screen w-screen font-notoSans text-white",children:[e.jsx(N,{}),e.jsxs("div",{className:"h-[calc(100%-60px)]",children:[t==="lump-sum"&&e.jsx(L,{count:s,price:l}),t==="split-equally"&&e.jsx(I,{count:s,price:l}),t==="proportional"&&e.jsx(M,{count:s,price:l})]})]}),D=w("/calculate")({component:G});function G(){const{type:t,count:s,price:l}=D.useSearch();return e.jsx(B,{type:t,count:s,price:l})}export{D as Route};