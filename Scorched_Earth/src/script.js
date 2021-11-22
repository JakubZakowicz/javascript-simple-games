const canvas = document.getElementById('screen')
const ctx = canvas.getContext('2d')

canvas.width = 1920
canvas.height = 934

const game = new Game(canvas.width, canvas.height)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update()
    game.draw(ctx)

    requestAnimationFrame(animate)
}

animate()