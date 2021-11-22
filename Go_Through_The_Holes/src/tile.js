class Tile {

    constructor() {
        this.width = 74
        this.height = 50

        this.position = { x: 0, y: -this.height }
        this.speed = 10
    }

    draw(ctx) {
        ctx.fillStyle='green';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.position.y += this.speed
    }
}