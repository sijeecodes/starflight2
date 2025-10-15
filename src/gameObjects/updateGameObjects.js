import updatePCObjects from './updatePCObjects';
import updateNPCObjects from './updateNPCObjects';

const updateGameObjects = function (scene, pcObjects, npcObjects, keyStates) {
    return updateNPCObjects(updatePCObjects(scene, pcObjects, keyStates), npcObjects);
};

export default updateGameObjects;