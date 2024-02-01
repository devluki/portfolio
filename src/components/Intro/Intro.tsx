import { useEffect, useRef } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

import styles from "./Intro.module.scss";

import gsap from "gsap";

const Intro = () => {
    const container = useRef<SVGSVGElement>(null);
    const intro = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const svgs = container.current!.querySelectorAll(
            "#svgBox,#svgBox--0,#svgBox--1,#svgBox--2",
        );
        const svg = container.current!.querySelector("#svgBox--2");

        const txts = intro.current!.querySelectorAll(
            "#intro__txt--0,#intro__txt--1,#intro__txt--2",
        );

        console.log(txts);
        // All elements morphing shape
        svgs.forEach((svg, i) => {
            gsap.to(svg, {
                duration: 0.8,
                delay: 1,
                attr: {
                    rx: 2,
                },
            });
            // 4th element should be animated as 3rd in first step
            i === 3 ? (i = 2) : i;
            gsap.to(svg, {
                duration: 0.2,
                delay: 0.6 - i * 0.2,
                y: i * 12,
            });
        });
        // 4th element horizontal animation
        gsap.to(svg, {
            x: 12,
            delay: 0.6,
            duration: 0.2,
        });

        txts.forEach((txt, i) => {
            // if (i < 0) return;
            gsap.to(txt, {
                // duration: 0.5,
                duration: 1,
                delay: i,
                opacity: 1,
                scale: 1.05,
                color: "#f9f9f9",
            });
            gsap.to(txt, {
                duration: 0.5,
                delay: 1.15 + i,
                opacity: 0,
                scale: 0,
            });

            gsap.to(intro.current, {
                // y: -1 * window.innerHeight,

                opacity: 0,
                duration: 1,
                delay: 3.5,
            });
        });
    }, []);

    return (
        <>
            <div className={styles.intro} ref={intro}>
                <div className={styles.intro__logo}>
                    <svg id="svg" viewBox="0 0 100 100" ref={container}>
                        <rect
                            className={styles.svgBox}
                            id="svgBox"
                            fill="#f9f9f9"
                            x="37"
                            y="35"
                            width="7"
                            height="7"
                            rx="50"
                        />
                        <rect
                            className={styles.svgBox}
                            id="svgBox--0"
                            fill="#f9f9f9"
                            x="37"
                            y="35"
                            width="7"
                            height="7"
                            rx="50"
                        />
                        <rect
                            className={styles.svgBox}
                            id="svgBox--1"
                            fill="#f9f9f9"
                            x="37"
                            y="35"
                            width="7"
                            height="7"
                            rx="50"
                        />
                        <rect
                            className={styles.svgBox}
                            id="svgBox--2"
                            fill="#f9f9f9"
                            x="37"
                            y="35"
                            width="7"
                            height="7"
                            rx="50"
                        />
                    </svg>

                    <h4 id="intro__txt--0" className={styles.intro__txt}>
                        <span className={styles.brackets}>{"<span>"}</span>
                        {"<Development/>"}
                        <span className={styles.brackets}>{"</span>"}</span>
                    </h4>

                    <h4 id="intro__txt--1" className={styles.intro__txt}>
                        <span className={styles.brackets}>{"<span>"}</span>
                        {"<Freelancing/>"}
                        <span className={styles.brackets}>{"/></span>"}</span>
                    </h4>
                    <h4 id="intro__txt--2" className={styles.intro__txt}>
                        <span className={styles.brackets}>{"<span>"}</span>
                        {"<Passion/>"}
                        <span className={styles.brackets}>{"</span>"}</span>
                    </h4>
                </div>
                <span className={styles.brackets}>{"<progress>"}</span>
                <ProgressBar />
                <span
                    className={`${styles.brackets} ${styles["brackets--closing"]}`}
                >
                    {"</progress>"}
                </span>
            </div>
        </>
    );
};

export default Intro;
