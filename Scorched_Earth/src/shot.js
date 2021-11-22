class Shot {
    constructor(x, y) {
        this.image = document.getElementById('shot')
        this.x = x
        this.y = y

        this.size = 15
        this.width = this.size
        this.height = this.size

        this.speedX = 5
        this.speedY = 10
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    update() {
        //if(this.speedX > this.limiter) this.speedX = this.limiter
        //if(this.speedY > this.limiter + 1) this.speedY = this.limiter + 1
        //if(this.speedX < -this.limiter) this.speedX = -this.limiter
        this.x += this.speedX
        this.y -= this.speedY
        this.speedY -= 0.1
    }
}