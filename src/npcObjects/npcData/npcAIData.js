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
    droneAIrandom1H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1H" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2H" },
        ],
        hpTriggered: [],
    },
    droneAIrandom1Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1Q" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2Q" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3Q" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4Q" },
        ],
        hpTriggered: [],
    },
    droneAIrandom1hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove5hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove6hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom7hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove7hQ" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQ: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove8hQ" },
        ],
        hpTriggered: [],
    },


    bomberAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "bomberIntroPattern" },
            { triggerTime: 550, aiPattern: "loopPattern" },
            { triggerTime: 900, aiPattern: "randomMove" },
        ],
        hpTriggered: [],
    },
    bomberAIstatic: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "bomberIntroPattern" },
            { triggerTime: 500, aiPattern: "bomberDefaultMoveZ" },
            { triggerTime: 500, aiPattern: "bomberBlastLoop" },
        ],
        hpTriggered: [],
    },

    fighterAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "loopPattern" },
            { triggerTime: 300, aiPattern: "randomMove" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom1H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove1H" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove2H" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom1Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove1Q" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove2Q" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom3Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove3Q" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom4Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove4Q" },
        ],
        hpTriggered: [],
    },

    destroyerAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "loopPattern" },
            { triggerTime: 300, aiPattern: "randomMove" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom1H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1H" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom2H: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2H" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom1Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1Q" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom2Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2Q" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom3Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove3Q" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom4Q: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove4Q" },
        ],
        hpTriggered: [],
    },

    cruiserAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "cruiserIntroPattern" },
            { triggerTime: 600, aiPattern: "loopPattern" },
            { triggerTime: 300, aiPattern: "randomMove" },
        ],
        hpTriggered: [],
    },
    
    asteroidAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "asteroidIntroPattern" },
        ],
        hpTriggered: [],
    },

    bossAI: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "bossIntroPattern" },
            { triggerTime: 10, aiPattern: "bossFirstAttack" },
            { triggerTime: 500, aiPattern: "bossLoop" },
        ],
        hpTriggered: [
            { triggerHP: 75,  aiPattern: "bossFinalLoop" }, 
        ],
    },

    droneAIrandom1hQB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove1hQB" },
        ],
        hpTriggered: [],
    },
    droneAIrandom2hQB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove2hQB" },
        ],
        hpTriggered: [],
    },
    droneAIrandom3hQB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove3hQB" },
        ],
        hpTriggered: [],
    },
    droneAIrandom4hQB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove4hQB" },
        ],
        hpTriggered: [],
    },
    droneAIrandom5hQB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove5hQB" },
        ],
        hpTriggered: [],
    },
    droneAIrandom6hQB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove6hQB" },
        ],
        hpTriggered: [],
    },
    droneAIrandom7hQB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove7hQB" },
        ],
        hpTriggered: [],
    },
    droneAIrandom8hQB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "droneIntroPattern" },
            { triggerTime: 200, aiPattern: "droneRandomMove8hQB" },
        ],
        hpTriggered: [],
    },

    fighterAIrandom1HB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove1HB" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2HB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove2HB" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom1QB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove1QB" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom2QB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove2QB" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom3QB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove3QB" },
        ],
        hpTriggered: [],
    },
    fighterAIrandom4QB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "fighterIntroPattern" },
            { triggerTime: 250, aiPattern: "fighterRandomMove4QB" },
        ],
        hpTriggered: [],
    },

    destroyerAIrandom1HB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1HB" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom2HB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2HB" },
        ],
        hpTriggered: [],
    },
    
    destroyerAIrandom1QB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove1QB" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom2QB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove2QB" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom3QB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove3QB" },
        ],
        hpTriggered: [],
    },
    destroyerAIrandom4QB: {
        timeTriggered: [
            { triggerTime: 0, aiPattern: "destroyerIntroPattern" },
            { triggerTime: 300, aiPattern: "destroyerRandomMove4QB" },
        ],
        hpTriggered: [],
    },
};

export default npcAIData;