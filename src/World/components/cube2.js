import { BoxGeometry, BufferAttribute, MathUtils, BufferGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, MeshToonMaterial } from "three";

export function createCube2() {
    const geometry = new BoxGeometry(2, 2, 2);
    const material = new MeshStandardMaterial({ color: 'pink' });

    const cube = new Mesh(geometry, material);


    cube.rotation.set(300 * (Math.PI / 180), 0, MathUtils.degToRad(45))
    cube.position.set(-2, 0, 0);

    return cube
}