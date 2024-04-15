import { useEffect, useState } from "react";

import styles from "./Navigation.module.scss";
import LanguageToggleBtn from "../LanguageToggleBtn/LanguageToggleBtn";
import Translator from "../Translator/Translator";

const Navigation = () => {
    const [scroll, setScroll] = useState(false);
    const sticky = scroll ? styles["nav--sticky"] : "";
    const height = window.innerHeight / 3;

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > height);
        });
    });
    return (
        <nav className={`${styles.nav} ${sticky}`}>
            <LanguageToggleBtn />
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <a href="#" className={styles.nav__logo}>
                        <svg
                            id="svg"
                            className={styles.svg}
                            viewBox="0 0 100 100"
                        >
                            <rect
                                id="svgBox"
                                fill="#f9f9f9"
                                x="37"
                                y="0"
                                rx="5"
                            />
                            <rect
                                id="svgBox--0"
                                fill="#f9f9f9"
                                x="37"
                                y="25"
                                rx="5"
                            />
                            <rect
                                id="svgBox--1"
                                fill="#f9f9f9"
                                x="37"
                                y="50"
                                rx="5"
                            />
                            <rect
                                id="svgBox--2"
                                fill="#f9f9f9"
                                x="63"
                                y="50"
                                rx="5"
                            />
                        </svg>
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a href="#" className={styles.nav__link}>
                        <Translator translationKey="navigation.home" />
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a href="#" className={styles.nav__link}>
                        <Translator translationKey="navigation.projects" />
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a href="#" className={styles.nav__link}>
                        <Translator translationKey="navigation.contact" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
