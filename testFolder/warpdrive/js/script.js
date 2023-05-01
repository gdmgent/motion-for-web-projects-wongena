//tutorial: https://www.youtube.com/watch?v=Bed1z7f1EI4

import * as THREE from "https://cdn.skypack.dev/pin/three@v0.132.2-1edwuDlviJO0abBvWgKd/mode=imports/optimized/three.js";
let scene, camera, renderer, starBox, stars, vertices;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    starBox = new THREE.BufferGeometry();
    vertices = {
        positions: [],
        accelerations: [],
        velocities: [],
    };
    for(let i = 0; i < 18000; i++) {
        vertices.positions.push(Math.random() * 600 - 300);
        if(i % 3 === 0) {
            vertices.accelerations.push(0);
            vertices.velocities.push(.2);
        }
    }
    starBox.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices.positions), 3));

    let starImage = new THREE.TextureLoader().load('./images/star.png');
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: starImage
    });

    stars = new THREE.Points(starBox, starMaterial);
    scene.add(stars);

    animate();
}

function animate() {
    for(let i = 0; i < vertices.velocities.length; i++) {
        vertices.velocities[i / 3 + i % 3] += vertices.accelerations[i];
        vertices.positions[i * 3 + 1] -= vertices.velocities[i];
        if(vertices.positions[i*3 +1] < -200) {
            vertices.positions[i * 3 + 1] = 400;
            vertices.velocities[i / 3 + i % 3] = 0;
        }
    }
    stars.rotation.y += 0.001;
    starBox.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices.positions), 3));
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();