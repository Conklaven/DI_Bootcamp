const express = require('express');
const app = express();
const env = require('dotenv');
const cors = require('cors');

env.config();
app.use(cors());

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
})



app.get('/api/hello', (req, res) => {
    res.json(<h1>Hello From Express</h1>)
   })