import { useLanguage } from "@/contexts/LanguageContext";

const EN_SRC = "https://c4c67b7f.sibforms.com/serve/MUIFALSSVV5Oo2xncGYzq_vHZnMoodKyZFviIhSgtPfNzk3ZuRmKVbtKxsPR15IBW5_YqGKgg9debu5FuxcwCa74u5G5IYSkXcdb200cYuDPbXsaFSOkKzb50fYftFQjtwIgsT2dIaNzNGvcyPzWOLufGLGUYPacc7vydDZs0XLMTzM41GFpiCvgX0DnOnkkiZNruwFE-8612uaLvQ==";
const SL_SRC = "https://c4c67b7f.sibforms.com/serve/MUIFAFgB45KCHb-W3xQD0p67hQFynJIT_8Rhx5fyaU9XK62Cf5LzmWN8EgW0SzinIHdCFDZtoPN5tpOBzbzCP2EqJKem0h0Exdt_OPck0GXo5JXaL4I9E94brPJOhkDZ-wAga1ha2pBaFVz7l7WC98iuHvLWqVElr7bZwmmkKF_0znF8JXY9RA5uuZSc7wwqii_kh9fDwCuAd1DuLg==";

const WaitlistForm = () => {
  const { language } = useLanguage();
  const src = language === "sl" ? SL_SRC : EN_SRC;

  return (
    <div className="w-full max-w-[540px] mx-auto">
      <iframe
        key={language}
        width="540"
        height="600"
        src={src}
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
      ></iframe>
    </div>
  );
};

export default WaitlistForm;
