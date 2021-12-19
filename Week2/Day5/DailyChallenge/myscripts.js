

function beer() {
   let start = Number(prompt(" How many bottles of beer do you have?"));

    for (let i = 1; i <= start; i++) {
        if (i == 1) {
            console.log(`${start} bottles of beer on the wall`)
            console.log(`${start} bottles of beer`)
            console.log(`take ${i} down pass it around`)
            console.log(`${start - i} bottles of beer on the wall`)
            console.log(" ")
        } else if (i > 1 && i < start) {
            console.log(`${start - (i -1)} bottles of beer on the wall`)
            console.log(`${start - (i -1)} bottles of beer`)
            console.log(`take ${i} down pass them around`)
            console.log(`${start - i} bottles of beer on the wall`)
            console.log(" ")
        } else {
            console.log(`${start - (i -1)} bottle of beer on the wall`)
            console.log(`${start - (i -1)} bottle of beer`)
            console.log(`take ${i} down pass them around`)
            console.log(`No more bottles of beer on the wall`)
        }
    }
}
beer()