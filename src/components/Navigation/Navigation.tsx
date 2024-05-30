import { useEffect, useState } from "react";

import styles from "./Navigation.module.scss";
import LanguageToggleBtn from "../LanguageToggleBtn/LanguageToggleBtn";
import Translator from "../Translator/Translator";

const Navigation = () => {
    const [scroll, setScroll] = useState(false);
    const sticky = scroll ? styles["nav--sticky"] : "";
    const height = window.innerHeight / 3;

    const changeShapeHandler = (e: React.PointerEvent | React.MouseEvent) => {
        const element = e.target as HTMLElement;
        element.setAttribute("rx", "50");
        element.setAttribute("fill", "#252526");
    };
    const reChangeShapeHandler = (e: React.PointerEvent | React.MouseEvent) => {
        const element = e.target as HTMLElement;
        element.setAttribute("rx", "5");
        element.setAttribute("fill", "#f9f9f9");
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > height);
        });
    });
    return (
        <>
            <LanguageToggleBtn />
            <nav className={`${styles.nav} ${sticky}`}>
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
                                    onMouseOver={changeShapeHandler}
                                    onMouseLeave={reChangeShapeHandler}
                                />

                                <rect
                                    id="svgBox--0"
                                    fill="#f9f9f9"
                                    x="37"
                                    y="25"
                                    rx="5"
                                    onMouseOver={changeShapeHandler}
                                    onMouseLeave={reChangeShapeHandler}
                                />
                                <rect
                                    id="svgBox--1"
                                    fill="#f9f9f9"
                                    x="37"
                                    y="50"
                                    rx="5"
                                    onMouseOver={changeShapeHandler}
                                    onMouseLeave={reChangeShapeHandler}
                                />
                                <rect
                                    id="svgBox--2"
                                    fill="#f9f9f9"
                                    x="63"
                                    y="50"
                                    rx="5"
                                    onMouseOver={changeShapeHandler}
                                    onMouseLeave={reChangeShapeHandler}
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
        </>
    );
};

export default Navigation;
