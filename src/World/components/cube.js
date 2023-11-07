import { BoxGeometry, BufferAttribute, BufferGeometry, Mesh, MeshBasicMaterial } from "three";

export function createCube() {
    const geometry = new BufferGeometry();

    const vertices = new Float32Array([
        0, 1, 0,  // V1
        -1, -1, 0,  // V2
        1, -1, 0,  // V3

        0, 1, 0,  // V1
        -1, -1, 0,  // V2
        1, -1, 0  // V3
    ]);

    const indices = [0, 1, 2];

    geometry.setIndex(indices);
    geometry.setAttribute('position', new BufferAttribute(vertices, 3));

    const material = new MeshBasicMaterial({ color: 'green' });

    const triangle = new Mesh(geometry, material);

    return triangle
}