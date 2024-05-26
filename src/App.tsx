// import "./App.css";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./styles/main.scss";

import LanguageContextProvider from "./store/LanguageContext";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Navigation from "./components/Navigation/Navigation";
import Intro from "./components/intro/Intro";
// import Intro from "./components/Intro-dlete/Intro";
import AnimatedTxt from "./components/AnimatedTxt/AnimatedTxt";
import Translator from "./components/Translator/Translator";
// import Intro from "./components/Intro/Intro";
import Visualizer from "./components/Visualizer/Visualizer";
// import ProjectCard from "./components/ProjectCard/ProjectCard";
import Services from "./components/Services/Services";
import StackCarousel from "./components/StackCarousel/StackCarosel";
import { TECH_STACK_ROW } from "./utils/consts";
import ContactForm from "./components/ContactForm/ContactForm";
// import Introdel from "./components/Intro-dlete/Intro";
// import Translator from "./components/Translator/Translator";
// import LanguageToggleBtn from "./components/LanguageToggleBtn/LanguageToggleBtn";
// import Card from "./components/Card/Card";

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

    useEffect(() => {
        const rootElement = parent.current?.parentElement as HTMLDivElement;
        // console.log(rootElement);
        updateHeight(rootElement);
    }, []);

    return (
        <>
            <LanguageContextProvider>
                <section style={{ position: "relative" }} ref={parent}>
                    <ProgressBar />
                    <Navigation />
                    <Intro />
                    {/* <Introdel /> */}
                    <Visualizer />
                </section>
                <section
                    id="projects"
                    style={{ height: "100vh", borderTop: "2px solid red" }}
                >
                    <AnimatedTxt
                        animationParameters={{
                            color: "white",
                            isScrollTrigger: true,
                            triggerId: "#projects",
                            start: "top 50%",
                        }}
                    >
                        <h1 className="heading-primary" id="animatedTxt">
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
                <section>
                    <div>
                        <h1>
                            <Translator translationKey="contactForm.getInTouch" />
                        </h1>
                        <div>
                            <div></div>
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
