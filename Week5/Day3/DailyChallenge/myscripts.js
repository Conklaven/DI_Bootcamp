let arrayOfWords = ["b", "c", "a"]

function makeAllCaps(array) {
    let newprom = new Promise(function (resolve, reject) {
        if (array.length == array.length) {
            console.log(array)
            array = array.map(name => name.toUpperCase())
            resolve(array);
        } else {
            reject(array);
        }

    })

    return newprom
}

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))



function sortWords(e) {
    let newprom = new Promise(function (resolve, reject) {
        if (e.length == e.length) {
            resolve(e.sort());
        } else {
            reject(e);
        }

    })

    return newprom
}

// part 2

let morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`

let object;
function toJs() {
    let morseJS = new Promise(function (resolve, reject) {
        if (morse != "") {
            object = JSON.parse(morse)
            console.log(object)
            resolve(object)
        } else {
            reject(morse)
        }

    })

    return morseJS
}
toJs()

function toMorse(morseJS) {
    console.log(morseJS)
    let newMorse = new Promise(function (resolve, reject) {
        let ask = prompt("enter a word")
        if (morseJS != undefined) {
            let morseCode = []
            for (let i = 0; i < ask.length; i++) {
                morseCode += ask[i]
                let lower =ask[i].toLowerCase()
                console.log(object)
                console.log(object.find(lower))
            }
            console.log(morseCode)
            resolve(morseCode)
        } else {
            reject(morse)
        }

    })

    return morseJS
}

toMorse(object)
// joinWords()