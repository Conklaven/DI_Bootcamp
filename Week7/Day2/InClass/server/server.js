// const http = require (`http`);

// const server = http.createServer((req, res) => {
//     console.log( `I am lsiting to a rquest`)
//     console.log(req.method)
//     console.log(req.url)
//     console.log(req.headers)
//     res.end(`hello this is my first web server`)

// })

// server.listen(5000, () => {
//     console.log('listening on port 5000')
// })

// express

// const exp = require('express')
// const app = exp();
// const data = require('./data.js')

// app.listen(5000, () => {
//     console.log('listening on port 5000')
// })

// app.get(`/api/products`, (req, res) => {
//     // res.json([
//     //     {name: `iphone`, price: 800},
//     //     {name: `android`, price: 500},
//     //     {name:`ipad`, price:1000}
//     // ])
//     res.json(data.products)
// })

// app.get('/api/products/:productId', (req,res) => {
//     console.log(req.params)
//     const id = Number(req.params.productId)
//     const product = data.products.find(item => {
//         return item.id == id
//     })
//     res.json(product)
// })


// ROBOTS
const exp = require('express')
const app = exp();
const robot = require('./data.js')

app.listen(5000, () => {
    console.log('listening on port 5000')
})

app.get(`/api/users`, (req, res) => {

    robot.myRobots()
    .then (data => res.json(data))
})

// BAD CODE???
// app.get('/api/users/:userId', (req,res) => {
//     console.log(req.params)
//     robot.myRobots()
//     .then (result => {const id = Number(req.params.userId)
//         const product = result.myRobots.find(users => {
//             return users.id == id
//         })
//         res.json(product)})
// })

// get static page

app.use('/', exp.static(__dirname+'/public'))

// to get form data from method get
app.get('/login', (req, res) => {
    console.log(req.query)
    res.json({message: 'ok from get'});
})

// to get form from post
app.use(exp.urlencoded())
app.use(exp.json())
app.post('/login', (req, res) => {
    console.log(req.body)
    res.json({message: 'ok from post'});
})