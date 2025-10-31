function updateNPCBlasters (scene, npcBlasters) {
    if (!npcBlasters) return;
    
    let newBlasters = [];
    if (npcBlasters.length > 0) {
        newBlasters = npcBlasters.filter((blaster) => {
            if (blaster.position.z > -100) {
                let newBlaster = blaster;
                blaster.translateZ(blaster.speed);
                blaster = newBlaster;
                return blaster;
            }
            scene.remove(blaster);
            return false;
        });
    }
    npcBlasters.length = 0;
    npcBlasters.push(...newBlasters);
}

export default updateNPCBlasters;