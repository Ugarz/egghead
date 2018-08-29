// Get the canvas
const canvas = document.querySelector('#canvas')
canvas.width = canvas.height = 500;

// Get the 2d context canvas
const ctx = canvas.getContext('2d')

// // Get the 2d context canvas
// ctx.fillStyle = 'gold'
// // ctx.fillStyle = "rgb(255, 192, 203)"
// // ctx.fillStyle = "rgba(255, 192, 203, .5)"

// ctx.fillStyle = "#ffc0cb"
// ctx.fillRect(0, 0, 50, 50)

// Episode 4 -  Arc
ctx.beginPath();
// ctx.arc(centerX, centerY, radius, startAngle, endAngle, isAntiClockwise)

ctx.arc(50, 50, 20, Math.PI/180 * 0, Math.PI/180 * 360, true)
// ctx.arc(50, 50, 20, 0, .5, true)
ctx.fillStyle = 'gold'
ctx.fill();
ctx.closePath()
// Notes
// 1 radian = 57.2957795 degrees
// var radians = (Math.PI/180) * degrees