import logo from './logo.svg';
import './App.css';
import Inputs from './Inputs';
import Result from './Result';
import React from 'react';

const runResults = () => {

  let nameOne = document.getElementById('nameOne')
  let nameTwo = document.getElementById('nameTwo')
  console.log(nameOne.value)
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${nameOne.value}&fname=${nameTwo.value}`, {
"method": "GET",
"headers": {
  "x-rapidapi-host": "love-calculator.p.rapidapi.com",
  "x-rapidapi-key": "1027227577msh0e5df17eb151f38p1cfe4bjsnd2fe5b28d286"
}
})
.then(response => response.json())
.then(data => {
  console.log(data.fname)
  let perc = document.getElementById('percent')
  perc.innerHTML = data.percentage
  let fname = document.getElementById('nameone')
  fname.innerHTML = data.fname
  let sname = document.getElementById('nametwo')
  sname.innerHTML = data.sname
  let words = document.getElementById('word')
  words.innerHTML = data.result
})
.catch(err => {
console.error(err);
});
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      sname: '',
      results: {},
    }
  }
  render() {
  return (
  
    <div className="App">
      <header className="App-header">
        <h1>Is it Love?</h1>
        <Inputs/>
        <Result handleClick={this.runResults}/>
      </header>
    </div>
  );
}
}
export default App;
