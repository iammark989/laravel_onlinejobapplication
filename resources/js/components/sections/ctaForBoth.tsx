
export default function Ctaforboth() {
    return(
        <div>
<section className="py-20 bg-[#4B4843]">
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
                            className="px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-300 transition"
                        >
                            Hire Talent
                        </a>

                        <a
                            href="/careers"
                            className="px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-300 transition"
                        >
                            Browse Jobs
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );

}
