import { motion } from "framer-motion";
import { MapPin, Brain, MessageSquare, Users, QrCode, Search, CreditCard, Bell, Briefcase, Shield, Zap, Layers } from "lucide-react";

const features = [
  { icon: MapPin, label: "LIVE_MAP", title: "Live Map & Nearby Discovery", desc: "See who's in your area in a map-first experience. Designed around being out in the world." },
  { icon: Zap, label: "PROXIMITY", title: "Proximity-Based Matching", desc: "Matching tied to physical closeness. Meet people when proximity actually means something." },
  { icon: Brain, label: "AI_MATCH", title: "AI-Assisted Matching", desc: "LLM-powered profile analysis with human-readable 'why you match' reasons—not just a score." },
  { icon: Layers, label: "MATCHES", title: "Matches Workflow", desc: "See suggestions, accept or decline. Both sides opt in before heavy messaging." },
  { icon: MessageSquare, label: "CHAT", title: "Real-Time Messaging", desc: "WebSocket-powered chat with conversation list, history, and instant coordination." },
  { icon: Briefcase, label: "PROFILES", title: "Founder Profiles", desc: "Company, industry, stage, interests, seeking, offering, and social links. Skip 'what do you do?'" },
  { icon: QrCode, label: "SHARE", title: "QR & NFC Sharing", desc: "QR code on profile for quick 'add me in context.' NFC tap-to-share where supported." },
  { icon: Users, label: "FRIENDS", title: "Social Graph", desc: "Friend requests and a friends layer to separate known contacts from new proximity matches." },
  { icon: Search, label: "SEARCH", title: "Search & Discovery", desc: "Find founders beyond the map tab when you know what you're looking for." },
  { icon: CreditCard, label: "SUBSCRIBE", title: "Subscription", desc: "Stripe-backed subscription with a 7-day free trial on signup. $9.99/month." },
  { icon: Bell, label: "NOTIFY", title: "Push Notifications", desc: "Match and message notifications when configured via Expo push pipeline." },
  { icon: Shield, label: "PRIVACY", title: "Location Privacy", desc: "Intentional location offsets before persisting. Map views use generalized positions." },
];

const FeaturesGrid = () => {
  return (
    <section className="border-b border-border py-24" id="features" aria-labelledby="features-heading">
      <div className="container px-6">
        <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
          [ FEATURE_SET ]
        </div>
        <h2 id="features-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Everything in <span className="text-primary">one app.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-r border-b border-border p-8 group hover:bg-primary/[0.03] transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <f.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="font-mono-ui text-[10px] text-muted-foreground tracking-widest">
                  {f.label}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
