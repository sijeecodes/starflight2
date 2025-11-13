import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { LineMaterial } from "three/addons/lines/LineMaterial";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";
import { Line2 } from "three/addons/lines/Line2.js";
import pcShipData from "./pcShipData";
import playSound from "../effects/playSound";

const BLASTER_VOLUME = 0.2;
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
    const shipData = pcShipData[shipNumber].data;

    pcShip.position.set(0, 0, 0);
    pcShip.rotation.set(0, 0, 0);
    pcShip.blasterCoolTime = 0;
    pcShip.rollCoolTime = 0;
    pcShip.energyCoolTime = 0;
    pcShip.speed = [0, 0, 0];
    pcShip.rolling = false;
    pcShip.visible = true;

    pcShip.collisionSize    = shipData.collisionSize;
    pcShip.blasterDelay     = shipData.blasterDelay;
    pcShip.maxSpeed         = shipData.maxSpeed;
    pcShip.speedAccel       = shipData.speedAccel;
    pcShip.speedDecel       = shipData.speedDecel;
    pcShip.rollDelay        = shipData.rollDelay;
    pcShip.rollCost         = shipData.rollCost;
    pcShip.boostCost        = shipData.boostCost;
    pcShip.hpMax            = shipData.hpMax;
    pcShip.hp               = shipData.hp;
    pcShip.hpDisplayed      = shipData.hpDisplayed;
    pcShip.energyMax        = shipData.energyMax;
    pcShip.energy           = shipData.energy;
    pcShip.energyDisplayed  = shipData.energyDisplayed;
    pcShip.energyDelay      = shipData.energyDelay;
    pcShip.energyRecharge   = shipData.energyRecharge;
    pcShip.shipNumber       = shipNumber;
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
    playSound(pcShipData[pcShip.shipNumber].blaster.soundSrc, BLASTER_VOLUME);

    const blasterData = pcShipData[pcShip.shipNumber].blaster;
    let geometry, blasterColor, blasterColiSize;

    if (blasterData.shape == "sphere") {
        geometry = new THREE.SphereGeometry(blasterData.size, 5, 5);  //rad, width seg, height seg
        blasterColiSize = blasterData.size / 2 + 1;

    } else if (blasterData.shape == "capsule") {
        geometry = new THREE.CapsuleGeometry(blasterData.size, 20, 2, 8); //rad, h, cap seg, rad seg
        geometry.rotateX(Math.PI / 2);
        blasterColiSize = 10;
    }

    if (blasterData.color == "blue") blasterColor = 0x00ffff;
    if (blasterData.color == "green") blasterColor = 0x00ff00;
    if (blasterData.color == "orange") blasterColor = 0xff9900;
    if (blasterData.color == "violet") blasterColor = 0xbb00ff;

    const material = new THREE.MeshBasicMaterial({
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