import React, { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { router, usePage } from "@inertiajs/react";

const EditCareerPage: React.FC = () => {
const { job } = usePage().props as any;

const [form, setForm] = useState({
title: job.title || "",
employment_type: job.employment_type || "",
work_setup: job.work_setup || "",
location: job.location || "",
salary: job.salary || "",
short_description: job.short_description || "",
description: job.description || "",
requirements: job.requirements || "",
responsibilities: job.responsibilities || "",
status: job.status || "published",
posted_by: job.posted_by || "",
expires_at: job.expires_at
? job.expires_at.substring(0, 10)
: "",
});

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();

router.put(`/admin/careers/${job.id}`, form, {
  preserveScroll: true,
  onSuccess: () => {
    //console.log("Job updated successfully");
  },
  onError: (errors) => {
   // console.log(errors);
  },
});

};

return ( <AdminLayout> <section className="w-full"> <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">


      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Edit Job Opening
        </h1>

        <p className="text-gray-500 mt-2">
          Update job posting information
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>

            <input
              type="text"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
              required
            />
          </div>

          {/* Employment Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Employment Type
            </label>

            <select
              value={form.employment_type}
              onChange={(e) =>
                setForm({
                  ...form,
                  employment_type: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
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
              value={form.work_setup}
              onChange={(e) =>
                setForm({
                  ...form,
                  work_setup: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
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
              value={form.location}
              onChange={(e) =>
                setForm({
                  ...form,
                  location: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
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
              value={form.salary}
              onChange={(e) =>
                setForm({
                  ...form,
                  salary: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          {/* Expiration Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiration Date
            </label>

            <input
              type="date"
              value={form.expires_at}
              onChange={(e) =>
                setForm({
                  ...form,
                  expires_at: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          {/* Short Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description
            </label>

            <textarea
              rows={3}
              value={form.short_description}
              onChange={(e) =>
                setForm({
                  ...form,
                  short_description: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Job Description
            </label>

            <textarea
              rows={5}
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          {/* Requirements */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Requirements
            </label>

            <textarea
              rows={5}
              value={form.requirements}
              onChange={(e) =>
                setForm({
                  ...form,
                  requirements: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          {/* Responsibilities */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Responsibilities
            </label>

            <textarea
              rows={5}
              value={form.responsibilities}
              onChange={(e) =>
                setForm({
                  ...form,
                  responsibilities: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3"
            />
          </div>

          <div className="md:col-span-2 flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl"
            >
              Update Job
            </button>

            <button
              type="button"
              onClick={() => router.get("/admin/careers")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

    </div>
  </section>
</AdminLayout>


);
};

export default EditCareerPage;
