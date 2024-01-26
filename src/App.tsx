import "./App.css";
import LanguageContextProvider from "./store/LanguageContext";
import Visualizer from "./components/Visualizer/Visualizer";
import LanguageToggleBtn from "./components/LanguageToggleBtn/LanguageToggleBtn";

function App() {
    return (
        <>
            <LanguageContextProvider>
                <LanguageToggleBtn />
                <Visualizer />
            </LanguageContextProvider>
        </>
    );
}

export default App;
