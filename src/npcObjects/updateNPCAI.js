import npcAIPattern from './npcData/npcAIPattern';
import npcAIPatternLoader from './npcAIPatternLoader';

function updateNPCAI(obj) {
    npcAIPatternLoader(obj);

    // update/run npcAIPatterns

    // obj.aiPattern = npcAIPattern[timeEvents[0].aiPattern];
    // obj.aiPatternTime = 0;
    // obj.aiPatternCurrentStep = -1;

    // obj.elapsedTime = 0;
    // obj.aiPatternTime = 0;
    // obj.aiPatternCurrentStep = 0;
    // obj.npcAI = npcAILoader(npcAIname);
    // obj.npcAI.timeTriggered
    // obj.npcAI.hpTriggered
    // updateNPCAI(obj)//array
}

export default updateNPCAI;