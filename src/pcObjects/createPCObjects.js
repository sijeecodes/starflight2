import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { LineMaterial } from 'three/addons/lines/LineMaterial';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { Line2 } from 'three/addons/lines/Line2.js';

function createPCShip() {
    const loader = new GLTFLoader();
    const pcShip = new THREE.Group();
    const aimFrame = createAimFrame();

    loader.load('../artSrc/ship.glb',
        function (object) { pcShip.add(object.scene) },
        undefined,
        function (error) { console.error(error) }
    );
    pcShip.add(aimFrame);
    pcShip.collisionSize = 7;
    pcShip.blasterCoolTime = 0;
    pcShip.blasterDelay = 1;
    pcShip.speed = [0, 0, 0];
    pcShip.maxSpeed = [3, 1.5, 2.8];
    pcShip.speedAccel = [0.4, 0.2, 0.4];
    pcShip.speedDecel = [0.9, 0.9, 0.9];

    return pcShip;
};

function createPCBlaster(pcShip) {
    const blasterSpeed = 9;
    // const geometry = new THREE.BoxGeometry(1, 1, 10);
    const geometry = new THREE.SphereGeometry(3, 7, 3);      //rad, width seg, height seg
    // const geometry = new THREE.CapsuleGeometry(2, 8, 3, 7);   //rad, h, cap seg, rad seg
    // const geometry = new THREE.ConeGeometry( 2, 8, 3 );         //rad, h, rad seg
    // const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const material = new THREE.MeshStandardMaterial({ color: 0xff9900, toneMapped: false, emissive: 0xd01212, emissiveIntensity: 10 });
    const blaster = new THREE.Mesh(geometry, material);
    blaster.speed = [0, 0, 25];
    blaster.position.set(pcShip.position.x, pcShip.position.y, pcShip.position.z);

    blaster.rotation.x = pcShip.rotation.x - (90*Math.PI/180);
    blaster.rotation.y = pcShip.rotation.y;
    blaster.rotation.z = pcShip.rotation.z;
    blaster.speed[0] = -pcShip.speed[0];
    blaster.speed[1] = -pcShip.speed[1];
    blaster.speed[2] = Math.sqrt(Math.pow(blasterSpeed, 2)
                        - Math.pow(blaster.speed[0], 2)
                        - Math.pow(blaster.speed[1], 2));
    blaster.power = 1;
    blaster.collisionSize = 5;

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