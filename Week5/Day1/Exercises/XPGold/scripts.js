let searchOBJ = new URLSearchParams(window.location.search)
let container = document.createElement('div')
let welcome = document.createElement('h1')
let welcomeText = document.createTextNode(`Thank You for Registering`)
welcome.appendChild(welcomeText)
container.appendChild(welcome)
container.classList.add("container")
console.log(searchOBJ.values())
for (let [key, value] of searchOBJ.entries()) {
    let body = document.body
    let newdiv = document.createElement("div")
    newdiv.classList.add("result")
    // let text = document.createTextNode(`${key} : ${value}`)
    let text = document.createTextNode(value)
    newdiv.setAttribute("id", `${key}`)
    newdiv.appendChild(text)
    container.appendChild(newdiv)
    body.appendChild(container)
}
    