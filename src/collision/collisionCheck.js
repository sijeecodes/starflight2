import * as THREE from 'three';
import closeDistance from './closeDistance';
import raycastHit from './raycastHit';

function collisionCheck(scene, pcObjects, npcObjects) {
    const pcShip = pcObjects.pcShip;                // .position , .collisionSize
    const pcBlasters = pcObjects.pcBlasters;
    const npcShips = npcObjects.npcShips;
    const npcBlasters = npcObjects.npcBlasters;
    let newBlasters = [];
    
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
        let newNpcShips = [];
        let pcBlasterGone = false;

        npcShips.forEach((npc) => {
            if (closeDistance(pcBlaster, npc)) {
                if (raycastHit("pcBlasterToNpc", pcBlaster, npc)) {
                    scene.remove(pcBlaster);
                    pcBlasterGone = true;
                    //explosion effect;

                    npc.hp = npc.hp - pcBlaster.power;
                    npc.hp <= 0 ? scene.remove(npc) : newNpcShips.push(npc);
                } else newNpcShips.push(npc);
            } else newNpcShips.push(npc);
        });
        pcBlasterGone ? null : newBlasters.push(pcBlaster);
        npcShips.length = 0;
        npcShips.push(...newNpcShips);
    });
    pcBlasters.length = 0;
    pcBlasters.push(...newBlasters);

    //check all enemies vs pc
    //check all enemy blasters vs pc
}

export default collisionCheck;