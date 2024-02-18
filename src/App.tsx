// import "./App.css";
import "./styles/main.scss";
import LanguageContextProvider from "./store/LanguageContext";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Navigation from "./components/Navigation/Navigation";
import Intro from "./components/intro/Intro";
// import Intro from "./components/Intro/Intro";
import Visualizer from "./components/Visualizer/Visualizer";
import ProjectCard from "./components/ProjectCard/ProjectCard";
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

                <ProjectCard />
            </LanguageContextProvider>
        </>
    );
}

export default App;
