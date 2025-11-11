function mainMenuScript(scene, camera, document, keyStates) {
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
        selectMenu(scene, camera, document, id);
    }

    keyStates.pressed = false;
}

function selectMenu(scene, camera, document, id) {
    if (id == "startGame") {
        document.getElementById("titleScreen").style.opacity = 0;
        document.getElementById("inGame").style.opacity = 1;

        scene.gameState = "playing";
        scene.timeStamp = 0;
        camera.position.set(0, 10, -200);
        camera.rotation.set(0, 0, 0);
        return;
    }
    if (id == "instructions") scene.gameState = "instructions";
    if (id == "settings")     scene.gameState = "settings";
}

export default mainMenuScript;