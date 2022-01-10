async function runFetch(a,b) {
    // let fetched = await fetch(`http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&source=${a}&format=1`)
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

}

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
        let toParent = document.getElementById("tocurrency")
        toParent.appendChild(option)
    }
    // for (let key in array)  {
    //     let option = document.createElement('option')
    //     option.setAttribute('value', key)
    //     option.innerHTML = array[key]
    //     let fromParent = document.getElementById('fromcurrency')
    //     // let toParent = document.getElementById("tocurrency")
    //     // toParent.appendChild(option)
    //     fromParent.appendChild(option)
    // }
})