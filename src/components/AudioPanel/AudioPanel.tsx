import styles from "./AudioPanel.module.scss";
import Translator from "../Translator/Translator";
// import panelIcons from "../../assets/sprite_audio_panel.svg";
import panelIcons from "../../assets/symbol-defs.svg";

interface AudioPanelProps {
    isLoading: boolean;
    isMusicPlaying: boolean;
    isValid: boolean | undefined;
    title: string;
    uploadHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    musicHandler: () => void;
    stopHandler: () => void;
}

const AudioPanel = (props: AudioPanelProps) => {
    const {
        isLoading,
        musicHandler,
        isMusicPlaying,
        uploadHandler,
        stopHandler,
        isValid,
        title,
    } = props;

    //   SVG icons

    const play = (
        <svg>
            <use xlinkHref={`${panelIcons}#icon-play2`}></use>
        </svg>
    );

    const pause = (
        <svg>
            <use xlinkHref={`${panelIcons}#icon-pause`}></use>
        </svg>
    );
    const stop = (
        <svg>
            <use xlinkHref={`${panelIcons}#icon-stop`}></use>
        </svg>
    );

    const upload = (
        <svg>
            <use xlinkHref={`${panelIcons}#icon-upload3`}></use>
        </svg>
    );
    const info = (
        <svg>
            <use xlinkHref={`${panelIcons}#icon-info`}></use>
        </svg>
    );

    // TODO isLoaded? Add file loaded successful

    const validated =
        typeof isValid === "undefined" ? (
            <p className={styles.info}>
                <Translator translationKey="modal.default-message" />{" "}
            </p>
        ) : (
            <>
                {!isValid && (
                    <p className={`${styles.info} ${styles["info--error"]}`}>
                        <Translator translationKey="modal.error-message" />
                    </p>
                )}

                {isValid && !isLoading && !isMusicPlaying && (
                    <>
                        <p
                            className={`${styles.info} ${styles["info--success"]}`}
                        >
                            <Translator translationKey="modal.success-message" />{" "}
                        </p>
                    </>
                )}
                {isValid && isLoading && (
                    <>
                        <p className={`${styles.info} `}>
                            <Translator translationKey="modal.loading-message" />{" "}
                        </p>
                    </>
                )}
                {isValid && !isLoading && isMusicPlaying && (
                    <>
                        <div className={styles["info-container"]}>
                            <p
                                className={`${styles.info} ${styles["info--slide"]}`}
                            >
                                <span> &#9834;</span>{" "}
                                <span className={styles.slide}>{title}</span>
                                <span> &#9834;</span>{" "}
                                <span className={styles.slide}>{title}</span>
                                <span> &#9834;</span>{" "}
                                <span className={styles.slide}>{title}</span>
                                <span> &#9834;</span>{" "}
                                <span className={styles.slide}>{title}</span>
                            </p>
                            <p
                                className={`${styles.info} ${styles["info--slide"]}`}
                            >
                                {" "}
                                <span> &#9834;</span>{" "}
                                <span className={styles.slide}>{title}</span>
                                <span> &#9834;</span>{" "}
                                <span className={styles.slide}>{title}</span>
                                <span> &#9834;</span>{" "}
                                <span className={styles.slide}>{title}</span>
                                <span> &#9834;</span>{" "}
                                <span className={styles.slide}>{title}</span>
                            </p>
                        </div>
                    </>
                )}
            </>
        );
    return (
        <>
            <div className={styles["audio-panel"]}>
                <div className={styles["audio-panel__txt"]}>
                    <Translator translationKey="modal.custiomize" />
                </div>

                <div className={styles["audio-panel__info"]}>
                    {/* {!isMusicPlaying && validated} */}
                    {validated}
                </div>
                <div className={styles["audio-panel__controls"]}>
                    <button
                        className={styles.panel__btn}
                        disabled={isLoading}
                        onClick={musicHandler}
                    >
                        {!isMusicPlaying ? play : pause}
                    </button>
                    <button
                        className={styles.panel__btn}
                        disabled={!isMusicPlaying}
                        onClick={stopHandler}
                    >
                        {stop}
                    </button>

                    <label
                        htmlFor="fileupload"
                        className={
                            !isLoading
                                ? styles.panel__btn
                                : `${styles.panel__btn} ${
                                      isValid && styles["panel__btn--disabled"]
                                  }`
                        }
                    >
                        <span className={styles["panel__btn-upload"]}>
                            {upload}
                        </span>
                    </label>
                    <input
                        className={styles["controls__btn-upload"]}
                        type="file"
                        id="fileupload"
                        accept="audio/*"
                        onChange={(e) => uploadHandler(e)}
                    />

                    {typeof isValid === "undefined" && (
                        <a
                            className={styles.panel__btn}
                            href="https://pixabay.com/pl/users/diephoanghai-12989642/"
                        >
                            {" "}
                            {info}
                        </a>
                    )}
                    {/* <a
                        className={styles.panel__btn}
                        href="https://pixabay.com/pl/users/diephoanghai-12989642/"
                    >
                        {" "}
                        {info}
                    </a> */}
                </div>
            </div>
        </>
    );
};

export default AudioPanel;
