import updateNPCAI from './updateNPCAI';
import updateNPCPosition from './updateNPCPosition';
import updateNPCRotation from './updateNPCRotation';
import updateNPCBlasters from './updateNPCBlasters';
import { createNPCBlaster } from './createNPCObjects';

const updateNPCObjects = function (scene, pcPos, { npcs, npcBlasters }) {
    if (npcs.length < 1 && npcBlasters.length < 1) return;

    let newNPCList = npcs.filter(npc => {
        npc.elapsedTime++;
        npc.aiPatternTime++;

        updateNPCAI(npc, pcPos);
        updateNPCPosition(npc);
        updateNPCRotation(npc);
        createNPCBlaster(scene, pcPos, npc, npcBlasters);

        if (npc.position.z < 0) {
            npc.targetRotation = [0, 0, 0];
            npc.targetPosition.z = -300;
        }

        if (npc.position.z < -200
            || Math.abs(npc.position.x) > 300
            || Math.abs(npc.position.y) > 150) {

            scene.remove(npc);
            return false;
        }
        return true;
    });
    npcs.length = 0;
    npcs.push(...newNPCList);

    updateNPCBlasters(scene, npcBlasters);
};

export default updateNPCObjects;