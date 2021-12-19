//1. The div DOM node?

// 2. The ul DOM node?

// 3. The second li (with Pete)?

// console.log(document.body.firstElementChild)
// console.log(document.body.children[0])

// console.log(document.body.firstElementChild.nextElementSibling)
// console.log(document.body.lastElementChild.previousElementSibling)
// console.log(document.body.children[1])

// let newStyle = document.body.children[1].children[1];
// console.log(document.body.firstElementChild.nextElementSibling.children[1].textContent);
// console.log(document.body.lastElementChild.previousElementSibling.children[1].textContent);
// let liThird = document.body.children[1].children[1];

console.log(document.getElementById("container"));

console.log(document.getElementsByClassName("list"));

let person = [
	{ 
       username : "John",
	   isSignIn : true
   },
   { 
       username : "Sarah",
	   isSignIn : false
   }
]
console.log(person.username)
let newName = person
console.log(newName)