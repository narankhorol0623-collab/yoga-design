export const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#fef8f9]/70 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto left-0 right-0">
    <div className="text-xl md:text-2xl font-serif font-bold text-[#9c3d5f]">
      The Ethereal Pulse
    </div>
    <div className="hidden md:flex items-center gap-12 font-serif italic tracking-tight">
      {["Sanctuary", "Practice", "Guides", "Membership"].map((item) => (
        <a
          key={item}
          className="text-[#755d5f] hover:text-[#9c3d5f] transition-opacity"
          href={`#${item.toLowerCase()}`}
        >
          {item}
        </a>
      ))}
    </div>
    <div className="flex items-center gap-4 md:gap-6">
      <button className="material-symbols-outlined text-[#db7093] scale-95 hover:opacity-80 transition-all">
        shopping_bag
      </button>
      <div className="w-10 h-10 rounded-full bg-pink-100 overflow-hidden border border-[#db7093]/20">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </nav>
);
