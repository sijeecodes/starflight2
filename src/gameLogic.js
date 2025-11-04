import * as THREE from 'three';
import { createStarGeo, createStarMaterial } from './environment/createStars';
import { createPCShip } from './pcObjects/createPCObjects';
import { initKeyState } from './ui/setKeyStates';
import setWindow from './ui/setWindow';
import createBackground from './environment/createBackground';
import createLights from './environment/createLights';
import createLevelArr from './level/createLevelArr';
import collisionCheck from './collision/collisionCheck';
import updateBackground from './environment/updateBackground';
import updateStars from './environment/updateStars';
import updateLevel from './level/updateLevel';
import updatePCObjects from './pcObjects/updatePCObjects';
import updateNPCObjects from './npcObjects/updateNPCObjects';
import updateExplosions from './effects/updateExplosions';
import updateGauge from './ui/updateGauge';
// import { OrbitControls } from 'three/addons/controls/OrbitControls'; ///////////////////////////////

const gameLogic = function () {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 3000);
    const starGeo = createStarGeo();
    // const controls = new OrbitControls(camera, renderer.domElement); /////////////////////////////////
    let backgroundObjs = [];
    let pcObjects = { pcShip: createPCShip(), pcBlasters: [] };
    let npcObjects = { npcs: [], npcBlasters: [] };
    let explosionObjects = { sprites: [], materials: [], velocities: [], lifetimes: [], rotations: [] };
    let keyStates = initKeyState();
    let scene = new THREE.Scene();
    scene.timeStamp = 0;
    scene.boostSpeed = 0;
    scene.add(pcObjects.pcShip);
    scene.add(new THREE.Points(starGeo, createStarMaterial()));
    createBackground(scene, backgroundObjs);
    createLights(scene);
    createLevelArr(scene);

    renderer.setPixelRatio(window.devicePixelRatio);
    setWindow(window, document, keyStates, camera, renderer);
    camera.position.set(0, 10, -200);
    document.getElementById("canvas").appendChild(renderer.domElement);

    setInterval(animate, 1000 / 30);
    function animate() {
        scene.timeStamp++;
        // let t0 = performance.now();
        updateStars(scene, starGeo);
        updateBackground(scene, backgroundObjs);
        updatePCObjects(scene, camera, pcObjects, keyStates);
        updateLevel(scene, npcObjects);
        updateNPCObjects(scene, pcObjects.pcShip.position, npcObjects);
        collisionCheck(scene, pcObjects, npcObjects, explosionObjects);
        updateExplosions(explosionObjects)
        updateGauge(document, pcObjects);
        

        // controls.update(); ///////////////////////////////////////////////////////////
        renderer.render(scene, camera);
        // let t1 = performance.now();
        // console.log(`${t1 - t0} milliseconds`);
    }
}

export default gameLogic;



