import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

// npcObjects.npcShips[].children[0].children[0] : ship 3D object
// npcObjects.npcShips[].position   : position
// npcObjects.npcShips[].collisionSize : length of ship
// npcObjects.npcShips[].ai         : npc AI name
// npcObjects.npcShips[].hp         : npc HP
// npcObjects.npcShips[].power      : npc Power
// npcObjects.npcShips[].speed      : npc Speed

// npcObjects.npcBlasters[].geometry : blaster box geometry
// npcObjects.npcBlasters[].size     : length of blaster
// npcObjects.npcBlasters[].position : blaster position
// npcObjects.npcBlasters[].power    : blaster power

function createNPCShip() {
    const loader = new GLTFLoader();
    const ship = new THREE.Group();

    loader.load('../3dSrc/npcShip1.glb',
        function (object) { ship.add(object.scene) },
        undefined,
        function (error) { console.error(error) }
    );
    ship.position.set(Math.random() * 20, 0, 100);
    ship.ai = "npcAI";
    ship.hp = 2;
    ship.power = 1;
    ship.speed = 1;
    ship.collisionSize = 7;
    ship.DoubleSide = true; 

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
    blaster.collisionSize = 2.5;

    return blaster;
}

export { createNPCShip, createNPCBlaster };