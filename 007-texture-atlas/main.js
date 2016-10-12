// modules
import { scaleToWindow } from './src/scaleToWindow';
import { randomInt } from './src/randomInt';

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

// making the blob
let blobMaker = (numOfBlobs, spacing, xOffset) => {
    for(let i = 0; i < numOfBlobs; i++) {
        // make a blob
        let blob = new Sprite(resources["assets/treasureHunter.json"].textures["blob.png"]),
            // space each blob horizontally according to the 'spacing' value
            // 'xOffset' determines the point from the left of the screen at which the first blob should be added
            x = spacing * i + xOffset,
            // give the blob a random y position
            y = randomInt(0, stage.height - blob.height);
            // set the blob position
        blob.position.set(x, y);
            // add the blob sprite to the stage
        stage.addChild(blob);
    }
};

// game elements and setup
let dungeon,
    explorer,
    treasure,
    door,
    setup = () => {
        // dungeon
        dungeon = new Sprite(resources["assets/treasureHunter.json"].textures["dungeon.png"]);
        stage.addChild(dungeon);
        // explorer
        explorer = new Sprite(resources["assets/treasureHunter.json"].textures["explorer.png"]);
        explorer.x = 68;
        explorer.y = stage.height / 2 - explorer.height / 2;
        stage.addChild(explorer);
        // treasure
        treasure = new Sprite(resources["assets/treasureHunter.json"].textures["treasure.png"]);
        treasure.x = stage.width - treasure.width - 48;
        treasure.y = stage.height / 2 - treasure.height / 2;
        stage.addChild(treasure);
        // door
        door = new Sprite(resources["assets/treasureHunter.json"].textures["door.png"]);
        door.position.set(door.width, 0);
        stage.addChild(door);

        // make 6 blobs
        blobMaker(6, 48, 150);

        renderer.render(stage);
        renderer.view.style.opacity = 1;
};

// pre loader
loader
    .add('assets/treasureHunter.json')
    .load(setup);

// scale to the browser window on resize
window.addEventListener('resize', () => {
    scaleToWindow(renderer.view);
});