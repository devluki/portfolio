import { useState, createContext } from "react";
import { TRANSLATIONS } from "./translations";

type Language = "pl" | "en";

export const LanguageContext = createContext({
    currentLanguage: "en",
    toggleLanguage: () => {},
    getTranslatedValue: (key) => string,
});
// @ts-ignore
const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState<Language>("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "pl" : "en"));
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
