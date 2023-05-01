// tutorial: https://www.youtube.com/watch?v=aJun0Q0CG_A

import * as THREE from "three";
import { OrbitControls } from "OrbitControls";
import { FlakesTexture } from "FlakesTexture";
import { RGBELoader } from "RGBELoader";

let scene, camera, renderer, controls, pointLight;

const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

const init = () => {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 500);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;

    pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(200, 200, 200);
    scene.add(pointLight);


    let envmaploader = new THREE.PMREMGenerator(renderer);

    new RGBELoader().setPath("./texture/").load("brown_photostudio_02_4k.hdr", function (hdrmap) {
        let envmap = envmaploader.fromCubemap(hdrmap);
        let texture = new THREE.CanvasTexture(new FlakesTexture());
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = 10;
        texture.repeat.y = 10;

        const ballMaterialContents = {
            color: 0x000,
            roughness: 0.3,
            metalness: 1,
            reflectivity: 1,
            clearcoat: 1,
            clearcoatRoughness: 0,
            normalMap: texture,
            normalScale: new THREE.Vector2(0.1, 0.1),
            envMap: envmap.texture,
            side: THREE.DoubleSide,
        }

        let ballGeometry = new THREE.SphereGeometry(100, 64, 64);
        let ballMaterial = new THREE.MeshPhysicalMaterial(ballMaterialContents);
        let ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
        scene.add(ballMesh);
    
    });
    animate();
}

init();
