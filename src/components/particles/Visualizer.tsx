import { useEffect, useRef, useState } from "react";

import * as THREE from "three";

import { SceneManager } from "../../utils/utils.js";

const Visualizer = () => {
    // Refereces for THREE Audio API
    const listenerRef = useRef<THREE.AudioListener | null>(null);
    const audioRef = useRef<THREE.Audio | null>(null);
    const audioLoader = useRef<THREE.AudioLoader | null>(null);
    const audioAnalyzer = useRef<THREE.AudioAnalyser | null>(null);

    const container = useRef<HTMLDivElement | null>(null);

    const [url, setUrl] = useState(
        "../../../public/energetic-hip-hop-8303.ogg",
    );

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const sceneObj = new SceneManager(
            container,
            window.innerHeight,
            window.innerWidth,
        );

        listenerRef.current = new THREE.AudioListener();
        audioRef.current = new THREE.Audio(listenerRef.current);
        audioAnalyzer.current = new THREE.AudioAnalyser(audioRef.current!, 32);

        sceneObj.init();
        sceneObj.createMesh();
        sceneObj.connectAudio(audioAnalyzer);
        sceneObj.addPostProcessingEffect();
        sceneObj.onMouseMove();
        sceneObj.animate();
    }, []);

    useEffect(() => {
        audioLoader.current = new THREE.AudioLoader();

        // console.log("Second effect");
        audioLoader.current.load(
            url,

            function (buffer) {
                audioRef.current!.setBuffer(buffer);

                console.log("BUFFER", buffer, audioRef.current);
                setIsLoading(false);
            },
        );
    }, [url]);

    const playMusicHanlder = () => {
        if (!isPlaying) {
            audioRef.current!.play();
        } else {
            audioRef.current!.pause();
        }

        setIsPlaying((prev) => !prev);
    };

    const uploadFileHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        // audioRef.current!.pause();
        audioRef.current!.stop();
        setIsPlaying(false);
        setIsLoading(true);

        console.log("UplowadFileHandler", audioRef);

        if (files) {
            console.log("From if statement");
            const [file] = Array.from(files);
            const src = URL.createObjectURL(file);
            console.log("SRC", src);

            audioLoader.current!.load(
                src,

                function (buffer) {
                    audioRef.current!.setBuffer(buffer);
                    setIsLoading(false);
                },
            );
            setUrl(src);
        }
    };

    return (
        <>
            <h1>Visualizer</h1>
            <button disabled={isLoading} onClick={playMusicHanlder}>
                {!isPlaying ? "Play" : "Pause"}
            </button>
            <input
                type="file"
                id="fileupload"
                accept="audio/*"
                onChange={(e) => uploadFileHanlder(e)}
            />
            {isLoading && <p>Loading...</p>}

            <div ref={container}></div>
        </>
    );
};

export default Visualizer;
