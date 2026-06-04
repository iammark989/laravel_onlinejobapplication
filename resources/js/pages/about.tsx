import MainLayout from '@/components/layout/MainLayout';
import { motion } from "framer-motion";

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
                <div className="max-w-7xl mx-auto px-4 gap-12 items-center">

                    <div>
                        <h2 className="text-4xl font-bold text-slate-800 mb-6">
                            Our Story
                        </h2>

                        <p className="text-slate-600 leading-relaxed mb-5">
                         Sometimes the best ideas come from the most unexpected conversations.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            After more than 21 years, three high school friends—Bern, Kristine, and Wie
                            —found themselves reunited. What started as a simple catch-up quickly turned
                            into a meaningful conversation about their careers, experiences, and the
                            challenges they had encountered along the way.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            As the conversation unfolded, one thing became clear: despite taking different
                            paths, they all shared the same belief.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            Businesses grow when they have the right people behind them.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            They had seen talented business owners overwhelmed by daily tasks that pulled
                            them away from growth. They had also seen highly skilled remote professionals
                            capable of delivering exceptional results when given the opportunity.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            That realization sparked an idea.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            What if they could bridge the gap between ambitious business owners and exceptional
                            remote talent?
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            From that vision, <strong>GetStuffed by BKW</strong> was born.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            Built on friendship, trust, and decades of combined experience, GetStuffed by BKW
                            was created to help entrepreneurs and companies find dependable, skilled Virtual
                            Assistants who can become valuable extensions of their teams.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            We understand the challenges of both sides because we've lived them. We've worked
                            behind the scenes supporting businesses, and we've experienced the responsibilities
                            of running one.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            Our mission goes beyond staffing. We aim to build long-term partnerships that help
                            businesses operate smarter, grow faster, and achieve more while creating meaningful
                            opportunities for talented professionals worldwide.
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            At GetStuffed by BKW, we believe talent knows no borders. The right person can
                            transform a business regardless of where they are located.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            And when the right business meets the right talent, incredible things happen.
                        </p>
                    </div>
                        
                    {/*<div>
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400"
                            alt="team"
                            className="rounded-3xl shadow-xl"
                            
                        />
                    </div>*/}
                        

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
                                    src={`${import.meta.env.VITE_IMAGE_URL}/files/images/ourmission.png`}
                                    alt="Mission"
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
                                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-fulltext-smfont-medium">
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
                                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-fulltext-smfont-medium">
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
                                    {/* image */}
                                            <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                
                                    >
                                    <img
                                        src={`${import.meta.env.VITE_IMAGE_URL}/files/images/ourvision.png`}
                                        alt="Mission"
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
                                    src={`${import.meta.env.VITE_IMAGE_URL}/files/images/webelieve.png`}
                                    alt="Mission"
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
                                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-fulltext-smfont-medium">
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
                                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-fulltext-smfont-medium">
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
                                        src={`${import.meta.env.VITE_IMAGE_URL}/files/images/talent.png`}
                                        alt="Mission"
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
                                    src={`${import.meta.env.VITE_IMAGE_URL}/files/images/partnership.png`}
                                    alt="Mission"
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
                                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-fulltext-smfont-medium">
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
                                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-fulltext-smfont-medium">
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
                                        src={`${import.meta.env.VITE_IMAGE_URL}/files/images/standard.png`}
                                        alt="Mission"
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
                                    src={`${import.meta.env.VITE_IMAGE_URL}/files/images/journey.png`}
                                    alt="Mission"
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
                                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-fulltext-smfont-medium">
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
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-slate-800">
                            Why Choose Us
                        </h2>

                        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                            We help businesses find reliable Virtual Assistants and remote
                            professionals while creating meaningful opportunities for talented
                            individuals. Our focus is on quality, efficiency, and long-term success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                            <div className="text-4xl mb-4">⭐</div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                Pre-Screened Talent
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                Every applicant undergoes an initial screening process to
                                ensure employers receive qualified and job-ready candidates.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                            <div className="text-4xl mb-4">⚡</div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                Faster Hiring Process
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                We streamline recruitment by sourcing, screening, and
                                shortlisting candidates so businesses can hire faster.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                            <div className="text-4xl mb-4">🎯</div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                Quality Matching
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                We focus on matching candidates based on skills,
                                experience, and company culture for long-term success.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                            <div className="text-4xl mb-4">🤝</div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                Dedicated Support
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                We provide personalized assistance to both employers
                                and job seekers throughout the recruitment journey.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                            <div className="text-4xl mb-4">🌍</div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                Remote Workforce Expertise
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                We specialize in Virtual Assistant and remote staffing
                                solutions, helping businesses build effective remote teams.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                            <div className="text-4xl mb-4">📈</div>

                            <h3 className="text-2xl font-bold text-slate-800 mb-3">
                                Long-Term Partnerships
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                Our goal is to create successful relationships that
                                benefit both employers and professionals for years to come.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#111111]">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">

                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Build Your Team or Advance Your Career?
                    </h2>

                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        Whether you're looking for exceptional Virtual Assistant talent
                        or searching for your next career opportunity, we're here to help.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/services/employers"
                            className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
                        >
                            Hire Talent
                        </a>

                        <a
                            href="/careers"
                            className="px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition"
                        >
                            Browse Jobs
                        </a>
                    </div>

                </div>
            </section>

        </MainLayout>
    );
}