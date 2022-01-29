import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import Navbar from "./Navbar";
import supers from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters : supers.superheroes,
    highScore: 0,
    currentScore: 0,
    Clicked: false
  };
  handleClick = id => {
    this.shuffleArray();
    this.handleScore(id);
    console.log(this.state.timesClicked);
  };
  shuffleArray = () => {
    // Shuffle array of objects
    const shuffledArr = this.shuffle(this.state.characters);
    // Setting 'shuffledArr' as the new state
    this.setState({ shuffledArr });
  };
  handleScore = id => {
    this.state.characters.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (this.state.currentScore > this.state.highScore) {
          this.setState({ highScore: this.state.currentScore });
        }
        this.alertScore()
        this.setState({ currentScore: 0 });
        this.setState({ Clicked: true });
        this.state.characters.forEach(element => (element.clicked = false));
        console.log(this.state.characters);
      }
    });
  };

  alertScore = () => {
    let overlay = document.getElementById("overlay")
    if (this.state.currentScore > this.state.highScore){
      let alertarea = document.getElementById("alert")
      alertarea.innerHTML = ` NEW HIGH SCORE ${this.state.currentScore}`
      alertarea.style.display = "block";
      overlay.style.display = "block"
      setTimeout(() => {alertarea.style.display ="none"; overlay.style.display = "none"},2000)
    } else {
      let gameOver = document.getElementById("gameOver")
      overlay.style.display = "block"
      gameOver.style.display = "block"
      let score = document.getElementById("score")
      let timeleft = 2;
      let downloadTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(downloadTimer);
        } else {
          document.getElementById("seconds").innerHTML = timeleft;
        }
        timeleft -= 1;
      }, 1000);
      score.innerHTML = `Score: ${this.state.currentScore}`
      setTimeout(() => {gameOver.style.display = "none"; overlay.style.display = "none"}, 3000)
    }
  };

  handleIncrement = () => {
    // Using setState method to update component's state
    this.setState({ currentScore: this.state.currentScore + 1 });
  };
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
componentDidMount() {
  console.log("mounted")
}
  render() {
    console.log(supers)
    return (
      <>
      <Navbar currentScore={this.state.currentScore}
          highScore={this.state.highScore}/>
          <div id="alert"></div>
          <div className="wrapper">
          <div id="overlay"><div id="gameOver"><h2 id="score"></h2><h3 id="over">Game Over</h3> <p id="restart">Restarting in <span id="seconds">3</span> seconds...</p></div></div>
      <> {this.state.characters.map( character => {
       return (
         <>
         <CharacterCard Clicked={this.state.Clicked} handleClick={this.handleClick} id={character.id} key={character.id} name={character.name} image={character.image} occupation={character.occupation}/>
         </>
       )
  })}
  </>
  </div>
  </>
    );
}
  }   
export default App;
