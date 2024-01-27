import { useEffect, useRef, useState } from "react";

import * as THREE from "three";

import AudioPanel from "../AudioPanel/AudioPanel.js";

import { SceneManager } from "../../utils/utils.js";

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

    useEffect(() => {
        listenerRef.current = new THREE.AudioListener();
        audioRef.current = new THREE.Audio(listenerRef.current);
        audioAnalyzer.current = new THREE.AudioAnalyser(audioRef.current!, 32);

        sceneManagerRef.current = new SceneManager(
            container,
            window.innerHeight,
            window.innerWidth,
        );

        sceneManagerRef.current.startScene(audioAnalyzer);
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
        console.log("Click play");
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

    const musicVolumeHandlerPlus = () => {
        const volume = audioRef.current!.getVolume();
        console.log("Plud", volume, audioRef.current!.getVolume());
        if (volume > 10) return;
        audioRef.current!.setVolume(volume + 0.5);
    };
    const musicVolumeHandlerMinus = () => {
        const volume = audioRef.current!.getVolume();
        console.log("Minus", volume, audioRef.current!.getVolume());
        if (volume < 1) return;
        audioRef.current!.setVolume(volume - 0.5);
    };

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

    return (
        <>
            {/* <h1>Visualizer</h1> */}
            {/* AUDIO PANEL */}

            {/* <button disabled={isLoading} onClick={playMusicHanlder}>
                {!isPlaying ? "Play" : "Pause"}
            </button>
          
            <input
                type="file"
                id="fileupload"
                accept="audio/*"
                onChange={(e) => uploadFileHanlder(e)}
            />
            {isLoading && <p>Loading...</p>} */}
            <button onClick={musicVolumeHandlerPlus}>++</button>
            <button onClick={musicVolumeHandlerMinus}>--</button>
            <button onClick={stopMusicHandler}>STOP</button>
            <AudioPanel
                isMusicPlaying={isPlaying}
                isLoading={isLoading}
                musicHandler={playMusicHanlder}
                uploadHandler={uploadFileHanlder}
            />

            <div ref={container}></div>
        </>
    );
};

export default Visualizer;
