import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { LineMaterial } from 'three/addons/lines/LineMaterial';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { Line2 } from 'three/addons/lines/Line2.js';

function createPCShip() {
    const loader = new GLTFLoader();
    const pcShip = new THREE.Group();
    const aimFrame = createAimFrame();

    loader.load('../3dSrc/ship.glb',
        function (object) { pcShip.add(object.scene) },
        undefined,
        function (error) { console.error(error) }
    );
    pcShip.add(aimFrame);
    pcShip.collisionSize = 7;
    pcShip.blasterCoolTime = 0;
    pcShip.blasterDelay = 3;
    return pcShip;
};

function createPCBlaster(position) {
    const geometry = new THREE.BoxGeometry(0.3, 0.3, 5);
    const material = new THREE.MeshStandardMaterial({ color: 0x42ff00 });
    const blaster = new THREE.Mesh(geometry, material);
    blaster.position.set(position.x, position.y, position.z);
    blaster.direction = new THREE.Vector2();
    blaster.direction.x = 0;
    blaster.direction.y = 0;
    blaster.speed = 5;
    blaster.power = 1;
    blaster.collisionSize = 2.5;

    return blaster;
}

function createAimFrame() {
    const frameGeo1 = new LineGeometry();
    frameGeo1.setPositions([
        2.8, -2.4, 0,
        -2.8, -2.4, 0,
        0, 2.0, 0,
        2.8, -2.4, 0,
    ]);
    const frameGeo2 = new LineGeometry();
    frameGeo2.setPositions([
        1.4, -1.2, 5,
        -1.4, -1.2, 5,
        0, 1.0, 5,
        1.47, -1.2, 5,
    ]);
    const lineMaterial = new LineMaterial({
        depthTest: false,
        opacity: 0.15,
        transparent: true,
        color: 0x42ff00,
        linewidth: 5,
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight)
    });
    const aimFrame = new THREE.Group();
    aimFrame.add(new Line2(frameGeo1, lineMaterial));
    aimFrame.add(new Line2(frameGeo2, lineMaterial));
    aimFrame.position.set(0, 0, 50);

    return aimFrame;
}

export { createPCShip, createPCBlaster };