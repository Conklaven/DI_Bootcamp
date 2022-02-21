const express = require('express');
const app = express();

// post
app.use(express.urlencoded())
app.use(express.json())


app.listen(4000, ()=>{
    console.log('listening on port 4000');
})
app.use('/', express.static(__dirname+'/public'));

// direct welcome to about page
app.get('/welcome', (req, res) =>{
    res.sendFile(__dirname+'/public/about.html')
})

// redirect to different pages
app.get('/products', (req, res) =>{
    res.redirect('/welcome')

})

// route same as below but comnined
// app.route('/login', (req, res)
//     .get('/login', (req, res) =>{

//     })
//     .post('/login', (req, res) =>{

//     })
// )

// status codes
app.get('/items', (req, res) =>{
    res.status(404).send( 'Page not found');
})

// // post
// also see line 5
app.post('/login', (req, res) =>{
    console.log (req.body);
})

app.get('/login', (req, res) =>{
    // for strings and html code
    // res.send("testing testing testing")
    // for sending an javascript object
    // res.json({user: 'Jacob'})
    // example image
    res.send('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big_Red_WKU_Mascot_Image.jpg/330px-Big_Red_WKU_Mascot_Image.jpg">')
    // get the paramaters after /login
    console.log (req.query)
})

app.get('/login/:id', (req, res) => {
    console.log (req.params)
    res.send(`hello ${req.params.id}`)
})