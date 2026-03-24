const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono-ui text-xs text-muted-foreground tracking-wider">
          © 2026 FOUNDER_FIELD
        </span>
        <div className="flex items-center gap-6 font-mono-ui text-xs text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">FEATURES</a>
          <a href="#pricing" className="hover:text-primary transition-colors">PRICING</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
