import { useRef } from "react";
import Translator from "../Translator/Translator";

import AnimatedTxt from "../AnimatedTxt/AnimatedTxt";
import gsap from "gsap";

import styles from "./Intro.module.scss";

const Intro = () => {
    const container = useRef<HTMLDivElement | null>(null);

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const onMouseMoveHandler = (e: React.MouseEvent) => {
        gsap.to(container.current!.querySelector(".heading-primary"), {
            x: (centerX - e.clientX + 1) / 100,
            y: (centerY - e.clientY + 1) / 50,
            duration: 1,
        });
    };

    return (
        <div
            ref={container}
            className={styles.container}
            onMouseMove={onMouseMoveHandler}
        >
            <AnimatedTxt
                animationParameters={{
                    color: "white",
                    isScrollTrigger: false,
                }}
            >
                <span className={styles.intro}>
                    <h1 className="heading-primary" id="animatedTxt">
                        <Translator translationKey="intro.intro" />
                        <br />

                        <Translator translationKey="intro.profession" />
                    </h1>
                </span>
            </AnimatedTxt>
            <br />
        </div>
    );
};

export default Intro;
