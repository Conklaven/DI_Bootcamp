import React, { Component } from "react";

class CharacterCard extends Component {
    
    render() {
    return (
        <div className={"card " + (this.props.Clicked ? "animate" : "")} onClick={() => this.props.handleClick( this.props.id)} >  
            <div className="img-container">
                <img alt={this.props.name} src={this.props.image} />
            </div>
            <div className="img-content">
                <ul>
                    <li>
                        <strong>Name: </strong>{this.props.name}
                    </li>
                    <li>
                        <strong>Occupation: </strong>{this.props.occupation}
                    </li>
                </ul>
            </div>
        </div >
    )
}
}

export default CharacterCard;