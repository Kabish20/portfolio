import React from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="mt-3 mb-2 rounded-2xl bg-black/50 border border-cyan-400/15
                     backdrop-blur-xl shadow-neon-soft flex items-center justify-between px-4 py-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold tracking-tight">
              K
            </div>
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Portfolio
              </p>
              <p className="text-xs font-semibold text-slate-100">
                KABISH&nbsp;M&nbsp;E
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] px-3 py-1.5 rounded-full text-slate-300
                           hover:bg-cyan-400/10 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                           border border-emerald-400/40 bg-emerald-500/10 text-[11px] text-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Available for work
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
