import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import RadarVisual from "./RadarVisual";
import WaitlistModal from "./WaitlistModal";

const HeroSection = () => {
  const { t } = useLanguage();
  const heroStats = t.hero.stats;
  const tickerItems = t.hero.ticker;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-28"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border) / 0.48) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.48) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(180deg, white, transparent 88%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(208,255,79,0.18),transparent_48%)]" aria-hidden="true" />
      <div className="absolute -right-20 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="container relative z-10 px-6 pb-12 pt-10">
        <div className="grid items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow mb-6">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {t.hero.label}
            </div>

            <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.06em] text-foreground md:text-7xl xl:text-[5.75rem]">
              {t.hero.title1}
              <br />
              <span className="text-gradient-amber">{t.hero.title2}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t.hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WaitlistModal trigger={
                <button className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-7 font-mono-ui text-xs font-semibold uppercase tracking-[0.26em] text-primary-foreground transition-transform hover:-translate-y-0.5">
                  {t.cta.button.replace(/_/g, " ")}
                </button>
              } />
              <a
                href="#how-it-works"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-card/70 px-7 font-mono-ui text-xs font-medium uppercase tracking-[0.24em] text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {t.nav.howItWorks}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 font-mono-ui text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-success" />
                {t.hero.statusBuilding}
              </span>
              <span className="inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-2">
                {t.hero.freeTrial}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative"
          >
            <div className="section-shell relative overflow-hidden p-6 md:p-8">
              <div className="absolute right-5 top-5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono-ui text-[10px] uppercase tracking-[0.24em] text-primary">
                {t.hero.panelBadge}
              </div>
              <div className="font-mono-ui text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                {t.hero.radarLabel1}
              </div>
              <div className="mt-3 max-w-sm font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
                {t.hero.panelTitle}
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.hero.panelDescription}
              </p>

              <div className="mt-8 rounded-[28px] border border-border bg-background/80 p-6">
                <div className="mb-4 flex items-center justify-between font-mono-ui text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                  <span>{t.hero.radarLabel1}</span>
                  <span>5 {t.hero.radarLabel2}</span>
                </div>
                <RadarVisual />
                <div className="mt-4 text-center font-mono-ui text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {t.hero.radarFooter}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] border border-border bg-secondary/70 p-4">
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {t.hero.panelCard1Label}
                  </div>
                  <div className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {t.hero.panelCard1Title}
                  </div>
                </div>
                <div className="rounded-[24px] border border-border bg-secondary/70 p-4">
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {t.hero.panelCard2Label}
                  </div>
                  <div className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {t.hero.panelCard2Title}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {heroStats.map((item) => (
            <div key={item.label} className="section-shell rounded-[26px] px-5 py-5">
              <div className="font-display text-3xl font-bold text-foreground">{item.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border/80 bg-card/50">
        <div className="container flex flex-wrap items-center gap-x-6 gap-y-3 px-6 py-4 font-mono-ui text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          {Array.from({ length: 2 }).flatMap((_, index) =>
            tickerItems.map((item) => (
              <span key={`${item}-${index}`} className="inline-flex items-center gap-6">
                <span>{item}</span>
                <span className="text-primary">•</span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
