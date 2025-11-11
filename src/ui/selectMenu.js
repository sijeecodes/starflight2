const selectMenu = (scene, options, keyStates) => {
    let selected = options.findIndex(e => e.classList.contains("selected"));
    let upKey = keyStates.down;
    let downKey = keyStates.up;
    if (keyStates.upDownKey == "unInverted") {
        upKey = keyStates.up;
        downKey = keyStates.down;
    }

    if (downKey) {
        options[selected].classList.remove("selected");
        selected = (selected + 1) % options.length;
        options[selected].classList.add("selected");

    } else if (upKey) {
        options[selected].classList.remove("selected");
        selected = (selected - 1 + options.length) % options.length;
        options[selected].classList.add("selected");

    } else if (keyStates.enter) {
        const id = options[selected].id;
        return id;
    }

    keyStates.pressed = false;
    return false;
}

export default selectMenu;