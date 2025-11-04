import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { LineMaterial } from 'three/addons/lines/LineMaterial';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { Line2 } from 'three/addons/lines/Line2.js';

function createPCShip() {
    const loader = new GLTFLoader();
    const pcShip = new THREE.Group();
    const aimFrame = createAimFrame();

    loader.load('../artSrc/ship.glb', (object) => pcShip.add(object.scene));
    pcShip.add(aimFrame);
    pcShip.collisionSize = 8;
    pcShip.blasterCoolTime = 0;
    pcShip.blasterDelay = 1;
    pcShip.speed = [0, 0, 0];
    pcShip.maxSpeed = [3.0, 1.8, 4];
    pcShip.speedAccel = [0.6, 0.4, 0.5];
    pcShip.speedDecel = [0.93, 0.93, 0.90];
    pcShip.rolling = false;
    pcShip.rollCoolTime = 0;
    pcShip.rollDelay = 30;
    pcShip.rollCost = 20;
    pcShip.boostCost = 1;
    pcShip.hpMax = 100;
    pcShip.hp = 100;
    pcShip.hpDisplayed = 100;
    pcShip.energyMax = 100
    pcShip.energy = 50;
    pcShip.energyDisplayed = 50;
    pcShip.energyCoolTime = 60;
    pcShip.energyDelay = 60;
    pcShip.energyRecharge = 20;

    return pcShip;
};

function createAimFrame() {
    const frameGeo1 = new LineGeometry();
    frameGeo1.setPositions([
        2.8, -2.4, 0,
        -2.8, -2.4, 0,
        0, 2.0, 0,
        2.8, -2.4, 0
    ]);
    const frameGeo2 = new LineGeometry();
    frameGeo2.setPositions([
        1.4, -1.2, 50,
        -1.4, -1.2, 50,
        0, 1.0, 50,
        1.47, -1.2, 50
    ]);
    const lineMaterial = new LineMaterial({
        color: 0x42ff00,
        opacity: 0.3,
        linewidth: 5,
        depthTest: false,
        transparent: true,
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight)
    });
    const aimFrame = new THREE.Group();
    aimFrame.add(new Line2(frameGeo1, lineMaterial));
    aimFrame.add(new Line2(frameGeo2, lineMaterial));
    aimFrame.position.set(0, 0, 120);

    return aimFrame;
}

function createPCBlaster(pcShip) {
    const blasterSpeed = 10;
    const geometry = new THREE.SphereGeometry(3, 5, 5);  //rad, width seg, height seg
    const material = new THREE.MeshBasicMaterial({      // blue green orange red violet
        color: 0x00ffff,                // 0x00ffff  0x00ff00  0xff9900  0xff2222  0xbb00ff
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });

    const blaster = new THREE.Mesh(geometry, material);
    blaster.speed = [0, 0, 25];
    blaster.position.copy(pcShip.position);
    blaster.rotation.copy(pcShip.rotation);
    blaster.speed[0] = pcShip.speed[0];
    blaster.speed[1] = pcShip.speed[1];
    blaster.speed[2] = Math.sqrt(Math.pow(blasterSpeed, 2)
        - Math.pow(blaster.speed[0], 2)
        - Math.pow(blaster.speed[1], 2));
    blaster.power = 1;
    blaster.collisionSize = 4;

    return blaster;
}

export { createPCShip, createPCBlaster };