import updateNPCAI from './updateNPCAI';
import updateNPCPosition from './updateNPCPosition';
import updateNPCRotation from './updateNPCRotation';
import updateNPCBlasters from './updateNPCBlasters';
import { createNPCBlaster } from './createNPCObjects';

const updateNPCObjects = function (scene, pcPos, { npcs, npcBlasters }) {
    if (npcs.length < 1) return;

    let newNPCList = npcs.filter(npc => {
        npc.elapsedTime++;
        npc.aiPatternTime++;

        updateNPCAI(npc);
        updateNPCPosition(npc);
        updateNPCRotation(npc);
        
        createNPCBlaster(scene, pcPos, npc, npcBlasters);
        updateNPCBlasters(scene, npcBlasters);

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