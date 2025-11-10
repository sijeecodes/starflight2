function updateBackgrounds(scene, bgObjs) {

    let newBgObjs = bgObjs.filter(bg => {
        if (bg.speed) {
            bg.position.z -= bg.speed;
            bg.position.Y += bg.speed / 2;
            bg.position.X += bg.speed / 3;

            if (bg.position < -200) {
                scene.remove(bg);
                return false;
            }
        }
        return true;
    });

    bgObjs.length = 0;
    bgObjs.push(...newBgObjs);
}

export default updateBackgrounds;