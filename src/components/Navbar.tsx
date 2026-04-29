import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import WaitlistModal from "@/components/WaitlistModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navItems = [
    { href: "#who-its-for", label: t.nav.audience },
    { href: "#features", label: t.nav.features },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sl" : "en");
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between gap-6 px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary/12 font-display text-sm font-bold text-primary">
            FF
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold uppercase tracking-[0.24em] text-foreground">
              Founder Field
            </span>
            <span className="block font-mono-ui text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              {t.nav.brandSubline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card/70 px-4 font-mono-ui text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {language === "en" ? "SL" : "EN"}
          </button>
          <WaitlistModal trigger={
            <button className="inline-flex h-11 items-center rounded-full bg-primary px-5 font-mono-ui text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground transition-transform hover:-translate-y-0.5">
              {t.cta.button.replace(/_/g, " ")}
            </button>
          } />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
