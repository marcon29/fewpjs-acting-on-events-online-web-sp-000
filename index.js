// Your code here

// My Code - doesn't pass tests but actually works the way the game shoule
    // - it can move right if dodger all the way to lef
    // - won't move off the field to the right
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


// School Solution - passes tests but doesn't actually work how game should
// const dodger = document.getElementById('dodger');

// function moveDodgerLeft() {
//   const leftNumbers = dodger.style.left.replace('px', '');
//   const left = parseInt(leftNumbers, 10)
//   if (left > 0) {
//     dodger.style.left = `${left - 10}px`
//   }
// }

// function moveDodgerRight() {
//   const leftNumbers = dodger.style.left.replace('px', '');
//   const left = parseInt(leftNumbers, 10)
//   if (left > 0) {
//     dodger.style.left = `${left + 10}px`
//   }
// }

// document.addEventListener('keydown', function(e) {
//     if (e.key === "ArrowLeft") {
//         moveDodgerLeft()
//     }
// })

// document.addEventListener('keydown', function(e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight()
//     }
// })

