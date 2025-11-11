import selectMenu from "./selectMenu";

function titleScreen(scene, document, keyStates) {
    if (!keyStates.pressed) return;
    document.getElementById("canvas").style.opacity = 1;
    document.getElementById("inGame").style.opacity = 0;
    document.getElementById("titleScreen").style.opacity = 1;
    document.getElementById("settings").style.opacity = 0;
    document.getElementById("instructions").style.opacity = 0;
    
    const options = [...document.querySelectorAll(".titleScreenOption")];
    let id = selectMenu(scene, options, keyStates);

    if (id == "startGame")      scene.gameState = "intro";
    // if (id == "toSettings")     scene.gameState = "settings";
    // if (id == "toInstructions") scene.gameState = "instructions";

    keyStates.pressed = false;
}

export default titleScreen;