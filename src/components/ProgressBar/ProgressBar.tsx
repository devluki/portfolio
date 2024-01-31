import { useState, useEffect } from "react";
import { TIME } from "../../utils/utils";

import styles from "./ProgressBar.module.scss";

const ProgressBar = () => {
    const [remaningTime, setRemaningTime] = useState(TIME);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaningTime((prev) => prev - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <progress className={styles.progress} value={remaningTime} max={TIME} />
    );
};

export default ProgressBar;
