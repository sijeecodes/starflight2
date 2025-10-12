import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createStarGeo, createStarMaterial } from './environment/createStars';
import updateStars from './environment/updateStars';
import createLights from './environment/createLights';
import createPlayerShip from './gameObjects/createPlayerShip';
import updateGameObjects from './gameObjects/updateGameObjects';

const gameLogic = function () {
  const renderer = new THREE.WebGLRenderer();
  const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 3000);
  const controls = new OrbitControls(camera, renderer.domElement); 
  const starMaterial = createStarMaterial();
  const starGeoAndVelo = createStarGeo();
  const playerShip = createPlayerShip();
  let blasters = [];
  let pcObjects = {playerShip, blasters};
  let scene = new THREE.Scene();
  scene = createLights(scene);

  
  scene.add(new THREE.Points(starGeoAndVelo.starGeo, starMaterial));
  scene.add(playerShip);



  camera.position.set(0, 0, -200);
  controls.update();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  setInterval(animate, 1000 / 30);
  function animate() {
    updateStars(starGeoAndVelo);
    updateGameObjects(pcObjects);
    controls.update();
    renderer.render(scene, camera);
  }
}

export default gameLogic;



