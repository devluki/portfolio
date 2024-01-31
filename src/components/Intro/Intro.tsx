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
                    //fill: "#f9f9f9",
                    rx: 4,
                },
            });
            // 4th element should be animated as 3rd in first step
            i === 3 ? (i = 2) : i;
            gsap.to(svg, {
                duration: 0.2,
                delay: 0.6 - i * 0.2,
                y: i * 13,
            });
        });
        // 4th element horizontal animation
        gsap.to(svg, { x: 13, delay: 0.6, duration: 0.2 });

        txts.forEach((txt, i) => {
            // if (i < 0) return;
            gsap.to(txt, {
                // duration: 0.5,
                duration: 1,
                delay: i,
                opacity: 1,
                scale: 1,
                color: "#f9f9f9",
            });
            gsap.to(txt, {
                duration: 0.5,
                delay: 1.1 + i,
                opacity: 0,
                scale: 0,

                //x: 10 * i,
            });

            gsap.to(intro.current, {
                y: -window.innerHeight,
                //scale: 3,
                opacity: 0,
                duration: 1,
                delay: 3,
            });
        });
    }, []);

    return (
        <>
            <div className={styles.intro} ref={intro}>
                <div className={styles.intro__logo}>
                    <svg id="svg" viewBox="0 0 100 100" ref={container}>
                        {/* Test */}
                        <defs>
                            <filter
                                id="red-glow"
                                filterUnits="userSpaceOnUse"
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                {/* <!-- blur the text at different levels--> */}
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="1"
                                    result="blur5"
                                />
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="2"
                                    result="blur10"
                                />
                                {/* <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="20"
                                    result="blur20"
                                /> */}
                                {/* <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="30"
                                    result="blur30"
                                />
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="50"
                                    result="blur50"
                                /> */}
                                {/* <!-- merge all the blurs except for the first one --> */}
                                <feMerge result="blur-merged">
                                    <feMergeNode in="blur10" />
                                    {/* <feMergeNode in="blur20" /> */}
                                    {/* <feMergeNode in="blur30" /> */}
                                    {/* <feMergeNode in="blur50" /> */}
                                </feMerge>
                                {/* <!-- recolour the merged blurs red--> */}
                                <feColorMatrix
                                    result="red-blur"
                                    in="blur-merged"
                                    type="matrix"
                                    values="0.55 0 0 0 0
                             0 0.85 0 0 0
                             0 0 1 0 0
                             0 0 0 1 0"
                                    //         values="0 0 0 0 0
                                    //  0 0.06 0 0 0
                                    //  0.1 0.01 0.1 0 0
                                    //  0 0 0 1 0"
                                />
                                <feMerge>
                                    <feMergeNode in="red-blur" />
                                    <feMergeNode in="blur5" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {/* Test */}
                        <rect
                            className={styles.svgBox}
                            id="svgBox"
                            // fill="#252526"
                            fill="#f9f9f9"
                            x="42"
                            y="35"
                            width="10"
                            height="10"
                            // width="30" // base version
                            // height="30"
                            rx="50"
                        />
                        <rect
                            className={styles.svgBox}
                            id="svgBox--0"
                            // fill="#252526"
                            fill="#f9f9f9"
                            x="42"
                            y="35"
                            width="10"
                            height="10"
                            rx="50"
                        />
                        <rect
                            className={styles.svgBox}
                            id="svgBox--1"
                            // fill="#252526"
                            fill="#f9f9f9"
                            x="42"
                            y="35"
                            width="10"
                            height="10"
                            rx="50"
                        />
                        <rect
                            className={styles.svgBox}
                            id="svgBox--2"
                            // fill="#252526"
                            fill="#f9f9f9"
                            x="42"
                            y="35"
                            width="10"
                            height="10"
                            rx="50"
                        />
                    </svg>
                    <h4 id="intro__txt--0" className={styles.intro__txt}>
                        Development
                    </h4>
                    <h4 id="intro__txt--1" className={styles.intro__txt}>
                        Freelancing
                    </h4>
                    <h4 id="intro__txt--2" className={styles.intro__txt}>
                        Passion
                    </h4>
                </div>
                <ProgressBar />
                {/* <progress value={remaningTime} max={TIME} /> */}
            </div>
        </>
    );
};

export default Intro;
