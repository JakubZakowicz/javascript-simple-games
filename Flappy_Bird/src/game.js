class Game {

    constructor(width, height) {
        this.width = width
        this.height = height
        this.running = true
        this.start()

        document.addEventListener('keydown', e => {
            let key = e.keyCode

            if(key === 32 && !this.running) {
                this.running = true
                this.start()
            }
        })
    }

    start() {
        this.flappyBird = new FlappyBird()
        this.walls = []
        this.counter = 0
        this.score = 0
    }

    draw(context) {
        context.fillStyle='#00a6fe';
        context.fillRect(0, 0, this.width, this.height)
        
        context.fillStyle='#00c400';
        context.fillRect(0, 0, this.width, this.height/10);
        context.fillRect(0, this.height - this.height/10, this.width, this.height/10);

        this.flappyBird.draw(context)

        this.walls.forEach(wall => {
            wall.draw(context)
        })

        context.fillStyle='white';
        context.font='30px Arial';
        context.fillText('Score: ' + this.score, 10, 35, 200);

        if(!this.running) {
            context.fillStyle='rgba(0, 0, 0, 0.5)';
            context.fillRect(0, 0, this.width, this.height);

            context.fillStyle='white';
            context.font='30px Arial';
            context.fillText('You lose!', this.width/2 - 50, this.height/2 - 50, 200);
            context.fillText('Your score is: ' + this.score, this.width/2 - 100, this.height/2 - 10, 300);
        }
    }

    update() {

        if(this.running) {
            if(this.counter % 180  === 0) {
                this.walls.push(new Wall())
            }

            this.flappyBird.update()
            this.walls.forEach((wall, index) => {
                wall.update()
                if(wall.x < -80) this.walls.splice(index, 1)

                wall.segments.forEach(segment => {
                    if(this.flappyBird.x + this.flappyBird.width >= segment.x &&
                        this.flappyBird.x <= segment.x + segment.width &&
                        this.flappyBird.y <= segment.y + segment.height &&
                        this.flappyBird.y + this.flappyBird.height >= segment.y) this.running = false
                }) 

                if(this.flappyBird.x > wall.segments[0].x && !wall.pointReceived) {
                    this.score++
                    wall.pointReceived = true
                }
            })
            
            this.counter++
            if(this.flappyBird.y >= this.height - this.height/10 - this.flappyBird.height || this.flappyBird.y <= this.height/10) {
                this.running = false
            }
        } 
    }
}