import { createPCBlaster } from '../pcObjects/createPCObjects';

const updatePCObjects = function (scene, camera, { pcShip, pcBlasters }, keyStates) {
    const blasterRange = 400;
    const blasterCoolTime = pcShip.blasterCoolTime;
    const blasterDelay = pcShip.blasterDelay;
    let newBlasters = [];
    let [ speedX, speedY, speedZ ] = pcShip.speed;
    let [ maxSpeedX, maxSpeedY, maxSpeedZ ] = pcShip.maxSpeed;
    let [ speedAccelX, speedAccelY, speedAccelZ ] = pcShip.speedAccel;
    let [ speedDecelX, speedDecelY, speedDecelZ ] = pcShip.speedDecel;
    
    function speedDecelerateX() {
        if (speedX != 0) speedX = speedX * speedDecelX;
        if (Math.abs(speedX) < 0.001) speedX = 0;
    }

    function speedDecelerateY() {
        if (speedY != 0) speedY = speedY * speedDecelY;
        if (Math.abs(speedY) < 0.001) speedY = 0;
    }

    if (blasterCoolTime > 0) pcShip.blasterCoolTime -= 1;
    
    if (keyStates.right && keyStates.left) {
        speedDecelerateX();
    } else {
        if (keyStates.right && speedX <= maxSpeedX) {
            if (speedX < 0) speedX = speedX * speedDecelX;

            speedX += speedAccelX;
            if (speedX >= maxSpeedX) speedX = maxSpeedX;
        } 
        else speedDecelerateX();

        if (keyStates.left && speedX >= -maxSpeedX) {
            if (speedX > 0) speedX = speedX * speedDecelX;

            speedX -= speedAccelX;
            if (speedX <= -maxSpeedX) speedX = -maxSpeedX;
        } 
        else speedDecelerateX();
    }

    if (keyStates.up && keyStates.down) {
        speedDecelerateY();
    } else {
        if (keyStates.up && speedY <= maxSpeedY) {
            speedY += speedAccelY;
            if (speedY >= maxSpeedY) speedY = maxSpeedY;
        } 
        else speedDecelerateY();

        if (keyStates.down && speedY >= -maxSpeedY) {
            speedY -= speedAccelY;
            if (speedY <= -maxSpeedY) speedY = -maxSpeedY;
        } 
        else speedDecelerateY();
    }


    if (keyStates.rightRoll == true) {
        pcShip.position.x -= 2.5;
        pcShip.rotation.z += 0.3;
    }
    if (keyStates.leftRoll == true) {
        pcShip.position.x += 2.5;
        pcShip.rotation.z -= 0.3;
    }

    pcShip.position.x -= speedX;
    pcShip.position.y -= speedY;
    pcShip.speed = [speedX, speedY, speedZ];
    pcShip.rotation.z = speedX / maxSpeedX / 12 * Math.PI;
    pcShip.rotation.y = -speedX / maxSpeedX / 15 * Math.PI;
    pcShip.rotation.x = speedY / maxSpeedY / 15 * Math.PI;
    camera.rotation.z = Math.PI + speedX / maxSpeedX / 80 * Math.PI;
    camera.rotation.y = -pcShip.position.x / 1000;
    camera.rotation.x = Math.PI - pcShip.position.y / 1000;

    if (keyStates.blaster == true && blasterCoolTime == 0) {
        const newBlaster = createPCBlaster(pcShip);
        scene.add(newBlaster);
        pcBlasters.push(newBlaster);
        pcShip.blasterCoolTime = blasterDelay;
    }

    if (pcBlasters.length > 0) {
        newBlasters = pcBlasters.filter((blaster) => {
            if (blaster.position.z < blasterRange) {
                let newBlaster = blaster;
                newBlaster.position.x += blaster.speed[0];
                newBlaster.position.y += blaster.speed[1];
                newBlaster.position.z += blaster.speed[2];
                // newBlaster.rotation.y += 0.7;
                newBlaster.position.needsUpdate = true;

                blaster = newBlaster;
                return blaster;
            }
            scene.remove(blaster);
            return false;
        });
    }
    pcBlasters.length = 0;
    pcBlasters.push(...newBlasters);
};

export default updatePCObjects;