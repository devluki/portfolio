import { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import icons from "../../assets/symbol-defs.svg";
import styles from "./Navigation.module.scss";
import LanguageToggleBtn from "../LanguageToggleBtn/LanguageToggleBtn";
import Translator from "../Translator/Translator";
import ScrollDownIcon from "../ScrollDownIcon/ScrollDownIcon";

const Navigation = () => {
    const [scroll, setScroll] = useState(false);
    const [showScrollIcon, setShowScrollIcon] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    // Set dynamic CSS styles, navigation sticky and navigation active
    const sticky = scroll ? styles["nav--sticky"] : "";
    const isMobile = window.innerWidth > 600;
    const active =
        !isMobile && !isMenuActive && scroll ? styles["nav--active"] : "";
    const height = window.innerHeight / 3;

    // Change shape of SVG's in logo TODO: Add animation with text between <> tags
    const changeShapeHandler = (e: React.PointerEvent | React.MouseEvent) => {
        const element = e.target as HTMLElement;
        element.setAttribute("rx", "50");
    };
    const reChangeShapeHandler = (e: React.PointerEvent | React.MouseEvent) => {
        const element = e.target as HTMLElement;
        element.setAttribute("rx", "5");
        element.setAttribute("fill", "#f9f9f9");
    };

    const activeMenuHandler = () => {
        setIsMenuActive((prev) => !prev);
    };

    const disableMenuHandler = () => {
        setIsMenuActive(false);
    };

    const scrollToTopHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        animateScroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > height);
            setShowScrollIcon(window.scrollY > 10);
        });
    });
    return (
        <>
            <LanguageToggleBtn />
            <nav className={`${styles.nav} ${sticky} ${active}`}>
                <div className={styles.burger} onClick={activeMenuHandler}>
                    <svg className={styles.burger__btn}>
                        <use
                            xlinkHref={`${icons}#icon-keyboard_arrow_down`}
                        ></use>
                    </svg>
                </div>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <a
                            href="#"
                            className={styles.nav__logo}
                            onClick={scrollToTopHandler}
                        >
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
                        <Link
                            activeClass="active"
                            to="section--services"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className={styles.nav__link}
                            onClick={disableMenuHandler}
                        >
                            <Translator translationKey="navigation.sevices" />
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link
                            activeClass="active"
                            to="section--projects"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className={styles.nav__link}
                            onClick={disableMenuHandler}
                        >
                            <Translator translationKey="navigation.projects" />
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link
                            activeClass="active"
                            to="section--contact"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className={styles.nav__link}
                            onClick={disableMenuHandler}
                        >
                            <Translator translationKey="navigation.contact" />
                        </Link>
                    </li>
                </ul>
            </nav>
            {!showScrollIcon && <ScrollDownIcon />}
        </>
    );
};

export default Navigation;
