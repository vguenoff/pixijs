export let frame = (source, x, y, width, height) => {
    let texture,
        imageFrame,
        // aliases
        TextureCache = PIXI.utils.TextureCache,
        Texture = PIXI.Texture,
        Rectangle = PIXI.Rectangle;

    // if the source is string, is's either in the texture cache or in a image file
    if(typeof source === 'string') {
        if(TextureCache[source]) {
            texture = new Texture(TextureCache[source]);
        }
    }
    // if the 'source' is texture, use it
    else if(source instanceof Texture) {
        texture = new Texture(source);
    }
    if(!texture) {
        console.log(`Please enter a ${source} texture into the cache.`);
    } else {
        // make a rectangle the size of a sub-image
        imageFrame = new Rectangle(x, y, width, height);
        texture.frame = imageFrame;
        texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        return texture;
    }
};