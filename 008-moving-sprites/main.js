// modules
import { scaleToWindow } from './src/scaleToWindow';
// import { randomInt } from './src/randomInt';

// aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    // TextureCache = PIXI.utils.TextureCache,
    // Texture = PIXI.Texture,
    Sprite = PIXI.Sprite;

// create stage and the renderer
let stage = new Container(),
    renderer = autoDetectRenderer(512, 512);
// add the canvas and scale to window
document.getElementById('game').appendChild(renderer.view);
scaleToWindow(renderer.view);
// game elements
let pixie;
// game loop
let gameLoop = () => {
    // loop this function 60 times per second
    requestAnimationFrame(gameLoop);
    // move the sprite 1px per frame
    pixie.x += 10;
    // render the stage
    renderer.render(stage);
};
// setup
let setup = () => {
    // create the pixie sprite
    pixie = new Sprite(resources["assets/pixie96x48.png"].texture);
    // center the sprite vertically in the stage
    pixie.x = -pixie.width * 2;
    pixie.y = renderer.view.height / 2 - pixie.height / 2;
    // add the sprite to the stage
    stage.addChild(pixie);
    // show the stage
    renderer.view.style.opacity = 1;
    gameLoop();
};
// preloader
loader
    .add('assets/pixie96x48.png')
    .load(setup);

// scale to the browser window on resize
window.addEventListener('resize', () => {
    scaleToWindow(renderer.view);
});