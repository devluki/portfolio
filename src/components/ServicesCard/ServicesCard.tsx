import { useRef, ReactNode, FC } from "react";
import gsap from "gsap";
import styles from "./ServicesCard.module.scss";

const ServicesCard: FC<{
    children: ReactNode;
    id: string;
}> = ({ children, id }) => {
    const itemRef = useRef<HTMLDivElement | null>(null);

    const onMouseMoveHandler = (e: React.MouseEvent) => {
        const itemHeight = itemRef.current!.clientHeight;
        const itemWidth = itemRef.current!.clientWidth;
        const boundingRect = itemRef.current?.getBoundingClientRect();

        const x = (e.clientX - boundingRect!.left) / itemWidth;
        const y = (e.clientY - boundingRect!.top) / itemHeight;

        const rX = -1 * (x - 0.5) * 20;
        const rY = (y - 0.5) * 20;
        // console.log(x, rX, y, rY);
        // console.log(rX, rY);
        // vec4(.1, min(uDeepPurple, .9),  1., min(uOpacity, 1.))
        gsap.to(`#${id}`, {
            transform: `rotateX(${rY}deg) rotateY(${rX}deg)`,

            background: `radial-gradient(farthest-corner circle at ${
                100 * x
            }% ${100 * y}%, rgba(${25 + 10 * rX},${
                230 - 10 * rY
            },${255},.4) 10%, transparent 90%)`,
            duration: 1,
        });
    };

    const onMouseLeaveHandler = () => {
        gsap.to(`#${id}`, {
            transform: `rotateX(${0}deg) rotateY(${0}deg)`,
            // background: `transparent`,
            background: "rgba(55,55,55,.6)",
            duration: 1,
            delay: 0.3,
        });
    };

    return (
        <>
            <div
                id={id}
                ref={itemRef}
                onMouseMove={onMouseMoveHandler}
                onMouseLeave={onMouseLeaveHandler}
                className={styles.card}
            >
                {children}
            </div>
        </>
    );
};

export default ServicesCard;