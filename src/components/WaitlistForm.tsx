import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [founderId] = useState(() => `FF-${String(Math.floor(Math.random() * 9000) + 1000)}-X`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-surface border border-primary/30 rounded-sm p-5 max-w-md">
        <div className="font-mono-ui text-xs text-success tracking-widest mb-2">
          &gt; SYSTEM_AUTHENTICATED
        </div>
        <div className="font-mono-ui text-sm text-foreground">
          Founder ID: <span className="text-primary">{founderId}</span>
        </div>
        <div className="font-mono-ui text-xs text-muted-foreground mt-2">
          You're on the list. We'll email rollout details.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
      <div className="flex-1 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono-ui text-xs text-muted-foreground">
          &gt;
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full bg-surface border border-border rounded-sm pl-7 pr-4 py-3 font-mono-ui text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <button
        type="submit"
        className="font-mono-ui text-xs font-semibold tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-sm hover:brightness-90 transition-all whitespace-nowrap"
      >
        JOIN
      </button>
    </form>
  );
};

export default WaitlistForm;
