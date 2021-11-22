class KeyHanlder {

    constructor(player) {
        document.addEventListener('keydown', e => {
            switch(e.keyCode) {
                case 37:
                    player.moveLeft()
                    break
                case 39:
                    player.moveRight()
                    break
                case 32:
                    player.shot.enabled = true
                    break
            }
        })

        document.addEventListener('keyup', e => {
            switch(e.keyCode) {
                case 37:
                    if(player.speed < 0) player.stop()
                    break
                case 39:
                    if(player.speed > 0) player.stop()
                    break
            }
        })
    }
}