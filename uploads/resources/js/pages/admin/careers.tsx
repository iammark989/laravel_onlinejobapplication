import React,{useState} from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import {router,usePage,Link} from "@inertiajs/react";
import Swal from "sweetalert2";
;
import {
  Briefcase,
  MapPin,
  Pencil,
  Trash2,
  Ban,
  
} from "lucide-react";

const CareersPage: React.FC = () => {
  const { openJobs = [] } = usePage().props as any;
  const jobs = Array.isArray(openJobs)
  ? openJobs
  : [];
  const { a, b} = usePage().props as any;

  const handleClose = (id: number) => {
  Swal.fire({
    title: "Close this job?",
    text: "Applicants will no longer be able to apply for this position.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, Close Job",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      router.patch(`/admin/careers/${id}/close`);
    }
  });
};

const handleDelete = (id: number) => {
  Swal.fire({
    title: "Delete this job?",
    text: "The job will be moved to Trash and can be restored later.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      router.delete(`/admin/careers/${id}`);
    }
  });
};
 


  const [form,setForm] = useState({
        'title':"",
        'employment_type':"",
        'work_setup':"",
        'location':"",
        'salary':"",
        'short_description':"",
        'description':"",
        'requirements':"",
        'responsibilities':"",
        'status':"",
        'posted_by':"",
        'expires_at':"",

  });

  //const{errorMsg,setErrorMsg} = useState("");

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    router.post("/admin/post-job",form,{

        onError: (errors) => {
           // setErrorMsg(errors.errormsg);
           console.log(errors)
        },
        onSuccess: () => {

        }


    });

   };

  return (
    <AdminLayout>
      <section className="w-full">
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Career Management
            </h1>

            <p className="text-gray-500 mt-2">
              Create and manage job openings
            </p>
          </div>

          {/* Create Job Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
                Post New Job Opening
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Job Title */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                </label>

                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={(e) => setForm({...form, title: e.target.value})}
                    placeholder="Frontend Developer"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>

                {/* Employment Type */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employment Type
                </label>

                <select
                    name="employment_type"
                    value={form.employment_type}
                    onChange={(e) => setForm({...form, employment_type: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                >
                    <option value="">Select Employment Type</option>
                    <option value="fulltime">Fulltime</option>
                    <option value="parttime">Parttime</option>
                    <option value="contract">Contract</option>
                </select>
                </div>

                {/* Work Setup */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Setup
                </label>

                <select
                    name="work_setup"
                    value={form.work_setup}
                    onChange={(e) => setForm({...form, work_setup: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                >
                    <option value="">Select Work Setup</option>
                    <option value="onsite">Onsite</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                </select>
                </div>

                {/* Location */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                </label>

                <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={(e) => setForm({...form, location: e.target.value})}
                    placeholder="Makati City"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>

                {/* Salary */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary
                </label>

                <input
                    type="text"
                    name="salary"
                    value={form.salary}
                    onChange={(e) => setForm({...form, salary: e.target.value})}
                    placeholder="₱30,000 - ₱50,000"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                {/* Status 
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                </label>

                <select
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Status</option>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="closed">Closed</option>
                </select>
                </div>
                    */}
                {/* Expiration Date */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiration Date
                </label>

                <input
                    type="date"
                    name="expires_at"
                    value={form.expires_at}
                    onChange={(e) => setForm({...form, expires_at: e.target.value})}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                </div>

                {/* Short Description */}
                <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Short Description
                </label>

                <textarea
                    rows={3}
                    name="short_description"
                    value={form.short_description}
                    onChange={(e) => setForm({...form, short_description: e.target.value})}
                    placeholder="Short preview for career page..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                />
                </div>

                {/* Full Description */}
                <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Job Description
                </label>

                <textarea
                    rows={5}
                    name="description"
                    value={form.description}
                    onChange={(e) => setForm({...form, description: e.target.value})}
                    placeholder="Enter complete job description..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                />
                </div>

                {/* Requirements */}
                <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Requirements
                </label>

                <textarea
                    rows={5}
                    name="requirements"
                    value={form.requirements}
                    onChange={(e) => setForm({...form, requirements: e.target.value})}
                    placeholder="Enter job requirements..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                />
                </div>

                {/* Responsibilities */}
                <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Responsibilities
                </label>

                <textarea
                    rows={5}
                    name="responsibilities"
                    value={form.responsibilities}
                    onChange={(e) => setForm({...form, responsibilities: e.target.value})}
                    placeholder="Enter job responsibilities..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                />
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                <button
                    type="submit"
                    className="
                    w-full
                    sm:w-auto
                    bg-blue-600
                    hover:bg-blue-700
                    transition
                    text-white
                    font-semibold
                    px-6
                    py-3
                    rounded-xl
                    "
                >
                    Post Job Opening
                </button>
                </div>
            </form>
            </div>

          {/* Active Jobs */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-gray-800">
                Active Job Openings
              </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              {jobs.map((job: any) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">

                    {/* Left */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                          <Briefcase size={18} />
                        </div>

                        <h3 className="text-lg font-bold text-gray-800">
                          {job.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">
                          {job.employment_type}
                        </span>

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          {job.work_setup}
                        </span>
                      </div>

                      <div className="flex items-center text-sm text-gray-500 gap-2">
                        <MapPin size={16} />

                        <span>{job.location}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">

                      {/* Edit */}
                      <button
                        onClick={() => router.get(`/admin/careers/${job.id}/edit`)}
                        className="
                          bg-yellow-100
                          hover:bg-yellow-200
                          text-yellow-700
                          p-2.5
                          rounded-lg
                          transition
                        "
                        title="Edit Job"
                      >
                        <Pencil size={18} />
                      </button>

                      {/* Close */}
                      <button
                        onClick={() => handleClose(job.id)}
                        className="
                          bg-orange-100
                          hover:bg-orange-200
                          text-orange-700
                          p-2.5
                          rounded-lg
                          transition
                        "
                        title="Close Job"
                      >
                        <Ban size={18} />
                      </button>

                      {/* Soft Delete */}
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="
                          bg-red-100
                          hover:bg-red-200
                          text-red-700
                          p-2.5
                          rounded-lg
                          transition
                        "
                        title="Delete Job"
                      >
                        <Trash2 size={18} />
                      </button>
                      
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-5 pt-4 border-t flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Total Applicants
                    </span>

                    {/** View Applicants */}
                    <Link
                      href={`/admin/careers/${job.slug}/applicants`}
                      className="
                        bg-blue-100
                        hover:bg-blue-200
                        text-blue-700
                        px-4
                        py-2
                        rounded-lg
                        transition
                      "
                    >
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {job.applicants}
                    </span>
                      View Applicants
                    </Link>
                      
                   
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </AdminLayout>
  );
};

export default CareersPage;