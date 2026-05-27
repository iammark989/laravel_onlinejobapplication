import { useState } from 'react';
import { Link } from '@inertiajs/react';

import {
    Menu,
    X,
    User,
    LogOut,
} from 'lucide-react';

export default function AdminNavbar() {

    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

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
                    <div className="hidden md:flex items-center gap-8">

                        <nav className="flex items-center gap-8 font-medium text-slate-700">

                            <Link
                                href="/admin/dashboard"
                                className="hover:text-blue-600 transition"
                            >
                                Dashboard
                            </Link>

                            <Link
                                href="/admin/careers"
                                className="hover:text-blue-600 transition"
                            >
                                Careers
                            </Link>

                            <Link
                                href="/admin/about"
                                className="hover:text-blue-600 transition"
                            >
                                About
                            </Link>

                            <Link
                                href="/admin/contact"
                                className="hover:text-blue-600 transition"
                            >
                                Contact
                            </Link>

                        </nav>

                        {/* User Dropdown */}
                        <div className="relative">

                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="
                                    w-11
                                    h-11
                                    rounded-full
                                    bg-gray-100
                                    hover:bg-gray-200
                                    transition
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <User size={20} className="text-slate-700" />
                            </button>

                            {/* Dropdown */}
                            {profileOpen && (
                                <div
                                    className="
                                        absolute
                                        right-0
                                        mt-3
                                        w-52
                                        bg-white
                                        rounded-2xl
                                        shadow-lg
                                        border
                                        border-gray-100
                                        overflow-hidden
                                    "
                                >

                                    {/* Profile */}
                                    <Link
                                        href="/admin/profile"
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            px-5
                                            py-4
                                            text-sm
                                            text-slate-700
                                            hover:bg-gray-50
                                            transition
                                        "
                                    >
                                        <User size={18} />

                                        User Profile
                                    </Link>

                                    {/* Logout */}
                                    <Link
                                        href="/admin/logout"
                                        method="post"
                                        as="button"
                                        className="
                                            w-full
                                            flex
                                            items-center
                                            gap-3
                                            px-5
                                            py-4
                                            text-sm
                                            text-red-600
                                            hover:bg-red-50
                                            transition
                                            border-t
                                            border-gray-100
                                        "
                                    >
                                        <LogOut size={18} />

                                        <span className="underline">
                                            Logout
                                        </span>
                                    </Link>

                                </div>
                            )}

                        </div>

                    </div>

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

                        <Link
                            href="/admin/dashboard"
                            onClick={() => setOpen(false)}
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/admin/careers"
                            onClick={() => setOpen(false)}
                        >
                            Careers
                        </Link>

                        <Link
                            href="/admin/about"
                            onClick={() => setOpen(false)}
                        >
                            About
                        </Link>

                        <Link
                            href="/admin/contact"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </Link>

                        {/* Mobile Divider */}
                        <div className="border-t border-gray-200 pt-4 flex flex-col gap-4">

                            <Link
                                href="/admin/profile"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2"
                            >
                                <User size={18} />

                                User Profile
                            </Link>

                            <Link
                                href="/admin/logout"
                                method="post"
                                as="button"
                                className="flex items-center gap-2 text-red-600"
                            >
                                <LogOut size={18} />

                                <span className="underline">
                                    Logout
                                </span>
                            </Link>

                        </div>

                    </div>
                )}

            </div>
        </header>
    );
}