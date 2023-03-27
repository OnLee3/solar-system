import * as THREE from 'three';

export const createStarField = (radius: number, imgUrl: string) => {
    const starFieldTexture = new THREE.TextureLoader().load(imgUrl);
    const starFieldGeometry = new THREE.SphereGeometry(radius, 64, 64);
    const starFieldMaterial = new THREE.MeshBasicMaterial({
        map: starFieldTexture,
        side: THREE.BackSide,
    });

    return new THREE.Mesh(starFieldGeometry, starFieldMaterial);
};
