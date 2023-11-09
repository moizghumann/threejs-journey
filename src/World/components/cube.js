import { BoxGeometry, BufferAttribute, BufferGeometry, MathUtils, Mesh, MeshBasicMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial } from "three";

export function createCube() {
    const geometry = new BoxGeometry(2, 2, 2);
    const material = new MeshPhysicalMaterial({ color: 'green' });

    const cube = new Mesh(geometry, material);

    // cube.rotation.set(-0.5, -0.1, 0.8);
    cube.rotation.set(MathUtils.degToRad(300), 0, MathUtils.degToRad(45));

    cube.position.set(2, 0, 0)

    return cube
}