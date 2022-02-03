import React, {Component} from 'react';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Home from './Home'


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
    
    render(props){
        return(
           
        <>
        <nav>
            <div className="nav-fixed">
                    <a href="/home" className="brand-logo">My Blog</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                
            </div>
        </nav>
            
            </>
        )
    }
}

  export default Navbar;