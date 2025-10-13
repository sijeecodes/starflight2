import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { LineSegments2 } from 'three/addons/lines/LineSegments2';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry';
import { LineMaterial } from 'three/addons/lines/LineMaterial';

function createPCShip() {
    const loader = new GLTFLoader();
    const pcShip = new THREE.Group();
    const pcShipGeo = new THREE.BoxGeometry(4.5, 1, 4);
    const pcMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const bodyCollisionBox = new THREE.Mesh(pcShipGeo, pcMaterial);
    const aimFrame = createAimFrame();

    bodyCollisionBox.position.set(0, -0.2, 0);
    bodyCollisionBox.visible = false;

    loader.load('../3dSrc/ship.glb',
        function (object) { pcShip.add(object.scene) },
        undefined,
        function (error) { console.error(error) }
    );
    pcShip.add(bodyCollisionBox);
    pcShip.add(aimFrame);
    pcShip.scale.set(3, 3, 3);

    return pcShip;
};

function createPCBlaster(position) {
    const geometry = new THREE.BoxGeometry(0.2, 0.2, 5);
    const material = new THREE.MeshStandardMaterial({ color: 0x42ff00 });
    const blaster = new THREE.Mesh(geometry, material);
    blaster.position.set(position.x, position.y, position.z);
    blaster.direction = new THREE.Vector2();
    blaster.direction.x = 0;
    blaster.direction.y = 0;
    blaster.speed = 1;
    blaster.power = 1;

    return blaster;
}

function createAimFrame() {
    const wireFrameGeo = new THREE.WireframeGeometry(new THREE.ConeGeometry(1, 7, 3));
    const lineSegment = new THREE.LineSegments(wireFrameGeo);
    const aimFrameGeo = new LineSegmentsGeometry().fromLineSegments(lineSegment);
    const lineMaterial = new LineMaterial({
        opacity: 0.1,
        transparent: true,
        color: 0x42ff00,
        linewidth: 3,
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight)
    });
    const aimFrame = new LineSegments2(aimFrameGeo, lineMaterial);
    aimFrame.position.set(0, 0, 50);
    aimFrame.rotation.set((90*Math.PI/180), (60*Math.PI/180), 0);

    return aimFrame;
}

export { createPCShip, createPCBlaster };