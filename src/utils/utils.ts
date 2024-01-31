import * as THREE from "three";
//import gsap from "gsap";
import { RefObject } from "react";
import { GLSL_DATA } from "../js/glsl/glsl";

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
    u_Amplitude: { type: "f", value: 1.0 },
    u_amplifier: { type: "f", value: 5.1 },

    uDeepPurple: { value: 0.8 },

    uOpacity: { value: 0.1 },
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
    // Post processing
    isPostProcessingActive: boolean;
    velocity: number;
    composer?: EffectComposer;
    bloomPass?: UnrealBloomPass;
    isScroll: boolean;
    scrollValue: number;
    isMusicPlaying: boolean;

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
        this.isPostProcessingActive = false;
        //TODO CHANGE NAME
        this.velocity = 1.5; //3;
        this.isScroll = false;
        this.scrollValue = 0;
        this.isMusicPlaying = false;
    }

    private init() {
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xffffff, 0);
        this.container.appendChild(this.renderer.domElement);
    }

    createMesh() {
        const geometry = new THREE.IcosahedronGeometry(1.3, 14); //22);
        // const geometry = new THREE.IcosahedronGeometry(1.3, 24); //22);
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

    addPostProcessingEffect() {
        this.isPostProcessingActive = true;
        const renderScene = new RenderPass(this.scene, this.camera);
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(renderScene);

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(this.width, this.height),
            1.5,
            0.06,
            0.1,
        );
        this.composer.addPass(bloomPass);
    }

    // onMouseMove() {
    //     window.addEventListener("mousemove", (e: MouseEvent) => {
    //         const mouseX = e.clientX;
    //         //console.log((1.2 * this.width) / mouseX);

    //         // gsap.to(this.material!.uniforms.u_frequency, {
    //         //     value: mouseX,
    //         // });

    //         // gsap.to(this, {
    //         //     velocity: mouseX / this.width,
    //         // });
    //         // gsap.to(this.material!.uniforms.uDeepPurple, {
    //         //     value: mouseX / this.width,
    //         // });
    //         // console.log(mouseX);
    //     });
    // }

    onScroll() {
        // console.log("Is music playing:", this.isMusicPlaying);
        if (this.isMusicPlaying) return;
        this.scrollValue = this.container.getBoundingClientRect().top;

        if (this.scrollValue < 150 && this.scrollValue > 0) {
            this.isScroll = false;
            this.material!.uniforms.u_amplifier.value = this.scrollValue / 33.6;
        } else if (this.scrollValue < 0) {
            this.isScroll = true;

            this.material!.uniforms.u_amplifier.value = this.scrollValue;
        } else {
            this.isScroll = false;
            this.material!.uniforms.u_amplifier.value = 5.0;
        }
    }

    addEventListeners() {
        window.addEventListener("scroll", this.onScroll.bind(this));
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        if (!this.isPostProcessingActive) {
            this.renderer.render(this.scene, this.camera);
        } else {
            this.composer?.render();
        }

        this.mesh!.rotation.x += 0.001;
        this.mesh!.rotation.y += 0.001;

        const fq = this.audioAnalyser!.getAverageFrequency();

        if (fq < 40) {
            uniforms.u_frequency.value = 40;
        } else {
            uniforms.u_frequency.value = fq;
        }

        // uniforms.u_time.value = this.clock.getElapsedTime() / this.velocity;

        uniforms.u_time.value = !this.isScroll
            ? this.clock.getElapsedTime() / this.velocity
            : this.velocity;

        //console.log(uniforms.u_time.value);
        // this.composer!.render();
    }

    startScene(audioAnalyzer: RefObject<THREE.AudioAnalyser>) {
        this.init();
        this.createMesh();
        this.connectAudio(audioAnalyzer);
        this.addPostProcessingEffect();
        this.addEventListeners();
        this.animate();
    }
}

// Intro Animation
export const TIME = 2800;
