function operator(operator) {
    document.getElementById("result").innerHTML += operator
}

function number(num) {
    document.getElementById("result").innerHTML += num
}

//function that evaluates the digit and return result
function equal() {
    let x = document.getElementById("result").textContent
    console.log(x)
    let y = eval(x)
    document.getElementById("result").textContent = y
}

// function clear1() {
//     document.getElementById("result").textContent = " ";
// }