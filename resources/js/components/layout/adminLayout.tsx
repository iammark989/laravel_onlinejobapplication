import AdminNavbar from '@/components/sections/AdminNavbar';
import AdminFooter from '@/components/sections/AdminFooter';

interface LayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-100">
            <AdminNavbar />

            <main className="flex-1 pt-20">
                {children}
            </main>

            <AdminFooter />
        </div>
    );
}