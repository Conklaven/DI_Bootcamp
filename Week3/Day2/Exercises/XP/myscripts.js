let firstRetrieve = document.body.children[0].children[0];
console.log(firstRetrieve)
let removeNow = document.getElementById("lastParagraph").remove()
let changeRed = document.getElementById("redonclick")
changeRed.addEventListener("click", redClick)

function redClick(e) {
    changeRed.style.color = "red"
}
let changeHide = document.getElementById("hideonclick")
changeHide.addEventListener("click", hideClick)

function hideClick(e) {
    changeHide.style.display = "none"
}
let clicker = document.getElementById("bold")
let text = document.body
clicker.addEventListener("click", clickToBold)
function clickToBold(e) {
    text.style.fontWeight = "bold"
}

let hoverAction = document.getElementById("hovereffect")
hoverAction.addEventListener("mouseover", randomSize )
function randomSize(e) {
    let newSize = (Math.floor(Math.random()*100)+1).toFixed(0);
    console.log(newSize)
    e.target.style.fontSize = `${newSize}px`
}