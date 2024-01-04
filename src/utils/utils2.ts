import ReactAudioPlayer from "react-audio-player";

export const uploadFileHanlder = (
    e: React.ChangeEvent<HTMLInputElement>,
    audioRef: ReactAudioPlayer | null,
) => {
    const { files } = e.target;

    const audio = audioRef?.audioEl.current;

    console.log("UplowadFileHandler", audio);

    if (files && audio) {
        console.log("From if statement");
        const [file] = Array.from(files);
        audio.src = URL.createObjectURL(file);

        /** When the file is finally loaded we play it */
        audio.load();
        audio.play();

        const audioContext = new AudioContext();

        const audioSource = audioContext.createMediaElementSource(audio);
        const analyser = audioContext.createAnalyser();
        audioSource.connect(analyser);
        analyser.connect(audioContext.destination);
        analyser.fftSize = 2048;
        /** This line determines the number of bars */
        const bufferLength = analyser.frequencyBinCount;
        /**
         * Here we got the decibles on the dataArray following this format
         *
         * Array<number>
         * [12, 30, 60, 70, 11, ....]
         */
        const dataArray = new Uint8Array(bufferLength);
    }
};
