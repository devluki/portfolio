import { useContext } from "react";
import { LanguageContext } from "../../../store/LanguageContext";

const LanguageToggleBtn = () => {
    const langCtx = useContext(LanguageContext);
    const lang = langCtx?.currentLanguage;

    const langToggleHandler = () => {
        langCtx?.toggleLanguage();
    };

    return <button onClick={langToggleHandler}>{lang}</button>;
};

export default LanguageToggleBtn;
