import MainLayout from '@/components/layout/MainLayout';
import { Link } from '@inertiajs/react';

export default function HomePage() {
    return (
        <MainLayout>

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center">

                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600"
                    alt="Virtual Assistant Recruitment"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Connecting Businesses with Exceptional Virtual Assistants
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-200">
                        We help companies hire qualified virtual assistants and
                        connect talented professionals with rewarding remote opportunities.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/careers"
                            className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold"
                        >
                            Browse Jobs
                        </Link>

                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition font-semibold"
                        >
                            Hire Talent
                        </Link>
                    </div>
                </div>

            </section>

            {/* About / Intro */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">

                    <h2 className="text-4xl font-bold text-slate-800 mb-6">
                        Your Partner in Virtual Assistant Recruitment
                    </h2>

                    <p className="text-slate-600 text-lg leading-relaxed">
                        From sourcing top virtual assistants to connecting job seekers
                        with the right opportunities, we provide recruitment solutions
                        that benefit both businesses and professionals. Whether you're
                        looking to hire remote talent or start your virtual assistant
                        career, we're here to help you succeed.
                    </p>

                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-slate-800">
                            Our Services
                        </h2>

                        <p className="text-slate-600 mt-4">
                            Recruitment solutions designed for both employers and job seekers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Employers */}
                        <div className="bg-white rounded-3xl shadow-lg p-8">
                            <div className="text-5xl mb-5">🏢</div>

                            <h3 className="text-2xl font-bold text-slate-800">
                                For Employers
                            </h3>

                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Find qualified and pre-screened virtual assistants
                                who can support your operations, improve productivity,
                                and help your business grow.
                            </p>

                            <Link
                                href="/services/employers"
                                className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Job Seekers */}
                        <div className="bg-white rounded-3xl shadow-lg p-8">
                            <div className="text-5xl mb-5">💼</div>

                            <h3 className="text-2xl font-bold text-slate-800">
                                For Job Seekers
                            </h3>

                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Explore virtual assistant opportunities, connect
                                with trusted employers, and take the next step
                                toward a successful remote career.
                            </p>

                            <Link
                                href="/services/job-seekers"
                                className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                            >
                                Learn More
                            </Link>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4">

                    <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-center text-white">

                        <h2 className="text-4xl font-bold">
                            Ready to Get Started?
                        </h2>

                        <p className="mt-5 text-slate-300 text-lg">
                            Whether you're looking to hire a virtual assistant
                            or searching for your next remote opportunity,
                            we're ready to help.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                            <Link
                                href="/careers"
                                className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
                            >
                                View Open Positions
                            </Link>

                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>
            </section>

        </MainLayout>
    );
}