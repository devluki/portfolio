import { ReactNode, FC } from "react";

import styles from "./BtnTxt.module.scss";

const BtnTxt: FC<{
    children: ReactNode;
    openHandler: () => void;
    closeHandler?: () => void;
    isOpen?: boolean;
}> = ({ children, openHandler }) => {
    const opener = () => {
        openHandler();
    };

    return (
        <>
            <a href="#" className={styles["btn-text"]} onClick={opener}>
                {children} &rarr;
            </a>
        </>
    );
};

export default BtnTxt;
