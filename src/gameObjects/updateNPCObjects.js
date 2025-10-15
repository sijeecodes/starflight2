import { createNPCShip } from './createNPCObjects';
import { createNPCBlaster } from './createNPCObjects';


const updatePCObjects = function (scene, npcObjects) {
    if (npcObjects.npcShips.length == 0) {
        const newShip = createNPCShip();
        npcObjects.npcShips.push(newShip);
        scene.add(newShip);
    }

    let shipPosition = npcObjects.npcShips[0].position;
    let blasters = npcObjects.npcBlasters;

    if (npcObjects.npcBlasters.length < 1) {
        const newBlaster = createNPCBlaster(shipPosition)
        npcObjects.npcBlasters.push(newBlaster);
        scene.add(newBlaster);
    }
    
    if (blasters.length > 0) {
        blasters.forEach((e, index) => {
            if (e.position.z < -50) {

                scene.remove(e);
                npcObjects.npcBlasters.splice(index, 1);
            }
            
            let newBlaster = e;
            newBlaster.position.z += e.speed;
            newBlaster.position.needsUpdate = true;
        });
    }

    return scene;
};

export default updatePCObjects;