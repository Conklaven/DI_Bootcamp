import React, {Component} from 'react';

class Phone extends Component {
    constructor() {
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        }
    }
    changeColor = (e) => {
        let newColor = prompt(`What color is your Phone?`)
        this.setState({ color: newColor})
    }

    render(){
 
        return(
           
            <>
            <h2>My phone is a {this.state.brand}</h2>
            <p>It is a {this.state.color} {this.state.model} from {this.state.year}</p>
            <button onClick={this.changeColor}>Change the Color</button>
            </>
        )
    }
}

export default Phone;