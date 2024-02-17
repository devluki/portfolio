const TRANSLATION_KEYS: string[] = [
    "navigation.home",
    "navigation.projects",
    "navigation.contact",
    "intro.intro",
    "intro.profession",
    "btn.custiomize",
    "modal.custiomize",
    "modal.default-message",
    "modal.error-message",
    "modal.success-message",
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
        "btn.custiomize": "Customize animation",
        "modal.custiomize":
            "You can customize animation, make a sound equalizer from particles. Just click play button, you can also upload your favorite song.",
        "modal.default-message": "Default audio file loaded.",
        "modal.error-message": "Please upload valid file format (*.mp3).",
        "modal.success-message": "Valid file format!",
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
        "btn.custiomize": "Dostosuj animacje",
        "modal.custiomize":
            "Możesz zmienić animację, stworzyć z cząsteczek equalizer dźwięku. Wystarczy, że klikniesz play, możesz również załadować swoją ulubioną piosenkę.",
        "modal.default-message": "Załadowano domyślny plik audio.",
        "modal.error-message": "Możesz załadować tylko pliki w formacie *.mp3.",
        "modal.success-message": "Poprawny format pliku!",
        "audiopanel.settings": "Ustawienia",
        "audiopanel.heading": "Panel Audio PL",
        "test.test": "Po polsku",
    },
};
