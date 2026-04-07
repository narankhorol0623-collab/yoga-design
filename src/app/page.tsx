import Head from "next/head";
import { Navbar } from "../components/Nav";
import { Hero } from "../components/Hero";
import { BentoGrid } from "../components/BentoGrid";

export default function YogaLandingPage() {
  return (
    <div className="bg-[#fef8f9] text-[#1d1b1c] font-serif selection:bg-[#db7093]/30">
      <Head>
        <title>The Ethereal Pulse | Yoga Sanctuary</title>
        <meta
          name="description"
          content="Somatic resonance and yoga practice"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1"
        />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <BentoGrid />

        {/* Editorial Section */}
        <section className="px-6 md:px-12 py-32 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-3/4 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800"
                  alt="Editorial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-60 md:max-w-70">
                <span className="font-sans text-[10px] tracking-widest text-[#9c3d5f] mb-4 block font-bold">
                  GUEST FEATURE
                </span>
                <p className="font-serif text-lg md:text-xl leading-snug italic">
                  "The architecture of the breath is the soul's home."
                </p>
                <p className="mt-4 text-xs font-sans text-[#755d5f] tracking-widest">
                  — DR. ELARA VANCE
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl md:text-6xl font-serif font-bold -tracking-tight leading-tight mb-8">
                The Lunar <br />
                <span className="italic text-[#db7093]">Manifesto</span>
              </h2>
              <p className="text-lg text-[#544246] leading-relaxed mb-12 font-serif">
                Our latest editorial explores the intersection of gravity and
                stillness. We delve into the rhythmic cycles that define our
                somatic experience.
              </p>
              <div className="space-y-8">
                {[
                  {
                    title: "Gravitational Alignment",
                    desc: "Understanding your center of mass in static holds.",
                  },
                  {
                    title: "Nocturnal Rhythms",
                    desc: "Yoga Nidra practices for deep restorative sleep.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-6 group cursor-pointer"
                  >
                    <span className="text-[#9c3d5f] font-serif text-xl">
                      0{idx + 1}
                    </span>
                    <div>
                      <h5 className="text-xl font-serif font-bold mb-1 group-hover:text-[#9c3d5f] transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-sm text-[#755d5f] font-serif">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 py-32 mb-24 bg-white/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Join the <span className="italic font-normal">Pulse</span>
            </h2>
            <p className="text-[#755d5f] mb-12 max-w-xl mx-auto italic font-serif text-lg">
              Weekly transmissions of movement, philosophy, and ethereal
              curation.
            </p>
            <form className="flex flex-col md:flex-row gap-4 items-center">
              <input
                className="w-full bg-transparent border-b border-[#d9c0c5] focus:outline-none focus:border-[#9c3d5f] px-4 py-4 text-xl font-serif transition-colors"
                placeholder="Your essence (Email)"
                type="email"
              />
              <button className="w-full md:w-auto px-12 py-4 bg-[#1d1b1c] text-white rounded-full font-sans text-xs tracking-widest hover:bg-[#9c3d5f] transition-colors">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#f8f2f3] py-24 px-6 md:px-12 border-t border-pink-100">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <span className="text-2xl font-serif text-[#9c3d5f] mb-8 block font-bold">
              The Ethereal Pulse
            </span>
            <p className="text-[#755d5f] font-serif text-sm leading-relaxed">
              Elevating somatic consciousness through curated stillness since
              2024.
            </p>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h6 className="font-bold text-[#9c3d5f] uppercase tracking-widest text-[10px] mb-2">
              Discovery
            </h6>
            <div className="flex flex-col gap-3 text-sm text-[#755d5f]">
              <a href="#" className="hover:text-[#9c3d5f]">
                Sanctuary
              </a>
              <a href="#" className="hover:text-[#9c3d5f]">
                Practice
              </a>
              <a href="#" className="hover:text-[#9c3d5f]">
                Membership
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h6 className="font-bold text-[#9c3d5f] uppercase tracking-widest text-[10px] mb-2">
              Connect
            </h6>
            <div className="flex flex-col gap-3 text-sm text-[#755d5f]">
              <a href="#" className="hover:text-[#9c3d5f]">
                Instagram
              </a>
              <a href="#" className="hover:text-[#9c3d5f]">
                Contact
              </a>
            </div>
          </div>
          <div className="text-[10px] text-[#755d5f] opacity-60 flex flex-col justify-end">
            © 2026 The Ethereal Pulse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
