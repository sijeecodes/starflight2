function updatePCIdle (scene, pcShip) {
    scene.timeStamp++;
    pcShip.position.y = Math.sin(scene.timeStamp/25);
}

export default updatePCIdle;