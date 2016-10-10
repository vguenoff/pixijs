// modules
import { scaleToWindow } from './src/scaleToWindow';

// Aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

// create stage and the renderer
let stage = new Container(),
    renderer = autoDetectRenderer(800, 600);
// add the canvas
document.getElementById('game').appendChild(renderer.view);
scaleToWindow(renderer.view);

// this setup function will run when the image is loaded
let setup = () => {
    let pixie = new Sprite(
        resources['assets/pixie96x48.png'].texture
    );
    renderer.backgroundColor = 0xffffff;
    stage.addChild(pixie);
    renderer.render(stage);
    renderer.view.style.opacity = 1;
    console.log('setup');
};
// loading
let loadProgressHandler = (loader, resource) => console.log(`loading: ${resource.url}, ${loader.progress}`);
// Using PIXI's build in loader object to load the image
PIXI.loader
    .add('assets/pixie96x48.png')
    .on('progress', loadProgressHandler)
    .load(setup);

// scale to the browser window
window.addEventListener('resize', () => {
    scaleToWindow(renderer.view);
});