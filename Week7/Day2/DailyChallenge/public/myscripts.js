const sendData = () => {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // get request:
    fetch(`http://localhost:5000/formData?email=${email}&message=${message}`)
    .then (response => response.json())
    .then(data => {
        console.log(`this is the data: ${data}`);
        res.send(data);
    })
}