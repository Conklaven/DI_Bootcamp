let body = document.body
let container = document.getElementById("container")
function toPage(array) {
    for (let data of array) {
        todaysDate()
        let today = todaysDate()
        const date1 = new Date(today);
        const date2 = new Date(data.end);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        let name = document.createTextNode(data.name)
        console.log(data.name)
        let start = document.createTextNode(`Start Date : ${data.start}`)
        let remaining = document.createTextNode((diffDays + " days left"));
        insert(name, start, remaining)
        let click = document.getElementById(data.name)
        click.addEventListener("click",function(e) {
            alert(data.description)
        })

    }
}
let newTasks = JSON.parse(localStorage.getItem('tasks'))

newTasks.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.start) - new Date(b.start);
  });
  console.log(newTasks)
toPage(newTasks);

function todaysDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    return today
}

function insert(task, date, left) {
    let innercontain = document.createElement('div')
    let taskdiv = document.createElement('div')
    let namediv = document.createElement('h1')
    let startdiv = document.createElement('h2')
    let daysleft = document.createElement('h3')
    let checkdiv = document.createElement('div')
    let checkbox = document.createElement('input')
    let deletediv = document.createElement('div')
    let deleteX = document.createElement('button')
    checkbox.setAttribute('type', 'checkbox')
    namediv.appendChild(task)
    startdiv.appendChild(date)
    daysleft.appendChild(left)
    taskdiv.appendChild(namediv)
    taskdiv.appendChild(startdiv)
    taskdiv.appendChild(daysleft)
    taskdiv.setAttribute("id", task.textContent)
    innercontain.classList.add("task")
    innercontain.appendChild(taskdiv)
    checkdiv.appendChild(checkbox)
    innercontain.appendChild(checkdiv)
    let deleteText = document.createTextNode("Delete")
    deletediv.classList.add("delete")
    checkdiv.classList.add("check")
    deleteX.appendChild(deleteText)
    deletediv.appendChild(deleteX)
    innercontain.appendChild(deletediv)
    container.appendChild(innercontain)
    checkbox.addEventListener("click", ((e) => {
        console.log(e.target);
        innercontain.classList.toggle("complete")

    }))
    deleteX.addEventListener("click", ((e) => {
        if ( confirm("Are you sure you want to delete this task?") == true){
        innercontain.remove();
        } 
    }))

}
