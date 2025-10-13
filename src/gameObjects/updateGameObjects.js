import updatePCObjects from './updatePCObjects';
// import updateNPCObjects from './updateNPCObjecst.js';

const updateGameObjects = function (scene, pcObjects, keyStates) {
    return updatePCObjects(scene, pcObjects, keyStates);
};

export default updateGameObjects;