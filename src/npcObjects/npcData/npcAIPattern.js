const npcAIPattern = {
    basicPattern: [
        { actionTime: 0, action: "move", value: [10, 5, -150] },
    ],
    basicPattern1: [
        { actionTime: 0, action: "move", value: [0, 0, -100] },
    ],
    basicPattern2: [
        { actionTime: 0, action: "moveTo", value: [-10, 0, 50] },
    ],
    loopPattern: [
        { actionTime: 20, action: "move",               value: [10, 5, 0] },
        { actionTime: 35, action: "setRotation",        value: "pc" },
        { actionTime: 50, action: "blaster",            value: "front" },
        { actionTime: 70, action: "blaster",            value: "front" },
        { actionTime: 110, action: "move",              value: [-10, -5, 0] },
        { actionTime: 125, action: "setRotation",       value: "pc" },
        { actionTime: 140, action: "blaster",           value: "front" },
        { actionTime: 160, action: "blaster",           value: "front" },        
        { actionTime: 180, action: "setPatternTime",    value: 0 },
    ],
    loopPattern1: [
        { actionTime: 35, action: "setRotation",        value: "pc" },
        { actionTime: 50, action: "blaster",            value: "front" },
        { actionTime: 70, action: "blaster",            value: "front" },
        { actionTime: 125, action: "setRotation",       value: "pc" },
        { actionTime: 140, action: "blaster",           value: "front" },
        { actionTime: 160, action: "blaster",           value: "front" },        
        { actionTime: 180, action: "setPatternTime",    value: 0 },
    ],
    randomMove1: [
        { actionTime: 20, action: "randomMoveTo",         value: [-15, 15, -5, 5, 50, 50] },
        { actionTime: 50, action: "setRotation",        value: "pc" },
        { actionTime: 70, action: "blaster",            value: "front" },
        { actionTime: 80, action: "blaster",            value: "front" },
        { actionTime: 90, action: "randomMoveTo",         value: [-15, 15, -5, 5, 50, 50] },
        { actionTime: 120, action: "setRotation",       value: "pc" },        
        { actionTime: 140, action: "blaster",           value: "front" },
        { actionTime: 160, action: "blaster",           value: "front" },        
        { actionTime: 180, action: "setPatternTime",    value: 0 },
    ],
    charge: [
        { actionTime: 10, action: "setRotation",        value: "pc" },
        { actionTime: 25, action: "setDefaultSpeed",    value: [0, 0, 1] },        
        { actionTime: 30, action: "setRotation",        value: "pc" },   
        { actionTime: 40, action: "blaster",            value: "front" },        
        { actionTime: 50, action: "setRotation",        value: "pc" },   
        { actionTime: 60, action: "blaster",            value: "front" },        
        { actionTime: 70, action: "setRotation",        value: "pc" },        
    ],
};

export default npcAIPattern;