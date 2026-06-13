import AdminLayout from "@/components/layout/adminLayout";
import { useState } from "react";
import { usePage,router } from "@inertiajs/react";

export default function ContactEmployersPage(){

    const { message } = usePage().props as any;


const [ form,setForm] = useState({
    subject: "",
    message: "",
});

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.post(`/admin/employer-message/${message.id}/send`,form,{

        onSuccess: () =>{

        },

        onError: (error) => {

        },

    });


}

    return(
<AdminLayout>
<section className="min-h-screen bg-gray-100 p-4 md:p-6">

    <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-6">

            <h1 className="text-3xl font-bold text-slate-800">
                Contact Employer
            </h1>

            <p className="text-slate-500 mt-2">
                Send a response to the employer inquiry.
            </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

            {/* Employer Details */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">

                <h2 className="font-bold text-lg mb-5">
                    Employer Details
                </h2>

                <div className="space-y-4">

                    <div>
                        <p className="text-xs text-slate-500">
                            Contact Person
                        </p>

                        <p className="font-medium">
                            {message.name}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Company
                        </p>

                        <p className="font-medium">
                           {message.company_name}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Email
                        </p>

                        <p className="font-medium break-all">
                            {message.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Position
                        </p>

                        <p className="font-medium">
                            {message.position}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Category
                        </p>

                        <p className="font-medium">
                            {message.category}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Job Type
                        </p>

                        <p className="font-medium">
                            {message.job_type}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Experience Level
                        </p>

                        <p className="font-medium">
                            {message.experience_level}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Salary Range
                        </p>

                        <p className="font-medium">
                            {message.salary_range}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">
                            Timeline
                        </p>

                        <p className="font-medium">
                            {message.timeline}
                        </p>
                    </div>

                </div>

            </div>

            {/* Email Composer */}
            <div className="lg:col-span-2">

                <div className="bg-white rounded-2xl shadow-sm border">

                    {/* Email Header */}
                    <div className="border-b p-5">

                        <h2 className="font-bold text-lg">
                            Compose Response
                        </h2>

                    </div>

                    <div className="p-6 space-y-5">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                To
                            </label>

                            <input
                                type="text"
                                value={message.email}
                                disabled
                                className="
                                    w-full
                                    border
                                    rounded-xl
                                    px-4
                                    py-3
                                    bg-gray-50
                                "
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Subject
                            </label>

                            <input
                                type="text"
                                value={form.subject}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        subject: e.target.value
                                    })
                                }
                                className="
                                    w-full
                                    border
                                    rounded-xl
                                    px-4
                                    py-3
                                "
                                placeholder="Enter subject"
                                required
                                maxLength={100}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Message
                            </label>

                            <textarea
                                rows={12}
                                value={form.message}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        message: e.target.value
                                    })
                                }
                                className="
                                    w-full
                                    border
                                    rounded-xl
                                    px-4
                                    py-3
                                    resize-none
                                "
                                placeholder="Write your response..."
                                required
                                maxLength={1000}
                            />
                        </div>

                        <div className="flex justify-end gap-3">

                            <button
                                type="button"
                                className="
                                    px-5
                                    py-3
                                    border
                                    rounded-xl
                                "
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="
                                    px-6
                                    py-3
                                    bg-cyan-600
                                    hover:bg-cyan-700
                                    text-white
                                    rounded-xl
                                "
                            >
                                Send Email
                            </button>

                        </div>
                    </form> 
                    </div>
                                 
                </div>
               
            </div>

        </div>

    </div>

</section>
</AdminLayout>





    );
}