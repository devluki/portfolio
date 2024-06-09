import styles from "./Footer.module.scss";
import icons from "../../assets/sprite.svg";

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div>
                <div className={styles.footer__icon}>
                    <a href="https://github.com/devluki/portfolio">
                        <svg className={styles.footer__svg}>
                            <use xlinkHref={`${icons}#icon-github`}></use>
                        </svg>
                    </a>
                </div>
                <p className={styles.reserved}>
                    &reg; 2024. All rigts reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
