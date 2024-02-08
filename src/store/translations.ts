const TRANSLATION_KEYS: string[] = [
    "navigation.home",
    "navigation.projects",
    "navigation.contact",
    "audiopanel.heading",
    "test.test",
];

// type KeyTuple = typeof TRANSLATION_KEYS;
// export type TranslationKey = KeyTuple[number];

export type Language = "pl" | "en";
type TranslationKey = typeof TRANSLATION_KEYS;

export const TRANSLATIONS: Record<
    Language,
    Record<TranslationKey[number], string>
> = {
    en: {
        "navigation.home": "Home",
        "navigation.projects": "Projects",
        "navigation.contact": "Contact",
        "audiopanel.settings": "Settings",
        "audiopanel.heading": "Audio Panel EN",
        "test.test": "In English",
    },

    pl: {
        "navigation.home": "Główna",
        "navigation.projects": "Projekty",
        "navigation.contact": "Kontakt",
        "audiopanel.settings": "Ustawienia",
        "audiopanel.heading": "Panel Audio PL",
        "test.test": "Po polsku",
    },
};
