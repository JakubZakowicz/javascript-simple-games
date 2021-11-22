class WallSegment {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = 80
        this.height = 120
    }

    draw(context) {
        context.fillStyle='#00c400'
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.x -= 3
    }
}