const http = require('http')
const user = {
    firstname: 'John',
    lastname: 'Doe'
}
const server = http.createServer((req, res) => {
res.setHeader("contentType", "application/json");

    res.end(JSON.stringify(user));

})
server.listen(8000, () => {
    console.log('listening on port 8000')
})