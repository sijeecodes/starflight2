import { createNPCObject } from '../npcObjects/createNPCObjects';

function updateLevel(scene, npcObjects) {
    if (scene.levelArr.length < 1) return npcObjects;

    let objData = scene.levelArr[0];
    if (objData.eventTime <= scene.timeStamp) {
        npcObjects = createNPCObject(scene, npcObjects, objData);
        scene.levelArr.shift();
    }
    return npcObjects;
}

export default updateLevel;