import { useRef, useEffect } from "react";
import gsap from "gsap";

import styles from "./TechStack.module.scss";

const TechStack = () => {
    const mouseRef = useRef({ x: 0, y: 0 });
    const itemRef = useRef<HTMLElement | null>(null);

    const onMouseMoveHandler = (e: React.MouseEvent) => {
        const itemHeight = itemRef.current!.clientHeight;
        const itemWidth = itemRef.current!.clientWidth;
        const boundingRect = itemRef.current?.getBoundingClientRect();
        // mouseRef.current = {
        //     x: (e.clientX - boundingRect!.left) / itemWidth,
        //     y: (e.clientY - boundingRect!.top) / itemHeight,
        // };
        gsap.to("#fig", {
            rotationX: 30 * ((e.clientX - boundingRect!.left) / itemWidth),
            rotationY: 30 * ((e.clientY - boundingRect!.top) / itemHeight),
            duration: 1,
            // backgroundColor: "red",
            // stagger: 0.1,
        });

        console.log(mouseRef.current);
    };

    useEffect(() => {
        console.log("EFFECT");
        gsap.to("#fig", {
            rotationX: mouseRef.current.x * 100,
            rotationY: mouseRef.current.y,
            duration: 1,
            // backgroundColor: "red",
            // stagger: 0.1,
        });
    }, [mouseRef.current.x]);

    return (
        <section className={styles.gallery}>
            <figure
                id="fig"
                ref={itemRef}
                onMouseMove={onMouseMoveHandler}
                className={`${styles.gallery__item} ${styles["gallery__item--1"]}`}
            >
                HTML 1
            </figure>
            <figure
                className={`${styles.gallery__item} ${styles["gallery__item--2"]}`}
            >
                CSS 2
            </figure>
            <figure
                className={`${styles.gallery__item} ${styles["gallery__item--3"]}`}
            >
                SASS 3
            </figure>
            <figure
                className={`${styles.gallery__item} ${styles["gallery__item--4"]}`}
            >
                JavaScript 4
            </figure>
            <figure
                className={`${styles.gallery__item} ${styles["gallery__item--5"]}`}
            >
                React 5
            </figure>
            <figure
                className={`${styles.gallery__item} ${styles["gallery__item--6"]}`}
            >
                Redux 6
            </figure>
            <figure
                className={`${styles.gallery__item} ${styles["gallery__item--7"]}`}
            >
                TypeScript 7
            </figure>
            <figure
                className={`${styles.gallery__item} ${styles["gallery__item--8"]}`}
            >
                Node 8
            </figure>
            <figure
                className={`${styles.gallery__item} ${styles["gallery__item--9"]}`}
            >
                Express 9
            </figure>
            <figure
                className={`${styles.gallery__item} ${styles["gallery__item--10"]}`}
            >
                MongoDb 10
            </figure>
        </section>
    );
};

export default TechStack;
