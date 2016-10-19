export let contain = (sprite, container) => {
    //Create a set called `collision` to keep track of the
    //boundaries with which the sprite is colliding
    let collision = new Set();
	// left
    if(sprite.x < container.x) {
        sprite.x = container.x;
        collision.add('left');
    }
    //top
    if(sprite.y < container.y) {
        sprite.y = container.y;
        collision.add('top');
    }
    // right
    if((sprite.x + sprite.width) > container.width) {
        sprite.x = container.width - sprite.width;
        collision.add('right');
    }
    // bottom
    if((sprite.y + sprite.height) > container.height) {
        sprite.y = container.height - sprite.height;
        collision.add('bottom');
    }
    // if there is no collision set collision to 'undefined'
    if(collision.size === 0) collision = undefined;

    // return collision value
    return collision;
};