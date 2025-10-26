const npcAIData = {
    defaultAI: { 
        timeTriggered: [ 
            { triggerTime: 0,  aiPattern: "basicPattern" }, 
            { triggerTime: 240,  aiPattern: "loopPattern" }, 
        ], 
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],   
    },      
    aiName1: { 
        timeTriggered: [ 
            { triggerTime: 0,  aiPattern: "basicPattern1" }, 
            { triggerTime: 240,  aiPattern: "loopPattern1" }, 
        ], 
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    aiName2: { 
        timeTriggered: [ 
            { triggerTime: 0,  aiPattern: "basicPattern2" }, 
            { triggerTime: 240,  aiPattern: "loopPattern2" }, 
        ], 
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    }
};

export default npcAIData;