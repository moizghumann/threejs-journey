import { createScene } from "./components/Scene";
import { createCamera } from "./components/camera";
import { createRenderer } from "./systems/renderer";
import { createCube } from './components/cube.js';
import { Resizer } from "./systems/Resizer";

let scene;
let camera;
let renderer;

export class World {
    constructor(container) {
        scene = createScene();
        camera = createCamera();
        renderer = createRenderer();

        container.appendChild(renderer.domElement);

        const cube = createCube();
        scene.add(cube);

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        renderer.render(scene, camera);
    }
}