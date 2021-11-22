class Collision {

    constructor(game) {
        this.game = game
    }

    checkSideWallsCollision(player) {
        // Upper wall
        if(player.position.y <= 0) player.position.y = 0

        // Left wall
        if(player.position.x < 50) player.position.x = 50

        // Right wall
        if(player.position.x > this.game.screenWidth - player.size*2) player.position.x = this.game.screenWidth - player.size*2

        // Lower wall
        if(player.position.y > this.game.screenHeight - player.size) player.position.y = this.game.screenHeight - player.size
    }

    checkIfWallPassed(game, wall) {
        let tile = wall.tiles[1]
        if(tile.position.y >= game.screenHeight) {
            game.wall = new Wall()
            game.canScore = true
        }
    }

    checkIfPlayerHitTheWall(game, player, wall) {
        wall.tiles.forEach(tile => {

            // Check Collision with player's top left corner
            if(player.position.x >= tile.position.x
                && player.position.x <= tile.position.x + tile.width
                && player.position.y <= tile.position.y + tile.height
                && player.position.y >= tile.position.y) game.stop()

            // Check Collision with player's top right corner
            if(player.position.x + player.size >= tile.position.x
                && player.position.x + player.size <= tile.position.x + tile.width
                && player.position.y <= tile.position.y + tile.height
                && player.position.y >= tile.position.y) game.stop()

            // Check Collision with player's bottom left corner
            if(player.position.x >= tile.position.x
                && player.position.x <= tile.position.x + tile.width
                && player.position.y + player.size <= tile.position.y + tile.height
                && player.position.y + player.size >= tile.position.y) game.stop()
    
            // Check Collision with player's bottm right corner
            if(player.position.x + player.size >= tile.position.x
                && player.position.x + player.size <= tile.position.x + tile.width
                && player.position.y + player.size <= tile.position.y + tile.height
                && player.position.y + player.size >= tile.position.y) game.stop()
        })
    }

    checkIfPlayerPassed(game, player, wall) {
        if(game.canScore) {
            wall.tiles.forEach(tile => {
                if(player.position.y + player.size >= tile.position.y
                    && player.position.y + player.size <= tile.position.y + tile.height/2) {
                    game.score += 0.071428
                    game.canScore = false
                }
            })
            game.score = Math.ceil(game.score)
        }
        
    }
}