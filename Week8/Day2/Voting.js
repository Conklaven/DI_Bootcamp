import React, {Component} from 'react';

class Voting extends Component {
    constructor() {
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
    votePhp = (event) => {
        let result = this.state.languages[0]
        console.log(result)
        // this.setState({result.votes: this.state.counter+1});
    }
    render(){
 
        return(
           
            <>
           <div>{this.state.languages[0].votes} Php  <button onClick={this.votePhp}>Vote Here</button></div>
           <div>{this.state.languages[1].votes} Python  <button onClick={this.votePython}>Vote Here</button></div>
           <div>{this.state.languages[2].votes} JavaScript  <button onClick={this.voteJavaScript}>Vote Here</button></div>
           <div>{this.state.languages[3].votes} Java  <button onClick={this.voteJava}>Vote Here</button></div>

           
            </>
        )
    }
}

export default Voting;