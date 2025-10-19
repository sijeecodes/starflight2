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
    pcShip.blasterDelay = 20;
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
    blaster.speed = 3;
    blaster.power = 1;
    blaster.collisionSize = 2.5;

    return blaster;
}

function createAimFrame() {
    const frameGeo1 = new LineGeometry();
    frameGeo1.setPositions([
        0.7, -0.6, 0,
        -0.7, -0.6, 0,
        0, 0.5, 0,
        0.7, -0.6, 0,
    ]);
    const frameGeo2 = new LineGeometry();
    frameGeo2.setPositions([
        0.35, -0.3, 5,
        -0.35, -0.3, 5,
        0, 0.25, 5,
        0.35, -0.3, 5,
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
    aimFrame.position.set(0, 0, 40);

    return aimFrame;
}

export { createPCShip, createPCBlaster };