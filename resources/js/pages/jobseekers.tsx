import MainLayout from "@/components/layout/MainLayout";
import { Link } from "@inertiajs/react";

export default function JobSeekersPage() {
    return (
        <MainLayout>

            {/* Hero */}
            <section className="relative h-[500px] flex items-center justify-center">

                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600"
                    alt="Job Seekers"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Start Your Virtual Assistant Career
                    </h1>

                    <p className="mt-6 text-lg text-slate-200">
                        Connect with employers seeking talented virtual assistants
                        and discover rewarding remote opportunities.
                    </p>
                </div>

            </section>

            {/* Intro */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">

                    <h2 className="text-4xl font-bold text-slate-800">
                        Opportunities That Match Your Skills
                    </h2>

                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        Whether you're an experienced virtual assistant or just
                        beginning your remote work journey, we help connect you
                        with companies looking for dedicated professionals.
                    </p>

                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4">

                    <h2 className="text-center text-4xl font-bold mb-14">
                        Why Apply Through Us?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-white rounded-2xl p-6 shadow">
                            <h3 className="font-bold text-xl mb-3">
                                Remote Opportunities
                            </h3>

                            <p className="text-slate-600">
                                Access virtual assistant jobs from trusted employers.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow">
                            <h3 className="font-bold text-xl mb-3">
                                Career Growth
                            </h3>

                            <p className="text-slate-600">
                                Build valuable skills and advance your remote career.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow">
                            <h3 className="font-bold text-xl mb-3">
                                Easy Application
                            </h3>

                            <p className="text-slate-600">
                                Submit your profile and apply for multiple opportunities.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow">
                            <h3 className="font-bold text-xl mb-3">
                                Employer Connections
                            </h3>

                            <p className="text-slate-600">
                                Get matched with employers looking for your skills.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">

                    <h2 className="text-center text-4xl font-bold mb-14">
                        How It Works
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8 text-center">

                        <div>
                            <div className="text-5xl font-bold text-blue-600">1</div>
                            <h3 className="font-bold mt-4">Submit Application</h3>
                        </div>

                        <div>
                            <div className="text-5xl font-bold text-blue-600">2</div>
                            <h3 className="font-bold mt-4">Profile Review</h3>
                        </div>

                        <div>
                            <div className="text-5xl font-bold text-blue-600">3</div>
                            <h3 className="font-bold mt-4">Employer Matching</h3>
                        </div>

                        <div>
                            <div className="text-5xl font-bold text-blue-600">4</div>
                            <h3 className="font-bold mt-4">Start Your Career</h3>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">

                    <h2 className="text-4xl font-bold">
                        Ready to Find Your Next Opportunity?
                    </h2>

                    <p className="mt-4 text-slate-300">
                        Browse available positions and take the next step in your virtual assistant career.
                    </p>

                    <Link
                        href="/careers"
                        className="inline-block mt-8 px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700"
                    >
                        View Open Positions
                    </Link>

                </div>
            </section>

        </MainLayout>
    );
}