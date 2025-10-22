import closeDistance from './closeDistance';
import raycastHit from './raycastHit';

function collisionCheck(scene, pcObjects, npcObjects) {
    const pcShip = pcObjects.pcShip;
    const pcBlasters = pcObjects.pcBlasters;
    const npcs = npcObjects.npcs;
    const npcBlasters = npcObjects.npcBlasters;
    let newBlasters = [];
    let newNpcs = [];

    //check all pcBlasters vs enemies
    pcBlasters.forEach((pcBlaster) => {
        let newNpcs = [];
        let pcBlasterGone = false;

        npcs.forEach((npc) => {
            if (closeDistance(pcBlaster, npc)) {
                if (raycastHit(pcBlaster, npc)) {
                    scene.remove(pcBlaster);
                    pcBlasterGone = true;
                    //explosion effect;

                    npc.hp -= pcBlaster.power;
                    npc.hp <= 0 ? scene.remove(npc) : newNpcs.push(npc);
                } else newNpcs.push(npc);
            } else newNpcs.push(npc);
        });
        pcBlasterGone ? null : newBlasters.push(pcBlaster);
        npcs.length = 0;
        npcs.push(...newNpcs);
    });
    pcBlasters.length = 0;
    pcBlasters.push(...newBlasters);

    //check all npcs vs pc
    npcs.forEach((npc) => {
        if (closeDistance(npc, pcShip)) {
            if (raycastHit(npc, pcShip.children[1].children[0])) {
                pcShip.hp -= 1;
                npc.hp -= 1;
                //explosion effect;

                npc.hp <= 0 ? scene.remove(npc) : newNpcShips.push(npc);
            } else newNpcs.push(npc);
        } else newNpcs.push(npc);
    });
    npcs.length = 0;
    npcs.push(...newNpcs);

    //check all enemy blasters vs pc
    newBlasters.length = 0;
    npcBlasters.forEach((blaster) => {
        if (closeDistance(blaster, pcShip)) {
            if (raycastHit(blaster, pcShip.children[1].children[0])) {
                pcShip.hp -= blaster.power;
                //explosion effect;

                scene.remove(blaster);
            } else newBlasters.push(blaster);
        } else newBlasters.push(blaster);
    });
    npcBlasters.length = 0;
    npcBlasters.push(...newBlasters);
}

export default collisionCheck;