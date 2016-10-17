import { keyboard } from './keyboard';
export let keyControl = (hero) => {
    // capture the keyboard arrows
    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);
    // left
    // change the sprite velocity when the key is pressed
    left.press = () => { hero.vx = -5; hero.vy = 0; };
    // if the left arrow has been released, and the right arrow isn't down
    // and the hero isn't moving vertically, stop the sprite form moving
    // by setting it's velocity to zero
    left.release = () => { if(!right.isDown && hero.vy === 0) hero.vx = 0; };
    // up
    up.press = () => { hero.vy = -5; hero.vx = 0; };
    up.release = () => { if(!down.isDown && hero.vx === 0) hero.vy = 0; };
    // right
    right.press = () => { hero.vy = 0; hero.vx = 5; };
    right.release = () => { if(!left.isDown && hero.vy === 0) hero.vx = 0; };
    // down
    down.press = () => { hero.vy = 5; hero.vx = 0; };
    down.release = () => { if(!up.isDown && hero.vx === 0) hero.vy = 0; };
};
