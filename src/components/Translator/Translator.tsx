import { useContext, FC } from "react";
import { LanguageContext } from "../../store/LanguageContext";

const Translator: FC<{ translationKey: string }> = ({ translationKey }) => {
    const langCtx = useContext(LanguageContext);
    const translatedTxt = langCtx?.getTranslatedValue(translationKey);

    return (
        <>
            <span data-test="translated-txt" data-test-key={translationKey}>
                {translatedTxt}
            </span>
        </>
    );
};

export default Translator;
