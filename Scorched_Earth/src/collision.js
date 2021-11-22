
// Check collision between two objects
function checkCollision(object1, object2) {
    return (object1.x < object2.x + object2.width &&
        object1.x + object1.width > object2.x &&
        object1.y < object1.y + object2.height &&
        object1.y + object1.height > object2.y)
}

function checkWallCollision(object) {
    return(object.x < 0 || object.x + object.width > canvas.width ||
        object.y < 0 || object.y > canvas.height)
}