import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js';
import {GUI} from 'https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js';

var camera, scene, renderer, controls;
var sphere1, sphere2, sphere3, sphere4, cube;
init();
animate();

function init() {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.5, 1000);
  camera.position.set(0, 1, 4).setLength(120);
  
  camera.rotation.set(0, 1, 0);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.outerWidth, window.outerHeight);
  //renderer.setClearColor(0xcccccc);
  document.body.appendChild(renderer.domElement);
 
  controls = new OrbitControls(camera, renderer.domElement);

  var plane = new THREE.GridHelper(120, 70);
  scene.add(plane);
	
  sphere1 = new THREE.Mesh(new THREE.SphereGeometry(8, 14, 6), new THREE.MeshBasicMaterial({color: "red", wireframe: false}));
  sphere1.position.set(0, 0, 0);
  
//    sphere2 = new THREE.Mesh(new THREE.SphereGeometry(10, 16, 8), new THREE.MeshBasicMaterial({color: "red", wireframe: false}));
//   sphere2.position.set(15, 40, -15);
  
//    sphere3 = new THREE.Mesh(new THREE.SphereGeometry(10, 16, 8), new THREE.MeshBasicMaterial({color: "red", wireframe: false}));
//   sphere3.position.set(-15, 40, 15);
  
//    sphere4 = new THREE.Mesh(new THREE.SphereGeometry(10, 16, 8), new THREE.MeshBasicMaterial({color: "red", wireframe: false}));
//   sphere4.position.set(15, 40, 15);
  
  cube = new THREE.Mesh(new THREE.BoxGeometry(15, 30, 15), new THREE.MeshBasicMaterial({color: "green", wireframe: true}));
  cube.position.set(0, 15, 0);
//   cube.lookAt(camera.position);
 
  var worldAxis = new THREE.AxesHelper(20);
  sphere1.add(worldAxis);
  scene.add(sphere1);
//   scene.add(sphere2);
//   scene.add(sphere3);
//   scene.add(sphere4);
  scene.add(cube);
  
  var sphereAxis = new THREE.AxesHelper(20);
  sphere1.add(sphereAxis);
//   sphere2.add(sphereAxis);
//   sphere3.add(sphereAxis);
//   sphere4.add(sphereAxis);
  var cubeAxis = new THREE.AxesHelper(20);
  cube.add(cubeAxis);
  var index = 5;
  var angles = [0, 45, 90, 135, 180, 225, 270, 315, 360];
  var piValues = []
  var R = 15;
  var K = 30;
  var isReverse = false;
setInterval(() => {
    var x = R*Math.cos(index);
    var y = R*Math.sin(index);
    var z = K*(index*(Math.PI/180));
    console.log(x, y, z);
    if(isReverse == false){
        

        if(index == 360 || Math.floor(z) == 25){
            
            isReverse = true;
        }else{
            index++;
        }
         
    }else{
        
        if(index == 0 || Math.floor(z) == 5){
            isReverse = false;
            index = 5;
        }else{
            index--;
        }
    }
    sphere1.position.set(x, z, y);
    
    
}, 100);
 }

var delta;
function animate() {
  requestAnimationFrame(animate);
  render();
}
animate();
function render() {
  renderer.render(scene, camera);
}
