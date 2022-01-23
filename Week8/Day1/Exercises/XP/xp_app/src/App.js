import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Sum from './Summed';
import Fav from './components/Fav';


const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};
// const myelement = <h1>I Love JSX!</h1>
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div> <Hello/> </div>
//         <div> <Sum/> </div>
//         {myelement}

//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
         
         <h3>{user.first_name}</h3>
         <h3>{user.last_name}</h3>
      <Fav animals= {user.fav_animals} />

    </div>
      </header>
    </div>
  );
}

export default App;
