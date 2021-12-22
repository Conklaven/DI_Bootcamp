let topping = document.getElementById("imgtwo");
let toppingTwo = document.getElementById("imgthree");
let toppingThree = document.getElementById("imgfour");

topping.addEventListener("dragstart", startToDrag);
// topping.addEventListener("dragend", endDrag);
toppingTwo.addEventListener("dragstart", startToDrag);
// toppingTwo.addEventListener("dragend", endDrag);
toppingThree.addEventListener("dragstart", startToDrag);
// toppingThree.addEventListener("dragend", endDrag);

function startToDrag(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
//    e.dataTransfer.effectAllowed = "move"; 
    console.log(e.target.id);
}

let dropbox = document.getElementById("imgOne");
console.log(dropbox)

// dropbox.addEventListener("dragenter", enter)
// target.addEventListener("dragleave", exitBox)
dropbox.addEventListener("dragover", over)
dropbox.addEventListener("drop", dropping)

function over(e) {
    e.preventDefault();
    // e.dataTransfer.dropEffect= "move";
    console.log("hi")
}

// function enter(e) {
//     e.preventDefault();

// }


function dropping(e) {
    // e.preventDefault();
    let dataItem = e.dataTransfer.getData("text/plain");
    console.log("dataItem", dataItem)
    let draggedItem = document.getElementById(dataItem);
    console.log("e.target : ", e.target)
    dropbox.appendChild(draggedItem);
    let moved = document.getElementById(dataItem)
    moved.classList.add("after");
    
}

// function endDrag(e) {
//     e.target.classList.add("after")

// }

let reset = document.getElementById("reset")
reset.addEventListener("click", resetPizza)

function resetPizza(e) {
    let items = document.querySelectorAll(".after > *")
    items.classList.remove("after")
}