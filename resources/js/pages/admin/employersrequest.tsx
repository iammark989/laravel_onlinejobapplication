import AdminLayout from "@/components/layout/adminLayout";
import InfoCard from "@/components/sections/cards/InfoCards";
import { usePage } from "@inertiajs/react";

export default function EmployersRequestPage(){
    const { message } = usePage().props as any;
  return (
    <AdminLayout>
        
<div className="max-w-7xl mx-auto p-6">
    {/** HEADER */}
    <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h1 className="text-3xl font-bold text-slate-800">
                Employer Requests
            </h1>

            <p className="text-slate-500 mt-2">
                Manage hiring inquiries from employers.
            </p>
    </div>


    <div className="bg-white rounded-2xl shadow-sm border p-6">
                {/* COMPANY HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800">
                                {message.company_name}
                                </h2>

                                <p className="text-slate-500">
                                    {message.company_website}
                                </p>
                            </div>

                            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                                New Inquiry
                            </span>
                        </div>

                {/* CONTACT INFO */}
                <div className="mt-8">

                    <h3 className="font-semibold text-slate-800 mb-4">
                        Contact Information
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">

                        <InfoCard
                            label="Contact Person"
                            value={message.name}
                        />

                        <InfoCard
                            label="Email"
                            value={message.email}
                        />

                        <InfoCard
                            label="Contact Number"
                            value={message.contact}
                        />

                    </div>

                </div>

                 {/* MESSAGE */}
                <div className="mt-8">

                    <h3 className="font-semibold text-slate-800 mb-4">
                        Employer Message
                    </h3>

                    <div className="
                        bg-slate-50
                        border
                        rounded-2xl
                        p-6
                        whitespace-pre-wrap
                        leading-relaxed
                    ">
                        {message.message}
                    </div>

                </div>

                    {/* ACTION */}
                <div className="
                            mt-8
                            flex
                            flex-wrap
                            gap-3
                        ">
                            <button
                                className="
                                    px-5
                                    py-3
                                    bg-blue-600
                                    text-white
                                    rounded-xl
                                "
                            >
                                Mark as Reviewed
                            </button>

                            <a
                                href={`mailto:"$request.email"`}
                                className="
                                    px-5
                                    py-3
                                    bg-green-600
                                    text-white
                                    rounded-xl
                                "
                            >
                                Contact Employer
                            </a>
                        </div>

    </div>

</div>
</AdminLayout>
  );
}