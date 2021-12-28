const studentsFootball = [
	{name: 'Rich', score: 33}, 
 	{name: 'Peter', score: 55}
];

// Create a new array of objects, containing the name, score and isAboveAverage key
// if the students has a score bigger that 50, the key isAboveAverage will be true

let studentsNew = studentsFootball.map((elem) => {
    let isAboveAverage =elem.score > 50 ? true : false;
    return {
        name: elem.name,
        score: elem.score,
        isAboveAverage,
    }
})
console.log(studentsNew);

let famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]

let names = famousPeople.map((elem) => elem.name)
let jobs = famousPeople.map((elem) => {
    return {
        name: elem.name,
        job: elem.job,
    }
})
console.log(names)
console.log(jobs)
jobs.forEach(element => {
    let newDiv = document.createElement("div")
    newDiv.setAttribute("id", "container")
    let body = document.body;
    let text = document.createTextNode(` The persons name is ${element.name} who is a ${element.job}`)
    newDiv.appendChild(text)
    body.append(newDiv)
    
});
//1. Use the map method, to create a new array and push the name of the people
// 2. Use the map method, to create a new array and to push an object in the new array.
// Each object should contain the name of the actor, and it's job
// 3. BONUS: Use for each to add each of thoses names on the DOM (in a paragraph, appended to a div with an id "container")

// const numbers = [1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12, 13,14,15]

// let even = numbers.filter((e) => e%2 === 0 && e%3 === 0 || e%2 === 1 && e%5 === 0)
// console.log(even)

// ## Exercise 1:  create a new array that filters only the positive value
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let positive = numbers.filter((e) => e >= 0)
console.log(positive)
// ## Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation.
// Use filter() to filter the array of characters below
const characters = [
   { name: 'James T. Kirk', series: ['Star Trek'] },
   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
];

let nextGen = characters.filter((element) => element.series.includes("Star Trek: The Next Generation"))
console.log(nextGen)
// // ## Exercise 3 NOT MANDATORY - send me the result by slack
// // Use the filter method to create an array without duplicates. The result should be ["blue","red","yellow"]
// const colors = ["blue", "red", "blue", "yellow"];
// let noDup = colors.filter((elem, index) => elem != elem)
// console.log(noDup) 

// ## Exercise 1
const students = [
 	{name: 'Rich', score: 33}, 
 	{name: 'Peter', score: 55},
 	{name: 'John', score: 75}
];
// Find the sum of the score of the students using reduce
let sum = students.reduce((a,b) => {
    return a +b.score

}, 0)
console.log(sum)

// ## Exercise 2
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by chaning map and reduce
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

let count = voters.reduce((acc,eleme)=> {
    if (eleme.voted == true) {
        return ++acc;
    } else  {
        return acc

    }
},0)
console.log(count)