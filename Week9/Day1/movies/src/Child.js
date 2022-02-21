import {connect} from 'react-redux';
import ChildofChild from './ChildofChild';

const Child =(props) =>{
return(
    <>
    <h2>Child Component</h2>
    <h3>{props.note}</h3>
    <ChildofChild/>
    </>
)
}

const mapStateToProps = (state) =>{
    return {
        note: state.aaa
    }
   }
   
   // const mapDispatchToProps =(dispatch)=>{
   
   // }
   export default connect(mapStateToProps)(Child);
   