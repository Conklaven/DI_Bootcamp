import React from 'react';
import './App.css';
import Movies from './Movies';
import MovieDetails from './MovieDetails';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [
        {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
        {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
        {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
        {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
        {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
    ],
    details: [
      {title: '', releaseDate: '', rating: null,},
  ]
    }
  }
  handleClick = (e) => {
    let result = this.state
    result.details[0].title = e.title
    result.details[0].releaseDate = e.releaseDate
    result.details[0].rating = e.rating
    this.setState({result})
  }
  render() {
    console.log(this.state.movies)
   return (
    <>
        <div>
         Movies
          {this.state.movies.map(movie=>{
            return (
              <>
              <div>{movie.title}</div>
              <><button onClick={() => this.handleClick(movie)}>more detials</button></>
              </>
            )
          })}
        </div>
        <div>Result</div>
         <div id="result">Title: {this.state.details[0].title}</div>
         <div id="result">Release Date: {this.state.details[0].releaseDate}</div>
         <div id="result">Rating: {this.state.details[0].rating}</div>

        </>
  );
}
}


export default App;