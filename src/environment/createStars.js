import * as THREE from 'three';

const createStarGeo = function () {
    const starCount = 100;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const starVelo = new Array(starCount).fill(0);

    for (let i = 0; i < starCount; i++) {
        positions[i * 3] = Math.random() * 150 - 75;
        positions[i * 3 + 1] = Math.random() * 150 - 75;
        positions[i * 3 + 2] = (Math.random() * 1000);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return { starGeo, starVelo };
};

const createStarMaterial = function () {
    return new THREE.PointsMaterial({
        color: 0xffffff,
        size: 3.3,
        transparent: true,
        map: new THREE.TextureLoader().load('artSrc/star.png'),
    });
};

export { createStarGeo, createStarMaterial };