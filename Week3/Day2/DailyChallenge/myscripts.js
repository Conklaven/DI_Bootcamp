let wordForm = document.forms[0];
console.log(wordForm)
let submitLib = document.getElementById("button");
wordForm.addEventListener("submit", getWords);

function getWords(e) {
    e.preventDefault();
    console.log(e.target)
    let userNoun = e.target.elements.noun.value;
    console.log(userNoun)
    let userAdjective = e.target.elements.adjective.value;
    let userPerson = e.target.elements.person.value;
    let userVerb = e.target.elements.verb.value;
    let userPlace = e.target.elements.place.value;

    let div = document.getElementById("inputstory")
    let para = document.createElement("p")
    let text = document.createTextNode(` The children got on the ${userNoun}. They were so ${userAdjective}. It was the youngest one, ${userPerson}'s, first time ${userVerb} to ${userPlace}.`)
    console.log(text)
    para.appendChild(text)
    div.appendChild(para)
}