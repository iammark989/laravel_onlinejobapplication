
export default function ContactSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-10">
            Contact Us
          </h2>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}