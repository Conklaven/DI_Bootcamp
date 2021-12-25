let parent = document.createElement('div');
parent.classList.add("letter")
parent.style.display = "grid";
parent.style.gridTemplateColumns = "repeat(7, 1fr)"
parent.style.gridTemplateRows = "repeat(7, 1fr)"
parent.style.width = "400px";
parent.style.height = "600px";
parent.style.textAlign = "center";
document.body.appendChild(parent);

function createGrid() {
    for (i = 1; i <= 49; i++) {
        let blankDiv = document.createElement(`div${i}`)
        parent.appendChild(blankDiv)
        blankDiv.classList.add("letterspace")
        blankDiv.style.border = "1px solid white";
        blankDiv.style.backgroundColor = "black";
        blankDiv.style.color = "red";
        blankDiv.style.fontSize = "60px";
        if (i ==3 || i == 4 || i == 5 || i ==9 || i == 13 || i == 16 || i ==20 || i == 23 || i == 30 || i ==37 || i == 44 || i == 27 || i ==34 || i == 41 || i == 48 || i ==24 || i == 25 || i == 26){
            let star = document.createTextNode("*");
            blankDiv.appendChild(star)
        }
    }
}
createGrid()
