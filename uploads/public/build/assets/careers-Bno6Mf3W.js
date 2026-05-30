import{K as n,j as e,$ as a}from"./app-CpqgKnQA.js";import{M as i}from"./MainLayout-D5EyDylv.js";import"./x-CCmZrKZb.js";import"./createLucideIcon-CSE6IsEL.js";import"./phone-N1B_fEY_.js";import"./sweetalert2.esm.all-C80wueXW.js";function p(){const{openJobs:s=[]}=n().props,l=Array.isArray(s)?s:[];return e.jsxs(i,{children:[e.jsxs("section",{className:"relative h-[400px] flex items-center justify-center",children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600",alt:"career",className:"absolute inset-0 w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-black/60"}),e.jsxs("div",{className:"relative z-10 text-center text-white px-4",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-bold",children:"Careers"}),e.jsx("p",{className:"mt-5 text-lg max-w-2xl mx-auto text-slate-200",children:"Join our growing team and build your future with us."})]})]}),e.jsx("section",{className:"py-20 bg-white",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-4 text-center",children:[e.jsx("h2",{className:"text-4xl font-bold text-slate-800 mb-6",children:"Why Work With Us?"}),e.jsx("p",{className:"text-slate-600 leading-relaxed text-lg",children:"We believe in innovation, collaboration, and continuous growth. Our company provides a supportive environment where employees can develop their skills, contribute meaningful work, and grow professionally."})]})}),e.jsx("section",{className:"py-20 bg-slate-100",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[e.jsxs("div",{className:"text-center mb-14",children:[e.jsx("h2",{className:"text-4xl font-bold text-slate-800",children:"Open Positions"}),e.jsx("p",{className:"mt-4 text-slate-600",children:"Explore exciting opportunities and become part of our team."})]}),e.jsx("div",{className:"grid gap-8",children:l.length>0?l.map(t=>e.jsx("div",{className:`
                                        bg-white
                                        rounded-3xl
                                        shadow-lg
                                        p-6
                                        md:p-8
                                        hover:shadow-xl
                                        transition
                                    `,children:e.jsxs("div",{className:"flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-slate-800",children:t.title}),e.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[e.jsx("span",{className:"px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium capitalize",children:t.employment_type}),e.jsx("span",{className:"px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium capitalize",children:t.work_setup}),e.jsx("span",{className:"px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-medium",children:t.location})]}),e.jsx("p",{className:"mt-5 text-slate-600 leading-relaxed",children:t.short_description})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 w-full xl:w-auto",children:[e.jsx(a,{href:`/careers/${t.slug}`,className:`
                                                    text-center
                                                    px-6
                                                    py-3
                                                    border
                                                    border-slate-300
                                                    text-slate-700
                                                    rounded-xl
                                                    hover:bg-slate-100
                                                    transition
                                                    font-medium
                                                `,children:"View Details"}),e.jsx(a,{href:`/careers/${t.slug}/apply`,className:`
                                                    text-center
                                                    px-6
                                                    py-3
                                                    bg-blue-600
                                                    text-white
                                                    rounded-xl
                                                    hover:bg-blue-700
                                                    transition
                                                    font-medium
                                                `,children:"Apply Now"})]})]})},t.id)):e.jsxs("div",{className:"bg-white rounded-3xl shadow-md p-10 text-center",children:[e.jsx("h3",{className:"text-2xl font-bold text-slate-800",children:"No Open Positions Yet"}),e.jsx("p",{className:"mt-3 text-slate-500",children:"Please check back again soon for new opportunities."})]})})]})})]})}export{p as default};
