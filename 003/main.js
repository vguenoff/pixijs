// // module example
// import { line } from './src/01Line';
// //
// line(ctx);

// Aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;
//

// create stage and the renderer
let stage = new Container(),
    renderer = autoDetectRenderer(800, 600);
// add the canvas
document.getElementById('game').appendChild(renderer.view);
scaleToWindow(renderer.view);
/* You can also create a renderer with more advanced options like this:
 //Create a Pixi renderer
 var renderer = PIXI.autoDetectRenderer(
 256,                     //Width
 256,                     //Height
 {                        //Options
 antialiasing: false,
 transparent: false,
 resolution: 1
 },
 false                    //Optionally force canvas rendering
 );

 //Force canvas rendering like this:
 //var renderer = new PIXI.CanvasRenderer(256, 256);

 //Force WebGL rendering like this:
 //var renderer = new PIXI.WebGLRenderer(256, 256);
 */

// this setup function will run when the image is loaded
let setup = () => {
    let pixie = new Sprite(
        resources['assets/pixie96x48.png'].texture
    );
    renderer.backgroundColor = 0xffffff;
    stage.addChild(pixie);
    // stage.removeChild(pixie);
    // pixie.visible = false;
    // pixie.destroy(true, true);
    renderer.render(stage);
    renderer.view.style.opacity = 1;
};

// Using PIXI's build in loader object to load the image
PIXI.loader
    .add('assets/pixie96x48.png')
    .load(setup);

// scale to the browser window
window.addEventListener('resize', () => {
    scaleToWindow(renderer.view);
});