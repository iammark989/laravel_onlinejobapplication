import MainLayout from "@/components/layout/mainLayout";

export default function PrivacyAndPolicyPage() {
return ( 
    <MainLayout> 
        <section className="bg-slate-50 min-h-screen py-20"> 
            <div className="max-w-5xl mx-auto px-4">


                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                        Privacy Policy
                    </h1>

                    <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                        We respect your privacy and are committed to protecting
                        the personal and business information you share with us.
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                        Effective Date: June 10, 2026
                    </p>
                </div>

                {/* Introduction */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Introduction
                    </h2>

                    <p className="text-slate-600 leading-relaxed">
                        This Privacy Policy explains what information we collect,
                        how we use it, how we protect it, and the rights available
                        to job applicants, employers, and website visitors.
                        By using our website or submitting information through our
                        forms, you agree to this Privacy Policy.
                    </p>
                </div>

                {/* Information Collected */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-6">
                        Information We Collect
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div>
                            <h3 className="font-semibold text-lg mb-3">
                                Job Applicants
                            </h3>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Full Name</li>
                                <li>• Address</li>
                                <li>• Mobile Number</li>
                                <li>• Email Address</li>
                                <li>• Resume / CV</li>
                                <li>• Employment History</li>
                                <li>• Salary Expectations</li>
                                <li>• Other Voluntary Information</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-3">
                                Employers & Hiring Partners
                            </h3>

                            <ul className="space-y-2 text-slate-600">
                                <li>• Contact Person Name</li>
                                <li>• Company Name</li>
                                <li>• Company Email</li>
                                <li>• Company Phone Number</li>
                                <li>• Company Address</li>
                                <li>• Hiring Requirements</li>
                                <li>• Staffing Details</li>
                                <li>• Other Voluntary Information</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Purpose */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Why We Collect Information
                    </h2>

                    <ul className="space-y-3 text-slate-600">
                        <li>• Evaluate job applications</li>
                        <li>• Communicate employment opportunities</li>
                        <li>• Assist employers in finding candidates</li>
                        <li>• Respond to inquiries and support requests</li>
                        <li>• Maintain recruitment records</li>
                        <li>• Improve our services and website</li>
                        <li>• Comply with legal obligations</li>
                    </ul>
                </div>

                {/* Protection */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Data Protection
                    </h2>

                    <p className="text-slate-600 leading-relaxed">
                        We implement reasonable administrative and technical
                        safeguards to protect information from unauthorized
                        access, disclosure, alteration, or misuse.
                        Access is restricted to authorized personnel only.
                    </p>
                </div>

                {/* Sharing */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Information Sharing
                    </h2>

                    <ul className="space-y-3 text-slate-600">
                        <li>
                            • Applicant information may be shared with
                            prospective employers for recruitment purposes.
                        </li>

                        <li>
                            • Employer information may be shared internally
                            with authorized personnel.
                        </li>

                        <li>
                            • We do not sell personal information.
                        </li>

                        <li>
                            • Information may be disclosed when required by law.
                        </li>
                    </ul>
                </div>

                {/* Retention */}
                <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Data Retention
                    </h2>

                    <p className="text-slate-600 leading-relaxed">
                        Information is retained only as long as necessary
                        to support recruitment activities, respond to inquiries,
                        maintain records, and comply with legal obligations.
                    </p>
                </div>

                {/* Rights */}
                <div className="bg-white rounded-2xl shadow-sm border p-8">
                    <h2 className="text-2xl font-semibold mb-4">
                        Your Rights
                    </h2>

                    <ul className="space-y-3 text-slate-600">
                        <li>• Request access to your information</li>
                        <li>• Request correction of inaccurate information</li>
                        <li>• Request deletion of your information</li>
                        <li>• Ask questions regarding data processing</li>
                    </ul>

                    <div className="mt-6 border-t pt-6">
                        <h3 className="font-semibold text-lg mb-2">
                            Contact Us
                        </h3>

                        <p className="text-slate-600">
                            Email: info@getstaffedbybkw.com
                        </p>

                        <p className="text-slate-600">
                            Phone: +63 927 417 4709
                        </p>

                        <p className="text-slate-600">
                            Address: Pampanga, Philippines
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </MainLayout>
);

}
