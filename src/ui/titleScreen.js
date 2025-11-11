import selectMenu from "./selectMenu";

function titleScreen(scene, camera, document, keyStates) {
    if (!keyStates.pressed) return;
    
    const options = [...document.querySelectorAll(".titleScreenOption")];
    let id = selectMenu(scene, options, keyStates);

    if (id == "startGame") {
        document.getElementById("titleScreen").style.opacity = 0;
        document.getElementById("inGame").style.opacity = 1;

        scene.gameState = "playing";
        scene.timeStamp = 0;
        camera.position.set(0, 10, -200);
        camera.rotation.set(0, 0, 0);
        return;
    }
    if (id == "instructions") {
        document.getElementById("canvas").style.opacity = 0.5;
        document.getElementById("titleScreen").style.opacity = 0.2;
        document.getElementById("instructions").style.opacity = 1;
        scene.gameState = "instructions";
        return;
    }
    if (id == "settings") {
        document.getElementById("canvas").style.opacity = 0.5;
        document.getElementById("titleScreen").style.opacity = 0.2;
        document.getElementById("settings").style.opacity = 1;
        scene.gameState = "settings";
    }
}

export default titleScreen;