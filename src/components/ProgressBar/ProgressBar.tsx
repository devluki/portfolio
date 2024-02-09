import { useState, useEffect, useRef } from "react";
// import { TIME } from "../../utils/utils";

import styles from "./ProgressBar.module.scss";

const ProgressBar = () => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const reference = useRef<HTMLSpanElement | null>(null);
    const totalHeight = useRef(0);

    useEffect(() => {
        totalHeight.current = 500;
        window.addEventListener("scroll", () => {
            totalHeight.current =
                document.body.scrollHeight - window.innerHeight;
            setCurrentPosition(window.scrollY);
        });
    }, []);

    return (
        <>
            <span className="reference" ref={reference}></span>
            <progress
                className={styles.progress}
                value={currentPosition}
                max={totalHeight.current}
            />
        </>
    );
};

export default ProgressBar;
