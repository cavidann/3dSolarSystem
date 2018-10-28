var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var textureLoader = new THREE.TextureLoader();

// var planetData = {
//   sun: {
//     name: "sun",
//     texture: "sun.jpg",
//     radius: 200,
//     distance: 0
//   },
//   mercury: {
//     name: "mercury",
//     texture: "mercury.jpg",
//     radius: 2.4,
//     distance: 58
//   }
// }

// var sunRadius = planetData.sun.radius;


// for (var item in planetData) {
//   // console.log(item);
//   var texture = textureLoader.load('/obj/' + planetData[item].texture);
//   var geometry = new THREE.SphereGeometry(planetData[item].radius / 10, 20, 20);
//   var material = new THREE.MeshLambertMaterial({ map: texture });
//   var planetData[item].name = new THREE.Mesh(geometry, material);
//   // var distance=planetData[item].texture;
//   // item.position.set(-planetData[item].distance / 10 - sunRadius / 10,0,0)
//   // item.position.x = -planetData[item].distance / 10 - sunRadius / 10
//   scene.add(item);
// }


var sunRadius=200

var texture = textureLoader.load('/obj/sun.jpg');
var geometry = new THREE.SphereGeometry(sunRadius/10, 20, 20);
var material = new THREE.MeshLambertMaterial({ map: texture });
var sun = new THREE.Mesh(geometry, material);
scene.add(sun);



var texture = textureLoader.load('/obj/mercury.jpg');

var geometry = new THREE.SphereGeometry(2.4 / 10, 20, 20);
var material = new THREE.MeshLambertMaterial({ map: texture });
var mercury = new THREE.Mesh(geometry, material);
mercury.position.x = -58 / 10 - sunRadius/10
scene.add(mercury);


var texture = textureLoader.load('/obj/venus.jpg');

var geometry = new THREE.SphereGeometry(6 / 10, 20, 20);
var material = new THREE.MeshLambertMaterial({ map: texture });
var venus = new THREE.Mesh(geometry, material);
venus.position.x = -108 / 10 - sunRadius / 10
scene.add(venus);

var texture = textureLoader.load('/obj/earth.jpg');

var geometry = new THREE.SphereGeometry(6.3 / 10, 20, 20);
var material = new THREE.MeshLambertMaterial({ map: texture });
var earth = new THREE.Mesh(geometry, material);
earth.position.x = -149 / 10 - sunRadius / 10
scene.add(earth);

var texture = textureLoader.load('/obj/mars.jpg');

var geometry = new THREE.SphereGeometry(3.4 / 10, 20, 20);
var material = new THREE.MeshLambertMaterial({ map: texture });
var mars = new THREE.Mesh(geometry, material);
mars.position.x = -228 / 10 - sunRadius / 10
scene.add(mars);

var texture = textureLoader.load('/obj/jupiter.jpg');

var geometry = new THREE.SphereGeometry(70 / 10, 20, 20);
var material = new THREE.MeshLambertMaterial({ map: texture });
var jupiter = new THREE.Mesh(geometry, material);
jupiter.position.x = -778 / 10 - sunRadius / 10
scene.add(jupiter);

var texture = textureLoader.load('/obj/saturn.jpg');

var geometry = new THREE.SphereGeometry(58.2 / 10, 20, 20);
var material = new THREE.MeshLambertMaterial({ map: texture });
var saturn = new THREE.Mesh(geometry, material);
saturn.position.x = -1434 / 10 - sunRadius / 10
scene.add(saturn);

var texture = textureLoader.load('/obj/uranus.jpg');

var geometry = new THREE.SphereGeometry(25.3 / 10, 20, 20);
var material = new THREE.MeshLambertMaterial({ map: texture });
var uranus = new THREE.Mesh(geometry, material);
uranus.position.x = -2871 / 10 - sunRadius / 10
scene.add(uranus);

var texture = textureLoader.load('/obj/neptune.png');

var geometry = new THREE.SphereGeometry(24.6 / 10, 20, 20);
var material = new THREE.MeshLambertMaterial({ map: texture });
var neptune = new THREE.Mesh(geometry, material);
neptune.position.x = -4495 / 10 - sunRadius / 10
scene.add(neptune);


var flashlight = new THREE.AmbientLight(0xffffff, 1, 1000, Math.PI / 8, 1)
scene.add(flashlight);

camera.lookAt(new THREE.Vector3(0, 0, 0));
var controls = new THREE.OrbitControls(camera);

camera.position.set(0, 60, 50);
controls.update();
var t = 0;
function animate() {
  requestAnimationFrame(animate);
  sun.rotation.y += 0.002
  t += 0.01;
  mercury.rotation.y += 0.01;
  mercury.position.x = (58 / 10 + sunRadius/10) * Math.cos(t)
  mercury.position.z = (58 / 10 + sunRadius/10) * Math.sin(t)

  venus.rotation.y += 0.01;
  venus.position.x = (108 / 10 + sunRadius / 10) * Math.cos(t / 2)
  venus.position.z = (108 / 10 + sunRadius / 10) * Math.sin(t / 2)

  earth.rotation.y += 0.01;
  earth.position.x = (149 / 10 + sunRadius / 10) * Math.cos(t / 3)
  earth.position.z = (149 / 10 + sunRadius / 10) * Math.sin(t / 3)

  mars.rotation.y += 0.01;
  mars.position.x = (228 / 10 + sunRadius / 10) * Math.cos(t / 4)
  mars.position.z = (228 / 10 + sunRadius / 10) * Math.sin(t / 4)

  jupiter.rotation.y += 0.01;
  jupiter.position.x = (378 / 10 + sunRadius / 10) * Math.cos(t / 5)
  jupiter.position.z = (378 / 10 + sunRadius / 10) * Math.sin(t / 5)

  saturn.rotation.y += 0.01;
  saturn.position.x = (534 / 10 + sunRadius / 10) * Math.cos(t / 6)
  saturn.position.z = (534 / 10 + sunRadius / 10) * Math.sin(t / 6)

  uranus.rotation.y += 0.01;
  uranus.position.x = (621 / 10 + sunRadius / 10) * Math.cos(t / 7)
  uranus.position.z = (621 / 10 + sunRadius / 10) * Math.sin(t / 7)

  neptune.rotation.y += 0.01;
  neptune.position.x = (695 / 10 + sunRadius / 10) * Math.cos(t / 8)
  neptune.position.z = (695 / 10 + sunRadius / 10) * Math.sin(t / 8)

  controls.update();

  renderer.render(scene, camera);
}
animate();