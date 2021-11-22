class Wall {
    constructor() {
        this.randomHole = this.setRandomHole()
        this.x = 800
        this.width = 80
        this.height = 120
        this.segments = []
        this.pointReceived = false

        for(let i = 0; i < 4; i++) {
            if(i === this.randomHole) continue

            let y = i * this.height + 60
            this.segments.push(new WallSegment(this.x, y))
        }

    }

    draw(context) {
        
        this.segments.forEach(segment => {
            segment.draw(context)
        })
        
    }

    update() {
        this.segments.forEach(segment => {
            segment.update()  
        })
    }

    setRandomHole() {
        return Math.floor(Math.random() * 4)
    }
}