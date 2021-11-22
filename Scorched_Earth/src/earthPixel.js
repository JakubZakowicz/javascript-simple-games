class EarthPixel {

    constructor(x, y) {
        this.size = 10
        this.width = this.size
        this.height = this.size
        this.x = x
        this.y = y
    }

    draw(ctx) {
        ctx.fillStyle='green';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}