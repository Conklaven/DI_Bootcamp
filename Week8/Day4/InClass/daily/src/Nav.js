import {Link} from 'react-router-dom'

const Nav = (props) =>{
    return(
        <>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
        </>
    )
}
export default Nav;