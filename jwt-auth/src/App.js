import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom';

import {Auth} from './authenticate/Auth.js'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="App">
     <Nav/>
     <ToastContainer />
     <Routes>
       <Route path="/login" element={<Login title={'Login'}/>}/>
       <Route path="/Register" element={<Login title={'Register'}/>}/>
       <Route path="/home" element={<Home title={'Home'}/>}/>
       <Route path="/" element={<Auth><Home title={'Home'}/></Auth>}/>
       <Route path="/about" element={<Auth><About title={'About'}/></Auth>}/>
     
     </Routes>
     
    </div>
  );
}

export default App;
