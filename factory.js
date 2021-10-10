import {colorArray} from './constants.js';

export function drawFloor(numberOfRows, numberfColumns, THREE, scene){
    var awayFromOriginX = 60/numberfColumns;
    var awayFromOriginZ = 60/numberOfRows;
    var widthOfBlock = 120/numberfColumns;
    var heightOfBlock = 120/numberOfRows;
    var initialPosition = {
      x: -60 + awayFromOriginX,
      z:  60 - awayFromOriginZ
    };
    for(var row = 1; row <= numberOfRows; row++){
      for(var column = 1; column <= numberfColumns; column++){
        var block = new THREE.Mesh(
          new THREE.BoxGeometry(widthOfBlock, 2, heightOfBlock),
          new THREE.MeshBasicMaterial({ color: colorArray[Math.floor(Math.random() * colorArray.length)], wireframe: false })
        );
      
          
          block.position.set(initialPosition.x, 0, initialPosition.z);
          scene.add(block);
          initialPosition.x += widthOfBlock;
       
      }
      initialPosition.z -= heightOfBlock;
      initialPosition.x = -60 + awayFromOriginX;
    }
    
  }