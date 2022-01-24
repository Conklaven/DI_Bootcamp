import React, {Component} from 'react';

class Color extends Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: "red",
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: "yellow" });
          }, 5000);
    }
    favColor = (event) => {
        this.setState({favoriteColor: "blue"})
    }

    render(){
 
        return(
           
            <>
           My Favorite Color is {this.state.favoriteColor}
           <button onClick={this.favColor}>Change Favorite Color</button>
            </>
        )
    }
}

export default Color;