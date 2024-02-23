import styles from "./TechStack.module.scss";
import StackCard from "../StackCard/StackCard";
import { TECH_STACK } from "../../utils/utils";

const TechStack = () => {
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
                {TECH_STACK.map((el, i) => (
                    <div className={styles[`gallery__item--${i}`]}>
                        <StackCard id={`fig-${i}`}>
                            <p>{el.name}</p>
                            <svg style={{ width: "100%", height: "100%" }}>
                                <use xlinkHref={`${el.path}`}></use>
                            </svg>
                        </StackCard>
                    </div>
                ))}

                {/* <svg class="feature__icon">
                    <use xlink:href="img/sprite.svg#icon-global"></use>
                </svg> */}

                {/* <figure
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
                </figure> */}
            </section>
        </>
    );
};

export default TechStack;
