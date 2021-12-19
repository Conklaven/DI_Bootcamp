let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

for (i = 0; i< planets.length; i++) {
    let newDiv = document.createElement("div")
    let parentElem = document.body.firstElementChild
    parentElem.appendChild(newDiv)
    newDiv.classList.add("planet")
    newDiv.classList.add(i)
    let title = document.createTextNode(planets[i])
    newDiv.appendChild(title)

    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      console.log(bgColor);
        newDiv.style.background = bgColor;
        }
    random_bg_color();
}

