let start;
let i = 1;

function beer() {
    start = Number(prompt(" How many bottles of beer do you have?"));
    console.log(`${start} bottles of beer on the wall`)
    console.log(`${start} bottles of beer`)
    console.log(`take ${i} down pass it around`)
    
    for (i = 1; i <= start; i++) {
        console.log(`${start - i} bottles of beer on the wall`)
        console.log(" ")
        console.log(`${start - i} bottles of beer on the wall`)
        console.log(`${start - i} bottles of beer`)
        console.log(`take ${i} down pass them around`)
    }
}
beer()