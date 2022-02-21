import React from 'react';

class MovieDetails extends React.Component {
    
    
    render(props) {
        console.log(this.props)
     return (
      
          <div>
           {this.props.name}
            
          </div>
       
    );
  }
  }
  
  
  export default MovieDetails;