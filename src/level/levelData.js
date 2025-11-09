const levelData = [
    // {
    //     eventTime: 10,
    //     npcAIname: "droneAI",
    //     npcBasic: "droneBasic",
    //     startingPosition: [30, 0, 700]
    // },
    // {
    //     eventTime: 10,
    //     npcAIname: "bomberAI",
    //     npcBasic: "bomberBasic",
    //     startingPosition: [30, 0, 700]
    // },
    // {
    //     eventTime: 10,
    //     npcAIname: "fighterAI",
    //     npcBasic: "fighterBasic",
    //     startingPosition: [30, 0, 700]
    // },
    // {
    //     eventTime: 10,
    //     npcAIname: "destroyerAI",
    //     npcBasic: "destroyerBasic",
    //     startingPosition: [30, 0, 700]
    // },
    // {
    //     eventTime: 10,
    //     npcAIname: "cruiserAI",
    //     npcBasic: "cruiserBasic",
    //     startingPosition: [30, 0, 700]
    // },
    // {
    //     eventTime: 10,
    //     npcAIname: "asteroidAI",
    //     npcBasic: "asteroidBasic",
    //     startingPosition: [10, 0, 700]
    // },





    // Cruiser Carrier
    {
        eventTime: 10, // First Drone after 100, position 650. -50 position every 50 frame.
        npcAIname: "cruiserAIstaticCarrier",
        npcBasic: "carrierBasic",
        startingPosition: [105, 0, 700]
    },
    {
        eventTime: 10,
        npcAIname: "destroyerAIrandom2HR",
        npcBasic: "destroyerBasic",
        startingPosition: [-10, 15, 700]
    },
    {
        eventTime: 90,
        npcAIname: "droneAIrandom8hQFS",
        npcBasic: "droneBasic",
        startingPosition: [100, -5, 650]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom1HR",
        npcBasic: "fighterBasic",
        startingPosition: [5, 5, 700]
    },
    {
        eventTime: 40,
        npcAIname: "droneAIrandom3hQFS",
        npcBasic: "droneBasic",
        startingPosition: [100, -5, 600]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom6hQFS",
        npcBasic: "droneBasic",
        startingPosition: [100, -5, 550]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom1hQFS",
        npcBasic: "droneBasic",
        startingPosition: [100, -5, 500]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom2Q",
        npcBasic: "fighterBasic",
        startingPosition: [-30, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom4Q",
        npcBasic: "fighterBasic",
        startingPosition: [-30, -15, 700]
    },
    {
        eventTime: 30,
        npcAIname: "droneAIrandom4hQFS",
        npcBasic: "droneBasic",
        startingPosition: [100, -5, 450]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom7hQFS",
        npcBasic: "droneBasic",
        startingPosition: [100, -5, 400]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom2hQFS",
        npcBasic: "droneBasic",
        startingPosition: [100, -5, 350]
    },
    {
        eventTime: 50,
        npcAIname: "droneAIrandom5hQFS",
        npcBasic: "droneBasic",
        startingPosition: [100, -5, 300]
    },

    // Bombers
    {
        eventTime: 100,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [35, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [-35, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [35, -15, 700]
    },
        {
        eventTime: 10,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [-35, -15, 700]
    },

    {
        eventTime: 90,
        npcAIname: "droneAIrandom1hQ",
        npcBasic: "droneBasic",
        startingPosition: [20, 10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom2hQ",
        npcBasic: "droneBasic",
        startingPosition: [40, 10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom3hQ",
        npcBasic: "droneBasic",
        startingPosition: [-20, 10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom4hQ",
        npcBasic: "droneBasic",
        startingPosition: [-40, 10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom5hQ",
        npcBasic: "droneBasic",
        startingPosition: [20, -10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom6hQ",
        npcBasic: "droneBasic",
        startingPosition: [40, -10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom7hQ",
        npcBasic: "droneBasic",
        startingPosition: [-20, -10, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom8hQ",
        npcBasic: "droneBasic",
        startingPosition: [-40, -10, 700]
    },


    // Fighters & Destroyer
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom1H",
        npcBasic: "fighterBasic",
        startingPosition: [30, 0, 700]
    },
    {
        eventTime: 10,
        npcAIname: "destroyerAIrandom2H",
        npcBasic: "destroyerBasic",
        startingPosition: [-30, 0, 700]
    },
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom1H",
        npcBasic: "fighterBasic",
        startingPosition: [30, 0, 700]
    },
    // Bombers
    {
        eventTime: 100,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [35, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "bomberAIstatic",
        npcBasic: "bomberBasic",
        startingPosition: [-35, 15, 700]
    },
    // Destroyers
    {
        eventTime: 300,
        npcAIname: "destroyerAIrandom1HFC",
        npcBasic: "destroyerBasic",
        startingPosition: [20, 5, 700]
    },
    {
        eventTime: 10,
        npcAIname: "destroyerAIrandom2HFC",
        npcBasic: "destroyerBasic",
        startingPosition: [-20, 5, 700]
    },
    // Fighters
    {
        eventTime: 400,
        npcAIname: "fighterAIrandom1QRC",
        npcBasic: "fighterBasic",
        startingPosition: [30, 15, 700]
    },    
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom2QRC",
        npcBasic: "fighterBasic",
        startingPosition: [-30, 15, 700]
    },
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom3QRC",
        npcBasic: "fighterBasic",
        startingPosition: [30, -10, 700]
    },    
    {
        eventTime: 10,
        npcAIname: "fighterAIrandom4QRC",
        npcBasic: "fighterBasic",
        startingPosition: [-30, -10, 700]
    },

    // Asteroids
    {
        eventTime: 600,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: [3, 15, 700]

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"

    },
    {
        eventTime: 10,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: "random"
    },
    {
        eventTime: 5,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: [-13, 15, 700]
    },
    {
        eventTime: 5,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: [16, 2, 700]

    },
    {
        eventTime: 5,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: [-17, 9, 700]

    },
    {
        eventTime: 5,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid2Basic",
        startingPosition: [9, 12, 700]
    },
    {
        eventTime: 5,
        npcAIname: "asteroidAI",
        npcBasic: "asteroid1Basic",
        startingPosition: [-2, 5, 700]

    },

    // Boss
    {
        eventTime: 10,
        npcAIname: "bossAI",
        npcBasic: "bossBasic",
        startingPosition: [0, 0, 700]
    },

    // Drones
    {
        eventTime: 450,
        npcAIname: "droneAIrandom1hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, 20, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom2hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, 7, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom3hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, 20, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom4hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, 7, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom5hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, -20, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom6hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, -7, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom7hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, -20, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom8hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, -7, 700]
    },

    // Fighters & Destroyers
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom1HF",
        npcBasic: "fighterBasic",
        startingPosition: [35, 10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "destroyerAIrandom3QF",
        npcBasic: "destroyerBasic",
        startingPosition: [35, -10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom2QF",
        npcBasic: "fighterBasic",
        startingPosition: [-35, 10, 700]
    },

    {
        eventTime: 100,
        npcAIname: "destroyerAIrandom4QF",
        npcBasic: "destroyerBasic",
        startingPosition: [-35, -10, 700]
    },

    // Drones
    {
        eventTime: 450,
        npcAIname: "droneAIrandom1hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, 20, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom2hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, 7, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom3hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, 20, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom4hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, 7, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom5hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, -20, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom6hQF",
        npcBasic: "droneBasic",
        startingPosition: [40, -7, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom7hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, -20, 700]
    },
    {
        eventTime: 10,
        npcAIname: "droneAIrandom8hQF",
        npcBasic: "droneBasic",
        startingPosition: [-40, -7, 700]
    },

    // Fighters & Destroyers
    {
        eventTime: 100,
        npcAIname: "destroyerAIrandom1HFC",
        npcBasic: "destroyerBasic",
        startingPosition: [35, 10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "destroyerAIrandom2HFC",
        npcBasic: "destroyerBasic",
        startingPosition: [-35, 10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom3QRC",
        npcBasic: "fighterBasic",
        startingPosition: [35, -10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "fighterAIrandom4QRC",
        npcBasic: "fighterBasic",
        startingPosition: [-35, -10, 700]
    },
];

export default levelData;