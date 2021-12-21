let inputArea = document.getElementById("text")
inputArea.addEventListener("keyup", verify)

function verify(e) {
    textInput = e.which
    console.log(textInput);
    var key_codes = [8,16,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];

    if (key_codes.indexOf(textInput) <= 0) {
        console.log("false")
        let clear = ""
        inputArea.value = clear
        alert("Please enter ONLY letters")
    }
}