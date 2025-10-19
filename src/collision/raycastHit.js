import * as THREE from 'three';

function raycastHit(origin, target) {
    const raycaster = new THREE.Raycaster();
    const direction = new THREE.Vector3();
    const targetCenter = target.position;
    const vertices = getVertices(origin);
    let collided = false;
    raycaster.params.Mesh.threshold = 0.01;

    for (const vertex of vertices) {
        raycaster.set(vertex, direction.subVectors(vertex, targetCenter).normalize());
        raycaster.far = 1;

        const intersects = raycaster.intersectObject(target, true);
        if (intersects.length > 0) {
            collided = true;
            break;
        }
    }

    if (collided) {
        target.traverse((child) => {
            if (child.isMesh) child.material.color.set(0xff0000);
        });
        return true;

    } else {
        target.traverse((child) => {
            if (child.isMesh) child.material.color.set(0xffffff);
        });
    }
    return false;
}

function getVertices(obj) {
    const vertices = [];
    obj.traverse((child) => {
        if (child.isMesh && child.geometry) {
            const geo = child.geometry;
            const matrix = child.matrixWorld;
            const position = geo.attributes.position;

            for (let i = 0; i < position.count; i++) {
                const vertex = new THREE.Vector3();
                vertex.fromBufferAttribute(position, i);
                vertex.applyMatrix4(matrix);
                vertices.push(vertex);
            }
        }
    });
    return vertices;
}

export default raycastHit;