import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


function createPlayerShip() {
    const loader = new GLTFLoader();
    const playerShip = new THREE.Group();
    const geometry = new THREE.BoxGeometry( 4.5, 1, 4 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const bodyCollisionCheckBox = new THREE.Mesh( geometry, material );

    bodyCollisionCheckBox.position.set(0, -0.2, 0);
    bodyCollisionCheckBox.visible = false;
    // console.log(bodyCollisionCheckBox);

    loader.load('../3dSrc/ship.glb',
        function (object) {
            playerShip.add(object.scene);
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );

    // const geo = new THREE.BufferGeometry();
    // const vertices = new Float32Array([
    //     -1.0, -1.0,  1.0, // v0
    //     1.0, -1.0,  1.0, // v1
    //     1.0,  1.0,  1.0, // v2

    //     1.0,  1.0,  1.0, // v3
    //     -1.0,  1.0,  1.0, // v4
    //     -1.0, -1.0,  1.0  // v5
    // ]);
    // const indices = [
    //     0, 1, 2,
    //     2, 3, 0,
    // ];
    // geo.setIndex( indices );
    // geo.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    // const mat = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    // const mesh = new THREE.Mesh( geo, mat );

    playerShip.add( bodyCollisionCheckBox );
    playerShip.scale.set(3, 3, 3);
    
    return playerShip;
};

export default createPlayerShip;