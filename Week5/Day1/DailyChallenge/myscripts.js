let newForm = document.getElementById("newForm")
newForm.addEventListener("submit", submitForm)

function submitForm(e) {
    let object = {}
    let namekey = document.getElementById("name")
    let lastkey = document.getElementById("lastname")
    e.preventDefault()
    object.name = namekey.value
    object.lastname = lastkey.value
    let tojson = JSON.stringify(object)
    console.log(tojson)

}