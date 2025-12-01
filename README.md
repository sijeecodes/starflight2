# StarFlight 2

 - A simple space flight game using Javascript & Three.js.

 ![playVideo](./starflight2.gif)

## Key Features
 - Level-Data driven NPC spawn.
 - NPC-Data driven NPC stats and NPC AI.
 - PC-Data driven PC stats.

## Tools Used
 - VSCode - Coding
 - Blender - 3D Modeling Adjustments
 - Gimp - Image Editing
 - Reaper - Sound Editing

## Art / Sound Resources
 - 3D Models: https://sketchfab.com/
 - Sounds: https://pixabay.com/sound-effects/
 - Music: https://www.bensound.com

## Level System
 - Level NPC Objects are spawned by Level Data.

### Level Data
 - Format : [{eventTime: "timeStamp", npcAI: "npcAIname", npcBasic: "npcBasicName", startingPosition: "[x,y,z]"}, {...} ...]
 - Event time of the first event will be checked.
 - When time is met, NPC is constructed based on data.
 - The ran data will be removed from the level data array.
 - Each level data object contains 4 below attributes.
 1. eventTime    : Timestamp of the time the NPC Object is produced.
 2. npcAI        : Name of NPC AI pattern used for the NPC Object.
 3. npcBasic    : Name of NPC's basic data used for stats and rendering.
 4. startPosition : Spawn position of the NPC Object.

## NPC System
 - NPC stats and behaviors based on data. Three data are combined for an NPC.
 1. NPC AI : NPC AI Patterns are triggered by conditions inside this data.
 2. NPC AI Patterns : NPC AI Pattern data, used in NPC AI. Defines NPC behavior.
 3. NPC Basic : NPC speed, power, hp, collision data and 3D resource used for NPC.

### NPC AI
 - Format : { aiName: { timeTriggered: [ { triggerTime: "time", patternName: "name" }, … ], hpTriggered: [{ triggerHP: "hp", patternName: "name" }, …] }, aiName2: {[],[]}, ... }
 - aiName : Name of the NPC AI. Each object has 2 array lists, each for time and HP triggered AI patterns.
 - timeTriggered : When game NPC's "elapsedTime" matches "triggerTime", "patternName" pattern is activated.
 - hpTriggered : When NPC's HP drops below "triggerHP", "patternName" pattern is activated.
 - patternName : Name of NPC AI Pattern to load.

### NPC AI Pattern
 - Format : { patternName: [{ actionTime: "time", action: "nameOfAction", value: "valueForAction" }, {...}, ...], patternName2: [], ... }
 - A "pattenName" named NPC AI Pattern contains array of "action"s with timeStamp and values.
 - patternName : Name of the pattern. When pattern starts, PatternTimer starts.
 - actionTime : Timestamp from PatternTimer for the action to be triggered. 
 - action : The triggered action.
 - value : Value for action.

 #### Action lists: name(value)
 1. move([x, y, z]) : Sets NPC "targetPosition" to move (+x, +y, +z) amount.
 2. moveTo([x, y, z]) : Sets NPC "targetPosition" to (x, y, z).
 3. randomMoveTo([x1, x2, y1, y2, z1, z2]) : Sets NPC "targetPosition" to move in (x1 ~ x2, y1 ~ y2, z1 ~ z2) range.
 4. blaster("pc" or "front") : Fires blaster to "PC" or "Front".
 5. setPatternTime(int value) : Sets PatternTimer to "value". Set 0 to loop current AI pattern. 
 6. setDefaultSpeed([x, y, z]) : Sets NPC "defaultSpeed" to (x, y, z). Moves based on NPC(not world axis).
 7. setRotation([x, y, z] or "pc") : Sets NPC "targetRotation" to (x, y, z) or to face pc.
 
## NPC Basic
 - Format : { npcBasicName: { attribute1: value, attribute2: value ...}, {...}, ...}
 - Basic data for NPC.
   
### Attributes : attributeName(value)
 1. npcGlb("fileName") : 3D resource file for the NPC.
 2. collisionSize(int value) : Length for brief collision check. Should be set as model's longest vertex from center.
 3. hp(int value) : NPC's hp.
 4. blasterPower(int value) : Damage of the blaster.
 5. defaultSpeed([x, y, z]) : Default moving speed. (0, 0, 1) will make NPC move z direction of 1 every 1/30 second.
 6. speed([x, y, z]) : Current moving speed. (0, 0, 1) will make NPC move z direction(world axis) of 1 every 1/30 second.
 7. maxSpeed(value) : Max speed the NPC can get.
 8. speedAccel([x, y, z]) : Acceleration for NPC to get to maxSpeed per frame.
 9. speedDecel([x, y, z]) : Deceleration multiple for NPC. Should be below 1. Also used for NPC rotation speed.
 10. targetPosition([x, y, z]) : Target destination the NPC is moving to.
 11. targetRotation([x, y, z]) : Target rotation the NPC is rotating to.

### Other Basic NPC Attributes
 1. elapsedTime : Elapsed time since NPC creation.
 2. patternTime : Elapsed time since current AI Pattern start.
 3. aiPattern : Name of currently running AI Pattern.
 4. position : Position of the NPC.
 5. rotation : Rotation of the NPC.

## Misc

 - This is my second personal game project using Javascript.

## Author

 - Simon Jee

## License
 - This project is licensed under the MIT License - see the LICENSE.md file for details
