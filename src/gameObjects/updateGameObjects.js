import updatePCObjects from './updatePCObjects.js';
// import updateNPCObjects from './updateNPCObjecst.js';

const updateGameObjects = function(pcObjects) {
    const newPCObject = updatePCObjects(pcObjects);
    return newPCObject;
      
};

export default updateGameObjects;