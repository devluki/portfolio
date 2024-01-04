import { useEffect, useRef, useState } from "react";

// import MeshReflectorMaterial from "../../js/lib/MeshReflectorMaterial.js";
import * as THREE from "three";
import { RenderPass } from "three/examples/jsm/Addons.js";
import { EffectComposer } from "three/examples/jsm/Addons.js";
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { SceneManager } from "../../utils/utils.js";

//import { OrbitControls } from "three/examples/jsm/Addons.js";

import { GLSL_DATA } from "../../js/glsl/helper.js";
// import normal from "../../../public/normal.png";
// import roughness from "../../../public/roughness.jpg";

const Visualizer = () => {
    // Refereces for THREE Audio API
    const listenerRef = useRef<THREE.AudioListener | null>(null);
    const audioRef = useRef<THREE.Audio | null>(null);
    const audioLoader = useRef<THREE.AudioLoader | null>(null);
    const audioAnalyzer = useRef<THREE.AudioAnalyser | null>(null);

    // Ref for mounting animation
    const container = useRef<HTMLDivElement | null>(null);
    // Initial
    const uniformsRef = useRef({
        u_resolution: {
            type: "v2",
            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        u_time: { type: "f", value: 0.0 },
        u_frequency: { type: "f", value: 6.0 },
        //
        uAmplitude: { value: 0 },
        uDensity: { value: 0 },
        uStrength: { value: 0 },
        uDeepPurple: { value: 0.8 },
        // uDeepPurple: { value: 0 },
        uOpacity: { value: 1 },
    });
    // const uniformsRef = useRef({
    //     u_resolution: {
    //         type: "v2",
    //         value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    //     },
    //     u_time: { type: "f", value: 0.0 },
    //     u_frequency: { type: "f", value: 6.0 },
    // });
    // Initial song
    const [url, setUrl] = useState(
        "../../../public/energetic-hip-hop-8303.ogg",
    );

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Create a scene
    useEffect(() => {
        const sceneObj = new SceneManager(
            container,
            window.innerHeight / 2,
            window.innerWidth / 2,
        );
        sceneObj.init();
        sceneObj.animate();
        // Create a scene
        const scene = new THREE.Scene();
        // Create a camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        container.current!.appendChild(renderer.domElement);

        const uniforms = uniformsRef.current;
        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: GLSL_DATA.vertex,
            fragmentShader: GLSL_DATA.fragment,
        });

        const geometry = new THREE.IcosahedronGeometry(1.3, 15); //20);
        //const geometry2 = new THREE.TorusKnotGeometry(1.4, 0.3, 100, 16);
        const sphere = new THREE.Points(geometry, material);
        // const sphere = new THREE.Points(geometry, material);
        //const mesh = new THREE.Mesh(geometry, material);
        scene.add(sphere); //, plane);

        // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
        //const torus = new THREE.Mesh(geometry, material);
        // scene.add(torus);

        // const planeGeometry = new THREE.PlaneGeometry(10, 10);
        // const planeMaterial = new THREE.MeshBasicMaterial({
        //     color: 0xffff00,
        //     side: THREE.DoubleSide,
        // });
        // const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        // plane.position.y = -3;
        // plane.rotation.x = -Math.PI / 2;
        // scene.add(plane);
        // console.log(plane);

        // plane.material = new MeshReflectorMaterial(
        //     renderer,
        //     camera,
        //     scene,
        //     plane,
        //     {
        //         resolution: 1024,
        //         blur: [512, 128],
        //         mixBlur: 2.5,
        //         mixContrast: 1.5,
        //         mirror: 0.1,
        //     },
        // );

        // console.log(plane.material);

        camera.position.z = 5;
        listenerRef.current = new THREE.AudioListener();
        audioRef.current = new THREE.Audio(listenerRef.current);
        audioAnalyzer.current = new THREE.AudioAnalyser(audioRef.current!, 32);
        camera.add(listenerRef.current);

        const clock = new THREE.Clock();

        // Unreal bloom
        const renderScene = new RenderPass(scene, camera);
        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.5,
            0.06,
            0.1,
        );

        composer.addPass(bloomPass);
        // End of unreal bloom

        //const controls = new OrbitControls(camera, renderer.domElement);
        const animate = () => {
            requestAnimationFrame(animate);

            uniformsRef.current.u_frequency.value =
                audioAnalyzer.current?.getAverageFrequency() === 0
                    ? 5 //16 //8
                    : audioAnalyzer.current!.getAverageFrequency();

            uniforms.u_time.value = clock.getElapsedTime();
            sphere.rotation.y += 0.001; //+ audioAnalyzer.current!.getAverageFrequency() / 10000;

            //plane.material.update();
            //plane.material = reflectorMaterial;
            //controls.update();

            //renderer.render(scene, camera);
            composer.render();
        };

        animate();
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
            //isPlayingRef.current = true;
        } else {
            audioRef.current!.pause();
            //isPlayingRef.current = false;
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
