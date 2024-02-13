import { useEffect, useRef, FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const Modal: FC<{
    children: ReactNode;
    isOpen: boolean;
    closeHandler: () => void;
}> = ({ children, isOpen, closeHandler }) => {
    const dialog = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            dialog.current?.showModal();
        } else {
            dialog.current?.close();
        }
    }, [isOpen]);

    // return createPortal(
    //     <dialog ref={dialog} className={styles.modal}>
    //         {isOpen ? children : null}
    //     </dialog>,
    //     document.getElementById("modal") as HTMLDivElement,
    // );
    return createPortal(
        <dialog className={styles.modal} ref={dialog} onClose={closeHandler}>
            <form method="dialog" onSubmit={closeHandler}>
                <button>Close</button>
            </form>

            {isOpen ? children : null}
        </dialog>,
        document.getElementById("modal")!,
    );
};

export default Modal;
