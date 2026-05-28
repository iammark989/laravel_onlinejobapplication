import MainLayout from '@/components/layout/MainLayout';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

import { PageProps as InertiaPageProps } from '@inertiajs/core';



export default function JobApplicationPage() {
    const { position } = usePage().props as any;
   // const { form, setForm } = useState({

   // });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    };

    return (
        <MainLayout>

            {/* Hero */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-5xl mx-auto px-4 text-center text-white">

                    <h1 className="text-4xl md:text-5xl font-bold">
                        Job Application Form
                    </h1>

                    <p className="mt-5 text-slate-300 text-lg">
                        Complete the application form below and upload your resume.
                    </p>

                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 bg-slate-100">
                <div className="max-w-5xl mx-auto px-4">

                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

                        <form onSubmit={handleSubmit} className="space-y-10">

                            {/* Position Applying For */}
                            <div>
                                <label className="block text-lg font-semibold text-slate-700 mb-3">
                                    Position Applying For
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    value={position.title}
                                    readOnly
                                    className="w-full border rounded-xl p-4 bg-slate-100 text-slate-700"
                                />
                            </div>

                            {/* Personal Details */}
                            <div>

                                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                                    Personal Details
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* First Name */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter first name"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* Middle Name */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Middle Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter middle name"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter last name"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* Suffix */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Suffix
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Jr., Sr., III"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* Address */}
                            <div>

                                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                                    Address Information
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* Street */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Street / Building
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Street / Building"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* Barangay */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Barangay
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Barangay"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* City */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            City
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="City"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* Region */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Region
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Region"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* Contact Details */}
                            <div>

                                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                                    Contact Details
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* Mobile Number */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Mobile Number
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="09XXXXXXXXX"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="example@email.com"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* Employment Details */}
                            <div>

                                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                                    Employment Details
                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* Expected Salary */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Expected Salary
                                        </label>

                                        <input
                                            type="number"
                                            placeholder="Enter expected salary"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* Currently Employed */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Currently Employed?
                                        </label>

                                        <select
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        >
                                            <option value="">
                                                Select option
                                            </option>

                                            <option value="yes">
                                                Yes
                                            </option>

                                            <option value="no">
                                                No
                                            </option>
                                        </select>
                                    </div>

                                </div>

                            </div>

                            {/* Resume Upload */}
                            <div>

                                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                                    Resume Upload
                                </h2>

                                <div>
                                    <label className="block mb-2 font-medium text-slate-700">
                                        Upload Resume
                                    </label>

                                    <input
                                        type="file"
                                        className="w-full border rounded-xl p-4 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-lg file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                                    />
                                </div>

                            </div>

                            {/* Submit Button */}
                            <div className="pt-5">

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
                                >
                                    Submit Application
                                </button>

                            </div>

                        </form>

                    </div>

                </div>
            </section>

        </MainLayout>
    );
}
