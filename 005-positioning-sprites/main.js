// modules
import { scaleToWindow } from './src/scaleToWindow';

// Aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

// create stage and the renderer
let stage = new Container(),
    renderer = autoDetectRenderer(512, 512);
// add the canvas
document.getElementById('game').appendChild(renderer.view);
scaleToWindow(renderer.view);

// this setup function will run when the image is loaded
let setup = () => {
    let cat = new Sprite(
        resources['assets/cat64x64.png'].texture
    );
    cat.position.set(128, 128);
    cat.anchor.set(0.5, 0.5);
    // cat.width = 80;
    // cat.height = 120;
    // cat.scale.x = 0.5;
    // cat.scale.y = 0.5;
    // cat.scale.set(0.5, 0.5);

    // rotation is in radians
    // radians = degrees * (Math.PI / 180);
    // degree = radians * (180 / Math.PI);

    cat.rotation = 90 * (Math.PI / 180);

    stage.addChild(cat);
    renderer.backgroundColor = 0xffffff;
    renderer.render(stage);
    renderer.view.style.opacity = 1;
};
// loading
let loadProgressHandler = (loader, resource) => console.log(`loading: ${resource.url}, ${loader.progress}`);
// Using PIXI's build in loader object to load the image
PIXI.loader
    .add('assets/cat64x64.png')
    .on('progress', loadProgressHandler)
    .load(setup);

// scale to the browser window
window.addEventListener('resize', () => {
    scaleToWindow(renderer.view);
});