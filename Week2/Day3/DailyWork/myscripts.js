// for (let counter = 0; counter <= 15; counter ++) {
//     if (counter % 2 == 0) {
//         console.log(`${counter} is an even number`)
//     } else {
//         console.log(`${counter} is an odd number`)
//     }
// }

// let fruits = ["apple", "banana", "pear", "melon"];

// for (let counter = 0; counter < fruits.length; counter++){
//     fruits[counter] = fruits[counter] +"s";
// }
// console.log(fruits)


let users = [
	{
		username:"John",
		lastName : "Smith"
	},
	{
		username:"Tom",
		lastName : "Smith"
	},
	{
		username:"Lea",
		lastName : "Smith"
	}
];

// 1. console.log the username of each user

for ( let name of users) {
    console.log(name["username"])
}