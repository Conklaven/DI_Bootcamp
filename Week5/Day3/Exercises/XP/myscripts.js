function compareToTen(test) {
    let newprom = new Promise(function (resolve, reject) {
        if (test > 10) {
            resolve(test)
        } else {
            reject(test)
        }

    })

    return newprom
}

compareToTen(15)
    .then(next => console.log(`SUCCESS ${next} is greater than 10`))
    .catch(err => console.log(`NO ${err} is NOT greater than 10`))
    .finally(() => console.log("done"));

compareToTen(8)
    .then(next => console.log(`SUCCESS ${next} is greater than 10`))
    .catch(err => console.log(`NO ${err} is NOT greater than 10`))
    .finally(() => console.log("done"));


// Part 2

function newPromise(test) {
    let newprom = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (test == 5) {
                resolve("success")
            } else {
                reject(" not a string")
            }
        }, 4000)

    })

    return newprom
}

newPromise(5)
    .then(next => console.log("success"))
    .catch(err => console.log("Ooops something went wrong"))
    .finally(() => console.log("done"));

newPromise(20)
    .then(next => console.log("success"))
    .catch(err => console.log("Ooops something went wrong"))
    .finally(() => console.log("done"));


// Part 3

Promise.resolve(3).then(function (value) {
    console.log(value);
}, function (value) {});

Promise.reject(new Error('Boo!')).then(function () {
}, function (error) {
    console.error(error);
});
