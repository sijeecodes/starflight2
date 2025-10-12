const updatePCObjects = function (pcObjects, keyStates) {
    let playerRotation = pcObjects.playerShip.rotation;
    let playerPosition = pcObjects.playerShip.position;

    if (keyStates.right == true) {
        playerPosition.x -= 0.5;
    }
    if (keyStates.left == true) {
        playerPosition.x += 0.5;
    }
    if (keyStates.up == true) {
        playerPosition.y -= 0.5;
    }
    if (keyStates.down == true) {
        playerPosition.y += 0.5;
    }
    if (keyStates.rightRoll == true) {
        playerPosition.x -= 1;
        playerRotation.z += 0.3;
    }
    if (keyStates.leftRoll == true) {
        playerPosition.x += 1;
        playerRotation.z -= 0.3;
    }
    if (keyStates.blaster == true) {

    }

};

export default updatePCObjects;