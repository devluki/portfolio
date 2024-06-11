import { useRef, ReactNode } from "react";
import gsap from "gsap";

import styles from "./Projects.module.scss";

const ProjectCard = (props: { id: string; children: ReactNode }) => {
    const { id, children } = props;
    const itemRef = useRef<HTMLDivElement | null>(null);
    const onMouseMoveHandler = (e: React.MouseEvent) => {
        const itemHeight = itemRef.current!.clientHeight;
        const itemWidth = itemRef.current!.clientWidth;
        const boundingRect = itemRef.current?.getBoundingClientRect();

        const x = (e.clientX - boundingRect!.left) / itemWidth;
        const y = (e.clientY - boundingRect!.top) / itemHeight;

        const rX = -1 * (x - 0.5) * 15; //* 40;
        const rY = (y - 0.5) * 15; //* 40;

        // gsap.to(`#${id}`, {
        //     background: `radial-gradient(farthest-corner circle at ${
        //         100 * x
        //     }% ${100 * y}%, rgba(${25 + 10 * rX},${
        //         230 - 10 * rY
        //     },${255},.15) 10%, transparent 90%)`,
        //     duration: 0.71,
        // });
        gsap.to(`#${id}`, {
            background: `radial-gradient(farthest-corner circle at ${
                100 * x
            }% ${100 * y}%, rgba(${255 + 10 * rX},${
                230 - 5 * rY
            },${255},.15) 10%, transparent 90%)`,
            duration: 0.71,
        });
    };

    const onMouseLeaveHandler = () => {
        gsap.to(`#${id}`, {
            background: `transparent`,
            // background: "rgba(55,55,55,.6)",
            duration: 0.71,
            delay: 0.15,
        });
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.project}
                id={id}
                ref={itemRef}
                onMouseMove={onMouseMoveHandler}
                onMouseLeave={onMouseLeaveHandler}
            >
                {children}
            </div>
        </div>
    );
};

export default ProjectCard;
