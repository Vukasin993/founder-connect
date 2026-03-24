import { useLanguage } from "@/contexts/LanguageContext";

const PrivacySection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border py-24" id="faq" aria-labelledby="privacy-heading">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Privacy */}
          <div>
            <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
              [ {t.privacy.label} ]
            </div>
            <h2 id="privacy-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              {t.privacy.title} <span className="text-primary">{t.privacy.titleHighlight}</span>
            </h2>
            <div className="bg-surface border border-border rounded-sm p-8">
              <div className="space-y-4 font-mono-ui text-sm">
                {t.privacy.checks.map((check, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-success mt-0.5">✓</span>
                    <span className="text-muted-foreground">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
              [ {t.privacy.faqLabel} ]
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              {t.privacy.faqTitle}
            </h2>
            <div className="space-y-px">
              {t.privacy.faqs.map((faq, i) => (
                <details key={i} className="group bg-surface border border-border rounded-sm">
                  <summary className="p-5 cursor-pointer font-semibold text-sm flex items-center justify-between hover:bg-primary/[0.03] transition-colors">
                    {faq.q}
                    <span className="font-mono-ui text-xs text-muted-foreground group-open:hidden">+</span>
                    <span className="font-mono-ui text-xs text-primary hidden group-open:inline">−</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
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
