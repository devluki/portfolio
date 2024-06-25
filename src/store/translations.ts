const TRANSLATION_KEYS: string[] = [
    "navigation.home",
    "navigation.portfolio",
    "navigation.projects",
    "navigation.contact",
    "intro.intro",
    "intro.profession",
    "btn.custiomize",
    "modal.custiomize",
    "modal.default-message",
    "modal.error-message",
    "modal.success-message",
    "modal.loading-message",
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
    "contactForm.getInTouch",
    "contactForm.successMessage",
    "contactForm.ErrorMessage",
    "contactForm.returnBtn",
    "contactForm.text",
    "projects.buttonGoLive",
    "projects.buttonGithub",
    "projects.description-kejtrip",
    "projects.description-portfolio",
    "projects.buttonGoCode",
    "footer.copyright",
    "footer.allRightReserved",
    // "projects.firstProject",
    // "projects.latestProject",
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
        "navigation.sevices": "Services",
        "navigation.projects": "Projects",
        "navigation.contact": "Contact",
        "intro.intro": "Hi! My name is Lukas.",
        "intro.profession": "I am freelance developer.",
        "btn.custiomize": "Customize animation",
        "modal.custiomize":
            "You can customize animation, make a sound equalizer from particles. Just click play button, you can also upload your favorite song.",
        "modal.default-message": "Default audio file loaded",

        "modal.error-message": "Please upload valid file format (*.mp3).",
        "modal.success-message": "File loaded successfully!",
        "modal.loading-message": "Loading...",
        "section-2.animated-heading": "What I can do for you?",
        "section-2.animated-heading--2": "My Tech Toolkit",
        // "servicesCard.heading--1": "Tailor made solutions",
        "servicesCard.heading--1": "Custom software",
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
            "I love to code things from scratch. Whether it's a small business website or a complex web application, my goal is to create a frontend experience that stands out.",
        "services.description-backend":
            "Need something more complex than regular website? I can create for you server-side solutions, I ensure your website performs seamlessly and it's secure.",
        // "services.description-backend":
        //     "I write clean, efficient code to power dynamic website features.  Create server-side solutions, I ensure your website performs seamlessly.   ",
        "contactForm.getInTouch": "Get in touch!",
        "contactForm.successMessage":
            "Thank you! Your message has been successfully sent.",
        "contactForm.ErrorMessage":
            "Something went wrong, try again in a few minutes...",
        "contactForm.returnBtn": "Back",
        "contactForm.text":
            "Ready to start your project or have any questions? Let's connect! Fill out the form , and I'll get back to you as soon as possible. Whether it's web development, troubleshooting, or a custom solution, I'm here to help bring your vision to life. Looking forward to working with you!",
        "contactForm.text_bottom":
            "Your next great idea is just a conversation away!",
        "projects.buttonGoLive": "Life version",
        "projects.description-kejtrip":
            "First major project: Travel blog written in Node.js (Express), using EJS, MongoDB & Mongoose. With content management system created from scratch (CRUD) - articles, maps, routes. With the functionality of commenting on articles and adding likes.",
        "projects.description-portfolio":
            "Latest project: Portfolio website written in TypeScript and React, with interactive 3D animation (Three.js), scroll animations (GSAP) and SVG, music player and visulaser + server-side mailing (Node.js and NodeMailer).",
        "projects.buttonGoCode": "Code",
        "projects.buttonGithub": "More projects...",
        "footer.copyright": "Copyright",
        "footer.allRightReserved": "All rights reserved",
        // "projects.firstProject": "First project",
        // "projects.latestProject": "Latest project",
    },

    pl: {
        "navigation.home": "Główna",
        "navigation.sevices": "Usługi",
        "navigation.projects": "Projekty",
        "navigation.contact": "Kontakt",
        "intro.intro": "Cześć! Nazywam się Łukasz.",
        "intro.profession": "Jestem programistą freelancerem.",
        "btn.custiomize": "Dostosuj animacje",
        "modal.custiomize":
            "Możesz zmienić animację, stworzyć z cząsteczek equalizer dźwięku. Wystarczy, że klikniesz play, możesz również załadować swoją ulubioną piosenkę.",
        "modal.default-message": "Załadowano domyślny plik audio.",

        "modal.error-message": "Możesz załadować tylko pliki w formacie *.mp3.",
        "modal.success-message": "Plik został pomyślnie załadowny!",
        "modal.loading-message": "Ładowanie pliku...",
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
            "Tworzę oprogramowanie dostosowane do Twoich potrzeb biznesowych. Jestem tu, aby pomóc. Zbudujmy coś wspaniałego razem!",

        "services.description-frontend":
            "Uwielbiam kodować od podstaw. Niezależnie czy to mała strona firmowa, czy skomplikowana aplikacja, moim celem jest stworzenie wyjątkowego frontend.",
        "services.description-backend":
            "Potrzebujesz czegoś bardziej złożonego niź standardowa strona internetowa? Mogę dla Ciebie stworzyć rozwiązania po stronie serwera, zapewniam płynne oraz bezpieczne działanie Twojej witryny.",
        "contactForm.getInTouch": "Napisz do mnie!",
        "contactForm.successMessage":
            "Dzięki! Twoja wiadomość została wysłana.",
        "contactForm.ErrorMessage":
            "Coś poszło nie tak, spróbuj pownownie za kilka minut...",
        "contactForm.returnBtn": "Wstecz",
        "contactForm.text":
            "Jesteś gotowy, aby rozpocząć swój projekt lub masz jakieś pytania? Napisz do mnie! Wypełnij formularz, a odezwę się do Ciebie tak szybko, jak to możliwe. Niezależnie od tego, czy chodzi o stworzenie strony internetowej, usunięcie problemów w istniejącym projekcie, czy indywidualne rozwiązanie, jestem tu, aby pomóc urzeczywistnić Twoją wizję. Nie mogę się doczekać współpracy z Tobą!",
        "contactForm.text_bottom":
            "Twój wspaniały pomysł jest na wyciągnięcie ręki!",

        "projects.description-kejtrip":
            "Pierwszy poważny projekt: Blog podróżniczy napisany w Node.js (express), przy użyciu EJS, MongoDB & Mongoose. Z autorskim systemem do zarządzania treściami (CRUD) - artykułami, mapami, przebytymi trasami. Z funkcjonalnością komentowania artykułów i dodawania polubień.",
        "projects.description-portfolio":
            "Najnowszy projekt: Strona portfolio napisana w TypeScript i React, z interaktywną animacją 3D (Three.js), animacjami textu (GSAP) oraz SVG, odtwarzaczem muzyki i wizualizacją + mailingiem po stronie serwera (Node.js i NodeMailer).",
        "projects.buttonGoLive": "Idź do",
        "projects.buttonGoCode": "Kod",
        "projects.buttonGithub": "Więcej projektów...",
        "footer.copyright": "Prawa autorskie",
        "footer.allRightReserved": "Wszelkie prawa zastrzeżone.",
        // "projects.firstProject": "Pierwszy projekt",
        // "projects.latestProject": "Ostatni project",
    },
};
