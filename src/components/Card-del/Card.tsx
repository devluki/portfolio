import styles from "./Card.module.scss";

const Card = () => {
    return (
        <div className={styles.card}>
            <div
                className={`${styles.card__side} ${styles["card__side--front"]}`}
            >
                <div className={styles.card__picture}></div>
                <h4 className={styles.card__heading}></h4>
                <div className={styles.card__details}>
                    <ul>
                        <li>Test obracania</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
            <div
                className={`${styles.card__side} ${styles["card__side--back"]}`}
            ></div>
        </div>
    );
};

export default Card;
