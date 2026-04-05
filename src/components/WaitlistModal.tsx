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
          <button className="font-mono-ui text-xs font-semibold tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-sm hover:brightness-90 transition-all whitespace-nowrap">
            {t.cta.button.toUpperCase()}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[600px] max-h-[85vh] overflow-y-auto p-0">
        <div className="p-6">
          <iframe
            key={language}
            width="540"
            height="500"
            src={iframeSrc}
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            className="w-full border-0"
            title="Waitlist Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
