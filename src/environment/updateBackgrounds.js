function updateBackgrounds(scene, bgObjs) {
  
  let newBgObjs = bgObjs.filter(bg => {
    if (bg.speed) {
      bg.position.z -= bg.speed;

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