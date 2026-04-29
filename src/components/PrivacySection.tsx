import { useLanguage } from "@/contexts/LanguageContext";
import { trackClick, trackEvent } from "@/lib/analytics";

const PrivacySection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border py-24" id="faq" aria-labelledby="privacy-heading">
      <div className="container px-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="eyebrow mb-5">{t.privacy.label}</div>
            <h2 id="privacy-heading" className="max-w-md font-display text-4xl font-bold tracking-[-0.05em] md:text-6xl">
              {t.privacy.title} <span className="text-primary">{t.privacy.titleHighlight}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              The trust section now reads more like a product credibility block than static legal copy, which is closer to the reference site’s tone.
            </p>
            <div className="section-shell mt-8 rounded-[30px] p-8">
              <div className="space-y-4 font-mono-ui text-sm">
                {t.privacy.checks.map((check, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/60 px-4 py-4">
                    <span className="mt-0.5 text-success">✓</span>
                    <span className="text-muted-foreground">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-5">{t.privacy.faqLabel}</div>
            <h2 className="font-display text-4xl font-bold tracking-[-0.05em] md:text-6xl">
              {t.privacy.faqTitle}
            </h2>
            <div className="mt-8 space-y-4">
              {t.privacy.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="section-shell group rounded-[26px] p-0"
                  onToggle={(event) => {
                    if ((event.currentTarget as HTMLDetailsElement).open) {
                      trackEvent("faq_expand", {
                        question: faq.q,
                        index: i + 1,
                      });
                    }
                  }}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-6 p-6 text-left font-display text-lg font-semibold text-foreground transition-colors hover:text-primary">
                    <span>{faq.q}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/80 font-mono-ui text-xs text-muted-foreground group-open:hidden">+</span>
                    <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/12 font-mono-ui text-xs text-primary group-open:flex">−</span>
                  </summary>
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
