import { createScene } from "./components/Scene";
import { createCamera } from "./components/camera";
import { createRenderer } from "./systems/renderer";
import { createCube } from './components/cube.js';
import { Resizer } from "./systems/Resizer";
import { createLight } from "./components/lights";
import { createCube2 } from "./components/cube2";

// These variables are module-scoped: we cannot access them
// from outside the module
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
        const cube_2 = createCube2();
        const light = createLight();
        scene.add(cube, light);
        scene.add(cube_2, light)

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        renderer.render(scene, camera);
    }
}