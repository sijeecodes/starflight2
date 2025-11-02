function updateNPCBlasters(scene, npcBlasters) {
    if (!npcBlasters) return;

    let newBlasters = [];
    if (npcBlasters.length > 0) {
        newBlasters = npcBlasters.filter((blaster) => {
            if (blaster.position.z < -200) {
                scene.remove(blaster);
                return false;
            }
            blaster.position.z -= scene.boostSpeed;
            return blaster.translateZ(blaster.speed);
        });
    }
    npcBlasters.length = 0;
    npcBlasters.push(...newBlasters);
}

export default updateNPCBlasters;