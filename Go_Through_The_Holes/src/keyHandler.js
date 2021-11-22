class KeyHandler {

    constructor(game, player) {
        document.addEventListener('keydown', e => {
            switch(e.keyCode) {
                case 37:
                    player.moveLeft()
                    break
                case 38:
                    player.moveUp()
                    break
                case 39:
                    player.moveRight()
                    break
                case 40:
                    player.moveDown()
                    break
                case 32:
                    game.start()
                    break
            }
        })

        document.addEventListener('keyup', e => {
            switch(e.keyCode) {
                case 37:
                    player.stopX()
                    break
                case 38:
                    player.stopY()
                    break
                case 39:
                    player.stopX()
                    break
                case 40:
                    player.stopY()
                    break
            }
        })
    }
}