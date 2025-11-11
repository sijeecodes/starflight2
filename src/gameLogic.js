import collisionCheck from './collision/collisionCheck';
import updateBackground from './environment/updateBackground';
import updateLevel from './level/updateLevel';
import updatePCObjects from './pcObjects/updatePCObjects';
import updateNPCObjects from './npcObjects/updateNPCObjects';
import updateExplosions from './effects/updateExplosions';
import updateGauge from './ui/updateGauge';

function gameLogic(scene, npcObjects, pcObjects, explosionObjects, backgroundObjs, document, camera, keyStates) {
    updateBackground(scene, backgroundObjs);
    updateLevel(scene, npcObjects);
    updateNPCObjects(scene, pcObjects.pcShip.position, npcObjects);
    updatePCObjects(scene, camera, pcObjects, keyStates);

    collisionCheck(scene, pcObjects, npcObjects, explosionObjects);
    updateExplosions(scene, explosionObjects)

    updateGauge(document, pcObjects);
}

export default gameLogic;



