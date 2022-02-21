import {connect} from 'react-redux'

const MoviesList =(props) => {
    const {movies, selectMovie} = props{
        
    }
}

const mapStateToProps = (state) =>{
    return{
        movies:state.movies
    }
}

const mapDispatchToProps = (dispatch) =>{
 return{
     selectMovie: (item) => dispatch(selectMovie(item))
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)