import { useRef, useEffect, ReactNode } from "react";

import gsap from "gsap";
import SplitType from "split-type";

interface AnimationParams {
    color?: string;
    opacity?: number;

    y?: number;
    x?: number;
}

interface AnimatedTextProps {
    children: ReactNode;
    animationDuration: number;
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
            gsap.fromTo(
                txt,
                {
                    color: animationParams.color,
                    x: -5 * i,
                    opacity: 0,
                },
                { ...animationParams, delay: 0.07 * i, x: i, opacity: 1 },
            );
        });
    }, []);

    return <div ref={container}>{props.children}</div>;
};

export default AnimatedTxt;
