// modules
import { scaleToWindow } from './src/scaleToWindow';

// aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    Graphics = PIXI.Graphics,
    // resources = PIXI.loader.resources,
    // TextureCache = PIXI.utils.TextureCache,
    // Texture = PIXI.Texture,
    Sprite = PIXI.Sprite;

// create stage and the renderer and game elements
let stage = new Container(),
    renderer = autoDetectRenderer(512, 512);
// add background color
renderer.backgroundColor = '0xffffff';
// add the canvas and scale to window
document.getElementById('game').appendChild(renderer.view);
scaleToWindow(renderer.view);
// set the game state
let state = play;
// any animation or game logic goes here
let play = () => {
    console.log('play');
};
// game loop
let gameLoop = () => {
    // loop this function 60 times per second
    requestAnimationFrame(gameLoop);

    // run the current state
    // state();

    // render the stage
    renderer.render(stage);
};
// setup
let setup = () => {
    let rectangle = new Graphics();
    rectangle.beginFill(0x0033CC);
    rectangle.lineStyle(4, 0xFF0000, 1);
    rectangle.drawRect(0, 0, 96, 96);
    rectangle.endFill();
    rectangle.x = 64;
    rectangle.y = 64;
    rectangle.alpha = 0.5;
    stage.addChild(rectangle);

    // show the stage
    renderer.view.style.opacity = 1;
    gameLoop();
};
// preloader
loader
    .add('fonts/puzzler.otf')
    .load(setup);
// scale to the browser window on resize
window.addEventListener('resize', () => {
    scaleToWindow(renderer.view);
});