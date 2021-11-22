class Shot {

    constructor(player) {
        this.image = document.getElementById('shot')
        this.player = player

        this.width = 6
        this.height = 25

        this.enabled = false

        this.position = { x: this.player.position.x + this.player.imageWidth/2 - this.width/2, y: this.player.position.y - this.height/2 }

        this.speed = 5
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.position.y -= this.speed
        if(this.position.y < 0) {
            this.enabled = false
            this.position.y = this.player.position.y
        }
    }
}