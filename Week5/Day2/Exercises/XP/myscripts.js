let xhr = new XMLHttpRequest();

function requestData() {
    xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
    xhr.responseType = 'json';
    xhr.send();
}

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log('error')
        displayerror(xhr)
    } else {
        displayresult(xhr.response.data)
        // console.log(xhr.response.data)
    }
};

xhr.onprogress = function (event) {
    console.log('progress', xhr)
}

xhr.onerror = function (event) {
    console.log('error', xhr)
}
requestData()


let objects = []
const displayresult = (gifs) => {
    gifs.forEach (gif => {
        objects.push(gif)
        
    })
}
console.log(objects)