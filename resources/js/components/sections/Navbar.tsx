import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="h-20 flex items-center justify-between">

                    {/* Left Side */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                            M
                        </div>

                        <h1 className="hidden sm:block text-xl font-bold text-slate-800">
                            My Company
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
                        <Link
                            href="/"
                            className="hover:text-blue-600 transition"
                        >
                            Home
                        </Link>

                        <Link
                            href="/careers"
                            className="hover:text-blue-600 transition"
                        >
                            Careers
                        </Link>


                        <Link
                            href="/about"
                            className="hover:text-blue-600 transition"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="hover:text-blue-600 transition"
                        >
                            Contact
                        </Link>
                      
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden pb-5 flex flex-col gap-4 font-medium text-slate-700">
                        <Link href="/" onClick={() => setOpen(false)}>
                            Home
                        </Link>
                         <Link href="/careers" onClick={() => setOpen(false)}>
                            Careers
                        </Link>

                        <Link href="/about" onClick={() => setOpen(false)}>
                            About
                        </Link>

                        <Link href="/contact" onClick={() => setOpen(false)}>
                            Contact
                        </Link>

                    </div>
                )}
            </div>
        </header>
    );
}
