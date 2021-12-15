let star = "*"
for ( let counter = 1; counter <=6; counter ++) {
    console.log(star.repeat(counter))
}

// No clue about nested for loops??? did this in class review...
let starNew = '';
let starLength = 6

for (let i =1; i <= starLength; i++){
    for (let j = 1; j <= i; j++){
        starNew += "*";
    }
    console.log(starNew);
    starNew = '';
}
