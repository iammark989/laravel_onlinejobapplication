import MainLayout from "@/components/layout/MainLayout";
import { Link, usePage } from "@inertiajs/react";

export default function JobDetailsPage() {

    const { jobDetails } = usePage().props as any;

    return (
        <MainLayout>

            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Breadcrumb */}
                    <div className="mb-6 text-sm text-slate-300 flex items-center gap-2 flex-wrap">
                        <Link
                            href="/"
                            className="hover:text-white transition"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <Link
                            href="/careers"
                            className="hover:text-white transition"
                        >
                            Careers
                        </Link>

                        <span>/</span>

                        <span className="text-white font-medium">
                            {jobDetails.title}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        {jobDetails.title}
                    </h1>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mt-6">

                        <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium capitalize">
                            {jobDetails.employment_type}
                        </span>

                        <span className="px-4 py-2 bg-green-500/20 text-green-200 rounded-full text-sm font-medium capitalize">
                            {jobDetails.work_setup}
                        </span>

                        <span className="px-4 py-2 bg-white/10 text-slate-200 rounded-full text-sm font-medium">
                            {jobDetails.location}
                        </span>

                        {jobDetails.salary && (
                            <span className="px-4 py-2 bg-yellow-500/20 text-yellow-200 rounded-full text-sm font-medium">
                                {jobDetails.salary}
                            </span>
                        )}

                    </div>

                    {/* Short Description */}
                    <p className="mt-8 text-lg text-slate-300 leading-relaxed max-w-4xl">
                        {jobDetails.short_description}
                    </p>

                    {/* Apply Button */}
                    <div className="mt-10">
                        <Link
                            href={`/careers/${jobDetails.slug}/apply`}
                            className="
                                inline-flex
                                items-center
                                justify-center
                                px-8
                                py-4
                                bg-blue-600
                                hover:bg-blue-700
                                transition
                                rounded-xl
                                text-white
                                font-semibold
                            "
                        >
                            Apply Now
                        </Link>
                    </div>

                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-slate-100">
                <div className="max-w-6xl mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* Left Content */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Job Description */}
                            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-slate-800 mb-5">
                                    Job Description
                                </h2>

                                <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                                    {jobDetails.description}
                                </div>
                            </div>

                            {/* Requirements */}
                            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-slate-800 mb-5">
                                    Requirements
                                </h2>

                                <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                                    {jobDetails.requirements}
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-slate-800 mb-5">
                                    Responsibilities
                                </h2>

                                <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                                    {jobDetails.responsibilities}
                                </div>
                            </div>

                        </div>

                        {/* Right Sidebar */}
                        <div className="space-y-6">

                            {/* Job Overview */}
                            <div className="bg-white rounded-3xl shadow-sm p-6">

                                <h3 className="text-xl font-bold text-slate-800 mb-6">
                                    Job Overview
                                </h3>

                                <div className="space-y-5">

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Employment Type
                                        </p>

                                        <p className="font-semibold text-slate-800 capitalize">
                                            {jobDetails.employment_type}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Work Setup
                                        </p>

                                        <p className="font-semibold text-slate-800 capitalize">
                                            {jobDetails.work_setup}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-500">
                                            Location
                                        </p>

                                        <p className="font-semibold text-slate-800">
                                            {jobDetails.location}
                                        </p>
                                    </div>

                                    {jobDetails.salary && (
                                        <div>
                                            <p className="text-sm text-slate-500">
                                                Salary
                                            </p>

                                            <p className="font-semibold text-slate-800">
                                                {jobDetails.salary}
                                            </p>
                                        </div>
                                    )}

                                    {jobDetails.expires_at && (
                                        <div>
                                            <p className="text-sm text-slate-500">
                                                Application Deadline
                                            </p>

                                            <p className="font-semibold text-slate-800">
                                                {jobDetails.expires_at}
                                            </p>
                                        </div>
                                    )}

                                </div>

                            </div>

                            {/* Sticky Apply Card */}
                            <div className="bg-blue-600 rounded-3xl shadow-lg p-6 text-white">

                                <h3 className="text-2xl font-bold mb-4">
                                    Ready to Apply?
                                </h3>

                                <p className="text-blue-100 leading-relaxed mb-6">
                                    Submit your application and become part of our growing team.
                                </p>

                                <Link
                                    href={`/careers/${jobDetails.slug}/apply`}
                                    className="
                                        w-full
                                        inline-flex
                                        justify-center
                                        items-center
                                        px-6
                                        py-4
                                        bg-white
                                        text-blue-700
                                        rounded-xl
                                        font-semibold
                                        hover:bg-slate-100
                                        transition
                                    "
                                >
                                    Apply for this Job
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </MainLayout>
    );
}