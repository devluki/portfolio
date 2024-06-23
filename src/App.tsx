import "./App.scss";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import "./styles/main.scss";

import LanguageContextProvider from "./store/LanguageContext";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Navigation from "./components/Navigation/Navigation";
import Intro from "./components/intro/Intro";

import AnimatedTxt from "./components/AnimatedTxt/AnimatedTxt";
import Translator from "./components/Translator/Translator";

import Visualizer from "./components/Visualizer/Visualizer";

import Services from "./components/Services/Services";
import StackCarousel from "./components/StackCarousel/StackCarosel";
import { TECH_STACK_ROW } from "./utils/consts";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
// import ScrollDownIcon from "./components/ScrollDownIcon/ScrollDownIcon";

function App() {
    const lenis = new Lenis();
    // const ctx = useContext(LanguageContext);
    // 1. Parent used to access the root element
    const parent = useRef<HTMLElement | null>(null);

    // Lenis initialization
    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Lock the haight of the app to 100vh until intro animation end
    const updateHeight = (div: HTMLDivElement) => {
        setTimeout(() => {
            div.style.height = "auto";
            div.style.overflowY = "auto";
        }, 2500);
    };

    // Update height and overflowY values after intro animation is finished
    useEffect(() => {
        const rootElement = parent.current?.parentElement as HTMLDivElement;
        updateHeight(rootElement);
    }, []);

    return (
        <>
            <LanguageContextProvider>
                <section
                    className="section section--hero"
                    ref={parent}
                    id="section--hero"
                >
                    <ProgressBar />
                    <Navigation />
                    <Intro />

                    <Visualizer />
                </section>

                <section
                    className="section section--services"
                    id="section--services"
                >
                    <AnimatedTxt
                        animationParameters={{
                            color: "white",
                            isScrollTrigger: true,
                            triggerId: "#section--services",
                            start: "top 70%",
                        }}
                    >
                        <h1
                            className="heading-primary heading-primary--uppercase u-margin-top-medium u-margin-bottom-medium"
                            id="animatedTxt"
                        >
                            <Translator translationKey="section-2.animated-heading" />
                        </h1>
                    </AnimatedTxt>

                    <Services />
                    <AnimatedTxt
                        animationParameters={{
                            color: "white",
                            isScrollTrigger: true,
                            triggerId: "#section--services",
                            start: "top 20%",
                        }}
                    >
                        <h1
                            className="heading-primary heading-primary--uppercase u-margin-top-medium u-margin-bottom-medium"
                            id="animatedTxt"
                        >
                            <Translator translationKey="section-2.animated-heading--2" />
                        </h1>
                    </AnimatedTxt>
                    <StackCarousel data={TECH_STACK_ROW} />
                </section>

                <section
                    className="section section--projects"
                    id="section--projects"
                >
                    <AnimatedTxt
                        animationParameters={{
                            color: "white",
                            isScrollTrigger: true,
                            triggerId: "#section--projects",
                            start: "top 85%",
                        }}
                    >
                        <h1
                            className="heading-primary heading-primary--uppercase u-margin-top-medium u-margin-bottom-big"
                            id="animatedTxt"
                        >
                            <Translator translationKey="navigation.projects" />
                        </h1>
                    </AnimatedTxt>
                    <Projects />
                </section>

                <section
                    className="section section--contact"
                    id="section--contact"
                >
                    <div className="contact">
                        <div className="form-container">
                            <div className="form-container__txt">
                                <h1 className="heading-primary heading-primary--bold">
                                    <Translator translationKey="contactForm.getInTouch" />
                                </h1>
                                <p className="text-primary">
                                    <Translator translationKey="contactForm.text" />
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </section>

                <Footer />
            </LanguageContextProvider>
        </>
    );
}

export default App;
