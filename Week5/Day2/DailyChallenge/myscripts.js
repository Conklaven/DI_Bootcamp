let deletebtn = document.getElementById("deleteAll")
deletebtn.addEventListener("click", deleteimages)
function deleteimages() {
    let images =document.querySelectorAll(".images")
    console.log(images)
    images.forEach(function(image) {
        image.remove()

    })
}


let xhr = new XMLHttpRequest();
let form = document.getElementById("form");
form.addEventListener("submit", getData)
let input = ""
let num;
function getData(e) {
    e.preventDefault();
    let category = document.getElementById("category")
    input = category.value
    num = Math.floor(Math.random() * 50);
    console.log()
    requestData()

}
console.log(getData)

function requestData() {
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${input}&offset=${num}&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    xhr.responseType = 'json';
    xhr.send();
}

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log('error')
        displayerror(xhr)
    } else {
        // console.log(xhr.response.data[0].embed_url)
        displayresult(xhr.response.data[0].images.original.url)
        // console.log(xhr.response.data)
    }
};

xhr.onprogress = function (event) {
    console.log('progress', xhr)
}

xhr.onerror = function (event) {
    console.log('error', xhr)
}

let body = document.body
let container = document.createElement('div')
body.appendChild(container)
// container.style.gridTemplateColumns = 'repeat(3, 1fr)'
container.style.display = "flex"
container.style.gridGap = "20px"
container.style.flexWrap = "wrap"


function displayresult(event) {
    let imagecontain = document.createElement('div')
    let imagebox = document.createElement('img')
    let deletebutton = document.createElement('div');
    btn = document.createElement('button');
    deletebutton.appendChild(btn)
    btn.innerHTML = ("Delete")
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