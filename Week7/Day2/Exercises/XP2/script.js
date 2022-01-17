const getData = () => {
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => {
        res.send(data);
    })
}

getData()