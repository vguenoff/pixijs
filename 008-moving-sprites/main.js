// modules
import { scaleToWindow } from './src/scaleToWindow';
import { frame } from './src/frame';
// import { keyboard } from './src/keyboard';
import { keyControl } from './src/keyControl';
import { contain } from './src/contain';
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
    // apply acceleration by adding the acceleration to the sprite’s velocity
    pixie.vx += pixie.accelerationX;
    pixie.vy += pixie.accelerationY;
    // apply friction by multiplying sprite’s velocity by the friction
    pixie.vx *= pixie.frictionX;
    pixie.vy *= pixie.frictionY;
    // gravity
    pixie.vy += 0.1;
    // apply the velocity values to sprite's position to make it move
    pixie.x += pixie.vx;
    pixie.y += pixie.vy;
    // use the contain function to keep the sprite inside the canvas
    let collision = contain(pixie, {
        x: 0,
        y: 0,
        width: renderer.view.width,
        height: renderer.view.height
    });
    if(collision) {
        // reverse the sprite's vx and vy if a collision occurs
        if(collision.has('left') || collision.has('right')) pixie.vx = -pixie.vx;
        if(collision.has('top') || collision.has('bottom')) pixie.vy = -pixie.vy;
    }

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
    pixie = new Sprite(frame('assets/pixie96x64.png', 0, 0, 96, 64));
    // position the sprite in the center
    pixie.x = renderer.view.width / 2 - pixie.width / 2;
    pixie.y = renderer.view.height / 2 - pixie.height / 2;
    // initialize the sprites velocity variables
    pixie.vx = 0;
    pixie.vy = 0;
    // acceleration and friction properties
    pixie.accelerationX = 0;
    pixie.accelerationY = 0;
    pixie.frictionX = 1;
    pixie.frictionY = 1;
    // set the pixie's speed
    pixie.speed = 0.2;
    // the friction resistance
    pixie.drag = 0.98;
    // add pixie key control with speed and drag
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

