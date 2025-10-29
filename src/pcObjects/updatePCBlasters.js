import { createPCBlaster } from '../pcObjects/createPCObjects';

function updatePCBlasters(scene, pcShip, pcBlasters, keyStates) {
    const blasterRange = 400;
    const blasterCoolTime = pcShip.blasterCoolTime;
    const blasterDelay = pcShip.blasterDelay;
    let newBlasters = [];

    if (blasterCoolTime > 0) pcShip.blasterCoolTime -= 1;

    if (keyStates.blaster && blasterCoolTime == 0) {
        const newBlaster = createPCBlaster(pcShip);
        scene.add(newBlaster);
        pcBlasters.push(newBlaster);
        pcShip.blasterCoolTime = blasterDelay;
    }

    if (pcBlasters.length > 0) {
        newBlasters = pcBlasters.filter((blaster) => {
            if (blaster.position.z < blasterRange) {
                let newBlaster = blaster;
                newBlaster.position.x += blaster.speed[0];
                newBlaster.position.y += blaster.speed[1];
                newBlaster.position.z += blaster.speed[2];
                // newBlaster.rotation.y += 0.7;
                newBlaster.position.needsUpdate = true;

                blaster = newBlaster;
                return blaster;
            }
            scene.remove(blaster);
            return false;
        });
    }
    pcBlasters.length = 0;
    pcBlasters.push(...newBlasters);
}

export default updatePCBlasters;