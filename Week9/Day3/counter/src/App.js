import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Counter from './components/Counters';

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
        <Counter/>
      </header>
    </div>
  );
}
}
export default App;
