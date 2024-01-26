// import "./App.css";
import LanguageContextProvider from "./store/LanguageContext";
import Visualizer from "./components/Visualizer/Visualizer";
import Translator from "./components/Translator/Translator";
import LanguageToggleBtn from "./components/LanguageToggleBtn/LanguageToggleBtn";

function App() {
    return (
        <>
            <LanguageContextProvider>
                <h1>
                    <Translator translationKey="test.test" />
                </h1>
                <LanguageToggleBtn />
                <Visualizer />
            </LanguageContextProvider>
        </>
    );
}

export default App;
