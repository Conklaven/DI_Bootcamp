// -------------------Exercise 1 --------------------------
let older = 1985;
let younger = 2000;
let targetYear = ((younger - older) * 2) + older;
console.log(targetYear);

// -------------------Exercise 2 --------------------------

let zipCode = prompt("Please Enter your Zip Code")
let zipCodeType = typeof zipCode
let whiteSpace = zipCode.indexOf(' ')
console.log(zipCodeType)

if (zipCode > 9999 && zipCode < 100000 && whiteSpace < 0) {
	console.log("Success")
} else {
	console.log("fail")
}
// -------------------Exercise 3 --------------------------


// -------------------Exercise 4 --------------------------

