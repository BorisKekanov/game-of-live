const canvas = document.createElement('canvas')
canvas.addEventListener('click', handleClick)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext("2d")

document.body.appendChild(canvas);

const size = 30
const colCount = canvas.width / size
const rowCount = canvas.height / size
const world = [];

for (let row = 0; row < rowCount; row++) {
    const row = [];
   for (let i = 0; i < colCount; i++) {
    row.push(false)
    
   } 
   world.push(row)
}

function handleClick(event) {
    const col = Math.ceil(event.clientX / size) - 1;
    const row = Math.ceil(event.clientY / size) - 1;
    world[row][col]=!world[row][col]

    ctx.fillStyle= world[row][col] ? 'black': 'white'
    ctx.fillRect(col * size, row * size, size, size)
}
