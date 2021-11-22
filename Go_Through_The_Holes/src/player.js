class Player {

    constructor(game) {
        this.size = 50

        this.position = { x: game.screenWidth/2 - this.size, y: game.screenHeight - 200 }

        this.speedX = 0
        this.speedY = 0
        this.maxSpeed = 10
        this.collision = new Collision(game)
    }

    draw(ctx) {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size)
    }

    moveLeft() {
        this.speedX = -this.maxSpeed
    }

    moveRight() {
        this.speedX = this.maxSpeed
    }

    moveUp() {
        this.speedY = -this.maxSpeed
    }

    moveDown() {
        this.speedY = this.maxSpeed
    }

    stopX() {
        this.speedX = 0
    }

    stopY() {
        this.speedY = 0
    }

    update() {
        this.position.x += this.speedX
        this.position.y += this.speedY

        this.collision.checkSideWallsCollision(this)
    }
}