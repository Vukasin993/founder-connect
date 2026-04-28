import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface WaitlistModalProps {
  trigger?: React.ReactNode;
}

const WaitlistModal = ({ trigger }: WaitlistModalProps) => {
  const [open, setOpen] = useState(false);
  const { language, t } = useLanguage();

  const iframeSrc = language === "en"
    ? "https://c4c67b7f.sibforms.com/serve/MUIFALSSVV5Oo2xncGYzq_vHZnMoodKyZFviIhSgtPfNzk3ZuRmKVbtKxsPR15IBW5_YqGKgg9debu5FuxcwCa74u5G5IYSkXcdb200cYuDPbXsaFSOkKzb50fYftFQjtwIgsT2dIaNzNGvcyPzWOLufGLGUYPacc7vydDZs0XLMTzM41GFpiCvgX0DnOnkkiZNruwFE-8612uaLvQ=="
    : "https://c4c67b7f.sibforms.com/serve/MUIFAFgB45KCHb-W3xQD0p67hQFynJIT_8Rhx5fyaU9XK62Cf5LzmWN8EgW0SzinIHdCFDZtoPN5tpOBzbzCP2EqJKem0h0Exdt_OPck0GXo5JXaL4I9E94brPJOhkDZ-wAga1ha2pBaFVz7l7WC98iuHvLWqVElr7bZwmmkKF_0znF8JXY9RA5uuZSc7wwqii_kh9fDwCuAd1DuLg==";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <button className="inline-flex h-14 items-center rounded-full bg-primary px-7 font-mono-ui text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground transition-transform hover:-translate-y-0.5 whitespace-nowrap">
            {t.cta.button.replace(/_/g, " ")}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-[680px] overflow-y-auto border border-border bg-card p-0 text-foreground">
        <div className="border-b border-border px-6 py-5">
          <div className="font-mono-ui text-[10px] uppercase tracking-[0.24em] text-primary">{t.modal.title}</div>
          <div className="mt-2 font-display text-2xl font-semibold text-foreground">{t.modal.description}</div>
        </div>
        <div className="p-4 md:p-6">
          <iframe
            key={language}
            width="100%"
            height="520"
            src={iframeSrc}
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            className="w-full rounded-[24px] border-0 bg-white"
            title="Waitlist Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
