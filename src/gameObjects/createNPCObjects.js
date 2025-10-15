import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';


function createNPCShip() {
    const loader = new GLTFLoader();
    const ship = new THREE.Group();
    const shipGeo = new THREE.BoxGeometry(4.5, 1, 4);
    const bodyCollisionBox = new THREE.Mesh(shipGeo);

    bodyCollisionBox.position.set(0, -0.2, 0);
    bodyCollisionBox.visible = false;

    loader.load('../3dSrc/npcShip1.glb',
        function (object) { ship.add(object.scene) },
        undefined,
        function (error) { console.error(error) }
    );
    ship.add(bodyCollisionBox);
    ship.scale.set(3, 3, 3);
    ship.position.set(0, 0, 100);
    ship.rotation.set(0, (90*Math.PI/180), 0)

    return ship;
};

function createNPCBlaster(position) {
    const geometry = new THREE.BoxGeometry(0.3, 0.3, 5);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0800 });
    const blaster = new THREE.Mesh(geometry, material);
    blaster.position.set(position.x, position.y, position.z);
    blaster.direction = new THREE.Vector2();
    blaster.direction.x = 0;
    blaster.direction.y = 0;
    blaster.speed = -1;
    blaster.power = 1;

    return blaster;
}

export { createNPCShip, createNPCBlaster };