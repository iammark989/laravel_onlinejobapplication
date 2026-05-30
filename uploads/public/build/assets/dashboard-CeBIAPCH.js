import{K as r,j as e}from"./app-CpqgKnQA.js";import{A as o}from"./AdminLayout-BD8x_aib.js";import{B as c}from"./briefcase-BomasYsM.js";import{c as m}from"./createLucideIcon-CSE6IsEL.js";import{U as x}from"./users-6h1-aiEU.js";import"./log-out-B99dpGbA.js";import"./x-CCmZrKZb.js";import"./phone-N1B_fEY_.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],p=m("CircleCheckBig",h),w=()=>{const{openJobs:t,closedJobs:l,totalHired:a}=r().props,{hiredPerPosition:i}=r().props,n=[{title:"Total Active Open Jobs",value:t,icon:e.jsx(c,{size:28})},{title:"Total Closed Jobs",value:l,icon:e.jsx(p,{size:28})},{title:"Total Hired Applicants",value:a,icon:e.jsx(x,{size:28})}];return e.jsx(o,{children:e.jsx("section",{className:"w-full",children:e.jsxs("div",{className:"min-h-screen bg-gray-100 p-4 md:p-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Admin Dashboard"}),e.jsx("p",{className:"text-gray-500 mt-2",children:"Welcome back, Admin"})]}),e.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 mb-8",children:n.map((s,d)=>e.jsxs("div",{className:`\r
              bg-white\r
              rounded-2xl\r
              shadow-sm\r
              border\r
              border-gray-100\r
              p-5\r
              flex\r
              items-center\r
              justify-between\r
              transition\r
              hover:shadow-md\r
            `,children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm text-gray-500 leading-5",children:s.title}),e.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-gray-800 mt-2",children:s.value})]}),e.jsx("div",{className:`\r
                bg-blue-100\r
                text-blue-600\r
                p-3\r
                sm:p-4\r
                rounded-xl\r
                shrink-0\r
              `,children:s.icon})]},d))}),e.jsxs("div",{className:"bg-white rounded-2xl shadow-md p-6",children:[e.jsx("div",{className:"flex items-center justify-between mb-6",children:e.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Total Hired Per Position"})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full min-w-[500px]",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b",children:[e.jsx("th",{className:"text-left py-3 text-gray-600 font-semibold",children:"Position"}),e.jsx("th",{className:"text-left py-3 text-gray-600 font-semibold",children:"Total Hired"})]})}),e.jsx("tbody",{children:i.map(s=>e.jsxs("tr",{className:"border-b last:border-none hover:bg-gray-50",children:[e.jsx("td",{className:"py-4 text-gray-700",children:s.title}),e.jsx("td",{className:"py-4",children:e.jsx("span",{className:"bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium",children:s.hiredApplicants})})]},s.id))})]})})]})]})})})};export{w as default};
