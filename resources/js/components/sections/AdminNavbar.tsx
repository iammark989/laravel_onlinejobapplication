import { useState } from 'react';
import { Link } from '@inertiajs/react';

import {
    Menu,
    X,
    User,
    LogOut,
    Bell,
} from 'lucide-react';

export default function AdminNavbar() {

    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const [notificationOpen, setNotificationOpen] = useState(false);

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

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">

                        <nav className="flex items-center gap-8 font-medium text-white">

                            <Link
                                href="/admin/dashboard"
                                className="hover:text-[#D4AF37] transition"
                            >
                                Dashboard
                            </Link>

                            <Link
                                href="/admin/careers"
                                className="hover:text-[#D4AF37] transition"
                            >
                                Careers
                            </Link>

                            <Link
                                href="/admin/employers-messages"
                                className="hover:text-[#D4AF37] transition"
                            >
                                Inquiries
                            </Link>

                            {/*<Link
                                href="/admin/contact"
                                className="hover:text-blue-600 transition"
                            >
                                Contact
                            </Link>
                                */}   
                        </nav>

                        {/* User Dropdown */}
                       <div className="flex items-center gap-4">

                            {/* Notification Bell */}
                            <div className="relative">

                                <button
                                    onClick={() => {
                                        setNotificationOpen(!notificationOpen);
                                        setProfileOpen(false);
                                    }}
                                    className="
                                        relative
                                        w-11
                                        h-11
                                        rounded-full
                                        bg-gray-100
                                        hover:bg-gray-300
                                        transition
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    <Bell size={20} className="text-slate-700" />

                                    {0 > 0 && (
                                        <span
                                            className="
                                                absolute
                                                -top-1
                                                -right-1
                                                bg-red-500
                                                text-white
                                                text-xs
                                                rounded-full
                                                min-w-[18px]
                                                h-[18px]
                                                px-1
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >
                                            {0}
                                        </span>
                                    )}
                                </button>

                                {/* Notification Dropdown */}
                                {notificationOpen && (
                                    <div
                                        className="
                                            absolute
                                            right-0
                                            mt-3
                                            w-80
                                            bg-white
                                            rounded-2xl
                                            shadow-xl
                                            border
                                            border-gray-300
                                            overflow-hidden
                                            z-50
                                        "
                                    >
                                        <div className="px-5 py-4 border-b">
                                            <h3 className="font-semibold text-slate-800">
                                                Notifications
                                            </h3>
                                        </div>

                                        <div className="max-h-96 overflow-y-auto">

                                            <Link
                                                href="/admin/employers"
                                                className="
                                                    block
                                                    px-5
                                                    py-4
                                                    hover:bg-gray-50
                                                    border-b
                                                "
                                            >
                                                <p className="font-medium text-slate-800">
                                                    New Employer Inquiry
                                                </p>

                                                <p className="text-sm text-slate-500">
                                                    ABC Company submitted a hiring request.
                                                </p>
                                            </Link>

                                            <Link
                                                href="/admin/applicants"
                                                className="
                                                    block
                                                    px-5
                                                    py-4
                                                    hover:bg-gray-50
                                                "
                                            >
                                                <p className="font-medium text-slate-800">
                                                    New Applicant
                                                </p>

                                                <p className="text-sm text-slate-500">
                                                    John Doe applied for Executive VA.
                                                </p>
                                            </Link>

                                        </div>

                                        <div className="border-t">
                                            <Link
                                                href="/admin/notifications"
                                                className="
                                                    block
                                                    text-center
                                                    py-3
                                                    text-blue-600
                                                    hover:bg-gray-50
                                                "
                                            >
                                                View All Notifications
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Profile Dropdown */}
                            <div className="relative">

                                <button
                                    onClick={() => {
                                        setProfileOpen(!profileOpen);
                                        setNotificationOpen(false);
                                    }}
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
                                    <User
                                        size={20}
                                        className="text-slate-700"
                                    />
                                </button>

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
                                            z-50
                                        "
                                    >
                                        <Link
                                            href="/admin/profile"
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                px-5
                                                py-4
                                                hover:bg-gray-50
                                            "
                                        >
                                            <User size={18} />
                                            User Profile
                                        </Link>

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
                                                text-red-600
                                                hover:bg-red-50
                                                border-t
                                            "
                                        >
                                            <LogOut size={18} />
                                            Logout
                                        </Link>
                                    </div>
                                )}

                            </div>

                        </div>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-[#D4AF37]"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden pb-5 flex flex-col gap-4 font-medium text-white">

                        <Link
                            href="/admin/dashboard"
                            className='hover:text-[#D4AF37]'
                            onClick={() => setOpen(false)}
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/admin/careers"
                            className='hover:text-[#D4AF37]'
                            onClick={() => setOpen(false)}
                        >
                            Careers
                        </Link>
                       
                        <Link
                            href="/admin/employers-messages"
                            className='hover:text-[#D4AF37]'
                            onClick={() => setOpen(false)}
                        >
                            Inquiries
                        </Link>
                        {/*
                        <Link
                            href="/admin/contact"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </Link>
                          */}      
                        {/* Mobile Divider */}
                        <div className="border-t border-gray-200 pt-4 flex flex-col gap-4">
                            <Link
                                href="/admin/notifications"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 hover:text-[#D4AF37]"
                            >
                                <Bell size={18} />

                                Notifications

                                {0 > 0 && (
                                    <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                        {0}
                                    </span>
                                )}
                            </Link>
                            <Link
                                href="/admin/profile"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 hover:text-[#D4AF37]"
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