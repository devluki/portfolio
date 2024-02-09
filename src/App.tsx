// import "./App.css";
import "./styles/main.scss";
import LanguageContextProvider from "./store/LanguageContext";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Navigation from "./components/Navigation/Navigation";
// import Intro from "./components/Intro/Intro";
import Visualizer from "./components/Visualizer/Visualizer";
// import Translator from "./components/Translator/Translator";
import LanguageToggleBtn from "./components/LanguageToggleBtn/LanguageToggleBtn";

function App() {
    return (
        <>
            <LanguageContextProvider>
                <ProgressBar />
                <Navigation />
                {/* <Intro /> */}
                {/* <h1>
                    <Translator translationKey="test.test" />
                </h1> */}
                <LanguageToggleBtn />
                <Visualizer />
            </LanguageContextProvider>
        </>
    );
}

export default App;
