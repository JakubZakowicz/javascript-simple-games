class Bomb {

    constructor(alien) {
        this.image = document.getElementById('bomb')
        this.width = 10
        this.height = 30

        this.alien = alien
        this.speed = 2

        this.enabled = true

        this.position = { x: this.alien.position.x + this.alien.imageSize/2 - this.width/2, y: this.alien.position.y + this.alien.imageSize}
    }

    draw(ctx) {
        if(this.enabled) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
        
    }

    update() {
        this.position.y += this.speed
    }
}