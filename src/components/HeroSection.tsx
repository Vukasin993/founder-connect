import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import RadarVisual from "./RadarVisual";
import WaitlistModal from "./WaitlistModal";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center border-b border-border overflow-hidden" aria-label="Hero section">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-6">
              [ {t.hero.label} ]
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tight mb-6">
              {t.hero.title1}
              <br />
              <span className="text-gradient-amber">{t.hero.title2}</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              {t.hero.description}
            </p>

            <WaitlistModal />

            <div className="mt-8 flex items-center gap-6 font-mono-ui text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                {t.hero.statusBuilding}
              </span>
              <span>{t.hero.freeTrial}</span>
            </div>
          </motion.div>

          {/* Right - Radar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative p-8 w-full max-w-md">
              <div className="font-mono-ui text-[10px] text-muted-foreground tracking-widest mb-4 flex justify-between">
                <span>{t.hero.radarLabel1}</span>
                <span>5 {t.hero.radarLabel2}</span>
              </div>
              <RadarVisual />
              <div className="font-mono-ui text-[10px] text-muted-foreground tracking-widest mt-4 text-center">
                {t.hero.radarFooter}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
