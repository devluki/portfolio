import ProjectCard from "../ProjectCard/ProjectCard";
import { PROJECTS } from "../../utils/consts";

import styles from "./Projects.module.scss";
import icons from "../../assets/sprite.svg";
import BtnTxt from "../BtnTxt/BtnTxt";

const Projects = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card__container}>
                {PROJECTS.map((proj, i) => (
                    <ProjectCard key={i} id={"id-" + i}>
                        <div className={styles.project__data}>
                            <p className={styles["project__data--left"]}>
                                {proj.projectName}
                            </p>
                            <p className={styles["project__data--right"]}>
                                {proj.releaseYear}
                            </p>
                        </div>
                        <div className={styles.project__logo}>
                            <svg className={styles.card__svg}>
                                <use xlinkHref={proj.icon}></use>
                            </svg>
                        </div>
                        <div className={styles.project__description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta quibusdam nemo labore alias ut fuga
                            ipsum praesentium, dolor reprehenderit ullam
                            asperiores incidunt voluptatem fugiat! Commodi
                            reprehenderit corporis aspernatur dolorum in.
                        </div>
                        <div className={styles.project__stack}>
                            {proj.stack.map((stack, i) => (
                                <svg key={i} className={styles.card__svg}>
                                    <use xlinkHref={stack}></use>
                                </svg>
                            ))}
                        </div>

                        <div className={styles.project__links}>
                            <a
                                href={proj.liveLink}
                                className={styles.link__btn}
                            >
                                Life version
                            </a>

                            <a
                                href={proj.githubLink}
                                className={styles.github__btn}
                            >
                                Code{" "}
                                <svg className={styles.card__svg}>
                                    <use
                                        xlinkHref={`${icons}#icon-github`}
                                    ></use>
                                </svg>
                            </a>
                        </div>
                    </ProjectCard>
                ))}
            </div>
            <BtnTxt href={"https://github.com/devluki"}>
                More projects...
            </BtnTxt>
        </div>
    );
};

export default Projects;
