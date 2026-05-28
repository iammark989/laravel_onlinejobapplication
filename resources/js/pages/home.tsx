import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/sections/cards/Card';

export default function HomePage() {
    return (
        <MainLayout>

            {/* Hero */}
            <section className="relative h-[500px] flex items-center justify-center">

                <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600"
                    alt="hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Welcome to My Company
                    </h1>

                    <p className="mt-5 text-lg max-w-2xl mx-auto">
                        We provide modern digital solutions for businesses and organizations.
                    </p>
                    {/*
                    <button className="mt-8 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
                        Get Started
                    </button>
                    */}
                </div>

            </section>

            {/* Services */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-800">
                            Our Services
                        </h2>

                        <p className="text-slate-600 mt-4">
                            Professional and scalable business solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <Card
                            title="Web Development"
                            description="Responsive and scalable web applications."
                            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200"
                        />

                        <Card
                            title="Digital Marketing"
                            description="Helping businesses grow online presence."
                            image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                        />

                        <Card
                            title="Business Consulting"
                            description="Professional solutions for modern companies."
                            image="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200"
                        />

                    </div>

                </div>
            </section>

        </MainLayout>
    );
}
