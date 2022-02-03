import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
        <Navbar/>

        <div className="App-intro">
                    <Routes>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/:post_id" element={<Post/>}/>

                    </Routes>
                </div>
     </>
  );
}

export default App;
