import React, {Component} from 'react';
import Card from './Card';
import SearchBox from './SearchBox';


class Robots extends Component {
    constructor() {
        super();
        this.state = {
            arr:[],
            txt:''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{
      this.setState({arr:data})
    })
    }
  
    searchItem =(e) => {
        // console.log(e)
this.setState({txt:e.target.value})
console.log(e.target.value)
    }

    
    render(){
        const {arr,txt} = this.state;
        const filterArr = arr.filter(item => {
            // console.log(item)
            return item.name.toLowerCase().includes(txt.toLowerCase());
        })
        return(
           
            <>
        <SearchBox  searchItem={this.searchItem}/>
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

export default Robots;