import React, { useState, useEffect } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { Link, usePage, router } from "@inertiajs/react";
import Swal from "sweetalert2";

import {
  Users,
  FileText,
  Eye,
  Download,
  Calendar,
  X,
  Mail,
  Phone,
} from "lucide-react";

const ApplicantsPage: React.FC = () => {
  const { job, applicants = [] } = usePage().props as any;

  const formatDate = (date: string) => {
  return new Date(date).toISOString().split("T")[0];
    };

  const [selectedApplicant, setSelectedApplicant] = useState<any>(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const formatName = (a: any) => {
  return `${a.last_name.toUpperCase()}, ${a.first_name.toUpperCase()} ${a.middle_name.toUpperCase() ?? ""} ${a.suffix ?? ""}`.replace(/\s+/g, " ").trim();
};

    const formatAddress = (a:any) => {
        return `${a.street_building}, ${a.barangay} ${a.city} ${a.region}`;
    };

  const handleView = (applicant: any) => {
    setSelectedApplicant(applicant);
    setOpenDrawer(true);
  };
  const { flash } = usePage().props as any;

  const handleSubmit = ( e: React.FormEvent ) => {
    e.preventDefault();
    router.put(`/admin/applicants/${selectedApplicant.id}`,form,{
         preserveScroll: true,

        onSuccess: () => {
        setOpenDrawer(false);
    
            },
    });
  }
  useEffect(() => {
    if (flash?.success) {
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: flash.success,
            showConfirmButton: false,
            timer: 2500,
        });
    }
}, [flash?.success]);

  const closeDrawer = () => {
    setOpenDrawer(false);
    setSelectedApplicant(null);
  };

  const [ form, setForm ] = useState({
        application_status:"",
        interview_date: "",
        interview_notes:"",
        admin_notes:"",
  });

  useEffect(() => {
  if (selectedApplicant) {
    setForm({
      application_status: selectedApplicant.application_status ?? "",
      interview_date: selectedApplicant.interview_date?.split(" ")[0] ?? "",
      interview_notes: selectedApplicant.interview_notes ?? "",
      admin_notes: selectedApplicant.admin_notes ?? "",
    });
  }
}, [selectedApplicant]);
  
  return (
    <AdminLayout>
      <section className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/careers"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to Careers
          </Link>

          <h1 className="mt-3 text-3xl font-bold text-gray-800">
            Applicants
          </h1>

          <p className="text-gray-500 mt-2">
            Manage applicants for this position.
          </p>
        </div>

        {/* Job Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {job.title}
              </h2>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {job.employment_type}
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {job.work_setup}
                </span>

                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {job.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-blue-50 px-5 py-4 rounded-xl">
              <Users size={22} />

              <div>
                <p className="text-sm text-gray-500">
                  Total Applicants
                </p>

                <p className="text-xl font-bold text-blue-700">
                  {applicants.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Applicant
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Contact
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Status
                </th>

                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Applied Date
                </th>

                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {applicants.map((applicant: any) => (
                <tr
                  key={applicant.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-800">
                        {applicant.first_name} {applicant.last_name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {applicant.position_applied}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div>
                      <p>{applicant.email}</p>
                      <p className="text-sm text-gray-500">
                        {applicant.mobile_number}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      {applicant.application_status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatDate(applicant.created_at)}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() => handleView(applicant)}
                        className="bg-blue-100 text-blue-700 p-2.5 rounded-lg hover:bg-blue-200"
                      >
                        <Eye size={18} />
                      </button>

                      <a
                        href={`${import.meta.env.VITE_IMAGE_URL}/${applicant.resume_path}`}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          bg-green-100
                          text-green-700
                          p-2.5
                          rounded-lg
                          hover:bg-green-200
                          transition
                        "
                      >
                        <Download size={18} />
                      </a>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {/* Mobile Cards */}
        <div className="grid gap-4 lg:hidden">
          {applicants.map((applicant: any) => (
            <div
              key={applicant.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h3 className="font-bold text-gray-800">
                    {applicant.first_name} {applicant.last_name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {applicant.email}
                  </p>
                </div>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                  {applicant.application_status}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <Calendar size={16} />
                {formatDate(applicant.created_at)}
              </div>

              <div className="mt-5 flex gap-2">

                <button
                  onClick={() => handleView(applicant)}
                  className="
                    flex-1
                    bg-blue-600
                    text-white
                    py-2.5
                    rounded-xl
                    text-center
                    hover:bg-blue-700
                  "
                >
                  View Details
                </button>

                <a
                  href={`${import.meta.env.VITE_IMAGE_URL}/${applicant.resume_path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1
                    bg-green-600
                    text-white
                    py-2.5
                    rounded-xl
                    text-center
                    hover:bg-green-700
                  "
                >
                  Resume
                </a>

              </div>
            </div>
          ))}
        </div>

         {/* ================= DRAWER ================= */}
        {openDrawer && selectedApplicant && (
          <>
            {/* Overlay */}
            <div
              onClick={closeDrawer}
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* Drawer */}
            <div className="
              fixed top-0 right-0 h-full w-full md:w-[480px]
              bg-white z-50 shadow-xl flex flex-col
            ">

              {/* Header */}
              <div className="p-5 border-b flex justify-between items-center">
                <h3 className="text-lg font-bold">
                  Applicant Details
                </h3>

                <button onClick={closeDrawer}>
                  <X />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4 overflow-y-auto">

                <div>
                  <p className="text-gray-500 text-sm">Name</p>
                  <p className="font-semibold">
                    {formatName(selectedApplicant)}
                  </p>
                </div>
                 <div>
                  <p className="text-gray-500 text-sm">Address</p>
                  <p className=" ">
                    {formatAddress(selectedApplicant)}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Expected Salary</p>
                  <p className=" ">
                    {selectedApplicant.expected_salary}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Employement Status</p>
                  <p className=" ">
                    {selectedApplicant.employment_status}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  {selectedApplicant.email}
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  {selectedApplicant.mobile_number}
                </div>

                {/* Resume */}
                <a
                  href={`${import.meta.env.VITE_IMAGE_URL}/${selectedApplicant.resume_path}`}
                  target="_blank"
                  className="block bg-green-600 text-white text-center py-2 rounded-xl"
                >
                  Download Resume
                </a>

                {/* Status Update */}

                <form onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm text-gray-600">
                    Application Status
                  </label>

                  <select 
                    name="application_status"
                    value={form.application_status}
                    onChange={(e) => setForm({...form,application_status: e.target.value})}
                  className="w-full border p-2 rounded-lg mt-1">
                    
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="for_interview">For Interview</option>
                    <option value="final_interview">Final Interview</option>
                    <option value="hired">Hired</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Interview Date
                  </label>

                  <input
                  name="interview_date"
                  value={form.interview_date}
                  onChange={(e)=> setForm({...form,interview_date: e.target.value})}
                  type="date"
                  className="w-full border p-2 rounded-lg mt-1"
                  disabled={
                    form.application_status !== "for_interview" &&
                    form.application_status !== "final_interview"
                } />
                    
                </div>
                

                {/* Notes */}
                <div>
                  <label className="text-sm text-gray-600">
                    Interview Notes
                  </label>

                  <textarea
                    name="interview_notes"
                    value={form.interview_notes}
                    onChange={(e) => setForm({...form,interview_notes: e.target.value})}
                    className="w-full border rounded-lg p-2 mt-1"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">
                    Admin Notes
                  </label>

                  <textarea
                    name="admin_notes"
                    value={form.admin_notes}
                    onChange={(e) => setForm({...form, admin_notes: e.target.value})}
                    className="w-full border rounded-lg p-2 mt-1"
                    rows={3}
                  />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl"
                    >
                  Save Changes
                </button>
                </form>
              </div>
            </div>
          </>
        )}

      </section>
    </AdminLayout>
  );
};

export default ApplicantsPage;