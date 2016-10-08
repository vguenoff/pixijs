let canvas = document.createElement('canvas');
canvas.setAttribute('width', 256);
canvas.setAttribute('height', 256);
canvas.style.border = '1px dashed black';
document.getElementById('wrapper').appendChild(canvas);

let ctx = canvas.getContext('2d');

// 
import { line } from './src/01DrawingLines';
// 
line(ctx);