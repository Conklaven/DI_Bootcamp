import React from 'react';
import {connect} from 'react-redux'
import {handleUp, handleDown} from '../actions/Actions'


class Counters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   counter : 0
    }
  }

  increase= (e) =>{
    this.props.myHandleUp(e)
  }

  decrease= (e) =>{
    this.props.myHandleDown(e)
  }
  ifOdd= (e) =>{
    if (this.props.counter %2 == 0){

    } else{
    this.props.myHandleUp(e)
    }
  }

  incrementAsync = (e) => {
    setTimeout(() => {this.props.myHandleUp(e)}, 2000);
  };

  render(props) {
    console.log(this.props.counter)
  return (
  
    <div className="App">
      <header className="App-header">
        <div>counter : <span> {this.props.counter}</span></div>
        <button onClick={()=>this.increase(this.props.counter)}>+</button>
        <button onClick={()=>this.decrease(this.props.counter)}>-</button>
        <button onClick={()=>this.ifOdd(this.props.counter)}>Increment if Odd</button>
        <button onClick={()=>this.incrementAsync(this.props.counter)}>Increment after 2 seconds</button>


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
  export default connect(mapStateToProps, mapDispatchToProps)(Counters);

