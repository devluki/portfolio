import { useRef } from "react";
import gsap from "gsap";

import styles from "./Projects.module.scss";
import icons from "../../assets/sprite.svg";

const Porjects = (props: { id: string }) => {
    const id = props.id;
    const itemRef = useRef<HTMLDivElement | null>(null);
    const onMouseMoveHandler = (e: React.MouseEvent) => {
        const itemHeight = itemRef.current!.clientHeight;
        const itemWidth = itemRef.current!.clientWidth;
        const boundingRect = itemRef.current?.getBoundingClientRect();

        const x = (e.clientX - boundingRect!.left) / itemWidth;
        const y = (e.clientY - boundingRect!.top) / itemHeight;

        const rX = -1 * (x - 0.5) * 15; //* 40;
        const rY = (y - 0.5) * 15; //* 40;

        gsap.to(`#${id}`, {
            background: `radial-gradient(farthest-corner circle at ${
                100 * x
            }% ${100 * y}%, rgba(${25 + 10 * rX},${
                230 - 10 * rY
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
                <div className={styles.project__data}>
                    <p className={styles["project__data--left"]}>Name</p>
                    <p className={styles["project__data--right"]}>2022</p>
                </div>
                <div className={styles.project__logo}>
                    <svg className={styles.card__svg}>
                        <use xlinkHref={`${icons}#icon-react`}></use>
                    </svg>
                </div>
                <div className={styles.project__description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta quibusdam nemo labore alias ut fuga ipsum
                    praesentium, dolor reprehenderit ullam asperiores incidunt
                    voluptatem fugiat! Commodi reprehenderit corporis aspernatur
                    dolorum in.
                </div>
                <div className={styles.project__stack}>
                    <svg className={styles.card__svg}>
                        <use xlinkHref={`${icons}#icon-react`}></use>
                    </svg>
                    <svg className={styles.card__svg}>
                        <use xlinkHref={`${icons}#icon-node-dot-js`}></use>
                    </svg>
                    <svg className={styles.card__svg}>
                        <use xlinkHref={`${icons}#icon-typescript`}></use>
                    </svg>
                    <svg className={styles.card__svg}>
                        <use xlinkHref={`${icons}#icon-sass`}></use>
                    </svg>
                    <svg className={styles.card__svg}>
                        <use xlinkHref={`${icons}#icon-typescript`}></use>
                    </svg>
                    <svg className={styles.card__svg}>
                        <use xlinkHref={`${icons}#icon-sass`}></use>
                    </svg>
                </div>
                {/* Tags ?? Consider it */}
                <div className={styles.project__links}>
                    {/* Button and github icon */}

                    <a href="" className={styles.link__btn}>
                        Life version
                    </a>

                    <a href="" className={styles.github__btn}>
                        <svg className={styles.card__svg}>
                            <use xlinkHref={`${icons}#icon-github`}></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Porjects;
