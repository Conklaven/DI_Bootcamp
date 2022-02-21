const express = require('express');
const app = express();
const DB = require('./modules/db')
const knex = require('knex')

const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
        host : '127.0.0.1',
        port : 5432,
        user : 'postgres',
        password : 'Natalie613',
        database : 'dvdrental'
    }
});
app.use('/', express.static(__dirname+'/public'));

app.listen(3001, () => {
    console.log('listening on port 3001')
})

app.get('/countries', (req, res) => {
db('country')
// DB.getCountries(db)
.select('country_id', 'country')
// .where({country_id : 40})
.then(data => {
    res.json(data);
})
.catch(err => {
    console.log(err)
})
})


