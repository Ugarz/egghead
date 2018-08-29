const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const coords = document.querySelector('.display-coords')

console.log('Living ma life like its Golden');
ctx.fillStyle = "gold"

console.log('Filling rectangle');
ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);

/**
 * G
 * @param {Object} event 
 */
const getCoords = (event) => {
    const container = canvas.getBoundingClientRect();
    const x = (event.clientX - container.left) - container.width / 2;
    const y = (event.clientY - container.top) - container.height / 2;
    console.log('Coords', {x,y})
    coords.textContent = `${x}, ${y}`
};

canvas.addEventListener('click', getCoords)