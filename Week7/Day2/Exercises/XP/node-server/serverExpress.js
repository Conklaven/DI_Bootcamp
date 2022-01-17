const exp = require('express')
const app = exp();
// const data = require('/')

app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.get(`/`, (req, res) => {
    res.write('<html><body><h1>this is an HTML tag</h1></body></html>');
    res.end()
    })