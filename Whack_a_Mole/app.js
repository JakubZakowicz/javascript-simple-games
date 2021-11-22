const squares = document.querySelectorAll('.square')
const scoreboard = document.getElementById('score')
const mole = createMole()
const timeLeft = document.getElementById('time-left')

var score = 0
var currentPosition = getRandomPosition()
var timeCounter = 60

timeLeft.innerText = timeCounter

squares[currentPosition].appendChild(mole)

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.contains(mole)) {
            score++
            square.removeChild(mole)
        }
        scoreboard.innerText = score
    })
})

let moleMovement = setInterval(moveMole, 500)

function moveMole() {
    squares.forEach(square => {
        if(square.contains(mole)) {
            square.removeChild(mole)
        }
    })
    let number = getRandomPosition()
    while(number == currentPosition) {
        number = getRandomPosition()
    }
    currentPosition = number
    squares[number].appendChild(mole)
}

function createMole() {
    let moleImg = document.createElement('img')
    moleImg.setAttribute('src', 'mole.jpg')
    moleImg.setAttribute('alt', '')
    moleImg.setAttribute('width', '200')
    return moleImg
}

function getRandomPosition() {
    return Math.floor(Math.random() * 9)
}

function countDown() {
    timeCounter--
    timeLeft.innerText = timeCounter
    if(timeCounter <= 0) {
        clearInterval(timerId)
        clearInterval(moleMovement)
        alert('GAME OVER! Your final score is' + result)
    }
}

let timerId = setInterval(countDown, 1000)