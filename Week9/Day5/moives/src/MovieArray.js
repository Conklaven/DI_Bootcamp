import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import {handleSelected} from './actions/Actions'


class MovieArray extends Component {
    constructor() {
        super();
        this.state = {
            arr:[],
            txt:'',
            kosher: '',
            name:'',
        }
    }
    restDetails=(e) => {
      console.log(e)
      console.log(this.props.array)
      this.props.myHandleSelected(e)
    }

    render(props){
        console.log(this.props.array)
        const {arr,txt} = this.state;
        const filterArr = arr.filter(item => {
            // console.log(item)
            return item.search.toLowerCase().includes(txt.toLowerCase());
        })
        return(
           
            <>
        <div className="robotcontain">
                {
                    this.props.array.map((item, i) =>{
                      return <Card user={item} restDetails={this.restDetails}/>
                    })
                  }
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
  console.log(state.selectedname)
    return {
      array: state.array,
    txt: state.txt,
    kosher: state.kosher,
    SelectedName: state.selectedname
  }
  }
  
  const mapDispatchToProps =(dispatch)=>{
  return{
    myHandleSelected: (e) => dispatch(handleSelected(e)),
    // myHandleDown: (e) => dispatch(handleDown(e))
  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(MovieArray);