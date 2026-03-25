import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language } from "@/i18n/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect language from browser or geolocation
const detectLanguage = async (): Promise<Language> => {
  // Check localStorage first (user's previous choice)
  const stored = localStorage.getItem("language");
  if (stored) return stored as Language;

  // Check browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("sl")) {
    return "sl";
  }

  // Try IP geolocation (optional - only if browser lang is not Slovenian)
  try {
    const response = await fetch("https://ipapi.co/json/", {
      signal: AbortSignal.timeout(3000), // 3 second timeout
    });
    
    if (response.ok) {
      const data = await response.json();
      // Check if user is from Slovenia
      if (data.country_code === "SI") {
        return "sl";
      }
    }
  } catch (error) {
    // Silently fail - will default to English
    console.log("Geolocation detection skipped");
  }

  // Default to English
  return "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Auto-detect language on first load
    detectLanguage().then((detectedLang) => {
      setLanguageState(detectedLang);
      setIsInitialized(true);
      document.documentElement.lang = detectedLang;
      
      // Save detected language (only if not already saved)
      if (!localStorage.getItem("language")) {
        localStorage.setItem("language", detectedLang);
      }
    });
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    if (isInitialized) {
      document.documentElement.lang = language;
    }
  }, [language, isInitialized]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
