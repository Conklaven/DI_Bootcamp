import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Voting from '../../../Voting';


class App extends React.Component {
    constructor(){
      super();
      this.state = {
        languages : [
            {name: "Php", votes: 0},
            {name: "Python", votes: 0},
            {name: "JavaSript", votes: 0},
            {name: "Java", votes: 0}
        ]
      }
    }
    componentDidMount(){
  
    }
  
    vote = (e) => {
      // console.log(e.target.id)
      let result = this.state
      result.languages[e.target.id].votes += 1
      // console.log(result)
      this.setState({result});
    }
  
    render(){
      return (
        <div className="App">
          <header className="App-header">
          <div>{this.state.languages[0].votes} {this.state.languages[0].name}  <button id="0" onClick={this.vote}>Vote Here</button></div>
           <div>{this.state.languages[1].votes} {this.state.languages[1].name}  <button id="1" onClick={this.vote}>Vote Here</button></div>
           <div>{this.state.languages[2].votes} {this.state.languages[2].name}  <button id="2" onClick={this.vote}>Vote Here</button></div>
           <div>{this.state.languages[3].votes} {this.state.languages[3].name}  <button id="3" onClick={this.vote}>Vote Here</button></div>
          </header>
        </div>
      );
    }
  }
  

export default App;
