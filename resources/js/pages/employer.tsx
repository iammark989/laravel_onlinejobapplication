import MainLayout from "@/components/layout/MainLayout";
import { Link } from "@inertiajs/react";

export default function EmployersPage() {
    return (
        <MainLayout>

            {/* Hero */}
            <section className="relative h-[500px] flex items-center justify-center">

                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600"
                    alt="Employers"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Hire Exceptional Virtual Assistants
                    </h1>

                    <p className="mt-6 text-lg text-slate-200">
                        Build a productive remote team with qualified,
                        pre-screened virtual assistants tailored to your business needs.
                    </p>
                </div>

            </section>

            {/* Intro */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">

                    <h2 className="text-4xl font-bold text-slate-800">
                        Recruitment Solutions for Growing Businesses
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        We help businesses connect with skilled virtual assistants
                        who can support administrative tasks, customer service,
                        lead generation, social media management, bookkeeping,
                        and more.
                    </p>

                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4">

                    <h2 className="text-center text-4xl font-bold mb-14">
                        Why Partner With Us?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-white rounded-2xl p-6 shadow">
                            <h3 className="font-bold text-xl mb-3">
                                Pre-Screened Talent
                            </h3>

                            <p className="text-slate-600">
                                Save time by meeting qualified candidates
                                who match your requirements.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow">
                            <h3 className="font-bold text-xl mb-3">
                                Faster Hiring
                            </h3>

                            <p className="text-slate-600">
                                Access a pool of skilled virtual assistants
                                ready for immediate placement.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow">
                            <h3 className="font-bold text-xl mb-3">
                                Flexible Staffing
                            </h3>

                            <p className="text-slate-600">
                                Hire part-time, full-time, or project-based
                                virtual assistants.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow">
                            <h3 className="font-bold text-xl mb-3">
                                Ongoing Support
                            </h3>

                            <p className="text-slate-600">
                                We assist throughout the recruitment process
                                to ensure successful placements.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">

                    <h2 className="text-center text-4xl font-bold mb-14">
                        Our Hiring Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8 text-center">

                        <div>
                            <div className="text-5xl font-bold text-blue-600">1</div>
                            <h3 className="font-bold mt-4">Tell Us Your Needs</h3>
                        </div>

                        <div>
                            <div className="text-5xl font-bold text-blue-600">2</div>
                            <h3 className="font-bold mt-4">Candidate Matching</h3>
                        </div>

                        <div>
                            <div className="text-5xl font-bold text-blue-600">3</div>
                            <h3 className="font-bold mt-4">Interview & Selection</h3>
                        </div>

                        <div>
                            <div className="text-5xl font-bold text-blue-600">4</div>
                            <h3 className="font-bold mt-4">Hire & Onboard</h3>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">

                    <h2 className="text-4xl font-bold">
                        Ready to Build Your Team?
                    </h2>

                    <p className="mt-4 text-slate-300">
                        Let us connect you with reliable virtual assistants who can help your business grow.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700"
                    >
                        Request Talent
                    </Link>

                </div>
            </section>

        </MainLayout>
    );
}