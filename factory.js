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
   for(var i = 0; i < 6; i++){
    var L = 7;
    var C = [P[0], P[1] + L];
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
    line.rotation.z = i + 0.2;
    line.rotation.y = 0.5;
    line.position.set(-40, 28, -30);
    scene.add( line );

    const curve = new THREE.EllipseCurve(
      C[0], C[1],            // ax, aY
      Radius, Radius,           // xRadius, yRadius
      0,  Math.PI,  // aStartAngle, aEndAngle
      !(Sweep),            // aClockwise
      0                 // aRotation
    );
    
    points = curve.getPoints( 50 );
    geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    // Create the final object to add to the scene
    const ellipse = new THREE.Line( geometry, material );
    ellipse.rotation.z = i + 0.2;
    ellipse.rotation.y = 0.5;
    ellipse.position.set(-40, 28, -30);
    scene.add( ellipse );
   }
  }

  export function drawTyre(Radius, Position, scene, THREE){
    var tyre = new THREE.Shape();
    tyre.moveTo(0, 5);
    for(var i = 0; i<= 360; i++){
      var x = Math.cos(i)*Radius;
      var y = Math.sin(i)*Radius;
      tyre.lineTo(x,y);
    }
    
    
    var tyreMaterial = new THREE.MeshBasicMaterial( { color: 'black' } )
    var tyreGeom = new THREE.ShapeGeometry( tyre );
    var tyreObject = new THREE.Line( tyreGeom, tyreMaterial ) ;
    tyreObject.position.set(Position.x, Position.y, Position.z);
    tyreObject.rotation.y = 0.5;
    scene.add(tyreObject);
  }
