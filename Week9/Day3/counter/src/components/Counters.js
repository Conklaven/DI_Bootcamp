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


// import React from 'react';
// import {connect} from 'react-redux';
// import TransactionList from './TransactionList';
// import {handleInsert, handleUpdate} from '../actions/transactionsActions'

// class TransactionForm extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       accountNumber: '',
//       fsc: "",
//       name: '',
//       amount : null
//     }
//   }
//   handleSubmit =(e) => {
//       e.preventDefault();
//       console.log(this.state)
//       let list = this.state.list
//       list = {accountNumber: this.state.accountNumber,fsc: this.state.fsc, name: this.state.name, amount: this.state.amount}
//       this.props.myHandleClick(this.state)
//       localStorage.setItem("transaction", JSON.stringify(this.state));
   
//     }
//   handleChange =(e) => {
//       let id = e.target.id
//       this.setState({[e.target.id]: e.target.value})
//   // this.props.myHandleChange(this.state)
//     }
//   render() {
//    return (
//     <div className="App">
//       <header className="App-header">
//           <>
//         <form>
//             <div>
//                 Financial Transactions:
//             </div>
//                 <div><input id="accountNumber" type="text" placeholder="Account Number" onChange={this.handleChange}></input>
//             </div>
//                 <div><input id="fsc"  type="text" placeholder="FSC" onChange={this.handleChange}></input>
//             </div>
//                 <div><input id="name"  type="text" placeholder="Holder Name" onChange={this.handleChange}></input>
//             </div>
//                 <div><input id="amount" type="text" placeholder="Amount" onChange={this.handleChange}></input>
//             </div>
//                 <div><button type="submit" id="btn" onClick={this.handleSubmit}>Submit</button>
//             </div>        
//             </form>
//             <div>
//                 <div>All Transactions</div>
//                 <div className="display"><TransactionList/></div>
//             </div>
//             </>
//       </header>
//     </div>
//   );
// }
// }
// const mapStateToProps = (state) =>{
//   return {
//     name: state.name,
//     currentIndex: state.currentIndex

// }
// }

// const mapDispatchToProps =(dispatch)=>{
// return{
//   myHandleChange: (e) => dispatch(handleInsert(e)),
//   myHandleClick: (e) => dispatch(handleUpdate(e))
// }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);