import { useState } from "react";
import styles from "./AudioPanel.module.scss";
import Translator from "../Translator/Translator";
import panelIcons from "../../assets/sprite_audio_panel.svg";

interface AudioPanelProps {
    isLoading: boolean;
    isMusicPlaying: boolean;
    uploadHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    musicHandler: () => void;
}

const AudioPanel = (props: AudioPanelProps) => {
    const { isLoading, musicHandler, isMusicPlaying, uploadHandler } = props;
    const [isPanelActive, setIsPanelActive] = useState(false);

    const panelActiveHandler = () => {
        setIsPanelActive((prev) => !prev);
    };

    //     <svg>
    //     <use xlinkHref={el.icon}></use>
    // </svg>

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

    return (
        <>
            <div
                onClick={panelActiveHandler}
                className={`${styles.panel} ${
                    isPanelActive ? "" : styles["panel--active"]
                }`}
            >
                <h1 className={styles.h1}>AudioPanel</h1>
                <h1 className={styles.h1}>
                    {" "}
                    <Translator translationKey="audiopanel.heading" />
                </h1>
                <div className={styles.panel__controls}>
                    <button
                        className={styles.controls__btn}
                        disabled={isLoading}
                        onClick={musicHandler}
                    >
                        {!isMusicPlaying ? play : pause}
                    </button>
                    <button
                        className={styles.controls__btn}
                        disabled={!isMusicPlaying}
                    >
                        {stop}
                    </button>

                    <label
                        htmlFor="fileupload"
                        className={
                            !isLoading
                                ? styles.controls__btn
                                : `${styles.controls__btn} ${styles["controls__btn--disabled"]}`
                        }
                    >
                        {upload}
                    </label>
                    <input
                        className={styles["controls__btn-upload"]}
                        type="file"
                        id="fileupload"
                        accept="audio/*"
                        onChange={(e) => uploadHandler(e)}
                    />
                </div>
                {isLoading && <p>Loading...</p>}
            </div>
        </>
    );
};

export default AudioPanel;
