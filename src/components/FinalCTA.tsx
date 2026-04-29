import { useLanguage } from "@/contexts/LanguageContext";
import WaitlistModal from "./WaitlistModal";

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-28" id="waitlist" aria-labelledby="waitlist-heading">
      <div className="container relative z-10 px-6">
        <div className="section-shell relative overflow-hidden rounded-[36px] px-6 py-14 text-center md:px-10 md:py-20">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(208,255,79,0.16),transparent_65%)]" aria-hidden="true" />
          <div className="eyebrow mb-6">{t.cta.label}</div>
          <h2 id="waitlist-heading" className="mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-[-0.06em] md:text-7xl">
            {t.cta.title} <span className="text-primary">{t.cta.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.cta.description}
          </p>
          <div className="mt-10 flex justify-center">
          <WaitlistModal
            trigger={
              <button className="inline-flex h-14 items-center rounded-full bg-primary px-7 font-mono-ui text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground transition-transform hover:-translate-y-0.5 whitespace-nowrap">
                {t.cta.button.replace(/_/g, " ")}
              </button>
            }
          />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden select-none">
            <div className="translate-y-[34%] text-center font-display text-[20vw] font-extrabold leading-none tracking-[-0.08em] text-border/65">
              FIELD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
