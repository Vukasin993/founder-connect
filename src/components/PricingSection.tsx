import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border py-24" id="pricing" aria-labelledby="pricing-heading">
      <div className="container px-6">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="eyebrow mb-5">{t.pricing.label}</div>
            <h2 id="pricing-heading" className="font-display text-4xl font-bold tracking-[-0.05em] md:text-6xl">
              {t.pricing.title} <span className="text-primary">{t.pricing.titleHighlight}</span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            Instead of a generic pricing box, this now reads like a launch offer card with proof and context around the plan.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-shell rounded-[32px] p-8 md:p-10">
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.26em] text-primary">{t.pricing.planLabel}</div>
            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-6xl font-bold tracking-[-0.06em] text-foreground">{t.pricing.price}</span>
              <span className="pb-2 text-base text-muted-foreground">{t.pricing.period}</span>
            </div>
            <div className="mt-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">
              {t.pricing.trial}
            </div>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Built for founders who actually meet in person: coworking spaces, events, dinners, operator networks, and serendipitous city moments.
            </p>
          </div>

          <div className="section-shell rounded-[32px] p-8 md:p-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {t.pricing.features.map((item) => (
                <div key={item} className="rounded-[22px] border border-border bg-secondary/65 p-4">
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-primary">Included</div>
                  <div className="mt-3 text-sm leading-relaxed text-foreground">{item}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[24px] border border-border bg-background/70 p-5">
              <div className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Launch note</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                The structure is intentionally simple: one paid tier, strong free-trial framing, and the waitlist doing the heavy lifting before the app ships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
