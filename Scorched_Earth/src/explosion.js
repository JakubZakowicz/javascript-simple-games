class Explosion {
    constructor(x, y) {
        this.image = document.getElementById('explosion')

        this.size = 32
        this.imageSize = 100

        this.width = this.imageSize
        this.height = this.imageSize

        this.x = x - this.imageSize/2
        this.y = y - this.imageSize/2

        this.i = 0
        this.j = 0
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.i * this.size, 0, this.size, this.size, this.x, this.y, this.width, this.height)
        if(this.j % 2 == 0) this.i++
        this.j++ 
    }

}