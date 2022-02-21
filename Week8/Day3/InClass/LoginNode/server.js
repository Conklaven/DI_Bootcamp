const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const fs = require('fs');

const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

env.config();
const usersData = fs.readFileSync('./users.json');
const users =JSON.parse(usersData);
console.log(users);

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})

app.post('/register', (req, res) => {
    console.log(req.body);
    if(userExists(req.body.username)){
        res.json({message: 'username already exists'})
    }
    else{
    users.push(req.body);
    res.json({message: 'OK'})
    fs.writeFile('./users.json', JSON.stringify(users), err=>{
        if(err){
            console.log(err)
        }
        res.json({message: 'OK'})
    })
}
})

const userExists = (username) =>{
    return users.find(item => item.username ==username);
}