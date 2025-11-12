import * as THREE from "three";

function createExplosion(scene, target, type, { sprites, materials, velocities, lifetimes, rotations }) {
    const texture = new THREE.TextureLoader().load("../artSrc/fire.png");
    const existingSprites = sprites.length;
    let count = 0;

    if (type == "hit")     count = 7;
    if (type == "explode") count = 40;

    for (let i = existingSprites; i < existingSprites + count; i++) {
        const material = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexColors: true,
            color: [1, 2, 0.5],
            rotation: 0,
        });
        const sprite = new THREE.Sprite(material);

        if (type == "hit") {
            velocities[i] = {
                x: Math.random() * 0.04 - 0.02,
                y: Math.random() * 0.04 - 0.02,
                z: Math.random() * 0.04 - 0.02
            };
            lifetimes[i] = 0.5 + Math.random() / 2;
            rotations[i] = (Math.random() - 0.5) * 8;
            materials[i] = material;
            sprite.position.set(
                target.position.x,
                target.position.y,
                target.position.z - target.collisionSize
            );
        }
        else if (type == "explode") {
            velocities[i] = {
                x: Math.random() * 0.24 - 0.12,
                y: Math.random() * 0.24 - 0.12,
                z: Math.random() * 0.24 - 0.12
            };
            lifetimes[i] = 3 + Math.random();
            rotations[i] = (Math.random() - 0.5) * 8;
            materials[i] = material;
            sprite.position.set(
                target.position.x, 
                target.position.y, 
                target.position.z
            );
        }
        scene.add(sprite);
        sprites.push(sprite);
    }
}

export default createExplosion;