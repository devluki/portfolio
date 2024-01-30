import { useEffect, useRef } from "react";

import styles from "./Intro.module.scss";

import gsap from "gsap";

const Intro = () => {
    const container = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svgs = container.current!.querySelectorAll(
            "#svgBox,#svgBox--0,#svgBox--1,#svgBox--2",
        );
        const svg = container.current!.querySelector("#svgBox--2");

        svgs.forEach((svg, i) => {
            gsap.to(svg, {
                duration: 0.3,
                delay: 1,
                attr: {
                    fill: "#f9f9f9",
                    rx: 8,
                },
            });
            i === 3 ? (i = 2) : i;
            gsap.to(svg, {
                duration: 0.2,
                delay: 0.6 - i * 0.2,
                y: i * 40,
            });
        });
        gsap.to(svg, { x: 40, delay: 0.6, duration: 0.2 });
    }, []);

    return (
        <>
            <div className={styles.intro}>
                <div className={styles.intro__logo}>
                    <svg id="svg" viewBox="0 0 100 100" ref={container}>
                        <rect
                            className={styles.svgBox}
                            id="svgBox"
                            fill="#252526"
                            x="35"
                            y="35"
                            width="30"
                            height="30"
                            rx="50"
                        />
                        <rect
                            className={styles.svgBox}
                            id="svgBox--0"
                            fill="#252526"
                            x="35"
                            y="35"
                            width="30"
                            height="30"
                            rx="50"
                        />
                        <rect
                            className={styles.svgBox}
                            id="svgBox--1"
                            fill="#252526"
                            x="35"
                            y="35"
                            width="30"
                            height="30"
                            rx="50"
                        />
                        <rect
                            className={styles.svgBox}
                            id="svgBox--2"
                            fill="#252526"
                            x="35"
                            y="35"
                            width="30"
                            height="30"
                            rx="50"
                        />
                    </svg>
                </div>
                <h4 className={styles.intro__txt}>Test</h4>
            </div>
        </>
    );
};

export default Intro;
