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
  
    vote = (i) => {
      // console.log(e.target.id)
      let result = this.state
      result.languages[i].votes += 1
      // console.log(result)
      this.setState({result});
    }
  
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <h1>Vote Your Language</h1>
            <div className="Languages">
          <div className="language" ><div>{this.state.languages[0].votes}</div> {this.state.languages[0].name}  <button className="btn"  onClick={() => this.vote(0)}>Vote Here</button></div>
           <div className="language" ><div>{this.state.languages[1].votes}</div> {this.state.languages[1].name}  <button className="btn" onClick={() => this.vote(1)}>Vote Here</button></div>
           <div className="language" ><div>{this.state.languages[2].votes}</div> {this.state.languages[2].name}  <button className="btn"  onClick={() => this.vote(2)}>Vote Here</button></div>
           <div className="language" ><div>{this.state.languages[3].votes}</div> {this.state.languages[3].name}  <button className="btn"  onClick={() => this.vote(3)}>Vote Here</button></div>
           </div>
          </header>
        </div>
      );
    }
  }
  

export default App;
