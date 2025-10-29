import updatePCBlasters from './updatePCBlasters';

const updatePCObjects = function (scene, camera, { pcShip, pcBlasters }, keyStates) {
    let [ maxX, maxY, maxZ ] = pcShip.maxSpeed;
    let [ accelX, accelY, accelZ ] = pcShip.speedAccel;
    let [ decelX, decelY, decelZ ] = pcShip.speedDecel;
    let [ speedX, speedY, speedZ ] = pcShip.speed;
    let pos = pcShip.position;
    let rot = pcShip.rotation;
    let diagonal = false;
    
    function speedDecelerateX() {
        if (speedX != 0) speedX = speedX * decelX;
        if (Math.abs(speedX) < 0.001) speedX = 0;
    }

    function speedDecelerateY() {
        if (speedY != 0) speedY = speedY * decelY;
        if (Math.abs(speedY) < 0.001) speedY = 0;
    }

    if (keyStates.right && keyStates.left) {
        speedDecelerateX();
    } else {
        if ((keyStates.up && !keyStates.down) || (!keyStates.up && keyStates.down)) {
            maxX = maxX * 0.86;
            maxY = maxY * 0.86;
            accelX = accelX * 0.86;
            accelY = accelY * 0.86;
            decelX = 1 - ((1 - decelX) * 0.86);
            decelY = 1 - ((1 - decelY) * 0.86);
            diagonal = true;
        }

        if (keyStates.right && pos.x > -40) {
            if (diagonal) {
                if (speedX > 0) speedX = speedX * decelX;

                if (speedX < -maxX) {
                    speedX = speedX * decelX;
                    if (speedX > -maxX) speedX = -maxX;
                }
                else {
                    speedX -= accelX;
                    if (speedX < -maxX) speedX = -maxX;
                }
            }
            else {
                if (speedX > 0) speedX = speedX * decelX;
    
                speedX -= accelX;
                if (speedX < -maxX) speedX = -maxX;
            }
        } 
        else speedDecelerateX();

        if (keyStates.left && pos.x < 40) { 
            if (diagonal) {
                if (speedX < 0) speedX = speedX * decelX;

                if (speedX > maxX) {
                    speedX = speedX * decelX;
                    if (speedX < maxX) speedX = maxX;
                }
                else {
                    speedX += accelX;
                    if (speedX > maxX) speedX = maxX;
                }
            }
            else {
                if (speedX < 0) speedX = speedX * decelX;
    
                speedX += accelX;
                if (speedX > maxX) speedX = maxX;
            }
        } 
        else speedDecelerateX();
    }

    if (keyStates.up && keyStates.down) {
        speedDecelerateY();
    } else {
        if ((keyStates.right && !keyStates.left) || (!keyStates.right && keyStates.left)) {
            maxX = maxX / 2;
            maxY = maxY / 2;
            accelX = accelX / 2;
            accelY = accelY / 2;
            decelX = 1 - ((1 - decelX) / 2);
            decelY = 1 - ((1 - decelY) / 2);
            diagonal = true;
        }

        if (keyStates.up && pos.y > -20) {
            if (diagonal) {
                if (speedY > 0) speedY = speedY * decelY;

                if (speedY < -maxY) {
                    speedY = speedY * decelY;
                    if (speedY > -maxY) speedY = -maxY;
                }
                else {
                    speedY -= accelY;
                    if (speedY < -maxY) speedY = -maxY;
                }
            }
            else {
                if (speedY > 0) speedY = speedY * decelY;
    
                speedY -= accelY;
                if (speedY < -maxY) speedY = -maxY;
            }
        } 
        else speedDecelerateY();

        if (keyStates.down && pos.y < 20) {
            if (diagonal) {
                if (speedY < 0) speedY = speedY * decelY;

                if (speedY > maxY) {
                    speedY = speedY * decelY;
                    if (speedY < maxY) speedY = maxY;
                }
                else {
                    speedY += accelY;
                    if (speedY > maxY) speedY = maxY;
                }
            }
            else {
                if (speedY < 0) speedY = speedY * decelY;
    
                speedY += accelY;
                if (speedY > maxY) speedY = maxY;
            }
        } 
        else speedDecelerateY();
    }

    if (keyStates.rightRoll == true) {
        pos.x -= 2.5;
        rot.z += 0.3;
    }
    if (keyStates.leftRoll == true) {
        pos.x += 2.5;
        rot.z -= 0.3;
    }

    pcShip.position.x += speedX;
    pcShip.position.y += speedY;
    pcShip.speed = [speedX, speedY, speedZ];
    pcShip.rotation.z = -speedX / maxX / 12 * Math.PI;
    pcShip.rotation.y = speedX / maxX / 30 * Math.PI;
    pcShip.rotation.x = -speedY / maxY / 30 * Math.PI;
    camera.rotation.z = Math.PI + speedX / maxX / 150 * Math.PI;
    camera.rotation.y = -pcShip.position.x / 1000;
    camera.rotation.x = Math.PI - pcShip.position.y / 1000;

    updatePCBlasters(scene, pcShip, pcBlasters, keyStates);
};

export default updatePCObjects;