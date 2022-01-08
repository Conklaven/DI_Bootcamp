async function runFetch(a,b) {
    let fetched = await fetch(`http://api.currencylayer.com/live?access_key=f5a2d13309d2fce56ca45fcccf6450f2&format=1`)
    let response = fetched.json();
    console.log(response);
    return response
}

let convert = document.getElementById("convert");
convert.addEventListener("click", getData)
let array ={}
function getData(e) {
    e.preventDefault();
    let from = document.getElementById("fromcurrency").value
    console.log(from);
    let to = document.getElementById("tocurrency").value
    console.log(to);
    let amount = (document.getElementById("amount").value)
    let amountInt = parseInt(amount);
    console.log(typeof amountInt)
    runFetch(from, to)
    .then(result => {
        let key = from + to;
        let value = result.quotes[key]
        let resultspace = document.getElementById("result")
        resultspace.style.display ="block"
        resultspace.innerHTML = (amountInt * value).toFixed(2)
    })
    // .then(quotes => {
            
    //         array = quotes
    //         getExchange(array, key)
    // })
}

// runFetch(a,b)
// .then((result) => { console.log(result) })
// function getExchange(a, key) {
//     let value = a.key 
//     console.log(a.key)
//     console.log(a)
//     console.log(key)
// }

async function getCurrency() {
    let fetched = await fetch(`http://api.currencylayer.com/list?access_key=f5a2d13309d2fce56ca45fcccf6450f2`)
    let response = fetched.json();
    console.log(response);
    return response
}

getCurrency()
.then(response => response.currencies)
.then(array => {
    console.log(array);
    
    for (let key in array)  {
        let option = document.createElement('option')
        option.setAttribute('value', key)
        option.innerHTML = array[key]
        let parent = document.getElementById("tocurrency")
        parent.appendChild(option)
    }
})