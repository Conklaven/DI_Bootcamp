const gameInfo = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
let usernames = []
gameInfo.forEach(function (element) {
    usernames.push((element.username) + "!")
})
console.log(usernames)
let results = []
gameInfo.forEach((elem) => elem.score > 5 ? results.push(elem.username) : console.log("hi"))
console.log(results)

let scores = 0
gameInfo.forEach(function(e) {
    scores = scores + (e.score)
})
console.log(scores)