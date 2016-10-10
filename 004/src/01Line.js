export let line = ctx => {
    // style options
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 6;

    // draw
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(128, 128);
    // ctx.closePath();
    ctx.stroke();
};