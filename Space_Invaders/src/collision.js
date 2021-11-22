class Collision {

    constructor(game) {
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
    }
    
    checkPlayerCollision(player) {
        //Player
        //Collision with left wall
        if(player.position.x < 0) player.position.x = 0

        //Collision with right wall
        if(player.position.x + player.imageWidth > this.gameWidth) player.position.x = this.gameWidth - player.imageWidth
    }

    checkAlienCollision(alien) {
        // Alien
        // Collision with right wall
        if(alien.position.x > this.gameWidth - alien.imageSize && alien.speed > 0) {
            return true
        }

        // Collision with left wall
        if(alien.position.x < 0 && alien.speed < 0) {
            return true
        }

        return false
    }

    checkIfAlienShooted(alien, shot) {
        if(!alien.shooted) {
            if(shot.position.x >= alien.position.x 
                && shot.position.x <= alien.position.x + alien.imageSize
                && shot.position.y < alien.position.y + alien.imageSize) {
                alien.shooted = true
                shot.enabled = false
            }
        }
    }

    checkAliensInvaded(alien) {
        if(!alien.shooted && alien.position.y >= 800) {
            alien.speed = 0
        }
    }

    checkBombCollision(bomb) {
        return bomb.position.y + bomb.height >= 850
    }

    checkIfPlayerShooted(bomb, player) {
        return bomb.position.x >= player.position.x
                && bomb.position.x <= player.position.x + player.imageWidth
                && bomb.position.y >= player.position.y
    }
}