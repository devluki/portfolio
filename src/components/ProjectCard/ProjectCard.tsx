import styles from "./ProjectCard.module.scss";

const ProjectCard = () => {
    return (
        <div className={styles.card}>
            <p className={styles.card__data}>2000</p>
            <h3 className={styles.card__heading}>Project</h3>
            <div className={styles["card__img-box"]}>
                <div className={styles.card__img}></div>
            </div>
            <p className={styles.card__desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam nemo cum dolor voluptas excepturi? Commodi, ipsum
                alias fugit sequi numquam quas magnam ratione animi? Porro qui
                est amet voluptas quidem?
            </p>
            <a href="#" className={styles.BtnTxt}>
                View details
            </a>
        </div>
    );
};

export default ProjectCard;
