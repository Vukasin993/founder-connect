import { motion } from "framer-motion";
import RadarVisual from "./RadarVisual";
import WaitlistModal from "./WaitlistModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center border-b border-border overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
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
              [ PROXIMITY NETWORKING FOR FOUNDERS ]
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tight mb-6">
              Meet founders
              <br />
              <span className="text-gradient-amber">around you.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Real-time proximity, AI-assisted matching, and messaging in one app.
              Turn conferences, coworking, and city life into high-signal founder connections.
            </p>

            <WaitlistModal />

            <div className="mt-8 flex items-center gap-6 font-mono-ui text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                STATUS: BUILDING
              </span>
              {/* <span>7-DAY FREE TRIAL</span> */}
            </div>
          </motion.div>

          {/* Right - Radar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative bg-surface border border-border rounded-sm p-8 w-full max-w-md">
              <div className="font-mono-ui text-[10px] text-muted-foreground tracking-widest mb-4 flex justify-between">
                <span>SCAN_ACTIVE</span>
                <span>5 NEARBY</span>
              </div>
              <RadarVisual />
              <div className="font-mono-ui text-[10px] text-muted-foreground tracking-widest mt-4 text-center">
                RADIUS: 500M · OFFSET: ENABLED
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
