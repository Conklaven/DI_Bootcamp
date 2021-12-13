// -------------------Exercise 1 --------------------------
let x = 10
let y = 25

if (x > y) {
	alert(`x is the bigger number`)
} else {
	alert(`y is the bigger number`)
}

// -------------------Exercise 2 --------------------------

let newDog = "Chihuahua";
let newDogLength = newDog.length;
console.log(newDogLength);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog == "Chihuahua") {
	alert(`I love Chihuahuas, it’s my favorite dog breed`)
} else {
	console.log(`I don't care, I prefer cats`)
}

// -------------------Exercise 3 --------------------------

let number = prompt(`Please enter a number`)
if (number % 2 == 0) {
	alert(`${number} is an even number`)
} else {
	alert(`${number} is an odd number`)
}

// -------------------Exercise 4 --------------------------

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
let numberOfUsers = users.length;
let remainingNumber = numberOfUsers - 2;
if (numberOfUsers <= 0) {
	console.log(`No one is Online`)
} else if (numberOfUsers <= 1) {
	console.log(`${users[0]} is Online`)
} else if (numberOfUsers <= 2) {
	console.log(`${users[0]} and ${users[1]} is Online`)
} else if (numberOfUsers >= 3) {
	console.log(`${users[0]} and ${users[1]} and ${remainingNumber} other users are Online`)
}
