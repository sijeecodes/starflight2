import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import npcBasicData from './npcData/npcBasicData';
import npcAIData from './npcData/npcAIData';
import updateNPCAI from './updateNPCAI';

function createNPCObject(scene, npcObjects, { npcAIname, npcBasic, startingPosition }) {
    const objBasic = npcBasicData[npcBasic];
    const obj = new THREE.Group();
    const loader = new GLTFLoader();

    loader.load(objBasic.npcGlb,
        function (object) { obj.add(object.scene) },
        undefined,
        function (error) { console.error(error) }
    );

    for (const [key, value] of Object.entries(objBasic)) {
        obj[key] = value;
    }
    obj.position.set(startingPosition[0], startingPosition[1], startingPosition[2]);

    obj.elapsedTime = 0;
    obj.aiPatternTime = 0;
    obj.aiPatternCurrentStep = 0;
    obj.npcAI = npcAIData[npcAIname];
    updateNPCAI(obj);

    npcObjects.npcs.push(obj);
    scene.add(obj);

    return npcObjects;
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

export { createNPCObject, createNPCBlaster };