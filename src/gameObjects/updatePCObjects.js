import { createPCBlaster } from './createPCObjects';


const updatePCObjects = function (scene, pcObjects, keyStates) {
    let shipPosition = pcObjects.pcShip.position;
    let shipRotation = pcObjects.pcShip.rotation;
    let blasters = pcObjects.pcBlasters;
    let newBlasters = [];

    if (keyStates.right == true) {
        shipPosition.x -= 0.5;
    }
    if (keyStates.left == true) {
        shipPosition.x += 0.5;
    }
    if (keyStates.up == true) {
        shipPosition.y -= 0.5;
    }
    if (keyStates.down == true) {
        shipPosition.y += 0.5;
    }
    if (keyStates.rightRoll == true) {
        shipPosition.x -= 1;
        shipRotation.z += 0.3;
    }
    if (keyStates.leftRoll == true) {
        shipPosition.x += 1;
        shipRotation.z -= 0.3;
    }
    if (keyStates.blaster == true) {
        const newBlaster = createPCBlaster(shipPosition)
        blasters.push(newBlaster);
        scene.add(newBlaster);
    }
    
    if (blasters.length > 0) {
        blasters.forEach((e) => {
            let newBlaster = e;
            newBlaster.position.z += e.speed;
            newBlaster.position.needsUpdate = true;
            newBlasters.push(newBlaster);
        });
    }

    return scene;
};

export default updatePCObjects;