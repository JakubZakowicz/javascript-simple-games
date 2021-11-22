const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

canvas.width = 800
canvas.height = 600

const game = new Game(canvas.width, canvas.height)

function animate() {
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.draw(context)
    game.update()
    
    requestAnimationFrame(animate)
}

animate()