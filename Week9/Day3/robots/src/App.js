import React from 'react';
import logo from './logo.svg';
import './App.css';
import Robots from './components/Robots'
import 'tachyons'


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      arr:[]
    }
  }
  render(){
return(
  <div className="container">
    <div className="Title"><h1 className="f1">ROBOFRIENDS</h1></div>
    <Robots/>
    </div>
)
  }
}


export default App;
