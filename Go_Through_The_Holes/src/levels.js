function levelUp(game) {
    if(game.score % 5 == 0 && game.canLevelUp) {
        game.level++
        game.canLevelUp = false
    } 
}

function updateLevel(level, wall) {
    wall.tiles.forEach(tile => {
        tile.speed = level*2
    })
}