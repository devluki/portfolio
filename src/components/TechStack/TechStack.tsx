import { useRef, useEffect } from "react";
import gsap from "gsap";
import panelIcons from "../../assets/sprite_audio_panel.svg";

import styles from "./TechStack.module.scss";

const TechStack = () => {
    const mouseRef = useRef({ x: 0, y: 0 });
    const itemRef = useRef<HTMLElement | null>(null);

    const onMouseMoveHandler = (e: React.MouseEvent) => {
        const itemHeight = itemRef.current!.clientHeight;
        const itemWidth = itemRef.current!.clientWidth;
        const boundingRect = itemRef.current?.getBoundingClientRect();
        let quadrantCoefficientX = 1;
        let quadrantCoefficientY = 1;
        let boudingQuoterX = 1;
        let boudingQuoterY = 1;
        // Which quadrant is the cursor in?
        //  1 left/top | right/top 2
        //  4 left/bot | right/bot 3
        const x = (e.clientX - boundingRect!.left) / itemWidth;
        const y = (e.clientY - boundingRect!.top) / itemHeight;
        const rX = (x - 0.5) * 60;
        const rY = (y - 0.5) * 60;
        console.log(x, y);

        // if (x < itemWidth / 2 && y < itemHeight / 2) {
        //     // quadrantCoefficientX = 1;
        //     // quadrantCoefficientY = 1;
        //     // boudingQuoterX = boundingRect!.left;
        //     // boudingQuoterY = boundingRect!.top;
        //     console.log("1");
        // }
        // if (x > itemWidth / 2 && y < itemHeight / 2) {
        //     console.log("2");
        //     // quadrantCoefficientX = -1;
        //     // quadrantCoefficientY = 1;
        //     // boudingQuoterX = boundingRect!.right;
        //     // boudingQuoterY = boundingRect!.top;
        // }
        // if (x > itemWidth / 2 && y > itemHeight / 2) {
        //     console.log("3");
        //     // quadrantCoefficientX = -1;
        //     // quadrantCoefficientY = -1;
        //     // boudingQuoterX = boundingRect!.right;
        //     // boudingQuoterY = boundingRect!.bottom;
        // }
        // if (x < itemWidth / 2 && y > itemHeight / 2) {
        //     // quadrantCoefficientX = 1;
        //     // quadrantCoefficientY = -1;
        //     // boudingQuoterX = boundingRect!.left;
        //     // boudingQuoterY = boundingRect!.bottom;
        //     console.log("4");
        // }

        gsap.to("#fig", {
            rotationX: rX + "deg",
            rotationY: rY + "deg",
            background: `radial-gradient(farthest-corner circle at ${
                100 * x
            }% ${100 * y}%, rgba(255,255,255,.8) 10%, transparent 90%)`,
            duration: 1,
            // backgroundColor: "red",
            // stagger: 0.1,
        });
        // gsap.to("#fig", {
        //     rotationX:
        //         quadrantCoefficientX *
        //             30 *
        //             ((e.clientX - boundingRect!.left) / itemWidth) +
        //         "%",
        //     rotationY:
        //         quadrantCoefficientY *
        //             40 *
        //             ((e.clientY - boundingRect!.top) / itemHeight) +
        //         "%",
        //     duration: 1,
        //     // backgroundColor: "red",
        //     // stagger: 0.1,
        // });

        // console.log(mouseRef.current);
    };

    const onMouseLeaveHandler = () => {
        // const itemHeight = itemRef.current!.clientHeight;
        // const itemWidth = itemRef.current!.clientWidth;
        // const boundingRect = itemRef.current?.getBoundingClientRect();
        gsap.to("#fig", {
            rotationX: 0 + "deg",
            rotationY: 0 + "deg",
            duration: 2,
            // backgroundColor: "red",
            // stagger: 0.1,
        });
    };

    // useEffect(() => {
    //     console.log("EFFECT");
    //     gsap.to("#fig", {
    //         rotationX: mouseRef.current.x * 100,
    //         rotationY: mouseRef.current.y,
    //         duration: 1,
    //         // backgroundColor: "red",
    //         // stagger: 0.1,
    //     });
    // }, [mouseRef.current.x]);

    return (
        <>
            <section className={styles.gallery}>
                <figure
                    // id="fig"
                    // ref={itemRef}
                    // onMouseMove={onMouseMoveHandler}
                    // onMouseLeave={onMouseLeaveHandler}
                    className={`${styles.gallery__item} ${styles["gallery__item--1"]}`}
                >
                    HTML 1 <br />
                    fdadfsa <br />
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
            <div
                id="fig"
                ref={itemRef}
                onMouseMove={onMouseMoveHandler}
                onMouseLeave={onMouseLeaveHandler}
                style={{
                    height: "400px",
                    width: "400px",
                    backgroundColor: "pink",
                    margin: "auto",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: `-webkit-box-shadow: 8px 8px 24px 0px rgba(255, 68, 90, 1);
                    -moz-box-shadow: 8px 8px 24px 0px rgba(255, 68, 90, 1);
                    box-shadow: 8px 8px 24px 0px rgba(255, 68, 90, 1);`,
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "2px solid red",
                    }}
                >
                    <svg>
                        <use xlinkHref={`${panelIcons}#icon-upload3`}></use>
                    </svg>
                    <svg style={{ transform: "rotateX(180deg)" }}>
                        <use xlinkHref={`${panelIcons}#icon-upload3`}></use>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default TechStack;
