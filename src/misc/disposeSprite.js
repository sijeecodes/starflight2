import disposeObject from "./disposeObject";

function disposeSprite(scene, spriteUUID) {
    const sprite = scene.getObjectByProperty("uuid", spriteUUID);

    if (sprite) {
        if (sprite.material.map) sprite.material.map.dispose();
        
        disposeObject(scene, sprite);
    }
}

export default disposeSprite;