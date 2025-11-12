import selectMenu from "./selectMenu";

function instructions(scene, document, keyStates) {
    if (!keyStates.pressed) return;
    document.getElementById("canvas").style.opacity = 0.5;
    document.getElementById("titleScreen").style.opacity = 0;
    document.getElementById("instructions").style.opacity = 1;

    const options = [...document.querySelectorAll(".settingsOption")];
    let id = selectMenu(options, keyStates);

    if (id == "returnToTitle") {
        scene.gameState = "titleScreen";
    }
    keyStates.pressed = false;
}

export default instructions;