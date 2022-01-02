// . In the HTML file, create a form containing 2 inputs, username and password. The ACTION SHOULD BE index.html WITH GET REQUEST
// 2. In the JS file, validate the data before processing it
// * Username must be trimed, minimum 4 characters and start with a first letter uppercased
// * Password shoudn't be empty
// 3. If the values are not right, don't submit the form, and set the background color  to red
// 4. If the values are right, display the queries key value pair, on the page


// let newForm = document.getElementById("formOne")
// console.log("hi")
// newForm.addEventListener("submit", formSub)
// console.log(newForm.username.value[0])

// function formSub(e) {
//     e.preventDefault()
//     if (e.target.elements.username.value[0] === e.target.elements.username.value[0].toUpperCase() && e.target.elements.username.value.length >= 4 && e.target.elements.password.value.length > 0) {
//         console.log("correct");
//     } else {
//         console.log("wrong")
//         e.target.style.backgroundColor = "red"
//     }
// }

// let searchObj = new URLSearchParams(window.location.search);
// console.log(searchObj)
// for (const [key, value] of searchObj.entries()) {
//     let body = document.body;
//     let newDiv = document.createElement("div")
//     let paragraph = document.createElement("p")
//     paragraph.textContent = `${key}: ${value}`
//     body.appendChild(newDiv)
//     newDiv.appendChild(paragraph)
// }
    // # Exercise with JSON
    // 1. Parse this JSON string into a JS object
    // 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
    // 3. Create another variable to stringify the JS object.
    // Console.log the variable
    // 4.  Then use pretty print (look at the lesson)

    let jsonString = `
    {
        "quiz": {
            "sport": {
                "q1": {
                    "question": "Which one is correct team name in NBA?",
                    "options": [
                        "New York Bulls",
                        "Los Angeles Kings",
                        "Golden State Warriros",
                        "Huston Rocket"
                    ],
                    "answer": "Huston Rocket"
                }
            },
            "maths": {
                "q1": {
                    "question": "5 + 7 = ?",
                    "options": [
                        10,
                        11,
                        12,
                        13
                    ],
                    "answer": 12
                },
                "q2": {
                    "question": "12 - 8 = ?",
                    "options": [
                        1,
                        2,
                        3,
                        4
                    ],
                    "answer": 4
                }
            }
        }
    }`

    let toObj = JSON.parse(jsonString)
    console.log(toObj)
    let first = toObj.quiz.sport.q1.options
    let [a,b,c,d] = first
    let test = a + ' ' + b + ' ' + c + ' ' + d
    console.log(test)
    toJSON = JSON.stringify(test, null, 2)
    console.log(toJSON)
    console.log(typeof toJSON)