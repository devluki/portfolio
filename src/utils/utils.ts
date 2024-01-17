// import { ChangeEvent } from "react";
// // import ReactAudioPlayer from "react-audio-player";

// export const uploadFileHanlder = (
//     e: ChangeEvent<HTMLInputElement>,
//     // audioRef: ReactAudioPlayer | null,
// ) => {
//     const { files } = e.target;

//     //const audio = audioRef?.audioEl.current;

//     //console.log("UplowadFileHandler", audio);

//     if (files) {
//         console.log("From if statement");
//         const [file] = Array.from(files);
//         const src = URL.createObjectURL(file);

//         return src;

//         // audio.load();
//         // audio.play();

//         // const audioContext = new AudioContext();

//         // const audioSource = audioContext.createMediaElementSource(audio);
//         // const analyser = audioContext.createAnalyser();
//         // audioSource.connect(analyser);
//         // analyser.connect(audioContext.destination);
//         // analyser.fftSize = 2048;
//     }
// };
import * as THREE from "three";
import { RefObject } from "react";
import { GLSL_DATA } from "../js/glsl/helper";

import { RenderPass } from "three/examples/jsm/Addons.js";
import { EffectComposer } from "three/examples/jsm/Addons.js";
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";

const uniforms = {
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
    // uDeepPurple: { value: 0 },// For tests
    uOpacity: { value: 1 },
};

export class SceneManager {
    container: HTMLDivElement;
    height: number;
    width: number;
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.WebGLRenderer;
    clock: THREE.Clock;
    mesh: THREE.Points | null; //| THREE.Mesh | null;
    material: THREE.ShaderMaterial | null;
    audioAnalyser: THREE.AudioAnalyser | null;

    constructor(
        containerRef: RefObject<HTMLDivElement>,
        height: number,
        width: number,
        // material: THREE.ShaderMaterial,
    ) {
        (this.container = containerRef.current!), // I am sure that is not null
            (this.height = height),
            (this.width = width),
            (this.scene = new THREE.Scene());
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.width / this.height,
            0.1,
            1000,
        );
        this.renderer = new THREE.WebGLRenderer();
        this.mesh = null; //
        this.material = null;
        this.audioAnalyser = null;
        this.clock = new THREE.Clock();
    }

    // Make them private

    init() {
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);
    }

    createMesh() {
        const geometry = new THREE.IcosahedronGeometry(1.3, 15); //20);
        this.material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: GLSL_DATA.vertex,
            fragmentShader: GLSL_DATA.fragment,
        });
        this.mesh = new THREE.Points(geometry, this.material);
        this.scene.add(this.mesh);
        this.camera.position.z = 5;
    }

    connectAudio(audioRef: RefObject<THREE.AudioAnalyser>) {
        this.audioAnalyser = audioRef.current;
    }

    // addPostProcessingEffect(){

    // }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
        this.mesh!.rotation.x += 0.001;
        this.mesh!.rotation.y += 0.001;

        const fq = this.audioAnalyser!.getAverageFrequency();
        let time = 4;
        if (fq < 50) {
            uniforms.u_frequency.value = 60;
            //time = 5;
        } else {
            uniforms.u_frequency.value = fq;
            // time = time > 1 ? time-- : 1;
        }

        // uniforms.u_frequency.value =
        //     this.audioAnalyser!.getAverageFrequency() === 0
        //         ? 10
        //         : this.audioAnalyser!.getAverageFrequency();
        uniforms.u_time.value = this.clock.getElapsedTime() / time;
    }
}
