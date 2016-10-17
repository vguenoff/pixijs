// modules
import { scaleToWindow } from './src/scaleToWindow';
import { frame } from './src/frame';

// aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    Sprite = PIXI.Sprite;

// create stage and the renderer
let stage = new Container(),
    renderer = autoDetectRenderer(
        512,
        512,
        {
            antialiasing: true,
            transparent: true,
            resolution: 1
        },
        // optionally force canvas rendering
        false
    );
// add the canvas
document.getElementById('game').appendChild(renderer.view);
scaleToWindow(renderer.view);

// this setup function will run when the image is loaded
let setup = () => {
    let adventuress = new Sprite(frame('assets/tileset.png', 160, 256, 32, 32));
    // position the sprite
    adventuress.x = 64;
    adventuress.y = 64;
    // scale the sprite up sp it's 3 times bigger then the original image
    adventuress.scale.set(6, 6);
    stage.addChild(adventuress);

    renderer.backgroundColor = 0xffffff;
    renderer.render(stage);
    renderer.view.style.opacity = 1;
};
// loading
let loadProgressHandler = (loader, resource) => console.log(`loading: ${resource.url}, ${loader.progress}`);

// Using PIXI's build in loader object to load the image
PIXI.loader
    .add('assets/tileset.png')
    .on('progress', loadProgressHandler)
    .load(setup);

// scale to the browser window
window.addEventListener('resize', () => {
    scaleToWindow(renderer.view);
});