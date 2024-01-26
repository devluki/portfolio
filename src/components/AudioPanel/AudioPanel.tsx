import { useState } from "react";
import styles from "./AudioPanel.module.scss";
import Translator from "../Translator/Translator";

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
                <button disabled={isLoading} onClick={musicHandler}>
                    {!isMusicPlaying ? "Play" : "Pause"}
                </button>
                {/* <button onClick={muteHandler}>Mute</button> */}
                <input
                    type="file"
                    id="fileupload"
                    accept="audio/*"
                    onChange={(e) => uploadHandler(e)}
                />
                {isLoading && <p>Loading...</p>}
            </div>
        </>
    );
};

export default AudioPanel;
