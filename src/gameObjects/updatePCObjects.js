const updatePCObjects = function (pcObjects, keyStates) {
    let pcShipPosition = pcObjects.pcShip.position;
    let pcShipRotation = pcObjects.pcShip.rotation;

    if (keyStates.right == true) {
        pcShipPosition.x -= 0.5;
    }
    if (keyStates.left == true) {
        pcShipPosition.x += 0.5;
    }
    if (keyStates.up == true) {
        pcShipPosition.y -= 0.5;
    }
    if (keyStates.down == true) {
        pcShipPosition.y += 0.5;
    }
    if (keyStates.rightRoll == true) {
        pcShipPosition.x -= 1;
        pcShipRotation.z += 0.3;
    }
    if (keyStates.leftRoll == true) {
        pcShipPosition.x += 1;
        pcShipRotation.z -= 0.3;
    }
    if (keyStates.blaster == true) {

    }

};

export default updatePCObjects;