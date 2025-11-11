function mainMenuScript(scene, document, keyStates) {
    // Placeholder for main menu logic
    if (!keyStates.pressed) return;
    
    const options = [...document.querySelectorAll(".mainMenu")];
    let selectedMenu = options.indexOf(document.querySelector('#mainMenuOptions li.selected'));
    let upKey = keyStates.down;
    let downKey = keyStates.up;

    if (scene.upDownKey == "unInverted") {
        upKey = keyStates.up;
        downKey = keyStates.down;
    }

    if (downKey) {
        options[selectedMenu].classList.remove("selected");
        selectedMenu = (selectedMenu + 1) % options.length;
        options[selectedMenu].classList.add("selected");

    } else if (upKey) {
        options[selectedMenu].classList.remove("selected");
        selectedMenu = (selectedMenu - 1 + options.length) % options.length;
        options[selectedMenu].classList.add("selected");

    } else if (keyStates.enter) {
        const id = options[selectedMenu].id;
        selectMenu(id);
    }

    keyStates.pressed = false;
}

function selectMenu(id) {
    switch (id) {
        case "startGame":
            console.log("Starting game...");
            break;
        case "instruction":
            console.log("Opening instructions...");
            break;
        case "settings":
            console.log("Opening settings...");
            break;
    }
}

export default mainMenuScript;