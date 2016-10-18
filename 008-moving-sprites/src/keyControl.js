import { keyboard } from './keyboard';

// linear movement
//
// export let keyControl = (hero) => {
//     // capture the keyboard arrows
//     let left = keyboard(37),
//         up = keyboard(38),
//         right = keyboard(39),
//         down = keyboard(40);
//     // left
//     // change the sprite velocity when the key is pressed
//     left.press = () => {
//         hero.vx = -5;
//         hero.vy = 0;
//     };
//     // if the left arrow has been released, and the right arrow isn't down
//     // and the hero isn't moving vertically, stop the sprite form moving
//     // by setting it's velocity to zero
//     left.release = () => {
//         if(!right.isDown && hero.vy === 0) hero.vx = 0;
//     };
//     // up
//     up.press = () => {
//         hero.vy = -5;
//         hero.vx = 0;
//     };
//     up.release = () => {
//         if(!down.isDown && hero.vx === 0) hero.vy = 0;
//     };
//     // right
//     right.press = () => {
//         hero.vy = 0;
//         hero.vx = 5;
//     };
//     right.release = () => {
//         if(!left.isDown && hero.vy === 0) {
//             hero.vx = 0;
//         }
//     };
//     // down
//     down.press = () => {
//         hero.vy = 5;
//         hero.vx = 0;
//     };
//     down.release = () => {
//         if(!up.isDown && hero.vx === 0) {
//             hero.vy = 0;
//         }
//     };
// };

export let keyControl = (hero) => {
    // capture the keyboard arrows
    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);
    // left
    // change the sprite velocity when the key is pressed
    left.press = () => {
        hero.accelerationX = -hero.speed;
        hero.frictionX = 1;
    };
    left.release = () => {
        if(!right.isDown) {
            hero.accelerationX = 0;
            hero.frictionX = hero.drag;
        }
    };
    // up
    up.press = () => {
        hero.accelerationY = -hero.speed;
        hero.frictionY = 1;
    };
    up.release = () => {
        if(!down.isDown) {
            hero.accelerationY = 0;
            hero.frictionY = hero.drag;
        }
    };
    // right
    right.press = () => {
        hero.accelerationX = hero.speed;
        hero.frictionX = 1;
    };
    right.release = () => {
        if(!left.isDown) {
            hero.accelerationX = 0;
            hero.frictionX = hero.drag;
        }
    };
    // down
    down.press = () => {
        hero.accelerationY = hero.speed;
        hero.frictionY = 1;
    };
    down.release = () => {
        if(!up.isDown) {
            hero.accelerationY = 0;
            hero.frictionY = hero.drag;
        }
    };
};