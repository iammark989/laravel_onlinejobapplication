import MainLayout from "@/components/layout/MainLayout";
import { Link } from "@inertiajs/react";
import Whychooseus from "@/components/sections/whychooseus";
import Cta from "@/components/sections/cta";
import {
  CheckCircle,
  Users,
  Clock,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function PositionPage() {
  return (
    <MainLayout>

      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            
            {/* Content */}
            <div>

              <span className="inline-block bg-blue-100 text-slate-900 px-4 py-2 rounded-full text-sm font-medium">
                Executive Virtual Assistant
              </span>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                Strategic Executive Support for Busy Leaders
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Our Executive Virtual Assistants help entrepreneurs,
                executives, and growing businesses stay focused on
                high-value work by managing administrative tasks,
                coordinating schedules, and supporting daily operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="
                    px-6 py-3
                    bg-slate-900
                    text-white
                    rounded-xl
                    hover:bg-slate-800
                    transition
                  "
                >
                  Request Talent
                </Link>

                {/*<Link
                  href="/contact"
                  className="
                    px-6 py-3
                    border
                    border-slate-300
                    rounded-xl
                    hover:bg-slate-100
                    transition
                  "
                >
                  Contact Us
                </Link>*/}
              </div>

            </div>

            {/* Image */}
            <div>
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}/files/images/executiveva.png`}
                alt="Executive Virtual Assistant"
                className="
                  w-full
                  rounded-3xl
                  shadow-xl
                  object-cover
                  h-[350px]
                  md:h-[500px]
                "
              />
            </div>

          </div>
<div className="bg-blue-50 border-l-4 border-slate-500 p-6 rounded-r-xl">
    <p className="text-xl font-semibold text-slate-800">
        Spend more time leading your business and less time managing your calendar.
    </p>
</div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-800">
              How We Can Help
            </h2>

            <p className="mt-4 text-slate-600">
              Support services designed to help your business operate
              more efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Calendar Management",
              "Email Management",
              "Meeting Coordination",
              "Travel Arrangements",
              "Reporting & Documentation",
              "Executive Support",
            ].map((item) => (
              <div
                key={item}
                className="
                  bg-slate-50
                  p-6
                  rounded-2xl
                  border
                  border-slate-100
                "
              >
                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-600"
                  />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Businesses Hire This Role */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold text-slate-800">
            Focus on Growth While We Handle the Details
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Delegating administrative responsibilities allows business
            leaders to focus on strategy, client relationships,
            business development, and revenue-generating activities.
          </p>

        </div>
        

      </section>

            {/* Why Choose Us */}
            <Whychooseus />
      

      {/* CTA */}
      <Cta />

    </MainLayout>
  );
}