# 🌐 Dual Language System (EN/SL)

## ✅ Implemented Features

### 1. **Language Toggle**
- Globe icon + language indicator in Navbar
- Click to switch between English (EN) and Slovenian (SL)
- Language preference saved in localStorage
- Persists across page reloads

### 2. **Complete Translations**
All content is translated:
- ✅ Hero section
- ✅ Features grid (12 features)
- ✅ How It Works (4 steps)
- ✅ Privacy & FAQ section
- ✅ Pricing section
- ✅ Final CTA
- ✅ Navigation & Footer
- ✅ Modal dialog text

### 3. **Language-Specific Forms**
- **English form**: Brevo iframe for EN users
- **Slovenian form**: Brevo iframe for SL users
- Automatically switches based on selected language
- Form reloads when language changes

### 4. **SEO Optimization**
- `hreflang` tags added for multi-language support
- `lang` attribute dynamically updated on `<html>` element
- Search engines can index both language versions

---

## 🏗️ Architecture

### File Structure
```
src/
├── contexts/
│   └── LanguageContext.tsx       # React Context for language state
├── i18n/
│   └── translations.ts            # All translations (EN + SL)
└── components/
    ├── Navbar.tsx                 # Language toggle button
    ├── WaitlistModal.tsx          # Language-specific iframe forms
    ├── HeroSection.tsx            # Uses translations
    ├── FeaturesGrid.tsx           # Uses translations
    ├── HowItWorks.tsx             # Uses translations
    ├── PrivacySection.tsx         # Uses translations
    ├── PricingSection.tsx         # Uses translations
    ├── FinalCTA.tsx               # Uses translations
    └── Footer.tsx                 # Uses translations
```

### Technology Stack
- **React Context API** - Global language state management
- **localStorage** - Persist user's language preference
- **TypeScript** - Type-safe translations
- **Conditional rendering** - Language-specific iframe forms

---

## 🎯 How to Use

### For Users
1. Click the **Globe icon (🌐)** in the top-right navbar
2. Language switches between EN ↔ SL
3. All content updates instantly
4. Preference is saved automatically

### For Developers

#### Access translations in any component:
```tsx
import { useLanguage } from "@/contexts/LanguageContext";

const MyComponent = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title1}</h1>
      <p>{t.hero.description}</p>
      <button onClick={() => setLanguage(language === 'en' ? 'sl' : 'en')}>
        Switch Language
      </button>
    </div>
  );
};
```

#### Translation structure:
```tsx
t.hero.title1        // "Meet founders" (EN) | "Srečaj ustanovitelje" (SL)
t.features.items[0]  // First feature object
t.pricing.price      // "$9.99" (EN) | "9,99 $" (SL)
```

---

## 📝 Adding New Translations

### Step 1: Update `translations.ts`
```tsx
// src/i18n/translations.ts
export const translations = {
  en: {
    newSection: {
      title: "My New Title",
      description: "My description",
    }
  },
  sl: {
    newSection: {
      title: "Moj novi naslov",
      description: "Moj opis",
    }
  }
};
```

### Step 2: Use in component
```tsx
const { t } = useLanguage();

return <h2>{t.newSection.title}</h2>;
```

---

## 🔄 Form Management

### Current Setup
Two separate Brevo forms (one per language):

**English Form:**
```
https://c4c67b7f.sibforms.com/serve/MUIFALSSVV5Oo2xnc...
```

**Slovenian Form:**
```
https://c4c67b7f.sibforms.com/serve/MUIFAFgB45KCHb-W3x...
```

### How it works:
1. User clicks "JOIN_WAITLIST" or "PRIDRUŽI_SE_SEZNAMU"
2. Modal opens with iframe
3. `iframeSrc` determined by `language` state
4. Form displays in correct language
5. Both forms submit to your Brevo account

### To add more forms:
1. Create new form in Brevo
2. Get iframe URL
3. Update `WaitlistModal.tsx`:
```tsx
const iframeSrc = 
  language === "en" ? "EN_URL" :
  language === "sl" ? "SL_URL" :
  "DEFAULT_URL";
```

---

## 🌍 SEO Benefits

### Implemented SEO tags:
```html
<!-- English as default -->
<link rel="alternate" hreflang="en" href="https://founderfield.app" />

<!-- Slovenian version -->
<link rel="alternate" hreflang="sl" href="https://founderfield.app?lang=sl" />

<!-- Default for unspecified languages -->
<link rel="alternate" hreflang="x-default" href="https://founderfield.app" />
```

### Benefits:
- ✅ Google indexes both language versions
- ✅ Appears in region-specific searches (EN for USA, SL for Slovenia)
- ✅ No duplicate content penalties
- ✅ Better user experience for non-English speakers

---

## 🧪 Testing Checklist

### Functionality Tests
- [ ] Toggle EN ↔ SL from navbar
- [ ] All text changes on toggle
- [ ] Language persists after page reload
- [ ] Correct form opens in modal (EN/SL)
- [ ] Form can be submitted in both languages

### Visual Tests
- [ ] No layout shifts when switching
- [ ] Text doesn't overflow containers
- [ ] All special characters render correctly (č, š, ž)
- [ ] Modal title/description updates

### Browser Tests
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

---

## 📊 Analytics (Optional)

### Track language usage:
```tsx
// Add to LanguageContext.tsx
const setLanguage = (lang: Language) => {
  setLanguageState(lang);
  localStorage.setItem("language", lang);
  
  // Track in analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'language_change', {
      new_language: lang,
    });
  }
};
```

---

## 🚀 Future Enhancements

### Potential additions:
1. **Auto-detect browser language**
   ```tsx
   const detectLanguage = (): Language => {
     const browserLang = navigator.language.split('-')[0];
     return browserLang === 'sl' ? 'sl' : 'en';
   };
   ```

2. **More languages**
   - Croatian (hr)
   - German (de)
   - Italian (it)

3. **URL-based language switching**
   ```
   /en/  →  English
   /sl/  →  Slovenian
   ```

4. **Right-to-left (RTL) support**
   - For Arabic, Hebrew, etc.

---

## 🐛 Troubleshooting

### Issue: Language doesn't persist
**Solution:** Check localStorage in DevTools → Application → Local Storage

### Issue: Some text not translating
**Solution:** Verify component imports `useLanguage()` hook

### Issue: Form shows wrong language
**Solution:** Check iframe URL mapping in `WaitlistModal.tsx`

### Issue: Special characters broken
**Solution:** Ensure files saved as UTF-8 encoding

---

## 🎉 Summary

You now have a **fully functional dual-language website** with:
- ✅ Instant language switching
- ✅ Persistent user preference
- ✅ SEO-optimized for both languages
- ✅ Separate forms for EN/SL
- ✅ Type-safe translations
- ✅ Easy to extend with more languages

**Test it:** Click the 🌐 icon in the navbar!
