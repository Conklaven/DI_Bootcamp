async function runFetch() {
    let fetched = await fetch(`http://api.currencylayer.com/live?access_key=f5a2d13309d2fce56ca45fcccf6450f2&format=1`)
    let response = fetched.json();
    console.log(response);
    return response
}

let convert = document.getElementById("convert");
convert.addEventListener("click", getData)

function getData(e) {
    e.preventDefault();
    let from = document.getElementById("fromcurrency").value
    console.log(from);
    let to = document.getElementById("tocurrency").value
    console.log(to);
    let amount = (document.getElementById("amount").value)
    let amountInt = parseInt(amount);
    console.log(typeof amountInt)
    runFetch()
    .then(result => result.quotes)
    .then(quotes => {
            let combined = from,to;
    })
}

// runFetch()
// .then((result) => { console.log(result) })