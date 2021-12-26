// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a); //3
// }

//#2
var a = 0;

function q2() {
    a = 5;
}

function q22() {
    alert(a); //5
}


//#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a); // hello
// }

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a); // test
// }

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a); //5
// }
// alert(a); //2


// ------------------------exercise 2 ---------------------------------

// function winBattle() {
//     return true;
// }

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// experiencePoints()

// const experiencePoints = function () {
//     winBattle() ? 10 : 1;
//   };
  
//   experiencePoints();


// ----------------------------exercise 3 ---------------------------

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((element, index) => console.log("#", (index +1), "choice is", element))

// ----------------------------exercise 4 ---------------------------
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];

color.forEach(function (element, index) {
    let colorName = element;
    let position = index + 1;
    if (colorName == color[0]) {
        console.log(`${position}${ordinal[1]} choice is ${colorName}`)
    } else if (colorName == color[1]) {
        console.log(`${position}${ordinal[2]} choice is ${colorName}`)
    } else if (colorName == color[2]) {
        console.log(`${position}${ordinal[3]} choice is ${colorName}`)
    } else if (colorName == color[3] || colorName == color[4] || colorName == color[5] || colorName == color[6]) {
        console.log(`${position}${ordinal[0]} choice is ${colorName}`)
    }
})

// ----------------------------exercise 5 ---------------------------
// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// ----------------------------exercise 6 ---------------------------
let bankAmount = 5000
let tax = 1.17
let details = ["+200", "-100", "+146", "+167", "-2900"]

details.forEach((element, index, array) => element <0 ? array[index] = element * tax: "" );
console.log(details);
details.forEach((element, index,array) => bankAmount += array[index])
console.log(bankAmount)
