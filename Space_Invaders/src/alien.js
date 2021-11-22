class Alien {

    constructor(game, positionX, positionY) {
        this.image = document.getElementById('alien')
        this.position = { x: positionX, y: positionY }
        this.imageSize = 50
        this.game = game

        this.shooted = false
        this.speed = 2
        this.explosion = new Explosion()
        this.bombs = []
        this.canShoot = false
        this.bombDelay = 0
        this.timer = 0
    }

    draw(ctx) {
        if(!this.shooted) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.imageSize, this.imageSize)
        } else {
            this.explosion.draw(ctx, this.position.x, this.position.y)
        }
        this.bombs.forEach(bomb => bomb.draw(ctx))
    }

    update() {
        if(!this.shooted) {
            this.position.x += this.speed
            
            if(this.canShoot) {
                if(this.timer === this.bombDelay) {
                    this.bombs.push(new Bomb(this))
                    this.timer = 0
                    this.canShoot = false
                }
                this.timer++
            } else {
                this.canShoot = true
                this.bombDelay = this.getRandomBombTiming()
            }
        }

        this.bombs.forEach(bomb => {
            if(!this.game.collision.checkBombCollision(bomb)) {
                bomb.update()
            } else {
                this.bombs.splice(bomb, 1)
            }
        })

        this.bombs.forEach(bomb => {
            if(this.game.collision.checkIfPlayerShooted(bomb, this.game.player)) {
                this.game.player.shooted = true
                bomb.enabled = false
                this.game.stop()
            }
        })
        
    }

    getRandomBombTiming() {
        return Math.floor(Math.random() * 100 + 200)
    }
}