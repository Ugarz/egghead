// Get the canvas
const canvas = document.querySelector('#canvas')
canvas.width = canvas.height = 500;

// Get the 2d context canvas
const ctx = canvas.getContext('2d')

// Simple arc filled
ctx.beginPath();
ctx.arc(50, 50, 20, Math.PI/180 * 0, Math.PI/180 * 360, true)
ctx.fillStyle = 'gold'
ctx.fill()
ctx.closePath()

ctx.beginPath();
ctx.arc(20, 120, 10, 0, Math.PI*2)
ctx.strokeStyle = "pink"
ctx.lineWidth = 10
ctx.stroke()
ctx.closePath()



// Notes
// 1 radian = 57.2957795 degrees
// var radians = (Math.PI/180) * degrees