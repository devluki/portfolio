import { useContext, FC } from "react";
import { LanguageContext } from "../../store/LanguageContext";
// import styles from "./Translations.module.scss";

const Translator: FC<{ translationKey: string }> = ({ translationKey }) => {
    const langCtx = useContext(LanguageContext);

    const translatedTxt = langCtx?.getTranslatedValue(translationKey);

    return (
        <>
            <span
                // className={styles.txt}
                data-test="translated-txt"
                data-test-key={translationKey}
            >
                {translatedTxt}
            </span>
        </>
    );
};

export default Translator;
