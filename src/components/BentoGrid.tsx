export const BentoGrid = () => (
  <section className="px-6 md:px-12 py-32 bg-[#f8f2f3]">
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-end mb-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
          Curated <span className="italic font-normal">Sanctuaries</span>
        </h2>
        <p className="font-sans text-[10px] uppercase tracking-widest text-[#755d5f] max-w-37.5 text-right">
          EXPLORE OUR CORE PILLARS
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-175">
        <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-12 flex flex-col justify-between relative overflow-hidden group shadow-sm">
          <div className="relative z-10">
            <span className="text-[#9c3d5f] font-sans text-xs tracking-widest mb-4 block">
              01
            </span>
            <h3 className="text-4xl font-serif font-bold mb-6">
              Pranayama <br />
              Archival
            </h3>
            <p className="text-[#544246] max-w-xs leading-relaxed font-serif">
              Breathing techniques transcribed from ancient lineage.
            </p>
          </div>
          <div className="absolute bottom-[-5%] right-[-5%] w-2/3 h-2/3 rounded-3xl overflow-hidden rotate-6 group-hover:rotate-0 transition-transform duration-700">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400"
              alt="Meditation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-[#9c3d5f] text-white rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden shadow-xl">
          <span className="material-symbols-outlined text-4xl absolute top-8 right-8">
            waves
          </span>
          <h4 className="text-2xl font-serif italic">Vinyasa Flow</h4>
        </div>

        <div className="bg-[#ece7e8] rounded-3xl p-8 flex flex-col justify-between hover:bg-[#f8d8db] transition-colors cursor-pointer">
          <h4 className="text-sm font-sans tracking-widest font-bold uppercase">
            Membership
          </h4>
          <div className="flex justify-between items-end">
            <p className="text-sm font-serif italic text-[#755d5f]">
              Unlock global access
            </p>
            <span className="material-symbols-outlined">arrow_outward</span>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-3xl p-12 flex items-center gap-8 group transition-all shadow-sm">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-4 border-[#fef8f9]">
            <img
              src="https://images.unsplash.com/photo-1599447292180-45fd84092ef0?auto=format&fit=crop&q=80&w=200"
              alt="Tools"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-2xl font-serif font-bold mb-2">
              Sacred Objects
            </h4>
            <p className="text-[#544246] text-sm font-serif">
              A collection of tools for the tactile practice.
            </p>
            <button className="mt-4 text-[#9c3d5f] font-sans text-xs tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
              SHOP COLLECTION{" "}
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
