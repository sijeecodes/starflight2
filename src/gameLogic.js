import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { createStarGeo, createStarMaterial } from './createStars';
import updateStars from './updateStars';

const gameLogic = function() {
  const loader = new GLTFLoader();
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();
  const camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 1, 1000 );
  const controls = new OrbitControls(camera, renderer.domElement);
  // const playerShip = new THREE.Group();
  const directionalLight = new THREE.DirectionalLight( 0xffffff, 3 );
  directionalLight.position.set( 100, 200, 100 );
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 5120;
  directionalLight.shadow.mapSize.height = 5120;
  directionalLight.shadow.camera.bottom = -200;
  directionalLight.shadow.camera.left = -200;
  directionalLight.shadow.camera.top = 80;
  directionalLight.shadow.camera.right = 80;

  scene.add( directionalLight ); 
  scene.add( new THREE.HemisphereLight( 0xffffff, 0x444444, 5 ) );

  let starMaterial = createStarMaterial();
  let starGeo = createStarGeo();
  scene.add(new THREE.Points(starGeo, starMaterial) );

  loader.load( '../3dSrc/ship.glb', 
    function ( gltf ) {
      scene.add( gltf.scene );
    }, 
    undefined, 
    function ( error ) {
      console.error( error );
    } 
  );

  // playerShip.position.set(0, 0, -100);
  camera.position.set( 0, 10, -60 );
  controls.update();

  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  function animate() {
    // updateStars( starGeo );

    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
  }

  renderer.setAnimationLoop( animate );
}

export default gameLogic;



