import { useState } from "react";
import styles from "./AudioPanel.module.scss";
// import Translator from "../Translator/Translator";
import panelIcons from "../../assets/sprite_audio_panel.svg";

interface AudioPanelProps {
    isLoading: boolean;
    isMusicPlaying: boolean;
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
    } = props;
    const [isPanelActive, setIsPanelActive] = useState(false);

    const panelActiveHandler = () => {
        setIsPanelActive((prev) => !prev);
    };

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

    const settings = (
        <svg>
            <use xlinkHref={`${panelIcons}#icon-cog`}></use>
        </svg>
    );

    return (
        <>
            <div className={styles["btn-container"]}></div>

            <div
                onClick={panelActiveHandler}
                className={`${styles.panel} ${
                    isPanelActive ? "" : styles["panel--active"]
                }`}
            >
                <div className={styles.panel__settings}>
                    <button className={styles.panel__btn}>{settings}</button>
                </div>

                <div className={styles.panel__content}>
                    <h1 className={styles["heading-tertiary"]}>
                        Animation settings
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et fugiat, a suscipit officiis velit voluptatem! Ea
                        recusandae quae, repellat hic, doloremque ipsam harum
                        deserunt facilis debitis odit nesciunt ex molestiae?
                    </p>
                    <div className={styles.panel__controls}>
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
                                    : `${styles.panel__btn} ${styles["panel__btn--disabled"]}`
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
                    </div>
                </div>

                {isLoading && <p>Loading...</p>}
            </div>
        </>
    );
};

export default AudioPanel;
