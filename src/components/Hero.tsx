export const Hero = () => (
  <section className="px-6 md:px-12 mb-32 max-w-screen-2xl mx-auto grid grid-cols-12 gap-8 items-center pt-32">
    <div className="col-span-12 lg:col-span-7">
      <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#9c3d5f] mb-6 block font-semibold">
        Est. 2024 — Somatic Resonance
      </span>
      <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-none font-serif font-bold -tracking-[0.04em] mb-12 text-[#1d1b1c]">
        Breathe into the <br />
        <span className="italic font-extralight text-[#9c3d5f]">Unseen</span>
        Space.
      </h1>
      <p className="text-lg md:text-xl max-w-md leading-relaxed text-[#544246] mb-12 font-serif">
        A curated archive of movement and stillness designed for the modern
        transcendentalist. Reclaim your rhythm.
      </p>
      <div className="flex flex-wrap items-center gap-8">
        <button className="bg-linear-to-br from-[#9c3d5f] to-[#db7093] text-white px-10 py-5 rounded-full font-sans text-sm tracking-widest shadow-lg hover:scale-105 transition-transform">
          BEGIN PRACTICE
        </button>
        <button className="text-[#1d1b1c] font-serif italic text-lg relative group">
          View Schedules
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#db7093]"></span>
        </button>
      </div>
    </div>
    <div className="col-span-12 lg:col-span-5 relative">
      <div className="aspect-4/5 rounded-full overflow-hidden shadow-2xl relative z-10 border-3 border-white/30">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
          alt="Yoga Pose"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#f8d8db] rounded-full -z-10 opacity-50 blur-3xl"></div>
    </div>
  </section>
);
