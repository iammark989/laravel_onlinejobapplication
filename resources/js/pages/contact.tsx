import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { router } from "@inertiajs/react";


const ContactUs: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    company_name: "",
    company_website: "",
    company_size: "",
    industry: "",
    position: "",
    category: "",
    job_type: "",
    experience_level: "",
    salary_range: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.post("/contact-us", form, {
      onSuccess: () => {
        setForm({
          name: "",
          email: "",
          contact: "",
          company_name: "",
          company_website: "",
          company_size: "",
          industry: "",
          position: "",
          category: "",
          job_type: "",
          experience_level: "",
          salary_range: "",
          timeline: "",
          message: "",
        });
      },
    });
  };

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto p-6 space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p className="text-gray-500">
            Tell us about the talent you are looking for
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* SECTION 1 */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="font-semibold text-lg">1. Contact <span className="text-red-500">*</span></h2>

            <div className="grid md:grid-cols-3 gap-4">
              <input name="name" placeholder="Full Name" className="input" onChange={handleChange} />
              <input name="email" placeholder="Email" className="input" onChange={handleChange} />
              <input name="contact" placeholder="Contact Number" className="input" onChange={handleChange} />
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="font-semibold text-lg">2. Company <span className="text-red-500">*</span></h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="company_name" placeholder="Company Name" className="input" onChange={handleChange} />
              <input name="company_website" placeholder="Company Website" className="input" onChange={handleChange} />

              <select name="company_size" className="input" onChange={handleChange}>
                <option value="">Company Size</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>200+</option>
              </select>

              <input name="industry" placeholder="Industry" className="input" onChange={handleChange} />
            </div>
          </div>

          {/* SECTION 3 */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="font-semibold text-lg">3. Hiring Details <span className="text-red-500">*</span></h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="position" placeholder="Position / Role" className="input" onChange={handleChange} />

              <select name="category" className="input" onChange={handleChange}>
                <option value="">Category</option>
                <option>IT / Software</option>
                <option>Admin / VA</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Customer Support</option>
              </select>

              <select name="job_type" className="input" onChange={handleChange}>
                <option value="">Job Type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Freelance</option>
                <option>Project-based</option>
              </select>

              <select name="experience_level" className="input" onChange={handleChange}>
                <option value="">Experience Level</option>
                <option>Entry</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>

              {/*<select name="work_setup" className="input" onChange={handleChange}>
                <option value="">Work Setup</option>
                <option>Remote</option>
                <option>On-site</option>
                <option>Hybrid</option>
              </select>

              <input name="location" placeholder="Location (if onsite/hybrid)" className="input" onChange={handleChange} />
                */}
            </div>
          </div>

          {/* SECTION 4 */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="font-semibold text-lg">4. Budget & Timeline <span className="text-red-500">*</span></h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="salary_range" placeholder="Budget / Salary Range" className="input" onChange={handleChange} />

              <select name="timeline" className="input" onChange={handleChange}>
                <option value="">Hiring Timeline</option>
                <option>Immediate</option>
                <option>1 week</option>
                <option>1 month</option>
                <option>Flexible</option>
              </select>
            </div>
          </div>

          {/* SECTION 5 */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="font-semibold text-lg">5. Message <span className="text-red-500">*</span></h2>

            <textarea
              name="message"
              placeholder="Tell us more about your hiring needs..."
              className="input h-32"
              onChange={handleChange}
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-700"
          >
            Submit Request
          </button>

        </form>
      </div>
    </MainLayout>
  );
};

export default ContactUs;