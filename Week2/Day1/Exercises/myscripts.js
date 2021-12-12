// ------------------------------------Exercise 1 -----------------------------

let favoriteFood = "Chick Fil A";
let favoriteMeal = "dinner";
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

// ----------------------------------Exercise 2 part 1 -------------------------

let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
let watchedSeriesLength = watchedSeries.length;
let myWatchedSeries = `${watchedSeries[0]}, ${watchedSeries[1]} and ${watchedSeries[2]}`;
console.log (`I watched ${watchedSeriesLength} series : ${myWatchedSeries}`)

// --------------------------Exercise 2 part 2 go back and use indexof! ----------------
watchedSeries[watchedSeries.indexOf("the big bang theory")] = "friends"
let newSeries = "big brother";
watchedSeries.push(newSeries);
newSeries = "Survivor";
watchedSeries.splice(0,0,newSeries);
watchedSeries.splice(0,1,);
let series = watchedSeries[1];
let letter = series[2];
console.log(letter);
console.log(watchedSeries);

// ---------------------------------------Exercise 3 ----------------------

let celcius = 39;
let result = ((celcius/5) *9) + 32;
console.log(result);

// -----------------------------------Exercise 4 -----------------------------
// Example
// console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55 simple equation of 34+21
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23 simple equation after replaced 34 with 2
// Actual: 23

console.log(3 + 4 + '5');
// Prediction: 75 3+4 is a math equation and the 5 is a string so it will just add it at the end
// Actual: 75

// ---------------------------Exercise 5 -----------------------------------------


typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: number
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN it can't do subtraction of strings
// Actual: NaN

"1" + "3"
// Prediction: 13 it will read this as a string
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: Nan Can't do string subtractions
// Actual: NaN

99 * "hello"
// Prediction: NaN can't do string subtractions
// Actual: NaN

1 != 1
// Prediction: false
// Actual: falso

1 == "1"
// Prediction: true... since both have the same value when "" is removed 
// Actual: true

1 === "1"
// Prediction: false... this is looking for exact match of values
// Actual: false

// -----------------------Exercise 6 -------------------------------------------- 

5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0 ---5 goes into 10 exactly 2 times 
// Actual: 0

5 % 10
// Prediction: 5 ---- 10 can't go into 5 so all 5 is remaining
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction:  Blank  well not blank but two spaces 
// Actual:"  "

" " + 0
// Prediction:" 0"
// Actual: ' 0'

true + true
// Prediction: Nan
// Actual: 2 didn't see this coming... but I understand why now... true is 1 and false is 0

true + false
// Prediction: 1 --- see above
// Actual: 1

false + true
// Prediction: 1 ---see above
// Actual: 1

false - true
// Prediction: 1 --- see above 
// Actual: -1 not sure why

!true
// Prediction: false ---- ! means not so it just doesnt add up
// Actual:

3 - 4
// Prediction: -1 simple math
// Actual: -1

"Bob" - "bill"
// Prediction:Nan
// Actual: NaN