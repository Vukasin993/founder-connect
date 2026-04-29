import { useLanguage } from "@/contexts/LanguageContext";
import { trackClick } from "@/lib/analytics";

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
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-shell rounded-[32px] p-8 md:p-10" onClick={() => trackClick("pricing_plan_card", "pricing_section")}>
            <div className="font-mono-ui text-[10px] uppercase tracking-[0.26em] text-primary">{t.pricing.planLabel}</div>
            <div className="mt-6 flex items-end gap-2">
              <span className="font-display text-6xl font-bold tracking-[-0.06em] text-foreground">{t.pricing.price}</span>
              <span className="pb-2 text-base text-muted-foreground">{t.pricing.period}</span>
            </div>
            <div className="mt-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">
              {t.pricing.trial}
            </div>
          </div>

          <div className="section-shell rounded-[32px] p-8 md:p-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {t.pricing.features.map((item) => (
                <div
                  key={item}
                  onClick={() => trackClick("pricing_feature_interest", "pricing_section", { pricing_feature: item })}
                  className="rounded-[22px] border border-border bg-secondary/65 p-4"
                >
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-primary">Included</div>
                  <div className="mt-3 text-sm leading-relaxed text-foreground">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
