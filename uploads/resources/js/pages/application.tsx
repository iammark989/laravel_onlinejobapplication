import MainLayout from '@/components/layout/MainLayout';
import { router,usePage } from '@inertiajs/react';
import { useState } from 'react';

import { PageProps as InertiaPageProps } from '@inertiajs/core';



export default function JobApplicationPage() {
    const { position } = usePage().props as any;
    const [ form, setForm ] = useState({
        job_id : "",
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        street_building: "",
        barangay: "",
        city: "",
        region: "",
        mobile_number: "",
        email: "",
        expected_salary: "",
        employment_status: "",
        resume_path: null as File | null,
        application_status: "",
        interview_date: "",
        interview_notes: "",
        hired_at: "",
        viewed_at: "",
        archived_at: "",
        admin_note: "",
        reviewed_by: "",
    });

     const [errorMsg,setErrorMsg ] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        router.post(`/careers/apply/${position.slug}`,form,{
        onError: (errors) => {
        setErrorMsg(errors.errormsg);
      
      console.error(errors);
        },
        onSuccess: () => {
       setForm({
        job_id : "",
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        street_building: "",
        barangay: "",
        city: "",
        region: "",
        mobile_number: "",
        email: "",
        expected_salary: "",
        employment_status: "",
        resume_path: null,
        application_status: "",
        interview_date: "",
        interview_notes: "",
        hired_at: "",
        viewed_at: "",
        archived_at: "",
        admin_note: "",
        reviewed_by: "",
      });
    },
        });

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
                            {errorMsg && (
                            <div className="text-red-500 text-sm mt-2">
                                {errorMsg}
                            </div>
                            )}
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
                                            First Name <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="first_name"
                                            value={form.first_name}
                                             onChange={(e) => setForm({...form, first_name: e.target.value})}
                                            placeholder="Enter first name"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Middle Name */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Middle Name
                                        </label>

                                        <input
                                            type="text"
                                            name="middle_name"
                                            value={form.middle_name}
                                            onChange={(e) => setForm({...form, middle_name: e.target.value})}
                                            placeholder="Enter middle name"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name="last_name"
                                            value={form.last_name}
                                            onChange={(e) => setForm({...form, last_name: e.target.value})}
                                            placeholder="Enter last name"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Suffix */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Suffix
                                        </label>
                                        
                                        <select
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            name="suffix"
                                            value={form.suffix}
                                            onChange={(e) => setForm({...form, suffix: e.target.value})}
                                        >
                                            <option value="">
                                                N/A
                                            </option>

                                            <option value="Sr">
                                                Sr
                                            </option>

                                            <option value="Jr">
                                                Jr
                                            </option>
                                            <option value="III">
                                                III
                                            </option>
                                        </select>
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
                                            Street / Building <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name='street_building'
                                            value={form.street_building}
                                            onChange={(e) => setForm({...form, street_building: e.target.value})}
                                            placeholder="Street / Building"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Barangay */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Barangay <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name='barangay'
                                            value={form.barangay}
                                            onChange={(e) =>setForm({...form, barangay: e.target.value}) }
                                            placeholder="Barangay"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
                                        />
                                    </div>

                                    {/* City */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            City <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name='city'
                                            value={form.city}
                                            onChange={(e) => setForm({...form, city: e.target.value})}
                                            placeholder="City"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Region */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Region <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name='region'
                                            value={form.region}
                                            onChange={(e) => setForm({...form, region: e.target.value})}
                                            placeholder="Region"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
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
                                            Mobile Number <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            name='mobile_number'
                                            value={form.mobile_number}
                                            onChange={(e) => setForm({...form, mobile_number: e.target.value})}
                                            maxLength={18}
                                            placeholder="09XXXXXXXXX"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="email"
                                            name='email'
                                            value={form.email}
                                            onChange={(e) => setForm({...form, email: e.target.value})}
                                            placeholder="example@email.com"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
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
                                            Expected Salary <span className="text-red-500">*</span>
                                        </label>

                                        <input
                                            type="number"
                                            maxLength={15}
                                            name='expected_salary'
                                            value={form.expected_salary}
                                            onChange={(e) => setForm({...form, expected_salary: e.target.value})}
                                            placeholder="Enter expected salary"
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Currently Employed */}
                                    <div>
                                        <label className="block mb-2 font-medium text-slate-700">
                                            Employment Status <span className="text-red-500">*</span>
                                        </label>

                                        <select
                                            name='employment_status'
                                            value={form.employment_status}
                                            onChange={(e) => setForm({...form,employment_status:e.target.value})}
                                            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                            required
                                        >
                                            <option value="">
                                                Select option
                                            </option>

                                            <option value="employed">
                                                Employed
                                            </option>

                                            <option value="unemployed">
                                                Unemployed
                                            </option>

                                            <option value="freelancer">
                                                Freelancer
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
                                        Upload Resume <span className="text-red-500">*</span>
                                    </label>

                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        name='resume_path'
                                       // value={form.resume_path}
                                        onChange={(e) => setForm({...form,resume_path:e.target.files?.[0] || null})}
                                        className="w-full border rounded-xl p-4 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-lg file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                                        required
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
