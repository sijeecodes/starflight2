import updateNPCAI from './updateNPCAI';

const updateNPCObjects = function (scene, { npcs, blasters }) {

    npcs.forEach(npc => {
        npc.elapsedTime++;
        npc.aiPatternTime++;
        updateNPCAI(npc);
    });

    // if targetPosition != position
    // move to targetPosition

    // if targetRotation != rotation
    // rotate to targetRotation

    // if position.z drops below -50
    // remove from scene, remove data

};

export default updateNPCObjects;