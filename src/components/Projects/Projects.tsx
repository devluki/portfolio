import ProjectCard from "../ProjectCard/ProjectCard";
import { PROJECTS } from "../../utils/consts";

import styles from "./Projects.module.scss";
import icons from "../../assets/sprite.svg";
import BtnTxt from "../BtnTxt/BtnTxt";
import Translator from "../Translator/Translator";

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
                            <Translator translationKey={proj.description} />
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
                                <Translator translationKey="projects.buttonGoLive" />
                            </a>

                            <a
                                href={proj.githubLink}
                                className={styles.github__btn}
                            >
                                <Translator translationKey="projects.buttonGoCode" />{" "}
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
                <Translator translationKey="projects.buttonGithub" />
            </BtnTxt>
        </div>
    );
};

export default Projects;
