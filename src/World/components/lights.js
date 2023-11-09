import { DirectionalLight, PointLight, SpotLight } from "three"

export function createLight() {
    // The DirectionalLight is designed to mimic a distant source of light such as the sun. Light rays from a DirectionalLight don’t fade with distance. All objects in the scene will be illuminated equally brightly no matter where they are placed - even behind the light.
    const light = new DirectionalLight('white', 8);

    // The DirectionalLight shines from light.position to light.target.position
    light.position.set(-3, 4, 6);

    return light
}