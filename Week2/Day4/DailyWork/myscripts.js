function age(myAge) {
    let momAge = myAge * 2
    let dadAge = (momAge *1.2).toFixed(0)
    console.log (`my age is ${myAge}, my mom is ${momAge} and my dad is ${dadAge} `)
}
age(36)

// Tip tax calc

let pricesRestaurant = [25,19,46];
function findSum(){
    let sum = 0
    for (let price of pricesRestaurant){
        sum = sum + price;
    }
    return sum
}
function totalSumWithTip(){
    let billTotal = findSum() * 1.17
    return billTotal
}

totalSumWithTip();

function waiterSpeaking (language) {
    if (language == "english"){
        console.log(`the price is ${totalSumWithTip()}`)
    } else if (language == "french") {
        console.log(`Le prix est ${totalSumWithTip()}`)
    } else {
        console.log("invalid")
    }
}
waiterSpeaking("french")

//4. Create a function that display the price that each of us needs to pay (price including taxes)

function pricePerPerson (numberOfPeople) {
    let price = "$" + (totalSumWithTip() / numberOfPeople).toFixed(2)
    return price
}
alert(`The Amount owed per person is ${pricePerPerson(prompt("How Many People"))}`)
// function calculateTip() {
//     let billAmount = prompt("How much is the bill?")
//