// Your code here
const dodger = document.getElementById("dodger")
const field = document.getElementById("game")
const fieldWidth = field.clientWidth
const moveAmount = 10
const maxLeftPosition = moveAmount
const maxRightPosition = fieldWidth-dodger.clientWidth-moveAmount

function getDodgerPosition() {
    const positionString = dodger.style.left.replace("px", "");
    return parseInt(positionString);
}

function moveDodgerLeft() {
    const position = getDodgerPosition();
    if (position >= maxLeftPosition) {
        dodger.style.left = `${position - moveAmount}px`;
    }
}

function moveDodgerRight() {
    const position = getDodgerPosition();
    if (position <= maxRightPosition) {
        dodger.style.left = `${position + moveAmount}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        // console.log("left");
        moveDodgerLeft()
    } else if (e.key === "ArrowRight") {
        // console.log("right");
        moveDodgerRight()
    }   
} )

