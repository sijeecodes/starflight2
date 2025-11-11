import selectMenu from "./selectMenu";

function settings(scene, document, keyStates) {
    if (!keyStates.pressed) return;
    document.getElementById("canvas").style.opacity = 0.5;
    document.getElementById("inGame").style.opacity = 0;
    document.getElementById("titleScreen").style.opacity = 0.2;
    document.getElementById("settings").style.opacity = 1;
    document.getElementById("instructions").style.opacity = 0;

    const options = [...document.querySelectorAll(".settingsOption")];
    let id = selectMenu(scene, options, keyStates);

    if (id == "returnToTitle") {
        scene.gameState = "titleScreen";
    }
    if (id == "invertUpDown") {
        keyStates.upDownKey == "inverted" ?
            keyStates.upDownKey = "unInverted" :
            keyStates.upDownKey = "inverted";

        console.log(keyStates.upDownKey);
    }
    keyStates.pressed = false;
}

export default settings;