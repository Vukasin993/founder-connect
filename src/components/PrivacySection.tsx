const faqs = [
  {
    q: "Do you store my exact GPS?",
    a: "No. The backend applies intentional location offsets (~100–500m) before persisting. Map views use generalized positions. Privacy is architectural, not a toggle.",
  },
  {
    q: "Is this a dating app?",
    a: "No—Founder Field is professional founder networking with business-oriented profiles, projects, and companies.",
  },
  {
    q: "Why pay?",
    a: "Subscription supports real-time infrastructure: matching, messaging, moderation-ready architecture. The 7-day trial lets you evaluate risk-free.",
  },
  {
    q: "What providers can I sign in with?",
    a: "Google, Apple, and other supported OAuth providers. Onboarding guides you into a complete profile.",
  },
];

const PrivacySection = () => {
  return (
    <section className="border-b border-border py-24" id="faq" aria-labelledby="privacy-heading">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Privacy */}
          <div>
            <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
              [ TRUST_PROTOCOL ]
            </div>
            <h2 id="privacy-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Privacy by <span className="text-primary">design.</span>
            </h2>
            <div className="bg-surface border border-border rounded-sm p-8">
              <div className="space-y-4 font-mono-ui text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-success mt-0.5">✓</span>
                  <span className="text-muted-foreground">Location offsets applied before storage</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success mt-0.5">✓</span>
                  <span className="text-muted-foreground">Map views use generalized positions only</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success mt-0.5">✓</span>
                  <span className="text-muted-foreground">No exact GPS stored or transmitted</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success mt-0.5">✓</span>
                  <span className="text-muted-foreground">Mutual opt-in required for messaging</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
              [ FAQ ]
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Questions.
            </h2>
            <div className="space-y-px">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-surface border border-border rounded-sm">
                  <summary className="p-5 cursor-pointer font-semibold text-sm flex items-center justify-between hover:bg-primary/[0.03] transition-colors">
                    {faq.q}
                    <span className="font-mono-ui text-xs text-muted-foreground group-open:hidden">+</span>
                    <span className="font-mono-ui text-xs text-primary hidden group-open:inline">−</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
