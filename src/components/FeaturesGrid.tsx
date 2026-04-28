import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Brain, MessageSquare, Users, QrCode, Search, CreditCard, Bell, Briefcase, Shield, Zap, Layers } from "lucide-react";

const icons = [MapPin, Zap, Brain, Layers, MessageSquare, Briefcase, QrCode, Users, Search, CreditCard, Bell, Shield];

const FeaturesGrid = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border py-24" id="features" aria-labelledby="features-heading">
      <div className="container px-6">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="eyebrow mb-5">{t.features.label}</div>
            <h2 id="features-heading" className="max-w-md font-display text-4xl font-bold tracking-[-0.05em] md:text-6xl">
              {t.features.title} <span className="text-primary">{t.features.titleHighlight}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Futlab’s strongest pattern is not only the dark palette. It is the mix of big editorial heading on the left and structured role cards on the right. This section now follows that same momentum.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.features.items.map((f, i) => {
              const Icon = icons[i];
              return (
                <motion.article
                  key={f.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="section-shell group rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-5 font-mono-ui text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {f.label}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
