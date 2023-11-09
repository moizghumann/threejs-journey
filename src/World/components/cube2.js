import { BoxGeometry, BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, MeshToonMaterial } from "three";

export function createCube2() {
    const geometry = new BoxGeometry(2, 2, 2);
    const material = new MeshStandardMaterial({ color: 'pink' });

    const cube = new Mesh(geometry, material);
    cube.rotation.set(-0.5, -0.1, 0.8)

    cube.position.set(-2, 0, 0)


    return cube
}