import React, {Component} from 'react';

class Car extends Component {
    constructor() {
        super();
        this.state = {
            color: "red"
        }
    }

    render(){
 
        return(
           
            <>
            <header> this car is a {this.state.color} {this.props.model}</header>
            </>
        )
    }
}

export default Car;