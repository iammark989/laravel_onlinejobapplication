import MainLayout from '@/components/layout/MainLayout';
import { motion } from "framer-motion";
import Whychooseus from '@/components/sections/whychooseus';
import Ctaforboth from '@/components/sections/ctaForBoth';

export default function AboutPage() {
    return (
        <MainLayout>

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center">

                <img
                    src={`${import.meta.env.VITE_IMAGE_URL}/files/images/aboutus.webp`}
                    alt="about getstaffed"
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

            {/* Our Story */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">

                        {/* Section Header */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-slate-600 font-semibold uppercase tracking-wider">
                                About Us
                            </span>

                            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-800">
                                Our Story
                            </h2>

                            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                                A journey built on friendship, experience, and a shared
                                vision of connecting businesses with exceptional remote talent.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Image */}
                            <div>
                                <img
                                    src={`${import.meta.env.VITE_IMAGE_URL}/files/images/aboutus.webp`}
                                    alt="Founders discussing ideas"
                                    className="
                                        w-full
                                        rounded-3xl
                                        shadow-2xl
                                        object-cover
                                        h-[350px]
                                        md:h-[500px]
                                    "
                                />
                            </div>

                            {/* Story Content */}
                            <div>

                                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                                    Where It All Began
                                </h3>

                                <p className="text-slate-600 leading-relaxed mb-5">
                                    Sometimes the best ideas emerge from the most unexpected
                                    conversations.
                                </p>

                                <p className="text-slate-600 leading-relaxed mb-5">
                                    More than 21 years after high school, three friends —
                                    <strong> Bern, Kristine, and Wie </strong>
                                    reunited and reflected on their careers, experiences,
                                    and the challenges they had encountered throughout
                                    their professional journeys.
                                </p>

                                <p className="text-slate-600 leading-relaxed mb-5">
                                    Despite taking different paths, they discovered a
                                    common belief:
                                </p>

                                <div className="
                                    border-l-4
                                    border-slate-300
                                    pl-6
                                    py-2
                                    my-8
                                ">
                                    <p className="text-xl font-semibold text-slate-800">
                                        Businesses thrive when they have the right people
                                        behind them.
                                    </p>
                                </div>

                                <p className="text-slate-600 leading-relaxed mb-5">
                                    They had witnessed business owners overwhelmed by
                                    day-to-day operations, while talented remote
                                    professionals remained underutilized despite their
                                    ability to deliver exceptional results.
                                </p>

                                <p className="text-slate-600 leading-relaxed">
                                    This realization inspired the creation of
                                    <strong> GetStaffed by BKW </strong> —
                                    a company dedicated to bridging the gap between
                                    ambitious businesses and skilled Virtual Assistants,
                                    creating partnerships that empower growth,
                                    productivity, and long-term success.
                                </p>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-16 bg-slate-50">
                    <div className="max-w-6xl mx-auto px-4">

                        <div className="grid md:grid-cols-3 gap-8">

                            <div className="bg-white p-8 rounded-3xl shadow-md">
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                    Friendship
                                </h3>

                                <p className="text-slate-600">
                                    Built on trust, shared values, and a commitment
                                    to helping others succeed.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-md">
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                    Experience
                                </h3>

                                <p className="text-slate-600">
                                    Decades of combined professional experience
                                    supporting businesses and teams.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-md">
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                    Purpose
                                </h3>

                                <p className="text-slate-600">
                                    Connecting exceptional talent with businesses
                                    that need reliable support to grow.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

            {/* Company additional about us */}
            
            <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                    
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Image mission */}
                            <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                           
                            >
                                <img
                                    src={`${import.meta.env.VITE_IMAGE_URL}/files/images/ourmission.webp`}
                                    alt="Our Mission"
                                    className="
                                        rounded-3xl
                                        shadow-xl
                                        w-full
                                        h-[350px]
                                        object-cover
                                    "
                                />

                            </motion.div>

                            {/* Content mission*/}
                            <div>
                                <span className="inline-block bg-blue-100 text-slate-900 px-4 py-2 rounded-fulltext-smfont-medium">
                                    Our Mission
                                </span>

                                <h2 className="text-4xl font-bold text-slate-800 mt-5">
                                    Helping Businesses Focus on What Matters Most
                                </h2>

                                <p className=" mt-5 text-slate-600 leading-relaxed">
                                    To help business owners reclaim their time, 
                                increase productivity, and achieve sustainable 
                                growth by connecting them with exceptional virtual
                                 professionals who deliver real results.
                                </p>
                            </div>              
                        </div>


                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                                <div className="order-2 lg:order-1">
                                    {/* content vision*/}
                                    <div>
                                <span className="inline-block bg-blue-100 text-slate-900 px-4 py-2 rounded-fulltext-smfont-medium">
                                     Our Vision
                                </span>

                                <h2 className="text-4xl font-bold text-slate-800 mt-5">
                                    Building Opportunities Without Borders
                                </h2>

                                <p className=" mt-5 text-slate-600 leading-relaxed">
                                    To become a trusted leader in virtual talent recruitment,
                                empowering businesses to build high-performing remote teams
                                and helping professionals achieve successful and fulfilling
                                careers worldwide.
                                </p>
                            </div>    
                                </div>

                                <div className="order-1 lg:order-2">
                                    {/* image vision*/}
                                            <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                
                                    >
                                    <img
                                        src={`${import.meta.env.VITE_IMAGE_URL}/files/images/ourvision.webp`}
                                        alt="Our Vision"
                                        className="
                                            rounded-3xl
                                            shadow-xl
                                            w-full
                                            h-[350px]
                                            object-cover
                                        "
                                    />
                                </motion.div>
                                </div>

                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Image believe */}
                            <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                           
                            >
                                <img
                                    src={`${import.meta.env.VITE_IMAGE_URL}/files/images/webelieve.webp`}
                                    alt="What We Believe"
                                    className="
                                        rounded-3xl
                                        shadow-xl
                                        w-full
                                        h-[350px]
                                        object-cover
                                    "
                                />

                            </motion.div>

                            {/* Content believe*/}
                            <div>
                                <span className="inline-block bg-blue-100 text-slate-900 px-4 py-2 rounded-fulltext-smfont-medium">
                                    What We Believe
                                </span>

                                <h2 className="text-4xl font-bold text-slate-800 mt-5">
                                    Great Businesses Are Built by Great People
                                </h2>

                                <p className=" mt-5 text-slate-600 leading-relaxed">
                                Every successful business is built by great people.
                                We help connect businesses with talent that makes a
                                difference.
                                </p>
                            </div>              
                        </div>


                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                                <div className="order-2 lg:order-1">
                                    {/* content talent*/}
                                    <div>
                                <span className="inline-block bg-blue-100 text-slate-900 px-4 py-2 rounded-fulltext-smfont-medium">
                                     Talent Has No Boundaries 
                                </span>

                                <h2 className="text-4xl font-bold text-slate-800 mt-5">
                                    Connecting Talent Across the Globe
                                </h2>

                                <p className=" mt-5 text-slate-600 leading-relaxed">
                                     We believe skills, dedication, and excellence
                                are not limited by geography. 
                                </p>
                            </div>    
                                </div>

                                <div className="order-1 lg:order-2">
                                    {/* image talent */}
                                            <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                
                                    >
                                    <img
                                        src={`${import.meta.env.VITE_IMAGE_URL}/files/images/talent.webp`}
                                        alt="Talent Has No Boundaries"
                                        className="
                                            rounded-3xl
                                            shadow-xl
                                            w-full
                                            h-[350px]
                                            object-cover
                                        "
                                    />
                                </motion.div>
                                </div>

                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Image partnership */}
                            <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                           
                            >
                                <img
                                    src={`${import.meta.env.VITE_IMAGE_URL}/files/images/partnership.webp`}
                                    alt="Partnerships Matter"
                                    className="
                                        rounded-3xl
                                        shadow-xl
                                        w-full
                                        h-[350px]
                                        object-cover
                                    "
                                />

                            </motion.div>

                            {/* Content partnership*/}
                            <div>
                                <span className="inline-block bg-blue-100 text-slate-900 px-4 py-2 rounded-fulltext-smfont-medium">
                                    Partnerships Matter
                                </span>

                                <h2 className="text-4xl font-bold text-slate-800 mt-5">
                                  Success Begins with Strong Partnerships
                                </h2>

                                <p className=" mt-5 text-slate-600 leading-relaxed">
                                We focus on building lasting relationships
                                based on trust, communication, and shared success.
                                </p>
                            </div>              
                        </div>


                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                                <div className="order-2 lg:order-1">
                                    {/* content standard*/}
                                    <div>
                                <span className="inline-block bg-blue-100 text-slate-900 px-4 py-2 rounded-fulltext-smfont-medium">
                                      Excellence Is the Standard
                                </span>

                                <h2 className="text-4xl font-bold text-slate-800 mt-5">
                                    Delivering Excellence in Every Placement
                                </h2>

                                <p className=" mt-5 text-slate-600 leading-relaxed">
                                    We are committed to delivering quality support,
                                exceptional service, and measurable value. 
                                </p>
                            </div>    
                                </div>

                                <div className="order-1 lg:order-2">
                                    {/* image standard */}
                                            <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                
                                    >
                                    <img
                                        src={`${import.meta.env.VITE_IMAGE_URL}/files/images/standard.webp`}
                                        alt="Excellence Is the Standard"
                                        className="
                                            rounded-3xl
                                            shadow-xl
                                            w-full
                                            h-[350px]
                                            object-cover
                                        "
                                    />
                                </motion.div>
                                </div>

                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Image Journey */}
                            <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                           
                            >
                                <img
                                    src={`${import.meta.env.VITE_IMAGE_URL}/files/images/journey.webp`}
                                    alt="Growth Is a Journey"
                                    className="
                                        rounded-3xl
                                        shadow-xl
                                        w-full
                                        h-[350px]
                                        object-cover
                                    "
                                />

                            </motion.div>

                            {/* Content journey*/}
                            <div>
                                <span className="inline-block bg-blue-100 text-slate-900 px-4 py-2 rounded-fulltext-smfont-medium">
                                    Growth Is a Journey 
                                </span>

                                <h2 className="text-4xl font-bold text-slate-800 mt-5">
                                    Growing Together Every Step of the Way
                                </h2>

                                <p className=" mt-5 text-slate-600 leading-relaxed">
                                     As our clients grow, we grow with them,
                               celebrating every milestone together.
                                </p>
                            </div>              
                        </div>               

                    </div>
                </section>

            {/* Why Choose Us */}
                <Whychooseus />

            {/* CTA */}
            <Ctaforboth />

        </MainLayout>
    );
}