const createUsers = (arr) => {
    const root = document.getElementById('root');
    arr.forEach((item, i) => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = item.name;
        div.appendChild(p);
        root.appendChild(div);
    });
}
const getData = () => {
    fetch('http://localhost:5000/api/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        createUsers(data);
    })
}

const sendData = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // // get request:
    // fetch(`http://localhost:5000/login?user=${username}&pass=${password}`)
    // .then (response => response.json())
    // .then(data => {
    //     console.log(data);
    // })
    const objData = {
        username,
        password
    }
    fetch(`http://localhost:5000/login`, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objData),
    })
    .then (response => response.json())
    .then(data => {
        console.log(data);
    })
}
