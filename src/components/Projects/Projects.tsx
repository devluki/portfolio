import styles from "./Projects.module.scss";
import icons from "../../assets/sprite.svg";

const Porjects = () => {
    return (
        <div className={styles.container}>
            <div className={styles.project}>
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
                </div>
                {/* Tags ?? Consider it */}
                <div className={styles.project__links}>
                    {/* Button and github icon */}

                    <a href="" className={styles.link__btn}>
                        Life version
                    </a>

                    <span>
                        <a href="">
                            <svg className={styles.card__svg}>
                                <use xlinkHref={`${icons}#icon-github`}></use>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Porjects;
