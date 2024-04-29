// import "./App.css";
import "./styles/main.scss";
import LanguageContextProvider from "./store/LanguageContext";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Navigation from "./components/Navigation/Navigation";
import Intro from "./components/intro/Intro";
import AnimatedTxt from "./components/AnimatedTxt/AnimatedTxt";
import Translator from "./components/Translator/Translator";
// import Intro from "./components/Intro/Intro";
import Visualizer from "./components/Visualizer/Visualizer";
// import ProjectCard from "./components/ProjectCard/ProjectCard";
import Services from "./components/Services/Services";
import StackCarousel from "./components/StackCarousel/StackCarosel";
import { TECH_STACK_ROW } from "./utils/consts";
// import Translator from "./components/Translator/Translator";
// import LanguageToggleBtn from "./components/LanguageToggleBtn/LanguageToggleBtn";
// import Card from "./components/Card/Card";

function App() {
    return (
        <>
            <LanguageContextProvider>
                <section style={{ position: "relative" }}>
                    <ProgressBar />
                    <Navigation />
                    <Intro />
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
                            <Translator translationKey="section-2.animated-heading" />
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
