const TRANSLATION_KEYS: string[] = [
    "navigation.home",
    "navigation.projects",
    "navigation.contact",
    "intro.intro",
    "intro.profession",
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
        "intro.intro": "Hi! My name is Lukas.",
        "intro.profession": "I am freelance developer.",

        "audiopanel.settings": "Settings",
        "audiopanel.heading": "Audio Panel EN",
        "test.test": "In English",
    },

    pl: {
        "navigation.home": "Główna",
        "navigation.projects": "Projekty",
        "navigation.contact": "Kontakt",
        "intro.intro": "Cześć! Nazywam się Łukasz.",
        "intro.profession": "Jestem programistą freelancerem.",
        "audiopanel.settings": "Ustawienia",
        "audiopanel.heading": "Panel Audio PL",
        "test.test": "Po polsku",
    },
};
