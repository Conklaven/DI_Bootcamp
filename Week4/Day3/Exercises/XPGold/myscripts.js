//  let result = [1, 2, 3].map(num => {
//     if (typeof num === 'number') return num * 2;
//     return ;
//   });

//   console.log(result);
//   // 2 4 6
// exercise 2
//  let result2 = [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
//   );
//   //8
//   console.log(result2);

// exercise 3
//   const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// // 1,0, 2,1,4,2,5,3,8,4,9,5,
// //alert each number
// //2,4,8,10,16,18
// console.log(newArray);

// exercise 4

const array = [[1],[2],[3],[[[4]]],[[[5]]]]
let [a, b, c, d, e] = array
let newArray = [a[0],b[0],c[0],d[0][0],e[0][0]]
console.log(newArray);


const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
let newGreeting = [].concat.apply([],greeting);
console.log(newGreeting);
let newString = newGreeting.join(" ");
console.log(newString)

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
// let untrapped = array.prototype.flat([], trapped);
// console.log(untrapped)
let untrapped = trapped.reduce((acc, curr) => {
return acc + curr
},0)
console.log(untrapped)