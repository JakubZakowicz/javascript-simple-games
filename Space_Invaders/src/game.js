class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight

        this.inGame = true
        this.gameWon = false

        this.player = new Player()
        new KeyHanlder(this.player)
        this.collision = new Collision(this)
        
        this.aliens = []
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 6; j++) {
                let x = (j * 55) + 20
                let y = (i * 50) + 10
                this.aliens.push(new Alien(this, x, y))
            }
        }
    }

    start() {

    }

    stop() {
        this.inGame = false
    }

    draw(ctx) {
        ctx.fillRect(0, 0, this.gameWidth, this.gameHeight)
        ctx.strokeStyle = 'green'
        ctx.moveTo(0, 850)
        ctx.lineTo(this.gameWidth, 850)
        ctx.stroke()

        this.player.draw(ctx)
        this.aliens.forEach(alien => alien.draw(ctx))
        if(!this.inGame) {
            ctx.font = '30px Arial'
            ctx.fillStyle = 'white'
            ctx.textAlign = 'center'

            if(this.gameWon) {
                ctx.fillText('Game Won!', this.gameWidth/2, this.gameHeight/2)
            } else {
                ctx.fillText('You lose!', this.gameWidth/2, this.gameHeight/2)
            }
            
            ctx.fillStyle = 'black'
        }
    }

    update() {
        if(this.inGame) {
            this.player.update()
            this.aliens.forEach(alien => {
                alien.update()
                
                if(this.collision.checkAlienCollision(alien)) {
                    this.aliens.forEach(alien2 => {
                        alien2.speed = -alien2.speed
                        alien2.position.y += 50
                    })
                }
                this.collision.checkIfAlienShooted(alien, this.player.shot)
                this.collision.checkAliensInvaded(alien)

            })
            this.collision.checkPlayerCollision(this.player)
            if([...this.aliens].every(alien => {
                if(alien.shooted === true) return true
            })) {
                this.gameWon = true
                this.stop()
            } 
        }
    }
}