import * as THREE from 'three';
import { initKeyState } from './ui/setKeyStates';
import { createStarGeo, createStarMaterial } from './environment/createStars';
import { createPCShip } from './pcObjects/createPCObjects';
import createBackground from './environment/createBackground';
import createLights from './environment/createLights';
import createLevelArr from './level/createLevelArr';
import setWindow from './ui/setWindow';
import updateStars from './environment/updateStars';

import gameLogic from "./gameLogic";
import mainMenuScript from './ui/mainMenuScript';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 3000);
const starGeo = createStarGeo();
let backgroundObjs = [];
let keyStates = initKeyState();
let pcObjects = { pcShip: createPCShip(), pcBlasters: [], upDownKey: "inverted" };
let npcObjects = { npcs: [], npcBlasters: [] };
let explosionObjects = { sprites: [], materials: [], velocities: [], lifetimes: [], rotations: [] };
let scene = new THREE.Scene();
scene.gameState = "mainMenu";//playing//gameOver//intro//settings//instructions//
// scene.gameState = "playing";
scene.timeStamp = 0;
scene.boostSpeed = 0;
scene.boostalbe = true;

scene.add(new THREE.Points(starGeo, createStarMaterial()));
scene.add(pcObjects.pcShip);
createBackground(scene, backgroundObjs);
createLights(scene);
createLevelArr(scene);

renderer.setPixelRatio(window.devicePixelRatio);
setWindow(window, document, keyStates, camera, renderer);

camera.position.set(50, 25, 192);
camera.lookAt(0, 0, 0);
document.getElementById("canvas").appendChild(renderer.domElement);

// camera.position.set(0, 10, -200);
// camera.rotation.set(0, 0, 0);
setInterval(animate, 1000 / 30);
function animate() {
    updateStars(scene, starGeo);
    if (scene.gameState == "playing") {
        gameLogic(scene, npcObjects, pcObjects, explosionObjects, backgroundObjs, document, camera, keyStates);
        renderer.render(scene, camera);
        return;
    }
    if (scene.gameState == "intro") {

    }
    if (scene.gameState == "mainMenu") {
        mainMenuScript(scene, document, keyStates);
    }
    if (scene.gameState == "settings") {

    }
    if (scene.gameState == "instructions") {

    }

    renderer.render(scene, camera);
}