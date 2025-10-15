import * as THREE from 'three';
import { createStarGeo, createStarMaterial } from './environment/createStars';
import updateStars from './environment/updateStars';
import createLights from './environment/createLights';
import { createPCShip } from './gameObjects/createPCObjects';
import updateGameObjects from './gameObjects/updateGameObjects';
import { initKeyState, setKeyState, resetKeyState } from './gameStates/setKeyStates';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

const gameLogic = function () {
  const renderer = new THREE.WebGLRenderer({antialias: true});
  const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 3000);
  const starMaterial = createStarMaterial();
  const starGeoAndVelo = createStarGeo();
  const controls = new OrbitControls( camera, renderer.domElement );
  let pcObjects = { pcShip: createPCShip(), pcBlasters: [] };
  let npcObjects = { npcShips: [], npcBlasters: [] };
  let keyStates = initKeyState();
  let scene = new THREE.Scene();
  scene = createLights(scene);
  scene.add(new THREE.Points(starGeoAndVelo.starGeo, starMaterial));
  scene.add(pcObjects.pcShip);

  window.addEventListener('keydown', (e) => keyStates = setKeyState(keyStates, e));
  window.addEventListener('keyup', (e) => keyStates = resetKeyState(keyStates, e));

  camera.position.set(0, 0, -200);
  camera.lookAt(0, 0, 0);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  setInterval(animate, 1000 / 30);
  function animate() {
    // let t0 = performance.now();
    updateStars(starGeoAndVelo);
    scene = updateGameObjects(scene, pcObjects, npcObjects, keyStates);
    controls.update();
    renderer.render(scene, camera);
    // let t1 = performance.now();
    // console.log(`${t1 - t0} milliseconds`);
  }
}

export default gameLogic;



