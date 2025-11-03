const initKeyState = function () {
    return {
        right: false,
        left: false,
        up: false,
        down: false,
        rightRoll: false,
        leftRoll: false,
        boost: false,
        blaster: false
    };
}

const setKeyState = function (keyStates, event) {
    if (event.code == "KeyD") { keyStates.right = true; return keyStates; }
    if (event.code == "KeyA") { keyStates.left = true; return keyStates; }
    if (event.code == "KeyW") { keyStates.up = true; return keyStates; }
    if (event.code == "KeyS") { keyStates.down = true; return keyStates; }
    if (event.code == "ArrowRight") { keyStates.right = true; return keyStates; }
    if (event.code == "ArrowLeft") { keyStates.left = true; return keyStates; }
    if (event.code == "ArrowUp") { keyStates.up = true; return keyStates; }
    if (event.code == "ArrowDown") { keyStates.down = true; return keyStates; }
    if (event.code == "KeyV") { keyStates.rightRoll = true; return keyStates; }
    if (event.code == "KeyE") { keyStates.rightRoll = true; return keyStates; }
    if (event.code == "Comma") { keyStates.rightRoll = true; return keyStates; }
    if (event.code == "KeyC") { keyStates.leftRoll = true; return keyStates; }
    if (event.code == "KeyQ") { keyStates.leftRoll = true; return keyStates; }
    if (event.code == "KeyM") { keyStates.leftRoll = true; return keyStates; }
    if (event.code == "KeyX") { keyStates.boost = true; return keyStates; }
    if (event.code == "Period") { keyStates.boost = true; return keyStates; }
    if (event.code == "Space") { keyStates.blaster = true; return keyStates; }

    // console.log(event);
    return keyStates;
}

const resetKeyState = function (keyStates, event) {
    if (event.code == "KeyD") { keyStates.right = false; return keyStates; }
    if (event.code == "KeyA") { keyStates.left = false; return keyStates; }
    if (event.code == "KeyW") { keyStates.up = false; return keyStates; }
    if (event.code == "KeyS") { keyStates.down = false; return keyStates; }
    if (event.code == "ArrowRight") { keyStates.right = false; return keyStates; }
    if (event.code == "ArrowLeft") { keyStates.left = false; return keyStates; }
    if (event.code == "ArrowUp") { keyStates.up = false; return keyStates; }
    if (event.code == "ArrowDown") { keyStates.down = false; return keyStates; }
    if (event.code == "KeyV") { keyStates.rightRoll = false; return keyStates; }
    if (event.code == "KeyE") { keyStates.rightRoll = false; return keyStates; }
    if (event.code == "Comma") { keyStates.rightRoll = false; return keyStates; }
    if (event.code == "KeyC") { keyStates.leftRoll = false; return keyStates; }
    if (event.code == "KeyQ") { keyStates.leftRoll = false; return keyStates; }
    if (event.code == "KeyM") { keyStates.leftRoll = false; return keyStates; }
    if (event.code == "KeyX") { keyStates.boost = false; return keyStates; }
    if (event.code == "Period") { keyStates.boost = false; return keyStates; }
    if (event.code == "Space") { keyStates.blaster = false; return keyStates; }

    return keyStates;
}

export { initKeyState, setKeyState, resetKeyState };