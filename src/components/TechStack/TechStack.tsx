import styles from "./TechStack.module.scss";
import ServicesCard from "../ServicesCard/ServicesCard";
import Translator from "../Translator/Translator";

import { SERVICES } from "../../utils/consts";

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
            <section style={{ height: "auto" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "space-between",
                        maxWidth: "130rem",
                        margin: "0 auto",
                    }}
                >
                    {SERVICES.map((service, i) => (
                        <ServicesCard key={i} id={`card-${i}`}>
                            <div className={styles.card}>
                                <div className={styles.card__header}>
                                    <svg className={styles.card__svg}>
                                        <use xlinkHref={service.icon}></use>
                                    </svg>
                                    <div>
                                        {service.title.map((row, i) => (
                                            <h3
                                                key={i + row}
                                                className={styles.card__heading}
                                            >
                                                <Translator
                                                    translationKey={row}
                                                />
                                            </h3>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.card__description}>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Nam blanditiis saepe
                                        rerum eveniet sint, vel incidunt sequi
                                        eos, nemo labore, quidem deserunt.
                                        Voluptatum dolorem quibusdam soluta
                                        inventore, vel voluptas similique!
                                    </p>
                                </div>
                            </div>
                        </ServicesCard>
                    ))}
                </div>
            </section>
        </>
    );
};

export default TechStack;
