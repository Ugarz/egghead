// Get the canvas
const canvas = document.querySelector('#canvas')
canvas.width = canvas.height = 500;

// Get the 2d context canvas
const ctx = canvas.getContext('2d')

// Get the 2d context canvas
ctx.fillStyle = 'gold'
// ctx.fillStyle = "rgb(255, 192, 203)"
// ctx.fillStyle = "rgba(255, 192, 203, .5)"

ctx.fillStyle = "#ffc0cb"
ctx.fillRect(0, 0, 50, 50)
