// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject
// 2. The 2nd function, receives a noun - if the noun is less than 3 letters - reject
// 3. The 3rd function, receives a city - if the city doesn't start with an uppercase letter -> reject
// 4. The 4st function, receives a verb (finishing with "ing") - if it doesn't end with "ing" -> reject
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"

function personInput(inputOne, inputTwo) {
    return new Promise(function (resolve, reject) {
        if (typeof inputOne === "string" && typeof inputTwo === "string") {
            let result = [inputOne, inputTwo]
            resolve(result);
        } else {
            let result = [inputOne, inputTwo]
            reject(result);
        }
    })
}

function cityInput(city) {
    return new Promise(function (resolve, reject) {
        if (city[0] === city[0].toUpperCase()) {
            resolve(city)
        } else {
            reject(`please user uppercase first letter`)
        }
    })
}

function nounInput(noun) {
    return new Promise(function (resolve, reject) {
        if (noun.length > 3) {
            resolve(noun)
        } else {
            reject(`needs to be longer than 3 letters`)
        }
    })
}

function verbInput(verb) {
    return new Promise(function (resolve, reject) {
        if (verb.endsWith("ing")) {
            resolve(verb)
        } else {
            reject(`needs to end with ing`)
        }
    })
}


// async function checkPromises() {
//     let people = await personInput(prompt("name a famous person"), prompt("name another famous person"));
//     let city = await cityInput(prompt("name a city"));
//     let noun = await nounInput(prompt("name a noun"));
//     let verb = await verbInput(prompt("name a verb"));
//     return `${people[0]} and ${people[1]} lives in ${city} with a ${noun} and loves ${verb}`;
// }

Promise.all([personInput(prompt("name a famous person"), prompt("name another famous person")),cityInput(prompt("name a city")),nounInput(prompt("name a noun")),verbInput(prompt("name a verb"))]).then(values => {console.log(`${values[0][0]} and ${values[0][1]} lives in ${values[1]} with a ${values[2]} and loves ${values[3]}`)})

// })
// checkPromises()
//     .then(result => console.log(result))
//     .catch(err => console.error(err))
//     .finally(() => console.log("done"))