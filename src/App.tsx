// import "./App.css";
import { useEffect } from "react";
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
// import Translator from "./components/Translator/Translator";
// import LanguageToggleBtn from "./components/LanguageToggleBtn/LanguageToggleBtn";
// import Card from "./components/Card/Card";

function App() {
    const lenis = new Lenis();

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    useEffect(() => {
        console.log("fetch");
        fetch("http://localhost:3001/api")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    const emailHandler = async () => {
        // e.preventDefault();
        const res = await fetch("http://localhost:3001/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                firstName: "Łukasz",
                lastName: "Srukasz",
                email: "luki.kurs@g",
                message:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                phone: "123456789",
            }),
        });
        console.log("RESPONSE", res);
        const result = await res.json();

        if (result.code == 200) {
            console.log("SUCCES, check email");
        } else {
            console.log("ERROR, check stackoverflow");
        }
    };
    return (
        <>
            <LanguageContextProvider>
                <section style={{ position: "relative" }}>
                    <ProgressBar />
                    <Navigation />
                    <Intro />
                    <Visualizer />
                    <ContactForm />
                    <button onClick={emailHandler}>Sent email</button>
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
                <footer id="footer"></footer>
            </LanguageContextProvider>
        </>
    );
}

export default App;
