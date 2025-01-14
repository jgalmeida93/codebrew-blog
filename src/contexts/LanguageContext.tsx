"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import enUS from "@/messages/en-US.json";
import ptBR from "@/messages/pt-BR.json";
import { setUserLocale } from "@/services/locale";
import { useRouter } from "next/navigation";

type Language = "pt-BR" | "en-US";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  messages: typeof enUS;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(
    typeof window !== "undefined"
      ? (localStorage.getItem("locale") as Language) || "en-US"
      : "en-US"
  );
  const [messages, setMessages] = useState(language === "en-US" ? enUS : ptBR);

  useEffect(() => {
    setMessages(language === "en-US" ? enUS : ptBR);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en-US" ? "pt-BR" : "en-US"));
    setUserLocale(language === "en-US" ? "pt-BR" : "en-US");
    router.refresh();
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, messages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
