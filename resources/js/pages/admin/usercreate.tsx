import React, { useState } from "react";
import AdminLayout from "@/components/layout/adminLayout";
import { usePage, router } from "@inertiajs/react";
import { User, Mail, Shield, Lock } from "lucide-react";
import Swal from "sweetalert2";

const UserCreatePage: React.FC = () => {
  const { auth } = usePage().props as any;
  const user = auth?.user;

  const [form, setForm] = useState({
    image: null as File | null,
    username: "",
    name: "",
    email: "",
    role: "recruitment",
    password: "",
    password_confirmation: "",
});

const [ errorMsg,setErrorMsg ] = useState<Record<string, string>>({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    

    router.post("/create-new-user", form, {
        forceFormData: true,
        preserveScroll: true,
        onError: (error) => {
        setErrorMsg(error);
        //console.log(error);
        },
        onSuccess:()=>{
            Swal.fire({
                          icon: "success",
                          title: "User Successfully Added!",
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
                                    w-28
                                    h-28
                                    rounded-full
                                    bg-gray-100
                                    border
                                    overflow-hidden
                                    flex
                                    items-center
                                    justify-center
                                ">
                                    {form.image ? (
                                        <img
                                            src={URL.createObjectURL(form.image)}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <User
                                            size={40}
                                            className="text-gray-400"
                                        />
                                    )}
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

                        {/* Password */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                                   
                            <h2 className="text-xl font-bold text-gray-800 mb-6">
                                Security 
                            </h2>
                                        
                            <div className="grid md:grid-cols-2 gap-5">
                                                
                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Password <span className="text-red-500">* {errorMsg.password && (<span className="text-red-500 text-sm mt-2">Password Mismatch.</span>)}      </span>
                                    </label>

                                    <input
                                        type="password"
                                        value={form.password}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                password: e.target.value,
                                            })
                                        }
                                        className="w-full border rounded-xl px-4 py-3"
                                        required
                                        maxLength={16}
                                        minLength={8}
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Confirm Password <span className="text-red-500">*</span>  
                                    </label>

                                    <input
                                        type="password"
                                        value={form.password_confirmation}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                password_confirmation:
                                                    e.target.value,
                                            })
                                        }
                                        className="w-full border rounded-xl px-4 py-3"
                                        required
                                        minLength={8}
                                        maxLength={16}
                                    />
                                </div>

                            </div>

                        </div>

                        {/* Submit */}
                        <div className="flex justify-end">

                            <button
                                type="submit"
                                className="
                                    bg-cyan-600
                                    hover:bg-cyan-700
                                    text-white
                                    px-6
                                    py-3
                                    rounded-xl
                                    font-medium
                                    transition
                                "
                            >
                                Create User
                            </button>

                        </div>

                    </form>

                </div>

            </section>
    </AdminLayout>
  );
};

export default UserCreatePage;