import { useRef, useEffect, ReactNode } from "react";

import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface AnimationParams {
    color?: string;
    // opacity?: number;
    // y?: number;
    // x?: number;
    //
    isScrollTrigger?: boolean;
    triggerId?: string;
    start?: string;
}

interface AnimatedTextProps {
    children: ReactNode;
    animationDuration?: number;
    scrub?: boolean;

    animationParameters?: AnimationParams;
}

const AnimatedTxt = (props: AnimatedTextProps) => {
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const animationParams = { ...props.animationParameters };
        const chars = container.current!.querySelector(
            "#animatedTxt",
        ) as HTMLElement;

        const txt = new SplitType(chars, {
            // types: "words,chars,lines",
            types: "chars,words,lines",
        });

        txt.chars?.forEach((txt, i) => {
            gsap.set(txt, {
                color: "#252526",

                y: -1 * i,

                x: -8 * i,

                opacity: 0,
            });

            if (!animationParams.isScrollTrigger) {
                // console.log("SCROLL TRIGGER", animationParams.isScrollTrigger);

                gsap.to(
                    txt,

                    {
                        color: animationParams.color,

                        delay: 0.045 * i,

                        y: 0,

                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                    },
                );
            } else {
                gsap.to(
                    txt,

                    {
                        color: animationParams.color,
                        scrollTrigger: {
                            trigger: animationParams.triggerId,
                            start: animationParams.start,
                        },
                        delay: 0.045 * i,
                        x: 0,
                        y: 0,
                        opacity: 1,
                    },
                );
            }
        });
    }, [props.animationParameters]);

    return <div ref={container}>{props.children}</div>;
};

export default AnimatedTxt;
