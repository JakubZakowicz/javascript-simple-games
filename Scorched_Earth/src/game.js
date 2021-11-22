class Game {

    constructor(width, height) {
        this.width = width
        this.height = height
        this.theme = document.getElementById('theme')
        this.earth = new Earth(0, 70, 193, 94)
        this.playerTank = new PlayerTank(100, 630, this.earth)
        this.enemyTank = new EnemyTank(1700, 630, this.earth)

        this.playerTank.enemyTank = this.enemyTank
        this.enemyTank.enemyTank = this.playerTank
    }

    update() {
        this.playerTank.update()
        this.enemyTank.update()

    }

    draw(ctx) {
        ctx.drawImage(this.theme, 0, 0, this.width, this.height);
        this.earth.draw(ctx)
        this.playerTank.draw(ctx)
        this.enemyTank.draw(ctx)  
        
        ctx.fillStyle = 'white'
        ctx.font = '30px Arial'
        
        let turn = (this.playerTank.turn) ?'Player 1' : 'Player 2'
        ctx.fillText('Turn: ' + turn, this.width/2 - 100, 35)
    }

    
}