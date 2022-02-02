import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';

class RobotArray extends Component {
    constructor() {
        super();
        this.state = {
            arr:[],
            txt:''
        }
    }
    
    render(props){
        console.log(this.props.array)
        console.log(this.props.txt)

        // const {arr,txt} = this.props;
        const filterArr = this.props.array.filter(item => {
            console.log(item)
            return item.name.toLowerCase().includes(this.props.txt.toLowerCase());
        })
        return(
           
            <>
        <div className="robotcontain">
                {
                    filterArr.map((item, i) =>{
                      return <Card user={item} />
                    })
                  }
            </div>
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
  
//   const mapDispatchToProps =(dispatch)=>{
//   return{
//     myHandleArray: (e) => dispatch(handleArray(e)),
//     // myHandleDown: (e) => dispatch(handleDown(e))
//   }
//   }
  export default connect(mapStateToProps)(RobotArray);
