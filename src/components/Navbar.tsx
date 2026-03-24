import { useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 20), { passive: true });
  }

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
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
        <button
          onClick={scrollToWaitlist}
          className="font-mono-ui text-xs font-semibold tracking-widest bg-primary text-primary-foreground px-5 py-2 rounded-sm hover:brightness-90 transition-all"
        >
          JOIN_WAITLIST
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
