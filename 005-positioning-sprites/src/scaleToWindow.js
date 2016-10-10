export let scaleToWindow = (canvas, backgroundColor) => {

    backgroundColor = backgroundColor || "#2C3539";
    let scaleX, scaleY, scale, center;

    //Figure out the scale amount on each axis
    scaleX = window.innerWidth / canvas.offsetWidth;
    scaleY = window.innerHeight / canvas.offsetHeight;

    scale = Math.min(scaleX, scaleY);
    canvas.style.transformOrigin = "0 0";
    canvas.style.transform = "scale(" + scale + ")";
    console.log(scaleX);

    if (Math.ceil(canvas.offsetHeight * scale) < window.innerHeight) {
        center = "vertically";
    } else {
        center = "horizontally";
    }

    let margin;
    if (center === "horizontally") {
        margin = (window.innerWidth - canvas.offsetWidth * scale) / 2;
        canvas.style.marginTop = 0;
        canvas.style.marginBottom = 0;
        canvas.style.marginLeft = margin + "px";
        canvas.style.marginRight = margin + "px";
    }

    if (center === "vertically") {
        margin = (window.innerHeight - canvas.offsetHeight * scale) / 2;
        canvas.style.marginTop = margin + "px";
        canvas.style.marginBottom = margin + "px";
        canvas.style.marginLeft = 0;
        canvas.style.marginRight = 0;
    }

    canvas.style.paddingLeft = 0;
    canvas.style.paddingRight = 0;
    canvas.style.paddingTop = 0;
    canvas.style.paddingBottom = 0;
    canvas.style.display = "block";

    document.body.style.backgroundColor = backgroundColor;

    return scale;
};
