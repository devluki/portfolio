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
import ContactForm from "./components/ContactForm/ContactForm";

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
                        <h1 className="heading-primary" id="animatedTxt">
                            <Translator translationKey="section-2.animated-heading--2" />
                        </h1>
                    </AnimatedTxt>
                    <StackCarousel data={TECH_STACK_ROW} />
                </section>
                <section className="section section--contact">
                    <div className="contact">
                        <h1 className="heading-primary">
                            <Translator translationKey="contactForm.getInTouch" />
                        </h1>
                        <div className="form-container">
                            <div className="form-container__txt">
                                <p className="text-primary">
                                    {/* TO DO: use <Translator/> */}
                                    Whether you have a project in mind, need
                                    expert advice, or just want to say hello,
                                    I’m here to listen. Fill out the form below
                                    with your details and message, and I’ll make
                                    sure to get back to you swiftly.
                                </p>
                                <p className="text-primary">
                                    {/* TO DO: use <Translator/> */}
                                    Don’t hesitate to reach out. Your next great
                                    idea is just a conversation away!{" "}
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </section>
                <footer id="footer"></footer>
            </LanguageContextProvider>
        </>
    );
}

export default App;
