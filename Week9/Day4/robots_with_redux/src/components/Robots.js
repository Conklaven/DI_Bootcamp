import React, {Component} from 'react';
import Card from './Card';
import SearchBox from './SearchBox';
import {connect} from 'react-redux';
import {handleArray, handleText} from '../actions/Actions'
import RobotArray from './RobotArray';
class Robots extends Component {
    constructor() {
        super();
        this.state = {
            arr:[],
            txt:''
        }
    }
    componentDidMount = async (props) =>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            console.log(data)
            this.props.myHandleArray(data)
        } catch (e) {
            console.log(e)
        }
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(data =>{
        //     this.setState({arr:data})
    // })
    }
    
    searchItem =(e) => {
        // console.log(e)
        this.props.myHandleText(e.target.value)
        console.log(e.target.value)
    }

    
    render(props){
        return(
           
            <>
        <SearchBox  searchItem={this.searchItem}/>
        <RobotArray/>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      array: state.array,
    txt: state.txt
  }
  }
  
  const mapDispatchToProps =(dispatch)=>{
  return{
    myHandleArray: (e) => dispatch(handleArray(e)),
    myHandleText: (e) => dispatch(handleText(e))
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Robots);