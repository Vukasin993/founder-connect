import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const DeleteAccount = () => {
  const { t } = useLanguage();
  const d = t.deleteAccount;

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
            {d.pageLabel}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {d.title} <span className="text-primary">{d.titleHighlight}</span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            {d.description}
          </p>
        </div>

        {/* How to delete */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">
            {d.howToTitle}
          </h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="font-mono-ui text-primary font-bold">01</span>
              <p>{d.step1}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono-ui text-primary font-bold">02</span>
              <p>{d.step2Pre} <strong className="text-foreground">{d.step2Nav}</strong>.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono-ui text-primary font-bold">03</span>
              <p>{d.step3Pre} <strong className="text-foreground">{d.step3Action}</strong> {d.step3Post}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono-ui text-primary font-bold">04</span>
              <p>
                {d.step4Pre}{" "}
                <a
                  href="mailto:support@founderfield.app"
                  className="text-primary hover:underline"
                >
                  support@founderfield.app
                </a>{" "}
                {d.step4Post}
              </p>
            </div>
          </div>
        </section>

        {/* What gets deleted */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">
            {d.whatDeletedTitle}
          </h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-3 text-sm">
            {d.deletedItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-destructive mt-0.5 font-mono-ui">✕</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What is retained */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">
            {d.whatRetainedTitle}
          </h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-3 text-sm">
            {d.retainedItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-success mt-0.5 font-mono-ui">!</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conditions */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">
            {d.conditionsTitle}
          </h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            {d.conditions.map((c, i) => (
              <p key={i}>
                <strong className="text-foreground">{c.label}:</strong> {c.text}
              </p>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">
            {d.contactTitle}
          </h2>
          <div className="bg-surface border border-border rounded-sm p-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              {d.contactText}{" "}
              <a
                href="mailto:support@founderfield.app"
                className="text-primary hover:underline font-semibold"
              >
                support@founderfield.app
              </a>
            </p>
          </div>
        </section>

        {/* Back link */}
        <div className="border-t border-border pt-8">
          <Link
            to="/"
            className="font-mono-ui text-xs font-semibold tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            {d.backLink}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono-ui text-xs text-muted-foreground tracking-wider">
            © 2026 FOUNDER_FIELD
          </span>
          <span className="font-mono-ui text-xs text-muted-foreground">
            {d.lastUpdated}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default DeleteAccount;
