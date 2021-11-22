class PlayerTank {

    constructor(x, y, earth) {
        this.image = document.getElementById('playerTank')
        this.width = 90
        this.height = 70

        this.name = 'Player 1'

        this.x = x
        this.y = y
        this.speedY = 0
        this.namePosition = { x: 20, y: 35}

        this.turn = true
        this.canClick = true
        this.shotExists = false
        this.shotLanded = false

        this.explosion = null

        this.earth = earth
        this.enemyTank = null

        this.healthBar = new HealthBar(20, 50)

        document.addEventListener('click', e => {
            if(this.turn && this.canClick) {

                let shotX = (this.healthBar.rightSide) ?this.x :this.x + this.width
                let shotY = this.y
                this.shot = new Shot(shotX, shotY)

                let sx = (e.x - this.x)/30
                let sy = (this.y - e.y)/30
                if(sx < -10) sx = -10

                this.shot.speedX = (sx > 10) ?10 :sx
                this.shot.speedY = (sy > 10) ?10 :sy
                this.shotExists = true
                this.canClick = false
            }
        })
    }

    update() {

        if([...this.earth.earthPixels].some((earthPixel) => {
            return checkCollision(this, earthPixel)
        })) this.speedY = 0
        else {
            this.speedY += 0.1;
        }            
        this.y += this.speedY

        if(this.turn) {  

            if(this.shotExists) {
                this.shot.update()

                
                this.earth.earthPixels.forEach(earthPixel => {

                    

                    if(this.shotExists) {
                        if(checkWallCollision(this.shot)) {
                            this.shot = null
                            this.shotExists = false
                            this.turn = false
                            this.enemyTank.turn = true
                            this.canClick = true
                        }else if(checkCollision(this.shot, earthPixel) || checkCollision(this.shot, this.enemyTank)) {
                            this.explosion = new Explosion(this.shot.x, this.shot.y)
                            this.shot = null
                            this.shotExists = false
                            this.shotLanded = true
                        }
 
                    }

                })
            }
        }

        if(this.enemyTank.shotLanded && this.enemyTank.turn) {
            if(checkCollision(this.enemyTank.explosion, this))
                this.healthBar.reduceHealth()
        }

        if(this.shotLanded) {
            this.earth.earthPixels = this.earth.earthPixels.filter(earthPixel => {
                return !checkCollision(this.explosion, earthPixel)
            })
        }

    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, 90, 70)
        if(this.turn && this.shotExists) {
            this.shot.draw(ctx) 
        }

        if(this.shotLanded && this.turn) {
            this.explosion.draw(ctx)
    
            if(this.explosion.i === 10) {
                this.explosion = null
                this.turn = false
                this.enemyTank.turn = true
                this.shotLanded = false
                this.canClick = true
            }      
        }

        this.healthBar.draw(ctx)

        ctx.fillStyle = 'white'
        ctx.font = '30px Arial'
        ctx.fillText(this.name, this.namePosition.x, this.namePosition.y)
    }
}