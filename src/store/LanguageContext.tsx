import { useState, createContext, ReactNode, FC } from "react";
import { TRANSLATIONS } from "./translations";

type Language = "pl" | "en";

interface LanguageState {
    currentLanguage: Language;

    toggleLanguage: (lang: Language) => void;
    getTranslatedValue: (key: string) => string;
}

export const LanguageContext = createContext<LanguageState | null>(null);

const LanguageContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("en");

    const toggleLanguage = (lang: Language) => {
        // setLanguage((prev) => (prev === "en" ? "pl" : "en"));
        if (lang === language) return;
        setLanguage(lang);
    };

    const getTranslatedValue = (key: string) => {
        const translation = TRANSLATIONS[language][key];

        return translation;
    };

    return (
        <LanguageContext.Provider
            value={{
                currentLanguage: language,
                toggleLanguage,
                getTranslatedValue,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContextProvider;
