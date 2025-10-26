function updateNPCPosition(scene, obj) {
    console.log(obj, scene);

    if (obj.targetPosition.length < 3) return;

    let currentPos = [obj.position.x, obj.position.y, obj.position.z];
    if (currentPos == obj.targetPosition && obj.speed == [0, 0, 0]) return;

    let time = estimateTime(currentPos, obj.targetPosition, obj.maxSpeed);
    if (time > 1) {
        let targetSpeed = obj.targetPosition.map((p, index) => {
            let result = (p - currentPos[index]) / time;
            return result;
        });
        targetSpeed.forEach((tSpeed, index) => {
            if (tSpeed >= 0) {
                if (tSpeed > obj.speed[index]) {
                    obj.speed[index] += obj.speedAccel[index];
                    if (tSpeed < obj.speed[index]) obj.speed[index] = tSpeed;
                }
            } else {
                if (tSpeed < obj.speed[index]) {
                    obj.speed[index] -= obj.speedAccel[index];
                    if (tSpeed > obj.speed[index]) obj.speed[index] = tSpeed;
                }
            }
        });
        obj.position.x = currentPos[0] + obj.speed[0];
        obj.position.y = currentPos[1] + obj.speed[1];
        obj.position.z = currentPos[2] + obj.speed[2];

    } else {
        obj.speed.forEach((currSpeed, index) => {
            obj.speed[index] = currSpeed * obj.speedDecel[index];
        });
        if (obj.speed.filter((speed) => Math.abs(speed) > 0.001).length == 0) {
            obj.speed = [0, 0, 0];
        };
        obj.position.x = currentPos[0] + obj.speed[0];
        obj.position.y = currentPos[1] + obj.speed[1];
        obj.position.z = currentPos[2] + obj.speed[2];
        obj.targetPosition = currentPos;
    }

    console.log(obj.position);
}

function estimateTime(currentPos, targetPos, maxSpeed) {
    let x = Math.pow((currentPos[0] - targetPos[0]), 2);
    let y = Math.pow((currentPos[1] - targetPos[1]), 2);
    let z = Math.pow((currentPos[2] - targetPos[2]), 2);
    let distance = Math.sqrt(x + y + z);

    return distance / maxSpeed * 3;
}

export default updateNPCPosition;