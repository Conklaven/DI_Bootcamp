import logo from './logo.svg';
import './App.css';
import Quotes from './Quotes'
import React from 'react';



 class App extends React.Component {
  constructor(){
    super();
    this.state = {
      quote:'',
      author: '',
    }

  }

changeQuote(){
  let num = Math.floor(Math.random() * (Quotes.length)+1);
  console.log(Quotes[num].quote)
  let quote = document.getElementById('quoteText')
  quote.innerHTML = Quotes[num].quote
  let author = document.getElementById('authorText')
  author.innerHTML = Quotes[num].author
let r = Math.floor(Math.random() * 155);
let g = Math.floor(Math.random() * 155);
let b = Math.floor(Math.random() * 155);
// let container = document.getElementById('container')
// container.style.backgroundColor(`rgb(${r},${g},${b})`)
  // this.setState({quote: Quotes[num].quote})
  // this.setState({author: Quotes[num].author})
}

componentDidMount(){
       let num = Math.floor(Math.random() * (Quotes.length)+1);
        this.setState({quote: Quotes[num].quote})
        this.setState({author: Quotes[num].author})
  
  }

  render(){
    return(
    <>
    <div className="background">
    <div className="container">
    <div><h1 id="quoteText">{this.state.quote}</h1></div>
    <div><h3 id="authorText">{this.state.author}</h3></div>
    <button id="btn" onClick={this.changeQuote}>New Quote</button>
    </div>
    </div>
    </>
    )
  }
}


export default App;
