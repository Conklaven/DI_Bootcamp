import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Card from './components/Card';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card name={"Jacob"} email={"Jacob@example.com"}/>
        
      </header>
    </div>
  );
}

export default App;
