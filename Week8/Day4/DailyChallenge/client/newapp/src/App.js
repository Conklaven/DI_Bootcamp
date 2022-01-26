import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import React from 'react';



 class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: 'test'
    }

  }
  componentDidMount(){
      async function test(){
        let result = fetch('http://localhost:5000/api/hello')
        .then(response => (response))
        .then(data => console.log(data))
        console.log(result)
   }
   test()
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