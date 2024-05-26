import { useEffect, useRef } from "react";

import styles from "./Intro.module.scss";

import gsap from "gsap";

const DELAY = 0.7;

const Intro = () => {
    const container = useRef<SVGSVGElement>(null);
    const intro = useRef<HTMLDivElement>(null);

    const onClickHandler = () => {
        const svgs = container.current!.querySelectorAll(
            "#svgBox--0,#svgBox--1,#svgBox--2,#svgBox--3",
        );

        svgs.forEach((svg, i) => {
            svg.setAttribute("rx", "50");
            if (i == 2) {
                svg.setAttribute("y", `${i * -35}`);
                svg.setAttribute("x", `${7}`);
            } else if (i === 3) {
                svg.setAttribute("y", `${2 * -35}`);
            } else {
                svg.setAttribute("y", `${i * -35}`);
            }
        });
    };

    useEffect(() => {
        const svgs = container.current!.querySelectorAll(
            "#svgBox--0,#svgBox--1,#svgBox--2,#svgBox--3",
        );
        const svg = container.current!.querySelector("#svgBox--2");

        // All elements morphing shape
        svgs.forEach((svg, i) => {
            gsap.to(svg, {
                duration: 0.8,
                delay: DELAY + 1,
                attr: {
                    rx: 2,
                },
            });
            // 4th element should be animated as 3rd in first step
            i === 3 ? (i = 2) : i;
            gsap.to(svg, {
                // duration: 0.2,
                duration: 0.3,
                delay: DELAY + 0.6 - i * 0.2,
                y: i * 35,
            });
        });
        // 4th element horizontal animation
        gsap.to(svg, {
            x: 30,
            // delay: 0.6,
            delay: DELAY + 0.8,
            duration: 0.2,
        });
    }, []);

    return (
        <>
            <button onClick={onClickHandler}> Animate</button>
            <div className={styles.intro} ref={intro}>
                <div className={styles.intro__logo}>
                    <svg
                        id="svg"
                        viewBox="0 0 100 100"
                        ref={container}
                        className={styles.svg}
                    >
                        <rect
                            id="svgBox--0"
                            // fill="#f9f9f9"
                            fill="red"
                            rx="50"
                            x="37"
                            y="0"
                        />
                        <rect
                            id="svgBox--1"
                            // fill="#f9f9f9"
                            fill="green"
                            rx="50"
                            x="37"
                            y="0"
                        />
                        <rect
                            id="svgBox--2"
                            // fill="#f9f9f9"
                            fill="yellow"
                            rx="50"
                            x="37"
                            y="0"
                        />
                        <rect
                            id="svgBox--3"
                            fill="#f9f9f9"
                            rx="50"
                            x="37"
                            y="0"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Intro;
