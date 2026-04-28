import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border py-24" id="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="container px-6">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="eyebrow mb-5">{t.howItWorks.label}</div>
            <h2 id="how-it-works-heading" className="max-w-xl font-display text-4xl font-bold tracking-[-0.05em] md:text-6xl">
              {t.howItWorks.title} <span className="text-primary">{t.howItWorks.titleHighlight}</span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            The flow is now framed as a fast, cinematic onboarding path, closer to Futlab’s “up and running” rhythm than a generic SaaS feature checklist.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.howItWorks.steps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="section-shell relative rounded-[28px] p-6"
            >
              <span className="font-mono-ui text-5xl font-semibold text-primary/22 block">
                {step.num}
              </span>
              <div className="mt-10 h-px w-full bg-border" />
              <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
