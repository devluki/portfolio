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

// import Porject from "./components/Project/Project";
// import POJECTS from "./utils/consts.ts";
// import Project from "./components/Project/Project";

function App() {
    const lenis = new Lenis();
    const parent = useRef<HTMLElement | null>(null);

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
                <section style={{ position: "relative" }} ref={parent}>
                    <ProgressBar />
                    <Navigation />
                    <Intro />

                    <Visualizer />
                </section>
                <section id="projects">
                    <AnimatedTxt
                        animationParameters={{
                            color: "white",
                            isScrollTrigger: true,
                            triggerId: "#projects",
                            start: "top 50%",
                        }}
                    >
                        <h1
                            className="heading-primary heading-primary--uppercase"
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
                            triggerId: "#projects",
                            start: "top 50%",
                        }}
                    >
                        <h1
                            className="heading-primary heading-primary--uppercase"
                            id="animatedTxt"
                        >
                            <Translator translationKey="section-2.animated-heading--2" />
                        </h1>
                    </AnimatedTxt>
                    <StackCarousel data={TECH_STACK_ROW} />
                </section>
                <section id="projects2">
                    <AnimatedTxt
                        animationParameters={{
                            color: "white",
                            isScrollTrigger: true,
                            triggerId: "#projects2",
                            start: "top 80%",
                        }}
                    >
                        <h1
                            className="heading-primary heading-primary--uppercase"
                            id="animatedTxt"
                        >
                            <Translator translationKey="navigation.projects" />
                        </h1>
                    </AnimatedTxt>
                    <Projects />
                    {/* <Project id="idd" /> */}
                </section>
                <section className="section section--contact">
                    <div className="contact">
                        <div className="form-container">
                            <div className="form-container__txt">
                                <h1 className="heading-primary heading-primary--bold">
                                    <Translator translationKey="contactForm.getInTouch" />
                                </h1>
                                <p className="text-primary">
                                    <Translator translationKey="contactForm.text" />
                                </p>

                                <p className="text-primary u-margin-top-huge">
                                    <Translator translationKey="contactForm.text__bottom" />
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </section>
                {/* <footer id="footer"></footer> */}
                <Footer />
            </LanguageContextProvider>
        </>
    );
}

export default App;
