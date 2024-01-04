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

export class SceneManager {
    container: HTMLDivElement;
    height: number;
    width: number;
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.WebGLRenderer;
    mesh: THREE.Mesh | null;

    constructor(
        containerRef: RefObject<HTMLDivElement>,
        height: number,
        width: number,
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
    }

    init() {
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
        this.camera.position.z = 5;
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
        this.mesh!.rotation.x += 0.001;
        this.mesh!.rotation.y += 0.001;
        //console.log(this);
    }
}
