import npcAIPatternLoader from './npcAIPatternLoader';
import { createNPCBlaster } from './createNPCObjects';

function updateNPCAI(obj) {
    npcAIPatternLoader(obj);
    if (!obj.aiPattern || !obj.aiPattern[obj.aiPatternCurrentStep + 1]) return;

    if (obj.aiPattern[obj.aiPatternCurrentStep + 1].actionTime <= obj.aiPatternTime) {
        obj.aiPatternCurrentStep++;
        const action = obj.aiPattern[obj.aiPatternCurrentStep].action;
        const value = obj.aiPattern[obj.aiPatternCurrentStep].value;
        if (action == "move") obj.targetPosition = value;
        if (action == "blaster") createNPCBlaster(obj);
        if (action == "setPatternTime") setPatternTime(obj, value);
    }
}

//temporary test function
function setPatternTime(obj, time) {
    obj.aiPatternTime = time;
    for (let i = 0; i < obj.aiPattern.length; i++) {
        if (obj.aiPattern[i].actionTime >= time) {
            obj.aiPatternCurrentStep = i - 1;
            break;
        }
    }
    console.log("pattern reset");
}

export default updateNPCAI;