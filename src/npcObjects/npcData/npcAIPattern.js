const npcAIPattern = {
    basicPattern: [
        { actionTime: 0, action: "move", value: [10, 10, -150] },
    ],
    basicPattern1: [
        { actionTime: 0, action: "move", value: [0, 0, -190] },
    ],
    basicPattern2: [
        { actionTime: 0, action: "move", value: [0, 15, -150] },
    ],
    loopPattern: [
        { actionTime: 20, action: "move",      value: [10, 10, 10] },
        { actionTime: 50, action: "blaster",   value: "front" },
        { actionTime: 70, action: "blaster",   value: "front" },
        { actionTime: 110, action: "move",      value: [-10, -10, -10] },
        { actionTime: 140, action: "blaster",  value: "front" },
        { actionTime: 160, action: "blaster",  value: "front" },        
        { actionTime: 180, action: "setPatternTime", value: 0 },
    ],
    loopPattern1: [
        { actionTime: 20, action: "move",      value: [-10, -10, -10] },
        { actionTime: 50, action: "blaster",   value: "front" },
        { actionTime: 70, action: "blaster",   value: "front" },
        { actionTime: 110, action: "move",      value: [10, 10, 10] },
        { actionTime: 140, action: "blaster",  value: "front" },
        { actionTime: 160, action: "blaster",  value: "front" },        
        { actionTime: 180, action: "setPatternTime", value: 0 },
    ],
    loopPattern2: [
        { actionTime: 20, action: "move",      value: [0, 10, 10] },
        { actionTime: 50, action: "blaster",   value: "front" },
        { actionTime: 70, action: "blaster",   value: "front" },
        { actionTime: 110, action: "move",      value: [0, -10, -10] },
        { actionTime: 140, action: "blaster",  value: "front" },
        { actionTime: 160, action: "blaster",  value: "front" },        
        { actionTime: 180, action: "setPatternTime", value: 0 },
    ],
};

export default npcAIPattern;