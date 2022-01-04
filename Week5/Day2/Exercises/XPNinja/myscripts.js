let words = ["cat", "dog", "baseball", "football"]

let process = (() => {
    let deletebtn = document.getElementById("deleteAll")
    deletebtn.addEventListener("click", deleteimages)
    let form = document.getElementById("form");
    form.addEventListener("submit", getData)

})();
let body = document.body
let container = document.createElement('div')
body.appendChild(container)
// container.style.gridTemplateColumns = 'repeat(3, 1fr)'
container.style.display = "flex"
container.style.gridGap = "20px"
container.style.flexWrap = "wrap"

function deleteimages() {
    let images = document.querySelectorAll(".images")
    images.forEach(function (image) {
        image.remove()

    })
}



function getData(e) {

    e.preventDefault();
    let category = document.getElementById("category").value
    let num = Math.floor(Math.random() * 3);
    requestData(category, num)

}


function requestData(a, b) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${a}&offset=${b}&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('error')
            displayerror(xhr)
        } else {
            // console.log(xhr.response.data[0].embed_url)
            displayresult(xhr.response.data[0].images.original.url)
            console.log(xhr.response)
        }
    };

    xhr.onprogress = function (event) {
        console.log('progress', xhr)
    }

    xhr.onerror = function (event) {
        console.log('error', xhr)
    }
}







function displayresult(event) {
    let imagecontain = document.createElement('div')
    let imagebox = document.createElement('img')
    let deletebutton = document.createElement('div');
    btn = document.createElement('button');
    deletebutton.appendChild(btn)
    btn.innerHTML = "Delete"
    imagebox.style.height = "200px"
    btn.addEventListener('click', function () {
        imagecontain.remove()
    })
    imagebox.src = event
    console.log(imagebox)
    imagecontain.appendChild(imagebox)
    imagecontain.classList.add("images")
    container.appendChild(imagecontain)
    imagecontain.appendChild(deletebutton)

}