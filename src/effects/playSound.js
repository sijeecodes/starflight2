function playSound(src, vol = 0.1) {
    const audio = new Audio(src);
    audio.volume = vol;
    audio.play();
}

export default playSound;