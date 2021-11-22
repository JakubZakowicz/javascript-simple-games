const canvas = document.getElementById('gameScreen')
const ctx = canvas.getContext('2d')

const GAME_WIDTH = 1200
const GAME_HEIGHT = 900

const DELAY = 10

const game = new Game(GAME_WIDTH, GAME_HEIGHT)

setInterval(() => {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    game.draw(ctx)
    game.update()
}, DELAY)