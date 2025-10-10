import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createStarGeo, createStarMaterial } from './createStars';
import updateStars from './updateStars';
import createPlayerShip from './createPlayerShip';

const gameLogic = function () {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 1, 3000);
  const controls = new OrbitControls(camera, renderer.domElement);
  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
  const starMaterial = createStarMaterial();
  const starGeoAndVelo = createStarGeo();
  const playerShip = createPlayerShip();

  directionalLight1.position.set(30, 10, 100);
  directionalLight2.position.set(-30, -10, 100);
  camera.position.set(0, 0, -200);
  controls.update();

  scene.add(directionalLight1);
  scene.add(directionalLight2);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 5));
  scene.add(new THREE.Points(starGeoAndVelo.starGeo, starMaterial));
  scene.add(playerShip);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
  setInterval(animate, 1000 / 30);

  function animate() {
    updateStars(starGeoAndVelo);
    controls.update();
    renderer.render(scene, camera);
  }
}

export default gameLogic;



