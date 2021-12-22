let listTasks = [];
let taskForm = document.forms[0];
let btn = document.getElementById("btn");
taskForm.addEventListener("submit", addTask);
let inputText;
let parent;

function addTask(e) {
    e.preventDefault();
    let task = e.target.elements.task.value;
    listTasks.push(task);
    taskList()
    e.target.elements.task.value = "";


    // document.getElementById("task-container").innerHTML = listTasks;
}

function taskList() {
    parent = document.getElementById("task-container")
    document.getElementById("task-container").innerHTML = "";
    for (let tasks of listTasks) {
        let newTask = document.createElement("div")
        let checkbox = document.createElement("input")
        let listItem = document.createTextNode(tasks)
        // newTask.setAttribute("class", "taskItem")
        newTask.appendChild(checkbox);
        newTask.appendChild(listItem);
        parent.appendChild(newTask);
        newTask.classList.add("taskItem")
        checkbox.setAttribute("type", "checkbox")
    }
}
