let shoppingObj = {
    apple: 2,
    pears: 4,
    banana: 5,
    coupons: ["12$", "14$"],
    usernameBuyer: "John",
    isShampooAvailable: true,
}

console.log("how many apples do i need to buy ", shoppingObj["apple"])


// ------------------------------- Exercise ------------------------------------------
// 1. Add the lastname Smith to the object
// 2. Change the price of the pear, so it will contain the Taxes. 17%
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// Make sure that your code accept all type of strings,
// for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants

// let userCart = {
// 	username : "John",
// 	password: 1234,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5,
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8646466363,
// 		pear : 0.2
// 	}
// };

// userCart["lastName"] = "Smith";
// userCart["prices"]["pear"] *= 1.17;
// console.log(userCart);
// let choice = prompt("please choose either a banana, apple or pear").toLowerCase();
// console.log(choice);
// let priceForFruit = userCart["prices"][choice].toFixed(2);
// console.log( `The price for a ${choice} is $${priceForFruit}`);



// ------------------------------------------------- Part II -----------------------------------

// if (condition is true) {
//     we do something
// }
// else {
//     we do something else
// }


let bankAccount = 2000;
let farmAnimals = ["cow", "horse"];
let newAnimalPrice = 200;
if (bankAccount > 1500) {
    console.log("I'll Buy a Car")
}
else {
    console.log("I'll Buy a Bicycle")
};
console.log("out of conditions");

// ----------------------------------------Exercise -------------------------------

let userCart = {
	username : "Johnny",
	password: 12345,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};
// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"

if (userCart["isUserSignedIn"]) {
    alert(`Your Username is ${userCart["username"]} and your password is ${userCart["password"]}`)
} else {
    alert(`In order to continue, you need to sign in`)
}


// ---------------------- Next Exercise ---------------------------------

//  1. If the user is Johnny AND his password is 12345 - alert him "You are signed in"
//  2. If the user is Johnny OR his password is 12345 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in"

if (userCart["username"] == "Johnny" && userCart["password"] == 12345 ){
    alert(`You are Signed in`)
} else {
    alert(`One creditial is false`)
}
