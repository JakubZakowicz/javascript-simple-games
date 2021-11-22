class Earth {

    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.earthPixels = []
        this.initEarth()
    }

    draw(ctx) {
        this.earthPixels.forEach(earthPixel => {
            earthPixel.draw(ctx)
        })
    }

    initEarth() {
        for(let i = 0; i < this.width; i++) {
            for(let j = this.y; j < this.height; j++) {
                let x = i * 10
                let y = j * 10
                let earthPixel = new EarthPixel(x, y)
                this.earthPixels.push(earthPixel)
            }
        }
    }
}