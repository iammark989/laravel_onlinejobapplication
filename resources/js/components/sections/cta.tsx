import { Link } from "@inertiajs/react";

export default function Cta(){
    return (
<div>
    <section className="py-20 bg-[#4B4843]">

        <div className="max-w-4xl mx-auto px-4 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready to Build Your Remote Team?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Let us connect you with skilled professionals who can
            help your business operate more efficiently and grow
            with confidence.
          </p>

          <Link
            href="/contact"
            className="
              inline-block
              mt-8
              px-8
              py-4
              bg-white
              text-[#111111]
              rounded-xl
              font-semibold
              hover:bg-slate-100
              transition
            "
          >
            Schedule a Consultation
          </Link>

        </div>

      </section>
</div>
    );
}
