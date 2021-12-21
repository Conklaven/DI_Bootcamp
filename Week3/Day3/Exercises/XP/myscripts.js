// ---------------Exercise 1 -----------------

let box = document.getElementById("animate");

function myMove() {
    setInterval(function () {
        box.style.right = "0px";
    }, 1000)
}

// ---------------Exercise 2 -----------------

let moveBox = document.getElementById("box");
console.log(moveBox)
moveBox.addEventListener("dragstart", startToDrag);

function startToDrag(e) {
    console.log(e.target)
    e.dataTransfer.setData("text/plain", e.target.id);
    validDrop.classList.add("inmotion")

}
let validDrop = document.getElementById("dropContainer");

validDrop.addEventListener("dragover", draggingOver)
validDrop.addEventListener("drop", dropping)

function draggingOver(e) {
    e.preventDefault();
    e.target.classList.replace("inmotion", "over")
}

function dropping(e) {
    e.preventDefault();
    let dataItem = e.dataTransfer.getData("text/plain");
    let draggedItem = document.getElementById(dataItem)
    e.target.appendChild(draggedItem);
    moveBox.classList.add("moved")
    e.target.style.border = "3px solid green"
}