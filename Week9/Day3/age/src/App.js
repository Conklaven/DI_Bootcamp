import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import AgeCom from './components/AgeCom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    }
  }
  render() {
  return (
  
    <div className="App">
      <header className="App-header">
       <AgeCom/>
      </header>
    </div>
  );
}
}
export default App;