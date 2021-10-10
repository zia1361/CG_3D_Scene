import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js";
import { GUI } from "https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js";
import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';
import {GLTFExporter} from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/exporters/GLTFExporter.js';
import {OBJExporter} from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/exporters/OBJExporter.js';
import {drawFloor} from './factory.js';


var camera, scene, renderer, controls;
var light1, light2, light3, light4;
var loadingModelsCounter = 0;
var totalModels = 7;
init();
animate();
handleKeys();
drawFloor(20, 30, THREE, scene);
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.5,
    1000
  );
  camera.position.set(0, 2, 8).setLength(120);
  camera.lookAt(0, 10, 0);
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.outerWidth, window.outerHeight);
  renderer.setClearColor(0xb5deff);
  document.body.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  var plane = new THREE.GridHelper(120, 70);
  scene.add(plane);
  var light = new THREE.AmbientLight(0xffffff); 
  scene.add(light);
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  light1 = new THREE.Mesh(
    new THREE.SphereGeometry(3.5, 6.5, 3.2, 2),
    new THREE.MeshBasicMaterial({ color: "yellow", wireframe: false })
  );
  light1.position.set(57, 10, 57);

  light2 = new THREE.Mesh(
    new THREE.SphereGeometry(3.5, 6.5, 3.2, 2),
    new THREE.MeshBasicMaterial({ color: "yellow", wireframe: false })
  );
  light2.position.set(-57, 10, -57);

  light3 = new THREE.Mesh(
    new THREE.SphereGeometry(3.5, 6.5, 3.2, 2),
    new THREE.MeshBasicMaterial({ color: "yellow", wireframe: false })
  );
  light3.position.set(-57, 10, 57);

  light4 = new THREE.Mesh(
    new THREE.SphereGeometry(3.5, 6.5, 3.2, 2),
    new THREE.MeshBasicMaterial({ color: "yellow", wireframe: false })
  );
  light4.position.set(57, 10, -57);

 

  
  var worldAxis = new THREE.AxesHelper(1);
  light1.add(worldAxis);
  light2.add(worldAxis);
  light3.add(worldAxis);
  light4.add(worldAxis);
  scene.add(light1);
  scene.add(light2);
  scene.add(light3);
  scene.add(light4);

  var loader = new GLTFLoader();
  
 

  loader.load(
    'models/tree.glb',
    function ( gltf ) {
        let object = gltf.scene.children[0];
        object.scale.set(100,75,100);
        
        object.position.set(55, 16.5, -82);
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
loader.load(
  'models/tree.glb',
  function ( gltf ) {
      let object = gltf.scene.children[0];
      object.scale.set(100,75,100);
      object.position.set(-55, 16.5, -82);
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
loader.load(
  'models/tree.glb',
  function ( gltf ) {
      let object = gltf.scene.children[0];
      object.scale.set(100,75,100);
      object.position.set(-55, 16.5, 35);
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
 
loader.load(
  'models/tree.glb',
  function ( gltf ) {
      let object = gltf.scene.children[0];
      object.scale.set(100,75,100);
      object.position.set(55, 16.5, 35);
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

loader.load(
  'models/bench.glb',
  function ( gltf ) {
      let object = gltf.scene.children[0];
      object.scale.set(60,25,45);
      object.position.set(-65, 4, 15);
      object.rotation.set(0, 1.580, 0);
      console.log(object);
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

loader.load(
  'models/bench.glb',
  function ( gltf ) {
      let object = gltf.scene.children[0];
      object.scale.set(60,25,45);
      object.position.set(65, 4, 15);
      object.rotation.set(0, -1.580, 0);
      console.log(object);
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

loader.load(
  'models/bench.glb',
  function ( gltf ) {
      let object = gltf.scene.children[0];
      object.scale.set(60,25,45);
      object.position.set(0, 4, -68);
      
      console.log(object);
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


  var index = 10;
  var R = 5.5;
  var K = 10.3;
  var isReverse = false;
  setInterval(() => {
    var x = R * Math.cos(index);
    var y = R * Math.sin(index);
    var z = K * (index * (Math.PI / 180));
    if (isReverse == false) {
      if (index == 360 || Math.floor(z) == 30) {
        isReverse = true;
      } else {
        index++;
      }
    } else {
      if (index == 0 || Math.floor(z) == 5) {
        isReverse = false;
        index = 5;
      } else {
        index--;
      }
    }
    light1.position.set(x + 57, z, y + 57);
    light2.position.set(x + -57, z, y + -57);
    light3.position.set(x + -57, z, y + 57);
    light4.position.set(x + 57, z, y + -57);
  }, 100);
}


function animate() {
  requestAnimationFrame(animate);
  render();
}
animate();
function render() {
  renderer.render(scene, camera);
}






function handleKeys() {
  document.onkeydown = function (event) {
    switch (event.key) {
      case " ":
        console.log(camera.position.y);
        if (camera.position.y <= 40) camera.position.y += 2;
        else alert("top boundry exceed");
        break;
      case "Control":
        console.log(camera.position.y);
        if (camera.position.y >= 29) camera.position.y -= 2;
        else alert("bottom boundry exceed");

        break;
      case "ArrowLeft":
        if (camera.position.x >= -40) camera.position.x -= 2;
        else alert("left boundry exceed");
        console.log(camera.position.x);
        break;
      case "ArrowUp":
        if (camera.position.z >= -9) camera.position.z -= 2;
        else alert("forward boundry exceed");
        console.log(camera.position.z);

        break;
      case "ArrowRight":
        if (camera.position.x <= 40) camera.position.x += 2;
        else alert("right boundry exceed");
        console.log(camera.position.x);
        break;
      case "ArrowDown":
        if (camera.position.z <= 114) camera.position.z += 2;
        else alert("backward boundry exceed");
        console.log(camera.position.z);
        break;
    }
  };
}
