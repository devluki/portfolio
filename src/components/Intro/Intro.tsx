import { useRef, useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import Translator from "../Translator/Translator";

import AnimatedTxt from "../AnimatedTxt/AnimatedTxt";

import styles from "./Intro.module.scss";

const Intro = () => {
    const container = useRef<HTMLDivElement | null>(null);
    // const mousePosRef = useRef({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const langCtx = useContext(LanguageContext);

    //Reset position to rerender component when language change
    useEffect(() => {
        setPosition({ x: 0, y: 0 });
    }, [langCtx]);

    const onMouseMoveHandler = (e: React.MouseEvent) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        setPosition({
            x: (centerX - e.clientX + 1) / 120,
            y: (centerY - e.clientY + 1) / 120,
        });
    };

    return (
        <div
            ref={container}
            className={styles.container}
            onMouseMove={onMouseMoveHandler}
        >
            <AnimatedTxt
                animationDuration={2}
                animationParameters={{ color: "white" }}
            >
                <h1
                    className="heading-primary"
                    id="animatedTxt"
                    style={{
                        transform: `translate(${position.x}px,${position.y}px)`,
                    }}
                >
                    <Translator translationKey="intro.intro" />
                    <br />

                    <Translator translationKey="intro.profession" />
                </h1>
            </AnimatedTxt>
            <br />
        </div>
    );
};

export default Intro;
