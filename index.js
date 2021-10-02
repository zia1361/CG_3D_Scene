import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js";
import { GUI } from "https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js";

var camera, scene, renderer, controls;
var light1, light2, light3, light4, stem1, ground, stem2, stem3, stem4;
var cameraCordinates = {
  x: 0,
  y: 2,
  z: 8,
};
init();
animate();
handleKeys();
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
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.outerWidth, window.outerHeight);
  renderer.setClearColor(0xb5deff);
  document.body.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  var plane = new THREE.GridHelper(120, 70);
  scene.add(plane);

  light1 = new THREE.Mesh(
    new THREE.SphereGeometry(3.5, 6.5, 3.2, 2),
    new THREE.MeshBasicMaterial({ color: "yellow", wireframe: false })
  );
  light1.position.set(57, 0, 57);

  light2 = new THREE.Mesh(
    new THREE.SphereGeometry(3.5, 6.5, 3.2, 2),
    new THREE.MeshBasicMaterial({ color: "yellow", wireframe: false })
  );
  light2.position.set(-57, 0, -57);

  light3 = new THREE.Mesh(
    new THREE.SphereGeometry(3.5, 6.5, 3.2, 2),
    new THREE.MeshBasicMaterial({ color: "yellow", wireframe: false })
  );
  light3.position.set(-57, 0, 57);

  light4 = new THREE.Mesh(
    new THREE.SphereGeometry(3.5, 6.5, 3.2, 2),
    new THREE.MeshBasicMaterial({ color: "yellow", wireframe: false })
  );
  light4.position.set(57, 0, -57);

  stem1 = new THREE.Mesh(
    new THREE.BoxGeometry(5, 40, 5),
    new THREE.MeshBasicMaterial({ color: "brown", wireframe: false })
  );
  stem1.position.set(57, 15, 57);

  stem2 = new THREE.Mesh(
    new THREE.BoxGeometry(5, 40, 5),
    new THREE.MeshBasicMaterial({ color: "brown", wireframe: false })
  );
  stem2.position.set(-57, 15, -57);

  stem3 = new THREE.Mesh(
    new THREE.BoxGeometry(5, 40, 5),
    new THREE.MeshBasicMaterial({ color: "brown", wireframe: false })
  );
  stem3.position.set(-57, 15, 57);

  stem4 = new THREE.Mesh(
    new THREE.BoxGeometry(5, 40, 5),
    new THREE.MeshBasicMaterial({ color: "brown", wireframe: false })
  );
  stem4.position.set(57, 15, -57);

  ground = new THREE.Mesh(
    new THREE.BoxGeometry(120, 10, 120),
    new THREE.MeshBasicMaterial({ color: 0x1c7947, wireframe: false })
  );
  ground.position.set(0, -5, 0);

  scene.add(ground);
  var worldAxis = new THREE.AxesHelper(5);
  light1.add(worldAxis);
  light2.add(worldAxis);
  light3.add(worldAxis);
  light4.add(worldAxis);
  scene.add(light1);
  scene.add(light2);
  scene.add(light3);
  scene.add(light4);
  scene.add(stem1);
  scene.add(stem2);
  scene.add(stem3);
  scene.add(stem4);

  var index = 5;
  var angles = [0, 45, 90, 135, 180, 225, 270, 315, 360];
  var piValues = [];
  var R = 7.5;
  var K = 23;
  var isReverse = false;
  setInterval(() => {
    var x = R * Math.cos(index);
    var y = R * Math.sin(index);
    var z = K * (index * (Math.PI / 180));
    if (isReverse == false) {
      if (index == 360 || Math.floor(z) == 35) {
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

var delta;
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
    console.log(event.key);
    switch (event.key) {
      case " ":
        console.log(camera.position.y);
        if (camera.position.y <= 40) camera.position.y += 2;
        else alert("bottom boundry exceed");
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
