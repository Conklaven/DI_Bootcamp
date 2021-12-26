// //1st exercise
// //You need to guess what will be console logged, and explain why


// let username = "John";

// function checkName (){
// 	console.log("In the function",username); //john
// 	username += "Smith";
// 	console.log("Still in the function",username); //johmnsmith
// }

// console.log("before the function", username); // john

// checkName()

// console.log("after the function", username); //johnsmith



// //2ns exercise
// //You need to guess what will be console logged, and explain why


// let username = "John";

// function checkName (){
// 	let username = "Sarah";
// 	console.log("In the function",username); //sarah
// 	username += "Smith";
// 	console.log("Still in the function",username); //sarahsmith
// }

// console.log("before the function", username); //john

// checkName()

// console.log("after the function", username); //john

// const employees = [
// 	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
// 	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
// ]

// for (data of employees) {
//     let {name, email, phone} = data
//     console.log(name)
// console.log(email)
// console.log(phone)
// }

// 1. Greet the user (ie. using an argument),
// * first by using function declarations
// * then function expression,
// * then arrow function
// let btn= document.getElementById("btn")
// btn.addEventListener("click", usergreet)
// function usergreet(){
//     alert("Hello User")
// }

// btn.addEventListener("click", function(){
//     alert("hello User")
// })

// btn.addEventListener("click", () => alert("hello User"))

// Using this let classmates = ["Josh", "Lily", "Sophie", "Mark"];
// Use for each and arrow function, to add a & after Sophie and a ! after all the other names
// the result is ['Josh!', 'Lily!', 'Sophie&', 'Mark!']
// Try to use tenary operator

let classmates = ["Josh", "Lily", "Sophie", "Mark"];

classmates.forEach((element, index,array) => element == "Sophie" ? array[index]+= "&": array[index] += "!")

// console.log(classmates[name])
// // classmates[name] == "Sophie" ? classmates[name]+ "&" : classmates[name]+ "!"
console.log(classmates)

