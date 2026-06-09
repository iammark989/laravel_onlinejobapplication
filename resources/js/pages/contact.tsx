import React, { useState } from "react";
import MainLayout from "@/components/layout/mainLayout";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";


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
    privacy_consent:false,
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
          privacy_consent:false,
        });

         Swal.fire({
              icon: "success",
              title: "Inquiry Submitted!",
              text: "You will be redirected shortly...",
              showConfirmButton: true,
              confirmButtonColor: "#D4AF37",
              timer: 10000,
              timerProgressBar: true,
          }).then((result) => {
              if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                  window.location.href = "/about";
              }
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
              <input name="name" placeholder="Full Name" className="input" value={form.name} onChange={handleChange} required />
              <input name="email" placeholder="Email" className="input" value={form.email} onChange={handleChange} required/>
              <input name="contact" placeholder="Contact Number" value={form.contact} className="input" onChange={handleChange} required/>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="font-semibold text-lg">2. Company <span className="text-red-500">*</span></h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="company_name" placeholder="Company Name" className="input" value={form.company_name} onChange={handleChange} required/>
              <input name="company_website" placeholder="Company Website" className="input" value={form.company_website} onChange={handleChange} />

              <select name="company_size" className="input" value={form.company_size} onChange={handleChange} required>
                <option value="">Company Size</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="200+">200+</option>
              </select>

              <input name="industry" placeholder="Industry" value={form.industry} className="input" onChange={handleChange} required/>
            </div>
          </div>

          {/* SECTION 3 */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="font-semibold text-lg">3. Hiring Details <span className="text-red-500">*</span></h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="position" placeholder="Position / Role" className="input" value={form.position} onChange={handleChange} required/>

              <select name="category" className="input" value={form.category} onChange={handleChange} required>
                <option value="">Category</option>
                <option value="IT OR SOFTWARE">IT / Software</option>
                <option value="ADMIN OR VA">Admin / VA</option>
                <option value="MARKETING">Marketing</option>
                <option value="FINANCE">Finance</option>
                <option value="CUSTOMER SUPPORT">Customer Support</option>
              </select>

              <select name="job_type" className="input" value={form.job_type} onChange={handleChange} required>
                <option value="">Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Freelance">Freelance</option>
                <option value="Project-based">Project-based</option>
              </select>

              <select name="experience_level" className="input" value={form.experience_level} onChange={handleChange} required>
                <option value="">Experience Level</option>
                <option value="Entry">Entry</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
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
              <input name="salary_range" placeholder="Budget / Salary Range" value={form.salary_range} className="input" onChange={handleChange} required/>

              <select name="timeline" className="input" onChange={handleChange} required>
                <option value="">Hiring Timeline</option>
                <option value="Immediate">Immediate</option>
                <option value="1 week">1 week</option>
                <option value="1 month">1 month</option>
                <option value="Flexible">Flexible</option>
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
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

            {/** T&C - PRIVACY POLICY */}
            <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1"
                    name='privacy_consent'
                    checked={form.privacy_consent}
                    onChange={(e) => setForm({...form, privacy_consent: e.target.checked})}
                  />

                  <label htmlFor="consent" className="text-sm text-gray-600">
                  I have read and agree to the{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    >
                 Privacy Policy
                  </a>{" "}
                    and{" "}
                  <a
                    href="/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    >
                  Terms & Conditions
                  </a>.
                  </label>
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