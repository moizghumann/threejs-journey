import { BoxGeometry, MeshStandardMaterial, Mesh } from "three";

export function createCube3() {
    const geometry = new BoxGeometry(2, 2, 2);
    const material = new MeshStandardMaterial({ color: 'blue' });

    const cube = new Mesh(geometry, material);

    // cube.rotation.set(-0.5, -0.1, 0.8)
    cube.position.z = 2
    cube.scale.set(.4, .4, .4)

    return cube
}