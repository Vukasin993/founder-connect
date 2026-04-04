import { Link } from "react-router-dom";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal navbar */}
      <nav className="border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container flex items-center h-14 px-6">
          <Link to="/" className="font-mono-ui text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors">
            FOUNDER_FIELD<span className="text-muted-foreground">_v1.0</span>
          </Link>
        </div>
      </nav>

      <main className="container px-6 py-16 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono-ui text-xs text-muted-foreground tracking-widest uppercase mb-4">
            [ ACCOUNT_MANAGEMENT ]
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Delete Your <span className="text-primary">Account</span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            You have the right to delete your Founder Field account and all associated personal data at any time.
            This page explains how the process works, what data is removed, and what conditions apply.
          </p>
        </div>

        {/* How to delete */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">
            HOW TO DELETE YOUR ACCOUNT
          </h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="font-mono-ui text-primary font-bold">01</span>
              <p>Open the Founder Field mobile app and sign in to your account.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono-ui text-primary font-bold">02</span>
              <p>Navigate to <strong className="text-foreground">Profile → Settings → Account</strong>.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono-ui text-primary font-bold">03</span>
              <p>Tap <strong className="text-foreground">"Delete Account"</strong> and confirm the action when prompted.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono-ui text-primary font-bold">04</span>
              <p>
                Alternatively, send a deletion request by email to{" "}
                <a
                  href="mailto:support@founderfield.app"
                  className="text-primary hover:underline"
                >
                  support@founderfield.app
                </a>{" "}
                from the address associated with your account. We will process it within 30 days.
              </p>
            </div>
          </div>
        </section>

        {/* What gets deleted */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">
            WHAT GETS DELETED
          </h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-3 text-sm">
            {[
              "Your profile — name, bio, company, industry, stage, interests",
              "Your exact location data and all stored proximity history",
              "All match history and match preferences",
              "All conversations and messages sent or received",
              "Social graph — friends, pending requests",
              "Push notification tokens and device identifiers",
              "Subscription status (active subscriptions are cancelled first)",
              "OAuth account links (Google, Apple, etc.)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-destructive mt-0.5 font-mono-ui">✕</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What is retained */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">
            WHAT MAY BE RETAINED
          </h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-3 text-sm">
            {[
              "Anonymised, aggregated analytics that cannot be linked back to you",
              "Transaction records for billing/legal compliance (up to 7 years, as required by law)",
              "Content you voluntarily submitted to public reports or legal investigations",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-success mt-0.5 font-mono-ui">!</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conditions */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">
            CONDITIONS & IMPORTANT NOTES
          </h2>
          <div className="bg-surface border border-border rounded-sm p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Active subscription:</strong> If you have an active paid subscription, cancel it first through the App Store or Google Play before requesting deletion. Deletion does not automatically trigger a refund for unused subscription time.
            </p>
            <p>
              <strong className="text-foreground">Free trial users:</strong> Accounts on a free trial can be deleted immediately without any additional steps.
            </p>
            <p>
              <strong className="text-foreground">Irreversibility:</strong> Account deletion is permanent. Data cannot be recovered after deletion is complete.
            </p>
            <p>
              <strong className="text-foreground">Processing time:</strong> In-app deletion is processed within 24 hours. Email-based deletion requests are processed within 30 days.
            </p>
            <p>
              <strong className="text-foreground">Linked accounts:</strong> Deleting your Founder Field account does not delete your Google or Apple account. It only removes the OAuth link and all associated Founder Field data.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-4 font-mono-ui tracking-wide">
            QUESTIONS OR REQUESTS
          </h2>
          <div className="bg-surface border border-border rounded-sm p-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              For any account deletion requests, data access queries, or privacy-related concerns, contact us at:{" "}
              <a
                href="mailto:support@founderfield.app"
                className="text-primary hover:underline font-semibold"
              >
                support@founderfield.app
              </a>
            </p>
          </div>
        </section>

        {/* Back link */}
        <div className="border-t border-border pt-8">
          <Link
            to="/"
            className="font-mono-ui text-xs font-semibold tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono-ui text-xs text-muted-foreground tracking-wider">
            © 2026 FOUNDER_FIELD
          </span>
          <span className="font-mono-ui text-xs text-muted-foreground">
            Last updated: April 2026
          </span>
        </div>
      </footer>
    </div>
  );
};

export default DeleteAccount;
