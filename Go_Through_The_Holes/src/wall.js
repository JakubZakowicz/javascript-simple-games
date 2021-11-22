class Wall {

    constructor() {
        this.tiles = []
        this.tilesLength = 15
        let randomHolePosition = Math.floor(Math.random() * this.tilesLength)
        for(let i = 0; i < this.tilesLength; i++) {
            if(i === randomHolePosition) continue
            let tile = new Tile()
            tile.position.x = (tile.width * i) + 50
            this.tiles.push(tile)
        }

    }

    draw(ctx) {
        this.tiles.forEach(tile => {
            tile.draw(ctx)
        })
    }

    update() {
        this.tiles.forEach(tile => {
            tile.update()
        })
    }
}