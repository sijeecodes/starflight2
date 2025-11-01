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
    obj.targetPosition = [startingPosition[0], startingPosition[1], startingPosition[2]];
    obj.targetRotation = [0, 0, 0];
    obj.speed = [0, 0, 0];
    obj.elapsedTime = 0;
    obj.aiPatternTime = 0;
    obj.aiPatternCurrentStep = 0;
    obj.fireBlaster = "none";
    obj.npcAI = npcAIData[npcAIname];
    updateNPCAI(obj);

    npcObjects.npcs.push(obj);
    scene.add(obj);
};

function createNPCBlaster(scene, pcPos, npc, npcBlasters) {
    if (npc.fireBlaster == "none") return;

    const value = npc.fireBlaster;
    const geometry = new THREE.BoxGeometry(0.3, 0.3, 5);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0800 });
    const blaster = new THREE.Mesh(geometry, material);
    blaster.position.copy(npc.position);
    blaster.rotation.copy(npc.rotation);
    blaster.rotation.y += Math.PI;
    blaster.speed = npc.blasterSpeed;
    blaster.power = npc.power;
    blaster.collisionSize = 3;
    
    if(npc.fireBlaster == "pc") blaster.lookAt(pcPos.x, pcPos.y, pcPos.z);

    npc.fireBlaster = "none";
    scene.add(blaster);
    npcBlasters.push(blaster);
}

export { createNPCObject, createNPCBlaster };