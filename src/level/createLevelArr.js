import levelData from "./levelData";

function createLevelArr(scene) {
    scene.levelArr = levelData.map(e => e);
}

export default createLevelArr;