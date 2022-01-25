import React from 'react';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname:'', 
            lastname: '', 
            age: '', 
            message: '',
        }
    }
handleChange =(e)=> {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
}
handleSubmit =(e)=> {
    e.preventDefault()
    const {firstname, lastname, age} = this.state
    console.log(firstname, lastname, age)
}
render(){
    return (
        <>
        <h4>Register</h4>
        <form>
        <div><input onChange={this.handleChange} type="text" name="firstname" placeholder="First Name"/></div>
        <div><input onChange={this.handleChange} type="text" name="lastname" placeholder="Last Name"/></div>
        <div><input onChange={this.handleChange} type="text" name="age" placeholder="Age"/></div>
        <div>
            <input onChange={this.handleChange} type="radio" name="gender"/> Male <br/>
            <input onChange={this.handleChange} type="radio" name="gender"/>Female
        </div>
        <div><label for="destination">Choose Your Destination:</label>
        <select onChange={this.handleChange} name="destination" id="destination">
            <optgroup label="North America">
                <option value="memphis">Memphis</option>
                <option value="newyork">New York</option>
            </optgroup>
            <optgroup label="Europe">
                <option value="paris">Paris</option>
                <option value="athens">Athens</option>
            </optgroup>
        </select>
        </div>
        <div><p>Dietary Restrictions</p>
        <div>
  <input type="checkbox" id="nuts" name="nuts"/>
  <label for="nusts">Nut Free</label>
</div>

<div>
  <input type="checkbox" id="lactose" name="lactose"/>
  <label for="lactose">Lactose Free</label>
</div>
<div>
  <input type="checkbox" id="vegan" name="vegan"/>
  <label for="vegan">Vegan</label>
</div>
        </div>
        <div><button onClick={()=>this.handleSubmit()}>Submit</button></div>
        <div>{this.state.message}</div>
        </form>
        </>
    )
}
}

export default Register;