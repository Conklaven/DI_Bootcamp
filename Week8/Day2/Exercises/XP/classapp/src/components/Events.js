import React, {Component} from 'react';

class Events extends Component {
    constructor() {
        super();
        this.state = {
            color: "red",
            isToggleOn: 'True',
        }
    }
toggle = (e) => {
    const stat = document.getElementById("state")
    if (this.state.isToggleOn === 'True') {
        this.setState({isToggleOn: 'False'})
    } else {
        this.setState({isToggleOn: 'True'})
    }
    }    
clickMe = (event) => {
    alert(`I was clicked`)
}
handleKeyPress = (e) => {

    if (e.key === 'Enter') {
        e.preventDefault();
        let input = document.getElementById('input')
        console.log(input)
        console.log(input.innerHTML)
  	// e.stopImmediatePropagation();
 alert(`The ${e.key} was pressed, Your input is ${input.innerHTML}`)
    }
}
    render(){
 
        return(
           
            <>
           <input id="input" onKeyPress={this.handleKeyPress}></input>
            <button onClick={this.clickMe}>Enter</button>
            <button onClick={this.toggle}>Toggle Me</button>
            isToggleOn = <p id="state">{this.state.isToggleOn}</p>
            </>
        )
    }
}

export default Events;