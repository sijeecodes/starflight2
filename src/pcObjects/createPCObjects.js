import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { LineMaterial } from "three/addons/lines/LineMaterial";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";
import { Line2 } from "three/addons/lines/Line2.js";
import pcShipData from "./pcShipData";

function createPCShip(shipNumber = 0) {
    const loader = new GLTFLoader();
    const pcShip = new THREE.Group();
    const aimFrame = createAimFrame();

    loader.load(pcShipData[shipNumber].src, (object) => pcShip.add(object.scene));
    pcShip.add(aimFrame);
    initiatePCShip(pcShip, shipNumber);

    return pcShip;
};

function initiatePCShip(pcShip, shipNumber = 0) {
    pcShip.position.set(0, 0, 0);
    pcShip.rotation.set(0, 0, 0);
    pcShip.blasterCoolTime = 0;
    pcShip.rollCoolTime = 0;
    pcShip.energyCoolTime = 0;
    pcShip.speed = [0, 0, 0];
    pcShip.rolling = false;
    pcShip.visible = true;

    pcShip.collisionSize = pcShipData[shipNumber].data.collisionSize;
    pcShip.blasterDelay = pcShipData[shipNumber].data.blasterDelay;
    pcShip.maxSpeed = pcShipData[shipNumber].data.maxSpeed;
    pcShip.speedAccel = pcShipData[shipNumber].data.speedAccel;
    pcShip.speedDecel = pcShipData[shipNumber].data.speedDecel;
    pcShip.rollDelay = pcShipData[shipNumber].data.rollDelay;
    pcShip.rollCost = pcShipData[shipNumber].data.rollCost;
    pcShip.boostCost = pcShipData[shipNumber].data.boostCost;
    pcShip.hpMax = pcShipData[shipNumber].data.hpMax;
    pcShip.hp = pcShipData[shipNumber].data.hp;
    pcShip.hpDisplayed = pcShipData[shipNumber].data.hpDisplayed;
    pcShip.energyMax = pcShipData[shipNumber].data.energyMax;
    pcShip.energy = pcShipData[shipNumber].data.energy;
    pcShip.energyDisplayed = pcShipData[shipNumber].data.energyDisplayed;
    pcShip.energyDelay = pcShipData[shipNumber].data.energyDelay;
    pcShip.energyRecharge = pcShipData[shipNumber].data.energyRecharge;
    pcShip.shipNumber = shipNumber;
}

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
        opacity: 0.6,
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
    const blasterData = pcShipData[pcShip.shipNumber].blaster;
    let geometry, blasterColor, blasterColiSize;
    if (blasterData.shape == "sphere") {
        geometry = new THREE.SphereGeometry(blasterData.size, 5, 5);  //rad, width seg, height seg
        blasterColiSize = blasterData.size/2;
    } else if (blasterData.shape == "capsule") {
        geometry = new THREE.CapsuleGeometry(blasterData.size, blasterData.size * 8, 2, 8); //rad, h, cap seg, rad seg
        geometry.rotateX(Math.PI / 2);
        blasterColiSize = blasterData.size/4;
    }
    if (blasterData.color == "blue") blasterColor = 0x00ffff;
    if (blasterData.color == "green") blasterColor = 0x00ff00;
    if (blasterData.color == "orange") blasterColor = 0xff9900;
    if (blasterData.color == "violet") blasterColor = 0xbb00ff;

    const material = new THREE.MeshBasicMaterial({      // blue green orange red violet
        color: blasterColor,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });
    const blaster = new THREE.Mesh(geometry, material);
    blaster.position.copy(pcShip.position);
    blaster.rotation.copy(pcShip.rotation);
    blaster.collisionSize = blasterColiSize;
    blaster.power = blasterData.power;
    blaster.speed = [0, 0, 0];
    blaster.speed[0] = pcShip.speed[0];
    blaster.speed[1] = pcShip.speed[1];
    blaster.speed[2] = Math.sqrt(Math.pow(blasterData.speed, 2)
        - Math.pow(blaster.speed[0], 2)
        - Math.pow(blaster.speed[1], 2));

    return blaster;
}

export { createPCShip, createPCBlaster, initiatePCShip };