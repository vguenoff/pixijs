//Aliases
let Container = PIXI.Container,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  loader = PIXI.loader,
  Sprite = PIXI.Sprite,
  Text = PIXI.Text;

//Create a Pixi stage and renderer 
let stage = new Container(),
  renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Set the canvas's border style and background color
renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = "0xFFFFFF";

//load an image and run the `setup` function when it's done
loader
  .add("images/cat64x64.png")
  .add("images/box64x64.png")
  .load(setup);

//Define any variables that are used in more than one function
let cat, box, message, state;

function setup() {

  //Create the `cat` sprite 
  cat = new Sprite.fromImage("images/cat64x64.png");

  //Center the sprite
  cat.x = 16;
  cat.y = 32; 

  //Initialize the sprites's velocity variables
  cat.vx = 0;
  cat.vy = 0;

  //Add the sprite to the stage
  stage.addChild(cat);

  //Create the `box` sprite and add it to the stage
  box = new Sprite.fromImage("images/box64x64.png");
  box.x = renderer.view.width / 2 - box.width / 2;
  box.y = renderer.view.height / 2 - box.height / 2;
  stage.addChild(box);

  //Create the text sprite
  message = new Text(
    "No collision...", 
    {font: "18px sans-serif", fill: "black"}
  );
  message.position.set(8, 8);
  stage.addChild(message);

  //Capture the keyboard arrow keys
  let left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40);

  //Left arrow key `press` method
  left.press = function() {

    //Change the cat.s velocity when the key is pressed
    cat.vx = -5;
    cat.vy = 0;
  };

  //Left arrow key `release` method
  left.release = function() {

    //If the left arrow has been released, and the right arrow isn't down,
    //and the cat isn't moving vertically, stop the sprite from moving
    //by setting its velocity to zero
    if (!right.isDown && cat.vy === 0) {
      cat.vx = 0;
    }
  };

  //Up
  up.press = () => {
    cat.vy = -5;
    cat.vx = 0;
  };
  up.release = () => {
    if (!down.isDown && cat.vx === 0) {
      cat.vy = 0;
    }
  };

  //Right
  right.press = () => {
    cat.vx = 5;
    cat.vy = 0;
  };
  right.release = () => {
    if (!left.isDown && cat.vy === 0) {
      cat.vx = 0;
    }
  };

  //Down
  down.press = () => {
    cat.vy = 5;
    cat.vx = 0;
  };
  down.release = () => {
    if (!up.isDown && cat.vx === 0) {
      cat.vy = 0;
    }
  };

  //Set the game's current state to `play`
  state = play;
 
  //Start the game loop
  gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);

  //Update the current game state:
  state();  

  //Render the stage
  renderer.render(stage);
}

function play() {

  //Apply the velocity values to the sprite's position to make it move
  cat.x += cat.vx;
  cat.y += cat.vy;

  //Check for a collision between the cat and the box
  if (hitTestRectangle(cat, box)) {

    //If there's a collision, change the message text and tint the box red
    message.text = "hit!";
    box.tint = 0xFF3300;
  } else {

    //If there's no collision, reset the message text and the box's color
    message.text = "No collision...";
    box.tint = 0xFFFFFF;
  }
}

//The hitTestRectangle function
function hitTestRectangle(r1, r2) {

  //Calculate `centerX` and `centerY` properties on the sprites
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Calculate the `halfWidth` and `halfHeight` properties of the sprites
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Create a `collision` variable that will tell us
  //if a collision is occurring
  let collision = false;

  //Check whether the shapes of the sprites are overlapping. If they
  //are, set `collision` to `true`
  if (Math.abs(r1.centerX - r2.centerX) < r1.halfWidth + r2.halfWidth
  && Math.abs(r1.centerY - r2.centerY) < r1.halfHeight + r2.halfHeight) {
    collision = true;
  }

  //Return the value of `collision` back to the main program
  return collision;
}

//The `keyboard` helper function
function keyboard(keyCode) {
  let key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = event  => {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = event => {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );

  //Return the key object
  return key;
}



