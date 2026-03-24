import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Brain, MessageSquare, Users, QrCode, Search, CreditCard, Bell, Briefcase, Shield, Zap, Layers } from "lucide-react";

const icons = [MapPin, Zap, Brain, Layers, MessageSquare, Briefcase, QrCode, Users, Search, CreditCard, Bell, Shield];

const FeaturesGrid = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border py-24" id="features" aria-labelledby="features-heading">
      <div className="container px-6">
        <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
          [ {t.features.label} ]
        </div>
        <h2 id="features-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          {t.features.title} <span className="text-primary">{t.features.titleHighlight}</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
          {t.features.items.map((f, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={f.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-r border-b border-border p-8 group hover:bg-primary/[0.03] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="font-mono-ui text-[10px] text-muted-foreground tracking-widest">
                    {f.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
