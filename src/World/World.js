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

        // adds the graphics created by the renderer to a specific part of a web page, referred to as a "container." It's like putting a picture or a video on a webpage.
        container.appendChild(renderer.domElement);

        const cube = createCube();
        const cube_2 = createCube2();
        const light = createLight();
        scene.add(cube, light);
        scene.add(cube_2, light)

        // reason why resizer here is an instance of a class rather than a module function like createScene etc is because it is encapsulating three functions in it that collectively 'resize' and 'update'. also it helps manage state i.e remembering current size and shape of camera and canvas
        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        renderer.render(scene, camera);
    }
}