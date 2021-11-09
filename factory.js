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

  export function drawTearDrop(P, Radius, Sweep, scene, THREE){
    var L = 7;
    var C = [P[0], P[1] + L];
    var positionCordinates = {
      x: -40,
      y: 28,
      z: -30
    };
    var rotationCordinates = {
      x: 0,
      y: 0.5,
      z: 0.2
    };
   for(var i = 0; i < 6; i++){
    const material = new THREE.MeshBasicMaterial({
     color: colorArray[Math.floor(Math.random() * colorArray.length)]
    });
    
    var points = [];
    points.push( new THREE.Vector3( P[0], P[1], 0 ) );
    points.push( new THREE.Vector3( C[0] + Radius, C[1], 0 ) );
    points.push( new THREE.Vector3( P[0], P[1], 0 ) );
    points.push( new THREE.Vector3( C[0] - Radius, C[1], 0 ) );
    
    
    var geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    var line = new THREE.Line( geometry, material );
    line.rotation.z = i + rotationCordinates.z;
    line.rotation.y = rotationCordinates.y;
    line.position.set(positionCordinates.x, positionCordinates.y, positionCordinates.z);
    scene.add( line );

    const curve = new THREE.EllipseCurve(
      C[0], C[1],            // ax, aY
      Radius, Radius,           // xRadius, yRadius
      0,  Math.PI,  // aStartAngle, aEndAngle
      !(Sweep),            // aClockwise
      0                 // aRotation
    );
    
    points = curve.getPoints(50);
    geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    // Create the final object to add to the scene
    const ellipse = new THREE.Line( geometry, material );
    ellipse.rotation.z = i + rotationCordinates.z;
    ellipse.rotation.y = rotationCordinates.y;
    ellipse.position.set(positionCordinates.x, positionCordinates.y, positionCordinates.z);
    scene.add( ellipse );
   }
  }

  export function drawTyre(Radius, Position, scene, THREE, rotationAngle, tyreColor){
    var tyre = new THREE.Shape();
    tyre.moveTo(0, 5);
    for(var i = 0; i<= 360; i++){
      var x = Math.cos(i)*Radius;
      var y = Math.sin(i)*Radius;
      tyre.lineTo(x,y);
    }
    
    
    var tyreMaterial = new THREE.MeshBasicMaterial( { color: tyreColor } )
    var tyreGeom = new THREE.ShapeGeometry( tyre );
    var tyreObject = new THREE.Line( tyreGeom, tyreMaterial ) ;
    tyreObject.position.set(Position.x, Position.y, Position.z);
    tyreObject.rotation.y = rotationAngle;
    scene.add(tyreObject);
  }
