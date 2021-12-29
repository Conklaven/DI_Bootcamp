// ## Exercise1
// Pass this object {name: 'Harry Potter',house: 'Gryfindor',goodstudent : false}
// as an argument of the getDetails function.
// Destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents)


function getDetails({name, house, goodstudent}) {
	console.log(`${name} is in the ${house} house. Are they a good student? ${goodstudent}`)
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

// ## Exercise2
// Pass this object
// {name: 'Hermione Granger', 
//  house: 'Gryfindor', 
//  friend :  {
// 	friendName : 'Harry Potter', 
// 	age : 20
// 	}
// }
// as an argument of the getMoreDetails function.
// Destructure the object in the parameter (ie. you should have 4 parameters : name, house , friendName and age)
function getMoreDetails({name,house,friend : {friendName, age} }) {
	console.log(`Students name is ${name} in the ${house} house, and they are friends with ${friendName} who is ${age} years old`)
}

getMoreDetails({name: 'Hermione Granger', 
				house: 'Gryfindor', 
				friend :  {
					friendName : 'Harry Potter', age : 20
				}
				})
// ## Exercise3
// Pass this object
const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}
// as an argument of the getElonMuskDetails function.
getElonMuskDetails(elonPerson)
// Destructure the object in the parameter and console.log
function getElonMuskDetails({first, last, housesLocation : [a,b], twitter, company, houses : {amount, value}}) {

// - his first name, last name, the 2 cities where he owns an appartment, and the value of the houses
console.log(`his name is ${first} ${last} and he has ${amount} homes in ${a} and ${b} worth a combined total of ${value} Dollars`)
}


// Exercise
// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
function tv ( tvBrand, tvChannel = 1, tvVolume = 50) {
    this.brand = tvBrand
    this.channel = tvChannel
    this.volume = tvVolume
    this.volumeUP = function (){
        this.volume += 1
    }
    this.volumeDown = function (){
        this.volume -= 1
    }
}
// 2) Add methods to increase and decrease volume. The methods, when called, will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV, console.log the brand of the TV and call the methods increase and decrease volume

let lgTV = new tv("LG")
console.log(lgTV)
lgTV.volumeUP()
console.log(lgTV.volume)
lgTV.volumeDown()
console.log(lgTV.volume)