import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border py-24" id="pricing" aria-labelledby="pricing-heading">
      <div className="container px-6">
        <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
          [ {t.pricing.label} ]
        </div>
        <h2 id="pricing-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          {t.pricing.title} <span className="text-primary">{t.pricing.titleHighlight}</span>
        </h2>

        <div className="max-w-md mx-auto">
          <div className="bg-surface border border-border rounded-sm overflow-hidden">
            <div className="p-8 border-b border-border">
              <div className="font-mono-ui text-[10px] text-primary tracking-widest mb-4">{t.pricing.planLabel}</div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">{t.pricing.price}</span>
                <span className="text-muted-foreground text-sm">{t.pricing.period}</span>
              </div>
              <div className="font-mono-ui text-xs text-muted-foreground">{t.pricing.trial}</div>
            </div>
            <div className="p-8 space-y-3 font-mono-ui text-sm text-muted-foreground">
              {t.pricing.features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-primary text-xs">▸</span>
                  {item}
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
