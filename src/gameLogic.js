import * as THREE from 'three';
import { createStarGeo, createStarMaterial } from './environment/createStars';
import updateStars from './environment/updateStars';
import createBackground from './environment/createBackground';
import createLights from './environment/createLights';
import createLevelArr from './Level/createLevelArr';
import { createPCShip } from './pcObjects/createPCObjects';
import { initKeyState, setKeyState, resetKeyState } from './gameStates/setKeyStates';
import collisionCheck from './collision/collisionCheck';
import updatePCObjects from './pcObjects/updatePCObjects';
import updateLevel from './Level/updateLevel';
import updateNPCObjects from './npcObjects/updateNPCObjects';
import updateExplosion from './effects/updateExplosion';
// import { OrbitControls } from 'three/addons/controls/OrbitControls'; ///////////////////////////////

const gameLogic = function () {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 3000);
  const starGeoAndVelo = createStarGeo();
  // const controls = new OrbitControls(camera, renderer.domElement); /////////////////////////////////
  let pcObjects = { pcShip: createPCShip(), pcBlasters: [] };
  let npcObjects = { npcs: [], npcBlasters: [] };
  let explosionObjects = { sprites: [], materials: [], velocities: [], lifetimes: [], rotations: [] };
  let keyStates = initKeyState();
  let scene = new THREE.Scene();
  scene.timeStamp = 0;
  scene.add(new THREE.Points(starGeoAndVelo.starGeo, createStarMaterial()));
  scene.add(pcObjects.pcShip);
  createBackground(scene);
  createLights(scene);
  createLevelArr(scene);

  window.addEventListener('keydown', (e) => keyStates = setKeyState(keyStates, e));
  window.addEventListener('keyup', (e) => keyStates = resetKeyState(keyStates, e));

  camera.position.set(0, 0, -200);
  camera.lookAt(0, 0, 0);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  setInterval(animate, 1000 / 30);
  function animate() {
    scene.timeStamp += 1;
    // let t0 = performance.now();
    updateStars(starGeoAndVelo);
    updatePCObjects(scene, camera, pcObjects, keyStates);
    updateLevel(scene, npcObjects);
    updateNPCObjects(scene, pcObjects.pcShip.position, npcObjects);
    collisionCheck(scene, pcObjects, npcObjects, explosionObjects);
    updateExplosion(explosionObjects)

    // controls.update(); ///////////////////////////////////////////////////////////
    renderer.render(scene, camera);
    // let t1 = performance.now();
    // console.log(`${t1 - t0} milliseconds`);
  }
}

export default gameLogic;



