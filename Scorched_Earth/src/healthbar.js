class HealthBar {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.health = 300
        this.length = 300

        this.rightSide = false
        this.damage = 4
        this.damageTaken = 0
    }

    draw(ctx) {
        ctx.fillStyle = 'green'
        if(this.rightSide) {
            ctx.fillRect(this.x + this.damageTaken, this.y, this.health, 30)
        } else {
            ctx.fillRect(this.x, this.y, this.health, 30)
        }
        
        ctx.strokeStyle = 'white'
        ctx.strokeRect(this.x, this.y, this.length, 30)
    }

    reduceHealth() {
        this.health -= this.damage
        if(this.health <= 0) this.health = 0

        this.damageTaken += this.damage
    }
}