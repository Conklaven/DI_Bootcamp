import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Child from './Child';
import {handleChangeProp, handleClickProp} from './actions'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message: 'Hello',
      note: "note",
      bbb: 'bbb'
    }
  }
  changestate=(e)=>{
    if(e.key === 'Enter'){
      this.setState({message: e.target.value});

    }
  }

  clickHandler=(e)=>{
      this.setState({note: this.state.message});
  }
  render() {
    console.log(this.props.message)
   return (
    <div className="App">
      <header className="App-header">
        <h2>Redux simple example</h2>
        <h3>Message: {this.state.message}</h3>
        <h3>Note: {this.state.note}</h3>
        <h3>Note from store: {this.props.note}</h3>
        <h3>bbb from state: {this.state.bbb}</h3>
        <h3>bbb from store: {this.props.bbb}</h3>

        <input onChange={this.props.myHandleChange} type="text" className="input"></input>

        {/* <input onKeyPress={this.changestate} type="text" className="input"></input> */}
        <p><button onClick={this.clickHandler}>Change Note to Message</button></p>
        <p><button onClick={()=>this.props.myHandleClick(this.props.bbb)}>Change props</button></p>
        
        <Child/>
      </header>
    </div>
  );
}
}
const mapStateToProps = (state) =>{
 return {
   message: state.message,
   note: state.aaa,
   bbb: state.bbb
 }
}

const mapDispatchToProps =(dispatch)=>{
return{
  myHandleChange: (e) => dispatch(handleChangeProp(e.target.value)),
  myHandleClick: (val) => dispatch(handleClickProp(val))
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
