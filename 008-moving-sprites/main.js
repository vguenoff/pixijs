// modules
import { scaleToWindow } from './src/scaleToWindow';
import { frame } from './src/frame';
// import { keyboard } from './src/keyboard';
import { keyControl } from './src/keyControl';
// aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    // resources = PIXI.loader.resources,
    // TextureCache = PIXI.utils.TextureCache,
    // Texture = PIXI.Texture,
    Sprite = PIXI.Sprite;
// create stage and the renderer and game elements
let stage = new Container(),
    renderer = autoDetectRenderer(512, 512),
    pixie,
    state;
// add the canvas and scale to window
document.getElementById('game').appendChild(renderer.view);
scaleToWindow(renderer.view);

// play function
let play = () => {
    // apply the velocity values to sprite's position to make it move
    pixie.x += pixie.vx;
    pixie.y += pixie.vy;
};
// game loop
let gameLoop = () => {
    // loop this function 60 times per second
    requestAnimationFrame(gameLoop);
    // update the current game state
    state();
    // render the stage
    renderer.render(stage);
};
// setup
let setup = () => {
    // create the pixie sprite
    // pixie = new Sprite(resources["assets/pixie96x64.png"].texture);
    pixie = new Sprite(frame('assets/pixie96x64.png', 0, 0, 96, 64));
    // position the sprite on the top left corner
    // pixie.scale.set(5, 5);
    pixie.x = renderer.view.width / 2 - pixie.width / 2;
    pixie.y = renderer.view.height / 2 - pixie.height / 2;
    // initialize the sprites velocity variables
    pixie.vx = 0;
    pixie.vy = 0;
    // add pixie key control
    keyControl(pixie);
    // state
    state = play;
    // add the sprite to the stage
    stage.addChild(pixie);
    // show the stage
    renderer.view.style.opacity = 1;
    gameLoop();
};
// preloader
loader
    .add('assets/pixie96x64.png')
    .load(setup);
// scale to the browser window on resize
window.addEventListener('resize', () => {
    scaleToWindow(renderer.view);
});