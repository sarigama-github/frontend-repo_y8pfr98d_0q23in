import { Menu, ShoppingBasket } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#features", label: "Why Us" },
    { href: "#produce", label: "Fresh Produce" },
    { href: "#stories", label: "Our Farm" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-900/20 backdrop-blur supports-[backdrop-filter]:bg-emerald-900/10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-400 shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center justify-center">
                <ShoppingBasket className="h-5 w-5 text-emerald-950" />
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">FreshFields</span>
            </a>

            <nav className="hidden gap-8 text-sm text-emerald-100/90 md:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a href="#produce" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-400 px-4 py-2 text-emerald-950 font-semibold shadow hover:shadow-emerald-400/30 transition-shadow">
                Shop Now
              </a>
            </div>

            <button className="md:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-emerald-100/90 hover:text-white hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <a href="#produce" className="block rounded-lg px-3 py-2 text-emerald-950 bg-gradient-to-r from-emerald-400 to-lime-400 text-center font-semibold">
                Shop Now
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
