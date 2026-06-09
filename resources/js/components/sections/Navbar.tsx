import { useState } from "react";
import { Link,usePage } from "@inertiajs/react";
import { Menu, X, ChevronDown,Package } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const { url } = usePage();
    const navLinkClass = (path: string) =>
    url === path
        ? `
            text-[#D4AF37]
            font-medium
            border-b-2
            border-[#D4AF37]
            pb-1
          `
        : `
            text-slate-200
            hover:text-[#D4AF37]
            transition
            font-medium
          `;
     const navLinkClassMobile = (path: string) =>
    url === path
        ? `
             text-[#D4AF37]
             font-medium
          `
        : `
            text-slate-200
            hover:text-[#D4AF37]
          `;
    const navLinkClassFor = (path: string) =>
    url.startsWith(path)
        ? `
            text-[#D4AF37]
            font-medium
            border-b-2
            border-[#D4AF37]
            pb-1
          `
        : `
            text-slate-200
            hover:text-[#D4AF37]
            transition
            font-medium
          `;

     
  const [itemsOpen, setItemsOpen] = useState(false);

    return (
        <header
        style={{
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}/files/images/dark-texture.webp)`
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
                        className="flex items-center shrink-0 py-2"
                    >
                        <img
                            src={`${import.meta.env.VITE_IMAGE_URL}/files/images/GetStaffed_byBKW.webp`}
                            alt="GetStaffed"
                            className="
                                h-10
                                sm:h-12
                                md:h-14
                                w-auto
                                object-contain
                            "
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">

                        <Link
                            href="/"
                            className={navLinkClass("/")}
                        >
                            Home
                        </Link>
                             
                             {/* Items Dropdown */}
                            <div className="relative">
                            <button
                                onClick={() => setItemsOpen(!itemsOpen)}
                                className={`${navLinkClassFor("/services")} flex items-center`}
                            >
                                Services
                                <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                    itemsOpen ? "rotate-180" : ""
                                }`}
                                />
                            </button>

                                    <AnimatePresence>
                            {itemsOpen && (
                                 <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                            scale: 0.95,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -10,
                                            scale: 0.95,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className="
                                            absolute
                                            right-0
                                            mt-2
                                            w-72
                                            bg-white
                                            border
                                            rounded-xl
                                            shadow-xl
                                            z-50
                                            text-[#111111]
                                            overflow-hidden
                                        "
                                    >
                                <Link
                                    href="/services/executive-virtual-assistant"
                                    className="
                                    flex items-center
                                    px-4 py-3
                                    hover:bg-[#B9B9A6] rounded-xl
                                    "
                                >
                                    Executive Virtual Assistant
                                </Link>
                                
                                <Link
                                    href="/services/general-administrative-virtual-assistant"
                                    className="
                                    flex items-center
                                    px-4 py-3
                                    hover:bg-[#B9B9A6] rounded-xl
                                    "
                                >
                                    General Administrative Virtual Assistant
                                </Link>

                                <Link
                                    href="/services/financial-bookkeeping-virtual-assistant"
                                    className="
                                    flex items-center
                                    px-4 py-3
                                    hover:bg-[#B9B9A6] rounded-xl
                                    "
                                >
                                    Financial/Bookkeeping Virtual Assistant
                                </Link>

                                <Link
                                    href="/services/ecommerce-amazon-virtual-assistant"
                                    className="
                                    flex items-center
                                    px-4 py-3
                                    hover:bg-[#B9B9A6] rounded-xl
                                    "
                                >
                                    E-Commerce/Amazon Virtual Assistant
                                </Link>
                                

                                </motion.div>
                                
                            )}
                            </AnimatePresence>
                            </div>

                        <Link
                            href="/about"
                            className={navLinkClass("/about")}
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
                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                            scale: 0.95,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -10,
                                            scale: 0.95,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
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
                           className={navLinkClassMobile("/")}
                        >
                            Home
                        </Link>

                       <button
                        onClick={() => setItemsOpen(!itemsOpen)}
                         className={`${navLinkClassMobile("/services")} flex items-center justify-between`}
                        >
                        Services
                        <ChevronDown
                        size={16}
                        className={`transition-transform ${
                            itemsOpen ? "rotate-180" : ""
                        }`}
                        />
                    </button>
                            <AnimatePresence>
                                 
              {itemsOpen && (
                <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="ml-4 flex flex-col overflow-hidden"
        >
                    <Link
                        href="/services/executive-virtual-assistant"
                        className="px-4 py-3 text-slate-200 hover:text-[#D4AF37] hover:bg-[#111111] rounded-md"
                    >
                        Executive Virtual Assistant
                    </Link>

                    <Link
                        href="/services/general-administrative-virtual-assistant"
                        className="px-4 py-3 text-slate-200 hover:text-[#D4AF37] hover:bg-[#111111] rounded-md"
                    >
                        General Administrative Virtual Assistant
                    </Link>

                    <Link
                        href="/services/financial-bookkeeping-virtual-assistant"
                        className="px-4 py-3 text-slate-200 hover:text-[#D4AF37] hover:bg-[#111111] rounded-md"
                    >
                        Financial/Bookkeeping Virtual Assistant
                    </Link>

                    <Link
                        href="/services/ecommerce-amazon-virtual-assistant"
                        className="px-4 py-3 text-slate-200 hover:text-[#D4AF37] hover:bg-[#111111] rounded-md"
                    >
                        E-Commerce/Amazon Virtual Assistant
                    </Link>
                </motion.div>
                
              )}
              
              </AnimatePresence>

                        <Link
                            href="/about"
                            onClick={() => setOpen(false)}
                            className={navLinkClassMobile("/about")}
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className={navLinkClassMobile("/contact")}
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
                    </motion.div>
                )}

            </div>
        </header>
    );
}