import { createNPCShip } from './createNPCObjects';
import { createNPCBlaster } from './createNPCObjects';

const updateNPCObjects = function (scene, npcObjects) {
    if (npcObjects.npcShips.length == 0) {
        const newShip = createNPCShip();
        npcObjects.npcShips.push(newShip);
        scene.add(newShip);
    }

    const blasterRange = -50;
    let shipPosition = npcObjects.npcShips[0].position;
    let blasters = npcObjects.npcBlasters;

    if (npcObjects.npcBlasters.length < 1) {
        const newBlaster = createNPCBlaster(shipPosition)
        npcObjects.npcBlasters.push(newBlaster);
        scene.add(newBlaster);
    }
    
    if (blasters.length > 0) {
        blasters.forEach((blaster, index) => {
            if (blaster.position.z < blasterRange) {

                scene.remove(blaster);
                npcObjects.npcBlasters.splice(index, 1);
            }
            
            let newBlaster = blaster;
            newBlaster.position.z += blaster.speed;
            newBlaster.position.needsUpdate = true;
        });
    }

    return npcObjects;
};

export default updateNPCObjects;