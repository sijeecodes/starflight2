import npcAIPatternLoader from './npcAIPatternLoader';
import { createNPCBlaster } from './createNPCObjects';

function updateNPCAI(obj) {
    npcAIPatternLoader(obj);
    if (!obj.aiPattern || !obj.aiPattern[obj.aiPatternCurrentStep + 1]) return;
    
    if (obj.aiPattern[obj.aiPatternCurrentStep + 1].actionTime <= obj.aiPatternTime) {
        obj.aiPatternCurrentStep++;
        const action = obj.aiPattern[obj.aiPatternCurrentStep].action;
        const value = obj.aiPattern[obj.aiPatternCurrentStep].value;

        if (action == "move")           setTargetPosition(obj, value);
        if (action == "blaster")        createNPCBlaster(obj);
        if (action == "setPatternTime") setPatternTime(obj, value);
    }
}

function setPatternTime(obj, time) {
    obj.aiPatternTime = time;
    for (let i = 0; i < obj.aiPattern.length; i++) {
        if (obj.aiPattern[i].actionTime >= time) {
            obj.aiPatternCurrentStep = i - 1;
            return;
        }
    }
}

function setTargetPosition(obj, value) {
    obj.targetPosition[0] = obj.position.x + value[0];
    obj.targetPosition[1] = obj.position.y + value[1];
    obj.targetPosition[2] = obj.position.z + value[2];
}

export default updateNPCAI;