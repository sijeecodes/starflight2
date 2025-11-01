import { Euler } from 'three';

function updateNPCRotation(obj) {
    let r = [obj.rotation.x, obj.rotation.y, obj.rotation.z];
    const targetR = obj.targetRotation;

    if (Math.abs(r[0] - targetR[0]) < obj.rotationSpeed
        && Math.abs(r[1] - targetR[1]) < obj.rotationSpeed
        && Math.abs(r[2] - targetR[2]) < obj.rotationSpeed
    ) return;

    const needR = r.map((r, i) => {
        if (Math.abs(r - targetR[i]) < Math.PI) return targetR[i] - r;
        
        return differenceWithPI(r) + differenceWithPI(targetR[i]);
    });

    const estimateTime = Math.max(...needR.map(r => Math.abs(r))) / obj.rotationSpeed;
    obj.rotation.x = r[0] + needR[0]/estimateTime;
    obj.rotation.y = r[1] + needR[1]/estimateTime;
    obj.rotation.z = r[2] + needR[2]/estimateTime;

    if(estimateTime < 2) {
        obj.targetRotation[0] = obj.rotation.x;
        obj.targetRotation[1] = obj.rotation.y;
        obj.targetRotation[2] = obj.rotation.z;
    }
}

function differenceWithPI(n) {
    if (n > Math.PI) return n - 2*Math.PI;
    return -n;
}

export default updateNPCRotation;