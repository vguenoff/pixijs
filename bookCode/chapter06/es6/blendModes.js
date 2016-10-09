//Aliases
let Container = PIXI.Container,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Texture = PIXI.Texture,
  Sprite = PIXI.Sprite,
  RenderTexture = PIXI.RenderTexture,
  TilingSprite = PIXI.extras.TilingSprite;

//Create a Pixi stage and renderer
let stage = new Container(),
  renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Set the canvas's border style and background color
renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = "0xFFFFFF";

//load resources (images and fonts)
loader
  .add("images/animals.json")
  .load(setup);

//Set the initial game state
let state = play;

//Define any variables that are used in more than one function
let cat, hedgehog, tiger, id;

function setup() {

  //An alias for the texture atlas frame ids
  id = resources["images/animals.json"].textures;

  cat = new Sprite(id["cat.png"]);
  cat.position.set(32, 32);
  cat.scale.set(2, 2);
  cat.alpha = 0.5;
  cat.blendMode = PIXI.BLEND_MODES.MULTIPLY;  
  stage.addChild(cat);

  hedgehog = new Sprite(id["hedgehog.png"]);
  hedgehog.position.set(64, 64);
  hedgehog.scale.set(2, 2);
  hedgehog.alpha = 0.5;
  hedgehog.blendMode = PIXI.BLEND_MODES.MULTIPLY;  
  stage.addChild(hedgehog);

  tiger = new Sprite(id["tiger.png"]);
  tiger.position.set(96, 96);
  tiger.scale.set(2, 2);
  tiger.alpha = 0.5;
  tiger.blendMode = PIXI.BLEND_MODES.MULTIPLY;  
  stage.addChild(tiger);


  //Start the game loop
  gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);

  //Run the current state
  state();

  //Render the stage
  renderer.render(stage);
}

function play() {
  
}

