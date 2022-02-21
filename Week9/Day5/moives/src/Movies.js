import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleArray, handleText, handleChecked} from './actions/Actions'
import SearchBox from './SearchBox';
import MovieArray from './MovieArray';

let searchResult; 
class Movies extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            movies: [],
            loading: false,
            movie: []
        }
    }
    searchItem =(e) => {
        if(e.key ==="Enter"){
            
            console.log(e.key)
            console.log(e.target.value)
            this.props.myHandleText(`${e.target.value}`)
            console.log(this.props.txt)
            this.componentDidMount()
            console.log(this.state.movies)
            let search = e.target.value
            
            try {
                console.log(this.props.txt)
                
                let novies = this.state.movies
                console.log(novies)
                const APIKey = 'fe6e6c86'
                const response =  fetch(`http://www.omdbapi.com/?apikey=${APIKey}&s=${search}`)
                .then( response =>  response.json())
                .then(data => {
                    let array = data.Search
                    
                    this.setState({movies : array})
                    let arrayDiv = document.getElementById('result')
                    arrayDiv.content = array.map(
                        (item, i)=>{
                        let title = item.Title
                        this.setState(prevState => {
                            let mov = Object.assign({}, prevState.mov);  // creating copy of state variable jasper
                            mov.name = title;                     // update the name property, assign a new value                 
                            return { mov };                                 // return new object jasper object
                          })
                        return(
                            item.Title
                            )
                    }
                    )
                    return searchResult
                
            })
                
            } catch (e) {
                console.log(e)
            }

        }
    }
   
    


    componentDidMount = async (props) =>{
        
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(data =>{
        //     this.setState({arr:data})
    // })
    }
    
    componentDidUpdate(props){
        console.log(this.state.movies.name)
    }
    render(props){
        console.log(searchResult)
        return(
           
            <>
        <SearchBox  searchItem={this.searchItem}/>
        <div> Text {this.props.txt}</div>
        <div id="result"> Array {this.state.movies}</div>

        <MovieArray/>
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
  
  const mapDispatchToProps =(dispatch)=>{
  return{
    myHandleArray: (e) => dispatch(handleArray(e)),
    myHandleText: (e) => dispatch(handleText(e)),
  }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Movies);