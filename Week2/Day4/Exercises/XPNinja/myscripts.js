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