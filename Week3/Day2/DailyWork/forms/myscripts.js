let firstForm = document.forms[0]
let input = firstForm.elements[0]
let allUsers = []
console.log(input)

firstForm.addEventListener("submit", adduser)

function adduser(e){
    e.preventDefault()
    console.log(e.target)
    let firstInput = e.target.elements.username.value;
    let secondInput = e.target.elements.password.value;

    let objUser = {
        username : firstInput,
        password : secondInput
    }
    allUsers.push(objUser);
    console.log(allUsers);
}