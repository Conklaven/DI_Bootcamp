let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D'
]
let parent;

function createColors() {
    for (boxes of colors) {
        let newDiv = document.createElement("div")
        newDiv.style.backgroundColor = `${boxes}`;
        parent = document.getElementById("side")
        parent.appendChild(newDiv)
    }
}
createColors()

function createGrid() {
    for (i = 1; i < 1440; i++) {
        let blankDiv = document.createElement("div")
        parent = document.getElementById("game")
        parent.appendChild(blankDiv)
    }
}
createGrid()
let colorChoice = document.querySelectorAll("#side > *");
console.log(colorChoice);
let fillSquare = document.querySelectorAll("#game > *");
console.log(fillSquare);

side.addEventListener("click", pickColor);
let color = null;
let mouseDown = null;

function pickColor(e) {
    color = e.target.style.backgroundColor
    console.log(color);
}
game.addEventListener("mousedown", down);

function down(e) {
    mouseDown = true;
}
// game.addEventListener("click", clicked)
// function clicked(e){
//     e.target.style.backgroundColor = color;
// }

game.addEventListener("mouseover", coloring);

function coloring(e) {
    if (mouseDown != null) {
        e.target.style.backgroundColor = color;
    }
}

game.addEventListener("mouseup", up)

function up() {
    mouseDown = null;
}


// game.addEventListener("mouseout", function(e){
// e.target.style.backgroundColor = "transparent";
// });
let button = document.getElementById("clear")
console.log(button);
button.addEventListener("click", function () {
    for (squares of fillSquare) {
        squares.style.backgroundColor = "white";
    }
})