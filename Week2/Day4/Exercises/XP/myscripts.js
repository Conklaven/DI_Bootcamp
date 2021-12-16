// ----------------------Exercise 1 Part I-----------------------------
function infoAboutMe() {
    let myName = "Jacob"
    let myHobbies = "model making, legos, and video games"
    let myAge = 36
    console.log(`Hi, my name is ${myName}, I am ${myAge} years old and I enjoy ${myHobbies}.`)
}
infoAboutMe()
// ----------------------Exercise 1 Part II-----------------------------
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge} years old and your favorite color is ${personFavoriteColor}.`)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// ----------------------Exercise 2-----------------------------
// let total = parseInt(prompt("John, please tell me the total amount of the bill"))
function calculateTip() {
    let total = parseInt(prompt("John, please tell me the total amount of the bill"))
    if (total < 50) {
        totalWithTip = (total * 1.20).toFixed(2)
        tip = (totalWithTip - total).toFixed(2)
        console.log(tip)
        console.log(totalWithTip)
    } else if (total >= 50 && total <= 200) {
        totalWithTip = (total * 1.15).toFixed(2)
        tip = (totalWithTip - total).toFixed(2)
        console.log(tip)
        console.log(totalWithTip)
    } else {
        totalWithTip = (total * 1.10).toFixed(2)
        tip = (totalWithTip - total).toFixed(2)
        console.log(tip);
        console.log(totalWithTip);
    }
}
calculateTip()

// ----------------------Exercise 3-----------------------------

// function isDivisible() {
//     let sum = 0;
//     for (i = 0; i <= 500; i++){
//         if (i % 23 == 0) {
//             console.log(i)
//             sum = sum + i
//        }
//     }
//     console.log(sum)
// }

// isDivisible()

// bonus

function isDivisible(divisor) {
    let sum = 0;
    for (i = 0; i <= 500; i++) {
        if (i % divisor == 0) {
            console.log(i)
            sum += i
        }
    }
    console.log(sum)
}

isDivisible(parseInt(prompt("please select divisor")))

// ----------------------Exercise 3-----------------------------
let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

let shoppingList = ["banana", "orange", "apple"]

function myBill() {
    let newSum = 0;
    for (let items of shoppingList) {
        if (stock[items] >= 1) {
            newSum = newSum + (prices[items])
            // Bonus
            stock[items] --;
        }
    }
    console.log(newSum)
}

myBill()
console.log(stock["banana"])
console.log(stock["orange"])

// ----------------------Exercise 5-----------------------------
function changeEnough(itemPrice, amountOfChange) {
    let changeSum = (amountOfChange[0] * .25) + (amountOfChange[1] * .10) + (amountOfChange[2] * .05) + (amountOfChange[3] * .01)
    console.log(changeSum)
    console.log(itemPrice);
    if (parseInt(changeSum) >= parseInt(itemPrice)) {
        console.log("true");
    } else {
        console.log("false")
    }
}

changeEnough(4.25, [25, 20, 5, 0])

// ----------------------Exercise 6-----------------------------
function hotelCost() {
    let nights;
    let nightsInt;
    let cost;
    do {
        nights = prompt("How many Nights would you like to stay in the hotel")
        nightsInt = Number(nights);
        cost = nights * 140;
    } while (nightsInt != nights);
    console.log(cost)
    return cost;
}


function planeRideCost() {
    let dest;
    let destCost;
    dest = prompt("Where would you like to go?").toLowerCase();
    if (dest == "paris") {
        destCost = 220;
    } else if ( dest == "london"){
        destCost = 183;
    } else {
        destCost = 300;
    }
    console.log(destCost)
    return destCost
} 


function rentalCarCost(){
    let days;
    let daysInt;
    let carCost;
    do {
        days = prompt("How many days would you like to have a rental car?")
        daysInt = Number(days);
        carCost = days * 40;
        console.log(carCost)
    } while (daysInt != days);
    
    if (days >= 11) {
        carCost = carCost *.95
    } else {

    }
    console.log(carCost)
    return carCost;
}


function totalVacationCost() {
    totalCost = hotelCost() + planeRideCost() + rentalCarCost();
    return totalCost
}

console.log(totalVacationCost())