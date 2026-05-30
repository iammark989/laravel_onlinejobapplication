import{K as i,r as p,j as e,S as l,$ as b}from"./app-CpqgKnQA.js";import{A as g}from"./AdminLayout-BD8x_aib.js";import{S as c}from"./sweetalert2.esm.all-C80wueXW.js";import{B as h}from"./briefcase-BomasYsM.js";import{a as y}from"./phone-N1B_fEY_.js";import{c as a}from"./createLucideIcon-CSE6IsEL.js";import"./log-out-B99dpGbA.js";import"./x-CCmZrKZb.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]],j=a("Ban",f);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],N=a("Pencil",v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],k=a("Trash2",w),A=()=>{const{openJobs:o=[]}=i().props,d=Array.isArray(o)?o:[],{a:C,b:_}=i().props,m=r=>{c.fire({title:"Close this job?",text:"Applicants will no longer be able to apply for this position.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Close Job",cancelButtonText:"Cancel"}).then(n=>{n.isConfirmed&&l.patch(`/admin/careers/${r}/close`)})},u=r=>{c.fire({title:"Delete this job?",text:"The job will be moved to Trash and can be restored later.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#dc2626",confirmButtonText:"Delete",cancelButtonText:"Cancel"}).then(n=>{n.isConfirmed&&l.delete(`/admin/careers/${r}`)})},[s,t]=p.useState({title:"",employment_type:"",work_setup:"",location:"",salary:"",short_description:"",description:"",requirements:"",responsibilities:"",status:"",posted_by:"",expires_at:""}),x=r=>{r.preventDefault(),l.post("/admin/post-job",s,{onError:n=>{console.log(n)},onSuccess:()=>{}})};return e.jsx(g,{children:e.jsx("section",{className:"w-full",children:e.jsxs("div",{className:"min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-gray-800",children:"Career Management"}),e.jsx("p",{className:"text-gray-500 mt-2",children:"Create and manage job openings"})]}),e.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 mb-10",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-6",children:"Post New Job Opening"}),e.jsxs("form",{onSubmit:x,className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Job Title"}),e.jsx("input",{type:"text",name:"title",value:s.title,onChange:r=>t({...s,title:r.target.value}),placeholder:"Frontend Developer",className:"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Employment Type"}),e.jsxs("select",{name:"employment_type",value:s.employment_type,onChange:r=>t({...s,employment_type:r.target.value}),className:"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[e.jsx("option",{value:"",children:"Select Employment Type"}),e.jsx("option",{value:"fulltime",children:"Fulltime"}),e.jsx("option",{value:"parttime",children:"Parttime"}),e.jsx("option",{value:"contract",children:"Contract"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Work Setup"}),e.jsxs("select",{name:"work_setup",value:s.work_setup,onChange:r=>t({...s,work_setup:r.target.value}),className:"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0,children:[e.jsx("option",{value:"",children:"Select Work Setup"}),e.jsx("option",{value:"onsite",children:"Onsite"}),e.jsx("option",{value:"remote",children:"Remote"}),e.jsx("option",{value:"hybrid",children:"Hybrid"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Location"}),e.jsx("input",{type:"text",name:"location",value:s.location,onChange:r=>t({...s,location:r.target.value}),placeholder:"Makati City",className:"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Salary"}),e.jsx("input",{type:"text",name:"salary",value:s.salary,onChange:r=>t({...s,salary:r.target.value}),placeholder:"₱30,000 - ₱50,000",className:"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Expiration Date"}),e.jsx("input",{type:"date",name:"expires_at",value:s.expires_at,onChange:r=>t({...s,expires_at:r.target.value}),className:"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Short Description"}),e.jsx("textarea",{rows:3,name:"short_description",value:s.short_description,onChange:r=>t({...s,short_description:r.target.value}),placeholder:"Short preview for career page...",className:"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",required:!0})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Job Description"}),e.jsx("textarea",{rows:5,name:"description",value:s.description,onChange:r=>t({...s,description:r.target.value}),placeholder:"Enter complete job description...",className:"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",required:!0})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Requirements"}),e.jsx("textarea",{rows:5,name:"requirements",value:s.requirements,onChange:r=>t({...s,requirements:r.target.value}),placeholder:"Enter job requirements...",className:"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",required:!0})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Responsibilities"}),e.jsx("textarea",{rows:5,name:"responsibilities",value:s.responsibilities,onChange:r=>t({...s,responsibilities:r.target.value}),placeholder:"Enter job responsibilities...",className:"w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",required:!0})]}),e.jsx("div",{className:"md:col-span-2",children:e.jsx("button",{type:"submit",className:`\r
                    w-full\r
                    sm:w-auto\r
                    bg-blue-600\r
                    hover:bg-blue-700\r
                    transition\r
                    text-white\r
                    font-semibold\r
                    px-6\r
                    py-3\r
                    rounded-xl\r
                    `,children:"Post Job Opening"})})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Active Job Openings"})}),e.jsx("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-5",children:d.map(r=>e.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-5",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"bg-blue-100 text-blue-600 p-2 rounded-lg",children:e.jsx(h,{size:18})}),e.jsx("h3",{className:"text-lg font-bold text-gray-800",children:r.title})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3",children:[e.jsx("span",{className:"bg-gray-100 px-3 py-1 rounded-full",children:r.employment_type}),e.jsx("span",{className:"bg-green-100 text-green-700 px-3 py-1 rounded-full",children:r.work_setup})]}),e.jsxs("div",{className:"flex items-center text-sm text-gray-500 gap-2",children:[e.jsx(y,{size:16}),e.jsx("span",{children:r.location})]})]}),e.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[e.jsx("button",{onClick:()=>l.get(`/admin/careers/${r.id}/edit`),className:`\r
                          bg-yellow-100\r
                          hover:bg-yellow-200\r
                          text-yellow-700\r
                          p-2.5\r
                          rounded-lg\r
                          transition\r
                        `,title:"Edit Job",children:e.jsx(N,{size:18})}),e.jsx("button",{onClick:()=>m(r.id),className:`\r
                          bg-orange-100\r
                          hover:bg-orange-200\r
                          text-orange-700\r
                          p-2.5\r
                          rounded-lg\r
                          transition\r
                        `,title:"Close Job",children:e.jsx(j,{size:18})}),e.jsx("button",{onClick:()=>u(r.id),className:`\r
                          bg-red-100\r
                          hover:bg-red-200\r
                          text-red-700\r
                          p-2.5\r
                          rounded-lg\r
                          transition\r
                        `,title:"Delete Job",children:e.jsx(k,{size:18})})]})]}),e.jsxs("div",{className:"mt-5 pt-4 border-t flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-gray-500",children:"Total Applicants"}),e.jsxs(b,{href:`/admin/careers/${r.slug}/applicants`,className:`\r
                        bg-blue-100\r
                        hover:bg-blue-200\r
                        text-blue-700\r
                        px-4\r
                        py-2\r
                        rounded-lg\r
                        transition\r
                      `,children:[e.jsx("span",{className:"bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium",children:r.applicants}),"View Applicants"]})]})]},r.id))})]})]})})})};export{A as default};
