import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { trackClick } from "@/lib/analytics";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col gap-8 px-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="font-display text-3xl font-bold tracking-[-0.05em] text-foreground">Founder Field</div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
          <span className="mt-4 inline-flex rounded-full border border-border bg-secondary/80 px-4 py-2 font-mono-ui text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            © 2026 Founder Field
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-5 font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <a href="#features" onClick={() => trackClick("footer_features", "footer")} className="transition-colors hover:text-primary">{t.nav.features}</a>
          <a href="#pricing" onClick={() => trackClick("footer_pricing", "footer")} className="transition-colors hover:text-primary">{t.nav.pricing}</a>
          <a href="#faq" onClick={() => trackClick("footer_faq", "footer")} className="transition-colors hover:text-primary">{t.nav.faq}</a>
          <Link to="/privacy-policy" onClick={() => trackClick("footer_privacy_policy", "footer")} className="transition-colors hover:text-primary">{t.footer.links.privacyPolicy}</Link>
          <Link to="/delete-account" onClick={() => trackClick("footer_delete_account", "footer")} className="transition-colors hover:text-primary">{t.footer.links.deleteAccount}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
