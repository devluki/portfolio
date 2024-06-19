import { useEffect, useRef, FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import panelIcons from "../../assets/symbol-defs.svg";
import styles from "./Modal.module.scss";

const Modal: FC<{
    children: ReactNode;
    isOpen: boolean;
    closeHandler: () => void;
}> = ({ children, isOpen, closeHandler }) => {
    const dialog = useRef<HTMLDialogElement | null>(null);

    const cross = (
        <svg>
            <use xlinkHref={`${panelIcons}#icon-cross`}></use>
        </svg>
    );

    useEffect(() => {
        if (isOpen) {
            dialog.current?.showModal();
        } else {
            dialog.current?.close();
        }
    }, [isOpen]);

    const handleBackDropClick = (e: React.MouseEvent) => {
        if (
            e.target instanceof HTMLElement &&
            e.target.getAttribute("id") === "dialog"
        ) {
            closeHandler();
        }
    };

    const handleEscKey = (e: React.KeyboardEvent) => {
        if (e.keyCode !== 27) return;
        closeHandler();
    };

    return createPortal(
        <dialog
            id="dialog"
            className={styles.modal}
            ref={dialog}
            onClose={closeHandler}
            onClick={handleBackDropClick}
            onKeyDown={handleEscKey}
        >
            <form
                method="dialog"
                onSubmit={closeHandler}
                className={styles.modal__form}
            >
                <button className={styles.panel__btn}>{cross}</button>
            </form>

            {isOpen ? children : null}
        </dialog>,
        document.getElementById("modal")!,
    );
};

export default Modal;
