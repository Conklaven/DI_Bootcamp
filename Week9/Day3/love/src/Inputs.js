import React from 'react';

const Inputs = (props) => {
        return (
            <div className="details-container" style={{width: '70%'}}>
                <input type="text" className="nameOne" id="nameOne" placeholder="Name One"></input> <br></br>
                <input type="text" className="nameTwo" id="nameTwo"placeholder="Name Two"></input>
            </div>
            
        ) 
}

export default Inputs;