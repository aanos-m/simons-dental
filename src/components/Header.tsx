import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoPath from "../assets/logo2.png";

const navLinks = ["Home", "About", "Treatments", "Contact", "Consultation"];

function scrollToSection(id: string) {
  const element = document.getElementById(id.toLowerCase());
  element?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // logoPath is imported above so the bundler serves it correctly

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <button onClick={() => handleNavClick("home")} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-900 text-white shadow-sm">
            <img src={logoPath} alt="Simon's Dental Logo" className="h-full w-full object-cover" />
          </div>
          <div className="text-left">
            <p className="text-lg font-semibold tracking-tight">Simon&apos;s Dental</p>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-700">Family Clinic</p>
          </div>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-sm font-medium text-slate-600 transition hover:text-cyan-800"
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => handleNavClick("consultation")}
            className="rounded-full bg-cyan-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-900/20 transition hover:bg-cyan-800"
          >
            Book Consultation
          </button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="text-left text-base font-medium text-slate-700"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
