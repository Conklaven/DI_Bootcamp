// exercise 1

// will be sent to the URL bar

// exercise 2

// will be sent to the network tab


// exercise 3 ----------------------

let marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
}

let converted = JSON.stringify(marioGame)
console.log(converted)
let back = JSON.stringify(marioGame, null, 2)
console.log(back)