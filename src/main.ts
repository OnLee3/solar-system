import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { fetchPlanetData } from "./api";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

const earthDataPromise = fetchPlanetData("earth");
const marsDataPromise = fetchPlanetData("mars");

Promise.all([earthDataPromise, marsDataPromise]).then(([earthData, marsData]) => {
  const earthTexture = new THREE.TextureLoader().load(earthData.image);
  const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
  const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
  const earth = new THREE.Mesh(earthGeometry, earthMaterial);
  scene.add(earth);

  const marsTexture = new THREE.TextureLoader().load(marsData.image);
  const marsGeometry = new THREE.SphereGeometry(0.53, 32, 32);
  const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
  const mars = new THREE.Mesh(marsGeometry, marsMaterial);
  mars.position.x = 3;
  scene.add(mars);
});

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
