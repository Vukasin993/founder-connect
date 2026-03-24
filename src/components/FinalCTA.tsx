import WaitlistModal from "./WaitlistModal";

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="waitlist" aria-labelledby="waitlist-heading">
      <div className="container px-6 relative z-10 text-center">
        <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-6">
          [ REQUEST_ACCESS ]
        </div>
        <h2 id="waitlist-heading" className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Be first in <span className="text-primary">your city.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
          Join the waitlist. We'll email rollout details—no overpromised dates.
        </p>
        <div className="flex justify-center">
          <WaitlistModal
            trigger={
              <button className="font-mono-ui text-xs font-semibold tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-sm hover:brightness-90 transition-all whitespace-nowrap">
                JOIN_WAITLIST
              </button>
            }
          />
        </div>
      </div>

      {/* Full-bleed brand text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="font-extrabold text-[18vw] leading-none text-border/30 tracking-tighter text-center translate-y-[35%]">
          FOUNDER
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
