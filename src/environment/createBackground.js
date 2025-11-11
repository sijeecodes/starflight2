import * as THREE from 'three';

function createBackground(scene, backgroundObjs) {
    makeBackgroundObject(
        scene,
        backgroundObjs,
        '../../artSrc/back.png',
        {
            size: [800, 800],
            position: [0, 0, 1000],
            rotationY: Math.PI,
            speed: 0
        }
    );
    makeBackgroundObject(
        scene,
        backgroundObjs,
        '../../artSrc/back.png',
        {
            size: [1000, 800],
            position: [-600, 0, 400],
            rotationY: Math.PI / 4,
            speed: 0
        }
    );
    makeBackgroundObject(
        scene,
        backgroundObjs,
        '../../artSrc/back.png',
        {
            size: [1000, 800],
            position: [-700, 0, -500],
            rotationY: Math.PI / 2,
            speed: 0
        }
    );
    makeBackgroundObject(
        scene,
        backgroundObjs,
        '../../artSrc/back.png',
        {
            size: [1000, 800],
            position: [-300, -100, -1000],
            rotationY: 0,
            speed: 0
        }
    );
    makeBackgroundObject(
        scene,
        backgroundObjs,
        '../../artSrc/planet1.png',
        {
            size: [60, 60],
            position: [120, - 100, 700],
            rotationY: Math.PI,
            speed: 0.05
        }
    );
    makeBackgroundObject(
        scene,
        backgroundObjs,
        '../../artSrc/planet2.png',
        {
            size: [120, 120],
            position: [120, 50, 700],
            rotationY: Math.PI,
            speed: 0.08
        }
    );
}

function makeBackgroundObject(
    scene,
    backgroundObjs,
    fileName,
    {
        size: [sizeX, sizeY],
        position: [positionX, positionY, positionZ],
        rotationY,
        speed
    },
) {
    const backgroundGeo = new THREE.PlaneGeometry(sizeX, sizeY);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(fileName,
        function () {
            const material = new THREE.MeshBasicMaterial({ 
                map: texture, 
                side: THREE.DoubleSide, 
                transparent: true
            });
            const backgroundObj = new THREE.Mesh(backgroundGeo, material);
            backgroundObj.position.set(positionX, positionY, positionZ);
            backgroundObj.lookAt(0, 0, 0);
            backgroundObj.rotation.y = rotationY;
            backgroundObj.speed = speed;
            scene.add(backgroundObj);
            backgroundObjs.push(backgroundObj);
        },
        undefined,
        function (err) {
            console.error('Background load failed', err);
        }
    );
}

export default createBackground;