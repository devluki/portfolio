import { ReactNode, FC } from "react";

import styles from "./BtnTxt.module.scss";

const BtnTxt: FC<{
    children: ReactNode;
    handler1?: () => void;
    isOpen?: boolean;
    isDisabled?: boolean;
    href?: string;
}> = ({ children, handler1, isDisabled, href }) => {
    const handler = (e: React.MouseEvent) => {
        if (!href) {
            e.preventDefault();
        }

        if (!handler1) return;
        handler1();
    };

    return (
        <>
            <a
                href={href ? href : "#"}
                className={`${
                    !isDisabled
                        ? styles["btn-txt"]
                        : `${styles["btn-txt"]} ${styles["btn-txt--disabled"]}`
                }`}
                onClick={handler}
            >
                {children} &rarr;
            </a>
        </>
    );
};

export default BtnTxt;
