import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import React from 'react';

let message;

 class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: 'test'
    }

  }


  async componentDidMount(){
       
        let test = await fetch('http://localhost:5000/api/hello')
        let newdata = await test.json()
        this.setState({data: newdata.message})
        // .then(response => response.json())
        // .then(newdata => this.setState({data: newdata.message}))
  
  }

  render(){
    return(
    <>
    {this.state.data}
    </>
    )
  }
}


export default App;