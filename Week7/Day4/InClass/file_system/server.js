let fs = require('fs');
// fs.readFile('menu.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data);
// });

console.log("-----Restaurant Menu---------", '\n',);

fs.writeFile('test.txt', 'Hello World!', function (err) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Write operation complete.');
    }
});

//new content
let newContent = "This is a test";

//writeFile method
fs.writeFile('test.txt', newContent, function (err) {
    if (err) {
        console.error(err)
        return
    }
});

//readFile method
fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
});

let newerContent = "Test 2"

fs.appendFile('test.txt','\n' + newerContent + '\n', function (err) {
    if (err) {
        console.error(err)
        return
    }
});

fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
});
