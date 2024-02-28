import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./Overlay.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Overtlay = () => {
    useEffect(() => {
        gsap.to("#overlay", {
            backdropFilter: "invert(2.5%)",
            duration: 0.5,
            scrollTrigger: {
                trigger: "#projects",
                start: "top 50%",
                toggleActions: "restart none reverse none",
                end: "top 45%",

                markers: true,
            },
        });
    }, []);

    return <div id="overlay" className={styles.overlay}></div>;
};

export default Overtlay;
