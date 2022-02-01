import React from 'react';
import {connect} from 'react-redux';
import TransactionList from './TransactionList';
import {handleInsert, handleUpdate} from '../actions/transactionsActions'

class TransactionForm extends React.Component {
  constructor(){
    super();
    this.state = {
      accountNumber: '',
      fsc: "",
      name: '',
      amount : null
    }
  }
  handleSubmit =(e) => {
      e.preventDefault();
      console.log(this.state)
      let list = this.state.list
      list = {accountNumber: this.state.accountNumber,fsc: this.state.fsc, name: this.state.name, amount: this.state.amount}
      this.props.myHandleClick(this.state)
      localStorage.setItem("transaction", JSON.stringify(this.state));
   
    }
  handleChange =(e) => {
      let id = e.target.id
      this.setState({[e.target.id]: e.target.value})
  // this.props.myHandleChange(this.state)
    }
  render() {
   return (
    <div className="App">
      <header className="App-header">
          <>
        <form>
            <div>
                Financial Transactions:
            </div>
                <div><input id="accountNumber" type="text" placeholder="Account Number" onChange={this.handleChange}></input>
            </div>
                <div><input id="fsc"  type="text" placeholder="FSC" onChange={this.handleChange}></input>
            </div>
                <div><input id="name"  type="text" placeholder="Holder Name" onChange={this.handleChange}></input>
            </div>
                <div><input id="amount" type="text" placeholder="Amount" onChange={this.handleChange}></input>
            </div>
                <div><button type="submit" id="btn" onClick={this.handleSubmit}>Submit</button>
            </div>        
            </form>
            <div>
                <div>All Transactions</div>
                <div className="display"><TransactionList/></div>
            </div>
            </>
      </header>
    </div>
  );
}
}
const mapStateToProps = (state) =>{
  return {
    name: state.name,
    currentIndex: state.currentIndex

}
}

const mapDispatchToProps =(dispatch)=>{
return{
  myHandleChange: (e) => dispatch(handleInsert(e)),
  myHandleClick: (e) => dispatch(handleUpdate(e))
}
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
