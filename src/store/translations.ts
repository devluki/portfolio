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
    "section-2.animated-heading",
    "section-2.animated-heading--2",
    "servicesCard.heading--1",
    "servicesCard.heading--2",
    "servicesCard.heading--3",
    "servicesCard.heading--4",
    "audiopanel.heading",
    "test.test",
    "services.title",
    "services.description",
    "services.description-tailor-made-solutions",
    "services.description-frontend",
    "services.description-backend",
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
        "section-2.animated-heading": "What I can do for you?",
        "section-2.animated-heading--2": "My Tech Toolkit",
        "servicesCard.heading--1": "Tailor made solutions",
        // "servicesCard.heading--2": "Solutions",
        "servicesCard.heading--3": "FrontEnd",
        "servicesCard.heading--4": "BackEnd",

        // "modal.success-load": "File loaded success",
        "audiopanel.settings": "Settings",
        "audiopanel.heading": "Audio Panel EN",
        "test.test": "In English",
        "services.description":
            "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine",
        "services.description-tailor-made-solutions":
            "I specialize in creating custom software that is tailored to meet your specific business needs. I’m here to help, let’s Build Something Great Together!",
        "services.description-frontend":
            "I love to code things from scratch. Whether it’s a small business website or a complex web application, my goal is to create a frontend experience that stands out.  ",
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
        "section-2.animated-heading": "Co mogę dla Ciebie zrobić?",
        "section-2.animated-heading--2": "Technologie z którymi pracuję",

        //
        "servicesCard.heading--1": "Rozwiązania Szyte na miarę",
        // "servicesCard.heading--2": "Szyte na miarę",
        "servicesCard.heading--3": "FrontEnd",
        "servicesCard.heading--4": "BackEnd",
        "audiopanel.settings": "Ustawienia",
        "audiopanel.heading": "Panel Audio PL",
        "test.test": "Po polsku",
        "services.description":
            "Cudowny spokój ogarnął całą moją duszę, jak te słodkie wiosenne poranki, którymi cieszę się całym sercem. Jestem sama i czuję urok istnienia w tym miejscu, które zostało stworzone z myślą o błogości dusz takich jak moja.",
        "services.description-tailor-made-solutions":
            "Specjalizuje się w tworzeniu oprogramowania skrojonego do Twoich potrzeb biznesowych. Jestem tu żeby Ci pomóc, stwórzmy razem coś wyjątkowego!",

        "services.description-frontend":
            "Uwielbiam kodować rzeczy od zera. Niezależnie od tego, czy jest to witryna małej firmy, czy złożona aplikacja internetowa, moim celem jest stworzenie wyróżniającego się interfejsu.",
    },
};
