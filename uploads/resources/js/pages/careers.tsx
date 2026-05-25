import MainLayout from '@/components/layout/mainLayout';
import {router} from "@inertiajs/react";

const jobs = [
    {
        title: 'Frontend Developer',
        type: 'Full Time',
        location: 'Bulacan, Philippines',
        description:
            'Develop and maintain responsive web applications using React, TypeScript, and Tailwind CSS.',
    },
    {
        title: 'Backend Developer',
        type: 'Full Time',
        location: 'Remote',
        description:
            'Build scalable APIs and backend systems using Laravel, MySQL, and RESTful architecture.',
    },
    {
        title: 'UI/UX Designer',
        type: 'Hybrid',
        location: 'Quezon City, Philippines',
        description:
            'Design user-friendly interfaces and create engaging user experiences for web and mobile platforms.',
    },
    {
        title: 'Digital Marketing Specialist',
        type: 'Full Time',
        location: 'Remote',
        description:
            'Manage social media campaigns, SEO optimization, and digital advertising strategies.',
    },
    {
        title: 'Project Manager',
        type: 'Full Time',
        location: 'Manila, Philippines',
        description:
            'Lead project planning, coordinate development teams, and ensure successful project delivery.',
    },
];

export default function CareerPage() {
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

                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition"
                            >

                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                                    <div>
                                        <h3 className="text-3xl font-bold text-slate-800">
                                            {job.title}
                                        </h3>

                                        <div className="flex flex-wrap gap-3 mt-4">

                                            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                                {job.type}
                                            </span>

                                            <span className="px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">
                                                {job.location}
                                            </span>

                                        </div>

                                        <p className="mt-5 text-slate-600 leading-relaxed">
                                            {job.description}
                                        </p>
                                    </div>

                                    <div>
                                        <button
                                         className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                                            Apply Now
                                        </button>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">

                    <h2 className="text-4xl font-bold text-slate-800 mb-6">
                        Don’t See Your Role?
                    </h2>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        We are always looking for talented individuals to join our team.
                        Send your resume and tell us how you can contribute.
                    </p>

                    <button onClick={() => router.get('/job-application')}
                    className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition">
                        Submit Your Resume
                    </button>

                </div>
            </section>

        </MainLayout>
    );
}
