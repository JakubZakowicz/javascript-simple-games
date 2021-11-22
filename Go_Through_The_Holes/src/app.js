const canvas = document.getElementById('screen')
const ctx = canvas.getContext('2d')

const WIDTH = 1200
const HEIGHT = 900
const DELAY = 16.67

const game = new Game(WIDTH, HEIGHT)

setInterval(() => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    game.draw(ctx)
    game.update()
    
}, DELAY)