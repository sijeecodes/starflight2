import closeDistance from './closeDistance';
import raycastHit from './raycastHit';
import createExplosion from '../effects/createExplosion';

function collisionCheck(scene, pcObjects, npcObjects, explosionObjects) {
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
            if (closeDistance(npc, pcBlaster)) {
                if (raycastHit(npc, pcBlaster)) {
                    console.log("Blaster & NPC Hit!");/////////////////////
                    createExplosion(scene, pcBlaster, "hit", explosionObjects);
                    scene.remove(pcBlaster);
                    pcBlasterGone = true;

                    npc.hp -= pcBlaster.power;
                    if ( npc.hp <= 0 ) {
                        createExplosion(scene, pcBlaster, "explode", explosionObjects);
                        scene.remove(npc);
                    } else newNpcs.push(npc);
                    
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
                createExplosion(scene, pcShip, "hit", explosionObjects);
                pcShip.hp -= 1;
                npc.hp -= 1;
                //explosion effect;
                console.log("NPC & PC Hit!");/////////////////////

                if ( npc.hp <= 0 ) {
                    createExplosion(scene, npc, "explode", explosionObjects);
                    scene.remove(npc);
                } else newNpcs.push(npc);
            } else newNpcs.push(npc);
        } else newNpcs.push(npc);
    });
    npcs.length = 0;
    npcs.push(...newNpcs);

    //check all enemy blasters vs pc
    newBlasters.length = 0;
    npcBlasters.forEach((blaster) => {
        if (closeDistance(pcShip, blaster)) {
            if (raycastHit(pcShip.children[1].children[0], blaster)) {
                createExplosion(scene, pcShip, "hit", explosionObjects);
                pcShip.hp -= blaster.power;
                //explosion effect;
                console.log("blaster & PC Hit!");/////////////////////

                scene.remove(blaster);
            } else newBlasters.push(blaster);
        } else newBlasters.push(blaster);
    });
    npcBlasters.length = 0;
    npcBlasters.push(...newBlasters);
}

export default collisionCheck;