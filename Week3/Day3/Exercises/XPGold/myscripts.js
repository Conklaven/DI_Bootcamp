let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let btn = document.getElementById("btn")
btn.addEventListener("click", startGame)
let container = document.getElementById("container")
let bottomContainer = document.getElementById("bottom-container")
let secondDiv;
let newDiv;
function startGame() {
    for (boxes of letters) {
        newDiv = document.createElement("div");
        let text = document.createTextNode(boxes);
        newDiv.appendChild(text);
        container.appendChild(newDiv);
        newDiv.classList.add("letter");
        newDiv.setAttribute("id", `top${boxes}`);
        newDiv.setAttribute("draggable", "true");
        newDiv.addEventListener("dragstart", dragging);
        newDiv.addEventListener("dragend", dragging);
        
    }
    for (empty of letters) {
        secondDiv = document.createElement("div");
        bottomContainer.appendChild(secondDiv);
        secondDiv.classList.add("empty");
        secondDiv.setAttribute("id", `bottom${empty}`);
        dropTartgets()
    }
}
function dropTartgets(){
let allDropTargets = document.querySelectorAll(".empty");

for (let dropzone of allDropTargets){
	dropzone.addEventListener("dragover", draggingOver)
	dropzone.addEventListener("dragenter", enterBox)
	dropzone.addEventListener("dragleave", exitBox)
	dropzone.addEventListener("drop", dropping)
}
}

function dragging(e) {
    e.target.classList.toggle("drag")
    e.dataTransfer.setData("text/plain", e.target.id);

    // validDrop.classList.replace("empty","inmotion");
}
function enterBox(e) {
    e.target.classList.add("over")
}
function exitBox(e) {
    e.target.classList.replace("over", "empty")
}
function draggingOver(e) {
    e.preventDefault();
}
function dropping(e) {
    e.preventDefault();
    let dataItem = e.dataTransfer.getData("text/plain");
    let draggedItem = document.getElementById(dataItem)
    e.target.appendChild(draggedItem);
    e.target.classList.replace("over", "empty")
}