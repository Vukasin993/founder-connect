import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface WaitlistModalProps {
  trigger?: React.ReactNode;
}

const WaitlistModal = ({ trigger }: WaitlistModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <button className="font-mono-ui text-xs font-semibold tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-sm hover:brightness-90 transition-all whitespace-nowrap">
            JOIN
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[600px] max-h-[85vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="font-mono-ui text-sm tracking-wider">
            JOIN WAITLIST
          </DialogTitle>
          <DialogDescription className="font-mono-ui text-xs text-muted-foreground">
            Enter your email to get early access
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6">
          <iframe
            width="540"
            height="500"
            src="https://c4c67b7f.sibforms.com/serve/MUIFALSSVV5Oo2xncGYzq_vHZnMoodKyZFviIhSgtPfNzk3ZuRmKVbtKxsPR15IBW5_YqGKgg9debu5FuxcwCa74u5G5IYSkXcdb200cYuDPbXsaFSOkKzb50fYftFQjtwIgsT2dIaNzNGvcyPzWOLufGLGUYPacc7vydDZs0XLMTzM41GFpiCvgX0DnOnkkiZNruwFE-8612uaLvQ=="
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
