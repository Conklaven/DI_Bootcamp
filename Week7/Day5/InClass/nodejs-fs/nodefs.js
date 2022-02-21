const fs = require('fs');


//read
fs.readFile('./data', (err, data) => {
    if (err){
        console.error(err);
    }else{
        console.log(data.toString());
    }
})