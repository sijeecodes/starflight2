import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


function createPCShip() {
    const loader = new GLTFLoader();
    const pcShip = new THREE.Group();
    const geometry = new THREE.BoxGeometry(4.5, 1, 4);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const bodyCollisionCheckBox = new THREE.Mesh(geometry, material);

    bodyCollisionCheckBox.position.set(0, -0.2, 0);
    bodyCollisionCheckBox.visible = false;

    loader.load('../3dSrc/ship.glb',
        function (object) { pcShip.add(object.scene) },
        undefined,
        function (error) { console.error(error) }
    );
    playerShip.add(bodyCollisionCheckBox);
    playerShip.scale.set(3, 3, 3);

    return pcShip;
};

export { createPCShip, createPCBlaster };