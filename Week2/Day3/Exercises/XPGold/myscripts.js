// --------------------------Exercise 1 --------------------
let numbers = [123, 8409, 100053, 333333333, 7]

for ( let n of numbers) {
    if (n % 3 == 0) {
        console.log("true")
    } else {
        console.log("false")
    }
}
// --------------------------Exercise 2 --------------------
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  let guestName = prompt("Please enter your name").toLocaleLowerCase();

  if (guestName in guestList) {
      console.log(`Hi! I'm ${guestName}, and I'm from ${guestList[guestName]}.`)
  } else {
      console.log("Hi! I am a guest.")
  }

// --------------------------Exercise 3 --------------------
let age = [20,5,12,43,98,55];
let sum = 0;
for (let counter = 0; counter < age.length; counter ++) {
    sum += age[counter]
}
console.log(sum)
let newAge = age.sort(function(a, b){
    return a-b;
})
console.log(newAge[age.length - 1])