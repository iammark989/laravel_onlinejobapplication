import MainLayout from "@/components/layout/mainLayout";

export default function TermsAndConditionsPage() {
return ( 
<MainLayout> 
    <section className="bg-slate-50 min-h-screen py-20">
        <div className="max-w-5xl mx-auto px-4">


                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Terms & Conditions
                    </h1>

                    <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                        These Terms & Conditions govern the use of our website,
                        job application services, and employer inquiry forms.
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                        Effective Date: June 10, 2026
                    </p>
                </div>

                {/* Acceptance */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Acceptance of Terms
                    </h2>

                    <p className="text-slate-600 leading-relaxed">
                        By accessing this website, submitting a job application,
                        or sending an employer inquiry, you agree to comply with
                        these Terms & Conditions. If you do not agree, please
                        discontinue use of this website.
                    </p>
                </div>

                {/* Website Purpose */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Website Purpose
                    </h2>

                    <ul className="space-y-3 text-slate-600">
                        <li>• Provide information about our company and services.</li>
                        <li>• Allow job seekers to submit applications.</li>
                        <li>• Allow employers to submit hiring requests.</li>
                        <li>• Facilitate recruitment and communication activities.</li>
                    </ul>
                </div>

                {/* Two Column Section */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">

                    <div className="bg-white rounded-2xl shadow-sm border p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Job Applications
                        </h2>

                        <ul className="space-y-3 text-slate-600">
                            <li>• Information provided must be accurate.</li>
                            <li>• Applicants are responsible for keeping information updated.</li>
                            <li>• Submission does not guarantee employment.</li>
                            <li>• Applications may be reviewed or declined at our discretion.</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Employer Inquiries
                        </h2>

                        <ul className="space-y-3 text-slate-600">
                            <li>• Information submitted must be accurate.</li>
                            <li>• Hiring requirements must be legitimate and authorized.</li>
                            <li>• Submission does not guarantee candidate placement.</li>
                            <li>• Recruitment services may be subject to further review.</li>
                        </ul>
                    </div>

                </div>

                {/* User Responsibilities */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        User Responsibilities
                    </h2>

                    <ul className="space-y-3 text-slate-600">
                        <li>• Do not submit false or misleading information.</li>
                        <li>• Do not impersonate individuals or organizations.</li>
                        <li>• Do not upload harmful, unlawful, or inappropriate content.</li>
                        <li>• Do not attempt unauthorized access to website systems.</li>
                        <li>• Do not disrupt the website's operation.</li>
                    </ul>
                </div>

                {/* Privacy & Intellectual Property */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">

                    <div className="bg-white rounded-2xl shadow-sm border p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Privacy
                        </h2>

                        <p className="text-slate-600 leading-relaxed">
                            Information submitted through this website is handled
                            according to our Privacy Policy. By using this website,
                            you acknowledge and accept our data collection and
                            processing practices.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Intellectual Property
                        </h2>

                        <p className="text-slate-600 leading-relaxed">
                            All website content, branding, graphics, and materials
                            remain the property of GetStaffed by BKW unless
                            otherwise stated.
                        </p>
                    </div>

                </div>

                {/* Liability */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-amber-900">
                        Limitation of Liability
                    </h2>

                    <p className="text-amber-800 leading-relaxed">
                        While we strive to maintain accurate information and
                        reliable services, we cannot guarantee uninterrupted
                        website availability. We are not liable for damages
                        resulting from website use, service interruptions,
                        or reliance on website content.
                    </p>
                </div>

                {/* Modifications */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Updates to These Terms
                    </h2>

                    <p className="text-slate-600 leading-relaxed">
                        We reserve the right to update these Terms & Conditions
                        at any time. Continued use of the website constitutes
                        acceptance of any modifications.
                    </p>
                </div>

                {/* Contact Card */}
                <div className="bg-[#4B4843] text-white rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Contact Information
                    </h2>

                    <div className="space-y-2 text-slate-300">
                        <p><strong>Company:</strong> GetStaffed by BKW</p>
                        <p><strong>Email:</strong> info@getstaffedbybkw.com</p>
                        <p><strong>Phone:</strong> +63 927 417 4709</p>
                        <p><strong>Address:</strong> Pampanga, Philippines</p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-700">
                        <p className="text-sm text-slate-400">
                            By using this website, submitting a job application,
                            or sending an inquiry, you acknowledge that you have
                            read, understood, and agreed to these Terms &
                            Conditions.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </MainLayout>
);
}
