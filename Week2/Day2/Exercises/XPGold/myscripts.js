// -------------------Exercise 1 --------------------------

let language = prompt("what language do you speak?").toLowerCase();

switch (language) {
	case "french":
		console.log("Bonjour")
		break;
	case "english":
		console.log("Hello")
		break;
	case "hebrew":
		console.log("Shalom")
		break;
	default:
		console.log("01110011 01101111 01110010 01110010 01111001")
		break;
}

// -------------------Exercise 2 --------------------------

let grade = prompt("what grade did you recieve? (please use only numbers)")
if (grade > 90) {
	console.log("A")
} else if (grade <= 90 && grade > 80) {
	console.log("B")
} else if (grade <= 80 && grade >= 70){
	console.log("C")
} else {
	console.log("D")
}

// -------------------Exercise 3 --------------------------

let verb = prompt("Please finish this sentence with ONE WORD: My favorite thing to do is...")
let verbLength = verb.length
let verbIndex = verb.indexOf("ing")
if (verbLength >= 3 && verbIndex > 0) {
	console.log(verb + "ly")
} else if (verbLength >= 3 && verbIndex < 0){
	console.log(verb + "ing")
} else {
	console.log(verb)
}

// -------------------Exercise 4 --------------------------

