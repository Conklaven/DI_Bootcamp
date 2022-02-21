const express = require('express');
const env = require('dotenv');
const cors = require('cors');

const app = express();
env.config();
app.use(cors());
app.set('view engine', 'ejs')

// app.use('/', express.static(__dirname+'/public',))
app.get('/', (req, res) => {
res.render('index',)
})

app.get('/about', (req, res) => {
   
    res.render('about')
})

app.get('/shop', (req, res) => {
    const products = [
        {id: 1, name: 'Iphone', Price: 1000},
        {id: 2, name: 'Ipad', Price: 2000},
        {id: 3, name: 'Apple Watch', Price: 3000},
    ]
    res.render('shop', { 
        data: products
    });
})

app.listen(process.env.PORT,() => {
    console.log(`listening on port ${process.env.PORT}`)
})