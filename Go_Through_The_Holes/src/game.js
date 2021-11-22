class Game {

    constructor(screenWidth, screenHeight) {
        this.screenWidth = screenWidth
        this.screenHeight = screenHeight

        this.start()
    }

    start() {
        this.player = new Player(this)
        new KeyHandler(this, this.player)

        this.inGame = true

        this.score = 0
        this.canScore = true

        this.wall = new Wall()
        this.collision = new Collision()
        this.level = 1
        this.canLevelUp = false
    }

    stop() {
        this.inGame = false
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);

        ctx.fillStyle = 'green'
        ctx.fillRect(0, 0, 50, this.screenHeight)
        ctx.fillRect(this.screenWidth - 50, 0, 50, this.screenHeight)
        
        this.player.draw(ctx)
        this.wall.draw(ctx)

        ctx.fillStyle = 'white'
        ctx.font='24px Arial';
        ctx.fillText('Score: ' + this.score, 60, 40, 100);

        if(!this.inGame) {
            ctx.fillStyle = 'white'
            ctx.font='96px Arial';
            ctx.fillText('Game Over!', this.screenWidth/2 - 250, this.screenHeight/2, 500)
            ctx.font='48px Arial';
            ctx.fillText('Your score is: ' + this.score, this.screenWidth/2 - 150, this.screenHeight/2 + 75, 300)
        }
    }

    update() {
        if(this.inGame) {
            this.player.update()
            this.wall.update()
            this.collision.checkIfWallPassed(this, this.wall)
            this.collision.checkIfPlayerHitTheWall(this, this.player, this.wall)
            this.collision.checkIfPlayerPassed(this, this.player, this.wall)

            if(this.score % 5 !== 0) this.canLevelUp = true
            levelUp(this)
            updateLevel(this.level, this.wall)
        }
    }

}