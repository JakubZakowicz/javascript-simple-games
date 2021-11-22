class FlappyBird {
    constructor() {
        this.width = 50
        this.height = 50

        this.x = canvas.width/4 - this.width/2
        this.y = canvas.height/2 - this.height/2
        this.speedY = 0

        this.clicked = false

        document.addEventListener('keydown', e => {
            let key = e.keyCode

            if(key === 32 && !this.clicked) {
                this.speedY = 3.5
                this.clicked = true
            }
        })

        document.addEventListener('keyup', e => {
            let key = e.keyCode

            if(key === 32 && this.clicked) {
                this.clicked = false
            }
        })
    }

    draw(context) {
        context.fillStyle='#fe0000'
        context.fillRect(this.x, this.y, this.width, this.height)
        
    }

    update() {
        this.y -= this.speedY
        this.speedY -= 0.13
    }
}