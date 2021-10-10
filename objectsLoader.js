import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';

var loader = new GLTFLoader();
var loadingModelsCounter = 0;
var totalModels = 7;
export function loadModel(scaleCordinates, positionCordinates, modelName, scene, renderer, camera ){
    loader.load(
        `models/${modelName}.glb`,
        function ( gltf ) {
            let object = gltf.scene.children[0];
            object.scale.set(scaleCordinates.x,scaleCordinates.y,scaleCordinates.z);
            
            object.position.set(positionCordinates.x, positionCordinates.y, positionCordinates.z);
            scene.add( object );
            
            renderer.render(scene, camera);
        },
        function ( xhr ) {
            
            if(( xhr.loaded / xhr.total * 100 ) ==  100 ){
              console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
              loadingModelsCounter++;
              if(loadingModelsCounter == totalModels){
                document.getElementById("loader").hidden = true;
              }
            }
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log(error)
        }
      );
}


export function loadModelWithRotation(scaleCordinates, positionCordinates, rotationCordinates, modelName, scene, renderer, camera ){
    loader.load(
        `models/${modelName}.glb`,
        function ( gltf ) {
            let object = gltf.scene.children[0];
            object.scale.set(scaleCordinates.x,scaleCordinates.y,scaleCordinates.z);
            object.rotation.set(rotationCordinates.x, rotationCordinates.y, rotationCordinates.z);
            object.position.set(positionCordinates.x, positionCordinates.y, positionCordinates.z);
            scene.add( object );
            
            renderer.render(scene, camera);
        },
        function ( xhr ) {
            
            if(( xhr.loaded / xhr.total * 100 ) ==  100 ){
              console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
              loadingModelsCounter++;
              if(loadingModelsCounter == totalModels){
                document.getElementById("loader").hidden = true;
              }
            }
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log(error)
        }
      );
}

