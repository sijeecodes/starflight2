const npcAIPattern = {
    basicPattern: [
        { patternTime: 20, action: "move", value: [Math.random() * 30, Math.random() * 10, Math.random() * 10 + 40] },
    ],
    loopPattern: [
        { patternTime: 20, action: "move", value: [10, 10, 10] },
        { patternTime: 60, action: "blaster", value: "Front" },
        { patternTime: 80, action: "blaster", value: "Front" },
        { patternTime: 90, action: "move", value: [-10, -10, -10] },
        { patternTime: 120, action: "blaster", value: "Front" },
        { patternTime: 140, action: "blaster", value: "Front" },        
        { patternTime: 160, action: "setPatternTime", value: 0 },
    ],
};

export default npcAIPattern;