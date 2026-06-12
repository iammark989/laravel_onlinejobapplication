import React, { useState } from "react";
import AdminLayout from "@/components/layout/adminLayout";
import { usePage, router } from "@inertiajs/react";
import { User, Mail, Shield, Lock } from "lucide-react";
import Swal from "sweetalert2";

const UserEditPage: React.FC = () => {
  const { users } = usePage().props as any;
 
  const [form, setForm] = useState({
    image: null as File | null,

    username: users.username,
    name: users.name,
    email: users.email,

    role: users.role,

    is_active: users.is_active,

});


const [ errorMsg,setErrorMsg ] = useState<Record<string, string>>({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.post(`/admin/users/${users.username}/save`, form, {
        forceFormData: true,
        preserveScroll: true,
        onError: (error) => {
        setErrorMsg(error);
        //console.log(error);
        },
        onSuccess:()=>{
            Swal.fire({
                          icon: "success",
                          title: "Update Saved!",
                          //text: "User Successfully Added",
                          showConfirmButton: true,
                          confirmButtonColor: "#D4AF37",
                          timer: 2000,
                          timerProgressBar: true,
                      }).then((result) => {
                          if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                              window.location.href = "/admin/user-maintenance";
                          }
                      });
        },
    });
  };

  return (
    <AdminLayout>
      <section className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="mb-8">

                        <h1 className="text-3xl font-bold text-gray-800">
                            Create User
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Create a new administrator or team member.
                        </p>

                    </div>

                    

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* Profile Image */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                            <h2 className="text-xl font-bold text-gray-800 mb-6">
                                Profile Image
                            </h2>

                            <div className="flex flex-col items-center gap-4">

                                <div className="
                                            w-32
                                            h-32
                                            rounded-full
                                            overflow-hidden
                                            border-4
                                            border-blue-100
                                            shadow-md
                                        ">
                                            {form.image ? (
                                                <img
                                                    src={URL.createObjectURL(form.image)}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <img
                                                    src={`${import.meta.env.VITE_IMAGE_URL}/files/empimages/${users.image}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                            <img
                                                src={`${import.meta.env.VITE_IMAGE_URL}/files/empimages/${users.image}`}
                                                alt="User"
                                                className="
                                                    w-full
                                                    h-full
                                                    object-cover
                                                "
                                            />
                                            
                                        </div>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            image:
                                                e.target.files?.[0] || null,
                                        })
                                    }
                                />

                            </div>

                            

                        </div>

                        {/* Account Information */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                            <h2 className="text-xl font-bold text-gray-800 mb-6">
                                Account Information
                            </h2>

                            

                            <div className="grid md:grid-cols-2 gap-5">

                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Username <span className="text-red-500">* {errorMsg.username && (<span className="text-red-500 text-sm mt-2">Username already exist.</span>)}      </span>
                                    </label>

                                    <input
                                        type="text"
                                        value={form.username}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                username: e.target.value,
                                            })
                                        }
                                        className="w-full border rounded-xl px-4 py-3"
                                        required
                                        maxLength={16}
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: e.target.value,
                                            })
                                        }
                                        className="w-full border rounded-xl px-4 py-3"
                                        required
                                        maxLength={99}
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>

                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                email: e.target.value,
                                            })
                                        }
                                        className="w-full border rounded-xl px-4 py-3"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Role <span className="text-red-500">*</span>
                                    </label>

                                    <select
                                        value={form.role}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                role: e.target.value,
                                            })
                                        }
                                        className="w-full border rounded-xl px-4 py-3"
                                    >
                                        <option value="administrator">
                                            Administrator
                                        </option>

                                        <option value="recruitment">
                                            Recruitment
                                        </option>

                                        <option value="marketing">
                                            Marketing
                                        </option>

                                    </select>
                                </div>

                            </div>

                        </div>

                        {/** USER STATUS */}

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                            <h2 className="text-xl font-bold text-gray-800 mb-6">
                                Account Status
                            </h2>

                            <div className="flex items-center justify-between">

                                <div>

                                    <h3 className="font-semibold text-gray-800">
                                        User Access
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        Disable this user from accessing the admin portal.
                                    </p>

                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setForm({
                                            ...form,
                                            is_active: !form.is_active,
                                        })
                                    }
                                    className={`
                                        relative
                                        inline-flex
                                        h-7
                                        w-14
                                        items-center
                                        rounded-full
                                        transition
                                        ${
                                            form.is_active
                                                ? "bg-green-500"
                                                : "bg-gray-300"
                                        }
                                    `}
                                >
                                    <span
                                        className={`
                                            inline-block
                                            h-5
                                            w-5
                                            transform
                                            rounded-full
                                            bg-white
                                            transition
                                            ${
                                                form.is_active
                                                    ? "translate-x-8"
                                                    : "translate-x-1"
                                            }
                                        `}
                                    />
                                </button>

                            </div>

                            <div className="mt-4">

                                {form.is_active ? (
                                    <span className="
                                        px-3 py-1
                                        rounded-full
                                        bg-green-100
                                        text-green-700
                                        text-sm
                                    ">
                                        Active
                                    </span>
                                ) : (
                                    <span className="
                                        px-3 py-1
                                        rounded-full
                                        bg-red-100
                                        text-red-700
                                        text-sm
                                    ">
                                        Inactive
                                    </span>
                                )}

                            </div>

                        </div>

                       

                        {/* Submit */}
                        <button
                                type="submit"
                                className="
                                    bg-amber-500
                                    hover:bg-amber-600
                                    text-white
                                    px-6
                                    py-3
                                    rounded-xl
                                    font-medium
                                    transition
                                "
                            >
                                Update
                            </button>

                     

                    </form>

                </div>

            </section>
    </AdminLayout>
  );
};

export default UserEditPage;