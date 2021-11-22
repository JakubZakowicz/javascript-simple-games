const squares = document.querySelectorAll('.grid div')
const scoreboard = document.getElementById('score')

var direction
var snake
var delay 
var tail
var score

startGame()

function startGame() {
    squares.forEach(square => square.classList.remove('snake', 'apple'))
    direction = 1
    snake = [2, 1, 0]
    delay = 300
    score = 0
    drawSnake()
    setRandomApplePosition()
}

setInterval(() => {
    if(checkColision()) {
       alert('You lose')
       startGame() 
    } else {
        squares.forEach(square => square.classList.remove('snake'))

        tail = snake[snake.length - 1]
        
        for(let i = snake.length - 1; i > 0; i--) {
            snake[i] = snake[i-1]
        }
        snake[0] = snake[0] + direction
        checkApple()
        drawSnake()
        scoreboard.innerText = score
    }
    
}, delay)

function drawSnake() {
    snake.forEach(index => squares[index].classList.add('snake'))
}

var canMoveLeft = false
var canMoveRight = true
var canMoveUp = true
var canMoveDown = true

function keyHandler(e) {
    

    let key = e.keyCode

    switch(key) {

        case 32:
            startGame()
            break
        case 37:
            if(canMoveLeft) {
                direction = -1
                canMoveRight = false
                canMoveUp = true
                canMoveDown = true
            }
            break
        case 38:
            if(canMoveUp) {
                direction = -10
                canMoveDown = false
                canMoveLeft = true
                canMoveRight = true
            }
            break
        case 39:
            if(canMoveRight) {
                direction = 1
                canMoveLeft = false
                canMoveUp = true
                canMoveDown = true
            }
            
            break
        case 40:
            if(canMoveDown) {
                direction = 10
                canMoveUp = false
                canMoveLeft = true
                canMoveRight = true
            }
            break
        default:
            return
            
    }
}

function checkColision() {
    if(((snake[0] + 1) % 10 === 0 && direction === 1)
        || (((snake[0] - 1) % 10 === 9 || snake[0] - 1 < 0) && direction === -1)
        || (snake[0] + 10 > 100 && direction === 10)
        || (snake[0] - 10 < 0 && direction === -10) 
        || squares[snake[0] + direction].classList.contains('snake')) return true
}

function setRandomApplePosition() {
    let randomApplePosition
    do {
        randomApplePosition = Math.floor(Math.random() * 100)
    }while(snake.indexOf(randomApplePosition) !== -1)
    squares[randomApplePosition].classList.add('apple')
}

function checkApple() {
    let head = squares[snake[0]]
    if(head.classList.contains('apple')) {
        head.classList.remove('apple')
        setRandomApplePosition()
        snake.push(tail)
        score++
    } 
}

document.addEventListener('keyup', keyHandler)