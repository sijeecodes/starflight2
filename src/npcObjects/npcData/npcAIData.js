const npcAIData = {
    defaultAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "basicPattern" },
            { triggerTime: 250, aiPattern: "loopPattern" },
            { triggerTime: 300, aiPattern: "randomMove" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    droneAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 500, aiPattern: "randomMove" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    droneAIrandom1Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1Q" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    droneAIrandom2Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2Q" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    droneAIrandom3Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3Q" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    droneAIrandom1H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1H" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    droneAIrandom2H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2H" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
        droneAIrandom4Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4Q" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },

    bomberAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "bomberIntroPattern" },
            { triggerTime: 550, aiPattern: "loopPattern" },
            { triggerTime: 900, aiPattern: "randomMove" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    bomberAIstatic: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "bomberIntroPattern" },
            { triggerTime: 500, aiPattern: "bomberDefaultMoveZ" },
            { triggerTime: 500, aiPattern: "bomberBlastLoop" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },

    fighterAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "loopPattern" },
            { triggerTime: 300, aiPattern: "randomMove" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    fighterAIrandom1H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove1H" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },

    destroyerAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "loopPattern" },
            { triggerTime: 300, aiPattern: "randomMove" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    destroyerAIrandom2H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2H" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },

    cruiserAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "cruiserIntroPattern" },
            { triggerTime: 600, aiPattern: "loopPattern" },
            { triggerTime: 300, aiPattern: "randomMove" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    },
    asteroidAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "asteroidIntroPattern" },
        ],
        hpTriggered: [
            // { triggerHP: 10,  aiPattern: "basicPattern" }, 
            // { triggerHP: 90,  aiPattern: "loopPattern" }, 
        ],
    }
};

export default npcAIData;