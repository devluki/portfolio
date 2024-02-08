import { useContext } from "react";
import { LanguageContext } from "../../store/LanguageContext";

import styles from "./LanguageToggleBtn.module.scss";
import { Language } from "../../store/translations";

const LanguageToggleBtn = () => {
    const langCtx = useContext(LanguageContext);
    const lang = langCtx?.currentLanguage;

    const langToggleHandler = (lang: Language) => {
        langCtx?.toggleLanguage(lang);
    };

    return (
        <>
            {/* <p className={styles.test}>Test napisu</p> */}
            <div className={styles.toggle__btn}>
                <button
                    className={styles.btn}
                    onClick={() => langToggleHandler("en")}
                >
                    <span className={lang === "en" ? styles.active : ""}>
                        EN
                    </span>
                </button>{" "}
                <span> | </span>
                <button
                    className={styles.btn}
                    onClick={() => langToggleHandler("pl")}
                >
                    <span className={lang === "pl" ? styles.active : ""}>
                        PL
                    </span>
                </button>
            </div>
        </>
    );
};

export default LanguageToggleBtn;
