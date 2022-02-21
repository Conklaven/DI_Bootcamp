import React from 'react';

class Child extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    componentWillUnmount(){
        alert('please do not throw me away')
    }
    render() {
        return (
            <>
        
            <h4>I am a child Component</h4>
            
            </>
        )
    }
}

export default Child;