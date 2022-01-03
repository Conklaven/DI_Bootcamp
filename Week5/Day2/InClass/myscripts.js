// let divide = function (a, b) {
//     try {
//         if (a != 0 && b != 0) {
//             console.log(a / b);
//             return a / b;
//         } else {
//             console.log("error")
//             throw new Error("attempted to divide by zero");
//         }
//     } catch (e) {
//         console.log("error caught")

//     } finally {
//         console.log("done")
//     }
// }

// divide(0, 8)

// # AJAX
// - Make an HTTP request using the GET METHOD on this API:
// https://jsonplaceholder.typicode.com/users
// - Use the method onload, onprogress, onerror
// - If there is no error, display on the page the name, email, city of the 3 first users

let xhr = new XMLHttpRequest();

function requestData() {
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.responseType = 'json';
    xhr.send();
}

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log('error')
        displayerror(xhr)
    } else {
        displayUser(xhr.response)
    }
};

xhr.onprogress = function (event) {
    console.log('progress', xhr)
}

xhr.onerror = function (event) {
    console.log('error', xhr)
}

const displayUser = (users) => {
    let body = document.body
    for (let i = 0; i < 3; i++) {
        let name = users[i].name
        let email = users[i].email
        let city = users[i].address.city
        let p = document.createElement("p")
        let textname = document.createTextNode(`UserName is : ${name}`)
        let textemail = document.createTextNode(`Email is : ${email}`)
        let textcity = document.createTextNode(`City is : ${city}`)
        p.appendChild(textname)
        p.appendChild(textemail)
        p.appendChild(textcity)
        body.appendChild(p)
    }
}
requestData()