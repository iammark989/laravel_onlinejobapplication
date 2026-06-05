import MainLayout from '@/components/layout/MainLayout';
import { useState,useEffect } from 'react';
import { router,usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';

export default function ContactPage() {

const [ form,setForm ] = useState({
    name:"",
    email:"",
    message:"",
});
 

 // sweetalert
    
     

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();

    router.post('/sendmessage',form,{
    onSuccess: () => { 
       Swal.fire({
              icon: "success",
              title: "Message Sent!",
              timer: 2000,
              showConfirmButton: false,
          });
        setForm({
           name:"",
           email:"",
           message:"", 
        });
    },
    onError:(errors) =>{
    Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Please check your input.",
        });
    },

    });
    


};

    return (
        <MainLayout>

            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">

                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

                        <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
                            Contact Us
                        </h1>

                        <form onSubmit={handleSubmit} className="grid gap-6">

                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={(e) => setForm({...form, name:e.target.value})}
                                placeholder="Your Name"
                                className="border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />

                            <input
                                type="email"
                                name='email'
                                value={form.email}
                                onChange={(e) => setForm({...form, email:e.target.value})}
                                placeholder="Your Email"
                                className="border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />

                            <textarea
                                name='message'
                                value={form.message}
                                onChange={(e) => setForm({...form, message:e.target.value})}
                                rows={6}
                                placeholder="Your Message"
                                className="border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />

                            <button className="bg-slate-600 text-[#F5F2EA] py-4 rounded-xl hover:bg-blue-700 transition">
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>
            </section>

        </MainLayout>
    );
}