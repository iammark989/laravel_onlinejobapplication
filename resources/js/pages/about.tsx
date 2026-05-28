import MainLayout from '@/components/layout/MainLayout';

export default function AboutPage() {
    return (
        <MainLayout>

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center">

                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600"
                    alt="about"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        About Us
                    </h1>

                    <p className="mt-5 text-lg max-w-2xl mx-auto text-slate-200">
                        Learn more about our company, our mission,
                        and the people behind our success.
                    </p>
                </div>

            </section>

            {/* Company Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-4xl font-bold text-slate-800 mb-6">
                            Who We Are
                        </h2>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            My Company is a modern business solutions provider
                            dedicated to helping companies grow through technology,
                            innovation, and professional services.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            Since our establishment, we have worked with various
                            organizations to create efficient digital systems,
                            responsive websites, and scalable business solutions.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            Our team focuses on quality, reliability, and long-term
                            partnerships with our clients.
                        </p>
                    </div>

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400"
                            alt="team"
                            className="rounded-3xl shadow-xl"
                        />
                    </div>

                </div>
            </section>

            {/* Mission Vision */}
            <section className="py-20 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-slate-800">
                            Our Mission & Vision
                        </h2>

                        <p className="mt-4 text-slate-600">
                            Driving innovation and creating better digital experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Mission */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h3 className="text-3xl font-bold text-blue-600 mb-5">
                                Our Mission
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                To provide innovative and high-quality solutions
                                that empower businesses to grow efficiently using
                                modern technology and strategic digital transformation.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <h3 className="text-3xl font-bold text-blue-600 mb-5">
                                Our Vision
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                To become a trusted leader in delivering modern
                                digital solutions and helping businesses succeed
                                in the rapidly evolving technological landscape.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-slate-800">
                            Meet Our Team
                        </h2>

                        <p className="mt-4 text-slate-600">
                            Passionate professionals dedicated to excellence.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Team Card */}
                        <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-lg">

                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200"
                                alt="team member"
                                className="w-full h-72 object-cover"
                            />

                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-slate-800">
                                    John Doe
                                </h3>

                                <p className="text-blue-600 mt-2">
                                    Chief Executive Officer
                                </p>
                            </div>

                        </div>

                        {/* Team Card */}
                        <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-lg">

                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200"
                                alt="team member"
                                className="w-full h-72 object-cover"
                            />

                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-slate-800">
                                    Jane Smith
                                </h3>

                                <p className="text-blue-600 mt-2">
                                    Creative Director
                                </p>
                            </div>

                        </div>

                        {/* Team Card */}
                        <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-lg">

                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200"
                                alt="team member"
                                className="w-full h-72 object-cover"
                            />

                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-slate-800">
                                    Michael Lee
                                </h3>

                                <p className="text-blue-600 mt-2">
                                    Lead Developer
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </MainLayout>
    );
}