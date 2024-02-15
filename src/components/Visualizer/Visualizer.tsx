import { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import gsap from "gsap";
import Modal from "../Modal/Modal.js";
// import AudioPanel from "../AudioPanel/AudioPanel.js";
import BtnTxt from "../BtnTxt/BtnTxt.js";
import Translator from "../Translator/Translator.js";

import { SceneManager } from "../../utils/utils.js";

import panelIcons from "../../assets/sprite_audio_panel.svg";

import styles from "./Visualizer.module.scss";

const Visualizer = () => {
    console.log("RENDER");
    // Refereces for THREE Audio API
    const listenerRef = useRef<THREE.AudioListener | null>(null);
    const audioRef = useRef<THREE.Audio | null>(null);
    const audioLoader = useRef<THREE.AudioLoader | null>(null);
    const audioAnalyzer = useRef<THREE.AudioAnalyser | null>(null);
    const isMusicPlaying = useRef(false);
    const sceneManagerRef = useRef<SceneManager>();

    const container = useRef<HTMLDivElement | null>(null);

    const [url, setUrl] = useState(
        "../../../public/energetic-hip-hop-8303.ogg",
    );

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        listenerRef.current = new THREE.AudioListener();
        audioRef.current = new THREE.Audio(listenerRef.current);
        audioAnalyzer.current = new THREE.AudioAnalyser(audioRef.current!, 32);
        console.log(container);
        sceneManagerRef.current = new SceneManager(
            container,
            window.innerHeight,
            window.innerWidth,
        );

        sceneManagerRef.current.startScene(audioAnalyzer);

        // Intro aniamtion
        const timeLine = gsap.timeline({
            defaults: { duration: 1.5, delay: 1.2 },
        });
        timeLine.fromTo(
            sceneManagerRef.current.mesh!.scale,
            { z: 5, x: 5, y: 5 },
            { z: 1, x: 1, y: 1 },
        );
    }, []);

    useEffect(() => {
        audioLoader.current = new THREE.AudioLoader();
        audioLoader.current.load(url, function (buffer) {
            audioRef.current!.setBuffer(buffer);
            setIsLoading(false);
        });
    }, [url]);

    // const endMusicHandler = () => {
    //     audioRef.current!.onEnded = () => {
    //         isMusicPlaying.current = false;
    //         sceneManagerRef.current!.isMusicPlaying = false;
    //         setIsPlaying(false);
    //         console.log("Song ended!");
    //     };
    // };

    const playMusicHanlder = () => {
        // console.log("Click play");
        setModalIsOpen(false);
        if (!isPlaying) {
            console.log(audioRef.current!);
            audioRef.current!.play();
            isMusicPlaying.current = true;
            sceneManagerRef.current!.isMusicPlaying = true;
        } else {
            audioRef.current!.pause();
            isMusicPlaying.current = false;
            sceneManagerRef.current!.isMusicPlaying = false;
            //endMusicHandler();
        }

        setIsPlaying((prev) => !prev);
    };

    const stopMusicHandler = () => {
        audioRef.current!.stop();
        isMusicPlaying.current = false;
        sceneManagerRef.current!.isMusicPlaying = false;
        setIsPlaying(false);
    };

    // const musicVolumeHandlerPlus = () => {
    //     const volume = audioRef.current!.getVolume();
    //     console.log("Plud", volume, audioRef.current!.getVolume());
    //     if (volume > 10) return;
    //     audioRef.current!.setVolume(volume + 0.5);
    // };
    // const musicVolumeHandlerMinus = () => {
    //     const volume = audioRef.current!.getVolume();
    //     console.log("Minus", volume, audioRef.current!.getVolume());
    //     if (volume < 1) return;
    //     audioRef.current!.setVolume(volume - 0.5);
    // };

    const uploadFileHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        audioRef.current!.stop();
        isMusicPlaying.current = false;
        sceneManagerRef.current!.isMusicPlaying = false;
        setIsPlaying(false);
        setIsLoading(true);

        if (files) {
            const [file] = Array.from(files);
            const src = URL.createObjectURL(file);
            // console.log("SRC", src);

            audioLoader.current!.load(
                src,

                function (buffer) {
                    audioRef.current!.setBuffer(buffer);
                    audioRef.current!.onEnded = () => {
                        isMusicPlaying.current = false;
                        sceneManagerRef.current!.isMusicPlaying = false;
                        setIsPlaying(false);
                        audioRef.current!.stop();
                        console.log("Song ended!");
                    };
                    setIsLoading(false);
                },
            );
            setUrl(src);
        }
    };

    const openModalHandler = () => {
        setModalIsOpen(true);
        console.log("Open modal");
    };
    const closeModalHandler = () => {
        setModalIsOpen(false);
    };
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
            {/* Panel component! */}
            <Modal isOpen={modalIsOpen} closeHandler={closeModalHandler}>
                <div className={styles["audio-panel"]}>
                    <div className={styles["audio-panel__txt"]}>
                        <Translator translationKey="modal.custiomize" />
                    </div>
                    <div className={styles["audio-panel__controls"]}>
                        <button
                            className={styles.panel__btn}
                            disabled={isLoading}
                            onClick={playMusicHanlder}
                        >
                            {!isPlaying ? play : pause}
                        </button>
                        <button
                            className={styles.panel__btn}
                            disabled={!isPlaying}
                            onClick={stopMusicHandler}
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
                            onChange={(e) => uploadFileHanlder(e)}
                        />
                    </div>
                </div>
            </Modal>

            <div className={styles.containerV} ref={container}></div>
            <span className={styles["btn-customize"]}>
                <BtnTxt openHandler={openModalHandler}>
                    <Translator translationKey="btn.custiomize" />
                </BtnTxt>
            </span>
        </>
    );
};

export default Visualizer;
