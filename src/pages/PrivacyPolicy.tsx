import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  const p = t.privacyPolicy;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal navbar */}
      <nav className="border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container flex items-center h-14 px-6">
          <Link to="/" className="font-mono-ui text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors">
            FOUNDER_FIELD<span className="text-muted-foreground">_v1.0</span>
          </Link>
        </div>
      </nav>

      <main className="container px-6 py-16 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
            {p.pageLabel}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {p.title} <span className="text-primary">{p.titleHighlight}</span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            {p.description}
          </p>
          <p className="font-mono-ui text-xs text-muted-foreground mt-4">
            {p.lastUpdatedLabel}
          </p>
        </div>

        {/* 01 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s01Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>{p.s01p1}</p>
            <p>
              {p.s01Contact}{" "}
              <a href="mailto:privacy@founderfield.app" className="text-primary hover:underline">
                privacy@founderfield.app
              </a>
            </p>
          </div>
        </section>

        {/* 02 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s02Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            {p.s02Items.map((item, i) => (
              <div key={i}>
                <p className="text-foreground font-semibold mb-1">{item.title}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 03 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s03Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-3 text-sm">
            {p.s03Items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary mt-0.5 font-mono-ui">→</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 04 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s04Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            {p.s04Items.map((item, i) => (
              <p key={i}><strong className="text-foreground">{item.label}:</strong> {item.text}</p>
            ))}
          </div>
        </section>

        {/* 05 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s05Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              {p.s05Pre} <strong className="text-foreground">{p.s05NoSell}</strong>{p.s05Post}
            </p>
            <div className="space-y-3 mt-2">
              {p.s05Items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 font-mono-ui shrink-0">■</span>
                  <span><strong className="text-foreground">{item.party}:</strong> {item.purpose}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s06Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>{p.s06Intro}</p>
            <div className="space-y-2 mt-2">
              {p.s06Items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-muted-foreground font-mono-ui shrink-0">–</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s07Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-3 text-sm">
            {p.s07Items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-success mt-0.5 font-mono-ui">✓</span>
                <span className="text-muted-foreground">
                  <strong className="text-foreground">{item.right}:</strong> {item.desc}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            {p.s07ContactPre}{" "}
            <a href="mailto:privacy@founderfield.app" className="text-primary hover:underline">
              privacy@founderfield.app
            </a>
            . {p.s07ContactPost}
          </p>
        </section>

        {/* 08 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s08Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 text-sm text-muted-foreground leading-relaxed">
            <p>{p.s08Text}</p>
          </div>
        </section>

        {/* 09 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s09Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 text-sm text-muted-foreground leading-relaxed">
            <p>{p.s09Text}</p>
          </div>
        </section>

        {/* 10 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s10Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 text-sm text-muted-foreground leading-relaxed">
            <p>{p.s10Text}</p>
          </div>
        </section>

        {/* 11 */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">{p.s11Title}</h2>
          <div className="bg-surface border border-border rounded-sm p-6 text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>{p.s11p1}</p>
            <p>
              <strong className="text-foreground">{p.s11Email}</strong>{" "}
              <a href="mailto:privacy@founderfield.app" className="text-primary hover:underline">
                privacy@founderfield.app
              </a>
            </p>
            <p>
              <strong className="text-foreground">{p.s11Deletion}</strong>{" "}
              <Link to="/delete-account" className="text-primary hover:underline">
                founderfield.app/delete-account
              </Link>
            </p>
          </div>
        </section>

        {/* Back link */}
        <div className="border-t border-border pt-8">
          <Link to="/" className="font-mono-ui text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider">
            {p.backLink}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
