function intro(scene, camera, document, pcShip) {
    document.getElementById("titleScreen").style.opacity = 0;

    scene.timeStamp = 0;
    scene.gameState = "startingGame";
}

export default intro;