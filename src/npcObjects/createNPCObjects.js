import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import npcBasicData from './npcData/npcBasicData';
import npcAIData from './npcData/npcAIData';
import updateNPCAI from './updateNPCAI';

function createNPCObject(scene, npcObjects, { npcAIname, npcBasic, startingPosition }) {
    const objBasic = npcBasicData[npcBasic];
    let obj = new THREE.Group();
    const loader = new GLTFLoader();

    loader.load(objBasic.npcGlb, (object) => obj.add(object.scene));
    obj = deepCopy(obj, objBasic);
    obj.npcAI = deepCopy(obj.npcAI, npcAIData[npcAIname]);
    obj.position.set(startingPosition[0], startingPosition[1], startingPosition[2]);
    obj.targetPosition = [startingPosition[0], startingPosition[1], startingPosition[2]];
    obj.elapsedTime = 0;
    obj.aiPatternTime = 0;
    obj.aiPatternCurrentStep = 0;
    obj.fireBlaster = "none";
    obj.hitMark = 0;
    npcObjects.npcs.push(obj);
    updateNPCAI(obj);
    scene.add(obj);
};

function createNPCBlaster(scene, pcPos, npc, npcBlasters) {
    if (npc.fireBlaster == "none") return;

    // const geometry = new THREE.SphereGeometry(4, 8, 8); //rad, width seg, height seg
    const geometry = new THREE.CapsuleGeometry(0.8, 3, 2, 8); //rad, h, cap seg, rad seg
    geometry.rotateX(Math.PI / 2); 
    const material = new THREE.MeshBasicMaterial({      // blue green orange red violet
        color: 0xff0800,                // 0x00ffff  0x00ff00  0xff9900  0xff2222  0xbb00ff
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });
    const blaster = new THREE.Mesh(geometry, material);
    blaster.position.copy(npc.position);
    blaster.rotation.copy(npc.rotation);
    blaster.rotation.y += Math.PI;
    blaster.speed = npc.blasterSpeed;
    blaster.power = npc.power;
    blaster.collisionSize = 6;
    
    if (npc.fireBlaster == "pc") blaster.lookAt(pcPos.x, pcPos.y, pcPos.z);
    npc.fireBlaster = "none";
    scene.add(blaster);
    npcBlasters.push(blaster);

    console.log(blaster.position.z);
}

function deepCopy(target = {}, data = {}) {
    if (typeof data != 'object' || data == null) return target;

    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            target[key] = value.map(item => {
                if (typeof item == 'object' && item != null) {
                    return deepCopy({}, item);
                } else return item;
            });
        } else if (typeof value == 'object' && value != null) {
            deepCopy(target[key] || {}, value);
        } else {
            target[key] = value;
        }
    }
    return target;
}

export { createNPCObject, createNPCBlaster };