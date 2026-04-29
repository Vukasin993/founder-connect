import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Megaphone, Rocket, Users, WalletCards } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackClick } from "@/lib/analytics";

const icons = [Rocket, Users, Code2, WalletCards, Megaphone, BriefcaseBusiness];

const AudienceSection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border py-24" id="who-its-for" aria-labelledby="who-its-for-heading">
      <div className="container px-6">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="eyebrow mb-5">{t.audience.label}</div>
            <h2 id="who-its-for-heading" className="max-w-lg font-display text-4xl font-bold tracking-[-0.05em] md:text-6xl">
              {t.audience.title} <span className="text-primary">{t.audience.titleHighlight}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {t.audience.description}
            </p>

            <div className="mt-8 space-y-3">
              {t.audience.installReasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3 rounded-[22px] border border-border bg-secondary/60 px-4 py-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.audience.profiles.map((profile, index) => {
              const Icon = icons[index];

              return (
                <motion.article
                  key={profile.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  onClick={() => trackClick("audience_profile_card", "audience_section", {
                    profile_role: profile.role,
                    profile_tag: profile.tag,
                  })}
                  className="section-shell rounded-[28px] p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-5 font-mono-ui text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {profile.tag}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-foreground">
                    {profile.role}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {profile.description}
                  </p>

                  <div className="mt-5 rounded-[22px] border border-border bg-background/60 px-4 py-4">
                    <div className="font-mono-ui text-[10px] uppercase tracking-[0.22em] text-primary">
                      {t.audience.cardBenefitLabel}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {profile.benefit}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;