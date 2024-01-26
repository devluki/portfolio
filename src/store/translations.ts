const TRANSLATION_KEYS: string[] = ["audiopanel.heading"];

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
    },

    pl: {
        "audiopanel.heading": "Panel Audio PL",
    },
};
