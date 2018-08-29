// Get the canvas
const canvas = document.querySelector('#canvas')
canvas.width = canvas.height = 500;

// Get the 2d context canvas
const ctx = canvas.getContext('2d')

ctx.beginPath();
ctx.moveTo(100, 70) // move to the spot
ctx.lineTo(100, 20) // draw a vertical line
ctx.arcTo(150, 20, 150, 70, 50)
ctx.lineTo(100, 70) // draw a horizontal line

ctx.fill()
ctx.closePath()

// var i = 0;
// function loopIt() {
//     if (i++ < Math.PI * 2) {
//         drawPurpleCircle(i);
//     } else {
//         i = 0;
//         ctx.clearRect(0, 0, 500, 500);
//         setTimeout(loopIt, 400);
//     }
// };
// loopIt();


// function drawPurpleCircle(i) {
//     ctx.beginPath();
//     ctx.arc(100, 70, 50, 0, i);
//     ctx.fillStyle = "rebeccaPurple";
//     ctx.fill();
//     ctx.closePath();
//     setTimeout(loopIt, 400);
// };

// Notes
// 1 radian = 57.2957795 degrees
// var radians = (Math.PI/180) * degrees