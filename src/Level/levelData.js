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


    {
        eventTime: 10,
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

    //// drone squad of 8
    ////top left
    {
        eventTime: 100,
        npcAIname: "droneAIrandom1Q",
        npcBasic: "droneBasic",
        startingPosition: [20, 10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "droneAIrandom1Q",
        npcBasic: "droneBasic",
        startingPosition: [40, 10, 700]
    },
    ///top right
    {
        eventTime: 100,
        npcAIname: "droneAIrandom2Q",
        npcBasic: "droneBasic",
        startingPosition: [-20, 10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "droneAIrandom2Q",
        npcBasic: "droneBasic",
        startingPosition: [-40, 10, 700]
    },
    ////bottom left
    {
        eventTime: 100,
        npcAIname: "droneAIrandom3Q",
        npcBasic: "droneBasic",
        startingPosition: [20, -10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "droneAIrandom3Q",
        npcBasic: "droneBasic",
        startingPosition: [40, -10, 700]
    },
    ////bottom right
    {
        eventTime: 100,
        npcAIname: "droneAIrandom4Q",
        npcBasic: "droneBasic",
        startingPosition: [-20, -10, 700]
    },
    {
        eventTime: 100,
        npcAIname: "droneAIrandom4Q",
        npcBasic: "droneBasic",
        startingPosition: [-40, -10, 700]
    },

    {
        eventTime: 500,
        npcAIname: "fighterAIrandom1H",
        npcBasic: "fighterBasic",
        startingPosition: [30, 0, 700]
    },

    {
        eventTime: 650,
        npcAIname: "destroyerAIrandom2H",
        npcBasic: "destroyerBasic",
        startingPosition: [-30, 0, 700]
    },
];

export default levelData;