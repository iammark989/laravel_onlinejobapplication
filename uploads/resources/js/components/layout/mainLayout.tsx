import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-100">
            <Navbar />

            <main className="flex-1 pt-20">
                {children}
            </main>

            <Footer />
        </div>
    );
}