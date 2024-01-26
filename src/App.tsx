import "./App.css";
import LanguageContextProvider from "./store/LanguageContext";
import Visualizer from "./components/particles/Visualizer";
import LanguageToggleBtn from "./components/particles/LanguageToggleBtn/LanguageToggleBtn";

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
