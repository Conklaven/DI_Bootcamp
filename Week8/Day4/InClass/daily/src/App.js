import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import Home from './Home';
import About from './About';
import React from 'react';
import Nav from './Nav';
import {Routes, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();

  }

  changePages = (pageTo) => {
    this.setState({page:pageTo})
  }

  render(){
    return(
    <>
    <Nav/>
    <Routes>
      <Route path ='/' element ={<Home/>} />
      <Route path ='/about' element ={<About/>} />

    </Routes>
    </>
    )
  }
// render() {
//   switch(this.state.page){
//     case 'home':
//       return(
//         <>
//         <Home changePages={this.changePages}/>
//         </>
//       )
//         case 'about':
//           return(
//             <>
//             <About changePages={this.changePages}/>
//             </>
//           )
//         default:
//           return(
//             <>
//             <Home changePages={this.changePages}/>
//             </>
//           )
      
//   }
//   return(
//     <><Home/>
//     <About/>
//     </>
//   )
// }
}


export default App;
