class Explosion {

    constructor() {
        this.image = document.getElementById('explosion')
        this.imageSize = 50
        this.enabled = true
        this.delay = 50
    }

    draw(ctx, positionX, positionY) {
        if(this.enabled) {
            ctx.drawImage(this.image, positionX, positionY, this.imageSize, this.imageSize)
            setTimeout(() => {
                this.enabled = false
            }, this.delay)
        }
    }
}