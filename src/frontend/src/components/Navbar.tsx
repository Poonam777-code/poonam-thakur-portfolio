import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-base tracking-tight text-foreground hover:text-accent transition-colors duration-200 bg-transparent border-0 p-0 cursor-pointer uppercase"
          data-ocid="navbar.logo"
        >
          Poonam Thakur
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-muted/50 bg-transparent border-0 cursor-pointer"
              data-ocid={`navbar.link.${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            className="ml-4 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-subtle transition-smooth rounded-full px-5"
            onClick={() => scrollTo("#contact")}
            data-ocid="navbar.cta_button"
          >
            Get in Touch
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle mobile menu"
          data-ocid="navbar.mobile_toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-1 animate-slide-up shadow-elevated">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border/40 last:border-0 transition-colors duration-200 text-left bg-transparent border-x-0 border-t-0 cursor-pointer w-full"
              data-ocid={`navbar.mobile.link.${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            className="mt-3 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full"
            onClick={() => scrollTo("#contact")}
            data-ocid="navbar.mobile.cta_button"
          >
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
}
