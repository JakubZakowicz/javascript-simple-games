class EnemyTank extends PlayerTank {
    constructor(x, y, earth) {
        super(x, y, earth)
        this.image = document.getElementById('enemyTank')
        this.turn = false
        this.shotX = this.x
        this.healthBar = new HealthBar(1600, 50)
        this.healthBar.rightSide = true
        this.name = 'Player 2'
        this.namePosition = { x: 1790, y: 35 }
    }
}