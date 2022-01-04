// # EXERCISE 1
// Create a function that takes in a single parameter
// and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either
// resolve or reject.
// If the input is a string, the promise resolves with that same string
// uppercased.
// If the input is anything but a string it rejects with that same input.
// Use `then` to repeat the string twice
// use `catch` to console.log the error
// finally call a function that console.log ("congratulation")

// function isString(string) {
//     let newprom = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             if (typeof string == "string") {
//                 resolve(string)
//             } else {
//                 reject(" not a string")
//             }
//         },5000)

//     })

//     return newprom
// }

// isString("this is a string")
//     .then(result => result.toUpperCase())
//     .then(next => console.log(next))
//     .catch(err => console.log(err))
//     .finally(() => console.log("congratulations"));


// let word = (()=>{
// fetch (`https://random-word-api.herokuapp.com/word?number=1000&swear=0`)
// .then(response => {
//     if (response.status === 200) {

//     return response.json()
//     } else {
//         throw new Error("error")
//     }
// })
// .then(result => {
//     console.log(result)
//     let num = Math.floor(Math.random() * (result.length))
//     console.log(num)
//      return result[num]
// })
// .then (array =>{
//     return array
// })
// .catch(err => {
//     console.error(err)
// })
// .finally(() => {console.log("done")
// })
// })();


// # Fetch
// # Exercise
// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// # Part II
// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page
// # Part III
// If the giphy API doesn't find a gif depending on the word (because the word can be strange),then instead of displaying an empty image, display a gif that says "404 ERROR"

let start = (() => {
    fetch(`http://random-word-api.herokuapp.com/word?number=1`)
        .then(result => {
            return result.json()
        })
        .then(run => {
            console.log(run[0])
            fetch(`https://api.giphy.com/v1/gifs/random?tag=%22${run[0]}%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
                .then(result => {
                    return result.json()
                })
                .then(gif => {
                    return gif.data.images.original.url
                })
                .then(url => {
                    let body = document.body
                    let div = document.createElement('img')
                    div.setAttribute('src', url)
                    body.appendChild(div)
                })
                .catch(err => {
                    let body = document.body
                    let div = document.createElement('img')
                    div.setAttribute('src', 'https://c.tenor.com/IHdlTRsmcS4AAAAC/404.gif')
                    body.appendChild(div)
                    
                })
                .finally(() => console.log('done'))
        })
})();