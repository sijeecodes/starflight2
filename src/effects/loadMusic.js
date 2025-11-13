function loadMusic() {
    const audio = new Audio("./soundSrc/bgMusic.mp3");
    audio.volume = 0.4;
    audio.loop = true;
    audio.play();

    function stop() {
        audio.pause();
        audio.currentTime = 0;
    }
    return stop;
}

export default loadMusic;