import * as THREE from 'three';

function createBackground(scene) {
    makeBackgroundObject(scene, 800,800, '../../artSrc/back2.png', 0, 0, 1000)
    makeBackgroundObject(scene, 60,60, '../../artSrc/planet.png', 120, -100, 700)
    makeBackgroundObject(scene, 120, 120, '../../artSrc/planet2.png', 150, 60, 400)
}

function makeBackgroundObject(scene, sizeX, sizeY, fileName, positionX, positionY, positionZ) {
    const backgroundGeo = new THREE.PlaneGeometry(sizeX, sizeY);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(fileName,
        function () {
            const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
            const backgroundObj = new THREE.Mesh(backgroundGeo, material);
            backgroundObj.position.set(positionX, positionY, positionZ);
            scene.add(backgroundObj);
        },
        undefined,
        function (err) {
            console.error('An error occurred loading the texture:', err);
        }
    );
}

export default createBackground;