import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1F1F1D] text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">

                {/* Company */}
                <div>
                <div className="flex items-center gap-4 mb-5">
                    <img
                        src={`${import.meta.env.VITE_IMAGE_URL}/files/images/getstaffed_logo.webp`}
                        alt="GetStaffed Logo"
                        className="
                            h-12
                            w-auto
                            object-contain
                            shrink-0
                        "
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-white leading-none">
                            GetStaffed
                        </h2>

                        <p className="text-sm text-[#D4AF37] tracking-wider uppercase">
                            by BKW
                        </p>
                    </div>
                </div>

                <p className="text-slate-300 leading-relaxed">
                    Connecting businesses with exceptional virtual talent and helping professionals build meaningful remote careers.
                </p>
            </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Contact Info
                    </h3>

                    <div className="space-y-3 text-slate-300">

                        <div className="flex items-center gap-3">
                            <Phone size={18} />
                            <span>+63 912 345 6789</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail size={18} />
                            <span>info@getstaffedbybkw.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin size={18} />
                            <span>Pampanga, Philippines</span>
                        </div>

                    </div>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Follow Us
                    </h3>

                    <div className="flex gap-5">
                        <a href="#">
                            <Facebook />
                        </a>

                        <a href="#">
                            <Instagram />
                        </a>

                        <a href="#">
                            <Linkedin />
                        </a>
                    </div>
                </div>

            </div>

            <div className="border-t border-slate-700 py-5 text-center text-sm text-slate-400">
                © 2026 My Company. All rights reserved.
            </div>
        </footer>
    );
}