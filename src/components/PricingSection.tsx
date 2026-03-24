import WaitlistForm from "./WaitlistForm";

const PricingSection = () => {
  return (
    <section className="border-b border-border py-24" id="pricing">
      <div className="container px-6">
        <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
          [ PRICING ]
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Simple <span className="text-primary">pricing.</span>
        </h2>

        <div className="max-w-md mx-auto">
          <div className="bg-surface border border-border rounded-sm overflow-hidden">
            <div className="p-8 border-b border-border">
              <div className="font-mono-ui text-[10px] text-primary tracking-widest mb-4">FOUNDER_ACCESS</div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold">$9.99</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <div className="font-mono-ui text-xs text-muted-foreground">7-DAY FREE TRIAL INCLUDED</div>
            </div>
            <div className="p-8 space-y-3 font-mono-ui text-sm text-muted-foreground">
              {[
                "Live map & nearby discovery",
                "AI-assisted matching with reasons",
                "Unlimited real-time messaging",
                "QR & NFC profile sharing",
                "Projects & company profiles",
                "Push notifications",
                "Privacy-first location",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-primary text-xs">▸</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
