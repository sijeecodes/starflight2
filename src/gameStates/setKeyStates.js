const initKeyState = function () {
  return {
    right: false,
    left: false,
    up: false,
    down: false,
    rightRoll: false,
    leftRoll: false,
    blaster: false
  };
}

const setKeyState = function (keyStates, event) {
  if (event.code == "KeyD") keyStates.right = true;
  if (event.code == "KeyA") keyStates.left = true;
  if (event.code == "KeyW") keyStates.up = true;
  if (event.code == "KeyS") keyStates.down = true;
  if (event.code == "KeyE") keyStates.rightRoll = true;
  if (event.code == "KeyQ") keyStates.leftRoll = true;
  if (event.code == "Space") keyStates.blaster = true;

  return keyStates;
}

const resetKeyState = function (keyStates, event) {
  if (event.code == "KeyD") keyStates.right = false;
  if (event.code == "KeyA") keyStates.left = false;
  if (event.code == "KeyW") keyStates.up = false;
  if (event.code == "KeyS") keyStates.down = false;
  if (event.code == "KeyE") keyStates.rightRoll = false;
  if (event.code == "KeyQ") keyStates.leftRoll = false;
  if (event.code == "Space") keyStates.blaster = false;

  return keyStates;
}

export { initKeyState, setKeyState, resetKeyState };