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

        const txt = new SplitType(chars, { types: "words,chars" });

        txt.chars?.forEach((txt, i) => {
            gsap.set(txt, {
                color: animationParams.color,
                x: -5 * i,
                opacity: 0,
            });

            if (!animationParams.isScrollTrigger) {
                console.log("SCROLL TRIGGER", animationParams.isScrollTrigger);

                gsap.to(
                    txt,

                    {
                        color: animationParams.color,
                        delay: 0.045 * i,
                        x: i,
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
                        x: i,
                        opacity: 1,
                    },
                );
            }
        });
    }, [props.animationParameters]);

    return <div ref={container}>{props.children}</div>;
};

export default AnimatedTxt;
