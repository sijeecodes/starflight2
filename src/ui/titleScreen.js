import selectMenu from "./selectMenu";
import playSound from "../effects/playSound";

function titleScreen(scene, document, keyStates) {
    if (!keyStates.pressed) return;
    document.getElementById("canvas").style.opacity = 1;
    document.getElementById("inGame").style.opacity = 0;
    document.getElementById("titleScreen").style.opacity = 1;
    document.getElementById("changeShip").style.opacity = 0;
    document.getElementById("settings").style.opacity = 0;
    document.getElementById("instructions").style.opacity = 0;
    
    const options = [...document.querySelectorAll(".titleScreenOption")];
    let id = selectMenu(options, keyStates);

    if (id == "startGame")      { scene.gameState = "intro";        playSound("confirm"); }
    if (id == "toChangeShip")   { scene.gameState = "changeShip";   playSound("confirm"); }
    if (id == "toSettings")     { scene.gameState = "settings";     playSound("confirm"); }
    if (id == "toInstructions") { scene.gameState = "instructions"; playSound("confirm"); }

    keyStates.pressed = false;
}

export default titleScreen;