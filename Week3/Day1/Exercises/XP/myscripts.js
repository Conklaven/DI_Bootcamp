// Exercise 1

// elem.setAttribute(name, value)

// document.getElementById("navBar").setAttribute("navBar", "socialNetworkNavigation");
// console.log(document.body.children[0]);

// let newli = document.createElement("li");
// let newText = document.createTextNode("Logout");
// let list = document.body.children[0].children[0];
// list.appendChild(newli);
// newli.appendChild(newText);


// Exercise 2

// let nameChangeOne = document.body.children[1].lastElementChild;
// nameChangeOne.textContent = "Richard"

// let nameChangeTwo = document.getElementsByClassName("list");
// console.log(nameChangeTwo)
// // nameChangetwo.textContent = "Jacob"
// for (let item of nameChangeTwo) {
//     item.firstElementChild.textContent = "Jacob"
// }

// let newLi = document.createElement("li")
// let newText = document.createTextNode("Hey Students");
// for (let addOn of nameChangeTwo){
//     newLi.appendChild(newText)
//     addOn.appendChild(newLi)
// }

// let parentElem = document.body.children[2]
// console.log(parentElem)
// let childElem = document.body.children[2].children[1]
// console.log(childElem)
// parentElem.removeChild(childElem)


// Exercise 3

let changeDiv = document.body.children[0];
console.log(changeDiv)
changeDiv.style.backgroundColor = "lightblue"    
changeDiv.style.padding = "10px"
let removeChild = document.body.children[1].children[0];
let removePar = document.body.children[1];
let pete = document.body.children[1].children[1];

removePar.removeChild(removeChild);
pete.style.border = "1px solid blue"
body.style.fontSize = "20px"

