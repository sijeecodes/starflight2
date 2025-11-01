import npcAIPatternLoader from './npcAIPatternLoader';

function updateNPCAI(obj, pcPos) {
    npcAIPatternLoader(obj);
    if (!obj.aiPattern || !obj.aiPattern[obj.aiPatternCurrentStep + 1]) return;
    
    if (obj.aiPattern[obj.aiPatternCurrentStep + 1].actionTime <= obj.aiPatternTime) {
        obj.aiPatternCurrentStep++;
        const action = obj.aiPattern[obj.aiPatternCurrentStep].action;
        const value = obj.aiPattern[obj.aiPatternCurrentStep].value;

        if (action == "move")           setTargetPosition(obj, value);
        if (action == "blaster")        setNPCBlaster(obj, value);
        if (action == "setPatternTime") setPatternTime(obj, value);
        if (action == "look")           setTargetRotation(obj, value, pcPos);
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

function setNPCBlaster(obj, value) {
    obj.fireBlaster = value;
}

function setTargetPosition(obj, value) {
    obj.targetPosition[0] = obj.position.x + value[0];
    obj.targetPosition[1] = obj.position.y + value[1];
    obj.targetPosition[2] = obj.position.z + value[2];
}

function setTargetRotation(obj, value, pcPos) {
    if (value == "pc") {
        const dx = pcPos.x - obj.position.x;
        const dy = pcPos.y - obj.position.y;
        const dz = pcPos.z - obj.position.z;
        const dxz = Math.sqrt(Math.pow(pcPos.z - obj.position.z, 2)
                             + Math.pow(pcPos.x - obj.position.x, 2));
        const targetY = Math.atan2(dx, dz);
        const targetX = Math.atan2(dy, dxz);

        obj.targetRotation[0] = targetX;
        obj.targetRotation[1] = targetY + Math.PI;
        obj.targetRotation[2] = 0;
    } else {
        obj.targetRotation[0] = obj.rotation.x + value[0];
        obj.targetRotation[1] = obj.rotation.y + value[1];
        obj.targetRotation[2] = obj.rotation.z + value[2];
    }
}

export default updateNPCAI;