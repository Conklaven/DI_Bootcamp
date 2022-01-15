let tasks = [];
let form = document.getElementById("task")
form.addEventListener("submit", toLocal)

function toLocal(e) {
    e.preventDefault()
    let name = "name"
    let response = (e.target.name).value
    let a = e.target.name
    let b = e.target.description
    let c = e.target.startDate
    let d = e.target.endDate
    let task = {};
    task[name] = response;
    let desc = "description";
    let response_two = (e.target.description).value;
    task[desc] = response_two;
    let start_date = (e.target.startDate).value;
    let start = "start";
    task[start] = start_date;
    let end_date = (e.target.endDate).valueAsDate;
    let end = "end";
    task[end] = end_date;
    let done = "Done";
    let donestatus = false;
    task[done] = donestatus
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    clearform(a,b,c,d)
    formsuccess()

}
function clearform(a,b,c,d) {
    a.value = ""
    b.value = ""
    c.value = ""
    d.value = ""
}

function formsuccess() {
    let div = document.createElement("div")
    let body = document.body;
    let success = document.createElement("h3")
    let words = document.createTextNode("Task submitted successfully")
    success.appendChild(words)
    div.appendChild(success)
    body.appendChild(div)
    div.setAttribute("id", "success")
    window.setTimeout("closeSuccessDiv();", 3000);
}

function closeSuccessDiv(){
    document.getElementById("success").remove()
    }
