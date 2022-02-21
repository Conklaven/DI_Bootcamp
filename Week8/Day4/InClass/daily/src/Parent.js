import React from 'react';
import Child from './Child';

class Parent extends React.Component {
    constructor(){
        super();
        this.state={
            show: true, 
    }
}
toggle = () => {
    this.setState({show: !this.state.show})
}
render() {
    return(
    <>
    {this.state.show ? <Child/> :null}
    <button onClick={this.toggle}>Click Me to toggle child</button>
    </>
    )
}
}

export default Parent;