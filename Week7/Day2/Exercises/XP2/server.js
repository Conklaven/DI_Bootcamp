// const exp = require('express')
// const app = exp();

// app.listen(3000, () => {
//     console.log('listening on port 3000')
// })

// app.get(`/`, (req, res) => {
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
//     res.json(user)
//     res.end(console.log(user))
//     // res.send(user);
// })

// app.get('/:id', (req, res) => {
//     console.log(req.params)
//     const id = req.params
//     res.json(id)
// })

// part 3

const express = require('express');
const app = express();

app.use('/', express.static(__dirname+'/public'))

app.get('/', (req, res) => {
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
