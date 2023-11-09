export class Resizer {
    constructor(container, camera, renderer) {
        // Set the camera's aspect ratio
        camera.aspect = container.clientWidth / container.clientHeight;

        // update the camera's frustum
        // The camera stores its frustum in a mathematical object called a projection matrix, and to update this, we need to call the camera’s .updateProjectionMatrix method.
        camera.updateProjectionMatrix();

        // update the size of the renderer AND the canvas
        renderer.setSize(container.clientWidth, container.clientHeight);

        // set the pixel ratio (for mobile devices)
        renderer.setPixelRatio(window.devicePixelRatio);
    }
}