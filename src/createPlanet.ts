import * as THREE from 'three';

export const createPlanet = (radius: number, imgUrl: string) => {
    const planetTexture = new THREE.TextureLoader().load(imgUrl);
    const planetGeometry = new THREE.SphereGeometry(radius, 32, 32);
    const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });

    return new THREE.Mesh(planetGeometry, planetMaterial);
};
