import {connect} from 'react-redux';
import TransactionForm from './TransactionForm'
const TransactionList =(props) =>{
    console.log(props.name)
return(
    <>
    <table>
        <tbody>
  <tr>
    <th>Account Number</th>
    <th>FSC</th>
    <th>Name</th>
    <th>Amount</th>

  </tr>
  <tr>
    <td>{props.accountNumber}</td>
    <td>{props.fsc}</td>
    <td>{props.name}</td>
    <td>{props.amount}</td>

  </tr>
  </tbody>
</table>
    </>
)
}
const mapStateToProps = (state) =>{
    return {
        name : state.name,
        fsc: state.fsc,
        accountNumber: state.accountNumber,
        amount: state.amount
    }
   }
   export default connect(mapStateToProps)(TransactionList);