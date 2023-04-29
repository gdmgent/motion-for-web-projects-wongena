
// Import Three.js module
import * as THREE from "https://cdn.skypack.dev/pin/three@v0.132.2-1edwuDlviJO0abBvWgKd/mode=imports/optimized/three.js";

//parameters
const parameters = {
	count: 40000,
	size: 0.008,
	radius: 5,
	spinSpeed: 0.00015,
	insideColor: "#A2D3FF",
	outsideColor: "#CEA2FF",
  };

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000);
camera.position.z = 5;

// Get the canvas element by id
const canvas = document.getElementById('canvas');

// Create a renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas, alpha: true});
renderer.setSize(window.outerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a particle geometry
const particleGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(parameters.count * 3); // x, y, z for each particle
const colors = new Float32Array(parameters.count * 3); // r, g, b for each particle
const colorInside = new THREE.Color(parameters.insideColor);
const colorOutside = new THREE.Color(parameters.outsideColor);

// Fill the positions and colors arrays with random values
for (let i = 0; i < parameters.count; i++) {
  // Position
  const i3 = i * 3;
  const radius = Math.random() * parameters.radius;
  //const spinAngle = radius * Math.PI;
  const angle = Math.random() * Math.PI * 2;
  const x = Math.sin(angle) * radius;
  const y = Math.cos(angle) * radius;
  const z = Math.random() / radius - radius / 2;
  positions[i3] = x;
  positions[i3 + 1] = y;
  positions[i3 + 2] = z;

  //mix 3 colors
  const mixedColor = colorInside.clone();
  mixedColor.lerp(colorOutside, radius / parameters.radius);

  //kleuren r g en b opvullen
  colors[i3] = mixedColor.r;
  colors[i3 + 1] = mixedColor.g;
  colors[i3 + 2] = mixedColor.b;
}

// Set the positions and colors attributes of the particle geometry
particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// Create a canvas element for the particle texture
var particleCanvas = document.createElement('canvas');
particleCanvas.width = 64;
particleCanvas.height = 64;

// Get the canvas context
var particleContext = particleCanvas.getContext('2d');

// Draw a circle on the canvas
particleContext.beginPath();
particleContext.arc(32, 32, 30, 0, Math.PI * 2);
particleContext.fillStyle = '#ffffff';
particleContext.fill();

// Create a texture from the canvas
var particleTexture = new THREE.Texture(particleCanvas);
particleTexture.needsUpdate = true;

// Create a particle material with the texture
var particleMaterial = new THREE.PointsMaterial({
	map: particleTexture,
	size: parameters.size,
	vertexColors: true,
});

// Create a particle system
const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);

particleSystem.rotation.x = 2.3;
particleSystem.rotation.y = 0.7;
// Create an animation loop
const animate = function () {
  requestAnimationFrame(animate);

  // Rotate the particle system
  particleSystem.rotation.z += parameters.spinSpeed;

  // Render the scene
  renderer.render(scene, camera);
};

animate();

window.addEventListener('resize', onWindowResize);

function onWindowResize () {
  renderer.setSize (window.innerWidth, window.innerHeight);
  renderer.setViewport (0, 0, window.innerWidth, window.innerHeight);
}