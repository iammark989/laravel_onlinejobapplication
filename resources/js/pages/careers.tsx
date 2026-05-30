import MainLayout from '@/components/layout/MainLayout';
import { router, usePage, Link } from "@inertiajs/react";


export default function CareerPage() {
   

    const { openJobs = [] } = usePage().props as any;

    const jobs = Array.isArray(openJobs)
        ? openJobs
        : [];

    return (
        <MainLayout>

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center">

                <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600"
                    alt="career"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Careers
                    </h1>

                    <p className="mt-5 text-lg max-w-2xl mx-auto text-slate-200">
                        Join our growing team and build your future with us.
                    </p>
                </div>
                    
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 text-center">

                    <h2 className="text-4xl font-bold text-slate-800 mb-6">
                        Why Work With Us?
                    </h2>

                    <p className="text-slate-600 leading-relaxed text-lg">
                        We believe in innovation, collaboration, and continuous growth.
                        Our company provides a supportive environment where employees
                        can develop their skills, contribute meaningful work, and grow
                        professionally.
                    </p>

                </div>
            </section>

            {/* Job Listings */}
            <section className="py-20 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-slate-800">
                            Open Positions
                        </h2>

                        <p className="mt-4 text-slate-600">
                            Explore exciting opportunities and become part of our team.
                        </p>
                    </div>

                    <div className="grid gap-8">

                        {jobs.length > 0 ? (
                            jobs.map((job: any) => (
                                <div
                                    key={job.id}
                                    className="
                                        bg-white
                                        rounded-3xl
                                        shadow-lg
                                        p-6
                                        md:p-8
                                        hover:shadow-xl
                                        transition
                                    "
                                >

                                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">

                                        {/* Left Content */}
                                        <div className="flex-1">

                                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                                                {job.title}
                                            </h3>

                                            <div className="flex flex-wrap gap-3 mt-4">

                                                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium capitalize">
                                                    {job.employment_type}
                                                </span>

                                                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium capitalize">
                                                    {job.work_setup}
                                                </span>

                                                <span className="px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                                                    {job.location}
                                                </span>

                                            </div>

                                            <p className="mt-5 text-slate-600 leading-relaxed">
                                                {job.short_description}
                                            </p>

                                        </div>

                                        {/* Right Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">

                                            {/* View Details */}
                                            <Link
                                                href={`/careers/${job.slug}`}
                                                className="
                                                    text-center
                                                    px-6
                                                    py-3
                                                    border
                                                    border-slate-300
                                                    text-slate-700
                                                    rounded-xl
                                                    hover:bg-slate-100
                                                    transition
                                                    font-medium
                                                "
                                            >
                                                View Details
                                            </Link>

                                            {/* Apply */}
                                            <Link
                                                href={`/careers/${job.slug}/apply`}
                                                className="
                                                    text-center
                                                    px-6
                                                    py-3
                                                    bg-blue-600
                                                    text-white
                                                    rounded-xl
                                                    hover:bg-blue-700
                                                    transition
                                                    font-medium
                                                "
                                            >
                                                Apply Now
                                            </Link>

                                        </div>

                                    </div>

                                </div>
                            ))
                        ) : (
                            <div className="bg-white rounded-3xl shadow-md p-10 text-center">
                                <h3 className="text-2xl font-bold text-slate-800">
                                    No Open Positions Yet
                                </h3>

                                <p className="mt-3 text-slate-500">
                                    Please check back again soon for new opportunities.
                                </p>
                            </div>
                        )}

                    </div>

                </div>
            </section>

            {/* CTA Section 
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    <h2 className="text-4xl font-bold text-slate-800 mb-6">
                        Don’t See Your Role?
                    </h2>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        We are always looking for talented individuals to join our team.
                        Send your resume and tell us how you can contribute.
                    </p>

                    <button
                        onClick={() => router.get('/careers/apply')}
                        className="
                            px-8
                            py-4
                            bg-slate-900
                            text-white
                            rounded-xl
                            hover:bg-slate-800
                            transition
                        "
                    >
                        Submit Your Resume
                    </button>
                </div>
            </section>
            */}
        </MainLayout>
    );
}