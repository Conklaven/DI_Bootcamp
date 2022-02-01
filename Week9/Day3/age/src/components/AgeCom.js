import React from 'react';
import {connect} from 'react-redux'
import {handleUp, handleDown} from '../actions/Actions'


class AgeCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   counter : 0
    }
  }

  AgeUp= (e) =>{
    console.log('dispatching', this.props.myHandleUp(e))
  }

  AgeDown= (e) =>{
    
    console.log('dispatching', this.props.myHandleDown(e))
  }
  
  render(props) {
    console.log(this.props.counter)
  return (
  
    <div className="App">
      <header className="App-header">
        <>
            <div>Age : <span>{this.props.counter}</span></div>
            <button onClick={()=>this.AgeUp(this.props.counter)}>Age Up</button>
            <button onClick={()=>this.AgeDown(this.props.counter)}>Age Down</button>
        </>
      </header>
    </div>
  );
}
}

const mapStateToProps = (state) =>{
    return {
      counter: state.counter,
  
  }
  }
  
  const mapDispatchToProps =(dispatch)=>{
  return{
    myHandleUp: (e) => dispatch(handleUp(e)),
    myHandleDown: (e) => dispatch(handleDown(e))
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(AgeCom);