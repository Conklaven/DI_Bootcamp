// function setObj(person) {
//     person.age = 25; 
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ? name alex, age 25
// console.log(personObj2); // -> ? name alex, age 25

// function setObj(person) {
// 	person = {
//         name: 'John',
//         age: 50
//     };

//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ? alex, 30
// console.log(personObj2); // -> ? john, 50

// Exercise Self Invoking Function
// 1. Add in your html file a div with an id of container

// (function () {
//      let newDiv = document.createElement('div');
//      document.body.appendChild(newDiv);
//      newDiv.setAttribute("id", "container");
// }());

// (function (userName){
//     let div = document.getElementById("container");
//     let sent = document.createTextNode(` The users name is ${userName}`);
//     div.appendChild(sent);
// }("Jacob"));
// 2. Create a self invoking function that takes one parameter the name of the user
// 3. When invoked, the function adds the name of the user in a sentence in the div

// 1. Create a function named `starWars` that takes no parameter.
// function starWars() {
//     let characters = [];

//     function createCharacter(firstName, lastName = "smith") {
//         characters.push(firstName, lastName) 

//     }

//     function displayCharacter() {
//         document.body.appendChild(characters)
//     }
//     createCharacter("yoda","");
//     createCharacter("obi-one", "kenobi");
//     createCharacter("darth", "vader");
//     console.log(characters)
//     displayCharacter();
// }
// starWars();


// 2. The function should declare a variable `characters` equal to an empty array
// 3. In the `startWars` function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// and push it to the `characters` array.
// 4. In the `startWars` function, create a function named `displayCharacter` should display in the body the fullname of the characters,
// 5. Call the `createCharacter` function a few times inside the starWars function
// and call the `displayCharacter` function once
// Second Part
function starWars(spaceShip) {
    let characters = [];

    function createCharacter(firstName, lastName = "smith") {
        characters.push(`${firstName} ${lastName}`) 

    }

    function displayCharacter() {
        let body =document.body
        body.append(characters, spaceShip)

    }
    createCharacter("yoda",);
    createCharacter("obi-one", "kenobi");
    createCharacter("Luke", "Skywalker");
    console.log(characters)
    displayCharacter();
}
starWars("Millenium Falcon");
starWars("X-wing");
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `displayCharacter` function should now display in the body the fullname and spaceship
// of the characters
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens?