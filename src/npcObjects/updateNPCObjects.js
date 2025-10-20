import { createNPCBlaster } from './createNPCObjects';

const updateNPCObjects = function (scene, npcObjects) {
    // const blasterRange = -50;
    // let npcPosition = npcObjects.npcs[0].position;
    // let blasters = npcObjects.npcBlasters;

    // if (npcObjects.npcBlasters.length < 1) {
    //     const newBlaster = createNPCBlaster(npcPosition)
    //     npcObjects.npcBlasters.push(newBlaster);
    //     scene.add(newBlaster);
    // }
    
    // if (blasters.length > 0) {
    //     blasters.forEach((blaster, index) => {
    //         if (blaster.position.z < blasterRange) {

    //             scene.remove(blaster);
    //             npcObjects.npcBlasters.splice(index, 1);
    //         }
            
    //         let newBlaster = blaster;
    //         newBlaster.position.z += blaster.speed;
    //         newBlaster.position.needsUpdate = true;
    //     });
    // }

    return npcObjects;
};

export default updateNPCObjects;