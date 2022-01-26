import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Routes, NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
// import Nav from 'react-bootstrap/Nav';
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './ErrorBoundary';
import PostList from './PostList'

const HomeScreen = (props) => (
  <div>
    <h1>HomePage</h1>
    <PostList/>
  </div>
);
const ProfileScreen = (props) => (
  <div>
    <h1>Profile</h1>
  </div>
);
const ShopScreen = (props) => {
  throw new Error("An Error has occured");
};
function App() {
  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href='/'>Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href='/profile'>Profile</Nav.Link>
        <Nav.Link href='/shop'>Shop</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Routes>
<Route path ='/' element ={<ErrorBoundary><HomeScreen/></ErrorBoundary>} />
      <Route path ='/profile' element ={<ErrorBoundary><ProfileScreen/></ErrorBoundary>} />
      <Route path ='/shop' element ={<ErrorBoundary><ShopScreen/></ErrorBoundary>} />


    </Routes>
    </>
  );


}

export default App;
