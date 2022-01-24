import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';



const carinfo = {name: "Ford", model: "Mustang"};
console.log(carinfo.model);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Car name={carinfo.name} model={carinfo.model}/>
        <Events/>
        <Phone/>
        <Color/>


      </header>
    </div>
  );
}

export default App;
