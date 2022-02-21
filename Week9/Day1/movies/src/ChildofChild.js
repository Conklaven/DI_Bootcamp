import {connect} from 'react-redux';

const ChildofChild =(props) =>{
return(
    <>
    <h2>Child of Child Component</h2>
    <h3>{props.bbb}</h3>
    </>
)
}

const mapStateToProps = (state) =>{
    return {
        bbb: state.bbb
    }
   }
   
   // const mapDispatchToProps =(dispatch)=>{
   
   // }
   export default connect(mapStateToProps)(ChildofChild);