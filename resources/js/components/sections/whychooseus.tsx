import {
  CheckCircle,
  Users,
  Clock,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function Whychooseus() {
    return(
<div>

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-800">
              Why Choose GetStaffed
            </h2>

            <p className="mt-4 text-slate-600">
              Connecting businesses with dependable and qualified
              remote professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-slate-50 p-8 rounded-3xl">
              <Users size={40} className="text-slate-900 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Pre-Screened Talent
              </h3>
              <p className="text-slate-600">
                Qualified professionals carefully evaluated before
                being matched with your business.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl">
              <Clock size={40} className="text-slate-900 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Faster Hiring
              </h3>
              <p className="text-slate-600">
                Reduce recruitment time and connect with talent
                quickly.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl">
              <ShieldCheck size={40} className="text-slate-900 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Quality Matching
              </h3>
              <p className="text-slate-600">
                We match skills, experience, and work style with
                your business needs.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl">
              <Handshake size={40} className="text-slate-900 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Dedicated Support
              </h3>
              <p className="text-slate-600">
                Ongoing assistance throughout the hiring process.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl">
              <Users size={40} className="text-slate-900 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Remote Workforce Expertise
              </h3>
              <p className="text-slate-600">
                Specialists in Virtual Assistant and remote staffing
                solutions.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl">
              <Handshake size={40} className="text-slate-900 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                Long-Term Partnerships
              </h3>
              <p className="text-slate-600">
                Focused on building lasting relationships and
                sustainable growth.
              </p>
            </div>

          </div>

        </div>

      </section>
</div>
    );
}

