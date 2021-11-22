class Player {

    constructor() {

        this.image = document.getElementById('player')
        this.imageWidth = 50
        this.imageHeight = 33

        this.shooted = false

        this.position = {x: 575, y: 818}

        this.maxSpeed = 3
        this.speed = 0
        this.explosion = new Explosion()
        this.shot = new Shot(this)
    }

    draw(ctx) {
        if(!this.shooted) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.imageWidth, this.imageHeight)
            if(this.shot.enabled) this.shot.draw(ctx)
        } else {
            ctx.drawImage(this.explosion.image, this.position.x, this.position.y - 2, this.imageWidth, this.imageHeight)
        }
        
    }

    moveLeft() {
        this.speed  = -this.maxSpeed
    }

    moveRight() {
        this.speed = this.maxSpeed
    }

    stop() {
        this.speed = 0
    }

    update() {
        this.position.x += this.speed
        if(this.shot.enabled) this.shot.update()
        else this.shot = new Shot(this)
    }
}