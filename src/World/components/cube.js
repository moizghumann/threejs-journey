import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

export function createCube() {
    const geometry = new BoxGeometry(2, 2, 2);
    const material = new MeshBasicMaterial({ color: 'brown' });

    const cube = new Mesh(geometry, material);

    return cube
}