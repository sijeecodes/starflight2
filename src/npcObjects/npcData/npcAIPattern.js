const npcAIPattern = {
    basicPattern: [
        { actionTime: 0, action: "move", value: [0, 0, -600] },
    ],
    loopPattern: [
        { actionTime: 20, action: "move",               value: [10, 5, 0] },
        { actionTime: 35, action: "setRotation",        value: "pc" },
        { actionTime: 50, action: "blaster",            value: "pc" },
        { actionTime: 70, action: "blaster",            value: "pc" },
        { actionTime: 110, action: "move",              value: [-10, -5, 0] },
        { actionTime: 125, action: "setRotation",       value: "pc" },
        { actionTime: 140, action: "blaster",           value: "pc" },
        { actionTime: 160, action: "blaster",           value: "pc" },        
        { actionTime: 180, action: "setPatternTime",    value: 0 },
    ],
    randomMove: [
        { actionTime: 20, action: "randomMoveTo",       value: [-20, 20, -10, 10, 150, 200] },
        { actionTime: 50, action: "setRotation",        value: "pc" },
        { actionTime: 70, action: "blaster",            value: "front" },
        { actionTime: 80, action: "blaster",            value: "front" },
        { actionTime: 100, action: "blaster",            value: "front" },
        { actionTime: 100, action: "randomMoveTo",       value: [-20, 20, -10, 10, 150, 200] },
        { actionTime: 120, action: "setRotation",       value: "pc" },        
        { actionTime: 140, action: "blaster",           value: "front" },
        { actionTime: 160, action: "blaster",           value: "front" },        
        { actionTime: 180, action: "blaster",           value: "front" },        
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