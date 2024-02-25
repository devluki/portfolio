import { ReactNode, FC } from "react";

import styles from "./BtnTxt.module.scss";

const BtnTxt: FC<{
    children: ReactNode;

    handler1?: () => void;

    // closeHandler?: () => void;
    isOpen?: boolean;
}> = ({ children, handler1 }) => {
    const handler = () => {
        if (!handler1) return;
        handler1();
    };

    return (
        <>
            <a href="#" className={styles["btn-txt"]} onClick={handler}>
                {children} &rarr;
            </a>
        </>
    );
};

export default BtnTxt;
