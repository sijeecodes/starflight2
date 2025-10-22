const npcAIPattern = {
    basicPattern: [
        { actionTime: 20, action: "move", value: [Math.random() * 30, Math.random() * 10, Math.random() * 10 + 40] },
    ],
    loopPattern: [
        { actionTime: 20, action: "move",      value: [10, 10, 10] },
        { actionTime: 100, action: "blaster",   value: "Front" },
        { actionTime: 120, action: "blaster",   value: "Front" },
        { actionTime: 140, action: "move",      value: [-10, -10, -10] },
        { actionTime: 270, action: "blaster",  value: "Front" },
        { actionTime: 290, action: "blaster",  value: "Front" },        
        { actionTime: 300, action: "setPatternTime", value: 0 },
    ],
};

export default npcAIPattern;