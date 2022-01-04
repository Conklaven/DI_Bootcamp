let arrayOfWords = ["b", "c", "a"]

function makeAllCaps(array) {
    let newprom = new Promise(function (resolve, reject) {
        if (array.length == array.length) {
            console.log(array)
            array = array.map(name => name.toUpperCase())
            resolve(array);
        } else {
            reject(array);
        }

    })

    return newprom
}

    makeAllCaps(arrayOfWords)
      .then(sortWords)
      .then((result) => console.log(result))
      .catch(error => console.log(error))


      
      function sortWords(e) {
        let newprom = new Promise(function (resolve, reject) {
            if (e.length == e.length) {
                resolve(e.sort());
            } else {
                reject(e);
            }
    
        })
    
        return newprom
    }