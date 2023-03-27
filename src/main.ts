import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { fetchPlanetData } from "./api";
import earthImage from '../assets/2k_earth_daymap.jpeg';
import marsImage from '../assets/2k_mars.jpeg';
import jupiterImage from '../assets/2k_jupiter.jpeg';
import starFieldImage from '../assets/2k_stars.jpeg';

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

const earthTexture = new THREE.TextureLoader().load(earthImage);
const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

const marsTexture = new THREE.TextureLoader().load(marsImage);
const marsGeometry = new THREE.SphereGeometry(0.53, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.x = 3;
scene.add(mars);

const jupiterTexture = new THREE.TextureLoader().load(jupiterImage);
const jupiterGeometry = new THREE.SphereGeometry(1.13, 32, 32); // Adjust the size (e.g., 1.13) according to the actual size ratio
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.x = 6;
scene.add(jupiter);

const starFieldTexture = new THREE.TextureLoader().load(starFieldImage);
const starFieldGeometry = new THREE.SphereGeometry(90, 64, 64); // Set a large radius (e.g., 90) to encapsulate the entire scene
const starFieldMaterial = new THREE.MeshBasicMaterial({
    map: starFieldTexture,
    side: THREE.BackSide,
}); // Set side to THREE.BackSide to render the texture on the inside of the sphere
const starField = new THREE.Mesh(starFieldGeometry, starFieldMaterial);

scene.add(starField);

const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();
