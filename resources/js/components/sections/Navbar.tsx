import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header
        style={{
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}/files/images/dark-texture.png)`
        }}
            className="
                fixed
                top-0
                left-0
                right-0
                z-50
                bg-[#847C6C]
                bg-cover
                bg-center
                border-b
                border-[#C8A44D]/30
                shadow-2xl
            "
        >
            <div className="max-w-7xl mx-auto px-4">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center shrink-0"
                    >
                        <img
                            src={`${import.meta.env.VITE_IMAGE_URL}/files/images/getstaffed_logo_name.png`}
                            alt="GetStaffed"
                            className="
                                h-14
                                sm:h-16
                                md:h-20
                                w-auto
                                object-contain
                            "
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">

                        <Link
                            href="/"
                            className="
                                text-[#D4AF37]
                                font-medium
                                border-b-2
                                border-[#D4AF37]
                                pb-1
                            "
                        >
                            Home
                        </Link>
                            {/*}
                        <Link
                            href="/careers"
                            className="
                                text-slate-200
                                hover:text-[#D4AF37]
                                transition
                                font-medium
                            "
                        >
                            Careers
                        </Link>*/}

                        <Link
                            href="/about"
                            className="
                                text-slate-200
                                hover:text-[#D4AF37]
                                transition
                                font-medium
                            "
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="
                                text-slate-200
                                hover:text-[#D4AF37]
                                transition
                                font-medium
                            "
                        >
                            Contact
                        </Link>

                    </nav>

                    {/* CTA + Mobile Menu */}
                    <div className="flex items-center gap-4">

                        <Link
                            href="/careers"
                            className="
                                hidden
                                md:flex
                                items-center
                                px-6
                                py-3
                                rounded-lg
                                bg-gradient-to-r
                                from-[#D4AF37]
                                to-[#B8892E]
                                text-black
                                font-semibold
                                shadow-lg
                                hover:scale-105
                                transition
                            "
                        >
                            Find Jobs
                        </Link>

                        <button
                            onClick={() => setOpen(!open)}
                            className="
                                md:hidden
                                text-[#D4AF37]
                            "
                        >
                            {open ? (
                                <X size={28} />
                            ) : (
                                <Menu size={28} />
                            )}
                        </button>

                    </div>

                </div>

                {/* Mobile Menu */}
                {open && (
                    <div
                        className="
                            md:hidden
                            border-t
                            border-[#C8A44D]/20
                            py-5
                            flex
                            flex-col
                            gap-5
                        "
                    >
                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            className="
                                text-[#D4AF37]
                                font-medium
                            "
                        >
                            Home
                        </Link>

                        {/*<Link
                            href="/careers"
                            onClick={() => setOpen(false)}
                            className="
                                text-slate-200
                                hover:text-[#D4AF37]
                            "
                        >
                            Careers
                        </Link>
                        */}
                        <Link
                            href="/about"
                            onClick={() => setOpen(false)}
                            className="
                                text-slate-200
                                hover:text-[#D4AF37]
                            "
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="
                                text-slate-200
                                hover:text-[#D4AF37]
                            "
                        >
                            Contact
                        </Link>

                        <Link
                            href="/careers"
                            onClick={() => setOpen(false)}
                            className="
                                mt-2
                                text-center
                                bg-gradient-to-r
                                from-[#D4AF37]
                                to-[#B8892E]
                                text-black
                                font-semibold
                                py-3
                                rounded-xl
                            "
                        >
                            Find Jobs
                        </Link>
                    </div>
                )}

            </div>
        </header>
    );
}