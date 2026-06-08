import AdminLayout from "@/components/layout/adminLayout";
import { Link } from "@inertiajs/react";
import { Eye } from "lucide-react";
import { usePage } from "@inertiajs/react";



export default function EmployerMessagesPage() {
    const { messages } = usePage().props as any;
    return (
        <AdminLayout>

            <div className="max-w-7xl mx-auto p-6">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Employer Messages
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Review employer inquiries and hiring requests.
                    </p>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block bg-white rounded-2xl shadow border overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-slate-50">
                            <tr>
                                <th className="text-left px-6 py-4">
                                    Name
                                </th>

                                <th className="text-left px-6 py-4">
                                    Company
                                </th>

                                <th className="text-left px-6 py-4">
                                    Position
                                </th>

                                <th className="text-left px-6 py-4">
                                    Job Type
                                </th>

                                <th className="text-center px-6 py-4">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {messages.map((message: any) => (
                                <tr
                                    key={message.id}
                                    className="border-t hover:bg-slate-50"
                                >
                                    <td className="px-6 py-4">
                                        {message.name}
                                    </td>

                                    <td className="px-6 py-4">
                                        {message.company_name}
                                    </td>

                                    <td className="px-6 py-4">
                                        {message.position}
                                    </td>

                                    <td className="px-6 py-4">
                                        {message.job_type}
                                    </td>

                                    <td className="px-6 py-4 text-center">

                                        <Link
                                            href={`/admin/employer-messages/${message.id}`}
                                            className="
                                                inline-flex
                                                items-center
                                                gap-2
                                                px-4
                                                py-2
                                                bg-blue-600
                                                text-white
                                                rounded-lg
                                                hover:bg-blue-700
                                                transition
                                            "
                                        >
                                            <Eye size={16} />

                                            View
                                        </Link>

                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">

                    {messages.map((message: any) => (

                        <div
                            key={message.id}
                            className="
                                bg-white
                                border
                                rounded-2xl
                                p-5
                                shadow-sm
                            "
                        >
                            <h3 className="font-bold text-slate-800">
                                {message.name}
                            </h3>

                            <p className="text-slate-500 mt-1">
                                {message.company_name}
                            </p>

                            <div className="mt-4 space-y-2 text-sm">

                                <p>
                                    <span className="font-medium">
                                        Position:
                                    </span>{" "}
                                    {message.position}
                                </p>

                                <p>
                                    <span className="font-medium">
                                        Job Type:
                                    </span>{" "}
                                    {message.job_type}
                                </p>

                            </div>

                            <Link
                                href={`/admin/employer-messages/${message.id}`}
                                className="
                                    mt-4
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-4
                                    py-2
                                    bg-blue-600
                                    text-white
                                    rounded-lg
                                "
                            >
                                <Eye size={16} />

                                View Details
                            </Link>

                        </div>

                    ))}

                </div>

            </div>

        </AdminLayout>
    );
}