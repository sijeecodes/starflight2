# StarFlight 2
 - Data-driven space flight game using Javascript & Three.js.
 - All spawning and behaviors controlled by data (JSON-like objects).

 ![playVideo](./starflight2.gif)

## Controls
 - Movement: "WASD" or "↑ ↓ → ←"
 - Menu Selection:  Enter
 - Fire Blaster:    Space
 - Roll Left/Right: "N, M" or "C, V"
 - Forward Boost:   ","    or "X" 

## Instructions
 - Change ship for Easy(Bubbles), Hard(Sparrow) Modes.
 - When "Roll"ing, you don't get hit.
 - Bypass ships with Boost to avoid engagement.
 - You can change up/down invert in "Settings"

## Key Features
 - Level-Data driven NPC spawn.
 - NPC-Data driven NPC Ships.
 - AI-Data & AI-Pattern-Data driven NPC Patterns & Behavior.
 - PC-Data driven PC Ship.
 - No Physics engine. Just Javascript & Three.js.

## Tools Used
 - VSCode - Coding
 - Blender - 3D Resource Editing
 - Gimp - Image Editing
 - Reaper - Sound Editing

## Art / Sound Resources
 - 3D Models: https://sketchfab.com/
 - Sounds: https://pixabay.com/sound-effects/
 - Music: https://www.bensound.com

## Level System
 - Level NPC Objects are spawned by Level Data.
 - ex>    
          after [100] frames - spawn [NPC_A] with [NPC_BasicData_A] & [NPC_AI_A] in position [x1, y1, z1],
          after [300] frames - spawn [NPC_B] with [NPC_BasicData_A] & [NPC_AI_B] in position [x2, y2, z2],
          ...

### Level Data
 - Format : [{eventTime: "delayTime", npcAI: "npcAIname", npcBasic: "npcBasicName", startingPosition: "[x,y,z]"}, {...} ...]
 - After "delayTime" is passed, NPC will be spawned based on data.
 - Each level data object contains 4 below attributes.
 1. eventTime     : Delay time for the NPC Object to be produced.
 2. npcAI         : Name of NPC AI pattern used for the NPC Object.
 3. npcBasic      : Name of NPC's basic data used for stats and rendering.
 4. startPosition : Spawn position of the NPC Object.

## NPC System
 - NPC stats & behaviors are based on data.
 1. NPC AI : Data of NPCs AI Patterns and trigger conditions. NPC AI Patterns can be triggered by time or HP.
 2. NPC AI Patterns : Defines NPC action after delayed time. NPC AI Pattern data are used in NPC AI. 
 3. NPC Basic : NPC speed, power, hp, collision data and 3D resource used for NPC.
 - ex> 
       NPC_Data    - NPC Basic: [Speed, Power, HP, Shape...etc]
                   - NPC AI: [30]frames after spawn run [AI_Pattern_A],
                            [100]frames after spawn run [AI_Pattern_B],
                            When HP drops below [3] run [AI_Pattern_Charge]
                            
       NPC_Pattern - AI_Pattern_A: [0] frames after spawn [randomMove] in [x1~x2, y1~y2, z1~z2],
                                   [30] frames after spawn [lookAt] target [PC],
                                   [45] frames after spawn [fire_Blaster],
                                   [60] frames after spawn [Set_Pattern_Time] to [30] => creates Loop from 30 to 60
                   - AI_Pattern_B: ...
                   - AI_Pattern_Charge: [0] frames after spawn [Set_Default_Speed] to [0, 0, 2]
                                        [15] frames after spawn [lookAt] target [PC],
                                        [30] frames after spawn [lookAt] target [PC],
                                        [45] frames after spawn [lookAt] target [PC],
                                        [55] frames after spawn [Set_Pattern_Time] to [10] => creates Loop from 10 to 55

### NPC AI
 - Format : { aiName: { timeTriggered: [ { triggerTime: "time", patternName: "name" }, … ], hpTriggered: [{ triggerHP: "hp", patternName: "name" }, …] }, aiName2: {[],[]}, ... }
 1. aiName : Name of the NPC AI. Each object has 2 array lists, each for time and HP triggered AI patterns.
 2. timeTriggered : When game NPC's "elapsedTime" matches "triggerTime", "patternName" pattern is activated.
 3. hpTriggered : When NPC's HP drops below "triggerHP", "patternName" pattern is activated.
 4. patternName : Name of NPC AI Pattern to load.

### NPC AI Pattern
 - Format : { patternName: [{ actionTime: "time", action: "nameOfAction", value: "valueForAction" }, {...}, ...], patternName2: [], ... }
 - A "pattenName" named NPC AI Pattern contains array of "action"s with timeStamp and values.
 1. patternName : Name of the pattern. When pattern starts, PatternTimer starts.
 2. actionTime : Timestamp from PatternTimer for the action to be triggered. 
 3. action : The triggered action.
 4. value : Value for action.

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
