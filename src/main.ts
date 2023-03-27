import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthImage from '../assets/2k_earth_daymap.jpeg';
import marsImage from '../assets/2k_mars.jpeg';
import jupiterImage from '../assets/2k_jupiter.jpeg';
import starFieldImage from '../assets/2k_stars.jpeg';
import { createPlanet } from './createPlanet';
import { createStarField } from './createStarField';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

const earth = createPlanet(1, earthImage);
scene.add(earth);

const mars = createPlanet(0.53, marsImage);
mars.position.x = 3;
scene.add(mars);

const jupiter = createPlanet(3.5, jupiterImage);
jupiter.position.x = -5;
scene.add(jupiter);

const starField = createStarField(100, starFieldImage);
scene.add(starField);

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();
