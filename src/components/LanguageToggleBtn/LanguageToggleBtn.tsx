import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";

import styles from "./LanguageToggleBtn.module.scss";

const LanguageToggleBtn = () => {
    const langCtx = useContext(LanguageContext);
    const lang = langCtx?.currentLanguage;

    const langToggleHandler = () => {
        langCtx?.toggleLanguage();
    };

    return (
        <button className={styles.btn} onClick={langToggleHandler}>
            <span className={lang === "en" ? styles.active : ""}>EN</span>
            <span> | </span>
            <span className={lang === "pl" ? styles.active : ""}>PL</span>
        </button>
    );
};

export default LanguageToggleBtn;
