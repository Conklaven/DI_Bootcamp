let form = document.getElementById("send")
console.log(form)
form.addEventListener("submit", function(e) {
    let body = document.body
    let name = e.target.elemets.name.value
    let lastname = e.target.elemets.lastname.value
    let newdiv = document.createElement("div")
    let text = document.createTextNode(`Name is: ${name} and lastname is: ${lastname}`)
    newdiv.appendChild(text)
    body.appendChild(newdiv)
})