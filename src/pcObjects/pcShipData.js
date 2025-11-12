const pcShipData = [
    {
        name: "Regular-Joe",
        src: "../artSrc/ship1.glb",
        desc: "Average balanced ship for most users.",
        data: {
            collisionSize: 8,
            blasterDelay: 1,
            maxSpeed: [2.5, 1.4, 4],
            speedAccel: [0.45, 0.3, 0.5],
            speedDecel: [0.92, 0.92, 0.91],
            rollDelay: 15,
            rollCost: 15,
            boostCost: 2,
            hpMax: 300,
            hp: 300,
            hpDisplayed: 300,
            energyMax: 100,
            energy: 50,
            energyDisplayed: 50,
            energyDelay: 60,
            energyRecharge: 10,
        },
        blaster: {
            speed: 10,
            power: 1,
            shape: "sphere",
            color: "blue",
            size: 3
        }
    },
    {
        name: "Bubbles",
        src: "../artSrc/ship2.glb",
        desc: "Easily pops enemies. Slow but sturdy and easy to hit enemies.",
        data: {
            collisionSize: 9,
            blasterDelay: 2,
            maxSpeed: [2.0, 1.2, 3],
            speedAccel: [0.3, 0.2, 0.4],
            speedDecel: [0.93, 0.93, 0.92],
            rollDelay: 30,
            rollCost: 30,
            boostCost: 4,
            hpMax: 450,
            hp: 450,
            hpDisplayed: 500,
            energyMax: 150,
            energy: 50,
            energyDisplayed: 50,
            energyDelay: 40,
            energyRecharge: 10,
        },
        blaster: {
            speed: 8,
            power: 2,
            shape: "sphere",
            color: "violet",
            size: 5
        }
    },
    {
        name: "Sparrow",
        src: "../artSrc/ship3.glb",
        desc: "Hard to handle, but swift and powerful.",
        data: {
            collisionSize: 7,
            blasterDelay: 1,
            maxSpeed: [3.0, 1.8, 5],
            speedAccel: [0.6, 0.4, 0.6],
            speedDecel: [0.91, 0.91, 0.90],
            rollDelay: 10,
            rollCost: 10,
            boostCost: 2,
            hpMax: 200,
            hp: 200,
            hpDisplayed: 200,
            energyMax: 80,
            energy: 50,
            energyDisplayed: 50,
            energyDelay: 60,
            energyRecharge: 10,
        },
        blaster: {
            speed: 10,
            power: 5,
            shape: "capsule",
            color: "green",
            size: 1.5
        }
    }
]

export default pcShipData;