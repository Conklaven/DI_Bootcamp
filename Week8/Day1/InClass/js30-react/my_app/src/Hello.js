// APP
// const Hello = (props) =>{
//     console.log(props)
// const {user, email} = props}
//     return (
//         <div>
//             <h1>Hello {props.user} from Hello app TEST</h1>
//         </div> 
//     )
// }

// export default Hello;

// Class component
import React from 'react';

class Hello extends React.Component {
    render(){
        // console.log(this.props.user)
        return (<div>
            Hello {this.props.user}, How are you?

        </div>);
    }
}
export default Hello;