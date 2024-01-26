const TRANSLATION_KEYS: string[] = ["audiopanel.heading", "test.test"];

// type KeyTuple = typeof TRANSLATION_KEYS;
// export type TranslationKey = KeyTuple[number];

export type Language = "pl" | "en";
type TranslationKey = typeof TRANSLATION_KEYS;

export const TRANSLATIONS: Record<
    Language,
    Record<TranslationKey[number], string>
> = {
    en: {
        "audiopanel.heading": "Audio Panel EN",
        "test.test": "In English",
    },

    pl: {
        "audiopanel.heading": "Panel Audio PL",
        "test.test": "Po polsku",
    },
};
