import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import './App.css';


function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = (id) => {
    let filtered = toDoList.filter(task => {
      notasks()
      return !task.complete;
    });
    setToDoList(filtered);
  }
const notasks = () =>{
  let tasks = document.querySelectorAll('.todo')
  if (tasks.length === 1){
    let notasks = document.getElementById('noTask')
    notasks.style.display = 'block'
  }
} 
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
    let id = toDoList.length
    localStorage.setItem(`task${id}`, userInput)
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div id="noTask">You have no tasks left</div>
      <ToDoList className="list" toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      </div>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;