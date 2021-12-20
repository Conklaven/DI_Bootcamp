// let btnEventBlue = document.getElementById("btnBlue");
// let btnEventRed = document.getElementById("btnRed");

// btnEventBlue.addEventListener("click", changeColor);
// btnEventRed.addEventListener("click", changeColor);

// function changeColor(event) {
//     document.body.style.backgroundColor = event.target.textContent.toLowerCase()
// };

let colors = ["Blue", "Yellow", "Green", "Pink", "lightblue"];
let parentDiv = document.getElementById("container");
for (i = 0; i < colors.length; i++) {
    let elem = document.createElement("button")
    let content = elem.classList.add("btn")
    let newText = document.createTextNode(colors[i].toUpperCase())
    parentDiv.appendChild(elem)
    elem.appendChild(newText)
    elem.setAttribute('id', `btn${colors[i]}`)
    elem.addEventListener("mouseover", changeColor)
    elem.addEventListener("mouseout", goWhite)
}


function changeColor(e) {
    document.body.style.backgroundColor = e.target.textContent.toLowerCase()
}
function goWhite() {
    document.body.style.backgroundColor = "white"
}