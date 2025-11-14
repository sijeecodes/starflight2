import * as THREE from "three";

function raycastHit(origin, target) {
    const raycaster = new THREE.Raycaster();
    const direction = new THREE.Vector3();
    const vertices = getVertices(origin);
    let collided = false;
    raycaster.params.Mesh.threshold = 0.01;

    for (const vertex of vertices) {
        raycaster.set(vertex, direction.subVectors(vertex, target.position).normalize());
        raycaster.far = origin.collisionSize;

        const intersects = raycaster.intersectObject(target, true);
        if (intersects.length > 0) {
            collided = true;
            break;
        }
    }

    if (collided) {
        if(target.hitMark <= 0) {
            target.traverse(
                (child) => child.isMesh ? 
                           child.material.color.set(0xff0000)
                           : null);
        }
        target.hitMark = 15;
        return true;
    }
    return false;
}

function getVertices(obj) {
    const vertices = [];
    let interval = 1;
    if (obj.type == "npcHeavy" || obj.type == "asteroid") interval = 15;

    obj.traverse((child) => {
        if (child.isMesh && child.geometry) {
            const geo = child.geometry;
            const matrix = child.matrixWorld;
            const position = geo.attributes.position;

            for (let i = 0; i < position.count; i += interval) {
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