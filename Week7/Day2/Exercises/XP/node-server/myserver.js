// EXERCISE 1

const http = require('http')
const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>this is my frist response</h1></body></html>');
    res.write('<html><body><h2>this is my Second response</h2></body></html>');
    res.write('<html><body><h3>this is my Third response</h3></body></html>');
    res.end()

})

server.listen(3000, () => {
    console.log('listening on port 3000')
})