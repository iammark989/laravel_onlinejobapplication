import React, { useState } from "react";
import AdminLayout from "@/components/layout/adminLayout";
import { usePage, router } from "@inertiajs/react";
import { User, Mail, Shield, Lock } from "lucide-react";

const ProfilePage: React.FC = () => {
  const { auth } = usePage().props as any;
  const user = auth?.user;

  const [form, setForm] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.put("/admin/profile/password", form, {
      preserveScroll: true,
      onSuccess: () => {
        setForm({
          current_password: "",
          password: "",
          password_confirmation: "",
        });
      },
    });
  };

  return (
    <AdminLayout>
      <section className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              My Profile
            </h1>

            <p className="text-gray-500 mt-2">
              View your account information and manage your password.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Profile Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                <div className="flex justify-center mb-5">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <User size={40} className="text-blue-600" />
                  </div>
                </div>

                <h2 className="text-center text-xl font-bold text-gray-800">
                  {user?.name}
                </h2>

                <p className="text-center text-gray-500 mt-1">
                  {user?.role}
                </p>

              </div>
            </div>

            {/* Details + Password */}
            <div className="lg:col-span-2 space-y-6">

              {/* Account Information */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Account Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Username
                    </label>

                    <div className="flex items-center border rounded-xl px-4 py-3 bg-gray-50">
                      <User size={18} className="text-gray-400 mr-2" />
                      <span>{user?.username}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Full Name
                    </label>

                    <div className="flex items-center border rounded-xl px-4 py-3 bg-gray-50">
                      <User size={18} className="text-gray-400 mr-2" />
                      <span>{user?.name}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Email Address
                    </label>

                    <div className="flex items-center border rounded-xl px-4 py-3 bg-gray-50">
                      <Mail size={18} className="text-gray-400 mr-2" />
                      <span>{user?.email}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Role
                    </label>

                    <div className="flex items-center border rounded-xl px-4 py-3 bg-gray-50">
                      <Shield size={18} className="text-gray-400 mr-2" />
                      <span>{user?.role}</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Change Password */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                <div className="flex items-center gap-2 mb-6">
                  <Lock className="text-blue-600" size={22} />

                  <h2 className="text-xl font-bold text-gray-800">
                    Change Password
                  </h2>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Current Password
                    </label>

                    <input
                      type="password"
                      value={form.current_password}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          current_password: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      New Password
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
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      value={form.password_confirmation}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          password_confirmation: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      w-full md:w-auto
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      font-medium
                      px-6
                      py-3
                      rounded-xl
                      transition
                    "
                  >
                    Update Password
                  </button>

                </form>

              </div>

            </div>

          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default ProfilePage;