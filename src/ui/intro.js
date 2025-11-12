function intro(scene, camera, document, pcShip) {
    document.getElementById("titleScreen").style.opacity = 0;
    document.getElementById("inGame").style.opacity = 1;

    pcShip.position.set(0, 0, 0);
    pcShip.rotation.set(0, 0, 0);
    camera.position.set(0, 10, -200);
    camera.rotation.set(0, 0, 0);
    scene.timeStamp = 0;
    scene.gameState = "playing";
}

export default intro;