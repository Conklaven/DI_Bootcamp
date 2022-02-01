import React from 'react';


const runResults = () => {

    let nameOne = document.getElementById('nameOne')
    let nameTwo = document.getElementById('nameTwo')
    console.log(nameOne.value)
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${nameOne.value}&fname=${nameTwo.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "1027227577msh0e5df17eb151f38p1cfe4bjsnd2fe5b28d286"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data.fname)
    let perc = document.getElementById('percent')
    perc.innerHTML = data.percentage
    let fname = document.getElementById('nameone')
    fname.innerHTML = data.fname
    let sname = document.getElementById('nametwo')
    sname.innerHTML = data.sname
    let words = document.getElementById('word')
    words.innerHTML = data.result
})
.catch(err => {
	console.error(err);
});
}

const Result = (props) => {
    
        return (
            <div className="details-container" style={{width: '70%'}}>
                <button onClick={runResults}>Is it Love?</button>
<div id="fname">Name One : <span id="nameone" className="fname"></span></div>
<div id="sname">Name Two : <span id="nametwo" className="sname"></span></div>
<div id="result">Percentage : <span id="percent" className="percent"></span></div>
<div id="words"><span id="word" className="word"></span></div>

            </div>
            
        ) 
}

export default Result;


