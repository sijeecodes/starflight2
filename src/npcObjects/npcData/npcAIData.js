const npcAIData = {
    defaultAI: { 
        timeTriggered: [ 
            { triggerTime: 10,  aiPattern: "basicPattern" }, 
            { triggerTime: 90,  aiPattern: "loopPattern" }, 
        ], 
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],   
    },      
    aiName1: { 
        timeTriggered: [ 
            { triggerTime: 10,  aiPattern: "basicPattern" }, 
            { triggerTime: 90,  aiPattern: "loopPattern" }, 
        ], 
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    }
};

export default npcAIData;