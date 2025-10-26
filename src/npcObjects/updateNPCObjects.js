import updateNPCAI from './updateNPCAI';
import updateNPCPosition from './updateNPCPosition';
import updateNPCRotation from './updateNPCRotation';

const updateNPCObjects = function (scene, { npcs, npcBlasters }) {
    if (npcs.length < 1) return;
    let newNPCList = npcs.filter(npc => {
        npc.elapsedTime++;
        npc.aiPatternTime++;

        updateNPCAI(npc);
        updateNPCPosition(scene, npc);
        updateNPCRotation(npc);

        if (npc.position.z < -30) {
            scene.remove(npc);
            return false;
        }
        return true;
    });

    npcs.length = 0;
    npcs.push(...newNPCList);

    if (npcBlasters.length < 1) return;
    npcBlasters.forEach(blaster => {
        updateNPCPosition(scene, blaster);
    });
};

export default updateNPCObjects;