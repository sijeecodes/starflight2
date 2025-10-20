import { createPCBlaster } from '../pcObjects/createPCObjects';

const updatePCObjects = function (scene, pcObjects, keyStates) {
    const blasterCoolTime = pcObjects.pcShip.blasterCoolTime;
    const blasterDelay = pcObjects.pcShip.blasterDelay;
    const blasterRange = 250;
    const shipPosition = pcObjects.pcShip.position;
    const shipRotation = pcObjects.pcShip.rotation;
    const blasters = pcObjects.pcBlasters;
    let newBlasters = [];

    if (blasterCoolTime > 0) pcObjects.pcShip.blasterCoolTime -= 1;

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

    if (keyStates.blaster == true && blasterCoolTime == 0) {
        const newBlaster = createPCBlaster(shipPosition)
        scene.add(newBlaster);
        blasters.push(newBlaster);
        pcObjects.pcShip.blasterCoolTime = blasterDelay;
    }

    if (blasters.length > 0) {
        newBlasters = blasters.filter((blaster) => {
            if (blaster.position.z < blasterRange) {
                let newBlaster = blaster;
                newBlaster.position.z += blaster.speed;
                newBlaster.position.needsUpdate = true;
                blaster = newBlaster;
                return blaster;
            }
            scene.remove(blaster);
            return false;
        });
    }
    blasters.length = 0;
    blasters.push(...newBlasters);

    return pcObjects;
};

export default updatePCObjects;