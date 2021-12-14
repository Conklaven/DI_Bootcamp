// ----------------- Exercise 1 Part 1 ------------------------------

let people = ["Greg", "Mary", "Devon", "James"];

people.splice(0,1);
people[3] = "Jason";
people.push = "Jacob";
console.log( people.indexOf("Mary"));

let newPeople = people.slice(1,4)
console.log(newPeople)
console.log(newPeople.indexOf("Foo"))
let last = newPeople[(newPeople.length -1)]
console.log (last)


// ----------------- Exercise 1 Part 2 ------------------------------

for ( let list of people) {
    console.log(list)
}

for ( let listB of people) {
    if (listB == "Jason") {
        console.log(listB)
        break;
    }
    console.log(listB)
}

// ----------------- Exercise 2 ------------------------------
let colors = ["red", "blue", "green", "white", "black"];

for ( counter = 0; counter < colors.length; counter ++) {
    console.log(`My #${(counter +1)} choice is ${colors[counter]}`);
}
// ----------------- Exercise 3 ------------------------------

// let number = prompt( "please enter a number")
// console.log(typeof number)

// // while (number < 10) {
// //     number = prompt("please enter a number larger than 10")

// //   }

// OR

let number;
  do {
    number = prompt( "please enter a number larger than 10")
  } while (number < 10)

// ----------------- Exercise 4 ------------------------------
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building["numberOfAptByFloor"])
let sum = (building["numberOfAptByFloor"]["firstFloor"] + building["numberOfAptByFloor"]["thirdFloor"])
let secondTenant = (building.nameOfTenants[1])
let num = building["numberOfRoomsAndRent"]["dan"][0];
console.log(` The Second Tenant is ${secondTenant} and owns ${num} apartments`)
let rentOne = building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1]
if (rentOne > building["numberOfRoomsAndRent"]["dan"][1]) {
    building["numberOfRoomsAndRent"]["dan"][1] = 1200;
    console.log(`Dan's new rent is ${building["numberOfRoomsAndRent"]["dan"][1]}`)
} else {
    console.log(building["numberOfRoomsAndRent"])
}

// for (let apt in building) {
//     let 
// }
// for (let apt in building["numberOfAptByFloor"]) {
//     console.log(building[apt])
// }
// console.log(building)

// ----------------- Exercise 5 ------------------------------

let family = {
        Jacob : 36,
        Natalie : 36,
        Tamara : 6,
        Maya : 4,
        Noam : 2,
    
}

console.log(Object.keys(family))
console.log(Object.values(family))

// ----------------- Exercise 6 ------------------------------
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

for (let count in details) {
    console.log(count, details[count])
}

// ----------------- Exercise 7 ------------------------------
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let letters = names.map(x => x[0]);
console.log(letters.sort())