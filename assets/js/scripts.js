/*
=====================================================
                    =    main scripts starts   =
=====================================================
*/
document.addEventListener("keydown", function (event) {
  console.log(event.which);
})
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var texture = new THREE.TextureLoader().load('obj/sun.jpg');

var geometry = new THREE.SphereGeometry(2, 20, 20);
var material = new THREE.MeshBasicMaterial({ map: texture });
var sun = new THREE.Mesh(geometry, material);
scene.add(sun);


// var mtlLoader = new THREE.MTLLoader();
var mtlLoader = new THREE.MTLLoader().load('obj/mercury.mtl', function (materials) {

  materials.preload();
  
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials)

  objLoader.load('obj/mercury.obj', function (mesh) {
    scene.add(mesh)
  })
})
// var texture = new THREE.TextureLoader().load('obj/mercury.png');


// var geometry = new THREE.SphereGeometry(2, 20, 20);
// var material = new THREE.MeshBasicMaterial({ map: texture });
// var mercury = new THREE.Mesh(geometry, material);
// mercury.position.x=-4;
// scene.add(mercury);

// scene.add();
camera.position.z = 15;
function animate() {
  requestAnimationFrame(animate);
  sun.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();