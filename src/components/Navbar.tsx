import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import WaitlistModal from "@/components/WaitlistModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 20), { passive: true });
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sl" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-border" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-14 px-6">
        <span className="font-mono-ui text-sm font-semibold tracking-wider text-foreground">
          FOUNDER_FIELD<span className="text-muted-foreground">_v1.0</span>
        </span>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="font-mono-ui text-xs font-semibold tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {language === "en" ? "SL" : "EN"}
          </button>
          <WaitlistModal trigger={
            <button className="font-mono-ui text-xs font-semibold tracking-widest bg-primary text-primary-foreground px-5 py-2 rounded-sm hover:brightness-90 transition-all">
              {t.cta.button}
            </button>
          } />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
