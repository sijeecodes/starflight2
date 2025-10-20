import * as THREE from 'three';
import closeDistance from './closeDistance';
import raycastHit from './raycastHit';

function collisionCheck(scene, pcObjects, npcObjects) {
    const pcShip = pcObjects.pcShip;                // .position , .collisionSize
    const pcBlasters = pcObjects.pcBlasters;
    const npcs = npcObjects.npcs;
    const npcBlasters = npcObjects.npcBlasters;
    let newBlasters = [];
    let newNpcs = [];

    // pcObjects.pcShip.children[1].children[0]; // 3D obj
    // pcObjects.pcShip.position : position
    // pcObjects.pcBlasters[].geometry  : blaster box geometry
    // pcObjects.pcBlasters[].position  : position

    // npcObjects.npcShips[].children[0].children[0] : ship 3D object
    // npcObjects.npcShips[].position   : position
    // npcObjects.npcShips[].collisionSize : length of ship
    // npcObjects.npcShips[].ai         : npc AI name
    // npcObjects.npcShips[].hp         : npc HP
    // npcObjects.npcShips[].power      : npc Power
    // npcObjects.npcShips[].speed      : npc Speed

    // npcObjects.npcBlasters[].geometry : blaster box geometry
    // npcObjects.npcBlasters[].size     : length of blaster
    // npcObjects.npcBlasters[].position : blaster position
    // npcObjects.npcBlasters[].power    : blaster power

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