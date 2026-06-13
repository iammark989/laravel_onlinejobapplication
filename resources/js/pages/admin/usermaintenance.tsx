import React from "react";
import AdminLayout from "@/components/layout/adminLayout";
import { Link, usePage } from "@inertiajs/react";
import { Plus, Pencil } from "lucide-react";

const UserMaintenancePage: React.FC = () => {

  
    
  const { users } = usePage().props as any;
        

    return (
        <AdminLayout>

            <section className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">
                                User Maintenance
                            </h1>

                            <p className="text-gray-500 mt-2">
                                Manage system users and permissions.
                            </p>
                        </div>

                        <Link
                            href="/admin/user-maintenance/create-user"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                bg-cyan-500
                                hover:bg-cyan-700
                                text-white
                                px-5
                                py-3
                                rounded-xl
                                font-medium
                                transition
                            "
                        >
                            <Plus size={18} />

                            Create User
                        </Link>

                    </div>

                    {/* Desktop Table */}
                    <div
                        className="
                            hidden
                            md:block
                            bg-white
                            rounded-2xl
                            shadow-sm
                            border
                            border-gray-100
                            overflow-hidden
                        "
                    >

                        <table className="w-full">

                            <thead className="bg-gray-50">

                                <tr>

                                    <th className="text-left px-6 py-4 font-semibold text-gray-700">
                                        Name
                                    </th>

                                    <th className="text-left px-6 py-4 font-semibold text-gray-700">
                                        Username
                                    </th>

                                    <th className="text-left px-6 py-4 font-semibold text-gray-700">
                                        Role
                                    </th>

                                    <th className="text-left px-6 py-4 font-semibold text-gray-700">
                                        Status
                                    </th>

                                    <th className="text-center px-6 py-4 font-semibold text-gray-700">
                                        Actions
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {users.map((user: any) => (

                                    <tr
                                        key={user.id}
                                        className="border-t"
                                    >

                                        <td className="px-6 py-4">
                                            {user.name}
                                        </td>

                                        <td className="px-6 py-4">
                                            {user.username}
                                        </td>

                                        <td className="px-6 py-4">

                                            <span
                                                className="
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-sm
                                                    bg-blue-100
                                                    text-blue-700
                                                "
                                            >
                                                {user.role}
                                            </span>

                                        </td>

                                        <td className="px-6 py-4">

                                                {user.is_active == true ? 
                                                <span
                                                    className="
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-sm
                                                    bg-blue-100
                                                    text-blue-700
                                                "
                                            >Active</span> : <span
                                                    className="
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-sm
                                                    bg-red-100
                                                    text-red-500
                                                "
                                            >Inactive</span>}
                                          

                                        </td>

                                        <td className="px-6 py-4 text-center">

                                            <Link
                                                href={`/admin/users/${user.username}/edit`}
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-2
                                                    bg-yellow-500
                                                    hover:bg-yellow-600
                                                    text-white
                                                    px-4
                                                    py-2
                                                    rounded-lg
                                                    transition
                                                "
                                            >
                                                <Pencil size={16} />

                                                Edit
                                            </Link>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">

                        {users.map((user: any) => (

                            <div
                                key={user.id}
                                className="
                                    bg-white
                                    rounded-2xl
                                    shadow-sm
                                    border
                                    border-gray-100
                                    p-5
                                "
                            >

                                <div className="space-y-2">

                                    <div>

                                        <p className="text-xs text-gray-500">
                                            Name
                                        </p>

                                        <p className="font-semibold">
                                            {user.name}
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-xs text-gray-500">
                                            Username
                                        </p>

                                        <p>
                                            {user.username}
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-xs text-gray-500">
                                            Role
                                        </p>

                                        <span
                                            className="
                                                inline-block
                                                mt-1
                                                px-3
                                                py-1
                                                rounded-full
                                                text-sm
                                                bg-blue-100
                                                text-blue-700
                                            "
                                        >
                                            {user.role}
                                        </span>

                                    </div>

                                     <div>

                                        <p className="text-xs text-gray-500">
                                            Status
                                        </p>

                                       {user.is_active == true ? 
                                                <span
                                                    className="
                                                    inline-block
                                                    mt-1
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-sm
                                                    bg-blue-100
                                                    text-blue-700
                                                "
                                            >Active</span> : <span
                                                    className="
                                                    inline-block
                                                    mt-1
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-sm
                                                    bg-red-100
                                                    text-red-700
                                                "
                                            >Inactive</span>}

                                    </div>

                                </div>

                                <Link
                                    href={`/admin/users/${user.username}/edit`}
                                    className="
                                        mt-4
                                        w-full
                                        flex
                                        justify-center
                                        items-center
                                        gap-2
                                        bg-yellow-500
                                        hover:bg-yellow-600
                                        text-white
                                        py-3
                                        rounded-xl
                                    "
                                >
                                    <Pencil size={16} />

                                    Edit User
                                </Link>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </AdminLayout>
    );
};

export default UserMaintenancePage;