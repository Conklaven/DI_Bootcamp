function playTheGame() {
    let answer = confirm("Would you like to play the game?")
    let userNumber;
    let numInt;
    let computerNumber;

    if (answer == true) {
        userNumber = prompt("Please enter a number between 0-10")
        numInt = Number(userNumber)
        if ((numInt != userNumber)) {
            alert("Sorry, Not a Number, Goodbye")
        } else if (numInt < 0 || numInt > 10) {
            alert("Sorry it's not a good number, Goodbye")
        } else {
            let computerNumber = (Math.random() * (10 - 0) + 0).toFixed();
            test(userNumber, computerNumber);
        }
    } else {
        alert("No Problem, Goodbye")
    }
}

function test(userNumber, computerNumber) {
    console.log(computerNumber)
    let over;
    let i = 2
    do {
        if (userNumber == computerNumber) {
            alert("WINNER")
            over = "true"
        } else if (userNumber > computerNumber && i <= 3) {
            alert("Your Number is bigger then the computer's, guess again")
            userNumber = prompt("guess again")
            i = i +1;
        } else if ( userNumber < computerNumber && i <= 3) {
            alert("Your Number is smaller then the computer's, guess again")
            userNumber = prompt("guess again")
            i = i +1;
        } else {
            alert("you have exceeded the number of chances. You have lost")
            break
        }
    } 
    while (over != "true");
}