import { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Modal from "../Modal/Modal.js";
import AudioPanel from "../AudioPanel/AudioPanel.js";
import BtnTxt from "../BtnTxt/BtnTxt.js";
import Translator from "../Translator/Translator.js";
import Overtlay from "../Overlay/Overlay.js";

import { SceneManager } from "../../utils/utils.js";

import styles from "./Visualizer.module.scss";

gsap.registerPlugin(ScrollTrigger);
const Visualizer = () => {
    // console.log("RENDER");
    // Refereces for THREE Audio API
    const listenerRef = useRef<THREE.AudioListener | null>(null);
    const audioRef = useRef<THREE.Audio | null>(null);
    const audioLoader = useRef<THREE.AudioLoader | null>(null);
    const audioAnalyzer = useRef<THREE.AudioAnalyser | null>(null);
    const isMusicPlaying = useRef(false);
    const sceneManagerRef = useRef<SceneManager>();

    const container = useRef<HTMLDivElement | null>(null);

    const [url, setUrl] = useState("./rap-beats-music-161432.ogg");
    const [fileName, setFileName] = useState("rap-beats-music");

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isFileVaild, setIsFileValid] = useState<boolean | undefined>(
        undefined,
    );

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        listenerRef.current = new THREE.AudioListener();
        audioRef.current = new THREE.Audio(listenerRef.current);
        audioAnalyzer.current = new THREE.AudioAnalyser(audioRef.current!, 32);
        // console.log(container);
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

        // Scroll animation

        const timeLineScroll = gsap.timeline({
            scrollTrigger: {
                trigger: "#section--services",
                start: "top 95%", //Top of trigger element hits the center of scroller lement - view port
                toggleActions: "restart none reverse none",
                end: "top -250%",

                scrub: true,

                // markers: true,
            },
        });
        timeLineScroll
            .to(
                sceneManagerRef.current.mesh!.position,
                {
                    stagger: 0.5,
                    z: 0,
                    x: 0,
                    y: -8,
                },
                "simultaneously",
            )
            .to(
                sceneManagerRef.current.mesh!.scale,
                { z: 4, x: 4, y: 5 },
                "simultaneously",
            )
            .to(
                sceneManagerRef.current.mesh!.rotation,
                { z: 0, x: 0, y: 3.2 },
                "simultaneously",
            );
    }, []);

    useEffect(() => {
        audioLoader.current = new THREE.AudioLoader();
        audioLoader.current.load(url, function (buffer) {
            audioRef.current!.setBuffer(buffer);

            setIsLoading(false);
            audioRef.current!.onEnded = () => {
                isMusicPlaying.current = false;
                sceneManagerRef.current!.isMusicPlaying = false;
                setIsPlaying(false);
                audioRef.current!.stop();
                // console.log("Song ended!");
            };
        });
    }, [url]);

    const playMusicHanlder = () => {
        setModalIsOpen(false);
        if (!isPlaying) {
            // console.log(audioRef.current!);
            audioRef.current!.play();
            isMusicPlaying.current = true;
            sceneManagerRef.current!.isMusicPlaying = true;
        } else {
            audioRef.current!.pause();
            isMusicPlaying.current = false;
            sceneManagerRef.current!.isMusicPlaying = false;
        }

        setIsPlaying((prev) => !prev);
    };

    const stopMusicHandler = () => {
        audioRef.current!.stop();
        isMusicPlaying.current = false;
        sceneManagerRef.current!.isMusicPlaying = false;
        setIsPlaying(false);
    };
    // Volume controls
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

    // const inputFileValidation = (songTitle: string) => {
    //     if (songTitle.slice(-4) !== ".mp3") {
    //         setIsFileValid(false);
    //     } else {
    //         setIsFileValid(true);
    //     }
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
            if (file.name.slice(-4) !== ".mp3") {
                setIsFileValid(false);

                return;
            } else {
                setIsFileValid(true);
                const title = file.name.slice(0, file.name.length - 4);
                setFileName(title);
                const src = URL.createObjectURL(file);

                audioLoader.current!.load(
                    src,

                    function (buffer) {
                        audioRef.current!.setBuffer(buffer);
                        audioRef.current!.onEnded = () => {
                            isMusicPlaying.current = false;
                            sceneManagerRef.current!.isMusicPlaying = false;
                            setIsPlaying(false);
                            audioRef.current!.stop();
                            // console.log("Song ended!");
                        };
                        setIsLoading(false);
                    },
                );
                setUrl(src);
            }
            // console.log("FILE:", file, "LAST THREE", file.name.slice(-4));
        }
    };

    const openModalHandler = () => {
        setModalIsOpen(true);
        // console.log("Open modal");
    };
    const closeModalHandler = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <Overtlay />
            <Modal isOpen={modalIsOpen} closeHandler={closeModalHandler}>
                <AudioPanel
                    musicHandler={playMusicHanlder}
                    stopHandler={stopMusicHandler}
                    uploadHandler={uploadFileHanlder}
                    isMusicPlaying={isPlaying}
                    isLoading={isLoading}
                    isValid={isFileVaild}
                    title={fileName}
                />
            </Modal>

            <div className={styles.containerV} ref={container}></div>
            <span className={styles["btn-customize"]}>
                <BtnTxt handler1={openModalHandler}>
                    <Translator translationKey="btn.custiomize" />
                </BtnTxt>
            </span>
        </>
    );
};

export default Visualizer;
