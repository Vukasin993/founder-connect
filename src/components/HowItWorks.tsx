import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Build Your Profile",
    desc: "Company, stage, industry, what you're seeking and offering. AI generates a match-ready summary.",
  },
  {
    num: "02",
    title: "Open the Map",
    desc: "See founders nearby with generalized positions. Privacy-first—no exact GPS exposed.",
  },
  {
    num: "03",
    title: "Match & Connect",
    desc: "Get AI-powered match suggestions with reasons. Both sides opt in before messaging.",
  },
  {
    num: "04",
    title: "Chat in Real Time",
    desc: "WebSocket-powered messaging. Coordinate meetups, share intros, build relationships.",
  },
];

const HowItWorks = () => {
  return (
    <section className="border-b border-border py-24" id="how-it-works" aria-labelledby="how-it-works-heading">
      <div className="container px-6">
        <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
          [ PROTOCOL ]
        </div>
        <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          How it <span className="text-primary">works.</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-px bg-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8"
            >
              <span className="font-mono-ui text-4xl font-bold text-primary/20 block mb-4">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
